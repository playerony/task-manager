import axios from "axios";

import { FETCH_USER, FETCH_STATES, FETCH_TASKS } from "./types";

export const fetchUser = () => async dispatch => {
  const response = await axios.get("/auth/user");

  return dispatch({ type: FETCH_USER, payload: response.data });
};

export const submitTask = (values, history) => async dispatch => {
  const response = await axios.post("/api/tasks", values);

  history.push("/tasks");
  return dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchStates = () => async dispatch => {
  const response = await axios.get("/api/states");

  return dispatch({ type: FETCH_STATES, payload: response.data });
};

export const fetchTasks = () => async dispatch => {
  const response = await axios.get("/api/tasks");

  return dispatch({ type: FETCH_TASKS, payload: response.data });
};

export const deleteTask = taskId => async dispatch => {
  await axios.delete(`/api/tasks/${taskId}`);

  dispatch(fetchTasks());
};
