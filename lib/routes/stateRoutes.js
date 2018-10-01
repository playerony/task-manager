const requireStateDetails = require("../middlewares/requireStateDetails");
const requireLogin = require("../middlewares/requireLogin");

const StateService = require("../services/stateService");

module.exports = app => {
  app.post(
    "/api/states",
    requireLogin,
    requireStateDetails,
    async (req, res) => {
      try {
        res.send(await StateService.saveState(req.body));
      } catch (err) {
        res.status(422).send(err);
      }
    }
  );

  app.get("/api/states", requireLogin, async (req, res) => {
    res.send(await StateService.findAll());
  });
};
