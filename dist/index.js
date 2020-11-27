"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A sample class to export out of this module file.
 * @class
 * @public
 * @example
 * @returns {string} Sample returning string
 * const obj = new SampleJSExport();
 * obj.doSomething();
 */
var SampleJSExport = function () {
  function SampleJSExport() {
    _classCallCheck(this, SampleJSExport);
  }

  _createClass(SampleJSExport, [{
    key: "doSomething",

    /**
     * Does something..
     * @param {string} par Sample parameter
     */
    value: function doSomething(par) {
      // do something
      return "";
    }
  }]);

  return SampleJSExport;
}();

// Twin support, supports as ES6 module or can be loaded upon browser.


if (typeof module != "undefined") {
  module.exports = SampleJSExport;
}
if (typeof window != "undefined") {
  window.SampleJSExport = SampleJSExport;
}