import React from "react";

import Modal from "@material-ui/core/Modal";

import "../../assets/styles/components/Utils.scss";

const ModalLogin = ({ body, open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      BackdropProps={{ style: { backgroundColor: "#ffffffe0" } }}
    >
      <>{body ? body : <p>Funciona</p>}</>
    </Modal>
  );
};
export default ModalLogin;
