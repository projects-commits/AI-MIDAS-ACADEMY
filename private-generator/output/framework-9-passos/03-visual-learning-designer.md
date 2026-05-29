Aqui estão os blocos de aprendizagem visual estruturados para implementação direta nos componentes existentes. Cada bloco foi desenhado para isolar um mecanismo operacional, eliminar ruído narrativo e forçar a calibração probabilística.

---

### M1: Fundamentos da Análise Contextual
- **Tipo de Bloco:** BlackboardPanel
- **Título:** Separação Estrutural: Estatística Bruta vs. Variável Contextual
- **Propósito:** Demonstrar visualmente como isolar dados de resultado de fatores operacionais que os geram.
- **Elementos de Conteúdo Exatos:** 
  - `[GOLD]` Linha base histórica (xG, posse estruturada, transições)
  - `[ORANGE]` Fatores de ajuste (calendário, lesões, pressão institucional)
  - `[GOLD]` Indicador de processo (latência decisória, erros sob pressão, coesão espacial)
  - `[ORANGE]` Zona de ruído amostral (jogos < 10, variação > 20%)
- **Onde deve aparecer:** Início da M1, antes da introdução de métricas avançadas.
- **Por que melhora a compreensão:** Força a distinção entre correlação superficial e causalidade operacional, evitando a contaminação do modelo base por variáveis não controladas.

---

### M2: Psicologia e Dinâmicas de Grupo
- **Tipo de Bloco:** DecisionChecklist
- **Título:** Protocolo de Carga Cognitiva e Limiar de Pressão
- **Propósito:** Estruturar a validação de estressores psicológicos antes do ajuste probabilístico.
- **Elementos de Conteúdo Exatos:**
  - `[ORANGE]` Mapear gatilhos agudos (sequência negativa, instabilidade técnica, ambiente hostil)
  - `[GOLD]` Traduzir para métricas observáveis (passes sob pressão, recomposição defensiva tardia)
  - `[ORANGE]` Definir intervalo de confiança do ajuste (±5–10%)
  - `[GOLD]` Comparar P(calibrada) vs P(implícita de mercado)
  - `[ORANGE]` Registrar critério de invalidação e limite de exposição
- **Onde deve aparecer:** Seção de mecanismo da M2, após a explicação do modelo mental.
- **Por que melhora a compreensão:** Transforma variáveis intangíveis em etapas auditáveis, reduzindo a subjetividade e impedindo a sobreposição narrativa.

---

### M3: Cultura, Ambiente e Energia
- **Tipo de Bloco:** MarketExample
- **Título:** Atrito Cultural e Divergência de Preço em Confrontos Diretos
- **Propósito:** Ilustrar como a pressão cultural comprime a eficiência tática e cria janelas de ineficiência de mercado.
- **Elementos de Conteúdo Exatos:**
  - `[GOLD]` Índice de Rivalidade (histórico 10 jogos, variação xG, contexto competitivo)
  - `[ORANGE]` Pressão institucional e custo da derrota (despromoção, qualificação)
  - `[GOLD]` Ajuste tático documentado (bloco baixo, transições curtas, aumento de faltas)
  - `[ORANGE]` Preço de mercado (Over/Under, Handicap) vs. Realidade estrutural
  - `[GOLD]` Sinal de divergência: mercado precifica fluxo ofensivo; contexto indica contenção
- **Onde deve aparecer:** Exemplo aplicado da M3, antes da matriz de atrito.
- **Por que melhora a compreensão:** Conecta variáveis socioculturais a movimentos de preço reais, demonstrando que a narrativa de mercado frequentemente ignora o custo psicológico da derrota.

---

### M4: Padrões Táticos e Métricas de Desempenho
- **Tipo de Bloco:** FormulaBlock
- **Título:** Filtro de Padrão Tático e Calibração por Ruído Amostral
- **Propósito:** Formalizar a conversão de repetições estruturais em probabilidade ajustada.
- **Elementos de Conteúdo Exatos:**
  - `P(cal) = f(xG_base, xGOT_ajustado, perfil_adversário) ± σ(ruído)`
  - `[ORANGE]` σ(ruído) = desvio padrão histórico ponderado por contexto (casa/fora, calendário)
  - `[GOLD]` Limiar de estabilidade: n ≥ 10 jogos com dados consistentes
  - `[ORANGE]` Regressão à média aplicada quando conversão real diverge >15% do xG
  - `[GOLD]` Saída: Probabilidade calibrada com intervalo de confiança explícito
- **Onde deve aparecer:** Mecanismo da M4, após a coleta de dados táticos.
- **Por que melhora a compreensão:** Remove a ilusão de previsibilidade de amostras pequenas e impõe um tratamento matemático rigoroso à identificação de padrões.

---

