import Head from "next/head";
import Link from "next/link";
import cx from "clsx";
import { ProfileImage } from "@/components/ProfileImage";
import { Navigation } from "@/components/Navigation";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { seo } from "@/lib/seo";
import { select } from "../utils/select";
import { format, parseISO, compareDesc } from "date-fns";
import { BlogPostPreview } from "@/components/BlogPostPreview";
import React from "react";
import { useIntersection } from "react-use";

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

export default function Home({ posts }) {
  let showNav = false;

  return (
    <div className="bg-navy-900 antialiased selection:bg-green-500/90 selection:text-white">
      <Layout showNav={showNav}>
        <div className="-mt-12 sm:mt-0">
          <div>
            <p className="mt-7 text-xl text-sky-100/90 sm:mt-9">
              {seo.description}
            </p>

            <div className="mt-8 sm:mt-12">
              <Navigation />
            </div>
          </div>
        </div>

        <div className="space-y-10 mt-20 sm:mt-32">
          {posts.map((post) => (
            <BlogPostPreview key={post.slug} {...post} />
          ))}
        </div>
      </Layout>
    </div>
  );
}
