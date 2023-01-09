import { useEnabledOnFirstIntersection } from "@/utils/useEnabledOnFirstIntersection";
import { ContentLink } from "@/components/ContentLink";

export const BlogPostPreview = (post) => {
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
