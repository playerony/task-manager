import React, { Component } from "react";

import requireAuth from "../../requireAuth";

class TaskNew extends Component {
  render() {
    return <div>TaskNew</div>;
  }
}

export default requireAuth(TaskNew);
