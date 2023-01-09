import { createOgImage } from "./createOgImage";
import type { DefaultSeoProps } from "next-seo";

const title = `Sam Green`;
const description = `Hi 👋 Welcome to my digital profile where I share what I'm learning in areas of Machine Learning, Full Stack Development, Design and Product.`;
const domain = `samsfgreen.com`;
const twitter = `@samsfgreen`;
const meta = `Machine Learning, Full Stack Dev, Design at Turinglab`;

export const seo: DefaultSeoProps = {
  title: title + " | " + meta,
  description,
  openGraph: {
    title,
    type: "website",
    url: `https://${domain}`,
    site_name: title,
    images: [
      {
        url: createOgImage({ title, meta }),
        width: 1600,
        height: 836,
        alt: title,
      },
    ],
  },
  twitter: {
    handle: twitter,
    cardType: "summary_large_image",
  },
};
