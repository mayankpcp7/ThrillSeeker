import React from "react";
import { OfferCard } from "./common/OfferMap";
const Bestoffers = () => {
  return (
    <>
      <section className="xl:pt-[150px] lg:py-25 md:py-20 sm:py-15 py-12 xl:pb-[109px]">
        <div className="max-w-[1164px] mx-auto md:px-3 px-4">
          <h2 className="text-center font-inter text-[30px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-5xl font-bold">
            Best Offers
          </h2>
          <p className="text-center leading-[120%] font-inter text-base text-primaryblack pt-3">
            Check out our Top Rated Tours
          </p>
          <div className="flex flex-wrap justify-center mt-4 -mx-3">
            {OfferCard.map((offer) => {
              return (
                <div className="lg:w-4/12 sm:w-6/12 w-10/12 p-3" key={offer.id}>
                  <div className="flex flex-col offer_card border-b-4 lg:mt-6 border-b-white rounded-[16px]  hover:border-b-4 hover:border-white hover:border-b-[#FC3C60]  transition-all duration-300  overflow-hidden">
                    <div className="lg:h-[229px] overflow-hidden">
                      <img
                        className="rounded-t-[16px] transition-all duration-300 scale_105 lg:max-w-[364px]"
                        src={offer.countryimg}
                        alt="destination_pic"
                      />
                    </div>
                    <div className="flex overflow-hidden border border-t-0 rounded-b-[16px] border_none border-[#cccc] justify-between px-4 sm:pt-5 pt-3 pb-4 sm:pb-6">
                      <h4 className="text-black font-inter text-lg font-medium">
                        {offer.placename}
                      </h4>
                      <p className="text-black font-inter text-base opacity-70">
                        {offer.price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Bestoffers;
