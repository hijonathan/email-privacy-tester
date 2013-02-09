// Generated by CoffeeScript 1.4.0
(function() {
  var app, coffee, conf, express, fs, less, server, util;

  coffee = require('coffee-script');

  express = require('express');

  fs = require('fs');

  less = require('less');

  util = require('util');

  conf = require("" + __dirname + "/conf/main.conf");

  app = module.exports = express();

  server = app.listen(conf.site.port);

  if (server.address()) {
    console.log("Express server listening on port %d in %s mode", server.address().port, app.settings.env);
  } else {
    console.log("Failed to bind to port");
    process.exit(1);
  }

}).call(this);
