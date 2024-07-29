import { Rule } from "sanity";

/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "nickname",
      title: "Nickname",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
      description: "In one short sentence, what do you do?",
      validation: (rule: Rule) => rule.optional(),
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      validation: (rule: Rule) => rule.optional(),
      description: "Upload a profile picture",
    },
    {
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
      validation: (rule: Rule) => rule.optional(),
    },
    {
      name: "fullBio",
      title: "Full Bio",
      type: "array",
      validation: (rule: Rule) => rule.optional(),
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "workAt",
      title: "Currently Work at",
      type: "reference",
      to: { type: "workExperience" },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "socialMedia",
      title: "Social Media",
      type: "array",
      description: "Add your social media links:",
      of: [
        {
          type: "object",
          name: "inline",
          title: "Social Media",
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
        },
      ],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "resumeURL",
      title: "resume URL",
      type: "url",
      validation: (rule: Rule) => rule.required(),
    },
  ],
};
