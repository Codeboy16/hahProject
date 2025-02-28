import React,{useState} from 'react'
import Clogo from '../../public/images/cLogo.png';
import {Link} from 'react-router-dom';
function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <div className='flex justify-between px-3 md:justify-around bg-blue-500 py-3'>
      <div className='flex justify-between'>
        <img src={Clogo} alt='logo' className='w-32'/>
        <span className='hidden md:flex justify-items-center '>
            <a href='#' className='noUnderline text-lg font-medium text-white py-1 px-3 my-auto mx-2  rounded-lg border'>Internship</a>
            <a href='#' className='noUnderline text-lg font-medium text-white py-1 px-3 my-auto mx-2  rounded-lg border'>Jobs</a>
        </span>
      </div>
      <div className='md:flex justify-between hidden '>
        <input type='search' placeholder='Search' className='border-2 border-white rounded-lg my-auto px-3 py-1 outline-none'/>
              <Link to='/login' className='noUnderline text-lg font-medium text-white py-1 px-3 my-auto mx-2 rounded-lg border'>Login</Link>
              <Link to='/signup' className='noUnderline text-lg font-medium text-white py-1 px-3 my-auto mx-1 border rounded-lg '>SignUp</Link>

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
