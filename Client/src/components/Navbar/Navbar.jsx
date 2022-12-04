import React , {useEffect} from "react";
import "../../App.css";

import icon1  from "../../assets/icon/briefcase.png"
import icon2  from "../../assets/icon/document.png"
import icon3  from "../../assets/icon/email.png"
import icon4  from "../../assets/icon/home.png"
import icon5  from "../../assets/icon/landscape.png"
import icon6  from "../../assets/icon/send.png"
import icon7  from "../../assets/icon/user.png"
import icon8  from "../../assets/icon/tiames.svg"
import icon9  from "../../assets/icon/applications.png"
function Navbar() {
   
  useEffect(()=>{
    const navMenu = document.getElementById('nav-menu')
    const navToggle= document.getElementById('nav-toggle')
    const navClose = document.getElementById('nav-close')

    if(navToggle){
      navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
      })
    }
     /* pour  hide */
    if(navClose){
      navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
      })
    }
  })

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
                <a href="#Home" className="nav__link"> <img className="nav__icon" src={icon4} width={25}/> Home </a>
              </li>
              <li className="nav__item">
                <a href="#About" className="nav__link"><img className="nav__icon" src={icon7} width={25}/> About</a>
              </li>
              <li className="nav__item">
                <a href="#Skills" className="nav__link"> <img className="nav__icon" src={icon2} width={25}/> Skills</a>
              </li>
              <li className="nav__item">
                <a href="#Services" className="nav__link"> <img className="nav__icon" src={icon1} width={25}/> Services</a>
              </li>
              <li className="nav__item">
                <a href="#Portfolio" className="nav__link"> <img className="nav__icon" src={icon5} width={25}/> Portfolio</a>
              </li>
              <li className="nav__item">
                <a href="#ContactMe" className="nav__link"> <img className="nav__icon" src={icon6} width={25}/> ContactME</a>
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
