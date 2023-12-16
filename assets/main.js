/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var SITE;
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ \"./node_modules/core-js/modules/es.array.fill.js\");\n/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/dist/esm/pixi.js\");\n/* harmony import */ var _pixi_filter_kawase_blur__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pixi/filter-kawase-blur */ \"./node_modules/@pixi/filter-kawase-blur/dist/filter-kawase-blur.esm.js\");\n/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! simplex-noise */ \"./node_modules/simplex-noise/dist/esm/simplex-noise.js\");\n/* harmony import */ var hsl_to_hex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hsl-to-hex */ \"./node_modules/hsl-to-hex/index.js\");\n/* harmony import */ var hsl_to_hex__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hsl_to_hex__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! debounce */ \"./node_modules/debounce/index.js\");\n/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\n // return a random number within a range\n\nfunction random(min, max) {\n  return Math.random() * (max - min) + min;\n} // map a number from 1 range to another\n\n\nfunction map(n, start1, end1, start2, end2) {\n  return (n - start1) / (end1 - start1) * (end2 - start2) + start2;\n} // Create a new simplex noise instance\n\n\nvar simplex = new simplex_noise__WEBPACK_IMPORTED_MODULE_6__[\"default\"](); // ColorPalette class\n\nvar ColorPalette = /*#__PURE__*/function () {\n  function ColorPalette() {\n    _classCallCheck(this, ColorPalette);\n\n    this.setColors();\n    this.setCustomProperties();\n  }\n\n  _createClass(ColorPalette, [{\n    key: \"setColors\",\n    value: function setColors() {\n      // pick a random hue somewhere between 220 and 360\n      this.hue = 220;\n      this.complimentaryHue1 = 250;\n      this.complimentaryHue2 = 300; // define a fixed saturation and lightness\n\n      this.saturation = 95;\n      this.lightness = 50; // define a base color\n\n      this.baseColor = hsl_to_hex__WEBPACK_IMPORTED_MODULE_7___default()(this.hue, this.saturation, this.lightness); // define a complimentary color, 30 degress away from the base\n\n      this.complimentaryColor1 = hsl_to_hex__WEBPACK_IMPORTED_MODULE_7___default()(this.complimentaryHue1, this.saturation, this.lightness); // define a second complimentary color, 60 degrees away from the base\n\n      this.complimentaryColor2 = hsl_to_hex__WEBPACK_IMPORTED_MODULE_7___default()(this.complimentaryHue2, this.saturation, this.lightness); // store the color choices in an array so that a random one can be picked later\n\n      this.colorChoices = [this.baseColor, this.complimentaryColor1, this.complimentaryColor2];\n    }\n  }, {\n    key: \"randomColor\",\n    value: function randomColor() {\n      // pick a random color\n      return this.colorChoices[~~random(0, this.colorChoices.length)].replace(\"#\", \"0x\");\n    }\n  }, {\n    key: \"setCustomProperties\",\n    value: function setCustomProperties() {\n      // set CSS custom properties so that the colors defined here can be used throughout the UI\n      document.documentElement.style.setProperty(\"--hue\", this.hue);\n      document.documentElement.style.setProperty(\"--hue-complimentary1\", this.complimentaryHue1);\n      document.documentElement.style.setProperty(\"--hue-complimentary2\", this.complimentaryHue2);\n    }\n  }]);\n\n  return ColorPalette;\n}(); // Orb class\n\n\nvar Orb = /*#__PURE__*/function () {\n  // Pixi takes hex colors as hexidecimal literals (0x rather than a string with '#')\n  function Orb() {\n    var _this = this;\n\n    var fill = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0x000000;\n\n    _classCallCheck(this, Orb);\n\n    // bounds = the area an orb is \"allowed\" to move within\n    this.bounds = this.setBounds(); // initialise the orb's { x, y } values to a random point within it's bounds\n\n    this.x = random(this.bounds[\"x\"].min, this.bounds[\"x\"].max);\n    this.y = random(this.bounds[\"y\"].min, this.bounds[\"y\"].max); // how large the orb is vs it's original radius (this will modulate over time)\n\n    this.scale = 1; // what color is the orb?\n\n    this.fill = fill; // the original radius of the orb, set relative to window height\n\n    this.radius = random(window.innerHeight / 6, window.innerHeight / 3); // starting points in \"time\" for the noise/self similar random values\n\n    this.xOff = random(0, 1000);\n    this.yOff = random(0, 1000); // how quickly the noise/self similar random values step through time\n\n    this.inc = 0.002; // PIXI.Graphics is used to draw 2d primitives (in this case a circle) to the canvas\n\n    this.graphics = new pixi_js__WEBPACK_IMPORTED_MODULE_4__.Graphics();\n    this.graphics.alpha = 0.825; // 250ms after the last window resize event, recalculate orb positions.\n\n    window.addEventListener(\"resize\", debounce__WEBPACK_IMPORTED_MODULE_8___default()(function () {\n      _this.bounds = _this.setBounds();\n    }, 250));\n  }\n\n  _createClass(Orb, [{\n    key: \"setBounds\",\n    value: function setBounds() {\n      // how far from the { x, y } origin can each orb move\n      var maxDist = window.innerWidth < 1000 ? window.innerWidth / 3 : window.innerWidth / 5; // the { x, y } origin for each orb (the bottom right of the screen)\n\n      var originX = window.innerWidth / 1.25;\n      var originY = window.innerWidth < 1000 ? window.innerHeight : window.innerHeight / 1.375; // allow each orb to move x distance away from it's x / y origin\n\n      return {\n        x: {\n          min: originX - maxDist,\n          max: originX + maxDist\n        },\n        y: {\n          min: originY - maxDist,\n          max: originY + maxDist\n        }\n      };\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      // self similar \"psuedo-random\" or noise values at a given point in \"time\"\n      var xNoise = simplex.noise2D(this.xOff, this.xOff);\n      var yNoise = simplex.noise2D(this.yOff, this.yOff);\n      var scaleNoise = simplex.noise2D(this.xOff, this.yOff); // map the xNoise/yNoise values (between -1 and 1) to a point within the orb's bounds\n\n      this.x = map(xNoise, -1, 1, this.bounds[\"x\"].min, this.bounds[\"x\"].max);\n      this.y = map(yNoise, -1, 1, this.bounds[\"y\"].min, this.bounds[\"y\"].max); // map scaleNoise (between -1 and 1) to a scale value somewhere between half of the orb's original size, and 100% of it's original size\n\n      this.scale = map(scaleNoise, -1, 1, 0.5, 1); // step through \"time\"\n\n      this.xOff += this.inc;\n      this.yOff += this.inc;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      // update the PIXI.Graphics position and scale values\n      this.graphics.x = this.x;\n      this.graphics.y = this.y;\n      this.graphics.scale.set(this.scale); // clear anything currently drawn to graphics\n\n      this.graphics.clear(); // tell graphics to fill any shapes drawn after this with the orb's fill color\n\n      this.graphics.beginFill(this.fill); // draw a circle at { 0, 0 } with it's size set by this.radius\n\n      this.graphics.drawCircle(0, 0, this.radius); // let graphics know we won't be filling in any more shapes\n\n      this.graphics.endFill();\n    }\n  }]);\n\n  return Orb;\n}(); // Create PixiJS app\n\n\nvar app = new pixi_js__WEBPACK_IMPORTED_MODULE_4__.Application({\n  // render to <canvas class=\"orb-canvas\"></canvas>\n  view: document.querySelector(\".orb-canvas\"),\n  // auto adjust size to fit the current window\n  resizeTo: window,\n  // transparent background, we will be creating a gradient background later using CSS\n  transparent: true\n}); // Create colour palette\n\nvar colorPalette = new ColorPalette();\napp.stage.filters = [new _pixi_filter_kawase_blur__WEBPACK_IMPORTED_MODULE_5__.KawaseBlurFilter(30, 10, true)]; // Create orbs\n\nvar orbs = [];\n\nfor (var i = 0; i < 10; i++) {\n  var orb = new Orb(colorPalette.randomColor());\n  app.stage.addChild(orb.graphics);\n  orbs.push(orb);\n} // Animate!\n\n\nif (!window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches) {\n  app.ticker.add(function () {\n    orbs.forEach(function (orb) {\n      orb.update();\n      orb.render();\n    });\n  });\n} else {\n  orbs.forEach(function (orb) {\n    orb.update();\n    orb.render();\n  });\n}\n\n//# sourceURL=webpack://SITE/./assets/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkSITE"] = self["webpackChunkSITE"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./assets/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	SITE = __webpack_exports__;
/******/ 	
/******/ })()
;