import React from "react";
import heroImage1 from "./IMG-20230130-WA0018.jpg";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#1a202c] text-white">
      {/* main Div */}
      <div className="max-w-[80rem] mx-auto flex flex-col md:flex-row py-20 md:py-28 gap-8 md:gap-10 px-4">
        {/* left Section */}
        <div className="flex flex-col  gap-y-5 md:gap-y-10 max-w-full md:max-w-[604px] text-wrap flex-1">
          <h2 className="text-4xl lg:text-6xl">
            <span className="relative z-10 after:content-[''] after:h-1/5 after:absolute after:bottom-3 after:left-0 after:bg-[#ed64a6] after:w-full after:-z-10">
              Welcome to my
            </span>
            <br />
            <span className="bg-gradient-to-l from-[#7928CA] to-[#FF0080] bg-clip-text text-transparent">
              Portfolio!
            </span>
          </h2>
          <p className="text-[#a0aec0] text-wrap ">
            I am a front-end developer. I am skilled in React.js, Tailwind CSS,
            and JavaScript. I am passionate about creating interactive and
            beautiful user interfaces, along with the required functionalities
            on the front end. One of my favourite technologies to work with is
            React.js, particularly within the{" "}
            <mark className="bg-[#c6f6d5] px-[6px] py-[0.3px] rounded-full">
              MERN
            </mark>{" "}
            stack.
            <br />
            My Experties include in React.js & Tailwind CSS for high-scale
            application development.
          </p>
          {/* Hero Button */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="text-lg text-[#1a202c] h-12 w-full sm:w-[116.59px] px-6  rounded-full flex justify-center items-center text-nowrap bg-gradient-to-l from-[#7928CA] to-[#FF0080] hover:bg-gradient-to-r">
              Hire me
            </button>
            <button className="text-lg text-[#1a202c] h-12 w-[175.83px] px-6  rounded-full flex justify-between items-center text-nowrap bg-gradient-to-l from-[#7928CA] to-[#FF0080] hover:bg-gradient-to-r">
              My Resume
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  fill="currentColor"
                  d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* right Section */}
        <div className="flex flex-1 justify-center items-center relative z-10 w-full h-[350px]">
          <svg
            viewBox="0 0 578 440"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 w-full h-[120%] md:h-[150%]"
          >
            <path
              className="anim"
              d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
              fill="#FF0080"
            ></path>
          </svg>
          <div className="w-full h-[350px] overflow-hidden rounded-2xl flex flex-grow relative z-10">
            <img
              src={heroImage1}
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>
      </div>
      {/* Social Media Links */}
      <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-[80rem] mx-auto px-4 *:cursor-pointer text-center">
        <p className="text-center sm:text-left text-2xl sm:text-4xl text-[#ffffffeb] text-nowrap">
          Connect with me :
        </p>
        <a>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="github"
            className="w-8 h-8"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path
              fill="#ffffffeb"
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            ></path>
          </svg>
        </a>
        <a>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="linkedin"
            className="w-8 h-8"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="#ffffffeb"
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
            ></path>
          </svg>
        </a>
        <a>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="instagram"
            className="w-8 h-8"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="#ffffffeb"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            ></path>
          </svg>
        </a>
        <a>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="twitter"
            className="w-8 h-8"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="#ffffffeb"
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
