import bgFadingToCenter from "../assets/bg-fading-to-center.jpg";
import arrow from "../assets/arrow.png";
import AnimatedIconList from "../components/animatedIconList/AnimatedIconList";
import { platformsWeAreExperts } from "../data/platformsWeAreExperts";

export default function Explanation() {
  return (
    <section className="sm:min-h-[559px] gap-[40px] py-[50px] relative overflow-hidden">
      {/** This img is the bg. It was implemented like that instead of bg-image to translate without cropping*/}
      <img
        src={bgFadingToCenter}
        className="absolute inset-0 w-full h-[150%] z-0 "
      ></img>
      <div className="sm:min-h-[459px] gap-[19px] md:gap-[35px] px-[30px] sm:px-[113px] py-[33px] sm:py-[62px] flex flex-col items-center relative">
        <div className="sm:min-h-[126px] w-full flex flex-col md:flex-row justify-around">
          {/** Less than md*/}
          <div className="md:hidden flex justify-center">
            <img src={arrow} className="rotate-270 w-[19px] h-[40px]"></img>
          </div>
          {/** md and bigger sizes*/}
          <img
            src={arrow}
            className="rotate-180 w-[36px] h-[76px] hidden md:inline"
          ></img>
          <p
            className="leading-[113%] text-[30px] md:text-[56px] text-center text-[#FBFBFB]"
            style={{ fontFamily: "Satoshi-Regular" }}
          >
            Automate complex workflows and <br />
            make better decisions
          </p>
          {/** md and bigger sizes*/}
          <img
            src={arrow}
            className=" w-[36px] h-[76px] hidden md:inline"
          ></img>
        </div>
        <div className="md:w-[578px] h-[77px]">
          <AnimatedIconList iconList={platformsWeAreExperts}></AnimatedIconList>
        </div>
        <p
          className="w-[260px] sm:w-[543px] text-white text-center text-[13px] md:text-[24px] leading-[130%]"
          style={{ fontFamily: "Satoshi-Regular" }}
        >
          WE CONNECT TO YOUR EXISTING SYSTEMS TO GIVE AI THE RIGHT CONTEXT
        </p>
      </div>
    </section>
  );
}
