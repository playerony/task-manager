import { FETCH_STATES } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_STATES:
      return action.payload;
    default:
      return state;
  }
}
