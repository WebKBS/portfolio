const VerticalTitle = () => {
  return (
    <p
      className="absolute left-0 top-5 -z-10 -scale-100 text-[100px] font-extrabold leading-none text-gray-400 opacity-20 sm:text-[120px] lg:text-[140px]"
      style={{
        writingMode: "vertical-rl",
        filter: "drop-shadow(-4px 3px 0px rgba(255, 255, 255, 1 ))",
      }}
    >
      PORTFOLIO
    </p>
  );
};

export default VerticalTitle;
