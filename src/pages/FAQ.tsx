import { useState } from "react";
import bgCenterIlluminated from "../assets/bg-fading-to-center.jpg";

export default function FAQ() {
  const [openItem, setOpenItem] = useState(0); // First item open by default

  const faqItems = [
    {
      question: "What is Segundo?",
      answer:
        "Segundo is an AI enterprise platform. We work with Fortune 500 companies, building AI backoffice automations and tools to improve decision-making. Our products are built on top of our intelligence platform and integrate with our customers’ systems and data. To keep it short: we help companies get 10x ROI from AI adoption.",
    },
    {
      question: "What features does the platform include?",
      answer: `Our platform has multiple features, some of the main ones are: \n
        1. Data platform: centralize data from fragmented systems of record, such as SAP, AWS, Dynamics, Hubspot, Oracle, Salesforce, etc.  \n
        2. Agent builder: create agents for multiple business use cases, leveraging AI model providers, such as OpenAI, Anthropic, Google, etc. \n
        3. Workflow builder: integrate AI agents within complex, multi-step processes that require coordination and access to external tools \n
        4. Business intelligence: automate reports to analyze your company\’s data using AI, facilitating running queries on any of your systems of record  \n
        5. Tool builder: use no-code tools to build internal tools for your teams (ops, finance, etc.) that connect with your AI agents and workflows.`,
    },
    {
      question: "Can Segundo help me build custom products?",
      answer:
        "Yes! We see ourselves as your strategic partner. We will identify the highest ROI opportunities to build AI agents in your company. Once we do so, our forward deployed engineering team will take care of messy data integrations and build the products that you want. ",
    },
    {
      question: "How does Segundo manage data security?",
      answer:
        "Privacy and security are our #1 priority. We have strict data processing controls to avoid data training or retention, and we have strong protocols to track threats and vulnerabilities.",
    },
    {
      question: "Do I have to be technical to use Segundo?",
      answer:
        "Not at all. Our platform makes it easy to use drag-and-drop elements to map business processes and build complex AI agents and workflows. ",
    },
    {
      question: "How much does it cost?",
      answer:
        "We will do a free diagnostic to help you map out AI solutions that will have the highest ROI in your company. Once we do so, we will quote you a price to carry-out your data integrations and build use cases for your company. ",
    },
    {
      question: "Can I use my own AI model providers",
      answer:
        "Yes. You can provide your own LLM API keys directly in our agent builder. ",
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
