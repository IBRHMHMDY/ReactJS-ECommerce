import Slider from 'react-slick'
import { heroData } from './herodata.js'

export const Hero = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }
  return (
    <div className='bg-gray-100 dark:bg-gray-950 dark:text-white py-10 relative overflow-hidden md:min-h-[800px] min-h-[400px] flex justify-center items-center duration-300'>
        {/* Background Pattern */}
        <div className='bg-primary/40 w-[400px] h-[400px] absolute 
        top-20 right-15 
        md:right-52 lg:hidden
        rounded-full -z-9'></div>
        {/* Hero Section */}
        <div className='container pb-8 sm:pb-0'>
            <Slider {...settings} >
                {
                    heroData.map((data)=> (
                        <div key={data.id} >
                            <div className='grid grid-cols-1 sm:grid-cols-2 '>
                                {/* Info Section */}
                                <div className='flex flex-col gap-5 justify-center pt-8 sm:pt-0 px-5 text-center sm:text-left order-2 sm:order-1 z-10'>
                                    <h1 data-aos="zoom-in" data-aos-delay="100" className='text-4xl sm:text-5xl lg:text-6xl font-bold'>{data.title}</h1>
                                    <p data-aos="zoom-in" data-aos-delay="300" className='text-sm'>{data.description}</p>
                                    <div>
                                        <button className='bg-gradient-to-r from-primary to-secondary rounded-md py-1 px-3 text-white text-xl hover:bg-gradient-to-l hover:scale-105 font-bold'
                                        data-aos="zoom-in" data-aos-delay="600">
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                {/* Image Section */}
                                <div className='order-1 sm:order-2 '>
                                    <div className='relative z-10'>
                                    <img data-aos="fade-up" data-aos-delay="100" src={data.image} alt={data.title} className='w-[600px] h-[600px] mx-auto object-contain'/>
                                    </div>
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
