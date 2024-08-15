"use client";
import Heading from "@/Components/Heading";
import PricingComp from "@/Components/PricingComp";
import { PricingDetails } from "@/Constans/constant";
import { pricingmode } from "@/Constans/type";
import { Mode } from "fs";
import React, { useState } from "react";

function Pricing_section() {
  // toggle between price
  const [Monthly, setMonthly] = useState<pricingmode>(true);
  const togglepricing = () => {
    setMonthly(!Monthly);
  };
  const tabstyle = `text-center px-3  py-1 font-medium tracking-wide cursor-pointer rounded-md  text-[14px] hover:shadow-md`;
  return (
    <section className="flex flex-col gap-8" id="pricing">
      <Heading title="Find a plan to power your projects" iscenterd />
      <ul className="max-w-[13rem]  flex flex-row justify-center items-center gap-1 bg-slate-800 rounded-lg mx-auto text-white tracking-wide capitalize px-2 py-1 ">
        <li
          onClick={togglepricing}
          className={`${tabstyle}  ${
            Monthly ? "bg-sky-700" : "bg-transparent"
          } `}
        >
          mounthly
        </li>
        <li
          onClick={togglepricing}
          className={` ${tabstyle}  ${
            Monthly ? "bg-transparent" : "bg-sky-700"
          }`}
        >
          annually
        </li>
      </ul>
      {/* start pricing component block */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {PricingDetails.map((block, index) => (
          <PricingComp key={index} {...block} mode={Monthly} />
        ))}
      </div>
    </section>
  );
}

export default Pricing_section;
