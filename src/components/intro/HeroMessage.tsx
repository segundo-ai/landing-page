export default function HeroMessage() {
  return (
    <div className="min-h-[617px] gap-[10px] sm:px-[70px] py-[100px] relative flex items-end">
      <div className="min-h-[221px] w-[941px] max-w-[calc(100%-159px)] ">
        <p className="min-h-[128px] w-full text-[48px] sm:text-[64px] leading-[100%] text-[#FFFFFF]">
          THE AI <br /> <b>ENTERPRISE</b> PLATFORM
        </p>
        <div className="h-[48px]"></div>
        <div className="h-[45px] w-[407px] gap-[20px] flex flex-col sm:flex-row sm:items-center">
          <p
            className="text-white w-[245px] text-[14px]"
            style={{ fontFamily: "Satoshi-Medium" }}
          >
            DEPLOY AI AGENTS ACROSS YOUR ORGANIZATION, DRIVING 10X ROI
          </p>
          <button
            className="w-[142px] text-[#0C0C10] p-[16px] bg-[#AEB9F2] rounded-[4px] h-full text-[14px] leading-[93%]"
            style={{ fontFamily: "Satoshi-Medium" }}
          >
            BOOK A DEMO
          </button>
        </div>
      </div>
      <img className="hidden md:inline bg-white h-[335px] w-[159px] absolute right-0 top-1/2 -translate-y-1/2"></img>
    </div>
  );
}
