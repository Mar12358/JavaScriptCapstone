"use strict";
(self["webpackChunkjavascriptcapstone"] = self["webpackChunkjavascriptcapstone"] || []).push([["home"],{

/***/ "./src/like_img.png":
/*!**************************!*\
  !*** ./src/like_img.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d4a299b4d1799ae3644938de238ba5a4.png");

/***/ }),

/***/ "./src/modules/home_page.js":
/*!**********************************!*\
  !*** ./src/modules/home_page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _like_img_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../like_img.png */ "./src/like_img.png");


const APIurl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=f';

const getMeals = async () => {
  const data = await fetch(APIurl);
  const { meals } = await data.json();
  return meals;
};

const populateHTML = (meals) => {
  const container = document.querySelector('.food-list');
  /* console.log(meals); */
  for (let i = 0; i < 6; i += 1) {
    const id = meals[i].idMeal;
    const mealName = meals[i].strMeal;
    const div = document.createElement('div');
    const img = meals[i].strMealThumb;

    div.id = id;
    div.className = 'card-element';
    div.innerHTML = `<a class="img-container"><img class="meal-img" src=${img} alt=""></a>
                    <div class="info">
                      <span class="meal-name">${mealName}</span>
                      <div class="like-div">
                        <a href=""><img class="like-icon" src=${_like_img_png__WEBPACK_IMPORTED_MODULE_0__["default"]} alt=""></a>
                        <span>5 likes</span>
                      </div>
                    </div>
                    <div class="btn-container"><button class="comment-button">Comments</button></div>
                    <div class="reservations-container"><button class="reservations-button">Reservations</button></div>`;

    container.appendChild(div);
  }
};

const onLoad = async () => {
  const meals = await getMeals();
  populateHTML(meals);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onLoad);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/home_page.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0F6Qzs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBLFVBQVUsUUFBUTtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBFQUEwRSxLQUFLO0FBQy9FO0FBQ0EsZ0RBQWdELFNBQVM7QUFDekQ7QUFDQSxnRUFBZ0UscURBQU8sRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL2xpa2VfaW1nLnBuZyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9ob21lX3BhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ0YTI5OWI0ZDE3OTlhZTM2NDQ5MzhkZTIzOGJhNWE0LnBuZ1wiOyIsImltcG9ydCBsaWtlSW1nIGZyb20gJy4uL2xpa2VfaW1nLnBuZyc7XG5cbmNvbnN0IEFQSXVybCA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvc2VhcmNoLnBocD9mPWYnO1xuXG5jb25zdCBnZXRNZWFscyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKEFQSXVybCk7XG4gIGNvbnN0IHsgbWVhbHMgfSA9IGF3YWl0IGRhdGEuanNvbigpO1xuICByZXR1cm4gbWVhbHM7XG59O1xuXG5jb25zdCBwb3B1bGF0ZUhUTUwgPSAobWVhbHMpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb2QtbGlzdCcpO1xuICAvKiBjb25zb2xlLmxvZyhtZWFscyk7ICovXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSArPSAxKSB7XG4gICAgY29uc3QgaWQgPSBtZWFsc1tpXS5pZE1lYWw7XG4gICAgY29uc3QgbWVhbE5hbWUgPSBtZWFsc1tpXS5zdHJNZWFsO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltZyA9IG1lYWxzW2ldLnN0ck1lYWxUaHVtYjtcblxuICAgIGRpdi5pZCA9IGlkO1xuICAgIGRpdi5jbGFzc05hbWUgPSAnY2FyZC1lbGVtZW50JztcbiAgICBkaXYuaW5uZXJIVE1MID0gYDxhIGNsYXNzPVwiaW1nLWNvbnRhaW5lclwiPjxpbWcgY2xhc3M9XCJtZWFsLWltZ1wiIHNyYz0ke2ltZ30gYWx0PVwiXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWVhbC1uYW1lXCI+JHttZWFsTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpa2UtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+PGltZyBjbGFzcz1cImxpa2UtaWNvblwiIHNyYz0ke2xpa2VJbWd9IGFsdD1cIlwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjUgbGlrZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWNvbnRhaW5lclwiPjxidXR0b24gY2xhc3M9XCJjb21tZW50LWJ1dHRvblwiPkNvbW1lbnRzPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXNlcnZhdGlvbnMtY29udGFpbmVyXCI+PGJ1dHRvbiBjbGFzcz1cInJlc2VydmF0aW9ucy1idXR0b25cIj5SZXNlcnZhdGlvbnM8L2J1dHRvbj48L2Rpdj5gO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbn07XG5cbmNvbnN0IG9uTG9hZCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbWVhbHMgPSBhd2FpdCBnZXRNZWFscygpO1xuICBwb3B1bGF0ZUhUTUwobWVhbHMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgb25Mb2FkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==