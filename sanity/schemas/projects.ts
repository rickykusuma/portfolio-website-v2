import { Rule } from "sanity";

/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Project Name",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "description",
      title: "Project Description",
      type: "array",
      validation: (rule: Rule) => rule.optional(),
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "thumbnail",
      title: "Thumbnail Project",
      type: "image",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: "Project Slug ",
      options: { source: "name" },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "images",
      title: "Project Images",
      type: "array",
      of: [{ type: "image" }],
      validation: (rule: Rule) => rule.optional(),
    },
    {
      name: "tag",
      title: "Tag",
      type: "reference",
      to: { type: "tags" },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "techStacks",
      title: "Technology Stacks",
      type: "array",
      of: [{ type: "reference", to: { type: "techStack" } }],
      validation: (rule: Rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      media: "thumbnail",
      title: "name",
      subtitle: "tags.name",
    },
  },
};
