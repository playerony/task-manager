const requireLogin = require("../middlewares/requireLogin");
const requireStateName = require("../middlewares/requireStateName");

const TaskService = require("../services/taskService");
const StateService = require("../services/stateService");

module.exports = app => {
  app.post("/task", requireLogin, async (req, res) => {
    let data = req.body;
    data._user = req.user;

    try {
      let state = await StateService.findOne({ name: "TO DO" });
      if (!state) state = await StateService.saveState({ name: "TO DO" });

      data._state = state;
      res.send(await TaskService.saveTask(data));
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.put("/task/:id", requireLogin, async (req, res) => {
    try {
      res.send(await TaskService.updateTask(req.params.id, req.body));
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get("/task", requireLogin, async (req, res) => {
    res.send(await TaskService.findAll(req.params.id));
  });

  app.delete("/task/:id", requireLogin, async (req, res) => {
    res.send(await TaskService.deleteTask(req.params.id));
  });
};
