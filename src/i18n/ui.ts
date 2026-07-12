import type { Category, NavigationItem, SiteData } from "../types";
import { defaultLocale, type AppLocale } from "./config";

type LocaleDictionary = {
  site: {
    tagline: string;
    description: string;
    promoCopy: string;
    promoCta: string;
    navigation: NavigationItem[];
  };
  home: {
    title: string;
    description: string;
    heroLine1: string;
    heroLine2Prefix: string;
    heroLine2Highlight: string;
    exploreCta: string;
    sectionEntryEyebrow: string;
    sectionEntryTitle: string;
    sectionEntryTitleHighlight: string;
    sectionEntryIntro: string;
    sectionAreasEyebrow: string;
    sectionAreasTitlePrefix: string;
    sectionAreasTitleHighlightA: string;
    sectionAreasTitleHighlightB: string;
    sectionAreasIntro: string;
    finalEyebrow: string;
    finalTitlePrefix: string;
    finalTitleHighlight: string;
    finalBody: string;
    signals: Array<{
      index: string;
      title: string;
      description: string;
    }>;
  };
  catalog: {
    title: string;
    description: string;
    searchLabel: string;
    searchPlaceholder: string;
    resultsEyebrow: string;
    resultsFound: (count: number) => string;
    clearFilters: string;
    filtersTitle: string;
    filtersIntro: string;
    categoryLegend: string;
    levelLegend: string;
    durationLegend: string;
    allDurations: string;
    publicCatalog: string;
    coursesAvailable: string;
    noResultsEyebrow: string;
    noResultsTitle: string;
    noResultsBody: string;
    searchChipPrefix: string;
    courseCount: (count: number) => string;
  };
  course: {
    publishedCourse: string;
    startCourse: string;
    courseMap: string;
    localProgress: string;
    progressLabel: (done: number, total: number) => string;
    modules: (count: number) => string;
    lessons: (count: number) => string;
    whyThisCourseExists: string;
    fromImpressionToStructure: string;
    audience: string;
    audienceTitle: string;
    avoid: string;
    avoidTitle: string;
    prerequisites: string;
    prerequisitesTitle: string;
    expandedSummary: string;
    expandedSummaryToggle: string;
    curriculum: string;
    curriculumTitle: string;
    curriculumIntro: string;
    moduleLabel: (index: number) => string;
    lessonLabel: (index: number) => string;
    lessonCount: (count: number) => string;
  };
  lesson: {
    courseContext: string;
    lessonLabel: (index: number) => string;
    markComplete: string;
    previousLesson: string;
    nextLesson: string;
    startOfCourse: string;
    endOfCurrentPath: string;
  };
  catalogCard: {
    studyFocus: string;
    level: string;
    modules: string;
    lessons: string;
    accessCourse: string;
    inPreparation: string;
    enterNow: string;
    publishedNote: string;
  };
  shared: {
    minutes: string;
    durationBuckets: Record<"under-5" | "5-10" | "10-20" | "20-plus", string>;
    courseStatus: Record<"placeholder" | "planned" | "draft" | "published" | "archived", string>;
    courseLevels: Record<"foundation" | "intermediate" | "advanced", string>;
  };
};

