import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="bg-center bg-header bg-cover ">
      <Nav />
      <main className="max-w-[1164px] mx-auto px-4 md:px-3 mt-[169px]">
        <h1 className="text-6xl font-inter text-start text-white font-extrabold leading-[120%] max-w-[582px]">
          Explore The World Around You
        </h1>
        <p className="pt-4 text-start text-white font-inter max-w-[568px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <button class="rounded-[10px] flex items-center mt-8 font-semibold font-inter h-[59px] w-[126px] overflow-hidden relative group cursor-pointer border-2 text-base border-extralightred bg-extralightred text-extralightred">
          <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span class="relative text-white text-center px-6 whitespace-nowrap transition duration-300 group-hover:text-extralightred ease">
            Book Now
          </span>
        </button>
      </main>
    </header>
  );
};

export default Header;
