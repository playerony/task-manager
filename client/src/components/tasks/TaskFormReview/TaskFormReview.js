import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import formFields from "../formFields";
import * as actions from "../../../actions";

import "./TaskFormReview.scss";

const TaskFormReview = ({ onCancel, formValues, submitTask, history }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button onClick={onCancel}>Back</button>
      <button onClick={() => submitTask(formValues, history)}>
        Create a new task
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.taskForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(TaskFormReview));
