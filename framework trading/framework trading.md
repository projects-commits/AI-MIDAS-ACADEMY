## [**https://chatgpt.com/share/6a25419b-7c94-83eb-9655-4cc1ce9152de**](https://chatgpt.com/share/6a25419b-7c94-83eb-9655-4cc1ce9152de)  **1\. Objetivo do Framework**

Criar um sistema diário para encontrar **3 a 5 jogos no máximo** no mercado **1X2 / Moneyline**, com entrada planeada em **pre-live** e decisão final/fecho em **live**.

O objetivo não é acertar todos os jogos. O objetivo é encontrar situações onde:

* existe movimento real de mercado;  
* existe liquidez suficiente para entrar e sair;  
* a odd/preço ainda não perdeu todo o valor;  
* a análise estatística e qualitativa confirma o cenário;  
* o risco é médio-baixo;  
* existe plano claro de stop loss e take profit;  
* o trade procura **10% a 20% de retorno sobre o valor arriscado**, não 10% a 20% da banca.

---

# **2\. Universo Elegível**

Isto vem antes dos filtros. Não é ainda seleção, é apenas definir o campo de jogo.

Um jogo só pode entrar no processo se cumprir estas regras:

1. **Jogo começa nas próximas 24h a 48h.**  
2. Apenas futebol.  
3. Apenas mercado **1X2 / Moneyline**:  
   * Casa vence;  
   * Empate;  
   * Fora vence.  
4. O mercado tem de estar disponível na Polymarket.  
5. Tem de existir preço negociável, volume e liquidez.  
6. Não analisar mercados derivados nesta versão:  
   * Over/Under;  
   * BTTS;  
   * Handicap;  
   * Correct Score;  
   * Team goals.

A versão inicial do sistema deve ser estreita. Poucos mercados, poucas entradas, máxima disciplina.

---

# **3\. Funil Geral**

## **Etapa 1 — Lista Bruta**

Começas com todos os jogos nas próximas 24h a 48h.

Exemplo:

* 40 jogos disponíveis;  
* 25 têm mercado 1X2;  
* 15 têm algum volume;  
* 8 passam nos filtros de mercado;  
* 3 a 5 vão para análise final;  
* 1 a 3 podem virar trade.

A tua base de design já defende esta lógica: scan inicial → shortlist → análise de valor → gestão de exposição → execução → revisão.

---

# **4\. Os 2 Filtros de Seleção**

Importante: só existem **2 filtros oficiais**. Tudo o resto é análise posterior.

---

## **Filtro 1 — Filtro de Atividade e Direção de Mercado**

Objetivo: encontrar jogos onde o mercado já está a mostrar interesse real.

### **Dados usados da Polymarket**

Para cada outcome do 1X2:

* preço atual;  
* preço há 24h;  
* preço há 12h;  
* preço há 6h;  
* variação percentual;  
* direção do preço;  
* volume total;  
* volume recente;  
* liquidez disponível;  
* spread bid/ask.

### **Critérios mínimos sugeridos**

Um jogo passa o Filtro 1 se pelo menos **um outcome do 1X2** cumprir:

| Critério | Regra |
| ----- | ----- |
| Variação mínima de preço | ≥ 5% nas últimas 24h |
| Direção clara | subida ou descida consistente |
| Volume mínimo total | ≥ $5.000 |
| Volume recente | ≥ $1.000 nas últimas 24h |
| Liquidez mínima | ≥ $1.000 disponível no outcome |
| Spread máximo | idealmente ≤ 4% |

### **Como interpretar a direção**

**Preço a subir:**  
 O mercado está a comprar mais esse outcome. Exemplo: Casa vence passa de 0.42 para 0.49.

**Preço a descer:**  
 O mercado está a rejeitar esse outcome. Exemplo: Fora vence passa de 0.36 para 0.29.

### **Regra prática**

Se há variação, mas não há volume nem liquidez, descartar.

Se há volume, mas o preço está morto, descartar.

Se há movimento, volume e liquidez, o jogo passa para o Filtro 2\.

---

## **Filtro 2 — Filtro de Variação Saudável**

Objetivo: evitar dois erros:

1. entrar em movimentos fracos demais;  
2. entrar tarde demais em movimentos já esticados.

