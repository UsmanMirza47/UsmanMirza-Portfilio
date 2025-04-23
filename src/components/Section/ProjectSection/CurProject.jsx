import React from "react";

const CurProject = ({ curProject }) => {
  const { id, img, name, para, stack, visit, github } = curProject;
  return (
    <div
      className="w-full md:w-[400px] relative rounded-[10px] h-[790px] md:h-[650px] m-4 shadow-2xl mx-auto md:mx-4"
      
    >
      <img
        src={img}
        loading="lazy"
        className="w-full md:w-[400px] h-[250px] md:h-[210px] rounded-t-md mx-auto"
      />
      <div className="py-4 px-4">
        <h6 className="text-[18px] my-2 text-[#ed143d]  tracking-[3px] font-bold">
          {name}
        </h6>
        <p className="text-[#ffffffeb] text-[16px] leading-[25px] font-poppins font-light">
          {para}
        </p>
        <div className="flex justify-center items-center p-2 pt-4">
          <strong>Stack</strong>
        </div>
        <ul className="flex flex-row justify-center gap-2 flex-wrap">
          {stack.map((curStack, i) => {
            return <li key={i}>{curStack}</li>;
          })}
        </ul>
        <div className="flex flex-row gap-2 justify-between items-center mt-4 w-full">
          <button className="h-10 w-2/4 bg-[#ffffff14] hover:bg-[#ffffff25] text-[14px] rounded-full flex justify-center items-center text-[#ffffffeb]">
            <a
              href={visit}
              className="w-full h-full rounded-full flex justify-center items-center"
              target="_blank"
            >
              Visit
            </a>
          </button>
          <button className="h-10 w-2/4 bg-[#000000] hover:bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex justify-center items-center">
            <a
              href={github}
              target="_blank"
              className="w-full h-full rounded-full flex justify-center items-center"
            >
              <svg
                stroke="#ffffffeb"
                fill="#ffffffeb"
                viewBox="0 0 16 16"
                height="28px"
                width="28px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurProject;
