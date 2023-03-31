import "./ScrollBar.scss";
import React, { useState } from "react";
function ScrollBar() {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const handleClick2 = () => {
    setActive2(!active2);
    if (active === true) setActive(false);
  };
  const handleClick3 = () => {
    setActive3(!active3);
    if (active2 === true) setActive2(false);
  };
  const handleClick4 = () => {
    setActive4(!active4);
    if (active3 === true) setActive3(false);
  };

  return (
    <div className="graph">
      <div className="graph-header">
        <div className="graph-header__container">
          <h1>50%</h1>
          <p>Increased</p>
          <p>Retention</p>
        </div>
        <div className="graph-header__container">
          <h1>$2m</h1>
          <p>Company</p>
          <p>Savings</p>
        </div>
        <div className="graph-header__container">
          <div className="text__container-text">
            <h1>13%</h1>
            <p>Decreased in</p>
            <p className="text">Churn</p>
          </div>
        </div>
      </div>
      <section className="container">
        <div className="scroll-btn__wrapper">
          <button
            className={`scroll-btn ${
              active ? "scroll-btn__info--bold" : "scroll-btn"
            }`}
            onClick={handleClick}
          >
            What's happening?
          </button>
          <div
            className={`scroll-btn__info ${
              active ? "scroll-btn__info" : "none"
            }`}
          >
            <p className="scroll-btn__text">
              Viser provides pre-packaged content and metrics to help you focus
              on understanding what matters in your organization. Hundreds of
              best-practice metrics and analytics across HR and business topics
              guide you to ask and answer the tough questions about your
              workforce.
            </p>
          </div>
        </div>
        <div className="scroll-btn__wrapper">
          <button
            className={`scroll-btn ${
              active2 ? "scroll-btn__info--bold" : "scroll-btn"
            }`}
            onClick={handleClick2}
          >
            Why is this happening?
          </button>
          <div
            className={`scroll-btn__info ${
              active2 ? "scroll-btn__info" : "none"
            }`}
          >
            <p className="scroll-btn__text">
              Visier enables you to examine your data from multiple angles to
              understand why something is happening. Drill into the data,
              explore it in multiple ways, compare it, and visualize trends and
              correlation in an ad-hoc way to find the root cause of a problem
              or to drive dynamic discussions.
            </p>
          </div>
        </div>
        <div className="scroll-btn__wrapper">
          <button
            className={`scroll-btn ${
              active3 ? "scroll-btn__info--bold" : "scroll-btn"
            }`}
            onClick={handleClick3}
          >
            What will happen?
          </button>
          <div
            className={`scroll-btn__info ${
              active3 ? "scroll-btn__info" : "none"
            }`}
          >
            <p className="scroll-btn__text">
              Visier provides AI you can trust, lighting the way for people
              answers powered by predictive insights. Use built-in AL and ML
              capabilities to see the probability of an event (e.g. risk of
              employee exit) within a specific time frame, based on historical
              data.
            </p>
          </div>
        </div>
        <div
          className={`scroll-btn__wrapper ${
            active4
              ? "scroll-btn__wrapper"
              : "scroll-btn__wrapper--left--border"
          }`}
          onClick={handleClick4}
        >
          <button
            className={`scroll-btn ${
              active4 ? "scroll-btn__info--bold" : "scroll-btn"
            }`}
            onClick={handleClick4}
          >
            What actions should be taken?
          </button>
          <div
            className={`scroll-btn__info ${
              active4 ? "scroll-btn__info" : "none"
            }`}
          >
            <p className="scroll-btn__text">
              The retention rate starts at 86% in the first month and gradually
              decreases over time. By the sixth month, the retention rate has
              dropped to 60%. However, there is a slight uptick in retention in
              the seventh month, suggesting that some customers may be returning
              after a period of inactivity. Overall, the graph indicates that
              customer retention is an ongoing challenge, but there may be
              opportunities to re-engage customers who have previously churned.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ScrollBar;
