import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import "../../assets/styles/components/Data.scss";
import Button from "../../components/Utils/ButtonArrowRight";
import Check from "../../assets/static/images/svg/icon-check.svg";

import { changeMyPassword } from "../../actions";

import Success from "../Utils/SuccessMessage";

const Data = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const { token } = props.user.data;

  const [form, setValues] = useState({
    oldPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
    equalPassword: false,
  });

  const onSubmit = (data) => {
    const { newPassword, newPasswordConfirm, oldPassword } = data;
    if (
      newPassword === newPasswordConfirm &&
      (oldPassword !== newPassword || oldPassword !== newPasswordConfirm)
    ) {
      setValues({ equalPassword: true });
      props.changeMyPassword(data, token);
    } else {
      setValues({ equalPassword: false });
    }
  };

  const hasChangePassword = Object.keys(props.changePassword).length > 0;

  return (
    <section className="data" onSubmit={handleSubmit(onSubmit)}>
      <h4>Gestioná tus datos.</h4>
      <h5>Cambiar mi contraseña.</h5>
      <form action="">
        <div className="flex">
          <input
            name="oldPassword"
            className="data__input__text"
            type="password"
            placeholder="Contraseña actual"
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              maxLength: {
                value: 20,
                message: "No puede tener mas de 20 caracteres",
              },
              minLength: {
                value: 6,
                message: "No puede tener menos de 6 caracteres",
              },
            })}
          />

          <img src={Check} alt="" className="data__input__text__check" />
        </div>

        <span className="way-to-pay__input--error__profile">
          {errors.oldPassword && errors.oldPassword.message}
        </span>

        <div className="flex">
          <input
            name="newPassword"
            className="data__input__text"
            type="password"
            placeholder="Nueva Contraseña"
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              maxLength: {
                value: 20,
                message: "No puede tener mas de 20 caracteres",
              },
              minLength: {
                value: 6,
                message: "No puede tener menos de 6 caracteres",
              },
            })}
          />
          <img src={Check} alt="" className="data__input__text__check" />
        </div>

        <span className="way-to-pay__input--error__profile">
          {errors.newPassword && errors.newPassword.message}
        </span>

        <div className="flex">
          <input
            name="newPasswordConfirm"
            className="data__input__text"
            type="password"
            placeholder="Confirmar Nueva Contraseña"
            ref={register({
              required: {
                value: true,
                message: "Este campo es requerido",
              },
              maxLength: {
                value: 20,
                message: "No puede tener mas de 20 caracteres",
              },
              minLength: {
                value: 6,
                message: "No puede tener menos de 6 caracteres",
              },
            })}
          />
          <img src={Check} alt="" className="data__input__text__check" />
        </div>
        <span className="way-to-pay__input--error__profile">
          {errors.newPasswordConfirm && errors.newPasswordConfirm.message}
        </span>

        <span className="way-to-pay__input--error__profile">
          {form.equalPassword ? (
            ""
          ) : (
            <p>
              Deben ser Iguales las contraseñas y Debe ser distinta a la
              anterior
            </p>
          )}
        </span>

        <Button
          text={"Guardar"}
          margin={"discovery__box__position btn__secundary--data"}
        />
        {/* esperar que la api funcione bien */}
        {hasChangePassword ? (
          props.changePassword.UPDATED.code === 200 ? (
            <Success />
          ) : (
            <Success
              text={"Por favor coloque bien su contraseña para poder proceder"}
              fail
            />
          )
        ) : (
          ""
        )}
      </form>
    </section>
  );
};
const mapDispatchToProps = {
  changeMyPassword,
};

const mapStateToProps = (state) => {
  return {
    user: state.user || {},
    changePassword: state.changePassword || {},
    error: state.error || {},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);
