import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const courseSlug = "framework-de-9-passos-para-analisar-um-jogo-de-futebol";
const courseId = "course-framework-9-passos";
const sourceDir = path.join(root, "private-generator", "output", "framework-9-passos", "02-lessons");
const courseDir = path.join(root, "src", "content", "courses", courseSlug);
const lessonDir = path.join(root, "src", "content", "courseLessons", courseSlug);
const now = "2026-05-27T00:00:00.000Z";

const modules = [
  {
    id: "module-1",
    title: "Ler o contexto antes do preco",
    slug: "ler-contexto-antes-do-preco",
    summary: "Psicologia, cultura e padroes como camada inicial de pesquisa antes de qualquer tese operacional.",
    lessonIds: ["lesson-1", "lesson-2", "lesson-3"],
    learningGoals: [
      "Separar contexto verificavel de narrativa sedutora",
      "Mapear padroes de equipa, clube e mercado antes de estimar probabilidade"
    ]
  },
  {
    id: "module-2",
    title: "Traduzir sinais em comportamento observavel",
    slug: "traduzir-sinais-em-comportamento-observavel",
    summary: "Crenca, comportamento, energia e ambiente como mecanismos que alteram execucao, ritmo e risco.",
    lessonIds: ["lesson-4", "lesson-5", "lesson-6", "lesson-7"],
    learningGoals: [
      "Transformar fatores qualitativos em indicadores auditaveis",
      "Ligar comportamento em campo a comportamento de mercado sem inventar certeza"
    ]
  },
  {
    id: "module-3",
    title: "Auditar o observador e fechar a decisao",
    slug: "auditar-observador-e-fechar-decisao",
    summary: "Vieses, regras, tecnologia e limites do objeto analisado antes da decisao final.",
    lessonIds: ["lesson-8", "lesson-9"],
    learningGoals: [
      "Reconhecer o analista como parte do sistema de erro",
      "Fechar a analise com criterios de invalidacao, risco e revisao"
    ]
  }
];

