import React,{useState} from 'react'
import Logo from '/images/cLogo.png'
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function Header(){
  //Auth0 api
  const { user, isAuthenticated,logout } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <div className='flex justify-between px-3 md:justify-around bg-gray-800 py-3'>
      <div className='flex justify-around'>
        <Link className='flex no-underline noUnderline' to="/">
        <img src={Logo} alt='logo' className='w-14'/>
        <p className='text-white my-auto text-xl font-bold relative right-2 noUnderline no-underline'>H&H</p>
        </Link>

        <span className='hidden md:flex justify-items-center ml-4'>
            <a href='#' className='noUnderline text-lg font-medium text-white py-1 px-3 my-auto mx-2  rounded-lg border'>Internship</a>
            <a href='#' className='noUnderline text-lg font-medium text-white py-1 px-4 my-auto mx-2  rounded-lg border'>
              Jobs</a>
        </span>
      </div>
      <div className='md:flex justify-between hidden '>
        <input type='search' placeholder='Search..' className='border-2 border-gray-300 rounded-lg my-auto px-4 py-2 outline-none  focus:ring-blue-500 focus:border-blue-500 text-white placeholder:text-white'/>
        <i className="ri-search-line text-white text-lg font-semibold relative right-8 my-auto"></i>
        {
  isAuthenticated ? (
    <div className="flex items-center">
      <p className='px-2 my-auto font-medium text-white'>{user.name}</p>
      <img src={user.picture} className='w-10 px-1 rounded-full'/>
      <button 
        className='ml-4 bg-red-600 text-white font-semibold py-2 px-4 rounded-2xl shadow-md hover:bg-red-700 transition duration-300 ease-in-out ' 
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      >
        Logout
      </button>
    </div>
  ) : (
    <div className="flex items-center">
      <Link 
        to='/login' 
        className='noUnderline font-medium text-white py-2 px-4 mx-2 rounded-lg  bg-blue-600 transition duration-300 ease-in-out'
      >
       <i className="ri-user-line text-lg"></i> Login
      </Link>
      <Link 
        to='/signup' 
        className='noUnderline font-medium text-white py-2 px-4 mx-1 rounded-lg  border-white bg-green-600 hover:text-green-800 transition duration-300 ease-in-out'
      >
        <i className="ri-shield-user-line px-1 text-lg"></i>SignUp
      </Link>
    </div>
  )
}
             
      </div>
      <button className='md:hidden text-3xl text-white' onClick={toggleMenu}>
          <i className={`ri-menu-line text-3xl ${isMenuOpen ? 'hidden' : 'block'}`}></i>
          <i className={`ri-close-line text-3xl ${isMenuOpen ? 'block' : 'hidden'}`}></i>
        </button>
    </div>
          {/* Show the Phone Menu */}
       {/* Mobile Menu */}
       {isMenuOpen && (
        <div className='fixed top-0 right-0 w-2/3 h-full bg-blue-500 text-white z-50 p-4 md:hidden'>
          <div className='flex justify-between items-center'>
            <h1 className='text-xl font-bold py-4'>Menu</h1>
            <button onClick={toggleMenu}>
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>
          <div className='flex flex-col space-y-4'>
            <Link to='/login' className='text-white text-xl font-bold no-underline' onClick={toggleMenu}>Login</Link>
            <Link to='/signup' className='text-white text-xl font-bold' onClick={toggleMenu}>SignUp</Link>
            <a href='#' className='text-white text-xl font-bold' onClick={toggleMenu}>Internship</a>
            <a href='#' className='text-white text-xl font-bold' onClick={toggleMenu}>Jobs</a>
          </div>
        </div>
      )}
    </>
  )
}

export default Header;
