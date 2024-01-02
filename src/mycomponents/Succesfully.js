import React from 'react'
import logo from './image 4.png'
import celebrate from './celebrate.png'
import { Link } from 'react-router-dom'
const Succesfully = () => {
  return (
<>
<div className='flex ml-36 mt-5'>
<Link to='/'>
        <img src={logo} alt="" className="h-8" />
        </Link>        <h1 className='text-2xl font-bold pl-2 pr-2'>Musicart</h1>
        <p className='pt-2'>Home</p>
        </div>
     <div className=' flex justify-center items-center h-96'>
        <div className='justify-center h-72 w-1/2 border-2 shadow-2xl'>
            <div className='flex justify-center'>
            <img src={celebrate} alt="" className='h-28 '/>
            </div>
            <div className='text-center'>
            <h1>Order is placed successfully!</h1>
            <h4>You  will be receiving a confirmation email with order details</h4>
            <a href='/'><button className='text-white bg-[#2E0052] pt-2 pb-2 mb-3 mt-3 pr-11 pl-11 rounded-xl'>Go back to Home page</button>
            </a>
            </div>
        </div>
     </div>
     <div className='text-center bg-[#2E0052] text-white p-5 mt-36'>
    Musicart | All rights reserved
    </div>
</>

)
}

export default Succesfully