const lessonSpecs = [
  {
    id: "lesson-1",
    moduleId: "module-1",
    title: "Passo 1: Psicologia do jogo",
    slug: "passo-1-psicologia-do-jogo",
    file: "01-passo-1-psicologia-do-jogo.md",
    readingMinutes: 10,
    level: "foundation",
    concepts: ["cognitive load", "pressure threshold", "decision latency"],
    glossaryTerms: ["risk", "implied-probability", "market-price"],
    formula: ["Pressure adjustment", "Context impact = stressor x observability x timing"],
    objective: "Transformar fatores psicologicos em indicadores observaveis sem cair em narrativa psicologica solta.",
    failure: "Tratar psicologia como causa unica do resultado.",
    checklist: [
      "O estressor foi identificado com fonte verificavel",
      "Existe indicador observavel em campo",
      "O ajuste altera apenas o range, nao substitui a base estatistica",
      "A tese tem criterio claro de invalidacao"
    ]
  },
  {
    id: "lesson-2",
    moduleId: "module-1",
    title: "Passo 2: Cultura, identidade e rivalidade",
    slug: "passo-2-cultura-identidade-e-rivalidade",
    file: "02-passo-2-cultura-identidade-e-rivalidade.md",
    readingMinutes: 12,
    level: "foundation",
    concepts: ["club identity", "rivalry pressure", "context weighting"],
    glossaryTerms: ["risk", "market-price", "edge"],
    formula: ["Cultural weight", "Relevant culture = persistence x matchup fit x market neglect"],
    objective: "Ler cultura e rivalidade como pressao contextual persistente, nao como folclore.",
    failure: "Usar historia do clube como justificacao para qualquer expectativa.",
    checklist: [
      "A rivalidade muda comportamento ou apenas aumenta ruido",
      "A cultura do clube tem manifestacao tactica observavel",
      "O mercado ja precificou o fator emocional",
      "A comparacao historica usa contextos equivalentes"
    ]
  },
  {
    id: "lesson-3",
    moduleId: "module-1",
    title: "Passo 3: Padroes tacticos, estatisticos e de mercado",
    slug: "passo-3-padroes-tacticos-estatisticos-e-de-mercado",
    file: "03-passo-3-padroes-tacticos-estatisticos-e-de-mercado.md",
    readingMinutes: 11,
    level: "intermediate",
    concepts: ["pattern recognition", "sample quality", "market comparison"],
    glossaryTerms: ["odds", "liquidity", "market-price"],
    formula: ["Pattern test", "Useful pattern = repeatability x opponent similarity x price relevance"],
    objective: "Distinguir padroes reais de ruido estatistico e ligar a leitura ao preco de mercado.",
    failure: "Confundir uma sequencia recente com capacidade estrutural.",
    checklist: [
      "A amostra tem adversarios comparaveis",
      "O padrao aparece em metricas e video",
      "O mercado historico foi consultado",
      "O padrao tem impacto provavel no mercado analisado"
    ]
  },
  {
    id: "lesson-4",
    moduleId: "module-2",
    title: "Passo 4: Crenca, filosofia e principios de jogo",
    slug: "passo-4-crenca-filosofia-e-principios-de-jogo",
    file: "04-passo-4-crenca-filosofia-e-principios-de-jogo.md",
    readingMinutes: 11,
    level: "foundation",
    concepts: ["team philosophy", "belief system", "tactical constraint"],
    glossaryTerms: ["risk", "edge", "market-price"],
    formula: ["Belief filter", "Operational belief = stated principle x repeated behavior x pressure test"],
    objective: "Converter filosofia de jogo em restricoes e preferencias tacticas observaveis.",
    failure: "Confundir discurso publico com comportamento competitivo real.",
    checklist: [
      "A filosofia aparece em varios jogos",
      "A equipa preserva o principio sob pressao",
      "O treinador ajusta ou insiste no plano",
      "A crenca aumenta ou reduz risco no matchup"
    ]
  },
  {
    id: "lesson-5",
    moduleId: "module-2",
    title: "Passo 5: Comportamento em campo e comportamento do mercado",
    slug: "passo-5-comportamento-em-campo-e-comportamento-do-mercado",
    file: "05-passo-5-comportamento-em-campo-e-comportamento-do-mercado.md",
    readingMinutes: 11,
    level: "intermediate",
    concepts: ["behavioral signal", "odds movement", "market disagreement"],
    glossaryTerms: ["odds", "liquidity", "prediction-market"],
    formula: ["Market behavior", "Signal strength = movement x liquidity x timing x context fit"],
    objective: "Ligar comportamento competitivo e movimento de odds sem tratar movimento como verdade isolada.",
    failure: "Achar que toda odd que mexe contem informacao superior.",
    checklist: [
      "A movimentacao tem liquidez suficiente",
      "O timing coincide com informacao relevante",
      "A leitura de campo suporta ou contradiz o mercado",
      "A divergencia foi documentada antes da decisao"
    ]
  },
  {
    id: "lesson-6",
    moduleId: "module-2",
    title: "Passo 6: Energia, ritmo e momento competitivo",
    slug: "passo-6-energia-ritmo-e-momento-competitivo",
    file: "06-passo-6-energia-ritmo-e-momento-competitivo.md",
    readingMinutes: 11,
    level: "foundation",
    concepts: ["match tempo", "fatigue", "intensity decay"],
    glossaryTerms: ["risk", "drawdown", "stake"],
    formula: ["Energy decay", "Tempo risk = intensity x fatigue x recovery gap"],
    objective: "Ler energia como ritmo, fadiga e capacidade de sustentar execucao, nao como sensacao vaga.",
    failure: "Transformar impressao visual de intensidade em conclusao sem medicao.",
    checklist: [
      "A intensidade foi comparada com a linha base",
      "O calendario explica parte da fadiga",
      "A queda de ritmo aparece em zonas especificas",
      "A tese considera substituicoes e gestao de esforco"
    ]
  },
  {
    id: "lesson-7",
    moduleId: "module-2",
    title: "Passo 7: Ambiente fisico, institucional e informacional",
    slug: "passo-7-ambiente-fisico-institucional-e-informacional",
    file: "07-passo-7-ambiente-fisico-institucional-e-informacional.md",
    readingMinutes: 12,
    level: "foundation",
    concepts: ["environmental constraint", "club context", "information shock"],
    glossaryTerms: ["risk", "liquidity", "market-price"],
    formula: ["Environment impact", "Environment risk = physical constraint + institutional pressure + information shock"],
    objective: "Mapear campo, clima, horario, estadio e ambiente interno como restricoes que mudam execucao.",
    failure: "Usar ambiente como explicacao generica depois do resultado.",
    checklist: [
      "O fator ambiental muda um mecanismo do jogo",
      "A fonte e temporalmente relevante",
      "O impacto foi separado de opiniao publica",
      "A tese tem limite se a informacao for absorvida pelo preco"
    ]
  },
  {
    id: "lesson-8",
    moduleId: "module-3",
    title: "Passo 8: Observador, vieses e qualidade da interpretacao",
    slug: "passo-8-observador-vieses-e-qualidade-da-interpretacao",
    file: "08-passo-8-observador-vieses-e-qualidade-da-interpretacao.md",
    readingMinutes: 11,
    level: "intermediate",
    concepts: ["observer bias", "confirmation bias", "audit trail"],
    glossaryTerms: ["edge", "expected-value", "risk"],
    formula: ["Bias audit", "Decision quality = evidence quality - observer distortion"],
    objective: "Tratar o proprio analista como fonte de erro e criar uma auditoria da interpretacao.",
    failure: "Procurar dados apenas para defender uma tese ja escolhida.",
    checklist: [
      "A tese contraria foi escrita",
      "As fontes foram classificadas por confiabilidade",
      "O analista separou observacao de inferencia",
      "A decisao pode ser revista sem depender do resultado"
    ]
  },
  {
    id: "lesson-9",
    moduleId: "module-3",
    title: "Passo 9: Objeto do jogo, regras e tecnologia",
    slug: "passo-9-objeto-do-jogo-regras-e-tecnologia",
    file: "09-passo-9-objeto-do-jogo-regras-e-tecnologia.md",
    readingMinutes: 11,
    level: "intermediate",
    concepts: ["rules context", "VAR impact", "game object"],
    glossaryTerms: ["risk", "implied-probability", "expected-value"],
    formula: ["Rule sensitivity", "Rule impact = event frequency x decision leverage x market awareness"],
    objective: "Entender como regras, VAR e tecnologia alteram ritmo, incerteza e distribuicao de eventos.",
    failure: "Ignorar que o objeto analisado muda quando regras, tecnologia ou criterios de arbitragem mudam.",
    checklist: [
      "A regra afeta diretamente o mercado analisado",
      "O criterio de arbitragem da competicao foi observado",
      "O impacto do VAR foi tratado como distribuicao, nao como opiniao",
      "A conclusao final respeita o limite do objeto"
    ]
  }
];

