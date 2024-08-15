// import icons
import { IoCheckmark } from "react-icons/io5";
// import component
import Buttons from "./Buttons";
import { Pricing_Details } from "@/Constans/type";

type PricingCompProps = Pricing_Details;
function PricingComp({
  title,
  Head,
  Monthlyprice,
  isMostpopular,
  AnyallyPrice,
  priceList,
  mode,
}: PricingCompProps) {
  return (
    <article
      
      className={`relative w-full py-6 px-4 flex flex-col space-y-4 lg:space-y-6 rounded-lg overflow-hidden ${
        isMostpopular
          ? "border-2 border-solid border-sky-700 bg-slate-800"
          : "border border-slate-700"
      }`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-white capitalize text-left font-bold text-sm tracking-wide padding-0">
          {title}
        </h1>
        {isMostpopular && (
          <p className="bg-sky-700 px-4 tracking-wide text-[11px] font-semibold  rounded-full text-white capitalize">
            Most popular
          </p>
        )}
      </div>
      <p className="text-[16px]">{Head}</p>
      <h1 className="text-white text-xl font-bold">
        ${mode ? Monthlyprice : AnyallyPrice}
        <span className="text-sm font-medium text-gray-400"> /month</span>
      </h1>
      <Buttons varient={isMostpopular ? "btn-primary" : "btn-secondary"}>
        Buy Blan
        {/* <MdOutlineArrowRightAlt className="text-white text-xl" /> */}
      </Buttons>
      <div>
        <ul className="flex flex-col space-y-6">
          {priceList.map((list, index) => (
            <li key={index} className="flex flex-row gap-2 leading-5">
              <small className="font-bold text-sky-600 text-lg block">
                <IoCheckmark />
              </small>
              {list}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default PricingComp;
