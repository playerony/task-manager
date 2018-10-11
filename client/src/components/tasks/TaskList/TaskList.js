import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AnchorLink from "react-anchor-link-smooth-scroll";

import TaskCard from "../TaskCard/TaskCard";
import requireAuth from "../../requireAuth";

import { fetchTasks, fetchStates, deleteTask } from "../../../actions";

import "./TaskList.scss";

class TaskList extends Component {
  async componentDidMount() {
    await this.props.fetchTasks();
    await this.props.fetchStates();
  }

  renderTasks() {
    return this.props.tasks.map(task => {
      return (
        <TaskCard key={task.name} onDelete={this.props.deleteTask} {...task} />
      );
    });
  }

  render() {
    return (
      <div id="content" className="task-list--wrapper">
        <div className="task-list--mask">
          <div className="task-list--boxes">{this.renderTasks()}</div>
        </div>
        <Link to="/tasks/new" className="task-list--button">
          +
        </Link>
        <AnchorLink
          className="task-list--button"
          style={{ left: "0" }}
          href="#content"
        >
          ^
        </AnchorLink>
      </div>
    );
  }
}

function mapStateToProps({ tasks }) {
  const result = _.sortBy(tasks, "_state.priority");

  return { tasks: result };
}

export default connect(
  mapStateToProps,
  { fetchTasks, fetchStates, deleteTask }
)(requireAuth(TaskList));
