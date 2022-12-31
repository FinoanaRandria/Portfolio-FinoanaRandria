import React , {useEffect} from "react";
import "../../App.css";
import icon11 from "../../assets/svg/graduation-cap.svg";
import icon12 from "../../assets/svg/briefcase.svg";
import icon13 from "../../assets/svg/calendar-alt.svg";
function Qualificaton() {
       useEffect(()=>{

  const modalViews = document.querySelectorAll('.services__modal')
  const modalBtns  = document.querySelectorAll('.services__button')
  const modalCloses = document.querySelectorAll('.services__modal-close')      

  let modal =  function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
  }

  modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click', ()=>{
      modal(i)
    })
  })



       })
  return (
    <div>
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div className="qualification__button button--flex">
              <img src={icon11} width={18} className="qualification__icon" />
              Education
            </div>
            <div className="qualification__button button--flex">
              <img src={icon12} width={18} className="qualification__icon" />
              Work
            </div>
          </div>
          <div className="qualifiaction__sections">
            {/* qualification Content 1 */}
            <div className="qualifiaction__content qualification__active" data-content id='education'>
              {/*  qualification1*/}
              <div className="qualification__data" >
                <div>
                  <h3 className="qualification__title">Computer Enginner</h3>
                  <span className="qualification__subtitle">
                    ESTI-Antanimena
                  </span>
                  <div className="qualifiacation__calendar">
                    <img src={icon13} width={18} />
                    2021-2022
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/*  qualification2*/}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">mbola ho fenona</h3>
                  <span className="qualification__subtitle">ecole no eto</span>
                  <div className="qualifiacation__calendar">
                    <img src={icon13} width={18} />
                    2021-2022 date afa
                  </div>
                </div>
              </div>

              {/*  qualification3*/}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Computer Enginner</h3>
                  <span className="qualification__subtitle">
                    ESTI-Antanimena
                  </span>
                  <div className="qualifiacation__calendar">
                    <img src={icon13} width={18} />
                    2021-2022
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/*  qualification4*/}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  {/*  <span className="qualification__line"></span> */}
                </div>
                <div>
                  <h3 className="qualification__title">Computer Enginner</h3>
                  <span className="qualification__subtitle">
                    ESTI-Antanimena
                  </span>
                  <div className="qualifiacation__calendar">
                    <img src={icon13} width={18} />
                    2021-2022
                  </div>
                </div>
              </div>
            </div>

            {/* qualificationContent  2  */}
            <div className="qualifiaction__content" data-content id='work'>
              {/*  qualification1*/}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Computer Enginner</h3>
                  <span className="qualification__subtitle">
                    ESTI-Antanimena
                  </span>
                  <div className="qualifiacation__calendar">
                    <img src={icon13} width={18} />
                    2021-2022
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/*  qualification2*/}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">mbola ho fenona</h3>
                  <span className="qualification__subtitle">ecole no eto</span>
                  <div className="qualifiacation__calendar">
                    <img src={icon13} width={18} />
                    2021-2022 date afa
                  </div>
                </div>
              </div>

              {/*  qualification3*/}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Computer Enginner</h3>
                  <span className="qualification__subtitle">
                    ESTI-Antanimena
                  </span>
                  <div className="qualifiacation__calendar">
                    <img src={icon13} width={18} />
                    2021-2022
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  {/* <span className="qualification__line"></span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Qualificaton;