Este filtro olha apenas para a **amplitude da variação**.

### **Regras para subida de preço**

| Tipo de movimento | Interpretação | Decisão |
| ----- | ----- | ----- |
| 0% a 4,9% | movimento fraco | rejeitar |
| 5% a 14,9% | movimento saudável | aprovar |
| 15% a 24,9% | movimento forte | aprovar com cautela |
| ≥ 25% | movimento possivelmente esticado | só aprovar se análise for muito forte |

### **Regras para descida de preço**

| Tipo de movimento | Interpretação | Decisão |
| ----- | ----- | ----- |
| 0% a \-4,9% | movimento fraco | rejeitar |
| \-5% a \-14,9% | rejeição saudável | aprovar para análise |
| \-15% a \-24,9% | rejeição forte | aprovar com cautela |
| ≤ \-25% | possível overreaction | só aprovar se houver tese contrária clara |

### **Regra final do Filtro 2**

O jogo só passa se a variação estiver entre:

**mínimo absoluto:** 5%  
 **máximo ideal:** 25%

Acima de 25%, o mercado pode já ter consumido grande parte do valor.

---

# **5\. Resultado dos Filtros**

Depois dos 2 filtros, a saída deve ser:

* mínimo: 0 jogos;  
* ideal: 3 a 5 jogos;  
* máximo absoluto: 5 jogos.

Se passarem mais de 5 jogos, ordenar por:

1. maior liquidez;  
2. menor spread;  
3. movimento mais limpo;  
4. melhor volume recente;  
5. melhor contexto estatístico/notícias.

---

# **6\. Conversão Preço Polymarket → Odd**

Na Polymarket, o preço representa aproximadamente a probabilidade implícita.

Exemplo:

* preço 0.50 \= 50%;  
* odd decimal aproximada \= 1 / 0.50 \= 2.00.

Fórmula:

**Odd decimal \= 1 / preço**

Exemplos:

| Preço | Probabilidade implícita | Odd aproximada |
| ----- | ----- | ----- |
| 0.40 | 40% | 2.50 |
| 0.50 | 50% | 2.00 |
| 0.60 | 60% | 1.67 |
| 0.70 | 70% | 1.43 |

Regra prática: se a odd aproximada for demasiado baixa e o retorno não justificar o risco, o jogo pode ser descartado na fase de análise, mesmo que passe os filtros.

---

# **7\. Estratégia Pre-Live \+ Fecho Live**

## **Ideia central**

A análise e a entrada são preparadas em **pre-live**.  
 A gestão e o fecho são feitos em **live**.

### **Entrada pre-live**

Entrar apenas quando:

* passou nos 2 filtros;  
* análise estatística confirma;  
* notícias não contradizem;  
* existe liquidez;  
* preço ainda tem margem para 10% a 20% de valorização;  
* existe plano de saída.

### **Gestão live**

Durante o jogo, o objetivo não é “ver o jogo como adepto”. É validar ou invalidar a tese.

A pergunta live é:

**O jogo está a confirmar o cenário que justificou a entrada?**

---

# **8\. Stop Loss**

O stop loss deve ser definido antes da entrada.

## **Stop por preço**

Usar stop quando o preço vai contra a posição.

### **Regra base**

Se o preço cair **8% a 12% contra a entrada**, sair.

Exemplo:

* entrada no Sim Casa vence a 0.50;  
* stop de 10%;  
* stop price \= 0.45.

Se o preço cair para 0.45, sair.

## **Stop por tese**

Sair mesmo antes do stop se a tese for quebrada.

### **Exemplos**

| Acontecimento | Ação |
| ----- | ----- |
| A equipa apoiada sofre golo cedo e perde controlo emocional | reduzir ou sair |
| Vermelho contra a tua equipa | sair quase sempre |
| Lesão de jogador-chave | sair ou reduzir |
| A equipa não cria perigo nos primeiros 15-25 minutos | reduzir exposição |
| O mercado move forte contra sem explicação clara | sair parcial |
| A análise pré-live fica contradita pelo jogo | sair |

A lógica do documento do bot é útil aqui: losers devem ser cortados, tese quebrada deve levar a saída e as regras não devem ser “mentais”.

---

# **9\. Take Profit**

