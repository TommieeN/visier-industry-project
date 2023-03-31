import React from "react";
import { useState } from "react";
import ChartComponent from "../ChartComponent/ChartComponent";
import "./ResultsComponent.scss";

const initialDataBar = {
  labels: ["Sep 2022", "Dec 2022", "March 2023"],
  datasets: [
    {
      label: "Dataset 1",
      data: [Math.random() * 100, Math.random() * 100, Math.random() * 100],
      backgroundColor: "#4DA5DE",
    },
  ],
};

const initialDataLine = {
  labels: [
    "Sep 2022",
    "Oct 2022",
    "Nov 2022",
    "Dec 2022",
    "Jan 2023",
    "Feb 2023",
  ],
  datasets: [
    {
      label: "Dataset 1",
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ],
      backgroundColor: "#4DA5DE",
    },
  ],
};

// ---------------------------ResultsCompo--------------------------------------------------------

function ResultsComponent({ chartTypeDefault = "bar" }) {
  const [chartType, setChartType] = useState(chartTypeDefault);
  const [data, setData] = useState(initialDataBar);

  // ----------------CHANGE CHART VALUE-------------------------------
  function handleOnChangeSlider(event) {
    // Data/values for Bar Graph.
    if (chartType === "bar") {
      setData({
        labels: ["Sep 2022", "Dec 2022", "March 2023"],
        datasets: [
          {
            label: "Dataset 1",
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
            backgroundColor: "#4DA5DE",
          },
        ],
      });

      // Data/values for Line Graph.
    } else if (chartType === "line") {
      setData({
        labels: [
          "Sep 2022",
          "Oct 2022",
          "Nov 2022",
          "Dec 2022",
          "Jan 2023",
          "Feb 2023",
        ],
        datasets: [
          {
            label: "Dataset 1",
            fill: true,
            backgroundColor: "#4DA5DE",
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          },
        ],
      });
    }
  }

  // Changes graph to bar graph.
  function handleOnClickRetention() {
    setData(initialDataBar);
    setChartType("bar");
  }

  // Changes graph to line graph.
  function handleOnClickPerformance() {
    setData(initialDataLine);
    setChartType("line");
  }

  // -----------------------------------------------------------------------------------

  return (
    <div className="results">
      <div className="results__graph">
        {/* THIS IS THE GRAPH PART ----------------------------- */}
        <div className="results__graph--container">
          <div className="results__graph--buttons-container">
            <a
              className={`results__graph--button ${
                chartType === "bar" ? "results__graph--button--active" : ""
              }`}
              onClick={handleOnClickRetention}
            >
              Retention +
            </a>
            <a
              className={`results__graph--button ${
                chartType === "line" ? "results__graph--button--active" : ""
              }`}
              onClick={handleOnClickPerformance}
            >
              Performance +
            </a>
          </div>
          <ChartComponent data={data} chart={chartType} />
          <div className="results__graph--slider">
            <input
              className="results__graph--slider--input"
              type="range"
              id="volume"
              name="volume"
              min="0"
              max="100"
              step="50"
              onChange={handleOnChangeSlider}
            />
            <div className="results__graph--slider--labels">
              <span>3 months</span>
              <span>6 months</span>
              <span>1+ years</span>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------- */}
      <div className="results__details">
        {/* TOMMY'S STUFF GOES HERE. <SummaryComponent/> */}
        {/* <ResultsComponent />; */}
      </div>
    </div>
  );
}

export default ResultsComponent;
