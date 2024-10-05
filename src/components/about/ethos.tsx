export default function Service() {
  return (
    <section className=" bg-white py-[100px]">
      <div className="container   mx-auto px-8">
        <div className="flex justify-between items-center pb-14">
          <h2 className="font-mono font-light text-xl capitalize">
            Our Ethos{" "}
          </h2>
          {/* <a
              href="#"
              className="bg-[#171721] w-[300px] flex justify-center    font-mono text-white py-[15px] px-[18px] rounded-[50px] hover:underline"
            >
              <div className="flex gap-4 items-center justify-center">
                <p>View Our Course Programme </p>
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
            </a> */}
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="px-6 py-7 rounded-xl bg-[#f4f4f4]">
           
            <h3 className="text-[22px] leading-tight pt-4 pb-3">
            Our Mission
            </h3>
            <p className="text-[17px] leading-snug opacity-80]">
              To empower healthcare professionals with the skills and knowledge
              necessary for excellence in their fields, fostering continuous
              learning and growth.
            </p>
          </div>
          <div className="px-6 py-7 rounded-xl bg-[#f4f4f4]">
           
            <h3 className="text-[22px] leading-tight pt-4 pb-3">
            Our Vision 
            </h3>
            <p className="text-[17px] leading-snug opacity-80 ">
            To be a leading institution in dental education, known
                        for our commitment to innovation and the success of our
                        students.
            </p>
          </div>
          <div className="px-6 py-7 rounded-xl bg-[#f4f4f4]">
         
            <h3 className="text-[22px] leading-tight  pt-4 pb-3">
            Achievements
            </h3>
            <p className="text-[17px] leading-snug opacity-80 ">
             
            Established partnerships with industry experts to
                        enhance our curriculum. Launched comprehensive courses
                        tailored to healthcare needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
