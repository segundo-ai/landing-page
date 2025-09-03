import AnimatedIconList from "@components/animatedIconList/AnimatedIconList";
import Explanation from "@pages/Explanation";
import FAQ from "@pages/FAQ";
import Intro from "@pages/Intro";
import Navbar from "@components/navbar/Navbar";
import Agents from "@pages/Agents";
import AboutUs from "@pages/AboutUs";
import Process from "@pages/Process";
import Footer from "@pages/Footer";
import Platform from "@pages/Platform";
import { alliedCompanies } from "@utils/data/general";

function App() {
  return (
    <main className="gap-[15px] md:gap-[20px] scroll-smooth">
      <Navbar></Navbar>
      <Intro></Intro>
      <AnimatedIconList iconList={alliedCompanies}></AnimatedIconList>
      <Explanation></Explanation>
      <Agents></Agents>
      <Platform></Platform>
      <Process></Process>
      <AboutUs></AboutUs>
      <FAQ />
      <Footer></Footer>
    </main>
  );
}

export default App;
