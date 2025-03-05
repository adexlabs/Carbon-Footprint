import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "@/styles/WebsiteScore.css";

const WebsiteScore = ({ websiteUrl = "#", co2Emissions = 0 }) => {
  const co2Value = parseFloat(co2Emissions) || 0;

  // ✅ Calculate Score Based on CO₂ Emissions
  const calculateScore = (co2) => {
    if (co2 < 0.1) return 100;
    if (co2 < 0.3) return 90;
    if (co2 < 0.5) return 80;
    if (co2 < 0.8) return 70;
    if (co2 < 1.2) return 60;
    if (co2 < 1.5) return 50;
    if (co2 < 2.0) return 40;
    if (co2 < 3.0) return 30;
    return 20;
  };

  const pageScore = calculateScore(co2Value);

  // ✅ Data for Pie Chart
  const data = [
    { name: "Score", value: pageScore },
    { name: "Remaining", value: 100 - pageScore },
  ];

  const COLORS = ["#4CAF50", "#E0E0E0"];

  return (
    <div className="website-score">
      <h3>CO₂ Emissions Score</h3>
      
      {/* ✅ Display Website URL & Make it Clickable */}
      <p>
        Website:{" "}
        <a 
          href={websiteUrl.startsWith("http") ? websiteUrl : `https://${websiteUrl}`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {websiteUrl}
        </a>
      </p>

      <div className="score-chart">
        {/* ✅ Pie Chart with Score in the Center */}
        <PieChart width={180} height={180}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>

          {/* ✅ Score in the Center */}
          <text x="50%" y="50%" dy={8} textAnchor="middle" fontSize={20} fontWeight="bold" fill="#333">
            {pageScore}/100
          </text>
        </PieChart>
      </div>

      {/* ✅ Explanation */}
      <div className="score-explanation">
        <p>
          The **CO₂ Emissions Score** measures the environmental impact of a website.
          A **higher score** (closer to 100) means the website is more eco-friendly.
        </p>
      </div>
    </div>
  );
};

export default WebsiteScore;
