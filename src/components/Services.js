'use client';

import React from "react";
import Image from "next/image";
import "@/styles/Services.css"; // Ensure correct path for CSS

const servicesData = [
  {
    icon: "/images/good-conversion-rate10.png",
    title: "Conversion Rate Optimization",
    description:
      "Conversion rates are a critical factor for the success of every e-commerce business. Based on a data-driven approach, we provide suggestions to improve UI/UX as well as conversion rates for your website.",
    colorClass: "blue",
  },
  {
    icon: "/images/research11.png",
    title: "Web & E-commerce Development",
    description:
      "A good-looking site is not enough; it has to perform well too. Whether you need a simple web application, e-commerce development, custom application development, or network security configuration, we have you covered.",
    colorClass: "green",
  },
  {
    icon: "/images/web-developer12.png",
    title: "Online Business Development",
    description:
      "We provide e-commerce and e-learning solutions tailored to all kinds of business needs. Whether through custom e-commerce solutions or platforms like Shopify, BigCommerce, Magento, and WooCommerce, we can help.",
    colorClass: "orange",
  },
  {
    icon: "/images/exchange-rate13.png",
    title: "App/Plugin Development",
    description:
      "Need a module or plugin for custom integrations in your e-commerce site? We provide tailored solutions to add extended functionality and custom integrations to your web portal.",
    colorClass: "red",
  },
];

const Service = () => {
  return (
    <div className="services" id="services">
      <div className="page-width">
        <div className="services-wrapper">
          <div className="services-heading">
            <h2>Our Services</h2>
          </div>

          <div className="services-cards">
            {servicesData.map((service, index) => (
              <div className="about-standardise_card-wrap" key={index}>
                <div className={`service-card ${service.colorClass}`}>
                  <div className="service-icon">
                    <Image src={service.icon} alt={service.title} width={80} height={80} />
                  </div>
                  <div className="service-content">
                    <h4 className="service-cont-heading">{service.title}</h4>
                    <p className="service-data-content">{service.description}</p>
                  </div>
                </div>

                {/* SVG Background */}
                <div className={`about-standardise_blog-wrap ${service.colorClass}`}>
                  {service.colorClass === "blue" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 302 253" fill="none">
                      <path d="M173.216 190.044C138.106 210.821 101.012 251.92 65.611 252.67C30.0194 253.326 -3.78301 213.917 0.494834 177.92C4.77268 141.924 47.0368 109.531 71.6424 76.4682C96.248 43.4057 102.815 9.48582 120.051 1.89933C137.288 -5.68716 165.289 12.8694 201.707 25.4031C238.029 37.6525 283.149 44.067 296.743 66.8734C310.148 89.5859 292.124 128.975 266.692 148.847C241.26 168.72 208.325 169.268 173.216 190.044Z" fill="currentColor"/>
                    </svg>
                  )}
                  {service.colorClass === "green" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 221 275" fill="none">
                      <path d="M147.928 1.1647C165.737 6.20164 175.069 55.5396 181.558 88.315C188.046 121.09 191.989 137.342 202.023 168.459C212.186 199.744 228.569 246.063 215.341 264.019C202.41 282.014 159.531 271.905 118.052 265.005C76.6118 257.807 36.2731 253.779 16.1637 231.494C-3.9458 209.208 -4.08505 168.328 9.51253 139.372C23.1488 110.118 50.69 92.6587 77.371 64.3423C104.091 35.7282 130.248 -3.70408 147.928 1.1647Z" fill="currentColor"/>
                    </svg>
                  )}
                  {service.colorClass === "orange" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 280 193" fill="none">
                      <path d="M210.855 169.152C179.658 186.675 150.338 196.599 123.723 190.876C96.8956 185.148 72.7673 163.986 46.1807 130.027C19.387 95.8517 -9.65279 48.8849 3.85577 25.213C17.1571 1.32395 73.0069 0.729855 117.374 0.926569C161.952 1.12829 195.053 1.90863 225.016 18.7501C255.19 35.5965 282.226 68.504 278.995 97.5135C275.763 126.523 242.264 151.634 210.855 169.152Z" fill="currentColor"/>
                    </svg>
                  )}
                  {service.colorClass === "red" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 276 213" fill="none">
                      <path d="M41.9869 57.8372C23.7339 76.3025 9.51346 98.5881 3.35837 127.029C-2.79672 155.47 -1.09875 190.278 17.1543 201.102C35.1951 212.139 70.0032 199.404 106.509 201.527C143.228 203.437 181.856 220.204 214.117 209.167C246.166 198.131 271.848 159.502 275.456 117.266C278.852 75.2413 260.387 29.6088 228.125 10.9313C195.864 -7.53397 150.232 1.16804 116.273 12.8415C82.3134 24.5149 60.0277 39.372 41.9869 57.8372Z" fill="currentColor"/>
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
