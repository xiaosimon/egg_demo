'use strict';

/** @type Egg.EggPlugin */
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
};
module.exports = {
  // had enabled by egg
  static: {
    enable: true
  },
  nunjucks :{
    enable: true,
    package: 'egg-view-nunjucks'
  },
  mysql:{
    enable:true,
    package:'egg-mysql'
  }
};