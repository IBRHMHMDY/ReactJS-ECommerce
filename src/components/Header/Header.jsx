import Logo from '../../assets/logo.png'
import { MdOutlineSearch } from "react-icons/md";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode.jsx';
import {menuItems, subMenuItems} from './lowerbardata.js';

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
                          focus:border-1 focus:outline-none focus:border-primary text-black'/>
              <MdOutlineSearch className='absolute top-1/2 right-3 -translate-y-1/2
                                        text-gray-500 group-hover:text-primary
                                        cursor-pointer'/>
            </div>          
            {/* Button Order */}
            <button className='bg-primary py-1 px-2
                              hover:bg-secondary transition-all duration-200 ease-in-out
                               rounded-md'>
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
      <div className='px-3 hidden sm:block'>
        <ul className='flex justify-center items-center gap-[50px] p-1'>
          {
            menuItems.map((item)=> (
              <li key={item.id} className='hover:text-primary transition-all duration-300 ease-in-out'>
                <a href={item.link}>{item.title}</a>
              </li>
            ))
          }
          <li className='group relative'>
            <a href="#" className='flex items-center gap-[2px] py-2 hover:text-primary'>
              Trending
              <span className='group-hover:rotate-180 transition-all duration-300 ease-in-out'>
                <FaCaretDown />
              </span>
            </a>
            <div className='absolute z-[9999] group-hover:block hidden text-black p-2 rounded-md shadow-md w-[160px] bg-white'>
              <ul>
                {
                  subMenuItems.map((subItem)=> (
                    <li key={subItem.id} className='w-full text-sm cursor-pointer py-2 px-1 rounded-md hover:bg-primary/40 '>
                      <a href={subItem.link} className=''>{subItem.title}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header