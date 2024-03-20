import React from "react";
import { OfferCard } from "./common/Helper";
const Bestoffers = () => {
  return (
    <>
      <div
        className="xl:pt-[150px] lg:py-25 md:py-20 sm:py-15 py-12 xl:pb-[109px]"
        id="trip"
      >
        <div className="max-w-[1164px] mx-auto md:px-3 px-4">
          <h2 className="text-center font-inter text-[30px] sm:text-[32px] md:text-[36px] !leading-[121%] lg:text-[40px] xl:text-5xl font-bold" data-aos="zoom-in" data-aos-duration="1500">
            Best Offers
          </h2>
          <p className="text-center leading-[120%] mb-1 font-inter text-base text-primaryblack pt-3">
            Check out our Top Rated Tours
          </p>
          {/*========================= Country Cards ================================*/}
          <div className="flex flex-wrap justify-center mt-4 -mx-3">
            {OfferCard.map((offer, index) => {
              return (
                <div className="lg:w-4/12 sm:w-5/12 w-full px-3" data-aos="zoom-in" data-aos-duration="1500" key={index}>
                  <div className="flex flex-col offer_card border-b-4  mx-auto sm:mx-0 lg:mt-9 mt-6 border-b-white rounded-[16px] max-w-[370px] lg:max-w-full  hover:border-b-4 hover:border-white hover:border-b-[#FC3C60]  transition-all duration-300  overflow-hidden">
                    <div className="lg:h-[229px] overflow-hidden">
                      <img
                        className="rounded-t-[16px] transition-all duration-300 scale_105 lg:max-w-[364px]"
                        src={offer.CountryImg}
                        alt="CountryImg"
                      />
                    </div>
                    <div className="flex overflow-hidden border border-t-0 rounded-b-[16px] border_none border-[#cccc] justify-between px-4 sm:pt-5 pt-3 pb-4 sm:pb-6">
                      <p className="text-black leading-[121%] font-inter text-xl font-medium">
                        {offer.Placename}
                      </p>
                      <p className="text-black font-inter text-base !leading-[121%] font-medium opacity-70">
                        {offer.Price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bestoffers;
