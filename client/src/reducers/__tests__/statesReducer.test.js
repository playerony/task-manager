import statesReducer from "../statesReducer";
import { FETCH_STATES } from "../../actions/types";

describe("states reducer", () => {
  it("handles actions of type FETCH_STATES", () => {
    const action = {
      type: FETCH_STATES,
      payload: [
        {
          _id: "123",
          name: "test"
        }
      ]
    };

    const newState = statesReducer([], action);

    expect(newState).toEqual(action.payload);
  });

  it("handles action with unknown type", () => {
    const newState = statesReducer([], { type: "SOME_TEST" });

    expect(newState).toEqual([]);
  });
});
