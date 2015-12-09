'use strict'

const debug = require('debug');

const my = {

  isBrowser: (typeof window==='object'),
  glob: this.isBrowser ? window : global,

  info: debug('info'),
  log: debug('log'),
  error: debug('error'),

  R: require('ramda'),
  curry: require('ramda').curry,

  dbParams: {
    connectionLimit: process.env.DBCONNLIMIT || 50,
    host: process.env.DBHOST,
    user: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME
  },

}

module.exports = my;

