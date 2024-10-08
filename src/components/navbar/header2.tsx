"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Topbar from "./topbar";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  return (
    <section>
      <header className="dark-header fixed top-[0px] w-full z-50 border-b-[0.5px] bg-white text-[#171721] transition-all duration-300">
        <div className="container mx-auto p-4 md:p-8 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="w-32">
            <img
              src="https://res.cloudinary.com/db1i46uiv/image/upload/v1727763685/logo-dark_uej3rc.png"
              alt="Logo"
            />
          </a>

          {/* Navigation Links */}
          <nav className="space-x-10 text-[17px] font-light hidden md:block">
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
              <button
                type="submit"
                className="bg-[#171721] font-mono text-white py-[15px] px-[24px] rounded-[50px] hover:underline"
              >
                <div className="flex gap-4 items-center justify-center">
                  <p>Contact</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="9"
                    viewBox="0 0 13 9"
                    fill="none"
                  >
                    <path
                      d="M12.7279 4.5L5.22792 0.169873V8.83013L12.7279 4.5ZM0 5.25H5.97792V3.75L0 3.75L0 5.25Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </button>
            </a>
          </nav>
        </div>
      </header>
    </section>
  );
}