O take profit também deve estar definido antes da entrada.

## **Objetivo base**

Procurar **10% a 20% por trade** sobre o preço de entrada.

### **Regra simples**

| Lucro no trade | Ação |
| ----- | ----- |
| \+8% | considerar proteger |
| \+10% | realizar parcial |
| \+15% | realizar 50% a 70% |
| \+20% | fechar quase tudo ou tudo |
| Golo a favor | realizar lucro rápido se o preço disparar |
| Domínio forte, mas sem golo | manter com stop ajustado |
| Preço sobe sem confirmação no jogo | realizar parcial |

### **Exemplo**

Entrada:

* Casa vence a 0.50.

Take profit:

* \+10% \= 0.55;  
* \+20% \= 0.60.

Se o preço chega a 0.56 antes ou durante o jogo, podes fechar parcial.

---

# **10\. Análise dos Jogos**

Depois dos filtros, cada jogo é analisado por duas vias:

1. estatísticas avançadas;  
2. notícias/contexto com IA.

---

## **10.1 Análise por Estatísticas Avançadas**

As estatísticas que forneceste devem ser agrupadas por função, não vistas todas soltas.

### **Grupo A — Força ofensiva**

Usar:

* xG;  
* Open Play xG;  
* npxG;  
* Goals;  
* Shots;  
* Passes into Box;  
* xT;  
* Corners;  
* Field Tilt.

Pergunta principal:

**A equipa tem capacidade real de criar perigo ou só vive de resultado?**

---

### **Grupo B — Fragilidade defensiva**

Usar:

* xGA;  
* Open Play xGA;  
* npxGA;  
* Goals Conceded;  
* Shots Faced;  
* xT Against;  
* Passes in Opposition Half contra;  
* High Recoveries Against.

Pergunta principal:

**A equipa concede chances reais ou apenas sofre pressão estéril?**

---

### **Grupo C — Controlo de jogo**

Usar:

* Possession;  
* Field Tilt;  
* Game Control;  
* Game Control Share;  
* Avg Pass Height;  
* Passes in Opposition Half;  
* On-Ball Pressure;  
* Off-Ball Pressure.

Pergunta principal:

**Quem tende a controlar território, ritmo e iniciativa?**

---

### **Grupo D — Pressão e recuperação**

Usar:

* PPDA;  
* High Recoveries;  
* High Recoveries Against;  
* On-Ball Pressure;  
* Off-Ball Pressure.

Pergunta principal:

**Existe pressão suficiente para gerar erros, transições e domínio territorial?**

---

### **Grupo E — Diferença entre resultado e performance**

Usar:

* xGD;  
* npxGD;  
* GD;  
* GD-xGD.

Pergunta principal:

**A equipa está sobrevalorizada ou subvalorizada pelo mercado?**

Exemplo:

* GD positivo, mas xGD negativo \= equipa pode estar sobrevalorizada.  
* GD negativo, mas xGD positivo \= equipa pode estar subvalorizada.  
* GD-xGD muito alto \= possível regressão negativa.  
* GD-xGD muito baixo \= possível melhoria futura.

---

# **11\. Exemplo Manual de Análise Estatística**

Usando o exemplo que deste:

Fluminense:

* xG: 1.10;  
* xGA: 1.83;  
* xGD: \-0.73;  
* posse: 38.8%;  
* field tilt: 23.15;  
* xT: 0.46;  
* xT Against: 1.24;  
* shots: 10;  
* shots faced: 19;  
* PPDA: 14.14;  
* high recoveries: 3;  
* high recoveries against: 8;  
* game control: 36.37.

Leitura:

O Fluminense criou pouco, concedeu muito, teve pouca posse territorial, sofreu mais ameaça do que criou e teve baixo controlo de jogo. Mesmo que o resultado tenha sido 1-1, a performance aponta para vulnerabilidade.

Aplicação ao 1X2:

* evitar comprar Fluminense se o preço estiver a subir sem justificação;  
* considerar adversário ou lay indireto se o mercado estiver a rejeitar Fluminense;  
* se o próximo adversário tiver boa pressão e bom xG, o risco contra Fluminense aumenta.

---

# **12\. Exemplo de Prompt IA para Estatísticas Avançadas**

