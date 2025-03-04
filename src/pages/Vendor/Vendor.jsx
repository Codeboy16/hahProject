// Vendor.js
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Profile from './Profile'; // Create this component
import Resume from './Resume'; // Create this component
import AppliedJobs from './AppliedJob'; // Create this component
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const Vendor = () => {
  return (
    <>
    <Header/>
    <div className="flex">
      {/* Left Side Menu */}
      <div className="bg-gray-100 w-1/4 p-5">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li>
            <Link to="/vendor/profile" className="block p-2 hover:bg-blue-500 hover:text-white rounded">Profile</Link>
          </li>
          <li>
            <Link to="/vendor/resume" className="block p-2 hover:bg-blue-500 hover:text-white rounded">Resume</Link>
          </li>
          <li>
            <Link to="/vendor/applied" className="block p-2 hover:bg-blue-500 hover:text-white rounded">Applied Jobs</Link>
          </li>
        </ul>
      </div>

      {/* Right Side Content Section */}
      <div className="w-3/4 p-5">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/applied" element={<AppliedJobs />} />
          <Route path="/" element={<h1 className="text-2xl font-bold">Welcome to the Vendor Dashboard</h1>} />
        </Routes>
      </div>
    </div>
    <hr/>
    <Footer/>
    </>
  );
};

export default Vendor;