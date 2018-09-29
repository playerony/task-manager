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
      <div className="form-review--field" key={name}>
        <label className="form-review--field--label">{label}</label>
        <div className="form-review--field--value">{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div className="form-review-wrapper">
      <h1>Please confirm your entries</h1>
      {reviewFields}
      <button
        className="form-review--button"
        onClick={() => submitTask(formValues, history)}
      >
        Create a new task
      </button>
      <button className="form-review--button" onClick={onCancel}>
        Back
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
