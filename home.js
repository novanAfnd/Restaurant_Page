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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uLi8uLi8uLi8uLi9cdTAwMDAjSmF2YVNjcmlwdC8yLiBUT1AvNC4gUmVzdGF1cmFudCBQYWdlL1Jlc3RhdXJhbnRfUGFnZS9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGhvbWVDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaG9tZUNvbnRlbnRDb250YWluZXIuY2xhc3NOYW1lID0gXCJob21lX2NvbnRlbnRfY29udGFpbmVyXCI7XHJcblxyXG5jb25zdCBob21lQ29udGVudElubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaG9tZUNvbnRlbnRJbm5lci5jbGFzc05hbWUgPSBcImNvbnRlbnRfY29udGFpbmVyX2lubmVyXCI7XHJcbmhvbWVDb250ZW50SW5uZXIuaWQgPSBcImhvbWVfY29udGFpbmVyX2lubmVyXCI7XHJcblxyXG4vLyBIZWFkZXJcclxuY29uc3QgaG9tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmhvbWVIZWFkZXIuY2xhc3NOYW1lID0gXCJjb250ZW50X2hlYWRlclwiO1xyXG5ob21lSGVhZGVyLmlkID0gXCJob21lX2hlYWRlclwiO1xyXG5ob21lSGVhZGVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2hpdGUtc3BhY2U6IHByZTtcIik7XHJcbmhvbWVIZWFkZXIudGV4dENvbnRlbnQgPSBcIlZpc2l0IE91ciBcXHJcXG5cIjtcclxuaG9tZUhlYWRlci50ZXh0Q29udGVudCArPSBcIkdvb2QgUmVzdGF1cmFudCBcXHJcXG5cIjtcclxuaG9tZUhlYWRlci50ZXh0Q29udGVudCArPSBcIkZvb2RzIGFuZCBEcmlua3MuXCI7XHJcblxyXG4vLyBJbnRyb1xyXG5jb25zdCBob21lSW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5ob21lSW50cm8uY2xhc3NOYW1lID0gXCJjb250ZW50X21haW5cIjtcclxuaG9tZUludHJvLmlkID0gXCJob21lX2ludHJvXCI7XHJcbmNvbnN0IGhvbWVJbnRyb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuaG9tZUludHJvSGVhZGVyLnRleHRDb250ZW50ID0gXCJJbnRyb2R1Y3Rpb25cIjtcclxuaG9tZUludHJvLmFwcGVuZENoaWxkKGhvbWVJbnRyb0hlYWRlcik7XHJcbmNvbnN0IGhvbWVJbnRyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuaG9tZUludHJvVGV4dC50ZXh0Q29udGVudCA9XHJcbiAgXCJHb29kIFJlc3RhdXJhbnQgaGFzIHRoZSBiZXN0IGZyaWVkIHJpY2UhIFRoZSBhbWJpYW5jZSBhbmQgY3VzdG9tZXIgc2VydmljZSBtYWtlIHlvdSBmZWVsIGxpa2UgeW91IGFyZSBzaXR0aW5nIGluIHRoZSBtaWRkbGUgb2YgYSBydXJhbCBwYWRkeSBmaWVsZCwgZWF0aW5nIGxpa2UgYSBsb2NhbCEgVGhpcyBpcyB0aGUgcmlnaHQgcGxhY2UgYXMgYSByZWxpZXZlciBvZiB0aGUgdGlyZWRuZXNzIG9mIHVyYmFuIGxpZmVcIjtcclxuaG9tZUludHJvLmFwcGVuZENoaWxkKGhvbWVJbnRyb1RleHQpO1xyXG5cclxuLy8gSG91cnNcclxuY29uc3QgaG9tZUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaG9tZUhvdXJzLmNsYXNzTmFtZSA9IFwiY29udGVudF9tYWluXCI7XHJcbmhvbWVIb3Vycy5pZCA9IFwiaG9tZV9ob3Vyc1wiO1xyXG5jb25zdCBob21lSG91cnNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbmhvbWVIb3Vyc0hlYWRlci50ZXh0Q29udGVudCA9IFwiSG91cnNcIjtcclxuaG9tZUhvdXJzLmFwcGVuZENoaWxkKGhvbWVIb3Vyc0hlYWRlcik7XHJcbmNvbnN0IGhvbWVIb3Vyc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuaG9tZUhvdXJzVGV4dC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndoaXRlLXNwYWNlOiBwcmU7XCIpO1xyXG5ob21lSG91cnNUZXh0LnRleHRDb250ZW50ID0gXCJTdW5kYXk6IDhhbSAtIDhwbSBcXHJcXG5cIjtcclxuaG9tZUhvdXJzVGV4dC50ZXh0Q29udGVudCArPSBcIk1vbmRheTogNmFtIC0gNnBtIFxcclxcblwiO1xyXG5ob21lSG91cnNUZXh0LnRleHRDb250ZW50ICs9IFwiVHVlc2RheTogNmFtIC0gNnBtIFxcclxcblwiO1xyXG5ob21lSG91cnNUZXh0LnRleHRDb250ZW50ICs9IFwiV2VkbmVzZGF5OiA2YW0gLSA2cG0gXFxyXFxuXCI7XHJcbmhvbWVIb3Vyc1RleHQudGV4dENvbnRlbnQgKz0gXCJUaHVyc2RheTogNmFtIC0gMTBwbSBcXHJcXG5cIjtcclxuaG9tZUhvdXJzVGV4dC50ZXh0Q29udGVudCArPSBcIkZyaWRheTogNmFtIC0gMTBwbSBcXHJcXG5cIjtcclxuaG9tZUhvdXJzVGV4dC50ZXh0Q29udGVudCArPSBcIlNhdHVyZGF5OiA4YW0gLSAxMHBtXCI7XHJcbmhvbWVIb3Vycy5hcHBlbmRDaGlsZChob21lSG91cnNUZXh0KTtcclxuXHJcbi8vIGxvY2F0aW9uXHJcbmNvbnN0IGhvbWVMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmhvbWVMb2NhdGlvbi5jbGFzc05hbWUgPSBcImNvbnRlbnRfbWFpblwiO1xyXG5ob21lTG9jYXRpb24uaWQgPSBcImhvbWVfbG9jYXRpb25cIjtcclxuY29uc3QgaG9tZUxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG5ob21lTG9jYXRpb25IZWFkZXIudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XHJcbmhvbWVMb2NhdGlvbi5hcHBlbmRDaGlsZChob21lTG9jYXRpb25IZWFkZXIpO1xyXG5jb25zdCBob21lTG9jYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbmhvbWVMb2NhdGlvblRleHQudGV4dENvbnRlbnQgPSBcIjExMTEgVW50aXRsZWQgU3RyZWV0LCBPbHltcHVzIE1vbnMsIE1hcnNcIjtcclxuaG9tZUxvY2F0aW9uLmFwcGVuZENoaWxkKGhvbWVMb2NhdGlvblRleHQpO1xyXG5cclxuLy8gaW1hZ2VcclxuY29uc3QgaW1hZ2VPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5pbWFnZU9uZS5pZCA9IFwiaW1hZ2Vfb25lXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaG9tZUFjdGl2ZSgpIHtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVDb250ZW50Q29udGFpbmVyKTtcclxuICBob21lQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQ29udGVudElubmVyKTtcclxuICBob21lQ29udGVudElubmVyLmFwcGVuZENoaWxkKGhvbWVIZWFkZXIpO1xyXG4gIGhvbWVDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQoaG9tZUludHJvKTtcclxuICBob21lQ29udGVudElubmVyLmFwcGVuZENoaWxkKGhvbWVIb3Vycyk7XHJcbiAgaG9tZUNvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChpbWFnZU9uZSk7XHJcbiAgaG9tZUNvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChob21lTG9jYXRpb24pO1xyXG59XHJcblxyXG4vLy4uLiBraXRhIG1lbmdhbWJpbCBlbGVtZW50IGRlbmdhbiBpZCBcImNvbnRlbnRcIiwga2FyZW5hIGVsZW1lbnQgZGVuZ2FuIGlkIFwiY29udGVudFwiIGp1Z2EgbWVtaWxpa2kgbmFtYSBjbGFzcyBcImNvbnRlbnRcIlxyXG4vLy4uLiBkYW4gamlrYSBraXRhIGF0dXIgc3R5bGUgY3NzIGhhbnlhIHVudHVrIGNsYXNzbnlhIHlhaXR1IFwiLmNvbnRlbnRcIiBtYWthIHRldGFwIGFrYW4gYmVrZXJqYVxyXG4vLy4uLiBrYWxvIGluZ2luIGJ1a3RpIGNvYmEgc2FqYSBjb25zb2xlLmxvZ1xyXG4vLy4uLiBqYWRpIGtlZGVwYW5ueWEgYmlzYSBraXRhIGJ1YXQgZWxlbWVudCB5YW5nIG1lbWlsaWtpIGNsYXNzIGRhbiBpZFxyXG5cclxuLy8ga29uc2VwIGJ1dHRvbiBhY3RpdmUgZGFuIHRpZGFrIGFjdGl2ZVxyXG4vLyBzYWF0IGJ1dHRvbiB1bnR1ayBob21lIGFrdGlmLCBtYWthIGJ1dHRvbiB1bnR1ayBtZW51IGRhbiBjb250YWN0IHRpZGFrIGFrdGlmXHJcbi8vLi4uYmVnaXR1IHB1bGEgdW50dWsgYnV0dG9uIG1lbnUgZGFuIGNvbnRhY3RcclxuLy8uLi5zZWhpbmdnYSBuYW50aSBtdW5na2luIHBha2FpIGxvb3AgdW50dWsgYWRkIGFjdGl2ZSBhdGF1IHJlbW92ZSBhY3RpdmVcclxuXHJcbi8vIGtpdGEgYnVhdCBrb2RlIGFnYXIgbWFzaW5nLW1hc2luZyBidXR0b24gYmVrZXJqYSBzZW1lc3RpbnlhIGR1bHVcclxuLy8uLi5rZW11ZGlhbiBraXRhIGlzaSBrb250ZW5ueWEgb2tlP1xyXG5cclxuLy8ga2l0YSBlZGl0IGlzaSBkYXJpIGhvbWUgcGFnZSBkaXNpbmlcclxuLy8uLi5sYWx1IGlzaSBkYXJpIGhvbWUgcGFnZSB0ZXJzZWJ1dCBraXRhIGphZGlrYW4gZnVuY3Rpb25cclxuLy8uLi5rZW11ZGlhbiBmdW5jdGlvbiB0ZXJzZWJ1dCBraXRhIGV4cG9ydCBkYW4gZGlpbXBvcnQgZGkgbWFpbi5qc1xyXG4vLy4uLmRpIGRhbGFtIG1haW4uanMga2l0YSBidWF0IGJ1dHRvbiB1bnR1ayBtZW1hbmdnaWwgZnVuY3Rpb24gZGlzaW5pXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==