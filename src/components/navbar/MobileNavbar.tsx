import type { NavItem } from "@utils/types/NavItem";
import menuMaterial from "@assets/menu_material.svg";
import { smoothScroll } from "@utils/functions/scroll";

export const MobileNavbar = ({
  navItems,
  setIsMenuOpen,
  isMenuOpen,
}: {
  navItems: Array<NavItem>;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  isMenuOpen: boolean;
}) => {
  return (
    <>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden h-[24px] w-[24px]"
      >
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
        className={`fixed -top-[20px] -left-[13px] z-19 w-[100vw] h-[100vh] md:hidden ${
          isMenuOpen ? "" : "hidden"
        } `}
      ></div>
    </>
  );
};
