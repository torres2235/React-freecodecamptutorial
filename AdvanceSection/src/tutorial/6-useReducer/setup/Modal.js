import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    // handles the closing of our modal
    setTimeout(() => {
      closeModal();
    }, 3000); // 3secs
  });

  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
