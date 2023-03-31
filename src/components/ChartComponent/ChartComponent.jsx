import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  //----
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  //---
  LinearScale,
  PointElement,
  LineElement
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

// ------------------------------ChartComponent-----------------------------------------------------
function ChartComponent({ data, chart = "bar" }) {
    // This variable will either be a <Bar> or <Line>
  let graph;

  if (chart == "bar") {
    graph = <Bar className="visier-chart" options={options} data={data} />;
  } else if (chart == "line") {
    graph = <Line className="visier-chart" options={options} data={data} />;
  }

  // Display this 
  return graph;
}

export default ChartComponent;
