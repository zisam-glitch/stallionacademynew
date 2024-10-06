// src/Hamburger.js
import React, { useState, useEffect } from 'react';

const Hamburger = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleHamburger = () => {
        setIsActive(prev => !prev);
    };

    useEffect(() => {
        if (isActive) {
            document.body.classList.add('overflow-hidden'); // Disable scroll
        } else {
            document.body.classList.remove('overflow-hidden'); // Enable scroll
        }

        return () => {
            document.body.classList.remove('overflow-hidden'); // Clean up on unmount
        };
    }, [isActive]);

    return (
        <div className="flex">
            <div 
                className={`flex flex-col justify-center cursor-pointer`} 
                onClick={toggleHamburger}
            >
                <div className={`w-6 mb-[3px] h-[2px] bg-gray-800 transition-transform duration-300 ${isActive ? 'rotate-45 translate-y-1' : ''}`}></div>
                <div className={`w-6 mt-[3px] h-[2px] bg-gray-800 transition-transform duration-300 ${isActive ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </div>

            {/* Drawer */}
            <div className={`fixed top-[83px] h-[calc(100vh-82px)] right-0 w-full bg-white shadow-lg transform transition-transform duration-300 ${isActive ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4">
                    <h2 className="text-xl font-semibold">Menu</h2>
                    <ul className="mt-4">
                        <li className="py-2">Item 1</li>
                        <li className="py-2">Item 2</li>
                        <li className="py-2">Item 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Hamburger;
