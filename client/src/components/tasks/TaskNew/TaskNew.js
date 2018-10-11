import React, { Component } from "react";
import { reduxForm } from "redux-form";

import TaskForm from "../TaskForm/TaskForm";
import TaskFormReview from "../TaskFormReview/TaskFormReview";

import "./TaskNew.scss";

class TaskNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <TaskFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <TaskForm onTaskSubmit={() => this.setState({ showFormReview: true })} />
    );
  }

  render() {
    return (
      <div className="task-new--wrapper">
        <div className="task-new--mask">{this.renderContent()}</div>
      </div>
    );
  }
}

export default reduxForm({
  form: "taskForm"
})(TaskNew);
