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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi4vLi4vLi4vLi4vXHUwMDAwI0phdmFTY3JpcHQvMi4gVE9QLzQuIFJlc3RhdXJhbnQgUGFnZS9SZXN0YXVyYW50X1BhZ2Uvc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBtZW51Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm1lbnVDb250ZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwibWVudV9jb250ZW50X2NvbnRhaW5lclwiO1xyXG5cclxuY29uc3QgbWVudUNvbnRlbnRJbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm1lbnVDb250ZW50SW5uZXIuY2xhc3NOYW1lID0gXCJjb250ZW50X2NvbnRhaW5lcl9pbm5lclwiO1xyXG5cclxuLy8gSGVhZGVyXHJcbmNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5tZW51SGVhZGVyLmNsYXNzTmFtZSA9IFwiY29udGVudF9oZWFkZXJcIjtcclxubWVudUhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG5cclxuLy8gU3VibWVudSBDb250YWluZXIgKENvbnRhaW5lciBmb3IgZWFjaCBmb29kIHR5cGVzKVxyXG5jb25zdCBzdWJNZW51Rm9vZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5zdWJNZW51Rm9vZHMuY2xhc3NOYW1lID0gXCJtZW51X2NvbnRlbnRfc3VibWVudV9jb250YWluZXJcIjtcclxuc3ViTWVudUZvb2RzLmlkID0gXCJzdWJtZW51X2Zvb2RzXCI7XHJcbmNvbnN0IHN1Yk1lbnVEcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5zdWJNZW51RHJpbmtzLmNsYXNzTmFtZSA9IFwibWVudV9jb250ZW50X3N1Ym1lbnVfY29udGFpbmVyXCI7XHJcbnN1Yk1lbnVEcmlua3MuaWQgPSBcInN1Ym1lbnVfZHJpbmtzXCI7XHJcbmNvbnN0IHN1Yk1lbnVTbmFja3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5zdWJNZW51U25hY2tzLmNsYXNzTmFtZSA9IFwibWVudV9jb250ZW50X3N1Ym1lbnVfY29udGFpbmVyXCI7XHJcbnN1Yk1lbnVTbmFja3MuaWQgPSBcInN1Ym1lbnVfc25hY2tzXCI7XHJcblxyXG4vLyBTdWJtZW51IEhlYWRlclxyXG5jb25zdCBzdWJNZW51Rm9vZHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbnN1Yk1lbnVGb29kc0hlYWRlci50ZXh0Q29udGVudCA9IFwiRm9vZHNcIjtcclxuc3ViTWVudUZvb2RzLmFwcGVuZENoaWxkKHN1Yk1lbnVGb29kc0hlYWRlcik7XHJcbmNvbnN0IHN1Yk1lbnVEcmlua3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbnN1Yk1lbnVEcmlua3NIZWFkZXIudGV4dENvbnRlbnQgPSBcIkRyaW5rc1wiO1xyXG5zdWJNZW51RHJpbmtzLmFwcGVuZENoaWxkKHN1Yk1lbnVEcmlua3NIZWFkZXIpO1xyXG5jb25zdCBzdWJNZW51U25hY2tzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG5zdWJNZW51U25hY2tzSGVhZGVyLnRleHRDb250ZW50ID0gXCJTbmFja3NcIjtcclxuc3ViTWVudVNuYWNrcy5hcHBlbmRDaGlsZChzdWJNZW51U25hY2tzSGVhZGVyKTtcclxuXHJcbi8qXHJcblVudHVrIHNhdHUgbWVudSBtYWthbmFuL21pbnVtYW4ga2l0YSBidXR1aCBjb250YWluZXIsIFxyXG5jb250YWluZXIgdGVyc2VidXQgbmFudGlueWEgYmVyaXNpIG5hbWEgbWFrYW5hbiArIGhhcmdhLCBnYW1iYXIgZGFuIHRleHQgZGVza3JpcHNpIG1ha2FuYW4vbWludW1hblxyXG5zZWhpbmdnYSBraXRhIGJ1dHVoIFwiZGl2XCIgc2ViYWdhaSBjb250YWluZXJcclxuXCJoM1wiIHNlYmFnYWkgbmFtYSBtYWthbmFuICsgaGFyZ2EsIFwidXJsIGltYWdlXCIgc2ViYWdhaSBnYW1iYXIgZGFuIFwicFwiIHNlYmFnYWkgZGVza3JpcHNpIHRleHRcclxuKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZW51QWN0aXZlKCkge1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnRDb250YWluZXIpO1xyXG4gIG1lbnVDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250ZW50SW5uZXIpO1xyXG4gIG1lbnVDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XHJcbiAgLyogXHJcbiAgRnVuY3Rpb24gdG8gYWRkIGZvb2RzL2RyaW5rcyB0byBzdWJtZW51IGNvbnRhaW5lclxyXG4gIC4uLnBhcmVudCBzZWJhZ2FpIGNvbnRhaW5lciBkYW4gY2hpbGRyZW4gc2ViYWdhaSBlbGVtZW50IGFwYSB5YW5nIG1hdSBraXRhIG1hc3Vra2FuIGtlIGNvbnRhaW5lciBpdHVcclxuICAuLi5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgYmVyYXJ0aSBcInNldGlhcCBjaGlsZHJlbiBtYWthIGRpYmVybGFrdWthbiBmdW5jdGlvbiBiZXJpa3V0Li4uXCJcclxuICAqL1xyXG4gIGZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKHBhcmVudCwgY2hpbGRyZW4pIHtcclxuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8gRm9vZHMgYW5kIERyaW5rcyBmdW5jdGlvblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUV2ZXJ5dGhpbmdJbnNpZGVGb29kcyhmRE5hbWUsIGZESW1hZ2UsIGZEVGV4dCkge1xyXG4gICAgY29uc3QgZm9vZERyaW5rQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGZvb2REcmlua05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBjb25zdCBmb29kRHJpbmtJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBjb25zdCBmb29kRHJpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBmb29kRHJpbmtDb250YWluZXIuY2xhc3NOYW1lID0gXCJmb29kLWRyaW5rX2NvbnRhaW5lclwiO1xyXG4gICAgZm9vZERyaW5rTmFtZS5jbGFzc05hbWUgPSBcImZvb2QtZHJpbmtfbmFtZVwiO1xyXG4gICAgZm9vZERyaW5rTmFtZS50ZXh0Q29udGVudCA9IGZETmFtZTtcclxuICAgIGZvb2REcmlua0ltYWdlLmNsYXNzTmFtZSA9IFwiZm9vZC1kcmlua19pbWFnZVwiO1xyXG4gICAgZm9vZERyaW5rSW1hZ2Uuc3JjID0gZkRJbWFnZTtcclxuICAgIGZvb2REcmlua1RleHQudGV4dENvbnRlbnQgPSBmRFRleHQ7XHJcbiAgICBmb29kRHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZERyaW5rTmFtZSk7XHJcbiAgICBmb29kRHJpbmtDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vZERyaW5rSW1hZ2UpO1xyXG4gICAgZm9vZERyaW5rQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2REcmlua1RleHQpO1xyXG4gICAgcmV0dXJuIGZvb2REcmlua0NvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIC8vIEZvb2RzXHJcbiAgbWVudUNvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChzdWJNZW51Rm9vZHMpO1xyXG4gIGNvbnN0IGZvb2RJdGVtcyA9IFtcclxuICAgIGNyZWF0ZUV2ZXJ5dGhpbmdJbnNpZGVGb29kcyhcclxuICAgICAgXCJOYXNpIEdvcmVuZyBUZWx1ciBDZXBsb2sgLSBScDE1a1wiLFxyXG4gICAgICBcImh0dHBzOi8vcmljZWluZm8uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzA5L25hc2ktZ29yZW5nLXJlY2lwZS5qcGdcIixcclxuICAgICAgXCJOYXNpIGdvcmVuZyBpcyBhIFNvdXRoZWFzdCBBc2lhbiBmcmllZCByaWNlIGRpc2gsIHVzdWFsbHkgY29va2VkIHdpdGggcGllY2VzIG9mIG1lYXQgYW5kIHZlZ2V0YWJsZXMuXCJcclxuICAgICksXHJcbiAgICBjcmVhdGVFdmVyeXRoaW5nSW5zaWRlRm9vZHMoXHJcbiAgICAgIFwiTmFzaSBHb3JlbmcgQXlhbSBHZXByZWsgLSBScDIwa1wiLFxyXG4gICAgICBcImh0dHBzOi8vaW1nLmt1cmlvLm5ldHdvcmsvUWNPb3V6OHdQZ2o0VTQ2d3BpLTZ0dGZBRGd3PS8zMjB4MzIwL2ZpbHRlcnM6cXVhbGl0eSg4MCkvaHR0cHM6Ly9rdXJpby1pbWcua3VyaW9hcHBzLmNvbS8yMS8xMi8xNy9kNmIwMTI1ZC1jYmE5LTQxNGEtOTlhYS0zNWNiM2NmZDgzZmMuanBlXCIsXHJcbiAgICAgIFwiRnJpZWQgcmljZSB3aXRoIGNyaXNweSBmcmllZCBjaGlja2VuIHRvcHBlZCB3aXRoIGNoaWxpIHNhdWNlLlwiXHJcbiAgICApLFxyXG4gICAgY3JlYXRlRXZlcnl0aGluZ0luc2lkZUZvb2RzKFxyXG4gICAgICBcIk5hc2kgR29yZW5nIE1hd3V0IC0gUnAxNWtcIixcclxuICAgICAgXCJodHRwczovL3Rhc3R5bmVzaWEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzEyL1Jlc2VwLU5hc2ktR29yZW5nLU1hd3V0LmpwZ1wiLFxyXG4gICAgICBcIkZyaWVkIHJpY2UgbWl4ZWQgd2l0aCBub29kbGVzIG9yIGZyaWVkIHZlcm1pY2VsbGkuIENvbXBsZXRlIHdpdGggdmVnZXRhYmxlIHRvcHBpbmdzIGFuZCBzaHJlZGRlZCBjaGlja2VuL3NhdXNhZ2UvbWVhdGJhbGxzLlwiXHJcbiAgICApLFxyXG4gIF07XHJcblxyXG4gIGFwcGVuZENoaWxkcmVuKHN1Yk1lbnVGb29kcywgZm9vZEl0ZW1zKTtcclxuXHJcbiAgLy8gRHJpbmtzXHJcbiAgbWVudUNvbnRlbnRJbm5lci5hcHBlbmRDaGlsZChzdWJNZW51RHJpbmtzKTtcclxuICBjb25zdCBkcmlua0l0ZW1zID0gW1xyXG4gICAgY3JlYXRlRXZlcnl0aGluZ0luc2lkZUZvb2RzKFxyXG4gICAgICBcIkp1cyBCdWFoIE1hbmdnYSAtIFJwMTBrXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9jZG4wLXByb2R1Y3Rpb24taW1hZ2VzLWtseS5ha2FtYWl6ZWQubmV0LzRxTFRhWGRNbjBqZmc5dFY2WkpKcC1TS0taMD0vMjYxeDA6OTI4eDY2Ny8xMjAweDEyMDAvZmlsdGVyczpxdWFsaXR5KDc1KTpzdHJpcF9pY2MoKTpmb3JtYXQod2VicCkva2x5LW1lZGlhLXByb2R1Y3Rpb24vbWVkaWFzLzMyNjc1NDIvb3JpZ2luYWwvMDU1Njg4MDAwXzE2MDI2NzQwOTMtc2h1dHRlcnN0b2NrXzEwNDUzOTc5MjMuanBnXCIsXHJcbiAgICAgIFwiTWFuZ28ganVpY2UgaXMgbWFkZSBmcm9tIHJpcGUgbWFuZ29lcy5cIlxyXG4gICAgKSxcclxuICAgIGNyZWF0ZUV2ZXJ5dGhpbmdJbnNpZGVGb29kcyhcclxuICAgICAgXCJUZWggU3VzdSAtIFJwMTBrXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9pLmdvamVrYXBpLmNvbS9kYXJrcm9vbS9nb2Zvb2QtaW5kb25lc2lhL3YyL2ltYWdlcy91cGxvYWRzL2MwNmViM2NmLWYxZTEtNGUxMC04Y2EwLWQ4MDk5NTUwNmUzZV9Hby1CaXpfMjAyMDA5MzBfMTUyNzQ1LmpwZWdcIixcclxuICAgICAgXCJBIG1peHR1cmUgb2YgdGVhIGFuZCBtaWxrIGluIGEgY2VydGFpbiBjb21wb3NpdGlvbi4gTWlsayB0ZWEgaXMgYSBtb2Rlcm4gZHJpbmsgdGhhdCBpcyB2ZXJ5IHBvcHVsYXIgYW5kIHRoaXMgbWlsayB0ZWEgaGFzIGl0cyBvd24gY2hhcmFjdGVyaXN0aWNzIGluIGl0cyBtYW51ZmFjdHVyZSwgZXNwZWNpYWxseSBpbiBBc2lhLlwiXHJcbiAgICApLFxyXG4gICAgY3JlYXRlRXZlcnl0aGluZ0luc2lkZUZvb2RzKFxyXG4gICAgICBcIkVzIFRlaCAtIFJwNWtcIixcclxuICAgICAgXCJodHRwczovL2JlYmVrYmtiLmNvbS9zdG9yYWdlLzIwMjAvMDIvZXMtdGVoLW1hbmlzLmpwZ1wiLFxyXG4gICAgICBcIkEgdGVhIGRyaW5rIHRoYXQgaXMgc2VydmVkIGNvbGQgd2l0aCBpY2UgY3ViZXMuXCJcclxuICAgICksXHJcbiAgXTtcclxuXHJcbiAgYXBwZW5kQ2hpbGRyZW4oc3ViTWVudURyaW5rcywgZHJpbmtJdGVtcyk7XHJcblxyXG4gIC8vIFNuYWNrc1xyXG4gIG1lbnVDb250ZW50SW5uZXIuYXBwZW5kQ2hpbGQoc3ViTWVudVNuYWNrcyk7XHJcbiAgY29uc3Qgc25hY2tJdGVtcyA9IFtcclxuICAgIGNyZWF0ZUV2ZXJ5dGhpbmdJbnNpZGVGb29kcyhcclxuICAgICAgXCJVc3VzIEtyaXNwaSAtIFJwNWtcIixcclxuICAgICAgXCJodHRwczovL3BheGVsbWFya2V0LmNvL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzAxL1NjcmVlbnNob3RfMjAyMjAxMDlfMTczMTE1LnBuZ1wiLFxyXG4gICAgICBcIlVzdXMgS3Jpc3BpIGlzIGNoaXBzIG1hZGUgZnJvbSBxdWFsaXR5IHNlbGVjdGVkIHJhdyBjaGlja2VuIGludGVzdGluZXMuIFRoZXNlIGNoaXBzIGFyZSBwcm9jZXNzZWQgdXNpbmcgYW4gZXh0cmFvcmRpbmFyeSB0ZWNobmlxdWUgdGhhdCBpbnZvbHZlcyBhIHZhcmlldHkgb2YgJ0luZG9uZXNpYW4gc3BlY2lhbCcgc3BpY2VzIHRvIHByb2R1Y2UgY2hpcHMgdGhhdCBhcmUgc2F2b3J5LCBkZWxpY2lvdXMsIHNvZnQsIGNydW5jaHkgbGlrZSBuZXZlciBiZWZvcmUuXCJcclxuICAgICksXHJcbiAgICBjcmVhdGVFdmVyeXRoaW5nSW5zaWRlRm9vZHMoXHJcbiAgICAgIFwiS3J1cHVrIEt1bGl0IC0gUnA1a1wiLFxyXG4gICAgICBcImh0dHBzOi8vY2RuMC1wcm9kdWN0aW9uLWltYWdlcy1rbHkuYWthbWFpemVkLm5ldC9zemNUM1RSMmdCby1EaW1VTEFhdUpheno2R0k9LzI2MXgwOjQ0MjJ4NDE2MS8xMjAweDEyMDAvZmlsdGVyczpxdWFsaXR5KDc1KTpzdHJpcF9pY2MoKTpmb3JtYXQod2VicCkva2x5LW1lZGlhLXByb2R1Y3Rpb24vbWVkaWFzLzM3NjQ4MzUvb3JpZ2luYWwvMDgwMDM5OTAwXzE2NDAwNTgxMTYtc2h1dHRlcnN0b2NrXzE4MjA3ODcxOTcuanBnXCIsXHJcbiAgICAgIFwiS3J1cHVrIGt1bGl0IGlzIGEgdHJhZGl0aW9uYWwgSW5kb25lc2lhbiBjYXR0bGUgc2tpbiBrcnVwdWsuIFRyYWRpdGlvbmFsbHkgaXQgaXMgbWFkZSBmcm9tIHRoZSBzb2Z0IGlubmVyIHNraW4gb2YgY2F0dGxlLCBkaWNlZCwgYW5kIHN1bi1kcmllZCB1bnRpbCBpdCBoYXJkZW5zIGFuZCBsb3NlcyBtb3N0IG9mIGl0cyB3YXRlciBjb250ZW50LlwiXHJcbiAgICApLFxyXG4gIF07XHJcblxyXG4gIGFwcGVuZENoaWxkcmVuKHN1Yk1lbnVTbmFja3MsIHNuYWNrSXRlbXMpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==