const requireStateName = require("../middlewares/requireStateName");
const requireLogin = require("../middlewares/requireLogin");

const StateService = require("../services/stateService");

module.exports = app => {
  app.post("/api/states", requireLogin, requireStateName, async (req, res) => {
    const name = req.body.name;

    try {
      res.send(await StateService.saveState({ name }));
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get("/api/states", requireLogin, async (req, res) => {
    res.send(await StateService.findAll());
  });
};
