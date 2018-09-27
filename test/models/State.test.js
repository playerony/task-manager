const chai = require("chai");
const expect = chai.expect;

const State = require("../../lib/models/State");

describe("State model", () => {
  it("should return error if required areas are missing", () => {
    const state = new State();

    state.validate(err => {
      expect(err.errors.name).to.exist;
    });
  });
});
