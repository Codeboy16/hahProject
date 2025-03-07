import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../public/images/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import GoogleLogo from "../../public/images/googlelogo.png";
import linkedinLogo from "../../public/images/linkedin.png";
import GithubLogo from "../../public/images/github.png";
function Login({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  //autho) Api Data
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    document.title = "Login";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Email validation (sanitize to allow only valid email format)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check for special characters in email
    const specialCharEmailRegex = /[^\w\s@._%-+.-]/; 
    if (specialCharEmailRegex.test(email)) {
      setError("Email should not contain special characters.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    
    // Password validation (min 8 and max 16 characters, no special characters)
    const passwordSpecialCharRegex = /[^a-zA-Z0-9]/; 
    if (password.length < 8 || password.length > 16) {
      setError("Invalid Password 8 and 16 characters.");
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
    login(); // Call the login function passed as a prop from App.jsx
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

            <div className='relative'>
              <input
                type={showPassword ? "text" : "password"} // Toggle password visibility
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
              <button
                type="button"
                className='absolute right-4 top-4 text-gray-500'
                onClick={() => setShowPassword(!showPassword)} // Toggle visibility
              >
                {showPassword ? <i class="ri-eye-off-line "></i> : <i class="ri-eye-line"></i>}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className='btn btn-primary my-2 font-medium text-2xl'>Login</button>
          </form>
          <div className='text-center'>
          <button 
  onClick={() => loginWithRedirect()} 
  className="flex items-center justify-center my-2 text-lg font-medium rounded-lg border border-gray-300 bg-white hover:bg-gray-100 transition duration-300 ease-in-out px-6 py-2 shadow-md hover:shadow-lg mx-auto"
>
  Login With
  <span className='flex items-center ml-2'>
    <img src={GoogleLogo} className='w-6 h-6 mx-1' alt="Google" />
    <img src={linkedinLogo} className='w-6 h-6 mx-1' alt="LinkedIn" />
    <img src={GithubLogo} className='w-9 h-9 mx-1' alt="GitHub" />
  </span>
</button>
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