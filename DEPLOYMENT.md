# DEPLOYMENT

## Deployment posture

V1 deploya como site estático com overhead operacional mínimo. Não precisas de VPS para ter o site no ar se usares GitHub Pages.

---

## Primary assumptions

- No login in V1
- No required server-side sessions
- No required dynamic backend for core public pages
- Hosting target should work on GitHub Pages or a simple VPS serving static files

---

## Build assumptions

- The final app produces static output (`output: "static"` no Astro)
- Content routes are compatible with static generation
- Asset handling remains simple and cache-friendly
- Public pages avoid hidden runtime dependencies that break static hosting

---

## GitHub Pages — passo a passo para colocar no ar

### 1. Cria o repositório no GitHub
- Vai a github.com e cria um repo público (ex: `ai-midas-academy`).
- Não inicializes com README se já tens o projeto local; vais fazer push do existente.

### 2. Liga o teu projeto local ao GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TEU_USERNAME/ai-midas-academy.git
git push -u origin main
```

### 3. Ativa o GitHub Pages no repo
- No GitHub, vai a **Settings > Pages**.
- Em **Build and deployment > Source**, escolhe **GitHub Actions**.

### 4. Faz push do workflow de deploy
Já existe `.github/workflows/deploy.yml` no projeto. Basta fazer push:
```bash
git add .
git commit -m "Add GitHub Pages deploy workflow"
git push
```
O workflow faz:
1. Checkout do código do site
2. Checkout dos repositórios externos de curso configurados
3. Merge do conteúdo MDX para `src/content/`
4. Instala dependências (`npm ci`)
5. Build do Astro (`npm run build`)
6. Deploy da pasta `dist/` para o GitHub Pages

### 5. Acede ao site
- Depois do workflow completar (podes ver em **Actions**), o site fica disponível em:
  `https://TEU_USERNAME.github.io/ai-midas-academy/`
- Se o repo se chamar exatamente `TEU_USERNAME.github.io`, o site fica em `https://TEU_USERNAME.github.io/`.

---

## Domínio próprio (em vez de github.io)

### 1. Edita o ficheiro `public/CNAME`
- Substitui o conteúdo pelo teu domínio, por exemplo:
  ```
  aimidasacademy.com
  ```
- Faz commit e push.

### 2. Configura o DNS no teu registar de domínio
Adiciona estes records DNS (A records apontam para os IPs do GitHub Pages):

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | TEU_USERNAME.github.io |

> Se usares subdomínio (ex: `academy.aimidasacademy.com`), basta um CNAME para `TEU_USERNAME.github.io`.

### 3. Ativa no GitHub
- Vai a **Settings > Pages > Custom domain** e coloca o teu domínio.
- O GitHub verifica o DNS e gera SSL (HTTPS) automaticamente via Let's Encrypt.
- Pode levar alguns minutos até ficar ativo.

---

## Adicionar novos cursos — sem tocar no servidor

Os cursos são ficheiros MDX em `src/content/courses/` e `src/content/courseLessons/`.

Para publicar um novo curso:
1. **Cria os ficheiros de conteúdo** nos paths corretos.
2. **Faz commit e push** para a branch `main`.
3. **O GitHub Actions compila e publica automaticamente.**

Não precisas de aceder ao VPS (se houver um), nem de fazer deploy manual.
O processo é idêntico a trabalhar num projeto de código: escreves conteúdo, fazes push, o site atualiza sozinho.

---

## VPS — precisas mesmo?

**Para V1, não.** GitHub Pages é suficiente e gratuito para sites estáticos.

Um VPS só faz sentido se:
- Quiseres controlo total do servidor (headers, cache, etc.)
- Precisares de backend dinâmico no futuro (API, base de dados, etc.)
- Quiseres redundância (mirror do site em segundo servidor)

Se algum dia quiseres um VPS para servir o site estático:
1. Faz build local: `npm run build`
2. Copia a pasta `dist/` para o VPS (nginx, Apache, Caddy)
3. Configura o teu domínio para apontar para o IP do VPS

Mas enquanto for V1 static-first, GitHub Pages é o caminho mais simples e rápido.

---

## Operational rules

- Store secrets outside public code
- Never expose keys in frontend output
- Keep deployment documentation updated when the build process changes
- Prefer low-complexity release steps

---

## Estratégia de dois repositórios — Site numa conta, Curso noutra conta

É possível (e recomendado para organização) ter:
- **Repo A** (Conta 1): O motor do site (Astro, layouts, componentes, workflows)
- **Repo B** (Conta 2): Apenas o conteúdo do curso (ficheiros MDX)

### Vantagens
- Podes versionar o curso independentemente do site.
- Podes dar acesso ao curso a colaboradores sem lhes abrir o código do site.
- O site puxa automaticamente o conteúdo mais recente do curso durante o build.

### Passos para configurar

#### 1. Criar o repo do curso (Conta 2)
Cria um repo vazio no GitHub (ex: `curso-ai-midas-framework`).

Extrai apenas o conteúdo do curso do projeto atual:
```bash
mkdir curso-ai-midas-framework
cd curso-ai-midas-framework

git init

# Copia apenas o conteúdo do curso
cp -r ../ai_midas_academy/src/content/courses .
cp -r ../ai_midas_academy/src/content/courseLessons .

git add .
git commit -m "Initial course content"
git branch -M main
git remote add origin https://github.com/TEU_USER_CONTA2/curso-ai-midas-framework.git
git push -u origin main
```

> O repo do curso pode ter a estrutura:
> ```
> courses/
> courseLessons/
> ```
> ou
> ```
> src/content/courses/
> src/content/courseLessons/
> ```
> O workflow aceita ambas.

#### 2. Configurar o workflow do site (Conta 1)
O workflow `.github/workflows/deploy.yml` pode fazer checkout de múltiplos repos de curso. Exemplo com dois cursos separados:

```yaml
- name: Checkout framework course
  uses: actions/checkout@v4
  with:
    repository: TEU_USER_CONTA2/curso-ai-midas-framework
    # token: ${{ secrets.COURSE_PAT }}  # só se o repo for privado
    path: courses-framework

- name: Checkout vibe coding course
  uses: actions/checkout@v4
  with:
    repository: TEU_USER_CONTA2/Curso-Vibe-Coding
    # token: ${{ secrets.COURSE_PAT }}  # só se o repo for privado
    path: courses-vibe
```

Faz commit e push desta alteração.

#### 3. Se o repo do curso for privado
- Gera um **Personal Access Token (classic)** no GitHub da Conta 2 com permissão `repo` (read).
- No repo do site (Conta 1), vai a **Settings > Secrets and variables > Actions**.
- Cria um secret chamado `COURSE_PAT` e cola o token.
- Descomenta a linha `token: ${{ secrets.COURSE_PAT }}` no workflow.

#### 4. Desenvolvimento local
Para sincronizar o curso localmente antes de fazer `npm run build`:
```bash
# Por defeito aponta para o repo de exemplo; define a tua URL:
COURSE_REPO_URL=https://github.com/TEU_USER_CONTA2/curso-ai-midas-framework.git node scripts/sync-courses.mjs
```

Depois podes remover o conteúdo do curso do repo do site se quiseres manter o site "limpo", ou podes deixar cópias — o workflow sobrescreve com a versão do repo do curso.

---

## Future evolution

If the project later requires dynamic features, add them deliberately and only after evaluating whether they conflict with the static-first academy model.
