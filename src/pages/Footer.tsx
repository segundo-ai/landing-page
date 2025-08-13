import OrganizationInfo from "../components/footer/organizationInfo";
import pexels from "../assets/pexels.jpg";
import SendMessage from "../components/footer/sendMessage";

export default function Footer() {
  return (
    <section id="contact" className="relative md:gap-[15px] ">
      <div className="relative h-[107px] md:h-[201px]">
        <div className="absolute z-5 inset-0 bg-gradient-to-b from-[rgba(0,0,0,1)] from-0% via-[rgba(0,0,0,0.1)] via-50% to-[rgba(0,0,0,1)] to-100%"></div>
        <img
          src={pexels}
          className="overflow-hidden h-[107px] md:h-[201px] w-full object-cover "
        ></img>
      </div>
      <SendMessage></SendMessage>
      <OrganizationInfo></OrganizationInfo>
    </section>
  );
}
