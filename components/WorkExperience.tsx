"use client";
import React from "react";
import { Button } from "./ui/MovingBorder";
import { useQuery } from "react-query";
import { getWorkExperiences } from "@/app/api/experiences";
import { workExperienceType } from "@/types";
import moment from "moment";
const WorkExperience = () => {
  const { data } = useQuery({
    queryKey: "getWorkExperienceQuery",
    queryFn: () => getWorkExperiences(),
    onError: (err) => {
      console.log(err);
    },
  });
  return (
    <div className="py-20" id="experience">
      <h1 className="heading">
        My
        <span className="text-purple"> Work Experience</span>
      </h1>
      <div className="w-full mt-12 grid xl:grid-cols-4 grid-cols-1 gap-10">
        {data && data.length > 0 ? (
          data.map((experience: workExperienceType) => {
            const {
              _id,
              companyName,
              endDate,
              jobType,
              positionName,
              present,
              region,
              startDate,
              workType,
            } = experience;
            return (
              <Button
                key={_id}
                borderRadius="1.75rem"
                duration={Math.floor(Math.random() * 10000) + 10000}
                className="flex-1  text-white border-neutral-200 dark:border-slate-800"
              >
                <div className="flex hover:scale-95 duration-500 lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                  <div className="grid w-full grid-flow-row sm:grid-flow-col gap-3">
                    <div className="flex flex-col items-start justify-between gap-2">
                      <h1 className="text-start text-xl md:text-2xl font-bold">
                        {positionName}
                      </h1>
                      <span className="text-start">{companyName}</span>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-1 items-start sm:items-end">
                      <span>{jobType}</span>
                      <span>
                        {workType} / {region}
                      </span>
                      <span>
                        {moment(startDate).format("MMMM YYYY")} -{" "}
                        {present
                          ? "present"
                          : moment(endDate).format("MMMM YYYY")}
                      </span>
                    </div>
                  </div>
                </div>
              </Button>
            );
          })
        ) : (
          <LoadingWorkExperienceComponent />
        )}
      </div>
    </div>
  );
};

function LoadingWorkExperienceComponent() {
  return new Array(4).fill(0).map((_, index) => {
    return (
      <Button
        key={index}
        borderRadius="1.75rem"
        duration={Math.floor(Math.random() * 10000) + 10000}
        className="flex-1  text-white border-neutral-200 dark:border-slate-800"
      >
        <div className="flex hover:scale-95 duration-500 lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
          <div className="grid w-full grid-flow-row md:grid-flow-col gap-3">
            <div className="flex flex-col items-start justify-between gap-2">
              <div className="text-start h-5 w-60 rounded-full lg:w-48 bg-gray-100/5 animate-pulse text-xl md:text-2xl font-bold"></div>
              <div className="text-start h-5 w-52 lg:w-40 rounded-full bg-gray-100/5 animate-pulse"></div>
            </div>
            <div className="flex flex-col gap-3 items-start md:items-end">
              <div className="h-2.5 w-10 rounded-full bg-gray-100/5 animate-pulse"></div>
              <div className="flex gap-2">
                <div className="h-2.5 w-10 rounded-full bg-gray-100/5 animate-pulse"></div>
                <div className="h-2.5 w-10 rounded-full bg-gray-100/5  animate-pulse"></div>
              </div>
              <div className="h-2.5 w-40 rounded-full bg-gray-100/5 animate-pulse"></div>
            </div>
          </div>
        </div>
      </Button>
    );
  });
}

export default WorkExperience;
