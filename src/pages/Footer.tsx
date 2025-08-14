import OrganizationInfo from "../components/footer/OrganizationInfo";
import pexels from "../assets/pexels.jpg";
import Contact from "../components/footer/Contact";

export default function Footer() {
  return (
    <section id="footer" className="relative md:gap-[15px] ">
      <div className="relative h-[107px] md:h-[201px]">
        <div className="absolute z-5 inset-0 bg-gradient-to-b from-[rgba(0,0,0,1)] from-0% via-[rgba(0,0,0,0.1)] via-50% to-[rgba(0,0,0,1)] to-100%"></div>
        <img
          src={pexels}
          className="overflow-hidden h-[107px] md:h-[201px] w-full object-cover "
        ></img>
      </div>
      <Contact></Contact>
      <OrganizationInfo></OrganizationInfo>
    </section>
  );
}
