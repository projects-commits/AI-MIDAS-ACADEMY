# 1. Árvore de Diretórios Proposta

```text
src/content/courses/
└── analise-holistica-precificacao-futebol/
    ├── index.mdx
    └── lessons/
        ├── m1-1-definicao-variaveis-contextuais.mdx
        ├── m1-2-estrutura-pesquisa-reprodutivel.mdx
        ├── m1-3-mapeamento-fontes-primarias-secundarias.mdx
        ├── m1-4-documentacao-hipoteses-criterios-invalidacao.mdx
        ├── m2-1-pressao-cognitiva-decisao-fadiga.mdx
        ├── m2-2-filosofia-tecnica-adaptacao-gestao-emocional.mdx
        ├── m2-3-coesao-comunicacao-resiliencia-grupo.mdx
        ├── m2-4-torcida-publico-influencia-ruido-mercado.mdx
        ├── m3-1-identidade-clube-padroes-jogo.mdx
        ├── m3-2-fatores-ambientais-gramado-clima-infraestrutura.mdx
        ├── m3-3-leitura-energia-ritmo-transicoes-momento.mdx
        ├── m3-4-eventos-externos-pressao-institucional.mdx
        ├── m4-1-estruturas-zonas-ataque-transicoes-defensivas.mdx
        ├── m4-2-xg-xgot-xpoints-limitacoes-metricas.mdx
        ├── m4-3-padroes-individuais-atributos-fisico-tecnicos.mdx
        ├── m4-4-adaptacao-tatica-adversario-leitura-matchups.mdx
        ├── m5-1-estrutura-odds-liquidez-movimentacao-preco.mdx
        ├── m5-2-padroes-mercado-ineficiencias-identificaveis.mdx
        ├── m5-3-fluxo-capital-sinais-consenso-divergencia.mdx
        ├── m5-4-mercados-descentralizados-fontes-alternativas-preco.mdx
        ├── m6-1-conversao-contexto-probabilidade-implicita.mdx
        ├── m6-2-calibracao-modelos-ajuste-ruido-amostral.mdx
        ├── m6-3-validacao-cruzada-dados-historicos-cenarios-atuais.mdx
        ├── m6-4-sensibilidade-intervalos-confianca-projecoes.mdx
        ├── m7-1-observador-variavel-perspectiva-vies.mdx
        ├── m7-2-regras-tecnologia-impacto-estocasticidade.mdx
        ├── m7-3-protocolos-blindagem-cognitiva-analise.mdx
        ├── m7-4-auditoria-processos-decisorios.mdx
        ├── m8-1-integracao-framework-holistico.mdx
        ├── m8-2-matrizes-risco-alocacao-capital.mdx
        ├── m8-3-gestao-drawdown-limites-operacionais.mdx
        ├── m8-4-revisao-pos-evento-atualizacao-modelos.mdx
        ├── m9-1-construcao-dossier-pesquisa.mdx
        ├── m9-2-simulacao-cenarios-stress-testing.mdx
        ├── m9-3-apresentacao-resultados-transparencia-metodologica.mdx
        └── m9-4-capstone-analise-completa-partida-real.mdx
```

# 2. Frontmatter do Curso (`index.mdx`)

