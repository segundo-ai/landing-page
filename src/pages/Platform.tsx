import { useState } from "react";
import mock1 from "../assets/mockups/1.jpg";

type Tab = {
  title: string;
  description: string;
  tabUrl: string;
};

const tabList: Array<Tab> = [
  {
    title: "Centralize Data",
    description:
      "Our engineering team will help you unify your company’s fragmented data (SAP, Hubspot, etc.) in our platform",
    tabUrl: mock1,
  },
  {
    title: "Create AI Agents",
    description:
      "Deploy LLM agents and ML models (anomaly, clustering, time-series, etc.) on top of your company’s data",
    tabUrl: mock1,
  },
  {
    title: "Build Workflows",
    description:
      "Automate mission-critical workflows by connecting AI agents with +50 tools",
    tabUrl: mock1,
  },
  {
    title: "Monitor Results",
    description:
      "Review agent logs to spot issues and fine-tune your workflows for the right results",
    tabUrl: mock1,
  },
  {
    title: "Boost Analytics",
    description:
      "Review agent logs to spot issues and fine-tune your workflows for the right results",
    tabUrl: mock1,
  },
];

export default function Platform() {
  const [openTab, setOpenTab] = useState(0);

  return (
    <section
      id="platform"
      className="bg-[#303040] rounded-[4px] md:rounded-0 md:bg-inherit p-[27px] md:p-[50px]"
    >
      <div className="md:p-[50px] md:bg-[#303040] md:rounded-[8px] flex flex-row md:rounded-[8px] gap-[27px] md:gap-[50px] items-center">
        <div className="md:basis-1/3 flex flex-col gap-[14px] md:gap-[25px]">
          <h2 className="md:text-[12px] text-[#FFFFFF]">
            OUR PLATFORM • OUR PLATFORM{" "}
          </h2>
          {tabList.map((tab, index) => (
            <div
              key={index}
              onClick={() => setOpenTab(index)}
              className={`flex flex-row gap-[11px] md:gap-[20px] ${
                openTab === index ? "text-[#FBFBFB]" : "text-[#ABABAB]"
              } border-t-1 border-[#656565] pt-[13px] md:pt-[25px] `}
            >
              <p
                className="text-[#FBFBFB] leading-[125%] text-[8px] md:text-[15px]"
                style={{ fontFamily: "Satoshi-Medium" }}
              >
                {index + 1}
              </p>
              <div className="md:gap-[10px] h-fit md:h-auto">
                <p
                  className={`${
                    openTab === index
                      ? "text-[19px] md:text-[36px]"
                      : "text-[13px] md:text-[24px]"
                  }  leading-[125%]`}
                  style={{
                    fontFamily:
                      openTab === index ? "Satoshi-Medium" : "Satoshi-Light",
                  }}
                >
                  {tab.title}
                </p>
                <p
                  className={` ${
                    openTab === index ? "block" : "hidden"
                  } text-[10px] md:text-[18px] leading-[160%]`}
                  style={{ fontFamily: "Satoshi-Light" }}
                >
                  {tab.description}
                </p>
                <img
                  className={`${
                    openTab === index ? "block" : "hidden"
                  } md:hidden size-full rounded-[4px] my-[13px] md:my-0 ml-[-13px] md:ml-0`}
                  src={tab.tabUrl}
                ></img>
              </div>
            </div>
          ))}
        </div>
        <img
          src={tabList[openTab].tabUrl}
          alt={tabList[openTab].title}
          className="hidden md:inline md:rounded-[10px] md:basis-2/3 md:w-full md:h-full"
        ></img>
      </div>
    </section>
  );
}
