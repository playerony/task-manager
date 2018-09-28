import React, { Component } from "react";
import { reduxForm } from "redux-form";

import TaskForm from "../TaskForm/TaskForm";
import TaskFormReview from "../TaskFormReview/TaskFormReview";

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
    console.log(this.state.showFormReview);

    return <div style={{ marginTop: "100px" }}>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "taskForm"
})(TaskNew);
