import React, { Component } from "react";
import { Link } from "react-router-dom";

import requireAuth from "../../requireAuth";

import "./TaskList.scss";

class TaskList extends Component {
  render() {
    return (
      <div className="task-list-wrapper">
        <div className="task-list-mask">TaskList</div>
        <Link to="/tasks/new" className="task-list--add-button">
          +
        </Link>
      </div>
    );
  }
}

export default requireAuth(TaskList);
