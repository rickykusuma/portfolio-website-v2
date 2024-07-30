import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export async function getProfile() {
  const res = await client.fetch(
    groq`*[_type == "profile" ]  | order(_createdAt desc) {
        _id,
        _createdAt,
        fullName,
        nickname,
        email,
        socialMedia[] {socMedName,socialMediaUrl,"svg":svg.asset->url},
        resumeURL,
        "workAt": workAt->companyName
    }`
  );

  return res;
}
