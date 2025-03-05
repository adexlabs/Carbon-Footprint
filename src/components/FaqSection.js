'use client';

import React from 'react';
import Image from 'next/image';
import '@/styles/FaqSection.css';

const FAQSection = () => {
  return (
    <section className="faq-section" id="faq">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 1684.8 60"
        style={{
          marginTop: '-18px',
          transform: 'rotate(180deg)',
        }}
      >
        <defs>
          <style>
            {`
              .st1 {
                fill: #fff;
              }
            `}
          </style>
        </defs>
        <path
          className="st1"
          d="M1684.8,0c-64.4,0-102.4,5.8-140.4,11.7-38,5.8-76,11.7-140.4,11.7s-102.4-5.8-140.4-11.7c-38-5.8-76-11.7-140.4-11.7s-102.4,5.8-140.4,11.7c-38,5.8-76,11.7-140.4,11.7-64.4-.1-102.4-5.9-140.4-11.7-38-5.9-76-11.7-140.4-11.7s-102.4,5.8-140.4,11.7c-38,5.8-76,11.7-140.4,11.7s-102.4-5.8-140.4-11.7C102.4,5.8,64.4,0,0,0v60h1684.8V0Z"
        ></path>
      </svg>
      <div className="page-width">
        <h4>Frequently asked questions 🔥</h4>
        <h2>FAQ's</h2>
        <div className="faq-inner-container">
          <div className="faq-content-panel">
            <h3>Are test results public?</h3>
            <p>No, unless the user chooses to share.</p>
          </div>

          <div className="faq-content-panel">
            <h3>How long does the calculation take?</h3>
            <p>Instantaneous to minutes, depending on complexity.</p>
          </div>

          <div className="faq-content-panel">
            <h3>Units measuring carbon footprint?</h3>
            <p>Kg CO2e, grams CO2e.</p>
          </div>

          <div className="faq-content-panel">
            <h3>What's a good carbon footprint?</h3>
            <p>
              Conducting website audits reveals most sites can initially aim for
              1 gram of carbon per page to reduce emissions. However, this
              benchmark may decrease as sustainability standards evolve.
            </p>
            <p>
              Achieving under 0.5 grams per page indicates a strong environmental
              performance. Yet, a singular low-carbon page isn't sufficient;
              ideally, all website pages should strive for minimal carbon
              footprints.
            </p>
          </div>

          <div className="faq-content-panel">
            <h3>How accurate are the results?</h3>
            <p>
              The results are estimates based on standard formulas and averages.
              For precise figures, detailed data and customized assessments
              would be required. However, the calculator provides a reliable
              benchmark for your website’s impact.
            </p>
          </div>

          <div className="faq-content-panel">
            <h3>What is the average carbon footprint of a website?</h3>
            <p>
              A website produces 0.5g to 1g of CO₂ per page view. Heavily
              trafficked or media-rich sites can have higher emissions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;