import React from "react";
import "../../App.css";
import icon10 from "../../assets/icon/linkedin-in.svg"
import icon11 from "../../assets/icon/github.svg"
import icon12 from "../../assets/icon/facebook.svg"
function Home() {
  return (
    <div>
      <main className="main">
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__content grid">
              <div className="home__social">
                <a href="#"  target={'_blank'} className="home_social-icon">
                     <img src={icon10} width={25}/>
                </a>
                <a href="#" target={'_blank'} className="home_social-icon">
                      <img src={icon12} width={25}/>
                </a>
                <a href="#" target={'_blank'} className="home_social-icon">
                      <img src={icon11} width={25}/>
                </a>
              </div>
                <div className="home_img">
                  
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
