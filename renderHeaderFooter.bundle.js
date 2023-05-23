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
  btn.className = 'comment-button';
  btn.id = '42';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVySGVhZGVyRm9vdGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUscUJBQXVCLHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQW5DOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCx3REFBVSxFQUFFO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9zcmMvaGVhZGVyX2xvZ28ucG5nIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3JlbmRlcl9oZWFkZXJfZm9vdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5MTRhNThhYzE1ZmM2MWJkYTAwY2YwOTdjNTZjMDAxMS5wbmdcIjsiLCJpbXBvcnQgaGVhZGVyTG9nbyBmcm9tICcuLi9oZWFkZXJfbG9nby5wbmcnO1xuXG5jb25zdCByZW5kZXJIZWFkZXJGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKTtcbiAgbmF2LmlubmVySFRNTCA9IGA8bmF2PlxuICAgICAgICAgICAgICAgICAgICA8YT48aW1nIGlkPVwiaGVhZGVyLWxvZ29cIiBzcmM9JHtoZWFkZXJMb2dvfSBhbHQ9XCJoZWFkZXJfbG9nb1wiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+SXRlbXMoNik8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPkNhdGVnb3JpZXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIlwiPkluZ3JlZGllbnRzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L25hdj5gO1xuXG4gIHNlY3Rpb24uaW5uZXJIVE1MID0gYDxzZWN0aW9uIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvb2Qgd2lsbCBiZSByZW5kZXIgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPmA7XG5cbiAgZm9vdGVyLmlubmVySFRNTCA9IGA8Zm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q3JlYXRlZCBieSBNaWNyb3ZlcnNlIHN0dWRlbnRzIGJ5IE1JVCBsaWNlbnNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZm9vdGVyPmA7XG4gIGJvZHkuaW5zZXJ0QmVmb3JlKG5hdiwgaDEpO1xuICBib2R5LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4uaW5uZXJIVE1MID0gJ0NvbW1lbnRzJztcbiAgYnRuLmNsYXNzTmFtZSA9ICdjb21tZW50LWJ1dHRvbic7XG4gIGJ0bi5pZCA9ICc0Mic7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoYnRuKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhlYWRlckZvb3RlcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=