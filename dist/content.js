/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/libs/parser.js":
/*!****************************!*\
  !*** ./src/libs/parser.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Parser; }
/* harmony export */ });
/* harmony import */ var _workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js");
/* harmony import */ var _workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");



var _html = /*#__PURE__*/new WeakMap();
var _url = /*#__PURE__*/new WeakMap();
class Parser {
  constructor(url, html) {
    (0,_workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _html, {
      writable: true,
      value: void 0
    });
    (0,_workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldInitSpec_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _url, {
      writable: true,
      value: void 0
    });
    (0,_workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _url, url);
    (0,_workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldSet_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _html, html);
  }
  getTitle() {
    const title = (0,_workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _html).querySelector('meta[property="og:title"], meta[name="twitter:title"]')?.getAttribute('content') ?? (0,_workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _html).title ?? (0,_workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _html).querySelector('h1')?.textContent ?? (0,_workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _html).querySelector('h2')?.textContent;
    return title || null;
  }
  getDescription() {
    const selectors = ['meta[property="og:description"]', 'meta[name="twitter:description"]', 'meta[name="description"]'];
    return (0,_workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _html).querySelector(selectors.join(','))?.getAttribute('content') ?? null;
  }
  getImage() {
    const selectors = ['meta[property="og:image"]', 'meta[name="twitter:image"]', 'meta[property="og:image:url"]', 'link[rel="image_src"]', 'meta[property="forem:logo"]'];
    let image = (0,_workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _html).querySelector(selectors.join(','));
    image = (image?.getAttribute('content') || image?.getAttribute('href')) ?? this.getAppleTouchIcon();
    return image ? new URL(image, (0,_workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _url)).href : null;
  }
  getAppleTouchIcon() {
    let maxSize = 0;
    let maxIcon = null;
    const icons = (0,_workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _html).querySelectorAll('link[rel="apple-touch-icon"][sizes]');
    // eslint-disable-next-line no-restricted-syntax
    for (const icon of icons) {
      const size = parseInt(icon.getAttribute('sizes').split('x')[0], 10);
      if (size > maxSize) {
        maxSize = size;
        maxIcon = icon;
      }
    }
    return maxIcon?.getAttribute('href') ?? null;
  }
  getDomain() {
    return new URL((0,_workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _url)).hostname;
  }
  getFavicon() {
    const selectors = ['link[rel="shortcut icon"]', 'link[rel="icon"]'];
    const link = (0,_workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _html).querySelector(selectors.join(','))?.getAttribute('href');
    return link ? new URL(link, (0,_workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _url)).href : null;
  }
  getUrl() {
    return (0,_workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _url);
  }
  getType() {
    return (0,_workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _html).querySelector('meta[property="og:type"]')?.getAttribute('content') ?? null;
  }
  getKeywords() {
    const selectors = ['meta[name="keywords"]', 'meta[name="keynews_keywordswords"]'];
    const keywords = (0,_workspace_bbox_node_modules_babel_runtime_helpers_esm_classPrivateFieldGet_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _html).querySelector(selectors.join(','))?.getAttribute('content');
    if (!keywords || keywords.length === 0) return null;
    return keywords.split(',').map(keyword => keyword.trim()).filter(keyword => keyword.length > 0);
  }
  getFullPageInfo() {
    return {
      title: this.getTitle(),
      description: this.getDescription(),
      image: this.getImage(),
      domain: this.getDomain(),
      favicon: this.getFavicon(),
      url: this.getUrl(),
      keywords: this.getKeywords(),
      type: this.getType()
    };
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/checkPrivateRedeclaration.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/checkPrivateRedeclaration.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _checkPrivateRedeclaration; }
/* harmony export */ });
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classApplyDescriptorGet; }
/* harmony export */ });
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classApplyDescriptorSet; }
/* harmony export */ });
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classExtractFieldDescriptor; }
/* harmony export */ });
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }
  return privateMap.get(receiver);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classPrivateFieldGet; }
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorGet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "get");
  return (0,_classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classPrivateFieldInitSpec; }
