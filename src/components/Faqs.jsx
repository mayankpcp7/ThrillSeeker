import React, { useState } from 'react'
import { FaqContent } from './common/Helper';

const Faqs = () => {

    const [expandedIndex, setExpandedIndex] = useState(0);

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className='max-w-[1440px] mx-auto relative mt-[100px]' id='FAQ'>
            <div className='max-w-[1164px] px-5 md:px-3 mx-auto relative'>
                <h2 className='font-inter text-[30px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-5xl font-bold flex items-center justify-center text-center leading-[121%] mb-4'>Frequently Asked Questions</h2>
                <p className='font-inter text-[14px] sm:text-base font-normal mx-auto max-w-[557px] text-center text-primaryblack leading-[150%] mb-4 sm:mb-6 md:mb-8 lg:mb-10'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <div className='flex items-center justify-center flex-wrap z-10 relative'>

                    <div className='mb-[100px]' data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear" >
                        {/*================================== mapping in faqs ==========================================*/}
                        {FaqContent.map((faqitem, index) => (
                            <div key={index} className="pb-4 sm:pb-6 lg:w-[922px]">
                                <div className={`border border-solid border-[#cbcaca] rounded-[14px] md:rounded-[20px] px-4 md:px-[26px] input_card bg-[#fefdfd] shadow-FaqShadow ${expandedIndex === index ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        className={`flex items-center justify-between w-full text-left text-lg md:text-xl leading-[140%] pt-[26px] ${expandedIndex === index ? 'pb-[0px]' : 'pb-[26px]'} !font-medium text-dark font-inter ${expandedIndex === index ? 'text-color' : ''}`}
                                        onClick={() => toggleAccordion(index)} aria-expanded={expandedIndex === index} aria-controls={`faqs-text-${index}`}>
                                        <span className={`pe-7 ${expandedIndex === index ? 'text-color1' : ''}`}>{faqitem.title}</span>

                                        <svg className={`transform origin-center transition duration-200 ease-out ${expandedIndex === index ? 'rotate-180 svg-color' : 'svg-color'}`} width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.88369 9.63369C9.64928 9.86803 9.3314 9.99967 8.99994 9.99967C8.66848 9.99967 8.3506 9.86803 8.11619 9.63369L1.04494 2.56244C0.925553 2.44713 0.830325 2.3092 0.764814 2.1567C0.699302 2.00419 0.66482 1.84017 0.663377 1.67419C0.661935 1.50822 0.693562 1.34362 0.756414 1.19C0.819265 1.03638 0.912081 0.896812 1.02945 0.779446C1.14681 0.66208 1.28638 0.569264 1.44 0.506413C1.59362 0.443562 1.75822 0.411935 1.92419 0.413377C2.09017 0.41482 2.25419 0.449302 2.4067 0.514814C2.5592 0.580325 2.69713 0.675552 2.81244 0.79494L8.99994 6.98244L15.1874 0.79494C15.4232 0.567242 15.7389 0.441249 16.0667 0.444098C16.3944 0.446946 16.708 0.578406 16.9397 0.810167C17.1715 1.04193 17.3029 1.35544 17.3058 1.68319C17.3086 2.01093 17.1826 2.32669 16.9549 2.56244L9.88369 9.63369Z" fill="black" />
                                        </svg>
                                    </button>
                                    <div id={`faqs-text-${index}`} role="region" aria-labelledby={`faqs-title-${index}`}
                                        className={`grid text-base overflow-hidden transition-all duration-300 ease-in-out ${expandedIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden">
                                            <p className="pt-1 pb-[26px] text-black opacity-70 font-inter font-normal leading-[150%] md:ps-4 text-[14px] md:text-base max-w-[770px] ${expandedIndex === index ? 'text-color' : ''}">{faqitem.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='w-full border-solid border border-white shadow-SubscribeCardShadow overflow-hidden rounded-[28.5px] py-16'>
                        <h2 className='font-inter text-[30px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-5xl font-bold flex items-center justify-center text-center leading-[121%]'>Subscribe to Our Newsletter</h2>
                        <p className='font-inter text-[14px] sm:text-base font-normal mx-auto max-w-[557px] text-center text-primaryblack leading-[150%] mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>

                        <div className='flex items-center justify-between gap-4 bg-white border border-white border-solid rounded-[10px] p-1.5 shadow-InputBoxShadow max-w-[512px] mx-auto mt-10'>
                            <input type="email" placeholder='Enter Your email address' className='w-full outline-none font-inter font-normal text-base leading-[121%]' />
                            <button class="rounded-[10px] flex items-center font-semibold font-inter h-[59px] w-[126px] overflow-hidden relative group cursor-pointer border-2 text-base border-extralightred bg-extralightred text-extralightred">
                                <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span class="relative text-white text-center px-6 whitespace-nowrap transition duration-300 group-hover:text-extralightred ease">
                                    Book Now
                                </span>
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Faqs