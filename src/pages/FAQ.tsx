import { useState } from "react";
import bgCenterIlluminated from "../assets/bg-fading-to-center.jpg";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { t } = useTranslation();
  const [openItem, setOpenItem] = useState(0); // First item open by default

  const faqItems = [
    {
      question: t("faq.items.whatIsSegundo.question"),
      answer: t("faq.items.whatIsSegundo.answer"),
    },
    {
      question: t("faq.items.platformFeatures.question"),
      answer: t("faq.items.platformFeatures.answer"),
    },
    {
      question: t("faq.items.customProducts.question"),
      answer: t("faq.items.customProducts.answer"),
    },
    {
      question: t("faq.items.dataSecurity.question"),
      answer: t("faq.items.dataSecurity.answer"),
    },
    {
      question: t("faq.items.technicalRequirements.question"),
      answer: t("faq.items.technicalRequirements.answer"),
    },
    {
      question: t("faq.items.cost.question"),
      answer: t("faq.items.cost.answer"),
    },
    {
      question: t("faq.items.ownAIProviders.question"),
      answer: t("faq.items.ownAIProviders.answer"),
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="relative px-[15px] py-[27px] md:p-[50px] gap-[5px] md:gap-[10px] overflow-hidden transition-all duration-300 ease-in-out"
    >
      {/** Only background aesthetics. */}
      <div className="absolute z-5 inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-0% to-[rgba(0,0,0,1)] to-100%"></div>
      <img
        src={bgCenterIlluminated}
        className="absolute inset-0 h-[250%] -translate-y-2/5 w-full z-0"
      ></img>
      {/** The content */}
      <div className="relative z-10 bg-[#303040]/50 px-[27px] pt-[27px] pb-[53px] md:px-[50px] md:pt-[50px] md:pb-[100px] rounded-[4px] md:rounded-[8px]">
        <div className="flex flex-col gap-[27px] md:gap-[50px]">
          <h2
            className="text-white text-center text-[32px] md:text-[59px] leading-[125%]"
            style={{ fontFamily: "Satoshi-Medium" }}
          >
            {t("faq.title")}
          </h2>
          <div className="flex flex-col gap-[11px] md:gap-[20px] md:px-[100px]">
            {faqItems.map((item, index) => (
              <>
                <div className="w-full border-t-1 border-[#656565]"></div>
                <div
                  onClick={() => toggleItem(index)}
                  key={crypto.randomUUID()}
                  className="flex flex-row gap-[11px] md:gap-[20px]"
                >
                  <p className="h-fit text-[13px] md:text-[24px] text-[#777777]/50">
                    +
                  </p>
                  <div className="gap-[3px] md:gap-[5px]">
                    <p
                      className="leading-[125%] text-[13px] md:text-[24px] text-[#FBFBFB]"
                      style={{ fontFamily: "Satoshi-Light" }}
                    >
                      {item.question}
                    </p>
                    <div
                      className={`leading-[160%] text-[10px] md:text-[18px] text-[#ABABAB] text-wrap ${
                        openItem === index ? "block" : "hidden"
                      }`}
                      style={{ fontFamily: "Satoshi-Regular" }}
                    >
                      {item.answer.split("\n").map((line, i) => (
                        <p key={i + line} className="">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ))}
            <div className="w-full border-t-1 border-[#656565]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
