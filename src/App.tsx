import AnimatedIconList from "./components/animatedIconList/AnimatedIconList";
import Explanation from "./pages/Explanation";
import FAQ from "./pages/FAQ";
import Intro from "./pages/Intro";
import Navbar from "./components/Navbar";
import { platformsWeAreExperts } from "./data/platformsWeAreExperts";
import Agents from "./pages/Agents";
import AboutUs from "./pages/AboutUs";
import Process from "./pages/Process";
import Footer from "./pages/Footer";

function App() {
  return (
    <main className="gap-[15px] md:gap-[20px] scroll-smooth">
      <Navbar></Navbar>
      <Intro></Intro>
      <AnimatedIconList iconList={platformsWeAreExperts}></AnimatedIconList>
      <Explanation></Explanation>
      <Agents></Agents>
      <Process></Process>
      <AboutUs></AboutUs>
      <FAQ />
      <Footer></Footer>
    </main>
  );
}

export default App;
