const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/callback", passport.authenticate("google"), (req, res) => {
    res.redirect("/tasks");
  });

  app.get("/auth/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/auth/user", (req, res) => {
    res.send(req.user);
  });
};
