"use client";

import Image from "next/image";
import "@/styles/Content.css";

const img2 = "/images/about-img2.png"; // Use direct public path

const Content = () => {
  return (
    <section className="image-with-text">
      <div className="page-width">
        <div className="image-with-text-block">
          <div className="image-container">
            <div className="media-banner">
              <Image
                src={img2}
                alt="Museum Data Service Homepage"
                title="Museum Data Service Homepage"
                width={500}
                height={300}
              />
            </div>
          </div>
          <div className="text-container">
            <div className="content-info">
              <h2>Believe it or not, websites have a carbon footprint</h2>
              <p>
                Calculating your website's carbon footprint reveals its environmental impact, inspiring sustainable choices. As we increasingly rely on digital technologies, our online presence impacts the environment. Calculating your website's carbon footprint is essential for sustainability.
              </p>
              <p>
                Websites have an environmental impact, which is measured by the greenhouse gases released from Hosting, Data Transfer, and user Interactions. The main contributors to this impact are Servers, Networks, User devices, and Resource-intensive content. Tracking this impact encourages eco-friendly habits, reducing climate change. Data analysis helps design environmentally friendly websites. Regular checks ensure continued responsibility.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
