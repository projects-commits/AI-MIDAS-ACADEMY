import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const courseSlug = "vibe-coding-ferramentas-research-futebol";
const courseId = "course-vibe-coding-research";
const sourceDir = path.join(root, "private-generator", "output", "vibe-coding", "02-lessons");
const courseDir = path.join(root, "src", "content", "courses", courseSlug);
const lessonDir = path.join(root, "src", "content", "courseLessons", courseSlug);
const now = "2026-06-01T00:00:00.000Z";

const modules = [
  {
    id: "module-1",
    title: "Fundacao do Ambiente e Seguranca",
    slug: "fundacao-ambiente-seguranca",
    summary: "Git, GitHub, IDE, fontes de dados e seguranca operacional como base de qualquer pipeline de research auditavel.",
    lessonIds: ["lesson-1", "lesson-2", "lesson-3", "lesson-4"],
    learningGoals: [
      "Configurar ambiente de desenvolvimento reprodutivel e versionado",
      "Isolar execucao e proteger credenciais antes de rodar qualquer codigo"
    ]
  },
  {
    id: "module-2",
    title: "Engenharia de Contexto e Agentes",
    slug: "engenharia-contexto-agentes",
    summary: "Prompts, skills, agentes e frameworks para orquestrar IA sem perder o controle operacional.",
    lessonIds: ["lesson-5", "lesson-6"],
    learningGoals: [
      "Estruturar prompts deterministicos que reduzem alucinacao",
      "Escolher e orquestrar frameworks de agentes com checkpoints humanos"
    ]
  },
  {
    id: "module-3",
    title: "Extracao de Dados e Modelagem de Mercado",
    slug: "extracao-dados-modelagem-mercado",
    summary: "Dados da Polymarket, modelo de Poisson e sistema Elo como camada quantitativa de previsao.",
    lessonIds: ["lesson-7", "lesson-8", "lesson-9"],
    learningGoals: [
      "Extrair e normalizar dados de mercado de forma auditavel",
      "Construir e calibrar modelos probabilisticos com parametros dinamicos"
    ]
  },
  {
    id: "module-4",
    title: "Backtesting e Manutencao de Pipeline",
    slug: "backtesting-manutencao-pipeline",
    summary: "Validar modelos historicamente, medir edge e manter o sistema ao longo do tempo.",
    lessonIds: ["lesson-10", "lesson-11"],
    learningGoals: [
      "Separar sinal de overfitting via backtesting temporal rigoroso",
      "Modularizar, documentar e monitorar degradacao de performance"
    ]
  }
];

