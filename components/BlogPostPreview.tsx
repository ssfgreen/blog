import { useEnabledOnFirstIntersection } from "@/utils/useEnabledOnFirstIntersection";
import { ContentLink } from "@/components/ContentLink";
import { formatPostPreview } from "@/utils/contentlayer";

export const BlogPostPreview = (post: ReturnType<typeof formatPostPreview>) => {
  const { enabled, intersectionRef } = useEnabledOnFirstIntersection();

  return (
    <div ref={intersectionRef}>
      <ContentLink key={post.slug} href={`/blog/${post.slug}`}>
        <ContentLink.Title>{post.title}</ContentLink.Title>

        <ContentLink.Meta>
          <div>{post.publishedAtFormatted}</div>
        </ContentLink.Meta>

        {post.description ? (
          <ContentLink.Text>{post.description}</ContentLink.Text>
        ) : null}
      </ContentLink>
    </div>
  );
};
