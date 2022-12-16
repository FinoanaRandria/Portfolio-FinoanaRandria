import React from "react";
import "../../App.css";
import icon16 from "../../assets/svg/uikit.svg";
import icon17 from '../../assets/svg/arrow-right.svg'
function Service() {
  return (
    <div>
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle"> Mes Services</span>

        <div className="services__container container grid">
          {/* === service1=== */}
          <div className="services__content">
            <div>
                <img src={icon16} width={20}/> 
                <h4>Ui/Ux <br/> Designer </h4>
             </div>
                <span className="button button--flex button--small button--link services__button">
                    View More
                    <img  className="button__icon" src={icon17} width={14}/> 
                </span>
                  <div className="services__modal">
                    
                  </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
