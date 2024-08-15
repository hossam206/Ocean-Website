import Logo from "./Logo";
// import icons
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { ReactNode } from "react";
import { footerLinks } from "@/Constans/constant";
function Footer() {
  const social_Links: ReactNode[] = [
    <LuFacebook key="f" />,
    <FaInstagram key="m" />,
    <FaGithub key="g" />,
    <FiTwitter key="t" />,
    <FiYoutube key="y" />,
  ];

  // get the year
  const Currentyear = new Date().getFullYear();
  return (
    <footer className="pt-40 pb-4" id="contact">
      <div className="grid grid-cols-12 mb-12 gap-8">
        <div className="col-span-12 lg:col-span-4 flex flex-col md:items-center lg:items-start gap-4 lg:gap-6">
          <Logo />
          <p>
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
          <ul className="flex flex-row space-x-4">
            {social_Links.map((social) => (
              <li className=" social_Link">{social}</li>
            ))}
          </ul>
        </div>
        {footerLinks.map((col, index) => (
          <div key={index} className="col-span-6 lg:col-span-2">
            <h3 className="text-white mb-4 capitalize">{col.title}</h3>
            <ul className="flex flex-col space-y-3 text-[16px]">
              {col.Links.map((link, index) => (
                <li
                  key={index}
                  className="hover:text-sky-600 hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t  border-solid border-slate-700 py-3 flex flex-row justify-center lg:justify-start text-sm lg:text-xl">
        <p>{`©${Currentyear}  Hossam Mohamed. all rights reserved.`}</p>
      </div>
    </footer>
  );
}

export default Footer;
