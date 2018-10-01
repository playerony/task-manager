import React from "react";

import "./ConfirmModal.scss";

export default ({
  message,
  acceptText,
  cancelText,
  onAccept,
  onCancel
}) => {
  return (
    <div className="confirm-modal-wrapper" onClick={onCancel}>
      <div className="confirm-modal-content">
        <div className="confirm-modal-message">
          {message || "Are you sure?"}
        </div>
        <button className="confirm-modal-button" onClick={onCancel}>
          {cancelText || "No"}
        </button>
        <button className="confirm-modal-button" onClick={onAccept}>
          {acceptText || "Yes"}
        </button>
      </div>
    </div>
  );
};
