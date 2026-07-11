import os, re

LESSON_DIR = "src/content/courseLessons/vibe-coding-ferramentas-research-futebol"

HEADING_MAP = {
    r"##?\s*\d*\.?\s*Core idea": "## Ideia central",
    r"##?\s*\d*\.?\s*Mental model": "## Modelo mental",
    r"##?\s*\d*\.?\s*What it is": "## O que e",
    r"##?\s*\d*\.?\s*Why it matters": "## Por que importa",
    r"##?\s*\d*\.?\s*Mechanism": "## Mecanismo",
    r"##?\s*\d*\.?\s*Applied football or market example": "## Exemplo aplicado de futebol e mercado",
    r"##?\s*\d*\.?\s*Blackboard breakdown": "## Quadro de raciocinio",
    r"##?\s*\d*\.?\s*Failure mode": "## Modo de falha",
    r"##?\s*\d*\.?\s*Checklist": "## Checklist",
    r"##?\s*\d*\.?\s*Practice exercise": "## Exercicio pratico",
    r"##?\s*\d*\.?\s*Key takeaway": "## Sintese operacional",
}

TRANSLATIONS = {
    # Formulas / blocks
    "Safe execution = sandbox + secret isolation + dependency check": "Execucao segura = sandbox + isolamento de segredos + verificacao de dependencias",
    "Security posture": "Postura de seguranca",
    "Usable data = verified source x documented schema x clean types": "Dados usaveis = fonte verificada x schema documentado x tipos limpos",
    "Commit atomicity": "Atomicidade do commit",
    "Traceability = commits x branches x remote sync": "Rastreabilidade = commits x branches x sync remoto",
    "Reproducible setup = venv + pinned deps + linter": "Setup reprodutivel = venv + deps fixadas + linter",
    "Environment isolation": "Isolamento de ambiente",
    "Data quality": "Qualidade de dados",
    "Prompt reliability": "Confiabilidade do prompt",
    "Deterministic output = role + constraints + output schema + validation": "Saida deterministica = papel + restricoes + schema de saida + validacao",
    "Agent control": "Controle de agente",
    "Controllable flow = graph + checkpoints + state logs": "Fluxo controlavel = grafo + checkpoints + logs de estado",
    "Market data quality": "Qualidade dos dados de mercado",
    "Clean signal = pagination + error handling + overround removal": "Sinal limpo = paginacao + tratamento de erros + remocao de overround",
    "Poisson probability": "Probabilidade de Poisson",
    "Elo expected score": "Pontuacao esperada do Elo",
    "Backtest discipline": "Disciplina de backtest",
    "Valid edge = temporal split + calibration metric + cost adjustment": "Edge valido = separacao temporal + metrica de calibracao + ajuste de custo",
    "Pipeline health": "Saude do pipeline",
    "Sustainable system = modules + tests + scheduling + drift logs": "Sistema sustentavel = modulos + testes + agendamento + logs de drift",
}

def translate_formulas(text):
    for en, pt in TRANSLATIONS.items():
        text = text.replace(en, pt)
    return text

def translate_headings(text):
    for pattern, replacement in HEADING_MAP.items():
        text = re.sub(pattern, replacement, text, flags=re.IGNORECASE)
    return text

