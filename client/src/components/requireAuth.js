import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions";

export default ChildComponent => {
  class ComposedComponent extends Component {
    async componentDidMount() {
      await this.props.fetchUser();

      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) this.props.history.push("/");
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps({ auth }) {
    return { auth };
  }

  return connect(
    mapStateToProps,
    { fetchUser }
  )(ComposedComponent);
};
