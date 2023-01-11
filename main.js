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

// Header
const menuHeader = document.createElement("div");
menuHeader.className = "content_header";
menuHeader.textContent = "Menu";

// Submenu Container (Container for each food types)
const subMenuFoods = document.createElement("div");
subMenuFoods.className = "menu_content_submenu_container";
subMenuFoods.id = "submenu_foods";
const subMenuDrinks = document.createElement("div");
subMenuDrinks.className = "menu_content_submenu_container";
subMenuDrinks.id = "submenu_drinks";

// Submenu Header
const subMenuFoodsHeader = document.createElement("h3");
subMenuFoodsHeader.textContent = "Foods";
subMenuFoods.appendChild(subMenuFoodsHeader);
const subMenuDrinksHeader = document.createElement("h3");
subMenuDrinksHeader.textContent = "Drinks";
subMenuDrinks.appendChild(subMenuDrinksHeader);

// Foods

// Drinks

function menuActive() {
  content.appendChild(menuContentContainer);
  menuContentContainer.appendChild(menuContentInner);
  menuContentInner.appendChild(menuHeader);
  // Foods
  menuContentInner.appendChild(subMenuFoods);

  // Drinks
  menuContentInner.appendChild(subMenuDrinks);
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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: \"Regattia\";\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: 16px;\r\n  color: white;\r\n  background: #18171c;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: relative;\r\n}\r\n\r\n/* Header ______________________________________________________________________________________ */\r\n.header {\r\n  background: #18171c;\r\n  width: 100%;\r\n  height: 50px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.header_list_item {\r\n  display: inline;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-weight: 400;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.header_list_item:hover {\r\n  color: orange;\r\n  cursor: pointer;\r\n}\r\n\r\n.header_list_item-active {\r\n  border-bottom: 1px solid white;\r\n}\r\n\r\n/* Content ______________________________________________________________________________________ */\r\n.content {\r\n  background: gray;\r\n  padding: 10px;\r\n}\r\n\r\n/* Inner Content container */\r\n.content_container_inner {\r\n  background: #18171c;\r\n  min-width: 100%;\r\n  min-height: 500px;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  display: flex; /* Important */\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.content_header {\r\n  font-family: \"Regattia\";\r\n  font-size: 50px;\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n.content_main {\r\n  text-align: center;\r\n  width: 400px;\r\n}\r\n\r\n.content_main h3 {\r\n  font-family: \"Regattia\";\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n/* Content container for home ______________________________________________________________________________________ */\r\n\r\n.home_content_container {\r\n  display: none;\r\n}\r\n\r\n#home_container_inner {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: auto auto;\r\n  grid-auto-rows: minmax(150px, auto);\r\n  grid-gap: 20px;\r\n  grid-template-areas:\r\n    \"header header\"\r\n    \"content1 image1\"\r\n    \"content2 image1\"\r\n    \"location location\";\r\n}\r\n\r\n#home_header {\r\n  grid-area: header;\r\n}\r\n\r\n#home_intro {\r\n  grid-area: content1;\r\n}\r\n\r\n#image_one {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-size: cover;\r\n  grid-area: image1;\r\n  min-width: 500px;\r\n  min-height: 700px;\r\n}\r\n\r\n#home_hours {\r\n  grid-area: content2;\r\n}\r\n\r\n#home_location {\r\n  grid-area: location;\r\n  width: auto;\r\n}\r\n\r\n/* Content container Content for menu ______________________________________________________________________________________ */\r\n.menu_content_container {\r\n  display: none;\r\n}\r\n\r\n.menu_content_submenu_container {\r\n  background: blue;\r\n  width: 400px;\r\n  min-height: 400px;\r\n  margin: 10px;\r\n}\r\n\r\n.menu_content_submenu_container h3 {\r\n  font-family: \"Regattia\";\r\n  font-size: 30px;\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n/* Content container Content for contact ______________________________________________________________________________________ */\r\n.contact_content_container {\r\n  display: none;\r\n}\r\n\r\n/* Footer ______________________________________________________________________________________ */\r\n.footer {\r\n  background: #18171c;\r\n  width: 100%;\r\n  height: 50px;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  position: relative;\r\n  bottom: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.footer_list {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n}\r\n\r\n.footer_list li {\r\n  display: inline;\r\n}\r\n\r\n.footer_list_item {\r\n  text-decoration: none;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: 11px;\r\n  font-weight: 500;\r\n  color: white;\r\n}\r\n\r\n.footer_list_item:hover {\r\n  color: orange;\r\n  cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,oHAA6G;AAC/G;;AAIA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;EACjC,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;;AAEA,kGAAkG;AAClG;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iCAAiC;EACjC,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,8BAA8B;AAChC;;AAEA,mGAAmG;AACnG;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA,4BAA4B;AAC5B;EACE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,aAAa,EAAE,cAAc;EAC7B,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;AACd;;AAEA,sHAAsH;;AAEtH;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gCAAgC;EAChC,mCAAmC;EACnC,cAAc;EACd;;;;uBAIqB;AACvB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,yDAA0C;EAC1C,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,WAAW;AACb;;AAEA,8HAA8H;AAC9H;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,kBAAkB;EAClB,YAAY;AACd;;AAEA,iIAAiI;AACjI;EACE,aAAa;AACf;;AAEA,kGAAkG;AAClG;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,iCAAiC;EACjC,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,eAAe;AACjB","sourcesContent":["@font-face {\r\n  font-family: \"Regattia\";\r\n  src: url(\"./regattia-bold-webfont.woff2\") format(\"woff2\"), url(\"./regattia-bold-webfont.woff\") format(\"woff\");\r\n}\r\n\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: 16px;\r\n  color: white;\r\n  background: #18171c;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: relative;\r\n}\r\n\r\n/* Header ______________________________________________________________________________________ */\r\n.header {\r\n  background: #18171c;\r\n  width: 100%;\r\n  height: 50px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.header_list_item {\r\n  display: inline;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-weight: 400;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.header_list_item:hover {\r\n  color: orange;\r\n  cursor: pointer;\r\n}\r\n\r\n.header_list_item-active {\r\n  border-bottom: 1px solid white;\r\n}\r\n\r\n/* Content ______________________________________________________________________________________ */\r\n.content {\r\n  background: gray;\r\n  padding: 10px;\r\n}\r\n\r\n/* Inner Content container */\r\n.content_container_inner {\r\n  background: #18171c;\r\n  min-width: 100%;\r\n  min-height: 500px;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  display: flex; /* Important */\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.content_header {\r\n  font-family: \"Regattia\";\r\n  font-size: 50px;\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n.content_main {\r\n  text-align: center;\r\n  width: 400px;\r\n}\r\n\r\n.content_main h3 {\r\n  font-family: \"Regattia\";\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n/* Content container for home ______________________________________________________________________________________ */\r\n\r\n.home_content_container {\r\n  display: none;\r\n}\r\n\r\n#home_container_inner {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: auto auto;\r\n  grid-auto-rows: minmax(150px, auto);\r\n  grid-gap: 20px;\r\n  grid-template-areas:\r\n    \"header header\"\r\n    \"content1 image1\"\r\n    \"content2 image1\"\r\n    \"location location\";\r\n}\r\n\r\n#home_header {\r\n  grid-area: header;\r\n}\r\n\r\n#home_intro {\r\n  grid-area: content1;\r\n}\r\n\r\n#image_one {\r\n  background-image: url(/src/restaurant.jpg);\r\n  background-size: cover;\r\n  grid-area: image1;\r\n  min-width: 500px;\r\n  min-height: 700px;\r\n}\r\n\r\n#home_hours {\r\n  grid-area: content2;\r\n}\r\n\r\n#home_location {\r\n  grid-area: location;\r\n  width: auto;\r\n}\r\n\r\n/* Content container Content for menu ______________________________________________________________________________________ */\r\n.menu_content_container {\r\n  display: none;\r\n}\r\n\r\n.menu_content_submenu_container {\r\n  background: blue;\r\n  width: 400px;\r\n  min-height: 400px;\r\n  margin: 10px;\r\n}\r\n\r\n.menu_content_submenu_container h3 {\r\n  font-family: \"Regattia\";\r\n  font-size: 30px;\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n/* Content container Content for contact ______________________________________________________________________________________ */\r\n.contact_content_container {\r\n  display: none;\r\n}\r\n\r\n/* Footer ______________________________________________________________________________________ */\r\n.footer {\r\n  background: #18171c;\r\n  width: 100%;\r\n  height: 50px;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  position: relative;\r\n  bottom: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.footer_list {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n}\r\n\r\n.footer_list li {\r\n  display: inline;\r\n}\r\n\r\n.footer_list_item {\r\n  text-decoration: none;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: 11px;\r\n  font-weight: 500;\r\n  color: white;\r\n}\r\n\r\n.footer_list_item:hover {\r\n  color: orange;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDZmE7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFVO0FBQ1YsaURBQVU7QUFDVix1REFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi4vLi4vLi4vLi4vXHUwMDAwI0phdmFTY3JpcHQvMi4gVE9QLzQuIFJlc3RhdXJhbnQgUGFnZS9SZXN0YXVyYW50X1BhZ2Uvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi4vLi4vLi4vLi4vXHUwMDAwI0phdmFTY3JpcHQvMi4gVE9QLzQuIFJlc3RhdXJhbnQgUGFnZS9SZXN0YXVyYW50X1BhZ2Uvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi4vLi4vLi4vLi4vXHUwMDAwI0phdmFTY3JpcHQvMi4gVE9QLzQuIFJlc3RhdXJhbnQgUGFnZS9SZXN0YXVyYW50X1BhZ2Uvc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL3NyYy9zdHlsZS5jc3M/YTY1ZiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb250YWN0Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnRhY3RDb250ZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY29udGFjdF9jb250ZW50X2NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgY29udGFjdENvbnRlbnRJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnRhY3RDb250ZW50SW5uZXIuY2xhc3NOYW1lID0gXCJjb250ZW50X2NvbnRhaW5lcl9pbm5lclwiO1xyXG5cclxuY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnRhY3RIZWFkZXIuY2xhc3NOYW1lID0gXCJjb250ZW50X2hlYWRlclwiO1xyXG5jb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udGFjdEFjdGl2ZSgpIHtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50Q29udGFpbmVyKTtcclxuICBjb250YWN0Q29udGVudENvbnRhaW5lci5hcHBlbmQoY29udGFjdENvbnRlbnRJbm5lcik7XHJcbiAgY29udGFjdENvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcclxufVxyXG4iLCJjb25zdCBob21lQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmhvbWVDb250ZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaG9tZV9jb250ZW50X2NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgaG9tZUNvbnRlbnRJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmhvbWVDb250ZW50SW5uZXIuY2xhc3NOYW1lID0gXCJjb250ZW50X2NvbnRhaW5lcl9pbm5lclwiO1xyXG5ob21lQ29udGVudElubmVyLmlkID0gXCJob21lX2NvbnRhaW5lcl9pbm5lclwiO1xyXG5cclxuLy8gSGVhZGVyXHJcbmNvbnN0IGhvbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5ob21lSGVhZGVyLmNsYXNzTmFtZSA9IFwiY29udGVudF9oZWFkZXJcIjtcclxuaG9tZUhlYWRlci5pZCA9IFwiaG9tZV9oZWFkZXJcIjtcclxuaG9tZUhlYWRlci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndoaXRlLXNwYWNlOiBwcmU7XCIpO1xyXG5ob21lSGVhZGVyLnRleHRDb250ZW50ID0gXCJWaXNpdCBPdXIgXFxyXFxuXCI7XHJcbmhvbWVIZWFkZXIudGV4dENvbnRlbnQgKz0gXCJHb29kIFJlc3RhdXJhbnQgXFxyXFxuXCI7XHJcbmhvbWVIZWFkZXIudGV4dENvbnRlbnQgKz0gXCJGb29kcyBhbmQgRHJpbmtzLlwiO1xyXG5cclxuLy8gSW50cm9cclxuY29uc3QgaG9tZUludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaG9tZUludHJvLmNsYXNzTmFtZSA9IFwiY29udGVudF9tYWluXCI7XHJcbmhvbWVJbnRyby5pZCA9IFwiaG9tZV9pbnRyb1wiO1xyXG5jb25zdCBob21lSW50cm9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbmhvbWVJbnRyb0hlYWRlci50ZXh0Q29udGVudCA9IFwiSW50cm9kdWN0aW9uXCI7XHJcbmhvbWVJbnRyby5hcHBlbmRDaGlsZChob21lSW50cm9IZWFkZXIpO1xyXG5jb25zdCBob21lSW50cm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbmhvbWVJbnRyb1RleHQudGV4dENvbnRlbnQgPVxyXG4gIFwiR29vZCBSZXN0YXVyYW50IGhhcyB0aGUgYmVzdCBmcmllZCByaWNlISBUaGUgYW1iaWFuY2UgYW5kIGN1c3RvbWVyIHNlcnZpY2UgbWFrZSB5b3UgZmVlbCBsaWtlIHlvdSBhcmUgc2l0dGluZyBpbiB0aGUgbWlkZGxlIG9mIGEgcnVyYWwgcGFkZHkgZmllbGQsIGVhdGluZyBsaWtlIGEgbG9jYWwhIFRoaXMgaXMgdGhlIHJpZ2h0IHBsYWNlIGFzIGEgcmVsaWV2ZXIgb2YgdGhlIHRpcmVkbmVzcyBvZiB1cmJhbiBsaWZlXCI7XHJcbmhvbWVJbnRyby5hcHBlbmRDaGlsZChob21lSW50cm9UZXh0KTtcclxuXHJcbi8vIEhvdXJzXHJcbmNvbnN0IGhvbWVIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmhvbWVIb3Vycy5jbGFzc05hbWUgPSBcImNvbnRlbnRfbWFpblwiO1xyXG5ob21lSG91cnMuaWQgPSBcImhvbWVfaG91cnNcIjtcclxuY29uc3QgaG9tZUhvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG5ob21lSG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XHJcbmhvbWVIb3Vycy5hcHBlbmRDaGlsZChob21lSG91cnNIZWFkZXIpO1xyXG5jb25zdCBob21lSG91cnNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbmhvbWVIb3Vyc1RleHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aGl0ZS1zcGFjZTogcHJlO1wiKTtcclxuaG9tZUhvdXJzVGV4dC50ZXh0Q29udGVudCA9IFwiU3VuZGF5OiA4YW0gLSA4cG0gXFxyXFxuXCI7XHJcbmhvbWVIb3Vyc1RleHQudGV4dENvbnRlbnQgKz0gXCJNb25kYXk6IDZhbSAtIDZwbSBcXHJcXG5cIjtcclxuaG9tZUhvdXJzVGV4dC50ZXh0Q29udGVudCArPSBcIlR1ZXNkYXk6IDZhbSAtIDZwbSBcXHJcXG5cIjtcclxuaG9tZUhvdXJzVGV4dC50ZXh0Q29udGVudCArPSBcIldlZG5lc2RheTogNmFtIC0gNnBtIFxcclxcblwiO1xyXG5ob21lSG91cnNUZXh0LnRleHRDb250ZW50ICs9IFwiVGh1cnNkYXk6IDZhbSAtIDEwcG0gXFxyXFxuXCI7XHJcbmhvbWVIb3Vyc1RleHQudGV4dENvbnRlbnQgKz0gXCJGcmlkYXk6IDZhbSAtIDEwcG0gXFxyXFxuXCI7XHJcbmhvbWVIb3Vyc1RleHQudGV4dENvbnRlbnQgKz0gXCJTYXR1cmRheTogOGFtIC0gMTBwbVwiO1xyXG5ob21lSG91cnMuYXBwZW5kQ2hpbGQoaG9tZUhvdXJzVGV4dCk7XHJcblxyXG4vLyBsb2NhdGlvblxyXG5jb25zdCBob21lTG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5ob21lTG9jYXRpb24uY2xhc3NOYW1lID0gXCJjb250ZW50X21haW5cIjtcclxuaG9tZUxvY2F0aW9uLmlkID0gXCJob21lX2xvY2F0aW9uXCI7XHJcbmNvbnN0IGhvbWVMb2NhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuaG9tZUxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xyXG5ob21lTG9jYXRpb24uYXBwZW5kQ2hpbGQoaG9tZUxvY2F0aW9uSGVhZGVyKTtcclxuY29uc3QgaG9tZUxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5ob21lTG9jYXRpb25UZXh0LnRleHRDb250ZW50ID0gXCIxMTExIFVudGl0bGVkIFN0cmVldCwgT2x5bXB1cyBNb25zLCBNYXJzXCI7XHJcbmhvbWVMb2NhdGlvbi5hcHBlbmRDaGlsZChob21lTG9jYXRpb25UZXh0KTtcclxuXHJcbi8vIGltYWdlXHJcbmNvbnN0IGltYWdlT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaW1hZ2VPbmUuaWQgPSBcImltYWdlX29uZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVBY3RpdmUoKSB7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChob21lQ29udGVudENvbnRhaW5lcik7XHJcbiAgaG9tZUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnRJbm5lcik7XHJcbiAgaG9tZUNvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChob21lSGVhZGVyKTtcclxuICBob21lQ29udGVudElubmVyLmFwcGVuZENoaWxkKGhvbWVJbnRybyk7XHJcbiAgaG9tZUNvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChob21lSG91cnMpO1xyXG4gIGhvbWVDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQoaW1hZ2VPbmUpO1xyXG4gIGhvbWVDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQoaG9tZUxvY2F0aW9uKTtcclxufVxyXG5cclxuLy8uLi4ga2l0YSBtZW5nYW1iaWwgZWxlbWVudCBkZW5nYW4gaWQgXCJjb250ZW50XCIsIGthcmVuYSBlbGVtZW50IGRlbmdhbiBpZCBcImNvbnRlbnRcIiBqdWdhIG1lbWlsaWtpIG5hbWEgY2xhc3MgXCJjb250ZW50XCJcclxuLy8uLi4gZGFuIGppa2Ega2l0YSBhdHVyIHN0eWxlIGNzcyBoYW55YSB1bnR1ayBjbGFzc255YSB5YWl0dSBcIi5jb250ZW50XCIgbWFrYSB0ZXRhcCBha2FuIGJla2VyamFcclxuLy8uLi4ga2FsbyBpbmdpbiBidWt0aSBjb2JhIHNhamEgY29uc29sZS5sb2dcclxuLy8uLi4gamFkaSBrZWRlcGFubnlhIGJpc2Ega2l0YSBidWF0IGVsZW1lbnQgeWFuZyBtZW1pbGlraSBjbGFzcyBkYW4gaWRcclxuXHJcbi8vIGtvbnNlcCBidXR0b24gYWN0aXZlIGRhbiB0aWRhayBhY3RpdmVcclxuLy8gc2FhdCBidXR0b24gdW50dWsgaG9tZSBha3RpZiwgbWFrYSBidXR0b24gdW50dWsgbWVudSBkYW4gY29udGFjdCB0aWRhayBha3RpZlxyXG4vLy4uLmJlZ2l0dSBwdWxhIHVudHVrIGJ1dHRvbiBtZW51IGRhbiBjb250YWN0XHJcbi8vLi4uc2VoaW5nZ2EgbmFudGkgbXVuZ2tpbiBwYWthaSBsb29wIHVudHVrIGFkZCBhY3RpdmUgYXRhdSByZW1vdmUgYWN0aXZlXHJcblxyXG4vLyBraXRhIGJ1YXQga29kZSBhZ2FyIG1hc2luZy1tYXNpbmcgYnV0dG9uIGJla2VyamEgc2VtZXN0aW55YSBkdWx1XHJcbi8vLi4ua2VtdWRpYW4ga2l0YSBpc2kga29udGVubnlhIG9rZT9cclxuXHJcbi8vIGtpdGEgZWRpdCBpc2kgZGFyaSBob21lIHBhZ2UgZGlzaW5pXHJcbi8vLi4ubGFsdSBpc2kgZGFyaSBob21lIHBhZ2UgdGVyc2VidXQga2l0YSBqYWRpa2FuIGZ1bmN0aW9uXHJcbi8vLi4ua2VtdWRpYW4gZnVuY3Rpb24gdGVyc2VidXQga2l0YSBleHBvcnQgZGFuIGRpaW1wb3J0IGRpIG1haW4uanNcclxuLy8uLi5kaSBkYWxhbSBtYWluLmpzIGtpdGEgYnVhdCBidXR0b24gdW50dWsgbWVtYW5nZ2lsIGZ1bmN0aW9uIGRpc2luaVxyXG4iLCJjb25zdCBtZW51Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm1lbnVDb250ZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwibWVudV9jb250ZW50X2NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgbWVudUNvbnRlbnRJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm1lbnVDb250ZW50SW5uZXIuY2xhc3NOYW1lID0gXCJjb250ZW50X2NvbnRhaW5lcl9pbm5lclwiO1xyXG5cclxuLy8gSGVhZGVyXHJcbmNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tZW51SGVhZGVyLmNsYXNzTmFtZSA9IFwiY29udGVudF9oZWFkZXJcIjtcclxubWVudUhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG5cclxuLy8gU3VibWVudSBDb250YWluZXIgKENvbnRhaW5lciBmb3IgZWFjaCBmb29kIHR5cGVzKVxyXG5jb25zdCBzdWJNZW51Rm9vZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5zdWJNZW51Rm9vZHMuY2xhc3NOYW1lID0gXCJtZW51X2NvbnRlbnRfc3VibWVudV9jb250YWluZXJcIjtcclxuc3ViTWVudUZvb2RzLmlkID0gXCJzdWJtZW51X2Zvb2RzXCI7XHJcbmNvbnN0IHN1Yk1lbnVEcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5zdWJNZW51RHJpbmtzLmNsYXNzTmFtZSA9IFwibWVudV9jb250ZW50X3N1Ym1lbnVfY29udGFpbmVyXCI7XHJcbnN1Yk1lbnVEcmlua3MuaWQgPSBcInN1Ym1lbnVfZHJpbmtzXCI7XHJcblxyXG4vLyBTdWJtZW51IEhlYWRlclxyXG5jb25zdCBzdWJNZW51Rm9vZHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbnN1Yk1lbnVGb29kc0hlYWRlci50ZXh0Q29udGVudCA9IFwiRm9vZHNcIjtcclxuc3ViTWVudUZvb2RzLmFwcGVuZENoaWxkKHN1Yk1lbnVGb29kc0hlYWRlcik7XHJcbmNvbnN0IHN1Yk1lbnVEcmlua3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbnN1Yk1lbnVEcmlua3NIZWFkZXIudGV4dENvbnRlbnQgPSBcIkRyaW5rc1wiO1xyXG5zdWJNZW51RHJpbmtzLmFwcGVuZENoaWxkKHN1Yk1lbnVEcmlua3NIZWFkZXIpO1xyXG5cclxuLy8gRm9vZHNcclxuXHJcbi8vIERyaW5rc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVBY3RpdmUoKSB7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGVudENvbnRhaW5lcik7XHJcbiAgbWVudUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnRJbm5lcik7XHJcbiAgbWVudUNvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChtZW51SGVhZGVyKTtcclxuICAvLyBGb29kc1xyXG4gIG1lbnVDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQoc3ViTWVudUZvb2RzKTtcclxuXHJcbiAgLy8gRHJpbmtzXHJcbiAgbWVudUNvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChzdWJNZW51RHJpbmtzKTtcclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9yZWdhdHRpYS1ib2xkLXdlYmZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL3JlZ2F0dGlhLWJvbGQtd2ViZm9udC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiL3NyYy9yZXN0YXVyYW50LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZ2F0dGlhXFxcIjtcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZDogIzE4MTcxYztcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xcclxcbi5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzE4MTcxYztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfbGlzdF9pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9saXN0X2l0ZW06aG92ZXIge1xcclxcbiAgY29sb3I6IG9yYW5nZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9saXN0X2l0ZW0tYWN0aXZlIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGVudCBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xcclxcbi5jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQ6IGdyYXk7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbm5lciBDb250ZW50IGNvbnRhaW5lciAqL1xcclxcbi5jb250ZW50X2NvbnRhaW5lcl9pbm5lciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMTgxNzFjO1xcclxcbiAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogNTAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7IC8qIEltcG9ydGFudCAqL1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50X2hlYWRlciB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZ2F0dGlhXFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRfbWFpbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50X21haW4gaDMge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWdhdHRpYVxcXCI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIENvbnRlbnQgY29udGFpbmVyIGZvciBob21lIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovXFxyXFxuXFxyXFxuLmhvbWVfY29udGVudF9jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVfY29udGFpbmVyX2lubmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxNTBweCwgYXV0byk7XFxyXFxuICBncmlkLWdhcDogMjBweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgICBcXFwiY29udGVudDEgaW1hZ2UxXFxcIlxcclxcbiAgICBcXFwiY29udGVudDIgaW1hZ2UxXFxcIlxcclxcbiAgICBcXFwibG9jYXRpb24gbG9jYXRpb25cXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZV9oZWFkZXIge1xcclxcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxufVxcclxcblxcclxcbiNob21lX2ludHJvIHtcXHJcXG4gIGdyaWQtYXJlYTogY29udGVudDE7XFxyXFxufVxcclxcblxcclxcbiNpbWFnZV9vbmUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBncmlkLWFyZWE6IGltYWdlMTtcXHJcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiA3MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVfaG91cnMge1xcclxcbiAgZ3JpZC1hcmVhOiBjb250ZW50MjtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVfbG9jYXRpb24ge1xcclxcbiAgZ3JpZC1hcmVhOiBsb2NhdGlvbjtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250ZW50IGNvbnRhaW5lciBDb250ZW50IGZvciBtZW51IF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovXFxyXFxuLm1lbnVfY29udGVudF9jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfY29udGVudF9zdWJtZW51X2NvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kOiBibHVlO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgbWluLWhlaWdodDogNDAwcHg7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2NvbnRlbnRfc3VibWVudV9jb250YWluZXIgaDMge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWdhdHRpYVxcXCI7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIENvbnRlbnQgY29udGFpbmVyIENvbnRlbnQgZm9yIGNvbnRhY3QgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cXHJcXG4uY29udGFjdF9jb250ZW50X2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb290ZXIgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMxODE3MWM7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9saXN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9saXN0IGxpIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9saXN0X2l0ZW0ge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9saXN0X2l0ZW06aG92ZXIge1xcclxcbiAgY29sb3I6IG9yYW5nZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixvSEFBNkc7QUFDL0c7O0FBSUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQSxrR0FBa0c7QUFDbEc7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUEsbUdBQW1HO0FBQ25HO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWEsRUFBRSxjQUFjO0VBQzdCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUEsc0hBQXNIOztBQUV0SDtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLG1DQUFtQztFQUNuQyxjQUFjO0VBQ2Q7Ozs7dUJBSXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseURBQTBDO0VBQzFDLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUEsOEhBQThIO0FBQzlIO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBLGlJQUFpSTtBQUNqSTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxrR0FBa0c7QUFDbEc7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVnYXR0aWFcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vcmVnYXR0aWEtYm9sZC13ZWJmb250LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4vcmVnYXR0aWEtYm9sZC13ZWJmb250LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMTgxNzFjO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovXFxyXFxuLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMTgxNzFjO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9saXN0X2l0ZW0ge1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX2xpc3RfaXRlbTpob3ZlciB7XFxyXFxuICBjb2xvcjogb3JhbmdlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX2xpc3RfaXRlbS1hY3RpdmUge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250ZW50IF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgYmFja2dyb3VuZDogZ3JheTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIElubmVyIENvbnRlbnQgY29udGFpbmVyICovXFxyXFxuLmNvbnRlbnRfY29udGFpbmVyX2lubmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMxODE3MWM7XFxyXFxuICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDsgLyogSW1wb3J0YW50ICovXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRfaGVhZGVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVnYXR0aWFcXFwiO1xcclxcbiAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudF9tYWluIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRfbWFpbiBoMyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZ2F0dGlhXFxcIjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGVudCBjb250YWluZXIgZm9yIGhvbWUgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cXHJcXG5cXHJcXG4uaG9tZV9jb250ZW50X2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZV9jb250YWluZXJfaW5uZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICBncmlkLWF1dG8tcm93czogbWlubWF4KDE1MHB4LCBhdXRvKTtcXHJcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxyXFxuICAgIFxcXCJjb250ZW50MSBpbWFnZTFcXFwiXFxyXFxuICAgIFxcXCJjb250ZW50MiBpbWFnZTFcXFwiXFxyXFxuICAgIFxcXCJsb2NhdGlvbiBsb2NhdGlvblxcXCI7XFxyXFxufVxcclxcblxcclxcbiNob21lX2hlYWRlciB7XFxyXFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVfaW50cm8ge1xcclxcbiAgZ3JpZC1hcmVhOiBjb250ZW50MTtcXHJcXG59XFxyXFxuXFxyXFxuI2ltYWdlX29uZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9yZXN0YXVyYW50LmpwZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgZ3JpZC1hcmVhOiBpbWFnZTE7XFxyXFxuICBtaW4td2lkdGg6IDUwMHB4O1xcclxcbiAgbWluLWhlaWdodDogNzAwcHg7XFxyXFxufVxcclxcblxcclxcbiNob21lX2hvdXJzIHtcXHJcXG4gIGdyaWQtYXJlYTogY29udGVudDI7XFxyXFxufVxcclxcblxcclxcbiNob21lX2xvY2F0aW9uIHtcXHJcXG4gIGdyaWQtYXJlYTogbG9jYXRpb247XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGVudCBjb250YWluZXIgQ29udGVudCBmb3IgbWVudSBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xcclxcbi5tZW51X2NvbnRlbnRfY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51X2NvbnRlbnRfc3VibWVudV9jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZDogYmx1ZTtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9jb250ZW50X3N1Ym1lbnVfY29udGFpbmVyIGgzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVnYXR0aWFcXFwiO1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb250ZW50IGNvbnRhaW5lciBDb250ZW50IGZvciBjb250YWN0IF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovXFxyXFxuLmNvbnRhY3RfY29udGVudF9jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovXFxyXFxuLmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMTgxNzFjO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfbGlzdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfbGlzdCBsaSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfbGlzdF9pdGVtIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfbGlzdF9pdGVtOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2U7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL1xcdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9cXHUwMDAwI0phdmFTY3JpcHQvMi4gVE9QLzQuIFJlc3RhdXJhbnQgUGFnZS9SZXN0YXVyYW50X1BhZ2Uvc3JjL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL1xcdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9cXHUwMDAwI0phdmFTY3JpcHQvMi4gVE9QLzQuIFJlc3RhdXJhbnQgUGFnZS9SZXN0YXVyYW50X1BhZ2Uvc3JjL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbXBvcnRcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgaG9tZUFjdGl2ZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgbWVudUFjdGl2ZSB9IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IHsgY29udGFjdEFjdGl2ZSB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuXHJcbi8vIEhlYWRlciBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG5jb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxubWFpbkhlYWRlci5jbGFzc05hbWUgPSBcImhlYWRlclwiO1xyXG5jb25zdCBoZWFkZXJOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG5jb25zdCBoZWFkZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5oZWFkZXJMaXN0LmNsYXNzTmFtZSA9IFwiaGVhZGVyX2xpc3RcIjtcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XHJcbm1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTmF2KTtcclxuaGVhZGVyTmF2LmFwcGVuZENoaWxkKGhlYWRlckxpc3QpO1xyXG5cclxuLyogRnVuY3Rpb24gdG8gY3JlYXRlIGxpc3Qgd2l0aCBjbGFzcywgaWQgYW5kIHRleHQgKi9cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyTGlzdChsaUNsYXNzLCBsaUlkLCBsaVRleHQpIHtcclxuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBsaS5jbGFzc05hbWUgPSBsaUNsYXNzO1xyXG4gIGxpLmlkID0gbGlJZDtcclxuICBsaS50ZXh0Q29udGVudCA9IGxpVGV4dDtcclxuICByZXR1cm4gbGk7XHJcbn1cclxuXHJcbi8qIEZ1bmN0aW9uIHRvIGFkZCBsaXN0IHRvIGhlYWRlciBvciBmb290ZXIgdWwgKi9cclxuZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4ocGFyZW50LCBjaGlsZHJlbikge1xyXG4gIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBIZWFkZXJMaXN0SXRlbXMgPSBbXHJcbiAgY3JlYXRlSGVhZGVyTGlzdChcImhlYWRlcl9saXN0X2l0ZW1cIiwgXCJob21lXCIsIFwiSG9tZVwiKSxcclxuICBjcmVhdGVIZWFkZXJMaXN0KFwiaGVhZGVyX2xpc3RfaXRlbVwiLCBcIm1lbnVcIiwgXCJNZW51XCIpLFxyXG4gIGNyZWF0ZUhlYWRlckxpc3QoXCJoZWFkZXJfbGlzdF9pdGVtXCIsIFwiY29udGFjdFwiLCBcIkNvbnRhY3RcIiksXHJcbl07XHJcblxyXG5hcHBlbmRDaGlsZHJlbihoZWFkZXJMaXN0LCBIZWFkZXJMaXN0SXRlbXMpO1xyXG5cclxuLyogRnVuY3Rpb24gc3dpdGNoaW5nIGhlYWRlciBsaXN0IHRhYiAqL1xyXG5cclxuY29uc3QgaGVhZGVyQnRuID0gaGVhZGVyTmF2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJoZWFkZXJfbGlzdF9pdGVtXCIpO1xyXG5jb25zb2xlLmxvZyhoZWFkZXJCdG4pO1xyXG5cclxuLy8gTG9vcCB0aHJvdWdoIHRoZSBidXR0b25zIGFuZCBhZGQgdGhlIGFjdGl2ZSBjbGFzcyB0byB0aGUgY3VycmVudC9jbGlja2VkIGJ1dHRvblxyXG5mb3IgKHZhciBpID0gMDsgaSA8IGhlYWRlckJ0bi5sZW5ndGg7IGkrKykge1xyXG4gIGhlYWRlckJ0bltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJoZWFkZXJfbGlzdF9pdGVtLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAvLyBJZiB0aGVyZSBpcyBubyBhY3RpdmUgY2xhc3MsIHJlcGxhY2UgXCJoZWFkZXJfbGlzdF9pdGVtLWFjdGl2ZVwiIHRvIFwiIFwiIChub3RoaW5nKVxyXG4gICAgaWYgKGN1cnJlbnQubGVuZ3RoID4gMCkge1xyXG4gICAgICBjdXJyZW50WzBdLmNsYXNzTmFtZSA9IGN1cnJlbnRbMF0uY2xhc3NOYW1lLnJlcGxhY2UoXCJoZWFkZXJfbGlzdF9pdGVtLWFjdGl2ZVwiLCBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgdGhlIGFjdGl2ZSBjbGFzcyB0byB0aGUgY3VycmVudC9jbGlja2VkIGJ1dHRvblxyXG4gICAgdGhpcy5jbGFzc05hbWUgKz0gXCIgaGVhZGVyX2xpc3RfaXRlbS1hY3RpdmVcIjtcclxuXHJcbiAgICAvLyBqaWthIGhvbWUgYnV0dG9uIGFjdGl2ZSwgbWFrYSBhZGQgaG9tZV9jb250ZW50X2NvbnRhaW5lci1hY3RpdmVcclxuICAgIGlmICh0aGlzLmlkID09IFwiaG9tZVwiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaG9tZSBzdWNjZXNmdWx5IGNhbGxlZFwiKTtcclxuICAgICAgaG9tZUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgbWVudUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBjb250YWN0Q29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIC8vaG9tZUFjdGl2ZSgpO1xyXG4gICAgICAvLyBwYW5nZ2lsIGZ1bmN0aW9uIGhvbWVcclxuICAgICAgLy9ob21lQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9rXCI7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaWQgPT0gXCJtZW51XCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJtZW51IHN1Y2Nlc2Z1bHkgY2FsbGVkXCIpO1xyXG4gICAgICBob21lQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIG1lbnVDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIGNvbnRhY3RDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgLy9tZW51QWN0aXZlKCk7XHJcbiAgICAgIC8vIHBhbmdnaWwgZnVuY3Rpb24gbWVudVxyXG4gICAgICAvL21lbnVDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2tcIjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pZCA9PSBcImNvbnRhY3RcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImNvbnRhY3Qgc3VjY2VzZnVseSBjYWxsZWRcIik7XHJcbiAgICAgIGhvbWVDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgbWVudUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBjb250YWN0Q29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgICAgLy9jb250YWN0QWN0aXZlKCk7XHJcbiAgICAgIC8vIHBhbmdnaWwgZnVuY3Rpb24gY29udGFjdFxyXG4gICAgICAvL2NvbnRhY3RDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2tcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0ZXN0XHJcbiAgICAvL2NvbnNvbGUubG9nKGN1cnJlbnQubGVuZ3RoKTtcclxuICAgIC8vY29uc29sZS5sb2codGhpcy5pZCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGhvbWVDb250ZW50KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gQ29udGVudCBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29udGVudC5jbGFzc05hbWUgPSBcImNvbnRlbnRcIjtcclxuY29udGVudC5pZCA9IFwiY29udGVudFwiO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcbi8vIHBhbmdnaWwgZnVuZ3NpIGluaSBkdWx1XHJcbmhvbWVBY3RpdmUoKTtcclxubWVudUFjdGl2ZSgpO1xyXG5jb250YWN0QWN0aXZlKCk7XHJcblxyXG4vLyBzZXRlbGFoIGZ1bmdzaSBkaXBhbmdnaWwgbWFrYSBtYXNpbmctbWFzaW5nIGVsZW1lbiBrb250ZW4gYWthbiBtdW5jdWxcclxuY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVfY29udGVudF9jb250YWluZXJcIik7XHJcbmNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51X2NvbnRlbnRfY29udGFpbmVyXCIpO1xyXG5jb25zdCBjb250YWN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdF9jb250ZW50X2NvbnRhaW5lclwiKTtcclxuXHJcbi8vIGJhcnUga2l0YSB0ZXRhcGthbiBtYXUgZGltdW5jdWxrYW4gYXBhIHRpZGFrXHJcbmhvbWVDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbm1lbnVDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuY29udGFjdENvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuLy8gRm9vdGVyIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbmNvbnN0IG1haW5Gb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG5tYWluRm9vdGVyLmNsYXNzTmFtZSA9IFwiZm9vdGVyXCI7XHJcblxyXG5jb25zdCBmb290ZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5mb290ZXJMaXN0LmNsYXNzTmFtZSA9IFwiZm9vdGVyX2xpc3RcIjtcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkZvb3Rlcik7XHJcbm1haW5Gb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTGlzdCk7XHJcblxyXG4vKiBDcmVhdGUgbGlzdCBjb250YWluaW5nIGFuY2hvcih3aXRoIGNsYXNzLCBocmVmIGFuZCB0ZXh0KSAqL1xyXG5mdW5jdGlvbiBjcmVhdGVBbmNob3JJbnNpZGVMaXN0KGFDbGFzcywgYUhyZWYsIGFUZXh0KSB7XHJcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYW5jaG9yLmNsYXNzTmFtZSA9IGFDbGFzcztcclxuICBhbmNob3IuaHJlZiA9IGFIcmVmO1xyXG4gIGFuY2hvci50ZXh0Q29udGVudCA9IGFUZXh0O1xyXG4gIGxpLmFwcGVuZENoaWxkKGFuY2hvcik7XHJcbiAgcmV0dXJuIGxpO1xyXG59XHJcblxyXG5jb25zdCBmb290ZXJMaXN0SXRlbXMgPSBbXHJcbiAgY3JlYXRlQW5jaG9ySW5zaWRlTGlzdChcclxuICAgIFwiZm9vdGVyX2xpc3RfaXRlbVwiLFxyXG4gICAgXCJodHRwczovL2JlZm9udHMuY29tL3JlZ2F0dGlhLXR5cGVmYWNlLmh0bWxcIixcclxuICAgIFwiUmVnYXR0aWEgVHlwZWZhY2UgZm9udCBkZXNpZ25lZCBieSBCcnVubyBTw6FleiBMw7NwZXogLSBiZWZvbnRzLmNvbVwiXHJcbiAgKSxcclxuICBjcmVhdGVBbmNob3JJbnNpZGVMaXN0KFxyXG4gICAgXCJmb290ZXJfbGlzdF9pdGVtXCIsXHJcbiAgICBcImh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9zcGVjaW1lbi9Sb2JvdG9cIixcclxuICAgIFwiUm9ib3RvIGZvbnQgZGVzaWduZWQgYnkgQ2hyaXN0aWFuIFJvYmVydHNvbiAtIGZvbnRzLmdvb2dsZS5jb21cIlxyXG4gICksXHJcbiAgY3JlYXRlQW5jaG9ySW5zaWRlTGlzdChcclxuICAgIFwiZm9vdGVyX2xpc3RfaXRlbVwiLFxyXG4gICAgXCJodHRwczovL2RyaWJiYmxlLmNvbS9zaG90cy8xNzMxOTgzMC1TdGFkc2hhdmVuLUJyZXdlcnktUmVzdGF1cmFudC1wYWdlXCIsXHJcbiAgICBcIkRlc2lnbiBpbnNwaXJlZCBieSBHaWwgLSBkcmliYmJsZS5jb21cIlxyXG4gICksXHJcbl07XHJcblxyXG4vKiBDYWxsIGFwcGVuZENoaWxkcmVuIGFib3ZlICovXHJcbmFwcGVuZENoaWxkcmVuKGZvb3Rlckxpc3QsIGZvb3Rlckxpc3RJdGVtcyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==