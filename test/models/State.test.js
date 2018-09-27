const chai = require("chai");
const expect = chai.expect;

const User = require("../../lib/models/State");

describe("State model", () => {
  it("should return error if required areas are missing", () => {
    const user = new User();

    user.validate(err => {
      expect(err.errors.name).to.exist;
    });
  });
});
