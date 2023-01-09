import { defineNestedType } from "contentlayer/source-files";

// define tags elsewhere (in a constants file)
import { tagNames, tagSlugs } from "../../utils/contentlayer";

export const Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    title: {
      type: "enum",
      required: true,
      options: tagNames,
    },
    slug: {
      type: "enum",
      required: true,
      options: tagSlugs,
    },
  },
}));
