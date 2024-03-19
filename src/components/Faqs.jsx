import React, { useState } from 'react'
import { FaqContent } from './common/Helper';
import LeftElippse from "../assets/images/webp/OurNewsletterLeftEllipse.webp"
import RightElippse from "../assets/images/webp/OurNewsletterRightEllipse.webp"

const Faqs = () => {
    //====================== accordion_Toggleaction ==============================//
    const [expandedIndex, setExpandedIndex] = useState(0);
    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };


    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Email validation regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim()) {
            setEmailError('Email address is empty');
        } else if (!emailPattern.test(email)) {
            setEmailError('Invalid email address');
        } else {
            // Clear email error and submit the form
            setEmailError('');
            console.log('Form submitted:', email);

            // Clear the email input field after submission
            setEmail('');
        }
    };


    return (
        <div className='max-w-[1440px] mx-auto relative mt-12 md:mt-[60px] lg:mt-20 xl:mt-[100px]' id='faq'>
            <div className='max-w-[1164px] px-5 md:px-3 mx-auto relative'>
                <h2 className='font-inter text-[30px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-5xl font-bold flex items-center justify-center text-center leading-[121%] mb-4'>Frequently Asked Questions</h2>
                <p className='font-inter text-[14px] sm:text-base font-normal mx-auto max-w-[557px] text-center text-primaryblack leading-[150%] mb-4 sm:mb-6 md:mb-8 lg:mb-10'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <div className='flex items-center justify-center flex-wrap z-10 relative'>

                    <div className='pb-12 md:pb-[60px] lg:pb-20 xl:pb-[100px]' data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300" data-aos-easing="linear" >
                        {/*================================== mapping in faqs ==========================================*/}
                        {FaqContent.map((faqitem, index) => (
                            <div key={index} className="pb-4 sm:pb-6 lg:w-[922px]">
                                <div className={`border border-solid border-[#cbcaca] rounded-[14px] md:rounded-[20px] px-4 md:px-[26px] faqbox bg-[#fefdfd] shadow-FaqShadow ${expandedIndex === index ? 'active' : ''}`}>
                                    <button
                                        type="button"
                                        className={`flex items-center justify-between w-full text-left text-lg md:text-xl leading-[140%] pt-[26px] ${expandedIndex === index ? 'pb-[0px]' : 'pb-[26px]'} !font-medium text-dark font-inter ${expandedIndex === index ? 'text-color' : ''}`}
                                        onClick={() => toggleAccordion(index)} aria-expanded={expandedIndex === index} aria-controls={`faqs-text-${index}`}>
                                        <span className={`pe-7 ${expandedIndex === index ? 'text-color1' : ''}`}>{faqitem.Title}</span>

                                        <svg className={`transform origin-center transition duration-200 ease-out ${expandedIndex === index ? 'rotate-180 svg-color' : 'svg-color'}`} width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.88369 9.63369C9.64928 9.86803 9.3314 9.99967 8.99994 9.99967C8.66848 9.99967 8.3506 9.86803 8.11619 9.63369L1.04494 2.56244C0.925553 2.44713 0.830325 2.3092 0.764814 2.1567C0.699302 2.00419 0.66482 1.84017 0.663377 1.67419C0.661935 1.50822 0.693562 1.34362 0.756414 1.19C0.819265 1.03638 0.912081 0.896812 1.02945 0.779446C1.14681 0.66208 1.28638 0.569264 1.44 0.506413C1.59362 0.443562 1.75822 0.411935 1.92419 0.413377C2.09017 0.41482 2.25419 0.449302 2.4067 0.514814C2.5592 0.580325 2.69713 0.675552 2.81244 0.79494L8.99994 6.98244L15.1874 0.79494C15.4232 0.567242 15.7389 0.441249 16.0667 0.444098C16.3944 0.446946 16.708 0.578406 16.9397 0.810167C17.1715 1.04193 17.3029 1.35544 17.3058 1.68319C17.3086 2.01093 17.1826 2.32669 16.9549 2.56244L9.88369 9.63369Z" fill="black" />
                                        </svg>
                                    </button>
                                    <div id={`faqs-text-${index}`} role="region" aria-labelledby={`faqs-title-${index}`}
                                        className={`grid text-base overflow-hidden transition-all duration-300 ease-in-out ${expandedIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden">
                                            <p className="pt-1 pb-[26px] text-tertiaryblack font-inter font-normal leading-[150%] md:ps-4 text-[14px] md:text-base max-w-[770px] ${expandedIndex === index ? 'text-color' : ''}">{faqitem.Content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/*====================================== Subscribe to Our Newsletter Card =======================================*/}
                    <div className='w-full shadow-common overflow-hidden bg-map bg-no-repeat bg-cover bg-center rounded-[15px] md:rounded-[28.5px] py-10 md:py-[63px] bg-white relative -mt-[100px] translate-y-[30%]'>
                        <img className='absolute top-0 left-0 w-[100px] sm:w-[140px] md:w-[160px] lg:w-[189px]' src={LeftElippse} alt="LeftElippse" />
                        <img className='absolute bottom-0 right-0 w-[100px] sm:w-[140px] md:w-[160px] lg:w-[189px]' src={RightElippse} alt="RightElippse" />
                        <div className='relative z-10 px-3'>
                            <h2 className='font-inter text-[30px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-5xl font-bold flex items-center justify-center text-center !leading-[120%]'>Subscribe to Our Newsletter</h2>
                            <p className='font-inter text-[14px] sm:text-base font-normal mx-auto max-w-[557px] text-center text-[#494949] !leading-[160%] mt-2 md:mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                            {/*========================================= form Validation =========================================*/}
                            <div className='relative'>
                                <form onSubmit={handleFormSubmit}>
                                    <div className='flex items-center justify-between gap-4 bg-white border border-white border-solid rounded-[10px] p-1.5 shadow-inputbox max-w-[512px] mx-auto mt-6 md:mt-10'>
                                        <input name='email' type="email" placeholder='Enter Your email address' value={email} onChange={handleInputChange}
                                            className='w-full outline-none font-inter font-normal text-[14px] sm:text-base !leading-[121%] text-[#8c8f91] ps-2 md:ps-5' />
                                        <button type="submit" className="rounded-[10px] flex items-center font-semibold font-inter h-[45px] min-w-[90px] md:h-[59px] md:min-w-[103px] overflow-hidden relative group cursor-pointer border-2 text-base border-extralightred bg-extralightred text-extralightred">
                                            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                            <span className="relative mx-auto text-white text-center whitespace-nowrap transition duration-300 group-hover:text-extralightred ease text-[14px] md:text-base">Submit</span>
                                        </button>
                                    </div>
                                    {emailError && <p className="text-red-500 absolute -bottom-6 left-0 sm:left-[16%] lg:left-[25%] xl:left-[28%] mt-2">{emailError}</p>}
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Faqs