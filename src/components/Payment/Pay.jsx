import React, { useState } from "react";

import "../../assets/styles/components/ShoppingCar.scss";

import CreditCard from "./PayMethod/CreditCard";
import MercadoPago from "./PayMethod/MercadoPago";
import Paypal from "./PayMethod/Paypal";

import CreditCarForm from "./Form/CreditCar";
import MercadoPagoForm from "./Form/MercadoPago";
import PaypalForm from "./Form/Paypal";

import Modal from "../Utils/Modal";
import Congratulation from "../../components/Payment/Congratulation";

const Pay = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [isSwitch, setSwitch] = useState("");

  const PayMethodSwitchCreditCar = () => setSwitch("");

  const PayMethodSwitchMercadoPago = () => setSwitch("MercadoPago");

  const PayMethodSwitchPaypal = () => setSwitch("Paypal");

  const PayMethod = (isSwitch) => {
    switch (isSwitch) {
      case "MercadoPago":
        return (
          <MercadoPagoForm
            onClick={handleOpen}
            modal={
              <Modal
                open={open}
                handleClose={handleClose}
                body={<Congratulation handleClose={handleClose} />}
              />
            }
          />
        );
      case "Paypal":
        return (
          <PaypalForm
            onClick={handleOpen}
            modal={
              <Modal
                open={open}
                handleClose={handleClose}
                body={<Congratulation handleClose={handleClose} />}
              />
            }
          />
        );
      default:
        return <CreditCarForm modal={<Modal />} />;
    }
  };

  return (
    <section className="way-to-pay">
      <div className={props.onlyDesktop}>
        <p className="way-to-pay__text">Ingresá tu correo electrónico.</p>
        <input
          type="text"
          placeholder="E-mail"
          className="way-to-pay__input way-to-pay__input--email"
        />
      </div>
      <div className="way-to-pay__box">
        <div className="flex">
          <CreditCard isSwitch={isSwitch} method={PayMethodSwitchCreditCar} />
          <MercadoPago
            isSwitch={isSwitch}
            method={PayMethodSwitchMercadoPago}
          />
          <Paypal isSwitch={isSwitch} method={PayMethodSwitchPaypal} />
        </div>

        {PayMethod(isSwitch)}
      </div>
    </section>
  );
};
export default Pay;
