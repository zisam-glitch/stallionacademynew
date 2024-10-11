import { MdOutlineSlowMotionVideo } from "react-icons/md";

export default function Hero() {
  return (
    <section>
      <div className="fixed mb-[300px] top-0 -z-10 w-full h-[750px] bg-cover bg-center">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/db1i46uiv/video/upload/v1727901812/Untitled_design_1_vpgs9u.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="relative mx-auto container  flex flex-col items-start justify-center  h-full text-white pt-[150px] px-4 md:px-8">
          <div className="md:w-2/4 w-full">
            <h1 className="md:text-[83px] text-[43px] font-bold leading-none mb-4">
              Implant Course Programme{" "}
            </h1>
            <p className="md:text-[20px] text-[17px] font-bold leading-tight text-[#ffffff80] mb-6">
              1-Year 50% Theory, 50% Practical Implant Course for Beginners
              (Level 7 Certificate & Non-Level 7 Options Available)
            </p>
            <a href="/contact">
              <button
                type="submit"
                className="bg-white cursor-pointer   font-mono text-[#171721] py-[15px] px-[24px] rounded-[50px] hover:underline"
              >
                <div className="flex gap-4  items-center justify-center">
                  <MdOutlineSlowMotionVideo />
                  <p>Play Video</p>
                </div>
              </button>{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
