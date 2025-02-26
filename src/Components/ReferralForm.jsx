// components/ReferralForm.jsx
import React, { useState } from 'react';

const ReferralForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    yourName: '',
    yourEmail: '',
    friendName: '',
    friendEmail: '',
    course: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.yourName.trim()) {
      newErrors.yourName = 'Your name is required';
    }
    
    if (!formData.yourEmail.trim()) {
      newErrors.yourEmail = 'Your email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.yourEmail)) {
      newErrors.yourEmail = 'Email is invalid';
    }
    
    if (!formData.friendName.trim()) {
      newErrors.friendName = 'Friend\'s name is required';
    }
    
    if (!formData.friendEmail.trim()) {
      newErrors.friendEmail = 'Friend\'s email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.friendEmail)) {
      newErrors.friendEmail = 'Email is invalid';
    }
    
    if (!formData.course) {
      newErrors.course = 'Please select a course';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Handle form submission - API call would go here
      console.log('Form submitted:', formData);
      alert('Referral sent successfully!');
      closeModal();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="yourName" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name *
        </label>
        <input
          type="text"
          id="yourName"
          name="yourName"
          value={formData.yourName}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
            errors.yourName ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.yourName && <p className="mt-1 text-sm text-red-600">{errors.yourName}</p>}
      </div>

      <div>
        <label htmlFor="yourEmail" className="block text-sm font-medium text-gray-700 mb-1">
          Your Email *
        </label>
        <input
          type="email"
          id="yourEmail"
          name="yourEmail"
          value={formData.yourEmail}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
            errors.yourEmail ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.yourEmail && <p className="mt-1 text-sm text-red-600">{errors.yourEmail}</p>}
      </div>

      <div>
        <label htmlFor="friendName" className="block text-sm font-medium text-gray-700 mb-1">
          Friend's Name *
        </label>
        <input
          type="text"
          id="friendName"
          name="friendName"
          value={formData.friendName}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
            errors.friendName ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.friendName && <p className="mt-1 text-sm text-red-600">{errors.friendName}</p>}
      </div>

      <div>
        <label htmlFor="friendEmail" className="block text-sm font-medium text-gray-700 mb-1">
          Friend's Email *
        </label>
        <input
          type="email"
          id="friendEmail"
          name="friendEmail"
          value={formData.friendEmail}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
            errors.friendEmail ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.friendEmail && <p className="mt-1 text-sm text-red-600">{errors.friendEmail}</p>}
      </div>

      <div>
        <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
          Course to Refer *
        </label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
            errors.course ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select a course</option>
          <option value="react">React Masterclass</option>
          <option value="javascript">JavaScript Advanced</option>
          <option value="node">Node.js for Professionals</option>
          <option value="python">Python Development</option>
        </select>
        {errors.course && <p className="mt-1 text-sm text-red-600">{errors.course}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Personal Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows="3"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          placeholder="Add a personal message to your friend..."
        ></textarea>
      </div>

      <div className="flex justify-end pt-4 space-x-3">
        <button
          type="button"
          onClick={closeModal}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Send Referral
        </button>
      </div>
    </form>
  );
};

export default ReferralForm;