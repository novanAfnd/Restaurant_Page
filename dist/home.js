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

const homeContentInner = document.createElement("div");
homeContentInner.className = "content_container_inner";

// Header
const homeHeader = document.createElement("div");
homeHeader.className = "content_header";
homeHeader.setAttribute("style", "white-space: pre;");
homeHeader.textContent = "Visit Our \r\n";
homeHeader.textContent += "Good Restaurant \r\n";
homeHeader.textContent += "Foods and Drinks.";

// Intro
const homeIntro = document.createElement("div");
homeIntro.className = "content_main";
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
const homeLocationHeader = document.createElement("h3");
homeLocationHeader.textContent = "Location";
homeLocation.appendChild(homeLocationHeader);
const homeLocationText = document.createElement("p");
homeLocationText.textContent = "1111 Untitled Street, Olympus Mons, Mars";
homeLocation.appendChild(homeLocationText);

function homeActive() {
  content.appendChild(homeContentContainer);
  homeContentContainer.appendChild(homeContentInner);
  homeContentInner.appendChild(homeHeader);
  homeContentInner.appendChild(homeIntro);
  homeContentInner.appendChild(homeHours);
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgaG9tZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5ob21lQ29udGVudENvbnRhaW5lci5jbGFzc05hbWUgPSBcImhvbWVfY29udGVudF9jb250YWluZXJcIjtcclxuXHJcbmNvbnN0IGhvbWVDb250ZW50SW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5ob21lQ29udGVudElubmVyLmNsYXNzTmFtZSA9IFwiY29udGVudF9jb250YWluZXJfaW5uZXJcIjtcclxuXHJcbi8vIEhlYWRlclxyXG5jb25zdCBob21lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaG9tZUhlYWRlci5jbGFzc05hbWUgPSBcImNvbnRlbnRfaGVhZGVyXCI7XHJcbmhvbWVIZWFkZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aGl0ZS1zcGFjZTogcHJlO1wiKTtcclxuaG9tZUhlYWRlci50ZXh0Q29udGVudCA9IFwiVmlzaXQgT3VyIFxcclxcblwiO1xyXG5ob21lSGVhZGVyLnRleHRDb250ZW50ICs9IFwiR29vZCBSZXN0YXVyYW50IFxcclxcblwiO1xyXG5ob21lSGVhZGVyLnRleHRDb250ZW50ICs9IFwiRm9vZHMgYW5kIERyaW5rcy5cIjtcclxuXHJcbi8vIEludHJvXHJcbmNvbnN0IGhvbWVJbnRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmhvbWVJbnRyby5jbGFzc05hbWUgPSBcImNvbnRlbnRfbWFpblwiO1xyXG5jb25zdCBob21lSW50cm9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbmhvbWVJbnRyb0hlYWRlci50ZXh0Q29udGVudCA9IFwiSW50cm9kdWN0aW9uXCI7XHJcbmhvbWVJbnRyby5hcHBlbmRDaGlsZChob21lSW50cm9IZWFkZXIpO1xyXG5jb25zdCBob21lSW50cm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbmhvbWVJbnRyb1RleHQudGV4dENvbnRlbnQgPVxyXG4gIFwiR29vZCBSZXN0YXVyYW50IGhhcyB0aGUgYmVzdCBmcmllZCByaWNlISBUaGUgYW1iaWFuY2UgYW5kIGN1c3RvbWVyIHNlcnZpY2UgbWFrZSB5b3UgZmVlbCBsaWtlIHlvdSBhcmUgc2l0dGluZyBpbiB0aGUgbWlkZGxlIG9mIGEgcnVyYWwgcGFkZHkgZmllbGQsIGVhdGluZyBsaWtlIGEgbG9jYWwhIFRoaXMgaXMgdGhlIHJpZ2h0IHBsYWNlIGFzIGEgcmVsaWV2ZXIgb2YgdGhlIHRpcmVkbmVzcyBvZiB1cmJhbiBsaWZlXCI7XHJcbmhvbWVJbnRyby5hcHBlbmRDaGlsZChob21lSW50cm9UZXh0KTtcclxuLy8gSG91cnNcclxuY29uc3QgaG9tZUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaG9tZUhvdXJzLmNsYXNzTmFtZSA9IFwiY29udGVudF9tYWluXCI7XHJcbmNvbnN0IGhvbWVIb3Vyc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuaG9tZUhvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiO1xyXG5ob21lSG91cnMuYXBwZW5kQ2hpbGQoaG9tZUhvdXJzSGVhZGVyKTtcclxuY29uc3QgaG9tZUhvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5ob21lSG91cnNUZXh0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2hpdGUtc3BhY2U6IHByZTtcIik7XHJcbmhvbWVIb3Vyc1RleHQudGV4dENvbnRlbnQgPSBcIlN1bmRheTogOGFtIC0gOHBtIFxcclxcblwiO1xyXG5ob21lSG91cnNUZXh0LnRleHRDb250ZW50ICs9IFwiTW9uZGF5OiA2YW0gLSA2cG0gXFxyXFxuXCI7XHJcbmhvbWVIb3Vyc1RleHQudGV4dENvbnRlbnQgKz0gXCJUdWVzZGF5OiA2YW0gLSA2cG0gXFxyXFxuXCI7XHJcbmhvbWVIb3Vyc1RleHQudGV4dENvbnRlbnQgKz0gXCJXZWRuZXNkYXk6IDZhbSAtIDZwbSBcXHJcXG5cIjtcclxuaG9tZUhvdXJzVGV4dC50ZXh0Q29udGVudCArPSBcIlRodXJzZGF5OiA2YW0gLSAxMHBtIFxcclxcblwiO1xyXG5ob21lSG91cnNUZXh0LnRleHRDb250ZW50ICs9IFwiRnJpZGF5OiA2YW0gLSAxMHBtIFxcclxcblwiO1xyXG5ob21lSG91cnNUZXh0LnRleHRDb250ZW50ICs9IFwiU2F0dXJkYXk6IDhhbSAtIDEwcG1cIjtcclxuaG9tZUhvdXJzLmFwcGVuZENoaWxkKGhvbWVIb3Vyc1RleHQpO1xyXG5cclxuLy8gbG9jYXRpb25cclxuY29uc3QgaG9tZUxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaG9tZUxvY2F0aW9uLmNsYXNzTmFtZSA9IFwiY29udGVudF9tYWluXCI7XHJcbmNvbnN0IGhvbWVMb2NhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuaG9tZUxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xyXG5ob21lTG9jYXRpb24uYXBwZW5kQ2hpbGQoaG9tZUxvY2F0aW9uSGVhZGVyKTtcclxuY29uc3QgaG9tZUxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5ob21lTG9jYXRpb25UZXh0LnRleHRDb250ZW50ID0gXCIxMTExIFVudGl0bGVkIFN0cmVldCwgT2x5bXB1cyBNb25zLCBNYXJzXCI7XHJcbmhvbWVMb2NhdGlvbi5hcHBlbmRDaGlsZChob21lTG9jYXRpb25UZXh0KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBob21lQWN0aXZlKCkge1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnRDb250YWluZXIpO1xyXG4gIGhvbWVDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVDb250ZW50SW5uZXIpO1xyXG4gIGhvbWVDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQoaG9tZUhlYWRlcik7XHJcbiAgaG9tZUNvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChob21lSW50cm8pO1xyXG4gIGhvbWVDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQoaG9tZUhvdXJzKTtcclxuICBob21lQ29udGVudElubmVyLmFwcGVuZENoaWxkKGhvbWVMb2NhdGlvbik7XHJcbn1cclxuXHJcbi8vLi4uIGtpdGEgbWVuZ2FtYmlsIGVsZW1lbnQgZGVuZ2FuIGlkIFwiY29udGVudFwiLCBrYXJlbmEgZWxlbWVudCBkZW5nYW4gaWQgXCJjb250ZW50XCIganVnYSBtZW1pbGlraSBuYW1hIGNsYXNzIFwiY29udGVudFwiXHJcbi8vLi4uIGRhbiBqaWthIGtpdGEgYXR1ciBzdHlsZSBjc3MgaGFueWEgdW50dWsgY2xhc3NueWEgeWFpdHUgXCIuY29udGVudFwiIG1ha2EgdGV0YXAgYWthbiBiZWtlcmphXHJcbi8vLi4uIGthbG8gaW5naW4gYnVrdGkgY29iYSBzYWphIGNvbnNvbGUubG9nXHJcbi8vLi4uIGphZGkga2VkZXBhbm55YSBiaXNhIGtpdGEgYnVhdCBlbGVtZW50IHlhbmcgbWVtaWxpa2kgY2xhc3MgZGFuIGlkXHJcblxyXG4vLyBrb25zZXAgYnV0dG9uIGFjdGl2ZSBkYW4gdGlkYWsgYWN0aXZlXHJcbi8vIHNhYXQgYnV0dG9uIHVudHVrIGhvbWUgYWt0aWYsIG1ha2EgYnV0dG9uIHVudHVrIG1lbnUgZGFuIGNvbnRhY3QgdGlkYWsgYWt0aWZcclxuLy8uLi5iZWdpdHUgcHVsYSB1bnR1ayBidXR0b24gbWVudSBkYW4gY29udGFjdFxyXG4vLy4uLnNlaGluZ2dhIG5hbnRpIG11bmdraW4gcGFrYWkgbG9vcCB1bnR1ayBhZGQgYWN0aXZlIGF0YXUgcmVtb3ZlIGFjdGl2ZVxyXG5cclxuLy8ga2l0YSBidWF0IGtvZGUgYWdhciBtYXNpbmctbWFzaW5nIGJ1dHRvbiBiZWtlcmphIHNlbWVzdGlueWEgZHVsdVxyXG4vLy4uLmtlbXVkaWFuIGtpdGEgaXNpIGtvbnRlbm55YSBva2U/XHJcblxyXG4vLyBraXRhIGVkaXQgaXNpIGRhcmkgaG9tZSBwYWdlIGRpc2luaVxyXG4vLy4uLmxhbHUgaXNpIGRhcmkgaG9tZSBwYWdlIHRlcnNlYnV0IGtpdGEgamFkaWthbiBmdW5jdGlvblxyXG4vLy4uLmtlbXVkaWFuIGZ1bmN0aW9uIHRlcnNlYnV0IGtpdGEgZXhwb3J0IGRhbiBkaWltcG9ydCBkaSBtYWluLmpzXHJcbi8vLi4uZGkgZGFsYW0gbWFpbi5qcyBraXRhIGJ1YXQgYnV0dG9uIHVudHVrIG1lbWFuZ2dpbCBmdW5jdGlvbiBkaXNpbmlcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9