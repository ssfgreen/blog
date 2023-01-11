import Head from "next/head";
import Link from "next/link";
import cx from "clsx";
import { ProfileImage } from "@/components/ProfileImage";
import { Navigation } from "@/components/Navigation";
import { Layout } from "@/components/Layout";
import { seo } from "@/lib/seo";
import { format, parseISO, compareDesc } from "date-fns";
import { BlogPostPreview } from "@/components/BlogPostPreview";
import React from "react";
import { useIntersection } from "react-use";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { formatPostPreview } from "@/utils/contentlayer";

import { allPosts } from "contentlayer/generated";

export const getStaticProps: GetStaticProps<{
  posts: ReturnType<typeof formatPostPreview>[];
}> = async () => {
  let posts = allPosts
    .filter((p) => p.status === "published")
    .map(formatPostPreview)
    .sort((a, b) =>
      compareDesc(new Date(b.publishedAt), new Date(a.publishedAt))
    );
  return { props: { posts } };
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "-100px",
  });

  let showNav = false;
  if (intersection && !intersection.isIntersecting) {
    showNav = true;
  }

  return (
    <Layout showNav={showNav}>
      <div className="-mt-12 sm:mt-0">
        <div ref={intersectionRef}>
          <div
            className={cx("transition duration-300", {
              "opacity-0": showNav,
              "opacity-100": !showNav,
            })}
          >
            <div className="flex items-center space-x-6">
              <ProfileImage size="large" />

              <div>
                <h1 className="text-3xl font-medium text-sky-100/80 sm:text-4xl">
                  Sam Green
                </h1>
                <h2 className="align-middle text-lg leading-6 text-sky-100/80">
                  <span className="hidden sm:inline">
                    Machine Learning, Full Stack Dev, Design
                  </span>
                  <span
                    className="inline sm:hidden"
                    title="Developer Experience"
                  >
                    ML, Dev, Design
                  </span>{" "}
                  at{" "}
                  <span className="font-medium text-sky-100/70">Turinglab</span>
                </h2>
              </div>
            </div>

            <p className="mt-7 text-xl text-sky-100/90 sm:mt-9">
              {seo.description}
            </p>

            <div className="mt-8 sm:mt-12">
              <Navigation header={false} />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-10 mt-20 sm:mt-32">
        {posts.map((post) => (
          <BlogPostPreview key={post.slug} {...post} />
        ))}
      </div>
    </Layout>
  );
}
