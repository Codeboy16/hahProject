import React from 'react';
import footer from '/images/footer.png';
import AppleStore from "/images/apple_app_store.png";  
import GoogleStore from "/images/google_play_store.png";
import { Link } from 'react-router-dom';
import favLogo from '/images/cLogo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8">
      {/* Footer Links */}
      <div className="container px-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2 mx-auto">
          <p className="text-lg font-semibold">About Us</p>
          <Link to="/" className="text-gray-400 hover:text-white transition duration-300 font-medium noUnderline">We're Hiring</Link><br/>
          <Link to="/" className="text-gray-400 hover:text-white transition duration-300 font-medium noUnderline">Hire Interns</Link><br/>
          <Link to="/" className="text-gray-400 hover:text-white transition duration-300 font-medium noUnderline">Post a Job</Link>
        </div>

        <div className="space-y-2 mx-auto">
          <p className="text-lg font-semibold">Team Diary</p>
          <Link to="/" className="text-gray-400 hover:text-white transition duration-300 font-medium noUnderline">Blog</Link><br/>
          <Link to="/" className="text-gray-400 hover:text-white transition duration-300 font-medium noUnderline">Our Services</Link><br/>
          <Link to="/" className="text-gray-400 hover:text-white transition duration-300 font-medium noUnderline">Free Job Alerts</Link>
        </div>

        <div className="space-y-2 mx-auto">
          <p className="text-lg font-semibold">Legal</p>
          <Link to="/" className="text-gray-400 hover:text-white transition duration-300 font-medium noUnderline">Terms & Conditions</Link><br/>
          <Link to="/" className="text-gray-400 hover:text-white transition duration-300 font-medium noUnderline">Privacy</Link><br/>
          <Link to="/" className="text-gray-400 hover:text-white transition duration-300 font-medium noUnderline">Contact Us</Link>
        </div>

        <div className="space-y-2 mx-auto">
          <p className="text-lg font-semibold">More Links</p>
          <Link to="/" className="text-gray-400 hover:text-white transition duration-300 font-medium noUnderline">Home</Link><br/>
          <Link to="/poc" className="text-gray-400 hover:text-white transition duration-300 font-medium noUnderline">Poc</Link><br/>
          <Link to="/vendor" className="text-gray-400 hover:text-white transition duration-300 font-medium noUnderline">Vendor</Link><br/>
          <Link to="/employee" className="text-gray-400 hover:text-white transition duration-300 font-medium noUnderline">Employee</Link>
        </div>
      </div>

      {/* App Download Section */}
      <div className="flex flex-wrap justify-center items-center space-x-6 mt-8">
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img src={AppleStore} alt="Download on the App Store" className="w-40 h-auto hover:scale-102 transition transform duration-500" />
        </a>
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <img src={GoogleStore} alt="Get it on Google Play" className="w-40 h-auto hover:scale-102 transition transform duration-500" />
        </a>
        <img src={favLogo} className='w-14'/>
      </div>

      {/* Footer Bottom */}
      <div className="bg-blue-600 text-center py-2 mt-8">
        <p className="text-white font-medium text-xl px-4">©2025 Hire & Hired Scholiverse Educare Private Limited</p>
      </div>
    </footer>
  );
};

export default Footer;
