import { useState } from "react";
import bgCenterIlluminated from "../assets/bg-fading-to-center.jpg";

export default function FAQ() {
  const [openItem, setOpenItem] = useState(0); // First item open by default

  const faqItems = [
    {
      question: "What is Segundo?",
      answer:
        "Segundo is an AI enterprise platform. We work with Fortune 500 companies, building AI backoffice automations and tools to improve decision-making. Our products are built on top of our intelligence platform and integrate with our customers' systems and data. To keep it short: we help companies get 10x ROI from AI adoption.",
    },
    {
      question: "What features does the platform include?",
      answer:
        "Our platform includes advanced AI automation tools, intelligent decision-making systems, seamless integration capabilities, and comprehensive analytics dashboards designed specifically for enterprise environments.",
    },
    {
      question: "Can Segundo help me build custom products?",
      answer:
        "Yes, we specialize in building custom AI solutions tailored to your specific business needs. Our team works closely with clients to develop bespoke products that integrate seamlessly with existing workflows and systems.",
    },
    {
      question: "How does Segundo manage data security?",
      answer:
        "Data security is our top priority. We implement enterprise-grade encryption, follow SOC 2 compliance standards, maintain strict access controls, and ensure all data processing meets industry-specific regulatory requirements.",
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
            FAQS
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
                    <p
                      className={`leading-[160%] text-[10px] md:text-[18px] text-[#ABABAB] text-wrap ${
                        openItem === index ? "block" : "hidden"
                      }`}
                      style={{ fontFamily: "Satoshi-Regular" }}
                    >
                      {item.answer}
                    </p>
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
