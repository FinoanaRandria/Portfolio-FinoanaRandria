import React from 'react'
import '../../App.css'
import icon11 from '../../assets/svg/graduation-cap.svg'
import icon12 from '../../assets/svg/briefcase.svg'
function Qualificaton() {
  return (
    <div>
        <section className='qualification section'>
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'>My personal</span>

              <div className='qualification__container container'>
                <div className='qualification__tabs'>
                  <div className='qualification__button button--flex'>
                    <img src={icon11} width={18} className='qualification__icon'/>
                      Education
                  </div>
                  <div className='qualification__button button--flex'>
                  <img src={icon12} width={18} className='qualification__icon'/>
                      Work
                  </div>
                </div>
              </div>
        </section>
    </div>
  )
}

export default Qualificaton