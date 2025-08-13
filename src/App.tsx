import AnimatedIconList from "./components/animatedIconList/AnimatedIconList";
import Explanation from "./pages/Explanation";
import FAQ from "./pages/FAQ";
import Intro from "./pages/Intro";
import Navbar from "./components/Navbar";
import { platformsWeAreExperts } from "./data/platformsWeAreExperts";

function App() {
  return (
    <main className="gap-[20px] scroll-smooth">
      <Navbar></Navbar>
      <Intro></Intro>
      <AnimatedIconList iconList={platformsWeAreExperts}></AnimatedIconList>
      <Explanation></Explanation>
      <div
        className="p-[50px] "
        style={{
          backgroundPosition: "center 100%",
        }}
      >
        <FAQ />
      </div>
    </main>
  );
}

export default App;
