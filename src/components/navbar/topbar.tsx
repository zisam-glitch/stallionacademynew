export default function Topbar() {
  return (
    <div className="md:block hidden bg-white z-[10000] text-center"> {/* Increased z-index to ensure it stays above dark-header */}
      <p className="p-3 text-[#171721] text-xs font-mono">Looking for Implant Course 2024? Find them <a className="underline" href="">here</a></p>
    </div>
  );
}
