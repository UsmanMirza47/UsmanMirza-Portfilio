import React from "react";
import reactSvg from "/react-2.svg";
import material from "/material.svg";

const TechIcon = () => {
  return (
    <div className="flex flex-row md:flex-col">
      <div className="flex flex-col md:flex-row gap-3">
        {/* HTML */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <svg
              stroke="#e53e3e"
              fill="#e53e3e"
              strokeWidth="0"
              viewBox="0 0 512 512"
              focusable="false"
              className="w-9 h-9"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z"></path>
            </svg>
          </div>
        </div>
        {/* CSS */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <svg
              stroke="#3182ce"
              fill="#3182ce"
              strokeWidth="0"
              viewBox="0 0 512 512"
              focusable="false"
              className="w-12 h-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M64 32l35 403.22L255.77 480 413 435.15 448 32zm290.68 334.9L256.07 395l-98.46-28.24-6.75-77.76h48.26l3.43 39.56 53.59 15.16.13.28 53.47-14.85 5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58z"></path>
            </svg>
          </div>
        </div>
        {/* JAVASCRIPT */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <svg
              stroke="#ECC94B"
              fill="#ECC94B"
              strokeWidth="0"
              viewBox="0 0 512 512"
              focusable="false"
              className="w-12 h-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z"></path>
            </svg>
          </div>
        </div>
        {/* tailwind css */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <img src="./image/tailwind-css-1.svg" className="w-12 h-10" />
          </div>
        </div>
        {/* React */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <img src={reactSvg} className="w-full h-full" />
          </div>
        </div>
        {/* GIt */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <svg
              stroke="#e53e3e"
              fill="#e53e3e"
              strokeWidth="0"
              role="img"
              viewBox="0 0 24 24"
              focusable="false"
              className="w-12 h-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="mx-3 md:mx-0 my-0 md:my-3 h-full md:h-0 w-0 md:w-full border-l md:border-l-0 border-b-0 md:border-b border-subtitleColor"></div>
      <div className="flex flex-col md:flex-row gap-3">
        {/* GitHub */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <svg
              stroke="#2c5282"
              fill="#2c5282"
              strokeWidth="0"
              viewBox="0 0 512 512"
              focusable="false"
              className="w-12 h-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
            </svg>
          </div>
        </div>
        {/* Axios */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <img src="./image/axios.svg" className="" />
          </div>
        </div>
        {/* React-Router-Dom */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <img src="./image/react-router.svg" className="w-12 h-10" />
          </div>
        </div>
        {/* Redux-Toolkit */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <img src="./image/redux-Toolkit.svg" className="w-12 h-10" />
          </div>
        </div>
        {/* Git */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <img src={material} className="w-10 h-10" />
          </div>
        </div>
        {/* Css */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white"></div>
        </div>
      </div>
      <div className="mx-3 md:mx-0 my-0 md:my-3 h-full md:h-0 w-0 md:w-full border-l md:border-l-0 border-b-0 md:border-b border-subtitleColor"></div>
    </div>
  );
};

export default TechIcon;
