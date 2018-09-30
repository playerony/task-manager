import React from "react";

import "./TaskCard.scss";

export default ({ _id, name, description, addedOn, onDelete }) => {
  return (
    <div className="task-card-wrapper">
      <div className="task-card-content">
        <div className="task-card-delete" onClick={() => onDelete(_id)}>
          X
        </div>
        <div className="task-card-date">Added on: {new Date(addedOn).toLocaleDateString()}</div>
        <div className="task-card-header">{name}</div>
        <div className="task-card-description">{description}</div>
      </div>
    </div>
  );
};
