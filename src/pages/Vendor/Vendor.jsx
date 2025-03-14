// Vendor.js
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Profile from './Profile'; // Create this component
import Resume from './Resume'; // Create this component
import AppliedJobs from './AppliedJob'; // Create this component
import AuthHeader from '../../components/AuthHeader';
import Footer from '../../components/Footer';

const Vendor = () => {
  return (
    <>
      <AuthHeader data="Vendor"/>
      <div className="flex min-h-screen bg-gray-100">
        {/* Left Side Menu */}
        <div className="bg-blue-400 w-1/4 p-5 shadow-lg hidden md:block">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Vendor Menu</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/vendor/profile" className="block p-3 text-white rounded hover:bg-green-500 transition duration-200 noUnderline text-xl font-medium">Profile</Link>
            </li>
            <li>
              <Link to="/vendor/resume" className="block p-3 text-white rounded hover:bg-green-500 transition duration-200 noUnderline text-xl font-medium">Resume</Link>
            </li>
            <li>
              <Link to="/vendor/applied" className="block p-3 text-white rounded hover:bg-green-500 transition duration-200 noUnderline text-xl font-medium">Applied Jobs</Link>
            </li>
          </ul>
        </div>

        {/* Right Side Content Section */}
        <div className="w-full md:w-3/4 md:p-5">
          <div className="bg-white p-2 md:p-6 rounded-lg shadow-md">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/applied" element={<AppliedJobs />} />
              <Route path="/" element={<Profile/>} />
            </Routes>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Vendor;