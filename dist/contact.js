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
/*!*****************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/contact.js ***!
  \*****************************************************************************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgY29udGFjdENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb250YWN0Q29udGVudENvbnRhaW5lci5jbGFzc05hbWUgPSBcImNvbnRhY3RfY29udGVudF9jb250YWluZXJcIjtcclxuXHJcbmNvbnN0IGNvbnRhY3RDb250ZW50SW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb250YWN0Q29udGVudElubmVyLmNsYXNzTmFtZSA9IFwiY29udGVudF9jb250YWluZXJfaW5uZXJcIjtcclxuY29udGFjdENvbnRlbnRJbm5lci5pZCA9IFwiY29udGFjdF9jb250ZW50X2lubmVyXCI7IC8vIHRvIG1ha2UgZmxleC13cmFwIHdvcmtcclxuXHJcbi8vIEhlYWRlclxyXG5jb25zdCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29udGFjdEhlYWRlci5jbGFzc05hbWUgPSBcImNvbnRlbnRfaGVhZGVyXCI7XHJcbmNvbnRhY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcclxuXHJcbi8vIFByb2ZpbGUgY2FyZCBjb250YWluZXJcclxuY29uc3QgcHJvZmlsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbnByb2ZpbGVDb250YWluZXIuY2xhc3NOYW1lID0gXCJjb250YWN0X2NvbnRlbnRfcHJvZmlsZV9jb250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250YWN0QWN0aXZlKCkge1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRlbnRDb250YWluZXIpO1xyXG4gIGNvbnRhY3RDb250ZW50Q29udGFpbmVyLmFwcGVuZChjb250YWN0Q29udGVudElubmVyKTtcclxuICBjb250YWN0Q29udGVudElubmVyLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xyXG5cclxuICAvLyBQcm9maWxlIGNvbnRhaW5lclxyXG4gIGNvbnRhY3RDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQocHJvZmlsZUNvbnRhaW5lcik7XHJcblxyXG4gIC8vIFByb2ZpbGUgY2FyZFxyXG4gIC8qIENyZWF0ZSBwcm9maWxlIGNhcmQgKi9cclxuICBmdW5jdGlvbiBjcmVhdGVQcm9maWxlQ2FyZChwSW1hZ2UsIHBOYW1lLCBwUm9sZSwgcE51bWJlciwgcEVtYWlsKSB7XHJcbiAgICBjb25zdCBwcm9maWxlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBwcm9maWxlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgY29uc3QgcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBjb25zdCBwcm9maWxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcHJvZmlsZUNhcmQuY2xhc3NOYW1lID0gXCJjb250YWN0X2NvbnRlbnRfcHJvZmlsZV9jYXJkXCI7XHJcbiAgICBwcm9maWxlSW1hZ2UuY2xhc3NOYW1lID0gXCJjb250YWN0X2NvbnRlbnRfcHJvZmlsZV9jYXJkX2ltYWdlXCI7XHJcbiAgICBwcm9maWxlSW1hZ2UuaWQgPSBwSW1hZ2U7XHJcbiAgICBwcm9maWxlTmFtZS5jbGFzc05hbWUgPSBcImNvbnRhY3RfY29udGVudF9wcm9maWxlX2NhcmRfbmFtZVwiO1xyXG4gICAgcHJvZmlsZU5hbWUudGV4dENvbnRlbnQgPSBwTmFtZTtcclxuICAgIHByb2ZpbGVUZXh0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2hpdGUtc3BhY2U6IHByZTtcIik7XHJcbiAgICBwcm9maWxlVGV4dC50ZXh0Q29udGVudCA9IHBSb2xlO1xyXG4gICAgcHJvZmlsZVRleHQudGV4dENvbnRlbnQgKz0gcE51bWJlcjtcclxuICAgIHByb2ZpbGVUZXh0LnRleHRDb250ZW50ICs9IHBFbWFpbDtcclxuICAgIHByb2ZpbGVDYXJkLmFwcGVuZENoaWxkKHByb2ZpbGVJbWFnZSk7XHJcbiAgICBwcm9maWxlQ2FyZC5hcHBlbmRDaGlsZChwcm9maWxlTmFtZSk7XHJcbiAgICBwcm9maWxlQ2FyZC5hcHBlbmRDaGlsZChwcm9maWxlVGV4dCk7XHJcbiAgICByZXR1cm4gcHJvZmlsZUNhcmQ7XHJcbiAgfVxyXG5cclxuICAvKiBGdW5jdGlvbiB0byBhZGQgbGlzdCB0byBoZWFkZXIgb3IgZm9vdGVyIHVsICovXHJcbiAgZnVuY3Rpb24gYXBwZW5kQ2hpbGRyZW4ocGFyZW50LCBjaGlsZHJlbikge1xyXG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvZmlsZUl0ZW1zID0gW1xyXG4gICAgY3JlYXRlUHJvZmlsZUNhcmQoXCJwcm9maWxlX2RpcHBlclwiLCBcIkRpcHBlclwiLCBcIkNoZWYgXFxyXFxuXCIsIFwiMDAwLTExMS0xMTEtMTExIFxcclxcblwiLCBcImRpcHBlckBmYWtlLWdnZ21haWwgXFxyXFxuXCIpLFxyXG4gICAgY3JlYXRlUHJvZmlsZUNhcmQoXCJwcm9maWxlX3dlbmR5XCIsIFwiV2VuZHlcIiwgXCJNYW5hZ2VyIFxcclxcblwiLCBcIjAwMC0yMjItMjIyLTIyMiBcXHJcXG5cIiwgXCJ3ZW5keUBmYWtlLWdnZ21haWwgXFxyXFxuXCIpLFxyXG4gICAgY3JlYXRlUHJvZmlsZUNhcmQoXCJwcm9maWxlX21hYmVsXCIsIFwiTWFiZWxcIiwgXCJXYWl0ZXIgXFxyXFxuXCIsIFwiMDAwLTMzMy0zMzMtMzMzIFxcclxcblwiLCBcIm1hYmVsQGZha2UtZ2dnbWFpbCBcXHJcXG5cIiksXHJcbiAgXTtcclxuXHJcbiAgYXBwZW5kQ2hpbGRyZW4ocHJvZmlsZUNvbnRhaW5lciwgcHJvZmlsZUl0ZW1zKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=