const dictionary: LocaleDictionary = {
  site: {
    tagline: "Football market intelligence, probability and research-grade learning.",
    description:
      "Academia publica para cursos profundos sobre futebol, preco, probabilidade, risco, research e prediction markets.",
    promoCopy: "Aprenda fazendo. Inscricoes abertas: Framework 9 Passos para Analise de um Jogo de Futebol.",
    promoCta: "Entrar no curso",
    navigation: [
      { label: "Home", href: "/" },
      { label: "Cursos", href: "/courses/" }
    ]
  },
  home: {
    title: "Cursos Grátis de Análise de Futebol e Prediction Markets",
    description: "Cursos gratuitos e inteligencia preditiva para estudar futebol com mais criterio.",
    heroLine1: "A Primeira Plataforma Gratuita",
    heroLine2Prefix: "para",
    heroLine2Highlight: "Inteligencia Preditiva.",
    exploreCta: "Explorar cursos gratuitos",
    sectionEntryEyebrow: "Entrada na academia",
    sectionEntryTitle: "O que voce encontra aqui",
    sectionEntryTitleHighlight: "desde o primeiro dia",
    sectionEntryIntro:
      "Ainda nao mostramos numeros de vaidade nem testemunhos fabricados. Mostramos a estrutura da academia, a profundidade do estudo e a razao pela qual este projeto existe: formar leitores mais preparados para pensar, avaliar e decidir melhor.",
    sectionAreasEyebrow: "Varias areas de estudo",
    sectionAreasTitlePrefix: "Uma academia para aprender",
    sectionAreasTitleHighlightA: "mercado",
    sectionAreasTitleHighlightB: "por varios angulos",
    sectionAreasIntro:
      "Os cursos nao vivem numa unica narrativa. A estrutura cruza leitura de jogo, leitura de mercado, modelagem, risco e execucao.",
    finalEyebrow: "AI MIDAS ACADEMY",
    finalTitlePrefix: "Comecar a aprender com",
    finalTitleHighlight: "Processo",
    finalBody: "Cursos publicos, profundos e pensados para quem quer mais conhecimento antes de mais conviccao.",
    signals: [
      {
        index: "01",
        title: "Acesso aberto",
        description:
          "Todos os cursos da academia sao gratuitos e publicos, para tornar este tipo de conhecimento mais acessivel e menos dependente de ruido comercial."
      },
      {
        index: "02",
        title: "Profundidade real",
        description:
          "Cada tema e trabalhado com mecanismos, exemplos, failure modes, checklists e ligacao clara entre teoria, leitura de mercado e decisao."
      },
      {
        index: "03",
        title: "Visao integrada",
        description:
          "A aprendizagem cruza price, probability, risk, context, research e prediction markets para construir criterio em varias frentes."
      },
      {
        index: "04",
        title: "Decisao melhor",
        description:
          "O objetivo nao e aumentar confianca teatral, mas melhorar a qualidade da leitura, da avaliacao e da decisao de quem investe tempo e capital nestes mercados."
      }
    ]
  },
  catalog: {
    title: "Cursos Gratuitos de Futebol, Trading e IA",
    description: "Catalogo de cursos da AI MIDAS ACADEMY com busca por nome, area, nivel e tempo estimado de estudo.",
    searchLabel: "Pesquisar nome do curso",
    searchPlaceholder: "Ex.: Framework de 9 Passos",
    resultsEyebrow: "Resultados do catalogo",
    resultsFound: (count) => `${count} curso encontrado`,
    clearFilters: "Limpar filtros",
    filtersTitle: "Refine a busca",
    filtersIntro: "Selecione uma area da academia, ajuste o nivel e filtre pelo tempo medio de estudo.",
    categoryLegend: "Area da academia",
    levelLegend: "Nivel do curso",
    durationLegend: "Tempo medio de estudo",
    allDurations: "Todos",
    publicCatalog: "Catalogo publico",
    coursesAvailable: "Cursos disponiveis agora",
    noResultsEyebrow: "Nenhum resultado",
    noResultsTitle: "Nenhum curso corresponde aos filtros atuais.",
    noResultsBody: "Ajuste a busca, remova um dos filtros ou volte para a visao completa do catalogo.",
    searchChipPrefix: "Busca",
    courseCount: (count) => `${count} curso`
  },
  course: {
    publishedCourse: "Curso publicado",
    startCourse: "Iniciar curso",
    courseMap: "Mapa do curso",
    localProgress: "Progresso local",
    progressLabel: (done, total) => `${done}/${total} licoes concluidas`,
    modules: (count) => `${count} modulos`,
    lessons: (count) => `${count} licoes`,
    whyThisCourseExists: "Por que este curso existe",
    fromImpressionToStructure: "Da impressao a estrutura",
    audience: "Publico-alvo",
    audienceTitle: "Para quem quer estudar com metodo",
    avoid: "O que voce vai evitar",
    avoidTitle: "Menos impressao, mais criterio",
    prerequisites: "Pre-requisitos",
    prerequisitesTitle: "O minimo para entrar bem no curso",
    expandedSummary: "Resumo expandido",
    expandedSummaryToggle: "Ler a explicacao completa do curso",
    curriculum: "Curriculo",
    curriculumTitle: "Modulos e licoes",
    curriculumIntro: "Um mapa simples para ver a ordem do curso sem se perder no scroll.",
    moduleLabel: (index) => `Modulo ${index}`,
    lessonLabel: (index) => `Licao ${index}`,
    lessonCount: (count) => `${count} licoes`
  },
  lesson: {
    courseContext: "Contexto do curso",
    lessonLabel: (index) => `Aula ${index}`,
    markComplete: "Marcar como concluida",
    previousLesson: "Aula anterior",
    nextLesson: "Proxima aula",
    startOfCourse: "Inicio do curso",
    endOfCurrentPath: "Fim do percurso atual"
  },
  catalogCard: {
    studyFocus: "O que voce vai estudar",
    level: "Nivel",
    modules: "Modulos",
    lessons: "Licoes",
    accessCourse: "Acessar curso",
    inPreparation: "Em preparacao",
    enterNow: "Entrar agora",
    publishedNote: "Curso publicado"
  },
  shared: {
    minutes: "min",
    durationBuckets: {
      "under-5": "Abaixo de 5 horas",
      "5-10": "5 a 10 horas",
      "10-20": "10 a 20 horas",
      "20-plus": "20+ horas"
    },
    courseStatus: {
      placeholder: "Em estrutura",
      planned: "Planejado",
      draft: "Rascunho",
      published: "Publicado",
      archived: "Arquivado"
    },
    courseLevels: {
      foundation: "Fundacao",
      intermediate: "Intermediario",
      advanced: "Avancado"
    }
  }
};

