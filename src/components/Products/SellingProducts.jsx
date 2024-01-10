import {FaStar} from 'react-icons/fa6'
import {Selling} from './DataProducts.js'
import HeaderSection from '../HeaderSection/HeaderSection.jsx'
const Products = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-white py-10'>
        <HeaderSection subtitle={"Top Selling Products for you"} title={"Top Selling Products"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit Tempore accusantium"}/>
        <div className='px-10 py-15'>
            <div className='container flex justify-between items-center flex-wrap gap-6'>
                {
                    Selling.map((product)=>(
                        <div key={product.id}
                            className='space-y-2'
                            data-aos="fade-up"
                            data-aos-delay={product.aosDelay}>
                            <img src={product.img} alt={product.title} className='w-[150px] h-[200px] rounded-md object-cover' />
                            <h4 className='font-bold'>{product.title}</h4>
                            <h4 className='text-sm text-gray-400 '>{product.color}</h4>
                            <div className='flex items-center gap-1'>
                                <FaStar className='text-primary'/>
                                <span>{product.rated}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="1200" className='w-full mx-auto text-center p-5'>
            <button className='px-3 py-1 rounded-md text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l hover:scale-105'>View All Products</button>
        </div>
    </div>
  )
}

export default Products