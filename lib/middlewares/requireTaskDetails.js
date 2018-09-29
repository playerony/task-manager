module.exports = (req, res, next) => {
  if (!req.body.name)
    return res.status(403).send({ error: "Task name is not defined" });

  if (!req.body.description)
    return res.status(403).send({ error: "Task description is not defined" });

  if (!req.body.state)
    return res.status(403).send({ error: "Task state is not defined" });

  next();
};
