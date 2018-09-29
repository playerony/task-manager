const requireLogin = require("../middlewares/requireLogin");
const requireTaskDetails = require("../middlewares/requireTaskDetails");

const TaskService = require("../services/taskService");
const StateService = require("../services/stateService");

module.exports = app => {
  app.post("/api/tasks", requireLogin, requireTaskDetails, async (req, res) => {
    const state = await StateService.findOne({ name: req.body.state });

    const newTask = {
      name: req.body.name,
      description: req.body.description,
      _state: state,
      _user: req.user
    };

    try {
      res.send(await TaskService.saveTask(newTask));
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.put("/api/tasks/:id", requireLogin, async (req, res) => {
    try {
      res.send(await TaskService.updateTask(req.params.id, req.body));
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get("/api/tasks", requireLogin, async (req, res) => {
    res.send(await TaskService.findAll(req.user.id));
  });

  app.delete("/api/tasks/:id", requireLogin, async (req, res) => {
    res.send(await TaskService.deleteTask(req.params.id));
  });
};
