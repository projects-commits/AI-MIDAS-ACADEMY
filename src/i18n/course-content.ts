import type { CourseData } from "../types";
import { defaultLocale, type AppLocale, type SecondaryLocale } from "./config";
import { frameworkTradingPtMetadataClean } from "./framework-trading-localized-content";

type CourseOverlay = {
  title: string;
  subtitle: string;
  corePromise: string;
  whyThisCourseExists: string;
  audience: string;
  enemy: string;
  prerequisites: string[];
  modules: Record<string, string>;
  lessons: Record<string, string>;
};

type OverlayRegistry = Record<string, Record<SecondaryLocale, CourseOverlay>>;

const overlays: OverlayRegistry = {
  "course-framework-9-passos": {
    en: {
      title: "9-Step Framework for Analyzing a Football Match",
      subtitle: "A pre-live research system for turning football into context, probability, price, and documented risk.",
      corePromise:
        "Teach a 9-step process for analyzing a football match as a system of context, price, probability, risk, and research.",
      whyThisCourseExists:
        "This course replaces scattered reading with an auditable framework that organizes psychology, culture, patterns, behavior, environment, and market before the decision.",
      audience:
        "Readers who want to study football with structure: analysts, transitioning traders, prediction market operators, and research consumers who want to evaluate arguments independently.",
      enemy:
        "Impressionistic analysis, convenient hindsight, overconfidence, dependence on public narrative, and decisions without invalidation criteria.",
      prerequisites: [
        "Basic knowledge of football and decimal odds markets",
        "Willingness to document hypotheses before reaching conclusions",
        "Early notions of probability, risk, and contextual reading",
        "Ability to work with practical examples and checklists"
      ],
      modules: {
        "module-1": "Read context before price",
        "module-2": "Translate signals into observable behavior",
        "module-3": "Audit the observer and close the decision"
      },
      lessons: {
        "lesson-1": "Step 1: Match psychology",
        "lesson-2": "Step 2: Culture, identity, and rivalry",
        "lesson-3": "Step 3: Tactical, statistical, and market patterns",
        "lesson-4": "Step 4: Belief, philosophy, and game principles",
        "lesson-5": "Step 5: On-pitch behavior and market behavior",
        "lesson-6": "Step 6: Energy, tempo, and competitive momentum",
        "lesson-7": "Step 7: Physical, institutional, and informational environment",
        "lesson-8": "Step 8: Observer, bias, and interpretation quality",
        "lesson-9": "Step 9: The object of the game, rules, and technology"
      }
    },
    es: {
      title: "Framework de 9 pasos para analizar un partido de futbol",
      subtitle: "Un sistema de research pre-live para transformar futbol en contexto, probabilidad, precio y riesgo documentado.",
      corePromise:
        "Ensenar un proceso de 9 pasos para analizar un partido de futbol como sistema de contexto, precio, probabilidad, riesgo y research.",
      whyThisCourseExists:
        "Este curso sustituye la lectura dispersa por un framework auditable que organiza psicologia, cultura, patrones, comportamiento, ambiente y mercado antes de la decision.",
      audience:
        "Lectores que quieren estudiar futbol con estructura: analistas, traders en transicion, operadores de prediction markets y consumidores de research que desean evaluar argumentos con independencia.",
      enemy:
        "Analisis impresionista, retrospectiva conveniente, exceso de confianza, dependencia de narrativa publica y decision sin criterio de invalidacion.",
      prerequisites: [
        "Conocimiento basico de futbol y mercados de cuotas decimales",
        "Disposicion para documentar hipotesis antes de sacar conclusiones",
        "Nociones iniciales de probabilidad, riesgo y lectura contextual",
        "Capacidad para trabajar con ejemplos practicos y checklists"
      ],
      modules: {
        "module-1": "Leer el contexto antes del precio",
        "module-2": "Traducir senales en comportamiento observable",
        "module-3": "Auditar al observador y cerrar la decision"
      },
      lessons: {
        "lesson-1": "Paso 1: Psicologia del juego",
        "lesson-2": "Paso 2: Cultura, identidad y rivalidad",
        "lesson-3": "Paso 3: Patrones tacticos, estadisticos y de mercado",
        "lesson-4": "Paso 4: Creencia, filosofia y principios de juego",
        "lesson-5": "Paso 5: Comportamiento en campo y comportamiento del mercado",
        "lesson-6": "Paso 6: Energia, ritmo y momento competitivo",
        "lesson-7": "Paso 7: Entorno fisico, institucional e informacional",
        "lesson-8": "Paso 8: Observador, sesgos y calidad de la interpretacion",
        "lesson-9": "Paso 9: Objeto del juego, reglas y tecnologia"
      }
    },
    de: {
      title: "9-Schritte-Framework zur Analyse eines Fussballspiels",
      subtitle: "Ein Pre-live-Research-System, um Fussball in Kontext, Wahrscheinlichkeit, Preis und dokumentiertes Risiko zu ubersetzen.",
      corePromise:
        "Ein 9-Schritte-Prozess, um ein Fussballspiel als System aus Kontext, Preis, Wahrscheinlichkeit, Risiko und Research zu analysieren.",
      whyThisCourseExists:
        "Dieser Kurs ersetzt verstreutes Lesen durch ein auditierbares Framework, das Psychologie, Kultur, Muster, Verhalten, Umfeld und Markt vor der Entscheidung organisiert.",
      audience:
        "Leser, die Fussball strukturiert studieren wollen: Analysten, Trader im Ubergang, Prediction-Market-Operatoren und Research-Konsumenten mit dem Wunsch nach unabhangiger Bewertung.",
      enemy:
        "Impressionistische Analyse, bequeme Ruckschau, Ubervertrauen, Abhangigkeit von offentlichen Narrativen und Entscheidungen ohne Invalidierungskriterien.",
      prerequisites: [
        "Grundkenntnisse in Fussball und Dezimalquotenmarkten",
        "Bereitschaft, Hypothesen vor Schlussfolgerungen zu dokumentieren",
        "Erste Grundlagen in Wahrscheinlichkeit, Risiko und Kontextlesen",
        "Fahigkeit, mit praktischen Beispielen und Checklisten zu arbeiten"
      ],
      modules: {
        "module-1": "Kontext vor dem Preis lesen",
        "module-2": "Signale in beobachtbares Verhalten ubersetzen",
        "module-3": "Den Beobachter auditieren und die Entscheidung schliessen"
      },
      lessons: {
        "lesson-1": "Schritt 1: Spielpsychologie",
        "lesson-2": "Schritt 2: Kultur, Identitat und Rivalitat",
        "lesson-3": "Schritt 3: Taktische, statistische und Markt-Muster",
        "lesson-4": "Schritt 4: Uberzeugung, Philosophie und Spielprinzipien",
        "lesson-5": "Schritt 5: Verhalten auf dem Platz und Marktverhalten",
        "lesson-6": "Schritt 6: Energie, Tempo und Wettbewerbsmomentum",
        "lesson-7": "Schritt 7: Physisches, institutionelles und informatives Umfeld",
        "lesson-8": "Schritt 8: Beobachter, Bias und Interpretationsqualitat",
        "lesson-9": "Schritt 9: Spielobjekt, Regeln und Technologie"
      }
    },
    ko: {
      title: "축구 경기 분석을 위한 9단계 프레임워크",
      subtitle: "축구를 맥락, 확률, 가격, 문서화된 리스크로 바꾸는 프리라이브 리서치 시스템.",
      corePromise:
        "축구 경기를 맥락, 가격, 확률, 리스크, 리서치의 시스템으로 분석하는 9단계 프로세스를 익히게 합니다.",
      whyThisCourseExists:
        "이 코스는 흩어진 읽기를 대체하여 심리, 문화, 패턴, 행동, 환경, 시장을 결정 이전에 정리하는 감사 가능한 프레임워크를 제공합니다.",
      audience:
        "구조적으로 축구를 공부하려는 독자들: 분석가, 전환기 트레이더, prediction market 운영자, 그리고 논거를 독립적으로 평가하고 싶은 research 소비자.",
      enemy:
        "인상 중심 분석, 편리한 사후 해석, 과도한 자신감, 공공 서사 의존, 무효화 기준 없는 결정.",
      prerequisites: [
        "축구와 십진 배당 시장에 대한 기본 지식",
        "결론 전에 가설을 문서화하려는 의지",
        "확률, 리스크, 맥락 읽기에 대한 초기 개념",
        "실전 예시와 체크리스트로 작업할 수 있는 능력"
      ],
      modules: {
        "module-1": "가격보다 먼저 맥락 읽기",
        "module-2": "신호를 관찰 가능한 행동으로 번역하기",
        "module-3": "관찰자를 감사하고 결정을 닫기"
      },
      lessons: {
        "lesson-1": "1단계: 경기 심리",
        "lesson-2": "2단계: 문화, 정체성, 라이벌리",
        "lesson-3": "3단계: 전술적, 통계적, 시장 패턴",
        "lesson-4": "4단계: 신념, 철학, 경기 원칙",
        "lesson-5": "5단계: 경기장 행동과 시장 행동",
        "lesson-6": "6단계: 에너지, 템포, 경쟁 모멘텀",
        "lesson-7": "7단계: 물리적, 제도적, 정보 환경",
        "lesson-8": "8단계: 관찰자, 편향, 해석 품질",
        "lesson-9": "9단계: 경기의 대상, 규칙, 기술"
      }
    }
  },
  "course-framework-trading-10-20-roi": {
    en: {
      title: "Football Trading Framework 10% to 20% ROI",
      subtitle: "A pre-live system for filtering a small number of 1X2 trades with real movement, usable liquidity, and a documented exit plan.",
      corePromise:
        "Teach a daily framework that turns dozens of football matches into a small set of 1X2 positions with liquidity, verifiable thesis, medium-low risk, and a clear exit plan.",
      whyThisCourseExists:
        "This course replaces impulsive reading of market movement, public narrative, and loose statistics with a narrow funnel: eligible universe, market filters, statistical and contextual confirmation, stake classification, live management, and review.",
      audience:
        "Readers with a basic understanding of odds, Polymarket, and 1X2 markets who want to operate with fewer matches, stronger discipline, and auditable documentation.",
      enemy:
        "Overtrading, late entries into stretched moves, price reading without liquidity, superficial use of statistics, lack of real stop rules, and confusion between one-off results and process quality.",
      prerequisites: [
        "Basic understanding of the 1X2 / Moneyline market",
        "Ability to convert price into implied probability and decimal odds",
        "Willingness to document thesis, risk, and post-trade review",
        "Readiness to accept No Bet when no clear edge exists"
      ],
      modules: {
        "module-1": "From raw list to executable shortlist",
        "module-2": "Statistical confirmation and operational context",
        "module-3": "Execution, risk, and process review"
      },
      lessons: {
        "lesson-1": "System objective, eligible universe, and operational funnel",
        "lesson-2": "Filter 1: market activity, direction, and liquidity",
        "lesson-3": "Filter 2: healthy variation, price-to-odds conversion, and entry window",
        "lesson-4": "Advanced statistics to confirm or reject a 1X2 thesis",
        "lesson-5": "News, prediction sheet, and the analyst's daily workflow",
        "lesson-6": "Pre-live entry, live management, stop loss, and take profit",
        "lesson-7": "Decision system, stake, correlation, and practical limits",
        "lesson-8": "Before the match, during the match, and post-game review"
      }
    },
    es: {
      title: "Framework Trading Futbol 10% a 20% ROI",
      subtitle: "Un sistema pre-live para filtrar un numero pequeno de trades 1X2 con movimiento real, liquidez util y un plan de salida documentado.",
      corePromise:
        "Ensenar un framework diario que transforme decenas de partidos de futbol en pocas posiciones 1X2 con liquidez, tesis verificable, riesgo medio-bajo y un plan de salida claro.",
      whyThisCourseExists:
        "Este curso sustituye la lectura impulsiva del movimiento de mercado, la narrativa publica y las estadisticas sueltas por un embudo estrecho: universo elegible, filtros de mercado, confirmacion estadistica y contextual, clasificacion de stake, gestion live y revision.",
      audience:
        "Lectores con nocion basica de cuotas, Polymarket y mercados 1X2 que quieren operar con menos partidos, mas disciplina y documentacion auditable.",
      enemy:
        "Overtrading, entradas tardias en movimientos estirados, lectura de precio sin liquidez, uso superficial de estadisticas, ausencia de stops reales y confusion entre resultado puntual y calidad del proceso.",
      prerequisites: [
        "Conocimiento basico del mercado 1X2 / Moneyline",
        "Capacidad de convertir precio en probabilidad implicita y cuota decimal",
        "Disposicion para documentar tesis, riesgo y revision post-trade",
        "Capacidad de aceptar No Bet cuando no existe edge claro"
      ],
      modules: {
        "module-1": "De la lista bruta a la shortlist ejecutable",
        "module-2": "Confirmacion estadistica y contexto operacional",
        "module-3": "Ejecucion, riesgo y revision del proceso"
      },
      lessons: {
        "lesson-1": "Objetivo del sistema, universo elegible y embudo operacional",
        "lesson-2": "Filtro 1: actividad, direccion y liquidez de mercado",
        "lesson-3": "Filtro 2: variacion saludable, conversion precio-cuota y ventana de entrada",
        "lesson-4": "Estadisticas avanzadas para confirmar o rechazar un 1X2",
        "lesson-5": "Noticias, ficha de prevision y workflow diario del analista",
        "lesson-6": "Entrada pre-live, gestion live, stop loss y take profit",
        "lesson-7": "Sistema de decision, stake, correlacion y limites practicos",
        "lesson-8": "Antes del partido, durante el partido y revision post-juego"
      }
    },
    de: {
      title: "Fussball-Trading-Framework 10% bis 20% ROI",
      subtitle: "Ein Pre-live-System, um wenige 1X2-Trades mit echter Bewegung, nutzbarer Liquiditat und dokumentiertem Exit-Plan zu filtern.",
      corePromise:
        "Ein tagliches Framework vermitteln, das Dutzende Fussballspiele in wenige 1X2-Positionen mit Liquiditat, verifizierbarer These, mittlerem bis niedrigem Risiko und klarem Exit-Plan verwandelt.",
      whyThisCourseExists:
        "Dieser Kurs ersetzt impulsive Lesarten von Marktbewegung, offentlichen Narrativen und losen Statistiken durch einen engen Funnel: zulassiges Universum, Marktfilter, statistische und kontextuelle Bestatigung, Stake-Klassifikation, Live-Management und Review.",
      audience:
        "Leser mit Grundkenntnissen zu Quoten, Polymarket und 1X2-Markten, die mit weniger Spielen, mehr Disziplin und auditierbarer Dokumentation arbeiten wollen.",
      enemy:
        "Overtrading, spate Einstiege in gestreckte Bewegungen, Preislesen ohne Liquiditat, oberflachliche Statistiknutzung, fehlende echte Stops und die Verwechslung von Einzelergebnis und Prozessqualitat.",
      prerequisites: [
        "Grundverstandnis des 1X2 / Moneyline-Marktes",
        "Fahigkeit, Preis in implizite Wahrscheinlichkeit und Dezimalquote zu ubersetzen",
        "Bereitschaft, These, Risiko und Nachreview zu dokumentieren",
        "Bereitschaft, No Bet zu akzeptieren, wenn kein klarer Edge existiert"
      ],
      modules: {
        "module-1": "Von der Roh-Liste zur ausfuhrbaren Shortlist",
        "module-2": "Statistische Bestatigung und operativer Kontext",
        "module-3": "Ausfuhrung, Risiko und Prozess-Review"
      },
      lessons: {
        "lesson-1": "Systemziel, zulassiges Universum und operativer Funnel",
        "lesson-2": "Filter 1: Marktaktivitat, Richtung und Liquiditat",
        "lesson-3": "Filter 2: gesunde Variation, Preis-zu-Quote-Ubersetzung und Einstiegsfenster",
        "lesson-4": "Advanced Stats zur Bestatigung oder Ablehnung einer 1X2-These",
        "lesson-5": "Nachrichten, Prediction Sheet und taglicher Analysten-Workflow",
        "lesson-6": "Pre-live-Einstieg, Live-Management, Stop Loss und Take Profit",
        "lesson-7": "Entscheidungssystem, Stake, Korrelation und praktische Limits",
        "lesson-8": "Vor dem Spiel, wahrend des Spiels und Nachspiel-Review"
      }
    },
    ko: {
      title: "축구 트레이딩 프레임워크 10%에서 20% ROI",
      subtitle: "실제 움직임, 사용 가능한 유동성, 문서화된 출구 계획이 있는 소수의 1X2 트레이드를 고르기 위한 프리라이브 시스템.",
      corePromise:
        "수십 개의 축구 경기를 유동성, 검증 가능한 가설, 중저위험, 명확한 출구 계획을 갖춘 소수의 1X2 포지션으로 압축하는 일일 프레임워크를 가르칩니다.",
      whyThisCourseExists:
        "이 과정은 시장 움직임, 공적 서사, 느슨한 통계를 충동적으로 읽는 습관을 적격 유니버스, 시장 필터, 통계와 컨텍스트 확인, 스테이크 분류, 라이브 관리, 리뷰로 이어지는 좁은 퍼널로 대체하기 위해 존재합니다.",
      audience:
        "배당, Polymarket, 1X2 시장에 대한 기본 감각이 있고 더 적은 경기, 더 강한 규율, 감사 가능한 문서화로 운영하고 싶은 독자.",
      enemy:
        "과도한 트레이딩, 이미 늘어난 움직임에 늦게 진입하는 습관, 유동성 없는 가격 읽기, 피상적인 통계 사용, 실제 스톱 규칙의 부재, 단발 결과와 프로세스 품질의 혼동.",
      prerequisites: [
        "1X2 / 머니라인 시장에 대한 기본 이해",
        "가격을 암시 확률과 십진 배당으로 바꿀 수 있는 능력",
        "가설, 리스크, 사후 리뷰를 문서화하려는 태도",
        "명확한 엣지가 없을 때 No Bet를 받아들일 준비"
      ],
      modules: {
        "module-1": "원시 목록에서 실행 가능한 쇼트리스트까지",
        "module-2": "통계 확인과 운영 컨텍스트",
        "module-3": "실행, 리스크, 프로세스 리뷰"
      },
      lessons: {
        "lesson-1": "시스템 목표, 적격 유니버스, 운영 퍼널",
        "lesson-2": "필터 1: 시장 활동, 방향, 유동성",
        "lesson-3": "필터 2: 건강한 변동, 가격-배당 변환, 진입 창",
        "lesson-4": "1X2 가설을 확인하거나 거절하기 위한 고급 통계",
        "lesson-5": "뉴스, 예측 시트, 애널리스트의 일일 워크플로",
        "lesson-6": "프리라이브 진입, 라이브 관리, 손절, 이익 실현",
        "lesson-7": "결정 시스템, 스테이크, 상관관계, 실전 한도",
        "lesson-8": "경기 전, 경기 중, 경기 후 리뷰"
      }
    }
  },
  "course-vibe-coding-research": {
    en: {
      title: "Vibe Coding for Building Football Research Tools",
      subtitle: "Research-system architecture, probabilistic modeling, and data extraction with AI assistance while preserving analytical rigor and operational control.",
      corePromise:
        "Structure the use of AI assistance to prototype, validate, and maintain football research pipelines with code traceability, execution isolation, statistical precision, and backtesting discipline.",
      whyThisCourseExists:
        "Commercial sports-analysis tools often behave like black boxes. AI assistance speeds up coding, but it also introduces systemic risk. This course turns vibe coding speed into an auditable research workflow.",
      audience:
        "Practitioners with a base in Python and descriptive statistics who are willing to adopt version control, containers, prompt validation, and systematic backtesting.",
      enemy:
        "Dependence on closed platforms, autonomous agent execution without human validation, probabilistic modeling without rigorous backtesting, API-key leakage, and the illusion that AI replaces architecture design.",
      prerequisites: [
        "Working familiarity with Python and notebook-based exploration",
        "Basic Git usage or willingness to adopt version control",
        "Comfort reading statistical outputs and football data tables",
        "Readiness to test, document, and audit every research step"
      ],
      modules: {
        "module-1": "Environment foundation and security",
        "module-2": "Context engineering and agents",
        "module-3": "Data extraction and market modeling",
        "module-4": "Backtesting and pipeline maintenance"
      },
      lessons: {
        "lesson-1": "Versioning environment: Git and GitHub",
        "lesson-2": "IDE and development environment",
        "lesson-3": "Data sources for football analysis",
        "lesson-4": "Prompt and AI agent security",
        "lesson-5": "Prompt engineering and skills",
        "lesson-6": "Agents and agent frameworks",
        "lesson-7": "Polymarket data extraction",
        "lesson-8": "Poisson distribution model",
        "lesson-9": "Elo rating model",
        "lesson-10": "Backtest and validation",
        "lesson-11": "Building reusable skills"
      }
    },
    es: {
      title: "Vibe Coding para construir herramientas de research de futbol",
      subtitle: "Arquitectura de sistemas de research, modelado probabilistico y extraccion de datos con asistencia de IA sin perder rigor analitico ni control operacional.",
      corePromise:
        "Estructurar el uso de asistencia de IA para prototipar, validar y mantener pipelines de research de futbol con trazabilidad de codigo, aislamiento de ejecucion, precision estadistica y disciplina de backtesting.",
      whyThisCourseExists:
        "Las herramientas comerciales de analisis deportivo suelen operar como cajas negras. La asistencia de IA acelera la escritura de codigo, pero tambien introduce riesgo sistemico. Este curso convierte la velocidad del vibe coding en un flujo de research auditable.",
      audience:
        "Profesionales con base en Python y estadistica descriptiva, dispuestos a adoptar control de versiones, contenedores, validacion de prompts y backtesting sistematico.",
      enemy:
        "Dependencia de plataformas cerradas, ejecucion autonoma de agentes sin validacion humana, modelado probabilistico sin backtesting riguroso, fuga de claves API e ilusion de que la IA sustituye el diseno de arquitectura.",
      prerequisites: [
        "Base funcional en Python y exploracion con notebooks",
        "Uso basico de Git o disposicion para adoptar versionado",
        "Comodidad leyendo salidas estadisticas y tablas de datos de futbol",
        "Disposicion para probar, documentar y auditar cada paso de research"
      ],
      modules: {
        "module-1": "Fundacion del entorno y seguridad",
        "module-2": "Ingenieria de contexto y agentes",
        "module-3": "Extraccion de datos y modelado de mercado",
        "module-4": "Backtesting y mantenimiento del pipeline"
      },
      lessons: {
        "lesson-1": "Entorno de versionado: Git y GitHub",
        "lesson-2": "IDE y entorno de desarrollo",
        "lesson-3": "Fuentes de datos para analisis de futbol",
        "lesson-4": "Seguridad en prompts y agentes de IA",
        "lesson-5": "Ingenieria de prompts y skills",
        "lesson-6": "Agents y frameworks de agents",
        "lesson-7": "Extraccion de datos de Polymarket",
        "lesson-8": "Modelo de distribucion de Poisson",
        "lesson-9": "Modelo de Elo Rating",
        "lesson-10": "Backtest y validacion",
        "lesson-11": "Crear skills reutilizables"
      }
    },
    de: {
      title: "Vibe Coding zum Aufbau von Fussball-Research-Tools",
      subtitle: "Architektur von Research-Systemen, probabilistische Modellierung und Datenextraktion mit KI-Unterstutzung bei analytischer Strenge und operativer Kontrolle.",
      corePromise:
        "Die Nutzung von KI-Unterstutzung so strukturieren, dass Fussball-Research-Pipelines mit Code-Nachvollziehbarkeit, isolierter Ausfuhrung, statistischer Genauigkeit und Backtesting-Disziplin prototypisiert, validiert und gepflegt werden.",
      whyThisCourseExists:
        "Kommerzielle Sportanalyse-Tools verhalten sich oft wie Black Boxes. KI-Unterstutzung beschleunigt das Schreiben von Code, bringt aber systemische Risiken mit sich. Dieser Kurs verwandelt die Geschwindigkeit des Vibe Codings in einen auditierbaren Research-Workflow.",
      audience:
        "Praktiker mit Grundlagen in Python und deskriptiver Statistik, die Versionierung, Container, Prompt-Validierung und systematisches Backtesting einsetzen wollen.",
      enemy:
        "Abhangigkeit von geschlossenen Plattformen, autonome Agenten ohne menschliche Validierung, probabilistische Modellierung ohne strenges Backtesting, API-Key-Leaks und die Illusion, KI ersetze Architekturdesign.",
      prerequisites: [
        "Arbeitskenntnisse in Python und notebook-basierter Exploration",
        "Grundkenntnisse in Git oder Bereitschaft zur Versionierung",
        "Sicherheit beim Lesen statistischer Outputs und Fussballdaten",
        "Bereitschaft, jeden Research-Schritt zu testen, zu dokumentieren und zu auditieren"
      ],
      modules: {
        "module-1": "Umgebungsgrundlage und Sicherheit",
        "module-2": "Kontext-Engineering und Agenten",
        "module-3": "Datenextraktion und Marktmodellierung",
        "module-4": "Backtesting und Pipeline-Wartung"
      },
      lessons: {
        "lesson-1": "Versionierungsumgebung: Git und GitHub",
        "lesson-2": "IDE und Entwicklungsumgebung",
        "lesson-3": "Datenquellen fur Fussballanalyse",
        "lesson-4": "Sicherheit bei Prompts und KI-Agenten",
        "lesson-5": "Prompt-Engineering und Skills",
        "lesson-6": "Agenten und Agenten-Frameworks",
        "lesson-7": "Polymarket-Datenextraktion",
        "lesson-8": "Poisson-Verteilungsmodell",
        "lesson-9": "Elo-Rating-Modell",
        "lesson-10": "Backtest und Validierung",
        "lesson-11": "Wiederverwendbare Skills erstellen"
      }
    },
    ko: {
      title: "축구 리서치 도구를 만들기 위한 Vibe Coding",
      subtitle: "AI 지원을 활용한 리서치 시스템 아키텍처, 확률 모델링, 데이터 추출을 분석적 엄격성과 운영 통제 아래에서 다룹니다.",
      corePromise:
        "AI 지원을 사용해 축구 리서치 파이프라인을 프로토타입하고 검증하며 유지하는 방법을 구조화하여, 코드 추적성, 실행 격리, 통계적 정밀도, 백테스트 규율을 확보하게 합니다.",
      whyThisCourseExists:
        "상용 스포츠 분석 도구는 종종 블랙박스처럼 동작합니다. AI 지원은 코딩 속도를 높이지만 동시에 시스템 리스크를 도입합니다. 이 코스는 vibe coding의 속도를 감사 가능한 리서치 워크플로로 전환합니다.",
      audience:
        "Python과 기술통계의 기반이 있고, 버전 관리, 컨테이너, 프롬프트 검증, 체계적 백테스트를 채택할 의지가 있는 실무자들.",
      enemy:
        "닫힌 플랫폼 의존, 인간 검증 없는 자율 에이전트 실행, 엄격한 백테스트 없는 확률 모델링, API 키 유출, 그리고 AI가 아키텍처 설계를 대체한다는 환상.",
      prerequisites: [
        "Python과 노트북 기반 탐색에 대한 실무 감각",
        "기본 Git 사용 또는 버전 관리 도입 의지",
        "통계 출력과 축구 데이터 표를 읽는 편안함",
        "각 리서치 단계를 테스트, 문서화, 감사하려는 준비"
      ],
      modules: {
        "module-1": "환경 기반과 보안",
        "module-2": "맥락 엔지니어링과 에이전트",
        "module-3": "데이터 추출과 시장 모델링",
        "module-4": "백테스트와 파이프라인 유지보수"
      },
      lessons: {
        "lesson-1": "버전 관리 환경: Git과 GitHub",
        "lesson-2": "IDE와 개발 환경",
        "lesson-3": "축구 분석용 데이터 소스",
        "lesson-4": "프롬프트와 AI 에이전트 보안",
        "lesson-5": "프롬프트 엔지니어링과 스킬",
        "lesson-6": "에이전트와 에이전트 프레임워크",
        "lesson-7": "Polymarket 데이터 추출",
        "lesson-8": "포아송 분포 모델",
        "lesson-9": "Elo 레이팅 모델",
        "lesson-10": "백테스트와 검증",
        "lesson-11": "재사용 가능한 스킬 만들기"
      }
    }
  }
};

