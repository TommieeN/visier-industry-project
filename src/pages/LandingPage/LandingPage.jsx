import "./LandingPage.scss";

function LandingPage() {
  return (
    <>
      <h1>Filters:</h1>
      <a href="#section-1">Section 1</a>
      <a href="#section-2">Section 2</a>
      <a href="#section-3">Section 3</a>
      <div id="section-1" className="section-step">
        <div className="section-step--side">
          <div>
            <h3>Step 1/2</h3>
            <h2>What do you want to focus on today?</h2>
          </div>
        </div>
        <div className="section-step--main">
          <div className="section-step__container">
            <a className="section-step__button" href="#section-2">
              People Data
            </a>
            <a className="section-step__button" href="#section-2">
              Business Data
            </a>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------ */}
      <div id="section-2" className="section-step">
        <div className="section-step--side">
          <div>
            <h3>Step 2/2</h3>
            <h2>What do you want to focus on today?</h2>
          </div>
        </div>
        <div className="section-step--main">
          <a href="#section-1" className="section-step__info">
            People Data
          </a>
          <div className="section-step__container">
            <a className="section-step__button" href="#section-3">
              Talent Management and Acquisition
            </a>
            <a className="section-step__button" href="#section-3">
              Employee Engagement and Performance
            </a>
            <a className="section-step__button" href="#section-3">
              Diversity, Equity, and Inclusion
            </a>
            <a className="section-step__button" href="#section-3">
              Compensation and Development
            </a>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------ */}
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
