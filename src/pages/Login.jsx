import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../public/images/logo.png";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => {
    document.title = "Login";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Email validation (sanitize to allow only valid email format)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    
    // Password validation (min 8 and max 16 characters, no special characters)
    const passwordSpecialCharRegex = /[^a-zA-Z0-9]/; // Special characters in password
    if (password.length < 8 || password.length > 16) {
      setError("Password should be between 8 and 16 characters.");
      return;
    }
    if (passwordSpecialCharRegex.test(password)) {
      setError("Password should not contain special characters.");
      return;
    }

    // Clear error if all validation passes
    setError('');
    
    // Here, you can handle the form submission (e.g., call an API to log in)
    console.log("Form submitted with:", { email, password });
  };

  return (
    <div className='bgColor1 h-screen w-full flex justify-center items-center'>
      <div className='bg-white rounded-xl w-96 md:w-1/2 m-auto my-auto mt-20 flex justify-around p-5'>
        <div className='my-auto hidden lg:flex'>
          <img src={logo} className='my-auto hidden lg:flex' alt="Logo" />
        </div>
        <div className=''>
          <h1 className='text-2xl font-bold'>Login</h1>
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <input
              type="email"
              name="email"
              placeholder='Enter The Email'
              className='w-72 border my-2 rounded-md px-3 py-2 text-2xl text-black'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(''); // Clear error on input change
              }}
              required
            />
            <input
              type="password"
              name="password"
              placeholder='Enter The Password'
              className='w-72 border my-2 rounded-md px-3 py-2 text-2xl text-black'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(''); // Clear error on input change
              }}
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className='btn btn-primary my-2'>Submit</button>
          </form>
          <div className='text-center mt-6'>
            <p className='text-gray-600 text-sm'>
              Don't have an account?
              <Link to='/signup' className='text-blue-600 hover:underline'>
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;