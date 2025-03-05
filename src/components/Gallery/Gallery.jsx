import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dishes2, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9 } from '../../assets/Images'
import { Link } from 'react-router-dom';

function Gallery() {
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
        <div className='text-center mb-2 pt-12'>
            <span 
            style={{fontFamily: "Tangerine, cursive", color: "#FFA500"}}
            className='text-5xl font-bold'
            >Discover</span>
            <h2 className='font-semibold text-4xl -mt-2'>Our Gallery</h2>
        </div>

        <div className='mt-10 mb-12 container'>
          <div className='flex flex-wrap gap-y-8'>
            <div className='px-1'>
              <a href='javascript:void(0)'>
                <img src={gallery1} alt="" />
              </a>
            </div>
            <div className='px-1'>
              <a href='javascript:void(0)'>
                <img src={gallery2} alt="" />
              </a>
            </div>
            <div className='px-1'>
              <a href='javascript:void(0)'>
                <img src={gallery3} alt="" />
              </a>
            </div>
            <div className='px-1'>
              <a href='javascript:void(0)'>
                <img src={gallery4} alt="" />
              </a>
            </div>
            <div className='px-1'>
              <a href='javascript:void(0)'>
                <img src={gallery5} alt="" />
              </a>
            </div>
            <div className='px-1'>
              <a href='javascript:void(0)'>
                <img src={gallery6} alt="" />
              </a>
            </div>
            <div className='px-1'>
              <a href='javascript:void(0)'>
                <img src={gallery7} alt="" />
              </a>
            </div>
            <div className='px-1'>
              <a href='javascript:void(0)'>
                <img src={gallery8} alt="" />
              </a>
            </div>
            <div className='px-1'>
              <a href='javascript:void(0)'>
                <img src={gallery9} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div style={{backgroundImage: `url(${dishes2})`, backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
        className='bg-blend-hue text-center pt-16 pb-24'>
          
          <div className='mb-10'>
            <span 
            style={{fontFamily: "Tangerine, cursive", color: "#FFA500"}}
            className='text-5xl font-bold'
            >Testimonials</span>
            <h2 className='font-bold text-3xl sm:text-4xl -mt-2 text-white'>What Customers Say</h2>
          </div>

          <div className='text-white px-5'>
            <Slider {...settings}>  
              <div>
                <p className='text-center !leading-6 sm:!leading-8 tracking-[0.5px] mb-2 mt-5 font-sans'>My wife and I are from the USA and we've eaten here two days in a row now. Everything is excellent, the food is delicious, the atmosphere is very chic, all the staff are friendly, and most importantly it is extremely clean. If you're in Ayodhya and are looking for a safe spot to eat this is definitely the place.</p>
                <p className='text-lg font-bold pt-4'>- Hunter Shafranek</p>
              </div>
              <div>
                <p className='text-center !leading-6 sm:!leading-8 tracking-[0.5px] mb-2 mt-5 font-sans'>When we visited Ram Janmabhoomi Mandir, searching for neat and clean restaurant near by. Luckily we found this restaurant only 100 meters from Ram Mandir entrance. They serve variety of South Indian and elsewhere.
                It is a neat and clean veg restaurant, moderately priced and personel care food your gourmet requirement. Do visit when you are in Ayodhya.</p>
                <p className='text-lg font-bold pt-4'>- P Maree</p>
              </div>
              <div>
                <p className='text-center !leading-6 sm:!leading-8 tracking-[0.5px] mb-2 mt-5 font-sans'>The food was awsm and the ambience was outstanding as we came from Gujarat we were looking for a good resturant and our search ended here with total satisfaction Hats off staff and environment. Vegetarian options: Must try North Indian food if you are looking for the real taste of India........</p>
                <p className='text-lg font-bold pt-4'>- Sagar Rajput</p>
              </div>
              <div>
                <p className='text-center !leading-6 sm:!leading-8 tracking-[0.5px] mb-2 mt-5 font-sans'>Very good restaurant in between Ram mandir and Hanuman garhi, food and ambience very good. Even the crockery were was eye soothing. The price is also budget friendly. We had deluxe thali, their gobi Manchurian was also very tasty. Staff were courteous and friendly.</p>
                <p className='text-lg font-bold pt-4'>- The Thrifty traveller</p>
              </div>
              <div>
                <p className='text-center !leading-6 sm:!leading-8 tracking-[0.5px] mb-2 mt-5 font-sans'>The food here is delicious. The service is excellent. The place is clean and comfortable. The prices are reasonable. I would like to visit again.</p>
                <p className='text-lg font-bold pt-4'>- Chandramouli Roy </p>
              </div>
            </Slider>
          </div>
        </div>
    </section>
  )
}

export default Gallery