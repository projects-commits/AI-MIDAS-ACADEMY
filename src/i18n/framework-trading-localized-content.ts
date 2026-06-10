import type { AppLocale } from "./config";

export type LocalizedSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LocalizedCallout = {
  label: string;
  text: string;
  href?: string;
  hrefLabel?: string;
};

export type LocalizedCourseContent = {
  intro: string[];
  sections: LocalizedSection[];
};

export type LocalizedLessonContent = {
  imageKey?: "overview" | "workflow" | "risk";
  imageAlt?: string;
  imageCaption?: string;
  callout?: LocalizedCallout;
  sections: LocalizedSection[];
};

type LocalizedFrameworkTradingContent = {
  course: LocalizedCourseContent;
  lessons: Record<string, LocalizedLessonContent>;
};

const content: Record<AppLocale, LocalizedFrameworkTradingContent> = {
  "pt-br": {
    course: {
      intro: [
        "Este curso transforma uma grelha larga de jogos num workflow estreito para o mercado 1X2 / Moneyline. O objetivo não é comentar tudo. O objetivo é isolar poucos trades com movimento real, liquidez executável e um plano de saída documentado.",
        "A referência de 10% a 20% deve ser lida corretamente. Aqui ela funciona como alvo operacional por trade sobre o capital arriscado na posição, não como promessa automática de crescimento da banca.",
        "A estrutura é simples e disciplinada: universo elegível, filtros de mercado, validação estatística e contextual, classificação de stake, entrada pre-live, gestão live e revisão pós-jogo."
      ],
      sections: [
        {
          title: "Como usar este curso",
          bullets: [
            "Segue as lições pela ordem, porque o framework perde força quando saltas diretamente para stake ou execução.",
            "Mantém uma ficha de previsão por jogo com preço, variação, liquidez, tese principal, risco principal, stop, take profit e plano live.",
            "Trata `No Bet` como uma saída normal do sistema, não como um fracasso por não agir.",
            "Revê cada decisão depois do jogo sem transformar o resultado em prova automática de qualidade."
          ],
          paragraphs: []
        },
        {
          title: "O que vais construir",
          paragraphs: [
            "No fim, deves ter uma rotina replicável: scan inicial, shortlist comprimida por dois filtros, confirmação com estatísticas e notícias, classificação A/B/C/No Bet, plano pre-live e auditoria pós-jogo.",
            "A pergunta final nunca é 'quem vai ganhar?'. A pergunta certa é: 'este trade ainda tem movimento, liquidez, valor residual, risco controlado e um plano de saída credível?'"
          ]
        }
      ]
    },
    lessons: {
      "lesson-1": {
        imageKey: "overview",
        imageAlt: "Visão geral do framework com objetivo, universo elegível, funil e os dois filtros.",
        imageCaption: "Esta imagem entra aqui porque define o campo operacional antes de qualquer jogo individual.",
        sections: [
          {
            title: "Ideia central",
            paragraphs: [
              "O sistema existe para reduzir ruído antes de expor capital. Um operador disciplinado não começa por uma equipa favorita nem por uma narrativa sedutora. Começa por um processo que exclui a maioria dos jogos.",
              "O primeiro ganho da estrutura não é a previsão. É a compressão. Menos candidatos significa mais foco, melhor documentação e menos trades forçados."
            ]
          },
          {
            title: "O que faz o universo elegível",
            paragraphs: [
              "O framework aceita apenas futebol, apenas jogos nas próximas 24h a 48h, apenas mercado 1X2 / Moneyline e apenas mercados ativos e negociáveis na Polymarket.",
              "Esta definição estreita não é limitação acidental. É proteção contra dispersão, mercados derivados e fadiga analítica."
            ]
          },
          {
            title: "Mecanismo",
            bullets: [
              "Começar pela lista bruta de jogos.",
              "Manter apenas o que cabe no universo elegível.",
              "Aplicar o Filtro 1 para detetar atividade real.",
              "Aplicar o Filtro 2 para evitar movimentos fracos ou esticados.",
              "Promover apenas poucos jogos para análise profunda."
            ],
            paragraphs: [
              "A ordem importa porque evita gastar energia de análise em mercados que nunca mereceram prioridade."
            ]
          },
          {
            title: "Síntese operacional",
            paragraphs: [
              "Um dia disciplinado pode começar com quarenta jogos e terminar com zero trades. Isso não é um sistema falhado. É um sistema protegido.",
              "O framework começa a ser útil quando aceitas que excluir também é uma ação produtiva."
            ]
          }
        ]
      },
      "lesson-2": {
        callout: {
          label: "Scanner de Telegram",
          text: "Na fase de filtragem, o bot pode ajudar a levantar mercados ativos mais depressa. Usa-o como scanner inicial, nunca como decisor final.",
          href: "https://t.me/polymarket_market_aim_bot",
          hrefLabel: "Abrir o bot"
        },
        sections: [
          {
            title: "Ideia central",
            paragraphs: [
              "O Filtro 1 responde a uma pergunta simples: este mercado está vivo? A variação do preço só interessa quando vem acompanhada por atividade recente, liquidez disponível e spread executável.",
              "Um gráfico que mexe sem profundidade pode continuar a ser um mercado morto do ponto de vista operacional."
            ]
          },
          {
            title: "O que observar",
            bullets: [
              "Preço atual e snapshots de preço em janelas recentes",
              "Direção do movimento",
              "Volume total e volume recente",
              "Liquidez visível no outcome",
              "Spread bid/ask"
            ],
            paragraphs: [
              "O jogo passa quando pelo menos um outcome do 1X2 mostra sinais suficientes de participação real."
            ]
          },
          {
            title: "Mecanismo",
            paragraphs: [
              "O movimento dá prioridade, o volume dá densidade, a liquidez dá execução e o spread mostra o custo imediato. Quando um destes blocos falha, o mercado perde qualidade operacional.",
              "O filtro não serve para provar valor. Serve para decidir onde ainda vale a pena procurar valor."
            ]
          },
          {
            title: "Síntese operacional",
            paragraphs: [
              "Respeita primeiro a infraestrutura do mercado e só depois a história do jogo. Uma boa tese num mau mercado continua a gerar má execução.",
              "Se há variação mas não há liquidez, descarta. Se há liquidez mas não há direção, baixa prioridade. Se ambos se alinham, avança."
            ]
          }
        ]
      },
      "lesson-3": {
        sections: [
          {
            title: "Ideia central",
            paragraphs: [
              "O Filtro 2 protege o timing. Evita dois maus trades: entrar em movimentos fracos demais e entrar tarde demais em movimentos que já consumiram grande parte do valor.",
              "Um movimento forte não é automaticamente uma boa entrada. Pode significar apenas que o mercado já absorveu a maior parte do ajuste."
            ]
          },
          {
            title: "Como pensar a amplitude",
            paragraphs: [
              "Uma variação saudável começa quando o movimento já saiu da zona morta, mas ainda não comprimiu o preço ao ponto de destruir a relação risco-retorno.",
              "Por isso a conversão preço-odd importa. Na Polymarket, o preço pode ser lido como probabilidade implícita e a odd decimal aproximada é `1 / preço`."
            ]
          },
          {
            title: "Mecanismo",
            bullets: [
              "Rejeitar movimentos abaixo do limiar de atenção.",
              "Preferir movimentos saudáveis que ainda deixem espaço para o alvo operacional.",
              "Tratar movimentos fortes com mais prudência.",
              "Exigir justificação excecional quando o movimento já parece esticado."
            ],
            paragraphs: []
          },
          {
            title: "Síntese operacional",
            paragraphs: [
              "Não confundas a beleza do gráfico com a qualidade do trade remanescente. O melhor movimento nem sempre é o maior; é o que ainda preserva assimetria utilizável.",
              "O Filtro 2 existe para impedir que compres tarde uma informação que outro comprou cedo."
            ]
          }
        ]
      },
      "lesson-4": {
        callout: {
          label: "Base para estatísticas avançadas",
          text: "Para scripts, modelos e referências quantitativas que apoiem a revisão da shortlist, usa o GitHub público da AIMIDAS como base de research e não como verdade plug-and-play.",
          href: "https://github.com/aimidas1",
          hrefLabel: "Abrir github.com/aimidas1"
        },
        sections: [
          {
            title: "Ideia central",
            paragraphs: [
              "As estatísticas avançadas entram depois dos filtros porque aqui não servem para descobrir jogos do zero. Servem para confirmar, enfraquecer ou rejeitar a shortlist produzida pelo mercado.",
              "Não estás a colecionar números por decoração. Estás a testar se o movimento de mercado tem suporte estrutural."
            ]
          },
          {
            title: "Grupos funcionais",
            bullets: [
              "Força ofensiva: criação de ocasiões e acesso à área",
              "Fragilidade defensiva: qualidade do que a equipa concede",
              "Controlo do jogo: território, ritmo e iniciativa",
              "Resultado versus performance: onde o marcador recente esconde regressão"
            ],
            paragraphs: [
              "Agrupar métricas por função impede que um número isolado vire slogan."
            ]
          },
          {
            title: "Mecanismo",
            paragraphs: [
              "Lê o jogo através do equilíbrio entre criação, concessão, controlo e contexto de regressão. Se a shortlist aponta para um lado mas as métricas argumentam de forma consistente contra isso, o passo correto é baixar ou eliminar o trade.",
              "O edge não está em ter mais dados do que toda a gente. Está em obrigar os dados a responder à pergunta operacional do 1X2."
            ]
          },
          {
            title: "Síntese operacional",
            paragraphs: [
              "Uma equipa pode ganhar muitas vezes e continuar estruturalmente fraca. Outra pode ter resultados recentes medianos e ainda assim merecer melhor preço.",
              "Quando os números não confirmam com clareza, a saída mais limpa costuma ser stake menor ou `No Bet`."
            ]
          }
        ]
      },
      "lesson-5": {
        imageKey: "workflow",
        imageAlt: "Painel de workflow com análise dos jogos, prompt curto de notícias, rotina diária e lógica input-processo-output.",
        imageCaption: "Este visual encaixa aqui porque liga shortlist, validação, decisão e revisão.",
        sections: [
          {
            title: "Ideia central",
            paragraphs: [
              "Notícias e ficha de previsão existem para forçar disciplina depois da shortlist. As notícias capturam contexto recente que a estatística pode não absorver. A ficha congela a tese antes da pressão da execução.",
              "Sem estas duas camadas, o operador tende a reescrever a história depois do jogo."
            ]
          },
          {
            title: "O que importa nas notícias",
            bullets: [
              "Lesões e suspensões importantes",
              "Motivação e contexto de tabela",
              "Calendário e fadiga",
              "Rotação provável",
              "Qualquer evento que altere diretamente a leitura do 1X2"
            ],
            paragraphs: []
          },
          {
            title: "Mecanismo",
            paragraphs: [
              "O workflow produz saídas em sequência: lista bruta, shortlist filtrada, tese validada, ficha de previsão, decisão de trade e auditoria pós-jogo.",
              "A ficha importa porque regista por que o jogo foi escolhido, qual é o risco principal e onde o plano live deve falhar."
            ]
          },
          {
            title: "Síntese operacional",
            paragraphs: [
              "Usa notícias para desafiar a tese, não para a decorar. Usa a ficha para tornar o trade auditável, não para o fazer parecer sofisticado.",
              "Um processo forte torna-se mais defensável precisamente porque se torna mais fácil de rejeitar."
            ]
          }
        ]
      },
      "lesson-6": {
        sections: [
          {
            title: "Ideia central",
            paragraphs: [
              "O framework é preparado em pre-live e testado em live. O jogo não é o lugar onde inventas a tese. É o lugar onde verificas se a tese continua viva.",
              "A qualidade da execução depende tanto da velocidade da saída como da qualidade da entrada."
            ]
          },
          {
            title: "Para que serve o live",
            paragraphs: [
              "A gestão live deve responder a uma pergunta: o jogo confirma o cenário que justificou a posição? Se sim, protege e realiza lucro com racionalidade. Se não, reduz ou sai antes de o atraso transformar discordância em dano.",
              "É por isso que o framework combina stop por preço com stop por tese."
            ]
          },
          {
            title: "Mecanismo",
            bullets: [
              "Definir entrada apenas quando filtros, estatísticas e notícias se alinham.",
              "Escrever stop por preço e stop por tese antes do apito inicial.",
              "Usar a primeira janela live para validar controlo, perigo e reação do mercado.",
              "Realizar lucro parcial quando o preço paga antes de a ganância assumir o comando."
            ],
            paragraphs: []
          },
          {
            title: "Síntese operacional",
            paragraphs: [
              "Uma boa leitura pre-live não justifica comportamento emocional em live. No momento em que a tese quebra, a disciplina vale mais do que a convicção.",
              "O trade sobrevive quando preparação, confirmação e regras de saída permanecem ligadas."
            ]
          }
        ]
      },
      "lesson-7": {
        imageKey: "risk",
        imageAlt: "Painel de risco e decisão com estrutura da previsão, sistema A/B/C/No Bet, perfil de risco e limites práticos.",
        imageCaption: "Esta é a posição natural do visual de risco porque a lição converte análise em alocação de capital.",
        sections: [
          {
            title: "Ideia central",
            paragraphs: [
              "Nem todos os trades aprovados merecem a mesma quantidade de capital. A escada A/B/C/No Bet existe para traduzir qualidade da tese em exposição, respeitando um perfil de risco médio-baixo.",
              "Sizing é consequência de estrutura, não expressão emocional."
            ]
          },
          {
            title: "O que faz a escada",
            paragraphs: [
              "Trades A combinam mercado forte, confirmação estatística, contexto favorável e execução controlável. Trades B mantêm valor, mas com mais atrito. Trades C estão incompletos ou dependem mais do live. No Bet também é uma decisão de portfólio.",
              "Limites por dia, jogo, mercado e drawdown impedem que uma boa ideia isolada se transforme num livro agregado fraco."
            ]
          },
          {
            title: "Mecanismo",
            bullets: [
              "Avaliar primeiro a clareza da tese.",
              "Descontar fricção de liquidez e complexidade live.",
              "Aplicar penalização por correlação quando várias posições dependem da mesma ideia-base.",
              "Conferir limites de exposição antes de qualquer ordem."
            ],
            paragraphs: []
          },
          {
            title: "Síntese operacional",
            paragraphs: [
              "Uma stake menor numa boa ideia mas correlacionada costuma ser melhor do que uma stake grande num trade apenas aparentemente independente.",
              "O sistema protege a banca porque te obriga a responder não só 'há valor?', mas também 'quanto valor merece capital hoje?'."
            ]
          }
        ]
      },
      "lesson-8": {
        sections: [
          {
            title: "Ideia central",
            paragraphs: [
              "Sem revisão o processo fica incompleto. Antes do jogo confirmas validade. Durante o jogo testas a tese. Depois do jogo auditas a qualidade da decisão separadamente do resultado.",
              "O viés de resultado é um dos hábitos mais caros neste tipo de workflow."
            ]
          },
          {
            title: "Para que serve a revisão",
            paragraphs: [
              "A revisão separa boas decisões com maus resultados de más decisões com bons resultados. Essa distinção é essencial se queres que o dia seguinte melhore em vez de repetir os mesmos erros com mais confiança.",
              "O objetivo não é escrever notas longas. É extrair uma correção útil por trade."
            ]
          },
          {
            title: "Mecanismo",
            bullets: [
              "Reconfirmar escalações, notícias, liquidez e spread antes da entrada.",
              "Usar o live apenas para validar ou rejeitar o plano escrito.",
              "Registar entrada, saída, P/L, confirmação da tese e qualidade da execução.",
              "Levar as conclusões para o scan do dia seguinte e para as regras de risco."
            ],
            paragraphs: []
          },
          {
            title: "Síntese operacional",
            paragraphs: [
              "Um trade lucrativo pode continuar a revelar fragilidade de processo. Um trade perdedor pode continuar a ser prova de disciplina. A revisão mantém estas verdades visíveis.",
              "O framework fica mais forte quando o output regressa ao input através de auditoria honesta."
            ]
          }
        ]
      }
    }
  },
  en: {
    course: {
      intro: [
        "This course turns a broad football slate into a narrow execution workflow for the 1X2 / Moneyline market. The goal is not to comment on every match. The goal is to isolate a small number of trades with real movement, usable liquidity, and a documented exit plan.",
        "The 10% to 20% figure must be read correctly. In this framework it is an operational target per trade on the capital at risk in the position, not a promise of account growth and not a guarantee of frequency.",
        "The structure is deliberately narrow: eligible universe, market filters, statistical and contextual validation, stake classification, pre-live entry, live management, and post-match review."
      ],
      sections: [
        {
          title: "How to use this course",
          bullets: [
            "Follow the lessons in order because the framework loses quality when you jump straight to stake sizing or live execution.",
            "Keep one prediction sheet per match with price, variation, liquidity, main thesis, main risk, stop, take profit, and live plan.",
            "Treat `No Bet` as a core output of the system, not as a failure to act.",
            "Review decisions after the match without turning the final score into automatic proof of quality."
          ],
          paragraphs: []
        },
        {
          title: "What you will build",
          paragraphs: [
            "By the end of the course you should have a repeatable routine: raw scan, shortlist compressed by two filters, statistical and news-based confirmation, A/B/C/No Bet classification, pre-live execution plan, and post-game audit.",
            "The final question of the framework is never 'who will win?'. It is 'does this trade still offer movement, liquidity, residual value, controlled risk, and a credible exit plan?'"
          ]
        }
      ]
    },
    lessons: {
      "lesson-1": {
        imageKey: "overview",
        imageAlt: "Framework overview with objective, eligible universe, funnel, and the two filters.",
        imageCaption: "This overview belongs here because it defines the operating field before any single match is discussed.",
        sections: [
          {
            title: "Core idea",
            paragraphs: [
              "The system exists to reduce noise before capital is exposed. A serious operator does not begin with a favorite team or an attractive narrative. The operator begins with a process that excludes most matches.",
              "The first gain of structure is not prediction. It is compression. Fewer candidate games means better attention, better documentation, and fewer forced trades."
            ]
          },
          {
            title: "What the eligible universe does",
            paragraphs: [
              "The framework only accepts football matches inside the next 24 to 48 hours, only in the 1X2 / Moneyline market, and only when Polymarket offers an active and tradable market.",
              "This narrow definition is not a limitation by accident. It is what protects the workflow from dispersing into derivative markets, low-context trades, and analytical fatigue."
            ]
          },
          {
            title: "Mechanism",
            bullets: [
              "Start with the raw list of matches.",
              "Keep only matches that fit the eligible universe.",
              "Apply Filter 1 to detect real market activity.",
              "Apply Filter 2 to avoid weak or stretched moves.",
              "Promote only a few matches into deep analysis."
            ],
            paragraphs: [
              "This sequencing matters because it prevents you from doing expensive analysis on markets that never deserved priority."
            ]
          },
          {
            title: "Operational takeaway",
            paragraphs: [
              "A disciplined day can begin with forty matches and end with zero trades. That is not a broken system. That is a protected system.",
              "The framework becomes useful the moment you accept that exclusion is a productive action."
            ]
          }
        ]
      },
      "lesson-2": {
        callout: {
          label: "Telegram scanner",
          text: "For the filtering phase, the Telegram bot can help surface active markets faster. Use it as an initial scanner, not as the final decision-maker.",
          href: "https://t.me/polymarket_market_aim_bot",
          hrefLabel: "Open the bot"
        },
        sections: [
          {
            title: "Core idea",
            paragraphs: [
              "Filter 1 answers a simple question: is this market actually alive? Price variation matters only when it is supported by recent activity, available liquidity, and an executable spread.",
              "A moving chart without depth can still be a dead market from a trading point of view."
            ]
          },
          {
            title: "What to inspect",
            bullets: [
              "Current price and price snapshots across recent windows",
              "Direction of the move",
              "Total volume and recent volume",
              "Visible liquidity in the outcome",
              "Bid/ask spread"
            ],
            paragraphs: [
              "The match passes when at least one outcome in the 1X2 market shows enough evidence of real participation."
            ]
          },
          {
            title: "Mechanism",
            paragraphs: [
              "Movement gives priority, volume gives density, liquidity gives execution, and spread gives immediate cost. When one of these blocks fails, the market loses operational quality.",
              "The point of the filter is not to prove value. It is to decide where value might still be worth studying."
            ]
          },
          {
            title: "Operational takeaway",
            paragraphs: [
              "Respect market infrastructure before respecting the story around the game. A good thesis in a poor market still produces weak execution.",
              "If there is variation but no liquidity, discard. If there is liquidity but no direction, deprioritize. If both align, continue."
            ]
          }
        ]
      },
      "lesson-3": {
        sections: [
          {
            title: "Core idea",
            paragraphs: [
              "Filter 2 protects timing. It avoids two bad trades: entering when the move is too weak to deserve attention, and entering when the move is already too extended to leave enough upside.",
              "Strong movement is not automatically a good entry. It may simply mean that the market has already consumed most of the price adjustment."
            ]
          },
          {
            title: "How to think about the move",
            paragraphs: [
              "A healthy move generally starts once variation becomes meaningful, but before the price has become compressed enough to damage the risk-reward profile.",
              "This is why price-to-odds conversion matters. A Polymarket price can be read as implied probability, and its approximate decimal odd is `1 / price`."
            ]
          },
          {
            title: "Mechanism",
            bullets: [
              "Reject weak moves below the attention threshold.",
              "Prefer healthy moves that still leave room for a 10% to 20% operational target.",
              "Treat stronger moves with more caution.",
              "Demand exceptional justification when the move already looks stretched."
            ],
            paragraphs: []
          },
          {
            title: "Operational takeaway",
            paragraphs: [
              "Do not confuse the beauty of the chart with the quality of the remaining trade. The best move is often not the largest move, but the one that still leaves usable asymmetry.",
              "Filter 2 exists to stop you from paying a late price for someone else's earlier information."
            ]
          }
        ]
      },
      "lesson-4": {
        callout: {
          label: "Advanced stats stack",
          text: "For scripts, models, and quantitative references that can support the shortlist review, use the public AIMIDAS GitHub as a research base rather than as a plug-and-play truth.",
          href: "https://github.com/aimidas1",
          hrefLabel: "Open github.com/aimidas1"
        },
        sections: [
          {
            title: "Core idea",
            paragraphs: [
              "Advanced statistics enter after the market filters because their role here is not to discover matches from scratch. Their role is to confirm, weaken, or reject the shortlist produced by market activity.",
              "You are not collecting numbers for decoration. You are testing whether the market move has structural support."
            ]
          },
          {
            title: "Functional groups",
            bullets: [
              "Attacking strength: chance creation and box access",
              "Defensive fragility: concession quality and pressure absorbed",
              "Game control: territory, rhythm, and initiative",
              "Result versus performance: where recent scorelines hide regression"
            ],
            paragraphs: [
              "Grouping metrics by function prevents you from turning isolated numbers into slogans."
            ]
          },
          {
            title: "Mechanism",
            paragraphs: [
              "Read the game through the balance between creation, concession, control, and regression context. If the shortlist points toward one side but the metrics consistently argue against it, the correct move is to downgrade or remove the trade.",
              "The edge is not in owning more data than everyone else. The edge is in making the data answer the exact 1X2 question you want to trade."
            ]
          },
          {
            title: "Operational takeaway",
            paragraphs: [
              "A team can win often and still be structurally weak. A team can have mediocre recent results and still deserve a better price than the market offers. Your job is to separate scoreboard narrative from mechanism.",
              "When the numbers cannot clearly confirm the thesis, the cleanest output is often lower stake or `No Bet`."
            ]
          }
        ]
      },
      "lesson-5": {
        imageKey: "workflow",
        imageAlt: "Workflow panel with match analysis, short news prompt, daily workflow, and input-process-output logic.",
        imageCaption: "This visual belongs in the workflow lesson because it connects shortlist, validation, decision, and review.",
        sections: [
          {
            title: "Core idea",
            paragraphs: [
              "News and the prediction sheet exist to force discipline after the shortlist is formed. News captures short-term context that statistics may miss. The sheet freezes the thesis before execution pressure begins.",
              "Without these two layers, the operator usually rewrites the story after the match."
            ]
          },
          {
            title: "What matters in news review",
            bullets: [
              "Key injuries and suspensions",
              "Motivation and table context",
              "Calendar load and fatigue",
              "Likely rotation",
              "Any event that directly affects the 1X2 view"
            ],
            paragraphs: []
          },
          {
            title: "Mechanism",
            paragraphs: [
              "The workflow produces outputs in sequence: raw list, filtered shortlist, validated thesis, prediction sheet, trade decision, and post-match audit.",
              "The prediction sheet matters because it records why the game was selected, what the main risk is, and where the live plan should fail."
            ]
          },
          {
            title: "Operational takeaway",
            paragraphs: [
              "Use news to challenge the thesis, not to decorate it. Use the sheet to make the trade auditable, not to make it look sophisticated.",
              "A strong process becomes easier to defend precisely because it is easier to reject."
            ]
          }
        ]
      },
      "lesson-6": {
        sections: [
          {
            title: "Core idea",
            paragraphs: [
              "The framework is prepared pre-live and tested live. The match is not where you invent the thesis. It is where you check whether the thesis is still alive.",
              "Execution quality depends as much on exit speed as on entry quality."
            ]
          },
          {
            title: "What the live phase is for",
            paragraphs: [
              "Live management should answer one question: is the match confirming the scenario that justified the position? If yes, protect and scale profit rationally. If no, reduce or exit before delay turns disagreement into damage.",
              "This is why the framework combines price stops with thesis stops."
            ]
          },
          {
            title: "Mechanism",
            bullets: [
              "Define entry only after filters, stats, and news align.",
              "Write stop by price and stop by thesis before kickoff.",
              "Use the first live window to validate control, danger, and market reaction.",
              "Realize partial profit when price pays before greed takes over."
            ],
            paragraphs: []
          },
          {
            title: "Operational takeaway",
            paragraphs: [
              "A good pre-live read does not justify emotional live behaviour. The moment the thesis breaks, discipline matters more than conviction.",
              "The trade survives when preparation, confirmation, and exit rules stay connected."
            ]
          }
        ]
      },
      "lesson-7": {
        imageKey: "risk",
        imageAlt: "Risk and decision panel with prediction structure, A/B/C/No Bet system, risk profile, and practical limits.",
        imageCaption: "This is the natural place for the risk visual because the lesson converts analysis into capital allocation.",
        sections: [
          {
            title: "Core idea",
            paragraphs: [
              "Not every approved trade deserves the same amount of capital. The A/B/C/No Bet ladder exists to translate thesis quality into exposure while respecting a medium-low risk profile.",
              "Sizing is a consequence of structure, not an expression of emotion."
            ]
          },
          {
            title: "What the ladder does",
            paragraphs: [
              "A trades combine strong market quality, statistical confirmation, supportive context, and manageable execution. B trades still have value, but with more friction. C trades are incomplete or more dependent on live confirmation. No Bet is a valid portfolio decision.",
              "Limits by day, game, market, and drawdown keep a good isolated idea from becoming a weak aggregate book."
            ]
          },
          {
            title: "Mechanism",
            bullets: [
              "Grade thesis clarity before thinking about stake.",
              "Discount for liquidity friction and live complexity.",
              "Apply a correlation penalty when multiple trades depend on the same underlying idea.",
              "Check exposure limits before any order is executed."
            ],
            paragraphs: []
          },
          {
            title: "Operational takeaway",
            paragraphs: [
              "A smaller stake on a good but correlated idea is often better than a large stake on a trade that only looks independent.",
              "The system protects the bankroll by forcing you to answer not only 'is there value?' but also 'how much value deserves capital today?'"
            ]
          }
        ]
      },
      "lesson-8": {
        sections: [
          {
            title: "Core idea",
            paragraphs: [
              "The process is incomplete without review. Before the match you confirm validity. During the match you test the thesis. After the match you audit the quality of the decision apart from the final score.",
              "Result bias is one of the most expensive habits in this kind of workflow."
            ]
          },
          {
            title: "What the review is for",
            paragraphs: [
              "Review separates good decisions with bad results from bad decisions with good results. That distinction is essential if you want the next trading day to improve instead of repeating the same mistakes with more confidence.",
              "The aim is not to produce long notes. It is to extract one useful correction from each trade."
            ]
          },
          {
            title: "Mechanism",
            bullets: [
              "Reconfirm lineups, news, liquidity, and spread before entry.",
              "Use live only to validate or reject the written plan.",
              "Record entry, exit, P/L, thesis confirmation, and execution quality after the match.",
              "Feed the findings back into the next day's scan and risk rules."
            ],
            paragraphs: []
          },
          {
            title: "Operational takeaway",
            paragraphs: [
              "A profitable trade can still expose process weakness. A losing trade can still be evidence of discipline. Review keeps those truths visible.",
              "The framework becomes stronger when output returns to input through honest audit."
            ]
          }
        ]
      }
    }
  },
  es: {
    course: {
      intro: [
        "Este curso convierte una jornada amplia de futbol en un flujo de ejecucion estrecho para el mercado 1X2 / Moneyline. El objetivo no es comentar cada partido. El objetivo es aislar un numero pequeno de trades con movimiento real, liquidez util y un plan de salida documentado.",
        "La referencia de 10% a 20% debe leerse bien. Aqui funciona como objetivo operativo por trade sobre el capital arriesgado en la posicion, no como promesa de crecimiento de banca ni como garantia de frecuencia.",
        "La estructura es deliberadamente estrecha: universo elegible, filtros de mercado, validacion estadistica y contextual, clasificacion de stake, entrada pre-live, gestion live y revision postpartido."
      ],
      sections: [
        {
          title: "Como usar este curso",
          bullets: [
            "Sigue las lecciones en orden porque el framework pierde calidad si saltas directamente al stake o a la ejecucion live.",
            "Mantén una ficha de prevision por partido con precio, variacion, liquidez, tesis principal, riesgo principal, stop, take profit y plan live.",
            "Trata `No Bet` como una salida central del sistema, no como un fracaso por no actuar.",
            "Revisa las decisiones despues del partido sin convertir el marcador final en prueba automatica de calidad."
          ],
          paragraphs: []
        },
        {
          title: "Lo que vas a construir",
          paragraphs: [
            "Al final deberias tener una rutina repetible: scan inicial, shortlist comprimida por dos filtros, confirmacion con estadisticas y noticias, clasificacion A/B/C/No Bet, plan de ejecucion pre-live y auditoria post-juego.",
            "La pregunta final nunca es 'quien va a ganar?'. Es 'este trade todavia ofrece movimiento, liquidez, valor residual, riesgo controlado y un plan de salida creible?'"
          ]
        }
      ]
    },
    lessons: {
      "lesson-1": {
        imageKey: "overview",
        imageAlt: "Vision general del framework con objetivo, universo elegible, embudo y los dos filtros.",
        imageCaption: "Esta vista encaja aqui porque define el campo operativo antes de discutir cualquier partido concreto.",
        sections: [
          {
            title: "Idea central",
            paragraphs: [
              "El sistema existe para reducir ruido antes de exponer capital. Un operador serio no empieza por un equipo favorito ni por una narrativa atractiva. Empieza por un proceso que excluye la mayoria de los partidos.",
              "La primera ganancia de la estructura no es la prediccion. Es la compresion. Menos candidatos significa mejor atencion, mejor documentacion y menos trades forzados."
            ]
          },
          {
            title: "Que hace el universo elegible",
            paragraphs: [
              "El framework solo acepta partidos de futbol dentro de las proximas 24 a 48 horas, solo en el mercado 1X2 / Moneyline y solo cuando Polymarket ofrece un mercado activo y negociable.",
              "Esta definicion estrecha no es un accidente. Es lo que protege el flujo frente a mercados derivados, trades de poco contexto y fatiga analitica."
            ]
          },
          {
            title: "Mecanismo",
            bullets: [
              "Empieza con la lista bruta de partidos.",
              "Conserva solo los partidos que encajan en el universo elegible.",
              "Aplica el Filtro 1 para detectar actividad real de mercado.",
              "Aplica el Filtro 2 para evitar movimientos debiles o estirados.",
              "Promueve solo unos pocos partidos al analisis profundo."
            ],
            paragraphs: [
              "Esta secuencia importa porque evita hacer analisis costoso sobre mercados que nunca merecieron prioridad."
            ]
          },
          {
            title: "Conclusión operativa",
            paragraphs: [
              "Un dia disciplinado puede empezar con cuarenta partidos y terminar con cero trades. Eso no es un sistema roto. Es un sistema protegido.",
              "El framework empieza a ser util en el momento en que aceptas que excluir tambien es una accion productiva."
            ]
          }
        ]
      },
      "lesson-2": {
        callout: {
          label: "Scanner de Telegram",
          text: "Para la fase de filtrado, el bot de Telegram puede ayudarte a detectar mercados activos con mas rapidez. Úsalo como scanner inicial, no como decisor final.",
          href: "https://t.me/polymarket_market_aim_bot",
          hrefLabel: "Abrir el bot"
        },
        sections: [
          {
            title: "Idea central",
            paragraphs: [
              "El Filtro 1 responde una pregunta simple: este mercado esta realmente vivo? La variacion del precio solo importa cuando viene respaldada por actividad reciente, liquidez disponible y un spread ejecutable.",
              "Un grafico que se mueve sin profundidad puede seguir siendo un mercado muerto desde el punto de vista del trading."
            ]
          },
          {
            title: "Que revisar",
            bullets: [
              "Precio actual y snapshots de precio en ventanas recientes",
              "Direccion del movimiento",
              "Volumen total y volumen reciente",
              "Liquidez visible en el outcome",
              "Spread bid/ask"
            ],
            paragraphs: [
              "El partido pasa cuando al menos un outcome del 1X2 muestra evidencia suficiente de participacion real."
            ]
          },
          {
            title: "Mecanismo",
            paragraphs: [
              "El movimiento da prioridad, el volumen da densidad, la liquidez da ejecucion y el spread da coste inmediato. Cuando falla uno de estos bloques, el mercado pierde calidad operativa.",
              "El objetivo del filtro no es demostrar valor. Es decidir donde podria seguir teniendo sentido estudiar el valor."
            ]
          },
          {
            title: "Conclusión operativa",
            paragraphs: [
              "Respeta la infraestructura del mercado antes de respetar la historia del partido. Una buena tesis en un mal mercado sigue produciendo una mala ejecucion.",
              "Si hay variacion pero no hay liquidez, descarta. Si hay liquidez pero no hay direccion, baja prioridad. Si ambas se alinean, continua."
            ]
          }
        ]
      },
      "lesson-3": {
        sections: [
          {
            title: "Idea central",
            paragraphs: [
              "El Filtro 2 protege el timing. Evita dos malos trades: entrar cuando el movimiento es demasiado debil para merecer atencion y entrar cuando el movimiento ya esta demasiado extendido para dejar upside suficiente.",
              "Un movimiento fuerte no es automaticamente una buena entrada. Puede significar simplemente que el mercado ya consumio gran parte del ajuste."
            ]
          },
          {
            title: "Como pensar el movimiento",
            paragraphs: [
              "Un movimiento saludable suele empezar cuando la variacion se vuelve significativa, pero antes de que el precio quede tan comprimido que deteriore la relacion riesgo-retorno.",
              "Por eso importa convertir precio a cuota. En Polymarket, el precio puede leerse como probabilidad implicita y la cuota decimal aproximada es `1 / precio`."
            ]
          },
          {
            title: "Mecanismo",
            bullets: [
              "Rechaza movimientos debiles por debajo del umbral de atencion.",
              "Prefiere movimientos saludables que aun dejen espacio para un objetivo operativo del 10% al 20%.",
              "Trata los movimientos mas fuertes con mas prudencia.",
              "Exige justificacion excepcional cuando el movimiento ya parece estirado."
            ],
            paragraphs: []
          },
          {
            title: "Conclusión operativa",
            paragraphs: [
              "No confundas la belleza del grafico con la calidad del trade restante. El mejor movimiento no siempre es el mas grande, sino el que todavia deja asimetria util.",
              "El Filtro 2 existe para impedir que pagues tarde por informacion que otro compro antes."
            ]
          }
        ]
      },
      "lesson-4": {
        callout: {
          label: "Base de estadisticas avanzadas",
          text: "Para scripts, modelos y referencias cuantitativas que puedan apoyar la revision de la shortlist, usa el GitHub publico de AIMIDAS como base de research, no como verdad plug-and-play.",
          href: "https://github.com/aimidas1",
          hrefLabel: "Abrir github.com/aimidas1"
        },
        sections: [
          {
            title: "Idea central",
            paragraphs: [
              "Las estadisticas avanzadas entran despues de los filtros de mercado porque aqui no sirven para descubrir partidos desde cero. Sirven para confirmar, debilitar o rechazar la shortlist producida por la actividad del mercado.",
              "No estas coleccionando numeros por decoracion. Estas probando si el movimiento del mercado tiene soporte estructural."
            ]
          },
          {
            title: "Grupos funcionales",
            bullets: [
              "Fuerza ofensiva: creacion de ocasiones y acceso al area",
              "Fragilidad defensiva: calidad de lo concedido y presion recibida",
              "Control del juego: territorio, ritmo e iniciativa",
              "Resultado frente a rendimiento: donde el marcador reciente esconde regresion"
            ],
            paragraphs: [
              "Agrupar metricas por funcion evita convertir numeros aislados en slogans."
            ]
          },
          {
            title: "Mecanismo",
            paragraphs: [
              "Lee el partido a traves del balance entre creacion, concesion, control y contexto de regresion. Si la shortlist apunta hacia un lado pero las metricas discuten consistentemente en contra, lo correcto es rebajar o eliminar el trade.",
              "La ventaja no esta en tener mas datos que todo el mundo. Esta en obligar a los datos a responder la pregunta exacta del 1X2."
            ]
          },
          {
            title: "Conclusión operativa",
            paragraphs: [
              "Un equipo puede ganar mucho y seguir siendo estructuralmente debil. Otro puede tener peores resultados recientes y aun asi merecer mejor precio del que ofrece el mercado.",
              "Cuando los numeros no confirman con claridad, la salida mas limpia suele ser bajar stake o marcar `No Bet`."
            ]
          }
        ]
      },
      "lesson-5": {
        imageKey: "workflow",
        imageAlt: "Panel de workflow con analisis de partidos, prompt corto de noticias, rutina diaria y logica input-proceso-output.",
        imageCaption: "Este visual encaja aqui porque une shortlist, validacion, decision y revision.",
        sections: [
          {
            title: "Idea central",
            paragraphs: [
              "Las noticias y la ficha de prevision obligan a mantener disciplina despues de formar la shortlist. Las noticias capturan contexto de corto plazo que las estadisticas pueden no absorber. La ficha congela la tesis antes de que empiece la presion de ejecucion.",
              "Sin estas dos capas, el operador suele reescribir la historia despues del partido."
            ]
          },
          {
            title: "Que importa en noticias",
            bullets: [
              "Lesiones y sanciones clave",
              "Motivacion y contexto de tabla",
              "Carga de calendario y fatiga",
              "Rotacion probable",
              "Cualquier evento que afecte de forma directa al 1X2"
            ],
            paragraphs: []
          },
          {
            title: "Mecanismo",
            paragraphs: [
              "El workflow produce salidas en secuencia: lista bruta, shortlist filtrada, tesis validada, ficha de prevision, decision de trade y auditoria postpartido.",
              "La ficha importa porque registra por que se eligio el partido, cual es el riesgo principal y donde debe romperse el plan live."
            ]
          },
          {
            title: "Conclusión operativa",
            paragraphs: [
              "Usa las noticias para cuestionar la tesis, no para adornarla. Usa la ficha para volver auditable el trade, no para hacerlo parecer sofisticado.",
              "Un proceso fuerte se vuelve mas defendible precisamente porque tambien se vuelve mas facil de rechazar."
            ]
          }
        ]
      },
      "lesson-6": {
        sections: [
          {
            title: "Idea central",
            paragraphs: [
              "El framework se prepara en pre-live y se pone a prueba en live. El partido no es el lugar donde inventas la tesis. Es el lugar donde verificas si la tesis sigue viva.",
              "La calidad de ejecucion depende tanto de la velocidad de salida como de la calidad de entrada."
            ]
          },
          {
            title: "Para que sirve la fase live",
            paragraphs: [
              "La gestion live debe responder una pregunta: el partido confirma el escenario que justifico la posicion? Si la respuesta es si, protege y escala beneficio con racionalidad. Si la respuesta es no, reduce o sal antes de que el retraso convierta desacuerdo en dano.",
              "Por eso el framework combina stop por precio con stop por tesis."
            ]
          },
          {
            title: "Mecanismo",
            bullets: [
              "Define la entrada solo cuando filtros, estadisticas y noticias se alinean.",
              "Escribe stop por precio y stop por tesis antes del kickoff.",
              "Usa la primera ventana live para validar control, peligro y reaccion del mercado.",
              "Realiza beneficio parcial cuando el precio paga antes de que aparezca la codicia."
            ],
            paragraphs: []
          },
          {
            title: "Conclusión operativa",
            paragraphs: [
              "Una buena lectura pre-live no justifica un comportamiento emocional en live. En el momento en que la tesis se rompe, la disciplina vale mas que la conviccion.",
              "El trade sobrevive cuando preparacion, confirmacion y reglas de salida siguen conectadas."
            ]
          }
        ]
      },
      "lesson-7": {
        imageKey: "risk",
        imageAlt: "Panel de riesgo y decision con estructura de prevision, sistema A/B/C/No Bet, perfil de riesgo y limites practicos.",
        imageCaption: "Este es el lugar natural para el visual de riesgo porque la leccion convierte analisis en asignacion de capital.",
        sections: [
          {
            title: "Idea central",
            paragraphs: [
              "No todos los trades aprobados merecen la misma cantidad de capital. La escala A/B/C/No Bet existe para traducir calidad de tesis en exposicion respetando un perfil de riesgo medio-bajo.",
              "El sizing es consecuencia de la estructura, no una expresion de emocion."
            ]
          },
          {
            title: "Que hace la escala",
            paragraphs: [
              "Los trades A combinan mercado fuerte, confirmacion estadistica, contexto favorable y ejecucion manejable. Los B mantienen valor, pero con mas friccion. Los C son incompletos o dependen mas del live. No Bet tambien es una decision de portfolio.",
              "Los limites por dia, partido, mercado y drawdown impiden que una buena idea aislada se convierta en un libro agregado debil."
            ]
          },
          {
            title: "Mecanismo",
            bullets: [
              "Califica la claridad de tesis antes de pensar en la stake.",
              "Descuenta friccion de liquidez y complejidad live.",
              "Aplica penalizacion por correlacion cuando varios trades dependen de la misma idea base.",
              "Revisa limites de exposicion antes de ejecutar cualquier orden."
            ],
            paragraphs: []
          },
          {
            title: "Conclusión operativa",
            paragraphs: [
              "Una stake mas pequena en una buena idea pero correlacionada suele ser mejor que una stake grande en un trade que solo parece independiente.",
              "El sistema protege la banca al obligarte a responder no solo 'hay valor?', sino tambien 'cuanto valor merece capital hoy?'"
            ]
          }
        ]
      },
      "lesson-8": {
        sections: [
          {
            title: "Idea central",
            paragraphs: [
              "El proceso queda incompleto sin revision. Antes del partido confirmas validez. Durante el partido pruebas la tesis. Despues del partido auditas la calidad de la decision aparte del marcador final.",
              "El sesgo de resultado es uno de los habitos mas caros en este tipo de workflow."
            ]
          },
          {
            title: "Para que sirve la revision",
            paragraphs: [
              "La revision separa buenas decisiones con malos resultados de malas decisiones con buenos resultados. Esa distincion es esencial si quieres que el siguiente dia de trading mejore en lugar de repetir los mismos errores con mas confianza.",
              "El objetivo no es escribir notas largas. Es extraer una correccion util de cada trade."
            ]
          },
          {
            title: "Mecanismo",
            bullets: [
              "Reconfirma alineaciones, noticias, liquidez y spread antes de entrar.",
              "Usa el live solo para validar o rechazar el plan escrito.",
              "Registra entrada, salida, P/L, confirmacion de tesis y calidad de ejecucion despues del partido.",
              "Devuelve lo aprendido al scan del dia siguiente y a las reglas de riesgo."
            ],
            paragraphs: []
          },
          {
            title: "Conclusión operativa",
            paragraphs: [
              "Un trade ganador todavia puede mostrar debilidad de proceso. Un trade perdedor todavia puede ser evidencia de disciplina. La revision mantiene visibles esas verdades.",
              "El framework se fortalece cuando el output vuelve al input a traves de una auditoria honesta."
            ]
          }
        ]
      }
    }
  },
  de: {
    course: {
      intro: [
        "Dieser Kurs verwandelt einen breiten Fussball-Spielplan in einen engen Ausfuhrungs-Workflow fur den 1X2 / Moneyline-Markt. Das Ziel ist nicht, jedes Spiel zu kommentieren. Das Ziel ist, nur wenige Trades mit echter Bewegung, nutzbarer Liquiditat und einem dokumentierten Exit-Plan herauszufiltern.",
        "Die Marke von 10% bis 20% muss korrekt gelesen werden. In diesem Framework ist sie ein operatives Ziel pro Trade auf das in der Position riskierte Kapital, nicht das Versprechen eines Kontowachstums und keine Garantie fur Regelmassigkeit.",
        "Die Struktur ist bewusst eng: zulassiges Universum, Marktfilter, statistische und kontextuelle Validierung, Stake-Klassifikation, Pre-live-Einstieg, Live-Management und Nachspiel-Review."
      ],
      sections: [
        {
          title: "Wie man diesen Kurs nutzt",
          bullets: [
            "Arbeite die Lektionen in Reihenfolge durch, weil das Framework an Qualitat verliert, wenn du direkt zu Stake oder Live-Ausfuhrung springst.",
            "Fuhre pro Spiel ein Prediction Sheet mit Preis, Variation, Liquiditat, Hauptthese, Hauptrisiko, Stop, Take Profit und Live-Plan.",
            "Behandle `No Bet` als zentrales Ergebnis des Systems und nicht als Scheitern, weil kein Trade zustande kam.",
            "Uberprufe Entscheidungen nach dem Spiel, ohne den Endstand als automatische Qualitatsprobe zu behandeln."
          ],
          paragraphs: []
        },
        {
          title: "Was du aufbaust",
          paragraphs: [
            "Am Ende solltest du eine wiederholbare Routine haben: Rohscan, durch zwei Filter komprimierte Shortlist, Bestatigung uber Statistik und Nachrichten, A/B/C/No-Bet-Klassifikation, Pre-live-Ausfuhrungsplan und Nachspiel-Audit.",
            "Die Schlussfrage lautet nie 'wer gewinnt?'. Sie lautet: 'bietet dieser Trade noch Bewegung, Liquiditat, Restwert, kontrolliertes Risiko und einen glaubwurdigen Exit-Plan?'"
          ]
        }
      ]
    },
    lessons: {
      "lesson-1": {
        imageKey: "overview",
        imageAlt: "Gesamtuberblick des Frameworks mit Ziel, zulassigem Universum, Funnel und den zwei Filtern.",
        imageCaption: "Diese Ubersicht gehort genau hierhin, weil sie das operative Feld definiert, bevor uber ein einzelnes Spiel gesprochen wird.",
        sections: [
          {
            title: "Kernidee",
            paragraphs: [
              "Das System existiert, um Rauschen zu reduzieren, bevor Kapital riskiert wird. Ein disziplinierter Operator beginnt nicht mit einem Lieblingsteam oder einer attraktiven Erzahlung. Er beginnt mit einem Prozess, der die meisten Spiele ausschliesst.",
              "Der erste Gewinn von Struktur ist nicht Vorhersage, sondern Kompression. Weniger Kandidaten bedeuten mehr Aufmerksamkeit, bessere Dokumentation und weniger erzwungene Trades."
            ]
          },
          {
            title: "Was das zulassige Universum leistet",
            paragraphs: [
              "Das Framework akzeptiert nur Fussballspiele innerhalb der nachsten 24 bis 48 Stunden, nur im 1X2 / Moneyline-Markt und nur dann, wenn Polymarket einen aktiven und handelbaren Markt anbietet.",
              "Diese enge Definition ist kein Zufall. Sie schutzt den Workflow vor Nebenmarkten, kontextarmen Trades und analytischer Ermudung."
            ]
          },
          {
            title: "Mechanik",
            bullets: [
              "Starte mit der rohen Spiel-Liste.",
              "Behalte nur Spiele, die in das zulassige Universum passen.",
              "Nutze Filter 1, um echte Marktaktivitat zu erkennen.",
              "Nutze Filter 2, um schwache oder gestreckte Bewegungen zu vermeiden.",
              "Lass nur wenige Spiele in die Tiefenanalyse weiter."
            ],
            paragraphs: [
              "Diese Reihenfolge ist wichtig, weil sie verhindert, dass teure Analysezeit auf Markte verwendet wird, die nie Prioritat verdient haben."
            ]
          },
          {
            title: "Operative Schlussfolgerung",
            paragraphs: [
              "Ein disziplinierter Tag kann mit vierzig Spielen beginnen und mit null Trades enden. Das ist kein kaputtes System. Das ist ein geschutztes System.",
              "Das Framework wird in dem Moment nutzlich, in dem du akzeptierst, dass Ausschliessen eine produktive Handlung ist."
            ]
          }
        ]
      },
      "lesson-2": {
        callout: {
          label: "Telegram-Scanner",
          text: "Fur die Filterphase kann der Telegram-Bot helfen, aktive Markte schneller sichtbar zu machen. Nutze ihn als ersten Scanner, nicht als finalen Entscheider.",
          href: "https://t.me/polymarket_market_aim_bot",
          hrefLabel: "Bot offnen"
        },
        sections: [
          {
            title: "Kernidee",
            paragraphs: [
              "Filter 1 beantwortet eine einfache Frage: lebt dieser Markt uberhaupt? Preisvariation ist nur dann relevant, wenn sie von aktueller Aktivitat, verfugbarer Liquiditat und einem handelbaren Spread getragen wird.",
              "Ein Chart, der sich bewegt, kann aus Trading-Sicht trotzdem tot sein, wenn ihm Tiefe fehlt."
            ]
          },
          {
            title: "Was gepruft wird",
            bullets: [
              "Aktueller Preis und Preisschnappschusse uber mehrere Zeitfenster",
              "Richtung der Bewegung",
              "Gesamtvolumen und jungstes Volumen",
              "Sichtbare Liquiditat im Outcome",
              "Bid/Ask-Spread"
            ],
            paragraphs: [
              "Das Spiel besteht den Filter, wenn mindestens ein Outcome im 1X2-Markt genug Hinweise auf reale Beteiligung zeigt."
            ]
          },
          {
            title: "Mechanik",
            paragraphs: [
              "Bewegung schafft Prioritat, Volumen schafft Dichte, Liquiditat schafft Ausfuhrbarkeit und der Spread zeigt die unmittelbaren Kosten. Sobald einer dieser Blocke versagt, verliert der Markt operative Qualitat.",
              "Der Filter soll keinen Wert beweisen. Er soll entscheiden, wo Wert uberhaupt noch sinnvoll untersucht werden kann."
            ]
          },
          {
            title: "Operative Schlussfolgerung",
            paragraphs: [
              "Respektiere zuerst die Marktinfrastruktur und erst danach die Geschichte um das Spiel. Eine gute These in einem schwachen Markt bleibt schwache Ausfuhrung.",
              "Wenn es Variation ohne Liquiditat gibt, verwerfe. Wenn es Liquiditat ohne Richtung gibt, senke Prioritat. Wenn beides zusammenkommt, arbeite weiter."
            ]
          }
        ]
      },
      "lesson-3": {
        sections: [
          {
            title: "Kernidee",
            paragraphs: [
              "Filter 2 schutzt das Timing. Er verhindert zwei schlechte Trades: den Einstieg in zu schwache Bewegungen und den Einstieg in bereits zu weit gelaufene Bewegungen, bei denen kaum asymmetrischer Raum ubrig bleibt.",
              "Eine starke Bewegung ist nicht automatisch ein guter Einstieg. Sie kann einfach bedeuten, dass der Markt den Grossteil der Anpassung schon verarbeitet hat."
            ]
          },
          {
            title: "Wie man die Bewegung liest",
            paragraphs: [
              "Eine gesunde Bewegung beginnt dort, wo Variation relevant wird, aber bevor der Preis so stark komprimiert ist, dass das Risiko-Rendite-Profil leidet.",
              "Deshalb ist die Preis-zu-Quote-Ubersetzung wichtig. Ein Polymarket-Preis kann als implizite Wahrscheinlichkeit gelesen werden, und die ungefahrte Dezimalquote lautet `1 / Preis`."
            ]
          },
          {
            title: "Mechanik",
            bullets: [
              "Lehne schwache Bewegungen unterhalb der Aufmerksamkeitsschwelle ab.",
              "Bevorzuge gesunde Bewegungen, die noch Raum fur ein operatives Ziel von 10% bis 20% lassen.",
              "Behandle starkere Bewegungen mit mehr Vorsicht.",
              "Verlange aussergewohnliche Rechtfertigung, wenn die Bewegung bereits gestreckt wirkt."
            ],
            paragraphs: []
          },
          {
            title: "Operative Schlussfolgerung",
            paragraphs: [
              "Verwechsle die Schonheit des Charts nicht mit der Qualitat des verbleibenden Trades. Die beste Bewegung ist oft nicht die grosste, sondern jene mit noch nutzbarer Asymmetrie.",
              "Filter 2 existiert, um zu verhindern, dass du einen spaten Preis fur fremde fruhere Information bezahlst."
            ]
          }
        ]
      },
      "lesson-4": {
        callout: {
          label: "Basis fur Advanced Stats",
          text: "Fur Skripte, Modelle und quantitative Referenzen, die die Shortlist-Prufung unterstutzen konnen, nutze das offentliche AIMIDAS-GitHub als Research-Basis und nicht als Plug-and-Play-Wahrheit.",
          href: "https://github.com/aimidas1",
          hrefLabel: "github.com/aimidas1 offnen"
        },
        sections: [
          {
            title: "Kernidee",
            paragraphs: [
              "Advanced Stats kommen nach den Marktfiltern ins Spiel, weil sie hier nicht dazu dienen, Matches aus dem Nichts zu finden. Ihre Aufgabe ist es, die durch Marktaktivitat gebildete Shortlist zu bestatigen, abzuschwachen oder zu verwerfen.",
              "Du sammelst Zahlen nicht zur Dekoration. Du testest, ob die Marktbewegung strukturell getragen wird."
            ]
          },
          {
            title: "Funktionale Gruppen",
            bullets: [
              "Offensive Starke: Chance Creation und Zugang zur Box",
              "Defensive Fragilitat: Qualitat der zugelassenen Chancen und aufgenommener Druck",
              "Spielkontrolle: Territorium, Rhythmus und Initiative",
              "Ergebnis versus Performance: wo jungste Resultate Regression verbergen"
            ],
            paragraphs: [
              "Metriken nach Funktion zu gruppieren verhindert, dass isolierte Zahlen zu Schlagworten werden."
            ]
          },
          {
            title: "Mechanik",
            paragraphs: [
              "Lies das Spiel uber das Gleichgewicht zwischen Kreation, Konzession, Kontrolle und Regressionskontext. Wenn die Shortlist in eine Richtung zeigt, die Metriken aber systematisch widersprechen, ist Herabstufung oder Ausschluss der richtige Schritt.",
              "Der Vorteil liegt nicht darin, mehr Daten als alle anderen zu besitzen. Der Vorteil liegt darin, die Daten genau auf die 1X2-Frage antworten zu lassen."
            ]
          },
          {
            title: "Operative Schlussfolgerung",
            paragraphs: [
              "Ein Team kann oft gewinnen und trotzdem strukturell schwach sein. Ein anderes Team kann jungst schwachere Resultate haben und trotzdem einen besseren Preis verdienen, als der Markt anbietet.",
              "Wenn die Zahlen die These nicht klar stutzen, ist niedrigere Stake oder `No Bet` oft das sauberste Ergebnis."
            ]
          }
        ]
      },
      "lesson-5": {
        imageKey: "workflow",
        imageAlt: "Workflow-Panel mit Spielanalyse, kurzem News-Prompt, Tagesroutine und Input-Prozess-Output-Logik.",
        imageCaption: "Diese Grafik passt hierher, weil sie Shortlist, Validierung, Entscheidung und Review verbindet.",
        sections: [
          {
            title: "Kernidee",
            paragraphs: [
              "Nachrichten und Prediction Sheet erzwingen Disziplin, sobald die Shortlist steht. Nachrichten fangen kurzfristigen Kontext auf, den Statistik ubersieht. Das Sheet friert die These ein, bevor Ausfuhrungsdruck entsteht.",
              "Ohne diese beiden Ebenen schreibt der Operator die Geschichte meist erst nach dem Spiel um."
            ]
          },
          {
            title: "Was in den Nachrichten wichtig ist",
            bullets: [
              "Wichtige Verletzungen und Sperren",
              "Motivation und Tabellensituation",
              "Kalenderbelastung und Mudigkeit",
              "Wahrscheinliche Rotation",
              "Jedes Ereignis, das die 1X2-Sicht direkt verandert"
            ],
            paragraphs: []
          },
          {
            title: "Mechanik",
            paragraphs: [
              "Der Workflow produziert Ausgaben in Reihenfolge: Roh-Liste, gefilterte Shortlist, validierte These, Prediction Sheet, Trade-Entscheidung und Nachspiel-Audit.",
              "Das Sheet ist wichtig, weil es festhalt, warum das Spiel gewahlt wurde, was das Hauptrisiko ist und wo der Live-Plan scheitern muss."
            ]
          },
          {
            title: "Operative Schlussfolgerung",
            paragraphs: [
              "Nutze Nachrichten, um die These zu testen, nicht um sie zu schmucken. Nutze das Sheet, um den Trade auditierbar zu machen, nicht um ihn nur professionell wirken zu lassen.",
              "Ein starker Prozess wird gerade deshalb verteidigbar, weil er auch leicht zu verwerfen ist."
            ]
          }
        ]
      },
      "lesson-6": {
        sections: [
          {
            title: "Kernidee",
            paragraphs: [
              "Das Framework wird pre-live vorbereitet und live gepruft. Das Spiel ist nicht der Ort, an dem die These erfunden wird. Es ist der Ort, an dem gepruft wird, ob die These noch lebt.",
              "Ausfuhrungsqualitat hangt ebenso von der Geschwindigkeit des Exits ab wie von der Qualitat des Einstiegs."
            ]
          },
          {
            title: "Wofur die Live-Phase da ist",
            paragraphs: [
              "Das Live-Management sollte eine Frage beantworten: bestatigt das Spiel das Szenario, das die Position rechtfertigte? Wenn ja, schutze und staffle Gewinn rational. Wenn nein, reduziere oder steige aus, bevor Verzogerung aus Meinungsverschiedenheit Schaden macht.",
              "Deshalb kombiniert das Framework Preis-Stop und Thesen-Stop."
            ]
          },
          {
            title: "Mechanik",
            bullets: [
              "Definiere den Einstieg erst, wenn Filter, Statistik und Nachrichten zusammenpassen.",
              "Schreibe Preis-Stop und Thesen-Stop vor dem Anpfiff auf.",
              "Nutze das erste Live-Fenster, um Kontrolle, Gefahr und Marktreaktion zu validieren.",
              "Nimm Teilgewinn mit, wenn der Preis bezahlt, bevor Gier ubernimmt."
            ],
            paragraphs: []
          },
          {
            title: "Operative Schlussfolgerung",
            paragraphs: [
              "Eine gute Pre-live-Lesart rechtfertigt kein emotionales Live-Verhalten. In dem Moment, in dem die These bricht, ist Disziplin wertvoller als Uberzeugung.",
              "Der Trade uberlebt, wenn Vorbereitung, Bestatigung und Exit-Regeln verbunden bleiben."
            ]
          }
        ]
      },
      "lesson-7": {
        imageKey: "risk",
        imageAlt: "Risiko- und Entscheidungs-Panel mit Prognosestruktur, A/B/C/No-Bet-System, Risikoprofil und praktischen Limits.",
        imageCaption: "Hier passt die Risiko-Grafik naturlich hin, weil die Lektion Analyse in Kapitalallokation ubersetzt.",
        sections: [
          {
            title: "Kernidee",
            paragraphs: [
              "Nicht jeder freigegebene Trade verdient dieselbe Kapitalmenge. Die A/B/C/No-Bet-Leiter ubersetzt Thesenqualitat in Exposition und respektiert dabei ein Risiko-Profil im mittleren bis niedrigen Bereich.",
              "Sizing ist eine Folge von Struktur, nicht der Ausdruck von Emotion."
            ]
          },
          {
            title: "Was die Leiter leistet",
            paragraphs: [
              "A-Trades verbinden starke Marktqualitat, statistische Bestatigung, gunstigen Kontext und gut handhabbare Ausfuhrung. B-Trades haben weiter Wert, aber mehr Reibung. C-Trades sind unvollstandig oder starker von Live-Bestatigung abhangig. No Bet ist ebenfalls eine Portfolio-Entscheidung.",
              "Grenzen pro Tag, Spiel, Markt und Drawdown verhindern, dass eine gute Einzelidee zu einem schwachen Gesamtbuch wird."
            ]
          },
          {
            title: "Mechanik",
            bullets: [
              "Bewerte zuerst die Klarheit der These.",
              "Ziehe Liquiditatsreibung und Live-Komplexitat ab.",
              "Wende einen Korrelationsabschlag an, wenn mehrere Trades von derselben Grundidee abhangen.",
              "Prufe Expositionsgrenzen vor jeder Order."
            ],
            paragraphs: []
          },
          {
            title: "Operative Schlussfolgerung",
            paragraphs: [
              "Eine kleinere Stake auf eine gute, aber korrelierte Idee ist oft besser als eine grosse Stake auf einen Trade, der nur scheinbar unabhangig ist.",
              "Das System schutzt die Bankroll, indem es dich zwingt, nicht nur 'gibt es Wert?' zu beantworten, sondern auch 'wie viel Wert verdient heute Kapital?'"
            ]
          }
        ]
      },
      "lesson-8": {
        sections: [
          {
            title: "Kernidee",
            paragraphs: [
              "Ohne Review bleibt der Prozess unvollstandig. Vor dem Spiel bestatigst du Gultigkeit. Wahrend des Spiels testest du die These. Nach dem Spiel auditierst du die Qualitat der Entscheidung getrennt vom Endstand.",
              "Result Bias ist in diesem Workflow eine der teuersten Gewohnheiten."
            ]
          },
          {
            title: "Wofur das Review da ist",
            paragraphs: [
              "Das Review trennt gute Entscheidungen mit schlechten Ergebnissen von schlechten Entscheidungen mit guten Ergebnissen. Diese Unterscheidung ist entscheidend, wenn der nachste Trading-Tag besser werden soll, statt dieselben Fehler nur selbstbewusster zu wiederholen.",
              "Das Ziel sind keine langen Notizen. Das Ziel ist eine nutzliche Korrektur pro Trade."
            ]
          },
          {
            title: "Mechanik",
            bullets: [
              "Bestatige Aufstellungen, Nachrichten, Liquiditat und Spread vor dem Einstieg erneut.",
              "Nutze Live nur zur Bestatigung oder Ablehnung des geschriebenen Plans.",
              "Erfasse nach dem Spiel Einstieg, Ausstieg, P/L, Thesen-Bestatigung und Ausfuhrungsqualitat.",
              "Fuhre die Erkenntnisse in den Scan des nachsten Tages und in die Risikoregeln zuruck."
            ],
            paragraphs: []
          },
          {
            title: "Operative Schlussfolgerung",
            paragraphs: [
              "Ein profitabler Trade kann trotzdem Prozessschwache zeigen. Ein verlustreicher Trade kann trotzdem Disziplin beweisen. Das Review macht diese Wahrheiten sichtbar.",
              "Das Framework wird starker, wenn Output uber ehrliches Audit wieder zu Input wird."
            ]
          }
        ]
      }
    }
  },
  ko: {
    course: {
      intro: [
        "이 과정은 넓은 축구 일정표를 1X2 / 머니라인 시장을 위한 좁고 실행 가능한 워크플로로 바꿉니다. 목표는 모든 경기를 코멘트하는 것이 아니라, 실제 움직임과 실행 가능한 유동성, 문서화된 출구 계획이 있는 소수의 트레이드를 골라내는 것입니다.",
        "10%에서 20%라는 숫자는 정확히 이해해야 합니다. 이 프레임워크에서 그것은 포지션에 실제로 노출된 자본에 대한 트레이드별 운영 목표이지, 계좌 성장 보장이나 빈도 약속이 아닙니다.",
        "구조는 의도적으로 좁습니다. 적격 유니버스, 시장 필터, 통계와 컨텍스트 검증, 스테이크 분류, 프리라이브 진입, 라이브 관리, 경기 후 리뷰로 이어집니다."
      ],
      sections: [
        {
          title: "이 과정을 사용하는 방법",
          bullets: [
            "레슨 순서를 지키세요. 스테이크나 라이브 실행으로 바로 뛰어들면 프레임워크의 질이 떨어집니다.",
            "각 경기마다 가격, 변동률, 유동성, 핵심 가설, 핵심 리스크, 스톱, 이익 실현 계획, 라이브 플랜이 들어간 예측 시트를 유지하세요.",
            "`No Bet`를 행동 실패가 아니라 시스템의 정상적인 출력으로 받아들이세요.",
            "최종 스코어를 자동 증거로 삼지 말고 경기 후 결정을 검토하세요."
          ],
          paragraphs: []
        },
        {
          title: "이 과정이 만드는 것",
          paragraphs: [
            "과정을 마치면 원시 스캔, 두 개의 필터로 압축된 쇼트리스트, 통계와 뉴스 기반 검증, A/B/C/No Bet 분류, 프리라이브 실행 계획, 경기 후 감사라는 반복 가능한 루틴을 갖게 됩니다.",
            "마지막 질문은 '누가 이길까?'가 아닙니다. '이 트레이드는 아직도 움직임, 유동성, 남아 있는 가치, 통제 가능한 리스크, 신뢰할 수 있는 출구 계획을 갖고 있는가?'가 핵심입니다."
          ]
        }
      ]
    },
    lessons: {
      "lesson-1": {
        imageKey: "overview",
        imageAlt: "목표, 적격 유니버스, 퍼널, 두 개의 필터를 보여주는 프레임워크 개요 이미지.",
        imageCaption: "이 개요는 개별 경기를 논하기 전에 운영 필드를 정의하기 때문에 이 레슨에 가장 잘 맞습니다.",
        sections: [
          {
            title: "핵심 아이디어",
            paragraphs: [
              "이 시스템의 존재 이유는 자본을 노출하기 전에 노이즈를 줄이는 데 있습니다. 진지한 운영자는 좋아하는 팀이나 매력적인 서사로 시작하지 않습니다. 대부분의 경기를 제외하는 프로세스로 시작합니다.",
              "구조의 첫 번째 이득은 예측이 아니라 압축입니다. 후보 경기가 줄어들수록 주의력, 기록 품질, 강제 진입 방지가 좋아집니다."
            ]
          },
          {
            title: "적격 유니버스의 역할",
            paragraphs: [
              "프레임워크는 다음 24시간에서 48시간 안의 축구 경기, 1X2 / 머니라인 시장, 그리고 Polymarket에서 실제로 활성화되어 거래 가능한 시장만 허용합니다.",
              "이 좁은 정의는 우연이 아닙니다. 파생 시장, 컨텍스트가 약한 트레이드, 분석 피로를 막기 위한 방어선입니다."
            ]
          },
          {
            title: "메커니즘",
            bullets: [
              "경기 원시 목록에서 시작한다.",
              "적격 유니버스에 맞는 경기만 남긴다.",
              "필터 1로 실제 시장 활동을 찾는다.",
              "필터 2로 약하거나 과도하게 늘어난 움직임을 제거한다.",
              "소수의 경기만 심층 분석으로 올린다."
            ],
            paragraphs: [
              "이 순서는 우선순위를 가질 가치가 없던 시장에 비싼 분석 시간을 쓰지 않게 해줍니다."
            ]
          },
          {
            title: "운영적 결론",
            paragraphs: [
              "규율 있는 하루는 40경기로 시작해서 0개의 트레이드로 끝날 수 있습니다. 그것은 망가진 시스템이 아니라 보호된 시스템입니다.",
              "배제가 생산적인 행동이라는 사실을 받아들이는 순간 프레임워크가 비로소 유용해집니다."
            ]
          }
        ]
      },
      "lesson-2": {
        callout: {
          label: "텔레그램 스캐너",
          text: "필터링 단계에서는 텔레그램 봇이 활성 시장을 더 빨리 찾는 데 도움을 줄 수 있습니다. 최종 의사결정기가 아니라 초기 스캐너로 사용하세요.",
          href: "https://t.me/polymarket_market_aim_bot",
          hrefLabel: "봇 열기"
        },
        sections: [
          {
            title: "핵심 아이디어",
            paragraphs: [
              "필터 1은 단순한 질문에 답합니다. 이 시장은 실제로 살아 있는가? 가격 변동은 최근 활동, 사용 가능한 유동성, 실행 가능한 스프레드가 있을 때만 의미가 있습니다.",
              "깊이가 없는 움직이는 차트는 트레이딩 관점에서는 여전히 죽은 시장일 수 있습니다."
            ]
          },
          {
            title: "무엇을 확인할 것인가",
            bullets: [
              "현재 가격과 최근 시간창의 가격 스냅샷",
              "움직임의 방향",
              "총 거래량과 최근 거래량",
              "해당 아웃컴의 가시 유동성",
              "매수/매도 스프레드"
            ],
            paragraphs: [
              "1X2 시장의 최소 한 아웃컴이 실제 참여의 흔적을 충분히 보여줄 때 경기는 필터를 통과합니다."
            ]
          },
          {
            title: "메커니즘",
            paragraphs: [
              "움직임은 우선순위를 주고, 거래량은 밀도를 주며, 유동성은 실행 가능성을 주고, 스프레드는 즉시 비용을 보여줍니다. 이 블록들 중 하나라도 무너지면 시장은 운영 품질을 잃습니다.",
              "이 필터의 목적은 가치를 증명하는 것이 아니라, 어디에서 가치 검토가 아직 의미가 있는지를 정하는 것입니다."
            ]
          },
          {
            title: "운영적 결론",
            paragraphs: [
              "경기 서사보다 먼저 시장 인프라를 존중하세요. 좋은 가설도 나쁜 시장에서는 나쁜 실행으로 끝납니다.",
              "변동은 있는데 유동성이 없으면 버리세요. 유동성은 있는데 방향이 없으면 우선순위를 낮추세요. 둘이 맞으면 다음 단계로 갑니다."
            ]
          }
        ]
      },
      "lesson-3": {
        sections: [
          {
            title: "핵심 아이디어",
            paragraphs: [
              "필터 2는 타이밍을 보호합니다. 너무 약해서 주목할 필요가 없는 움직임과, 이미 너무 많이 진행돼 남은 비대칭이 부족한 움직임에 늦게 들어가는 실수를 막습니다.",
              "강한 움직임이 자동으로 좋은 진입을 뜻하지는 않습니다. 시장이 이미 대부분의 가격 조정을 반영했을 수 있습니다."
            ]
          },
          {
            title: "움직임을 읽는 법",
            paragraphs: [
              "건강한 움직임은 변동이 의미를 갖기 시작하지만, 가격이 지나치게 압축되어 위험-보상 구조를 망치기 전 구간에 있습니다.",
              "그래서 가격을 배당으로 바꿔보는 일이 중요합니다. Polymarket 가격은 암시 확률로 볼 수 있고, 대략적인 십진 배당은 `1 / 가격`입니다."
            ]
          },
          {
            title: "메커니즘",
            bullets: [
              "관심 임계값 아래의 약한 움직임은 거절한다.",
              "10%에서 20%의 운영 목표를 남길 수 있는 건강한 움직임을 선호한다.",
              "더 강한 움직임은 더 신중하게 다룬다.",
              "이미 과도하게 늘어난 움직임에는 예외적으로 강한 근거를 요구한다."
            ],
            paragraphs: []
          },
          {
            title: "운영적 결론",
            paragraphs: [
              "차트의 아름다움을 남아 있는 트레이드의 질과 혼동하지 마세요. 가장 좋은 움직임은 가장 큰 움직임이 아니라, 여전히 사용할 수 있는 비대칭을 남기는 움직임입니다.",
              "필터 2의 목적은 다른 사람이 먼저 산 정보를 뒤늦게 비싼 가격으로 사는 일을 막는 데 있습니다."
            ]
          }
        ]
      },
      "lesson-4": {
        callout: {
          label: "고급 통계 참고 기반",
          text: "쇼트리스트 검토를 도울 수 있는 스크립트, 모델, 정량 참조는 AIMIDAS 공개 GitHub를 연구 기반으로 활용하세요. 그대로 복제하는 정답처럼 사용하지 마세요.",
          href: "https://github.com/aimidas1",
          hrefLabel: "github.com/aimidas1 열기"
        },
        sections: [
          {
            title: "핵심 아이디어",
            paragraphs: [
              "고급 통계는 시장 필터 뒤에 들어옵니다. 여기서 통계의 역할은 경기를 처음부터 발굴하는 것이 아니라, 시장 활동으로 만들어진 쇼트리스트를 확인하거나 약화시키거나 제거하는 것입니다.",
              "숫자를 장식처럼 모으는 것이 아니라, 시장 움직임에 구조적 지지가 있는지 시험하는 것입니다."
            ]
          },
          {
            title: "기능별 그룹",
            bullets: [
              "공격 강도: 찬스 생성과 박스 접근",
              "수비 취약성: 허용 찬스의 질과 압박 수용",
              "경기 통제: 영토, 리듬, 주도권",
              "결과 대 퍼포먼스: 최근 스코어가 회귀를 숨기는 지점"
            ],
            paragraphs: [
              "지표를 기능별로 묶으면 고립된 숫자를 구호처럼 사용하는 일을 막을 수 있습니다."
            ]
          },
          {
            title: "메커니즘",
            paragraphs: [
              "창출, 허용, 통제, 회귀 컨텍스트의 균형으로 경기를 읽으세요. 쇼트리스트가 한 방향을 가리키더라도 지표들이 꾸준히 반대한다면, 올바른 출력은 트레이드 하향 조정 또는 제거입니다.",
              "엣지는 남보다 데이터를 많이 갖는 데 있지 않습니다. 데이터가 정확히 1X2 질문에 답하도록 강제하는 데 있습니다."
            ]
          },
          {
            title: "운영적 결론",
            paragraphs: [
              "한 팀은 자주 이기면서도 구조적으로 약할 수 있습니다. 다른 팀은 최근 결과가 평범해도 시장보다 더 나은 가격을 받아야 할 수 있습니다.",
              "숫자가 가설을 명확히 지지하지 않는다면, 더 작은 스테이크나 `No Bet`가 가장 깨끗한 결과일 수 있습니다."
            ]
          }
        ]
      },
      "lesson-5": {
        imageKey: "workflow",
        imageAlt: "경기 분석, 뉴스 프롬프트, 일일 워크플로, 입력-프로세스-출력 논리를 보여주는 워크플로 패널.",
        imageCaption: "이 시각 자료는 쇼트리스트, 검증, 결정, 리뷰를 연결하기 때문에 이 레슨에 잘 맞습니다.",
        sections: [
          {
            title: "핵심 아이디어",
            paragraphs: [
              "뉴스와 예측 시트는 쇼트리스트 이후의 규율을 강제합니다. 뉴스는 통계가 놓칠 수 있는 단기 컨텍스트를 포착하고, 시트는 실행 압력이 시작되기 전에 가설을 고정합니다.",
              "이 두 층이 없으면 운영자는 경기 후에 서사를 다시 쓰게 됩니다."
            ]
          },
          {
            title: "뉴스에서 중요한 것",
            bullets: [
              "핵심 부상과 징계",
              "동기와 순위 컨텍스트",
              "일정 부담과 피로",
              "예상 로테이션",
              "1X2 시각을 직접 바꾸는 사건"
            ],
            paragraphs: []
          },
          {
            title: "메커니즘",
            paragraphs: [
              "워크플로는 순서대로 산출물을 만듭니다. 원시 목록, 필터된 쇼트리스트, 검증된 가설, 예측 시트, 트레이드 결정, 경기 후 감사입니다.",
              "예측 시트는 왜 그 경기가 선택되었는지, 핵심 리스크가 무엇인지, 라이브 플랜이 어디에서 무너져야 하는지를 기록하기 때문에 중요합니다."
            ]
          },
          {
            title: "운영적 결론",
            paragraphs: [
              "뉴스는 가설을 장식하는 것이 아니라 도전하는 데 사용하세요. 시트는 트레이드를 그럴듯해 보이게 하는 것이 아니라 감사 가능하게 만드는 데 사용하세요.",
              "강한 프로세스는 거절하기 쉬워질수록 오히려 더 방어 가능해집니다."
            ]
          }
        ]
      },
      "lesson-6": {
        sections: [
          {
            title: "핵심 아이디어",
            paragraphs: [
              "프레임워크는 프리라이브에서 준비되고 라이브에서 시험됩니다. 경기는 가설을 발명하는 곳이 아니라, 가설이 아직 살아 있는지 확인하는 곳입니다.",
              "실행 품질은 진입의 질만큼이나 출구 속도에도 달려 있습니다."
            ]
          },
          {
            title: "라이브 단계의 목적",
            paragraphs: [
              "라이브 관리는 한 가지 질문에 답해야 합니다. 경기가 포지션을 정당화한 시나리오를 확인해 주는가? 그렇다면 이익을 합리적으로 보호하고 단계적으로 실현합니다. 아니라면 지연이 손실을 키우기 전에 축소하거나 청산합니다.",
              "그래서 이 프레임워크는 가격 스톱과 가설 스톱을 함께 사용합니다."
            ]
          },
          {
            title: "메커니즘",
            bullets: [
              "필터, 통계, 뉴스가 정렬될 때만 진입을 정의한다.",
              "킥오프 전에 가격 스톱과 가설 스톱을 적는다.",
              "첫 라이브 구간에서 통제, 위협, 시장 반응을 검증한다.",
              "탐욕이 개입하기 전에 가격이 보상하면 부분 이익을 실현한다."
            ],
            paragraphs: []
          },
          {
            title: "운영적 결론",
            paragraphs: [
              "좋은 프리라이브 해석이 감정적인 라이브 행동을 정당화하지는 않습니다. 가설이 깨지는 순간에는 확신보다 규율이 더 중요합니다.",
              "준비, 확인, 출구 규칙이 연결되어 있을 때 트레이드가 살아남습니다."
            ]
          }
        ]
      },
      "lesson-7": {
        imageKey: "risk",
        imageAlt: "예측 구조, A/B/C/No Bet 시스템, 리스크 프로필, 실전 한도를 보여주는 리스크/결정 패널.",
        imageCaption: "이 레슨은 분석을 자본 배분으로 바꾸기 때문에 리스크 시각 자료가 가장 자연스럽게 들어갑니다.",
        sections: [
          {
            title: "핵심 아이디어",
            paragraphs: [
              "승인된 모든 트레이드가 같은 자본을 받을 필요는 없습니다. A/B/C/No Bet 사다리는 가설의 질을 노출도로 바꾸면서 중저위험 프로필을 지키도록 설계되었습니다.",
              "사이징은 감정의 표현이 아니라 구조의 결과입니다."
            ]
          },
          {
            title: "이 사다리가 하는 일",
            paragraphs: [
              "A 트레이드는 강한 시장 품질, 통계 확인, 우호적 컨텍스트, 관리 가능한 실행을 결합합니다. B는 가치가 있지만 마찰이 더 있습니다. C는 불완전하거나 라이브 확인 의존도가 더 큽니다. No Bet 역시 포트폴리오 결정입니다.",
              "일별, 경기별, 시장별, 드로우다운 한도는 좋은 단일 아이디어가 약한 집합 포지션으로 바뀌는 일을 막습니다."
            ]
          },
          {
            title: "메커니즘",
            bullets: [
              "먼저 가설의 선명도를 평가한다.",
              "유동성 마찰과 라이브 복잡도를 차감한다.",
              "여러 트레이드가 같은 기본 아이디어에 의존하면 상관관계 페널티를 적용한다.",
              "어떤 주문이든 실행 전에 총 노출 한도를 확인한다."
            ],
            paragraphs: []
          },
          {
            title: "운영적 결론",
            paragraphs: [
              "좋지만 상관관계가 있는 아이디어에는 더 작은 스테이크가, 독립적으로 보이기만 하는 트레이드에 큰 스테이크를 거는 것보다 낫습니다.",
              "이 시스템은 '가치가 있는가?'뿐 아니라 '오늘 얼마만큼의 가치가 자본을 받을 자격이 있는가?'를 답하게 함으로써 자본을 보호합니다."
            ]
          }
        ]
      },
      "lesson-8": {
        sections: [
          {
            title: "핵심 아이디어",
            paragraphs: [
              "리뷰가 없으면 프로세스는 완성되지 않습니다. 경기 전에는 유효성을 확인하고, 경기 중에는 가설을 시험하며, 경기 후에는 최종 스코어와 분리해서 결정의 질을 감사해야 합니다.",
              "결과 편향은 이런 워크플로에서 가장 비싼 습관 중 하나입니다."
            ]
          },
          {
            title: "리뷰의 목적",
            paragraphs: [
              "리뷰는 좋은 결정이지만 결과가 나빴던 경우와, 나쁜 결정이지만 결과가 좋았던 경우를 분리합니다. 다음 트레이딩 데이가 정말로 개선되려면 이 구분이 필수적입니다.",
              "목표는 긴 메모가 아니라, 각 트레이드에서 하나의 유용한 교정을 추출하는 것입니다."
            ]
          },
          {
            title: "메커니즘",
            bullets: [
              "진입 전 라인업, 뉴스, 유동성, 스프레드를 다시 확인한다.",
              "라이브는 적어둔 계획을 확인하거나 기각하는 데만 사용한다.",
              "경기 후에는 진입, 청산, 손익, 가설 확인 여부, 실행 품질을 기록한다.",
              "배운 내용을 다음 날 스캔과 리스크 규칙에 다시 넣는다."
            ],
            paragraphs: []
          },
          {
            title: "운영적 결론",
            paragraphs: [
              "이익으로 끝난 트레이드도 프로세스 약점을 드러낼 수 있습니다. 손실로 끝난 트레이드도 규율의 증거일 수 있습니다. 리뷰는 이 진실을 보이게 합니다.",
              "정직한 감사를 통해 출력이 다시 입력으로 돌아올 때 프레임워크는 더 강해집니다."
            ]
          }
        ]
      }
    }
  }
};

