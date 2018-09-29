import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

import authReducer from "./authReducer";
import statesReducer from "./statesReducer";
import tasksReducer from "./tasksReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  states: statesReducer,
  tasks: tasksReducer
});
