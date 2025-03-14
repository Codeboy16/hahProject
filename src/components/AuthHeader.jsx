import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../public/images/cLogo.png"
const AuthHeader = ({data}) => {
  return (
    <header className='bg-gray-800 text-white py-3 shadow-md flex justify-between md:justify-around items-center px-6'>
    <span className='flex '>
      <img src={Logo} className='w-13'/>
    <h3 className='text-lg font-bold kanit-medium text-white my-auto'>{data} Section</h3>
    </span>

    <div className='hidden md:block'>
    <Link to="/search" className="ri-search-line text-xl px-2 cursor-pointer text-white noUnderline"></Link>
    <span className='mr-4 font-medium text-lg text-white kanit-medium my-auto'>
      John Doe</span>
    <Link to="/login"
      className="Round bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-8 rounded-xl transition duration-200 noUnderline"
    >
      Logout
    </Link>
    </div>
    <div className='md:hidden'>
    <i className="ri-menu-3-line text-3xl"></i>
    </div>
  </header>
  )
}

export default AuthHeader