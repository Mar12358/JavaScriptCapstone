"use strict";
(self["webpackChunkjavascriptcapstone"] = self["webpackChunkjavascriptcapstone"] || []).push([["popup"],{

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line no-unused-vars
const commentsPopup = (id) => {
  // your codew with id
};

const commentsButtonListener = () => {
  const btn = document.querySelectorAll('.comment-button');
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', () => { commentsPopup(btn[i].id); });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsButtonListener);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/popup.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQyw2Q0FBNkMsMkJBQTJCO0FBQ3hFO0FBQ0E7O0FBRUEsaUVBQWUsc0JBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvcG9wdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5jb25zdCBjb21tZW50c1BvcHVwID0gKGlkKSA9PiB7XG4gIC8vIHlvdXIgY29kZXcgd2l0aCBpZFxufTtcblxuY29uc3QgY29tbWVudHNCdXR0b25MaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQtYnV0dG9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnRuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYnRuW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBjb21tZW50c1BvcHVwKGJ0bltpXS5pZCk7IH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21tZW50c0J1dHRvbkxpc3RlbmVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==