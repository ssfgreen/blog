import { Layout } from "@/components/Layout";
import React from "react";
import { allPosts } from "contentlayer/generated";
import { BlogPostPreview } from "@/components/BlogPostPreview";
import { formatPostPreview } from "@/utils/contentlayer";
import { compareDesc } from "date-fns";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps<{
  posts: ReturnType<typeof formatPostPreview>[];
}> = async () => {
  let posts = allPosts
    // .filter((p) => p.status === "published")
    .map(formatPostPreview)
    .sort((a, b) =>
      compareDesc(new Date(b.publishedAt), new Date(a.publishedAt))
    );
  return { props: { posts } };
};

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
