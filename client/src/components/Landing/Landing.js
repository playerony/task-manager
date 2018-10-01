import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Landing.scss";

class Landing extends Component {
  state = {
    button: {
      text: "Let's create your first task",
      style: "landing-content--see-more-button"
    }
  };

  renderContent() {
    if (this.props.auth)
      return (
        <Link to="/tasks" className={this.state.button.style}>
          {this.state.button.text}
        </Link>
      );

    return (
      <a href="/auth" className={this.state.button.style}>
        {this.state.button.text}
      </a>
    );
  }

  render() {
    return (
      <div className="landing-wrapper">
        <div className="landing-mask">
          <div className="landing-content">
            <h1>Task Manager</h1>
            <p>Simplest way to manage your time</p>
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
