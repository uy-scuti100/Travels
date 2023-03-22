import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsYoutube, BsPinterest, BsSearch } from "react-icons/bs";
import { AiOutlineTwitter, AiFillBehanceSquare } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [searchBox, setSearchBox] = useState(true);
  const [menuBtn, setMenuBtn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const showBtn = () => {
    setMenuBtn(!menuBtn);
    setMenuOpen(!menuBtn);
  };

  const showSearch = () => {
    setSearchBox(!searchBox);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="relative">
      <div className="absolute bg-[#00000033] w-full h-[50px] flex justify-between items-center px-6 py-4 z-20">
        {/* desktop nav starts here */}
        <div className="text-white font-miracle text-[20px] font-[700] leading-[22.4px]]">
          <Link to="/">SCUTI</Link>
        </div>
        <div className=" hidden md:flex  items-center gap-3">
          <ul className="flex gap-6 font-[roboto]  leading-[14.6px] font-[700] text-[16px] text-white capitalize pr-2 border-r border-white">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="about">
              <li>About</li>
            </Link>
            <Link to="articles">
              <li>Articles</li>
            </Link>
            <Link to="contact">
              <li>Contact Us</li>
            </Link>
          </ul>
          {/* desktop nav ends here */}

          {/* icon links  starts*/}
          <ul className="flex gap-6 text-white capitalize pr-2 border-r border-white text-[20px]">
            <li>
              <a href="#">
                <BsFacebook />{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <BsYoutube />
              </a>
            </li>
            <li>
              <a href="#">
                <BsPinterest />
              </a>
            </li>
            <li>
              <a href="#">
                <AiFillBehanceSquare />
              </a>
            </li>
          </ul>
          {/* icon links ends here*/}

          {/* search box starts */}

          <div>
            {" "}
            {!searchBox ? (
              <div>
                <input
                  className="block focus:outline-none focus:border-0 text-white font-semibold focus:bg-[#ccc]: ease-in-out bg-transparent pl-[7px] border-l border-b border-white"
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button
                  type="submit
              "
                  className="border bg-[#34908E] text-white px-3 font-semibold rounded-md"
                  onClick={handleChange}
                >
                  search
                </button>
              </div>
            ) : (
              <div>
                <input
                  className="h-0 w-0 "
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>
            )}{" "}
          </div>

          <div className="text-white">
            <BsSearch className="cursor-pointer" onClick={showSearch} />
          </div>
        </div>
        {/* search box ends here */}

        {/* toggle button starts here */}
        <div className="md:hidden" onClick={showBtn}>
          {!menuBtn ? (
            <div>
              <RxHamburgerMenu className="text-white text-[24px] cursor-pointer" />
            </div>
          ) : (
            <div>
              <FaTimes className="text-white text-[24px] cursor-pointer" />
            </div>
          )}
        </div>
        {/* toggle button ends here */}
      </div>
      {/* mobile nav starts here */}
      {menuOpen ? (
        <div className="absolute top-[50px] bottom-0 left-0 right-0 z-40 transition-transform duration-500 ease-in-out-[cubic-bezier(0.68, -0.55, 0.27, 1.55)] md:hidden">
          <ul className="flex bg-[#629695] pt-10 h-screen flex-col items-center space-y-24 font-[miracle] leading-[14.6px] font-[700] text-[16px] text-white uppercase tracking-widest ">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="about">
              <li>About</li>
            </Link>
            <Link to="articles">
              <li>Articles</li>
            </Link>
            <Link to="contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      ) : (
        <div className="absolute top-[50px] bottom-0 left-0 -translate-y-[200vh] right-0 z-40 transition-transform duration-500 ease-in-out-[cubic-bezier(0.68, -0.55, 0.27, 1.55)] :md:hidden">
          <ul className="flex bg-[#629695] pt-10 h-screen flex-col items-center space-y-24 font-[roboto] leading-[14.6px] font-[700] text-[16px] text-white uppercase tracking-widest">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="about">
              <li>About</li>
            </Link>
            <Link to="articles">
              <li>Articles</li>
            </Link>
            <Link to="contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      )}

      {/* mobile nav ends here */}
    </div>
  );
};

export default Navbar;
