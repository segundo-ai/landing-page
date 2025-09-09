import santiPic from "../assets/founders/Santi_preferred.jpeg";
import josePic from "../assets/founders/Jose_preferred.jpeg";
import andresPic from "../assets/founders/Andres_preferred.jpeg";
import { useTranslation } from "react-i18next";

interface Founder {
  name: string;
  role: string;
  picture: string;
  history: string[];
}

export default function AboutUs() {
  const { t } = useTranslation();

  const founders: Founder[] = [
    {
      name: t("aboutUs.founders.jose.name"),
      role: t("aboutUs.founders.jose.role"),
      picture: josePic,
      history: t("aboutUs.founders.jose.history", {
        returnObjects: true,
      }) as string[],
    },
    {
      name: t("aboutUs.founders.santiago.name"),
      role: t("aboutUs.founders.santiago.role"),
      picture: santiPic,
      history: t("aboutUs.founders.santiago.history", {
        returnObjects: true,
      }) as string[],
    },
    {
      name: t("aboutUs.founders.andres.name"),
      role: t("aboutUs.founders.andres.role"),
      picture: andresPic,
      history: t("aboutUs.founders.andres.history", {
        returnObjects: true,
      }) as string[],
    },
  ];

  return (
    <section
      id="about-us"
      className="md:py-[50px] md:gap-[112px] md:flex md:flex-col px-[10px] md:px-[50px]"
    >
      <div className="w-full grid grid-cols-10">
        <div className="flex flex-col gap-[9px] p-[20px] md:p-0 mb-[15px] md:mb-0 md:gap-[16px] col-start-2 col-span-8">
          <h2
            className="text-[31px] md:text-[59px] leading-[125%] text-center text-[#FFFFFF]"
            style={{ fontFamily: "Satoshi-Regular" }}
          >
            {t("aboutUs.title")}
          </h2>
          <p
            className="text-[10px] md:text-[18px] leading-[160%] text-center text-[#FBFBFB]"
            style={{ fontFamily: "Satoshi-Regular" }}
          >
            {t("aboutUs.description")}
          </p>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-[15px] md:gap-[30px]">
        {founders.map((founder) => {
          return (
            <div
              key={crypto.randomUUID()}
              className="group duration-300 transition-all relative h-[279px] md:h-fit md:min-w-[15%] md:w-[33%] md:hover:w-[70%] md:hover:h-[626px] flex flex-col md:gap-[25px] justify-end md:hover:justify-end"
            >
              <img
                src={founder.picture}
                className="absolute h-full md:relative rounded-[8px] md:rounded-[20px] object-cover md:group-hover:absolute z-0 min-w-full md:h-[402px] md:group-hover:h-[626px]"
              ></img>
              {/**This is the gradient applied to the bottom text when hovered the image. */}
              <div className="absolute h-full md:h-0 top-0 left-0 md:group-hover:h-[626px] w-full z-1 bg-gradient-to-b from-[rgba(0,0,0,0)] from-5% to-[rgba(0,0,0,0.7)] to-100%"></div>
              <div
                className="transition-none relative z-10 flex flex-col gap-[15px] p-[20px] md:p-0 md:group-hover:p-[50px]"
                style={{ fontFamily: "Satoshi-Medium" }}
              >
                <p className="text-[19px] md:text-[24px] md:group-hover:text-[48px] text-[#E5E5E5] leading-[114%]">
                  {founder.name}
                </p>
                <p className="text-[10px] md:text-[14px] md:group-hover:text-[20px] text-[#E5E5E5] leading-[114%]">
                  {founder.role}
                </p>
                <div className="md:hidden md:leading-[120%] md:group-hover:inline md:leading-[120%] text-[10px] md:text-[16px] text-[#FBFBFB] p-[10px]">
                  <ul className="list-disc">
                    {founder.history.map((bullet) => {
                      return (
                        <li key={bullet}>
                          <p>{bullet}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
