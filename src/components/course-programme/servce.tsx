import React from "react";

const VideoBackground = () => {
  return (
    <div className="relative h-full w-full">
      {/* Background Video */}
      <video
        className="absolute bg-black top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src=""
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content over the video */}
      <div className="relative z-10 flex py-[100px] container mx-auto md:px-8 px-4 h-full">
        <div className="">
          <div>
            <h2 className="font-mono text-white font-light text-xl capitalize">
              Certificate in Dental Implantology
            </h2>
          </div>

          <div className=" text-white pt-[56px]">
            <div>
              <h2 className="text-3xl ">
                A 1-year live patient course ideal for beginners or dentists
                with little experience placing implants or oral surgery, who
                wish to enhance their clinical skills and expand their treatment
                options.<br /><br />
              </h2>
              <p className="pt-4 text-xl">
                It covers the key aspects of dental implants to provide evidence
                based, safe and predictable treatment of participants own cases.
                The course consists of 13 modules delivered over 12-months, in
                the form of seminars, practical and live surgical sessions on
                your patients. <br /> <br />
                As a live patient course there is significant focus on patient
                selection, identifying suitable implant patients and how to
                create an optimum treatment plan using checklists and digital
                treatment planning tools. Delegates will grasp an in-depth
                knowledge of all the adjunct therapies and diagnostic tools to
                ensure that planning stages are comprehensive and thorough
                ensuring the patient journey is smooth and predictable.
                <br />
                <br />
                Practical aspects involve how to scrub and prepare the surgery
                for implant placement, pre-postoperative medication, anaesthetic
                techniques, basic surgical techniques including flap designs and
                suturing. Live surgery demonstrations and surgical techniques
                will also be practised and mastered on models under the
                supervision of our expert tutors. In addition, various
                components and treatment modalities will be covered in detail.
                Scroll down to view the full list of modules covered.
                <br />
                <br />
                The course also includes 7 live surgery sessions on patients,
                supervised by our expert mentors. Our head tutors and clinical
                mentors, with over 50 years of combined experience in implants,
                are highly skilled Implantologists. They provide mentorship and
                continuous support throughout your implant journey at Tipton
                Training.
                <br />
                <br />
                We pride ourselves on our mentorship schemes, which go above and
                beyond the course days. You can continue to attend additional
                days with patients or we offer in-house mentorship for delegates
                in practice.
          
              </p>
            </div>
          </div>
          <div className=" mt-[56px]">
            <a
              href="#"
              className="bg-white md:w-[180px] w-full flex justify-center    font-mono text-[#171721] py-[15px] px-[18px] rounded-[50px] hover:underline"
            >
              <div className="flex gap-4 items-center justify-center">
                <p>Enroll Now</p>
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
