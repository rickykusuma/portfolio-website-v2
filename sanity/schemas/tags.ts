import { Rule } from "sanity";

/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "tags",
  title: "Tag",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Tag Name",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "companyName",
      title: "Company Name",
      type: "reference",
      to: { type: "workExperience" },
      validation: (rule: Rule) => rule.optional(),
    },
  ],
};
