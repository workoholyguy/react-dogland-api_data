// WeightChart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const WeightChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="weightRange" />
        <YAxis label={{ value: "Count", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" minPointSize={5} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WeightChart;
