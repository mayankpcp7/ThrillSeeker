import React, { useState } from 'react'
import { FaqContent } from './common/Helper';

const Faqs = () => {

    const [expandedIndex, setExpandedIndex] = useState(0);

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className='max-w-[1440px] mx-auto xl:pb-6 relative mt-[100px] mb-[125px]' id='FAQ'>
            <div className='max-w-[1164px] px-5 md:px-3 mx-auto relative'>
                <h2 className='font-inter text-5xl font-bold flex items-center justify-center leading-[121%] mb-4'>Frequently Asked Questions</h2>
                <p className='font-inter text-base font-normal mx-auto max-w-[557px] text-center text-primaryblack leading-[150%] mb-10'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <div className='flex items-center justify-center flex-wrap z-10 relative'>
                    <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear" >
                        {/*================================== mapping in faqs ==========================================*/}
                        {FaqContent.map((faqitem, index) => (
                            <div key={index} className="pb-4 lg:w-[922px]">
                                <div className={`bg-white border border-solid border-[#cbcaca] rounded-[10px] ps-5 pe-6 input_card shadow-inputShadow ${expandedIndex === index ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        className={`flex items-center justify-between w-full text-left text-lg md:text-xl leading-[140%] pt-[16px] !font-medium text-dark font-inter ${expandedIndex ? "pb-[18px]" : "pb-[18px]"} ${expandedIndex === index ? 'text-color' : ''}`}
                                        onClick={() => toggleAccordion(index)} aria-expanded={expandedIndex === index} aria-controls={`faqs-text-${index}`}>
                                        <span className={`pe-7 ${expandedIndex === index ? 'text-color1' : ''}`}>{faqitem.title}</span>

                                        <svg className={`transform origin-center transition duration-200 ease-out ${expandedIndex === index ? 'rotate-180 svg-color' : 'svg-color'}`} width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L7.5 8L14 1" stroke="#000702" strokeWidth="2" />
                                        </svg>
                                    </button>
                                    <div id={`faqs-text-${index}`} role="region" aria-labelledby={`faqs-title-${index}`} className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${expandedIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden">
                                            <p className={`pb-4 text-dark opacity-70 font-inter font-normal text-base max-w-[760px] ${expandedIndex === index ? 'text-color' : ''}`}>{faqitem.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs