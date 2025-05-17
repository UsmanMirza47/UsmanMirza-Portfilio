const TechIcon = ({ item }) => {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div className="w-12 h-8 rounded-full flex justify-center items-center bg-white">
          <img
            srcSet={item.path}
            alt={item.alt}
            className="w-9 h-9"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default TechIcon;
