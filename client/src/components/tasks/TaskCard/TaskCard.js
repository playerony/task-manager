import React from "react";

import "./TaskCard.scss";

export default ({ _id, name, description, addedOn, onDelete }) => {
  return (
    <div className="task-card-wrapper">
      <div className="task-card-content">
        <div className="task-card-delete" onClick={() => onDelete(_id)}>
          X
        </div>
        <p>Added on: {new Date(addedOn).toLocaleDateString()}</p>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
