import axios from "axios";

import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const response = await axios.get("/auth/user");

  return dispatch({ type: FETCH_USER, payload: response.data });
};