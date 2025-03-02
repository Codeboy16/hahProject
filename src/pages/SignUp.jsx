import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../public/images/logo.png";

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('Employee');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => { 
    document.title = "Sign Up";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Username validation (no special characters)
    const specialCharUsernameRegex = /[^a-zA-Z0-9]/;
    if (specialCharUsernameRegex.test(username)) {
      setError("Username should not contain special characters.");
      return;
    }
    
    // Email validation (sanitize to allow only valid email format and prevent special characters)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const specialCharEmailRegex = /[^\w\s@._%-+.-]/; // Special characters in email
    if (specialCharEmailRegex.test(email)) {
      setError("Email should not contain special characters.");
      return;
    }
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
    
    // Here, you can handle the form submission (e.g., call an API to sign up)
    console.log("Form submitted with:", { username, email, position, password });
  };

  return (
    <div className='bgColor h-screen w-full flex justify-center items-center'>
      <div className='bg-white rounded-xl w-96 md:w-1/2 m-auto my-auto mt-20 flex justify-around p-4'>
        <div className='my-auto hidden lg:flex'>
          <img src={logo} className='my-auto hidden lg:flex' />
        </div>
        <div className=''>
          <h1 className='text-2xl font-bold'>SignUp</h1>
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <input
              type="text"
              name="username"
              placeholder='Enter The Username'
              className='w-72 border my-2 rounded-md px-3 py-2 text-2xl text-black'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder='Enter The Email'
              className='w-72 border my-2 rounded-md px-3 py-2 text-2xl text-black'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <select
              name="position"
              className='w-72 border my-2 rounded-md px-2 py-2 text-2xl text-black'
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            >
              <option value="Employee">Employee</option>
              <option value="Employer">Employer</option>
              <option value="Point of Contact">Point of Contact</option>
            </select>
            <input
              type="password"
              name="password"
              placeholder='Enter The Password'
              className='w-72 border my-2 rounded-md px-3 py-2 text-2xl text-black'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className='btn btn-primary my-2'>Submit</button>
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
  );
}

export default SignUp;