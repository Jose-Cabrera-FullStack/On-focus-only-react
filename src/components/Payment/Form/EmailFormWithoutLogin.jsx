import React from "react";

import "../../../assets/styles/components/ShoppingCar.scss";

const EmailFormWithoutLogin = (props) => {
  return (
    <>
      <div className={"way-to-pay__tex__email"}>
        <p className="way-to-pay__text">Ingresá tu correo electrónico.</p>
        <input
          type="text"
          placeholder="E-mail"
          className="way-to-pay__input way-to-pay__input--email"
        />
        <p className="way-to-pay__text">Confirmá tu correo electrónico.</p>
        <input
          type="text"
          placeholder="Confirma E-mail"
          className="way-to-pay__input way-to-pay__input--email"
        />
        <br />
        <p className="way-to-pay__input--email__message__down">
          Este mail te servirá luego para completar tu registro y crear tu
          cuenta.
        </p>
      </div>
    </>
  );
};

export default EmailFormWithoutLogin;
