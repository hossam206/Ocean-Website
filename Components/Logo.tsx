import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div>
      <Link href="/" className="flex items-end gap-2">
        <Image src="/Images/logo.png" alt="Navlogo " width={32} height={32} />
        <div className="relative">
          <h1 className="capitalize text-xl text-white tracking-wider font-bold">
            Ocean
          </h1>
          <div className="absolute bottom-1 -right-3 w-2 h-2 rounded-full bg-sky-700"></div>
        </div>
      </Link>
    </div>
  );
}

export default Logo;