const lessonSpecs = [
  {
    id: "lesson-1",
    moduleId: "module-1",
    title: "Ambiente de Versionamento: Git e GitHub",
    slug: "ambiente-versionamento-git-github",
    file: "01-ambiente-versionamento-git-github.md",
    readingMinutes: 12,
    level: "foundation",
    concepts: ["version control", "branch strategy", "reproducibility"],
    glossaryTerms: ["risk", "market-price", "edge"],
    formula: ["Commit atomicity", "Traceability = commits x branches x remote sync"],
    objective: "Configurar Git e GitHub como infraestrutura de rastreabilidade para pipelines de pesquisa.",
    failure: "Commit de arquivos sensiveis, historico linear sem isolamento de hipoteses.",
    checklist: [
      ".gitignore configurado para dados e chaves",
      "Branch main protegida e commits atomicos",
      "Push verificado e historico navegavel",
      "Repositorio com README documentando arquitetura"
    ]
  },
  {
    id: "lesson-2",
    moduleId: "module-1",
    title: "IDE e Ambiente de Desenvolvimento",
    slug: "ide-ambiente-desenvolvimento",
    file: "02-ide-ambiente-desenvolvimento.md",
    readingMinutes: 11,
    level: "foundation",
    concepts: ["virtual environment", "linting", "dependency management"],
    glossaryTerms: ["risk", "liquidity", "market-price"],
    formula: ["Environment isolation", "Reproducible setup = venv + pinned deps + linter"],
    objective: "Montar um ambiente de desenvolvimento isolado e auditavel para prototipagem de ferramentas.",
    failure: "Dependencias globais conflituantes, execucao sem ambiente isolado.",
    checklist: [
      "venv ativo e requirements.txt com versoes fixas",
      "Linter e formatador configurados",
      "Atalhos de terminal mapeados",
      "Script de teste roda sem erros no ambiente limpo"
    ]
  },
  {
    id: "lesson-3",
    moduleId: "module-1",
    title: "Fontes de Dados para Analise de Futebol",
    slug: "fontes-dados-analise-futebol",
    file: "03-fontes-dados-analise-futebol.md",
    readingMinutes: 13,
    level: "intermediate",
    concepts: ["dataset integrity", "schema normalization", "missing values"],
    glossaryTerms: ["odds", "implied-probability", "market-price"],
    formula: ["Data quality", "Usable data = verified source x documented schema x clean types"],
    objective: "Identificar, ingerir e normalizar fontes de dados historicas e em tempo real para futebol.",
    failure: "Dados desatualizados, inconsistencia de fusos horarios, colunas nao normalizadas.",
    checklist: [
      "Fonte verificada e atualizada",
      "Schema documentado e tipos validados",
      "Missing values tratados explicitamente",
      "Amostra inspecionada antes do merge no pipeline"
    ]
  },
  {
    id: "lesson-4",
    moduleId: "module-1",
    title: "Seguranca nos Prompts e Agentes de IA",
    slug: "seguranca-prompts-agentes-ia",
    file: "04-seguranca-prompts-agentes-ia.md",
    readingMinutes: 14,
    level: "intermediate",
    concepts: ["sandbox", "prompt injection", "secret management"],
    glossaryTerms: ["risk", "edge", "drawdown"],
    formula: ["Security posture", "Safe execution = sandbox + secret isolation + dependency check"],
    objective: "Isolar execucao de agentes, proteger credenciais e validar dependencias antes de rodar codigo.",
    failure: "Agente executando comandos destrutivos, vazamento de chaves em logs.",
    checklist: [
      "Docker ativo para execucao de scripts",
      ".env excluido do versionamento",
      "requirements.txt com versoes fixas",
      "Aprovacao manual habilitada antes de execucao sensivel"
    ]
  },
  {
    id: "lesson-5",
    moduleId: "module-2",
    title: "Engenharia de Prompts e Skills",
    slug: "engenharia-prompts-skills",
    file: "05-engenharia-prompts-skills.md",
    readingMinutes: 13,
    level: "intermediate",
    concepts: ["system prompt", "skill architecture", "chain-of-thought"],
    glossaryTerms: ["risk", "expected-value", "edge"],
    formula: ["Prompt reliability", "Deterministic output = role + constraints + output schema + validation"],
    objective: "Estruturar prompts e skills que reduzem alucinacao e geram codigo testavel.",
    failure: "Contexto vago gerando codigo nao testavel, instrucoes conflitantes.",
    checklist: [
      "System prompt define papel, restricoes e formato",
      "Skills separam contexto de execucao",
      "Saida validada contra schema antes de execucao",
      "Exemplos de edge cases incluidos no prompt"
    ]
  },
  {
    id: "lesson-6",
    moduleId: "module-2",
    title: "Agents e Frameworks de Agents",
    slug: "agents-frameworks",
    file: "06-agents-frameworks.md",
    readingMinutes: 14,
    level: "intermediate",
    concepts: ["agent graph", "human-in-the-loop", "orchestration"],
    glossaryTerms: ["risk", "liquidity", "prediction-market"],
    formula: ["Agent control", "Controllable flow = graph + checkpoints + state logs"],
    objective: "Escolher e orquestrar frameworks de agentes com controle de fluxo e validacao humana.",
    failure: "Fluxo ciclico sem condicao de parada, estado nao gerenciado, latencia excessiva.",
    checklist: [
      "Grafo documentado com nos e arestas definidas",
      "Human-in-the-loop configurado em nos criticos",
      "Logs de estado persistidos",
      "Condicao de parada testada antes do deploy"
    ]
  },
  {
    id: "lesson-7",
    moduleId: "module-3",
    title: "Extracao de Dados da Polymarket",
    slug: "extracao-dados-polymarket",
    file: "07-extracao-dados-polymarket.md",
    readingMinutes: 13,
    level: "intermediate",
    concepts: ["API consumption", "pagination", "overround removal"],
    glossaryTerms: ["odds", "implied-probability", "liquidity"],
    formula: ["Market data quality", "Clean signal = pagination + error handling + overround removal"],
    objective: "Consumir API da Polymarket, normalizar dados e calcular probabilidades implícitas ajustadas.",
    failure: "Rate limit nao tratado, calculo de probabilidade sem ajuste de margem.",
    checklist: [
      "Tratamento de erros HTTP implementado",
      "Paginacao coberta",
      "Overround removido e soma validada",
      "CSV auditavel exportado"
    ]
  },
  {
    id: "lesson-8",
    moduleId: "module-3",
    title: "Modelo de Distribuicao de Poisson",
    slug: "modelo-distribuicao-poisson",
    file: "08-modelo-distribuicao-poisson.md",
    readingMinutes: 14,
    level: "intermediate",
    concepts: ["Poisson distribution", "lambda", "score matrix"],
    glossaryTerms: ["expected-value", "implied-probability", "market-price"],
    formula: ["Poisson probability", "P(k) = (lambda^k * e^-lambda) / k!"],
    objective: "Implementar modelo de Poisson para estimar probabilidades de gols e placares.",
    failure: "Lambda estatico sem ajuste contextual, overfitting a amostras pequenas.",
    checklist: [
      "Lambda dinamico calculado por contexto",
      "Matriz de placares validada",
      "Soma de probabilidades normalizada",
      "Comparacao com odds de mercado registrada"
    ]
  },
  {
    id: "lesson-9",
    moduleId: "module-3",
    title: "Modelo de Elo Rating",
    slug: "modelo-elo-rating",
    file: "09-modelo-elo-rating.md",
    readingMinutes: 15,
    level: "intermediate",
    concepts: ["Elo rating", "K-factor", "expected score"],
    glossaryTerms: ["edge", "risk", "drawdown"],
    formula: ["Elo expected score", "E_A = 1 / (1 + 10^((R_B - R_A)/400))"],
    objective: "Construir sistema de Elo rating para contexto de forca relativa e integrar com modelo de gols.",
    failure: "Fator K fixo em ligas desbalanceadas, ratings desatualizados gerando vies.",
    checklist: [
      "Fator K ajustado por liga",
      "Convergencia validada apos N rodadas",
      "Integracao com lambda do Poisson testada",
      "Log de atualizacoes persistido"
    ]
  },
  {
    id: "lesson-10",
    moduleId: "module-4",
    title: "Backtest e Validacao",
    slug: "backtest-validacao",
    file: "10-backtest-validacao.md",
    readingMinutes: 16,
    level: "advanced",
    concepts: ["temporal split", "Brier score", "look-ahead bias"],
    glossaryTerms: ["expected-value", "risk", "drawdown"],
    formula: ["Backtest discipline", "Valid edge = temporal split + calibration metric + cost adjustment"],
    objective: "Validar modelos historicamente com separacao temporal e metricas de calibracao.",
    failure: "Look-ahead bias, overfitting de parametros, ignorar custos de transacao.",
    checklist: [
      "Dados separados por tempo sem vazamento",
      "Brier score e ROI calculados",
      "Drawdown maximo documentado",
      "Custos de transacao incluidos"
    ]
  },
  {
    id: "lesson-11",
    moduleId: "module-4",
    title: "Criar Skills Reutilizaveis",
    slug: "criar-skills-reutilizaveis",
    file: "11-criar-skills-reutilizaveis.md",
    readingMinutes: 13,
    level: "advanced",
    concepts: ["modularization", "drift monitoring", "CI/CD"],
    glossaryTerms: ["risk", "edge", "market-price"],
    formula: ["Pipeline health", "Sustainable system = modules + tests + scheduling + drift logs"],
    objective: "Modularizar, documentar e agendar pipelines de research para manutencao a longo prazo.",
    failure: "Codigo monolitico, ausencia de testes, drift nao monitorado.",
    checklist: [
      "Modulos isolados com responsabilidade unica",
      "Testes unitarios cobrindo casos criticos",
      "Agendamento configurado e validado",
      "Documentacao de limites do sistema atualizada"
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
    id: `${courseId}-${spec.id}`,
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
    exercises: [`Aplicar o ${spec.title.toLowerCase()} a um cenario real e documentar evidencia, incerteza e criterio de invalidacao.`],
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
      `<MarketExample title=${prop(`Aplicacao do ${spec.title}`)} setup=${prop("Escolha um projeto real e separe evidencias observaveis de narrativa publica.")} price=${prop("Compare a leitura contextual com odds, liquidez e timing do movimento de mercado.")} hypothesis=${prop("Escreva uma hipotese que admita intervalo de incerteza e criterio de invalidacao.")} risk=${prop(spec.failure)} />`,
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
    title: "Vibe Coding para Construir Ferramentas de Research de Futebol",
    slug: courseSlug,
    subtitle: "Arquitetura de sistemas de pesquisa, modelagem probabilistica e extracao de dados com assistencia de IA, mantendo rigor analitico e controle operacional.",
    category: "Football Research",
    secondaryCategories: ["Market Intelligence", "Probability & Modeling", "Risk & Execution", "AI Systems"],
    level: "intermediate",
    status: "published",
    language: "pt-PT",
    estimatedReadingMinutes: lessons.reduce((sum, lesson) => sum + lesson.readingMinutes, 8),
    minimumWordCount: 12000,
    targetPersonas: [
      "Pesquisadores quantitativos independentes",
      "Analistas de mercado desportivo com foco em dados",
      "Desenvolvedores que buscam automatizar fluxos de extracao e modelagem",
      "Operadores que necessitam de ferramentas auditaveis para validacao de preco e probabilidade"
    ],
    corePromise:
      "Estruturar o uso de assistencia de IA para prototipar, validar e manter pipelines de pesquisa de futebol, garantindo rastreabilidade de codigo, isolamento de execucao, precisao estatistica e disciplina de backtesting.",
    whyThisCourseExists:
      "Ferramentas de analise esportiva comerciais operam como caixas-pretas, limitando a transparencia metodologica. A assistencia de IA acelera a escrita de codigo, mas introduz riscos sistemicos: alucinacao de logica, execucao nao supervisionada, vazamento de credenciais e modelagem sem validacao empirica. Este curso existe para converter a velocidade do vibe coding em um processo de pesquisa auditavel.",
    enemy:
      "Dependencia de plataformas fechadas sem acesso a logica de calculo; execucao autonoma de agentes sem validacao humana; modelagem probabilistica sem backtesting rigoroso; vazamento de chaves de API; ilusao de que IA substitui desenho de arquitetura e disciplina de pesquisa.",
    audience:
      "Profissionais com base em Python e estatistica descritiva, dispostos a adotar controle de versao, conteineres, validacao de prompts e backtesting sistematico. O curso nao e destinado a iniciantes absolutos em programacao ou a usuarios que buscam sinais ou atalhos operacionais.",
    prerequisites: [
      "Conhecimento basico de Python (estruturas de dados, funcoes, leitura de arquivos)",
      "Familiaridade com conceitos de probabilidade, distribuicoes e metricas de erro",
      "Acesso a computador com capacidade para rodar Docker e IDEs modernos",
      "Conta em repositorio Git publico ou privado"
    ],
    courseStats: {
      moduleCount: modules.length,
      lessonCount: lessons.length,
      labCount: 6,
      glossaryTermCount: 10
    },
    tracks: [
      {
        id: "track-infra",
        title: "Infraestrutura e Controle Operacional",
        summary: "Ambiente, versionamento, seguranca e isolamento como base de qualquer pipeline de research."
      },
      {
        id: "track-context",
        title: "Engenharia de Contexto e Orquestracao",
        summary: "Prompts, skills, agentes e frameworks para orquestrar IA sem perder o controle operacional."
      },
      {
        id: "track-model",
        title: "Modelagem Probabilistica e Validacao de Mercado",
        summary: "Extracao de dados, modelos Poisson e Elo, backtesting e manutencao de pipeline."
      }
    ],
    modules,
    lessons,
    labs: [
      {
        id: "lab-docker-env",
        title: "Ambiente Isolado com Docker e ENV",
        slug: "ambiente-isolado-docker-env",
        summary: "Criar container Docker, isolar variaveis e validar execucao segura de scripts.",
        status: "planned"
      },
      {
        id: "lab-polymarket-pipeline",
        title: "Pipeline de Extracao Polymarket",
        slug: "pipeline-extracao-polymarket",
        summary: "Consumir API, tratar paginacao, remover overround e exportar CSV auditavel.",
        status: "planned"
      },
      {
        id: "lab-poisson-model",
        title: "Implementacao de Modelo Poisson com Lambda Dinamico",
        slug: "implementacao-modelo-poisson",
        summary: "Calcular lambda por contexto, gerar matriz de placares e comparar com mercado.",
        status: "planned"
      },
      {
        id: "lab-elo-poisson",
        title: "Integracao Elo + Poisson e Calculo de Edge",
        slug: "integracao-elo-poisson-edge",
        summary: "Atualizar ratings, integrar com Poisson e medir edge versus odds de mercado.",
        status: "planned"
      },
      {
        id: "lab-backtest",
        title: "Backtesting Temporal com Metricas de Calibracao",
        slug: "backtesting-temporal-calibracao",
        summary: "Separar dados temporalmente, calcular Brier score, ROI e documentar drawdown.",
        status: "planned"
      },
      {
        id: "lab-pipeline-maintenance",
        title: "Modularizacao e Agendamento de Pipeline",
        slug: "modularizacao-agendamento-pipeline",
        summary: "Refatorar modulos, adicionar testes, configurar agendamento e monitorar drift.",
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
    "# Vibe Coding para Construir Ferramentas de Research de Futebol",
    "",
    "Este curso ensina a usar assistencia de IA para prototipar pipelines de pesquisa de futebol sem perder o rigor analitico. O objetivo nao e substituir o pensamento probabilistico por codigo gerado automaticamente. O objetivo e acelerar a construcao de ferramentas auditaveis — extracao de dados, modelos de previsao, backtesting e manutencao — mantendo o controle operacional em cada etapa.",
    "",
    "A estrutura e dividida em quatro modulos: fundacao do ambiente e seguranca, engenharia de contexto e agentes, extracao de dados e modelagem de mercado, e backtesting com manutencao de pipeline. Cada lição combina teoria, mecanismo, exemplo pratico e exercicio.",
    "",
    "## Como usar este curso",
    "",
    "- Leia uma licao por vez e aplique o checklist a um projeto real.",
    "- Mantenha um repositorio Git para rastrear cada alteracao.",
    "- Use os labs para testar isoladamente cada componente antes de integrar no pipeline.",
    "- Documente hipoteses, metricas e criterios de invalidacao antes de concluir qualquer ajuste.",
    "",
    "## O que voce vai construir",
    "",
    "No fim do curso, voce tera um pipeline funcional de research de futebol: extracao de dados da Polymarket, modelo de Poisson para placares, sistema Elo para forca relativa, backtesting temporal e skills reutilizaveis. Mais importante: voce tera o habito de prototipar com IA sem abrir mao da auditoria, da seguranca e da disciplina de validacao.",
    "",
    "## Ordem recomendada",
    "",
    "Siga as licoes na ordem. O curso perde forca se voce pular diretamente para modelagem sem ter o ambiente e a seguranca resolvidos. Primeiro vem infraestrutura. Depois vem orquestracao de agentes. So no fim entra a modelagem quantitativa e o backtesting."
  ].join("\n");

  await writeFileEnsured(path.join(courseDir, "index.mdx"), ["---", json(frontmatter), "---", overview].join("\n"));

  console.log(`Packaged ${lessons.length} lessons for ${courseSlug}.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
