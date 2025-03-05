import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-[#444] py-12'>
    <div className=' gap-4 mb-3 flex text-white justify-center'>
      <Link 
      to='https://www.facebook.com/profile.php?id=61567017421914'
      target='_blank'
      className='h-11 w-11 flex justify-center items-center bg-[#555] rounded-full hover:bg-[#FFA500] transition duration-500'>
      <i class="fa-brands fa-facebook"></i>
      </Link>
      <Link
      to="https://x.com/Dalmias_vatika"
      target='_blank'
      className='h-11 w-11 flex justify-center items-center bg-[#555] rounded-full hover:bg-[#FFA500] transition duration-500'>
      <i class="fa-solid fa-x"></i>
      </Link>
      <Link
      to="https://www.google.com/search?q=Dalmia%27s+Saffron+Vatika+Restaurant&sca_esv=48f637e9bc078c4b&rlz=1C1VDKB_enIN1080IN1080&sxsrf=ADLYWIKjREN4iu0t9kgwYjUM55XbazIUrA%3A1730717263811&ei=T6YoZ-SeMf6W4-EP2J7u2AU&ved=0ahUKEwikgt2dwMKJAxV-yzgGHViPG1sQ4dUDCA8&uact=5&oq=Dalmia%27s+Saffron+Vatika+Restaurant&gs_lp=Egxnd3Mtd2l6LXNlcnAiIkRhbG1pYSdzIFNhZmZyb24gVmF0aWthIFJlc3RhdXJhbnQyChAAGIAEGBQYhwIyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiiBBiJBTIIEAAYgAQYogRIgw5QgglYgglwAXgBkAEAmAHRAaAB0QGqAQMyLTG4AQPIAQD4AQL4AQGYAgKgAtgBwgIKEAAYsAMY1gQYR5gDAIgGAZAGCJIHBTEuMC4xoAfvBg&sclient=gws-wiz-serp"
      target='_blank'
      className='h-11 w-11 flex justify-center items-center bg-[#555] rounded-full hover:bg-[#FFA500] transition duration-500'>
      <i class="fa-brands fa-google-plus-g"></i>
      </Link>
      <Link
      to="https://www.instagram.com/dalmias_saffronvatika/"
      target='_blank'
      className='h-11 w-11 flex justify-center items-center bg-[#555] rounded-full hover:bg-[#FFA500] transition duration-500'>
      <i class="fa-brands fa-instagram"></i>
      </Link>
      <Link
      to="https://youtu.be/roaRJufSY9A?si=Bcvyvo5vuXFfyGRN"
      target='_blank'
      className='h-11 w-11 flex justify-center items-center bg-[#555] rounded-full hover:bg-[#FFA500] transition duration-500'>
      <i class="fa-brands fa-youtube"></i>
      </Link>
    </div>
    </div>
  )
}

export default Footer