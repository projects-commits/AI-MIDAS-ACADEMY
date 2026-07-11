import os, re

LESSON_DIR = "src/content/courseLessons/vibe-coding-ferramentas-research-futebol"

# Direct string replacements for headings (exact matches, case-insensitive via regex)
HEADING_REPLACEMENTS = [
    (re.compile(r"^#{1,2}\s*\d*\.?\s*Core idea\s*$", re.IGNORECASE | re.MULTILINE), "## Ideia central"),
    (re.compile(r"^#{1,2}\s*\d*\.?\s*Mental model\s*$", re.IGNORECASE | re.MULTILINE), "## Modelo mental"),
    (re.compile(r"^#{1,2}\s*\d*\.?\s*What it is\s*$", re.IGNORECASE | re.MULTILINE), "## O que e"),
    (re.compile(r"^#{1,2}\s*\d*\.?\s*Why it matters\s*$", re.IGNORECASE | re.MULTILINE), "## Por que importa"),
    (re.compile(r"^#{1,2}\s*\d*\.?\s*Mechanism\s*$", re.IGNORECASE | re.MULTILINE), "## Mecanismo"),
    (re.compile(r"^#{1,2}\s*\d*\.?\s*Applied football or market example\s*$", re.IGNORECASE | re.MULTILINE), "## Exemplo aplicado de futebol e mercado"),
    (re.compile(r"^#{1,2}\s*\d*\.?\s*Blackboard breakdown\s*$", re.IGNORECASE | re.MULTILINE), "## Quadro de raciocinio"),
    (re.compile(r"^#{1,2}\s*\d*\.?\s*Failure mode\s*$", re.IGNORECASE | re.MULTILINE), "## Modo de falha"),
    (re.compile(r"^#{1,2}\s*\d*\.?\s*Checklist\s*$", re.IGNORECASE | re.MULTILINE), "## Checklist"),
    (re.compile(r"^#{1,2}\s*\d*\.?\s*Practice exercise\s*$", re.IGNORECASE | re.MULTILINE), "## Exercicio pratico"),
    (re.compile(r"^#{1,2}\s*\d*\.?\s*Key takeaway\s*$", re.IGNORECASE | re.MULTILINE), "## Sintese operacional"),
]

# Direct string replacements for English formulas/phrases in JSX props and body
PHRASE_REPLACEMENTS = [
    ("Safe execution = sandbox + secret isolation + dependency check", "Execucao segura = sandbox + isolamento de segredos + verificacao de dependencias"),
    ("Security posture", "Postura de seguranca"),
    ("Usable data = verified source x documented schema x clean types", "Dados usaveis = fonte verificada x schema documentado x tipos limpos"),
    ("Commit atomicity", "Atomicidade do commit"),
    ("Traceability = commits x branches x remote sync", "Rastreabilidade = commits x branches x sync remoto"),
    ("Reproducible setup = venv + pinned deps + linter", "Setup reprodutivel = venv + deps fixadas + linter"),
    ("Environment isolation", "Isolamento de ambiente"),
    ("Data quality", "Qualidade de dados"),
    ("Prompt reliability", "Confiabilidade do prompt"),
    ("Deterministic output = role + constraints + output schema + validation", "Saida deterministica = papel + restricoes + schema de saida + validacao"),
    ("Agent control", "Controle de agente"),
    ("Controllable flow = graph + checkpoints + state logs", "Fluxo controlavel = grafo + checkpoints + logs de estado"),
    ("Market data quality", "Qualidade dos dados de mercado"),
    ("Clean signal = pagination + error handling + overround removal", "Sinal limpo = paginacao + tratamento de erros + remocao de overround"),
    ("Poisson probability", "Probabilidade de Poisson"),
    ("Elo expected score", "Pontuacao esperada do Elo"),
    ("Backtest discipline", "Disciplina de backtest"),
    ("Valid edge = temporal split + calibration metric + cost adjustment", "Edge valido = separacao temporal + metrica de calibracao + ajuste de custo"),
    ("Pipeline health", "Saude do pipeline"),
    ("Sustainable system = modules + tests + scheduling + drift logs", "Sistema sustentavel = modulos + testes + agendamento + logs de drift"),
]

def safe_replace(text):
    # 1. Fix headings
    for pattern, replacement in HEADING_REPLACEMENTS:
        text = pattern.sub(replacement, text)
    
    # 2. Fix phrases (exact string replacement, case-sensitive to be safe)
    for old, new in PHRASE_REPLACEMENTS:
        text = text.replace(old, new)
    
    # 3. Apply visual formatting safely:
    #    Replace "**Termo:** " at line start with colored strong HTML (outside JSX)
    #    Only in markdown body, not inside JSX props
    def colorize_body(body):
        lines = body.split("\n")
        out = []
        inside_jsx = False
        for line in lines:
            stripped = line.strip()
            if stripped.startswith("<") and not stripped.startswith("</"):
                inside_jsx = True
            if stripped.startswith("</"):
                inside_jsx = False
            if inside_jsx or stripped.startswith("import "):
                out.append(line)
                continue
            # Colorize definitions: "**Word:** rest" → <strong style="color:#ffd700">Word:</strong> rest
            # Only if the line starts with optional whitespace + **
            line = re.sub(
                r'^(\s*)\*\*([^*]+?:)\s*\*\*',
                r'\1<strong style="color:#ffd700">\2</strong>',
                line
            )
            out.append(line)
        return "\n".join(out)
    
    # Split to preserve frontmatter
    m = re.match(r'^(---\n.*?\n---\n)(.*)$', text, re.DOTALL)
    if m:
        return m.group(1) + colorize_body(m.group(2))
    return colorize_body(text)

def process_file(path):
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    original = text
    text = safe_replace(text)
    if text != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Updated: {os.path.basename(path)}")
    else:
        print(f"No changes: {os.path.basename(path)}")

for fname in sorted(os.listdir(LESSON_DIR)):
    if fname.endswith(".mdx"):
        process_file(os.path.join(LESSON_DIR, fname))

print("Done.")
