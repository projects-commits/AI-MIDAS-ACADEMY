# Passo 9: Objeto do jogo, regras e tecnologia

**Core idea**
Regras oficiais e ferramentas tecnológicas não são apenas regulamentos estáticos; são variáveis estruturais que modificam a estocasticidade, o ritmo temporal e a calibração de probabilidades de um evento desportivo.

**Mental model**
O campo como sistema regulado. Regras e tecnologia operam como filtros de ruído e geradores de interrupções, alterando a distribuição temporal de ações, a curva de pressão psicológica e a tomada de decisão sob incerteza. O objeto de análise é a interação entre o regulamento, a infraestrutura tecnológica e a execução tática.

**What it is**
Definição do escopo regulatório e tecnológico que compõe o ambiente de competição: diretrizes da IFAB, protocolos de arbitragem assistida (VAR, GLT, semi-automated offside), implementos físicos (bola, dimensões de campo, superfície) e a forma como esses elementos são aplicados de forma heterogénea entre ligas e competições. É o mapeamento das variáveis institucionais que condicionam a execução do jogo e a formação de preço.

**Why it matters**
Ignorar a arquitetura regulatória e tecnológica introduz erros sistemáticos na calibração de probabilidade. Interrupções alteram momentum, reversões de decisão distorcem métricas de desempenho tradicionais e a aplicação desigual das regras cria assimetrias de risco. Mercados que não precificam o custo temporal e a volatilidade introduzida por revisões tecnológicas tendem a apresentar ineficiências de curto prazo. A análise holística exige tratar regras e tecnologia como inputs quantificáveis, não como pano de fundo neutro.

**Mechanism**
O impacto opera através de três canais principais:
1. **Fragmentação temporal:** Cada revisão tecnológica introduz um intervalo de paralisação que interrompe a curva de pressão, altera a frequência cardíaca e reseta a organização espacial das equipas.
2. **Reversão de estado:** Decisões anuladas ou confirmadas por vídeo modificam o placar implícito e a probabilidade condicional de cenários futuros (ex: pênalti anulado reduz drasticamente a probabilidade de golo nos minutos seguintes).
3. **Viés de aplicação:** A interpretação das regras varia por liga, árbitro e contexto competitivo. A precisão técnica (GLT) é determinística, mas a avaliação de infrações (VAR) mantém um componente subjetivo que gera dispersão nos resultados.
O mecanismo de calibração consiste em quantificar a taxa de interrupção, mapear o perfil de aplicação do árbitro e ajustar a probabilidade implícita com base na volatilidade esperada e no custo de oportunidade temporal.

**Applied football or market example**
Na Premier League, a aplicação do VAR segue protocolos de tolerância mínima para infrações na área, resultando em maior frequência de revisões e interrupções prolongadas. Em comparação, ligas com diretrizes de "clear and obvious" mais flexíveis registam menor tempo de paralisação e maior continuidade tática. No mercado, essa diferença reflete-se na precificação de mercados de ritmo (ex: over/under de cantos, cartões ou tempo de bola rolante). Quando um jogo com histórico de alta intervenção tecnológica é precificado com base em médias de ligas de baixo atrito, a probabilidade implícita de eventos dependentes de continuidade (pressões altas, transições rápidas) fica superestimada. O ajuste correto exige descontar a fração esperada de tempo perdido e recalibrar a distribuição de eventos com base no perfil de interrupção.

**Blackboard breakdown**
1. **Identificar o regulamento ativo:** Verificar diretrizes da IFAB, protocolos da liga e notas técnicas do árbitro central.
2. **Mapear o perfil tecnológico:** Taxa histórica de intervenções por jogo, tempo médio de revisão, frequência de reversões.
3. **Quantificar o custo temporal:** Estimar minutos de paralisação esperados e ajustar a janela de análise de métricas de ritmo.
4. **Avaliar a subjetividade residual:** Classificar a margem de interpretação do árbitro em infrações não determinísticas (fouls, handball, intensidade).
5. **Recalibrar probabilidade:** Aplicar um fator de desconto à continuidade tática e ajustar a distribuição de cenários com base na volatilidade introduzida.
6. **Documentar a incerteza:** Registrar intervalos de confiança e explicitar a dependência do modelo em variáveis regulatórias.

**Failure mode**
Tratar a tecnologia como perfeitamente objetiva e neutra. O VAR e o GLT eliminam erros factuais, mas não removem a interpretação humana nem o custo cognitivo da interrupção. Superestimar a precisão técnica sem considerar o impacto psicológico da paralisação, a perda de ritmo e a heterogeneidade de aplicação entre competições leva a modelos rígidos que falham em capturar a estocasticidade real. Outro erro comum é ignorar a adaptação tática pós-revisão: equipas que perdem um golo anulado frequentemente alteram o risco assumido, distorcendo projeções baseadas em dados históricos estáticos.

**Checklist**
- [ ] Regulamento da liga e notas técnicas do árbitro central consultados
- [ ] Taxa histórica de intervenções tecnológicas e tempo médio de revisão calculados
- [ ] Perfil de subjetividade do árbitro mapeado (infrações críticas vs. tolerância)
- [ ] Fator de desconto de continuidade tática aplicado ao modelo base
- [ ] Probabilidade implícita ajustada para volatilidade regulatória
- [ ] Incerteza documentada com intervalos de confiança explícitos
- [ ] Validação cruzada com dados de jogos sob mesmo protocolo tecnológico

**Practice exercise**
Selecione uma liga e um árbitro central com histórico documentado de intervenções tecnológicas. Construa uma matriz de impacto regulatório com três variáveis: (1) tempo médio de paralisação por revisão, (2) percentagem de decisões revertidas, (3) índice de tolerância a infrações de contato. Utilize esses dados para ajustar um modelo base de probabilidade de golo nos primeiros 30 minutos, aplicando um fator de desconto proporcional à interrupção esperada. Compare a projeção ajustada com a probabilidade implícita do mercado e documente a divergência, explicitando as fontes de incerteza e os limites da calibração.

**Key takeaway**
Regras e tecnologia são inputs estruturais de estocasticidade. A calibração rigorosa exige tratar interrupções, reversões e perfis de aplicação como variáveis de risco mensuráveis, não como ruído irrelevante. Precificar o jogo sem mapear o seu arcabouço regulatório é operar com um modelo incompleto.