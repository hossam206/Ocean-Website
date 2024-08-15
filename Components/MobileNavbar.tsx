"use client";
import { Navbar_Links } from "@/Constans/constant";
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const MobileNavbar = () => {
  const [isOpen, setIsopen] = useState<Boolean>(false);
  const togglemenu = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <div
        className="flex md:hidden cursor-pointer md:cursor-none hover:text-sky-600 transition-all duration-300 text-2xl"
        onClick={togglemenu}
      >
        {!isOpen ? <RiMenu3Line /> : <IoClose />}
      </div>
      {isOpen && (
        <figure className="absolute origin-top top-20 right-4 bg-slate-800 rounded-lg w-auto transition-all duration-300 z-50   ">
          <nav
            className="flex flex-col items-center justify-center  w-full
         h-full    font-normal tracking-wide"
          >
            {Navbar_Links.map((link, index) => (
              <Link
                href={`#${link}`}
                key={index}
                onClick={togglemenu}
                className=" text-slate-100 
                px-6 py-2 
                capitalize w-full text-md tracking-wide cursor-pointer   text-sm
                rounded-md
                hover:bg-slate-700 hover:text-sky-700 transition-all duration-200 "
              >
                {link}
              </Link>
            ))}
          </nav>
        </figure>
      )}
    </>
  );
};

export default MobileNavbar;
