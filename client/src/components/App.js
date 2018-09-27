import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./Landing/Landing";
import TaskList from "./tasks/TaskList/TaskList";
import TaskNew from "./tasks/TaskNew/TaskNew";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/tasks" component={TaskList} />
        <Route exact path="/tasks/new" component={TaskNew} />
      </div>
    </BrowserRouter>
  );
};
