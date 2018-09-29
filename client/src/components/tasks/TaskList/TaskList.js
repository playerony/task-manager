import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchTasks, fetchStates } from "../../../actions";

import TaskCard from "../TaskCard/TaskCard";
import requireAuth from "../../requireAuth";

import "./TaskList.scss";

class TaskList extends Component {
  state = {
    style: {
      background: {
        height: "100vh"
      }
    }
  };

  async componentDidMount() {
    await this.props.fetchTasks();
    await this.props.fetchStates();

    this.setState({
      style: {
        background: {
          height: 100 + (Object.keys(this.props.tasks).length - 3) * 25 + "vh"
        }
      }
    });
  }

  renderTasks() {
    return this.props.tasks.map(task => {
      return <TaskCard key={task.name} {...task} />;
    });
  }

  render() {
    return (
      <div className="task-list-wrapper" style={this.state.style.background}>
        <div className="task-list-mask" style={this.state.style.background}>
          <div className="task-list--boxes">{this.renderTasks()}</div>
        </div>
        <Link to="/tasks/new" className="task-list--add-button">
          +
        </Link>
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
