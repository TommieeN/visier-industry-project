import "./LandingPage.scss";

function LandingPage() {
  return (
    <>
      <h1>Filters:</h1>
      <a href="#section-1">Section 1</a>
      <a href="#section-2">Section 2</a>
      <a href="#section-3">Section 3</a>
      <div id="section-1" style={{ minHeight: "95vh", backgroundColor: "red" }}>
        <h3>Section 1</h3>
      </div>
      <div
        id="section-2"
        style={{ minHeight: "95vh", backgroundColor: "green" }}
      >
        <h3>Section 2</h3>
      </div>
      <div
        id="section-3"
        style={{ minHeight: "95vh", backgroundColor: "blue" }}
      >
        <h3>Section 3</h3>
      </div>
    </>
  );
}

export default LandingPage;
