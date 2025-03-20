import React from "react";
import reactSvg from "/react-2.svg";

const TechIcon = () => {
  return (
    <div className="flex flex-row md:flex-col">
      <div className="flex flex-col md:flex-row gap-3">
        {/* React */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <img src={reactSvg} className="w-full h-full"></img>
          </div>
        </div>
        {/* Veus */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <svg
              stroke="#3182ce"
              fill="#3182ce"
              viewBox="0 0 512 512"
              focusable="false"
              className="w-12 h-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 144.03l-55.49-96.11h-79.43L256 281.61 390.92 47.92h-79.43L256 144.03z"></path>
              <path d="M409.4 47.92L256 313.61 102.6 47.92H15.74L256 464.08 496.26 47.92H409.4z"></path>
            </svg>
          </div>
        </div>
        {/* python */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <svg
              stroke="#3182ce"
              fill="#3182ce"
              viewBox="0 0 512 512"
              focusable="false"
              className="w-12 h-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M314 36.38c-18.59-3.06-45.8-4.47-64.27-4.38a311.09 311.09 0 00-51.66 4.38c-45.74 8-54.07 24.7-54.07 55.54V128h112v16H107.62C66.06 144 32.33 193.67 32 255.12v.88a162.91 162.91 0 003.13 32c9.29 46.28 38.23 80 72.49 80H128v-54c0-31.3 20.84-59.95 55-66.1l9.87-1.23H314a56.05 56.05 0 0015.06-2A52.48 52.48 0 00368 193.68V91.92c0-28.92-24.68-50.73-54-55.54zM194.93 105.5a20.37 20.37 0 1120.3-20.3 20.29 20.29 0 01-20.3 20.3z"></path>
              <path d="M475.28 217c-10.7-42.61-38.41-73-70.9-73h-17.71v47.45c0 39.57-26 68.22-57.74 73.13a63.54 63.54 0 01-9.69.75H198.08a60 60 0 00-15.23 1.95C160.54 273.14 144 291.7 144 315.77v101.77c0 29 29.14 46 57.73 54.31 34.21 9.95 71.48 11.75 112.42 0 27.19-7.77 53.85-23.48 53.85-54.31V384H256v-16h148.38c29.44 0 54.95-24.93 67.45-61.31A156.83 156.83 0 00480 256a160.64 160.64 0 00-4.72-39zM316.51 404a20.37 20.37 0 11-20.3 20.3 20.29 20.29 0 0120.3-20.3z"></path>
            </svg>
          </div>
        </div>
        {/* Node */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-[#1c4532]">
            <svg
              stroke="#ffffffeb"
              fill="#ffffffeb"
              viewBox="0 0 512 512"
              focusable="false"
              className="w-12 h-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M429.76 130.07L274.33 36.85a37 37 0 00-36.65 0L82.24 130.06A38.2 38.2 0 0064 162.83V349a38.26 38.26 0 0018.24 32.8L123 406.14l.23.13c20.58 10.53 28.46 10.53 37.59 10.53 32.14 0 52.11-20.8 52.11-54.29V182a8.51 8.51 0 00-8.42-8.58h-22.38a8.51 8.51 0 00-8.42 8.58v180.51a15 15 0 01-6.85 13.07c-5.9 3.6-14.47 2.84-24.14-2.15l-39.06-23.51a1.1 1.1 0 01-.48-.92V165.46a1.32 1.32 0 01.59-1.06l151.84-93a.82.82 0 01.73 0l151.93 93a1.34 1.34 0 01.55 1.1V349a1.28 1.28 0 01-.45 1l-152.06 90.65a1.22 1.22 0 01-.8 0l-38.83-23.06a7.8 7.8 0 00-7.83-.41l-.34.2c-10.72 6.35-13.6 8-23.54 11.62-1.62.59-5.43 2-5.76 5.77s3.29 6.45 6.51 8.32l51.9 31.87a35.67 35.67 0 0018.3 5.07h.58a35.87 35.87 0 0017.83-5.07l155.43-93.13A38.37 38.37 0 00448 349V162.83a38.21 38.21 0 00-18.24-32.76z"></path>
              <path d="M307.88 318.05c-37.29 0-45.24-10.42-47.6-27.24a8.43 8.43 0 00-8.22-7.32h-19.8a8.44 8.44 0 00-8.26 8.58c0 14.58 5.12 62.17 83.92 62.17 24.38 0 44.66-5.7 58.63-16.49S388 311.26 388 292.55c0-37.55-24.5-47.83-72.75-54.55-49.05-6.82-49.05-10.29-49.05-17.89 0-5.47 0-18.28 35.46-18.28 25.23 0 38.74 3.19 43.06 20a8.35 8.35 0 008.06 6.67h19.87a8.24 8.24 0 006.16-2.86 8.91 8.91 0 002.12-6.44c-2.57-35.55-28.56-53.58-79.24-53.58-46.06 0-73.55 20.75-73.55 55.5 0 38.1 28.49 48.87 71.29 53.33 50 5.17 50 12.71 50 19.37.03 10.38-4.28 24.23-41.55 24.23z"></path>
            </svg>
          </div>
        </div>
        {/* JavaScript */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <svg
              stroke="#ECC94B"
              fill="#ECC94B"
              stroke-width="0"
              viewBox="0 0 512 512"
              focusable="false"
              className="w-12 h-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z"></path>
            </svg>
          </div>
        </div>
        {/* Next.Js */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <svg
              stroke="#000000"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
              className="w-12 h-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc></desc>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
              <path d="M15 12v-3"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="mx-3 md:mx-0 my-0 md:my-3 h-full md:h-0 w-0 md:w-full border-l md:border-l-0 border-b-0 md:border-b border-subtitleColor"></div>
      <div className="flex flex-col md:flex-row gap-3">
        {/* HTML */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <svg
              stroke="#e53e3e"
              fill="#e53e3e"
              stroke-width="0"
              viewBox="0 0 512 512"
              focusable="false"
              className="w-12 h-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z"></path>
            </svg>
          </div>
        </div>
        {/* Express */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <svg
              stroke="#2b6cb0"
              fill="#2b6cb0"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              focusable="false"
              className="w-12 h-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path>
            </svg>
          </div>
        </div>
        {/* GitHub */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <svg
              stroke="#2c5282"
              fill="#2c5282"
              stroke-width="0"
              viewBox="0 0 512 512"
              focusable="false"
              className="w-12 h-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
            </svg>
          </div>
        </div>
        {/* Klassen */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <svg
              stroke="#2c5282"
              fill="#2c5282"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              focusable="false"
              className="w-12 h-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M20.61 0H3.39C2.189 0 1.23.96 1.23 2.16v19.681c0 1.198.959 2.159 2.16 2.159h17.22c1.2 0 2.159-.961 2.159-2.159V2.16C22.77.96 21.811 0 20.61 0zm.96 21.841c0 .539-.421.96-.96.96H3.39c-.54 0-.96-.421-.96-.96V2.16c0-.54.42-.961.96-.961h17.22c.539 0 .96.421.96.961v19.681zM6.63 20.399L9.33 18l-2.7-2.4v4.799zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52zM13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9z"></path>
            </svg>
          </div>
        </div>
        {/* Git */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <svg
              stroke="#e53e3e"
              fill="#e53e3e"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              focusable="false"
              className="w-12 h-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"></path>
            </svg>
          </div>
        </div>
        {/* Css */}
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
            <svg
              stroke="#3182ce"
              fill="#3182ce"
              stroke-width="0"
              viewBox="0 0 512 512"
              focusable="false"
              className="w-12 h-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M64 32l35 403.22L255.77 480 413 435.15 448 32zm290.68 334.9L256.07 395l-98.46-28.24-6.75-77.76h48.26l3.43 39.56 53.59 15.16.13.28 53.47-14.85 5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="mx-3 md:mx-0 my-0 md:my-3 h-full md:h-0 w-0 md:w-full border-l md:border-l-0 border-b-0 md:border-b border-subtitleColor"></div>
    </div>
  );
};

export default TechIcon;
