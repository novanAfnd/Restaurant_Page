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
contactContentInner.id = "contact_content_inner"; // to make flex-wrap work

// Header
const contactHeader = document.createElement("div");
contactHeader.className = "content_header";
contactHeader.textContent = "Contact Us";

// Profile card container
const profileContainer = document.createElement("div");
profileContainer.className = "contact_content_profile_container";

function contactActive() {
  content.appendChild(contactContentContainer);
  contactContentContainer.append(contactContentInner);
  contactContentInner.appendChild(contactHeader);

  // Profile container
  contactContentInner.appendChild(profileContainer);

  // Profile card
  /* Create profile card */
  function createProfileCard(pImage, pName, pRole, pNumber, pEmail) {
    const profileCard = document.createElement("div");
    const profileImage = document.createElement("img");
    const profileName = document.createElement("h4");
    const profileText = document.createElement("p");
    profileCard.className = "contact_content_profile_card";
    profileImage.className = "contact_content_profile_card_image";
    profileImage.id = pImage;
    profileName.className = "contact_content_profile_card_name";
    profileName.textContent = pName;
    profileText.setAttribute("style", "white-space: pre;");
    profileText.textContent = pRole;
    profileText.textContent += pNumber;
    profileText.textContent += pEmail;
    profileCard.appendChild(profileImage);
    profileCard.appendChild(profileName);
    profileCard.appendChild(profileText);
    return profileCard;
  }

  /* Function to add list to header or footer ul */
  function appendChildren(parent, children) {
    children.forEach(function (child) {
      parent.appendChild(child);
    });
  }

  const profileItems = [
    createProfileCard("profile_dipper", "Dipper", "Chef \r\n", "000-111-111-111 \r\n", "dipper@fake-gggmail \r\n"),
    createProfileCard("profile_wendy", "Wendy", "Manager \r\n", "000-222-222-222 \r\n", "wendy@fake-gggmail \r\n"),
    createProfileCard("profile_mabel", "Mabel", "Waiter \r\n", "000-333-333-333 \r\n", "mabel@fake-gggmail \r\n"),
  ];

  appendChildren(profileContainer, profileItems);
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
homeContentInner.id = "home_container_inner"; // to make grids work

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
const subMenuSnacks = document.createElement("div");
subMenuSnacks.className = "menu_content_submenu_container";
subMenuSnacks.id = "submenu_snacks";

// Submenu Header
const subMenuFoodsHeader = document.createElement("h3");
subMenuFoodsHeader.textContent = "Foods";
subMenuFoods.appendChild(subMenuFoodsHeader);
const subMenuDrinksHeader = document.createElement("h3");
subMenuDrinksHeader.textContent = "Drinks";
subMenuDrinks.appendChild(subMenuDrinksHeader);
const subMenuSnacksHeader = document.createElement("h3");
subMenuSnacksHeader.textContent = "Snacks";
subMenuSnacks.appendChild(subMenuSnacksHeader);

/*
Untuk satu menu makanan/minuman kita butuh container, 
container tersebut nantinya berisi nama makanan + harga, gambar dan text deskripsi makanan/minuman
sehingga kita butuh "div" sebagai container
"h3" sebagai nama makanan + harga, "url image" sebagai gambar dan "p" sebagai deskripsi text
*/

function menuActive() {
  content.appendChild(menuContentContainer);
  menuContentContainer.appendChild(menuContentInner);
  menuContentInner.appendChild(menuHeader);
  /* 
  Function to add foods/drinks to submenu container
  ...parent sebagai container dan children sebagai element apa yang mau kita masukkan ke container itu
  ...children.forEach(function (child) berarti "setiap children maka diberlakukan function berikut..."
  */
  function appendChildren(parent, children) {
    children.forEach(function (child) {
      parent.appendChild(child);
    });
  }
  // Foods and Drinks function
  function createEverythingInsideFoods(fDName, fDImage, fDText) {
    const foodDrinkContainer = document.createElement("div");
    const foodDrinkName = document.createElement("h4");
    const foodDrinkImage = document.createElement("img");
    const foodDrinkText = document.createElement("p");
    foodDrinkContainer.className = "food-drink_container";
    foodDrinkName.className = "food-drink_name";
    foodDrinkName.textContent = fDName;
    foodDrinkImage.className = "food-drink_image";
    foodDrinkImage.src = fDImage;
    foodDrinkText.textContent = fDText;
    foodDrinkContainer.appendChild(foodDrinkName);
    foodDrinkContainer.appendChild(foodDrinkImage);
    foodDrinkContainer.appendChild(foodDrinkText);
    return foodDrinkContainer;
  }

  // Foods
  menuContentInner.appendChild(subMenuFoods);
  const foodItems = [
    createEverythingInsideFoods(
      "Nasi Goreng Telur Ceplok - Rp15k",
      "https://riceinfo.com/wp-content/uploads/2022/09/nasi-goreng-recipe.jpg",
      "Nasi goreng is a Southeast Asian fried rice dish, usually cooked with pieces of meat and vegetables."
    ),
    createEverythingInsideFoods(
      "Nasi Goreng Ayam Geprek - Rp20k",
      "https://img.kurio.network/QcOouz8wPgj4U46wpi-6ttfADgw=/320x320/filters:quality(80)/https://kurio-img.kurioapps.com/21/12/17/d6b0125d-cba9-414a-99aa-35cb3cfd83fc.jpe",
      "Fried rice with crispy fried chicken topped with chili sauce."
    ),
    createEverythingInsideFoods(
      "Nasi Goreng Mawut - Rp15k",
      "https://tastynesia.com/wp-content/uploads/2019/12/Resep-Nasi-Goreng-Mawut.jpg",
      "Fried rice mixed with noodles or fried vermicelli. Complete with vegetable toppings and shredded chicken/sausage/meatballs."
    ),
  ];

  appendChildren(subMenuFoods, foodItems);

  // Drinks
  menuContentInner.appendChild(subMenuDrinks);
  const drinkItems = [
    createEverythingInsideFoods(
      "Jus Buah Mangga - Rp10k",
      "https://cdn0-production-images-kly.akamaized.net/4qLTaXdMn0jfg9tV6ZJJp-SKKZ0=/261x0:928x667/1200x1200/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3267542/original/055688000_1602674093-shutterstock_1045397923.jpg",
      "Mango juice is made from ripe mangoes."
    ),
    createEverythingInsideFoods(
      "Teh Susu - Rp10k",
      "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/c06eb3cf-f1e1-4e10-8ca0-d80995506e3e_Go-Biz_20200930_152745.jpeg",
      "A mixture of tea and milk in a certain composition. Milk tea is a modern drink that is very popular and this milk tea has its own characteristics in its manufacture, especially in Asia."
    ),
    createEverythingInsideFoods(
      "Es Teh - Rp5k",
      "https://bebekbkb.com/storage/2020/02/es-teh-manis.jpg",
      "A tea drink that is served cold with ice cubes."
    ),
  ];

  appendChildren(subMenuDrinks, drinkItems);

  // Snacks
  menuContentInner.appendChild(subMenuSnacks);
  const snackItems = [
    createEverythingInsideFoods(
      "Usus Krispi - Rp5k",
      "https://paxelmarket.co/wp-content/uploads/2022/01/Screenshot_20220109_173115.png",
      "Usus Krispi is chips made from quality selected raw chicken intestines. These chips are processed using an extraordinary technique that involves a variety of 'Indonesian special' spices to produce chips that are savory, delicious, soft, crunchy like never before."
    ),
    createEverythingInsideFoods(
      "Krupuk Kulit - Rp5k",
      "https://cdn0-production-images-kly.akamaized.net/szcT3TR2gBo-DimULAauJazz6GI=/261x0:4422x4161/1200x1200/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3764835/original/080039900_1640058116-shutterstock_1820787197.jpg",
      "Krupuk kulit is a traditional Indonesian cattle skin krupuk. Traditionally it is made from the soft inner skin of cattle, diced, and sun-dried until it hardens and loses most of its water content."
    ),
  ];

  appendChildren(subMenuSnacks, snackItems);
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
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./dipper.png */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/dipper.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./wendy.png */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/wendy.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./mabel.png */ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/mabel.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: \"Regattia\";\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\");\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: 16px;\r\n  color: white;\r\n  background: #18171c;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: relative;\r\n}\r\n\r\n/* Header ______________________________________________________________________________________ */\r\n.header {\r\n  background: #18171c;\r\n  width: 100%;\r\n  height: 50px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.header_list_item {\r\n  display: inline;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-weight: 400;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.header_list_item:hover {\r\n  color: orange;\r\n  cursor: pointer;\r\n}\r\n\r\n.header_list_item-active {\r\n  border-bottom: 1px solid white;\r\n}\r\n\r\n/* Content ______________________________________________________________________________________ */\r\n.content {\r\n  background: gray;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n/* Inner Content container */\r\n.content_container_inner {\r\n  background: #18171c;\r\n  min-width: 100%;\r\n  min-height: 500px;\r\n  padding: 10px;\r\n  display: flex; /* Important */\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.content_header {\r\n  font-family: \"Regattia\";\r\n  font-size: 50px;\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n.content_main {\r\n  text-align: center;\r\n  width: 400px;\r\n}\r\n\r\n.content_main h3 {\r\n  font-family: \"Regattia\";\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n/* Content container for home ______________________________________________________________________________________ */\r\n\r\n.home_content_container {\r\n  display: none;\r\n}\r\n\r\n#home_container_inner {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: auto auto;\r\n  grid-auto-rows: minmax(150px, auto);\r\n  grid-gap: 20px;\r\n  grid-template-areas:\r\n    \"header header\"\r\n    \"content1 image1\"\r\n    \"content2 image1\"\r\n    \"location location\";\r\n}\r\n\r\n#home_header {\r\n  grid-area: header;\r\n}\r\n\r\n#home_intro {\r\n  grid-area: content1;\r\n}\r\n\r\n#image_one {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-size: cover;\r\n  grid-area: image1;\r\n  min-width: 500px;\r\n  min-height: 700px;\r\n}\r\n\r\n#home_hours {\r\n  grid-area: content2;\r\n}\r\n\r\n#home_location {\r\n  grid-area: location;\r\n  width: auto;\r\n}\r\n\r\n/* Content container Content for menu ______________________________________________________________________________________ */\r\n.menu_content_container {\r\n  display: none;\r\n}\r\n\r\n.menu_content_submenu_container {\r\n  background: gray;\r\n  min-width: 400px;\r\n  min-height: 400px;\r\n  border-radius: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n.menu_content_submenu_container h3 {\r\n  font-family: \"Regattia\";\r\n  font-size: 35px;\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n.food-drink_container {\r\n  text-align: center;\r\n  background: #18171c;\r\n  width: 400px;\r\n  min-height: 400px;\r\n  border-radius: 10px;\r\n  margin: 10px;\r\n  padding: 10px;\r\n}\r\n\r\n.food-drink_name {\r\n  font-family: \"Regattia\";\r\n  font-size: 20px;\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n.food-drink_image {\r\n  background-size: cover;\r\n  width: 250px;\r\n  height: 250px;\r\n  border-radius: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n/* Content container Content for contact ______________________________________________________________________________________ */\r\n.contact_content_container {\r\n  display: none;\r\n}\r\n\r\n/* #contact_content_inner {\r\n} */\r\n\r\n.contact_content_profile_container {\r\n  min-width: 500px;\r\n  min-height: 100px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.contact_content_profile_card {\r\n  background: gray;\r\n  width: 400px;\r\n  height: 400px;\r\n  border-radius: 10px;\r\n  margin: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.contact_content_profile_card p {\r\n  text-align: center;\r\n}\r\n\r\n.contact_content_profile_card_image {\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 50%;\r\n  margin: 10px;\r\n}\r\n\r\n.contact_content_profile_card_name {\r\n  font-family: \"Regattia\";\r\n  font-size: 25px;\r\n  margin: 10x;\r\n}\r\n\r\n#profile_dipper {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  background-size: cover;\r\n}\r\n\r\n#profile_wendy {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n  background-size: cover;\r\n}\r\n\r\n#profile_mabel {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n  background-size: contain;\r\n}\r\n\r\n/* Footer ______________________________________________________________________________________ */\r\n.footer {\r\n  background: #18171c;\r\n  width: 100%;\r\n  height: 50px;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  position: relative;\r\n  bottom: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.footer_list {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n}\r\n\r\n.footer_list li {\r\n  display: inline;\r\n}\r\n\r\n.footer_list_item {\r\n  text-decoration: none;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: 11px;\r\n  font-weight: 500;\r\n  color: white;\r\n}\r\n\r\n.footer_list_item:hover {\r\n  color: orange;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Media queries*/\r\n@media all and (max-width: 768px) {\r\n  #home_container_inner {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  #home_header {\r\n    font-size: 45px;\r\n  }\r\n\r\n  #image_one {\r\n    min-width: 400px;\r\n    min-height: 600px;\r\n  }\r\n\r\n  .footer_list_item {\r\n    font-size: 10px;\r\n    font-weight: 400;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: \"Regattia\";\r\n  src: url(\"./regattia-bold-webfont.woff2\") format(\"woff2\"), url(\"./regattia-bold-webfont.woff\") format(\"woff\");\r\n}\r\n\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: 16px;\r\n  color: white;\r\n  background: #18171c;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: relative;\r\n}\r\n\r\n/* Header ______________________________________________________________________________________ */\r\n.header {\r\n  background: #18171c;\r\n  width: 100%;\r\n  height: 50px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.header_list_item {\r\n  display: inline;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-weight: 400;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.header_list_item:hover {\r\n  color: orange;\r\n  cursor: pointer;\r\n}\r\n\r\n.header_list_item-active {\r\n  border-bottom: 1px solid white;\r\n}\r\n\r\n/* Content ______________________________________________________________________________________ */\r\n.content {\r\n  background: gray;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n/* Inner Content container */\r\n.content_container_inner {\r\n  background: #18171c;\r\n  min-width: 100%;\r\n  min-height: 500px;\r\n  padding: 10px;\r\n  display: flex; /* Important */\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.content_header {\r\n  font-family: \"Regattia\";\r\n  font-size: 50px;\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n.content_main {\r\n  text-align: center;\r\n  width: 400px;\r\n}\r\n\r\n.content_main h3 {\r\n  font-family: \"Regattia\";\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n/* Content container for home ______________________________________________________________________________________ */\r\n\r\n.home_content_container {\r\n  display: none;\r\n}\r\n\r\n#home_container_inner {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: auto auto;\r\n  grid-auto-rows: minmax(150px, auto);\r\n  grid-gap: 20px;\r\n  grid-template-areas:\r\n    \"header header\"\r\n    \"content1 image1\"\r\n    \"content2 image1\"\r\n    \"location location\";\r\n}\r\n\r\n#home_header {\r\n  grid-area: header;\r\n}\r\n\r\n#home_intro {\r\n  grid-area: content1;\r\n}\r\n\r\n#image_one {\r\n  background-image: url(/src/restaurant.jpg);\r\n  background-size: cover;\r\n  grid-area: image1;\r\n  min-width: 500px;\r\n  min-height: 700px;\r\n}\r\n\r\n#home_hours {\r\n  grid-area: content2;\r\n}\r\n\r\n#home_location {\r\n  grid-area: location;\r\n  width: auto;\r\n}\r\n\r\n/* Content container Content for menu ______________________________________________________________________________________ */\r\n.menu_content_container {\r\n  display: none;\r\n}\r\n\r\n.menu_content_submenu_container {\r\n  background: gray;\r\n  min-width: 400px;\r\n  min-height: 400px;\r\n  border-radius: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n.menu_content_submenu_container h3 {\r\n  font-family: \"Regattia\";\r\n  font-size: 35px;\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n.food-drink_container {\r\n  text-align: center;\r\n  background: #18171c;\r\n  width: 400px;\r\n  min-height: 400px;\r\n  border-radius: 10px;\r\n  margin: 10px;\r\n  padding: 10px;\r\n}\r\n\r\n.food-drink_name {\r\n  font-family: \"Regattia\";\r\n  font-size: 20px;\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n.food-drink_image {\r\n  background-size: cover;\r\n  width: 250px;\r\n  height: 250px;\r\n  border-radius: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n/* Content container Content for contact ______________________________________________________________________________________ */\r\n.contact_content_container {\r\n  display: none;\r\n}\r\n\r\n/* #contact_content_inner {\r\n} */\r\n\r\n.contact_content_profile_container {\r\n  min-width: 500px;\r\n  min-height: 100px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.contact_content_profile_card {\r\n  background: gray;\r\n  width: 400px;\r\n  height: 400px;\r\n  border-radius: 10px;\r\n  margin: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.contact_content_profile_card p {\r\n  text-align: center;\r\n}\r\n\r\n.contact_content_profile_card_image {\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 50%;\r\n  margin: 10px;\r\n}\r\n\r\n.contact_content_profile_card_name {\r\n  font-family: \"Regattia\";\r\n  font-size: 25px;\r\n  margin: 10x;\r\n}\r\n\r\n#profile_dipper {\r\n  background: url(./dipper.png);\r\n  background-size: cover;\r\n}\r\n\r\n#profile_wendy {\r\n  background: url(./wendy.png);\r\n  background-size: cover;\r\n}\r\n\r\n#profile_mabel {\r\n  background: url(./mabel.png);\r\n  background-size: contain;\r\n}\r\n\r\n/* Footer ______________________________________________________________________________________ */\r\n.footer {\r\n  background: #18171c;\r\n  width: 100%;\r\n  height: 50px;\r\n  padding-left: 40px;\r\n  padding-right: 40px;\r\n  position: relative;\r\n  bottom: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.footer_list {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n}\r\n\r\n.footer_list li {\r\n  display: inline;\r\n}\r\n\r\n.footer_list_item {\r\n  text-decoration: none;\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: 11px;\r\n  font-weight: 500;\r\n  color: white;\r\n}\r\n\r\n.footer_list_item:hover {\r\n  color: orange;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Media queries*/\r\n@media all and (max-width: 768px) {\r\n  #home_container_inner {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  #home_header {\r\n    font-size: 45px;\r\n  }\r\n\r\n  #image_one {\r\n    min-width: 400px;\r\n    min-height: 600px;\r\n  }\r\n\r\n  .footer_list_item {\r\n    font-size: 10px;\r\n    font-weight: 400;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/dipper.png":
/*!*****************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/dipper.png ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ca17c4e232219a131fc.png";

/***/ }),

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/mabel.png":
/*!****************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/mabel.png ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a93ffb5635c2ca45661.png";

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

/***/ }),

