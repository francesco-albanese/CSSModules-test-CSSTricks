/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _robot = __webpack_require__(1);

	var _robot2 = _interopRequireDefault(_robot);

	var _app = __webpack_require__(2);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CONTAINER = document.querySelector('.container'); // require('./alert.js'); Webpack build first test. Passed... OK!

	CONTAINER.insertAdjacentHTML('beforeend', (0, _robot2.default)("Affirmative", "Francesco!"));

	// creating a stylesheet dependency of a JavaScript file. AMAZING!

	var ELEMENT = '\n  <div class="' + _app2.default.element + '">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur laudantium recusandae itaque libero velit minus ex reiciendis veniam. Eligendi modi sint delectus beatae nemo provident ratione maiores, voluptatibus a tempore!</p>\n  </div>\n';

	var webpackTest = '\n  <div class="' + _app2.default.webpackTest + '">\n    <p>This is another test using webpack to compile and add the styles</p>\n    <p>the div class name should be altered by webpack extract text plugin</p>\n  </div>\n';

	CONTAINER.insertAdjacentHTML('beforeend', ELEMENT);
	CONTAINER.insertAdjacentHTML('beforeend', webpackTest);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var greetings = function greetings(text, person) {
	  return text + ", " + person + ". I read you but I’m sorry, I’m afraid I can’t do that.";
	};

	exports.default = greetings;

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"element":"app__element___1MmQg","webpackTest":"app__webpackTest___1vOIB"};

/***/ }
/******/ ]);