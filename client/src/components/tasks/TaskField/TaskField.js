import React from "react";

import "./TaskField.scss";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <div>{touched && error}</div>
    </div>
  );
};