function json(value) {
  return JSON.stringify(value, null, 2);
}

function prop(value) {
  return `{${JSON.stringify(value)}}`;
}

function cleanLessonMarkdown(markdown, title) {
  const headingMap = new Map([
    ["Core idea", "Ideia central"],
    ["Mental model", "Modelo mental"],
    ["What it is", "O que e"],
    ["Why it matters", "Porque importa"],
    ["Mechanism", "Mecanismo"],
    ["Applied football or market example", "Exemplo aplicado de futebol e mercado"],
    ["Blackboard breakdown", "Quadro de raciocinio"],
    ["Failure mode", "Modo de falha"],
    ["Checklist", "Checklist"],
    ["Practice exercise", "Exercicio pratico"],
    ["Key takeaway", "Sintese operacional"]
  ]);

  let body = markdown
    .replace(/^# .+\r?\n+/, "")
    .replace(/\*\*1\.\s*Title\*\*\r?\n[^\n]+\r?\n+/i, "")
    .replace(/- \[ \] /g, "- ")
    .replace(/\*\*(\d+)\.\s*([^*]+)\*\*/g, (_, _number, rawTitle) => {
      const mapped = headingMap.get(rawTitle.trim()) ?? rawTitle.trim();
      return `## ${mapped}`;
    })
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return `# ${title}\n\n${body}`;
}

function lessonFrontmatter(spec) {
  return {
    id: `course-framework-9-passos-${spec.id}`,
    courseId,
    courseSlug,
    lessonId: spec.id,
    moduleId: spec.moduleId,
    title: spec.title,
    slug: spec.slug,
    lessonNumber: Number(spec.id.replace("lesson-", "")),
    readingMinutes: spec.readingMinutes,
    status: "published",
    createdAt: now,
    updatedAt: now
  };
}

function lessonMetadata(spec, index) {
  return {
    id: spec.id,
    courseId,
    moduleId: spec.moduleId,
    title: spec.title,
    slug: spec.slug,
    lessonNumber: index + 1,
    readingMinutes: spec.readingMinutes,
    level: spec.level,
    concepts: spec.concepts,
    components: ["BlackboardPanel", "FormulaBlock", "MarketExample", "FailureModeCard", "DecisionChecklist"],
    learningObjectives: [spec.objective],
    failureModes: [spec.failure],
    exercises: [`Aplicar o ${spec.title.toLowerCase()} a um jogo real e documentar evidencia, incerteza e criterio de invalidacao.`],
    checklist: spec.checklist,
    glossaryTerms: spec.glossaryTerms,
    formulas: [
      {
        label: spec.formula[0],
        value: spec.formula[1]
      }
    ],
    previousLesson: index === 0 ? null : lessonSpecs[index - 1].id,
    nextLesson: index === lessonSpecs.length - 1 ? null : lessonSpecs[index + 1].id
  };
}

async function writeFileEnsured(filePath, content) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, content, "utf8");
}

