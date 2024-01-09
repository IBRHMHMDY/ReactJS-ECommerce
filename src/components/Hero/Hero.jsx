import Slider from 'react-slick'
import { banners } from './bannerdata.js'

export const Hero = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }
  return (
    <div className='relative overflow-hidden bg-gray-100 min-h-[550px] sm:min-h-[650px] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-300'>
        {/* Background Pattern */}
        <div className='bg-primary/40 w-[700px] h-[700px] absolute -top-1/2 right-20 md:right-10 md:h-[600px] rounded-3xl rotate-45 -z-9 scale-105'></div>
        {/* Hero Section */}
        <div className='container pb-8 sm:pb-0'>
            <Slider {...settings} >
                {
                    banners.map((banner)=> (
                        <div key={banner.id} >
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                                {/* Info Section */}
                                <div className='flex flex-col gap-5 justify-center pt-12 sm:pt-0 px-5 text-center sm:text-left order-2 sm:order-1 z-10'>
                                    <h1 data-aos="zoom-in" data-aos-delay="100" className='text-4xl sm:text-5xl lg:text-6xl font-bold'>{banner.title}</h1>
                                    <p data-aos="zoom-in" data-aos-delay="300" className='text-sm'>{banner.description}</p>
                                    <div  >
                                        <button className='bg-gradient-to-r from-primary to-secondary rounded-md py-1 px-3 text-white hover:bg-gradient-to-l hover:scale-105 font-bold'
                                        data-aos="zoom-in" data-aos-delay="600">
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                {/* Image Section */}
                                <div className='order-1 sm:order-2 '>
                                    <div className='relative z-10'>
                                    <img data-aos="fade-up" data-aos-delay="100" src={banner.image} alt={banner.title} className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] mx-auto object-contain sm:scale-125'/>
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
