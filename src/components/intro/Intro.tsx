import HeroMessage from "./HeroMessage";
import Navbar from "./Navbar";

export default function Intro() {
  return (
    <section className="h-[729px] pt-[20px] pb-[10px] px-[50px] gap-[10px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.jsdelivr.net/gh/JuanFernandoCastaneda/video-cdn@master/bereshit.webm"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Navbar></Navbar>

      <HeroMessage></HeroMessage>
    </section>
  );
}
