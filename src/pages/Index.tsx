import { useState, useEffect } from "react";
import IntroScreen from "@/components/IntroScreen";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";

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
          </main>
        </div>
      )}
    </>
  );
};

export default Index;
