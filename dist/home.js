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
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/home.js ***!
  \**************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeActive": () => (/* binding */ homeActive)
/* harmony export */ });
const homeContentContainer = document.createElement("div");
homeContentContainer.className = "home_content_container";
homeContentContainer.textContent = "test...home";

const homeContentTitle = document.createElement("div");
homeContentTitle.className = "content_title";
homeContentTitle.textContent = "Home title";

function homeActive() {
  content.appendChild(homeContentContainer);
  homeContentContainer.appendChild(homeContentTitle);
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGhvbWVDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaG9tZUNvbnRlbnRDb250YWluZXIuY2xhc3NOYW1lID0gXCJob21lX2NvbnRlbnRfY29udGFpbmVyXCI7XHJcbmhvbWVDb250ZW50Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJ0ZXN0Li4uaG9tZVwiO1xyXG5cclxuY29uc3QgaG9tZUNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmhvbWVDb250ZW50VGl0bGUuY2xhc3NOYW1lID0gXCJjb250ZW50X3RpdGxlXCI7XHJcbmhvbWVDb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSBcIkhvbWUgdGl0bGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBob21lQWN0aXZlKCkge1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnRDb250YWluZXIpO1xyXG4gIGhvbWVDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVDb250ZW50VGl0bGUpO1xyXG59XHJcblxyXG4vLy4uLiBraXRhIG1lbmdhbWJpbCBlbGVtZW50IGRlbmdhbiBpZCBcImNvbnRlbnRcIiwga2FyZW5hIGVsZW1lbnQgZGVuZ2FuIGlkIFwiY29udGVudFwiIGp1Z2EgbWVtaWxpa2kgbmFtYSBjbGFzcyBcImNvbnRlbnRcIlxyXG4vLy4uLiBkYW4gamlrYSBraXRhIGF0dXIgc3R5bGUgY3NzIGhhbnlhIHVudHVrIGNsYXNzbnlhIHlhaXR1IFwiLmNvbnRlbnRcIiBtYWthIHRldGFwIGFrYW4gYmVrZXJqYVxyXG4vLy4uLiBrYWxvIGluZ2luIGJ1a3RpIGNvYmEgc2FqYSBjb25zb2xlLmxvZ1xyXG4vLy4uLiBqYWRpIGtlZGVwYW5ueWEgYmlzYSBraXRhIGJ1YXQgZWxlbWVudCB5YW5nIG1lbWlsaWtpIGNsYXNzIGRhbiBpZFxyXG5cclxuLy8ga29uc2VwIGJ1dHRvbiBhY3RpdmUgZGFuIHRpZGFrIGFjdGl2ZVxyXG4vLyBzYWF0IGJ1dHRvbiB1bnR1ayBob21lIGFrdGlmLCBtYWthIGJ1dHRvbiB1bnR1ayBtZW51IGRhbiBjb250YWN0IHRpZGFrIGFrdGlmXHJcbi8vLi4uYmVnaXR1IHB1bGEgdW50dWsgYnV0dG9uIG1lbnUgZGFuIGNvbnRhY3RcclxuLy8uLi5zZWhpbmdnYSBuYW50aSBtdW5na2luIHBha2FpIGxvb3AgdW50dWsgYWRkIGFjdGl2ZSBhdGF1IHJlbW92ZSBhY3RpdmVcclxuXHJcbi8vIGtpdGEgYnVhdCBrb2RlIGFnYXIgbWFzaW5nLW1hc2luZyBidXR0b24gYmVrZXJqYSBzZW1lc3RpbnlhIGR1bHVcclxuLy8uLi5rZW11ZGlhbiBraXRhIGlzaSBrb250ZW5ueWEgb2tlP1xyXG5cclxuLy8ga2l0YSBlZGl0IGlzaSBkYXJpIGhvbWUgcGFnZSBkaXNpbmlcclxuLy8uLi5sYWx1IGlzaSBkYXJpIGhvbWUgcGFnZSB0ZXJzZWJ1dCBraXRhIGphZGlrYW4gZnVuY3Rpb25cclxuLy8uLi5rZW11ZGlhbiBmdW5jdGlvbiB0ZXJzZWJ1dCBraXRhIGV4cG9ydCBkYW4gZGlpbXBvcnQgZGkgbWFpbi5qc1xyXG4vLy4uLmRpIGRhbGFtIG1haW4uanMga2l0YSBidWF0IGJ1dHRvbiB1bnR1ayBtZW1hbmdnaWwgZnVuY3Rpb24gZGlzaW5pXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==