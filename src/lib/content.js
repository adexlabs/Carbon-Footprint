// content.js

import "@/styles/ContentStyles.css";

export const generateDynamicContent = (gramsPerVisit, yearlyVisits) => {
  const yearlyEmissions = gramsPerVisit * yearlyVisits;
  const emissionsKg = yearlyEmissions / 1000;

  const electricityGenerated = (emissionsKg * 0.5).toFixed(2);
  const teaCupsBoiled = Math.round(electricityGenerated * 70);
  const evTravelDistance = (electricityGenerated * 6).toFixed(2);
  const houseElectricityUsage = (electricityGenerated / 0.9).toFixed(2);
  const treesRequired = Math.round(emissionsKg / 21); // ✅ Ensures an integer

  return (
    <div className="dynamic-content">
      <h3 className="section-title">🌍 Yearly Environmental Impact</h3>

      <div className="content-section boiling-water">
        <h4>🌡️ Boiling Water</h4>
        <p>This CO₂ can boil <strong>{teaCupsBoiled} cups</strong> of tea yearly.</p>
      </div>

      <div className="content-section energy-usage">
        <h4>⚡ Electricity Generated</h4>
        <p>It can generate <strong>{electricityGenerated} kWh</strong> of electricity annually.</p>
      </div>

      <div className="content-section tree-absorption">
        <h4>🌳 Tree Absorption</h4>
        <p><strong>{treesRequired} trees</strong> are needed to absorb this CO₂ per year.</p>
      </div>

      <div className="content-section ev-charging">
        <h4>🚗 EV Charging</h4>
        <p>This could power an EV for <strong>{evTravelDistance} km</strong>.</p>
      </div>

      <div className="content-section house-usage">
        <h4>🏠 Household Electricity Usage</h4>
        <p>Powers a home for <strong>{houseElectricityUsage} hours</strong>.</p>
      </div>
    </div>
  );
};
