import { makeSource } from "contentlayer/source-files";
import { Post } from "./content/definitions/Post";
import { HEADING_LINK_ANCHOR } from "./styles/constants";

import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

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