export function localizeCourseData(course: CourseData, locale: AppLocale): CourseData {
  if (locale === defaultLocale) {
    if (course.id === "course-framework-trading-10-20-roi") {
      return {
        ...course,
        title: frameworkTradingPtMetadataClean.title,
        subtitle: frameworkTradingPtMetadataClean.subtitle,
        corePromise: frameworkTradingPtMetadataClean.corePromise,
        whyThisCourseExists: frameworkTradingPtMetadataClean.whyThisCourseExists,
        audience: frameworkTradingPtMetadataClean.audience,
        enemy: frameworkTradingPtMetadataClean.enemy,
        prerequisites: [...frameworkTradingPtMetadataClean.prerequisites],
        modules: course.modules.map((module) => ({
          ...module,
          title: frameworkTradingPtMetadataClean.modules[module.id] ?? module.title
        })),
        lessons: course.lessons.map((lesson) => ({
          ...lesson,
          title: frameworkTradingPtMetadataClean.lessons[lesson.id] ?? lesson.title
        }))
      };
    }

    return course;
  }

  const overlay = overlays[course.id]?.[locale];

  if (!overlay) {
    return course;
  }

  return {
    ...course,
    language: locale,
    title: overlay.title,
    subtitle: overlay.subtitle,
    corePromise: overlay.corePromise,
    whyThisCourseExists: overlay.whyThisCourseExists,
    audience: overlay.audience,
    enemy: overlay.enemy,
    prerequisites: overlay.prerequisites,
    modules: course.modules.map((module) => ({
      ...module,
      title: overlay.modules[module.id] ?? module.title,
      summary: getLocalizedModuleSummary(locale, overlay.modules[module.id] ?? module.title)
    })),
    lessons: course.lessons.map((lesson) => ({
      ...lesson,
      title: overlay.lessons[lesson.id] ?? lesson.title,
      summary: getLocalizedLessonSummary(locale, overlay.lessons[lesson.id] ?? lesson.title)
    }))
  };
}

