import { createContext, useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ReferralContext = createContext();

export const ReferralProvider = ({ children }) => {
  const [referralCode, setReferralCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitReferral = async (code, formData) => {
    try {
      console.log("Submitting referral:", code, formData);
      setIsSubmitting(true);

      const payload = {
        referralCode: code,
        referrerName: formData.yourName,
        referrerEmail: formData.yourEmail,
        referrerPhone: formData.yourPhone,
        friendName: formData.friendName,
        friendEmail: formData.friendEmail,
        friendPhone: formData.friendPhone,
        courseName: formData.course,
        consent: formData.consent,
      };

      const response = await axios.post("http://localhost:5000/api/submit", payload);

      if (response.status === 200) {
        toast.success("Referral submitted successfully!");
        setReferralCode(code);
        return response.data;
      }
    } catch (error) {
      console.error("Referral submission error:", error);
      toast.error(
        error.response?.data?.message || "Failed to submit referral!"
      );
      throw error; // Re-throw to allow component to handle the error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ReferralContext.Provider
      value={{ referralCode, submitReferral, isSubmitting }}
    >
      {children}
    </ReferralContext.Provider>
  );
};

export const useReferralContext = () => {
  const context = useContext(ReferralContext);
  if (!context) {
    throw new Error(
      "useReferralContext must be used within a ReferralProvider"
    );
  }
  return context;
};
