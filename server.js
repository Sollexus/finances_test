const express = require('express'),
  path = require('path'),
  app = express(),
  port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let routes = require('./api/routes/transactionRoutes');
routes(app);

app.listen(port);