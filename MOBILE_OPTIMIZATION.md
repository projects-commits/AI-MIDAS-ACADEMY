# Mobile Optimization Guide — AI MIDAS ACADEMY

> **Objetivo:** garantir uma experiência mobile fluida, sem scroll horizontal, com tamanhos adaptados e sem destruir o layout desktop.  
> **Regra de ouro:** todas as alterações são feitas **exclusivamente dentro de media queries mobile** (`max-width`). Nada no desktop é alterado.

---

## 1. Princípios gerais

- **Sem scroll horizontal** (`overflow-x: hidden` aplicado a `html` e `body`).
- **Grids de 2/3/4 colunas** passam para **1 coluna** em mobile.
- **Padding e gaps reduzidos** em ecrãs pequenos para não desperdiçar espaço útil.
- **Touch targets mínimos de 44 px** para todos os botões, links e inputs.
- **Texto adaptado** com `clamp()` ou media queries para não forçar zoom.
- **Imagens e cards** nunca excedem a largura da viewport.
- **Navegação simplificada** em mobile: links do topo passam a pilha vertical se necessário.
- **Não adicionar novos cards** em mobile; apenas adaptar os existentes.

---

## 2. Breakpoints adotados

| Breakpoint | Uso |
|------------|-----|
| `1100px` | Grids de 2 colunas (hero, layout, etc.) |
| `900px`  | Grids passam a 1 coluna; sidebars deixam de ser sticky |
| `820px`  | Ajustes específicos da homepage (hero, proof, areas) |
| `760px`  | Ajustes de catálogo (search, filtros) |
| `720px`  | Ajustes de curso e lição (info-grid, navigation) |
| `680px`  | Navegação e botões em largura total |
| `560px`  | Padding reduzido nos cards do catálogo |

---

## 3. Por página

### 3.1 Homepage (`/`)

- **Promo banner**: pilha vertical em mobile; botão de fechar absoluto no canto superior direito.
- **Hero**: título reduzido via `clamp()`; ações em largura total abaixo de `680px`.
- **Marquee**: cards reduzidos de `340px` para `260px`; margem superior reduzida.
- **Proof grid**: 4 colunas → 2 colunas (`1100px`) → 1 coluna (`820px`).
- **Areas grid**: 3 colunas → 2 colunas (`1100px`) → 1 coluna (`820px`).
- **Final CTA**: padding reduzido; botão em largura total abaixo de `680px`.

### 3.2 Catálogo de cursos (`/courses/`)

- **Search**: label e input empilham em mobile (`760px`); input usa `width: 100%`.
- **Layout**: sidebar + main passam a 1 coluna em `1040px`; sidebar deixa de ser sticky.
- **Filtros**: checklist mantém-se usável com touch targets amplos.
- **Cards do catálogo**: stats passam de 3 colunas para 1 coluna em `720px`.
- **Padding**: reduzido para `1rem` nos cards abaixo de `560px`.

### 3.3 Página de curso (`/courses/[slug]/`)

- **Hero**: título e metadados adaptam-se; ações em largura total.
- **Info grid**: 2 colunas → 1 coluna em `720px`.
- **Resumo expandido**: padding reduzido.
- **Currículo**: módulos e lições em pilha vertical; headers empilham em `720px`.
- **Sidebar**: deixa de ser sticky em `1100px`; aparece acima do conteúdo se relevante.

### 3.4 Página de lição (`/courses/[slug]/lessons/[lesson]/`)

- **Contexto**: header empilha em `720px`; metadados em largura total.
- **Lesson main**: padding reduzido; header interno empilha.
- **Code lens**: `overflow-x: auto` mantido, mas linhas reduzem `min-width` em mobile.
- **Mermaid diagrams**: `min-width` adaptado; fallback em pilha vertical.
- **Navegação**: 2 colunas → 1 coluna em `720px`; links com touch target mínimo de `44px`.
- **Sidebar / Right rail**: deixa de ser sticky em `1100px`; conteúdo aparece no fluxo normal.

---

## 4. Tokens e utilitários mobile

- `.academy-container` e `.academy-container--wide`: mantêm `width: min(var(--container), calc(100% - 1.5rem))`. Em mobile, a margem lateral pode ser reduzida para `0.75rem` se necessário (dentro de media query).
- **Paddings globais**: `.page-shell` reduz `padding-bottom` de `4rem` para `2.5rem` em mobile.
- **Gaps de grid**: reduzidos de `1rem` para `0.75rem` ou `0.55rem` em mobile.

---

## 5. Checklist de verificação

- [ ] Nenhum elemento excede `100vw`.
- [ ] `html, body { overflow-x: hidden; }` está ativo.
- [ ] Grids de 2/3/4 colunas ficam em 1 coluna abaixo de `900px`.
- [ ] Botões e links têm altura mínima de `44px`.
- [ ] Texto não força zoom automático em iOS (`font-size` base ≥ `16px` em inputs).
- [ ] Imagens têm `max-width: 100%`.
- [ ] Não há elementos com `white-space: nowrap` que forcem scroll.
- [ ] O desktop permanece exatamente como estava antes das alterações.

---

## 6. Como manter

Sempre que novos componentes ou páginas forem criados:

1. Adicionar media query mobile no final do CSS do componente.
2. Testar em viewport `375px`, `390px`, `414px` e `768px`.
3. Verificar no DevTools do Chrome/Firefox por `overflow` ou elementos fora da viewport.
4. Nunca adicionar `min-width` fixo a elementos sem `max-width: 100%` ou media query de escape.

---

*Documento criado para garantir consistência mobile-first sem comprometer o desktop.*
