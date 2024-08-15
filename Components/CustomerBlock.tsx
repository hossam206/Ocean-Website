import { Customers_type } from "@/Constans/type";
import Image from "next/image";
// import icons
import { LuQuote } from "react-icons/lu";

type CustomerProps = Customers_type;
function CustomerBlock({ paragraph, img, name, Position }: CustomerProps) {
  return (
    <article className="flex flex-col items-center md:items-start space-y-3 rounded-md p-3 hover:bg-[#1e293b] transition-all duration-200">
      <span className="text-4xl font-bold text-sky-600 block py-4">
        <LuQuote />
      </span>
      <p className="text-center md:text-start">{paragraph}</p>
      <div className="flex flex-row items-start justify-center overflow-hidden space-x-2">
        <Image
          src={img}
          alt="customerLogo "
          width={42}
          height={42}
          className="rounded-full overflow-hidden"
        />
        <div className="flex flex-col items-start">
          <h3 className="text-white font-bold text-[14px] capitalize m-0 p-0">
            {name}
          </h3>
          <span className="text-[15px] capitalize text-sky-700 font-semibold">
            {Position}
          </span>
        </div>
      </div>
    </article>
  );
}

export default CustomerBlock;
