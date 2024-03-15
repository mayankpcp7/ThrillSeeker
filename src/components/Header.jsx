import React from "react";
import Nav from "./Nav";
import selecticon from "../assets/images/svg/SelectIcon.svg";
const Header = () => {
 document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.getElementById("dropdownHoverButton");
    const dropdownMenu = document.getElementById("dropdownHover");

    dropdownButton.addEventListener("mouseenter", function () {
        dropdownMenu.classList.remove("hidden");
    });

    dropdownButton.addEventListener("mouseleave", function () {
        dropdownMenu.classList.add("hidden");
    });
});
  return (
    <header className="bg-center pb-[200px] lg:pb-[250px] bg-header bg-cover relative">
      <Nav />
      <main className="max-w-[1164px] mx-auto px-4 md:px-3 mt-[120px]  lg:mt-[169px]">
        <h1 className=" text-[50px] sm:text-[55px] lg:text-6xl font-inter text-start text-white font-extrabold leading-[120%] max-w-[582px]">
          Explore The World Around You
        </h1>
        <p className="pt-4 text-start text-white font-inter max-w-[461px] sm:max-w-[550px] lg:max-w-[568px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <button class="rounded-[10px] flex items-center mt-8 font-semibold font-inter h-[59px] w-[126px] overflow-hidden relative group cursor-pointer border-2 text-base border-extralightred bg-extralightred text-extralightred">
          <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span class="relative text-white text-center px-6 whitespace-nowrap transition duration-300 group-hover:text-extralightred ease">
            Book Now
          </span>
        </button>
        <div className="flex">
          <div className="flex bg-yellow flex-col rounded-[10px] w-[235px] h-[164px] justify-center px-4 py-[42px]">
            <h3 className="font-inter font-bold text-white text-[34px]">
              900K+
            </h3>
            <p className="text-white text-base font-inter font-medium pt-5 whitespace-nowrap">
              Join Our Happy Customer
            </p>
          </div>
          <div className="flex flex-col bg-white ms-[17px] header_flex_shadow w-full rounded-[10px] p-8">
            <div className="flex items-center">
              <span className="flex h-[3px] w-[39px] rounded-[27px] bg-[#CC1630]"></span>
              <p className="font-inter text-base text-black font-medium ms-[10px]">
                Search Your Products
              </p>
            </div>
            
            <div className="flex flex-wrap mt-6">
              <button
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                class="bg-white text-grey font-medium rounded-[10px] border border-solid justify-between font-inter w-[220px] h-[51px] border-[#cfcfcf] text-sm px-4 py-2.5 text-center flex items-center"
                type="button"
              >
                Your Country
               <img src={selecticon} alt="down-arrow" />
              </button>

              {/* ---------------Dropdown menu------------------------------ */}
              <div
                id="dropdownHover"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownHoverButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </header>
  );
};

export default Header;
