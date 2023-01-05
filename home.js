/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************************************************************!*\
  !*** ../../../../ #JavaScript/2. TOP/4. Restaurant Page/Restaurant_Page/src/home.js ***!
  \**************************************************************************************/
//... kita mengambil element dengan id "content", karena element dengan id "content" juga memiliki nama class "content"
//... dan jika kita atur style css hanya untuk classnya yaitu ".content" maka tetap akan bekerja
//... kalo ingin bukti coba saja console.log
//... jadi kedepannya bisa kita buat element yang memiliki class dan id
content = document.getElementById("content");
content.textContent = "write everyting below";

const homeContentContainer = document.createElement("div");
homeContentContainer.className = "home_content_container";
homeContentContainer.textContent = "test...home";

content.appendChild(homeContentContainer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4uLy4uLy4uLy4uL1x1MDAwMCNKYXZhU2NyaXB0LzIuIFRPUC80LiBSZXN0YXVyYW50IFBhZ2UvUmVzdGF1cmFudF9QYWdlL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vLi4uIGtpdGEgbWVuZ2FtYmlsIGVsZW1lbnQgZGVuZ2FuIGlkIFwiY29udGVudFwiLCBrYXJlbmEgZWxlbWVudCBkZW5nYW4gaWQgXCJjb250ZW50XCIganVnYSBtZW1pbGlraSBuYW1hIGNsYXNzIFwiY29udGVudFwiXHJcbi8vLi4uIGRhbiBqaWthIGtpdGEgYXR1ciBzdHlsZSBjc3MgaGFueWEgdW50dWsgY2xhc3NueWEgeWFpdHUgXCIuY29udGVudFwiIG1ha2EgdGV0YXAgYWthbiBiZWtlcmphXHJcbi8vLi4uIGthbG8gaW5naW4gYnVrdGkgY29iYSBzYWphIGNvbnNvbGUubG9nXHJcbi8vLi4uIGphZGkga2VkZXBhbm55YSBiaXNhIGtpdGEgYnVhdCBlbGVtZW50IHlhbmcgbWVtaWxpa2kgY2xhc3MgZGFuIGlkXHJcbmNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbmNvbnRlbnQudGV4dENvbnRlbnQgPSBcIndyaXRlIGV2ZXJ5dGluZyBiZWxvd1wiO1xyXG5cclxuY29uc3QgaG9tZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5ob21lQ29udGVudENvbnRhaW5lci5jbGFzc05hbWUgPSBcImhvbWVfY29udGVudF9jb250YWluZXJcIjtcclxuaG9tZUNvbnRlbnRDb250YWluZXIudGV4dENvbnRlbnQgPSBcInRlc3QuLi5ob21lXCI7XHJcblxyXG5jb250ZW50LmFwcGVuZENoaWxkKGhvbWVDb250ZW50Q29udGFpbmVyKTtcclxuXHJcbi8vIGtvbnNlcCBidXR0b24gYWN0aXZlIGRhbiB0aWRhayBhY3RpdmVcclxuLy8gc2FhdCBidXR0b24gdW50dWsgaG9tZSBha3RpZiwgbWFrYSBidXR0b24gdW50dWsgbWVudSBkYW4gY29udGFjdCB0aWRhayBha3RpZlxyXG4vLy4uLmJlZ2l0dSBwdWxhIHVudHVrIGJ1dHRvbiBtZW51IGRhbiBjb250YWN0XHJcbi8vLi4uc2VoaW5nZ2EgbmFudGkgbXVuZ2tpbiBwYWthaSBsb29wIHVudHVrIGFkZCBhY3RpdmUgYXRhdSByZW1vdmUgYWN0aXZlXHJcblxyXG4vLyBraXRhIGJ1YXQga29kZSBhZ2FyIG1hc2luZy1tYXNpbmcgYnV0dG9uIGJla2VyamEgc2VtZXN0aW55YSBkdWx1XHJcbi8vLi4ua2VtdWRpYW4ga2l0YSBpc2kga29udGVubnlhIG9rZT9cclxuXHJcbi8vIGtpdGEgZWRpdCBpc2kgZGFyaSBob21lIHBhZ2UgZGlzaW5pXHJcbi8vLi4ubGFsdSBpc2kgZGFyaSBob21lIHBhZ2UgdGVyc2VidXQga2l0YSBqYWRpa2FuIGZ1bmN0aW9uXHJcbi8vLi4ua2VtdWRpYW4gZnVuY3Rpb24gdGVyc2VidXQga2l0YSBleHBvcnQgZGFuIGRpaW1wb3J0IGRpIG1haW4uanNcclxuLy8uLi5kaSBkYWxhbSBtYWluLmpzIGtpdGEgYnVhdCBidXR0b24gdW50dWsgbWVtYW5nZ2lsIGZ1bmN0aW9uIGRpc2luaVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=