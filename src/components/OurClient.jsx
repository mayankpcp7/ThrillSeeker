import React from "react";
import FemaleTourist from "../assets/images/webp/FemaleTourist.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { ClientContent } from "./common/Helper";
import { SliderNextbtn, SliderPrevbtn } from "./common/Icons";

const OurClient = () => {
  // Function to go to the next slide
  const nextarrow = () => {
    if (swiper.current && swiper.current.swiper) {
      swiper.current.swiper.slideNext();
    }
  };
  // Function to go to the previous slide
  const prevarrow = () => {
    if (swiper.current && swiper.current.swiper) {
      swiper.current.swiper.slidePrev();
    }
  };
  // Ref to access Swiper instance
  const swiper = React.useRef(null);
  // Function to handle Swiper initialization
  const onSwiper = (swiper) => {
    swiper.slides.forEach((slide, index) => {
      if (index === swiper.realIndex) {
        slide.classList.add("swiper-slide-center");
      } else {
        slide.classList.remove("swiper-slide-center");
      }
    });
  };

  return (
    <div className="pt-12 md:pt-[60px] lg:pt-20 xl:pt-[100px]"id="client">
      <div className="bg-[#fffcf6]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[1164px] mx-auto px-4 md:px-3 py-6 sm:py-10 md:py-12 lg:py-[55px]">
            <h2 className="font-inter text-[30px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-5xl font-bold flex items-center justify-center text-center !leading-[121%] mb-4">
              What Our Client Say
            </h2>
            <p className="font-inter text-[14px] sm:text-base font-normal mx-auto max-w-[570px] text-center text-secondaryblack leading-[150%] mb-4 sm:mb-6 md:mb-8 lg:mb-10">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <div className="flex items-center lg:flex-row flex-col justify-end gap-3 sm:gap-5 md:gap-7 xl:pt-5">
              <div className="max-w-[538px] w-full overflow-hidden border !border-none rounded-[20px] cursor-pointer shadow-TouristImageShadow">
                <img
                  className="hover:scale-[1.05] duration-300 max-w-[538px] w-full"
                  src={FemaleTourist}
                  alt="FemaleTourist"
                />
              </div>

              <div className="w-full !max-w-[558px]">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={1}
                  effect="fade"
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  ref={swiper}
                  navigation={{
                    prevEl: ".custom-arrow.prev",
                    nextEl: ".custom-arrow.next",
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper"
                  onSwiper={onSwiper}
                >
                  {ClientContent.map((obj, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <div className="flex flex-col">
                        <img className="w-[48px] sm:w-[60px] md:w-[70px] lg:w-[82px] mb-3 sm:mb-4 md:mb-5" src={obj.InvertedComa} alt="InvertComa"/>
                        <p className="font-inter font-normal text-[14px] sm:text-base leading-[150%] text-secondaryblack max-w-[558px]">{obj.Paragraph}</p>
                        <p className="font-inter font-medium text-base !leading-[121%] mt-4 text-black"> {obj.Name}</p>
                        <p className="font-inter font-medium text-base !leading-[121%] text-secondaryblack mt-1 sm:mt-2">{obj.Text}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-8 gap-3 flex">
                  <button className="z-[10]" onClick={prevarrow}><SliderPrevbtn /> </button>
                  <button className=" z-[10]" onClick={nextarrow}><SliderNextbtn /> </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
