import Background from '../../assets/website/footer-pattern.jpg';
import logo from '../../assets/logo.png';
import {IoLogoFacebook,IoLogoInstagram,IoLogoLinkedin,IoLocation,IoPhonePortraitOutline} from 'react-icons/io5'
const Footer = () => {
    const ImgBackground = {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
    }

    const FooterLinks = [
        {
            id: 1,
            title: 'Home',
            link: '/',
        },
        {
            id: 2,
            title: 'About',
            link: '/#about',
        },
        {
            id: 3,
            title: 'Blog',
            link: '/#blog',
        },
        {
            id: 4,
            title: 'Contact',
            link: '/#contact',
        },

    ];

  return (
    <div style={ImgBackground} className='text-white p-12'>
        <div className=''>
        <div className='grid md:grid-cols-3 lg:grid-cols-4 pb-44 gap-6'>
                <div className='flex flex-col items-start gap-4 '>
                    <div className='flex flex-col gap-4'>
                        <img src={logo} alt="Logo image" width={60} height={60}/>
                        <span className='font-bold text-2xl'>MyShop</span>
                    </div>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. officiis cumque magni et itaque nobis, nesciunt vero fuga laudantium!</p>
                </div>
                <div>
                    <h1 className='text-2xl'>Important Links</h1>
                    <ul className='flex flex-col gap-2 mt-4 text-secondary'>
                        {
                            FooterLinks.map((item)=>(
                                <li className='cursor-pointer transition-all duration-300 hover:text-primary'>
                                    <a href={item.link}>{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl'>Links</h1>
                    <ul className='flex flex-col gap-2 mt-4 text-secondary'>
                        {
                            FooterLinks.map((item)=>(
                                <li className='cursor-pointer transition-all duration-300 hover:text-primary'>
                                    <a href={item.link}>{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2 text-2xl'>
                        <span><IoLogoFacebook className='hover:text-primary cursor-pointer transition-all duration-300 ease-in-out'/></span>
                        <span><IoLogoInstagram className='hover:text-primary cursor-pointer transition-all duration-300 ease-in-out'/></span>
                        <span><IoLogoLinkedin className='hover:text-primary cursor-pointer transition-all duration-300 ease-in-out'/></span>
                    </div>
                    <div className='flex items-center gap-2 text-2xl hover:text-primary cursor-pointer'>
                        <IoLocation/>
                        <h4>Suez,Egypt</h4>
                    </div>
                    <div className='flex items-center gap-2 text-2xl hover:text-primary cursor-pointer'>
                        <IoPhonePortraitOutline />
                        <h4>0123 456 789</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer