"use strict";
(self["webpackChunkjavascriptcapstone"] = self["webpackChunkjavascriptcapstone"] || []).push([["addComment"],{

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComments.js */ "./src/modules/displayComments.js");


const addComment = async (id) => {
  const name = document.querySelector('.userName').value;
  const userComent = document.querySelector('.userComent').value;
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aZwedqY3IXDWCJKZoRkM/comments?item_id=${id}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: userComent,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => {
    document.querySelector('#form-comment').reset();
  });
  (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);

/***/ }),

/***/ "./src/modules/counterComment.js":
/*!***************************************!*\
  !*** ./src/modules/counterComment.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const counterComments = (item) => {
  const num = item.length;
  const counter = document.querySelector('.comment-counter');
  counter.innerHTML = `${num}`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterComments);

/***/ }),

/***/ "./src/modules/displayComments.js":
/*!****************************************!*\
  !*** ./src/modules/displayComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _counterComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counterComment.js */ "./src/modules/counterComment.js");


const displayComment = async (id) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aZwedqY3IXDWCJKZoRkM/comments?item_id=${id}`)
    .then((res) => res.json()).then((item) => {
      const comments = document.querySelector('.comment-list');
      if (item.length === undefined) {
        comments.innerHTML = 'no comments';
        (0,_counterComment_js__WEBPACK_IMPORTED_MODULE_0__["default"])([]);
      } else {
        comments.innerHTML = '';
        item.forEach((subItem) => {
          comments.innerHTML += `<p class="span">
          ${subItem.creation_date} ${subItem.username}: ${subItem.comment} </p>`;
        });
        (0,_counterComment_js__WEBPACK_IMPORTED_MODULE_0__["default"])(item);
      }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComment);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/addComment.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkQ29tbWVudC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBLCtIQUErSCxHQUFHO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsRUFBRSwrREFBYztBQUNoQjs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ3JCekI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLElBQUk7QUFDN0I7QUFDQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNMb0I7O0FBRWxEO0FBQ0EsK0hBQStILEdBQUc7QUFDbEk7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFlO0FBQ3ZCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVCQUF1QixFQUFFLGlCQUFpQixJQUFJLGlCQUFpQjtBQUMzRSxTQUFTO0FBQ1QsUUFBUSw4REFBZTtBQUN2QjtBQUNBLEtBQUs7QUFDTDtBQUNBLGlFQUFlLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9hZGRDb21tZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvdW50ZXJDb21tZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDb21tZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGlzcGxheUNvbW1lbnQgZnJvbSAnLi9kaXNwbGF5Q29tbWVudHMuanMnO1xuXG5jb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlck5hbWUnKS52YWx1ZTtcbiAgY29uc3QgdXNlckNvbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyQ29tZW50JykudmFsdWU7XG4gIGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9hWndlZHFZM0lYRFdDSktab1JrTS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgdXNlcm5hbWU6IG5hbWUsXG4gICAgICBjb21tZW50OiB1c2VyQ29tZW50LFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSkudGhlbigoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tY29tbWVudCcpLnJlc2V0KCk7XG4gIH0pO1xuICBkaXNwbGF5Q29tbWVudChpZCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRDb21tZW50OyIsImNvbnN0IGNvdW50ZXJDb21tZW50cyA9IChpdGVtKSA9PiB7XG4gIGNvbnN0IG51bSA9IGl0ZW0ubGVuZ3RoO1xuICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtY291bnRlcicpO1xuICBjb3VudGVyLmlubmVySFRNTCA9IGAke251bX1gO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJDb21tZW50czsiLCJpbXBvcnQgY291bnRlckNvbW1lbnRzIGZyb20gJy4vY291bnRlckNvbW1lbnQuanMnO1xuXG5jb25zdCBkaXNwbGF5Q29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvYVp3ZWRxWTNJWERXQ0pLWm9Sa00vY29tbWVudHM/aXRlbV9pZD0ke2lkfWApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSkudGhlbigoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1saXN0Jyk7XG4gICAgICBpZiAoaXRlbS5sZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb21tZW50cy5pbm5lckhUTUwgPSAnbm8gY29tbWVudHMnO1xuICAgICAgICBjb3VudGVyQ29tbWVudHMoW10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tbWVudHMuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGl0ZW0uZm9yRWFjaCgoc3ViSXRlbSkgPT4ge1xuICAgICAgICAgIGNvbW1lbnRzLmlubmVySFRNTCArPSBgPHAgY2xhc3M9XCJzcGFuXCI+XG4gICAgICAgICAgJHtzdWJJdGVtLmNyZWF0aW9uX2RhdGV9ICR7c3ViSXRlbS51c2VybmFtZX06ICR7c3ViSXRlbS5jb21tZW50fSA8L3A+YDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvdW50ZXJDb21tZW50cyhpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29tbWVudDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=