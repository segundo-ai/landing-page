import { smoothScroll } from "@utils/functions/scroll";
import type { NavItem } from "@utils/types/NavItem";

export const WebNavbar = ({ navItems }: { navItems: Array<NavItem> }) => {
  return (
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
  );
};
