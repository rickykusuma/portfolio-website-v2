import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export async function getRecentProjects() {
  const res = await client.fetch(
    groq`*[_type == "projects"] | order(_createdAt desc) [0...4] {
        _id,
        _createdAt,
        name,
        description,
        "thumbnail" : thumbnail.asset->url,
        images[] {"url":asset->url},
        tag->{_id,name},
        techStacks[]->{_id,name,"image":svg.asset->url},
        githubLink,
        productionLink,
        "slug": slug.current
        }`
  );

  return res;
}
