import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <nav className="w-full flex justify-center items-center h-16 bg-navBg text-white px-4 relative poppins">
        {/* Left-Section */}
        <div className="flex items-center gap-x-9">
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
      </nav>
    </div>
  );
};

export default Footer;