/* harmony export */ });
/* harmony import */ var _checkPrivateRedeclaration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkPrivateRedeclaration.js */ "./node_modules/@babel/runtime/helpers/esm/checkPrivateRedeclaration.js");

function _classPrivateFieldInitSpec(obj, privateMap, value) {
  (0,_checkPrivateRedeclaration_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, privateMap);
  privateMap.set(obj, value);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classPrivateFieldSet; }
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorSet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "set");
  (0,_classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor, value);
  return value;
}

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************************!*\
  !*** ./src/extension/content.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/parser */ "./src/libs/parser.js");

console.warn('Content script..');
let port;
function connect() {
  port = chrome.runtime.connect({
    name: 'favbox'
  });
  port.onDisconnect.addListener(connect);
  port.onMessage.addListener(msg => {
    console.log('received', msg, 'from bg');
  });
}
try {
  connect();
  const parser = new _libs_parser__WEBPACK_IMPORTED_MODULE_0__["default"](document.location.href, document);
  const pageInfo = parser.getFullPageInfo();
  port.postMessage({
    action: 'cache',
    data: pageInfo
  });
} catch (e) {
  console.error('Content script error', e);
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsR0FBR0gsTUFBTSxDQUFDcEMsZUFBZSxFQUFFO0VBQ3pDMEIsSUFBSSxDQUFDYyxXQUFXLENBQUM7SUFBRXJCLE1BQU0sRUFBRSxPQUFPO0lBQUVzQixJQUFJLEVBQUVGO0VBQVMsQ0FBQyxDQUFDO0FBQ3ZELENBQUMsQ0FBQyxPQUFPRyxDQUFDLEVBQUU7RUFDVmxCLE9BQU8sQ0FBQ21CLEtBQUssQ0FBQyxzQkFBc0IsRUFBRUQsQ0FBQyxDQUFDO0FBQzFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYm94Ly4vc3JjL2xpYnMvcGFyc2VyLmpzIiwid2VicGFjazovL2Jib3gvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2hlY2tQcml2YXRlUmVkZWNsYXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9iYm94Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0LmpzIiwid2VicGFjazovL2Jib3gvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NBcHBseURlc2NyaXB0b3JTZXQuanMiLCJ3ZWJwYWNrOi8vYmJveC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vYmJveC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIndlYnBhY2s6Ly9iYm94Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWMuanMiLCJ3ZWJwYWNrOi8vYmJveC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc1ByaXZhdGVGaWVsZFNldC5qcyIsIndlYnBhY2s6Ly9iYm94L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jib3gvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jib3gvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYm94L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmJveC8uL3NyYy9leHRlbnNpb24vY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzZXIge1xuICAjaHRtbDtcblxuICAjdXJsO1xuXG4gIGNvbnN0cnVjdG9yKHVybCwgaHRtbCkge1xuICAgIHRoaXMuI3VybCA9IHVybDtcbiAgICB0aGlzLiNodG1sID0gaHRtbDtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy4jaHRtbFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbcHJvcGVydHk9XCJvZzp0aXRsZVwiXSwgbWV0YVtuYW1lPVwidHdpdHRlcjp0aXRsZVwiXScpXG4gICAgICA/LmdldEF0dHJpYnV0ZSgnY29udGVudCcpXG4gICAgICA/PyB0aGlzLiNodG1sLnRpdGxlXG4gICAgICA/PyB0aGlzLiNodG1sLnF1ZXJ5U2VsZWN0b3IoJ2gxJyk/LnRleHRDb250ZW50XG4gICAgICA/PyB0aGlzLiNodG1sLnF1ZXJ5U2VsZWN0b3IoJ2gyJyk/LnRleHRDb250ZW50O1xuXG4gICAgcmV0dXJuIHRpdGxlIHx8IG51bGw7XG4gIH1cblxuICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBbXG4gICAgICAnbWV0YVtwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJdJyxcbiAgICAgICdtZXRhW25hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJdJyxcbiAgICAgICdtZXRhW25hbWU9XCJkZXNjcmlwdGlvblwiXScsXG4gICAgXTtcbiAgICByZXR1cm4gdGhpcy4jaHRtbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5qb2luKCcsJykpPy5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSA/PyBudWxsO1xuICB9XG5cbiAgZ2V0SW1hZ2UoKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gW1xuICAgICAgJ21ldGFbcHJvcGVydHk9XCJvZzppbWFnZVwiXScsXG4gICAgICAnbWV0YVtuYW1lPVwidHdpdHRlcjppbWFnZVwiXScsXG4gICAgICAnbWV0YVtwcm9wZXJ0eT1cIm9nOmltYWdlOnVybFwiXScsXG4gICAgICAnbGlua1tyZWw9XCJpbWFnZV9zcmNcIl0nLFxuICAgICAgJ21ldGFbcHJvcGVydHk9XCJmb3JlbTpsb2dvXCJdJyxcbiAgICBdO1xuICAgIGxldCBpbWFnZSA9IHRoaXMuI2h0bWwucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMuam9pbignLCcpKTtcbiAgICBpbWFnZSA9IChpbWFnZT8uZ2V0QXR0cmlidXRlKCdjb250ZW50JykgfHwgaW1hZ2U/LmdldEF0dHJpYnV0ZSgnaHJlZicpKSA/PyB0aGlzLmdldEFwcGxlVG91Y2hJY29uKCk7XG4gICAgcmV0dXJuIGltYWdlID8gbmV3IFVSTChpbWFnZSwgdGhpcy4jdXJsKS5ocmVmIDogbnVsbDtcbiAgfVxuXG4gIGdldEFwcGxlVG91Y2hJY29uKCkge1xuICAgIGxldCBtYXhTaXplID0gMDtcbiAgICBsZXQgbWF4SWNvbiA9IG51bGw7XG4gICAgY29uc3QgaWNvbnMgPSB0aGlzLiNodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXVtzaXplc10nKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBmb3IgKGNvbnN0IGljb24gb2YgaWNvbnMpIHtcbiAgICAgIGNvbnN0IHNpemUgPSBwYXJzZUludChpY29uLmdldEF0dHJpYnV0ZSgnc2l6ZXMnKS5zcGxpdCgneCcpWzBdLCAxMCk7XG4gICAgICBpZiAoc2l6ZSA+IG1heFNpemUpIHtcbiAgICAgICAgbWF4U2l6ZSA9IHNpemU7XG4gICAgICAgIG1heEljb24gPSBpY29uO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF4SWNvbj8uZ2V0QXR0cmlidXRlKCdocmVmJykgPz8gbnVsbDtcbiAgfVxuXG4gIGdldERvbWFpbigpIHtcbiAgICByZXR1cm4gbmV3IFVSTCh0aGlzLiN1cmwpLmhvc3RuYW1lO1xuICB9XG5cbiAgZ2V0RmF2aWNvbigpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBbJ2xpbmtbcmVsPVwic2hvcnRjdXQgaWNvblwiXScsICdsaW5rW3JlbD1cImljb25cIl0nXTtcbiAgICBjb25zdCBsaW5rID0gdGhpcy4jaHRtbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5qb2luKCcsJykpPy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICByZXR1cm4gbGluayA/IG5ldyBVUkwobGluaywgdGhpcy4jdXJsKS5ocmVmIDogbnVsbDtcbiAgfVxuXG4gIGdldFVybCgpIHtcbiAgICByZXR1cm4gdGhpcy4jdXJsO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jaHRtbC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwib2c6dHlwZVwiXScpPy5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSA/PyBudWxsO1xuICB9XG5cbiAgZ2V0S2V5d29yZHMoKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gWydtZXRhW25hbWU9XCJrZXl3b3Jkc1wiXScsICdtZXRhW25hbWU9XCJrZXluZXdzX2tleXdvcmRzd29yZHNcIl0nXTtcbiAgICBjb25zdCBrZXl3b3JkcyA9IHRoaXMuI2h0bWwucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMuam9pbignLCcpKT8uZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgaWYgKCFrZXl3b3JkcyB8fCBrZXl3b3Jkcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIHJldHVybiBrZXl3b3Jkc1xuICAgICAgLnNwbGl0KCcsJylcbiAgICAgIC5tYXAoKGtleXdvcmQpID0+IGtleXdvcmQudHJpbSgpKVxuICAgICAgLmZpbHRlcigoa2V5d29yZCkgPT4ga2V5d29yZC5sZW5ndGggPiAwKTtcbiAgfVxuXG4gIGdldEZ1bGxQYWdlSW5mbygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHRoaXMuZ2V0VGl0bGUoKSxcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmdldERlc2NyaXB0aW9uKCksXG4gICAgICBpbWFnZTogdGhpcy5nZXRJbWFnZSgpLFxuICAgICAgZG9tYWluOiB0aGlzLmdldERvbWFpbigpLFxuICAgICAgZmF2aWNvbjogdGhpcy5nZXRGYXZpY29uKCksXG4gICAgICB1cmw6IHRoaXMuZ2V0VXJsKCksXG4gICAgICBrZXl3b3JkczogdGhpcy5nZXRLZXl3b3JkcygpLFxuICAgICAgdHlwZTogdGhpcy5nZXRUeXBlKCksXG4gICAgfTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NoZWNrUHJpdmF0ZVJlZGVjbGFyYXRpb24ob2JqLCBwcml2YXRlQ29sbGVjdGlvbikge1xuICBpZiAocHJpdmF0ZUNvbGxlY3Rpb24uaGFzKG9iaikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGluaXRpYWxpemUgdGhlIHNhbWUgcHJpdmF0ZSBlbGVtZW50cyB0d2ljZSBvbiBhbiBvYmplY3RcIik7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0b3IuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICB9XG4gIHJldHVybiBkZXNjcmlwdG9yLnZhbHVlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpIHtcbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGlmICghZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcIik7XG4gICAgfVxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIGFjdGlvbikge1xuICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gXCIgKyBhY3Rpb24gKyBcIiBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcbiAgfVxuICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xufSIsImltcG9ydCBjbGFzc0FwcGx5RGVzY3JpcHRvckdldCBmcm9tIFwiLi9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qc1wiO1xuaW1wb3J0IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciBmcm9tIFwiLi9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xuICB2YXIgZGVzY3JpcHRvciA9IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgXCJnZXRcIik7XG4gIHJldHVybiBjbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcik7XG59IiwiaW1wb3J0IGNoZWNrUHJpdmF0ZVJlZGVjbGFyYXRpb24gZnJvbSBcIi4vY2hlY2tQcml2YXRlUmVkZWNsYXJhdGlvbi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWMob2JqLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xuICBjaGVja1ByaXZhdGVSZWRlY2xhcmF0aW9uKG9iaiwgcHJpdmF0ZU1hcCk7XG4gIHByaXZhdGVNYXAuc2V0KG9iaiwgdmFsdWUpO1xufSIsImltcG9ydCBjbGFzc0FwcGx5RGVzY3JpcHRvclNldCBmcm9tIFwiLi9jbGFzc0FwcGx5RGVzY3JpcHRvclNldC5qc1wiO1xuaW1wb3J0IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciBmcm9tIFwiLi9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwic2V0XCIpO1xuICBjbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFBhcnNlciBmcm9tICdAL2xpYnMvcGFyc2VyJztcblxuY29uc29sZS53YXJuKCdDb250ZW50IHNjcmlwdC4uJyk7XG5sZXQgcG9ydDtcbmZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gIHBvcnQgPSBjaHJvbWUucnVudGltZS5jb25uZWN0KHsgbmFtZTogJ2ZhdmJveCcgfSk7XG4gIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKGNvbm5lY3QpO1xuICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobXNnKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlY2VpdmVkJywgbXNnLCAnZnJvbSBiZycpO1xuICB9KTtcbn1cbnRyeSB7XG4gIGNvbm5lY3QoKTtcbiAgY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcihkb2N1bWVudC5sb2NhdGlvbi5ocmVmLCBkb2N1bWVudCk7XG4gIGNvbnN0IHBhZ2VJbmZvID0gcGFyc2VyLmdldEZ1bGxQYWdlSW5mbygpO1xuICBwb3J0LnBvc3RNZXNzYWdlKHsgYWN0aW9uOiAnY2FjaGUnLCBkYXRhOiBwYWdlSW5mbyB9KTtcbn0gY2F0Y2ggKGUpIHtcbiAgY29uc29sZS5lcnJvcignQ29udGVudCBzY3JpcHQgZXJyb3InLCBlKTtcbn1cbiJdLCJuYW1lcyI6WyJQYXJzZXIiLCJjb25zdHJ1Y3RvciIsInVybCIsImh0bWwiLCJfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyIsIl9odG1sIiwid3JpdGFibGUiLCJ2YWx1ZSIsIl91cmwiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJnZXRUaXRsZSIsInRpdGxlIiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiZ2V0RGVzY3JpcHRpb24iLCJzZWxlY3RvcnMiLCJqb2luIiwiZ2V0SW1hZ2UiLCJpbWFnZSIsImdldEFwcGxlVG91Y2hJY29uIiwiVVJMIiwiaHJlZiIsIm1heFNpemUiLCJtYXhJY29uIiwiaWNvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaWNvbiIsInNpemUiLCJwYXJzZUludCIsInNwbGl0IiwiZ2V0RG9tYWluIiwiaG9zdG5hbWUiLCJnZXRGYXZpY29uIiwibGluayIsImdldFVybCIsImdldFR5cGUiLCJnZXRLZXl3b3JkcyIsImtleXdvcmRzIiwibGVuZ3RoIiwibWFwIiwia2V5d29yZCIsInRyaW0iLCJmaWx0ZXIiLCJnZXRGdWxsUGFnZUluZm8iLCJkZXNjcmlwdGlvbiIsImRvbWFpbiIsImZhdmljb24iLCJ0eXBlIiwiX2NoZWNrUHJpdmF0ZVJlZGVjbGFyYXRpb24iLCJvYmoiLCJwcml2YXRlQ29sbGVjdGlvbiIsImhhcyIsIlR5cGVFcnJvciIsIl9jbGFzc0FwcGx5RGVzY3JpcHRvckdldCIsInJlY2VpdmVyIiwiZGVzY3JpcHRvciIsImdldCIsImNhbGwiLCJfY2xhc3NBcHBseURlc2NyaXB0b3JTZXQiLCJzZXQiLCJfY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yIiwicHJpdmF0ZU1hcCIsImFjdGlvbiIsImNsYXNzQXBwbHlEZXNjcmlwdG9yR2V0IiwiY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yIiwiY2hlY2tQcml2YXRlUmVkZWNsYXJhdGlvbiIsImNsYXNzQXBwbHlEZXNjcmlwdG9yU2V0IiwiY29uc29sZSIsIndhcm4iLCJwb3J0IiwiY29ubmVjdCIsImNocm9tZSIsInJ1bnRpbWUiLCJuYW1lIiwib25EaXNjb25uZWN0IiwiYWRkTGlzdGVuZXIiLCJvbk1lc3NhZ2UiLCJtc2ciLCJsb2ciLCJwYXJzZXIiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicGFnZUluZm8iLCJwb3N0TWVzc2FnZSIsImRhdGEiLCJlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9