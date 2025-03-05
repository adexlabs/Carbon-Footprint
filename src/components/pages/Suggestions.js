"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import supabase from "@/lib/supabaseClient";
import "@/styles/Suggestions.css";

const Suggestions = () => {
  const { uniqueId } = useParams();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchReport = async () => {
      setLoading(true);

      // Try fetching from localStorage first
      const storedData = localStorage.getItem(`report-${uniqueId}`);
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          setResults(parsedData);
          generateSuggestions(parsedData);
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
          MB: parseFloat(data.page_weight) || 0,
          grams: parseFloat(data.co2e_per_visit) || 0,
          resourceCount: data.resource_count || 0,
        };

        setResults(fetchedResults);
        generateSuggestions(fetchedResults);
      }

      setLoading(false);
    };

    fetchReport();
  }, [uniqueId]);

  // Function to generate suggestions based on data
  const generateSuggestions = (data) => {
    let newSuggestions = [];

    // 💨 Reduce Page Weight
    if (data.MB > 2) {
      newSuggestions.push(
        "Your website is over 2MB in size, which is heavy. Consider optimizing images, minifying CSS & JavaScript, and using lazy loading."
      );
    } else {
      newSuggestions.push("Your website size is optimized, but you can further improve by using next-gen image formats like WebP.");
    }

    // 🌍 Reduce Carbon Emissions
    if (data.grams > 1) {
      newSuggestions.push(
        `Your website produces ${data.grams.toFixed(2)}g CO₂ per visit. Consider switching to a green hosting provider to reduce emissions.`
      );
    } else {
      newSuggestions.push("Your CO₂ emissions per visit are low! Great job! Keep using optimized resources and efficient hosting.");
    }

    // 🔧 Optimize Resource Usage
    if (data.resourceCount > 50) {
      newSuggestions.push(
        `You are using ${data.resourceCount} resources (images, scripts, styles). Try reducing third-party scripts and unused CSS/JS.`
      );
    } else {
      newSuggestions.push("Your website has a reasonable number of resources. Keep optimizing by using Content Delivery Networks (CDNs).");
    }

    // ⚡ Speed & Performance
    if (data.MB > 3 || data.grams > 2) {
      newSuggestions.push(
        "Consider implementing lazy loading for images and videos, using efficient caching strategies, and optimizing server response times."
      );
    }

    setSuggestions(newSuggestions);
  };

  if (loading) return <p className="loading">⏳ Loading suggestions...</p>;
  if (!results) return <p className="error-message">⚠️ No data found for this report.</p>;

  return (
    <div className="suggestions-container">
      <h2>💡 Suggestions to Improve Your Website</h2>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>✅ {suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
