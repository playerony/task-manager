import tasksReducer from "../tasksReducer";
import { FETCH_TASKS } from "../../actions/types";

describe("tasks reducer", () => {
  it("handles actions of type FETCH_TASKS", () => {
    const action = {
      type: FETCH_TASKS,
      payload: [
        {
          _id: "123",
          name: "test",
          description: "test"
        }
      ]
    };

    const newState = tasksReducer([], action);

    expect(newState).toEqual(action.payload);
  });

  it("handles action with unknown type", () => {
    const newState = tasksReducer([], { type: "SOME_TEST" });

    expect(newState).toEqual([]);
  });
});
