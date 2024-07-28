import { PortableTextBlock } from "sanity";
export type techStackType = {
  _id: string;
  name: string;
  image: string;
};
export type projectType = {
  _id: string;
  _createdAt: Date;
  slug: string;
  name: string;
  description?: PortableTextBlock[];
  productionLink?: string;
  githubLink?: string;
  thumbnail: string;
  tag: {
    _id: string;
    name: string;
  };
  techStacks: techStackType[];
  images?: { url: string }[];
};

export type workExperienceType = {
  _id: string;
  _createdAt: Date;
  positionName: string;
  companyName: string;
  companyLogo?: string;
  description?: PortableTextBlock[];
  workType: string;
  jobType: string;
  region: string;
  startDate: Date;
  present: boolean;
  endDate: Date;
  techStacks?: techStackType[];
};
