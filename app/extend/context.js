'use strict';

module.exports = {
  only(...args) {
    return this.app.only(...args);
  },
};
