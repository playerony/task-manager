import React from "react";

import "./TaskCard.scss";

export default ({ _id, name, description, _state, addedOn, onDelete }) => {
  const fetchBorderColor = () => {
    switch (_state.name) {
      case "DOING":
        return "#FAE03C";
      case "DONE":
        return "#3FC050";
      default:
      case "TO DO":
        return "#7FCDCD";
    }
  };

  return (
    <div
      className="task-card-wrapper"
      style={{ borderLeft: `10px solid ${fetchBorderColor()}` }}
    >
      <div className="task-card-content">
        <div className="task-card-delete" onClick={() => onDelete(_id)}>
          X
        </div>
        <div className="task-card-date">
          Added on: {new Date(addedOn).toLocaleDateString()}
        </div>
        <div className="task-card-header">{name}</div>
        <div className="task-card-description">{description}</div>
      </div>
    </div>
  );
};