export function getLocalizedLessonSummary(locale: AppLocale, lessonTitle: string) {
  switch (locale) {
    case "en":
      return `This lesson builds an operational view around "${lessonTitle}" and places it inside the wider course workflow.`;
    case "es":
      return `Esta leccion construye una lectura operacional alrededor de "${lessonTitle}" y la coloca dentro del flujo general del curso.`;
    case "de":
      return `Diese Lektion baut eine operative Lesart rund um "${lessonTitle}" auf und verortet sie im gesamten Kurs-Workflow.`;
    case "ko":
      return `"${lessonTitle}"를 중심으로 한 운영 관점을 만들고, 그것을 코스 전체 워크플로 안에 배치하는 레슨입니다.`;
    default:
      return lessonTitle;
  }
}

function getLocalizedModuleSummary(locale: AppLocale, moduleTitle: string) {
  switch (locale) {
    case "en":
      return `This module develops ${moduleTitle.toLowerCase()} as a structured layer of the course.`;
    case "es":
      return `Este modulo desarrolla ${moduleTitle.toLowerCase()} como una capa estructurada del curso.`;
    case "de":
      return `Dieses Modul entwickelt ${moduleTitle.toLowerCase()} als strukturierte Kursebene weiter.`;
    case "ko":
      return `${moduleTitle}를 코스의 구조적 레이어로 전개하는 모듈입니다.`;
    default:
      return moduleTitle;
  }
}
