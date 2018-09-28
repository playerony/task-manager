import React, { Component } from "react";
import { connect } from "react-redux";
import "./Navbar.scss";

class Navbar extends Component {
  renderContent() {
    const { auth } = this.props;

    switch (auth) {
      case null:
        return;
      case false:
        return [
          <li className="navbar-button" key="1">
            <a href="/auth">Login</a>
          </li>
        ];
      default:
        return [
          <li className="navbar-button nav-button-greetings" key="1">
            <a>Hello, {auth.firstName}</a>
          </li>,
          <li className="navbar-button" key="2">
            <a href="/auth/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="navbar-wrapper">
        <div className="navbar-content">
          <ul>{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(Navbar);
