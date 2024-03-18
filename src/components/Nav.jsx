import { useState } from "react";
import Logo from "../assets/images/svg/NavLogo.svg";
import { RxCross1 } from "react-icons/rx";
import { BiMenuAltLeft } from "react-icons/bi";

const Nav = () => {
  //=============== navbar function ===================//
  const [head, sethead] = useState(true);
  function showUl() {
    sethead(!head);
  }
  if (!head) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return (
    <>
      <nav className="bg-white">
        <div className="max-w-[1164px] py-[10px] mx-auto md:px-3 px-4">
          <div className="flex justify-between w-full items-center">
            {/*========================================== navbar_logo ==============================================*/}
            <div className="flex items-center">
              <img className="relative z-[100] max-w-[150px] lg:max-w-[220px] cursor-pointer" src={Logo} alt="Logo" />
            </div>
            {/*============================================ humburger_icon ==========================================*/}
            <div onClick={showUl} className=" relative z-[100]  md:hidden">
              <h3 className="text-lightred text-3xl sm:text-4xl">{head ? <BiMenuAltLeft /> : <RxCross1 />}</h3>
            </div>

            <div className={`flex flex-col md:flex-row  fixed md:relative w-full z-50 min-h-screen md:min-h-0 top-[0] left-[-100%] md:left-0 ttransition-opacity duration-700 md:transition-none  justify-center md:justify-end items-center ${head ? "" : "!left-0 bg-white"}`}>
              {/*====================================== mobile_screen_navbar_links =========================================*/}
              <ul className="flex md:hidden gap-8 flex-col md:flex-row items-center">
                <li><a onClick={showUl} className="font-inter text-[20px] sm:text-[24px] md:text-base transition-all duration-300  stroke_2" href="#home">Home</a></li>
                <li><a onClick={showUl} className="font-inter text-[20px] sm:text-[24px] md:text-base transition-all duration-300 hover:text-black hover_stroke2 text-secondaryblack opacity-70 hover:opacity-100" href="#aboutus">About Us</a></li>
                <li><a onClick={showUl} className="font-inter text-[20px] sm:text-[24px] md:text-base transition-all duration-300 hover:text-black hover_stroke2 text-secondaryblack opacity-70 hover:opacity-100" href="#discover">Discover</a></li>
                <li><a onClick={showUl} className="font-inter text-[20px] sm:text-[24px] md:text-base transition-all duration-300 hover:text-black hover_stroke2 text-secondaryblack opacity-70 hover:opacity-100" href="#faq">FAQ’s</a></li>

                <button class="rounded-[10px] flex items-center   font-semibold font-inter h-[59px] w-[138px] overflow-hidden relative group cursor-pointer border-2 text-base border-extralightred bg-extralightred text-extralightred">
                  <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span class="relative text-white mx-auto whitespace-nowrap transition duration-300 group-hover:text-extralightred ease">Get Started</span>
                </button>
              </ul>
              {/*====================================== desktop_screen_navbar_links =========================================*/}
              <ul className="hidden md:flex items-center gap-5 lg:gap-8">
                <li><a className="font-inter text-[20px] sm:text-[24px] md:text-base transition-all duration-300  stroke_2" href="#home">Home</a></li>
                <li><a className="font-inter text-[20px] sm:text-[24px] md:text-base transition-all duration-300 hover: hover_stroke2 text-secondaryblack opacity-70 hover:opacity-100" href="#aboutus">About Us</a></li>
                <li><a className="font-inter text-[20px] sm:text-[24px] md:text-base transition-all duration-300 hover: hover_stroke2 text-secondaryblack opacity-70 hover:opacity-100" href="#discover">Discover</a></li>
                <li><a className="font-inter text-[20px] sm:text-[24px] md:text-base transition-all duration-300 hover: hover_stroke2 text-secondaryblack opacity-70 hover:opacity-100" href="#faq">FAQ’s</a></li>

                <button class="rounded-[10px] flex items-center ms-5 lg:ms-9  font-semibold font-inter h-[59px] w-[126px] lg:w-[138px] overflow-hidden relative group cursor-pointer border-2 text-base border-extralightred bg-extralightred text-extralightred">
                  <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span class="relative text-white text-center mx-auto whitespace-nowrap transition duration-300 group-hover:text-extralightred ease">Get Started</span>
                </button>

              </ul>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
