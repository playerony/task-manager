const chai = require("chai");
const expect = chai.expect;

const User = require("../../lib/models/User");

describe("User model", () => {
  it("should return error if required areas are missing", () => {
    const user = new User();

    user.validate(err => {
      expect(err.errors.googleId).to.exist;
      expect(err.errors.firstName).to.exist;
    });
  });
});
