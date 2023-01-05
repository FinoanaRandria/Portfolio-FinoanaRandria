import React from 'react'
import im1 from '../../assets/img/porj1.png'
import im2 from '../../assets/img/proj2.png'
import im3 from '../../assets/img/proj3.png'
import i1 from '../../assets/svg/arrow-right.svg'
function Portfol() {
  return (
    <div>
      <section className='portfolio section' id='portfolio'>
        <h2 className='section__title'>Portfolio</h2>
        <span className='section__subtitle'>Most recent Work</span>
           
 
        <div className='portfolio__container container'>
        {/* ==============portfolio 1 ================ */}
          <div className='portfolio__content grid'>
           
             <img className='portfolio__img' src={im1}/>
             
           <div className='portfolio__data'>
                   <h3 className='portfolio__title'> Calculatrice Python </h3>
                   <p className='portfolio__description'>Une calulatrice fait avec le languague python</p>
                   <a  className='button button--flex button--small portfolio__button'>Demo
                      {"   "}<img className='button__icon' src={i1} width={12}/>
                    </a>
           </div>

          </div>
          
           {/* ==============portfolio 2 ================ */}
           <div className='portfolio__content grid'>
           
           <img className='portfolio__img'  src={im2}/>
           
         <div className='portfolio__data'>
                 <h3 className='portfolio__title'> Web Clock</h3>
                 <p className='portfolio__description'>Une Montre  fait en Html5 Css3 Js</p>
                 <a  className='button button--flex button--small portfolio__button'>Demo
                    {"   "}<img className='button__icon' src={i1} width={12}/>
                  </a>
         </div>

        </div>

         {/* ==============portfolio 3 ================ */}
         <div className='portfolio__content grid'>
           
           <img className='portfolio__img' src={im3}/>
           
         <div className='portfolio__data'>
                 <h3 className='portfolio__title'> Weather Apps </h3>
                 <p className='portfolio__description'>Une appli meteo web fait avec React et l'API de openweather </p>
                 <a  className='button button--flex button--small portfolio__button'>Demo
                    {"   "}<img className='button__icon' src={i1} width={12}/>
                  </a>
         </div>

        </div>






        </div>























      </section>
    </div>
  )
}

export default Portfol