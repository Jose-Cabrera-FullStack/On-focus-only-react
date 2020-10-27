import React, { useState } from "react";

import "../../assets/styles/components/Data.scss";

import PoliticyTerm from "./Politicy/PoliticyTerm";
import TermAndCondition from "./Politicy/TermAndCondition";
import HelpCenter from "./Politicy/HelpCenter";

const Politicy = (props) => {
  const [isSwitch, setSwitch] = useState(
    props.param.param ? props.param.param : ""
  );

  const PoliticyMethod = () => setSwitch("");

  const TermsMethod = () => setSwitch("Terminos");

  const CenterMethod = () => setSwitch("Centro");

  const ChangeMethod = (isSwitch) => {
    switch (isSwitch) {
      case "Terminos":
        return <TermAndCondition />;
      case "Centro":
        return <HelpCenter />;
      default:
        return <PoliticyTerm />;
    }
  };

  return (
    <section className="data">
      <div className="flex display__screen__mobile__without__flex">
        <div>
          <button
            onClick={PoliticyMethod}
            className={
              isSwitch === ""
                ? "btn__secundary btn__secundary--buy btn__secundary--politicy btn__secundary--buy--select btn__secundary--politicy--select"
                : "btn__secundary btn__secundary--buy btn__secundary--politicy"
            }
          >
            <p className="btn__secundary--politicy__text">Politica de Cookie</p>
          </button>

          <br />
          <button
            onClick={TermsMethod}
            className={
              isSwitch === "Terminos"
                ? "btn__secundary btn__secundary--buy btn__secundary--politicy btn__secundary--buy--select btn__secundary--politicy--select"
                : "btn__secundary btn__secundary--buy btn__secundary--politicy"
            }
          >
            <p className="btn__secundary--politicy__text">
              Términos y Condiciones
            </p>
          </button>

          <br />

          <button
            onClick={CenterMethod}
            className={
              isSwitch === "Centro"
                ? "btn__secundary btn__secundary--buy btn__secundary--politicy btn__secundary--buy--select btn__secundary--politicy--select"
                : "btn__secundary btn__secundary--buy btn__secundary--politicy"
            }
          >
            <p className="btn__secundary--politicy__text">Centro de ayuda</p>
          </button>
        </div>
        {ChangeMethod(isSwitch)}
      </div>
    </section>
  );
};
export default Politicy;
