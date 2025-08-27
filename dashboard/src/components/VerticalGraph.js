// E:\Coding\MERN_Project\ZERODHA CLONE\dashboard\src\components\VerticalGraph.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VerticalGraph = ({ data, options }) => {
  return <Bar data={data} options={options} />;
};

export default VerticalGraph;
