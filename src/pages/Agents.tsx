import segundoLogoDarkBg from "../assets/logo_32_32_darkbg.png";
import bugIcon from "../assets/agent_vectors/bug.svg";
import crateIcon from "../assets/agent_vectors/crate.svg";
import documentIcon from "../assets/agent_vectors/document.svg";
import formIcon from "../assets/agent_vectors/form.svg";
import internetIcon from "../assets/agent_vectors/internet.svg";
import salesIcon from "../assets/agent_vectors/sales.svg";
import textCursorIcon from "../assets/agent_vectors/text_cursor.svg";
import warningIcon from "../assets/agent_vectors/warning.svg";

type AgentType = {
  title: string;
  icon: string;
  description: string;
};

const agents: AgentType[] = [
  {
    title: "Form Filling Agent",
    icon: formIcon,
    description: "automatically input data from your email inbox to your ERP",
  },
  {
    title: "Report Writing Agent",
    icon: textCursorIcon,
    description:
      "draft a 10+ page executive summary, analyzing a credit application",
  },
  {
    title: "Fraud Flagging Agent",
    icon: warningIcon,
    description:
      "compare your customers' IDs to their data and flag discrepancies",
  },
  {
    title: "Contract Analyst Agent",
    icon: documentIcon,
    description: "review a 100+ page contract and leave the red-lining to AI",
  },
  {
    title:
      "Analyze data, build predictive models, and automate back-office processes",
    icon: segundoLogoDarkBg,
    description: "",
  },
  {
    title: "Inventory Forecast Agent",
    icon: crateIcon,
    description:
      "analyze past orders and external trends to predict next 12 months sales",
  },
  {
    title: "Sales Outbound Agent",
    icon: salesIcon,
    description: "identify high-quality leads and automate introduction calls",
  },
  {
    title: "Anomaly Detection Agent",
    icon: bugIcon,
    description:
      "monitor production data and spot quality issues or machine failure early on",
  },
  {
    title: "Internet Scrapper Agent",
    icon: internetIcon,
    description:
      "search for social media mentions and categorize them by urgency",
  },
];

export default function Agents() {
  return (
    <section id="agents" className="md:min-h-[724px] p-[20px] md:p-[50px]">
      {/** On less than lg screens */}
      <div className="md:hidden flex flex-col gap-[15px]">
        <div className="flex flex-row justify-center items-center bg-[#AEB9F2]/50 px-[12px] py-[15px] gap-[11px] h-[98px] rounded-[4px]">
          <img src={agents[4].icon} className="size-[17px]"></img>
          <p
            className="text-[13px] leading-[100%] text-[#FFFFFF] text-center"
            style={{ fontFamily: "Nohemi-Regular" }}
          >
            {agents[4].title}
          </p>
        </div>
        <div className="flex overflow-x-auto pb-[10px] gap-[5px]">
          {agents
            .slice(0, 4)
            .concat(agents.slice(5))
            .map((agent) => {
              return (
                <div
                  key={crypto.randomUUID()}
                  className="flex flex-col rounded-[4px] px-[12px] py-[15px] gap-[11px] bg-[#131317] w-[200px] flex-shrink-0"
                >
                  <div className="size-[25px] bg-[#FFFFFF]/5 flex justify-center items-center rounded-[1px] aspect-1/1">
                    <img src={agent.icon} className="size-[11px]"></img>
                  </div>{" "}
                  <div className="grid grid-rows-2 gap-[11px]">
                    <p
                      className="text-[17px] leading-[100%] text-[#FBFBFB]"
                      style={{ fontFamily: "Satoshi-Light" }}
                    >
                      {agent.title}
                    </p>
                    <p
                      className="text-[10px] leading-[120%] text-[#777777]"
                      style={{ fontFamily: "Satoshi-Medium" }}
                    >
                      {agent.description}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/** On lg and bigger screens. There is a consideration on md vs lg screens on organizations and icon size. Otherwise it wouldn't fit*/}
      <div className="hidden md:grid grid-cols-3 grid-rows-3 gap-[10px]">
        {agents.map((agent, index) => {
          if (index !== 4) {
            return (
              <div
                key={crypto.randomUUID()}
                className="rounded-[8px] bg-[#131317] min-h-[190px] py-[28px] px-[22px] gap-[20px] flex flex-col lg:flex-row hover:shadow-md hover:shadow-[#AEB9F2]/50 transition-all duration-300 ease-in-out"
              >
                <div className="size-[56px] lg:size-[72px] bg-[#FFFFFF]/5 flex justify-center items-center rounded-[4px] aspect-1/1">
                  <img
                    src={agent.icon}
                    className="size-[28px] lg:size-[32px]"
                  ></img>
                </div>

                <div className="flex flex-col gap-[20px]">
                  <p
                    className="text-[32px] leading-[100%] text-[#FBFBFB]"
                    style={{ fontFamily: "Satoshi-Light" }}
                  >
                    {agent.title}
                  </p>
                  <p
                    className="text-[16px] leading-[120%] text-[#777777]"
                    style={{ fontFamily: "Satoshi-Medium" }}
                  >
                    {agent.description}
                  </p>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={crypto.randomUUID()}
                className="rounded-[8px] bg-[#AEB9F2]/50 min-h-[190px] py-[28px] px-[22px] gap-[20px] flex flex-col items-center justify-center hover:shadow-md hover:shadow-[#AEB9F2]/50 transition-all duration-300 ease-in-out"
              >
                <img
                  src={agent.icon}
                  className="h-[32px] w-[32px]"
                  alt="SegundoAI Logo"
                ></img>
                <p
                  className="leading-[100%] text-[24px] text-[#FFFFFF] text-center"
                  style={{ fontFamily: "Nohemi-Regular" }}
                >
                  {agent.title}
                </p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
