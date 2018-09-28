import React, { Component } from "react";

import requireAuth from "../../requireAuth";

class TaskList extends Component {
  render() {
    return <div>TaskList</div>;
  }
}

export default requireAuth(TaskList);
