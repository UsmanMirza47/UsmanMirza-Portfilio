import React from "react";
import aboutImg from "./image.jpg";
import TechIcon from "./TechIcon";

const AboutSection = () => {
  return (
    <>
      <section id="about" className="w-full bg-bodyBg text-subtitleColor">
        {/* main Section */}
        <div className="max-w-[992px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="flex flex-col gap-4 text-subtitleColor">
            <p className="p-2 text-[#4299e1] bg-[#1a365d] font-[600] rounded-md text-sm w-fit">
              About Me
            </p>
            <p className="text-4xl text-subtitleColor">
              Hello! My name is Yash Kapure
            </p>
            <p className="text-lg text-[#718096]">
              I am a self-taught programmer with a passion for learning and
              exploring new technologies. I have a strong background in FrontEnd
              Development and improving full-stack development and am always
              eager to expand my skillset and take on new challenges. In my free
              time, I enjoy sipping on a cup of tea (or coffee) and watching a
              game of cricket. As a dedicated and driven individual, I am
              constantly seeking out opportunities to grow and improve as a
              programmer.
            </p>
            <p className="text-[16px] text-[#718096]">
              Some of the Stack I know
            </p>
            {/* Icon Start */}
            <TechIcon />
            {/* Icon Close */}
          </div>
          {/* Right Section */}
          <div className="w-full h-full">
            <img
              src={aboutImg}
              className="object-cover object-center w-full h-full rounded-md"
            ></img>
          </div>
        </div>
      </section>
      <hr className="w-full opacity-50"></hr>
    </>
  );
};

export default AboutSection;
