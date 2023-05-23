"use strict";
(self["webpackChunkjavascriptcapstone"] = self["webpackChunkjavascriptcapstone"] || []).push([["renderHeaderFooter"],{

/***/ "./src/header_logo.png":
/*!*****************************!*\
  !*** ./src/header_logo.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "914a58ac15fc61bda00cf097c56c0011.png");

/***/ }),

/***/ "./src/modules/render_header_footer.js":
/*!*********************************************!*\
  !*** ./src/modules/render_header_footer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header_logo.png */ "./src/header_logo.png");


const renderHeaderFooter = () => {
  const body = document.querySelector('body');
  const nav = document.createElement('nav');
  const section = document.createElement('section');
  section.className = 'container';
  const footer = document.createElement('footer');
  const h1 = document.querySelector('h1');
  nav.innerHTML = `<a><img id="header-logo" src=${_header_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"]} alt="header_logo"></a>
                  <ul>
                    <li><a id="items-link" href="">Items</a></li>
                    <li><a href="">Categories</a></li>
                    <li><a href="">Ingredients</a></li>
                  </ul>`;

  section.innerHTML = `<div class="food-list">
                       </div>`;

  footer.innerHTML = '<p>Created by Microverse students by MIT license</p>';
  body.insertBefore(nav, h1);
  body.appendChild(section);
  body.appendChild(footer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHeaderFooter);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/render_header_footer.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVySGVhZGVyRm9vdGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQW5DOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCx3REFBVSxFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9oZWFkZXJfbG9nby5wbmciLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvcmVuZGVyX2hlYWRlcl9mb290ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkxNGE1OGFjMTVmYzYxYmRhMDBjZjA5N2M1NmMwMDExLnBuZ1wiOyIsImltcG9ydCBoZWFkZXJMb2dvIGZyb20gJy4uL2hlYWRlcl9sb2dvLnBuZyc7XG5cbmNvbnN0IHJlbmRlckhlYWRlckZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIHNlY3Rpb24uY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gIG5hdi5pbm5lckhUTUwgPSBgPGE+PGltZyBpZD1cImhlYWRlci1sb2dvXCIgc3JjPSR7aGVhZGVyTG9nb30gYWx0PVwiaGVhZGVyX2xvZ29cIj48L2E+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBpZD1cIml0ZW1zLWxpbmtcIiBocmVmPVwiXCI+SXRlbXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj5DYXRlZ29yaWVzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+SW5ncmVkaWVudHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+YDtcblxuICBzZWN0aW9uLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZm9vZC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgZm9vdGVyLmlubmVySFRNTCA9ICc8cD5DcmVhdGVkIGJ5IE1pY3JvdmVyc2Ugc3R1ZGVudHMgYnkgTUlUIGxpY2Vuc2U8L3A+JztcbiAgYm9keS5pbnNlcnRCZWZvcmUobmF2LCBoMSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhlYWRlckZvb3RlcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=