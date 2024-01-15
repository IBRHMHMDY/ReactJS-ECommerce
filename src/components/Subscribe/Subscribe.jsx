import Background from '../../assets/website/orange-pattern.jpg'
import { IoSendSharp } from "react-icons/io5";

const Subscribe = () => {
    const ImgBackground = {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
    }
  return (
    <div style={ImgBackground} className='text-white p-10 md:px-60'>
        <div className='container backdrop-blur-sm'>
            <div className='flex flex-col justify-center items-center gap-6 '>
                <h1 className='text-3xl'>Get Notified About to new Products</h1>
                <div className='flex items-center justify-between text-xl text-black font-bold w-full'>
                    <input type="text" placeholder='Enter Your Email' className='w-full p-3 outline-none rounded-ss-md rounded-es-md' />
                    <div className='bg-white font-bold cursor-pointer p-4 rounded-ee-md rounded-se-md'>
                    <IoSendSharp className='text-xl text-primary '/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe