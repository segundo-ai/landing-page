import bgFadingToCenter from "@assets/bg-fading-to-center.jpg";
import arrow from "@assets/arrow.png";
import { platformsWeAreExperts } from "@utils/data/general/platformsWeAreExperts";
import { useTranslation } from "react-i18next";

export default function Explanation() {
  const { t } = useTranslation();

  return (
    <section className="md:min-h-[559px] gap-[40px] py-[50px] relative overflow-hidden">
      {/** This img is the bg. It was implemented like that instead of bg-image to translate without cropping*/}
      <img
        src={bgFadingToCenter}
        className="absolute inset-0 w-full h-[150%] z-0 "
      ></img>
      <div className="md:min-h-[459px] gap-[19px] md:gap-[35px] px-[30px] md:px-[113px] py-[33px] md:py-[62px] flex flex-col items-center relative">
        <div className="md:min-h-[126px] w-full flex flex-col md:flex-row justify-around">
          {/** Less than md*/}
          <div className="md:hidden flex justify-center">
            <img src={arrow} className="rotate-270 w-[19px] h-[40px]"></img>
          </div>
          {/** md and bigger sizes*/}
          <img
            src={arrow}
            className="rotate-180 w-[36px] h-[76px] hidden md:inline"
          ></img>
          <p
            className="leading-[113%] text-[30px] md:text-[56px] text-center text-[#FBFBFB]"
            style={{ fontFamily: "Satoshi-Regular" }}
          >
            {t("explanation.title")}
          </p>
          {/** md and bigger sizes*/}
          <img
            src={arrow}
            className=" w-[36px] h-[76px] hidden md:inline"
          ></img>
        </div>
        <div className="flex flex-wrap md:flex-nowrap flex-row items-center justify-center md:gap-[15px] lg:gap-[30px]">
          {platformsWeAreExperts.map((platform) => {
            return (
              <img
                key={platform.alt}
                src={platform.iconUrl}
                alt={platform.alt}
                className="basis-1/3 md:basis-auto w-[40px] md:w-[100px] lg:w-[125px] py-[8px] px-[5px] md:py-[15px] md:px-[10px]"
              ></img>
            );
          })}
        </div>
        <p
          className="w-[260px] md:w-[543px] text-white text-center text-[13px] md:text-[24px] leading-[130%]"
          style={{ fontFamily: "Satoshi-Regular" }}
        >
          {t("explanation.subtitle")}
        </p>
      </div>
    </section>
  );
}
