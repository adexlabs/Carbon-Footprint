"use client";

import React, { useState } from "react";
import Image from "next/image";
import "@/styles/WorkContent.css"; // Import the CSS file

const WorkContent = () => {
  const [expanded, setExpanded] = useState(Array(features.length).fill(false));

  const toggleReadMore = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <section className="how-it-work-section" id="how_it_work">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1684.8 60" className="wave-svg">
        <defs>
          <style>{`.st2 { fill: #f6f6f6; }`}</style>
        </defs>
        <path
          className="st2"
          d="M1684.8,0c-64.4,0-102.4,5.8-140.4,11.7-38,5.8-76,11.7-140.4,11.7s-102.4-5.8-140.4-11.7c-38-5.8-76-11.7-140.4-11.7s-102.4,5.8-140.4,11.7c-38,5.8-76,11.7-140.4,11.7-64.4-.1-102.4-5.9-140.4-11.7-38-5.9-76-11.7-140.4-11.7s-102.4,5.8-140.4,11.7c-38,5.8-76,11.7-140.4,11.7s-102.4-5.8-140.4-11.7C102.4,5.8,64.4,0,0,0v60h1684.8V0Z"
        />
      </svg>

      <div className="page-width">
        <div className="heading-section">
          <h2>How It Works</h2>
          <p>
            Websites generate carbon footprints through energy consumption, data transmission, and user interactions.
            Calculators analyze website structure, traffic, and hosting to quantify emissions.
          </p>
        </div>

        <div className="improvement-features">
          {features.map((feature, index) => (
            <div className={`features-list list-item-${index + 1}`} key={index}>
              <div className="icon">
                <Image src={feature.imgSrc} alt={feature.imgAlt} width={70} height={70} priority />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              {feature.extraText && (
                <>
                  <span className="dots"></span>
                  <div className="more-text" style={{ display: expanded[index] ? "block" : "none" }}>
                    <p>{feature.extraText}</p>
                  </div>
                </>
              )}
              <button className="read-more" onClick={() => toggleReadMore(index)}>
                {expanded[index] ? "Read less" : "Read more"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    imgSrc: "/images/data-flow-image4.png",
    imgAlt: "Internet Data Flow",
    title: "Internet Data Flow",
     description: 
     "Internet Data Flow measures data transmission between servers, networks, and users when accessing websites. This data exchange directly impacts energy consumption and carbon emissions. Websites generate carbon emissions through data transmission, processing, and storage. The Website Carbon Calculator assesses these emissions by analyzing Internet Data Flow.",
    extraText: 
    "Websites generate carbon emissions through data transmission, processing, and storage. The Website Carbon Calculator assesses these emissions by analyzing Internet Data Flow. Factors considered include data volume, transmission frequency, distance, and protocol efficiency."
  },
  {
    imgSrc: "/images/loading-img5.png",
    imgAlt: "Page Load Data",
    title: "Page Load Data",
    description: 
    "Page Load Data refers to the initial information transferred when a website loads, significantly impacting energy consumption and carbon emissions. Website carbon calculators assess this data to estimate emissions. The calculation considers page size, optimization, and load time.",
    extraText: 
    "It multiplies data transfer by energy usage, accounting for grid efficiency and renewable sources. Repeat visits are adjusted for, considering cached files.."
  },
  {
    imgSrc: "/images/electricity-image6.png",
    imgAlt: "Data Centre Power",
    title: "Data Centre Power",
    description: 
    "Data centers powering websites significantly impact carbon emissions. Website carbon calculators assess data center energy sources to estimate emissions. Renewable energy sources like solar, wind and hydroelectric power minimize carbon footprint. Non-renewable sources, including coal, natural gas, and nuclear energy, contribute to emissions.",
    extraText:
     "Renewable energy sources like solar, wind and hydroelectric power minimize carbon footprint. Non-renewable sources, including coal, natural gas, and nuclear energy, contribute to emissions. Calculators evaluate energy consumption, energy source, and carbon intensity. Optimizations include choosing renewable energy-powered data centers, enhancing efficiency, and carbon offsetting."
  },
  {
    imgSrc: "/images/electrical-image7.png",
    imgAlt: "Electricity Carbon Footprint",
    title: "Electricity Carbon Footprint",
    description:
     "A website's Electricity Carbon Footprint measures greenhouse gas emissions from powering data centers, servers, and networks.",
    extraText: 
    "Website carbon calculators estimate emissions based on electricity consumption, considering data transfer, server efficiency, renewable energy usage, and grid carbon intensity.Renewable energy-powered data centers minimize emissions. Solar, wind and hydroelectric power reduce carbon footprint. Efficient coding, optimization, and carbon offsetting also mitigate emissions."
  },
  {
    imgSrc: "/images/web-browser-image8.png",
    imgAlt: "Website Engagement",
    title: "Website Engagement",
    description: "Website engagement directly impacts carbon footprint. Website carbon calculators assess engagement metrics to estimate emissions.",
    extraText: "Engagement extends server processing, data transfer, and energy consumption, increasing emissions. Factors considered include page views, visits, interaction time, and content engagement.Optimizations reduce emissions. Streamlined content delivery, efficient coding, caching, and lazy loading minimize carbon footprint. Sustainable hosting solutions further mitigate emissions."
  },
];

export default WorkContent;
