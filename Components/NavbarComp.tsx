import Logo from "./Logo";
import { Navbar_Links } from "@/Constans/constant";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
function NavbarComp() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30">
      <div className="container flex flex-row justify-between items-center py-4">
        <Logo />
        {/* wide screen navabr */}
        <div className="hidden md:flex gap-4 items-center">
          {Navbar_Links.map((link, index) => (
            <Link
              href={`#${link}`}
              key={index}
              className="text-sm text-slate-100 capitalize font-medium tracking-wide hover:text-sky-700 transition-all duration-200 "
            >
              {link}
            </Link>
          ))}
        </div>
        {/* mobile navbar */}
        <MobileNavbar/>
      </div>
    </header>
  );
}

export default NavbarComp;
