import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import formFields from "../formFields";
import * as actions from "../../../actions";

import "./TaskFormReview.scss";

class TaskFormReview extends Component {
  renderFields() {
    const { formValues } = this.props;

    return _.map(formFields, ({ label, name }) => {
      return (
        <div className="form-review--field" key={name}>
          <label className="form-review--field--label">{label}</label>
          <div className="form-review--field--value">{formValues[name]}</div>
        </div>
      );
    });
  }

  render() {
    const { onCancel, formValues, submitTask, history } = this.props;

    return (
      <div className="form-review--wrapper">
        <h1>Please confirm your entries</h1>
        {this.renderFields()}
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
  }
}

TaskFormReview.propTypes = {
  submitTask: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.object.isRequired
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
