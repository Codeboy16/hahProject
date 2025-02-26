import React,{useEffect} from 'react'
import Header from '../components/header';

function Main() {
      useEffect(() => { 
        document.title = "Hire And Hired";
      }, [])
  return (
    <div>
        <Header/>
        <h1 className='text-center text-4xl py-4 font-medium'>Main Page Section</h1>
        <h1 className='text-center underline'> HELLO EVERYONE <></></h1>
    </div>
  )
}

export default Main