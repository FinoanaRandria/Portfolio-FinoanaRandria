import React,{useState} from "react";
import "../../App.css";
import bracket from "../../assets/svg/bracket.svg";
import angle from "../../assets/svg/angle-down.svg";
import server from "../../assets/svg/server.svg";
import swatch from "../../assets/svg/swatchbook.svg";
function Skills() {
   
    /* action sur skill */
         const [competence, setcompetence] = useState(false);
         const [competence1, setcompetence1] = useState(false);
         const [competence2, setcompetence2 ] = useState(false); 

  return (
    <div>
      <section className="skills section">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
          <div>
            {/* skills part 1 */}
            <div className={competence ? "skills__content skills__open" : "skills__content skills__close"}>
              <div onClick={() => setcompetence(!competence)} className="skills__header"> 
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
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">CSS</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__css"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Javascript</h3>
                    <span className="skills__number">75%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__js"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">ReactJS</h3>
                    <span className="skills__number">75%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__react"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* skills part 2 */}
            <div className={competence1 ? "skills__content skills__open" : "skills__content skills__close"}>
              <div  onClick={() => setcompetence1(!competence1)} className="skills__header">
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
                    <span className="skills__number">63%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__node"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">MongoDB</h3>
                    <span className="skills__number">68%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__mongo"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">SQL</h3>
                    <span className="skills__number">68%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__sql"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Firebase</h3>
                    <span className="skills__number">55%</span>
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
            <div className={competence2 ? "skills__content skills__open" : "skills__content skills__close"}>
              <div onClick={() => setcompetence2(!competence2)} className="skills__header">
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
                    <span className="skills__number">65%</span>
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
                    <span className="skills__number">70%</span>
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
