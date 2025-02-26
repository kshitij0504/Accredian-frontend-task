import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2025 CourseShare. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-indigo-300 transition duration-300">Terms</a>
            <a href="#" className="hover:text-indigo-300 transition duration-300">Privacy</a>
            <a href="#" className="hover:text-indigo-300 transition duration-300">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;