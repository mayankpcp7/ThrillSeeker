import React from 'react'
import FooterLogo from "../assets/images/webp/FooterLogo.webp"
import { TwitterIcon, FacebookIcon, InstagramIcon } from './common/Icons';
const Footer = () => {
    const currentYear = new Date().getFullYear(); // Getting the current year

    return (
        <div className='bg-black relative z-0'>
            <div className='max-w-[1440px] mx-auto'>
                <div className='max-w-[1164px] mx-auto px-4 md:px-3'>

                    <div className='pt-[110px] md:pt-[125px] lg:pt-[158.84px] pb-6 sm:pb-8 md:pb-11 lg:pb-[58.58px]'>
                        {/*======================= Footer-logo =================================*/}
                        <a aria-label='Footer logo' href="#logo" className="flex items-end mx-auto max-w-[282px]">
                            <img className="max-w-[95px]" src={FooterLogo} alt="FooterLogo" />
                            <span className="flex flex-col -ms-8 mb-2">
                                <span className="font-barlow text-lightred font-semibold leading-[120%] text-[27px]">ThrillSeeker <span className="text-yellow">Tours</span></span>
                                <span className="font-barlow font-medium text-extralightred text-[7px] leading-[117%]">SLOGAN COMPANY HERE</span>
                            </span>
                        </a>
                        <p className="font-inter text-[14px] sm:text-base leading-[150%] text-[#b2b2b2] max-w-[494px] mx-auto mt-4 text-center">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
                        {/*========================== footer-links ============================*/}
                        <ul className="flex items-center justify-center flex-wrap mt-5 md:mt-6 lg:mt-[30px] gap-6 sm:gap-[30px]">
                            <li><a aria-label='home' href="#home" className="font-inter font-normal text-base leading-[121%] text-white hover:text-lightred duration-300">Home</a></li>
                            <li><a aria-label='Why choose us' href="#aboutus" className="font-inter font-normal text-base leading-[121%] text-white hover:text-lightred duration-300">About Us</a></li>
                            <li><a aria-label='What our client says' href="#discover" className="font-inter font-normal text-base leading-[121%] text-white hover:text-lightred duration-300">Discover</a></li>
                            <li><a aria-label='Best offers' href="#trip" className="font-inter font-normal text-base leading-[121%] text-white hover:text-lightred duration-300">Trip Plan</a></li>
                        </ul>
                        {/*========================== footer-icons ============================*/}
                        <div className="flex items-center justify-center flex-wrap gap-5 sm:gap-6 mt-5 md:mt-6 lg:mt-8 xl:mt-10">

                            <a target='_blank' href="https://www.instagram.com/"><InstagramIcon /></a>
                            <a target='_blank' href="https://www.facebook.com/"><FacebookIcon /></a>
                            <a target='_blank' href="https://twitter.com/"><TwitterIcon /></a>
                        </div>
                    </div>

                    <div className="bg-white opacity-35 h-[1px] w-full"></div>
                    {/*============================ copywrite text =================================*/}
                    <p className="font-inter font-normal text-[14px] sm:text-base leading-[121%] flex items-center justify-center text-[#b2b2b2] py-3 md:py-4 lg:px-5 xl:py-6">@Copyrights{currentYear}</p>

                </div>
            </div>
        </div>
    )
}

export default Footer