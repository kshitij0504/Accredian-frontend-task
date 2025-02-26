import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Cash Rewards",
      description: "Earn up to $50 for each successful referral.",
      icon: "💰",
    },
    {
      title: "Course Discounts",
      description: "Both you and your friend get 15% off on future courses.",
      icon: "🏷️",
    },
    {
      title: "Exclusive Content",
      description: "Unlock premium content with every 3 successful referrals.",
      icon: "🔓",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Why <span className="text-blue-600">Refer Friends?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-md text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-200"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
