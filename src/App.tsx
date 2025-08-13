import AnimatedIconList from "./components/animatedIconList/AnimatedIconList";
import Explanation from "./pages/Explanation";
import FAQ from "./pages/FAQ";
import Intro from "./pages/Intro";
import Navbar from "./components/Navbar";
import { platformsWeAreExperts } from "./data/platformsWeAreExperts";
import Squares from "./pages/Squares";
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
      <Squares></Squares>
      <Process></Process>
      <AboutUs></AboutUs>
      <div
        className="p-[50px] "
        style={{
          backgroundPosition: "center 100%",
        }}
      >
        <FAQ />
      </div>
      <Footer></Footer>
    </main>
  );
}

export default App;
