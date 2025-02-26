import React, { useState } from "react";
import { XIcon, Users, FileText } from "lucide-react";
import { useReferralContext } from "../Context/ReferralContext"; // Import the context hook
import ReferralSuccessModal from "./ReferralSuccessModal"; // Import the success modal

const ReferralModal = ({ isOpen, onClose }) => {
  const { submitReferral, isSubmitting: isContextSubmitting } =
    useReferralContext();

  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    yourPhone: "",
    friendName: "",
    friendEmail: "",
    friendPhone: "",
    course: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isLocalSubmitting, setIsLocalSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [referralCode, setReferralCode] = useState("");

  const isSubmitting = isLocalSubmitting || isContextSubmitting;

  if (!isOpen && !showSuccessModal) return null;

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });

    if (errors[id]) {
      setErrors({
        ...errors,
        [id]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validations
    if (!formData.yourName.trim()) newErrors.yourName = "Your name is required";
    if (!formData.friendName.trim())
      newErrors.friendName = "Friend's name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.yourEmail.trim()) {
      newErrors.yourEmail = "Your email is required";
    } else if (!emailRegex.test(formData.yourEmail)) {
      newErrors.yourEmail = "Please enter a valid email";
    }

    if (!formData.friendEmail.trim()) {
      newErrors.friendEmail = "Friend's email is required";
    } else if (!emailRegex.test(formData.friendEmail)) {
      newErrors.friendEmail = "Please enter a valid email";
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.yourPhone.trim()) {
      newErrors.yourPhone = "Your phone number is required";
    } else if (!phoneRegex.test(formData.yourPhone.replace(/\D/g, ""))) {
      newErrors.yourPhone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.friendPhone.trim()) {
      newErrors.friendPhone = "Friend's phone number is required";
    } else if (!phoneRegex.test(formData.friendPhone.replace(/\D/g, ""))) {
      newErrors.friendPhone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.course) newErrors.course = "Please select a course";

    if (!formData.consent) newErrors.consent = "You must confirm consent";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLocalSubmitting(true);

    try {
      const timestamp = new Date().getTime().toString().slice(-6);
      const generatedReferralCode = `${formData.friendName
        .slice(0, 3)
        .toUpperCase()}${timestamp}`;

      await submitReferral(generatedReferralCode, formData);

      setSubmittedData({...formData});
      setReferralCode(generatedReferralCode);
      
      setShowSuccessModal(true);
    } catch (error) {
    } finally {
      setIsLocalSubmitting(false);
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccessModal(false);
    setFormData({
      yourName: "",
      yourEmail: "",
      yourPhone: "",
      friendName: "",
      friendEmail: "",
      friendPhone: "",
      course: "",
      consent: false,
    });
    onClose();
  };

  if (showSuccessModal) {
    return (
      <ReferralSuccessModal 
        isOpen={showSuccessModal} 
        onClose={handleCloseSuccess} 
        formData={submittedData}
        referralCode={referralCode}
      />
    );
  }

  return (
    <div className="inter-font fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop with improved blur */}
      <div
        className="fixed inset-0 bg-blue-950/30 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto max-h-[90vh] overflow-hidden animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b p-5 sticky top-0 bg-white z-10">
          <h3 className="text-xl font-semibold text-gray-800">
            Refer a Friend
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Close modal"
          >
            <XIcon className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-70px)]">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                Your Information
              </h4>
              <div className="space-y-3">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="yourName"
                  >
                    Your Name*
                  </label>
                  <input
                    id="yourName"
                    type="text"
                    value={formData.yourName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.yourName
                        ? "border-red-500 ring-1 ring-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                    placeholder="Enter your full name"
                  />
                  {errors.yourName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.yourName}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="yourEmail"
                  >
                    Your Email*
                  </label>
                  <input
                    id="yourEmail"
                    type="email"
                    value={formData.yourEmail}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.yourEmail
                        ? "border-red-500 ring-1 ring-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                    placeholder="Enter your email address"
                  />
                  {errors.yourEmail && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.yourEmail}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="yourPhone"
                  >
                    Your Phone Number*
                  </label>
                  <input
                    id="yourPhone"
                    type="tel"
                    value={formData.yourPhone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.yourPhone
                        ? "border-red-500 ring-1 ring-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                    placeholder="Enter your 10-digit phone number"
                  />
                  {errors.yourPhone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.yourPhone}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-600" />
                Friend's Information
              </h4>
              <div className="space-y-3">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="friendName"
                  >
                    Friend's Name*
                  </label>
                  <input
                    id="friendName"
                    type="text"
                    value={formData.friendName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.friendName
                        ? "border-red-500 ring-1 ring-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                    placeholder="Enter your friend's full name"
                  />
                  {errors.friendName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.friendName}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="friendEmail"
                  >
                    Friend's Email*
                  </label>
                  <input
                    id="friendEmail"
                    type="email"
                    value={formData.friendEmail}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.friendEmail
                        ? "border-red-500 ring-1 ring-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                    placeholder="Enter your friend's email address"
                  />
                  {errors.friendEmail && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.friendEmail}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="friendPhone"
                  >
                    Friend's Phone Number*
                  </label>
                  <input
                    id="friendPhone"
                    type="tel"
                    value={formData.friendPhone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 border ${
                      errors.friendPhone
                        ? "border-red-500 ring-1 ring-red-500"
                        : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                    placeholder="Enter your friend's 10-digit phone number"
                  />
                  {errors.friendPhone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.friendPhone}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="course"
              >
                Course Interested In*
              </label>
              <select
                id="course"
                value={formData.course}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 border ${
                  errors.course
                    ? "border-red-500 ring-1 ring-red-500"
                    : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white`}
              >
                <option value="">Select a course</option>
                <option value="web-development">Web Development</option>
                <option value="data-science">Data Science</option>
                <option value="machine-learning">Machine Learning</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="cloud-computing">Cloud Computing</option>
              </select>
              {errors.course && (
                <p className="text-red-500 text-xs mt-1">{errors.course}</p>
              )}
            </div>

            <div>
              <label className="flex items-start">
                <input
                  id="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={handleChange}
                  className={`mt-1 h-4 w-4 text-blue-600 ${
                    errors.consent
                      ? "border-red-500 ring-1 ring-red-500"
                      : "border-gray-300"
                  } rounded focus:ring-blue-500`}
                />
                <span className="ml-2 text-sm text-gray-600">
                  I confirm that I have obtained consent from my friend to share
                  their information, and I agree to the terms and conditions.
                </span>
              </label>
              {errors.consent && (
                <p className="text-red-500 text-xs mt-1">{errors.consent}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Referral</span>
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
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReferralModal;