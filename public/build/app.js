(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
var title = document.title;

if (title == "Accueil") {
  document.getElementById("nav-home").setAttribute("class", "active");
} else if (title == "Informations") {
  document.getElementById("nav-info").setAttribute("class", "active");
} else if (title == "Contact") {
  document.getElementById("nav-contact").setAttribute("class", "active");
} else if (title == "Horaires") {
  document.getElementById("nav-contact").setAttribute("class", "active");
} else if (title == "Connexion") {
  document.getElementById("nav-login").setAttribute("class", "active");
} // any CSS you require will output into a single css file (app.scss in this case)


__webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");

 // Need jQuery? Install it with "yarn add jquery", then uncomment to require it.

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); //
//console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiXSwibmFtZXMiOlsidGl0bGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwicmVxdWlyZSIsIiQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0EsSUFBSUEsS0FBSyxHQUFHQyxRQUFRLENBQUNELEtBQXJCOztBQUNBLElBQUdBLEtBQUssSUFBSSxTQUFaLEVBQXVCO0FBQ3RCQyxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLFlBQXBDLENBQWlELE9BQWpELEVBQTBELFFBQTFEO0FBQ0EsQ0FGRCxNQUVPLElBQUlILEtBQUssSUFBSSxjQUFiLEVBQTZCO0FBQ25DQyxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLFlBQXBDLENBQWlELE9BQWpELEVBQTBELFFBQTFEO0FBQ0EsQ0FGTSxNQUVBLElBQUlILEtBQUssSUFBSSxTQUFiLEVBQXdCO0FBQzlCQyxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUNDLFlBQXZDLENBQW9ELE9BQXBELEVBQTZELFFBQTdEO0FBQ0EsQ0FGTSxNQUVDLElBQUlILEtBQUssSUFBSSxVQUFiLEVBQXlCO0FBQ2hDQyxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUNDLFlBQXZDLENBQW9ELE9BQXBELEVBQTZELFFBQTdEO0FBQ0EsQ0FGTyxNQUVELElBQUlILEtBQUssSUFBSSxXQUFiLEVBQTBCO0FBQ2hDQyxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNDLFlBQXJDLENBQWtELE9BQWxELEVBQTJELFFBQTNEO0FBQ0EsQyxDQUVEOzs7QUFDQUMsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFQOztDQUdBOztBQUNBLElBQU1DLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQixDLENBQ0E7QUFDQSxtRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG5sZXQgdGl0bGUgPSBkb2N1bWVudC50aXRsZTtcclxuaWYodGl0bGUgPT0gXCJBY2N1ZWlsXCIpIHtcclxuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWhvbWVcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhY3RpdmVcIik7XHJcbn0gZWxzZSBpZiAodGl0bGUgPT0gXCJJbmZvcm1hdGlvbnNcIikge1xyXG4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtaW5mb1wiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZVwiKTtcclxufSBlbHNlIGlmICh0aXRsZSA9PSBcIkNvbnRhY3RcIikge1xyXG4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtY29udGFjdFwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZVwiKTtcclxufSAgZWxzZSBpZiAodGl0bGUgPT0gXCJIb3JhaXJlc1wiKSB7XHJcbiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1jb250YWN0XCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWN0aXZlXCIpO1xyXG59IGVsc2UgaWYgKHRpdGxlID09IFwiQ29ubmV4aW9uXCIpIHtcclxuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWxvZ2luXCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5zY3NzIGluIHRoaXMgY2FzZSlcclxucmVxdWlyZSgnLi4vY3NzL2FwcC5zY3NzJyk7XHJcbmltcG9ydCAnYm9vdHN0cmFwJztcclxuXHJcbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gcmVxdWlyZSBpdC5cclxuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG4vL1xyXG4vL2NvbnNvbGUubG9nKCdIZWxsbyBXZWJwYWNrIEVuY29yZSEgRWRpdCBtZSBpbiBhc3NldHMvanMvYXBwLmpzJyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=