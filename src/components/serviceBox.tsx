export default function Service() {
  return (
    <section className=" bg-white py-[100px]">
      <div className="container   mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center pb-14">
          <h2 className="font-mono font-light text-xl capitalize">
            What You Get
          </h2>
          <a
            href="#"
            className="bg-[#171721] hidden w-[300px] md:flex justify-center    font-mono text-white py-[15px] px-[18px] rounded-[50px] hover:underline"
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
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
          <div className="px-6 py-7 rounded-xl bg-[#f4f4f4]">
            <img
              className="h-12"
              src="https://res.cloudinary.com/db1i46uiv/image/upload/v1727816137/Sales_Product_Website_uvr3qs.svg"
              alt=""
            />
            <h3 className="text-[22px] leading-tight pt-4 pb-3">
              Gain theoretical <br /> knowledge
            </h3>
            <p className="text-[17px] leading-snug opacity-80]">
              Learn key theoretical principles across restorative, operative
              and, dentistry as well as prosthodontics.
            </p>
          </div>
          <div className="px-6 py-7 rounded-xl bg-[#f4f4f4]">
            <img
              className="h-11  pb-1"
              src="https://res.cloudinary.com/db1i46uiv/image/upload/v1727894253/verified_1_ewipzv.png"
              alt=""
            />
            <h3 className="text-[22px] leading-tight pt-4 pb-3">
              Acquire practical <br /> skills{" "}
            </h3>
            <p className="text-[17px] leading-snug opacity-80 ">
              Master hands-on skills under the tutelage of our expert lecturers.
              Use them in a practice setting the next day.
            </p>
          </div>
          <div className="px-6 py-7 rounded-xl bg-[#f4f4f4]">
            <img
              className="h-12"
              src="https://res.cloudinary.com/db1i46uiv/image/upload/v1727894834/education_jejk5h.png"
              alt=""
            />
            <h3 className="text-[22px] leading-tight  pt-4 pb-3">
              Earn recognised <br /> qualifications
            </h3>
            <p className="text-[17px] leading-snug opacity-80 ">
              Earn a Master’s level 7 Certificate or Diploma. Both of them form
              a clear pathway to an MSc degree,
            </p>
          </div>

          <div className="px-6 py-7 rounded-xl bg-[#f4f4f4]">
            <img
              className="h-12"
              src="https://res.cloudinary.com/db1i46uiv/image/upload/v1727894944/grow-up_1_vyhmxy.png"
              alt=""
            />
            <h3 className="text-[22px] leading-tight pt-4 pb-3">
              Transform your <br /> career
            </h3>
            <p className="text-[17px] leading-snug opacity-80 ">
              Use your enhanced treatment portfolio and nationally recognised
              qualifications to fulfil your true potential.
            </p>
          </div>
        </div>
        <a
            href="#"
            className="bg-[#171721] mt-14 md:hidden w-[300px] flex justify-center    font-mono text-white py-[15px] px-[18px] rounded-[50px] hover:underline"
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
