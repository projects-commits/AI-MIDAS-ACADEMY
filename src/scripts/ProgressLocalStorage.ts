const STORAGE_PREFIX = "ai-midas-progress";

function getStorageKey(courseId: string) {
  return `${STORAGE_PREFIX}:${courseId}`;
}

function readProgress(courseId: string): string[] {
  if (typeof window === "undefined") {
    return [];
  }

  const raw = window.localStorage.getItem(getStorageKey(courseId));
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function writeProgress(courseId: string, completedLessonIds: string[]) {
  window.localStorage.setItem(getStorageKey(courseId), JSON.stringify(completedLessonIds));
}

function updateCourseUi(courseId: string, totalLessons: number) {
  const completed = readProgress(courseId);
  const completedCount = completed.length;
  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  document.querySelectorAll<HTMLElement>(`[data-progress-label="${courseId}"]`).forEach((node) => {
    node.textContent = `${completedCount}/${totalLessons} aulas concluídas`;
  });

  document.querySelectorAll<HTMLElement>(`[data-progress-percent="${courseId}"]`).forEach((node) => {
    node.textContent = `${progressPercent}%`;
  });

  document.querySelectorAll<HTMLElement>(`[data-progress-fill="${courseId}"]`).forEach((node) => {
    node.style.width = `${progressPercent}%`;
  });

  document.querySelectorAll<HTMLElement>(`[data-lesson-item][data-course-id="${courseId}"]`).forEach((node) => {
    const lessonId = node.dataset.lessonId;
    if (!lessonId) {
      return;
    }

    node.classList.toggle("is-complete", completed.includes(lessonId));
  });

  document.querySelectorAll<HTMLElement>(`[data-complete-lesson="${courseId}"]`).forEach((node) => {
    const lessonId = node.dataset.lessonId;
    if (!lessonId) {
      return;
    }

    const isComplete = completed.includes(lessonId);
    node.dataset.state = isComplete ? "complete" : "incomplete";
    node.textContent = isComplete ? "Concluída localmente" : "Marcar como concluída";
  });
}

export function initCourseProgress() {
  const root = document.querySelector<HTMLElement>("[data-course-shell]");
  if (!root) {
    return;
  }

  const courseId = root.dataset.courseId;
  const totalLessons = Number(root.dataset.totalLessons ?? "0");

  if (!courseId) {
    return;
  }

  updateCourseUi(courseId, totalLessons);

  document.querySelectorAll<HTMLElement>(`[data-complete-lesson="${courseId}"]`).forEach((button) => {
    button.addEventListener("click", () => {
      const lessonId = button.dataset.lessonId;
      if (!lessonId) {
        return;
      }

      const completed = readProgress(courseId);
      const nextCompleted = completed.includes(lessonId)
        ? completed.filter((id) => id !== lessonId)
        : [...completed, lessonId];

      writeProgress(courseId, nextCompleted);
      updateCourseUi(courseId, totalLessons);
    });
  });
}
