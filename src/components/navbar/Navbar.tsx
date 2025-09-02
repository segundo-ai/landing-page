import { useState } from "react";
import logo32 from "@assets/logo_32_32.png";
import { navItems } from "@/utils/data/general/navbarItems";
import { WebNavbar } from "./WebNavbar";
import { MobileNavbar } from "./MobileNavbar";
import { smoothScroll } from "@/utils/functions/scroll";
import LanguageSelector from "@/components/navbar/LanguageSelector";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`fixed mt-[20px] right-[13px] left-[13px] medium-large:right-[50px] medium-large:left-[50px] z-20 h-[44px] medium-large:h-[72px] rounded-[40px] ${
        isMenuOpen && window.innerWidth < 768
          ? "bg-[rgba(0,0,0,0.9)]"
          : "bg-[rgba(0,0,0,0.6)]"
      } py-[10px] px-[23px] medium-large:px-[48px] flex justify-between backdrop-blur-[30px]`}
    >
      <div className="medium-large:h-[52px] medium-large:p-[10px] flex items-center z-10">
        <a
          className="h-[16px] medium-large:h-[32px] gap-[10px] flex flex-row items-center"
          href="#top"
          onClick={(e) => smoothScroll(e, "#top")}
        >
          <img
            src={logo32}
            className="rounded-[5px] size-[16px] medium-large:size-[32px]"
          ></img>
          <h1
            className="text-[16px] medium-large:text-[20px] text-[#CDD4F9]"
            style={{ fontFamily: "Satoshi-Bold" }}
          >
            Segundo
          </h1>
        </a>
      </div>
      {/** Navbar present when screen size greater or equal than sm*/}
      <WebNavbar navItems={navItems} />
      {/** Navbar and button present when screen size less than sm*/}
      <MobileNavbar
        navItems={navItems}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <LanguageSelector />
    </div>
  );
}
