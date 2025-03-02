import React from 'react'
import footer from '../../public/images/footer.png';
import AppleStore from "../../public/images/apple_app_store.png";  
import GoogleStore from "../../public/images/google_play_store.png";
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <div className="flex flex-wrap justify-evenly justify-items-center font-medium text-lg py-4">
      <div className=''>
        <p>AboutUs</p>
        <p>We're hiring</p>
        <p>Hire interns</p>
        <p>Post a Job</p>
      </div>
      <div className=''>
      <p>Team Diary</p>
      <p>Blog</p>
      <p>Our Services</p>
      <p>Free Job Alerts</p>
      </div>
      <div className='hidden md:block'>
      <p>Terms & Conditions</p>
      <p>Privacy</p>
      <p>Contact us</p>
      <p>AboutUs</p>
      </div>
      <div className='hidden md:block'>
      <p>Sitemap</p>
      <p>College TPO registration</p>
      <p>List of Companies</p>
      <p>AboutUs</p>
      </div>
    </div>
    <div className='flex justify-around items-center bg-blue-500'>
       <p className='py-4 text-white font-medium text-xl text-center'>©Copyright 2025 Hire & Hired
       Scholiverse Educare Private Limited</p>
    </div>
    </>
  )
}

export default Footer