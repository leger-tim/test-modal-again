"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/Modal.js

var Modal = function Modal(_ref) {
  var isVisible = _ref.isVisible,
    onClose = _ref.onClose,
    children = _ref.children;
  if (!isVisible) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content"
  }, children, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button-color",
    onClick: onClose
  }, "Close")));
};
var _default = exports["default"] = Modal;