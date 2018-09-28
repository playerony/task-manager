import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import formFields from "../formFields";
import TaskField from "../TaskField/TaskField";

class TaskForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={TaskField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onTaskSubmit)}>
          {this.renderFields()}
          <Link to="/tasks">Cancel</Link>
          <button type="submit">Next</button>
        </form>
      </div>
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
