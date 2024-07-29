import { Rule } from "sanity";

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
      validation: (rule: Rule) => rule.optional(),
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "workType",
      title: "Type of Work",
      type: "string",
      options: {
        list: [
          { title: "Remote", value: "Remote" },
          { title: "On-site", value: "On-site" },
          { title: "Hybrid", value: "Hybrid" },
        ],
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "jobType",
      title: "Job Type",
      type: "string",
      options: {
        list: [
          { title: "Contract", value: "Contract" },
          { title: "Full-time", value: "Full-time" },
          { title: "Part-time", value: "Part-time" },
          { title: "Freelance", value: "Freelance" },
          { title: "Internship", value: "Internship" },
        ],
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "region",
      title: "Region",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (rule: Rule) => rule.required(),
    },
    {
      title: "Still in this position?",
      name: "present",
      type: "boolean",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
      validation: (Rule: Rule) =>
        Rule.custom((field, context) =>
          context?.document?.present && field === undefined
            ? true
            : field === undefined
              ? "This field must not be empty."
              : true
        ),
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
      companyLogo: "companyLogo",
      title: "positionName",
      stillWork: "present",
      startDate: "startDate",
      endDate: "endDate",
    },
    prepare(selection: Record<string, any>) {
      const { companyLogo, title, stillWork, startDate, endDate } = selection;
      return {
        title: title,
        subtitle: `${startDate} - ${stillWork ? "present" : endDate}`,
        media: companyLogo,
      };
    },
  },
};
