export default function Hero() {
  return (
    <section className=" bg-white py-[100px]  mt-[600px] md:mt-[850px]">
      <div className="container  mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="md:pb-0 pb-10">
          <h2 className="font-mono text-black font-light text-xl capitalize">
            What We Do
          </h2>
        </div>
        <div>
          <h1 className="md:text-5xl text-4xl text-black ">Excellence in Dental Training</h1>
          <p className="py-7  text-black text-lg  pr-0 md:pr-[80px]">
            Stallion Academy: Elevating dental professionals through
            comprehensive courses and continuous learning. Unlock your potential
            for success in dentistry. Elevating dental professionals through
            comprehensive courses and continuous learning. Unlock your potential
            for success in dentistry.
          </p>
          <div className=" mt-5">
            <a
              href="#"
              className="bg-[#171721] w-40 flex justify-center    font-mono text-white py-[15px] px-[18px] rounded-[50px] hover:underline"
            >
              <div className="flex gap-4 items-center justify-center">
                <p>About us</p>
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
        </div>
      </div>
     
    </section>
  );
}
