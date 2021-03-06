import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import formFields from "../formFields";
import TaskField from "../TaskField/TaskField";
import TaskSelect from "../TaskSelect/TaskSelect";

import "./TaskForm.scss";

class TaskForm extends Component {
  renderFields() {
    return _.map(formFields, ({ type, label, name }) => {
      return (
        <Field
          key={name}
          component={type === "text" ? TaskField : TaskSelect}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <form
        className="task-form--wrapper"
        autoComplete="off"
        onSubmit={this.props.handleSubmit(this.props.onTaskSubmit)}
      >
        {this.renderFields()}
        <button type="submit" className="task-form--button">
          Next
        </button>
        <Link to="/tasks" className="task-form--button">
          Cancel
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name, error }) => {
    if (!values[name]) errors[name] = error;
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "taskForm",
  destroyOnUnmount: false
})(TaskForm);
