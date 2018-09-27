const chai = require("chai");
const expect = chai.expect;

const Task = require("../../lib/models/Task");

describe("Task model", () => {
  it("should return error if required areas are missing", () => {
    const task = new Task();

    task.validate(err => {
      expect(err.errors.name).to.exist;
      expect(err.errors._user).to.exist;
      expect(err.errors._state).to.exist;
    });
  });

  it("should have optional fields", () => {
    const task = new Task({
      name: "test",
      description: "test",
      _user: {},
      _state: {}
    });

    expect(task)
      .to.have.property("description")
      .to.equal("test");
  });
});
