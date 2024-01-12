import Background from '../../assets/website/orange-pattern.jpg'

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
            <div className='flex flex-col justify-center items-center gap-2 '>
                <h1 className='text-3xl'>Get Notified About to new Products</h1>
                <input type="text" placeholder='Enter Your Email' className='text-1xl text-black font-bold w-full p-3 outline-none rounded-md' />
            </div>
        </div>
    </div>
  )
}

export default Subscribe