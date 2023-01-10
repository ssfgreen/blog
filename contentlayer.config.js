import { makeSource } from "contentlayer/source-files";
import { Post } from "./content/definitions/Post";
import { HEADING_LINK_ANCHOR } from "./styles/constants";

import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import rehypePrettyCode from "rehype-pretty-code";
import {
  rehypePrettyCodeClasses,
  rehypePrettyCodeOptions,
} from "./utils/rehypePrettyCode";

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext";
      return options;
    },
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [
      [rehypeSlug],
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypePrettyCodeClasses],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: [HEADING_LINK_ANCHOR],
          },
        },
      ],
    ],
  },
});
