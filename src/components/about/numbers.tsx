export default function Service() {
  return (
    <section className=" bg-white border-t border-black py-[100px]">
      <div className="container text-black mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
          <div className=" ">
            <h2 className="text-[48px] w- flex tracking-tight ">6,000</h2>
            <div className=" w-[120px] pt-[8px] border-b border-b-black	"></div>
            <h3 className="text-[21px] opacity-70 font-mono leading-tight pt-7 pb-3">
              DENTISTS
            </h3>
            <p className="text-xl leading-snug opacity-70">
              We’re trusted by a vast network of dental professionals for our
              reliability, quality, and expertise.
            </p>
          </div>
          <div className=" ">
            <h2 className="text-[48px] w- flex tracking-tight ">98%</h2>
            <div className=" w-[90px] pt-[8px] border-b border-b-black	"></div>
            <h3 className="text-[21px] opacity-70 font-mono leading-tight pt-7 pb-3">
              QUALITY SCORE
            </h3>
            <p className="text-xl leading-snug opacity-70">
              Through rigorous quality control measures, advanced technology,
              and the expertise of our skilled technicians, we consistently
              produce dental products of the highest standard.
            </p>
          </div>
          <div className=" ">
            <h2 className="text-[48px] w- flex tracking-tight ">250,000</h2>
            <div className=" w-[180px] pt-[8px] border-b border-b-black	"></div>
            <h3 className="text-[21px]  opacity-70 font-mono leading-tight pt-7 pb-3">
              CASES COMPLETED
            </h3>
            <p className="text-xl leading-snug opacity-70">
              In 2023 we put smiles on the faces of 250,000 patients. <br /><br /> We’re
              happy go the extra mile to deliver extraordinary service and
              exceptional results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