def apply_visual_formatting(text):
    # Skip frontmatter and JSX blocks
    def process_body(body):
        lines = body.split("\n")
        out = []
        for line in lines:
            # Skip code blocks, JSX, imports
            if line.strip().startswith("<") or line.strip().startswith("import ") or line.strip().startswith("---"):
                out.append(line)
                continue
            # Skip lines that already have explicit color styling
            if 'style="color:#' in line:
                out.append(line)
                continue
            # Skip code inline
            if line.strip().startswith("```"):
                out.append(line)
                continue
            # Apply gold bold to definition patterns: **Termo:** at start of line
            line = re.sub(
                r'^(\s*\*\*)([^:]+:\s*)(.*)$',
                r'\1<span style="color:#ffd700">\2</span>\3',
                line
            )
            # Apply orange to common alert phrases (conservative)
            alert_phrases = [
                r"não prevê",
                r"não determina",
                r"não elimina",
                r"não substitui",
                r"não é uma previsão",
                r"não é destino",
                r"não é causa única",
                r"não é acessório",
                r"não é mecanismo",
                r"não converte em vantagem",
                r"não tem utilidade",
                r"não pode ser ignorado",
                r"erro estrutural",
                r"falha comum",
                r"falha quando",
                r"viés sistêmico",
                r"risco sistêmico",
                r"look-ahead bias",
                r"overfitting",
                r"ilusão estatística",
                r"caixa-preta",
                r"não auditável",
                r"dependência de",
                r"sem validação",
                r"sem backtesting",
                r"sem controle",
                r"sem isolamento",
                r"sem ajuste contextual",
                r"sem aprovação",
                r"sem checkpoint",
            ]
            for phrase in alert_phrases:
                line = re.sub(
                    f'({phrase})',
                    r'<span style="color:#ff4500">\1</span>',
                    line,
                    flags=re.IGNORECASE
                )
            out.append(line)
        return "\n".join(out)

    # Split to preserve frontmatter + JSX
    m = re.match(r'^(---\n.*?\n---\n)(.*)$', text, re.DOTALL)
    if m:
        front = m.group(1)
        body = m.group(2)
        return front + process_body(body)
    return process_body(text)

def fix_accents(text):
    # Safety-net replacements for common Portuguese words that may lack accents
    fixes = {
        "execucao": "execucao",
        "restricao": "restricao",
        "operacao": "operacao",
        "aprovacao": "aprovacao",
        "integracao": "integracao",
        "validacao": "validacao",
        "classificacao": "classificacao",
        "configuracao": "configuracao",
        "automacao": "automacao",
        "informacao": "informacao",
        "calibracao": "calibracao",
        "interacao": "interacao",
        "atencao": "atencao",
        "reducao": "reducao",
        "producao": "producao",
        "introducao": "introducao",
        "conducao": "conducao",
        "avaliacao": "avaliacao",
        "localizacao": "localizacao",
        "organizacao": "organizacao",
        "utilizacao": "utilizacao",
        "realizacao": "realizacao",
        "analis": "analis",
        "analise": "analise",
        "analises": "analises",
        "probabilis": "probabilis",
        "probabilidade": "probabilidade",
        "probabilidades": "probabilidades",
        "metrica": "metrica",
        "metricas": "metricas",
        "logica": "logica",
        "logicas": "logicas",
        "periodo": "periodo",
        "periodos": "periodos",
        "metodo": "metodo",
        "metodos": "metodos",
        "numero": "numero",
        "numeros": "numeros",
        "sequencia": "sequencia",
        "sequencias": "sequencias",
        "referencia": "referencia",
        "referencias": "referencias",
        "inferencia": "inferencia",
        "inferencias": "inferencias",
        "diferenca": "diferenca",
        "diferencas": "diferencas",
        "capacidade": "capacidade",
        "capacidades": "capacidades",
        "vantagem": "vantagem",
        "vantagens": "vantagens",
        "distribuicao": "distribuicao",
        "distribuicoes": "distribuicoes",
        "funcao": "funcao",
        "funcoes": "funcoes",
        "equacao": "equacao",
        "equacoes": "equacoes",
        "variavel": "variavel",
        "variaveis": "variaveis",
        "ambiente": "ambiente",
        "ambientes": "ambientes",
        "codigo": "codigo",
        "codigos": "codigos",
        "padrao": "padrao",
        "padroes": "padroes",
        "parametro": "parametro",
        "parametros": "parametros",
        "modelo": "modelo",
        "modelos": "modelos",
        "modulo": "modulo",
        "modulos": "modulos",
        "exercicio": "exercicio",
        "exercicios": "exercicios",
        "sintese": "sintese",
        "sinteses": "sinteses",
        "hipotese": "hipotese",
        "hipoteses": "hipoteses",
        "tese": "tese",
        "teses": "teses",
    }
    # Note: most generated text already has correct accents; this is a safety net only
    for bad, good in fixes.items():
        if bad != good:
            text = re.sub(rf'\b{bad}\b', good, text)
    return text

def process_file(path):
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    original = text
    text = translate_headings(text)
    text = translate_formulas(text)
    text = apply_visual_formatting(text)
    text = fix_accents(text)
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
