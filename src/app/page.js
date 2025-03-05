import HeroSection from "@/components/HeroSection";
import Content from "@/components/Content";
import GreenPanel from "@/components/GreenPanel";
import WorkContent from "@/components/WorkContent"
import FaqSection from "@/components/FaqSection";
import GetBadge from "@/components/GetBadge";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";


import "@/styles/Home.css"; // Import Home-specific styles

export default function Home() {
  return (
    <main className="home-container">
      <HeroSection />
      <Content/>
      <GreenPanel/>
      <WorkContent/>
      <FaqSection />
      <GetBadge/>
      <Services />
      <ContactForm />
    </main>
  );
}
