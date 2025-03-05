import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menu from '../Menu/Menu';
import { carousel1, carousel2, carousel3, carousel4, dishes2 } from '../../assets/Images';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';


export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  };

  return (
    <section className='overflow-hidden'>
      <div>
        <Slider {...settings}>
          <div>
            <img className='w-full h-[350px]' src={carousel1} alt="Restaurant image" />
          </div>
          <div>
            <img className='w-full h-[350px]' src={carousel2} alt="Restaurant image" />
          </div>
          <div>
            <img className='w-full h-[350px]' src={carousel3} alt="Restaurant image" />
          </div>
          <div>
            <img className='w-full h-[350px]' src={carousel4} alt="Restaurant image" />
          </div>
        </Slider>
      </div>

      <div 
      style={{backgroundImage: `url(${dishes2})`, backgroundColor: 'rgba(0, 0, 0, 0.571)'}}
      className='mt-5 pt-5 pb-10 px-8 bg-cover bg-blend-multiply'
      >
        <div>
        <p 
        className='text-white text-xl p-3 bg-[#FFA500] text-center'>Only 200 meters from Shri Ram Janmbhumi Corridor</p>
        </div>

        <marquee width="100%" direction="alternate" behavior="scroll" scrollamount="4" className="text-white text-xl my-8">
                  In Main Rampath Road, In front of Shri Hanuman Garhi Tiraha...
        </marquee>

        <div className='flex flex-wrap gap-y-5'>
          <div
            className='text-white pb-4 bg-[#FFA500] basis-full text-center'>
            <a href="/menu">
            <span
            style={{fontFamily: "Tangerine, cursive"}}
            className='text-[40px] fontstyle'>Our Menu</span>
            </a>
            <h3 className='text-center'>
              <span className='text-4xl font-semibold'>200</span>
              <sup className='font-normal text-3xl'>+</sup>
              <span className='font-semibold text-xl'>Items</span>
            </h3>
          </div>

          <div
          className='text-white pb-4 bg-[#FFA500] basis-full text-center'>
            <span
            style={{fontFamily: "Tangerine, cursive"}}
            className='text-[40px] fontstyle'>Daily Orders</span>
            <h3 className='text-center'>
              <span className='text-4xl font-semibold'>150</span>
              <sup className='font-normal text-3xl'>+</sup>
              <span className='font-semibold text-xl'>Orders</span>
            </h3>
          </div>

          <div
          className='text-white pb-4 bg-[#FFA500] basis-full text-center'>
            <a href="https://www.google.com/search?q=dalmia+saffron+vatika+ayodhya&sca_esv=f9c5db1b7e09e798&rlz=1C1VDKB_enIN1080IN1080&sxsrf=ADLYWIIH-lt83mEZddZ4lhumR9Qo1IMAhA%3A1730978928647&ei=cKQsZ-CYJ4L24-EPhuvrkQY&oq=dalmia+saffron+vatika+&gs_lp=Egxnd3Mtd2l6LXNlcnAiFmRhbG1pYSBzYWZmcm9uIHZhdGlrYSAqAggAMgUQABiABDILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGKIEGIkFMggQABiABBiiBEiuDVAAWABwAHgAkAEAmAGeAaAB9QGqAQMxLjG4AQHIAQD4AQGYAgKgAv0BmAMAkgcDMS4xoAe-DA&sclient=gws-wiz-serp#lrd=0x399a07a1a8119435:0x26c61a72301f724a,1,,,," target='_blank'>
            <span
            style={{fontFamily: "Tangerine, cursive"}}
            className='text-[40px] fontstyle'>Customers Feedback</span>
            <h3 className='text-center'>
              <span className='text-4xl font-semibold'>150</span>
              <sup className='font-normal text-3xl'>+</sup>
              <span className='font-semibold text-xl'>Reviews</span>
            </h3>
            </a>
          </div>

          <div
          className='text-white pb-4 bg-[#FFA500] basis-full text-center'>
            <span
            style={{fontFamily: "Tangerine, cursive"}}
            className='text-[40px] fontstyle'>Happy Devotees</span>
            <h3 className='text-center'>
              <span className='text-4xl font-semibold'>2000</span>
              <sup className='font-normal text-3xl'>+</sup>
              <span className='font-semibold text-xl'>Ongoing</span>
            </h3>
          </div>
        </div>
      </div>
      <Menu />
      <Gallery />
      <Contact />
      <section className='overflow-hidden'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.3606737675686!2d82.20074047543547!3d26.796642076716605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07a1a8119435%3A0x26c61a72301f724a!2sDalmia&#39;s%20Saffron%20Vatika%20Restaurant!5e0!3m2!1sen!2sin!4v1732270605865!5m2!1sen!2sin" className='w-full' height="350" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </section>
  )
}
