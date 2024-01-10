import HeaderSection from '../HeaderSection/HeaderSection'
import { Rated } from './DataProducts'
import { FaStar } from 'react-icons/fa6'
const RatedProducts = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-950 dark:text-white py-10'>
        <HeaderSection 
          subtitle="Top Rated Products for you"
          title="Top Rated Products"
          description="consectetur adipisicing elit Tempore accusantium"
          />
        {/* Products Section */}
        <div className='px-16 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-28 md:gap-20 place-items-center mt-[120px] '>
          {
            Rated.map((product)=>(
              <div key={product.id} 
                className='relative min-w-[300px] md:max-w-[350px] bg-white dark:bg-gray-800 group shadow-xl
                    rounded-2xl hover:bg-black/80  dark:hover:bg-primary/40 cursor-pointer duration-300'>
                <div className='h-[60px] mb-5'>
                  <img src={product.img} alt={product.title}
                  className='max-w-[140px] md:max-w-[150px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'/>
                </div>
                <div className='flex flex-col gap-3 px-6 py-5'>
                  <span className='flex justify-center items-center gap-2 '>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                    <FaStar className='text-yellow-500'/>
                  </span>
                  <h1 className='text-xl font-bold text-center'>{product.title}</h1>
                  <p className='text-gray-500 line-clamp-2 group-hover:text-white text-center duration-300 text-sm mb-5'>{product.description}</p>
                  <button className='px-3 py-1 rounded-md bg-primary text-white hover:text-primary hover:bg-white transition-all duration-300 mx-auto w-full'>Order Now</button>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default RatedProducts;