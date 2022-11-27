import React from "react";
import "../../App.css";

import icon1  from "../../assets/icon/briefcase.png"
import icon2  from "../../assets/icon/document.png"
import icon3  from "../../assets/icon/email.png"
import icon4  from "../../assets/icon/home.png"
import icon5  from "../../assets/icon/landscape.png"
import icon6  from "../../assets/icon/send.png"
import icon7  from "../../assets/icon/user.png"
import icon8  from "../../assets/icon/times.svg"
import icon9  from "../../assets/icon/apple-alt.svg"
function Navbar() {
  return (
    <div>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Finoana Ranri
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#Home" className="nav__link"> Home<img src={icon4} width={25}/> </a>
              </li>
              <li className="nav__item">
                <a href="#About" className="nav__link">About<img src={icon7} width={25}/></a>
              </li>
              <li className="nav__item">
                <a href="#Skills" className="nav__link">Skills<img src={icon2} width={25}/></a>
              </li>
              <li className="nav__item">
                <a href="#Services" className="nav__link">Services<img src={icon1} width={25}/></a>
              </li>
              <li className="nav__item">
                <a href="#Portfolio" className="nav__link">Portfolio<img src={icon5} width={25}/></a>
              </li>
              <li className="nav__item">
                <a href="#ContactMe" className="nav__link">ContactME<img src={icon6} width={25}/></a>
              </li>
            </ul>
               <img src={icon8} width={20} className="uil uil-times nav__close" id="nav-close"/>
          </div>
          
            <div className="nav__btns">
                <div className="nav__toggle" id="nav-toggle">
                  <img src={icon9} width={20}/>
                </div>
            </div>

        </nav>
      </header>
    </div>
  );
}

export default Navbar;
