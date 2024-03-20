import React from "react";
import { useState, useEffect } from "react";
import Nav from "./Nav";
const Header = () => {
  //============== join happy costmer counter function =================//
  const [counter, setCounter] = useState(0);
  //===================== useeffect of counter =========================//
  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < 900) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        clearInterval(interval);
      }
    }, 1);
    return () => {
      clearInterval(interval);
    };
  }, [counter]);
  return (
    <>
      {/*====================================== main header ========================================*/}
      <header className=" bg-center sm:bg-right lg:bg-center pb-[200px] lg:pb-[250px] bg-headerbg bg-cover relative">
        {/*===== Nav ======*/}
        <Nav />

        <main className="max-w-[1164px] mx-auto px-4 md:px-3 mt-[120px]  lg:mt-[161px]" id="home" data-aos="fade-up"
          data-aos-duration="1500">
          <h1 className=" text-[38px] sm:text-[55px] lg:text-6xl font-inter text-center sm:text-start text-white font-extrabold leading-[120%] max-w-[582px]">Explore The World Around You</h1>
          <p className="pt-1 sm:pt-4 sm:text-base text-sm text-center sm:text-start text-white font-inter mx-auto sm:mx-0 max-w-[461px] sm:max-w-[550px] lg:max-w-[568px]">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

          <button class="rounded-[10px] mx-auto sm:mx-0 flex items-center mt-5 sm:mt-8 font-semibold font-inter h-[50px] w-[120px] lg:h-[59px] lg:w-[126px] overflow-hidden relative group cursor-pointer border-2 text-base border-extralightred bg-extralightred text-extralightred">
            <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span class="relative text-white mx-auto whitespace-nowrap transition duration-300 group-hover:text-extralightred ease">Book Now</span>
          </button>
        </main>
      </header>

      <div className="max-w-[1164px] mx-auto md:px-3 px-4">
        <div className="flex flex-col sm:flex-row mt-[-82px] items-center xl:item-start relative z-30">
          {/*==================================== counter box div ====================================*/}
          <div className="flex bg-yellow flex-col rounded-[10px] w-[235px] h-[150px] lg:h-[164px] sm:justify-center px-4 py-5 lg:py-[42px]" data-aos="fade-right" data-aos-duration="1500">

            <p className="font-inter font-bold text-white text-[34px]">{counter}K+</p>
            <p className="text-white text-base font-inter font-medium pt-3 lg:pt-5 whitespace-nowrap">Join Our Happy Customer</p>
          </div>
          {/*========================================= Choose Trip and Plan =================================*/}
          <div className="flex flex-col items-center max-w-[290px] mx-auto sm:max-w-full mt-5 sm:mt-0 lg:items-start bg-white sm:ms-[17px] shadow-selectbox w-full rounded-[10px] p-4 lg:p-8" data-aos="fade-left" data-aos-duration="1500">
            <div className="flex items-center">
              <span className="flex h-[3px] w-[39px] rounded-[27px] bg-[#CC1630]"></span>
              <p className="font-inter text-base text-black font-medium ms-[10px]">Search Your Products</p>
            </div>
            {/*======================================= select Country ===========================================*/}
            <div className="flex sm:flex-row flex-col max-w-[360px] mx-auto sm:max-w-full  gap-[15px] items-center lg:justify-start justify-center flex-wrap mt-6">
              <select id="country" class="appearance-none bg-white border cursor-pointer text-grey bg-no-repeat font-inter border-[#cfcfcf] rounded-[10px] px-2 lg:px-4 w-[157px] lg:w-[170px] md:w-[145px] xl:w-[220px] h-[45px] lg:h-[51px] relative">
                <option className="font-inter text-grey text-sm lg:text-base">Your Country</option>
                <option className="font-inter text-grey text-sm lg:text-base" value="US">India</option>
                <option className="font-inter text-grey text-sm lg:text-base" value="US">United States</option>
                <option className="font-inter text-grey text-sm lg:text-base" value="CA">Canada</option>
                <option className="font-inter text-grey text-sm lg:text-base" value="FR">France</option>
                <option className="font-inter text-grey text-sm lg:text-base" value="DE">Germany</option>
              </select>
              {/*======================================= select Dates ===========================================*/}
              <select id="date" class="appearance-none bg-white border cursor-pointer text-grey bg-no-repeat font-inter border-[#cfcfcf] rounded-[10px] px-2 lg:px-4 w-[157px] lg:w-[170px] md:w-[145px] xl:w-[220px] h-[45px] lg:h-[51px] relative">
                <option className="font-inter text-grey text-sm lg:text-base">Select Date</option>
                <option className="font-inter text-grey text-sm lg:text-base" value="US">16/3/24</option>
                <option className="font-inter text-grey text-sm lg:text-base" value="CA">17/3/24</option>
                <option className="font-inter text-grey text-sm lg:text-base" value="FR">18/3/24</option>
                <option className="font-inter text-grey text-sm lg:text-base" value="DE">19/3/24</option>
              </select>
              {/*======================================= select flight ===========================================*/}
              <div id="flight" class="bg-white border flex items-center justify-start cursor-pointer text-grey bg-no-repeat font-inter border-[#cfcfcf] rounded-[10px] px-2 lg:px-4 w-[157px] lg:w-[170px] md:w-[145px] xl:w-[220px] h-[45px] lg:h-[51px] relative">
                <p className="font-inter text-grey text-center text-sm lg:text-base">Your Flight</p>
              </div>

              <button class="rounded-[10px] flex items-center justify-center font-semibold font-inter lg:h-[59px] h-[45px] w-[109px] lg:w-[121px] overflow-hidden relative group cursor-pointer border-2 text-base border-extralightred bg-extralightred text-extralightred">
                <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span class="relative text-white text-center px-6 whitespace-nowrap transition duration-300 group-hover:text-extralightred ease">Find Now</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;