```yaml
---
title: "Análise Holística e Precificação Contextual no Futebol"
slug: "analise-holistica-precificacao-futebol"
subtitle: "Estruturas de pesquisa, calibração de probabilidade e gestão de risco aplicadas ao contexto desportivo"
primaryCategory: "Research & Analysis"
secondaryCategories: ["Probability & Pricing", "Behavioral Context", "Market Dynamics"]
level: "Intermediário a Avançado"
targetPersonas: [
  "Analistas desportivos",
  "Investigadores de mercado",
  "Gestores de risco quantitativo",
  "Estudantes de ciência de dados aplicada ao desporto",
  "Profissionais de scouting com foco em modelação contextual"
]
corePromise: "Construir um framework de pesquisa reprodutível que converte variáveis psicológicas, culturais, táticas e de mercado em probabilidades calibradas, leitura de preço e decisões de risco documentadas."
whyExists: "A análise futebolística tradicional opera em silos: separa estatísticas brutas de fatores contextuais, confunde narrativa com causalidade e trata o mercado como dado estático. Este curso unifica dimensões qualitativas e quantitativas num protocolo de investigação focado em calibração probabilística, identificação de ineficiências de preço e gestão rigorosa de risco."
enemy: [
  "Fragmentação analítica",
  "Viés de confirmação",
  "Dependência de heurísticas superficiais",
  "Confusão entre correlação e causalidade",
  "Ilusão de controlo em ambientes estocásticos"
]
audience: "Profissionais e estudantes que operam na interseção entre análise desportiva, modelação probabilística e avaliação de risco, com compromisso com transparência metodológica, documentação de processo e rejeição de atalhos narrativos."
prerequisites: [
  "Fundamentos de probabilidade e estatística descritiva",
  "Familiaridade com métricas de desempenho futebolístico (xG, transições, posse estruturada)",
  "Capacidade de organização de dados em folhas de cálculo ou ambientes básicos de análise (Python/R opcional)",
  "Leitura crítica de fontes jornalísticas, relatórios técnicos e dados de mercado"
]
stats: {
  "tracks": 4,
  "modules": 9,
  "lessons": 36,
  "labs": 12,
  "exercises": 18,
  "targetWordCount": 25000
}
tracks: [
  "Contexto e Psicologia Desportiva",
  "Padrões Táticos e Comportamentais",
  "Mercado, Preço e Probabilidade",
  "Metodologia de Pesquisa e Gestão de Risco"
]
modules: [
  "M1: Fundamentos da Análise Contextual",
  "M2: Psicologia e Dinâmicas de Grupo",
  "M3: Cultura, Ambiente e Energia",
  "M4: Padrões Táticos e Métricas de Desempenho",
  "M5: Comportamento de Mercado e Formação de Preço",
  "M6: Calibração de Probabilidade e Modelação",
  "M7: Viés, Observador e Validação de Pesquisa",
  "M8: Integração do Framework e Gestão de Risco",
  "M9: Laboratório de Aplicação e Documentação"
]
glossary: [
  "Probabilidade Implícita", "Valor Esperado", "xG / xGOT / xPoints",
  "Viés de Confirmação", "Ruído Amostral", "Calibração", "Margem da Casa",
  "Liquidez", "Regressão à Média", "Estocasticidade", "Matriz de Risco",
  "Drawdown", "Contexto Tático", "Pressão Cognitiva", "Ineficiência de Preço",
  "Validação Cruzada", "Transparência Metodológica", "Stress Testing"
]
draft: false
version: "1.0.0"
---
```

# 3. Estrutura de Frontmatter por Lição (Padrão)

Cada ficheiro em `lessons/` deve seguir este esquema. Campos são estritamente tipados para compatibilidade JSON.

```yaml
---
title: "[Título da Lição]"
slug: "[slug-da-licao]"
module: "M[X]"
track: "[Nome da Track]"
lessonNumber: "[X.Y]"
type: "lesson" | "lab" | "exercise"
visualBlocks: ["ComponentName"]
prerequisites: ["string"]
estimatedWords: 600
status: "draft" | "review" | "published"
---
```

Exemplo aplicado (M1.1):
```yaml
---
title: "Definição de Variáveis Contextuais vs. Estatísticas Brutas"
slug: "m1-1-definicao-variaveis-contextuais"
module: "M1"
track: "Contexto e Psicologia Desportiva"
lessonNumber: "1.1"
type: "lesson"
visualBlocks: ["BlackboardPanel"]
prerequisites: ["Fundamentos de probabilidade e estatística descritiva"]
estimatedWords: 650
status: "draft"
---
```

# 4. Estrutura do Corpo MDX (Template Operacional)

O corpo de cada lição segue uma arquitetura fixa para garantir reprodutibilidade e isolamento de variáveis. Não contém prosa final, apenas a estrutura de injeção de conteúdo e componentes.