/***/ "../../../../\u0000#JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/wendy.png":
/*!****************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/wendy.png ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e04ea4e72eac0c4f5d2d.png";

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
//....move below

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

/* Function to add list to header or footer ul */
function appendChildren(parent, children) {
  children.forEach(function (child) {
    parent.appendChild(child);
  });
}

/* Call createAnchorInsideList above */
const footerListItems = [
  createAnchorInsideList(
    "footer_list_item",
    "https://befonts.com/regattia-typeface.html",
    "Regattia Typeface font designed by Bruno S??ez L??pez - befonts.com"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFVO0FBQ1YsaURBQVU7QUFDVix1REFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi4vLi4vLi4vLi4vXHUwMDAwI0phdmFTY3JpcHQvMi4gVE9QLzQuIFJlc3RhdXJhbnQgUGFnZS9SZXN0YXVyYW50X1BhZ2Uvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi4vLi4vLi4vLi4vXHUwMDAwI0phdmFTY3JpcHQvMi4gVE9QLzQuIFJlc3RhdXJhbnQgUGFnZS9SZXN0YXVyYW50X1BhZ2Uvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi4vLi4vLi4vLi4vXHUwMDAwI0phdmFTY3JpcHQvMi4gVE9QLzQuIFJlc3RhdXJhbnQgUGFnZS9SZXN0YXVyYW50X1BhZ2Uvc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL3NyYy9zdHlsZS5jc3M/YTY1ZiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb250YWN0Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnRhY3RDb250ZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwiY29udGFjdF9jb250ZW50X2NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgY29udGFjdENvbnRlbnRJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnRhY3RDb250ZW50SW5uZXIuY2xhc3NOYW1lID0gXCJjb250ZW50X2NvbnRhaW5lcl9pbm5lclwiO1xyXG5jb250YWN0Q29udGVudElubmVyLmlkID0gXCJjb250YWN0X2NvbnRlbnRfaW5uZXJcIjsgLy8gdG8gbWFrZSBmbGV4LXdyYXAgd29ya1xyXG5cclxuLy8gSGVhZGVyXHJcbmNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb250YWN0SGVhZGVyLmNsYXNzTmFtZSA9IFwiY29udGVudF9oZWFkZXJcIjtcclxuY29udGFjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xyXG5cclxuLy8gUHJvZmlsZSBjYXJkIGNvbnRhaW5lclxyXG5jb25zdCBwcm9maWxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxucHJvZmlsZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImNvbnRhY3RfY29udGVudF9wcm9maWxlX2NvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRhY3RBY3RpdmUoKSB7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Q29udGVudENvbnRhaW5lcik7XHJcbiAgY29udGFjdENvbnRlbnRDb250YWluZXIuYXBwZW5kKGNvbnRhY3RDb250ZW50SW5uZXIpO1xyXG4gIGNvbnRhY3RDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XHJcblxyXG4gIC8vIFByb2ZpbGUgY29udGFpbmVyXHJcbiAgY29udGFjdENvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChwcm9maWxlQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gUHJvZmlsZSBjYXJkXHJcbiAgLyogQ3JlYXRlIHByb2ZpbGUgY2FyZCAqL1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2ZpbGVDYXJkKHBJbWFnZSwgcE5hbWUsIHBSb2xlLCBwTnVtYmVyLCBwRW1haWwpIHtcclxuICAgIGNvbnN0IHByb2ZpbGVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHByb2ZpbGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBjb25zdCBwcm9maWxlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIGNvbnN0IHByb2ZpbGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwcm9maWxlQ2FyZC5jbGFzc05hbWUgPSBcImNvbnRhY3RfY29udGVudF9wcm9maWxlX2NhcmRcIjtcclxuICAgIHByb2ZpbGVJbWFnZS5jbGFzc05hbWUgPSBcImNvbnRhY3RfY29udGVudF9wcm9maWxlX2NhcmRfaW1hZ2VcIjtcclxuICAgIHByb2ZpbGVJbWFnZS5pZCA9IHBJbWFnZTtcclxuICAgIHByb2ZpbGVOYW1lLmNsYXNzTmFtZSA9IFwiY29udGFjdF9jb250ZW50X3Byb2ZpbGVfY2FyZF9uYW1lXCI7XHJcbiAgICBwcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IHBOYW1lO1xyXG4gICAgcHJvZmlsZVRleHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aGl0ZS1zcGFjZTogcHJlO1wiKTtcclxuICAgIHByb2ZpbGVUZXh0LnRleHRDb250ZW50ID0gcFJvbGU7XHJcbiAgICBwcm9maWxlVGV4dC50ZXh0Q29udGVudCArPSBwTnVtYmVyO1xyXG4gICAgcHJvZmlsZVRleHQudGV4dENvbnRlbnQgKz0gcEVtYWlsO1xyXG4gICAgcHJvZmlsZUNhcmQuYXBwZW5kQ2hpbGQocHJvZmlsZUltYWdlKTtcclxuICAgIHByb2ZpbGVDYXJkLmFwcGVuZENoaWxkKHByb2ZpbGVOYW1lKTtcclxuICAgIHByb2ZpbGVDYXJkLmFwcGVuZENoaWxkKHByb2ZpbGVUZXh0KTtcclxuICAgIHJldHVybiBwcm9maWxlQ2FyZDtcclxuICB9XHJcblxyXG4gIC8qIEZ1bmN0aW9uIHRvIGFkZCBsaXN0IHRvIGhlYWRlciBvciBmb290ZXIgdWwgKi9cclxuICBmdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihwYXJlbnQsIGNoaWxkcmVuKSB7XHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9maWxlSXRlbXMgPSBbXHJcbiAgICBjcmVhdGVQcm9maWxlQ2FyZChcInByb2ZpbGVfZGlwcGVyXCIsIFwiRGlwcGVyXCIsIFwiQ2hlZiBcXHJcXG5cIiwgXCIwMDAtMTExLTExMS0xMTEgXFxyXFxuXCIsIFwiZGlwcGVyQGZha2UtZ2dnbWFpbCBcXHJcXG5cIiksXHJcbiAgICBjcmVhdGVQcm9maWxlQ2FyZChcInByb2ZpbGVfd2VuZHlcIiwgXCJXZW5keVwiLCBcIk1hbmFnZXIgXFxyXFxuXCIsIFwiMDAwLTIyMi0yMjItMjIyIFxcclxcblwiLCBcIndlbmR5QGZha2UtZ2dnbWFpbCBcXHJcXG5cIiksXHJcbiAgICBjcmVhdGVQcm9maWxlQ2FyZChcInByb2ZpbGVfbWFiZWxcIiwgXCJNYWJlbFwiLCBcIldhaXRlciBcXHJcXG5cIiwgXCIwMDAtMzMzLTMzMy0zMzMgXFxyXFxuXCIsIFwibWFiZWxAZmFrZS1nZ2dtYWlsIFxcclxcblwiKSxcclxuICBdO1xyXG5cclxuICBhcHBlbmRDaGlsZHJlbihwcm9maWxlQ29udGFpbmVyLCBwcm9maWxlSXRlbXMpO1xyXG59XHJcbiIsImNvbnN0IGhvbWVDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaG9tZUNvbnRlbnRDb250YWluZXIuY2xhc3NOYW1lID0gXCJob21lX2NvbnRlbnRfY29udGFpbmVyXCI7XHJcblxyXG5jb25zdCBob21lQ29udGVudElubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaG9tZUNvbnRlbnRJbm5lci5jbGFzc05hbWUgPSBcImNvbnRlbnRfY29udGFpbmVyX2lubmVyXCI7XHJcbmhvbWVDb250ZW50SW5uZXIuaWQgPSBcImhvbWVfY29udGFpbmVyX2lubmVyXCI7IC8vIHRvIG1ha2UgZ3JpZHMgd29ya1xyXG5cclxuLy8gSGVhZGVyXHJcbmNvbnN0IGhvbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5ob21lSGVhZGVyLmNsYXNzTmFtZSA9IFwiY29udGVudF9oZWFkZXJcIjtcclxuaG9tZUhlYWRlci5pZCA9IFwiaG9tZV9oZWFkZXJcIjtcclxuaG9tZUhlYWRlci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndoaXRlLXNwYWNlOiBwcmU7XCIpO1xyXG5ob21lSGVhZGVyLnRleHRDb250ZW50ID0gXCJWaXNpdCBPdXIgXFxyXFxuXCI7XHJcbmhvbWVIZWFkZXIudGV4dENvbnRlbnQgKz0gXCJHb29kIFJlc3RhdXJhbnQgXFxyXFxuXCI7XHJcbmhvbWVIZWFkZXIudGV4dENvbnRlbnQgKz0gXCJGb29kcyBhbmQgRHJpbmtzLlwiO1xyXG5cclxuLy8gSW50cm9cclxuY29uc3QgaG9tZUludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaG9tZUludHJvLmNsYXNzTmFtZSA9IFwiY29udGVudF9tYWluXCI7XHJcbmhvbWVJbnRyby5pZCA9IFwiaG9tZV9pbnRyb1wiO1xyXG5jb25zdCBob21lSW50cm9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbmhvbWVJbnRyb0hlYWRlci50ZXh0Q29udGVudCA9IFwiSW50cm9kdWN0aW9uXCI7XHJcbmhvbWVJbnRyby5hcHBlbmRDaGlsZChob21lSW50cm9IZWFkZXIpO1xyXG5jb25zdCBob21lSW50cm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbmhvbWVJbnRyb1RleHQudGV4dENvbnRlbnQgPVxyXG4gIFwiR29vZCBSZXN0YXVyYW50IGhhcyB0aGUgYmVzdCBmcmllZCByaWNlISBUaGUgYW1iaWFuY2UgYW5kIGN1c3RvbWVyIHNlcnZpY2UgbWFrZSB5b3UgZmVlbCBsaWtlIHlvdSBhcmUgc2l0dGluZyBpbiB0aGUgbWlkZGxlIG9mIGEgcnVyYWwgcGFkZHkgZmllbGQsIGVhdGluZyBsaWtlIGEgbG9jYWwhIFRoaXMgaXMgdGhlIHJpZ2h0IHBsYWNlIGFzIGEgcmVsaWV2ZXIgb2YgdGhlIHRpcmVkbmVzcyBvZiB1cmJhbiBsaWZlXCI7XHJcbmhvbWVJbnRyby5hcHBlbmRDaGlsZChob21lSW50cm9UZXh0KTtcclxuXHJcbi8vIEhvdXJzXHJcbmNvbnN0IGhvbWVIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmhvbWVIb3Vycy5jbGFzc05hbWUgPSBcImNvbnRlbnRfbWFpblwiO1xyXG5ob21lSG91cnMuaWQgPSBcImhvbWVfaG91cnNcIjtcclxuY29uc3QgaG9tZUhvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG5ob21lSG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XHJcbmhvbWVIb3Vycy5hcHBlbmRDaGlsZChob21lSG91cnNIZWFkZXIpO1xyXG5jb25zdCBob21lSG91cnNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbmhvbWVIb3Vyc1RleHQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aGl0ZS1zcGFjZTogcHJlO1wiKTtcclxuaG9tZUhvdXJzVGV4dC50ZXh0Q29udGVudCA9IFwiU3VuZGF5OiA4YW0gLSA4cG0gXFxyXFxuXCI7XHJcbmhvbWVIb3Vyc1RleHQudGV4dENvbnRlbnQgKz0gXCJNb25kYXk6IDZhbSAtIDZwbSBcXHJcXG5cIjtcclxuaG9tZUhvdXJzVGV4dC50ZXh0Q29udGVudCArPSBcIlR1ZXNkYXk6IDZhbSAtIDZwbSBcXHJcXG5cIjtcclxuaG9tZUhvdXJzVGV4dC50ZXh0Q29udGVudCArPSBcIldlZG5lc2RheTogNmFtIC0gNnBtIFxcclxcblwiO1xyXG5ob21lSG91cnNUZXh0LnRleHRDb250ZW50ICs9IFwiVGh1cnNkYXk6IDZhbSAtIDEwcG0gXFxyXFxuXCI7XHJcbmhvbWVIb3Vyc1RleHQudGV4dENvbnRlbnQgKz0gXCJGcmlkYXk6IDZhbSAtIDEwcG0gXFxyXFxuXCI7XHJcbmhvbWVIb3Vyc1RleHQudGV4dENvbnRlbnQgKz0gXCJTYXR1cmRheTogOGFtIC0gMTBwbVwiO1xyXG5ob21lSG91cnMuYXBwZW5kQ2hpbGQoaG9tZUhvdXJzVGV4dCk7XHJcblxyXG4vLyBsb2NhdGlvblxyXG5jb25zdCBob21lTG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5ob21lTG9jYXRpb24uY2xhc3NOYW1lID0gXCJjb250ZW50X21haW5cIjtcclxuaG9tZUxvY2F0aW9uLmlkID0gXCJob21lX2xvY2F0aW9uXCI7XHJcbmNvbnN0IGhvbWVMb2NhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuaG9tZUxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xyXG5ob21lTG9jYXRpb24uYXBwZW5kQ2hpbGQoaG9tZUxvY2F0aW9uSGVhZGVyKTtcclxuY29uc3QgaG9tZUxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5ob21lTG9jYXRpb25UZXh0LnRleHRDb250ZW50ID0gXCIxMTExIFVudGl0bGVkIFN0cmVldCwgT2x5bXB1cyBNb25zLCBNYXJzXCI7XHJcbmhvbWVMb2NhdGlvbi5hcHBlbmRDaGlsZChob21lTG9jYXRpb25UZXh0KTtcclxuXHJcbi8vIGltYWdlXHJcbmNvbnN0IGltYWdlT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaW1hZ2VPbmUuaWQgPSBcImltYWdlX29uZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVBY3RpdmUoKSB7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChob21lQ29udGVudENvbnRhaW5lcik7XHJcbiAgaG9tZUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnRJbm5lcik7XHJcbiAgaG9tZUNvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChob21lSGVhZGVyKTtcclxuICBob21lQ29udGVudElubmVyLmFwcGVuZENoaWxkKGhvbWVJbnRybyk7XHJcbiAgaG9tZUNvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChob21lSG91cnMpO1xyXG4gIGhvbWVDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQoaW1hZ2VPbmUpO1xyXG4gIGhvbWVDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQoaG9tZUxvY2F0aW9uKTtcclxufVxyXG5cclxuLy8uLi4ga2l0YSBtZW5nYW1iaWwgZWxlbWVudCBkZW5nYW4gaWQgXCJjb250ZW50XCIsIGthcmVuYSBlbGVtZW50IGRlbmdhbiBpZCBcImNvbnRlbnRcIiBqdWdhIG1lbWlsaWtpIG5hbWEgY2xhc3MgXCJjb250ZW50XCJcclxuLy8uLi4gZGFuIGppa2Ega2l0YSBhdHVyIHN0eWxlIGNzcyBoYW55YSB1bnR1ayBjbGFzc255YSB5YWl0dSBcIi5jb250ZW50XCIgbWFrYSB0ZXRhcCBha2FuIGJla2VyamFcclxuLy8uLi4ga2FsbyBpbmdpbiBidWt0aSBjb2JhIHNhamEgY29uc29sZS5sb2dcclxuLy8uLi4gamFkaSBrZWRlcGFubnlhIGJpc2Ega2l0YSBidWF0IGVsZW1lbnQgeWFuZyBtZW1pbGlraSBjbGFzcyBkYW4gaWRcclxuXHJcbi8vIGtvbnNlcCBidXR0b24gYWN0aXZlIGRhbiB0aWRhayBhY3RpdmVcclxuLy8gc2FhdCBidXR0b24gdW50dWsgaG9tZSBha3RpZiwgbWFrYSBidXR0b24gdW50dWsgbWVudSBkYW4gY29udGFjdCB0aWRhayBha3RpZlxyXG4vLy4uLmJlZ2l0dSBwdWxhIHVudHVrIGJ1dHRvbiBtZW51IGRhbiBjb250YWN0XHJcbi8vLi4uc2VoaW5nZ2EgbmFudGkgbXVuZ2tpbiBwYWthaSBsb29wIHVudHVrIGFkZCBhY3RpdmUgYXRhdSByZW1vdmUgYWN0aXZlXHJcblxyXG4vLyBraXRhIGJ1YXQga29kZSBhZ2FyIG1hc2luZy1tYXNpbmcgYnV0dG9uIGJla2VyamEgc2VtZXN0aW55YSBkdWx1XHJcbi8vLi4ua2VtdWRpYW4ga2l0YSBpc2kga29udGVubnlhIG9rZT9cclxuXHJcbi8vIGtpdGEgZWRpdCBpc2kgZGFyaSBob21lIHBhZ2UgZGlzaW5pXHJcbi8vLi4ubGFsdSBpc2kgZGFyaSBob21lIHBhZ2UgdGVyc2VidXQga2l0YSBqYWRpa2FuIGZ1bmN0aW9uXHJcbi8vLi4ua2VtdWRpYW4gZnVuY3Rpb24gdGVyc2VidXQga2l0YSBleHBvcnQgZGFuIGRpaW1wb3J0IGRpIG1haW4uanNcclxuLy8uLi5kaSBkYWxhbSBtYWluLmpzIGtpdGEgYnVhdCBidXR0b24gdW50dWsgbWVtYW5nZ2lsIGZ1bmN0aW9uIGRpc2luaVxyXG4iLCJjb25zdCBtZW51Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm1lbnVDb250ZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwibWVudV9jb250ZW50X2NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgbWVudUNvbnRlbnRJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm1lbnVDb250ZW50SW5uZXIuY2xhc3NOYW1lID0gXCJjb250ZW50X2NvbnRhaW5lcl9pbm5lclwiO1xyXG5cclxuLy8gSGVhZGVyXHJcbmNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tZW51SGVhZGVyLmNsYXNzTmFtZSA9IFwiY29udGVudF9oZWFkZXJcIjtcclxubWVudUhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG5cclxuLy8gU3VibWVudSBDb250YWluZXIgKENvbnRhaW5lciBmb3IgZWFjaCBmb29kIHR5cGVzKVxyXG5jb25zdCBzdWJNZW51Rm9vZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5zdWJNZW51Rm9vZHMuY2xhc3NOYW1lID0gXCJtZW51X2NvbnRlbnRfc3VibWVudV9jb250YWluZXJcIjtcclxuc3ViTWVudUZvb2RzLmlkID0gXCJzdWJtZW51X2Zvb2RzXCI7XHJcbmNvbnN0IHN1Yk1lbnVEcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5zdWJNZW51RHJpbmtzLmNsYXNzTmFtZSA9IFwibWVudV9jb250ZW50X3N1Ym1lbnVfY29udGFpbmVyXCI7XHJcbnN1Yk1lbnVEcmlua3MuaWQgPSBcInN1Ym1lbnVfZHJpbmtzXCI7XHJcbmNvbnN0IHN1Yk1lbnVTbmFja3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5zdWJNZW51U25hY2tzLmNsYXNzTmFtZSA9IFwibWVudV9jb250ZW50X3N1Ym1lbnVfY29udGFpbmVyXCI7XHJcbnN1Yk1lbnVTbmFja3MuaWQgPSBcInN1Ym1lbnVfc25hY2tzXCI7XHJcblxyXG4vLyBTdWJtZW51IEhlYWRlclxyXG5jb25zdCBzdWJNZW51Rm9vZHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbnN1Yk1lbnVGb29kc0hlYWRlci50ZXh0Q29udGVudCA9IFwiRm9vZHNcIjtcclxuc3ViTWVudUZvb2RzLmFwcGVuZENoaWxkKHN1Yk1lbnVGb29kc0hlYWRlcik7XHJcbmNvbnN0IHN1Yk1lbnVEcmlua3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbnN1Yk1lbnVEcmlua3NIZWFkZXIudGV4dENvbnRlbnQgPSBcIkRyaW5rc1wiO1xyXG5zdWJNZW51RHJpbmtzLmFwcGVuZENoaWxkKHN1Yk1lbnVEcmlua3NIZWFkZXIpO1xyXG5jb25zdCBzdWJNZW51U25hY2tzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG5zdWJNZW51U25hY2tzSGVhZGVyLnRleHRDb250ZW50ID0gXCJTbmFja3NcIjtcclxuc3ViTWVudVNuYWNrcy5hcHBlbmRDaGlsZChzdWJNZW51U25hY2tzSGVhZGVyKTtcclxuXHJcbi8qXHJcblVudHVrIHNhdHUgbWVudSBtYWthbmFuL21pbnVtYW4ga2l0YSBidXR1aCBjb250YWluZXIsIFxyXG5jb250YWluZXIgdGVyc2VidXQgbmFudGlueWEgYmVyaXNpIG5hbWEgbWFrYW5hbiArIGhhcmdhLCBnYW1iYXIgZGFuIHRleHQgZGVza3JpcHNpIG1ha2FuYW4vbWludW1hblxyXG5zZWhpbmdnYSBraXRhIGJ1dHVoIFwiZGl2XCIgc2ViYWdhaSBjb250YWluZXJcclxuXCJoM1wiIHNlYmFnYWkgbmFtYSBtYWthbmFuICsgaGFyZ2EsIFwidXJsIGltYWdlXCIgc2ViYWdhaSBnYW1iYXIgZGFuIFwicFwiIHNlYmFnYWkgZGVza3JpcHNpIHRleHRcclxuKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZW51QWN0aXZlKCkge1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnRDb250YWluZXIpO1xyXG4gIG1lbnVDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250ZW50SW5uZXIpO1xyXG4gIG1lbnVDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XHJcbiAgLyogXHJcbiAgRnVuY3Rpb24gdG8gYWRkIGZvb2RzL2RyaW5rcyB0byBzdWJtZW51IGNvbnRhaW5lclxyXG4gIC4uLnBhcmVudCBzZWJhZ2FpIGNvbnRhaW5lciBkYW4gY2hpbGRyZW4gc2ViYWdhaSBlbGVtZW50IGFwYSB5YW5nIG1hdSBraXRhIG1hc3Vra2FuIGtlIGNvbnRhaW5lciBpdHVcclxuICAuLi5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgYmVyYXJ0aSBcInNldGlhcCBjaGlsZHJlbiBtYWthIGRpYmVybGFrdWthbiBmdW5jdGlvbiBiZXJpa3V0Li4uXCJcclxuICAqL1xyXG4gIGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKHBhcmVudCwgY2hpbGRyZW4pIHtcclxuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gRm9vZHMgYW5kIERyaW5rcyBmdW5jdGlvblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUV2ZXJ5dGhpbmdJbnNpZGVGb29kcyhmRE5hbWUsIGZESW1hZ2UsIGZEVGV4dCkge1xyXG4gICAgY29uc3QgZm9vZERyaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGZvb2REcmlua05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBjb25zdCBmb29kRHJpbmtJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBjb25zdCBmb29kRHJpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBmb29kRHJpbmtDb250YWluZXIuY2xhc3NOYW1lID0gXCJmb29kLWRyaW5rX2NvbnRhaW5lclwiO1xyXG4gICAgZm9vZERyaW5rTmFtZS5jbGFzc05hbWUgPSBcImZvb2QtZHJpbmtfbmFtZVwiO1xyXG4gICAgZm9vZERyaW5rTmFtZS50ZXh0Q29udGVudCA9IGZETmFtZTtcclxuICAgIGZvb2REcmlua0ltYWdlLmNsYXNzTmFtZSA9IFwiZm9vZC1kcmlua19pbWFnZVwiO1xyXG4gICAgZm9vZERyaW5rSW1hZ2Uuc3JjID0gZkRJbWFnZTtcclxuICAgIGZvb2REcmlua1RleHQudGV4dENvbnRlbnQgPSBmRFRleHQ7XHJcbiAgICBmb29kRHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZERyaW5rTmFtZSk7XHJcbiAgICBmb29kRHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZERyaW5rSW1hZ2UpO1xyXG4gICAgZm9vZERyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2REcmlua1RleHQpO1xyXG4gICAgcmV0dXJuIGZvb2REcmlua0NvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8vIEZvb2RzXHJcbiAgbWVudUNvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChzdWJNZW51Rm9vZHMpO1xyXG4gIGNvbnN0IGZvb2RJdGVtcyA9IFtcclxuICAgIGNyZWF0ZUV2ZXJ5dGhpbmdJbnNpZGVGb29kcyhcclxuICAgICAgXCJOYXNpIEdvcmVuZyBUZWx1ciBDZXBsb2sgLSBScDE1a1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmljZWluZm8uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzA5L25hc2ktZ29yZW5nLXJlY2lwZS5qcGdcIixcclxuICAgICAgXCJOYXNpIGdvcmVuZyBpcyBhIFNvdXRoZWFzdCBBc2lhbiBmcmllZCByaWNlIGRpc2gsIHVzdWFsbHkgY29va2VkIHdpdGggcGllY2VzIG9mIG1lYXQgYW5kIHZlZ2V0YWJsZXMuXCJcclxuICAgICksXHJcbiAgICBjcmVhdGVFdmVyeXRoaW5nSW5zaWRlRm9vZHMoXHJcbiAgICAgIFwiTmFzaSBHb3JlbmcgQXlhbSBHZXByZWsgLSBScDIwa1wiLFxyXG4gICAgICBcImh0dHBzOi8vaW1nLmt1cmlvLm5ldHdvcmsvUWNPb3V6OHdQZ2o0VTQ2d3BpLTZ0dGZBRGd3PS8zMjB4MzIwL2ZpbHRlcnM6cXVhbGl0eSg4MCkvaHR0cHM6Ly9rdXJpby1pbWcua3VyaW9hcHBzLmNvbS8yMS8xMi8xNy9kNmIwMTI1ZC1jYmE5LTQxNGEtOTlhYS0zNWNiM2NmZDgzZmMuanBlXCIsXHJcbiAgICAgIFwiRnJpZWQgcmljZSB3aXRoIGNyaXNweSBmcmllZCBjaGlja2VuIHRvcHBlZCB3aXRoIGNoaWxpIHNhdWNlLlwiXHJcbiAgICApLFxyXG4gICAgY3JlYXRlRXZlcnl0aGluZ0luc2lkZUZvb2RzKFxyXG4gICAgICBcIk5hc2kgR29yZW5nIE1hd3V0IC0gUnAxNWtcIixcclxuICAgICAgXCJodHRwczovL3Rhc3R5bmVzaWEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEyL1Jlc2VwLU5hc2ktR29yZW5nLU1hd3V0LmpwZ1wiLFxyXG4gICAgICBcIkZyaWVkIHJpY2UgbWl4ZWQgd2l0aCBub29kbGVzIG9yIGZyaWVkIHZlcm1pY2VsbGkuIENvbXBsZXRlIHdpdGggdmVnZXRhYmxlIHRvcHBpbmdzIGFuZCBzaHJlZGRlZCBjaGlja2VuL3NhdXNhZ2UvbWVhdGJhbGxzLlwiXHJcbiAgICApLFxyXG4gIF07XHJcblxyXG4gIGFwcGVuZENoaWxkcmVuKHN1Yk1lbnVGb29kcywgZm9vZEl0ZW1zKTtcclxuXHJcbiAgLy8gRHJpbmtzXHJcbiAgbWVudUNvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChzdWJNZW51RHJpbmtzKTtcclxuICBjb25zdCBkcmlua0l0ZW1zID0gW1xyXG4gICAgY3JlYXRlRXZlcnl0aGluZ0luc2lkZUZvb2RzKFxyXG4gICAgICBcIkp1cyBCdWFoIE1hbmdnYSAtIFJwMTBrXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9jZG4wLXByb2R1Y3Rpb24taW1hZ2VzLWtseS5ha2FtYWl6ZWQubmV0LzRxTFRhWGRNbjBqZmc5dFY2WkpKcC1TS0taMD0vMjYxeDA6OTI4eDY2Ny8xMjAweDEyMDAvZmlsdGVyczpxdWFsaXR5KDc1KTpzdHJpcF9pY2MoKTpmb3JtYXQod2VicCkva2x5LW1lZGlhLXByb2R1Y3Rpb24vbWVkaWFzLzMyNjc1NDIvb3JpZ2luYWwvMDU1Njg4MDAwXzE2MDI2NzQwOTMtc2h1dHRlcnN0b2NrXzEwNDUzOTc5MjMuanBnXCIsXHJcbiAgICAgIFwiTWFuZ28ganVpY2UgaXMgbWFkZSBmcm9tIHJpcGUgbWFuZ29lcy5cIlxyXG4gICAgKSxcclxuICAgIGNyZWF0ZUV2ZXJ5dGhpbmdJbnNpZGVGb29kcyhcclxuICAgICAgXCJUZWggU3VzdSAtIFJwMTBrXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9pLmdvamVrYXBpLmNvbS9kYXJrcm9vbS9nb2Zvb2QtaW5kb25lc2lhL3YyL2ltYWdlcy91cGxvYWRzL2MwNmViM2NmLWYxZTEtNGUxMC04Y2EwLWQ4MDk5NTUwNmUzZV9Hby1CaXpfMjAyMDA5MzBfMTUyNzQ1LmpwZWdcIixcclxuICAgICAgXCJBIG1peHR1cmUgb2YgdGVhIGFuZCBtaWxrIGluIGEgY2VydGFpbiBjb21wb3NpdGlvbi4gTWlsayB0ZWEgaXMgYSBtb2Rlcm4gZHJpbmsgdGhhdCBpcyB2ZXJ5IHBvcHVsYXIgYW5kIHRoaXMgbWlsayB0ZWEgaGFzIGl0cyBvd24gY2hhcmFjdGVyaXN0aWNzIGluIGl0cyBtYW51ZmFjdHVyZSwgZXNwZWNpYWxseSBpbiBBc2lhLlwiXHJcbiAgICApLFxyXG4gICAgY3JlYXRlRXZlcnl0aGluZ0luc2lkZUZvb2RzKFxyXG4gICAgICBcIkVzIFRlaCAtIFJwNWtcIixcclxuICAgICAgXCJodHRwczovL2JlYmVrYmtiLmNvbS9zdG9yYWdlLzIwMjAvMDIvZXMtdGVoLW1hbmlzLmpwZ1wiLFxyXG4gICAgICBcIkEgdGVhIGRyaW5rIHRoYXQgaXMgc2VydmVkIGNvbGQgd2l0aCBpY2UgY3ViZXMuXCJcclxuICAgICksXHJcbiAgXTtcclxuXHJcbiAgYXBwZW5kQ2hpbGRyZW4oc3ViTWVudURyaW5rcywgZHJpbmtJdGVtcyk7XHJcblxyXG4gIC8vIFNuYWNrc1xyXG4gIG1lbnVDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQoc3ViTWVudVNuYWNrcyk7XHJcbiAgY29uc3Qgc25hY2tJdGVtcyA9IFtcclxuICAgIGNyZWF0ZUV2ZXJ5dGhpbmdJbnNpZGVGb29kcyhcclxuICAgICAgXCJVc3VzIEtyaXNwaSAtIFJwNWtcIixcclxuICAgICAgXCJodHRwczovL3BheGVsbWFya2V0LmNvL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzAxL1NjcmVlbnNob3RfMjAyMjAxMDlfMTczMTE1LnBuZ1wiLFxyXG4gICAgICBcIlVzdXMgS3Jpc3BpIGlzIGNoaXBzIG1hZGUgZnJvbSBxdWFsaXR5IHNlbGVjdGVkIHJhdyBjaGlja2VuIGludGVzdGluZXMuIFRoZXNlIGNoaXBzIGFyZSBwcm9jZXNzZWQgdXNpbmcgYW4gZXh0cmFvcmRpbmFyeSB0ZWNobmlxdWUgdGhhdCBpbnZvbHZlcyBhIHZhcmlldHkgb2YgJ0luZG9uZXNpYW4gc3BlY2lhbCcgc3BpY2VzIHRvIHByb2R1Y2UgY2hpcHMgdGhhdCBhcmUgc2F2b3J5LCBkZWxpY2lvdXMsIHNvZnQsIGNydW5jaHkgbGlrZSBuZXZlciBiZWZvcmUuXCJcclxuICAgICksXHJcbiAgICBjcmVhdGVFdmVyeXRoaW5nSW5zaWRlRm9vZHMoXHJcbiAgICAgIFwiS3J1cHVrIEt1bGl0IC0gUnA1a1wiLFxyXG4gICAgICBcImh0dHBzOi8vY2RuMC1wcm9kdWN0aW9uLWltYWdlcy1rbHkuYWthbWFpemVkLm5ldC9zemNUM1RSMmdCby1EaW1VTEFhdUpheno2R0k9LzI2MXgwOjQ0MjJ4NDE2MS8xMjAweDEyMDAvZmlsdGVyczpxdWFsaXR5KDc1KTpzdHJpcF9pY2MoKTpmb3JtYXQod2VicCkva2x5LW1lZGlhLXByb2R1Y3Rpb24vbWVkaWFzLzM3NjQ4MzUvb3JpZ2luYWwvMDgwMDM5OTAwXzE2NDAwNTgxMTYtc2h1dHRlcnN0b2NrXzE4MjA3ODcxOTcuanBnXCIsXHJcbiAgICAgIFwiS3J1cHVrIGt1bGl0IGlzIGEgdHJhZGl0aW9uYWwgSW5kb25lc2lhbiBjYXR0bGUgc2tpbiBrcnVwdWsuIFRyYWRpdGlvbmFsbHkgaXQgaXMgbWFkZSBmcm9tIHRoZSBzb2Z0IGlubmVyIHNraW4gb2YgY2F0dGxlLCBkaWNlZCwgYW5kIHN1bi1kcmllZCB1bnRpbCBpdCBoYXJkZW5zIGFuZCBsb3NlcyBtb3N0IG9mIGl0cyB3YXRlciBjb250ZW50LlwiXHJcbiAgICApLFxyXG4gIF07XHJcblxyXG4gIGFwcGVuZENoaWxkcmVuKHN1Yk1lbnVTbmFja3MsIHNuYWNrSXRlbXMpO1xyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3JlZ2F0dGlhLWJvbGQtd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vcmVnYXR0aWEtYm9sZC13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIvc3JjL3Jlc3RhdXJhbnQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9kaXBwZXIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi93ZW5keS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL21hYmVsLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZ2F0dGlhXFxcIjtcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZDogIzE4MTcxYztcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xcclxcbi5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzE4MTcxYztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfbGlzdF9pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9saXN0X2l0ZW06aG92ZXIge1xcclxcbiAgY29sb3I6IG9yYW5nZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9saXN0X2l0ZW0tYWN0aXZlIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGVudCBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xcclxcbi5jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQ6IGdyYXk7XFxyXFxuICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbm5lciBDb250ZW50IGNvbnRhaW5lciAqL1xcclxcbi5jb250ZW50X2NvbnRhaW5lcl9pbm5lciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMTgxNzFjO1xcclxcbiAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogNTAwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDsgLyogSW1wb3J0YW50ICovXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRfaGVhZGVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVnYXR0aWFcXFwiO1xcclxcbiAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudF9tYWluIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRfbWFpbiBoMyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZ2F0dGlhXFxcIjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGVudCBjb250YWluZXIgZm9yIGhvbWUgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cXHJcXG5cXHJcXG4uaG9tZV9jb250ZW50X2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZV9jb250YWluZXJfaW5uZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxyXFxuICBncmlkLWF1dG8tcm93czogbWlubWF4KDE1MHB4LCBhdXRvKTtcXHJcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxyXFxuICAgIFxcXCJjb250ZW50MSBpbWFnZTFcXFwiXFxyXFxuICAgIFxcXCJjb250ZW50MiBpbWFnZTFcXFwiXFxyXFxuICAgIFxcXCJsb2NhdGlvbiBsb2NhdGlvblxcXCI7XFxyXFxufVxcclxcblxcclxcbiNob21lX2hlYWRlciB7XFxyXFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVfaW50cm8ge1xcclxcbiAgZ3JpZC1hcmVhOiBjb250ZW50MTtcXHJcXG59XFxyXFxuXFxyXFxuI2ltYWdlX29uZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGdyaWQtYXJlYTogaW1hZ2UxO1xcclxcbiAgbWluLXdpZHRoOiA1MDBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZV9ob3VycyB7XFxyXFxuICBncmlkLWFyZWE6IGNvbnRlbnQyO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZV9sb2NhdGlvbiB7XFxyXFxuICBncmlkLWFyZWE6IGxvY2F0aW9uO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIENvbnRlbnQgY29udGFpbmVyIENvbnRlbnQgZm9yIG1lbnUgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cXHJcXG4ubWVudV9jb250ZW50X2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9jb250ZW50X3N1Ym1lbnVfY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGdyYXk7XFxyXFxuICBtaW4td2lkdGg6IDQwMHB4O1xcclxcbiAgbWluLWhlaWdodDogNDAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9jb250ZW50X3N1Ym1lbnVfY29udGFpbmVyIGgzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVnYXR0aWFcXFwiO1xcclxcbiAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1kcmlua19jb250YWluZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogIzE4MTcxYztcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb29kLWRyaW5rX25hbWUge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWdhdHRpYVxcXCI7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb29kLWRyaW5rX2ltYWdlIHtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGVudCBjb250YWluZXIgQ29udGVudCBmb3IgY29udGFjdCBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xcclxcbi5jb250YWN0X2NvbnRlbnRfY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qICNjb250YWN0X2NvbnRlbnRfaW5uZXIge1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uY29udGFjdF9jb250ZW50X3Byb2ZpbGVfY29udGFpbmVyIHtcXHJcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RfY29udGVudF9wcm9maWxlX2NhcmQge1xcclxcbiAgYmFja2dyb3VuZDogZ3JheTtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0X2NvbnRlbnRfcHJvZmlsZV9jYXJkIHAge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdF9jb250ZW50X3Byb2ZpbGVfY2FyZF9pbWFnZSB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdF9jb250ZW50X3Byb2ZpbGVfY2FyZF9uYW1lIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVnYXR0aWFcXFwiO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgbWFyZ2luOiAxMHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9maWxlX2RpcHBlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2ZpbGVfd2VuZHkge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbiNwcm9maWxlX21hYmVsIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xcclxcbi5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzE4MTcxYztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogNDBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX2xpc3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX2xpc3QgbGkge1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX2xpc3RfaXRlbSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDExcHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX2xpc3RfaXRlbTpob3ZlciB7XFxyXFxuICBjb2xvcjogb3JhbmdlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNZWRpYSBxdWVyaWVzKi9cXHJcXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgI2hvbWVfY29udGFpbmVyX2lubmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaG9tZV9oZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDQ1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaW1hZ2Vfb25lIHtcXHJcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXHJcXG4gICAgbWluLWhlaWdodDogNjAwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9vdGVyX2xpc3RfaXRlbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixvSEFBNkc7QUFDL0c7O0FBSUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQSxrR0FBa0c7QUFDbEc7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUEsbUdBQW1HO0FBQ25HO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGFBQWEsRUFBRSxjQUFjO0VBQzdCLHNC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QUNmLGdCQUFnQjtFQUNsQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWdhdHRpYVxcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiLi9yZWdhdHRpYS1ib2xkLXdlYmZvbnQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiLi9yZWdhdHRpYS1ib2xkLXdlYmZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQ6ICMxODE3MWM7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMxODE3MWM7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX2xpc3RfaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfbGlzdF9pdGVtOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBvcmFuZ2U7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfbGlzdF9pdGVtLWFjdGl2ZSB7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIENvbnRlbnQgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cXHJcXG4uY29udGVudCB7XFxyXFxuICBiYWNrZ3JvdW5kOiBncmF5O1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSW5uZXIgQ29udGVudCBjb250YWluZXIgKi9cXHJcXG4uY29udGVudF9jb250YWluZXJfaW5uZXIge1xcclxcbiAgYmFja2dyb3VuZDogIzE4MTcxYztcXHJcXG4gIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7IC8qIEltcG9ydGFudCAqL1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50X2hlYWRlciB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJlZ2F0dGlhXFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRfbWFpbiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50X21haW4gaDMge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWdhdHRpYVxcXCI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIENvbnRlbnQgY29udGFpbmVyIGZvciBob21lIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fICovXFxyXFxuXFxyXFxuLmhvbWVfY29udGVudF9jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2hvbWVfY29udGFpbmVyX2lubmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxNTBweCwgYXV0byk7XFxyXFxuICBncmlkLWdhcDogMjBweDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgICBcXFwiY29udGVudDEgaW1hZ2UxXFxcIlxcclxcbiAgICBcXFwiY29udGVudDIgaW1hZ2UxXFxcIlxcclxcbiAgICBcXFwibG9jYXRpb24gbG9jYXRpb25cXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZV9oZWFkZXIge1xcclxcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxufVxcclxcblxcclxcbiNob21lX2ludHJvIHtcXHJcXG4gIGdyaWQtYXJlYTogY29udGVudDE7XFxyXFxufVxcclxcblxcclxcbiNpbWFnZV9vbmUge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvcmVzdGF1cmFudC5qcGcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGdyaWQtYXJlYTogaW1hZ2UxO1xcclxcbiAgbWluLXdpZHRoOiA1MDBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZV9ob3VycyB7XFxyXFxuICBncmlkLWFyZWE6IGNvbnRlbnQyO1xcclxcbn1cXHJcXG5cXHJcXG4jaG9tZV9sb2NhdGlvbiB7XFxyXFxuICBncmlkLWFyZWE6IGxvY2F0aW9uO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIENvbnRlbnQgY29udGFpbmVyIENvbnRlbnQgZm9yIG1lbnUgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cXHJcXG4ubWVudV9jb250ZW50X2NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9jb250ZW50X3N1Ym1lbnVfY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IGdyYXk7XFxyXFxuICBtaW4td2lkdGg6IDQwMHB4O1xcclxcbiAgbWluLWhlaWdodDogNDAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9jb250ZW50X3N1Ym1lbnVfY29udGFpbmVyIGgzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVnYXR0aWFcXFwiO1xcclxcbiAgZm9udC1zaXplOiAzNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1kcmlua19jb250YWluZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogIzE4MTcxYztcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb29kLWRyaW5rX25hbWUge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSZWdhdHRpYVxcXCI7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb29kLWRyaW5rX2ltYWdlIHtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29udGVudCBjb250YWluZXIgQ29udGVudCBmb3IgY29udGFjdCBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyAqL1xcclxcbi5jb250YWN0X2NvbnRlbnRfY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qICNjb250YWN0X2NvbnRlbnRfaW5uZXIge1xcclxcbn0gKi9cXHJcXG5cXHJcXG4uY29udGFjdF9jb250ZW50X3Byb2ZpbGVfY29udGFpbmVyIHtcXHJcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RfY29udGVudF9wcm9maWxlX2NhcmQge1xcclxcbiAgYmFja2dyb3VuZDogZ3JheTtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0X2NvbnRlbnRfcHJvZmlsZV9jYXJkIHAge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdF9jb250ZW50X3Byb2ZpbGVfY2FyZF9pbWFnZSB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdF9jb250ZW50X3Byb2ZpbGVfY2FyZF9uYW1lIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmVnYXR0aWFcXFwiO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgbWFyZ2luOiAxMHg7XFxyXFxufVxcclxcblxcclxcbiNwcm9maWxlX2RpcHBlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9kaXBwZXIucG5nKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbiNwcm9maWxlX3dlbmR5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguL3dlbmR5LnBuZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZmlsZV9tYWJlbCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9tYWJlbC5wbmcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb290ZXIgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gKi9cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMxODE3MWM7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9saXN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9saXN0IGxpIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9saXN0X2l0ZW0ge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl9saXN0X2l0ZW06aG92ZXIge1xcclxcbiAgY29sb3I6IG9yYW5nZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVkaWEgcXVlcmllcyovXFxyXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICNob21lX2NvbnRhaW5lcl9pbm5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hvbWVfaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2ltYWdlX29uZSB7XFxyXFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvb3Rlcl9saXN0X2l0ZW0ge1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL1xcdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9cXHUwMDAwI0phdmFTY3JpcHQvMi4gVE9QLzQuIFJlc3RhdXJhbnQgUGFnZS9SZXN0YXVyYW50X1BhZ2Uvc3JjL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL1xcdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9cXHUwMDAwI0phdmFTY3JpcHQvMi4gVE9QLzQuIFJlc3RhdXJhbnQgUGFnZS9SZXN0YXVyYW50X1BhZ2Uvc3JjL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbXBvcnRcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgaG9tZUFjdGl2ZSB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgbWVudUFjdGl2ZSB9IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IHsgY29udGFjdEFjdGl2ZSB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuXHJcbi8vIEhlYWRlciBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG5jb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxubWFpbkhlYWRlci5jbGFzc05hbWUgPSBcImhlYWRlclwiO1xyXG5jb25zdCBoZWFkZXJOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG5jb25zdCBoZWFkZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5oZWFkZXJMaXN0LmNsYXNzTmFtZSA9IFwiaGVhZGVyX2xpc3RcIjtcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkhlYWRlcik7XHJcbm1haW5IZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTmF2KTtcclxuaGVhZGVyTmF2LmFwcGVuZENoaWxkKGhlYWRlckxpc3QpO1xyXG5cclxuLyogRnVuY3Rpb24gdG8gY3JlYXRlIGxpc3Qgd2l0aCBjbGFzcywgaWQgYW5kIHRleHQgKi9cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyTGlzdChsaUNsYXNzLCBsaUlkLCBsaVRleHQpIHtcclxuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBsaS5jbGFzc05hbWUgPSBsaUNsYXNzO1xyXG4gIGxpLmlkID0gbGlJZDtcclxuICBsaS50ZXh0Q29udGVudCA9IGxpVGV4dDtcclxuICByZXR1cm4gbGk7XHJcbn1cclxuXHJcbi8qIEZ1bmN0aW9uIHRvIGFkZCBsaXN0IHRvIGhlYWRlciBvciBmb290ZXIgdWwgKi9cclxuLy8uLi4ubW92ZSBiZWxvd1xyXG5cclxuY29uc3QgSGVhZGVyTGlzdEl0ZW1zID0gW1xyXG4gIGNyZWF0ZUhlYWRlckxpc3QoXCJoZWFkZXJfbGlzdF9pdGVtXCIsIFwiaG9tZVwiLCBcIkhvbWVcIiksXHJcbiAgY3JlYXRlSGVhZGVyTGlzdChcImhlYWRlcl9saXN0X2l0ZW1cIiwgXCJtZW51XCIsIFwiTWVudVwiKSxcclxuICBjcmVhdGVIZWFkZXJMaXN0KFwiaGVhZGVyX2xpc3RfaXRlbVwiLCBcImNvbnRhY3RcIiwgXCJDb250YWN0XCIpLFxyXG5dO1xyXG5cclxuYXBwZW5kQ2hpbGRyZW4oaGVhZGVyTGlzdCwgSGVhZGVyTGlzdEl0ZW1zKTtcclxuXHJcbi8qIEZ1bmN0aW9uIHN3aXRjaGluZyBoZWFkZXIgbGlzdCB0YWIgKi9cclxuXHJcbmNvbnN0IGhlYWRlckJ0biA9IGhlYWRlck5hdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaGVhZGVyX2xpc3RfaXRlbVwiKTtcclxuY29uc29sZS5sb2coaGVhZGVyQnRuKTtcclxuXHJcbi8vIExvb3AgdGhyb3VnaCB0aGUgYnV0dG9ucyBhbmQgYWRkIHRoZSBhY3RpdmUgY2xhc3MgdG8gdGhlIGN1cnJlbnQvY2xpY2tlZCBidXR0b25cclxuZm9yICh2YXIgaSA9IDA7IGkgPCBoZWFkZXJCdG4ubGVuZ3RoOyBpKyspIHtcclxuICBoZWFkZXJCdG5baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaGVhZGVyX2xpc3RfaXRlbS1hY3RpdmVcIik7XHJcblxyXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gYWN0aXZlIGNsYXNzLCByZXBsYWNlIFwiaGVhZGVyX2xpc3RfaXRlbS1hY3RpdmVcIiB0byBcIiBcIiAobm90aGluZylcclxuICAgIGlmIChjdXJyZW50Lmxlbmd0aCA+IDApIHtcclxuICAgICAgY3VycmVudFswXS5jbGFzc05hbWUgPSBjdXJyZW50WzBdLmNsYXNzTmFtZS5yZXBsYWNlKFwiaGVhZGVyX2xpc3RfaXRlbS1hY3RpdmVcIiwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHRoZSBhY3RpdmUgY2xhc3MgdG8gdGhlIGN1cnJlbnQvY2xpY2tlZCBidXR0b25cclxuICAgIHRoaXMuY2xhc3NOYW1lICs9IFwiIGhlYWRlcl9saXN0X2l0ZW0tYWN0aXZlXCI7XHJcblxyXG4gICAgLy8gamlrYSBob21lIGJ1dHRvbiBhY3RpdmUsIG1ha2EgYWRkIGhvbWVfY29udGVudF9jb250YWluZXItYWN0aXZlXHJcbiAgICBpZiAodGhpcy5pZCA9PSBcImhvbWVcIikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImhvbWUgc3VjY2VzZnVseSBjYWxsZWRcIik7XHJcbiAgICAgIGhvbWVDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIG1lbnVDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgY29udGFjdENvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAvL2hvbWVBY3RpdmUoKTtcclxuICAgICAgLy8gcGFuZ2dpbCBmdW5jdGlvbiBob21lXHJcbiAgICAgIC8vaG9tZUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxva1wiO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlkID09IFwibWVudVwiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWVudSBzdWNjZXNmdWx5IGNhbGxlZFwiKTtcclxuICAgICAgaG9tZUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBtZW51Q29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBjb250YWN0Q29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIC8vbWVudUFjdGl2ZSgpO1xyXG4gICAgICAvLyBwYW5nZ2lsIGZ1bmN0aW9uIG1lbnVcclxuICAgICAgLy9tZW51Q29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9rXCI7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaWQgPT0gXCJjb250YWN0XCIpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJjb250YWN0IHN1Y2Nlc2Z1bHkgY2FsbGVkXCIpO1xyXG4gICAgICBob21lQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIG1lbnVDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgY29udGFjdENvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICAgIC8vY29udGFjdEFjdGl2ZSgpO1xyXG4gICAgICAvLyBwYW5nZ2lsIGZ1bmN0aW9uIGNvbnRhY3RcclxuICAgICAgLy9jb250YWN0Q29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9rXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGVzdFxyXG4gICAgLy9jb25zb2xlLmxvZyhjdXJyZW50Lmxlbmd0aCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuaWQpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhob21lQ29udGVudCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIENvbnRlbnQgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnRlbnQuY2xhc3NOYW1lID0gXCJjb250ZW50XCI7XHJcbmNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblxyXG4vLyBwYW5nZ2lsIGZ1bmdzaSBpbmkgZHVsdVxyXG5ob21lQWN0aXZlKCk7XHJcbm1lbnVBY3RpdmUoKTtcclxuY29udGFjdEFjdGl2ZSgpO1xyXG5cclxuLy8gc2V0ZWxhaCBmdW5nc2kgZGlwYW5nZ2lsIG1ha2EgbWFzaW5nLW1hc2luZyBlbGVtZW4ga29udGVuIGFrYW4gbXVuY3VsXHJcbmNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lX2NvbnRlbnRfY29udGFpbmVyXCIpO1xyXG5jb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudV9jb250ZW50X2NvbnRhaW5lclwiKTtcclxuY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RfY29udGVudF9jb250YWluZXJcIik7XHJcblxyXG4vLyBiYXJ1IGtpdGEgdGV0YXBrYW4gbWF1IGRpbXVuY3Vsa2FuIGFwYSB0aWRha1xyXG5ob21lQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5tZW51Q29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbmNvbnRhY3RDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbi8vIEZvb3RlciBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG5jb25zdCBtYWluRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxubWFpbkZvb3Rlci5jbGFzc05hbWUgPSBcImZvb3RlclwiO1xyXG5cclxuY29uc3QgZm9vdGVyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuZm9vdGVyTGlzdC5jbGFzc05hbWUgPSBcImZvb3Rlcl9saXN0XCI7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Gb290ZXIpO1xyXG5tYWluRm9vdGVyLmFwcGVuZENoaWxkKGZvb3Rlckxpc3QpO1xyXG5cclxuLyogQ3JlYXRlIGxpc3QgY29udGFpbmluZyBhbmNob3Iod2l0aCBjbGFzcywgaHJlZiBhbmQgdGV4dCkgKi9cclxuZnVuY3Rpb24gY3JlYXRlQW5jaG9ySW5zaWRlTGlzdChhQ2xhc3MsIGFIcmVmLCBhVGV4dCkge1xyXG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGFuY2hvci5jbGFzc05hbWUgPSBhQ2xhc3M7XHJcbiAgYW5jaG9yLmhyZWYgPSBhSHJlZjtcclxuICBhbmNob3IudGV4dENvbnRlbnQgPSBhVGV4dDtcclxuICBsaS5hcHBlbmRDaGlsZChhbmNob3IpO1xyXG4gIHJldHVybiBsaTtcclxufVxyXG5cclxuLyogRnVuY3Rpb24gdG8gYWRkIGxpc3QgdG8gaGVhZGVyIG9yIGZvb3RlciB1bCAqL1xyXG5mdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihwYXJlbnQsIGNoaWxkcmVuKSB7XHJcbiAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qIENhbGwgY3JlYXRlQW5jaG9ySW5zaWRlTGlzdCBhYm92ZSAqL1xyXG5jb25zdCBmb290ZXJMaXN0SXRlbXMgPSBbXHJcbiAgY3JlYXRlQW5jaG9ySW5zaWRlTGlzdChcclxuICAgIFwiZm9vdGVyX2xpc3RfaXRlbVwiLFxyXG4gICAgXCJodHRwczovL2JlZm9udHMuY29tL3JlZ2F0dGlhLXR5cGVmYWNlLmh0bWxcIixcclxuICAgIFwiUmVnYXR0aWEgVHlwZWZhY2UgZm9udCBkZXNpZ25lZCBieSBCcnVubyBTw6FleiBMw7NwZXogLSBiZWZvbnRzLmNvbVwiXHJcbiAgKSxcclxuICBjcmVhdGVBbmNob3JJbnNpZGVMaXN0KFxyXG4gICAgXCJmb290ZXJfbGlzdF9pdGVtXCIsXHJcbiAgICBcImh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9zcGVjaW1lbi9Sb2JvdG9cIixcclxuICAgIFwiUm9ib3RvIGZvbnQgZGVzaWduZWQgYnkgQ2hyaXN0aWFuIFJvYmVydHNvbiAtIGZvbnRzLmdvb2dsZS5jb21cIlxyXG4gICksXHJcbiAgY3JlYXRlQW5jaG9ySW5zaWRlTGlzdChcclxuICAgIFwiZm9vdGVyX2xpc3RfaXRlbVwiLFxyXG4gICAgXCJodHRwczovL2RyaWJiYmxlLmNvbS9zaG90cy8xNzMxOTgzMC1TdGFkc2hhdmVuLUJyZXdlcnktUmVzdGF1cmFudC1wYWdlXCIsXHJcbiAgICBcIkRlc2lnbiBpbnNwaXJlZCBieSBHaWwgLSBkcmliYmJsZS5jb21cIlxyXG4gICksXHJcbl07XHJcblxyXG4vKiBDYWxsIGFwcGVuZENoaWxkcmVuIGFib3ZlICovXHJcbmFwcGVuZENoaWxkcmVuKGZvb3Rlckxpc3QsIGZvb3Rlckxpc3RJdGVtcyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==