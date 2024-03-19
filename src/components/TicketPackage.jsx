import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { TicketCard } from "./common/Helper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TicketPackage = () => {
  const [custemor, setcustemor] = useState(0);
  const [dailycustemor, setdailycustemor] = useState(0);
  const [teammember, setTeamMember] = useState(0);

  useEffect(() => {
    const intervals = [
      setInterval(() => {
        if (custemor < 150) {
          setcustemor((prevCustemor) => prevCustemor + 1);
        }
      }, 10),
      setInterval(() => {
        if (dailycustemor < 99) {
          setdailycustemor((prevDailyCustemor) => prevDailyCustemor + 1);
        }
      }, 10),
      setInterval(() => {
        if (teammember < 120) {
          setTeamMember((prevTeamMember) => prevTeamMember + 1);
        }
      }, 10),
    ];

    return () => {
      intervals.forEach(clearInterval);
    };
  }, [custemor, dailycustemor, teammember]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="py-12 md:py-[60px] lg:py-[80px] xl:pt-[100px] xl:pb-[121px]">
      <div className="max-w-[1136px] mx-auto px-4 md:px-3 ">
        <div className="flex flex-wrap gap-8 lg:gap-0 justify-center lg:justify-start -mx-3">
          <div className="w-full sm:w-10/12 lg:w-6/12 px-3">
            <h2 className="font-inter lg:text-start text-center text-[30px] text-black sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-5xl !leading-[121%] font-bold" data-aos="fade-right" data-aos-duration="1500">
              Our Ticket Package
            </h2>
            <p className="pt-4 lg:text-start lg:max-w-[490px] text-primaryblack font-inter" data-aos="fade-right" data-aos-duration="1500">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p>
            <button className="rounded-[10px] mx-auto lg:mx-0 mt-5 lg:mt-10 flex items-center font-semibold font-inter h-[50px] md:h-[59px] w-[125px] md:w-[131px] overflow-hidden relative group cursor-pointer border-2 text-base border-extralightred bg-extralightred text-extralightred">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative mx-auto text-white text-center whitespace-nowrap transition duration-300 group-hover:text-extralightred ease text-[14px] md:text-base">
                Read More
              </span>
            </button>
            <div className="flex justify-center lg:justify-start gap-5 sm:gap-0 flex-wrap mt-6">
              <div className="flex flex-col items-center sm:items-start sm:pe-6 sm:border-r border-[#cccc]" data-aos="fade-in" data-aos-duration="1500">
                <h4 className="text-black font-inter !leading-[169%] font-semibold text-2xl sm:text-[30px] lg:text-4xl">
                  {custemor}+
                </h4>
                <p className="text-primaryblack font-inter text-base !leading-[121%] pt-1">
                  Happy customer
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start sm:px-6 sm:border-r border-[#cccc]" data-aos="fade-in" data-aos-duration="1500">
                <h4 className="text-black font-inter !leading-[169%] font-semibold text-2xl sm:text-[30px] lg:text-4xl">
                  {dailycustemor}+
                </h4>
                <p className="text-primaryblack font-inter text-base !leading-[121%] pt-1">
                  Daily customer
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start  sm:ps-6" data-aos="fade-in" data-aos-duration="1500">
                <h4 className="text-black font-inter !leading-[169%] font-semibold text-2xl sm:text-[30px] lg:text-4xl">
                  {teammember}+
                </h4>
                <p className="text-primaryblack font-inter text-base !leading-[121%] pt-1">
                  Team member
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-6/12 w-full px-3 -mt-4" data-aos="zoom-in" data-aos-duration="1500">
            <Slider {...settings} className="">
              {TicketCard.map((ticket, index) => (
                <div key={index} className="p-4">
                  <div className="flex overflow-hidden ticketcard shadow-tourists max-w-[526px] flex-col ticketcard p-3 sm:p-6 rounded-[20px] items-center">
                    <div className="overflow-hidden rounded-[20px]">
                      <img
                        className="max-w-[478px] transition-all duration-300 w-full ticketimg"
                        src={ticket.MainImg}
                        alt="girlimg"
                      />
                    </div>
                    <h5 className="text-black font-inter text-xl sm:text-2xl mt-5 mb-2 !leading-[121%] font-medium capitalize">
                      {ticket.TicketType}
                    </h5>
                    <p className="text-center font-inter text-sm sm:text-base text-primaryblack max-w-[476px]">
                      {ticket.About}
                    </p>
                    <h6 className="text-black text-lg sm:text-xl font-inter mt-4 font-medium !leading-[150%]">
                      {ticket.Price}
                    </h6>
                    <a
                      className="mt-4 sm:mt-6 text-base leading-[121%] hover:text-black transition-all duration-300 font-semibold underline font-inter text-extralightred"
                      href="#BookNow"
                    >
                      {ticket.Link}
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketPackage;
