export default function Service() {
  return (
    <section className=" bg-white mt-[750px] py-[100px]">
      <div className="container text-black mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center pb-14">
          <h2 className="font-mono font-light text-xl capitalize">
            12 month payment terms
          </h2>
          <a
            href="#"
            className="bg-[#171721] hidden w-[180px] md:flex justify-center    font-mono text-white py-[15px] px-[18px] rounded-[50px] hover:underline"
          >
            <div className="flex gap-4 items-center  justify-center">
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
                  fill="white"
                />
              </svg>
            </div>
          </a>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
          <div className="px-6 py-7 rounded-xl bg-[#f4f4f4]">
            <img
              className="h-12"
              src="https://res.cloudinary.com/db1i46uiv/image/upload/v1728642691/icons8-graph-80_dhvn9g.png"
              alt=""
            />
            <h3 className="text-[22px] leading-tight pt-4 pb-3">Modules</h3>
            <p className="text-[17px] leading-snug opacity-80]">6 Modules</p>
          </div>
          <div className="px-6 py-7 rounded-xl bg-[#f4f4f4]">
            <img
              className="h-12"
              src="https://res.cloudinary.com/db1i46uiv/image/upload/v1728643004/icons8-clock-80_eqc47i.png"
              alt=""
            />
            <h3 className="text-[22px] leading-tight pt-4 pb-3">
              Enhanced CPD
            </h3>
            <p className="text-[17px] leading-snug opacity-80 ">minimum 78</p>
          </div>
          <div className="px-6 py-7 rounded-xl bg-[#f4f4f4]">
            <img
              className="h-12"
              src="https://res.cloudinary.com/db1i46uiv/image/upload/v1728642789/icons8-location-80_wdmybo.png"
              alt=""
            />
            <h3 className="text-[22px] leading-tight  pt-4 pb-3">Location</h3>
            <p className="text-[17px] leading-snug opacity-80 ">
              London: March 2025
            </p>
          </div>

          <div className="px-6 py-7 rounded-xl bg-[#f4f4f4]">
            <img
              className="h-12"
              src="https://res.cloudinary.com/db1i46uiv/image/upload/v1728643274/icons8-dollar-80_llsuiw.png"
              alt=""
            />
            <h3 className="text-[22px] leading-tight pt-4 pb-3">
            Course fees


            </h3>
            <p className="text-[17px] leading-snug opacity-80 ">
            £8,340 plus £500 registratio
            </p>
          </div>
        </div>
        <a
          href="#"
          className="bg-[#171721] mt-14 md:hidden w-[90%] md:w-[300px] flex justify-center    font-mono text-white py-[15px] px-[18px] rounded-[50px] hover:underline"
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
        </a>
      </div>
    </section>
  );
}
