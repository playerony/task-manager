const requireStateName = require("../middlewares/requireStateName");

const StateService = require("../services/stateService");

module.exports = app => {
  app.post("/state", requireStateName, async (req, res) => {
    const name = req.body.name;

    try {
      res.send(await StateService.saveState({ name }));
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
