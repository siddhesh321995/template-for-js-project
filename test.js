const should = require('should');
const assert = require('assert');
const SampleJSExport = require('./src/index');

describe('template-for-js-project', () => {
  describe('Class', () => {
    it('Constructor', (done) => {
      var out = new SampleJSExport();
      done();
    });
    it('doSomething tests', (done) => {
      var out = new SampleJSExport();
      out.doSomething();
      done();
    });
  });
});
