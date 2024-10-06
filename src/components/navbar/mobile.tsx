// src/Hamburger.js
import React, { useState, useEffect } from "react";

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("overflow-hidden"); // Disable scroll
    } else {
      document.body.classList.remove("overflow-hidden"); // Enable scroll
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); // Clean up on unmount
    };
  }, [isActive]);

  return (
    <div className="flex">
      <div
        className={`flex flex-col justify-center cursor-pointer`}
        onClick={toggleHamburger}
      >
        <div
          className={`w-6 mb-[3px] h-[2px] bg-gray-800 transition-transform duration-300 ${
            isActive ? "rotate-45 translate-y-1" : ""
          }`}
        ></div>
        <div
          className={`w-6 mt-[3px] h-[2px] bg-gray-800 transition-transform duration-300 ${
            isActive ? "-rotate-45 -translate-y-1" : ""
          }`}
        ></div>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-[84px] h-[calc(100vh-83px)] left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-8 pt-12" >
          <div className="flex flex-col  gap-[10px] text-[30px]  ">
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/company-activities" className="hover:underline">
              Company Activities
            </a>
            <a href="/course-programme" className="hover:underline">
              Course Programme
            </a>
            <a href="/contact">
            Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
