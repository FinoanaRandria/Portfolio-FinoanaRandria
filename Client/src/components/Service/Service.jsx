import React , {useState} from "react";
import "../../App.css";
import icon16 from "../../assets/svg/uikit.svg";
import icon17 from "../../assets/svg/arrow-right.svg";
import icon18 from "../../assets/icon/tiames.svg";
import icon19 from '../../assets/svg/check-circle.svg'
import icon20 from "../../assets/svg/pencil-alt.svg";
import icon21 from "../../assets/svg/laptop.svg";
function Service() {
   const [open, setopen] = useState(false)
  return (
    <div>
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle"> Mes Services</span>

        <div className="services__container container grid">
          {/* === service1=== */}
          <div className="services__content">
            <div>
              <img className="services__icon" src={icon16} width={20} />
              <h3>
                Ui/Ux <br /> Designer{" "}
              </h3>
            </div>
            <span onClick={()=>{alert("booo") && setopen(true)}} className="button button--flex button--small button--link services__button">
              View More
              <img className="button__icon" src={icon17} width={14} />
            </span>
            {/* correction */}
            <div className={`services__modal_hidden`}>
             <div className="services__modal-content">
              <h4 className="services__modal-title">
                Ui/Ux <br />
                Designer{" "}
              </h4>
              <img src={icon18} width={10} className='services__modal-close' />
              <ul className="services__modal-services grid">
                <li className="services__modal-service services__modal-icon">
                   <img src={icon19} width={20}/>
                    <p>I develop the user interface</p>
                </li>
                <li className="services__modal-service services__modal-icon">
                   <img src={icon19} width={20}/>
                    <p>I develop the user interface</p>
                </li>
                <li className="services__modal-service services__modal-icon">
                   <img src={icon19} width={20}/>
                    <p>I develop the user interface</p>
                </li>
                <li className="services__modal-service services__modal-icon">
                   <img src={icon19} width={20}/>
                    <p>I develop the user interface</p>
                </li>
              </ul>
             </div>
              
            </div>
          </div>
          {/* === service2=== */}
          <div className="services__content">
            <div>
              <img className="services__icon" src={icon21} width={20} />
              <h3>
                Frontend<br /> Developer{" "}
              </h3>
            </div>
            <span className="button button--flex button--small button--link services__button">
              View More
              <img className="button__icon" src={icon17} width={14} />
            </span>
            {/* correction */}
            <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Frontend <br />
                Developer{" "}
              </h4>
              <img src={icon18} width={10} className='services__modal-close' />
              <ul className="services__modal-services grid">
                <li className="services__modal-service services__modal-icon">
                   <img src={icon19} width={20}/>
                    <p>I develop the user interface</p>
                </li>
                <li className="services__modal-service services__modal-icon">
                   <img src={icon19} width={20}/>
                    <p>I develop the user interface</p>
                </li>
                <li className="services__modal-service services__modal-icon">
                   <img src={icon19} width={20}/>
                    <p>I develop the user interface</p>
                </li>
                <li className="services__modal-service services__modal-icon">
                   <img src={icon19} width={20}/>
                    <p>I develop the user interface</p>
                </li>
              </ul>
             </div>
              
            </div>
          </div>

          {/* === service3=== */}
          <div className="services__content">
            <div>
              <img className="services__icon" src={icon20} width={20} />
              <h3>
                Brading <br /> Designer{" "}
              </h3>
            </div>
            <span className="button button--flex button--small button--link services__button">
              View More
              <img className="button__icon" src={icon17} width={14} />
            </span>
            {/* correction */}
            <div className="services__modal">
            <div className="services__modal-content">
              <h4 className="services__modal-title">
                Ui/Ux <br />
                Designer{" "}
              </h4>
              <img src={icon18} width={10} className='services__modal-close' />
              <ul className="services__modal-services grid">
                <li className="services__modal-service services__modal-icon">
                   <img src={icon19} width={20}/>
                    <p>I develop the user interface</p>
                </li>
                <li className="services__modal-service services__modal-icon">
                   <img src={icon19} width={20}/>
                    <p>I develop the user interface</p>
                </li>
                <li className="services__modal-service services__modal-icon">
                   <img src={icon19} width={20}/>
                    <p>I develop the user interface</p>
                </li>
                <li className="services__modal-service services__modal-icon">
                   <img src={icon19} width={20}/>
                    <p>I develop the user interface</p>
                </li>
              </ul>
             </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
