'use client';

import Image from "next/image";
import Link from "next/link";
import "@/styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="page-width">
        <div className="footer-container">
          <div className="footer-logo">
            <Image
              src="/images/logo-image1.png"
              alt="Carbon Footprint"
              title="Carbon Footprint"
              width={120}
              height={50}
              priority
            />
          </div>
          <ul>
            <li><Link href="#how_it_work">How it works</Link></li>
            <li><Link href="#FaqSection">FAQ</Link></li>
            <li><Link href="#Services">Services</Link></li>
            <li><Link href="#Contact">Contact Us</Link></li>
            <li><Link href="#Privacy Policy">Privacy Policy</Link></li>
          </ul>
          <div className="bottom">
            <p className="copyright">
              A project by Eco-Friendly Web Alliance to raise awareness on website emissions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;