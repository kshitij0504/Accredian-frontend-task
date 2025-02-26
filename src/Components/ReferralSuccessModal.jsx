import React from "react";
import { CheckCircle, Copy, X } from "lucide-react";

const ReferralSuccessModal = ({ isOpen, onClose, formData, referralCode }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="inter-font fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop with improved blur */}
      <div
        className="fixed inset-0 bg-blue-950/30 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto max-h-[90vh] overflow-auto animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b p-5 sticky top-0 bg-white z-10">
          <h3 className="text-xl font-semibold text-gray-800">
            Referral Submitted!
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="rounded-full bg-green-100 p-3 mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h4 className="text-lg font-medium text-gray-800 text-center">
              Your referral was successfully submitted!
            </h4>
            <p className="text-gray-600 text-center mt-2">
              Thank you for referring your friend to our courses.
            </p>
          </div>

          {/* Referral Code */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h5 className="text-sm font-medium text-gray-700 mb-2">
              Your Referral Code:
            </h5>
            <div className="flex items-center justify-between bg-white rounded-md border p-3">
              <span className="font-mono font-medium text-blue-600">
                {referralCode}
              </span>
              <button
                onClick={copyToClipboard}
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-200 relative"
                aria-label="Copy referral code"
              >
                <Copy className="h-5 w-5 text-gray-500" />
                {copied && (
                  <span className="absolute right-0 bottom-full mb-2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Submission Details */}
          <div className="space-y-6">
            <h5 className="text-base font-semibold text-gray-800">
              Referral Details
            </h5>

            <div className="bg-gray-50 rounded-lg p-5 shadow-md space-y-4">
              {/* Your Information */}
              <div className="border-b pb-3">
                <h6 className="text-xs font-semibold text-gray-500 uppercase">
                  Your Information
                </h6>
                <div className="mt-1 text-sm text-gray-700 space-y-1">
                  <p>
                    <span className="font-medium">Name:</span>{" "}
                    {formData.yourName}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    {formData.yourEmail}
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span>{" "}
                    {formData.yourPhone}
                  </p>
                </div>
              </div>

              {/* Friend's Information */}
              <div className="border-b pb-3">
                <h6 className="text-xs font-semibold text-gray-500 uppercase">
                  Friend's Information
                </h6>
                <div className="mt-1 text-sm text-gray-700 space-y-1">
                  <p>
                    <span className="font-medium">Name:</span>{" "}
                    {formData.friendName}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    {formData.friendEmail}
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span>{" "}
                    {formData.friendPhone}
                  </p>
                </div>
              </div>

              {/* Course Selected */}
              <div>
                <h6 className="text-xs font-semibold text-gray-500 uppercase">
                  Course Selected
                </h6>
                <p className="mt-1 text-sm font-medium text-gray-800 capitalize">
                  {formData.course.replace(/-/g, " ")}
                </p>
              </div>
            </div>

            {/* Close Button */}
            <div className="mt-6">
              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 
                 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralSuccessModal;
