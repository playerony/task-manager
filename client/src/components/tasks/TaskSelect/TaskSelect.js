import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchStates } from "../../../actions/index";

import "./TaskSelect.scss";

class TaskSelect extends Component {
  async componentDidMount() {
    await this.props.fetchStates();
  }

  renderContent() {
    return _.map(this.props.states, ({ name }) => {
      return <option key={name}>{name}</option>;
    });
  }

  render() {
    const {
      input,
      label,
      meta: { error, touched }
    } = this.props;

    return (
      <div className="task-select--field">
        <label className="task-select--field--label">{label}</label>
        <select {...input} className="task-select--field--select">
          {this.renderContent()}
        </select>
        <div className="task-select--field--error">{touched && error}</div>
      </div>
    );
  }
}

TaskSelect.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired
  }).isRequired
};

function mapStateToProps({ states }) {
  return { states };
}

export default connect(
  mapStateToProps,
  { fetchStates }
)(TaskSelect);
