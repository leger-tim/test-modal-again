// src/Modal.js
import React from "react";
import "./Modal.css";
const Modal = ({
  isVisible,
  onClose,
  children
}) => {
  if (!isVisible) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, children, /*#__PURE__*/React.createElement("button", {
    className: "button-color",
    onClick: onClose
  }, "Close")));
};
export default Modal;