import { useState, useEffect } from "react";
import IntroScreen from "@/components/IntroScreen";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import SelectedWorks from "@/components/sections/SelectedWorks";
import Philosophy from "@/components/sections/Philosophy";
import Process from "@/components/sections/Process";
import ContactSection from "@/components/sections/ContactSection";

const INTRO_SHOWN_KEY = "trots-intro-shown";

const Index = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Check if intro has been shown before
    const hasSeenIntro = sessionStorage.getItem(INTRO_SHOWN_KEY);
    if (!hasSeenIntro) {
      setShowIntro(true);
    } else {
      setIntroComplete(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem(INTRO_SHOWN_KEY, "true");
    setShowIntro(false);
    setIntroComplete(true);
  };

  return (
    <>
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
      
      {introComplete && (
        <div className="min-h-screen">
          <Header />
          <main>
            <Hero />
            <SelectedWorks />
            <Philosophy />
            <Process />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;