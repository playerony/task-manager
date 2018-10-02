import React, { Component } from "react";
import PropTypes from "prop-types";

import "./ConfirmModal.scss";

class ConfirmModal extends Component {
  render() {
    const { message, acceptText, cancelText, onAccept, onCancel } = this.props;

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
  }
}

ConfirmModal.propTypes = {
  message: PropTypes.string,
  acceptText: PropTypes.string,
  cancelText: PropTypes.string,
  onAccept: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default ConfirmModal;
