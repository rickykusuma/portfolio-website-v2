"use client";

import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import WorkExperience from "@/components/WorkExperience";
import { navItems } from "@/data";
import { useQuery } from "react-query";
import { getProfile } from "./api/profile";

export default function Home() {
  const { data } = useQuery({
    queryKey: "getProfileQuery",
    queryFn: getProfile,
  });
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems} />
        <Hero resumeUrl={data?.[0]?.resumeURL} />
        <Grid workAt={data?.[0]?.workAt} email={data?.[0]?.email} />
        <RecentProjects />
        <WorkExperience />
        <Footer
          socialMediaList={data?.[0]?.socialMedia}
          email={data?.[0]?.email}
        />
      </div>
    </main>
  );
}
