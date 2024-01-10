import React from 'react'

const HeaderSection = ({subtitle, title, description}) => {
  return (
    <div className='flex flex-col justify-center gap-1 text-center p-3 dark:text-white'>
        <h6 data-aos="fade-down"
            data-aos-delay="0" 
            className='text-sm text-primary'>{subtitle}</h6>
        <h1 data-aos="fade-down"
            data-aos-delay="300" 
            className='text-4xl'>{title}</h1>
        <p data-aos="fade-down"
           data-aos-delay="600" 
           className='text-gray-400'>{description}</p>
    </div>
  )
}

export default HeaderSection