import React from "react";

import "../../assets/styles/components/Utils.scss";

import Arrow from "../../assets/static/images/svg/arrow-right-grey.svg";

const StepToPay = (props) => {
  return (
    <>
      <div className="step__to__pay flex">
        <div className="step__to__pay__inside flex">
          <h1
            className={`step__to__pay__inside__title ${
              props.step1 ? "step__to__pay__inside__title--select" : ""
            }`}
          >
            {props.step1 ? (
              <div>
                <span className="display__screen__desktop">Paso </span>1
              </div>
            ) : (
              "Paso 1"
            )}
          </h1>
          <h4 className="step__to__pay__inside__text step__to__pay__inside__text--select">
            - Compra tus cursos
          </h4>
        </div>
        <div className="step__to__pay__inside flex">
          <img src={Arrow} alt="" />
          <h1 className="step__to__pay__inside__title">
            {" "}
            {props.step1 ? (
              <div>
                <span className="display__screen__desktop">Paso </span>2
              </div>
            ) : (
              "Paso 1"
            )}
          </h1>
          <h4 className="step__to__pay__inside__text">- Compra tu registro</h4>
        </div>
      </div>
    </>
  );
};

export default StepToPay;
