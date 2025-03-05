import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef()

  
  const validate = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_lai820c', 'template_t5ypnoj', form.current, 'UtJI_GpKyHZdfJ8Yi')
    .then((result) => {
      alert("Email sent successfully")
      // console.log(form.current);
      // console.log(result.text);
    }, (error) => {
      console.log(error.text);
    })

    let email = document.getElementById("email").value
    const emailLabel = document.getElementById('emailLabel')

    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    if(regx.test(email)){
      emailLabel.style.display = 'none'
    }
    else {
      emailLabel.innerHTML = 'Please enter a valid email'
      emailLabel.style.display = 'inline-block'
      emailLabel.style.color = 'red'
    }

    document.querySelector('form').reset()
  }
  

  return (
    <section className='pt-12 pb-10 bg-[#f8f8f8] overflow-hidden'>
      <div className='px-3'>
       <div className='text-center'>
            <span 
            style={{fontFamily: "Tangerine, cursive", color: "#FFA500"}}
            className='text-5xl font-bold'
            >Get In Touch</span>
            <h2 className='font-semibold text-3xl sm:text-4xl -mt-2'>Contact Us</h2>
        </div>

        <div className='mt-10'>
          <div className='inline-block w-full'>
            <form ref={form} onSubmit={validate}>
              <div className='mb-6'>
                <label htmlFor="name" className='font-semibold inline-block mb-2 tracking-[0.5px] text-[#333] text-lg'>Your Name</label>
                <input type="text" name="name" id="name" placeholder='Name' required className='block px-3 py-1 border border-gray-300 bg-white w-full h-10'/>
              </div>

              <div className='mb-6'>
                <label htmlFor="email" className='font-semibold inline-block mb-2 tracking-[0.5px] text-[#333] text-lg'>Email address</label>
                <input type="text" name="email" id="email" placeholder='Email' required className='block px-3 py-1 border border-gray-300 bg-white w-full h-10'/>
                <label id='emailLabel' htmlFor="email" className='hidden'>Invalid email address</label>
              </div>

              <div className='mb-6'>
                <label htmlFor="subject" className='font-semibold inline-block mb-2 tracking-[0.5px] text-[#333] text-lg'>Subject</label>
                <input type="text" name="subject" id="subject" placeholder='Subject' required className='block px-3 py-1 border border-gray-300 bg-white w-full h-10'/>
              </div>

              <div className='mb-6'>
                <label htmlFor="message" className='font-semibold inline-block mb-2 tracking-[0.5px] text-[#333] text-lg'>Message</label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Type Your Message' required className='block px-3 py-1 border border-gray-300 bg-white w-full'></textarea>
              </div>

              <div className='py-3 px-5 border border-gray-600 bg-transparent text-center block hover:text-white hover:bg-[#FFA500] duration-500 text-2xl h-16'>
                <button type='submit' className='inline-block text'>Send Message</button>
              </div>
            </form>
          </div>

          <div className='inline-block w-full mt-10 px-5'>
            <div>
              <h3 className='border-0 border-b-2 border-[#FFA500] inline-block w-full mb-3 pb-2 text-2xl text-center font-medium'>Our Address</h3>
              <address className='leading-[1.42857143] my-5 not-italic text-[#333] text-left sm:text-lg'>
                <p className='mb-2 font-[Prata] tracking-wider'>
                <i className="fa-solid fa-phone mr-3"></i>
                   +91 9936329497
                </p>

                <p className='mb-2 font-[Prata] tracking-wider'>
                <i className="fa-solid fa-phone mr-3"></i>
                   +91 6392036640
                </p>

                <p className='mb-2 font-[Prata] tracking-wider'>
                <i className="fa-solid fa-phone mr-3"></i>
                   +91 7898606804
                </p>

                <p className='mb-2'>
                <i className="fa-regular fa-envelope mr-3"></i>
                <a href="mailto: restaurant@saffronvatika.com">restaurant@saffronvatika.com</a>
                </p>

                <p className='text-base'>
                <i className="fa-solid fa-location-dot mr-3"></i>
                <a target='_blank' href="https://maps.app.goo.gl/DUKipfhdpyA8ZdW3A"> Vaidya Ji Ka Mandir, Near Shri Hanuman Garhi, Rampath, Ayodhya </a>
                </p>
              </address>
            </div>

            <div className='inline-block w-full mt-10 px-1'>
              <h3 className='border-0 border-b-2 border-[#FFA500] inline-block w-full mb-3 pb-2 text-2xl text-center font-medium'>Open Hours</h3>
              <p className='space-x-2'>
                <span>Monday to Sunday</span>
                <span>8:30 AM - 10:30 PM</span> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact