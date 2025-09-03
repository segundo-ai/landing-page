import styles from "./AnimatedIconList.module.css";
import type { IconInfo } from "@utils/types/IconInfo";

export default function AnimatedIconList({
  iconList,
}: {
  iconList: Array<IconInfo>;
}) {
  const duplicatedIcons = [...iconList, ...iconList, ...iconList];

  return (
    <div className="overflow-hidden px-[40px] h-[80px] md:h-[105px]">
      <div className="relative ">
        {/* Scrolling container */}
        <div className={`flex ${styles.animateScroll} `}>
          {duplicatedIcons.map((icon) => (
            <div
              key={crypto.randomUUID()}
              className="flex-shrink-0 w-[80px] md:w-[150px]  flex items-center justify-center"
            >
              <div className="px-[10px] py-[2px] text-gray-500 font-medium text-lg whitespace-nowrap hover:text-gray-700 transition-colors duration-300">
                <img
                  src={icon.iconUrl}
                  alt={icon.alt}
                  className="h-[70px] md:h-[90px] ratio-1/1"
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
