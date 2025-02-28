import React,{useEffect} from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import Cards from '../components/cards';
import Poster from '../../public/images/poster.jpg';
function Main() {
      useEffect(() => { 
        document.title = "Hire And Hired";
      }, [])
  return (
    <div>
        <Header/>
<<<<<<< HEAD
        {/* Main Section */}
        <div className='h-full'>
          <h1 className='kanit-bold text-center pt-5 text-4xl'>Make your dream career a reality</h1>
          <h1 className='kanit-bold text-center pb-2 text-4xl'>Hire And Hired</h1>
          <img src={Poster} alt="poster" className='w-1/2 h-1/2 mb-5 bg-cover mx-auto'/>

        </div>
        {/* Cards Section */}
        <div className='container mx-auto flex flex-wrap justify-around my-4'>
        <Cards img="https://training-uploads.internshala.com/homepage/media/specialization_section/card-images-desktop/full-stack-web-development-specialization-v3.png.webp?v=v2" name="Web Development" location="Remote Internship" time="2" stip="12000-25000"/>
        <Cards img="https://training-uploads.internshala.com/homepage/media/specialization_section/card-images-desktop/data-science-specialization-v3.png.webp?v=v2" name="Data Science" location="Online Internship" time="6" stip="1000-2000"/>
        <Cards img="https://training-uploads.internshala.com/homepage/media/specialization_section/card-images-desktop/human-resource-management-specialization.png.webp?v=v2" name="Management" location="Hybrid Internship" time="3" stip="1000-2000"/>
        <Cards img="https://training-uploads.internshala.com/homepage/media/specialization_section/card-images-desktop/digital-marketing-specialization-v2.png.webp?v=v2" name="Digital Marketing" location="Remote Internship" time="4" stip="2000-2500"/>
        <Cards img="https://training-uploads.internshala.com/homepage/media/specialization_section/card-images-desktop/ui-ux-specialization-v2.png.webp?v=v2" name="UI/UX Design" location="Online Internship" time="6" stip="1000-5000"/>
        </div>
        {/* Status Container */}
        <hr/>
        <div className='flex flex-wrap justify-center items-center py-5 '>
          <div className='md:ml-4 px-5 text-center md:border-r'>
            <h1 className='kanit-medium  font-extrabold text-3xl text-blue-500'>300K+</h1>
            <p className='font-semibold text-xl text-gray-700'>companies hiring</p>
          </div>
          <div className='px-5 text-center md:border-r'>
            <h1 className='kanit-medium  font-extrabold text-3xl text-blue-500'>10K+</h1>
            <p className='font-semibold text-xl text-gray-700'>new openings everyday</p>
          </div>
          <div className='px-5 text-center md:border-r'>
            <h1 className='kanit-medium  font-extrabold text-3xl text-blue-500'>21Mn+</h1>
            <p className='font-semibold text-xl text-gray-700'>active students</p>
          </div>
          <div className='px-5 md:mr-4 text-center'>
            <h1 className='kanit-medium  font-extrabold text-3xl text-blue-500'>600K+</h1>
            <p className='font-semibold text-xl text-gray-700'>learners</p>
          </div>
        </div>
        {/* sub_footer */}
        <div className="bgFooter max-h-screen text-white mb-4">
       <div className='flex justify-around items-center py-5'>
          <div className=''>
           <h1 className='text-center md:text-left'>Empower your career with<br/> Hire & Hired today</h1>
          </div>
          <div>
          <span className='hidden md:flex justify-items-center '>
            <Link to='/' className='noUnderline text-lg font-medium text-white py-1 px-6 my-auto mx-2  rounded-lg border'>Internship</Link>
            <Link to='/' className='noUnderline text-lg font-medium text-white py-1 px-6 my-auto mx-2  rounded-lg border'>Jobs</Link>
        </span>
          </div>
       </div>
        </div>
        <Footer/>
=======
        <h1 className='text-center text-4xl py-4 font-medium'>Main Page Section</h1>
        <h1 className='text-center underline'> HELLO EVERYONE <></></h1>
>>>>>>> e6351e017c279d9380e48397b18c1df374a1cc0b
    </div>
  )
}

export default Main