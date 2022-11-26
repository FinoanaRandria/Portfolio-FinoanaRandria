import React from "react";
import "../../App.css";

import icon1  from "../../assets/icon/briefcase(1).png"
import icon2  from "../../assets/icon/document.png"
import icon3  from "../../assets/icon/email.png"
import icon4  from "../../assets/icon/home.png"
import icon5  from "../../assets/icon/landscape.png"
import icon6  from "../../assets/icon/send.png"
import icon7  from "../../assets/icon/user.png"
function Navbar() {
  return (
    <div>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav_logo">
            Finoana Ranri
          </a>
          <div className="nav_menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav_item">
                <a href="#" className="nav_link"> Home<img src={icon1} width={25}/> </a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link">About<img src={icon1} width={25}/></a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link">Skills<img src={icon1} width={25}/></a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link">Services<img src={icon1} width={25}/></a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link">Portfolio<img src={icon1} width={25}/></a>
              </li>
              <li className="nav_item">
                <a href="#" className="nav_link">ContactME<img src={icon1} width={25}/></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
