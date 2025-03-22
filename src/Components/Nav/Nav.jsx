import React, { useRef } from 'react'

export default function Nav() {
    const menu = useRef();
    const menuhandler = () =>{
        menu.current.classList.toggle('show-menu')
    }
  return (
    <>
    <div className='h-[80px] flex justify-between items-center relative py-[0] px-[12%]'>
        <div className='flex items-center justify-center'>
            <span className='text-2xl cursor-pointer font-medium text-red-600'>icecreame</span>

        </div>

        <div ref={menu} className='md:static absolute left-[-100%] md:left-[0%] z-999 gap-[20px] w-full transition-all duration-600 bg-white md:bg-[#ffded1]'>
        <ul className='w-full flex flex-col justify-center md:flex-row gap-[15px]'>
            <li className='nav-wrapper'><a href="#"  className='Nav-link'>Home</a></li>
            <li className='nav-wrapper'><a href="#" className='Nav-link'>Category</a></li>
            <li className='nav-wrapper'><a href="#" className='Nav-link'>Popular</a></li>
            <li className='nav-wrapper'><a href="#" className='Nav-link'>Shop</a></li>
            <li className='nav-wrapper'><a href="#" className='Nav-link'>Testimonials</a></li>
            <li className='nav-wrapper'><a href="#" className='Nav-link'>Contact</a></li>

        </ul>            
        </div>

        <div className='flex gap-[20px] items-center justify-center'>
            <button className='btn nav-btn'>Shop Now <i className='ri-arrow-right-line'></i> </button>
            <i className='ri-menu-3-line btn bar' onClick={menuhandler}></i>
        </div>
    </div>
      
    </>
  )
}
