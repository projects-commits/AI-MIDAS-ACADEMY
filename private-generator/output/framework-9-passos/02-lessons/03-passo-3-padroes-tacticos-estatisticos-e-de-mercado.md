# Passo 3: Padrões Táticos, Estatísticos e de Mercado

### Core idea
Padrões não são narrativas; são sinais probabilísticos que exigem calibração contextual e confronto direto com a precificação de mercado.

### Mental model
*Pattern → Context → Probability → Price → Risk Decision*. O modelo opera como um filtro de ruído: isola repetições estruturais, ajusta por amostra e variáveis externas, converte em probabilidade calibrada e compara com a odd implícita. A decisão só ocorre quando o desvio entre probabilidade real e preço documentado supera o limiar de risco pré-definido.

### What it is
A identificação sistemática de repetições no comportamento coletivo (estrutura tática, zonas de construção, frequência de transições, eficiência defensiva), individual (atributos físicos-técnicos, eficiência em ações-chave, consistência sob pressão) e de mercado (movimentação de odds, liquidez, consenso vs. divergência). Inclui a integração de métricas avançadas (xG open play, xG set pieces, xGOT, xG por período, xPoints) e a análise de desempenho histórico contra perfis de adversário semelhantes, utilizando fontes estruturadas para rastrear comportamento e precificação.

### Why it matters
Estatísticas brutas sem contexto geram ilusão de previsibilidade. O mercado precifica o consenso público e a informação disponível. Reconhecer padrões reais — e não coincidências amostrais — permite calibrar probabilidades, identificar desvios de preço e estruturar decisões com limites de risco documentados. A incerteza permanece inerente ao futebol; o objetivo é reduzi-la a parâmetros mensuráveis e testáveis, evitando a confusão entre correlação e causalidade.

### Mechanism
1. **Coleta estruturada:** Mapear formações, zonas de construção, frequência de transições, eficiência defensiva e padrões de posse. Registrar distribuição de golos por período e comportamento em bolas paradas.
2. **Filtragem contextual:** Cruzar dados com perfil do adversário (ex: pressão alta vs. bloco baixo), condições ambientais, calendário e variáveis institucionais. Isolar jogos com amostra mínima de 10–15 para estabilização métrica.
3. **Integração avançada:** Aplicar xG, xGOT, xGC e xPoints. Separar open play de set pieces. Ajustar por ruído amostral e regressão à média esperada.
4. **Leitura de mercado:** Extrair odds de fecho, calcular probabilidade implícita, remover overround, identificar divergência entre preço e probabilidade calibrada.
5. **Validação e decisão:** Se a diferença entre probabilidade calibrada e implícita superar o limiar de risco definido, documentar a hipótese. Caso contrário, classificar como ruído ou mercado eficiente.

### Applied football or market example
Uma equipa em 4-3-3 constrói pelas laterais e depende de cruzamentos tardios. Contra adversários com linha defensiva alta e pressão média-alta, gera 1.75 xG/90, mas converte apenas 0.85 golos reais nos últimos 14 jogos. O mercado precifica a vitória a 1.90 (probabilidade implícita ~52.6%). A análise calibrada, ajustando por subconversão recente, histórico contra perfis similares e xGOT real, indica probabilidade de ~45%. A odd reflete expectativa de regressão positiva não fundamentada em dados estruturais. O padrão tático existe, mas a precificação já incorpora a ineficiência ofensiva e o consenso de mercado. Decisão analítica: evitar exposição ou posicionar-se no lado oposto, conforme a matriz de risco e a tolerância a drawdown.

### Blackboard breakdown
```
[Dado Bruto] → [Contexto Tático] → [Métrica Ajustada] → [Probabilidade Calibrada]
      ↓               ↓                   ↓                     ↓
Formação/Zonas   Perfil Adversário    xG/xGOT/xPoints      P(cal) = f(dados, contexto, ruído)
      ↓               ↓                   ↓                     ↓
[Preço de Mercado] → [Overround Removal] → [P(implícita)] → [Δ = P(cal) - P(impl)]
      ↓
Se |Δ| > limiar_risco → Documentar hipótese | Se |Δ| ≤ limiar → Mercado eficiente / ruído
```

### Failure mode
Apofenia tática (identificar padrões onde há variação estocástica), viés de recência (supervalorizar 2–3 jogos recentes), ignorar a eficiência do mercado (assumir que toda divergência de preço representa valor), e amostras insuficientes (xG em <8 jogos é instável e sujeito a ruído extremo). A falha mais recorrente é tratar correlação como causalidade sem isolar variáveis de controle: lesões em peças estruturais, rotação de elenco, motivação institucional e impacto do calendário. Sem critérios de invalidação explícitos, o padrão torna-se dogma, não hipótese.

### Checklist
- [ ] Mínimo de 10 jogos com dados consistentes para o padrão analisado
- [ ] xG/xGOT ajustados por qualidade do adversário, contexto (casa/fora) e calendário
- [ ] Probabilidade implícita calculada com remoção explícita de overround
- [ ] Comparação documentada entre P(calibrada) e P(implícita)
- [ ] Critérios de invalidação definidos (ex: mudança de treinador, lesão em peça-chave, alteração tática)
- [ ] Limiar de risco e tolerância a erro estabelecidos antes da análise

### Practice exercise
Selecione uma equipa de uma liga com dados públicos acessíveis (xG, odds de fecho, histórico recente). Identifique um padrão tático recorrente (ex: vulnerabilidade a transições rápidas ou dependência de bolas paradas). Calcule o xG gerado ou sofrido nos últimos 12 jogos, ajuste por perfil de adversário e converta em probabilidade calibrada. Compare com a probabilidade implícita das odds de fecho para o mercado correspondente. Documente Δ, justifique a diferença com base em variáveis contextuais e defina se o padrão justifica uma posição, é ruído amostral ou indica mercado eficiente. Registre o processo em formato de dossier.

### Key takeaway
Padrões só possuem valor analítico quando calibrados por contexto, confrontados com a precificação de mercado e submetidos a critérios objetivos de invalidação. Sem essa estrutura, permanecem observações não testadas.