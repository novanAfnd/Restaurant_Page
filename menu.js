/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/menu.js ***!
  \**************************************************************************************/
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
      "Nasi Goreng - Rp15k",
      "https://images.tokopedia.net/img/JFrBQq/2022/8/9/886e7849-85fb-42c0-95dc-0a1839234615.jpg",
      "Nasi goreng adalah makanan berupa nasi yang digoreng dan diaduk dalam minyak goreng atau margarin, biasanya ditambah bahan-bahan lain seperti telur, daging, seafood, atau sayuran. "
    ),
  ];

  appendChildren(subMenuFoods, foodItems);

  // Drinks
  menuContentInner.appendChild(subMenuDrinks);
  const drinkItems = [
    createEverythingInsideFoods(
      "Jus Buah Mangga - Rp10k",
      "https://cdn0-production-images-kly.akamaized.net/4qLTaXdMn0jfg9tV6ZJJp-SKKZ0=/261x0:928x667/1200x1200/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3267542/original/055688000_1602674093-shutterstock_1045397923.jpg",
      "Nasi goreng adalah makanan berupa nasi yang digoreng dan diaduk dalam minyak goreng atau margarin, biasanya ditambah bahan-bahan lain seperti telur, daging, seafood, atau sayuran. "
    ),
  ];

  appendChildren(subMenuDrinks, drinkItems);

  // Snacks
  menuContentInner.appendChild(subMenuSnacks);
  const snackItems = [
    createEverythingInsideFoods(
      "Usus Krispi - Rp5k",
      "https://paxelmarket.co/wp-content/uploads/2022/01/Screenshot_20220109_173115.png",
      "Nasi goreng adalah makanan berupa nasi yang digoreng dan diaduk dalam minyak goreng atau margarin, biasanya ditambah bahan-bahan lain seperti telur, daging, seafood, atau sayuran. "
    ),
  ];

  appendChildren(subMenuSnacks, snackItems);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgbWVudUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tZW51Q29udGVudENvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1lbnVfY29udGVudF9jb250YWluZXJcIjtcclxuXHJcbmNvbnN0IG1lbnVDb250ZW50SW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tZW51Q29udGVudElubmVyLmNsYXNzTmFtZSA9IFwiY29udGVudF9jb250YWluZXJfaW5uZXJcIjtcclxuXHJcbi8vIEhlYWRlclxyXG5jb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxubWVudUhlYWRlci5jbGFzc05hbWUgPSBcImNvbnRlbnRfaGVhZGVyXCI7XHJcbm1lbnVIZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuXHJcbi8vIFN1Ym1lbnUgQ29udGFpbmVyIChDb250YWluZXIgZm9yIGVhY2ggZm9vZCB0eXBlcylcclxuY29uc3Qgc3ViTWVudUZvb2RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuc3ViTWVudUZvb2RzLmNsYXNzTmFtZSA9IFwibWVudV9jb250ZW50X3N1Ym1lbnVfY29udGFpbmVyXCI7XHJcbnN1Yk1lbnVGb29kcy5pZCA9IFwic3VibWVudV9mb29kc1wiO1xyXG5jb25zdCBzdWJNZW51RHJpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuc3ViTWVudURyaW5rcy5jbGFzc05hbWUgPSBcIm1lbnVfY29udGVudF9zdWJtZW51X2NvbnRhaW5lclwiO1xyXG5zdWJNZW51RHJpbmtzLmlkID0gXCJzdWJtZW51X2RyaW5rc1wiO1xyXG5jb25zdCBzdWJNZW51U25hY2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuc3ViTWVudVNuYWNrcy5jbGFzc05hbWUgPSBcIm1lbnVfY29udGVudF9zdWJtZW51X2NvbnRhaW5lclwiO1xyXG5zdWJNZW51U25hY2tzLmlkID0gXCJzdWJtZW51X3NuYWNrc1wiO1xyXG5cclxuLy8gU3VibWVudSBIZWFkZXJcclxuY29uc3Qgc3ViTWVudUZvb2RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG5zdWJNZW51Rm9vZHNIZWFkZXIudGV4dENvbnRlbnQgPSBcIkZvb2RzXCI7XHJcbnN1Yk1lbnVGb29kcy5hcHBlbmRDaGlsZChzdWJNZW51Rm9vZHNIZWFkZXIpO1xyXG5jb25zdCBzdWJNZW51RHJpbmtzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG5zdWJNZW51RHJpbmtzSGVhZGVyLnRleHRDb250ZW50ID0gXCJEcmlua3NcIjtcclxuc3ViTWVudURyaW5rcy5hcHBlbmRDaGlsZChzdWJNZW51RHJpbmtzSGVhZGVyKTtcclxuY29uc3Qgc3ViTWVudVNuYWNrc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuc3ViTWVudVNuYWNrc0hlYWRlci50ZXh0Q29udGVudCA9IFwiU25hY2tzXCI7XHJcbnN1Yk1lbnVTbmFja3MuYXBwZW5kQ2hpbGQoc3ViTWVudVNuYWNrc0hlYWRlcik7XHJcblxyXG4vKlxyXG5VbnR1ayBzYXR1IG1lbnUgbWFrYW5hbi9taW51bWFuIGtpdGEgYnV0dWggY29udGFpbmVyLCBcclxuY29udGFpbmVyIHRlcnNlYnV0IG5hbnRpbnlhIGJlcmlzaSBuYW1hIG1ha2FuYW4gKyBoYXJnYSwgZ2FtYmFyIGRhbiB0ZXh0IGRlc2tyaXBzaSBtYWthbmFuL21pbnVtYW5cclxuc2VoaW5nZ2Ega2l0YSBidXR1aCBcImRpdlwiIHNlYmFnYWkgY29udGFpbmVyXHJcblwiaDNcIiBzZWJhZ2FpIG5hbWEgbWFrYW5hbiArIGhhcmdhLCBcInVybCBpbWFnZVwiIHNlYmFnYWkgZ2FtYmFyIGRhbiBcInBcIiBzZWJhZ2FpIGRlc2tyaXBzaSB0ZXh0XHJcbiovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVudUFjdGl2ZSgpIHtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250ZW50Q29udGFpbmVyKTtcclxuICBtZW51Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGVudElubmVyKTtcclxuICBtZW51Q29udGVudElubmVyLmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xyXG4gIC8qIFxyXG4gIEZ1bmN0aW9uIHRvIGFkZCBmb29kcy9kcmlua3MgdG8gc3VibWVudSBjb250YWluZXJcclxuICAuLi5wYXJlbnQgc2ViYWdhaSBjb250YWluZXIgZGFuIGNoaWxkcmVuIHNlYmFnYWkgZWxlbWVudCBhcGEgeWFuZyBtYXUga2l0YSBtYXN1a2thbiBrZSBjb250YWluZXIgaXR1XHJcbiAgLi4uY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIGJlcmFydGkgXCJzZXRpYXAgY2hpbGRyZW4gbWFrYSBkaWJlcmxha3VrYW4gZnVuY3Rpb24gYmVyaWt1dC4uLlwiXHJcbiAgKi9cclxuICBmdW5jdGlvbiBhcHBlbmRDaGlsZHJlbihwYXJlbnQsIGNoaWxkcmVuKSB7XHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vIEZvb2RzIGFuZCBEcmlua3MgZnVuY3Rpb25cclxuICBmdW5jdGlvbiBjcmVhdGVFdmVyeXRoaW5nSW5zaWRlRm9vZHMoZkROYW1lLCBmREltYWdlLCBmRFRleHQpIHtcclxuICAgIGNvbnN0IGZvb2REcmlua0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBmb29kRHJpbmtOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgY29uc3QgZm9vZERyaW5rSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgY29uc3QgZm9vZERyaW5rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZm9vZERyaW5rQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZm9vZC1kcmlua19jb250YWluZXJcIjtcclxuICAgIGZvb2REcmlua05hbWUuY2xhc3NOYW1lID0gXCJmb29kLWRyaW5rX25hbWVcIjtcclxuICAgIGZvb2REcmlua05hbWUudGV4dENvbnRlbnQgPSBmRE5hbWU7XHJcbiAgICBmb29kRHJpbmtJbWFnZS5jbGFzc05hbWUgPSBcImZvb2QtZHJpbmtfaW1hZ2VcIjtcclxuICAgIGZvb2REcmlua0ltYWdlLnNyYyA9IGZESW1hZ2U7XHJcbiAgICBmb29kRHJpbmtUZXh0LnRleHRDb250ZW50ID0gZkRUZXh0O1xyXG4gICAgZm9vZERyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2REcmlua05hbWUpO1xyXG4gICAgZm9vZERyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2REcmlua0ltYWdlKTtcclxuICAgIGZvb2REcmlua0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb29kRHJpbmtUZXh0KTtcclxuICAgIHJldHVybiBmb29kRHJpbmtDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICAvLyBGb29kc1xyXG4gIG1lbnVDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQoc3ViTWVudUZvb2RzKTtcclxuICBjb25zdCBmb29kSXRlbXMgPSBbXHJcbiAgICBjcmVhdGVFdmVyeXRoaW5nSW5zaWRlRm9vZHMoXHJcbiAgICAgIFwiTmFzaSBHb3JlbmcgLSBScDE1a1wiLFxyXG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLnRva29wZWRpYS5uZXQvaW1nL0pGckJRcS8yMDIyLzgvOS84ODZlNzg0OS04NWZiLTQyYzAtOTVkYy0wYTE4MzkyMzQ2MTUuanBnXCIsXHJcbiAgICAgIFwiTmFzaSBnb3JlbmcgYWRhbGFoIG1ha2FuYW4gYmVydXBhIG5hc2kgeWFuZyBkaWdvcmVuZyBkYW4gZGlhZHVrIGRhbGFtIG1pbnlhayBnb3JlbmcgYXRhdSBtYXJnYXJpbiwgYmlhc2FueWEgZGl0YW1iYWggYmFoYW4tYmFoYW4gbGFpbiBzZXBlcnRpIHRlbHVyLCBkYWdpbmcsIHNlYWZvb2QsIGF0YXUgc2F5dXJhbi4gXCJcclxuICAgICksXHJcbiAgXTtcclxuXHJcbiAgYXBwZW5kQ2hpbGRyZW4oc3ViTWVudUZvb2RzLCBmb29kSXRlbXMpO1xyXG5cclxuICAvLyBEcmlua3NcclxuICBtZW51Q29udGVudElubmVyLmFwcGVuZENoaWxkKHN1Yk1lbnVEcmlua3MpO1xyXG4gIGNvbnN0IGRyaW5rSXRlbXMgPSBbXHJcbiAgICBjcmVhdGVFdmVyeXRoaW5nSW5zaWRlRm9vZHMoXHJcbiAgICAgIFwiSnVzIEJ1YWggTWFuZ2dhIC0gUnAxMGtcIixcclxuICAgICAgXCJodHRwczovL2NkbjAtcHJvZHVjdGlvbi1pbWFnZXMta2x5LmFrYW1haXplZC5uZXQvNHFMVGFYZE1uMGpmZzl0VjZaSkpwLVNLS1owPS8yNjF4MDo5Mjh4NjY3LzEyMDB4MTIwMC9maWx0ZXJzOnF1YWxpdHkoNzUpOnN0cmlwX2ljYygpOmZvcm1hdCh3ZWJwKS9rbHktbWVkaWEtcHJvZHVjdGlvbi9tZWRpYXMvMzI2NzU0Mi9vcmlnaW5hbC8wNTU2ODgwMDBfMTYwMjY3NDA5My1zaHV0dGVyc3RvY2tfMTA0NTM5NzkyMy5qcGdcIixcclxuICAgICAgXCJOYXNpIGdvcmVuZyBhZGFsYWggbWFrYW5hbiBiZXJ1cGEgbmFzaSB5YW5nIGRpZ29yZW5nIGRhbiBkaWFkdWsgZGFsYW0gbWlueWFrIGdvcmVuZyBhdGF1IG1hcmdhcmluLCBiaWFzYW55YSBkaXRhbWJhaCBiYWhhbi1iYWhhbiBsYWluIHNlcGVydGkgdGVsdXIsIGRhZ2luZywgc2VhZm9vZCwgYXRhdSBzYXl1cmFuLiBcIlxyXG4gICAgKSxcclxuICBdO1xyXG5cclxuICBhcHBlbmRDaGlsZHJlbihzdWJNZW51RHJpbmtzLCBkcmlua0l0ZW1zKTtcclxuXHJcbiAgLy8gU25hY2tzXHJcbiAgbWVudUNvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChzdWJNZW51U25hY2tzKTtcclxuICBjb25zdCBzbmFja0l0ZW1zID0gW1xyXG4gICAgY3JlYXRlRXZlcnl0aGluZ0luc2lkZUZvb2RzKFxyXG4gICAgICBcIlVzdXMgS3Jpc3BpIC0gUnA1a1wiLFxyXG4gICAgICBcImh0dHBzOi8vcGF4ZWxtYXJrZXQuY28vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDEvU2NyZWVuc2hvdF8yMDIyMDEwOV8xNzMxMTUucG5nXCIsXHJcbiAgICAgIFwiTmFzaSBnb3JlbmcgYWRhbGFoIG1ha2FuYW4gYmVydXBhIG5hc2kgeWFuZyBkaWdvcmVuZyBkYW4gZGlhZHVrIGRhbGFtIG1pbnlhayBnb3JlbmcgYXRhdSBtYXJnYXJpbiwgYmlhc2FueWEgZGl0YW1iYWggYmFoYW4tYmFoYW4gbGFpbiBzZXBlcnRpIHRlbHVyLCBkYWdpbmcsIHNlYWZvb2QsIGF0YXUgc2F5dXJhbi4gXCJcclxuICAgICksXHJcbiAgXTtcclxuXHJcbiAgYXBwZW5kQ2hpbGRyZW4oc3ViTWVudVNuYWNrcywgc25hY2tJdGVtcyk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9