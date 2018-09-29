import axios from "axios";

import { FETCH_USER, FETCH_STATES } from "./types";

export const fetchUser = () => async dispatch => {
  const response = await axios.get("/auth/user");

  return dispatch({ type: FETCH_USER, payload: response.data });
};

export const submitTask = (values, history) => async dispatch => {
  const res = await axios.post("/api/tasks", values);

  history.push("/tasks");
  return dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchStates = () => async dispatch => {
  const res = await axios.get("/api/states");

  return dispatch({ type: FETCH_STATES, payload: res.data });
};
