import BtnLight from '../../assets/website/light-mode-button.png'
import BtnDark from '../../assets/website/dark-mode-button.png'
import { useEffect, useState } from 'react'
const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  )

  const element = document.documentElement;

  useEffect(() => {
    if(theme === "dark"){
      element.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }else{
      element.classList.remove("dark")
      localStorage.setItem("theme", "light")

    }
  }, [theme])
  
  return (
    <div className='relative'>
      <img src={BtnLight} alt="" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
            className={`w-12 cursor-pointer absolute right-0 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}/>
      <img src={BtnDark} alt="" onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
            className={`w-12 cursor-pointer ${theme === "light" ? "opacity-0" : "opacity-100"}`}/>
    </div>
  )
}

export default DarkMode
