import { allPosts } from ".contentlayer/generated";
import { createOgImage } from "@/lib/createOgImage";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Layout } from "@/components/Layout";
import clsx from "clsx";
import { components } from "@/components/MdxComponents";
import { NextSeo } from "next-seo";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: post,
    },
  };
};

export default function PostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(post.body.code);
  const router = useRouter();

  const path = `/blog/${post.slug}`;
  const url = `https://samsfgreen.com${path}`;
  const title = `${post.title} | Sam Green`;
  const ogImage = createOgImage({
    title: post.title,
    meta: "samsfgreen.com · " + post.publishedAtFormatted,
  });

  return (
    <>
      <NextSeo
        title={title}
        description={post.description ?? undefined}
        canonical={url}
        openGraph={{
          url,
          title,
          description: post.description ?? undefined,
          images: [
            {
              url: ogImage,
              width: 1600,
              height: 836,
              alt: post.title,
            },
          ],
        }}
      />

      <Layout>
        <div className="xl:!col-end-5">
          <h1 className="text-2xl font-medium text-sky-100/90 sm:text-3xl">
            {post.title}
          </h1>
          <div className="mt-2 flex space-x-2 text-lg text-sky-100/50">
            <div>{post.publishedAtFormatted}</div>
          </div>
        </div>

        <div className="sticky top-6 hidden h-0 xl:!col-start-4 xl:row-start-2 xl:block">
          <div className="space-y-6">
            {post.headings ? (
              <div className="space-y-2 text-sm">
                <div className="uppercase text-sky-100/30">On this page</div>

                {post.headings.map((heading) => {
                  return (
                    <div key={heading.slug}>
                      <a
                        href={`#${heading.slug}`}
                        className={clsx(
                          "block text-sky-100/50 underline-offset-2 transition-all hover:text-sky-100 hover:underline hover:decoration-sky-200/50",
                          {
                            "pl-2": heading.heading === 2,
                            "pl-4": heading.heading === 3,
                          }
                        )}
                      >
                        {heading.text}
                      </a>
                    </div>
                  );
                })}
              </div>
            ) : null}

            <div className="border-t border-sky-200/10"></div>

            <div className="flex items-center justify-between">
              <div className="">
                <button
                  className="text-sm text-sky-100/30 hover:text-sky-100/60"
                  onClick={() => {
                    window.scrollTo({ top: 0 });
                    router.push(path, undefined, { shallow: true });
                  }}
                >
                  Back to top
                </button>
              </div>
            </div>
          </div>
        </div>

        <MDXContent
          components={{
            ...components,
          }}
        />
      </Layout>
    </>
  );
}
