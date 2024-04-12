import { FaHandHoldingHeart } from "react-icons/fa";
const DonateBtn = () => {
  return (
    <div
      className="fixed top-3/4 right-0 bg-orange-500 p-3 rounded-l-full shadow-md z-50 flex items-center justify-center gap-2 cursor-pointer"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }}
    >
      <FaHandHoldingHeart className="text-white transform scale-x-[-1] text-xl" />
      <span className="text-white font-semibold uppercase">Donate</span>
    </div>
  );
};

export default DonateBtn;
