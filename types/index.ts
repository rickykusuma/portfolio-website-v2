import { PortableTextBlock } from "sanity";
export type techStackType = {
  _id: string;
  name: string;
  image: string;
};
export type socialMediaType = {
  _id: string;
  socMedName?: string;
  socialMediaUrl: string;
  svg: string;
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

export type profileType = {
  _id: string;
  _createdAt: string;
  fullName: string;
  nickname: string;
  headline?: string;
  email: string;
  profileImage?: string;
  shortBio?: string;
  fullBio?: PortableTextBlock[];
  socialMedia: socialMediaType[];
  resumeURL: string;
  workAt?: string;
};
