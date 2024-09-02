// src/Modal.js
import React from "react";
import "./Modal.css";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button className="button-color" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
