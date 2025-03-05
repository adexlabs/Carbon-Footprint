"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ResourceSizeChart from "@/components/pages/ResourceSizeChart";
import ResourceCountChart from "@/components/pages/ResourceCountChart";
import WebsiteScore from "@/components/pages/WebsiteScore";
import PageWeightScore from "@/components/pages/PageWeightScore";
import WebsiteGrade from "@/components/pages/WebsiteGrade";
import WebsiteVisitsChart from "@/components/pages/WebsiteVisitsChart";
import Suggestions from "@/components/pages/Suggestions";
import { generateDynamicContent } from "@/lib/content";
import supabase from "@/lib/supabaseClient";
import "@/styles/ResultsPage.css";

const ResultsPage = () => {
  const { uniqueId } = useParams();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [finalScore, setFinalScore] = useState(null);
  const [dynamicContent, setDynamicContent] = useState(null);
  const [yearlyVisits, setYearlyVisits] = useState(100000); // Default yearly visits

  useEffect(() => {
    const fetchReport = async () => {
      setLoading(true);

      const storedData = localStorage.getItem(`report-${uniqueId}`);
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          parsedData.grams = parseFloat(parsedData.grams) || 0; // Ensure it's a number
          parsedData.MB = parseFloat(parsedData.MB) || 0; // Ensure it's a number
          
          setResults(parsedData);
          calculateFinalScore(parsedData);
          setDynamicContent(generateDynamicContent(parsedData.grams, yearlyVisits));
          setLoading(false);
          return;
        } catch (error) {
          console.error("Error parsing stored data:", error);
        }
      }

      // Fetch from Supabase if localStorage is empty
      const { data, error } = await supabase
        .from("client")
        .select("*")
        .eq("unique_url", `/results/${uniqueId}`)
        .single();

      if (error || !data) {
        console.error("Report not found:", error);
        setResults(null);
      } else {
        const fetchedResults = {
          websiteUrl: data.website_url,
          device: "Desktop",
          MB: parseFloat(data.page_weight) || 0, // Ensure number
          grams: parseFloat(data.co2e_per_visit) || 0, // Ensure number
          lighthouseData: data.lighthouse_data || null,  
          resourceSizeData: data.resource_size_data || [],
          resourceCountData: data.resource_count_data || [],
        };

        setResults(fetchedResults);
        calculateFinalScore(fetchedResults);
        setDynamicContent(generateDynamicContent(fetchedResults.grams, yearlyVisits));
      }

      setLoading(false);
    };

    fetchReport();
  }, [uniqueId, yearlyVisits]);

  // Function to calculate the website’s final score
  const calculateFinalScore = (data) => {
    if (!data) return;

    const pageWeightScore = Math.max(100 - data.MB * 10, 0);
    const co2Score = Math.max(100 - data.grams * 5, 0);
    const finalCalculatedScore = Math.round((pageWeightScore * 0.5) + (co2Score * 0.5));

    setFinalScore(finalCalculatedScore);
  };

  if (loading) return <p className="loading">⏳ Loading...</p>;
  if (!results) return <p className="error-message">⚠️ No report found for this ID. Please generate a new report.</p>;

  return (
    <div className="results-page">
      <h1>🌍 Website Carbon Analysis</h1>

      {/* Report Summary */}
      <div className="report-summary">
        <h3>🔎 Report Summary</h3>
        <p><strong>Device:</strong> {results.device || "Unknown"}</p>
        <p><strong>Website Page Weight:</strong> {results.MB ? results.MB.toFixed(2) : "0.00"} MB</p>
        <p><strong>CO₂ Emissions per Visit:</strong> {results.grams ? results.grams.toFixed(2) : "0.00"} g</p>
      </div>

      {/* Charts Section */}
      <div className="charts-container">
        <h3>📊 Resource Analysis</h3>
        <ResourceSizeChart data={results.resourceSizeData} />
        <ResourceCountChart data={results.resourceCountData} />
      </div>

      {/* Performance Scores */}
      <div className="performance-scores">
        <h3>🌟 Performance Scores</h3>
        <PageWeightScore pageWeight={results.MB} />
        <WebsiteScore co2Emissions={results.grams} />
        {finalScore !== null && <WebsiteGrade score={finalScore} />}
      </div>

      {/* Yearly Website Visits Chart */}
      <div className="yearly-visits-chart">
        <h3>📈 Yearly Website Visits</h3>
        <WebsiteVisitsChart data={[{ month: "Jan", visits: 8500 }, { month: "Feb", visits: 9200 }]} />
      </div>

      {/* Dynamic Content Section */}
      <div className="dynamic-content">
        <h3>🌍 Environmental Impact Over a Year</h3>
        {dynamicContent}
      </div>

      {/* Suggestions Section */}
      <div><Suggestions /></div>
    </div>
  );
};

export default ResultsPage;
