import os, re

LESSON_DIR = "src/content/courseLessons/vibe-coding-ferramentas-research-futebol"

def apply_visual_highlights(text):
    def process_body(body):
        lines = body.split("\n")
        out = []
        inside_jsx = False
        for line in lines:
            stripped = line.strip()
            # Detect JSX open/close
            if stripped.startswith("<") and not stripped.startswith("</"):
                if not stripped.endswith("/>"):
                    inside_jsx = True
            if stripped.startswith("</"):
                inside_jsx = False
            # Skip imports, frontmatter markers, JSX blocks, code blocks, headings, lists
            if inside_jsx or stripped.startswith("import ") or stripped.startswith("---"):
                out.append(line)
                continue
            if stripped.startswith("```") or stripped.startswith("#") or stripped.startswith("-") or stripped.startswith("*") or stripped.startswith(">"):
                out.append(line)
                continue
            # Skip lines that contain JSX attributes (props with strings) to avoid breaking MDX expressions
            if re.search(r'\w+\s*=\s*\{', line) or re.search(r'\w+\s*=\s*"', line):
                out.append(line)
                continue
            
            # Bold key concept at start of paragraph: "Concept verb..."
            line = re.sub(
                r"^(\s*)([A-Z][a-zA-ZÀ-ÿ]+(?:\s+(?:de|do|da|dos|das|a|o|as|os|em|por|para|com|sem|sobre|e|ou|como|que|qual|quem)\s+[A-Z][a-zA-ZÀ-ÿ]+)?)\s+(é|são|não é|não são|refere-se|referem-se|opera|operam|descreve|descrevem|define|definem|consiste|consistem|trata-se|constitui|constituem|representa|representam|funciona|funcionam|serve|servem|age|agem|atua|atuam|age|agem)\b",
                r"\1**\2** \3",
                line
            )
            line = re.sub(r"  +", " ", line)
            
            # Orange color for alert phrases (only first occurrence per line to avoid nesting)
            alert_phrases = [
                r"não prevê", r"não determina", r"não elimina", r"não substitui",
                r"não converte", r"não é uma previsão", r"não é destino", r"não é causa única",
                r"não é acessório", r"não é mecanismo", r"não tem utilidade",
                r"não pode ser ignorado", r"erro mais comum", r"erro estrutural",
                r"falha comum", r"falha quando", r"falha não é", r"viés sistêmico",
                r"risco sistêmico", r"look-ahead bias", r"overfitting", r"ilusão estatística",
                r"caixa-preta", r"não auditável", r"sem validação", r"sem backtesting",
                r"sem controle", r"sem isolamento", r"sem ajuste contextual",
                r"sem aprovação", r"sem checkpoint", r"execução descontrolada",
                r"dependência de", r"ausência de", r"contaminação", r"degradação",
            ]
            for phrase in alert_phrases:
                line = re.sub(
                    rf"\b({phrase})\b",
                    r'<span style="color:#ff4500">\1</span>',
                    line,
                    count=1,
                    flags=re.IGNORECASE
                )
            out.append(line)
        return "\n".join(out)
    
    m = re.match(r"^(---\n.*?\n---\n)(.*)$", text, re.DOTALL)
    if m:
        return m.group(1) + process_body(m.group(2))
    return process_body(text)

def process_file(path):
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    original = text
    text = apply_visual_highlights(text)
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
