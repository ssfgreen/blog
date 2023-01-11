import { FOCUS_VISIBLE_OUTLINE, LINK_STYLES } from "@/styles/constants";
import clsx from "clsx";
import type { ImageProps } from "next/image";
import { BlurImage } from "./BlurImage";
import NextLink from "next/link";
import React from "react";
import { Aside } from "./Aside";
import { Code } from "./Code";
import { LinkPreview } from "./LinkPreview";

export const components = {
  // Nested Component imports via MDX are suddenly not JSX transformed
  // https://github.com/contentlayerdev/contentlayer/issues/309

  //
  LinkPreview,
  Code,
  Aside,
  h1: (props: any) => (
    <h2
      className="relative mt-3 border-t-2 border-sky-200/5 pt-9 text-xl font-medium text-sky-100/90 sm:text-3xl"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h3
      className="relative mt-3 border-t-2 border-sky-200/5 pt-9 text-xl font-medium text-sky-100/90 sm:text-2xl"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h4 className="text-xl font-medium text-sky-100/90" {...props} />
  ),
  h4: (props: any) => (
    <h5 className="text-lg font-medium text-sky-100/90" {...props} />
  ),
  hr: (props: any) => (
    <hr
      className="relative border-t-2 border-sky-200/5 pt-9 sm:pt-10"
      {...props}
    />
  ),
  a: ({ href = "", ...props }) => {
    if (href.startsWith("http")) {
      return (
        <a
          className={clsx(LINK_STYLES, FOCUS_VISIBLE_OUTLINE)}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      );
    }

    return (
      <NextLink
        href={href}
        className={clsx(LINK_STYLES, FOCUS_VISIBLE_OUTLINE)}
        {...props}
      />
    );
  },
  ul: (props: any) => (
    <ul
      className="space-y-3 [li>&]:mt-3 [&>li]:relative [&>li]:pl-7 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-3 before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-sky-100/20"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol className="list-decimal space-y-3 pl-10" {...props} />
  ),
  strong: (props: any) => <strong className="font-semibold" {...props} />,
  Img: ({
    children,
    bleed,
    caption,
    ...props
  }: {
    children: React.ReactNode;
    bleed?: boolean;
    caption?: string;
  } & ImageProps) => {
    return (
      <>
        <div
          className={clsx({
            "xl:!col-start-2 xl:!col-end-4": bleed === true,
          })}
        >
          <BlurImage {...props} />
        </div>
        {caption ? (
          <div className="mt-2 text-sm italic text-sky-100/60">{caption}</div>
        ) : null}
      </>
    );
  },
  blockquote: (props: any) => (
    <blockquote
      className="border-l-2 border-sky-200/10 pl-4 text-xl italic xl:!col-start-2 xl:!col-end-3"
      {...props}
    />
  ),
  del: (props: any) => (
    <del className="text-sky-100/70 line-through" {...props} />
  ),
};
