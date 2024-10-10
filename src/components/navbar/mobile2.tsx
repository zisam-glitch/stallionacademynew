import React, { useState, useEffect } from "react";

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);
  const [topPosition, setTopPosition] = useState("39px");

  const toggleHamburger = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("overflow-hidden"); // Disable scroll
      const timer = setTimeout(() => {
        setTopPosition("0px"); // Move drawer to top after 3000ms
      }, 3000);

      return () => {
        clearTimeout(timer); // Clean up timeout on unmount or close
      };
    } else {
      setTopPosition("39px"); // Reset position when closed
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
          className={`w-6 mb-[3px] h-[2px] bg-white transition-transform duration-300 ${
            isActive ? "rotate-45 translate-y-1" : ""
          }`}
        ></div>
        <div
          className={`w-6 mt-[3px] h-[2px] bg-white transition-transform duration-300 ${
            isActive ? "-rotate-45 -translate-y-1" : ""
          }`}
        ></div>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 h-full left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ${
          isActive ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="text-black">
          <header className="w-full top-0 bg-white text-[#171721]">
            <div className="container mx-auto md:p-8 p-4 flex justify-between items-center">
              {/* Logo */}
              <a href="/" className="w-32">
                <img
                  src="https://res.cloudinary.com/db1i46uiv/image/upload/v1727763685/logo-dark_uej3rc.png"
                  alt=""
                />
              </a>
              <div className="md:hidden block">
                <div>
                  <div
                    className={`flex flex-col justify-center cursor-pointer`}
                    onClick={toggleHamburger}
                  >
                    <div
                      className={`w-6 mb-[3px] h-[2px] bg-black transition-transform duration-300 ${
                        isActive ? "rotate-45 translate-y-1" : ""
                      }`}
                    ></div>
                    <div
                      className={`w-6 mt-[3px] h-[2px] bg-black transition-transform duration-300 ${
                        isActive ? "-rotate-45 -translate-y-1" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="flex flex-col px-8 pt-12 gap-[10px] text-[30px]">
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/company-activities" className="hover:underline">
              Company Activities
            </a>
            <a href="/course-programme" className="hover:underline">
              Course Programme
            </a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
