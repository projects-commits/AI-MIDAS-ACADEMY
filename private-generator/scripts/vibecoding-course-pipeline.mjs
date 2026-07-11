import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const inputDir = path.join(root, "curso_vibecoding");
const outputDir = path.join(root, "private-generator", "output", "vibe-coding");
const lessonsDir = path.join(outputDir, "02-lessons");

const fileNames = [
  "1_git.txt",
  "2_ide.txt",
  "3.dados.txt",
  "4.seguranca.txt",
  "5_prompts.txt",
  "6_agents.txt",
  "7_polymarket.txt",
  "8_poisson.txt",
  "9_elorating.txt",
  "10_backtest.txt",
  "11_skills.txt"
];

function parseEnv(raw) {
  const env = {};
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      continue;
    }
    const index = trimmed.indexOf("=");
    env[trimmed.slice(0, index).trim()] = trimmed.slice(index + 1).trim();
  }
  return env;
}

async function readText(relativePath) {
  return readFile(path.join(root, relativePath), "utf8");
}

async function writeOutput(filePath, content) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, content, "utf8");
}

function repairMojibake(text) {
  if (!/[ÃÂ]/.test(text)) {
    return text;
  }
  try {
    return Buffer.from(text, "latin1").toString("utf8");
  } catch {
    return text;
  }
}

function normalizeSource(text) {
  return repairMojibake(text)
    .replaceAll("\u00a0", " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function hasMojibake(text) {
  return /Ã|Â/.test(text);
}

async function readCleanCache(filePath) {
  try {
    const info = await stat(filePath);
    if (info.size < 700) {
      return null;
    }
    const content = await readFile(filePath, "utf8");
    if (hasMojibake(content)) {
      return null;
    }
    return content;
  } catch {
    return null;
  }
}

async function readAllInputs() {
  const parts = [];
  for (const fileName of fileNames) {
    const raw = await readFile(path.join(inputDir, fileName), "utf8");
    const clean = normalizeSource(raw);
    const moduleNumber = fileName.match(/^(\d+)/)?.[1] ?? "";
    const title = fileName.replace(/^\d+[_\.]/, "").replace(/\.txt$/, "");
    parts.push(`## Modulo ${moduleNumber}: ${title}\n\n${clean.slice(0, 4000)}`);
  }
  return parts.join("\n\n---\n\n");
}

function compactSourceForArchitecture(source) {
  return source
    .replace(/\*\*/g, "")
    .split(/\n/)
    .filter((line) => line.trim())
    .slice(0, 350)
    .join("\n");
}

function sourceForStep(fullSource, spec) {
  // spec.step is the module theme keyword
  const escaped = spec.step
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`###\\s*(?:\\d+\\.?\\s*)?(?:\\*\\*)?\\s*${escaped}|###\\s*(?:\\d+\\.?\\s*)?(?:\\*\\*)?\\s*${spec.step}`, "i");
  const lines = fullSource.split(/\n/);
  const start = lines.findIndex((line) =>
    line
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .match(pattern)
  );

  if (start === -1) {
    return fullSource.slice(0, 6000);
  }

  const rest = lines.slice(start + 1);
  const next = rest.findIndex((line) => /^###\s*/.test(line));
  const selected = lines.slice(start, next === -1 ? start + 120 : start + 1 + next);
  return selected.join("\n").slice(0, 8000);
}

async function callQwen({ apiKey, model, title, prompt, maxTokens = 2500, attempts = 2 }) {
  let lastError = null;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch("https://api.atlascloud.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model,
          messages: [
            {
              role: "system",
              content:
                "You are an AI MIDAS ACADEMY private generation agent. Write in Portuguese with a serious, analytical, practical tone. No emojis. No tips language. No guaranteed-profit framing. Treat football through price, probability, risk, context, and research."
            },
            {
              role: "user",
              content: prompt
            }
          ],
          temperature: 0.35,
          max_tokens: maxTokens
        })
      });

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`${title} failed with ${response.status}: ${errorBody.slice(0, 350)}`);
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;
      if (!content) {
        throw new Error(`${title} returned no content.`);
      }

      return repairMojibake(content.trim());
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        const delay = 2000 * attempt;
        console.log(`${title} attempt ${attempt} failed; retrying in ${delay}ms.`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError;
}

async function cachedQwen({ filePath, ...options }) {
  const cached = await readCleanCache(filePath);
  if (cached) {
    console.log(`${path.basename(filePath)} cached.`);
    return cached;
  }

  const content = await callQwen(options);
  await writeOutput(filePath, content);
  return content;
}

