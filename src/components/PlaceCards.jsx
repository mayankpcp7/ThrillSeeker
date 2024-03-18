import React from 'react'
import MaldivesIsland from "../assets/images/webp/MaldivesIsland.webp"
import KarbiIsland from "../assets/images/webp/KarbiBeachThailand.webp"
import CliffMountainThailand from "../assets/images/webp/CliffMountainThailand.webp"

const PlaceCards = () => {
    return (
        <div className='max-w-[1164px] mx-auto px-4 md:px-3'>
            <div className='gap-6 flex items-center justify-center flex-wrap -mt-28 md:pb-[30px]'>

                <div className='max-w-[558px] bg-white rounded-[20px] shadow-CommonShadow p-5'>
                    <img className='max-w-[518px] w-full' src={MaldivesIsland} alt="MaldivesIsland" />
                    <h3 className='font-inter font-medium text-2xl text-black mt-5 !leading-[121%]'>Maldives-Island</h3>
                    <p className='font-inter font-normal opacity-70 text-base text-black mt-3 !leading-[150%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
                    <button class="mt-6 rounded-[10px] flex items-center font-semibold font-inter h-[47px] min-w-[131px] overflow-hidden relative group cursor-pointer border text-base border-extralightred bg-transparent text-extralightred">
                        <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-extralightred top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span class="relative mx-auto text-extralightred text-center whitespace-nowrap transition duration-300 group-hover:text-white ease text-[14px] md:text-base">Read More</span>
                    </button>
                </div>

                <div className='max-w-[267px] bg-white rounded-[12px] shadow-CommonShadow p-4'>
                    <img className='max-w-[235px] w-full' src={KarbiIsland} alt="KarbiIsland" />
                    <h3 className='font-inter font-medium text-base text-black mt-4 !leading-[121%]'>long-boat-blue-water</h3>
                    <p className='font-inter font-normal opacity-70 text-base text-black mt-2 !leading-[150%]'>It is a long established fact that a reader will distracted by</p>
                    <button class="mt-6 rounded-[10px] flex items-center font-semibold font-inter h-[47px] min-w-[131px] overflow-hidden relative group cursor-pointer border text-base border-extralightred bg-transparent text-extralightred">
                        <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-extralightred top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span class="relative mx-auto text-extralightred text-center whitespace-nowrap transition duration-300 group-hover:text-white ease text-[14px] md:text-base">Read More</span>
                    </button>
                </div>

                <div className='max-w-[267px] bg-white rounded-[12px] shadow-CommonShadow p-4'>
                    <img className='max-w-[235px] w-full' src={CliffMountainThailand} alt="CliffMountainThailand" />
                    <h3 className='font-inter font-medium text-base text-black mt-4 !leading-[121%]'>long-tail-boat-turquoise</h3>
                    <p className='font-inter font-normal opacity-70 text-base text-black mt-2 !leading-[150%]'>It is a long established fact that a reader will distracted by</p>
                    <button class="mt-6 rounded-[10px] flex items-center font-semibold font-inter h-[47px] min-w-[131px] overflow-hidden relative group cursor-pointer border text-base border-extralightred bg-transparent text-extralightred">
                        <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-extralightred top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span class="relative mx-auto text-extralightred text-center whitespace-nowrap transition duration-300 group-hover:text-white ease text-[14px] md:text-base">Read More</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default PlaceCards