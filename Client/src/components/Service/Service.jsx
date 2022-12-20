import React from "react";
import "../../App.css";
import icon16 from "../../assets/svg/uikit.svg";
import icon17 from "../../assets/svg/arrow-right.svg";
import icon18 from "../../assets/icon/tiames.svg";
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
              <img src={icon16} width={20} />
              <h3>
                Ui/Ux <br /> Designer{" "}
              </h3>
            </div>
            <span className="button button--flex button--small button--link services__button">
              View More
              <img className="button__icon" src={icon17} width={14} />
            </span>
            {/* correction */}
            <div className="services__modal">
              <h4 className="services__modal-title">
                Ui/Ux <br />
                Designer{" "}
              </h4>
              <img src={icon18} width={20} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
