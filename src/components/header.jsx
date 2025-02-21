import React from 'react'
import logo from '../../public/images/logo.png';
export const Header = () => {
  return (
    <div className='flex justify-around bg-blue-500 py-3'>
      <div className='flex justify-between'>
        <img src={logo} alt='logo' className='w-32'/>
        <span className='flex justify-items-center '>
            <a href='#' className='noUnderline text-lg font-medium text-white py-1 px-3 my-auto mx-2  rounded-lg border'>Internship</a>
            <a href='#' className='noUnderline text-lg font-medium text-white py-1 px-3 my-auto mx-2  rounded-lg border'>Jobs</a>
        </span>
      </div>
      <div className='md:flex justify-between hidden '>
        <input type='search' placeholder='Search' className='border-2 border-white rounded-lg my-auto px-3 py-1 outline-none'/>
      <a href='#' className='noUnderline text-lg font-medium text-white py-1 px-3 my-auto mx-2 rounded-lg border'>Login</a>
      <a href='#' className='noUnderline text-lg font-medium text-white py-1 px-3 my-auto mx-1 border rounded-lg '>SignUp</a>
      </div>
    </div>
  )
}
