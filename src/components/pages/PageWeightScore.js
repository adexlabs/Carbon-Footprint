import React from "react";
import "@/styles/PageWeightScore.css";

const PageWeightScore = ({ websiteUrl = "#", pageWeight = 0 }) => {
  const weightValue = parseFloat(pageWeight) || 0;

  // ✅ Calculate Page Weight Score
  const calculateScore = (weight) => {
    if (weight < 1) return 100;
    if (weight < 2) return 90;
    if (weight < 3) return 80;
    if (weight < 4) return 70;
    if (weight < 5) return 60;
    if (weight < 6) return 50;
    if (weight < 7) return 40;
    if (weight < 10) return 30;
    return 20;
  };

  const score = calculateScore(weightValue);

  return (
    <div className="page-weight-score">
      <h3>Page Weight Score</h3>

      {/* ✅ Website URL (Click to Visit) */}
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

      {/* ✅ Show Score */}
      <div className="score-container">
        <p><strong>Page Weight:</strong> {weightValue.toFixed(2)} MB</p>
        <p><strong>Score:</strong> {score}/100</p>
      </div>

      {/* ✅ Explanation Section */}
      <div className="explanation">
        <h4>What is Page Weight?</h4>
        <p>
          Page weight refers to the total size of a webpage, including HTML, CSS, JavaScript, images, and other resources.
          A **lighter page** loads faster and is more energy-efficient, improving **SEO, user experience, and sustainability**.
        </p>

        <h4>How is the Score Calculated?</h4>
        <ul>
          <li>🔹 **Below 1MB** → Excellent (100/100)</li>
          <li>🔹 **1MB - 2MB** → Very Good (90/100)</li>
          <li>🔹 **2MB - 3MB** → Good (80/100)</li>
          <li>🔹 **3MB - 4MB** → Fair (70/100)</li>
          <li>🔹 **4MB - 5MB** → Average (60/100)</li>
          <li>🔹 **5MB - 6MB** → Below Average (50/100)</li>
          <li>🔹 **6MB - 7MB** → Poor (40/100)</li>
          <li>🔹 **7MB - 10MB** → Very Poor (30/100)</li>
          <li>🔹 **Above 10MB** → Bad (20/100)</li>
        </ul>
      </div>
    </div>
  );
};

export default PageWeightScore;
