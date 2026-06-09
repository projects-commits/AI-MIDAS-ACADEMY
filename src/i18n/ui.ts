import type { Category, NavigationItem, SiteData } from "../types";
import { defaultLocale, localeLabels, type AppLocale } from "./config";

type LocaleDictionary = {
  site: {
    tagline: string;
    description: string;
    promoCopy: string;
    promoCta: string;
    navigation: NavigationItem[];
    localeSwitcherLabel: string;
  };
  home: {
    title: string;
    description: string;
    heroLine1: string;
    heroLine1HighlightA: string;
    heroLine1HighlightB: string;
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
    quickViewEyebrow: string;
    quickViewTitle: string;
    quickViewBody: string;
    focusLabel: string;
    moduleLabel: string;
    readingTimeLabel: string;
    continueCourse: string;
    continueLesson: string;
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

const dictionaries: Record<AppLocale, LocaleDictionary> = {
  "pt-br": {
    site: {
      tagline: "Football market intelligence, probability and research-grade learning.",
      description:
        "Academia publica para cursos profundos sobre futebol, preco, probabilidade, risco, research e prediction markets.",
      promoCopy: "Aprenda fazendo. Inscricoes abertas: Framework 9 Passos para Analise de um Jogo de Futebol.",
      promoCta: "Entrar no curso",
      navigation: [
        { label: "Home", href: "/" },
        { label: "Cursos", href: "/courses/" }
      ],
      localeSwitcherLabel: "Idioma"
    },
    home: {
      title: "Home",
      description: "Cursos gratuitos e inteligencia preditiva para estudar futebol com mais criterio.",
      heroLine1: "A Primeira Plataforma Gratuita",
      heroLine1HighlightA: "Primeira",
      heroLine1HighlightB: "Gratuita",
      heroLine2Prefix: "para",
      heroLine2Highlight: "Inteligencia Preditiva.",
      exploreCta: "Explorar cursos gratuitos",
      sectionEntryEyebrow: "Entrada na academia",
      sectionEntryTitle: "O que encontras aqui",
      sectionEntryTitleHighlight: "desde o primeiro dia",
      sectionEntryIntro:
        "Ainda nao mostramos numeros de vaidade nem testemunhos fabricados. Mostramos a estrutura da academia, a profundidade do estudo e a razao pela qual este projeto existe: formar leitores mais preparados para pensar, avaliar e decidir melhor.",
      sectionAreasEyebrow: "Varias areas de estudo",
      sectionAreasTitlePrefix: "Uma academia para aprender",
      sectionAreasTitleHighlightA: "mercado",
      sectionAreasTitleHighlightB: "varios angulos",
      sectionAreasIntro:
        "Os cursos nao vivem numa unica narrativa. A estrutura cruza leitura de jogo, leitura de mercado, modelagem, risco e execucao.",
      finalEyebrow: "AI MIDAS ACADEMY",
      finalTitlePrefix: "Comecar a Aprender com",
      finalTitleHighlight: "Processo",
      finalBody:
        "Cursos publicos, profundos e pensados para quem quer mais conhecimento antes de mais conviccao.",
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
            "A aprendizagem cruza price, probability, risk, context, research e prediction markets para construir criterio em varias frentes, nao apenas opiniao isolada."
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
      title: "Cursos",
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
      avoid: "O que vais evitar",
      avoidTitle: "Menos impressao, mais criterio",
      prerequisites: "Pre-requisitos",
      prerequisitesTitle: "O minimo para entrar bem no curso",
      expandedSummary: "Resumo expandido",
      expandedSummaryToggle: "Ler a explicacao completa do curso",
      curriculum: "Curriculo",
      curriculumTitle: "Modulos e licoes",
      curriculumIntro: "Um mapa simples para veres a ordem do curso sem te perderes no scroll.",
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
      endOfCurrentPath: "Fim do percurso atual",
      quickViewEyebrow: "Visao traduzida",
      quickViewTitle: "Resumo operacional da aula",
      quickViewBody:
        "Nesta lingua, a aula aparece em formato estruturado para manter navegacao, contexto e foco totalmente localizados.",
      focusLabel: "Foco",
      moduleLabel: "Modulo",
      readingTimeLabel: "Tempo de leitura",
      continueCourse: "Voltar ao curso",
      continueLesson: "Continuar percurso"
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
  },
  en: {
    site: {
      tagline: "Football market intelligence, probability, and research-grade learning.",
      description:
        "Public academy with deep courses on football, price, probability, risk, research, and prediction markets.",
      promoCopy: "Learn by building. Open enrollment: 9-Step Framework for Analyzing a Football Match.",
      promoCta: "Enter course",
      navigation: [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses/" }
      ],
      localeSwitcherLabel: "Language"
    },
    home: {
      title: "Home",
      description: "Free courses and predictive intelligence for studying football with more discipline.",
      heroLine1: "The First Free Platform",
      heroLine1HighlightA: "First",
      heroLine1HighlightB: "Free",
      heroLine2Prefix: "for",
      heroLine2Highlight: "Predictive Intelligence.",
      exploreCta: "Explore free courses",
      sectionEntryEyebrow: "Entering the academy",
      sectionEntryTitle: "What you find here",
      sectionEntryTitleHighlight: "from day one",
      sectionEntryIntro:
        "We do not lead with vanity metrics or fabricated testimonials. We show the academy structure, the depth of study, and the reason this project exists: to train readers who think, evaluate, and decide with more rigor.",
      sectionAreasEyebrow: "Multiple study areas",
      sectionAreasTitlePrefix: "An academy for learning",
      sectionAreasTitleHighlightA: "markets",
      sectionAreasTitleHighlightB: "from several angles",
      sectionAreasIntro:
        "The courses do not live inside a single narrative. The structure crosses match reading, market reading, modeling, risk, and execution.",
      finalEyebrow: "AI MIDAS ACADEMY",
      finalTitlePrefix: "Start Learning with",
      finalTitleHighlight: "Process",
      finalBody: "Public, deep courses designed for people who want more knowledge before more conviction.",
      signals: [
        {
          index: "01",
          title: "Open access",
          description:
            "Every academy course is free and public, making this kind of knowledge more accessible and less dependent on commercial noise."
        },
        {
          index: "02",
          title: "Real depth",
          description:
            "Each theme is developed through mechanisms, examples, failure modes, checklists, and a clear bridge between theory, market reading, and decision-making."
        },
        {
          index: "03",
          title: "Integrated view",
          description:
            "The learning path combines price, probability, risk, context, research, and prediction markets to build judgment across multiple fronts."
        },
        {
          index: "04",
          title: "Better decisions",
          description:
            "The goal is not theatrical confidence, but higher-quality reading, evaluation, and decision-making for people investing time and capital in these markets."
        }
      ]
    },
    catalog: {
      title: "Courses",
      description: "AI MIDAS ACADEMY course catalog with search by name, domain, level, and estimated study time.",
      searchLabel: "Search course name",
      searchPlaceholder: "Ex.: 9-Step Framework",
      resultsEyebrow: "Catalog results",
      resultsFound: (count) => `${count} course found`,
      clearFilters: "Clear filters",
      filtersTitle: "Refine the search",
      filtersIntro: "Select an academy area, adjust the level, and filter by estimated study time.",
      categoryLegend: "Academy area",
      levelLegend: "Course level",
      durationLegend: "Estimated study time",
      allDurations: "All",
      publicCatalog: "Public catalog",
      coursesAvailable: "Courses available now",
      noResultsEyebrow: "No results",
      noResultsTitle: "No course matches the current filters.",
      noResultsBody: "Adjust the search, remove a filter, or return to the full catalog.",
      searchChipPrefix: "Search",
      courseCount: (count) => `${count} course`
    },
    course: {
      publishedCourse: "Published course",
      startCourse: "Start course",
      courseMap: "Course map",
      localProgress: "Local progress",
      progressLabel: (done, total) => `${done}/${total} lessons completed`,
      modules: (count) => `${count} modules`,
      lessons: (count) => `${count} lessons`,
      whyThisCourseExists: "Why this course exists",
      fromImpressionToStructure: "From impression to structure",
      audience: "Audience",
      audienceTitle: "For people who want to study with method",
      avoid: "What you will avoid",
      avoidTitle: "Less impression, more criteria",
      prerequisites: "Prerequisites",
      prerequisitesTitle: "What you need to enter well",
      expandedSummary: "Expanded summary",
      expandedSummaryToggle: "Read the full course explanation",
      curriculum: "Curriculum",
      curriculumTitle: "Modules and lessons",
      curriculumIntro: "A simple map to follow the course order without getting lost in the scroll.",
      moduleLabel: (index) => `Module ${index}`,
      lessonLabel: (index) => `Lesson ${index}`,
      lessonCount: (count) => `${count} lessons`
    },
    lesson: {
      courseContext: "Course context",
      lessonLabel: (index) => `Lesson ${index}`,
      markComplete: "Mark as completed",
      previousLesson: "Previous lesson",
      nextLesson: "Next lesson",
      startOfCourse: "Start of the course",
      endOfCurrentPath: "End of the current path",
      quickViewEyebrow: "Translated view",
      quickViewTitle: "Operational lesson summary",
      quickViewBody:
        "In this language, the lesson appears in a structured format so navigation, context, and focus stay fully localized.",
      focusLabel: "Focus",
      moduleLabel: "Module",
      readingTimeLabel: "Reading time",
      continueCourse: "Back to course",
      continueLesson: "Continue path"
    },
    catalogCard: {
      studyFocus: "What you will study",
      level: "Level",
      modules: "Modules",
      lessons: "Lessons",
      accessCourse: "Open course",
      inPreparation: "In preparation",
      enterNow: "Enter now",
      publishedNote: "Published course"
    },
    shared: {
      minutes: "min",
      durationBuckets: {
        "under-5": "Under 5 hours",
        "5-10": "5 to 10 hours",
        "10-20": "10 to 20 hours",
        "20-plus": "20+ hours"
      },
      courseStatus: {
        placeholder: "In structure",
        planned: "Planned",
        draft: "Draft",
        published: "Published",
        archived: "Archived"
      },
      courseLevels: {
        foundation: "Foundation",
        intermediate: "Intermediate",
        advanced: "Advanced"
      }
    }
  },
  es: {
    site: {
      tagline: "Inteligencia de mercado futbolistico, probabilidad y aprendizaje de nivel research.",
      description:
        "Academia publica con cursos profundos sobre futbol, precio, probabilidad, riesgo, research y prediction markets.",
      promoCopy: "Aprende construyendo. Inscripciones abiertas: Framework de 9 pasos para analizar un partido de futbol.",
      promoCta: "Entrar al curso",
      navigation: [
        { label: "Inicio", href: "/" },
        { label: "Cursos", href: "/courses/" }
      ],
      localeSwitcherLabel: "Idioma"
    },
    home: {
      title: "Inicio",
      description: "Cursos gratuitos e inteligencia predictiva para estudiar futbol con mas criterio.",
      heroLine1: "La Primera Plataforma Gratuita",
      heroLine1HighlightA: "Primera",
      heroLine1HighlightB: "Gratuita",
      heroLine2Prefix: "para",
      heroLine2Highlight: "Inteligencia Predictiva.",
      exploreCta: "Explorar cursos gratuitos",
      sectionEntryEyebrow: "Entrada a la academia",
      sectionEntryTitle: "Lo que encuentras aqui",
      sectionEntryTitleHighlight: "desde el primer dia",
      sectionEntryIntro:
        "No mostramos metricas de vanidad ni testimonios fabricados. Mostramos la estructura de la academia, la profundidad del estudio y la razon por la que existe este proyecto: formar lectores que piensen, evalúen y decidan mejor.",
      sectionAreasEyebrow: "Varias areas de estudio",
      sectionAreasTitlePrefix: "Una academia para aprender",
      sectionAreasTitleHighlightA: "mercado",
      sectionAreasTitleHighlightB: "desde varios angulos",
      sectionAreasIntro:
        "Los cursos no viven dentro de una sola narrativa. La estructura cruza lectura del juego, lectura del mercado, modelado, riesgo y ejecucion.",
      finalEyebrow: "AI MIDAS ACADEMY",
      finalTitlePrefix: "Empezar a aprender con",
      finalTitleHighlight: "Proceso",
      finalBody: "Cursos publicos, profundos y pensados para quien quiere mas conocimiento antes de mas conviccion.",
      signals: [
        {
          index: "01",
          title: "Acceso abierto",
          description:
            "Todos los cursos de la academia son gratuitos y publicos, para hacer este conocimiento mas accesible y menos dependiente del ruido comercial."
        },
        {
          index: "02",
          title: "Profundidad real",
          description:
            "Cada tema se trabaja con mecanismos, ejemplos, failure modes, checklists y una conexion clara entre teoria, lectura de mercado y decision."
        },
        {
          index: "03",
          title: "Vision integrada",
          description:
            "El aprendizaje cruza price, probability, risk, context, research y prediction markets para construir criterio en varias dimensiones."
        },
        {
          index: "04",
          title: "Mejor decision",
          description:
            "El objetivo no es aumentar una confianza teatral, sino mejorar la calidad de lectura, evaluacion y decision de quien invierte tiempo y capital en estos mercados."
        }
      ]
    },
    catalog: {
      title: "Cursos",
      description: "Catalogo de cursos de AI MIDAS ACADEMY con busqueda por nombre, area, nivel y tiempo estimado de estudio.",
      searchLabel: "Buscar nombre del curso",
      searchPlaceholder: "Ej.: Framework de 9 pasos",
      resultsEyebrow: "Resultados del catalogo",
      resultsFound: (count) => `${count} curso encontrado`,
      clearFilters: "Limpiar filtros",
      filtersTitle: "Refina la busqueda",
      filtersIntro: "Selecciona un area de la academia, ajusta el nivel y filtra por tiempo medio de estudio.",
      categoryLegend: "Area de la academia",
      levelLegend: "Nivel del curso",
      durationLegend: "Tiempo medio de estudio",
      allDurations: "Todos",
      publicCatalog: "Catalogo publico",
      coursesAvailable: "Cursos disponibles ahora",
      noResultsEyebrow: "Sin resultados",
      noResultsTitle: "Ningun curso coincide con los filtros actuales.",
      noResultsBody: "Ajusta la busqueda, elimina algun filtro o vuelve a la vista completa del catalogo.",
      searchChipPrefix: "Busqueda",
      courseCount: (count) => `${count} curso`
    },
    course: {
      publishedCourse: "Curso publicado",
      startCourse: "Iniciar curso",
      courseMap: "Mapa del curso",
      localProgress: "Progreso local",
      progressLabel: (done, total) => `${done}/${total} lecciones completadas`,
      modules: (count) => `${count} modulos`,
      lessons: (count) => `${count} lecciones`,
      whyThisCourseExists: "Por que existe este curso",
      fromImpressionToStructure: "De la impresion a la estructura",
      audience: "Publico objetivo",
      audienceTitle: "Para quien quiere estudiar con metodo",
      avoid: "Lo que vas a evitar",
      avoidTitle: "Menos impresion, mas criterio",
      prerequisites: "Prerequisitos",
      prerequisitesTitle: "Lo minimo para entrar bien",
      expandedSummary: "Resumen ampliado",
      expandedSummaryToggle: "Leer la explicacion completa del curso",
      curriculum: "Curriculo",
      curriculumTitle: "Modulos y lecciones",
      curriculumIntro: "Un mapa simple para seguir el orden del curso sin perderte en el scroll.",
      moduleLabel: (index) => `Modulo ${index}`,
      lessonLabel: (index) => `Leccion ${index}`,
      lessonCount: (count) => `${count} lecciones`
    },
    lesson: {
      courseContext: "Contexto del curso",
      lessonLabel: (index) => `Leccion ${index}`,
      markComplete: "Marcar como completada",
      previousLesson: "Leccion anterior",
      nextLesson: "Proxima leccion",
      startOfCourse: "Inicio del curso",
      endOfCurrentPath: "Fin del recorrido actual",
      quickViewEyebrow: "Vista traducida",
      quickViewTitle: "Resumen operativo de la leccion",
      quickViewBody:
        "En este idioma, la leccion aparece en formato estructurado para mantener navegacion, contexto y foco totalmente localizados.",
      focusLabel: "Foco",
      moduleLabel: "Modulo",
      readingTimeLabel: "Tiempo de lectura",
      continueCourse: "Volver al curso",
      continueLesson: "Continuar recorrido"
    },
    catalogCard: {
      studyFocus: "Lo que vas a estudiar",
      level: "Nivel",
      modules: "Modulos",
      lessons: "Lecciones",
      accessCourse: "Abrir curso",
      inPreparation: "En preparacion",
      enterNow: "Entrar ahora",
      publishedNote: "Curso publicado"
    },
    shared: {
      minutes: "min",
      durationBuckets: {
        "under-5": "Menos de 5 horas",
        "5-10": "5 a 10 horas",
        "10-20": "10 a 20 horas",
        "20-plus": "20+ horas"
      },
      courseStatus: {
        placeholder: "En estructura",
        planned: "Planificado",
        draft: "Borrador",
        published: "Publicado",
        archived: "Archivado"
      },
      courseLevels: {
        foundation: "Fundacion",
        intermediate: "Intermedio",
        advanced: "Avanzado"
      }
    }
  },
  de: {
    site: {
      tagline: "Fussball-Marktintelligenz, Wahrscheinlichkeit und research-orientiertes Lernen.",
      description:
        "Offene Akademie mit tiefen Kursen zu Fussball, Preis, Wahrscheinlichkeit, Risiko, Research und Prediction Markets.",
      promoCopy: "Lernen durch Bauen. Anmeldung offen: 9-Schritte-Framework zur Analyse eines Fussballspiels.",
      promoCta: "Zum Kurs",
      navigation: [
        { label: "Start", href: "/" },
        { label: "Kurse", href: "/courses/" }
      ],
      localeSwitcherLabel: "Sprache"
    },
    home: {
      title: "Start",
      description: "Kostenlose Kurse und Predictive Intelligence, um Fussball mit mehr Disziplin zu studieren.",
      heroLine1: "Die Erste Kostenlose Plattform",
      heroLine1HighlightA: "Erste",
      heroLine1HighlightB: "Kostenlose",
      heroLine2Prefix: "fur",
      heroLine2Highlight: "Predictive Intelligence.",
      exploreCta: "Kostenlose Kurse entdecken",
      sectionEntryEyebrow: "Einstieg in die Akademie",
      sectionEntryTitle: "Was du hier findest",
      sectionEntryTitleHighlight: "ab dem ersten Tag",
      sectionEntryIntro:
        "Wir zeigen keine Vanity-Metriken und keine erfundenen Testimonials. Wir zeigen die Struktur der Akademie, die Tiefe des Studiums und den Grund fur dieses Projekt: Leser auszubilden, die besser denken, bewerten und entscheiden.",
      sectionAreasEyebrow: "Mehrere Lernbereiche",
      sectionAreasTitlePrefix: "Eine Akademie, um",
      sectionAreasTitleHighlightA: "Markte",
      sectionAreasTitleHighlightB: "aus mehreren Winkeln zu lernen",
      sectionAreasIntro:
        "Die Kurse leben nicht in einer einzigen Erzahlung. Die Struktur verbindet Spielanalyse, Marktanalyse, Modellierung, Risiko und Ausfuhrung.",
      finalEyebrow: "AI MIDAS ACADEMY",
      finalTitlePrefix: "Mit",
      finalTitleHighlight: "Prozess",
      finalBody: "Offentliche, tiefe Kurse fur Menschen, die mehr Wissen vor mehr Uberzeugung wollen.",
      signals: [
        {
          index: "01",
          title: "Offener Zugang",
          description:
            "Alle Kurse der Akademie sind kostenlos und offentlich, damit dieses Wissen zuganglicher und weniger vom kommerziellen Rauschen abhangig wird."
        },
        {
          index: "02",
          title: "Echte Tiefe",
          description:
            "Jedes Thema wird uber Mechanismen, Beispiele, Failure Modes, Checklists und eine klare Verbindung zwischen Theorie, Marktlesen und Entscheidung entwickelt."
        },
        {
          index: "03",
          title: "Integrierte Sicht",
          description:
            "Das Lernen verbindet price, probability, risk, context, research und prediction markets, um Urteilsvermogen uber mehrere Ebenen aufzubauen."
        },
        {
          index: "04",
          title: "Bessere Entscheidungen",
          description:
            "Das Ziel ist nicht theatralische Sicherheit, sondern bessere Lesung, Bewertung und Entscheidung fur Menschen, die Zeit und Kapital in diese Markte investieren."
        }
      ]
    },
    catalog: {
      title: "Kurse",
      description: "Kurskatalog der AI MIDAS ACADEMY mit Suche nach Name, Bereich, Niveau und geschatzter Lernzeit.",
      searchLabel: "Kursname suchen",
      searchPlaceholder: "Z. B. 9-Schritte-Framework",
      resultsEyebrow: "Katalogergebnisse",
      resultsFound: (count) => `${count} Kurs gefunden`,
      clearFilters: "Filter zurucksetzen",
      filtersTitle: "Suche verfeinern",
      filtersIntro: "Wahle einen Akademiebereich, passe das Niveau an und filtere nach geschatzter Lernzeit.",
      categoryLegend: "Akademiebereich",
      levelLegend: "Kursniveau",
      durationLegend: "Geschatzte Lernzeit",
      allDurations: "Alle",
      publicCatalog: "Offentlicher Katalog",
      coursesAvailable: "Jetzt verfugbare Kurse",
      noResultsEyebrow: "Keine Ergebnisse",
      noResultsTitle: "Kein Kurs passt zu den aktuellen Filtern.",
      noResultsBody: "Passe die Suche an, entferne einen Filter oder kehre zum gesamten Katalog zuruck.",
      searchChipPrefix: "Suche",
      courseCount: (count) => `${count} Kurs`
    },
    course: {
      publishedCourse: "Veroffentlichter Kurs",
      startCourse: "Kurs starten",
      courseMap: "Kurskarte",
      localProgress: "Lokaler Fortschritt",
      progressLabel: (done, total) => `${done}/${total} Lektionen abgeschlossen`,
      modules: (count) => `${count} Module`,
      lessons: (count) => `${count} Lektionen`,
      whyThisCourseExists: "Warum dieser Kurs existiert",
      fromImpressionToStructure: "Von Eindruck zu Struktur",
      audience: "Zielgruppe",
      audienceTitle: "Fur Menschen, die mit Methode lernen wollen",
      avoid: "Was du vermeiden wirst",
      avoidTitle: "Weniger Eindruck, mehr Kriterien",
      prerequisites: "Voraussetzungen",
      prerequisitesTitle: "Das Minimum fur einen guten Einstieg",
      expandedSummary: "Erweiterte Zusammenfassung",
      expandedSummaryToggle: "Die vollstandige Kurserklarung lesen",
      curriculum: "Curriculum",
      curriculumTitle: "Module und Lektionen",
      curriculumIntro: "Eine einfache Karte, um der Kursreihenfolge zu folgen, ohne im Scroll zu verlieren.",
      moduleLabel: (index) => `Modul ${index}`,
      lessonLabel: (index) => `Lektion ${index}`,
      lessonCount: (count) => `${count} Lektionen`
    },
    lesson: {
      courseContext: "Kurskontext",
      lessonLabel: (index) => `Lektion ${index}`,
      markComplete: "Als abgeschlossen markieren",
      previousLesson: "Vorherige Lektion",
      nextLesson: "Nachste Lektion",
      startOfCourse: "Kursbeginn",
      endOfCurrentPath: "Ende des aktuellen Pfads",
      quickViewEyebrow: "Ubersetzte Ansicht",
      quickViewTitle: "Operative Zusammenfassung der Lektion",
      quickViewBody:
        "In dieser Sprache erscheint die Lektion in einem strukturierten Format, damit Navigation, Kontext und Fokus vollstandig lokalisiert bleiben.",
      focusLabel: "Fokus",
      moduleLabel: "Modul",
      readingTimeLabel: "Lesezeit",
      continueCourse: "Zuruck zum Kurs",
      continueLesson: "Pfad fortsetzen"
    },
    catalogCard: {
      studyFocus: "Was du studieren wirst",
      level: "Niveau",
      modules: "Module",
      lessons: "Lektionen",
      accessCourse: "Kurs offnen",
      inPreparation: "In Vorbereitung",
      enterNow: "Jetzt betreten",
      publishedNote: "Veroffentlichter Kurs"
    },
    shared: {
      minutes: "Min.",
      durationBuckets: {
        "under-5": "Unter 5 Stunden",
        "5-10": "5 bis 10 Stunden",
        "10-20": "10 bis 20 Stunden",
        "20-plus": "20+ Stunden"
      },
      courseStatus: {
        placeholder: "Im Aufbau",
        planned: "Geplant",
        draft: "Entwurf",
        published: "Veroffentlicht",
        archived: "Archiviert"
      },
      courseLevels: {
        foundation: "Grundlage",
        intermediate: "Mittelstufe",
        advanced: "Fortgeschritten"
      }
    }
  },
  ko: {
    site: {
      tagline: "Football market intelligence, probability, and research-grade learning.",
      description:
        "Football, price, probability, risk, research, and prediction markets를 다루는 심화 공개 아카데미.",
      promoCopy: "만들면서 배우기. 현재 등록 가능: 축구 경기 분석 9단계 프레임워크.",
      promoCta: "코스 입장",
      navigation: [
        { label: "홈", href: "/" },
        { label: "코스", href: "/courses/" }
      ],
      localeSwitcherLabel: "언어"
    },
    home: {
      title: "홈",
      description: "더 높은 기준으로 축구를 공부하기 위한 무료 코스와 predictive intelligence.",
      heroLine1: "첫 번째 무료 플랫폼",
      heroLine1HighlightA: "첫 번째",
      heroLine1HighlightB: "무료",
      heroLine2Prefix: "",
      heroLine2Highlight: "Predictive Intelligence.",
      exploreCta: "무료 코스 보기",
      sectionEntryEyebrow: "아카데미 입장",
      sectionEntryTitle: "첫날부터 만나는 것",
      sectionEntryTitleHighlight: "",
      sectionEntryIntro:
        "우리는 허영 지표나 만들어진 후기를 앞세우지 않습니다. 대신 아카데미의 구조, 학습의 깊이, 그리고 이 프로젝트가 존재하는 이유를 보여 줍니다. 더 잘 생각하고 평가하고 결정하는 독자를 만드는 것이 목표입니다.",
      sectionAreasEyebrow: "여러 학습 영역",
      sectionAreasTitlePrefix: "",
      sectionAreasTitleHighlightA: "시장",
      sectionAreasTitleHighlightB: "여러 각도에서 배우는 아카데미",
      sectionAreasIntro:
        "이 코스들은 하나의 서사에 갇히지 않습니다. 경기 읽기, 시장 읽기, 모델링, 리스크, 실행을 함께 다룹니다.",
      finalEyebrow: "AI MIDAS ACADEMY",
      finalTitlePrefix: "",
      finalTitleHighlight: "프로세스와 함께 학습 시작",
      finalBody: "더 큰 확신보다 더 많은 지식을 먼저 원하는 사람들을 위한 공개 심화 코스입니다.",
      signals: [
        {
          index: "01",
          title: "개방형 접근",
          description:
            "아카데미의 모든 코스는 무료이며 공개되어 있어, 이런 지식이 더 접근 가능하고 상업적 소음에 덜 의존하도록 만듭니다."
        },
        {
          index: "02",
          title: "실제 깊이",
          description:
            "각 주제는 메커니즘, 예시, failure modes, checklists, 그리고 이론과 시장 읽기, 결정 사이의 명확한 연결로 구성됩니다."
        },
        {
          index: "03",
          title: "통합된 시야",
          description:
            "학습은 price, probability, risk, context, research, prediction markets를 함께 다루며 여러 층위의 판단력을 만듭니다."
        },
        {
          index: "04",
          title: "더 나은 결정",
          description:
            "목표는 과장된 자신감이 아니라, 이 시장에 시간과 자본을 투입하는 사람들의 읽기, 평가, 결정의 질을 높이는 것입니다."
        }
      ]
    },
    catalog: {
      title: "코스",
      description: "이름, 영역, 수준, 예상 학습 시간으로 검색할 수 있는 AI MIDAS ACADEMY 코스 카탈로그.",
      searchLabel: "코스 이름 검색",
      searchPlaceholder: "예: 9단계 프레임워크",
      resultsEyebrow: "카탈로그 결과",
      resultsFound: (count) => `${count}개 코스 발견`,
      clearFilters: "필터 초기화",
      filtersTitle: "검색 정교화",
      filtersIntro: "아카데미 영역을 선택하고 수준을 조정한 뒤 예상 학습 시간으로 필터링하세요.",
      categoryLegend: "아카데미 영역",
      levelLegend: "코스 수준",
      durationLegend: "예상 학습 시간",
      allDurations: "전체",
      publicCatalog: "공개 카탈로그",
      coursesAvailable: "현재 이용 가능한 코스",
      noResultsEyebrow: "결과 없음",
      noResultsTitle: "현재 필터와 일치하는 코스가 없습니다.",
      noResultsBody: "검색어를 조정하거나 필터를 제거하거나 전체 카탈로그로 돌아가세요.",
      searchChipPrefix: "검색",
      courseCount: (count) => `${count}개 코스`
    },
    course: {
      publishedCourse: "공개된 코스",
      startCourse: "코스 시작",
      courseMap: "코스 맵",
      localProgress: "로컬 진행도",
      progressLabel: (done, total) => `${done}/${total} 레슨 완료`,
      modules: (count) => `${count}개 모듈`,
      lessons: (count) => `${count}개 레슨`,
      whyThisCourseExists: "이 코스가 존재하는 이유",
      fromImpressionToStructure: "인상에서 구조로",
      audience: "대상 독자",
      audienceTitle: "방법론으로 공부하려는 사람들을 위해",
      avoid: "피하게 될 것",
      avoidTitle: "인상은 줄이고 기준은 늘리기",
      prerequisites: "사전 요구사항",
      prerequisitesTitle: "좋은 시작을 위한 최소 조건",
      expandedSummary: "확장 요약",
      expandedSummaryToggle: "코스 전체 설명 읽기",
      curriculum: "커리큘럼",
      curriculumTitle: "모듈과 레슨",
      curriculumIntro: "스크롤 속에서 길을 잃지 않고 코스 순서를 따라갈 수 있는 간단한 지도입니다.",
      moduleLabel: (index) => `모듈 ${index}`,
      lessonLabel: (index) => `레슨 ${index}`,
      lessonCount: (count) => `${count}개 레슨`
    },
    lesson: {
      courseContext: "코스 맥락",
      lessonLabel: (index) => `레슨 ${index}`,
      markComplete: "완료로 표시",
      previousLesson: "이전 레슨",
      nextLesson: "다음 레슨",
      startOfCourse: "코스 시작",
      endOfCurrentPath: "현재 경로의 끝",
      quickViewEyebrow: "번역된 보기",
      quickViewTitle: "레슨 운영 요약",
      quickViewBody:
        "이 언어에서는 탐색, 맥락, 초점을 완전히 현지화하기 위해 레슨이 구조화된 형식으로 표시됩니다.",
      focusLabel: "핵심 초점",
      moduleLabel: "모듈",
      readingTimeLabel: "읽기 시간",
      continueCourse: "코스로 돌아가기",
      continueLesson: "학습 계속하기"
    },
    catalogCard: {
      studyFocus: "학습 초점",
      level: "수준",
      modules: "모듈",
      lessons: "레슨",
      accessCourse: "코스 열기",
      inPreparation: "준비 중",
      enterNow: "지금 입장",
      publishedNote: "공개된 코스"
    },
    shared: {
      minutes: "분",
      durationBuckets: {
        "under-5": "5시간 미만",
        "5-10": "5~10시간",
        "10-20": "10~20시간",
        "20-plus": "20시간 이상"
      },
      courseStatus: {
        placeholder: "구성 중",
        planned: "계획됨",
        draft: "초안",
        published: "공개됨",
        archived: "보관됨"
      },
      courseLevels: {
        foundation: "기초",
        intermediate: "중급",
        advanced: "고급"
      }
    }
  }
};

const categoryTranslations: Record<
  AppLocale,
  Record<string, Pick<Category, "name" | "summary" | "angle">>
> = {
  "pt-br": {
    "market-intelligence": {
      name: "Inteligencia de Mercado",
      summary: "Leitura de preco, contexto competitivo, informacao disponivel e estrutura de mercado antes do apito inicial.",
      angle: "Odds movement, informacao assimetrica e leitura de comportamento."
    },
    "probability-modeling": {
      name: "Probabilidade e Modelagem",
      summary: "Probabilidade aplicada ao futebol sem fantasia matematica nem simplificacoes frageis.",
      angle: "Base rates, cenarios, incerteza e disciplina quantitativa."
    },
    "ai-prediction-systems": {
      name: "Sistemas de Predicao com IA",
      summary: "Sistemas de predicao com dados, hipoteses, features e limites reais de modelagem.",
      angle: "Model design, validacao e interpretacao operacional."
    },
    "football-research": {
      name: "Pesquisa em Futebol",
      summary: "Metodos de pesquisa para transformar jogos, equipes e competicoes em inteligencia acionavel.",
      angle: "Contexto tatico, dados, calendario e qualidade de amostra."
    },
    "prediction-markets-on-chain": {
      name: "Prediction Markets e On-chain",
      summary: "Mercados on-chain, estrutura de liquidez, execucao e leitura de incentivos em mercados de previsao.",
      angle: "Microestrutura, pricing e comportamento do fluxo."
    },
    "risk-execution": {
      name: "Risco e Execucao",
      summary: "Gestao de risco, sizing, disciplina e regras de execucao para quem opera sob incerteza.",
      angle: "Processo, exposicao, variancia e sobrevivencia."
    }
  },
  en: {
    "market-intelligence": {
      name: "Market Intelligence",
      summary: "Price reading, competitive context, available information, and market structure before kickoff.",
      angle: "Odds movement, information asymmetry, and behavioral reading."
    },
    "probability-modeling": {
      name: "Probability & Modeling",
      summary: "Probability applied to football without mathematical fantasy or fragile simplifications.",
      angle: "Base rates, scenarios, uncertainty, and quantitative discipline."
    },
    "ai-prediction-systems": {
      name: "AI Prediction Systems",
      summary: "Prediction systems built with data, hypotheses, features, and real modeling limits.",
      angle: "Model design, validation, and operational interpretation."
    },
    "football-research": {
      name: "Football Research",
      summary: "Research methods for turning matches, teams, and competitions into actionable intelligence.",
      angle: "Tactical context, data, calendar, and sample quality."
    },
    "prediction-markets-on-chain": {
      name: "Prediction Markets & On-chain",
      summary: "On-chain markets, liquidity structure, execution, and incentive reading in prediction markets.",
      angle: "Microstructure, pricing, and flow behavior."
    },
    "risk-execution": {
      name: "Risk & Execution",
      summary: "Risk management, sizing, discipline, and execution rules for operating under uncertainty.",
      angle: "Process, exposure, variance, and survival."
    }
  },
  es: {
    "market-intelligence": {
      name: "Inteligencia de Mercado",
      summary: "Lectura de precio, contexto competitivo, informacion disponible y estructura de mercado antes del pitido inicial.",
      angle: "Movimiento de cuotas, informacion asimetrica y lectura de comportamiento."
    },
    "probability-modeling": {
      name: "Probabilidad y Modelado",
      summary: "Probabilidad aplicada al futbol sin fantasia matematica ni simplificaciones fragiles.",
      angle: "Base rates, escenarios, incertidumbre y disciplina cuantitativa."
    },
    "ai-prediction-systems": {
      name: "Sistemas de Prediccion con IA",
      summary: "Sistemas de prediccion con datos, hipotesis, features y limites reales de modelado.",
      angle: "Diseno de modelos, validacion e interpretacion operacional."
    },
    "football-research": {
      name: "Research de Futbol",
      summary: "Metodos de research para transformar partidos, equipos y competiciones en inteligencia accionable.",
      angle: "Contexto tactico, datos, calendario y calidad de muestra."
    },
    "prediction-markets-on-chain": {
      name: "Prediction Markets y On-chain",
      summary: "Mercados on-chain, estructura de liquidez, ejecucion y lectura de incentivos en mercados de prediccion.",
      angle: "Microestructura, pricing y comportamiento del flujo."
    },
    "risk-execution": {
      name: "Riesgo y Ejecucion",
      summary: "Gestion de riesgo, sizing, disciplina y reglas de ejecucion para operar bajo incertidumbre.",
      angle: "Proceso, exposicion, varianza y supervivencia."
    }
  },
  de: {
    "market-intelligence": {
      name: "Marktintelligenz",
      summary: "Preislesen, Wettbewerbskontext, verfugbare Information und Marktstruktur vor dem Anpfiff.",
      angle: "Quotenbewegung, Informationsasymmetrie und Verhaltenslesen."
    },
    "probability-modeling": {
      name: "Wahrscheinlichkeit & Modellierung",
      summary: "Wahrscheinlichkeit im Fussball ohne mathematische Fantasie oder fragile Vereinfachungen.",
      angle: "Base Rates, Szenarien, Unsicherheit und quantitative Disziplin."
    },
    "ai-prediction-systems": {
      name: "KI-Prognosesysteme",
      summary: "Prognosesysteme mit Daten, Hypothesen, Features und realen Modellierungsgrenzen.",
      angle: "Modelldesign, Validierung und operative Interpretation."
    },
    "football-research": {
      name: "Fussball-Research",
      summary: "Research-Methoden, um Spiele, Teams und Wettbewerbe in nutzbare Intelligenz zu verwandeln.",
      angle: "Taktischer Kontext, Daten, Kalender und Stichprobenqualitat."
    },
    "prediction-markets-on-chain": {
      name: "Prediction Markets & On-chain",
      summary: "On-chain-Markte, Liquiditatsstruktur, Ausfuhrung und Anreizlesen in Prediction Markets.",
      angle: "Mikrostruktur, Pricing und Flow-Verhalten."
    },
    "risk-execution": {
      name: "Risiko & Ausfuhrung",
      summary: "Risikomanagement, Sizing, Disziplin und Ausfuhrungsregeln fur Handeln unter Unsicherheit.",
      angle: "Prozess, Exposure, Varianz und Uberleben."
    }
  },
  ko: {
    "market-intelligence": {
      name: "시장 인텔리전스",
      summary: "킥오프 전 가격 읽기, 경쟁 맥락, 이용 가능한 정보, 시장 구조를 다룹니다.",
      angle: "배당 움직임, 정보 비대칭, 행동 읽기."
    },
    "probability-modeling": {
      name: "확률과 모델링",
      summary: "수학적 환상이나 약한 단순화 없이 축구에 적용되는 확률을 다룹니다.",
      angle: "기초 확률, 시나리오, 불확실성, 정량 규율."
    },
    "ai-prediction-systems": {
      name: "AI 예측 시스템",
      summary: "데이터, 가설, feature, 모델링 한계를 포함한 예측 시스템을 다룹니다.",
      angle: "모델 설계, 검증, 운영 해석."
    },
    "football-research": {
      name: "축구 리서치",
      summary: "경기, 팀, 대회를 실행 가능한 인텔리전스로 바꾸는 리서치 방법입니다.",
      angle: "전술 맥락, 데이터, 일정, 샘플 품질."
    },
    "prediction-markets-on-chain": {
      name: "Prediction Markets 및 On-chain",
      summary: "온체인 시장, 유동성 구조, 실행, 예측 시장의 인센티브 읽기를 다룹니다.",
      angle: "미시구조, 가격 형성, 흐름 행동."
    },
    "risk-execution": {
      name: "리스크와 실행",
      summary: "불확실성 아래에서의 리스크 관리, sizing, 규율, 실행 규칙을 다룹니다.",
      angle: "프로세스, 노출, 변동성, 생존."
    }
  }
};

export function getDictionary(locale: AppLocale) {
  return dictionaries[locale];
}

export function getSiteData(locale: AppLocale): SiteData {
  const dictionary = getDictionary(locale);

  return {
    name: "AI MIDAS ACADEMY",
    tagline: dictionary.site.tagline,
    description: dictionary.site.description,
    navigation: dictionary.site.navigation
  };
}

const categorySlugs = [
  "market-intelligence",
  "probability-modeling",
  "ai-prediction-systems",
  "football-research",
  "prediction-markets-on-chain",
  "risk-execution"
] as const;

export function getCategories(locale: AppLocale): Category[] {
  return categorySlugs.map((slug) => ({
    slug,
    ...categoryTranslations[locale][slug]
  }));
}

export function getLocaleName(locale: AppLocale) {
  return localeLabels[locale];
}

export function getDefaultDictionary() {
  return dictionaries[defaultLocale];
}
