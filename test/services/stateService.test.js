const chai = require("chai");
const expect = chai.expect;

const sinon = require("sinon");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

const mongoose = require("mongoose");

const State = require("../../lib/models/State");
const StateService = require("../../lib/services/stateService");

const sandbox = sinon.sandbox.create();

describe("State service", () => {
  let findStub;
  let sampleState;

  beforeEach(() => {
    sampleState = {
      _id: "1",
      name: "test",
      priority: 0
    };

    findStub = sandbox.stub(mongoose.Model, "findById").resolves(sampleState);
  });

  afterEach(() => {
    sandbox.restore();
  });

  context("findStateById", () => {
    it("should call findStateById and return result", async () => {
      const result = await StateService.findStateById(1);

      expect(result).to.exist;
      expect(result).to.be.a("object");
      expect(findStub).to.have.been.calledOnce;
      expect(findStub).to.have.been.calledWith(1);
      expect(result)
        .to.have.property("_id")
        .to.equal("1");
      expect(result)
        .to.have.property("name")
        .to.equal("test");
      expect(result)
        .to.have.property("priority")
        .to.equal(0);
    });
  });

  context("findOne", () => {
    it("should call findOne and return result", async () => {
      sandbox.restore();
      const stub = sandbox
        .stub(mongoose.Model, "findOne")
        .resolves(sampleState);

      const result = await StateService.findOne({ name: "test" });

      expect(result).to.exist;
      expect(result).to.be.a("object");
      expect(stub).to.have.been.calledOnce;
      expect(stub).to.have.been.calledWith({ name: "test" });
      expect(result)
        .to.have.property("_id")
        .to.equal("1");
      expect(result)
        .to.have.property("name")
        .to.equal("test");
      expect(result)
        .to.have.property("priority")
        .to.equal(0);
    });
  });

  context("findAll", () => {
    it("should call findAll and return result list", async () => {
      sandbox.restore();
      const stub = sandbox.stub(mongoose.Model, "find").resolves([sampleState]);

      const result = await StateService.findAll();

      expect(result).to.exist;
      expect(result).to.be.a("array");
      expect(stub).to.have.been.calledOnce;
      expect(stub).to.have.been.calledWith();
      expect(result[0])
        .to.equal(sampleState)
        .to.have.property("_id")
        .to.equal("1");
      expect(result[0])
        .to.equal(sampleState)
        .to.have.property("name")
        .to.equal("test");
      expect(result[0])
        .to.equal(sampleState)
        .to.have.property("priority")
        .to.equal(0);
    });
  });

  context("saveState", () => {
    let saveStumb, result;

    beforeEach(async () => {
      saveStumb = sandbox.stub(State.prototype, "save").resolves(sampleState);

      result = await StateService.saveState(sampleState);
    });

    it("should save the state", () => {
      expect(result).to.exist;
      expect(result).to.be.a("object");
      expect(saveStumb).to.have.been.calledOnce;
    });
  });
});
