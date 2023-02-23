import React from "react";
import { useHistory } from "react-router-dom";
import "./Modal.css";

const Modal = ({ children, setModal }) => {
  const history = useHistory();

  function closeModal(e) {
    if (!e.target.classList.contains("Modal")) return;
    setModal(false);
    history.push("/admin");
  }

  return (
    <div className="Modal " onClick={closeModal}>
      {children}
    </div>
  );
};

export default Modal;
