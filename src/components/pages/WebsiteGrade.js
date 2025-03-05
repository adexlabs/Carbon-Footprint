import React from "react";
import "@/styles/WebsiteGrade.css";

const WebsiteGrade = ({ score }) => {
  // ✅ Grade Calculation
  const getGrade = (score) => {
    if (score >= 90) return "A+";
    if (score >= 80) return "A";
    if (score >= 70) return "B+";
    if (score >= 60) return "B";
    if (score >= 50) return "C+";
    if (score >= 40) return "C";
    if (score >= 30) return "D+";
    if (score >= 20) return "D";
    if (score >= 10) return "E+";
    return "E"; // Below 10
  };

  // ✅ Dynamic Color Based on Grade
  const getGradeColor = (grade) => {
    if (["A+", "A"].includes(grade)) return "#4CAF50"; // Green
    if (["B+", "B", "C+", "C"].includes(grade)) return "#FFC107"; // Yellow
    return "#F44336"; // Red
  };

  const grade = getGrade(score);
  const gradeColor = getGradeColor(grade);

  // ✅ Scale Position Calculation with Padding Adjustments
  const scalePosition = `calc(${Math.min(Math.max(score, 0), 100)}% - 10px)`;

  return (
    <div className="website-grade">
      <h3>Website Grade</h3>

      {/* ✅ Grade Scale */}
      <div className="grade-scale">
        <div className="scale-bar">
          {/* ✅ Marker Positioned Based on Score */}
          <div className="scale-marker" style={{ left: scalePosition, backgroundColor: gradeColor }}>
            {grade}
          </div>
        </div>

        {/* ✅ Grade Labels */}
        <div className="grade-index">
          <span>E</span>
          <span>E+</span>
          <span>D</span>
          <span>D+</span>
          <span>C</span>
          <span>C+</span>
          <span>B</span>
          <span>B+</span>
          <span>A</span>
          <span>A+</span>
        </div>
      </div>

      {/* ✅ Display Exact Grade */}
      <div className="grade-output" style={{ color: gradeColor }}>
        <p>Grade: <strong>{grade}</strong></p>
      </div>
    </div>
  );
};

export default WebsiteGrade;
