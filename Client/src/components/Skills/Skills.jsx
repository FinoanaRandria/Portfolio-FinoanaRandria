import React from "react";
import "../../App.css";
import bracket from "../../assets/svg/bracket.svg";
import angle from "../../assets/svg/angle-down.svg";
function Skills() {
  return (
    <div>
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
                         <span className="skills__subtitle">plus de 2 ans d'experiences</span>
                      </div>
                      <img className="skills__arrow" src={angle} width={15} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
