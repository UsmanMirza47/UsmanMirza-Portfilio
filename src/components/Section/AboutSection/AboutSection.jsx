import TechIcon from "./TechIcon";
import SkillIcon from "../../API/SkillIcon.json";

const AboutSection = () => {
  return (
    <>
      <section id="about" className="w-full bg-bodyBg text-subtitleColor">
        {/* main Section */}
        <div className="max-w-[1280px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="flex flex-col gap-4 text-subtitleColor">
            <p className="p-2 text-[#4299e1] bg-[#1a365d] font-[600] rounded-md text-sm w-fit">
              About Me
            </p>
            <p className="text-4xl text-subtitleColor">
              Hello! My name is Usman Mirza
            </p>
            <p className="text-lg text-[#718096]">
              I am a self-taught programmer with a passion for learning and
              exploring new technologies. I have a strong background in FrontEnd
              Development and improving full-stack development and am always
              eager to expand my skillset and take on new challenges. In my free
              time, I enjoy sipping on a cup of tea (or coffee) and watching a
              game of cricket. As a dedicated and driven individual, I am
              constantly seeking out opportunities to grow and improve as a
              programmer.
            </p>
            <p className="text-[16px] text-[#718096]">
              Some of the Stack I know
            </p>
            {/* Icon Start */}
            <div className="grid grid-cols-5 grid-rows-2 gap-4 bg-activeBarBg w-[100%] sm:w-[80%] md:w-[100%] mx-auto p-2 rounded-md">
              {SkillIcon.map((item) => {
                return <TechIcon key={item.id} item={item} />;
              })}
            </div>

            {/* Icon Close */}
          </div>
          {/* Right Section */}
          <div className="w-full h-full">
            <picture>
              <source
                srcSet="./image/AVIF/image.avif"
                type="image/avif"
                className="object-cover object-center w-full h-full rounded-md"
              />
              <source
                srcSet="./image/WEBP/image.webp"
                type="image/webp"
                className="object-cover object-center w-full h-full rounded-md"
              />
            </picture>
            <img
              src="./image/IMG/image.jpg"
              alt="About Me"
              loading="lazy"
              className="object-cover object-center w-full h-full rounded-md"
              width="100%"
              height="100%"
            ></img>
          </div>
        </div>
      </section>
      <hr className="w-full opacity-50"></hr>
    </>
  );
};

export default AboutSection;
