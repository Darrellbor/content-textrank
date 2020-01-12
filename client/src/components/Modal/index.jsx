//@flow
import React from "react";
import ModalClose from "../Icons/ModalClose";

type ModalProps = {
  width: string,
  theme: string,
  isCloseable?: Boolean,
  onClose?: Function,
  children: any
};

const Modal = (props: ModalProps) => {
  let modalWidth = `modal-box modal-box--${props.width} modal-theme--${
    props.theme
  }`;

  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={props.onClose} />
      <div className={modalWidth}>
        {props.isCloseable ? (
          <div className="modal-close" onClick={props.onClose}>
            <ModalClose />
          </div>
        ) : null}
        {props.children}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  width: "small",
  theme: "white",
  isCloseable: true
};

export default Modal;
