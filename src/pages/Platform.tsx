import { useState } from "react";
import datajob from "@assets/mockups/1. Data job - 2.jpg";
import agent from "@assets/mockups/2. Agent AI.jpg";
import workflows from "@assets/mockups/3. Workflow.jpg";
import monitor from "@assets/mockups/4. Agent observability-1.jpg";
import bi from "@assets/mockups/Business intelligence.jpg";
import expandArrowIcon from "@assets/expand_arrow.svg";

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
    tabUrl: datajob,
  },
  {
    title: "Create AI Agents",
    description:
      "Deploy LLM agents and ML models (anomaly, clustering, time-series, etc.) on top of your company’s data",
    tabUrl: agent,
  },
  {
    title: "Build Workflows",
    description:
      "Automate mission-critical workflows by connecting AI agents with +50 tools",
    tabUrl: workflows,
  },
  {
    title: "Monitor Results",
    description:
      "Review agent logs to spot issues and fine-tune your workflows for the right results",
    tabUrl: monitor,
  },
  {
    title: "Boost Analytics",
    description:
      "Review agent logs to spot issues and fine-tune your workflows for the right results",
    tabUrl: bi,
  },
];

export default function Platform() {
  const [openTab, setOpenTab] = useState(0);

  return (
    <section
      id="platform"
      className="bg-[#303040] rounded-[4px] lg:rounded-0 lg:bg-inherit p-[27px] lg:p-[50px]"
    >
      <div className="lg:min-h-[680px] lg:p-[50px] lg:bg-[#303040] lg:rounded-[8px] flex flex-row lg:rounded-[8px] gap-[27px] lg:gap-[50px] items-center">
        <div className="lg:basis-1/3 flex flex-col lg:justify-center gap-[14px] lg:gap-[25px]">
          <h2 className=" md:text-[12px] text-[#FFFFFF]">
            OUR PLATFORM • OUR PLATFORM{" "}
          </h2>
          {tabList.map((tab, index) => (
            <div
              key={index}
              onClick={() => setOpenTab(index)}
              onMouseEnter={() => {
                if (window.innerWidth >= 1024) setOpenTab(index);
              }}
              className={` flex flex-row gap-[11px] lg:gap-[20px] ${
                openTab === index
                  ? "text-[#FBFBFB] lg:min-h-[250px] xl:min-h-[200px]"
                  : "text-[#ABABAB]"
              } border-t-1 border-[#656565] pt-[13px] lg:pt-[25px] hover:text-white`}
            >
              <div className="lg:flex lg:flex-col lg:justify-center">
                <p
                  className="leading-[125%] text-[8px] md:text-[15px]"
                  style={{ fontFamily: "Satoshi-Medium" }}
                >
                  {index + 1}
                </p>
              </div>
              <div className="w-full lg:w-auto lg:gap-[10px] lg:flex lg:flex-col lg:justify-center h-fit lg:h-auto">
                <div className="flex flex-row justify-between lg:inline">
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
                  <div className="lg:hidden flex flex-row justify-center items-center size-[24px]">
                    <img
                      src={expandArrowIcon}
                      className="w-[13px] h-[7px]"
                    ></img>
                  </div>
                </div>
                <p
                  className={` ${
                    openTab === index ? "max-h-96" : "max-h-0 overflow-hidden"
                  }  text-[10px] md:text-[18px] leading-[160%]`}
                  style={{
                    fontFamily: "Satoshi-Light",
                    transition: openTab === index ? "max-height 1s ease" : "",
                  }}
                >
                  {tab.description}
                </p>
                <img
                  className={`${
                    openTab === index
                      ? "max-h-200 my-[13px] "
                      : "max-h-0 overflow-hidden"
                  } lg:hidden w-full rounded-[4px] ml-[-13px]`}
                  style={{
                    transition:
                      openTab === index
                        ? "max-height 0.3s ease-in-out"
                        : "0.3s ease-in-out",
                  }}
                  src={tab.tabUrl}
                ></img>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-row lg:justify-center lg:basis-2/3 lg:h-full ">
          <img
            src={tabList[openTab].tabUrl}
            alt={tabList[openTab].title}
            className=" lg:rounded-[10px] lg:h-full"
          ></img>
        </div>
      </div>
    </section>
  );
}
