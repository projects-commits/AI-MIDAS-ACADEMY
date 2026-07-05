import re, os, json

SRC = r"C:\Users\Raziy\Desktop\projectos\ai_midas_academy\src\content\courses\polymarket-operacao-tecnica\index.mdx"
DST = r"C:\Users\Raziy\Desktop\projectos\ai_midas_academy\src\content\courseLessons\polymarket-operacao-tecnica"

with open(SRC, "r", encoding="utf-8") as f:
    text = f.read()

# Split frontmatter from body
match = re.match(r"^---\n(.*?)\n---\n(.*)", text, re.DOTALL)
frontmatter_raw = match.group(1)
body = match.group(2)

# Parse frontmatter to get lesson metadata
fm = json.loads(frontmatter_raw)
lessons = {l["id"]: l for l in fm["lessons"]}

def make_frontmatter(lesson, lesson_number):
    fm_data = {
        "id": f"course-polymarket-operacao-tecnica-lesson-{lesson_number}",
        "courseId": "course-polymarket-operacao-tecnica",
        "courseSlug": "polymarket-operacao-tecnica",
        "lessonId": lesson["id"],
        "moduleId": lesson["moduleId"],
        "title": lesson["title"],
        "slug": lesson["slug"],
        "lessonNumber": lesson_number,
        "readingMinutes": lesson["readingMinutes"],
        "status": "published",
        "createdAt": "2026-07-05T17:00:00.000Z",
        "updatedAt": "2026-07-05T17:00:00.000Z"
    }
    return "---\n" + json.dumps(fm_data, indent=2, ensure_ascii=False) + "\n---\n\n"

# Define lesson boundaries by anchor text (the ### Aula X: header)
lesson_boundaries = []
for i in range(1, 19):
    if i == 11:
        continue  # will be inserted manually
    pat = rf"### Aula {i}:"
    idx = body.find(pat)
    if idx == -1:
        pat = rf"### Aula {i} "
        idx = body.find(pat)
    lesson_boundaries.append((i, idx, pat))

# Sort by position
lesson_boundaries.sort(key=lambda x: x[1])

# Extract content for each lesson
for i in range(len(lesson_boundaries)):
    num, pos, pat = lesson_boundaries[i]
    # Find where this lesson ends: the next ### Aula or ## Módulo or end of file
    # Look for next lesson or module marker
    remaining = body[pos + len(pat):]
    next_lesson = None
    for j in range(i+1, len(lesson_boundaries)):
        next_pos = lesson_boundaries[j][1]
        next_lesson = lesson_boundaries[j]
        break
    if next_lesson:
        # End at the next lesson start
        end_idx = body.find(f"### Aula {next_lesson[0]}:", pos + len(pat))
        if end_idx == -1:
            end_idx = body.find(f"### Aula {next_lesson[0]} ", pos + len(pat))
        if end_idx == -1:
            end_idx = len(body)
    else:
        end_idx = len(body)
    
    content = body[pos:end_idx].strip()
    lesson = lessons.get(f"lesson-{num}")
    if not lesson:
        print(f"WARNING: lesson-{num} not found in frontmatter")
        continue
    
    fm_str = make_frontmatter(lesson, num)
    imports = """import BlackboardPanel from '../../../components/academy/BlackboardPanel.astro';
import FormulaBlock from '../../../components/lesson/FormulaBlock.astro';
import MarketExample from '../../../components/lesson/MarketExample.astro';
import FailureModeCard from '../../../components/lesson/FailureModeCard.astro';
import MermaidDiagram from '../../../components/lesson/MermaidDiagram.astro';

"""
    full = fm_str + imports + content + "\n"
    
    fname = f"{lesson['slug']}.mdx"
    fpath = os.path.join(DST, fname)
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(full)
    print(f"Created: {fname} ({num})")

print(f"\nDone. {len(lesson_boundaries)} lesson files created.")
print("\nMissing: Aula 11 - needs manual creation")
