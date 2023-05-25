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
  const popUp = document.createElement('div');
  popUp.className = 'popup-window invisible';
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

  footer.innerHTML = '<p>Created by Microverse students under MIT license</p>';
  body.appendChild(popUp);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVySGVhZGVyRm9vdGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQW5DOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsd0RBQVUsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9oZWFkZXJfbG9nby5wbmciLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvcmVuZGVyX2hlYWRlcl9mb290ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkxNGE1OGFjMTVmYzYxYmRhMDBjZjA5N2M1NmMwMDExLnBuZ1wiOyIsImltcG9ydCBoZWFkZXJMb2dvIGZyb20gJy4uL2hlYWRlcl9sb2dvLnBuZyc7XG5cbmNvbnN0IHJlbmRlckhlYWRlckZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9wVXAuY2xhc3NOYW1lID0gJ3BvcHVwLXdpbmRvdyBpbnZpc2libGUnO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgc2VjdGlvbi5jbGFzc05hbWUgPSAnY29udGFpbmVyJztcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKTtcbiAgbmF2LmlubmVySFRNTCA9IGA8YT48aW1nIGlkPVwiaGVhZGVyLWxvZ29cIiBzcmM9JHtoZWFkZXJMb2dvfSBhbHQ9XCJoZWFkZXJfbG9nb1wiPjwvYT5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGlkPVwiaXRlbXMtbGlua1wiIGhyZWY9XCJcIj5JdGVtczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPkNhdGVnb3JpZXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj5JbmdyZWRpZW50czwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5gO1xuXG4gIHNlY3Rpb24uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJmb29kLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcblxuICBmb290ZXIuaW5uZXJIVE1MID0gJzxwPkNyZWF0ZWQgYnkgTWljcm92ZXJzZSBzdHVkZW50cyB1bmRlciBNSVQgbGljZW5zZTwvcD4nO1xuICBib2R5LmFwcGVuZENoaWxkKHBvcFVwKTtcbiAgYm9keS5pbnNlcnRCZWZvcmUobmF2LCBoMSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhlYWRlckZvb3RlcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=