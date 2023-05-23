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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEMsNkNBQTZDLDJCQUEyQjtBQUN4RTtBQUNBOztBQUVBLGlFQUFlLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbW1lbnRzUG9wdXAgPSAoaWQpID0+IHtcbiAgLy8geW91ciBjb2RldyB3aXRoIGlkXG59O1xuXG5jb25zdCBjb21tZW50c0J1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idXR0b24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidG4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBidG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGNvbW1lbnRzUG9wdXAoYnRuW2ldLmlkKTsgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRzQnV0dG9uTGlzdGVuZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9