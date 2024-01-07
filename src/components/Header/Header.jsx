import Logo from '../../assets/logo.png'
import { MdOutlineSearch } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';

const Header = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white relative z-50 duration-200'>
      {/* Upper NavBar */}
      <div className="bg-primary/40 py-2">
        <div className='container flex justify-between items-center px-2'>
          {/* Logo */}
          <div>
            <a href="/" className='flex items-center gap-2 font-semibold text-2xl'>
              <img src={Logo} alt="Logo image" className='w-10'/>
              MyShop
            </a>
          </div>
          {/* Search Bar */}
          <div className='flex justify-between items-center gap-2'>
            <div className='group relative hidden sm:block'>
              <input type="text" placeholder='search...'
              className='w-[200px] sm:w-[200px] 
                          group-hover:w-[300px] transition-all duration-300 ease-in-out
                          border border-gray-300
                          rounded-full px-3 py-1
                          focus:border-1 focus:outline-none focus:border-primary'/>
              <MdOutlineSearch className='absolute top-1/2 right-3 -translate-y-1/2
                                        text-gray-500 group-hover:text-primary'/>
            </div>          
            {/* Button Order */}
            <button className='bg-gradient-to-r from-primary to-secondary
                              hover:bg-gradient-to-l transition-all duration-200 ease-in-out
                              py-1 px-2 rounded-md flex items-center gap-2 group w-fit'>
              <FaCartShopping className='text-white text-xl shadow-sm cursor-pointer' />
            </button>
            {/* Switch Themes Button */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
        {/* Lower NavBar */}
      <div className=''></div>
    </div>
  )
}

export default Header