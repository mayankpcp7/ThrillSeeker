import React from 'react';
import topUp from '../../assets/images/png/BackToTop.png';
import { useState } from 'react';

const BackToTop = () => {
    // State to hold the position to scroll to
    const [position, setPosition] = React.useState({ top: 0, left: 0 });
    // Effect to handle scrolling to the specified position
    React.useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        });
    });
    // State to manage visibility of the back-to-top button
    const [visibility, setVisibility] = React.useState(false);
    // Ref to store the back-to-top button element
    const scrollTop = React.useRef();
    // Effect to handle visibility of the back-to-top button based on scroll position
    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            // Show button if scrolled beyond 200px, otherwise hide
            window.scrollY > 200
                ? scrollTop.current.style.display = 'inline-block'
                : scrollTop.current.style.display = 'none';
        });
    });
    return (
        <>
            {/* Back-to-top button */}
            <span onClick={() => setPosition({ ...position, position: { top: 0, left: 0 } })} className="fixed bottom-[3%] right-[3%] z-40 hidden h-8 w-8 md:h-10 md:w-10 lg:h-14
             lg:w-14 cursor-pointer hover:scale-90 duration-300" ref={scrollTop}> <img className='w-100 d-flex' src={topUp} alt="topUp" /></span>
        </>
    );
};

export default BackToTop;