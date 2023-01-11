import { pick } from "contentlayer/client";
import { Post } from "contentlayer/generated";

export const tagNames = ["Next.js", "MDX"];
export const tagSlugs = ["next", "mdx"];

export const formatPostPreview = (post: Post) => {
  const partialPost = pick(post, [
    "tags",
    "slug",
    "title",
    "description",
    "publishedAt",
    "publishedAtFormatted",
  ]);

  return {
    ...partialPost,
    description: partialPost.description ?? null,
    tags: partialPost.tags || [],
  };
};

// don't send fields we don't use to the client
// the biggest culprit is post.body.raw (the raw MDX source)
export const getPartialPost = (
  {
    title,
    slug,
    publishedAtFormatted,
    description,
    body,
    series,
    headings,
  }: Post,
  allPosts: Post[]
) => ({
  title,
  slug,
  publishedAtFormatted,
  description: description ?? null,
  body: {
    code: body.code,
  },
  headings:
    (headings as { heading: number; text: string; slug: string }[]) ?? null,
  series: series
    ? {
        title: series.title,
        posts: allPosts
          .filter((p) => p.series?.title === series.title)
          .sort(
            (a, b) =>
              Number(new Date(a.series!.order)) -
              Number(new Date(b.series!.order))
          )
          .map((p) => {
            return {
              title: p.title,
              slug: p.slug,
              status: p.status,
              isCurrent: p.slug === slug,
            };
          }),
      }
    : null,
});
