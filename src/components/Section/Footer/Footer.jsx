import navItem from "../../API/navItem.json";
const Footer = () => {
  return (
    <div className="w-full bg-navBg">
      <nav className="w-full flex justify-center items-center h-16 text-white px-4 relative poppins max-w-[1280px] mx-auto box-border">
        {/* Left-Section */}
        <div className="flex items-center gap-x-9">
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
      </nav>
    </div>
  );
};

export default Footer;
