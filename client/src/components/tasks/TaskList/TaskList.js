import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AnchorLink from "react-anchor-link-smooth-scroll";

import TaskCard from "../TaskCard/TaskCard";
import requireAuth from "../../requireAuth";

import { fetchTasks, fetchStates } from "../../../actions";

import "./TaskList.scss";

class TaskList extends Component {
  state = {
    style: {
      background: {
        height: "100vh"
      }
    }
  };

  updateBackgroundHeight() {
    this.setState({
      style: {
        background: {
          height: 100 + (Object.keys(this.props.tasks).length - 3) * 25 + "vh"
        }
      }
    });
  }

  async componentDidMount() {
    await this.props.fetchTasks();
    await this.props.fetchStates();

    this.updateBackgroundHeight();
  }

  renderTasks() {
    return this.props.tasks.map(task => {
      return <TaskCard key={task.name} {...task} />;
    });
  }

  render() {
    return (
      <div
        id="content"
        className="task-list-wrapper"
        style={this.state.style.background}
      >
        <div className="task-list-mask" style={this.state.style.background}>
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
  return { tasks };
}

export default connect(
  mapStateToProps,
  { fetchTasks, fetchStates }
)(requireAuth(TaskList));
