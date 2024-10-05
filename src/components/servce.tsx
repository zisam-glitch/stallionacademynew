import React from "react";

const VideoBackground = () => {
  return (
    <div className="relative h-full w-full">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/db1i46uiv/video/upload/v1727811656/swift-home-hero_f0t9lu.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content over the video */}
      <div className="relative z-10 flex py-[100px] container mx-auto md:px-8 px-4 h-full">
        <div className="">
          <div>
            <h2 className="font-mono text-white font-light text-xl capitalize">
              What We Offer
            </h2>
          </div>
          <div className=" text-white pt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl ">Variety of High Quality Courses </h2>
              <p className="pt-4 text-xl">
                Stallion Dental Academy—a one-stop destination for all your
                healthcare, industrial, and scientific needs. Our academy offers
                a wide range of courses, along with a comprehensive selection of
                supplies and equipment. Stay ahead with our up-to-date
                industrial knowledge, ensuring that we cater to your specific
                requirements. Discover the perfect solution for your
                professional growth and find all the resources you need at
                Stallion Dental Academy.
              </p>
            </div>
            <div>
              <h2 className="text-3xl ">Competitive, Intensive and Valuable</h2>
              <p className="pt-4 text-xl">
                Unlock your potential in dental implant placement with our
                competitive and intensive course at Stallion Dental Academy. Led
                by experienced professionals, this program equips you with
                essential skills for implant dentistry. Through hands-on
                training and advanced equipment, you’ll gain confidence to
                tackle complex cases. Elevate your career and join the ranks of
                successful implantologists today. Don’t miss this chance to
                enhance your dental implant skills.
              </p>
            </div>
          </div>
          <div className=" text-white pt-[56px]">
            <div>
              <h2 className="text-3xl ">Reliable Candidate Support </h2>
              <p className="pt-4 text-xl">
                We work in the health care industry, just like you. We take the
                time to get to know you, and we always keep your best interests
                in mind when adding and adjusting products in our catalog.
              </p>
            </div>
          </div>
          <div className=" mt-[56px]">
            <a
              href="#"
              className="bg-white md:w-[380px] w-full flex justify-center    font-mono text-[#171721] py-[15px] px-[18px] rounded-[50px] hover:underline"
            >
              <div className="flex gap-4 items-center justify-center">
                <p>See at our Company Activities </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="9"
                  viewBox="0 0 13 9"
                  fill="none"
                >
                  <path
                    d="M12.7279 4.5L5.22792 0.169873V8.83013L12.7279 4.5ZM0 5.25H5.97792V3.75L0 3.75L0 5.25Z"
                    fill="black"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Optional: Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0" /> */}
    </div>
  );
};

export default VideoBackground;