Usa este prompt quando tiveres a tabela estatística de uma ou das duas equipas.

Analisa este jogo para mercado 1X2 / Moneyline.

Quero uma análise objetiva com base nas estatísticas avançadas abaixo.

Foca-te em:  
1\. força ofensiva;  
2\. fragilidade defensiva;  
3\. controlo territorial;  
4\. pressão/recuperações;  
5\. diferença entre resultado e performance real;  
6\. quem está sobrevalorizado ou subvalorizado pelo mercado;  
7\. qual seleção 1X2 tem mais valor;  
8\. principais riscos da previsão.

No final dá:  
\- seleção preferida;  
\- confiança de 0 a 10;  
\- risco baixo/médio/alto;  
\- se é entrada, monitorizar ou no bet.

Dados:  
\[colar estatísticas aqui\]  
---

# **13\. Análise de Notícias com IA**

Aqui o objetivo não é fazer uma análise longa. É encontrar fatores que confirmam ou quebram a tese.

## **Prompt curto para notícias**

Analisa as notícias recentes deste jogo: \[Equipa A vs Equipa B\].

Foca apenas em:  
1\. lesões e suspensões importantes;  
2\. motivação das equipas;  
3\. calendário e fadiga;  
4\. rotação provável;  
5\. contexto da liga/tabela;  
6\. outras notícias relevantes que possam afetar o 1X2.

No final responde:  
\- notícia mais importante;  
\- impacto em Casa/Empate/Fora;  
\- risco escondido;  
\- conclusão: entrada, esperar live ou no bet.  
---

# **14\. Estrutura de Cada Previsão**

Cada previsão deve ter sempre a mesma ficha.

Jogo:  
Liga:  
Data/hora:  
Mercado: 1X2 / Moneyline  
Seleção:  
Preço Polymarket:  
Odd aproximada:  
Direção do preço:  
Variação 24h:  
Volume:  
Liquidez:  
Porque o jogo foi escolhido:  
Confiança / \+EV:  
Risco:  
Stake:  
Razão principal da previsão:  
Stop loss:  
Take profit:  
Plano live:  
Status:

Esta estrutura segue a lógica do teu documento de design, que transforma cada aposta numa posição de portfólio com odd, probabilidade, EV, confiança, risco, stake, razão principal e status.

---

# **15\. Sistema de Decisão da Aposta**

O quarto sistema é sempre **No Bet**.

Stake sempre em percentagem da banca, nunca em unidades.

## **Aposta A — Stake Alta**

Usar apenas quando tudo está alinhado.

Critérios:

* passou nos 2 filtros;  
* movimento de preço saudável;  
* volume e liquidez fortes;  
* análise estatística confirma;  
* notícias confirmam;  
* risco live controlável;  
* tese clara;  
* preço ainda tem margem de 10% a 20%;  
* baixa correlação com outras posições.

Stake:

**1.5% a 2.0% da banca**

---

## **Aposta B — Stake Média**

Usar quando existe valor, mas com algum risco.

Critérios:

* passou nos 2 filtros;  
* mercado mostra sinal claro;  
* estatísticas são positivas, mas não perfeitas;  
* notícias neutras ou levemente favoráveis;  
* risco médio-baixo;  
* existe bom plano live.

Stake:

**0.75% a 1.25% da banca**

---

## **Aposta C — Stake Baixa**

Usar para cenários interessantes, mas incompletos.

Critérios:

* passou nos filtros;  
* movimento existe, mas não é perfeito;  
* estatísticas divididas;  
* notícia ainda não é totalmente clara;  
* trade depende muito do início live;  
* maior incerteza.

Stake:

**0.25% a 0.50% da banca**

---

## **Sistema 4 — No Bet**

Aplicar quando:

* não há edge claro;  
* odd/preço já moveu demais;  
* liquidez é fraca;  
* spread é alto;  
* notícias contradizem;  
* estatísticas não confirmam;  
* jogo é caótico;  
* já tens exposição parecida;  
* estás a tentar forçar aposta;  
* o plano live não é claro.

A lógica “patience \> activity” do documento do trading bot encaixa bem aqui: há dias em que zero trades é a melhor decisão.

---

# **16\. Perfil de Risco**

## **Perfil definido**

