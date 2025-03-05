'use client';

import Image from "next/image";
import Link from "next/link";
import "@/styles/GetBadge.css";

const GetBadge = () => {
  return (
    <div className="getBadge" id="get_a_Badge">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1684.8 60" className="waveSvg">
        <path
          className="st5"
          d="M1684.8,0c-64.4,0-102.4,5.8-140.4,11.7-38,5.8-76,11.7-140.4,11.7s-102.4-5.8-140.4-11.7c-38-5.8-76-11.7-140.4-11.7s-102.4,5.8-140.4,11.7c-38,5.8-76,11.7-140.4,11.7-64.4-.1-102.4-5.9-140.4-11.7-38-5.9-76-11.7-140.4-11.7s-102.4,5.8-140.4,11.7c-38,5.8-76,11.7-140.4,11.7s-102.4-5.8-140.4-11.7C102.4,5.8,64.4,0,0,0v60h1684.8V0Z"
        ></path>
      </svg> */}

      <div className="pageWidth">
        <div className="badgeContainer">
          <div className="badgeContentDetails">
            <h2>Get Your Personalized Badge</h2>
            <p>
              A website carbon emission badge is a digital badge or label displaying a
              website's carbon footprint, typically measured in grams of CO2 equivalent
              (gCO2e) per page view or visitor.
            </p>

            <Link href="/#contact">
              <button className="badgeButton btnBadge" aria-label="Get your website carbon badge">
                Get the badge
              </button>
            </Link>
          </div>

          <div className="badgeMedia">
            <Image 
              src="/images/corbon-img-3-2.png" 
              alt="Carbon Badge" 
              width={300} 
              height={200} 
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetBadge;
