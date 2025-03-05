import React from "react";
import "@/styles/YearlyImpact.css";

const YearlyImpact = ({ yearlyCO2 }) => {
  // Constants for conversion
  const electricityGenerated = yearlyCO2 * 0.5; // 1 kg CO2 ≈ 0.5 kWh
  const teaBoiled = yearlyCO2 * 20; // 1 kg CO2 ≈ 20 cups of tea boiled
  const evDistance = yearlyCO2 * 5; // 1 kg CO2 ≈ 5 km EV travel
  const houseUsage = electricityGenerated / 0.9; // Avg house uses 0.9 kWh per hour
  const treesNeeded = yearlyCO2 / 22; // 1 tree absorbs ~22 kg CO2 per year

  return (
    <div className="yearly-impact">
      <h3>🌍 Yearly CO₂ Impact</h3>
      <p>⚡ Electricity Generated: <strong>{electricityGenerated.toFixed(2)} kWh</strong></p>
      <p>☕ Cups of Tea Boiled: <strong>{teaBoiled.toFixed(0)} cups</strong></p>
      <p>🚗 EV Car Travel Distance: <strong>{evDistance.toFixed(2)} km</strong></p>
      <p>🏡 House Usage Hours: <strong>{houseUsage.toFixed(2)} hours</strong></p>
      <p>🌱 Trees Needed to Offset: <strong>{treesNeeded.toFixed(2)} trees</strong></p>
    </div>
  );
};

export default YearlyImpact;
