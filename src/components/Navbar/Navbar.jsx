import React, { useState } from "react";
import navItem from "../API/navItem.json";
import Close from "../SVG/Close";
import Humburger from "../SVG/Humburger";

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
    <div id="home" className="w-full bg-navBg">
      <nav className="w-full max-w-[1280px] mx-auto flex justify-between items-center h-16 text-white px-4 relative poppins">
        {/* Left-Section */}
        <div className="flex items-center gap-x-9">
          {/* HumburgerBtn */}
          <button
            className="w-10 h-10 flex justify-center items-center bg-[#ffffff14] text-[#ffffffeb] rounded-md sm:hidden"
            onClick={handleNavVisHid}
          >
            {isNavVisible ? <Close /> : <Humburger />}
          </button>

          {/* Logo */}
          <h1 className="text-2xl font-bold bg-gradient-to-l from-[#7928ca] to-[#ff0080] bg-clip-text text-transparent cursor-pointer">
            Usman Mirza
          </h1>
          <ul className="items-center gap-x-6 hidden sm:flex">
            {navItem.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    href={item.path}
                    className="text-subtitleColor text-[16px] cursor-pointer px-2 py-1 rounded hover:bg-[#2d3748] transition-all duration-150 ease-out-[cubic-bezier(0, 0, 0.2, 1)]"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Right-Section */}
        <button
          className="w-8 h-8 rounded-full relative bg-[url(/image/IMG/logo.jpeg)] bg-center bg-cover bg-no-repeat"
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
            <picture>
              <source
                srcSet="./image/WEBP/logo.webp"
                type="image/webp"
                className="w-full h-full rounded-full"
              />
              <source
                srcSet="./image/AVIF/logo.avif"
                type="image/avif"
                className="w-full h-full rounded-full"
              />
              <img
                src="./image/IMG/logo.jpeg"
                className="w-full h-full rounded-full"
                rel="preload"
                alt="logo"
              />
            </picture>
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
          {navItem.map((item) => {
            return (
              <li key={item.id}>
                <a
                  href={item.path}
                  className="text-subtitleColor text-[16px] block w-full cursor-pointer"
                  onClick={() => {
                    setIsNavVisible();
                  }}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
