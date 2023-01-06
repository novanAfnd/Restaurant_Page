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
const content = document.getElementById("content");
content.textContent = "write everyting below";

const homeContentContainer = document.createElement("div");
homeContentContainer.className = "home_content_container";
homeContentContainer.textContent = "test...home";

content.appendChild(homeContentContainer);

function homeActive() {
  homeContentContainer.style.display = "block";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbmNvbnRlbnQudGV4dENvbnRlbnQgPSBcIndyaXRlIGV2ZXJ5dGluZyBiZWxvd1wiO1xyXG5cclxuY29uc3QgaG9tZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5ob21lQ29udGVudENvbnRhaW5lci5jbGFzc05hbWUgPSBcImhvbWVfY29udGVudF9jb250YWluZXJcIjtcclxuaG9tZUNvbnRlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSBcInRlc3QuLi5ob21lXCI7XHJcblxyXG5jb250ZW50LmFwcGVuZENoaWxkKGhvbWVDb250ZW50Q29udGFpbmVyKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBob21lQWN0aXZlKCkge1xyXG4gIGhvbWVDb250ZW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbn1cclxuXHJcbi8vLi4uIGtpdGEgbWVuZ2FtYmlsIGVsZW1lbnQgZGVuZ2FuIGlkIFwiY29udGVudFwiLCBrYXJlbmEgZWxlbWVudCBkZW5nYW4gaWQgXCJjb250ZW50XCIganVnYSBtZW1pbGlraSBuYW1hIGNsYXNzIFwiY29udGVudFwiXHJcbi8vLi4uIGRhbiBqaWthIGtpdGEgYXR1ciBzdHlsZSBjc3MgaGFueWEgdW50dWsgY2xhc3NueWEgeWFpdHUgXCIuY29udGVudFwiIG1ha2EgdGV0YXAgYWthbiBiZWtlcmphXHJcbi8vLi4uIGthbG8gaW5naW4gYnVrdGkgY29iYSBzYWphIGNvbnNvbGUubG9nXHJcbi8vLi4uIGphZGkga2VkZXBhbm55YSBiaXNhIGtpdGEgYnVhdCBlbGVtZW50IHlhbmcgbWVtaWxpa2kgY2xhc3MgZGFuIGlkXHJcblxyXG4vLyBrb25zZXAgYnV0dG9uIGFjdGl2ZSBkYW4gdGlkYWsgYWN0aXZlXHJcbi8vIHNhYXQgYnV0dG9uIHVudHVrIGhvbWUgYWt0aWYsIG1ha2EgYnV0dG9uIHVudHVrIG1lbnUgZGFuIGNvbnRhY3QgdGlkYWsgYWt0aWZcclxuLy8uLi5iZWdpdHUgcHVsYSB1bnR1ayBidXR0b24gbWVudSBkYW4gY29udGFjdFxyXG4vLy4uLnNlaGluZ2dhIG5hbnRpIG11bmdraW4gcGFrYWkgbG9vcCB1bnR1ayBhZGQgYWN0aXZlIGF0YXUgcmVtb3ZlIGFjdGl2ZVxyXG5cclxuLy8ga2l0YSBidWF0IGtvZGUgYWdhciBtYXNpbmctbWFzaW5nIGJ1dHRvbiBiZWtlcmphIHNlbWVzdGlueWEgZHVsdVxyXG4vLy4uLmtlbXVkaWFuIGtpdGEgaXNpIGtvbnRlbm55YSBva2U/XHJcblxyXG4vLyBraXRhIGVkaXQgaXNpIGRhcmkgaG9tZSBwYWdlIGRpc2luaVxyXG4vLy4uLmxhbHUgaXNpIGRhcmkgaG9tZSBwYWdlIHRlcnNlYnV0IGtpdGEgamFkaWthbiBmdW5jdGlvblxyXG4vLy4uLmtlbXVkaWFuIGZ1bmN0aW9uIHRlcnNlYnV0IGtpdGEgZXhwb3J0IGRhbiBkaWltcG9ydCBkaSBtYWluLmpzXHJcbi8vLi4uZGkgZGFsYW0gbWFpbi5qcyBraXRhIGJ1YXQgYnV0dG9uIHVudHVrIG1lbWFuZ2dpbCBmdW5jdGlvbiBkaXNpbmlcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9