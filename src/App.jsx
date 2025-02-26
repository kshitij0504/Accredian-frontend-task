// App.jsx - Main Component
import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenifitsSection';
import HowItWorksSection from './components/HowItWorksSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

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