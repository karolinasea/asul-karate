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
  document.getElementById("nav-schedules").setAttribute("class", "active");
} else if (title == "Connexion") {
  document.getElementById("nav-login").setAttribute("class", "active");
} // any CSS you require will output into a single css file (app.scss in this case)


__webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");

 // Need jQuery? Install it with "yarn add jquery", then uncomment to require it.

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); //
//console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiXSwibmFtZXMiOlsidGl0bGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwicmVxdWlyZSIsIiQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0EsSUFBSUEsS0FBSyxHQUFHQyxRQUFRLENBQUNELEtBQXJCOztBQUNBLElBQUdBLEtBQUssSUFBSSxTQUFaLEVBQXVCO0FBQ3RCQyxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLFlBQXBDLENBQWlELE9BQWpELEVBQTBELFFBQTFEO0FBQ0EsQ0FGRCxNQUVPLElBQUlILEtBQUssSUFBSSxjQUFiLEVBQTZCO0FBQ25DQyxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NDLFlBQXBDLENBQWlELE9BQWpELEVBQTBELFFBQTFEO0FBQ0EsQ0FGTSxNQUVBLElBQUlILEtBQUssSUFBSSxTQUFiLEVBQXdCO0FBQzlCQyxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUNDLFlBQXZDLENBQW9ELE9BQXBELEVBQTZELFFBQTdEO0FBQ0EsQ0FGTSxNQUVDLElBQUlILEtBQUssSUFBSSxVQUFiLEVBQXlCO0FBQ2hDQyxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNDLFlBQXpDLENBQXNELE9BQXRELEVBQStELFFBQS9EO0FBQ0EsQ0FGTyxNQUVELElBQUlILEtBQUssSUFBSSxXQUFiLEVBQTBCO0FBQ2hDQyxVQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUNDLFlBQXJDLENBQWtELE9BQWxELEVBQTJELFFBQTNEO0FBQ0EsQyxDQUVEOzs7QUFDQUMsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFQOztDQUdBOztBQUNBLElBQU1DLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQixDLENBQ0E7QUFDQSxtRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxubGV0IHRpdGxlID0gZG9jdW1lbnQudGl0bGU7XG5pZih0aXRsZSA9PSBcIkFjY3VlaWxcIikge1xuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWhvbWVcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhY3RpdmVcIik7XG59IGVsc2UgaWYgKHRpdGxlID09IFwiSW5mb3JtYXRpb25zXCIpIHtcbiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1pbmZvXCIpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWN0aXZlXCIpO1xufSBlbHNlIGlmICh0aXRsZSA9PSBcIkNvbnRhY3RcIikge1xuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWNvbnRhY3RcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhY3RpdmVcIik7XG59ICBlbHNlIGlmICh0aXRsZSA9PSBcIkhvcmFpcmVzXCIpIHtcbiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1zY2hlZHVsZXNcIikuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhY3RpdmVcIik7XG59IGVsc2UgaWYgKHRpdGxlID09IFwiQ29ubmV4aW9uXCIpIHtcbiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1sb2dpblwiKS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFjdGl2ZVwiKTtcbn1cblxuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuc2NzcyBpbiB0aGlzIGNhc2UpXG5yZXF1aXJlKCcuLi9jc3MvYXBwLnNjc3MnKTtcbmltcG9ydCAnYm9vdHN0cmFwJztcblxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byByZXF1aXJlIGl0LlxuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuLy9cbi8vY29uc29sZS5sb2coJ0hlbGxvIFdlYnBhY2sgRW5jb3JlISBFZGl0IG1lIGluIGFzc2V0cy9qcy9hcHAuanMnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=