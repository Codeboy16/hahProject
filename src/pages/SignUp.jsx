import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../public/images/logo.png"
function SignUp() {
  useEffect(() => { 
    document.title = "Sign Up";
  }, [])
  // const submitHandler = async (e) => {
  //   e.preventDefault()
  //   const username = e.target.username.value;
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   const data = new FormData(username,email,password)
  //   const response = await fetch('http://127.0.0.1:8000/register/', {
  //     method: 'POST',
  //     body: data
  //   })
  //   const result = await response.json()
  //   if (result.status === 'success') {
  //     alert('User registered successfully')
  //     form.reset()
  //   } else {
  //     alert('An error occurred')
  //   }
  // }
  return (
    <div className='bgColor h-screen w-full flex justify-center items-center'>
       <div className='bg-white rounded-xl w-96 md:w-1/2 m-auto my-auto mt-20 flex justify-around p-4'>
        <div className='my-auto hidden lg:flex'>
          <img src={logo} className='my-auto hidden lg:flex'/>
        </div>
        <div className=''>
          <h1 className='text-2xl font-bold'>SignUp</h1>
          <form method='POST' className='flex flex-col'>   
             <input type="text" name="username" placeholder='Enter The Username ' className='w-72 border my-2 rounded-md px-3 py-2 text-2xl text-black border-gray-950'  required/>
             <input type="email" name="email" placeholder='Enter The Email ' className='w-72 border my-2 rounded-md px-3 py-2 text-2xl text-black' required/>
             <select name="position" className='w-72 border my-2 rounded-md px-2 py-2 text-2xl text-black' required>
                   <option value="Employee">Employee</option>
                   <option value="Employer">Employer</option>
                   <option value="Point of Contact">Point of Contact</option>
              </select>
              <input type="password" name="password" placeholder='Enter The Password ' className='w-72 border my-2 rounded-md px-3 py-2 text-2xl text-black' required/>
              <button className='btn btn-primary my-2'>Submit</button>
          </form>
          <div className='text-center mt-6'>
          <p className='text-gray-600 text-sm'>
            Already have an account? 
            <Link to='/login' className='text-blue-600 hover:underline'>
               Login here
            </Link>
          </p>
        </div>
        </div>
       </div>
    </div>
  )
}

export default SignUp