/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/css-loader/dist/runtime/api.js":
/*!**********************************************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/css-loader/dist/runtime/api.js ***!
  \**********************************************************************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/css-loader/dist/runtime/getUrl.js":
/*!*************************************************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*************************************************************************************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*********************************************************************************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*************************************************************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*************************************************************************************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***************************************************************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***************************************************************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***************************************************************************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!********************************************************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \********************************************************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**************************************************************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**************************************************************************************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/contact.js":
/*!*****************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/contact.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactActive": () => (/* binding */ contactActive)
/* harmony export */ });
const contactContentContainer = document.createElement("div");
contactContentContainer.className = "contact_content_container";

const contactContentInner = document.createElement("div");
contactContentInner.className = "content_container_inner";

const contactHeader = document.createElement("div");
contactHeader.className = "content_header";
contactHeader.textContent = "Contact Us";

function contactActive() {
  content.appendChild(contactContentContainer);
  contactContentContainer.append(contactContentInner);
  contactContentInner.appendChild(contactHeader);
}


/***/ }),

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/home.js":
/*!**************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/home.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeActive": () => (/* binding */ homeActive)
/* harmony export */ });
const homeContentContainer = document.createElement("div");
homeContentContainer.className = "home_content_container";

const homeContentInner = document.createElement("div");
homeContentInner.className = "content_container_inner";
homeContentInner.id = "home_container_inner";

// Header
const homeHeader = document.createElement("div");
homeHeader.className = "content_header";
homeHeader.id = "home_header";
homeHeader.setAttribute("style", "white-space: pre;");
homeHeader.textContent = "Visit Our \r\n";
homeHeader.textContent += "Good Restaurant \r\n";
homeHeader.textContent += "Foods and Drinks.";

// Intro
const homeIntro = document.createElement("div");
homeIntro.className = "content_main";
homeIntro.id = "home_intro";
const homeIntroHeader = document.createElement("h3");
homeIntroHeader.textContent = "Introduction";
homeIntro.appendChild(homeIntroHeader);
const homeIntroText = document.createElement("p");
homeIntroText.textContent =
  "Good Restaurant has the best fried rice! The ambiance and customer service make you feel like you are sitting in the middle of a rural paddy field, eating like a local! This is the right place as a reliever of the tiredness of urban life";
homeIntro.appendChild(homeIntroText);

// Hours
const homeHours = document.createElement("div");
homeHours.className = "content_main";
homeHours.id = "home_hours";
const homeHoursHeader = document.createElement("h3");
homeHoursHeader.textContent = "Hours";
homeHours.appendChild(homeHoursHeader);
const homeHoursText = document.createElement("p");
homeHoursText.setAttribute("style", "white-space: pre;");
homeHoursText.textContent = "Sunday: 8am - 8pm \r\n";
homeHoursText.textContent += "Monday: 6am - 6pm \r\n";
homeHoursText.textContent += "Tuesday: 6am - 6pm \r\n";
homeHoursText.textContent += "Wednesday: 6am - 6pm \r\n";
homeHoursText.textContent += "Thursday: 6am - 10pm \r\n";
homeHoursText.textContent += "Friday: 6am - 10pm \r\n";
homeHoursText.textContent += "Saturday: 8am - 10pm";
homeHours.appendChild(homeHoursText);

// location
const homeLocation = document.createElement("div");
homeLocation.className = "content_main";
homeLocation.id = "home_location";
const homeLocationHeader = document.createElement("h3");
homeLocationHeader.textContent = "Location";
homeLocation.appendChild(homeLocationHeader);
const homeLocationText = document.createElement("p");
homeLocationText.textContent = "1111 Untitled Street, Olympus Mons, Mars";
homeLocation.appendChild(homeLocationText);

// image
const imageOne = document.createElement("div");
imageOne.id = "image_one";

function homeActive() {
  content.appendChild(homeContentContainer);
  homeContentContainer.appendChild(homeContentInner);
  homeContentInner.appendChild(homeHeader);
  homeContentInner.appendChild(homeIntro);
  homeContentInner.appendChild(homeHours);
  homeContentInner.appendChild(imageOne);
  homeContentInner.appendChild(homeLocation);
}

//... kita mengambil element dengan id "content", karena element dengan id "content" juga memiliki nama class "content"
//... dan jika kita atur style css hanya untuk classnya yaitu ".content" maka tetap akan bekerja
//... kalo ingin bukti coba saja console.log
//... jadi kedepannya bisa kita buat element yang memiliki class dan id

// konsep button active dan tidak active
// saat button untuk home aktif, maka button untuk menu dan contact tidak aktif
//...begitu pula untuk button menu dan contact
//...sehingga nanti mungkin pakai loop untuk add active atau remove active

// kita buat kode agar masing-masing button bekerja semestinya dulu
//...kemudian kita isi kontennya oke?

// kita edit isi dari home page disini
//...lalu isi dari home page tersebut kita jadikan function
//...kemudian function tersebut kita export dan diimport di main.js
//...di dalam main.js kita buat button untuk memanggil function disini


/***/ }),

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/menu.js":
/*!**************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/menu.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuActive": () => (/* binding */ menuActive)
/* harmony export */ });
const menuContentContainer = document.createElement("div");
menuContentContainer.className = "menu_content_container";

const menuContentInner = document.createElement("div");
menuContentInner.className = "content_container_inner";

const menuHeader = document.createElement("div");
menuHeader.className = "content_header";
menuHeader.textContent = "Menu";

