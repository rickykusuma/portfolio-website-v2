import { Rule } from "sanity";

/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
    {
      name: "resumeURL",
      title: "resume URL",
      type: "url",
      validation: (rule: Rule) => rule.required(),
    },
  ],
};
