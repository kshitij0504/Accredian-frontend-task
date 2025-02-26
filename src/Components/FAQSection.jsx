import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "How many friends can I refer?",
      answer: "You can refer as many friends as you want! There's no limit to how many rewards you can earn."
    },
    {
      question: "When will I receive my reward?",
      answer: "Rewards are processed within 7 days after your friend completes enrollment in a course."
    },
    {
      question: "Can I refer someone who is already registered?",
      answer: "The referral program is only valid for new users who haven't previously created an account."
    },
    {
      question: "How long is the referral link valid?",
      answer: "Your referral link is valid for 30 days from the date you send the invitation."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;