export const frameworkTradingPtMetadata = {
  title: "Framework Trading Futebol 10% a 20% ROI",
  subtitle:
    "Um sistema pre-live para filtrar poucos jogos, validar contexto e gerir trades 1X2 com alvo operacional de 10% a 20% sobre o capital arriscado na posição.",
  corePromise:
    "Ensinar um framework diário para transformar dezenas de jogos em poucas posições 1X2 com liquidez, tese verificável, risco médio-baixo e plano claro de entrada e saída.",
  modules: {
    "module-1": "Da lista bruta à shortlist executável",
    "module-2": "Confirmação estatística e contexto operacional",
    "module-3": "Execução, risco e revisão de processo"
  },
  lessons: {
    "lesson-1": "Objetivo do sistema, universo elegível e funil operacional",
    "lesson-2": "Filtro 1: atividade, direção e liquidez de mercado",
    "lesson-3": "Filtro 2: variação saudável, conversão preço-odd e janela de entrada",
    "lesson-4": "Estatísticas avançadas para confirmar ou rejeitar um 1X2",
    "lesson-5": "Notícias, ficha da previsão e workflow diário do analista",
    "lesson-6": "Entrada pre-live, gestão live, stop loss e take profit",
    "lesson-7": "Sistema de decisão, stake, correlação e limites práticos",
    "lesson-8": "Antes do jogo, durante o jogo e revisão pós-jogo"
  }
} as const;

