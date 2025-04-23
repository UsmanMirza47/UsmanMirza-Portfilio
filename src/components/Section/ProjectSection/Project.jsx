import React from "react";
import project from "../../API/Project.json";
import CurProject from "./CurProject";

const Project = () => {
  return (
    <section id="project" className="w-full h-full px-4">
      {/* top Heading */}
      <div className="w-full">
        <div className="py-4 flex justify-center items-center">
          <p className="uppercase font-semibold text-sm p-2 rounded-md bg-[#1a365d] text-[#4299e1]">
            my projects
          </p>
        </div>
        <div className="flex justify-center accent-inherit py-2">
          <h2 className="text-4xl text-[#ffffffeb] font-semibold text-center">
            Here are some of My Projects
          </h2>
        </div>
        <div className="w-[75px] h-1 my-5 mx-auto bg-[#ff0080]"></div>
      </div>

      {/* Project Box */}
      <div className="text-[#ffffffeb] w-full h-full flex justify-center items-center flex-row flex-wrap">
        {project?.toReversed().map((curProject) => {
          return <CurProject curProject={curProject} key={curProject.id} />;
        })}
      </div>
      <hr className="w-full opacity-50"></hr>
    </section>
  );
};

export default Project;
