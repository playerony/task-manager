module.exports = (req, res, next) => {
  if (!req.body.name)
    return res.status(403).send({ error: "State name is not defined" });

  next();
};
