'use strict'

const debug = require('debug');

const my = {

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

  isFunction: (obj) => {
    return typeof obj === 'function';
  },

  propertyNames: (obj) => {
    return Object
      .getOwnPropertyNames(obj);
  },

  functionNames: (obj) => {
    return Object
      .getOwnPropertyNames(obj)
      .filter(fn => { return typeof obj[fn]==='function' });
  },

  isBrowser: (typeof window==='object'),
  glob: this.isBrowser ? window : global,

}

module.exports = my;

