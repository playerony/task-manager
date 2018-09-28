import axios from "axios";

import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const response = await axios.get("/auth/user");

  return dispatch({ type: FETCH_USER, payload: response.data });
};

export const submitTask = (values, history) => async dispatch => {
  const res = await axios.post("/api/tasks", values);

  history.push("/tasks");
  dispatch({ type: FETCH_USER, payload: res.data });
};
