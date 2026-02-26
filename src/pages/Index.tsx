import { useState, useEffect } from "react";
import IntroScreen from "@/components/IntroScreen";
import Hero from "@/components/sections/Hero";
import { usePageTitle } from "@/hooks/usePageTitle";

const INTRO_SHOWN_KEY = "trots-intro-shown";

const Index = () => {
  usePageTitle();
  const [showIntro, setShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
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
      {introComplete && <Hero />}
    </>
  );
};

export default Index;
