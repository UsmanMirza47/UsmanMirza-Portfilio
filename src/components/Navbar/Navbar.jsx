import React, { useState } from "react";

const Navbar = () => {
  const [isNavStatusVisible, setIsNavStatusVisible] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleNavStatus = (event) => {
    if (event.type === "blur") {
      setIsNavStatusVisible(false);
    } else {
      setIsNavStatusVisible(!isNavStatusVisible);
    }
  };

  const handleNavVisHid = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div id="home" className="w-full">
      <nav className="w-full flex justify-between items-center h-16 bg-navBg text-white px-4 relative poppins">
        {/* Left-Section */}
        <div className="flex items-center gap-x-9">
          {/* HumburgerBtn */}
          <button
            className="w-10 h-10 flex justify-center items-center bg-[#ffffff14] text-[#ffffffeb] rounded-md sm:hidden"
            onClick={handleNavVisHid}
          >
            {isNavVisible ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                className="w-4 h-4"
              >
                <path
                  fill="#ffffffeb"
                  d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
                  className="w-4 h-4"
                ></path>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
                  className="w-4 h-4"
                ></path>
              </svg>
            )}
          </button>

          {/* Logo */}
          <h1 className="text-2xl font-bold bg-gradient-to-l from-[#7928ca] to-[#ff0080] bg-clip-text text-transparent cursor-pointer">
            Usman Mirza
          </h1>
          <ul className="items-center gap-x-6 hidden sm:flex">
            <a href="#home">
              <li className="text-subtitleColor text-[16px] cursor-pointer px-2 py-1 rounded hover:bg-[#2d3748] transition-all duration-150 ease-out-[cubic-bezier(0, 0, 0.2, 1)]">
                Home
              </li>
            </a>
            <a href="#about">
              <li className="text-subtitleColor text-[16px] cursor-pointer px-2 py-1 rounded hover:bg-[#2d3748] transition-all duration-150 ease-out-[cubic-bezier(0, 0, 0.2, 1)]">
                About
              </li>
            </a>
            {/* <li className="text-subtitleColor text-[16px] cursor-pointer px-2 py-1 rounded hover:bg-[#2d3748] transition-all duration-150 ease-out-[cubic-bezier(0, 0, 0.2, 1)]">
              Experience
            </li> */}
            <a href="#project">
              <li className="text-subtitleColor text-[16px] cursor-pointer  px-2 py-1 rounded hover:bg-[#2d3748] transition-all duration-150 ease-out-[cubic-bezier(0, 0, 0.2, 1)]">
                Projects
              </li>
            </a>
            <a href="#contact">
              <li className="text-subtitleColor text-[16px] cursor-pointer  px-2 py-1 rounded hover:bg-[#2d3748] transition-all duration-150 ease-out-[cubic-bezier(0, 0, 0.2, 1)]">
                Contact
              </li>
            </a>
          </ul>
        </div>
        {/* Right-Section */}
        <button
          className="w-8 h-8 rounded-full relative bg-[url(https://avatars.githubusercontent.com/u/61585443?v=4)] bg-center bg-cover bg-no-repeat"
          onClick={(event) => {
            handleNavStatus(event);
          }}
          onBlur={(event) => {
            handleNavStatus(event);
          }}
        >
          <span className="absolute -bottom-[0.5px] -right-[0.9px] flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
          </span>
        </button>

        {/* Navbar Status Bar */}
        <div
          className={`absolute w-[224px] h-[287px] -bottom-[287px] right-0 z-50 rounded-lg bg-activeBarBg text-subtitleColor flex-col justify-center items-center ${
            isNavStatusVisible ? "flex" : "hidden"
          } border border-subtitleColor transition-all duration-300`}
        >
          <div className="w-32 h-32 rounded-full bg-slate-500 flex justify-between items-center">
            <img
              src="https://avatars.githubusercontent.com/u/61585443?v=4"
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <p className="text-center mt-4">
              <span className="font-bold text-lg pb-1">Usman Mirza</span>
              <br />
              <span className="text-[#9ae6b4] bg-[#9ae6b429] font-bold p-[2px] rounded-sm font-poppins">
                ACTIVE-FREELANCER
              </span>
              <br />
              <span className="text-sm">Software Developer</span>
            </p>
          </div>
        </div>
      </nav>

      {/* HumBurger Navbar */}
      <nav
        className={`${
          isNavVisible ? "block" : "hidden"
        } h-44 w-full sm:hidden bg-navBg box-border  transition-all duration-300`}
      >
        <ul className="flex flex-col justify-between items-start p-4 box-border h-full">
          <a
            href="#home"
            className="text-subtitleColor text-[16px] block w-full cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-subtitleColor text-[16px] block w-full cursor-pointer"
          >
            About
          </a>
          {/* <a
            href="#"
            className="text-subtitleColor text-[16px] block w-full cursor-pointer"
          >
            Experience
          </a> */}
          <a
            href="#project"
            className="text-subtitleColor text-[16px] block w-full cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-subtitleColor text-[16px] block w-full cursor-pointer"
          >
            Contact
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
