'use strict'

const debug = require('debug');

const my = {

  info: debug('info'),
  log: debug('log'),
  error: debug('error'),

  dbParams: {
    connectionLimit: process.env.DBCONNLIMIT || 50,
    host: process.env.DBHOST,
    user: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    database: process.env.DBNAME
  },

}

module.exports = my;

