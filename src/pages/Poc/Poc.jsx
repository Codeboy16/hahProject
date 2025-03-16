import React,{useEffect} from 'react'
import AuthHeader from '../../components/AuthHeader'
import Footer from '../../components/footer'
import {Routes,Route,Link } from 'react-router-dom'
import Profile from '../../components/Profile'
import PocSummary from './PocSummary'
import AppliedJobs from '../Vendor/AppliedJob'
const Poc = () => {
      useEffect(() => {   
        document.title = 'Point Of Contact';
      }, []);
  return (
    <>
     <AuthHeader data="Poc"/>
      <div className="flex min-h-screen bg-gray-200">
        {/* Left Side Menu */}
        <div className="bg-gray-900 w-1/4 p-5 shadow-lg hidden md:block">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Poc Menu</h3>
          <ul className="space-y-4">
            <li>
              <Link to="/poc/profile" className="block p-3 text-white rounded hover:bg-blue-500 transition duration-200 noUnderline text-xl font-medium">Profile</Link>
            </li>
            <li>
              <Link to="/poc/application" className="block p-3 text-white rounded hover:bg-blue-500 transition duration-200 noUnderline text-xl font-medium">Applications</Link>
            </li>
            <li>
              <Link to="/poc/applied" className="block p-3 text-white rounded hover:bg-blue-500 transition duration-200 noUnderline text-xl font-medium">Applied Jobs</Link>
            </li>
          </ul>
        </div>

        {/* Right Side Content Section */}
        <div className="w-full md:w-3/4 md:p-5">
          <div className="bg-white p-2 md:p-6 rounded-lg shadow-md">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/application" element={<PocSummary />} />
              <Route path="/applied" element={<AppliedJobs />} />
              <Route path="/" element={<Profile/>} />
            </Routes>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Poc