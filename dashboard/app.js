// We import modules.
const url = require("url");
const path = require("path");
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const Strategy = require("passport-discord").Strategy;
const config = require("../config");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const Discord = require("discord.js");

// We instantiate express app and the session store.
const app = express();
const MemoryStore = require("memorystore")(session);

// We export the dashboard as a function which we call in ready event.
module.exports = async (client) => {
  // We declare absolute paths.
  const dataDir = path.resolve(`${process.cwd()}${path.sep}dashboard`); // The absolute path of current this directory.
  const templateDir = path.resolve(`${dataDir}${path.sep}templates`); // Absolute path of ./templates directory.

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

  const renderTemplate = (res, req, template, data = {}) => {
    const baseData = {
      bot: client,
      path: req.path,
      user: req.isAuthenticated() ? req.user : null
    };
    res.render(path.resolve(`${templateDir}${path.sep}${template}`), Object.assign(baseData, data));
  };

  passport.use(new Strategy({
    clientID: config.dashboard.clientID,
    clientSecret: config.dashboard.oauthSecret,
    callbackURL: config.dashboard.callbackURL,
    scope: ["identify", "guilds"]
  },
  (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => done(null, profile));
  }));

  app.use(session({
    store: new MemoryStore({ checkPeriod: 86400000 }),
    secret: config.dashboard.sessionSecret,
    resave: false,
    saveUninitialized: false,
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.locals.domain = config.dashboard.domain;
  app.engine("html", require("ejs").renderFile);
  app.set("view engine", "html");
  var bodyParser = require("body-parser");
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  function checkAuth(req, res, next) {
    if(req.isAuthenticated()){
	    return next();
    } else {
	    return res.redirect("/login");
    }
  }
  
  app.get("/login", (req, res, next) => {
    if (req.session.backURL) { // We check if there a return URL has been set prior redirecting/accesing.
    /* Return URL is the url that user will be redirected to after login. */
      req.session.backURL = req.session.backURL;
    } else { // If there is no return URL we simply set it to index page.
      req.session.backURL = "/";
    }
    // Now that we have configured the returning URL, we can let passport redirect user to appropriate auth page.
    next();
  }, passport.authenticate("discord"));

  // Once the user returns from OAuth2, this endpoint gets called. 
  // Here we check if the user was already on the page and redirect them
  // there, mostly.
  app.get("/callback", passport.authenticate("discord", { failureRedirect: "/autherror" }), (req, res) => {
    session.us = req.user;
    if (req.session.backURL) {
      const url = req.session.backURL;
      req.session.backURL = null;
      res.redirect(url);
    } else {
      res.redirect("/");
    }
  });
  
  app.get("/logout", function (req, res) {
    req.session.destroy(() => { // We destroy session
      req.logout(); // Inside callback we logout user
      res.redirect("/"); // And to make sure he isnt on any pages that require authorization, we redirect it to main page.
    });
  });

  const authenticate = (req, res, next) => {
    if (req.isAuthenticated()) return next(); // If the user is logged in, we skip execution of the rest of the code in this function and let the code for te route run.
    req.session.backURL = req.url; // If execution reached this point, means that user is not logged in and we can set the return url to the current url.
    res.redirect("/login"); // And we redirect it to our login handler that will do the job.
  };
  // Index endpoint.
  app.get("/", (req, res) => {
    renderTemplate(res, req, "index.ejs");
  });
  app.listen(config.dashboard.port, null, null, () => console.log(`Dashboard is up and running on port ${config.dashboard.port}.`));
};