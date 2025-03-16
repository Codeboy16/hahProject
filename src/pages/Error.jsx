import React,{useEffect} from 'react';
import cLogo from "../../public/images/cLogo.png";
import axios from 'axios';
const Error = () => {
  useEffect(()=>{
    axios.get("https://dummyjson.com/c/82ed-d71a-40ad-a64a")
    .then((res)=>{console.log(res.data)})
    .catch(error => {console.log(error)})
    console.log("Error Page")
    },[])

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <img src="./images/drink_coffee.gif" className='w-72'/>
      <h1 className="text-9xl font-extrabold text-red-600 animate-bounce">! 404 !</h1>
      <h2 className="text-3xl font-semibold mt-2 animate-fade-in">Oops! Page Not Found</h2>
      <p className="mt-2 text-lg animate-fade-in">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <a 
        href="/" 
        className="mt-3 px-8 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 animate-fade-in noUnderline font-bold"
      >
        Go Back Home
      </a>
    </div>
  );
}

export default Error;