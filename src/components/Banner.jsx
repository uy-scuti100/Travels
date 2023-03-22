import React from "react";

const Banner = () => {
  return (
    <div className=" py-28 relative w-full">
      <div className="banner px-0 w-full"></div>
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <p className="text-center text-[20px] tracking-wide md:text-[36px] font-[lora] font-[900] md:font-[700] text-white pb-5 ">
          Richird Norton photorealistic <br /> rendering as real photos
        </p>
        <p className="text-center font-[400] font-[lora] text-[12px] text-[#E5E5E5] pb-5">
          Progressively incentivize cooperative systems through technically
          sound <br /> functionalities. The credibly productivate seamless data.
        </p>
        <p className="relative block pt-5 pb-3 text-white-color uppercase before:absolute before:top-0 before:left-0 before:content-[''] before:w-[10%] md:before:translate-x-[240px] before:translate-x-[110px] before:bg-white before:h-[1px] before:block"></p>
        <p className="text-center font-[400] font-[lora] text-[12px] text-[#E5E5E5] pb-5">
          08.08.2021
        </p>
      </div>
    </div>
  );
};

export default Banner;
