import React, { useState } from "react";
import PopularTopics from "../components/PopularTopics";
import Banner from "../components/Banner";
import EditorsPick from "../components/EditorsPick";
import Footer from "../components/Footer";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = ["/assets/img/header-img.jpg", "/assets/img/headerer.jpg"];

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : currentSlide - 1);
  };
  return (
    <div className="max-w-[1440px]">
      <div className="w-screen h-screen relative">
        <div
          className="flex w-[200vw] h-full transition-all duration-500 ease"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          <img
            src={data[0]}
            alt="hero-pic-1"
            className="w-[100vw] object-cover h-[100vh] "
          />
          <img
            src={data[1]}
            alt="hero-pic-2"
            className="w-[100vw] object-cover h-[100vh] "
          />
        </div>
        <div className=" absolute top-[40%] pl-[5vh]">
          <button className="font-serif uppercase text-[10px] ;leading-[11.72px] text-white bg-[#FFFFFF26] rounded-[8px] py-[5px] px-[10px]">
            adventure
          </button>
          <div className="font-[lora] font-[700] text-white text-[5vw] pt-5">
            Richird Norton photorealistic <br /> rendering as real photos
          </div>
          <div className="flex items-start text-white font-[700] pb-5  ">
            <span>08.08.2021</span>
            <span className=" pl-10 mt-2 relative block text-white-color uppercase before:absolute before:top-0 before:left-3 before:content-[''] before:w-full before:bg-white before:h-[1px] before:block"></span>
            <span className="hidden md:flex text-[10px] font-[lora] pl-10 text-white font-[700]  ">
              Progressively incentivize cooperative systems through technically
              sound <br /> functionalities. The credibly productivate seamless
              data.
            </span>
          </div>
          <span className="md:hidden pt-10 text-[10px] font-[lora] text-white font-[400]  ">
            Progressively incentivize cooperative systems through technically
            sound functionalities. The credibly productivate seamless data.
          </span>
          <div className="flex space-x-3 pt-12 ">
            <div
              className="rounded-full w-[12px] h-[12px] bg-white cursor-pointer"
              onClick={prevSlide}
            ></div>
            <div
              className="rounded-full w-[12px] h-[12px] bg-white cursor-pointer"
              onClick={nextSlide}
            ></div>
          </div>
        </div>
      </div>
      <PopularTopics />
      <Banner />
      <EditorsPick />
      <Footer />
    </div>
  );
};

export default Home;
