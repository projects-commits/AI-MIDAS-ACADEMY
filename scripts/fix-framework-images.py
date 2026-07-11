import os, re

DIR = "src/content/courseLessons/framework-de-9-passos-para-analisar-um-jogo-de-futebol"

captions = {
    1: "Mapa visual do passo 1 para fixar a estrutura da aula antes da leitura operacional.",
    2: "Mapa visual do passo 2 para fixar a estrutura da aula antes da leitura operacional.",
    3: "Mapa visual do passo 3 para fixar a estrutura da aula antes da leitura operacional.",
    4: "Mapa visual do passo 4 para fixar a estrutura da aula antes da leitura operacional.",
    5: "Mapa visual do passo 5 para fixar a estrutura da aula antes da leitura operacional.",
    6: "Mapa visual do passo 6 para fixar a estrutura da aula antes da leitura operacional.",
    7: "Mapa visual do passo 7 para fixar a estrutura da aula antes da leitura operacional.",
    8: "Mapa visual do passo 8 para fixar a estrutura da aula antes da leitura operacional.",
    9: "Mapa visual do passo 9 para fixar a estrutura da aula antes da leitura operacional.",
}

alts = {
    1: "Mapa visual do Passo 1 do framework: psicologia do jogo.",
    2: "Mapa visual do Passo 2 do framework: cultura, identidade e rivalidade.",
    3: "Mapa visual do Passo 3 do framework: padrões táticos, estatísticos e de mercado.",
    4: "Mapa visual do Passo 4 do framework: crença, filosofia e princípios de jogo.",
    5: "Mapa visual do Passo 5 do framework: comportamento em campo e comportamento do mercado.",
    6: "Mapa visual do Passo 6 do framework: energia, ritmo e momento competitivo.",
    7: "Mapa visual do Passo 7 do framework: ambiente físico, institucional e informacional.",
    8: "Mapa visual do Passo 8 do framework: observador, vieses e qualidade da interpretação.",
    9: "Mapa visual do Passo 9 do framework: objeto do jogo, regras e tecnologia.",
}

for num in range(1, 10):
    fname = f"passo-{num}-{'psicologia-do-jogo' if num==1 else 'cultura-identidade-e-rivalidade' if num==2 else 'padroes-tacticos-estatisticos-e-de-mercado' if num==3 else 'crenca-filosofia-e-principios-de-jogo' if num==4 else 'comportamento-em-campo-e-comportamento-do-mercado' if num==5 else 'energia-ritmo-e-momento-competitivo' if num==6 else 'ambiente-fisico-institucional-e-informacional' if num==7 else 'observador-vieses-e-qualidade-da-interpretacao' if num==8 else 'objeto-do-jogo-regras-e-tecnologia'}.mdx"
    fpath = os.path.join(DIR, fname)
    
    with open(fpath, "r", encoding="utf-8") as f:
        text = f.read()
    
    # Skip if already has image import
    if f"PASSO_{num}_FRAMEWORK.png" in text:
        print(f"Skip {fname} (already has image)")
        continue
    
    # Add import after MermaidDiagram import line
    import_line = f'import frameworkStep{num} from "../../../../imagens_framework/PASSO_{num}_FRAMEWORK.png";'
    text = text.replace(
        'import MermaidDiagram from "../../../components/lesson/MermaidDiagram.astro";',
        f'import MermaidDiagram from "../../../components/lesson/MermaidDiagram.astro";\n{import_line}'
    )
    
    # Insert image inside BlackboardPanel before first board-note
    img_block = f'  <img class="framework-visual__image" src={{frameworkStep{num}.src}} alt="{alts[num]}" loading="eager" />\n  <p class="framework-visual__caption">{captions[num]}</p>\n'
    text = text.replace(
        '  <div class="board-note">',
        img_block + '  <div class="board-note">',
        1
    )
    
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(text)
    print(f"Updated {fname}")

print("Done.")
