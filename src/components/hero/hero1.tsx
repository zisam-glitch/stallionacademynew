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
            src="https://res.cloudinary.com/db1i46uiv/video/upload/v1727813193/Sales_Product_Website_lpzrfh.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="relative mx-auto container  flex flex-col items-start justify-center  h-full text-white pt-[150px] px-4 md:px-8">
          <div className="md:w-2/4 w-full">
            <h1 className="md:text-[83px] text-[43px] font-bold leading-none mb-4">
              Stallion Dental Academy
            </h1>
            <p className="md:text-[20px] text-[17px] font-bold leading-tight text-[#ffffff80] mb-4">
              Transforming Dentistry Through Innovative Learning and
              Comprehensive Training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
