import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import DownArrow from "../../SVG/DownArrow.jsx";
import GitHub from "../../SVG/GitHub.jsx";
import LinkedIn from "../../SVG/LinkedIn.jsx";
import Instagram from "../../SVG/Instagram.jsx";
import Twitter from "../../SVG/Twitter.jsx";

const HeroSection = () => {
  const [resume, setResume] = useState(true);

  const handleResume = () => {
    setResume(!resume);
  };

  return (
    <section className="w-full bg-[#1a202c] text-white">
      {/* main Div */}
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row py-20 md:py-28 gap-8 md:gap-10 px-4">
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
          <p className="text-[#a0aec0] text-wrap" rel="preload">
            I am a front-end developer. I am skilled in React.js, Tailwind CSS,
            and JavaScript. I am passionate about creating interactive and
            beautiful user interfaces, along with the required functionalities
            on the front end. One of my favourite technologies to work with is
            React.js, particularly within the{" "}
            <mark className="bg-[#c6f6d5] px-[6px] py-[0.3px] rounded-full">
              MERN
            </mark>
            stack.
            <br />
            My Experties include in React.js & Tailwind CSS for high-scale
            application development.
          </p>
          {/* Hero Button */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="#contact">
              <button className="text-lg text-[#1a202c] h-12 w-full sm:w-[116.59px] px-6  rounded-full flex justify-center items-center text-nowrap bg-gradient-to-l from-[#7928CA] to-[#FF0080] hover:bg-gradient-to-r">
                Hire me
              </button>
            </a>
            {/* Resume Main Div Include Button */}
            <div className="relative">
              {/* Resume Picture Exclude Button*/}
              <div
                className={`absolute top-[60px]  sm:-left-[70px] border w-[300px] rounded-md bg-[#2d3748] z-50 ${
                  resume ? "hidden" : "block"
                }`}
              >
                <p className="relative w-full p-3 border-b flex justify-between items-center">
                  <span className="absolute -top-[15%] left-2/4 -translate-x-1/2 w-3 h-3 bg-[#2d3748] rotate-45 border-t border-l"></span>
                  Click on Image to Open
                  <IoCloseOutline
                    className="text-2xl cursor-pointer"
                    onClick={() => handleResume()}
                  />
                </p>
                {/* Resume Image */}
                <div className="p-3">
                  <a
                    href="https://drive.google.com/file/d/1bHaaB0hRv_lU5ydqL7RXcwZ0eJj0aSWL/view?usp=drive_link"
                    target="_blank"
                  >
                    <img
                      srcSet="./image/IMG/Resume.png"
                      alt="hero-image"
                      fetchPriority="low"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>

              <button
                className="text-lg text-[#1a202c] h-12 w-[175.83px] px-6  rounded-full flex justify-between items-center text-nowrap bg-gradient-to-l from-[#7928CA] to-[#FF0080] hover:bg-gradient-to-r"
                onClick={() => handleResume()}
              >
                My Resume
                <DownArrow />
              </button>
            </div>
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
          <picture className="w-full h-[350px] overflow-hidden rounded-2xl flex flex-grow relative z-10">
            <source
              srcSet="./image/WEBP/IMG-20230130-WA0018.webp"
              type="image/webp"
              className="object-cover object-center"
              alt="Hero Image"
              width="1280px"
              height="853px"
              rel="preload"
            />
            <source
              srcSet="./image/AVIF/IMG-20230130-WA0018.avif"
              type="image/avif"
              className="object-cover object-center"
              alt="Hero Image"
              width="1280px"
              height="853px"
              rel="preload"
            />
            <img
              srcSet="./image/IMG/IMG-20230130-WA0018.jpg"
              className="object-cover object-center"
              alt="Hero Image"
              width="1280px"
              height="853px"
              rel="preload"
            />
          </picture>
        </div>
      </div>
      {/* Social Media Links */}
      <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-[80rem] mx-auto px-4 *:cursor-pointer text-center">
        <p className="text-center sm:text-left text-2xl sm:text-4xl text-[#ffffffeb] text-nowrap">
          Connect with me :
        </p>
        <a>
          <GitHub />
        </a>
        <a>
          <LinkedIn />
        </a>
        <a>
          <Instagram />
        </a>
        <a>
          <Twitter />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
