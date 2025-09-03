import arrow from "@assets/arrow.png";
import { smoothScroll } from "@/utils/functions/scroll";
import { useTranslation } from "react-i18next";

export default function HeroMessage() {
  const { t } = useTranslation();

  return (
    <div className="relative z-10 md:min-h-[617px] gap-[10px] md:px-[70px] py-[100px] w-full flex items-end">
      <div className="min-h-[221px] max-w-[calc(100%-159px)]">
        <p
          className="min-h-[128px] w-full text-[48px] md:text-[64px] leading-[100%] text-[#FFFFFF]"
          style={{ fontFamily: "Nohemi-ExtraLight" }}
        >
          {t("heroMessage.title.line1")}{" "}
          <b style={{ fontFamily: "Nohemi-Regular" }}>
            {t("heroMessage.title.ai")}
          </b>
          <br />
          <b style={{ fontFamily: "Nohemi-Regular" }}>
            {t("heroMessage.title.line2")}
          </b>{" "}
          {t("heroMessage.title.line3")}
        </p>
        <div className="h-[48px]"></div>
        <div className="h-fit md:w-[407px] gap-[20px] flex flex-col md:flex-row md:items-center">
          <p
            className="text-white w-[245px] text-[14px]"
            style={{ fontFamily: "Satoshi-Medium" }}
          >
            {t("heroMessage.subtitle")}
          </p>
          <a
            href="#contact"
            className="w-[142px] text-[#0C0C10] p-[16px] bg-[#AEB9F2] rounded-[4px] h-full text-[14px] leading-[130%] text-center"
            onClick={(e) => smoothScroll(e, "#contact")}
            style={{ fontFamily: "Satoshi-Medium" }}
          >
            {t("heroMessage.cta")}
          </a>
        </div>
      </div>
      <img
        src={arrow}
        className="hidden md:block h-[335px] w-[159px] absolute right-0 top-1/2 -translate-y-1/2"
      ></img>
    </div>
  );
}
