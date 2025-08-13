import bgWaves from "../assets/bg-waves.png";
import arrow from "../assets/arrow.png";

interface ProcessStep {
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    title: "Diagnostic",
    description:
      "We get to know your team and identify the highest ROI opportunities for AI implementation",
  },
  {
    title: "Proof of Value",
    description:
      "We deploy a specific AI use case in less than 4 weeks to demonstrate our platform's value",
  },
  {
    title: "Data Integration",
    description:
      "We centralize your fragmented systems in our platform to give AI agents relevant context",
  },
  {
    title: "Build & Deploy",
    description:
      "We act as your strategic partner, building the highest ROI AI products for your team",
  },
  {
    title: "Maintenance",
    description:
      "We offer round-the-clock support so that your system keeps running seamlessly",
  },
];

export default function Process() {
  return (
    <section id="process">
      <div className="relative px-[17px] md:px-0">
        <img
          src={bgWaves}
          className="absolute inset-0 z-0 size-full blur-[30px]"
        ></img>
        <div className="z-5 bg-[#FFFFFF]/5 flex flex-col md:py-[70px] md:mx-[48px] gap-[5px] md:gap-[32px] ">
          <div className="flex flex-row justify-end z-10">
            <p
              className="leading-[130%] text-[44px] md:text-[64px] text-[#FFFFFF] "
              style={{ fontFamily: "Satoshi-Regular" }}
            >
              OUR PROCESS
            </p>
          </div>
          <div className="md:grid md:grid-cols-5 md:h-[454px] z-10">
            {processSteps.map((step, index) => {
              return (
                <div
                  key={crypto.randomUUID()}
                  className="px-[11px] md:px-[20px] h-[97px] md:h-[454px] pt-[11px] md:pt-[20px] grid grid-cols-4 grid-rows-1 md:flex md:flex-col md:justify-between border-1 border-[#FBFBFB]/10 gap-[20px] md:gap-0"
                >
                  <div className="col-start-2 row-start-1 col-span-3 md:min-w-auto flex md:flex-col xl:flex-row gap-[10px] md:gap-[20px]">
                    <img
                      src={arrow}
                      className="w-[13px] md:w-[25px] h-[28px] md:h-[53px] rotate-180 md:rotate-270 xl:rotate-180 md:ml-[15px] xl:ml-0"
                    ></img>
                    <div className="gap-[6px] md:gap-[10px] md:flex md:flex-col text-wrap">
                      <p
                        className="text-[13px] leading-[125%] md:text-[18px] lg:text-[24px] text-[#ABABAB]"
                        style={{ fontFamily: "Satoshi-Light" }}
                      >
                        {step.title}
                      </p>
                      <p
                        className="text-[10px] text-[#FBFBFB]/73 leading-[150%] md:text-[12px] lg:text-[15px]"
                        style={{ fontFamily: "Satoshi-Regular" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className="text-center row-start-1 col-start-1 w-[75px] md:w-auto md:h-[120px] lg:h-[180px] leading-[70%] md:leading-[120%] overflow-hidden text-[86px] md:text-[150px] lg:text-[250px] text-[#FFFFFF] md:flex md:flex-start"
                    style={{ fontFamily: "Satoshi-Regular" }}
                  >
                    <p>{index + 1}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
