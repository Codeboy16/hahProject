import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo from "../../public/images/logo.png"
function Login() {
  useEffect(() => { 
    document.title = "Login";
  }, [])
  return (
    <div className='bgColor h-screen w-full flex justify-center items-center'>
       <div className='bg-white rounded-xl w-96 md:w-1/2 m-auto my-auto mt-20 flex justify-around p-4'>
        <div className='my-auto hidden lg:flex'>
          <img src={logo} className='my-auto hidden lg:flex'/>
        </div>
        <div className=''>
          <h1 className='text-2xl font-bold'>Login</h1>
          <form method='POST' className='flex flex-col'>   
             <input type="email" name="email" placeholder='Enter The Email ' className='w-72 border my-2 rounded-md px-3 py-2 text-2xl text-black' required/>
              <input type="password" name="password" placeholder='Enter The Password ' className='w-72 border my-2 rounded-md px-3 py-2 text-2xl text-black' required/>
              <button className='btn btn-primary my-2'>Submit</button>
          </form>
          <div className='text-center mt-6'>
          <p className='text-gray-600 text-sm'>
            Don't Have account? 
            <Link to='/signup' className='text-blue-600 hover:underline'>
               SignUp
            </Link>
          </p>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Login