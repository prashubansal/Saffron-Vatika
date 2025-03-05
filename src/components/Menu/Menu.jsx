import React from 'react'
import { breakfast1, breakfast2, breakfast3, breakfast4, breakfast5, breakfast6, chinese1, chinese2, chinese3, chinese4, chinese5, chinese6, northIndian1, northIndian2, northIndian3, northIndian4, northIndian5, northIndian6, otherItems1, otherItems2, otherItems3, otherItems4, otherItems5, otherItems6, southIndian1, southIndian2, southIndian3, southIndian4, southIndian5, thali1, thali2, thali3, thali4 } from '../../assets/Images'
import { Link, NavLink } from 'react-router-dom'

export default function Menu() {
  
  const Cuisines = ["breakfast", "southIndian", "northIndian", "thali", "chinese", "otherItems"]


  const changeMenu = () => {
    for (let i=0; i<Cuisines.length; i++){
      let cuisine = document.getElementById(Cuisines[i])
      // console.log(cuisine);
      // console.log(cuisine.classList.value);
      
      if (cuisine.classList.value === "block"){
        cuisine.classList.remove("block")
        cuisine.classList.add("hidden")
      }
      // console.log(cuisine.classList);
    }
  }

  return (
    <section className='mt-12 overflow-hidden'>
        <div className='text-center mb-10'>
          <span 
          style={{fontFamily: "Tangerine, cursive", color: "#FFA500"}}
          className='text-5xl font-bold'
          >Discover</span>
          <h2 className='font-semibold text-4xl -mt-2'>Our Menu</h2>
        </div>

        <ul className='flex flex-wrap pt-3 pb-10 gap-y-9 gap-x-4 justify-center px-3'>
          
          <li>
            <a
            onClick={() => {
              changeMenu()
              document.getElementById('breakfast').classList.remove('hidden')
              document.getElementById('breakfast').classList.add('block')
            }} 
            to='javascript:void(0)'
            className="links px-4 py-3 text-xl border border-b-0 border-[#FFA500] duration-50 text-white bg-[#FFA500]">
            Breakfast
            </a>
          </li>

          <li>
            <a 
            onClick={() => {
              changeMenu()
              document.getElementById('southIndian').classList.remove('hidden')
              document.getElementById('southIndian').classList.add('block')
            }}
            to="javascript:void(0)"
            className="links px-4 py-3 text-xl border border-b-0 border-[#FFA500] duration-50 text-white bg-[#FFA500]">
            South Indian
            </a>
          </li>

          <li>
            <a
            onClick={() => {
              changeMenu()
              document.getElementById('northIndian').classList.remove('hidden')
              document.getElementById('northIndian').classList.add('block')
            }}
            to='javascript:void(0)'
            className="links px-4 py-3 text-xl border border-b-0 border-[#FFA500] duration-50 text-white bg-[#FFA500]">
            North Indian
            </a>
          </li>

          <li>
            <a
            onClick={() => {
              changeMenu()
              document.getElementById('thali').classList.remove('hidden')
              document.getElementById('thali').classList.add('block')
            }}
            to='javascript:void(0)'
            className="links px-4 py-3 text-xl border border-b-0 border-[#FFA500] duration-50 text-white bg-[#FFA500]">
            Thali
            </a>
          </li>

          <li>
            <a
            onClick={() => {
              changeMenu()
              document.getElementById('chinese').classList.remove('hidden')
              document.getElementById('chinese').classList.add('block')
            }}
            to='javascript:void(0)'
            className="links px-4 py-3 text-xl border border-b-0 border-[#FFA500] duration-50 text-white bg-[#FFA500]">
            Chinese
            </a>
          </li>

          <li>
            <a
            onClick={() => {
              changeMenu()
              document.getElementById('otherItems').classList.remove('hidden')
              document.getElementById('otherItems').classList.add('block')
            }}
            to='javascript:void(0)'
            className="links px-4 py-3 text-xl border border-b-0 border-[#FFA500] duration-50 text-white bg-[#FFA500]">
            Other Items
            </a>
          </li>
        </ul>

        <div id='breakfast' className='block'>
        <div className='flex flex-wrap gap-y-10 pt-8 px-4'>

          <ul className='flex flex-col basis-full gap-y-10'>
            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={breakfast6} alt="" />
              </a>
              
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Hot Tea</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;30</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Refreshing Indian chai, spiced with cardamom, ginger, and a hint of sweetness</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={breakfast5} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Hot Coffee</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;50</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Aromatic and freshly brewed, with a perfect balance of strength and smoothness.</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={breakfast3} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Grilled Veg Sandwich</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;100</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Toasted bread filled with veggies and melted cheese.</p>
              </div>
            </li>
          </ul>

          <ul className='flex flex-col basis-full gap-y-10'>
            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={breakfast1} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Puri Bhaji</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;100</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Puffed puris with spiced potato curry, garnished with coriander and onions.</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={breakfast4} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Idli Sambhar</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;110</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Soft steamed rice cakes with tangy lentil and vegetable sambhar, served with coconut chutney.</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={breakfast2} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Choley Bhature</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;160</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Fluffy bhature with spiced chickpea curry, perfectly seasoned.</p>
              </div>

            </li>
          </ul>
        </div>
        </div>

        <div id='southIndian' className='hidden'>
        <div className='flex flex-wrap gap-y-10 pt-8 px-4'>

          <ul className='flex flex-col basis-full gap-y-10'>
            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={southIndian1} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>	
                  Idli Sambhar</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;110</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Soft, fluffy idlis served with tangy, flavorful sambhar and coconut chutney.</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={southIndian2} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Plain Dosa</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;120</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Golden, crispy dosa with a hint of ghee, perfect with sambhar and chutney.</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={southIndian3} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Masala Dosa</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;140</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Crispy dosa filled with spiced potato masala, served with chutney and sambhar.</p>
              </div>
            </li>
          </ul>

          <ul className='flex flex-col basis-full gap-y-10'>
            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={southIndian4} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Rawa Masala Dosa</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;140</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Crisp rawa dosa stuffed with spiced potato filling, served with chutney and sambhar.</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={southIndian5} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Uttapam</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;180</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Thick, savory pancake topped with onions, tomatoes, and herbs for a burst of flavor.</p>
              </div>
            </li>
          </ul>
        </div>
        </div>

        <div id='northIndian' className='hidden'>
        <div className='flex flex-wrap gap-y-10 pt-8 px-4'>

          <ul className='flex flex-col basis-full gap-y-10'>
            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={northIndian1} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Matar Paneer</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;240</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Soft paneer cubes with green peas in a creamy, mildly spiced tomato gravy, garnished with coriander.</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={northIndian2} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Handi Paneer</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;290</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Soft paneer cubes simmered in a rich, creamy gravy with authentic spices for a rustic, flavorful taste.</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={northIndian3} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Rajma</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;220</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Hearty red kidney beans cooked in a thick tomato-onion gravy with aromatic spices, perfect with rice.</p>
              </div>
            </li>
          </ul>

          <ul className='flex flex-col basis-full gap-y-10'>
            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={northIndian4} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Malai Kofta</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;280</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Soft paneer and vegetable dumplings in a rich, creamy cashew gravy, topped with a hint of cream.</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={northIndian5} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Dal Makhani</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;180</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Slow-cooked black lentils in a creamy, buttery sauce with subtle spices, garnished with fresh cream.</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={northIndian6} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Mix Veg</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;200</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Assorted seasonal vegetables cooked with Indian spices in a light, flavorful curry.</p>
              </div>

            </li>
          </ul>
        </div>
        </div>

        <div id='thali' className='hidden'>
        <div className='flex flex-wrap gap-y-10 pt-8 px-4'>

          <ul className='flex flex-col basis-full gap-y-10'>
            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={thali1} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Regular Thali</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;150</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>(Dal Fry, vegetable Curry, Daily Special Vegetable, 2 Tandoori Roti, Plain rice.)</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={thali2} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Executive Thali</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;200</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>(Dal Fry, Paneer Curry, Daily Special Vegetable, 1 Tandoori Roti, 1 baby Naan, Jeera Rice, Salad, Raita, Sweet.)</p>
              </div>
            </li>
          </ul>

          <ul className='flex flex-col basis-full gap-y-10'>
            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={thali4} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Special Packing Thali</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;240</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>(Dal Fry, Paneer Curry, Daily Special Vegetable, 2 Paratha/ 4 Tawa Roti, Jeera Rice, Salad, Raita, Sweet.)</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={thali3} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Deluxe Thali</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;240</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>(Dal Makhani, Paneer Curry, Daily Special Vegetable, 1 Laccha Paratha, Pulao, 1 baby Naan, Papad, Salad, Raita, Sweet.)</p>
              </div>
            </li>
          </ul>
        </div>
        </div>

        <div id='chinese' className='hidden'>
        <div className='flex flex-wrap gap-y-10 pt-8 px-4'>

          <ul className='flex flex-col basis-full gap-y-10'>
            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={chinese1} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Hakka Noodles</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;180</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Stir-fried noodles tossed with colorful vegetables, soy sauce, and a hint of garlic, offering a perfect Indo-Chinese flavor.</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={chinese2} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>	
                  Pizza</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;190</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Thin, crispy crust topped with melted cheese, fresh vegetables, and a blend of Italian herbs and spices.</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={chinese3} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Burger</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;70</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Soft burger bun filled with a spiced vegetable patty, fresh lettuce, tomatoes, and creamy mayo.</p>
              </div>
            </li>
          </ul>

          <ul className='flex flex-col basis-full gap-y-10'>
            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={chinese4} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Momos</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;130</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Steamed or fried dumplings filled with finely chopped vegetables, served with spicy red chili chutney.</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={chinese5} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Crispy Chilli Potato</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;160</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Crunchy potato strips tossed in a tangy and spicy chili sauce with bell peppers and spring onions.</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={chinese6} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Veg Fried Rice</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;180</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Fragrant basmati rice stir-fried with mixed vegetables, soy sauce, and a touch of garlic for a savory flavor.</p>
              </div>

            </li>
          </ul>
        </div>
        </div>

        <div id='otherItems' className='hidden'>s
        <div className='flex flex-wrap gap-y-10 pt-8 px-4'> 

          <ul className='flex flex-col basis-full gap-y-10'>
            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={otherItems1} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Gulab Jamun</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;25</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Soft, deep-fried milk solids soaked in a warm, fragrant sugar syrup with a hint of cardamom and rose water.</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={otherItems2} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Sponge Rassogulla</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;25</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Light and spongy cheese balls soaked in a delicate, mildly sweet syrup, bursting with sweetness in every bite.</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={otherItems6} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Soft Drinks</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;MRP</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Classic carbonated beverages in a variety of popular flavors, perfect to complement any meal.</p>
              </div>
            </li>
          </ul>

          <ul className='flex flex-col basis-full gap-y-10'>
            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={otherItems3} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Ice Cream</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;45</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Creamy and refreshing, available in a variety of flavors, perfect to cool off and satisfy your sweet cravings.</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={otherItems4} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Sweet Lassi</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;80</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Refreshing yogurt-based drink, sweetened and served chilled, often garnished with a hint of cardamom and a touch of rose water.</p>
              </div>
            </li>

            <li className='flex flex-col items-center sm:flex-row sm:gap-x-2 sm:items-start'>
              <a href='javascript:void(0)' className='flex-shrink-0'>
                <img src={otherItems5} alt="" />
              </a>
              <div className='text-center sm:text-left'>
                  <h4 className='text-xl hover:text-[#FFA500] cursor-pointer transition-all duration-500 mb-2'>Fresh Lime Soda</h4>
                  <span className='text-xl font-bold tracking-wide text-[#FFA500]'>&#x20B9;60</span>
                  <p className='text-sm mt-3 text-[#333333] font-sans'>Zesty and bubbly drink made with fresh lime juice, soda, and a balance of salt or sugar as per taste.</p>
              </div>
            </li>
          </ul>
        </div>
        </div>
    </section>
  )
}
