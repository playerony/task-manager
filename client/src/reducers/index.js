import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

import authReducer from "./authReducer";
import statesReducer from "./statesReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  states: statesReducer
});