async function main() {
  const lessons = [];

  for (const [index, spec] of lessonSpecs.entries()) {
    const raw = await readFile(path.join(sourceDir, spec.file), "utf8");
    const frontmatter = lessonFrontmatter(spec);
    const body = cleanLessonMarkdown(raw, spec.title);
    const mdx = [
      "---",
      json(frontmatter),
      "---",
      'import BlackboardPanel from "../../../components/academy/BlackboardPanel.astro";',
      'import FormulaBlock from "../../../components/lesson/FormulaBlock.astro";',
      'import MarketExample from "../../../components/lesson/MarketExample.astro";',
      'import FailureModeCard from "../../../components/lesson/FailureModeCard.astro";',
      'import DecisionChecklist from "../../../components/lesson/DecisionChecklist.astro";',
      "",
      `<BlackboardPanel title=${prop(`Mapa operacional: ${spec.title}`)} label="Blackboard">`,
      `  <div class="board-note">${spec.objective}</div>`,
      `  <div class="board-note">${spec.formula[1]}</div>`,
      "</BlackboardPanel>",
      "",
      `<FormulaBlock label="Formula mental" title=${prop(spec.formula[0])} formula=${prop(spec.formula[1])} explanation=${prop("Use esta formula como uma lente de leitura, nao como uma verdade mecanica. O objetivo e tornar a tese auditavel antes da decisao.")} />`,
      "",
      `<MarketExample title=${prop(`Aplicacao do ${spec.title}`)} setup=${prop("Escolha um jogo pre-live e separe evidencias observaveis de narrativa publica.")} price=${prop("Compare a leitura contextual com odds, liquidez e timing do movimento de mercado.")} hypothesis=${prop("Escreva uma hipotese que admita intervalo de incerteza e criterio de invalidacao.")} risk=${prop(spec.failure)} />`,
      "",
      `<FailureModeCard title=${prop(spec.failure)} summary=${prop("Este erro reduz a qualidade da decisao porque troca processo verificavel por interpretacao conveniente.")} />`,
      "",
      `<DecisionChecklist title=${prop(`Checklist do ${spec.title}`)} items={${JSON.stringify(spec.checklist)}} />`,
      "",
      body
    ].join("\n");

    await writeFileEnsured(path.join(lessonDir, `${spec.slug}.mdx`), mdx);
    lessons.push(lessonMetadata(spec, index));
  }

  const frontmatter = {
    id: courseId,
    title: "Framework de 9 Passos para Analisar um Jogo de Futebol",
    slug: courseSlug,
    subtitle: "Um sistema de pesquisa pre-live para transformar futebol em contexto, probabilidade, preco e risco documentado.",
    category: "Football Research",
    secondaryCategories: ["Market Intelligence", "Probability & Modeling", "Risk & Execution"],
    level: "foundation",
    status: "published",
    language: "pt-PT",
    estimatedReadingMinutes: lessons.reduce((sum, lesson) => sum + lesson.readingMinutes, 8),
    minimumWordCount: 6500,
    targetPersonas: [
      "Trader Esportivo em Transicao",
      "Analista Quantitativo Amador",
      "Operador Cripto-Quant",
      "Premium Report Consumer"
    ],
    corePromise:
      "Ensinar um processo de 9 passos para analisar um jogo de futebol como sistema de contexto, preco, probabilidade, risco e pesquisa.",
    whyThisCourseExists:
      "Este curso existe para substituir leitura dispersa por um framework auditavel que organiza psicologia, cultura, padroes, comportamento, ambiente e mercado antes da decisao.",
    enemy:
      "Analise impressionista, leitura retrospectiva conveniente, excesso de confianca, dependencia de narrativa publica e decisao sem criterio de invalidacao.",
    audience:
      "Leitores que querem estudar futebol com estrutura: analistas, traders em transicao, operadores de mercados de previsao e consumidores de research que desejam avaliar argumentos com independencia.",
    prerequisites: [
      "Conhecimento basico de futebol e mercados de odds decimais",
      "Vontade de documentar hipoteses antes de formar conclusoes",
      "Noções iniciais de probabilidade, risco e leitura de contexto",
      "Capacidade de trabalhar com exemplos praticos e checklists"
    ],
    courseStats: {
      moduleCount: modules.length,
      lessonCount: lessons.length,
      labCount: 3,
      glossaryTermCount: 10
    },
    tracks: [
      {
        id: "track-context",
        title: "Context intelligence",
        summary: "Ler psicologia, cultura e padroes como variaveis de contexto antes do mercado final."
      },
      {
        id: "track-market",
        title: "Market translation",
        summary: "Traduzir comportamento, energia e ambiente em hipoteses comparaveis com preco e liquidez."
      },
      {
        id: "track-audit",
        title: "Decision audit",
        summary: "Auditar vieses, regras e limites do objeto antes de concluir a tese."
      }
    ],
    modules,
    lessons,
    labs: [
      {
        id: "lab-context-map",
        title: "Mapa de contexto pre-live",
        slug: "mapa-de-contexto-pre-live",
        summary: "Organizar psicologia, cultura e ambiente em uma matriz de evidencia e incerteza.",
        status: "planned"
      },
      {
        id: "lab-market-translation",
        title: "Traducao de contexto para preco",
        slug: "traducao-de-contexto-para-preco",
        summary: "Comparar uma hipotese contextual com odds, probabilidade implicita e liquidez.",
        status: "planned"
      },
      {
        id: "lab-bias-audit",
        title: "Auditoria do observador",
        slug: "auditoria-do-observador",
        summary: "Rever a tese antes e depois do jogo para separar processo, resultado e vies.",
        status: "planned"
      }
    ],
    glossaryTerms: [
      "odds",
      "implied-probability",
      "expected-value",
      "edge",
      "liquidity",
      "market-price",
      "risk",
      "stake",
      "drawdown",
      "prediction-market"
    ],
    createdAt: now,
    updatedAt: now
  };

  const overview = [
    "# Framework de 9 Passos para Analisar um Jogo de Futebol",
    "",
    "Este curso transforma uma lista ampla de fatores de analise em um processo operacional. O objetivo nao e prever futebol como se o jogo fosse mecanico. O objetivo e aprender a decompor o jogo em camadas verificaveis: contexto humano, cultura competitiva, padroes tacticos, comportamento em campo, comportamento de mercado, energia, ambiente, vies do observador e limites do proprio objeto analisado.",
    "",
    "A estrutura foi pensada para research pre-live. Cada passo treina uma pergunta diferente: o que muda o jogo, o que muda o preco, o que muda a incerteza e o que muda a qualidade da tua decisao. A decisao final nunca aparece antes da documentacao da tese.",
    "",
    "## Como usar este curso",
    "",
    "- Lê uma licao por vez e aplica o checklist a um jogo real.",
    "- Mantem um registo simples: tese inicial, evidencias, fatores contra a tese, leitura de preco, risco e criterio de invalidacao.",
    "- Usa os labs da academia para calcular probabilidade implicita, valor esperado e tamanho de stake apenas como ferramentas educativas.",
    "- Revê a analise depois do jogo sem transformar resultado em prova automatica de qualidade.",
    "",
    "## O que vais construir",
    "",
    "No fim do curso, deves ter um dossier de analise com nove camadas: psicologia, cultura, padroes, crenca, comportamento, energia, ambiente, observador e objeto. Esse dossier nao promete resultado; ele melhora a capacidade de explicar porque uma tese existe, onde ela pode falhar e como o mercado pode ou nao estar a refletir essas informacoes.",
    "",
    "## Ordem recomendada",
    "",
    "Segue as licoes na ordem. O framework perde forca quando se salta diretamente para preco ou execucao. Primeiro vem contexto. Depois vem comportamento observavel. So no fim entra a auditoria da tua propria interpretacao."
  ].join("\n");

  await writeFileEnsured(path.join(courseDir, "index.mdx"), ["---", json(frontmatter), "---", overview].join("\n"));

  console.log(`Packaged ${lessons.length} lessons for ${courseSlug}.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
