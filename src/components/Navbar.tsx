import { useState } from "react";
import menuMaterial from "../assets/menu_material.svg";
import logo32 from "../assets/logo_32_32.png";

type NavItem = {
  name: string;
  path: string;
};

const navItems: NavItem[] = [
  { name: "Agents", path: "#agents" },
  { name: "Platform", path: "#platform" },
  { name: "Process", path: "#process" },
  { name: "About us", path: "#about-us" },
  { name: "FAQ", path: "#faq" },
  { name: "Contact", path: "#contact" },
];

export function smoothScroll(e: React.MouseEvent, scrollTo: string) {
  e.preventDefault();
  const el = document.querySelector(scrollTo);
  el?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed mt-[20px] right-[13px] left-[13px] md:right-[50px] md:left-[50px] z-20 h-[44px] md:h-[72px] rounded-[40px] ${
        isMenuOpen && window.innerWidth < 768
          ? "bg-[rgba(0,0,0,0.9)]"
          : "bg-[rgba(0,0,0,0.6)]"
      } py-[10px] px-[23px] md:px-[48px] flex justify-between backdrop-blur-[30px]`}
    >
      <div className="md:h-[52px] md:p-[10px] flex items-center z-10">
        <a
          className="h-[16px] md:h-[32px] gap-[10px] flex flex-row items-center"
          href="#top"
          onClick={(e) => smoothScroll(e, "#top")}
        >
          <img
            src={logo32}
            className="rounded-[5px] size-[16px] md:size-[32px]"
          ></img>
          <h1
            className="text-[16px] md:text-[20px] text-[#CDD4F9]"
            style={{ fontFamily: "Satoshi-Bold" }}
          >
            Segundo
          </h1>
        </a>
      </div>
      {/** Navbar present when screen size greater or equal than sm*/}
      <nav
        className="hidden md:flex items-center "
        style={{ fontFamily: "Satoshi-Regular" }}
      >
        <ul className="flex flex-row text-white gap-[32px] text-center items-center">
          {navItems.map((item) => {
            return (
              <li key={crypto.randomUUID()}>
                <a href={item.path} onClick={(e) => smoothScroll(e, item.path)}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      {/** Navbar and button present when screen size less than sm*/}
      <button onClick={toggleMenu} className="md:hidden h-[24px] w-[24px]">
        <img src={menuMaterial}></img>
      </button>
      <div
        className={`z-25  left-0 top-[60px] rounded-[20px] px-[22px] py-[5px] bg-[#000000]/90 w-full absolute md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "" : "hidden"
        } backdrop-blur-[30px]`}
      >
        <nav
          className=" py-[5px] flex flex-col center gap-[32px] items-center z-10"
          style={{ fontFamily: "Satoshi-Medium" }}
        >
          {navItems.map((item) => (
            <a
              key={crypto.randomUUID()}
              href={"javascript:void(0)"}
              data-scroll={item.path}
              className="text-[#FBFBFB] text-center w-full text-base rounded-md"
              onClick={(e) => {
                setIsMenuOpen(false);
                smoothScroll(e, item.path);
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      {/** This div is the one that allows users to clic on any part of the page with the hamburger menu open to close it. */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`absolute -top-[20px] -left-[13px] z-19 w-[100vw] h-[100vh] md:hidden ${
          isMenuOpen ? "" : "hidden"
        } `}
      ></div>
    </div>
  );
}
