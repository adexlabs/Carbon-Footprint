'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-layout">
        {/* Logo */}
        <Link href="/" className="logo">
          <Image
            src="/images/logo-image1.png"
            alt="Carbon Foot Print"
            title="Carbon Foot Print"
            width={120}
            height={50}
            priority
          />
        </Link>

        {/* Navigation Menu */}
        <nav className={`header-right ${menuOpen ? "show" : ""}`} id="myTopnav">
          <Link className="active" href="/">Home</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/#about">API</Link>
          <Link href="/#get_a_Badge">Get a Badge</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        {/* Menu Toggle Button (Mobile) */}
        <button className="icon" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? (
            <Image
              src="/images/close.png"
              alt="X"
              title="X"
              width={30}
              height={30}
            />
          ) : (
            <Image
              src="/images/menu-image.png"
              alt="Menu"
              title="Menu"
              width={30}
              height={30}
            />
          )}
        </button>

        {/* Contact Us Button */}
        <div className="contact-us">
          <Link href="/#contact">Contact Us</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
