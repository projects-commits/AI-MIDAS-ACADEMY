import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const outputDir = path.join(root, "private-generator", "output", "framework-9-passos");
const lessonsDir = path.join(outputDir, "02-lessons");

const lessonSpecs = [
  {
    number: 1,
    step: "Psicologia",
    title: "Passo 1: Psicologia do jogo",
    slug: "passo-1-psicologia-do-jogo",
    focus: "motivacao, concentracao, decisao sob pressao, treinador, equipa e torcida"
  },
  {
    number: 2,
    step: "Cultura",
    title: "Passo 2: Cultura, identidade e rivalidade",
    slug: "passo-2-cultura-identidade-e-rivalidade",
    focus: "cultura do clube, cultura do pais, rivalidade, impacto social e fatores socioeconomicos"
  },
  {
    number: 3,
    step: "Padroes",
    title: "Passo 3: Padroes tacticos, estatisticos e de mercado",
    slug: "passo-3-padroes-tacticos-estatisticos-e-de-mercado",
    focus: "padroes de equipa, jogadores, xG, performance historica, odds e comportamento contra adversarios similares"
  },
  {
    number: 4,
    step: "Crenca",
    title: "Passo 4: Crenca, filosofia e principios de jogo",
    slug: "passo-4-crenca-filosofia-e-principios-de-jogo",
    focus: "filosofia de jogo, valores do clube, supersticao, ideologia e narrativas que podem enviesar a leitura"
  },
  {
    number: 5,
    step: "Comportamento",
    title: "Passo 5: Comportamento em campo e comportamento do mercado",
    slug: "passo-5-comportamento-em-campo-e-comportamento-do-mercado",
    focus: "comportamento dos jogadores, equipa tecnica, arbitragem, odd movement, liquidez e mercado descentralizado"
  },
  {
    number: 6,
    step: "Energia",
    title: "Passo 6: Energia, ritmo e momento competitivo",
    slug: "passo-6-energia-ritmo-e-momento-competitivo",
    focus: "fadiga, intensidade, coesao, ritmo, recuperacao e momentos de tensao ou relaxamento"
  },
  {
    number: 7,
    step: "Ambiente",
    title: "Passo 7: Ambiente fisico, institucional e informacional",
    slug: "passo-7-ambiente-fisico-institucional-e-informacional",
    focus: "campo, clima, estadio, horario, eventos externos, direcao, equipa tecnica e ambiente interno do clube"
  },
  {
    number: 8,
    step: "Observador",
    title: "Passo 8: Observador, vieses e qualidade da interpretacao",
    slug: "passo-8-observador-vieses-e-qualidade-da-interpretacao",
    focus: "experiencia do analista, ponto de vista, preconceitos, vies de confirmacao e auditoria da tese"
  },
  {
    number: 9,
    step: "Objeto",
    title: "Passo 9: Objeto do jogo, regras e tecnologia",
    slug: "passo-9-objeto-do-jogo-regras-e-tecnologia",
    focus: "regras, VAR, goal-line technology, implementos do jogo e impacto da tecnologia no ritmo e decisao"
  }
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
    .replaceAll("privisoes", "previsoes")
    .replaceAll("Objecto", "Objeto")
    .replaceAll("torcida", "torcida")
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

function compactSourceForArchitecture(source) {
  return source
    .replace(/\*\*/g, "")
    .split(/\n/)
    .filter((line) => line.trim())
    .slice(0, 220)
    .join("\n");
}

function sourceForStep(source, spec) {
  const escaped = spec.step
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`###\\s*(?:\\d+\\.?\\s*)?(?:\\*\\*)?\\s*${escaped}|###\\s*(?:\\d+\\.?\\s*)?(?:\\*\\*)?\\s*${spec.step}`, "i");
  const lines = source.split(/\n/);
  const start = lines.findIndex((line) =>
    line
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .match(pattern)
  );

  if (start === -1) {
    return source.slice(0, 4000);
  }

  const rest = lines.slice(start + 1);
  const next = rest.findIndex((line) => /^###\s*/.test(line));
  const selected = lines.slice(start, next === -1 ? start + 80 : start + 1 + next);
  return selected.join("\n").slice(0, 6000);
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
  const apiKey = env.ATLASCLOUD_API_KEY || env.atlas_api_key;
  const model = env.model || "qwen/qwen3.6-plus";

  if (!apiKey) {
    throw new Error("Atlas Cloud API key is missing. Set atlas_api_key or ATLASCLOUD_API_KEY in .env.");
  }

  const source = normalizeSource(await readText("framework_9_passos.md"));
  await writeOutput(path.join(outputDir, "00-source-normalized.md"), source);

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
    maxTokens: 3000,
    prompt: [
      courseArchitectPrompt,
      "Important constraint: create exactly 9 lessons, one for each source step. Keep the course practical and publishable as an MVP course.",
      "Use the exact public course title: Framework de 9 Passos para Analisar um Jogo de Futebol.",
      "Use primary category Football Research and secondary categories Market Intelligence, Probability & Modeling, Risk & Execution.",
      "Set minimum word count target around 6500 to 9000 words, not 25000.",
      "## Fixed lesson specs",
      JSON.stringify(lessonSpecs, null, 2),
      "## Raw course source compacted",
      compactSourceForArchitecture(source)
    ].join("\n\n")
  });
  console.log("01 course-architect complete.");

  const lessonOutputs = [];
  for (const spec of lessonSpecs) {
    const filePath = path.join(lessonsDir, `${String(spec.number).padStart(2, "0")}-${spec.slug}.md`);
    const lesson = await cachedQwen({
      apiKey,
      model,
      title: `lesson-writer-${spec.number}`,
      filePath,
      maxTokens: 3200,
      prompt: [
        lessonWriterPrompt,
        `Write only lesson ${spec.number}: ${spec.title}.`,
        "Target length: 750 to 1100 words.",
        "Must include: Title, Core idea, Mental model, What it is, Why it matters, Mechanism, Applied football or market example, Blackboard breakdown, Failure mode, Checklist, Practice exercise, Key takeaway.",
        "Do not write intro or outro for other lessons.",
        "Do not use betting hype or promise language.",
        "## Course architecture",
        architecture,
        "## Lesson spec",
        JSON.stringify(spec, null, 2),
        "## Relevant source notes",
        sourceForStep(source, spec)
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
    maxTokens: 3500,
    prompt: [
      visualPrompt,
      "Create concise visual learning blocks for all 9 lessons. Keep it implementation-friendly for existing components: BlackboardPanel, FormulaBlock, MarketExample, FailureModeCard, DecisionChecklist.",
      "## Course architecture",
      architecture,
      "## Lesson drafts",
      lessons.slice(0, 18000)
    ].join("\n\n")
  });
  console.log("03 visual-learning-designer complete.");

  const mdxPackage = await cachedQwen({
    apiKey,
    model,
    title: "mdx-packager",
    filePath: path.join(outputDir, "04-mdx-packager.md"),
    maxTokens: 3500,
    prompt: [
      mdxPrompt,
      "Package proposal only. Do not output complete lesson prose again.",
      "Use the existing schema with course metadata plus separate courseLessons MDX content files if needed.",
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
    maxTokens: 2600,
    prompt: [qaPrompt, "## Course architecture", architecture, "## Lesson drafts", lessons.slice(0, 22000), "## Visual blocks", visuals].join("\n\n")
  });
  console.log("05 academy-qa-auditor complete.");

  const brand = await cachedQwen({
    apiKey,
    model,
    title: "ai-midas-brand-guardian",
    filePath: path.join(outputDir, "06-ai-midas-brand-guardian.md"),
    maxTokens: 2400,
    prompt: [
      "# AI MIDAS Brand Guardian Prompt",
      "Review the generated course for brand fit. Flag exact issues and produce final correction rules.",
      "No emojis. No tips language. No false certainty. No casual betting tone. Keep football as price, probability, risk, context and research.",
      "## QA audit",
      qa,
      "## Course architecture",
      architecture,
      "## Lesson drafts",
      lessons.slice(0, 18000)
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
