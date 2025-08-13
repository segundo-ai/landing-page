import styles from "./AnimatedIconList.module.css";

export type IconInfo = {
  iconUrl: string;
  alt: string;
  redirectionUrl?: string;
};

export default function AnimatedIconList({
  iconList,
}: {
  iconList: Array<IconInfo>;
}) {
  const duplicatedIcons = [...iconList, ...iconList];

  return (
    <div className="overflow-hidden px-[40px] h-[76px]">
      <div className="relative">
        {/* Scrolling container */}
        <div className={`flex ${styles.animateScroll}`}>
          {duplicatedIcons.map((icon, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[215px] h-full flex items-center justify-center"
            >
              <div className="px-[20px] py-[15px] text-gray-500 font-medium text-lg whitespace-nowrap hover:text-gray-700 transition-colors duration-300">
                <img
                  src={icon.iconUrl}
                  alt={icon.alt}
                  className="h-[46px] ratio-1/1"
                ></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
