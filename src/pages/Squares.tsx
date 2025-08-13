import segundoLogo from "../assets/logo_32_32.png";

type AgentType = {
  title: string;
  icon: string;
  description: string;
};

const agents: AgentType[] = [
  {
    title: "Form Filling Agent",
    icon: "📝",
    description: "automatically input data from your email inbox to your ERP",
  },
  {
    title: "Report Writing Agent",
    icon: "📊",
    description:
      "draft a 10+ page executive summary, analyzing a credit application",
  },
  {
    title: "Fraud Flagging Agent",
    icon: "🚩",
    description:
      "compare your customers' IDs to their data and flag discrepancies",
  },
  {
    title: "Inventory Forecast Agent",
    icon: "🌐",
    description:
      "analyze past orders and external trends to predict next 12 months sales",
  },
  {
    title:
      "Analyze data, build predictive models, and automate back-office processes",
    icon: segundoLogo,
    description: "",
  },
  {
    title: "Sales Outbound Agent",
    icon: "🌐",
    description: "identify high-quality leads and automate introduction calls",
  },
  {
    title: "Anomaly Detection Agent",
    icon: "🌐",
    description:
      "monitor production data and spot quality issues or machine failure early on",
  },
  {
    title: "Internet Scrapper Agent",
    icon: "🌐",
    description:
      "search for social media mentions and categorize them by urgency",
  },
  {
    title: "Contract Analyst Agent",
    icon: "🌐",
    description: "review a 100+ page contract and leave the red-lining to AI",
  },
];

export default function Squares() {
  return (
    <section id="agents" className="md:min-h-[724px] p-[10px] md:p-[50px]">
      {/** On less than lg screens */}
      <div className="md:hidden flex flex-col gap-[15px]">
        <div className="grid grid-cols-2 grid-rows-2 pb-[10px] gap-[5px]">
          {agents.slice(0, 4).map((agent) => {
            return (
              <div
                key={crypto.randomUUID()}
                className="flex flex-col rounded-[4px] px-[12px] py-[15px] gap-[11px] bg-[#131317]"
              >
                <img src={agent.icon} className="size-[25px]"></img>
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
        <div className="flex flex-row justify-center items-center bg-[#AEB9F2]/50 px-[12px] py-[15px] gap-[11px] h-[98px] rounded-[4px]">
          <img src={segundoLogo} className="size-[17px]"></img>
          <p
            className="text-[13px] leading-[100%] text-[#FFFFFF] text-center"
            style={{ fontFamily: "Nohemi-Regular" }}
          >
            {agents[4].title}
          </p>
        </div>
        {/** This one is the same at the one with slice 0,4. TODO: Could be abstracted. */}
        <div className="grid grid-cols-2 grid-rows-2 pb-[10px] gap-[5px]">
          {agents.slice(5).map((agent) => {
            return (
              <div
                key={crypto.randomUUID()}
                className="flex flex-col rounded-[4px] px-[12px] py-[15px] gap-[11px] bg-[#131317]"
              >
                <img src={agent.icon} className="size-[25px]"></img>
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
                className="rounded-[8px] bg-[#131317] min-h-[201px] py-[28px] px-[22px] gap-[20px] flex flex-col lg:flex-row"
              >
                <img
                  src={agent.icon}
                  className="size-[56px] lg:size-[72px]"
                ></img>
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
                className="rounded-[8px] bg-[#AEB9F2]/50 min-h-[201px] py-[28px] px-[22px] gap-[20px] flex flex-col items-center justify-center"
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
