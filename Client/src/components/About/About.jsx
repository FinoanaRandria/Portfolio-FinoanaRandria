import React from "react";
import Photo from "../../assets/img/imagePhoto.png";
import icon1 from "../../assets/svg/download.svg";
import "../../App.css";
function About() {
  return (
    <div>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My indroduction</span>
        <div className="about_container container grid">
          <img src={Photo} alt="" className="about__img" />
          <div className="about__data">
            <p className="about__description">
              Développeur depuis deux ans ,je souhaite désormais mettre mes
              compétences et mon expérience à votre service.
            </p>
              <div className="about__info">
                  <div>
                     <span className="about__info-title">O8+</span>
                     <span className="about__info-name">Years <br/> experience</span>
                  </div>

                  <div>
                     <span className="about__info-title">O8+</span>
                     <span className="about__info-name">Years <br/> experience</span>
                  </div>

                  <div>
                     <span className="about__info-title">05+</span>
                     <span className="about__info-name">companies <br/> projects</span>
                  </div>
               
              </div>
                  <div className="about__buttons">
                    <a download="" href="../../assets/pdf/RANDRIAMBOLOLOMANANA Niriantsoa Finoana Sambatra.pdf" className="button button--flex" >
                      Download CV  <img src={icon1} width={18} className="button__icon"/>
                    </a>
                  </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
