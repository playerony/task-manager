import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import TaskList from "./tasks/TaskList/TaskList";
import TaskNew from "./tasks/TaskNew/TaskNew";

import { fetchUser } from "../actions";

class App extends Component {
  async componentDidMount() {
    await this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/tasks" component={TaskList} />
            <Route exact path="/tasks/new" component={TaskNew} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
