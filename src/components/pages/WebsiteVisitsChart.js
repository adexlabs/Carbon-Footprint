"use client";

import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import "@/styles/WebsiteVisitsChart.css";

const WebsiteVisitsChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="no-data">📉 No visitor data available.</p>;
  }

  return (
    <div className="chart-container">
      <h3>📊 Monthly Website Visits</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="month" tick={{ fill: "#333" }} />
          <YAxis tick={{ fill: "#333" }} />
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="visits" stroke="#28a745" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WebsiteVisitsChart;
