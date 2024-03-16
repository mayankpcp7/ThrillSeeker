import React from "react";

const TicketPackage = () => {
  return (
    <>
      <section className="pt-[100px] pb-[121px]">
        <div className="max-w-[1136px] mx-auto px-4 md:px-3 ">
          <div className="flex flex-wrap justify-center lg:justify-start -mx-3">
            <div className="w-full sm:w-10/12 lg:w-5/12 px-3">
              <h2 className=" font-inter lg:text-start text-center text-[30px] text-black sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-5xl font-bold">
                Our Ticket Package
              </h2>
              <p className="pt-4 text-black lg:text-start text-center opacity-70 font-inter">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy. 
              </p>
              <button class="rounded-[10px] mx-auto lg:mx-0 mt-10 flex items-center font-semibold font-inter h-[59px] md:h-[59px] w-[131px] overflow-hidden relative group cursor-pointer border-2 text-base border-extralightred bg-extralightred text-extralightred">
                <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span class="relative mx-auto text-white text-center whitespace-nowrap transition duration-300 group-hover:text-extralightred ease text-[14px] md:text-base">
                  Read More
                </span>
              </button>
                          <div className="flex flex-wrap">
                              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TicketPackage;
