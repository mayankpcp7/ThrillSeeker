import React, { useState } from 'react';
import { DestinatgionCards } from './common/Helper';

const PlaceCards = () => {
    const [selectedCard, setSelectedCard] = useState(0); // Defaulting the first card to be active
    const [showAdditionalContent, setShowAdditionalContent] = useState(true); // Show additional content by default

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
                {DestinatgionCards.map((object, index) => (
                    <div key={index}>
                        <div
                            className={`bg-white rounded-[12px] shadow-CommonShadow ${selectedCard === index ? 'min-h-[535px] max-w-[558px] p-5' : 'max-w-[267px] p-4'}`}
                            onClick={() => handleCardClick(index)}
                        >
                            <img className={`w-full ${selectedCard === index ? 'max-w-[518px] h-[265px]' : 'max-w-[235px] h-[169px]'}`} src={object.DestinationImages} alt="DestinationImages" />
                            <h3 className={`font-inter text-black !leading-[121%] ${selectedCard === index ? 'text-2xl font-medium mt-5' : 'text-base font-semibold mt-4'}`}>{object.Heading}</h3>

                            <p className={`font-inter font-normal opacity-70 text-base text-black !leading-[150%] ${selectedCard === index ? 'mt-3' : 'mt-2'}`}>{object.Paragraph}</p>

                            {selectedCard === index && showAdditionalContent && (
                                <p className='font-inter font-normal opacity-70 text-base text-black !leading-[150%]'>{object.HideParagraph}</p>
                            )}

                            <button
                                className="mt-6 rounded-[10px] flex items-center font-semibold font-inter h-[47px] min-w-[131px] overflow-hidden relative group cursor-pointer border text-base border-extralightred bg-transparent text-extralightred"
                                onClick={() => handleCardClick(index)}
                            >
                                <span className="relative mx-auto text-extralightred text-center whitespace-nowrap transition duration-300 group-hover:text-white ease text-[14px] md:text-base">{object.BtnText}</span>
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlaceCards;