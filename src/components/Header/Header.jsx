import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {

  const toggle = () => {
    const navLinks = document.getElementById('nav-links')
    navLinks.classList.toggle('!left-0')
  }



  return (
    <header className='overflow-hidden'>
      <div className='bg-white border border-b-gray-300 fixed top-0 left-0 right-0 w-full z-50'>
        <div className='flex justify-between relative pt-6 pb-6 px-3'>
          
          <Link to='/'>
          <h1 className='text-2xl space-x-2 font-bold font-[sans-serif] sm:text-[26px]'>
            <span className=''>Dalmia's</span>
            <span style={{color: "#FFA500"}}>Saffron</span>
            <span className='text-green-700'>Vatika</span>
          </h1>
          </Link>

          <ul className='flex flex-col absolute bg-white top-full -left-full w-full items-center py-6 duration-700 gap-y-4 lg:flex lg:flex-row lg:space-x-8 lg:items-center lg:relative' id='nav-links'>
            <li>
              <NavLink
              onClick={toggle}
              to="/"
              className={({isActive}) => 
              `${isActive ? "text-[#FFA500]" : ""} transition duration-500`
              }>
              HOME
              </NavLink>
            </li>  
            <li>
              <NavLink
              onClick={toggle}
              to="/menu"
              className={({isActive}) => 
              `${isActive ? "text-[#FFA500]" : ""} transition duration-500`
              }>
              MENU
              </NavLink>
            </li>  
            <li>
              <NavLink
              onClick={toggle}
              to="/gallery"
              className={({isActive}) => 
              `${isActive ? "text-[#FFA500]" : ""} transition duration-500`
              }>
              GALLERY
              </NavLink>
            </li>  
            <li>
              <NavLink
              onClick={toggle}
              to="/contact"
              className={({isActive}) => 
              `${isActive ? "text-[#FFA500]" : ""} transition duration-500`
              }>
              CONTACT
              </NavLink>
            </li>  
          </ul> 

          <a href="#" className='block my-auto lg:hidden' onClick={toggle}>
           <i className="border border-solid border-1-[#ddd] fa-solid fa-bars text-[#FFA500] text-xl px-3 py-2"></i>
          </a>
        </div>
      </div>
    </header>
  )
}