function menuActive() {
  content.appendChild(menuContentContainer);
  menuContentContainer.appendChild(menuContentInner);
  menuContentInner.appendChild(menuHeader);
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/style.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/style.css ***!
  \******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./regattia-bold-webfont.woff2 */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/regattia-bold-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./regattia-bold-webfont.woff */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/regattia-bold-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/restaurant.jpg */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/restaurant.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: \"Regattia\";\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: 16px;\r\n  color: white;\r\n  background: #18171c;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: relative;\r\n}\r\n\r\n/* Header ______________________________________________________________________________________ */\r\n.header {\r\n  background: #18171c;\r\n  width: 100%;\r\n  height: 50px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.header_list_item {\r\n  display: inline;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-weight: 400;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.header_list_item:hover {\r\n  color: orange;\r\n  cursor: pointer;\r\n}\r\n\r\n.header_list_item-active {\r\n  border-bottom: 1px solid white;\r\n}\r\n\r\n/* Content ______________________________________________________________________________________ */\r\n.content {\r\n  background: gray;\r\n  padding: 10px;\r\n}\r\n\r\n/* Inner Content */\r\n.content_container_inner {\r\n  background: #18171c;\r\n  min-width: 100%;\r\n  min-height: 500px;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.content_header {\r\n  font-family: \"Regattia\";\r\n  font-size: 50px;\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n.content_main {\r\n  text-align: center;\r\n  width: 400px;\r\n}\r\n\r\n.content_main h3 {\r\n  font-family: \"Regattia\";\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n/* Content container for home */\r\n\r\n.home_content_container {\r\n  display: none;\r\n}\r\n\r\n#home_container_inner {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: auto auto;\r\n  grid-auto-rows: minmax(150px, auto);\r\n  grid-gap: 20px;\r\n  grid-template-areas:\r\n    \"header header\"\r\n    \"content1 image1\"\r\n    \"content2 image1\"\r\n    \"location location\";\r\n}\r\n\r\n#home_header {\r\n  grid-area: header;\r\n}\r\n\r\n#home_intro {\r\n  grid-area: content1;\r\n}\r\n\r\n#image_one {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-size: cover;\r\n  grid-area: image1;\r\n  min-width: 500px;\r\n  min-height: 700px;\r\n}\r\n\r\n#home_hours {\r\n  grid-area: content2;\r\n}\r\n\r\n#home_location {\r\n  grid-area: location;\r\n  width: auto;\r\n}\r\n\r\n/* Content for menu */\r\n.menu_content_container {\r\n  display: none;\r\n}\r\n\r\n/* Content for contact */\r\n.contact_content_container {\r\n  display: none;\r\n}\r\n\r\n/* Footer ______________________________________________________________________________________ */\r\n.footer {\r\n  background: #18171c;\r\n  width: 100%;\r\n  height: 50px;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  position: relative;\r\n  bottom: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.footer_list {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n}\r\n\r\n.footer_list li {\r\n  display: inline;\r\n}\r\n\r\n.footer_list_item {\r\n  text-decoration: none;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: 11px;\r\n  font-weight: 500;\r\n  color: white;\r\n}\r\n\r\n.footer_list_item:hover {\r\n  color: orange;\r\n  cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,oHAA6G;AAC/G;;AAIA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;EACjC,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;;AAEA,kGAAkG;AAClG;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iCAAiC;EACjC,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,8BAA8B;AAChC;;AAEA,mGAAmG;AACnG;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA,kBAAkB;AAClB;EACE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;AACd;;AAEA,+BAA+B;;AAE/B;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gCAAgC;EAChC,mCAAmC;EACnC,cAAc;EACd;;;;uBAIqB;AACvB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,yDAA0C;EAC1C,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,WAAW;AACb;;AAEA,qBAAqB;AACrB;EACE,aAAa;AACf;;AAEA,wBAAwB;AACxB;EACE,aAAa;AACf;;AAEA,kGAAkG;AAClG;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,iCAAiC;EACjC,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,eAAe;AACjB","sourcesContent":["@font-face {\r\n  font-family: \"Regattia\";\r\n  src: url(\"./regattia-bold-webfont.woff2\") format(\"woff2\"), url(\"./regattia-bold-webfont.woff\") format(\"woff\");\r\n}\r\n\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: 16px;\r\n  color: white;\r\n  background: #18171c;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: relative;\r\n}\r\n\r\n/* Header ______________________________________________________________________________________ */\r\n.header {\r\n  background: #18171c;\r\n  width: 100%;\r\n  height: 50px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.header_list_item {\r\n  display: inline;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-weight: 400;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.header_list_item:hover {\r\n  color: orange;\r\n  cursor: pointer;\r\n}\r\n\r\n.header_list_item-active {\r\n  border-bottom: 1px solid white;\r\n}\r\n\r\n/* Content ______________________________________________________________________________________ */\r\n.content {\r\n  background: gray;\r\n  padding: 10px;\r\n}\r\n\r\n/* Inner Content */\r\n.content_container_inner {\r\n  background: #18171c;\r\n  min-width: 100%;\r\n  min-height: 500px;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.content_header {\r\n  font-family: \"Regattia\";\r\n  font-size: 50px;\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n.content_main {\r\n  text-align: center;\r\n  width: 400px;\r\n}\r\n\r\n.content_main h3 {\r\n  font-family: \"Regattia\";\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n/* Content container for home */\r\n\r\n.home_content_container {\r\n  display: none;\r\n}\r\n\r\n#home_container_inner {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: auto auto;\r\n  grid-auto-rows: minmax(150px, auto);\r\n  grid-gap: 20px;\r\n  grid-template-areas:\r\n    \"header header\"\r\n    \"content1 image1\"\r\n    \"content2 image1\"\r\n    \"location location\";\r\n}\r\n\r\n#home_header {\r\n  grid-area: header;\r\n}\r\n\r\n#home_intro {\r\n  grid-area: content1;\r\n}\r\n\r\n#image_one {\r\n  background-image: url(/src/restaurant.jpg);\r\n  background-size: cover;\r\n  grid-area: image1;\r\n  min-width: 500px;\r\n  min-height: 700px;\r\n}\r\n\r\n#home_hours {\r\n  grid-area: content2;\r\n}\r\n\r\n#home_location {\r\n  grid-area: location;\r\n  width: auto;\r\n}\r\n\r\n/* Content for menu */\r\n.menu_content_container {\r\n  display: none;\r\n}\r\n\r\n/* Content for contact */\r\n.contact_content_container {\r\n  display: none;\r\n}\r\n\r\n/* Footer ______________________________________________________________________________________ */\r\n.footer {\r\n  background: #18171c;\r\n  width: 100%;\r\n  height: 50px;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  position: relative;\r\n  bottom: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.footer_list {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n}\r\n\r\n.footer_list li {\r\n  display: inline;\r\n}\r\n\r\n.footer_list_item {\r\n  text-decoration: none;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: 11px;\r\n  font-weight: 500;\r\n  color: white;\r\n}\r\n\r\n.footer_list_item:hover {\r\n  color: orange;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/style.css":
/*!****************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/style.css ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _JavaScript_2_TOP_4_Restaurant_Page_Restaurant_Page_node_modules_css_loader_dist_cjs_js_JavaScript_2_TOP_4_Restaurant_Page_Restaurant_Page_src_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/node_modules/css-loader/dist/cjs.js!../../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/style.css */ "./node_modules/css-loader/dist/cjs.js!../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_JavaScript_2_TOP_4_Restaurant_Page_Restaurant_Page_node_modules_css_loader_dist_cjs_js_JavaScript_2_TOP_4_Restaurant_Page_Restaurant_Page_src_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_JavaScript_2_TOP_4_Restaurant_Page_Restaurant_Page_node_modules_css_loader_dist_cjs_js_JavaScript_2_TOP_4_Restaurant_Page_Restaurant_Page_src_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _JavaScript_2_TOP_4_Restaurant_Page_Restaurant_Page_node_modules_css_loader_dist_cjs_js_JavaScript_2_TOP_4_Restaurant_Page_Restaurant_Page_src_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _JavaScript_2_TOP_4_Restaurant_Page_Restaurant_Page_node_modules_css_loader_dist_cjs_js_JavaScript_2_TOP_4_Restaurant_Page_Restaurant_Page_src_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/regattia-bold-webfont.woff":
/*!*********************************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/regattia-bold-webfont.woff ***!
  \*********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "500e4bd4da72b7586bee.woff";

/***/ }),

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/regattia-bold-webfont.woff2":
/*!**********************************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/regattia-bold-webfont.woff2 ***!
  \**********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b07b86a3a393ea3ec9f3.woff2";

/***/ }),

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/restaurant.jpg":
/*!*********************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/restaurant.jpg ***!
  \*********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "002bd1a155bdc5e831d1.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/main.js ***!
  \**************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/contact.js");
// import





// Header _____________________________________________________________________________________________________________________________
const mainHeader = document.createElement("header");
mainHeader.className = "header";
const headerNav = document.createElement("nav");
const headerList = document.createElement("ul");
headerList.className = "header_list";

document.body.appendChild(mainHeader);
mainHeader.appendChild(headerNav);
headerNav.appendChild(headerList);

/* Function to create list with class, id and text */
function createHeaderList(liClass, liId, liText) {
  const li = document.createElement("li");
  li.className = liClass;
  li.id = liId;
  li.textContent = liText;
  return li;
}

