import HeroMessage from "../components/HeroMessage";
import { useTranslation } from "react-i18next";

export default function Intro() {
  const { t } = useTranslation();

  return (
    <section
      id="top"
      className="relative h-[729px] pt-[20px] pb-[10px] px-[50px] gap-[10px] flex items-end"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-w-full h-full object-cover z-0"
      >
        <source
          src="https://cdn.jsdelivr.net/gh/JuanFernandoCastaneda/video-cdn@master/Banner-Segundo-9mb.webm"
          type="video/mp4"
        />
        {t("intro.videoFallback")}
      </video>
      <div className="absolute top-0 left-0 w-full h-full z-2 bg-gradient-to-b from-[rgba(0,0,0,0)] from-0% via-[rgba(0,0,0,0.6)] via-60% to-[rgba(0,0,0,0.6)] to-100%"></div>
      <HeroMessage></HeroMessage>
    </section>
  );
}
