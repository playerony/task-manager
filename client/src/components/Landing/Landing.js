import React from "react";
import { Link } from "react-router-dom";

import "./Landing.scss";

export default () => {
  return (
    <div className="landing-wrapper">
      <div className="landing-mask">
        <div className="landing-content">
          <h1>Task Manager</h1>
          <p>Simplest way to manage your time</p>
          <Link to="/" className="landing-content--see-more-button">
            Let's create your first task
          </Link>
        </div>
      </div>
    </div>
  );
};
