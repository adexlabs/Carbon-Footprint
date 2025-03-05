export const generateSuggestions = (co2Emissions, pageWeight, lighthouseData, websiteUrl) => {
    let suggestions = [];
  
    // 1️⃣ General Performance Improvements
    if (co2Emissions > 1) {
      suggestions.push("🌱 Consider switching to a green web hosting provider to reduce carbon emissions.");
    }
    if (pageWeight > 2) {
      suggestions.push("📉 Your page size is large. Optimize images using modern formats (WebP, AVIF) and enable compression.");
    }
    if (lighthouseData?.performance < 50) {
      suggestions.push("⚡ Improve page speed by optimizing scripts, lazy loading images, and using efficient caching.");
    }
  
    // 2️⃣ Specific Improvements Based on Metrics
    if (lighthouseData?.accessibility < 80) {
      suggestions.push("📸 Implement lazy loading for images and videos to improve accessibility.");
    }
    if (lighthouseData?.bestPractices < 70) {
      suggestions.push("✂️ Minify CSS, JavaScript, and HTML files to improve page load speed.");
    }
    if (pageWeight > 1.5) {
      suggestions.push("🌍 Use a Content Delivery Network (CDN) to serve static assets faster and reduce server load.");
    }
  
    // 3️⃣ Website Platform-Specific Suggestions
    if (websiteUrl.includes("wordpress")) {
      suggestions.push("🔧 Use caching plugins like WP Rocket or W3 Total Cache for faster performance.");
      suggestions.push("🚀 Optimize your database using plugins like WP-Optimize.");
    } else if (websiteUrl.includes("shopify")) {
      suggestions.push("🛒 Reduce unused Shopify apps and compress product images to enhance performance.");
    } else if (websiteUrl.includes("wix")) {
      suggestions.push("🖥️ Wix websites can be optimized by reducing animations and unnecessary scripts.");
    }
  
    // 4️⃣ Advanced Optimization
    if (co2Emissions > 2) {
      suggestions.push("🔋 Reduce server requests by combining CSS and JS files.");
    }
    if (lighthouseData?.seo < 80) {
      suggestions.push("📢 Improve SEO by using meta tags, alt text for images, and structured data.");
    }
  
    return suggestions;
  };