export const frameworkTradingPtMetadataClean = {
  title: "Framework Trading Futebol 10% a 20% ROI",
  subtitle:
    "Um sistema pre-live para filtrar poucos jogos, validar contexto e gerir trades 1X2 com alvo operacional de 10% a 20% sobre o capital arriscado na posição.",
  corePromise:
    "Ensinar um framework diário para transformar dezenas de jogos em poucas posições 1X2 com liquidez, tese verificável, risco médio-baixo e plano claro de entrada e saída.",
  whyThisCourseExists:
    "Muitos operadores veem movimento de mercado, narrativa pública ou estatísticas soltas e tratam isso como edge pronto. Este curso substitui esse impulso por um funil estreito: universo elegível, filtros de mercado, confirmação estatística e contextual, decisão de stake, gestão live e revisão pós-jogo.",
  audience:
    "Leitores com noção básica de odds, Polymarket e mercados 1X2 que querem operar com menos jogos, mais disciplina e documentação auditável.",
  enemy:
    "Overtrading, entradas tardias em movimentos já esticados, leitura de preço sem liquidez, uso superficial de estatísticas, ausência de stop real e confusão entre resultado pontual e qualidade de processo.",
  prerequisites: [
    "Conhecimento básico do mercado 1X2 / Moneyline",
    "Capacidade de converter preço em probabilidade implícita e odd decimal",
    "Disponibilidade para registar tese, risco e revisão pós-trade",
    "Disposição para aceitar No Bet quando não existe edge claro"
  ],
  modules: {
    "module-1": "Da lista bruta à shortlist executável",
    "module-2": "Confirmação estatística e contexto operacional",
    "module-3": "Execução, risco e revisão de processo"
  },
  lessons: {
    "lesson-1": "Objetivo do sistema, universo elegível e funil operacional",
    "lesson-2": "Filtro 1: atividade, direção e liquidez de mercado",
    "lesson-3": "Filtro 2: variação saudável, conversão preço-odd e janela de entrada",
    "lesson-4": "Estatísticas avançadas para confirmar ou rejeitar um 1X2",
    "lesson-5": "Notícias, ficha da previsão e workflow diário do analista",
    "lesson-6": "Entrada pre-live, gestão live, stop loss e take profit",
    "lesson-7": "Sistema de decisão, stake, correlação e limites práticos",
    "lesson-8": "Antes do jogo, durante o jogo e revisão pós-jogo"
  }
} as const;

export function isFrameworkTradingCourse(courseId: string) {
  return courseId === "course-framework-trading-10-20-roi";
}

export function hasFrameworkTradingLocalizedCourseContent(locale: AppLocale, courseId: string) {
  return isFrameworkTradingCourse(courseId) && Boolean(content[locale]?.course);
}

export function hasFrameworkTradingLocalizedLessonContent(locale: AppLocale, courseId: string, lessonId: string) {
  return isFrameworkTradingCourse(courseId) && Boolean(content[locale]?.lessons[lessonId]);
}

export function getFrameworkTradingLocalizedCourseContent(locale: AppLocale) {
  return content[locale]?.course ?? null;
}

export function getFrameworkTradingLocalizedLessonContent(locale: AppLocale, lessonId: string) {
  return content[locale]?.lessons[lessonId] ?? null;
}
