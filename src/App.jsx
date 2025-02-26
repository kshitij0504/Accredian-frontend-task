// App.jsx - Main Component
import React, { useState } from "react";
import HeroSection from "./Components/HeroSection";
import BenefitsSection from "./Components/BenifitsSection";
import HowItWorksSection from "./Components/HowItWorksSection";
import FAQSection from "./Components/FAQSection";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="inter-font min-h-screen font-inter bg-gray-50">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;
