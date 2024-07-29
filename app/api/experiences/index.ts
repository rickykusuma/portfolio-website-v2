import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export async function getWorkExperiences() {
  const res = await client.fetch(
    groq`*[_type == "workExperience"] | order(_createdAt desc) {
        _id,
        _createdAt,
        positionName,
        companyName,
        "companyLogo": companyLogo.asset->url,
        description,
        workType,
        jobType,
        region,
        startDate,
        present,
        endDate,
    }`
  );

  return res;
}
