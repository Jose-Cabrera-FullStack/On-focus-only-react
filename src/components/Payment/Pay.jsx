import React, { useState } from "react";
import { connect } from "react-redux";

import "../../assets/styles/components/ShoppingCar.scss";

import CreditCard from "./PayMethod/CreditCard";
import MercadoPago from "./PayMethod/MercadoPago";
import Paypal from "./PayMethod/Paypal";

import CreditCarForm from "./Form/CreditCar";
import MercadoPagoForm from "./Form/MercadoPago";
import PaypalForm from "./Form/Paypal";
import EmailFormWithoutLogin from "./Form/EmailFormWithoutLogin";

import Modal from "../Utils/Modal";
import StepToPay from "../Utils/StepToPay";
import Congratulation from "../../components/Payment/Congratulation";

import { buyCourses, emptyFavorite } from "../../actions";

const Pay = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let idFromCourse = [];
  props.shoppingcar.filter((item) => idFromCourse.push(item.course_id_hash));

  const submitPayment = () => {
    props.emptyFavorite([]);
    props.buyCourses(
      {
        payment: true,
        courses: idFromCourse,
      },
      props.user.data.token
    );
    return props.history.push("/mis-cursos");
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
            onClick={submitPayment}
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
            onClick={submitPayment}
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

  const { user = {} } = props;
  const hasUser = Object.keys(user).length > 0;

  return (
    <section className="way-to-pay">
      {hasUser ? (
        ""
      ) : (
        <>
          <StepToPay step1 />
          <EmailFormWithoutLogin />
        </>
      )}
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
const mapStateToProps = (state) => {
  return {
    shoppingcar: state.shoppingcar || {},
    user: state.user || {},
  };
};

const mapDispatchToProps = {
  buyCourses,
  emptyFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pay);
