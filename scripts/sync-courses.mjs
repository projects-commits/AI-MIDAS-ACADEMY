import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

/**
 * Sincroniza o conteúdo do curso a partir de outro repositório Git.
 * Útil para desenvolvimento local quando o curso está num repo separado.
 *
 * Uso:
 *   node scripts/sync-courses.mjs
 *   COURSE_REPO_URL=https://github.com/USER/REPO.git node scripts/sync-courses.mjs
 */

const repo = process.env.COURSE_REPO_URL || 'https://github.com/OUTRA_CONTA_GITHUB/curso-ai-midas-framework.git';
const tempDir = '.temp-courses';

function cloneOrPull() {
  if (fs.existsSync(tempDir)) {
    console.log('Atualizando repo de cursos...');
    execSync('git pull', { cwd: tempDir, stdio: 'inherit' });
  } else {
    console.log('Clonando repo de cursos...');
    execSync(`git clone ${repo} ${tempDir}`, { stdio: 'inherit' });
  }
}

function copyContent() {
  const possibleRoots = [
    path.resolve(tempDir, 'src/content'),
    path.resolve(tempDir),
  ];

  const targets = ['courses', 'courseLessons'];
  const destRoot = path.resolve('src/content');

  for (const root of possibleRoots) {
    if (!fs.existsSync(root)) continue;
    for (const target of targets) {
      const src = path.join(root, target);
      const dest = path.join(destRoot, target);
      if (fs.existsSync(src)) {
        console.log(`A sincronizar ${target}...`);
        fs.mkdirSync(dest, { recursive: true });
        fs.cpSync(src, dest, { recursive: true, force: true });
      }
    }
  }
}

cloneOrPull();
copyContent();
console.log('Cursos sincronizados com sucesso.');