/* Function to add list to header or footer ul */
function appendChildren(parent, children) {
  children.forEach(function (child) {
    parent.appendChild(child);
  });
}

const HeaderListItems = [
  createHeaderList("header_list_item", "home", "Home"),
  createHeaderList("header_list_item", "menu", "Menu"),
  createHeaderList("header_list_item", "contact", "Contact"),
];

appendChildren(headerList, HeaderListItems);

/* Function switching header list tab */

const headerBtn = headerNav.getElementsByClassName("header_list_item");
console.log(headerBtn);

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < headerBtn.length; i++) {
  headerBtn[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("header_list_item-active");

    // If there is no active class, replace "header_list_item-active" to " " (nothing)
    if (current.length > 0) {
      current[0].className = current[0].className.replace("header_list_item-active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " header_list_item-active";

    // jika home button active, maka add home_content_container-active
    if (this.id == "home") {
      console.log("home succesfuly called");
      homeContent.style.display = "block";
      menuContent.style.display = "none";
      contactContent.style.display = "none";
      //homeActive();
      // panggil function home
      //homeContent.style.display = "blok";
    } else if (this.id == "menu") {
      console.log("menu succesfuly called");
      homeContent.style.display = "none";
      menuContent.style.display = "block";
      contactContent.style.display = "none";
      //menuActive();
      // panggil function menu
      //menuContent.style.display = "blok";
    } else if (this.id == "contact") {
      console.log("contact succesfuly called");
      homeContent.style.display = "none";
      menuContent.style.display = "none";
      contactContent.style.display = "block";

      //contactActive();
      // panggil function contact
      //contactContent.style.display = "blok";
    }

    // test
    //console.log(current.length);
    //console.log(this.id);
    //console.log(homeContent);
  });
}

// Content _____________________________________________________________________________________________________________________________
const content = document.createElement("div");
content.className = "content";
content.id = "content";

document.body.appendChild(content);

// panggil fungsi ini dulu
(0,_home__WEBPACK_IMPORTED_MODULE_1__.homeActive)();
(0,_menu__WEBPACK_IMPORTED_MODULE_2__.menuActive)();
(0,_contact__WEBPACK_IMPORTED_MODULE_3__.contactActive)();

// setelah fungsi dipanggil maka masing-masing elemen konten akan muncul
const homeContent = document.querySelector(".home_content_container");
const menuContent = document.querySelector(".menu_content_container");
const contactContent = document.querySelector(".contact_content_container");

// baru kita tetapkan mau dimunculkan apa tidak
homeContent.style.display = "block";
menuContent.style.display = "none";
contactContent.style.display = "none";

// Footer _____________________________________________________________________________________________________________________________
const mainFooter = document.createElement("footer");
mainFooter.className = "footer";

const footerList = document.createElement("ul");
footerList.className = "footer_list";

document.body.appendChild(mainFooter);
mainFooter.appendChild(footerList);

/* Create list containing anchor(with class, href and text) */
function createAnchorInsideList(aClass, aHref, aText) {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.className = aClass;
  anchor.href = aHref;
  anchor.textContent = aText;
  li.appendChild(anchor);
  return li;
}

const footerListItems = [
  createAnchorInsideList(
    "footer_list_item",
    "https://befonts.com/regattia-typeface.html",
    "Regattia Typeface font designed by Bruno Sáez López - befonts.com"
  ),
  createAnchorInsideList(
    "footer_list_item",
    "https://fonts.google.com/specimen/Roboto",
    "Roboto font designed by Christian Robertson - fonts.google.com"
  ),
  createAnchorInsideList(
    "footer_list_item",
    "https://dribbble.com/shots/17319830-Stadshaven-Brewery-Restaurant-page",
    "Design inspired by Gil - dribbble.com"
  ),
];

/* Call appendChildren above */
appendChildren(footerList, footerListItems);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyw2TUFBZ0Q7QUFDNUYsNENBQTRDLDJNQUErQztBQUMzRiw0Q0FBNEMsMkxBQXNDO0FBQ2xGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsK0dBQStHLElBQUksSUFBSSxJQUFJLElBQUksa0JBQWtCO0FBQ2pKLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esc0RBQXNELGdDQUFnQywrSUFBK0ksS0FBSyxXQUFXLGdCQUFnQixpQkFBaUIsNkJBQTZCLEtBQUssY0FBYywwQ0FBMEMsc0JBQXNCLG1CQUFtQiwwQkFBMEIsbUJBQW1CLG9CQUFvQix5QkFBeUIsS0FBSyx3SEFBd0gsMEJBQTBCLGtCQUFrQixtQkFBbUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIsMEJBQTBCLEtBQUssMkJBQTJCLHNCQUFzQiwwQ0FBMEMsdUJBQXVCLHdCQUF3Qix5QkFBeUIsS0FBSyxpQ0FBaUMsb0JBQW9CLHNCQUFzQixLQUFLLGtDQUFrQyxxQ0FBcUMsS0FBSywwSEFBMEgsdUJBQXVCLG9CQUFvQixLQUFLLHlEQUF5RCwwQkFBMEIsc0JBQXNCLHdCQUF3QiwwQkFBMEIsb0JBQW9CLG9CQUFvQiw2QkFBNkIsMEJBQTBCLEtBQUsseUJBQXlCLGdDQUFnQyxzQkFBc0IseUJBQXlCLG1CQUFtQixLQUFLLHVCQUF1Qix5QkFBeUIsbUJBQW1CLEtBQUssMEJBQTBCLGdDQUFnQyx5QkFBeUIsbUJBQW1CLEtBQUsseUVBQXlFLG9CQUFvQixLQUFLLCtCQUErQixvQkFBb0IsOEJBQThCLHVDQUF1QywwQ0FBMEMscUJBQXFCLHVJQUF1SSxLQUFLLHNCQUFzQix3QkFBd0IsS0FBSyxxQkFBcUIsMEJBQTBCLEtBQUssb0JBQW9CLHdFQUF3RSw2QkFBNkIsd0JBQXdCLHVCQUF1Qix3QkFBd0IsS0FBSyxxQkFBcUIsMEJBQTBCLEtBQUssd0JBQXdCLDBCQUEwQixrQkFBa0IsS0FBSywyREFBMkQsb0JBQW9CLEtBQUssaUVBQWlFLG9CQUFvQixLQUFLLHdIQUF3SCwwQkFBMEIsa0JBQWtCLG1CQUFtQix5QkFBeUIsMEJBQTBCLHlCQUF5QixnQkFBZ0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsMEJBQTBCLEtBQUssc0JBQXNCLGtCQUFrQixvQkFBb0IsMEJBQTBCLG9DQUFvQyxLQUFLLHlCQUF5QixzQkFBc0IsS0FBSywyQkFBMkIsNEJBQTRCLDBDQUEwQyxzQkFBc0IsdUJBQXVCLG1CQUFtQixLQUFLLGlDQUFpQyxvQkFBb0Isc0JBQXNCLEtBQUssV0FBVyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxRQUFRLE9BQU8sT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLHNDQUFzQyxnQ0FBZ0MsNEhBQTRILEtBQUssK0VBQStFLElBQUksSUFBSSxJQUFJLElBQUksb0JBQW9CLFdBQVcsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsS0FBSyxjQUFjLDBDQUEwQyxzQkFBc0IsbUJBQW1CLDBCQUEwQixtQkFBbUIsb0JBQW9CLHlCQUF5QixLQUFLLHdIQUF3SCwwQkFBMEIsa0JBQWtCLG1CQUFtQixvQkFBb0IsMEJBQTBCLDhCQUE4QiwwQkFBMEIsS0FBSywyQkFBMkIsc0JBQXNCLDBDQUEwQyx1QkFBdUIsd0JBQXdCLHlCQUF5QixLQUFLLGlDQUFpQyxvQkFBb0Isc0JBQXNCLEtBQUssa0NBQWtDLHFDQUFxQyxLQUFLLDBIQUEwSCx1QkFBdUIsb0JBQW9CLEtBQUsseURBQXlELDBCQUEwQixzQkFBc0Isd0JBQXdCLDBCQUEwQixvQkFBb0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsS0FBSyx5QkFBeUIsZ0NBQWdDLHNCQUFzQix5QkFBeUIsbUJBQW1CLEtBQUssdUJBQXVCLHlCQUF5QixtQkFBbUIsS0FBSywwQkFBMEIsZ0NBQWdDLHlCQUF5QixtQkFBbUIsS0FBSyx5RUFBeUUsb0JBQW9CLEtBQUssK0JBQStCLG9CQUFvQiw4QkFBOEIsdUNBQXVDLDBDQUEwQyxxQkFBcUIsdUlBQXVJLEtBQUssc0JBQXNCLHdCQUF3QixLQUFLLHFCQUFxQiwwQkFBMEIsS0FBSyxvQkFBb0IsaURBQWlELDZCQUE2Qix3QkFBd0IsdUJBQXVCLHdCQUF3QixLQUFLLHFCQUFxQiwwQkFBMEIsS0FBSyx3QkFBd0IsMEJBQTBCLGtCQUFrQixLQUFLLDJEQUEyRCxvQkFBb0IsS0FBSyxpRUFBaUUsb0JBQW9CLEtBQUssd0hBQXdILDBCQUEwQixrQkFBa0IsbUJBQW1CLHlCQUF5QiwwQkFBMEIseUJBQXlCLGdCQUFnQixvQkFBb0IsMEJBQTBCLDhCQUE4QiwwQkFBMEIsS0FBSyxzQkFBc0Isa0JBQWtCLG9CQUFvQiwwQkFBMEIsb0NBQW9DLEtBQUsseUJBQXlCLHNCQUFzQixLQUFLLDJCQUEyQiw0QkFBNEIsMENBQTBDLHNCQUFzQix1QkFBdUIsbUJBQW1CLEtBQUssaUNBQWlDLG9CQUFvQixzQkFBc0IsS0FBSyx1QkFBdUI7QUFDbHVSO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHZDLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQXdQO0FBQ3hQO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsZ01BQU87Ozs7QUFJa007QUFDMU4sT0FBTyxpRUFBZSxnTUFBTyxJQUFJLHVNQUFjLEdBQUcsdU1BQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUI3RTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3FCO0FBQ2U7QUFDQTtBQUNNO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBVTtBQUNWLGlEQUFVO0FBQ1YsdURBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi4vLi4vLi4vLi4vXHUwMDAwI0phdmFTY3JpcHQvMi4gVE9QLzQuIFJlc3RhdXJhbnQgUGFnZS9SZXN0YXVyYW50X1BhZ2Uvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi4vLi4vLi4vLi4vXHUwMDAwI0phdmFTY3JpcHQvMi4gVE9QLzQuIFJlc3RhdXJhbnQgUGFnZS9SZXN0YXVyYW50X1BhZ2Uvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi4vLi4vLi4vLi4vXHUwMDAwI0phdmFTY3JpcHQvMi4gVE9QLzQuIFJlc3RhdXJhbnQgUGFnZS9SZXN0YXVyYW50X1BhZ2Uvc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9zcmMvc3R5bGUuY3NzP2E2NWYiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi4vLi4vLi4vLi4vXHUwMDAwI0phdmFTY3JpcHQvMi4gVE9QLzQuIFJlc3RhdXJhbnQgUGFnZS9SZXN0YXVyYW50X1BhZ2Uvc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29udGFjdENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb250YWN0Q29udGVudENvbnRhaW5lci5jbGFzc05hbWUgPSBcImNvbnRhY3RfY29udGVudF9jb250YWluZXJcIjtcclxuXHJcbmNvbnN0IGNvbnRhY3RDb250ZW50SW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb250YWN0Q29udGVudElubmVyLmNsYXNzTmFtZSA9IFwiY29udGVudF9jb250YWluZXJfaW5uZXJcIjtcclxuXHJcbmNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb250YWN0SGVhZGVyLmNsYXNzTmFtZSA9IFwiY29udGVudF9oZWFkZXJcIjtcclxuY29udGFjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhY3RBY3RpdmUoKSB7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Q29udGVudENvbnRhaW5lcik7XHJcbiAgY29udGFjdENvbnRlbnRDb250YWluZXIuYXBwZW5kKGNvbnRhY3RDb250ZW50SW5uZXIpO1xyXG4gIGNvbnRhY3RDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XHJcbn1cclxuIiwiY29uc3QgaG9tZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5ob21lQ29udGVudENvbnRhaW5lci5jbGFzc05hbWUgPSBcImhvbWVfY29udGVudF9jb250YWluZXJcIjtcclxuXHJcbmNvbnN0IGhvbWVDb250ZW50SW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5ob21lQ29udGVudElubmVyLmNsYXNzTmFtZSA9IFwiY29udGVudF9jb250YWluZXJfaW5uZXJcIjtcclxuaG9tZUNvbnRlbnRJbm5lci5pZCA9IFwiaG9tZV9jb250YWluZXJfaW5uZXJcIjtcclxuXHJcbi8vIEhlYWRlclxyXG5jb25zdCBob21lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaG9tZUhlYWRlci5jbGFzc05hbWUgPSBcImNvbnRlbnRfaGVhZGVyXCI7XHJcbmhvbWVIZWFkZXIuaWQgPSBcImhvbWVfaGVhZGVyXCI7XHJcbmhvbWVIZWFkZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aGl0ZS1zcGFjZTogcHJlO1wiKTtcclxuaG9tZUhlYWRlci50ZXh0Q29udGVudCA9IFwiVmlzaXQgT3VyIFxcclxcblwiO1xyXG5ob21lSGVhZGVyLnRleHRDb250ZW50ICs9IFwiR29vZCBSZXN0YXVyYW50IFxcclxcblwiO1xyXG5ob21lSGVhZGVyLnRleHRDb250ZW50ICs9IFwiRm9vZHMgYW5kIERyaW5rcy5cIjtcclxuXHJcbi8vIEludHJvXHJcbmNvbnN0IGhvbWVJbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmhvbWVJbnRyby5jbGFzc05hbWUgPSBcImNvbnRlbnRfbWFpblwiO1xyXG5ob21lSW50cm8uaWQgPSBcImhvbWVfaW50cm9cIjtcclxuY29uc3QgaG9tZUludHJvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG5ob21lSW50cm9IZWFkZXIudGV4dENvbnRlbnQgPSBcIkludHJvZHVjdGlvblwiO1xyXG5ob21lSW50cm8uYXBwZW5kQ2hpbGQoaG9tZUludHJvSGVhZGVyKTtcclxuY29uc3QgaG9tZUludHJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5ob21lSW50cm9UZXh0LnRleHRDb250ZW50ID1cclxuICBcIkdvb2QgUmVzdGF1cmFudCBoYXMgdGhlIGJlc3QgZnJpZWQgcmljZSEgVGhlIGFtYmlhbmNlIGFuZCBjdXN0b21lciBzZXJ2aWNlIG1ha2UgeW91IGZlZWwgbGlrZSB5b3UgYXJlIHNpdHRpbmcgaW4gdGhlIG1pZGRsZSBvZiBhIHJ1cmFsIHBhZGR5IGZpZWxkLCBlYXRpbmcgbGlrZSBhIGxvY2FsISBUaGlzIGlzIHRoZSByaWdodCBwbGFjZSBhcyBhIHJlbGlldmVyIG9mIHRoZSB0aXJlZG5lc3Mgb2YgdXJiYW4gbGlmZVwiO1xyXG5ob21lSW50cm8uYXBwZW5kQ2hpbGQoaG9tZUludHJvVGV4dCk7XHJcblxyXG4vLyBIb3Vyc1xyXG5jb25zdCBob21lSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5ob21lSG91cnMuY2xhc3NOYW1lID0gXCJjb250ZW50X21haW5cIjtcclxuaG9tZUhvdXJzLmlkID0gXCJob21lX2hvdXJzXCI7XHJcbmNvbnN0IGhvbWVIb3Vyc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuaG9tZUhvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiO1xyXG5ob21lSG91cnMuYXBwZW5kQ2hpbGQoaG9tZUhvdXJzSGVhZGVyKTtcclxuY29uc3QgaG9tZUhvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5ob21lSG91cnNUZXh0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2hpdGUtc3BhY2U6IHByZTtcIik7XHJcbmhvbWVIb3Vyc1RleHQudGV4dENvbnRlbnQgPSBcIlN1bmRheTogOGFtIC0gOHBtIFxcclxcblwiO1xyXG5ob21lSG91cnNUZXh0LnRleHRDb250ZW50ICs9IFwiTW9uZGF5OiA2YW0gLSA2cG0gXFxyXFxuXCI7XHJcbmhvbWVIb3Vyc1RleHQudGV4dENvbnRlbnQgKz0gXCJUdWVzZGF5OiA2YW0gLSA2cG0gXFxyXFxuXCI7XHJcbmhvbWVIb3Vyc1RleHQudGV4dENvbnRlbnQgKz0gXCJXZWRuZXNkYXk6IDZhbSAtIDZwbSBcXHJcXG5cIjtcclxuaG9tZUhvdXJzVGV4dC50ZXh0Q29udGVudCArPSBcIlRodXJzZGF5OiA2YW0gLSAxMHBtIFxcclxcblwiO1xyXG5ob21lSG91cnNUZXh0LnRleHRDb250ZW50ICs9IFwiRnJpZGF5OiA2YW0gLSAxMHBtIFxcclxcblwiO1xyXG5ob21lSG91cnNUZXh0LnRleHRDb250ZW50ICs9IFwiU2F0dXJkYXk6IDhhbSAtIDEwcG1cIjtcclxuaG9tZUhvdXJzLmFwcGVuZENoaWxkKGhvbWVIb3Vyc1RleHQpO1xyXG5cclxuLy8gbG9jYXRpb25cclxuY29uc3QgaG9tZUxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaG9tZUxvY2F0aW9uLmNsYXNzTmFtZSA9IFwiY29udGVudF9tYWluXCI7XHJcbmhvbWVMb2NhdGlvbi5pZCA9IFwiaG9tZV9sb2NhdGlvblwiO1xyXG5jb25zdCBob21lTG9jYXRpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbmhvbWVMb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcclxuaG9tZUxvY2F0aW9uLmFwcGVuZENoaWxkKGhvbWVMb2NhdGlvbkhlYWRlcik7XHJcbmNvbnN0IGhvbWVMb2NhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuaG9tZUxvY2F0aW9uVGV4dC50ZXh0Q29udGVudCA9IFwiMTExMSBVbnRpdGxlZCBTdHJlZXQsIE9seW1wdXMgTW9ucywgTWFyc1wiO1xyXG5ob21lTG9jYXRpb24uYXBwZW5kQ2hpbGQoaG9tZUxvY2F0aW9uVGV4dCk7XHJcblxyXG4vLyBpbWFnZVxyXG5jb25zdCBpbWFnZU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmltYWdlT25lLmlkID0gXCJpbWFnZV9vbmVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBob21lQWN0aXZlKCkge1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnRDb250YWluZXIpO1xyXG4gIGhvbWVDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVDb250ZW50SW5uZXIpO1xyXG4gIGhvbWVDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQoaG9tZUhlYWRlcik7XHJcbiAgaG9tZUNvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChob21lSW50cm8pO1xyXG4gIGhvbWVDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQoaG9tZUhvdXJzKTtcclxuICBob21lQ29udGVudElubmVyLmFwcGVuZENoaWxkKGltYWdlT25lKTtcclxuICBob21lQ29udGVudElubmVyLmFwcGVuZENoaWxkKGhvbWVMb2NhdGlvbik7XHJcbn1cclxuXHJcbi8vLi4uIGtpdGEgbWVuZ2FtYmlsIGVsZW1lbnQgZGVuZ2FuIGlkIFwiY29udGVudFwiLCBrYXJlbmEgZWxlbWVudCBkZW5nYW4gaWQgXCJjb250ZW50XCIganVnYSBtZW1pbGlraSBuYW1hIGNsYXNzIFwiY29udGVudFwiXHJcbi8vLi4uIGRhbiBqaWthIGtpdGEgYXR1ciBzdHlsZSBjc3MgaGFueWEgdW50dWsgY2xhc3NueWEgeWFpdHUgXCIuY29udGVudFwiIG1ha2EgdGV0YXAgYWthbiBiZWtlcmphXHJcbi8vLi4uIGthbG8gaW5naW4gYnVrdGkgY29iYSBzYWphIGNvbnNvbGUubG9nXHJcbi8vLi4uIGphZGkga2VkZXBhbm55YSBiaXNhIGtpdGEgYnVhdCBlbGVtZW50IHlhbmcgbWVtaWxpa2kgY2xhc3MgZGFuIGlkXHJcblxyXG4vLyBrb25zZXAgYnV0dG9uIGFjdGl2ZSBkYW4gdGlkYWsgYWN0aXZlXHJcbi8vIHNhYXQgYnV0dG9uIHVudHVrIGhvbWUgYWt0aWYsIG1ha2EgYnV0dG9uIHVudHVrIG1lbnUgZGFuIGNvbnRhY3QgdGlkYWsgYWt0aWZcclxuLy8uLi5iZWdpdHUgcHVsYSB1bnR1ayBidXR0b24gbWVudSBkYW4gY29udGFjdFxyXG4vLy4uLnNlaGluZ2dhIG5hbnRpIG11bmdraW4gcGFrYWkgbG9vcCB1bnR1ayBhZGQgYWN0aXZlIGF0YXUgcmVtb3ZlIGFjdGl2ZVxyXG5cclxuLy8ga2l0YSBidWF0IGtvZGUgYWdhciBtYXNpbmctbWFzaW5nIGJ1dHRvbiBiZWtlcmphIHNlbWVzdGlueWEgZHVsdVxyXG4vLy4uLmtlbXVkaWFuIGtpdGEgaXNpIGtvbnRlbm55YSBva2U/XHJcblxyXG4vLyBraXRhIGVkaXQgaXNpIGRhcmkgaG9tZSBwYWdlIGRpc2luaVxyXG4vLy4uLmxhbHUgaXNpIGRhcmkgaG9tZSBwYWdlIHRlcnNlYnV0IGtpdGEgamFkaWthbiBmdW5jdGlvblxyXG4vLy4uLmtlbXVkaWFuIGZ1bmN0aW9uIHRlcnNlYnV0IGtpdGEgZXhwb3J0IGRhbiBkaWltcG9ydCBkaSBtYWluLmpzXHJcbi8vLi4uZGkgZGFsYW0gbWFpbi5qcyBraXRhIGJ1YXQgYnV0dG9uIHVudHVrIG1lbWFuZ2dpbCBmdW5jdGlvbiBkaXNpbmlcclxuIiwiY29uc3QgbWVudUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tZW51Q29udGVudENvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1lbnVfY29udGVudF9jb250YWluZXJcIjtcclxuXHJcbmNvbnN0IG1lbnVDb250ZW50SW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tZW51Q29udGVudElubmVyLmNsYXNzTmFtZSA9IFwiY29udGVudF9jb250YWluZXJfaW5uZXJcIjtcclxuXHJcbmNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tZW51SGVhZGVyLmNsYXNzTmFtZSA9IFwiY29udGVudF9oZWFkZXJcIjtcclxubWVudUhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVBY3RpdmUoKSB7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGVudENvbnRhaW5lcik7XHJcbiAgbWVudUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnRJbm5lcik7XHJcbiAgbWVudUNvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChtZW51SGVhZGVyKTtcclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9yZWdhdHRpYS1ib2xkLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL3JlZ2F0dGlhLWJvbGQtd2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9yZXN0YXVyYW50LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZ2F0dGlhXFxcIjtcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZDogIzE4MTcxYztcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xcclxcbi5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzE4MTcxYztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfbGlzdF9pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9saXN0X2l0ZW06aG92ZXIge1xcclxcbiAgY29sb3I6IG9yYW5nZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9saXN0X2l0ZW0tYWN0aXZlIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGVudCBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xcclxcbi5jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQ6IGdyYXk7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbm5lciBDb250ZW50ICovXFxyXFxuLmNvbnRlbnRfY29udGFpbmVyX2lubmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMxODE3MWM7XFxyXFxuICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudF9oZWFkZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWdhdHRpYVxcXCI7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50X21haW4ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudF9tYWluIGgzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVnYXR0aWFcXFwiO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250ZW50IGNvbnRhaW5lciBmb3IgaG9tZSAqL1xcclxcblxcclxcbi5ob21lX2NvbnRlbnRfY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNob21lX2NvbnRhaW5lcl9pbm5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXHJcXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTUwcHgsIGF1dG8pO1xcclxcbiAgZ3JpZC1nYXA6IDIwcHg7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gICAgXFxcImNvbnRlbnQxIGltYWdlMVxcXCJcXHJcXG4gICAgXFxcImNvbnRlbnQyIGltYWdlMVxcXCJcXHJcXG4gICAgXFxcImxvY2F0aW9uIGxvY2F0aW9uXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVfaGVhZGVyIHtcXHJcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZV9pbnRybyB7XFxyXFxuICBncmlkLWFyZWE6IGNvbnRlbnQxO1xcclxcbn1cXHJcXG5cXHJcXG4jaW1hZ2Vfb25lIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgZ3JpZC1hcmVhOiBpbWFnZTE7XFxyXFxuICBtaW4td2lkdGg6IDUwMHB4O1xcclxcbiAgbWluLWhlaWdodDogNzAwcHg7XFxyXFxufVxcclxcblxcclxcbiNob21lX2hvdXJzIHtcXHJcXG4gIGdyaWQtYXJlYTogY29udGVudDI7XFxyXFxufVxcclxcblxcclxcbiNob21lX2xvY2F0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogbG9jYXRpb247XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGVudCBmb3IgbWVudSAqL1xcclxcbi5tZW51X2NvbnRlbnRfY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIENvbnRlbnQgZm9yIGNvbnRhY3QgKi9cXHJcXG4uY29udGFjdF9jb250ZW50X2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb290ZXIgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMxODE3MWM7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9saXN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9saXN0IGxpIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9saXN0X2l0ZW0ge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9saXN0X2l0ZW06aG92ZXIge1xcclxcbiAgY29sb3I6IG9yYW5nZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixvSEFBNkc7QUFDL0c7O0FBSUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQSxrR0FBa0c7QUFDbEc7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUEsbUdBQW1HO0FBQ25HO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBLCtCQUErQjs7QUFFL0I7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsY0FBYztFQUNkOzs7O3VCQUlxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlEQUEwQztFQUMxQyxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLGFBQWE7QUFDZjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsa0dBQWtHO0FBQ2xHO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZ2F0dGlhXFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL3JlZ2F0dGlhLWJvbGQtd2ViZm9udC53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCIuL3JlZ2F0dGlhLWJvbGQtd2ViZm9udC53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZDogIzE4MTcxYztcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xcclxcbi5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzE4MTcxYztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfbGlzdF9pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9saXN0X2l0ZW06aG92ZXIge1xcclxcbiAgY29sb3I6IG9yYW5nZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9saXN0X2l0ZW0tYWN0aXZlIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGVudCBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xcclxcbi5jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQ6IGdyYXk7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbm5lciBDb250ZW50ICovXFxyXFxuLmNvbnRlbnRfY29udGFpbmVyX2lubmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMxODE3MWM7XFxyXFxuICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudF9oZWFkZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWdhdHRpYVxcXCI7XFxyXFxuICBmb250LXNpemU6IDUwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50X21haW4ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudF9tYWluIGgzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVnYXR0aWFcXFwiO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250ZW50IGNvbnRhaW5lciBmb3IgaG9tZSAqL1xcclxcblxcclxcbi5ob21lX2NvbnRlbnRfY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNob21lX2NvbnRhaW5lcl9pbm5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXHJcXG4gIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTUwcHgsIGF1dG8pO1xcclxcbiAgZ3JpZC1nYXA6IDIwcHg7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gICAgXFxcImNvbnRlbnQxIGltYWdlMVxcXCJcXHJcXG4gICAgXFxcImNvbnRlbnQyIGltYWdlMVxcXCJcXHJcXG4gICAgXFxcImxvY2F0aW9uIGxvY2F0aW9uXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVfaGVhZGVyIHtcXHJcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZV9pbnRybyB7XFxyXFxuICBncmlkLWFyZWE6IGNvbnRlbnQxO1xcclxcbn1cXHJcXG5cXHJcXG4jaW1hZ2Vfb25lIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3JjL3Jlc3RhdXJhbnQuanBnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBncmlkLWFyZWE6IGltYWdlMTtcXHJcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiA3MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVfaG91cnMge1xcclxcbiAgZ3JpZC1hcmVhOiBjb250ZW50MjtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVfbG9jYXRpb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBsb2NhdGlvbjtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250ZW50IGZvciBtZW51ICovXFxyXFxuLm1lbnVfY29udGVudF9jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGVudCBmb3IgY29udGFjdCAqL1xcclxcbi5jb250YWN0X2NvbnRlbnRfY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xcclxcbi5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzE4MTcxYztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogNDBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX2xpc3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX2xpc3QgbGkge1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX2xpc3RfaXRlbSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDExcHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX2xpc3RfaXRlbTpob3ZlciB7XFxyXFxuICBjb2xvcjogb3JhbmdlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9cXHUwMDAwI0phdmFTY3JpcHQvMi4gVE9QLzQuIFJlc3RhdXJhbnQgUGFnZS9SZXN0YXVyYW50X1BhZ2Uvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vXFx1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL3NyYy9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9cXHUwMDAwI0phdmFTY3JpcHQvMi4gVE9QLzQuIFJlc3RhdXJhbnQgUGFnZS9SZXN0YXVyYW50X1BhZ2Uvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vXFx1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL3NyYy9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW1wb3J0XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IGhvbWVBY3RpdmUgfSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCB7IG1lbnVBY3RpdmUgfSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCB7IGNvbnRhY3RBY3RpdmUgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcblxyXG4vLyBIZWFkZXIgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cclxuY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbm1haW5IZWFkZXIuY2xhc3NOYW1lID0gXCJoZWFkZXJcIjtcclxuY29uc3QgaGVhZGVyTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuY29uc3QgaGVhZGVyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuaGVhZGVyTGlzdC5jbGFzc05hbWUgPSBcImhlYWRlcl9saXN0XCI7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xyXG5tYWluSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlck5hdik7XHJcbmhlYWRlck5hdi5hcHBlbmRDaGlsZChoZWFkZXJMaXN0KTtcclxuXHJcbi8qIEZ1bmN0aW9uIHRvIGNyZWF0ZSBsaXN0IHdpdGggY2xhc3MsIGlkIGFuZCB0ZXh0ICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlckxpc3QobGlDbGFzcywgbGlJZCwgbGlUZXh0KSB7XHJcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbGkuY2xhc3NOYW1lID0gbGlDbGFzcztcclxuICBsaS5pZCA9IGxpSWQ7XHJcbiAgbGkudGV4dENvbnRlbnQgPSBsaVRleHQ7XHJcbiAgcmV0dXJuIGxpO1xyXG59XHJcblxyXG4vKiBGdW5jdGlvbiB0byBhZGQgbGlzdCB0byBoZWFkZXIgb3IgZm9vdGVyIHVsICovXHJcbmZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKHBhcmVudCwgY2hpbGRyZW4pIHtcclxuICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgSGVhZGVyTGlzdEl0ZW1zID0gW1xyXG4gIGNyZWF0ZUhlYWRlckxpc3QoXCJoZWFkZXJfbGlzdF9pdGVtXCIsIFwiaG9tZVwiLCBcIkhvbWVcIiksXHJcbiAgY3JlYXRlSGVhZGVyTGlzdChcImhlYWRlcl9saXN0X2l0ZW1cIiwgXCJtZW51XCIsIFwiTWVudVwiKSxcclxuICBjcmVhdGVIZWFkZXJMaXN0KFwiaGVhZGVyX2xpc3RfaXRlbVwiLCBcImNvbnRhY3RcIiwgXCJDb250YWN0XCIpLFxyXG5dO1xyXG5cclxuYXBwZW5kQ2hpbGRyZW4oaGVhZGVyTGlzdCwgSGVhZGVyTGlzdEl0ZW1zKTtcclxuXHJcbi8qIEZ1bmN0aW9uIHN3aXRjaGluZyBoZWFkZXIgbGlzdCB0YWIgKi9cclxuXHJcbmNvbnN0IGhlYWRlckJ0biA9IGhlYWRlck5hdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaGVhZGVyX2xpc3RfaXRlbVwiKTtcclxuY29uc29sZS5sb2coaGVhZGVyQnRuKTtcclxuXHJcbi8vIExvb3AgdGhyb3VnaCB0aGUgYnV0dG9ucyBhbmQgYWRkIHRoZSBhY3RpdmUgY2xhc3MgdG8gdGhlIGN1cnJlbnQvY2xpY2tlZCBidXR0b25cclxuZm9yICh2YXIgaSA9IDA7IGkgPCBoZWFkZXJCdG4ubGVuZ3RoOyBpKyspIHtcclxuICBoZWFkZXJCdG5baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaGVhZGVyX2xpc3RfaXRlbS1hY3RpdmVcIik7XHJcblxyXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gYWN0aXZlIGNsYXNzLCByZXBsYWNlIFwiaGVhZGVyX2xpc3RfaXRlbS1hY3RpdmVcIiB0byBcIiBcIiAobm90aGluZylcclxuICAgIGlmIChjdXJyZW50Lmxlbmd0aCA+IDApIHtcclxuICAgICAgY3VycmVudFswXS5jbGFzc05hbWUgPSBjdXJyZW50WzBdLmNsYXNzTmFtZS5yZXBsYWNlKFwiaGVhZGVyX2xpc3RfaXRlbS1hY3RpdmVcIiwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHRoZSBhY3RpdmUgY2xhc3MgdG8gdGhlIGN1cnJlbnQvY2xpY2tlZCBidXR0b25cclxuICAgIHRoaXMuY2xhc3NOYW1lICs9IFwiIGhlYWRlcl9saXN0X2l0ZW0tYWN0aXZlXCI7XHJcblxyXG4gICAgLy8gamlrYSBob21lIGJ1dHRvbiBhY3RpdmUsIG1ha2EgYWRkIGhvbWVfY29udGVudF9jb250YWluZXItYWN0aXZlXHJcbiAgICBpZiAodGhpcy5pZCA9PSBcImhvbWVcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImhvbWUgc3VjY2VzZnVseSBjYWxsZWRcIik7XHJcbiAgICAgIGhvbWVDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIG1lbnVDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgY29udGFjdENvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAvL2hvbWVBY3RpdmUoKTtcclxuICAgICAgLy8gcGFuZ2dpbCBmdW5jdGlvbiBob21lXHJcbiAgICAgIC8vaG9tZUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxva1wiO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlkID09IFwibWVudVwiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWVudSBzdWNjZXNmdWx5IGNhbGxlZFwiKTtcclxuICAgICAgaG9tZUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBtZW51Q29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBjb250YWN0Q29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIC8vbWVudUFjdGl2ZSgpO1xyXG4gICAgICAvLyBwYW5nZ2lsIGZ1bmN0aW9uIG1lbnVcclxuICAgICAgLy9tZW51Q29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9rXCI7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaWQgPT0gXCJjb250YWN0XCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJjb250YWN0IHN1Y2Nlc2Z1bHkgY2FsbGVkXCIpO1xyXG4gICAgICBob21lQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIG1lbnVDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgY29udGFjdENvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICAgIC8vY29udGFjdEFjdGl2ZSgpO1xyXG4gICAgICAvLyBwYW5nZ2lsIGZ1bmN0aW9uIGNvbnRhY3RcclxuICAgICAgLy9jb250YWN0Q29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9rXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGVzdFxyXG4gICAgLy9jb25zb2xlLmxvZyhjdXJyZW50Lmxlbmd0aCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuaWQpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhob21lQ29udGVudCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIENvbnRlbnQgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnRlbnQuY2xhc3NOYW1lID0gXCJjb250ZW50XCI7XHJcbmNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblxyXG4vLyBwYW5nZ2lsIGZ1bmdzaSBpbmkgZHVsdVxyXG5ob21lQWN0aXZlKCk7XHJcbm1lbnVBY3RpdmUoKTtcclxuY29udGFjdEFjdGl2ZSgpO1xyXG5cclxuLy8gc2V0ZWxhaCBmdW5nc2kgZGlwYW5nZ2lsIG1ha2EgbWFzaW5nLW1hc2luZyBlbGVtZW4ga29udGVuIGFrYW4gbXVuY3VsXHJcbmNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX2NvbnRlbnRfY29udGFpbmVyXCIpO1xyXG5jb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudV9jb250ZW50X2NvbnRhaW5lclwiKTtcclxuY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RfY29udGVudF9jb250YWluZXJcIik7XHJcblxyXG4vLyBiYXJ1IGtpdGEgdGV0YXBrYW4gbWF1IGRpbXVuY3Vsa2FuIGFwYSB0aWRha1xyXG5ob21lQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5tZW51Q29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbmNvbnRhY3RDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbi8vIEZvb3RlciBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG5jb25zdCBtYWluRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxubWFpbkZvb3Rlci5jbGFzc05hbWUgPSBcImZvb3RlclwiO1xyXG5cclxuY29uc3QgZm9vdGVyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuZm9vdGVyTGlzdC5jbGFzc05hbWUgPSBcImZvb3Rlcl9saXN0XCI7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Gb290ZXIpO1xyXG5tYWluRm9vdGVyLmFwcGVuZENoaWxkKGZvb3Rlckxpc3QpO1xyXG5cclxuLyogQ3JlYXRlIGxpc3QgY29udGFpbmluZyBhbmNob3Iod2l0aCBjbGFzcywgaHJlZiBhbmQgdGV4dCkgKi9cclxuZnVuY3Rpb24gY3JlYXRlQW5jaG9ySW5zaWRlTGlzdChhQ2xhc3MsIGFIcmVmLCBhVGV4dCkge1xyXG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGFuY2hvci5jbGFzc05hbWUgPSBhQ2xhc3M7XHJcbiAgYW5jaG9yLmhyZWYgPSBhSHJlZjtcclxuICBhbmNob3IudGV4dENvbnRlbnQgPSBhVGV4dDtcclxuICBsaS5hcHBlbmRDaGlsZChhbmNob3IpO1xyXG4gIHJldHVybiBsaTtcclxufVxyXG5cclxuY29uc3QgZm9vdGVyTGlzdEl0ZW1zID0gW1xyXG4gIGNyZWF0ZUFuY2hvckluc2lkZUxpc3QoXHJcbiAgICBcImZvb3Rlcl9saXN0X2l0ZW1cIixcclxuICAgIFwiaHR0cHM6Ly9iZWZvbnRzLmNvbS9yZWdhdHRpYS10eXBlZmFjZS5odG1sXCIsXHJcbiAgICBcIlJlZ2F0dGlhIFR5cGVmYWNlIGZvbnQgZGVzaWduZWQgYnkgQnJ1bm8gU8OhZXogTMOzcGV6IC0gYmVmb250cy5jb21cIlxyXG4gICksXHJcbiAgY3JlYXRlQW5jaG9ySW5zaWRlTGlzdChcclxuICAgIFwiZm9vdGVyX2xpc3RfaXRlbVwiLFxyXG4gICAgXCJodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vc3BlY2ltZW4vUm9ib3RvXCIsXHJcbiAgICBcIlJvYm90byBmb250IGRlc2lnbmVkIGJ5IENocmlzdGlhbiBSb2JlcnRzb24gLSBmb250cy5nb29nbGUuY29tXCJcclxuICApLFxyXG4gIGNyZWF0ZUFuY2hvckluc2lkZUxpc3QoXHJcbiAgICBcImZvb3Rlcl9saXN0X2l0ZW1cIixcclxuICAgIFwiaHR0cHM6Ly9kcmliYmJsZS5jb20vc2hvdHMvMTczMTk4MzAtU3RhZHNoYXZlbi1CcmV3ZXJ5LVJlc3RhdXJhbnQtcGFnZVwiLFxyXG4gICAgXCJEZXNpZ24gaW5zcGlyZWQgYnkgR2lsIC0gZHJpYmJibGUuY29tXCJcclxuICApLFxyXG5dO1xyXG5cclxuLyogQ2FsbCBhcHBlbmRDaGlsZHJlbiBhYm92ZSAqL1xyXG5hcHBlbmRDaGlsZHJlbihmb290ZXJMaXN0LCBmb290ZXJMaXN0SXRlbXMpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=