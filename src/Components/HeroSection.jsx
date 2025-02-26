import React, { useState } from "react";
import { Wallet, Users, FileText, Gift, ChevronRight } from "lucide-react";
import Background from "../assets/Background.png";
import ReferralModal from "./ReferalModal";

const ReferEarnPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="inter-font min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-blue-600 font-bold text-xl">Accredian</div>
            <div className="ml-6 hidden md:block">
              <button className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm">
                Courses
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Refer & Earn
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Login
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200">
              Try for free
            </button>
          </div>
          <button className="md:hidden text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className="flex justify-center mt-6">
        <div className="bg-white rounded-full inline-flex shadow-sm min-w-max">
          <button className="px-6 py-2 text-blue-600 bg-blue-50 rounded-full font-medium">
            Refer
          </button>
          <button className="px-6 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
            Benefits
          </button>
          <button className="px-6 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
            FAQs
          </button>
          <button className="px-6 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
            Support
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-12 md:py-20 max-w-screen-xl min-h-[700px]">
        <div className="bg-white rounded-2xl shadow-xl relative flex flex-col md:flex-row items-center justify-between overflow-hidden h-full">
          <div className="absolute top-4 left-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center animate-float">
            <span className="text-green-600 text-2xl font-bold">₹</span>
          </div>
          <div className="absolute top-20 left-20 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center animate-float3">
            <span className="text-blue-600 text-xl font-bold">₹</span>
          </div>
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center animate-float2">
            <span className="text-green-600 text-2xl font-bold">₹</span>
          </div>
          <div className="absolute bottom-20 right-20 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center animate-float4">
            <span className="text-blue-600 text-xl font-bold">₹</span>
          </div>

          <div className="md:w-1/2 px-8 md:px-12 py-10 md:py-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4 animate-pulse">
              Limited Time Offer!
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Let's Learn <br /> &amp;{" "}
              <span className="text-blue-600 relative">
                Earn
                <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-100 -z-10"></span>
              </span>
            </h1>
            <p className="text-lg text-gray-600 mt-6 max-w-md">
              Get a chance to win up to{" "}
              <span className="text-blue-500 font-bold text-2xl relative inline-block">
                Rs. 15,000
                <svg
                  className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
            </p>
            <p className="text-gray-500 mt-2">
              For each successful referral you make
            </p>
            <button
              onClick={openModal}
              className="mt-8 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
            >
              <span>Refer Now</span>
              <ChevronRight className="h-5 w-5 ml-2" />
            </button>
            <div className="mt-6 flex items-center text-sm text-gray-500">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>No registration fees</span>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center relative py-8 md:py-0">
            <div className="relative w-full max-w-md transform transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-blue-400 rounded-xl blur-2xl opacity-20"></div>
              <img
                src={Background}
                alt="People showing mobile app"
                className="rounded-xl shadow-lg relative z-10 w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20 animate-bounce-slow">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Gift className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">New offer!</p>
                    <p className="text-sm font-bold">10% Extra Bonus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800">
          How Do I <span className="text-blue-600">Refer?</span>
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mt-3 mb-16 text-lg">
          Follow these simple steps to refer your friends and start earning
          rewards.
        </p>

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="relative group">
            <div className="relative w-full aspect-square bg-white border-2 border-blue-300 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-500">
              <div className="bg-white p-6 rounded-full shadow-lg w-4/5 h-4/5 flex flex-col items-center justify-center text-center transform transition-transform duration-500 group-hover:scale-110">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Step 1</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Submit referrals easily via our website's referral section.
                </p>
              </div>
            </div>
            <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-14 h-1 bg-blue-300 z-10"></div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="relative w-full aspect-square bg-white border-2 border-blue-400 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-500">
              <div className="bg-white p-6 rounded-full shadow-lg w-4/5 h-4/5 flex flex-col items-center justify-center text-center transform transition-transform duration-500 group-hover:scale-110">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Step 2</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Earn rewards once your referral joins an Accredian program.
                </p>
              </div>
            </div>
            <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-14 h-1 bg-blue-300 z-10"></div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="relative w-full aspect-square bg-white border-2 border-blue-300 rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-500">
              <div className="bg-white p-6 rounded-full shadow-lg w-4/5 h-4/5 flex flex-col items-center justify-center text-center transform transition-transform duration-500 group-hover:scale-110">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <Wallet className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Step 3</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Referee receives a bonus 90 days after program enrollment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="mb-6 inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
            Start Earning Today!
          </div>
          <button
            onClick={openModal}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-10 py-4 rounded-lg font-medium text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center mx-auto"
          >
            <span>Refer Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Referral Modal */}
      <ReferralModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes float2 {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes float3 {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-8px) translateX(5px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }
        @keyframes float4 {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-12px) translateX(-5px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 5s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 6s ease-in-out infinite;
        }
        .animate-float4 {
          animation: float4 7s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ReferEarnPage;
