const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

const keys = require("../config/keys");
const UserService = require("./userService");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  done(null, await UserService.findUserById(id));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/callback",
      proxy: true
    },
    async (accessToken, refeshToken, profile, done) => {
      const existingUser = UserService.findOne({ googleId: profile.id });

      if (existingUser) return done(null, existingUser);

      done(
        null,
        await UserService.saveUser({
          googleId: profile.id,
          firstName: profile.name.givenName
        })
      );
    }
  )
);
