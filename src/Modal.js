import React from "react";
import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <section className="modalBackground">{children}</section>,
    document.getElementById("modal")
  );
}

export { Modal };
