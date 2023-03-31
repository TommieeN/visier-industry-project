import "./LandingPage.scss";
import ResultsComponent from "../../components/ResultsComponent/ResultsComponent";

function LandingPage() {
  return (
    <div>
      <a href="#section-results">Retention</a>
      <section style={{ backgroundColor: "red", height: "100vh" }}></section>
      <section id="section-results">
        <ResultsComponent></ResultsComponent>
      </section>
    </div>
  );
}

export default LandingPage;
