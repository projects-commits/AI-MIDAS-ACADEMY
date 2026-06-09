import { getCollection } from "astro:content";

export async function getCourseStaticPaths() {
  const courses = await getCollection("courses");

  return courses.map((course) => ({
    params: { courseSlug: course.data.slug }
  }));
}

export async function getLessonStaticPaths() {
  const courses = await getCollection("courses");

  return courses.flatMap((course) =>
    course.data.lessons.map((lesson) => ({
      params: {
        courseSlug: course.data.slug,
        lessonSlug: lesson.slug
      }
    }))
  );
}
