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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi4vLi4vLi4vLi4vXHUwMDAwI0phdmFTY3JpcHQvMi4gVE9QLzQuIFJlc3RhdXJhbnQgUGFnZS9SZXN0YXVyYW50X1BhZ2Uvc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBtZW51Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm1lbnVDb250ZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwibWVudV9jb250ZW50X2NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgbWVudUNvbnRlbnRJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm1lbnVDb250ZW50SW5uZXIuY2xhc3NOYW1lID0gXCJjb250ZW50X2NvbnRhaW5lcl9pbm5lclwiO1xyXG5cclxuLy8gSGVhZGVyXHJcbmNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tZW51SGVhZGVyLmNsYXNzTmFtZSA9IFwiY29udGVudF9oZWFkZXJcIjtcclxubWVudUhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG5cclxuLy8gU3VibWVudSBDb250YWluZXIgKENvbnRhaW5lciBmb3IgZWFjaCBmb29kIHR5cGVzKVxyXG5jb25zdCBzdWJNZW51Rm9vZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5zdWJNZW51Rm9vZHMuY2xhc3NOYW1lID0gXCJtZW51X2NvbnRlbnRfc3VibWVudV9jb250YWluZXJcIjtcclxuc3ViTWVudUZvb2RzLmlkID0gXCJzdWJtZW51X2Zvb2RzXCI7XHJcbmNvbnN0IHN1Yk1lbnVEcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5zdWJNZW51RHJpbmtzLmNsYXNzTmFtZSA9IFwibWVudV9jb250ZW50X3N1Ym1lbnVfY29udGFpbmVyXCI7XHJcbnN1Yk1lbnVEcmlua3MuaWQgPSBcInN1Ym1lbnVfZHJpbmtzXCI7XHJcblxyXG4vLyBTdWJtZW51IEhlYWRlclxyXG5jb25zdCBzdWJNZW51Rm9vZHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbnN1Yk1lbnVGb29kc0hlYWRlci50ZXh0Q29udGVudCA9IFwiRm9vZHNcIjtcclxuc3ViTWVudUZvb2RzLmFwcGVuZENoaWxkKHN1Yk1lbnVGb29kc0hlYWRlcik7XHJcbmNvbnN0IHN1Yk1lbnVEcmlua3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbnN1Yk1lbnVEcmlua3NIZWFkZXIudGV4dENvbnRlbnQgPSBcIkRyaW5rc1wiO1xyXG5zdWJNZW51RHJpbmtzLmFwcGVuZENoaWxkKHN1Yk1lbnVEcmlua3NIZWFkZXIpO1xyXG5cclxuLy8gRm9vZHNcclxuXHJcbi8vIERyaW5rc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lbnVBY3RpdmUoKSB7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGVudENvbnRhaW5lcik7XHJcbiAgbWVudUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnRJbm5lcik7XHJcbiAgbWVudUNvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChtZW51SGVhZGVyKTtcclxuICAvLyBGb29kc1xyXG4gIG1lbnVDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQoc3ViTWVudUZvb2RzKTtcclxuXHJcbiAgLy8gRHJpbmtzXHJcbiAgbWVudUNvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChzdWJNZW51RHJpbmtzKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=