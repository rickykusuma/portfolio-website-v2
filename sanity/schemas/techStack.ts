import { Rule } from "sanity";

/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "techStack",
  title: "Technology Stacks",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Framework/Tool Name",
      type: "string",
      validation: (rule:Rule) => rule.required(),
    },
    {
      name: "svg",
      title: "Logo Framework/Tool (SVG)",
      type: "image",validation: (rule:Rule) => rule.required(),
    },
  ],
};
