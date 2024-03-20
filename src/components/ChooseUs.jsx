import React from "react";
import InsightIcon from "../assets/images/webp/InsightIcon.webp";
import PersonalService from "../assets/images/svg/HandIcon.svg";
import Assured from "../assets/images/webp/AssuredExcellenceIcon.webp";
const ChooseUs = () => {
  return (
    <>
      <section className="bg-choosebg xl:pt-10 xl:pb-9 lg:py-[100px] md:py-[80px] sm:py-[60px] py-[48px] bg-cover bg-center" id="aboutus">
        <div className="max-w-[1164px] mx-auto md:px-3 px-4">
          <h2 className="text-center font-inter text-[30px] !leading-[121%] text-white sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-5xl font-bold" data-aos="zoom-in" data-aos-duration="1500">Why Choose Us</h2>
          <p className="text-center !leading-[150%] font-inter text-base text-white max-w-[568px] mx-auto pt-2 lg:pt-4" data-aos="zoom-in" data-aos-duration="1500">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <div className="flex flex-wrap justify-center  mt-10 -mx-3">
            {/*============================ ChooseUs Cards ==================================*/}
            <div className="w-10/12 sm:w-6/12 md:w-4/12 p-3 lg:py-0" data-aos="zoom-in" data-aos-duration="1500">
              <div className="flex flex-col hover:bg-yellow rounded-[16px] sm:max-w-[364px] transition-all duration-300 p-3 lg:p-6 choose_card items-center justify-center h-full">
                <img className="h-[50px] w-[50px] choose_icons" src={InsightIcon} alt="InsightIcon" />
                <p className="text-white text-lg lg:text-2xl text_black font-medium pt-2 lg:pt-0 font-inter mt-2 lg:mt-4">Expert Insight</p>
                <p className="pt-2 lg:pt-3 text-white opacity-70 text_black font-normal font-inter text-center max-w-[316px] text-sm lg:text-base">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
              </div>
            </div>

            <div className="w-10/12 sm:w-6/12 md:w-4/12 p-3" data-aos="zoom-in" data-aos-duration="1500">
              <div className="flex flex-col hover:bg-yellow rounded-[16px] sm:max-w-[364px] transition-all duration-300 lg:p-6 p-3 choose_card items-center justify-center h-full">
                <img className="h-[50px] w-[50px] choose_icons" src={PersonalService} alt="PersonalService" />
                <p className="text-white text-lg lg:text-2xl text_black font-medium pt-2 lg:pt-0 font-inter mt-2 lg:mt-4">Personalized Service</p>
                <p className="pt-2 lg:pt-3 text-white opacity-70 text_black font-normal font-inter text-center max-w-[316px] text-sm lg:text-base">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum.</p>
              </div>
            </div>

            <div className="w-10/12 sm:w-6/12 md:w-4/12 p-3" data-aos="zoom-in" data-aos-duration="1500">
              <div className="flex flex-col hover:bg-yellow rounded-[16px] sm:max-w-[364px] transition-all duration-300 p-3 lg:p-6 choose_card items-center justify-center h-full">
                <img className="h-[50px] w-[50px] choose_icons" src={Assured} alt="Assured" />
                <p className="text-white text-lg lg:text-2xl text_black font-medium pt-2 lg:pt-0 font-inter mt-2 lg:mt-4">Assured Excellence</p>
                <p className="pt-2 lg:pt-3 text-white opacity-70 text_black font-normal font-inter text-center max-w-[316px] text-sm lg:text-base">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum.</p>
              </div>
            </div>

          </div>
          <button class="rounded-[10px] mx-auto flex items-center font-semibold font-inter h-[50px] md:h-[59px] mt-7 w-[125px] md:w-[139px] overflow-hidden relative group cursor-pointer border-2 text-base border-extralightred bg-extralightred text-extralightred">
            <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span class="relative text-white text-center mx-auto whitespace-nowrap transition duration-300 group-hover:text-extralightred ease">Book Today</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
