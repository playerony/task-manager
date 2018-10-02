import React, { Component } from "react";
import PropTypes from "prop-types";

import "./TaskField.scss";

class TaskField extends Component {
  render() {
    const {
      input,
      label,
      meta: { error, touched }
    } = this.props;

    return (
      <div className="task-field--field">
        <label className="task-field--field--label">{label}</label>
        <input className="task-field--field--input" {...input} />
        <div className="task-field--field--error">{touched && error}</div>
      </div>
    );
  }
}

TaskField.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired
  }).isRequired
};

export default TaskField;
