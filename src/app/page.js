"use client";
import { useState } from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import AboutSection from "./Components/AboutSection";
import ProjectsSection from "./Components/Projectssection";
import ContactSection from "./Components/Contactsection";
export default function Home() {
  const [welcomeVisible, setWelcomeVisible] = useState(true);
  const [welcomeLeaving, setWelcomeLeaving] = useState(false);

  const enterPortfolio = () => {
    if (welcomeLeaving) return;
    setWelcomeLeaving(true);
    window.setTimeout(() => setWelcomeVisible(false), 900);
  };

  return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
          {welcomeVisible && (
            <button
              type="button"
              onClick={enterPortfolio}
              aria-label="Enter Alaa Ashraf Ramadan's portfolio"
              className={`welcome-screen ${welcomeLeaving ? 'welcome-screen-leaving' : ''}`}
            >
              <span className="welcome-orb welcome-orb-one" />
              <span className="welcome-orb welcome-orb-two" />
              <span className="welcome-content">
                <span className="welcome-kicker">Alaa Ashraf Ramadan · Frontend Developer & UI/UX Designer</span>
                <span className="welcome-title">Welcome to<br /><span>my portfolio</span></span>
                <span className="welcome-prompt"><span className="welcome-pulse" />Click anywhere to explore</span>
              </span>
              <span className="welcome-corner" aria-hidden="true">&lt; / &gt;</span>
            </button>
          )}
          <Navbar/>
          <div className="container mx-auto px-12 py-4">
        <Hero></Hero>
        <AboutSection></AboutSection>
        <ProjectsSection></ProjectsSection>
        <ContactSection></ContactSection>
        </div>
        </main>
    );
}
