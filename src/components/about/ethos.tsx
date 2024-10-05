export default function Service() {
  return (
    <section className=" bg-white py-[100px]">
      <div className="container text-black  mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center pb-14">
          <h2 className="font-mono font-light text-xl capitalize">
            Our Ethos{" "}
          </h2>
       
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
