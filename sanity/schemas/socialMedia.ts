import { Rule } from "sanity";

/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "socialMedia",
  title: "Social Media",
  type: "document",
  fields: [
    {
      name: "socMedName",
      title: "Social Media Name",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "socialMediaUrl",
      title: "Social Media URL",
      type: "url",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "svg",
      title: "Logo Social Media (SVG)",
      type: "image",
      validation: (rule: Rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: "socMedName",
      media: "svg",
    },
  },
};
