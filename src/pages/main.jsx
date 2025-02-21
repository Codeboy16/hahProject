import React,{useEffect} from 'react'

function Main() {
      useEffect(() => { 
        document.title = "Hire And Hired";
      }, [])
  return (
    <div>
        <h1 className='text-center text-4xl py-4 font-medium'>Main Page Section</h1>
    </div>
  )
}

export default Main