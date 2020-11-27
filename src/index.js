/**
 * A sample class to export out of this module file.
 * @class
 * @public
 * @example
 * @returns {string} Sample returning string
 * const obj = new SampleJSExport();
 * obj.doSomething();
 */
class SampleJSExport {
  /**
   * Does something..
   * @param {string} par Sample parameter
   */
  doSomething(par) {
    // do something
    return "";
  }
}

// Twin support, supports as ES6 module or can be loaded upon browser.
if (typeof module != "undefined") {
  module.exports = SampleJSExport;
}
if (typeof window != "undefined") {
  window.SampleJSExport = SampleJSExport;
}
