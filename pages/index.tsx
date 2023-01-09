import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { select } from "../utils/select";
import { format, parseISO, compareDesc } from "date-fns";

import { allPosts } from "contentlayer/generated";

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

function PostCard(post) {
  return (
    <div className="mb-6">
      <time dateTime={post.date} className="block text-sm text-slate-600">
        {post.publishedAt}
      </time>
      <h2 className="text-lg">
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          {post.title}
        </Link>
      </h2>
    </div>
  );
}

export default function Home({ posts }) {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Contentlayer Blog Example</title>
      </Head>

      <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>

      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </div>
  );
}