async function main() {
  const env = parseEnv(await readText(".env"));
  const apiKey = env.atlas_api_key || env.ATLASCLOUD_API_KEY;
  const model = env.model || "qwen/qwen3.6-plus";

  if (!apiKey) {
    throw new Error("Atlas Cloud API key is missing. Set atlas_api_key or ATLASCLOUD_API_KEY in .env.");
  }

  const fullSource = await readAllInputs();
  await writeOutput(path.join(outputDir, "00-source-normalized.md"), fullSource);

  const courseArchitectPrompt = await readText("private-generator/prompts/course-architect.prompt.md");
  const lessonWriterPrompt = await readText("private-generator/prompts/lesson-writer.prompt.md");
  const visualPrompt = await readText("private-generator/prompts/visual-learning.prompt.md");
  const mdxPrompt = await readText("private-generator/prompts/mdx-packager.prompt.md");
  const qaPrompt = await readText("private-generator/prompts/qa-auditor.prompt.md");

  console.log(`Running chunked Qwen pipeline with model ${model}.`);

  const architecture = await cachedQwen({
    apiKey,
    model,
    title: "course-architect",
    filePath: path.join(outputDir, "01-course-architect.md"),
    maxTokens: 3500,
    prompt: [
      courseArchitectPrompt,
      "Important constraint: create exactly 11 lessons, one for each source module. The course must be deeper and more extensive than the Framework 9 Passos course. Minimum word count target: 12000 to 15000 words total.",
      "Use the exact public course title: Vibe Coding para Construir Ferramentas de Research de Futebol.",
      "Use primary category Football Research and secondary categories Market Intelligence, Probability & Modeling, Risk & Execution, AI Systems.",
      "The course teaches how to prototype research tools for football using AI assistance (vibe coding), while maintaining research-grade discipline. It covers: Git/GitHub setup, IDE setup, data sources, prompt security, prompt engineering, agent frameworks, Polymarket data extraction, Poisson models, Elo rating models, backtesting, and reusable skills.",
      "Each lesson must imply mechanism, applied example, failure mode, checklist, and exercise. The tone must be research-grade, serious, analytical, direct, practical. No hype. No guaranteed profit.",
      "## Raw course source compacted",
      compactSourceForArchitecture(fullSource)
    ].join("\n\n")
  });
  console.log("01 course-architect complete.");

  // Derive lesson specs from architecture for targeted lesson generation
  // We define fixed specs matching the 11 modules to ensure coverage
  const lessonSpecs = [
    { number: 1, step: "Git", title: "Ambiente de Versionamento: Git e GitHub", slug: "ambiente-versionamento-git-github", focus: "configurar git, criar conta github, versionamento para research" },
    { number: 2, step: "IDE", title: "IDE e Ambiente de Desenvolvimento", slug: "ide-ambiente-desenvolvimento", focus: "instalar IDE, configurar extensoes, ambiente de trabalho" },
    { number: 3, step: "Dados", title: "Fontes de Dados para Analise de Futebol", slug: "fontes-dados-analise-futebol", focus: "repositorios github, APIs publicas, dados historicos e tempo real" },
    { number: 4, step: "Seguranca", title: "Seguranca nos Prompts e Agentes de IA", slug: "seguranca-prompts-agentes-ia", focus: "controle execucao, isolamento, gestao segredos, verificacao dependencias, prompt injection" },
    { number: 5, step: "Prompts", title: "Engenharia de Prompts e Skills", slug: "engenharia-prompts-skills", focus: "system prompt, contexto, skills, estilos de prompt, chain-of-thought" },
    { number: 6, step: "Agents", title: "Agents e Frameworks de Agents", slug: "agents-frameworks", focus: "crewai, langgraph, agno, autogen, comparativo, quando usar cada" },
    { number: 7, step: "Polymarket", title: "Dados de Mercado: Extracao da Polymarket", slug: "extracao-dados-polymarket", focus: "API gamma, eventos, probabilidades, odds, integracao" },
    { number: 8, step: "Poisson", title: "Modelo de Distribuicao de Poisson", slug: "modelo-distribuicao-poisson", focus: "xG, expectativa gol, matriz poisson, probabilidades placar" },
    { number: 9, step: "Elo", title: "Modelo de Elo Rating", slug: "modelo-elo-rating", focus: "ranking forca, fator K, expectativa resultado, atualizacao rating" },
    { number: 10, step: "Backtest", title: "Backtest e Validacao", slug: "backtest-validacao", focus: "testar modelo historicamente, metricas profit, drawdown, ajustes" },
    { number: 11, step: "Skills", title: "Criar Skills Reutilizaveis", slug: "criar-skills-reutilizaveis", focus: "estrutura skill, customizacao, repositorios oficiais, produtividade" }
  ];

  const lessonOutputs = [];
  for (const spec of lessonSpecs) {
    const filePath = path.join(lessonsDir, `${String(spec.number).padStart(2, "0")}-${spec.slug}.md`);
    const lesson = await cachedQwen({
      apiKey,
      model,
      title: `lesson-writer-${spec.number}`,
      filePath,
      maxTokens: 4000,
      prompt: [
        lessonWriterPrompt,
        `Write only lesson ${spec.number}: ${spec.title}.`,
        "Target length: 1000 to 1500 words. This course is more extensive than the 9-step framework, so each lesson should be deeper.",
        "Must include: Title, Core idea, Mental model, What it is, Why it matters, Mechanism, Applied football or market example, Blackboard breakdown, Failure mode, Checklist, Practice exercise, Key takeaway.",
        "Do not write intro or outro for other lessons.",
        "Do not use betting hype or promise language.",
        "## Course architecture",
        architecture,
        "## Lesson spec",
        JSON.stringify(spec, null, 2),
        "## Relevant source notes",
        sourceForStep(fullSource, spec)
      ].join("\n\n")
    });
    lessonOutputs.push(`## Lesson ${spec.number}: ${spec.title}\n\n${lesson}`);
    console.log(`02 lesson ${spec.number} complete.`);
  }

  const lessons = lessonOutputs.join("\n\n---\n\n");
  await writeOutput(path.join(outputDir, "02-lesson-writer.md"), lessons);

  const visuals = await cachedQwen({
    apiKey,
    model,
    title: "visual-learning-designer",
    filePath: path.join(outputDir, "03-visual-learning-designer.md"),
    maxTokens: 4000,
    prompt: [
      visualPrompt,
      "Create concise visual learning blocks for all 11 lessons. Keep it implementation-friendly for existing components: BlackboardPanel, FormulaBlock, MarketExample, FailureModeCard, DecisionChecklist, CodeLens, MermaidDiagram.",
      "## Course architecture",
      architecture,
      "## Lesson drafts",
      lessons.slice(0, 22000)
    ].join("\n\n")
  });
  console.log("03 visual-learning-designer complete.");

  const mdxPackage = await cachedQwen({
    apiKey,
    model,
    title: "mdx-packager",
    filePath: path.join(outputDir, "04-mdx-packager.md"),
    maxTokens: 4000,
    prompt: [
      mdxPrompt,
      "Package proposal only. Do not output complete lesson prose again.",
      "Use the existing schema with course metadata plus separate courseLessons MDX content files if needed.",
      "This course has 11 lessons across 3 tracks.",
      "## Course architecture",
      architecture,
      "## Visual blocks",
      visuals
    ].join("\n\n")
  });
  console.log("04 mdx-packager complete.");

  const qa = await cachedQwen({
    apiKey,
    model,
    title: "academy-qa-auditor",
    filePath: path.join(outputDir, "05-academy-qa-auditor.md"),
    maxTokens: 3000,
    prompt: [qaPrompt, "## Course architecture", architecture, "## Lesson drafts", lessons.slice(0, 28000), "## Visual blocks", visuals].join("\n\n")
  });
  console.log("05 academy-qa-auditor complete.");

  const brand = await cachedQwen({
    apiKey,
    model,
    title: "ai-midas-brand-guardian",
    filePath: path.join(outputDir, "06-ai-midas-brand-guardian.md"),
    maxTokens: 2800,
    prompt: [
      "# AI MIDAS Brand Guardian Prompt",
      "Review the generated course for brand fit. Flag exact issues and produce final correction rules.",
      "No emojis. No tips language. No false certainty. No casual betting tone. Keep football as price, probability, risk, context and research.",
      "## QA audit",
      qa,
      "## Course architecture",
      architecture,
      "## Lesson drafts",
      lessons.slice(0, 22000)
    ].join("\n\n")
  });
  console.log("06 ai-midas-brand-guardian complete.");

  await writeOutput(
    path.join(outputDir, "PIPELINE_SUMMARY.md"),
    [
      "# Pipeline Summary",
      "",
      `Model: ${model}`,
      "Order executed:",
      "1. course-architect",
      "2. lesson-writer",
      "3. visual-learning-designer",
      "4. mdx-packager",
      "5. academy-qa-auditor",
      "6. ai-midas-brand-guardian",
      "",
      "Public course implementation should now be generated from these artifacts."
    ].join("\n")
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