```mdx
import { BlackboardPanel, DecisionChecklist, MarketExample, FormulaBlock, FailureModeCard } from "@/components/mdx/visual-blocks";
import { LabBlock, ExerciseBlock, GlossaryTerm } from "@/components/mdx/learning";

## Contexto Operacional
[Definição do escopo da lição. Isolamento da variável principal. Enquadramento probabilístico.]

## Mecanismo de Conversão
[Explicação do processo de transformação de dados brutos/contexto em sinal calibrado. Inclusão de fórmulas ou matrizes quando aplicável.]

<FormulaBlock
  title="..."
  formula="..."
  parameters={[...]}
/>

## Exemplo Aplicado
[Cenário real ou simulado. Demonstração de leitura de preço, ajuste de probabilidade e identificação de ruído.]

<MarketExample
  title="..."
  dataPoints={[...]}
  marketSignal="..."
  contextualAdjustment="..."
/>

## Modo de Falha Documentado
[Identificação de pontos de ruptura do modelo. Limites de aplicação. Regressão à média e estocasticidade.]

<FailureModeCard
  title="..."
  failureModes={[...]}
  mitigation="..."
/>

## Checklist de Validação
[Protocolo de verificação pré-aplicação. Critérios de invalidação. Limiar de confiança.]

<DecisionChecklist
  title="..."
  steps={[...]}
  confidenceInterval="..."
/>

## Laboratório / Exercício
[Instruções operacionais para aplicação prática. Estrutura de dados esperada. Métricas de erro.]

<LabBlock
  id="L[X]"
  objective="..."
  dataset="..."
  deliverable="..."
/>

<ExerciseBlock
  id="E[X]"
  prompt="..."
  validationCriteria="..."
/>

## Referências e Glossário
<GlossaryTerm term="..." definition="..." />
```

# 5. Importações de Componentes Exigidas

Os componentes devem estar registados no sistema de conteúdo e expostos via caminho absoluto ou alias configurado.

```javascript
// @/components/mdx/visual-blocks/index.ts
export { default as BlackboardPanel } from './BlackboardPanel.astro';
export { default as DecisionChecklist } from './DecisionChecklist.astro';
export { default as MarketExample } from './MarketExample.astro';
export { default as FormulaBlock } from './FormulaBlock.astro';
export { default as FailureModeCard } from './FailureModeCard.astro';

// @/components/mdx/learning/index.ts
export { default as LabBlock } from './LabBlock.astro';
export { default as ExerciseBlock } from './ExerciseBlock.astro';
export { default as GlossaryTerm } from './GlossaryTerm.astro';
```

Regras de integração:
- Cada componente aceita `props` estritamente tipadas (arrays de strings, números, intervalos).
- Nenhum componente deve executar lógica de fetch ou depender de estado global.
- A renderização é estática. O conteúdo é injetado via frontmatter e corpo MDX.

# 6. Checklist de Validação Pré-Build

Executar antes de `npm run validate` e `npm run build`.

| Etapa | Critério de Validação | Método de Verificação |
|-------|----------------------|----------------------|
| **Estrutura de Ficheiros** | Todos os 36 ficheiros de lição existem em `src/content/courses/analise-holistica-precificacao-futebol/lessons/` | `find . -name "*.mdx" | wc -l` |
| **Frontmatter JSON-Compatível** | Sem valores `undefined`, `null` não declarados, ou chaves duplicadas. Arrays e objetos fechados corretamente. | Parser YAML→JSON + `jq .` |
| **Consistência de Slugs** | `slug` do curso corresponde ao diretório. `slug` das lições segue padrão `m[X]-[Y]-...` | Regex: `^m\d+-\d+-.+$` |
| **Mapeamento de Módulos** | Cada lição referencia `module` e `track` existentes no `index.mdx` | Cross-reference manual ou script de validação |
| **Importações MDX** | Todos os componentes usados no corpo estão declarados no topo do ficheiro. Caminhos absolutos válidos. | `grep -r "import {" src/content/` |
| **Blocos Visuais** | Cada bloco listado no frontmatter aparece no corpo com props obrigatórias preenchidas | Validação de props via schema do componente |
| **Contagem de Palavras** | Média ≥ 600 palavras por lição. Total ≥ 25.000 | `wc -w` por ficheiro + soma |
| **Links Internos** | Referências a outras lições ou módulos usam caminhos relativos ou slugs válidos | `markdown-link-check` ou script customizado |
| **Tipos de Conteúdo** | `type` é estritamente `"lesson"`, `"lab"` ou `"exercise"` | Validação de enum no frontmatter |
| **Build Ready** | Nenhum erro de sintaxe MDX, YAML ou importação | `npm run validate` → `npm run build` |

Este pacote está estruturado para integração direta. A arquitetura isola variáveis contextuais, impõe calibração probabilística e mantém a rastreabilidade de risco. A validação deve ser executada antes da publicação para garantir integridade do schema e estabilidade do pipeline de build.