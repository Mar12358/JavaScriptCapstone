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
  const footer = document.createElement('section');
  const h1 = document.querySelector('h1');
  nav.innerHTML = `<nav>
                    <a><img id="header-logo" src=${_header_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"]} alt="header_logo"></a>
                    <ul>
                      <li><a href="">Items(6)</a></li>
                      <li><a href="">Categories</a></li>
                      <li><a href="">Ingredients</a></li>
                    </ul>
                  </nav>`;

  section.innerHTML = `<section class="container">
                        <div class="food-list">
                          food will be render here
                        </div>
                      </section>`;

  footer.innerHTML = `<footer>
                        <p>Created by Microverse students by MIT license</p>
                      </footer>`;
  body.insertBefore(nav, h1);
  body.appendChild(section);
  body.appendChild(footer);
  const btn = document.createElement('button');
  btn.innerHTML = 'Comments';
  body.appendChild(btn);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHeaderFooter);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/render_header_footer.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVySGVhZGVyRm9vdGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQW5DOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCx3REFBVSxFQUFFO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9oZWFkZXJfbG9nby5wbmciLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvcmVuZGVyX2hlYWRlcl9mb290ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjkxNGE1OGFjMTVmYzYxYmRhMDBjZjA5N2M1NmMwMDExLnBuZ1wiOyIsImltcG9ydCBoZWFkZXJMb2dvIGZyb20gJy4uL2hlYWRlcl9sb2dvLnBuZyc7XG5cbmNvbnN0IHJlbmRlckhlYWRlckZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICBuYXYuaW5uZXJIVE1MID0gYDxuYXY+XG4gICAgICAgICAgICAgICAgICAgIDxhPjxpbWcgaWQ9XCJoZWFkZXItbG9nb1wiIHNyYz0ke2hlYWRlckxvZ299IGFsdD1cImhlYWRlcl9sb2dvXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj5JdGVtcyg2KTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+Q2F0ZWdvcmllczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+SW5ncmVkaWVudHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvbmF2PmA7XG5cbiAgc2VjdGlvbi5pbm5lckhUTUwgPSBgPHNlY3Rpb24gY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb29kLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9vZCB3aWxsIGJlIHJlbmRlciBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+YDtcblxuICBmb290ZXIuaW5uZXJIVE1MID0gYDxmb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5DcmVhdGVkIGJ5IE1pY3JvdmVyc2Ugc3R1ZGVudHMgYnkgTUlUIGxpY2Vuc2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+YDtcbiAgYm9keS5pbnNlcnRCZWZvcmUobmF2LCBoMSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi5pbm5lckhUTUwgPSAnQ29tbWVudHMnO1xuICBib2R5LmFwcGVuZENoaWxkKGJ0bik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIZWFkZXJGb290ZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9