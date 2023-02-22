import React from 'react';
import { useHistory } from 'react-router-dom';
import './Modal.css';

const Modal = ({ children }) => {
  const history = useHistory();

  function closeModal(e) {
    if (!e.target.classList.contains('Modal')) return;
    history.push('/admin');
  }

  return (
    <div className="Modal " onClick={closeModal}>
      {children}
    </div>
  );
};

export default Modal;
