// Export modules to global scope as necessary (only for testing)
'use strict'

const my = require('../index');
const glob = my.glob;
glob.my = my;

glob.chai = require("chai");
glob.chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

// var chaiAsPromised = require('chai-as-promised');
// chai.use(chaiAsPromised);


if (typeof process !== 'undefined' && process.title === 'node') {
  // We are in node. Require modules.
  glob.expect = chai.expect;
  glob.sinon = require('sinon');
  num = require('..');
  glob.isBrowser = false;
} else {
  // We are in the browser. Set up variables like above using served js files.
  glob.expect = chai.expect;
  // num and sinon already exported globally in the browser.
  glob.isBrowser = true;
}
