import { Rule } from "sanity";

/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  fields: [
    {
      name: "positionName",
      title: "Position Title",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "companyLogo",
      title: "Company Logo",
      type: "image",
      validation: (rule: Rule) => rule.optional(),
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      validation: (rule: Rule) => rule.optional(),
      of: [
        {
          type: "block",
        },
      ],
    },

    {
      title: "fromDate",
      name: "From",
      type: "date",
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: "Still in this position?",
      name: "present",
      type: "boolean",
    },
    {
      title: "toDate",
      name: "To",
      type: "date",
      validation: (rule: Rule) => rule.required(),
      hidden: ({ document }: { document: any }) => document?.present,
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
      media: "companyLogo",
      title: "positionName",
      stillwork: "present",
      fromDate: "fromDate",
      toDate: "toDate",
    },
    prepare({
      media,
      title,
      stillwork,
      fromDate,
      toDate,
    }: {
      media: any;
      title: string;
      stillwork: boolean;
      fromDate: Date;
      toDate: Date;
    }) {
      return {
        title: title,
        subtitle: `${fromDate} - ${stillwork ? "present" : toDate}`,
        media: media,
      };
    },
  },
};