### M5: Comportamento de Mercado e Formação de Preço
- **Tipo de Bloco:** BlackboardPanel
- **Título:** Fluxo de Capital e Formação de Odds
- **Propósito:** Visualizar a mecânica de precificação, liquidez e ajuste de mercado.
- **Elementos de Conteúdo Exatos:**
  - `[GOLD]` Odd de abertura → `[ORANGE]` Fluxo de capital público (consenso) → `[GOLD]` Ajuste de liquidez (bookmakers) → `[ORANGE]` Odd de fecho (preço eficiente)
  - `[GOLD]` Remoção de overround: P(implícita) = 1 / (odd * (1 + margem))
  - `[ORANGE]` Janela de ineficiência: período entre abertura e estabilização de liquidez
- **Onde deve aparecer:** Introdução da M5, antes da análise de divergências.
- **Por que melhora a compreensão:** Desmistifica as odds como "previsões" e as posiciona como reflexos de fluxo de capital e gestão de risco das casas, essencial para identificar desvios reais.

---

### M6: Calibração de Probabilidade e Modelação
- **Tipo de Bloco:** FailureModeCard
- **Título:** Falhas na Calibração Probabilística e Superconfiança
- **Propósito:** Documentar os erros sistemáticos na conversão de contexto em probabilidade.
- **Elementos de Conteúdo Exatos:**
  - `[ORANGE]` Ajuste subjetivo > base estatística (destrói reprodutibilidade)
  - `[ORANGE]` Ignorar regressão à média em séries curtas
  - `[GOLD]` Falha na validação cruzada (dados históricos vs. cenário atual)
  - `[ORANGE]` Intervalo de confiança omitido ou artificialmente estreito
  - `[GOLD]` Correção: Calibração contínua com backtesting e limites de ajuste máximos (ex.: ±15%)
- **Onde deve aparecer:** Final da M6, após a explicação de sensibilidade e validação.
- **Por que melhora a compreensão:** Expõe os pontos de ruptura do modelo, forçando a transparência metodológica e a gestão explícita da incerteza.

---

### M7: Viés, Observador e Validação de Pesquisa
- **Tipo de Bloco:** DecisionChecklist
- **Título:** Blindagem Cognitiva e Auditoria do Observador
- **Propósito:** Neutralizar viés de confirmação e viés de recência no processo de análise.
- **Elementos de Conteúdo Exatos:**
  - `[ORANGE]` Registrar hipótese antes da coleta de dados
  - `[GOLD]` Definir critérios de invalidação objetivos (não baseados em resultado)
  - `[ORANGE]` Revisar fontes por viés de disponibilidade (notícias recentes vs. dados estruturais)
  - `[GOLD]` Aplicar contraprova: buscar evidência que refute a tese
  - `[ORANGE]` Documentar viés de observação no relatório final
- **Onde deve aparecer:** Seção de metodologia da M7, antes da auditoria de processos.
- **Por que melhora a compreensão:** Transforma a autoconsciência analítica em protocolo executável, reduzindo a contaminação da análise por narrativas externas.

---

### M8: Integração do Framework e Gestão de Risco
- **Tipo de Bloco:** MarketExample
- **Título:** Matriz de Risco e Alocação de Capital
- **Propósito:** Demonstrar a integração de probabilidade calibrada com limites operacionais.
- **Elementos de Conteúdo Exatos:**
  - `[GOLD]` Probabilidade calibrada vs. Preço de mercado
  - `[ORANGE]` Valor esperado (EV) calculado
  - `[GOLD]` Tamanho da posição (Kelly fracionário ou fixo)
  - `[ORANGE]` Limite de drawdown por ciclo
  - `[GOLD]` Revisão pós-evento: atualização de pesos e recalibração do modelo
- **Onde deve aparecer:** Integração da M8, após a explicação de gestão de risco.
- **Por que melhora a compreensão:** Conecta a análise teórica à execução prática, mostrando que a vantagem estatística sem gestão de risco é insustentável.

---

### M9: Laboratório de Aplicação e Documentação
- **Tipo de Bloco:** BlackboardPanel
- **Título:** Stress Testing e Documentação do Dossier Final
- **Propósito:** Estruturar a validação de cenários extremos e a transparência do processo.
- **Elementos de Conteúdo Exatos:**
  - `[ORANGE]` Cenário base (probabilidade calibrada)
  - `[GOLD]` Cenário adverso (lesão chave, mudança tática, condições extremas)
  - `[ORANGE]` Cenário de estresse (colapso de liquidez, erro de arbitragem, VAR)
  - `[GOLD]` Matriz de impacto: variação de P(cal) e ajuste de exposição
  - `[ORANGE]` Dossier final: hipótese, dados, calibração, resultado, erro, lição
- **Onde deve aparecer:** Laboratório da M9, antes do capstone.
- **Por que melhora a compreensão:** Prepara o analista para a estocasticidade inerente ao futebol, substituindo a busca por certeza por documentação rigorosa e aprendizado iterativo.