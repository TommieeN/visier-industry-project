import "./LandingPage.scss";
import sidebar from "../../assets/visier-sidebar.png";

function LandingPage() {

  function clicked(e) {
    e.preventDefault();
    console.log(e.target);
    e.target.classList.add("active");
  }

  



  return (
      <div className="container">
        <div className="sidebar">
          <img src={sidebar} alt="sidebar navigation" className="sidebar__img" />
        </div>

        <div className="main">
          <div className="main__progression">
            <div className="main__progression-box">
            <input type="radio" />
            <p>1</p>
            </div>
          </div>

          <div className="main__content">
            <div className="main__content-box content-one">
              <div className="main__option">
                <h2 className="main__option-title">1. What do you want to focus on today?</h2>
                <div className="main__option-buttons">
                  <button className="main__option-button" onClick={clicked}>People Data</button>
                  <button className="main__option-button" onClick={clicked}>Business Data</button>
                </div>
              </div>
            </div>

            <div className="main__content-box content-two">
              <div className="main__option">
                <h2 className="main__option-title">2. What kind of people data are you looking for?</h2>
                <div className="main__option-buttons">
                  <button className="main__option-button">Talent Management</button>
                  <button className="main__option-button" onClick={clicked}>Employee Engagement</button>
                  <button className="main__option-button" onClick={clicked}>Diversity & Equity</button>
                  <button className="main__option-button" onClick={clicked}>Compensation</button>
                </div>
              </div>
            </div>

            <div className="main__content-box content-three">
              <div className="main__option">
                <h2 className="main__option-title">3. What kind of Employee data are you looking for? <span className="regular">(Select as many as you like)</span></h2>
                <div className="main__option-buttons">
                  <button className="main__option-button" onClick={clicked}>Employee Experience</button>
                  <button className="main__option-button" onClick={clicked}>Employee Feedback</button>
                  <button className="main__option-button" onClick={clicked}>Employee Sentiment</button>
                  <button className="main__option-button" onClick={clicked}>Compensation</button>
                  <button className="main__option-button" onClick={clicked}>Performance</button>
                  <button className="main__option-button" onClick={clicked}>Retention</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // <>
    //   <h1>Filters:</h1>
    //   <a href="#section-1">Section 1</a>
    //   <a href="#section-2">Section 2</a>
    //   <a href="#section-3">Section 3</a>
    //   <div id="section-1" className="section-step">
    //     <div className="section-step--side">
    //       <div>
    //         <h3>Step 1/2</h3>
    //         <h2>What do you want to focus on today?</h2>
    //       </div>
    //     </div>
    //     <div className="section-step--main">
    //       <div className="section-step__container">
    //         <a className="section-step__button" href="#section-2">
    //           People Data
    //         </a>
    //         <a className="section-step__button" href="#section-2">
    //           Business Data
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   {/* ------------------------------------------------------------------ */}
    //   <div id="section-2" className="section-step">
    //     <div className="section-step--side">
    //       <div>
    //         <h3>Step 2/2</h3>
    //         <h2>What do you want to focus on today?</h2>
    //       </div>
    //     </div>
    //     <div className="section-step--main">
    //       <a href="#section-1" className="section-step__info">
    //         People Data
    //       </a>
    //       <div className="section-step__container">
    //         <a className="section-step__button" href="#section-3">
    //           Talent Management and Acquisition
    //         </a>
    //         <a className="section-step__button" href="#section-3">
    //           Employee Engagement and Performance
    //         </a>
    //         <a className="section-step__button" href="#section-3">
    //           Diversity, Equity, and Inclusion
    //         </a>
    //         <a className="section-step__button" href="#section-3">
    //           Compensation and Development
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   {/* ------------------------------------------------------------------ */}
    //   <div
    //     id="section-3"
    //     style={{ minHeight: "95vh", backgroundColor: "blue" }}
    //   >
    //     <h3>Section 3</h3>
    //   </div>
    // </>
  );
}

export default LandingPage;
