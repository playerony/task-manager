import React from "react";

import "./TaskField.scss";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="task-field--field">
      <label className="task-field--field--label">{label}</label>
      <input className="task-field--field--input" {...input} />
      <div className="task-field--field--error">{touched && error}</div>
    </div>
  );
};
