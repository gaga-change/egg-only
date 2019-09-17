'use strict';

const only = require('only');

module.exports = app => {
  app.only = only;
};
