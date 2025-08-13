import completeLogo from "../../assets/logo_full.png";
import bgCenterIlluminated from "../../assets/bg-fading-to-center.jpg";

export default function OrganizationInfo() {
  const copyrightInfo = [
    "©",
    "2025 Segundo AI",
    "|",
    "|",
    "All rights reserved",
  ];

  return (
    <div className="relative flex flex-col justify-end h-[218px] md:h-[408px] overflow-hidden pb-[30px] md:pb-[50px]">
      <img
        src={bgCenterIlluminated}
        className="absolute inset-0 h-[250%] w-full z-0"
      ></img>
      <div className="z-10 gap-[8px] md:gap-[16px] flex flex-col items-center">
        <img
          src={completeLogo}
          className="w-[212px] h-[42px] md:w-[397px] md:h-[78px]"
          alt="SegundoAI logo"
        ></img>
        <div
          className="gap-[8px] md:gap-[16px] text-[10px] md:text-[14px] leading-[24%] text-[#FFFFFF] flex flex-row"
          style={{ fontFamily: "Satoshi-Regular" }}
        >
          {copyrightInfo.map((phrase) => {
            return <p>{phrase}</p>;
          })}
        </div>
        <p
          className="text-[10px] md:text-[14px] text-[#777777] text-center"
          style={{ fontFamily: "Satoshi-Regular" }}
        >
          539 Avenida Ejercito Nacional, Granada, Miguel <br />
          Hidalgo, 11520 Ciudad de México, CDMX
        </p>
      </div>
    </div>
  );
}
