import React from "react";
import "../../App.css";
import bracket from "../../assets/svg/bracket.svg";
import angle from "../../assets/svg/angle-down.svg";
function Skills() {
  return (
    <div>
       {/* skills part 1 */}
      <section className="skills section">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
          <div>
            <div className="skills__content">
              <div className="skills__header">
                <img className="skills__icon" src={bracket} width={27} />
                <div>
                  <h1 className="skills__title">Frontend developer</h1>
                  <span className="skills__subtitle">
                    plus de 2 ans d'experiences
                  </span>
                </div>
                <img className="skills__arrow" src={angle} width={15} />
              </div>
              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">CSS</h3>
                    <span className="skills__number">70%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__css"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">Javascript</h3>
                    <span className="skills__number">53%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__js"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">ReactJS</h3>
                    <span className="skills__number">60%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__react"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
