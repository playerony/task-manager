import React from "react";

import "./Landing.scss";

export default () => {
  return (
    <div className="landing-wrapper">
      <div className="landing-mask">
        <div className="landing-content">
          <h1>Task Manager</h1>
          <p>Simplest way to manage your time</p>
          <a a href="/auth" className="landing-content--see-more-button">
            Let's create your first task
          </a>
        </div>
      </div>
    </div>
  );
};
