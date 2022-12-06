import React from "react";
import "../../App.css";
import icon10 from "../../assets/icon/linkedin-in.svg";
import icon11 from "../../assets/icon/github.svg";
import icon12 from "../../assets/icon/facebook.svg";
import pattern from "../../assets/svg/pattern.svg";
import icoContact from "../../assets/icon/send.png";
import mouse from "../../assets/svg/mouse.svg"
import srcolldown from "../../assets/svg/arrow-down.svg"
function Home() {
  return (
    <div>
      <main className="main">
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <div className="home__social">
                <a href="#" target={"_blank"} className="home__social-icon">
                  <img src={icon10} width={18} />
                </a>
                <a href="#" target={"_blank"} className="home__social-icon">
                  <img src={icon12} width={18} />
                </a>
                <a href="#" target={"_blank"} className="home__social-icon">
                  <img src={icon11} width={18} />
                </a>
              </div>
              <div className="home__img">
                <img src={pattern} />
              </div>
              <div className="home__data">
                <h1 className="home__title">Hi,i'am Finoana Randri</h1>
                <h3 className="home__subtitle">Forntend & Backend developer</h3>
                <p className="home__description">
                  Développeur depuis deux ans ,je souhaite désormais mettre mes
                  compétences et mon expérience à votre service.
                </p>
                <a href="#contact" className="button button--flex">
                  Contact Me{" "}
                  <img
                    src={icoContact}
                    width={15}
                    className="uil uil-message button__icon"
                  />
                </a>
              </div>
            </div>
              <div className="home__scroll">
                <a href="#about" className="home__scroll-button button--flex">
                   <img src={mouse} className="home__scroll-mouse" width={13}/>
                     <span className="home__scroll-name"> Scroll down </span>
                     <img src={srcolldown} className="home__scroll-arrow" width={10}/>
                </a>
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
