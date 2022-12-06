import React from 'react'
import Photo from '../../assets/img/imagePhoto.png'
import "../../App.css"
function About() {
  return (
    <div>
       <section className='about section' id="about">
            <h2 className='section__title'>About Me</h2>
            <span className='section__subtitle'>My indroduction</span>
             <div className='about_container container grid'>
                    <img src={Photo} alt=""  className='about__img'/>
             </div>
       </section>
         
    </div>
  )
}

export default About