**Risco médio-baixo.**

Isso significa:

* poucas apostas;  
* stakes pequenas;  
* só entrar com liquidez;  
* evitar mercados sem saída;  
* preferir trades com plano live;  
* não perseguir perda;  
* não aumentar stake por convicção emocional;  
* fechar se a tese quebrar.

## **Objetivo por trade**

* alvo normal: **\+10%**;  
* alvo bom: **\+15%**;  
* alvo excelente: **\+20%**.

## **Risco por trade**

* stop normal: **\-8% a \-12% no preço**;  
* stop máximo: **\-15% no preço**;  
* perda máxima por stake: limitada pela percentagem apostada.

---

# **17\. Limites Práticos**

## **Capital inicial**

Definir uma banca base fixa.

Exemplo recomendado:

**Banca inicial: 1.000€**

Pode ser outro valor, mas o sistema deve trabalhar sempre em percentagens.

---

## **Capital em risco**

Capital diário em risco:

**máximo 4% a 6% da banca por dia**

Num perfil médio-baixo, eu usaria:

**5% da banca como limite diário padrão.**

---

## **Limites operacionais**

| Limite | Regra |
| ----- | ----- |
| Máximo por previsão/aposta | 2% da banca |
| Máximo por jogo | 2.5% da banca |
| Máximo por liga | 4% da banca por dia |
| Máximo por mercado | 5% da banca por dia |
| Máximo diário | 5% da banca |
| Máximo de jogos por dia | 3 a 5 analisados finais |
| Máximo de trades executados | 1 a 3 |
| Máximo drawdown diário | \-3% da banca |
| Máximo drawdown semanal | \-7% da banca |
| Máximo drawdown total | \-15% da banca |

O teu documento de design já propõe limites por aposta, jogo, liga, mercado e dia, além de reduzir stake quando há correlação elevada.

---

# **18\. Regras de Correlação**

Mesmo sendo só 1X2, ainda existe correlação.

Exemplos:

* apostar em 3 favoritos da mesma liga no mesmo dia;  
* apostar contra 3 equipas cansadas após competições europeias;  
* apostar sempre no movimento de subida da odd pública;  
* apostar em jogos da mesma narrativa.

Regra:

Se duas apostas dependem da mesma ideia, reduzir stake.

Exemplo:

* Trade 1: Benfica vence;  
* Trade 2: Sporting vence;  
* Trade 3: Porto vence.

Mesmo sendo jogos diferentes, pode haver correlação de “favoritos portugueses em odds baixas”. Reduzir exposição.

---

# **19\. Workflow Diário do Analista**

## **Rotina diária**

### **Fase 1 — Scan inicial**

Objetivo: criar lista bruta.

Fazer:

* listar jogos das próximas 24h a 48h;  
* verificar se têm mercado 1X2 na Polymarket;  
* recolher preço atual;  
* recolher preço 24h/12h/6h;  
* recolher volume;  
* recolher liquidez;  
* calcular variação.

Output:

**Lista Bruta de Jogos**

---

### **Fase 2 — Aplicar os 2 filtros**

Aplicar:

1. Filtro de atividade e direção de mercado;  
2. Filtro de variação saudável.

Output:

**Shortlist de 3 a 5 jogos**

---

### **Fase 3 — Análise profunda**

Para cada jogo da shortlist:

* análise estatística avançada;  
* análise de notícias;  
* avaliação de liquidez;  
* avaliação da odd/preço;  
* cálculo de risco;  
* plano live;  
* stop;  
* take profit.

Output:

**Ficha de Previsão**

---

### **Fase 4 — Decisão**

Classificar:

* Aposta A;  
* Aposta B;  
* Aposta C;  
* No Bet.

Output:

**Trade aprovado, monitorizado ou rejeitado**

---

# **20\. Antes do Jogo**

Fazer 30 a 90 minutos antes do início:

1. confirmar escalações se disponíveis;  
2. verificar lesões/suspensões novas;  
3. confirmar se o preço ainda tem valor;  
4. verificar se a liquidez continua suficiente;  
5. confirmar se o spread não abriu;  
6. confirmar stake;  
7. definir stop e take profit;  
8. escrever o plano live.

Regra:

**Não entrar se não houver plano de saída.**

