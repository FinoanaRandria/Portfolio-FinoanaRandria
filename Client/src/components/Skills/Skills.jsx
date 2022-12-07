import React from "react";
import "../../App.css";
import bracket from "../../assets/svg/bracket.svg";
import angle from "../../assets/svg/angle-down.svg";
import server from "../../assets/svg/server.svg";
import swatch from "../../assets/svg/swatchbook.svg";
function Skills() {
  return (
    <div>
      <section className="skills section">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
          <div>
            {/* skills part 1 */}
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
                  <div className="skills__titles">
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">CSS</h3>
                    <span className="skills__number">70%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__css"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Javascript</h3>
                    <span className="skills__number">53%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__js"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">ReactJS</h3>
                    <span className="skills__number">60%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__react"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* skills part 2 */}
            <div className="skills__content">
              <div className="skills__header">
                <img className="skills__icon" src={server} width={18} />
                <div>
                  <h1 className="skills__title">Backend developer</h1>
                  <span className="skills__subtitle">
                    plus de 2 ans d'experiences
                  </span>
                </div>
                <img className="skills__arrow" src={angle} width={15} />
              </div>
              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Node Js </h3>
                    <span className="skills__number">60%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__node"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">MongoDB</h3>
                    <span className="skills__number">70%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__mongo"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">SQL</h3>
                    <span className="skills__number">53%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__sql"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Firebase</h3>
                    <span className="skills__number">60%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__firebase"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* skills part 3 */}
            <div className="skills__content">
              <div className="skills__header">
                <img className="skills__icon" src={swatch} width={22} />
                <div>
                  <h1 className="skills__title">Designer</h1>
                  <span className="skills__subtitle">
                    plus de 1 ans d'experiences
                  </span>
                </div>
                <img className="skills__arrow" src={angle} width={15} />
              </div>
              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Figma </h3>
                    <span className="skills__number">49%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__figma"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">sketch</h3>
                    <span className="skills__number">46%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__sketch"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Photshop</h3>
                    <span className="skills__number">63%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__photoshop"></span>
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
