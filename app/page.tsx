import Buttons from "@/Components/Buttons";
import FeatureBlock from "@/Components/FeatureBlock";
import Heading from "@/Components/Heading";

import {
  Comapines_Images,
  customers,
  Feature_Blocks,
  Feature_Comp,
} from "@/Constans/constant";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRightCircle } from "react-icons/hi2";
import { FaLongArrowAltRight } from "react-icons/fa";

import Pricing_section from "./Sections/Pricing_section";
import CustomerBlock from "@/Components/CustomerBlock";
import Footer from "@/Components/Footer";
export default function Home() {
  return (
    <main className="overflow-hidden pt-24 ">
      <div className="container relative">
        <Image
          src="/Images/bg.png"
          width={1920}
          height={1080}
          alt="bannerimg"
          className="absolute -top-20 -z-50 w-full min-h-screen left-0 opacity-10"
        />
        {/* Home Section */}
        <section className="relative">
          <div className="flex flex-col  items-center space-y-12 text-center">
            <div className="flex flex-col items-center  space-y-6">
              <p className="flex flex-row items-center gap-3 border  border-slate-700 px-10 py-1 rounded-3xl text-xs capitalize hover:border-sky-700 hover:bg-slate-800 transition-all duration-200 cursor-pointer shadow-md ">
                new feature is now avilable
                <HiArrowRightCircle />
              </p>
              <Heading title={"A CRM dashboard for engineering teams"} />
              <p className="text-sm tracking-wide max-w-[46rem] sm:text-lg sm:leading-8 leading-normal">
                Boost engineering team’s productivity with Ocean CRM dashboard
                that streamlines project management, collaboration, and
                data-driven decision-making.
              </p>
              <div className="flex gap-3 flex-col items-center justify-center md:flex-row">
                <Buttons varient="btn-primary">
                  get started
                  {/* <MdOutlineArrowRightAlt className="text-white text-xl" /> */}
                </Buttons>
                <Link href="#pricing">
                  <Buttons varient="btn-outline">View pricing</Buttons>
                </Link>
              </div>
            </div>
            <Image
              src="/Images/Hero-image.svg"
              width={670}
              height={370}
              alt="banner"
              className="mx-auto shadow-xl"
            />
          </div>
        </section>
        {/* Home Section */}
        {/* Compaines section */}
        <section className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4">
          {Comapines_Images.map((item, index) => (
            <Image
              key={index}
              src={item.img}
              alt={item.alt}
              width={200}
              height={200}
            />
          ))}
        </section>
        {/* Compaines section */}
        {/* Powerfull Feature */}
        <section className="flex flex-col space-y-10  md:gap-y-20 lg:gap-y-24">
          {/* part1 */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12 overflow-hidden">
            <Image
              src="/Images/bg2.png"
              alt="bg2Img"
              width={1920}
              height={1080}
              loading="lazy"
              className="absolute top-0 left-0 -z-50 w-full  opacity-10 "
            />
            <div className="flex flex-col space-y-4 item-center lg:items-start ">
              <Heading
                title={"Powerful features to  help you manage all your leads."}
              />
              <p className="text-[17px]    ">
                Apsum dolor sit amet consectetur. Aliquam elementum <br />
                elementum in ultrices. Dui maecenas ut eros turpis ultrices{" "}
                <br /> metus morbi aliquet vel.
              </p>
              <Buttons varient="btn-primary">get started</Buttons>
            </div>
            <div className="flex flex-col space-y-14 items-start">
              {Feature_Blocks.map((block, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center gap-6 hover:bg-slate-800 rounded-md 
                border-2 border-transparent hover:border-sky-600 py-3 px-6 transition-all duration-300 cursor-pointer"
                >
                  <Image
                    src={block.img}
                    alt="BlockImg"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col items-start gap-1">
                    <h3 className="text-slate-100 font-bold text-base tracking-wide">
                      {block.head}
                    </h3>
                    <p className="text-sm leading-6 ">{block.paragraph}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* part1 */}
        </section>
        {/* Powerfull Feature */}
        {/* Integrated section*/}
        <section className="py-10">
          <div className="flex flex-col items-center gap-20">
            {Feature_Comp.map((feature, index) => (
              <FeatureBlock key={index} {...feature} />
            ))}
          </div>
        </section>
        {/* Integrated section*/}
        {/* Pricing Section */}
        <Pricing_section />
        {/* Pricing Section */}
        {/* meet our customer */}
        <section id="testemoniles">
          <Heading title={"Meet our Customers."} iscenterd />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10">
            {customers.map((block, index) => (
              <CustomerBlock key={index} {...block} />
            ))}
          </div>
        </section>
        {/* meet our customer */}

        {/* Let’s try section */}
        <section
          className="lg:px-24 px-4 lg:py-12
        flex flex-col lg:flex-row justify-between items-center gap-6
        bg-slate-800 rounded-lg"
        >
          <div className="flex flex-col space-y-4 ">
            <Heading title={"Let’s try our service now!"} iscenterd />

            <p className="max-w-[599px] text-center md:text-start  ">
              Experience the power of Ocean CRM dashboard for engineering teams.
              Boost productivity and streamline collaboration. Get started
              today!
            </p>
          </div>

          <Buttons varient="btn-primary">
            Get started
            <FaLongArrowAltRight />
          </Buttons>
        </section>

        {/* Let’s try section */}
        {/* start footer */}
        <Footer />
        {/* start footer */}
      </div>
    </main>
  );
}
