import React from 'react'
import ImgBanner from '../../assets/women/women2.jpg';
import {FaLock, FaTruckFast, FaDollarSign, FaCreditCard, FaReceipt} from 'react-icons/fa6';

const Banner = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-white py-10 '>
        <div className="container my-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mx-5">
                <div className='self-center'>
                    <img src={ImgBanner} alt=""
                    className='max-w-[400px] h-[350px] w-full mx-auto object-cover rounded-md drop-shadow-[-8px_8px_12px_rgba(0,0,0,0.5)] hover:drop-shadow-[8px_-8px_12px_rgba(0,0,0,0.5)]
                    dark:drop-shadow-[-4px_4px_12px_rgba(255,255,255,0.5)] dark:hover:drop-shadow-[4px_-4px_12px_rgba(255,255,255,0.5)]'/>
                </div>
                <div className='flex flex-col justify-center items-center sm:items-start gap-5 text-center sm:text-left my-5' >
                    <div>
                        <h1 className='text-2xl font-bold'>Winter Sale upto 50% off</h1>
                        <p className='text-gray-400 leading-5 sm:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eaque </p>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-start'>
                        <div className='flex items-center gap-3'>
                            <FaLock className='bg-violet-100 dark:bg-violet-400 rounded-full w-12 h-12 p-4 text-4xl '/>
                            <p>Quality Products</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaTruckFast className='bg-violet-100 dark:bg-violet-400 rounded-full w-12 h-12 p-4 text-4xl '/>
                            <p>Fast Delivery</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaCreditCard className='bg-violet-100 dark:bg-violet-400 rounded-full w-12 h-12 p-4 text-4xl '/>
                            <p>Easy Payment method</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaDollarSign className='bg-violet-100 dark:bg-violet-400 rounded-full w-12 h-12 p-4 text-4xl '/>
                            <p>Get Offers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner