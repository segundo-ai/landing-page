import "./App.css";
import AlliedCompanies from "./components/alliedCompanies/AlliedCompanies";
import Explanation from "./components/explanation/Explanation";
import FAQ from "./components/FAQ";
import Intro from "./components/intro/Intro";

function App() {
  return (
    <main className="gap-[20px]">
      <Intro></Intro>
      <AlliedCompanies></AlliedCompanies>
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
