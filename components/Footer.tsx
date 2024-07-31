import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import { socialMediaType } from "@/types";

const Footer = ({
  socialMediaList,
  email,
}: {
  socialMediaList: socialMediaType[];
  email: string;
}) => {
  return (
    <footer className="w-full mb-[100px] md:pb-10 md:mb-5 " id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading md:max-w-[70vw] xl:max-w-[45vw]">
          I seize every <span className="text-purple">chance</span> that comes
          my way in my professional career.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals
        </p>
        <div>
          <a href={`mailto:${email}`}>
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-16 gap-5 md:gap-0 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Ricky
        </p>

        <div className="flex items-center md:gap-3 gap-6 ">
          {socialMediaList &&
            socialMediaList.length > 0 &&
            socialMediaList.map((profile, index) => (
              <div
                key={index}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={profile?.socialMediaUrl}
                >
                  <img
                    src={profile?.svg}
                    alt={`${profile?.socMedName}`}
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
