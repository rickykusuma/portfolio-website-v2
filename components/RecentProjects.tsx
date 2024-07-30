"use client";
import React, { useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaGithub, FaLocationArrow } from "react-icons/fa6";
import { Modal, ModalBody, ModalTrigger } from "./ui/AnimatedModal";
import { getRecentProjects } from "@/app/api/projects";
import { useQuery } from "react-query";
import { projectType, techStackType } from "@/types";
import { Button } from "./ui/MovingBorder";
import useWindowSize from "@/hooks/useWindowSize";
const RecentProjects = () => {
  const { data } = useQuery({
    queryKey: "getRecentProject",
    queryFn: () => getRecentProjects(),
    onError: (err) => {
      console.log(err);
    },
  });
  const [selectedProject, setSelectedProject] = useState<projectType | null>(
    null
  );
  const [width] = useWindowSize();
  function handleSelectedProject(link: string | null) {
    // setSelectedProject(project);
    window.open(link || "", "_blank", "noopener,noreferrer");
  }
  return (
    <Modal>
      {/* TODO: ADD PAGINATION TO SHOW ALL THE PROJECTS */}
      {/* TODO: ADD SKELETON WHEN FETCHING THE PROJECTS */}
      {/* TODO: ADD MODAL FOR MORE DETAILS ABOUT THE PROJECTS */}

      <div id="projects" className="py-20">
        <h1 className="heading">
          Recent
          <span className="text-purple"> Projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
          {data && data.length > 0 ? (
            data.map((project: projectType, index: any) => {
              const {
                _id,
                name,
                thumbnail,
                techStacks,
                productionLink,
                githubLink,
                tag,
              } = project;

              return (
                <div
                  key={_id}
                  className="sm:h-[33rem] h-[28rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] "
                >
                  <ModalTrigger
                    onSelected={
                      productionLink == null && githubLink == null
                        ? () => {}
                        : handleSelectedProject.bind(
                            this,
                            githubLink || productionLink || ""
                          )
                    }
                  >
                    <PinContainer
                      disabled={productionLink == null && githubLink == null}
                      title={productionLink || githubLink}
                    >
                      <div className="relative flex items-center rounded-3xl justify-center sm:w-[570px] w-[80vw] overflow-hidden  mb-10">
                        <div className="relative w-full h-full rounded-3xl overflow-hidden lg:rounded-3xl bg-[#13162d]">
                          <img src="/bg.png" alt="bg-img" />
                        </div>
                        <img
                          src={thumbnail}
                          alt={name}
                          className="object-contain z-10 absolute object-center scale-90 rounded-3xl"
                        />
                      </div>
                      <div className="flex flex-col justify-between items-start gap-3 md:flex-row md:items-center">
                        <h1 className="font-bold lg:text-2xl  text-base line-clamp-1">
                          {name}
                        </h1>
                        <Button
                          key={`${tag._id}${index}`}
                          borderRadius="1.75rem"
                          duration={Math.floor(Math.random() * 10000) + 10000}
                          className="flex-1 px-3 py-2 text-white border-neutral-200 dark:border-slate-800"
                        >
                          <span>{tag?.name}</span>
                        </Button>
                      </div>

                      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0 mt-7 mb-3">
                        <div className="flex flex-wrap items-start">
                          {techStacks.map((techStack: techStackType, index) => (
                            <div
                              key={techStack.image}
                              className="rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center border border-white/[0.2]"
                              style={{
                                transform:
                                  width >= 768
                                    ? `translateX(-${5 * index * 2}px)`
                                    : "none",
                              }}
                            >
                              <img
                                src={techStack.image}
                                alt={techStack.name}
                                className="p-2"
                              />
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-end items-center">
                          {productionLink !== null ? (
                            <>
                              <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                Live Site
                              </p>
                              <FaLocationArrow
                                className="ms-3"
                                color="#CBACF9"
                              />
                            </>
                          ) : githubLink !== null ? (
                            <>
                              <p className="flex lg:text-xl md:text-xs text-sm text-white">
                                Github Repo
                              </p>
                              <FaGithub className="ms-3" color="#FFF" />
                            </>
                          ) : null}
                        </div>
                      </div>
                    </PinContainer>
                  </ModalTrigger>
                </div>
              );
            })
          ) : (
            <LoadingProjectComponent />
          )}
          {/* <ModalBody>
            <div>testing</div>
          </ModalBody> */}
        </div>
      </div>
    </Modal>
  );
};

const LoadingProjectComponent = () => {
  return (
    <>
      {new Array(4).fill(0).map((_, index) => (
        <div
          key={index}
          className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] "
        >
          <ModalTrigger>
            <PinContainer disabled={true}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" className="animate-pulse" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  <div className="h-7 w-36 sm:w-40 md:w-50 xl:w-60 rounded-full bg-gray-100/5 animate-pulse"></div>
                </div>
                <Button
                  borderRadius="1.75rem"
                  duration={Math.floor(Math.random() * 10000) + 10000}
                  className="flex-1 px-3 py-2 text-white border-neutral-200 dark:border-slate-800"
                >
                  <div className="h-2.5 w-10 md:w-20 xl:w-28  rounded-full bg-gray-100/5 animate-pulse"></div>
                </Button>
              </div>

              <div className="flex   gap-10 xl:gap-0 flex-col md:flex-row xl:items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {new Array(8).fill(0).map((_, index) => (
                    <div
                      key={index}
                      className="rounded-full animate-pulse bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center border border-white/[0.2]"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <div className="h-2.5 w-5 xl:w-10" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-end">
                  <div className="h-5 w-20 xl:w-48 rounded-full bg-gray-100/5 animate-pulse"></div>
                </div>
              </div>
            </PinContainer>
          </ModalTrigger>
        </div>
      ))}
    </>
  );
};

export default RecentProjects;
