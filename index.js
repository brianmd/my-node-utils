'use strict'

const debug = require('debug');

const my = {

  last: (arr) => { return arr[arr.length-1] },
  identity: (obj) => { return obj },
  logit: function() {
    var args = new Array(arguments.length);
    for(var i = 0; i < args.length; ++i) { args[i] = arguments[i]; }
    console.error(JSON.stringify(args));
    return args[args.length-1];
  },
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

  isPromise: (obj) => {
    if (typeof obj !== 'object') return false;
    return (typeof obj.then === 'function');
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

