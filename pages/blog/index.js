import { Layout } from "@/components/Layout";
import React from "react";
import { allPosts } from "contentlayer/generated";
import { BlogPostPreview } from "@/components/BlogPostPreview";

import { select } from "@/utils/select";

export const getStaticProps = async () => {
  let posts = allPosts
    .map((post) =>
      select(post, [
        "title",
        "slug",
        "description",
        "publishedAt",
        "publishedAtFormatted",
      ])
    )
    // .filter((p) => p.status === "published")
    .sort((a, b) =>
      compareDesc(new Date(b.publishedAt), new Date(a.publishedAt))
    );
  return { props: { posts } };
};

export default function Blog({ posts }) {
  return (
    <Layout>
      <div className="space-y-10 mt-20 sm:mt-32">
        {posts.map((post) => (
          <BlogPostPreview key={post.slug} {...post} />
        ))}
      </div>
    </Layout>
  );
}
