import React from "react";

import "./TaskCard.scss";

export default ({ name, description, addedOn }) => {
  return (
    <div className="task-card-wrapper">
      <div>
        <p>Added on: {new Date(addedOn).toLocaleDateString()}</p>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
