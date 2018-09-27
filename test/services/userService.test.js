const chai = require("chai");
const expect = chai.expect;

const sinon = require("sinon");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

const mongoose = require("mongoose");

const User = require("../../lib/models/User");
const UserService = require("../../lib/services/userService");

const sandbox = sinon.sandbox.create();

describe("User service", () => {
  let findStub;
  let sampleUser;

  beforeEach(() => {
    sampleUser = {
      id: 1,
      googleId: "1",
      firstName: "test"
    };

    findStub = sandbox.stub(mongoose.Model, "findById").resolves(sampleUser);
  });

  afterEach(() => {
    sandbox.restore();
  });

  context("findUserById", () => {
    it("should call findUserById and return result", async () => {
      const result = await UserService.findUserById(1);

      expect(result).to.exist;
      expect(result).to.be.a("object");
      expect(findStub).to.have.been.calledOnce;
      expect(findStub).to.have.been.calledWith(1);
      expect(result)
        .to.have.property("id")
        .to.equal(1);
      expect(result)
        .to.have.property("googleId")
        .to.equal("1");
      expect(result)
        .to.have.property("firstName")
        .to.equal("test");
    });
  });

  context("findOne", () => {
    it("should call findOne and return result", async () => {
      sandbox.restore();
      const stub = sandbox.stub(mongoose.Model, "findOne").resolves(sampleUser);

      const result = await UserService.findOne({ googleId: "1" });

      expect(result).to.exist;
      expect(result).to.be.a("object");
      expect(stub).to.have.been.calledOnce;
      expect(stub).to.have.been.calledWith({ googleId: "1" });
      expect(result)
        .to.have.property("id")
        .to.equal(1);
      expect(result)
        .to.have.property("googleId")
        .to.equal("1");
      expect(result)
        .to.have.property("firstName")
        .to.equal("test");
    });
  });

  context("saveUser", () => {
    let saveStumb, result;

    beforeEach(async () => {
      saveStumb = sandbox.stub(User.prototype, "save").resolves(sampleUser);

      result = await UserService.saveUser(sampleUser);
    });

    it("should save the user", () => {
      expect(result).to.exist;
      expect(result).to.be.a("object");
      expect(saveStumb).to.have.been.calledOnce;
    });
  });
});
