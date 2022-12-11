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
                    <div className='qualifiaction__sections'>
                       {/* qualification section  */}
                       <div className='qualifiaction__content'>
                            {/*  qualification1*/}
                              <div className='qualification__data'>
                                  <div>
                                     <h3 className='qualification__title'>Computer Enginner</h3>
                                     <span className='qualification__subtitle'>ESTI-Antanimena</span>
                                  </div>
                              </div>
                       </div>
                    </div>
              </div>
        </section>
    </div>
  )
}

export default Qualificaton