---

# **21\. Durante o Dia**

Durante o dia, antes dos jogos começarem:

* monitorizar variações fortes;  
* verificar se algum jogo saiu dos limites;  
* atualizar notícias;  
* evitar entradas impulsivas;  
* não adicionar jogos fora dos filtros;  
* não subir stake porque “parece certo”.

Se um jogo que estava aprovado move demasiado antes da entrada, pode passar para **No Bet**.

---

# **22\. Durante o Jogo**

A gestão live deve ter regras simples.

## **Primeiros 10-15 minutos**

Perguntas:

* a equipa escolhida entrou bem?  
* controla território?  
* cria perigo?  
* confirma a tese?  
* o mercado está a reagir a favor?  
* há sinais de risco?

Ação:

* se confirma: manter;  
* se confirma muito forte: procurar take profit parcial;  
* se contradiz: reduzir ou sair.

## **Após golo**

Se o golo é a favor:

* preço sobe forte;  
* realizar parcial;  
* proteger lucro;  
* não transformar trade vencedor em aposta emocional.

Se o golo é contra:

* avaliar se a tese morreu;  
* se morreu, sair;  
* se foi acaso, reduzir em vez de sair total;  
* nunca dobrar posição sem regra definida.

## **Após vermelho**

Regra geral:

* vermelho contra a tua seleção \= sair ou reduzir forte;  
* vermelho a favor \= realizar parcial se o preço disparar;  
* vermelho que aumenta caos \= evitar ganância.

---

# **23\. Depois do Jogo**

Registar sempre:

* resultado;  
* entrada;  
* saída;  
* lucro/prejuízo;  
* se bateu stop;  
* se bateu take profit;  
* se o live confirmou a tese;  
* se a decisão foi boa ou má;  
* se o resultado foi sorte ou processo.

O teu documento sugere exatamente esta lógica de revisão: resultado, banca, erros, diferença entre má decisão e mau resultado, CLV e performance por mercado/risco/confiança.

---

# **24\. Input, Processo e Output**

## **Input**

Tudo o que entra no sistema:

* jogos das próximas 24h a 48h;  
* mercado 1X2;  
* preços Polymarket;  
* variação de preço;  
* direção do preço;  
* volume;  
* liquidez;  
* spread;  
* estatísticas avançadas;  
* notícias;  
* lesões;  
* calendário;  
* fadiga;  
* motivação;  
* contexto da liga;  
* banca atual.

---

## **Processo**

O que o sistema faz:

1. filtra jogos;  
2. mede movimento de mercado;  
3. valida liquidez;  
4. evita movimentos esticados;  
5. analisa estatísticas;  
6. analisa notícias;  
7. estima valor;  
8. classifica confiança;  
9. classifica risco;  
10. define stake;  
11. define stop;  
12. define take profit;  
13. executa pre-live;  
14. gere live;  
15. regista resultado.

---

## **Output**

O que sai do sistema:

* jogos rejeitados;  
* jogos em monitorização;  
* previsões aprovadas;  
* stake definida;  
* plano de trade;  
* stop loss;  
* take profit;  
* decisão live;  
* resultado final;  
* aprendizagem para a próxima sessão.

---

# **25\. Template Final de Previsão**

Jogo:  
Liga:  
Data/Hora:  
Mercado: 1X2 / Moneyline  
Seleção:

Preço atual Polymarket:  
Odd aproximada:  
Preço 24h:  
Variação 24h:  
Direção:  
Volume total:  
Volume 24h:  
Liquidez:  
Spread:

Porque passou no Filtro 1:  
Porque passou no Filtro 2:

Análise estatística:  
Análise notícias:  
Confiança:  
Risco:  
Classificação: A / B / C / No Bet  
Stake: \_\_% da banca

Razão principal:  
Risco principal:

Entrada pre-live:  
Stop loss:  
Take profit:  
Plano live:

Status:  
Resultado:  
P/L:  
Notas de revisão:  
---

# **26\. Regra Mestre**

A pergunta final nunca deve ser:

**“Este jogo vai bater?”**

A pergunta certa é:

**“Este trade tem movimento, liquidez, valor, risco controlado e plano de saída?”**

Se a resposta não for clara, é **No Bet**.

