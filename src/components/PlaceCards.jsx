import React, { useState } from 'react';
import { DestinatgionCards } from './common/Helper';

const PlaceCards = () => {
    //=============== Defaulting the first card to be active ========================//
    const [selectedCard, setSelectedCard] = useState(0);

    //=============== Show additional content by default ========================//
    const [showAdditionalContent, setShowAdditionalContent] = useState(true);

    // ========================= onclick-function ============================//
    const handleCardClick = (index) => {
        if (selectedCard === index) {
            setSelectedCard(null);
            setShowAdditionalContent(false); // Hide additional content when card is unselected
        } else {
            setSelectedCard(index);
            setShowAdditionalContent(true); // Show additional content when card is selected
        }

    };

    return (
        <div className='max-w-[1164px] mx-auto px-4 md:px-3'>
            <div className='gap-6 flex items-center justify-center flex-wrap -mt-28 md:pb-[30px]'>
                {/*====================================== Cards ====================================*/}
                {DestinatgionCards.map((object, index) => (
                    <div key={index}>
                        <div className={`bg-white rounded-[12px] cursor-pointer shadow-CommonShadow ${selectedCard === index ? 'min-h-[535px] max-w-[558px] p-4 md:p-5' : 'max-w-[267px] p-4'}`}>
                            <img className={`w-full ${selectedCard === index ? 'max-w-[518px] h-[265px]' : 'max-w-[235px] h-[169px]'}`} src={object.DestinationImages} alt="DestinationImages" />
                            <h3 className={`font-inter text-black !leading-[121%] ${selectedCard === index ? 'text-xl md:text-[22px] lg:text-2xl font-medium mt-5' : 'text-base font-semibold mt-4'}`}>{object.Heading}</h3>

                            <p className={`font-inter font-normal text-[14px] sm:text-base text-primaryblack !leading-[150%] ${selectedCard === index ? 'mt-3' : 'mt-2'}`}>{object.Paragraph}</p>

                            {selectedCard === index && showAdditionalContent && (
                                <p className='font-inter font-normal text-[14px] sm:text-base text-primaryblack !leading-[150%]'>{object.HideParagraph}</p>
                            )}
                            {/*============================ ReadMoreBtn ==============================*/}
                            <button className="rounded-[10px] flex items-center mt-4 sm:mt-6 font-semibold font-inter h-[47px] w-[131px] overflow-hidden relative group cursor-pointer border text-base border-extralightred bg-white text-extralightred" onClick={() => handleCardClick(index)}>
                                <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-extralightred top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span class="relative text-extralightred text-center px-6 whitespace-nowrap transition duration-300 group-hover:text-white ease">{object.BtnText}</span>
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlaceCards;