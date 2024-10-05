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
        {/* <img  className="absolute top-0 left-0 w-full h-full object-cover" src="https://res.cloudinary.com/db1i46uiv/image/upload/v1727900754/Untitled_design_5_x6d6th.png" alt="" /> */}

        {/* Content */}
        <div className="relative mx-auto container  flex flex-col items-start justify-center  h-full text-white pt-[400px] px-4 md:px-8">
          <div className="md:w-2/4 w-full">
            <h1 className="md:text-[83px] text-[43px] font-bold leading-none mb-4">
              About Us
            </h1>
           
          </div>
        </div>
      </div>
    </section>
  );
}
