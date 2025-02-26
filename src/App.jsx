// App.jsx - Main Component
import React, { useState } from 'react';
import ReferralForm from './components/ReferralForm';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenifitsSection';
import HowItWorksSection from './components/HowItWorksSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="inter-font min-h-screen font-inter bg-gray-50">
      <HeroSection openModal={openModal} />
      <BenefitsSection />
      <HowItWorksSection />
      <FAQSection />
      <Footer />
      
      {/* Modal with Referral Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Refer a Friend</h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ReferralForm closeModal={closeModal} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;