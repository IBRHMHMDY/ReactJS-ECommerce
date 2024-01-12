import React from 'react'
import HeaderSection from '../HeaderSection/HeaderSection'
import Slider from 'react-slick'
import TestimonialsData from './TestimonialsData.js';

export const Testimonials = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }
  return (
    <div className='dark:bg-gray-900 dark:text-white py-16'>
        <div className='text-black font-bold'>
            <HeaderSection title="Testimonials" subtitle="What Our Customers are Saying" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. " />
        </div>
        <div className='container my-16'>
            <Slider {...settings} className='flex shadow-lg items-center gap-8 '>
                {
                    TestimonialsData.map((data)=> (
                        <div key={data.id} className=' dark:bg-gray-950 py-8 px-4 mx-4' >
                            <div className='flex items-center gap-6 px-3'>
                                <img src={data.img} alt={data.id} className='rounded-full w-20 h-20' />
                                <div>
                                    <h4 className='font-bold'>{data.name}</h4>
                                    <p>{data.text}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    </div>
  )
}

export default Testimonials