import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Fill the Referral Form",
      description: "Enter your details and your friend's information"
    },
    {
      number: 2,
      title: "Friend Receives Invitation",
      description: "They get an email with your personal message and a special link"
    },
    {
      number: 3,
      title: "Friend Enrolls",
      description: "When they sign up for a course, both of you earn rewards"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex mb-8 items-start">
              <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mr-4">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;