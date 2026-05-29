# Passo 6: Energia, ritmo e momento competitivo

**Core idea**
A energia e o ritmo de uma equipa são variáveis temporais que deformam a probabilidade implícita de eventos ao longo da partida. A calibração de preço exige mapear ciclos de intensidade, fadiga acumulada e pontos de tensão, não narrativas motivacionais.

**Mental model**
*Elasticidade de Ritmo* (Rhythm Elasticity). Equipas não operam em estado constante. Elas expandem e contraem a sua capacidade de pressão, recuperação e tomada de decisão conforme o tempo, o contexto e os estímulos externos. O mercado tende a precificar a média histórica; a análise contextual deve precificar a variação temporal e a resposta a gatilhos.

**What it is**
Energia, neste framework, é a capacidade operacional de sustentar ações de alta intensidade (sprints, pressão pós-perda, transições rápidas) e recuperar entre elas. Ritmo é a cadência com que a equipa executa essas ações e impõe a sua estrutura ao adversário. Momento competitivo refere-se aos pontos de inflexão onde a tensão psicológica e física se acumula ou se dissipa (golos, expulsões, paragens longas, substituições, intervenções de VAR). Não são conceitos subjetivos; são estados observáveis através de métricas de carga, padrões de passe sob pressão e indicadores de coesão defensiva.

**Why it matters**
O mercado trata equipas como entidades estáticas ao longo dos 90 minutos. Na prática, a probabilidade de um evento muda conforme a energia se degrada ou se concentra. Ignorar a dinâmica de fadiga e tensão leva a erros sistemáticos de calibração. Quando uma equipa atinge o seu limite fisiológico ou psicológico, a variância aumenta. O preço, por inércia e por dependência de dados agregados, demora a refletir essa mudança. Identificar essa janela permite ajustar a probabilidade real em relação à implícita, reduzindo a exposição a risco não calibrado.

**Mechanism**
A operacionalização segue quatro etapas sequenciais:
1. *Segmentação temporal:* Dividir a partida em blocos (0–15, 15–30, 30–45, 45–60, 60–75, 75–90+). Cada bloco tem um perfil energético esperado, condicionado por calendário, viagens e profundidade de elenco.
2. *Indicadores de carga:* Monitorar sprints >25 km/h, distância percorrida em alta intensidade, número de ações defensivas consecutivas e tempo de posse sob pressão. Quedas abruptas (>15% em relação à média da equipa) sinalizam fadiga estrutural.
3. *Gatilhos de tensão:* Mapear eventos que alteram o estado psicológico e tático. Cada gatilho introduz ruído e força a equipa a reorganizar energia. A resposta a esses gatilhos (coesão vs. fragmentação) é o dado relevante.
4. *Ajuste probabilístico:* Quando os indicadores de fadiga coincidem com gatilhos de tensão, a probabilidade de erros decisivos ou perda de estrutura aumenta. O modelo deve aplicar um fator de correção temporal e recalibrar a leitura de preço. A incerteza deve ser explicitada através de intervalos de confiança, nunca de pontos fixos.

**Applied football or market example**
Considere uma equipa com posse estruturada mas baixa capacidade de recuperação defensiva. O mercado precifica-a como favorita com base em resultados históricos e xG acumulado. Aos 55 minutos, os dados mostram queda de 18% em sprints e aumento de 22% em passes mal sucedidos na zona de construção. O adversário, com perfil de transição rápida, mantém intensidade. Um golo ou erro defensivo torna-se estatisticamente mais provável, mas o preço de mercado ajusta-se com atraso de 5 a 10 minutos. A janela de ineficiência não está na previsão do resultado final, mas na calibração da probabilidade de eventos específicos (ex: golo nos últimos 30 minutos, perda de estrutura defensiva). A análise contextual antecipa a deformação do preço; não a adivinha.

**Blackboard breakdown**
- Eixo X: Minutos de jogo (0–90+)
- Eixo Y: Índice de Intensidade Relativa (sprints/pressão vs. média da época)
- Linha de Base: Capacidade esperada de sustentação de ritmo
- Zonas de Tensão: Marcadas verticalmente (golos, substituições, VAR, paragens)
- Curva de Fadiga: Queda progressiva ou colapso súbito após gatilho
- Curva de Resiliência: Capacidade de recuperação pós-tensão
- Tradução para Preço: Quando a curva de fadiga cruza a zona de tensão, aplicar fator de correção à probabilidade implícita. Documentar o intervalo de confiança (ex: 60–75% vs. 45–55%).

**Failure mode**
Tratar energia como narrativa motivacional ou atribuir causalidade a eventos isolados. O erro mais comum é confundir um momento de tensão com uma mudança estrutural permanente. Equipas com boa coesão e profundidade de elenco recuperam rapidamente. Ignorar a capacidade de adaptação do treinador ou a estocasticidade natural do futebol leva a superajustes no modelo. A calibração deve ser conservadora: ajustar probabilidades dentro de intervalos, nunca como certezas.

**Checklist**
- [ ] Segmentar a partida em blocos temporais e definir perfil energético esperado
- [ ] Coletar indicadores de carga (sprints, pressão, erros sob stress) por bloco
- [ ] Identificar gatilhos de tensão e mapear resposta da equipa
- [ ] Comparar dados de intensidade com média histórica e contexto imediato
- [ ] Aplicar fator de correção probabilístico apenas quando fadiga e tensão convergem
- [ ] Documentar intervalo de confiança e incerteza residual
- [ ] Validar pós-jogo: a curva de energia correspondeu aos eventos decisivos?

**Practice exercise**
Selecione três partidas recentes com dados de tracking ou métricas públicas de intensidade. Para cada uma, construa um gráfico temporal de Índice de Intensidade Relativa. Marque os gatilhos de tensão. Identifique os blocos onde a fadiga coincide com aumento de erros ou perda de estrutura. Calcule a probabilidade implícita de mercado para eventos nos últimos 30 minutos e compare com a sua calibração ajustada. Documente o desvio, a incerteza assumida e o resultado real. Repita até que o erro médio de calibração se estabilize.

**Key takeaway**
Energia e ritmo não são intuição; são ciclos mensuráveis que deformam probabilidades ao longo do tempo. O preço reage com atraso à degradação de intensidade e aos pontos de tensão. A calibração exige mapear fadiga, coesão e estímulos como variáveis temporais, ajustar probabilidades dentro de intervalos e aceitar a incerteza como parte do processo.