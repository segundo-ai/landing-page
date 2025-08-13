import { useState } from "react";
import menuMaterial from "../assets/menu_material.svg";
import logo32 from "../assets/logo_32_32.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ["Platform", "Process", "About us", "FAQ", "Contact"];

  return (
    <div className="fixed mt-[20px] right-[50px] left-[50px] z-20 h-[44px] md:h-[72px] rounded-[40px] bg-[rgba(0,0,0,0.6)] py-[10px] px-[48px] flex justify-between">
      <div className="w-[173px] md:h-[52px] md:p-[10px] flex items-center">
        <a
          className="h-[16px] md:h-[32px] gap-[10px] flex flex-row items-center"
          href="#"
        >
          <img
            src={logo32}
            className="rounded-[5px] size-[16px] md:size-[32px]"
          ></img>
          <h1 className="text-[16px] md:text-[20px] text-[#CDD4F9]">Segundo</h1>
        </a>
      </div>
      {/** Navbar present when screen size greater or equal than sm*/}
      <nav
        className="flex items-center "
        style={{ fontFamily: "Satoshi-Regular" }}
      >
        <ul className="hidden md:flex flex-row text-white gap-[32px]">
          {navItems.map((item) => {
            return (
              <li key={crypto.randomUUID()}>
                <a>{item}</a>
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
        className={`left-0 top-[60px] rounded-[20px] px-[22px] py-[5px] bg-[#000000]/50 w-full absolute md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "" : "hidden"
        } `}
      >
        <nav
          className=" py-[5px] flex flex-col center gap-[32px] items-center z-10"
          style={{ fontFamily: "Satoshi-Medium" }}
        >
          {navItems.map((item) => (
            <a
              key={crypto.randomUUID()}
              href="#"
              className="text-[#FBFBFB] text-center w-full text-base rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
      {/** This div is the one that allows users to clic on any part of the page with the hamburger menu open to close it. */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`absolute -top-[20px] -left-[50px] z-19 w-[100vw] h-[100vh] md:hidden ${
          isMenuOpen ? "" : "hidden"
        } `}
      ></div>
    </div>
  );
}
