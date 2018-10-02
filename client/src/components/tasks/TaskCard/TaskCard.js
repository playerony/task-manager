import React, { Component } from "react";
import PropTypes from "prop-types";

import ConfirmModal from "../../modals/ConfirmModal/ConfirmModal";

import "./TaskCard.scss";

class TaskCard extends Component {
  state = {
    showConfirmModal: false
  };

  fetchBorderColor() {
    const { name } = this.props._state;

    switch (name) {
      case "DOING":
        return "#FAE03C";
      case "DONE":
        return "#3FC050";
      default:
      case "TO DO":
        return "#7FCDCD";
    }
  }

  handleShowConfirmModal = () => {
    this.setState({
      showConfirmModal: true
    });
  };

  handleHideConfirmModal = () => {
    this.setState({
      showConfirmModal: false
    });
  };

  render() {
    const { _id, name, description, addedOn, onDelete } = this.props;

    return (
      <div
        className="task-card-wrapper"
        style={{ borderLeft: `10px solid ${this.fetchBorderColor()}` }}
      >
        <div className="task-card-content">
          <div
            className="task-card-delete"
            onClick={this.handleShowConfirmModal}
          >
            X
          </div>
          <div className="task-card-date">
            Added on: {new Date(addedOn).toLocaleDateString()}
          </div>
          <div className="task-card-header">{name}</div>
          <div className="task-card-description">{description}</div>
        </div>

        {this.state.showConfirmModal && (
          <ConfirmModal
            onAccept={() => onDelete(_id)}
            onCancel={this.handleHideConfirmModal}
          />
        )}
      </div>
    );
  }
}

TaskCard.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  addedOn: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  _state: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default TaskCard;
