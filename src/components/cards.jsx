import React from 'react'
import cLogo from '../../public/images/cLogo.png'
const Cards = ({img,name,location,time,stip}) => {
  return (
    <>
    <div className="card w-60 m-2">
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <span className='flex'>
    <i className="ri-map-pin-line pr-2 font-medium"></i>
    <p className='font-medium'>{location}</p>
    </span>
    <span className='flex'>
    <i className="ri-time-line pr-2 font-medium"></i>
    <p className='font-medium'>{time} months</p>
    </span>
    <span className='flex'>
    <i className="ri-money-rupee-circle-line pr-2 font-medium"></i>
    <p className='font-medium'>{stip}K</p>
    </span>
    <a href="#" class="btn btn-primary px-5 font-medium my-2">Apply Now </a>
  </div>
</div>
    </>
  )
}

export default Cards;