import React from 'react'
import '../../App.css'
function Service() {
  return (
    <div>
      <section className='services section' id='services'>
         <h2 className='section__title'>Services</h2>
         <span className='section__subtitle'> Mes Services</span>

           <div className='services__container container grid'>
            {/* === service1=== */}
              <div className='services__content'>
                 <div> eto le logo kely </div>
              </div>
           </div>
      </section>

    </div>
  )
}

export default Service