import React from 'react'
import Image from 'next/image'
const Contact = () => {
  return (
    <div className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
              <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>

               <h2 className='py-4'>Contact  </h2>

          <div className='grid lg:grid-cols-5 gap-8'>
            {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                 <div className='lg:p-4 h-full'>
                      <div>
                          <Image className='rounded-xl hover:scale-105 ease in duration-300' src='/../public/assets/contact.jpg' width='405' height='155' alt='/'/>
                      </div>

                      <div>
                        <h2 className='py-2'> Name here</h2>
                         <p>Full-Stack Developer</p>
                         <p className='py-4'>I am available for freelance or full-time positions. contact me and let's talk</p>
                      </div>
                 </div>
          </div>

            {/* right */}
          </div>
        </div> 
          
         
    </div>
  )
}

export default Contact
