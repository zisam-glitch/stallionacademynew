export default function Hero() {
  return (
    <section className=" bg-white py-[100px] mt-[650px]  md:mt-[850px]">
      <div className="container text-black  mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="  font-light md:text-7xl text-3xl md:pb-0 pb-10 capitalize">
            Extraordinary people. Extraordinary service.
          </h2>
        </div>
        <div>
          <p className="pb-7  text-xl pr-0 md:pr-[80px]">
            At Stallion Dental Academy, we are dedicated to elevating dental
            professionals through world-class education and hands-on training.
            Our mission is to provide comprehensive courses that empower
            dentists with the knowledge, skills, and confidence to excel in
            their careers. <br /><br /> With a team of experienced mentors and access
            to cutting-edge equipment, we ensure every participant receives the
            highest quality training in implant dentistry and beyond. Whether
            you're advancing your career or expanding your practice, Stallion
            Dental Academy is committed to your success through continuous
            learning and support. <br /><br /> Join us on a journey of professional
            growth and innovation in dentistry.
          </p>
          <div className=" mt-5">
            <a
              href="#"
              className="bg-[#171721] w-80 flex justify-center    font-mono text-white py-[15px] px-[18px] rounded-[50px] hover:underline"
            >
              <div className="flex gap-4 items-center justify-center">
                <p>See Our Course Programme</p>
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
