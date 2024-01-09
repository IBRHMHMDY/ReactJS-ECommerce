import {FaStar} from 'react-icons/fa6'
import ProductsData from './ProductsData.js'
const Products = () => {
  return (
    <div className='p-6'>
        <div className='flex flex-col justify-center text-center p-3'>
            <h6 className='text-sm text-primary'>Top Selling Products for you</h6>
            <h1 className='text-4xl'>Top Selling Products</h1>
            <p className=' text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit Tempore accusantium</p>
        </div>
        <div className='p-3 my-5'>
            <div className='container flex justify-between items-center flex-wrap gap-6'>
                {
                    ProductsData.map((product)=>(
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
        <div className='w-fit mx-auto text-center p-3'>
            <button className='px-3 py-1 rounded-md text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l hover:scale-105'>View All Products</button>
        </div>
    </div>
  )
}

export default Products