import authReducer from "../authReducer";
import { FETCH_USER } from "../../actions/types";

describe("auth reducer", () => {
  it("handles actions of type FETCH_USER", () => {
    const action = {
      type: FETCH_USER,
      payload: [
        {
          _id: "123",
          googleId: "123",
          firstName: "test"
        }
      ]
    };

    const newState = authReducer([], action);

    expect(newState).toEqual(action.payload);
  });

  it("handles actions of type FETCH_USER with not defined payload", () => {
    const action = {
      type: FETCH_USER
    };

    const newState = authReducer([], action);

    expect(newState).toEqual(false);
  });

  it("handles action with unknown type", () => {
    const newState = authReducer([], { type: "SOME_TEST" });

    expect(newState).toEqual([]);
  });
});