const categories: Category[] = [
  {
    slug: "market-intelligence",
    name: "Inteligencia de Mercado",
    summary: "Leitura de preco, contexto competitivo, informacao disponivel e estrutura de mercado antes do apito inicial.",
    angle: "Odds movement, informacao assimetrica e leitura de comportamento."
  },
  {
    slug: "probability-modeling",
    name: "Probabilidade e Modelagem",
    summary: "Probabilidade aplicada ao futebol sem fantasia matematica nem simplificacoes frageis.",
    angle: "Base rates, cenarios, incerteza e disciplina quantitativa."
  },
  {
    slug: "ai-prediction-systems",
    name: "Sistemas de Predicao com IA",
    summary: "Sistemas de predicao com dados, hipoteses, features e limites reais de modelagem.",
    angle: "Model design, validacao e interpretacao operacional."
  },
  {
    slug: "football-research",
    name: "Pesquisa em Futebol",
    summary: "Metodos de pesquisa para transformar jogos, equipes e competicoes em inteligencia acionavel.",
    angle: "Contexto tatico, dados, calendario e qualidade de amostra."
  },
  {
    slug: "prediction-markets-on-chain",
    name: "Prediction Markets e On-chain",
    summary: "Mercados on-chain, estrutura de liquidez, execucao e leitura de incentivos em mercados de previsao.",
    angle: "Microestrutura, pricing e comportamento do fluxo."
  },
  {
    slug: "risk-execution",
    name: "Risco e Execucao",
    summary: "Gestao de risco, sizing, disciplina e regras de execucao para quem opera sob incerteza.",
    angle: "Processo, exposicao, variancia e sobrevivencia."
  }
];

export function getDictionary(_locale: AppLocale = defaultLocale) {
  return dictionary;
}

export function getSiteData(locale: AppLocale = defaultLocale): SiteData {
  const siteDictionary = getDictionary(locale);

  return {
    name: "AI MIDAS ACADEMY",
    tagline: siteDictionary.site.tagline,
    description: siteDictionary.site.description,
    navigation: siteDictionary.site.navigation
  };
}

export function getCategories(_locale: AppLocale = defaultLocale): Category[] {
  return categories;
}

export function getDefaultDictionary() {
  return dictionary;
}
