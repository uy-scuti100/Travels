import React from "react";
import { BsFacebook, BsYoutube, BsPinterest } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaBehanceSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-auto md:h-[400px] bg-[#212529] pb-20">
        <div className="flex flex-col space-y-10 md:space-y-0 items-start md:flex-row md:justify-around justify-between pt-[100px] px-4 md:px-0">
          <div className="flex flex-col space-y-6 ">
            <p className="text-[18px] font-[lora] font-[700] text-[#D4A373] leading-[25px]">
              Contact the Publisher
            </p>
            <p className="text-[12px] font-[400] font-[lora]  text-white leading-[14.56px]">
              uy@Scuti.com
            </p>
            <p className="text-[12px] font-[400] font-[lora]  text-white leading-[14.56px]">
              +234 803 928 2266
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <p className="text-[18px] font-[lora] font-[700] text-[#D4A373] leading-[25px]">
              Explorate
            </p>
            <p className="text-[12px] font-[400] font-[lora]  text-white leading-[14.56px]">
              About
            </p>
            <p className="text-[12px] font-[400] font-[lora]  text-white leading-[14.56px]">
              Partners
            </p>
            <p className="text-[12px] font-[400] font-[lora]  text-white leading-[14.56px]">
              Job Opportunities
            </p>
            <p className="text-[12px] font-[400] font-[lora]  text-white leading-[14.56px]">
              Advertise
            </p>
            <p className="text-[12px] font-[400] font-[lora]  text-white leading-[14.56px]">
              Membership
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <p className="text-[18px] font-[lora] font-[700] text-[#D4A373] leading-[25px]">
              {" "}
              Headquarter
            </p>
            <p className="text-[12px] font-[400] text-white font-[lora] leading-[14.56px]">
              191 Middleville Road,
            </p>
            <p className="text-[12px] font-[400] text-white font-[lora] leading-[14.56px]">
              NY 1001, Sydney
            </p>
            <p className="text-[12px] font-[400] text-white  font-[lora] leading-[14.56px]">
              Australia
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <p className="text-[18px] font-[lora] font-[700] text-[#D4A373] leading-[25px]">
              Connections
            </p>
            <div className="flex space-x-6 md:space-x-5 text-white text-[24px]">
              <BsFacebook />
              <AiOutlineTwitter />
              <BsYoutube />
              <BsPinterest />
              <FaBehanceSquare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
