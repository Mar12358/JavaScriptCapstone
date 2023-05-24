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
const counterComments = (array) => {
    let num = 0;
    if (array.length > 0) {
        num = array.length
    }
    const counter = document.querySelector('.comment-counter');
    counter.innerHTML = `${num}`
}
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
/* harmony import */ var _counterComment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counterComment */ "./src/modules/counterComment.js");


const displayComment = async (id) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aZwedqY3IXDWCJKZoRkM/comments?item_id=${id}`)
    .then((res) => res.json()).then((item) => {
      const comments = document.querySelector('.comment-list');
      if (item.length === undefined) {
        comments.innerHTML = 'no comments';
        (0,_counterComment__WEBPACK_IMPORTED_MODULE_0__["default"])([]);
      } else {
        comments.innerHTML = '';
        item.forEach((subItem) => {
          comments.innerHTML += `<p class="span">
          ${subItem.creation_date} ${subItem.username}: ${subItem.comment} </p>`;
        });
        (0,_counterComment__WEBPACK_IMPORTED_MODULE_0__["default"])(item);
      }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComment);

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
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/modules/popup.js");
/* harmony import */ var _like_img_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../like_img.png */ "./src/like_img.png");



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
                        <a href=""><img class="like-icon" src=${_like_img_png__WEBPACK_IMPORTED_MODULE_1__["default"]} alt=""></a>
                        <span>5 likes</span>
                      </div>
                    </div>
                    <div class="btn-container"><button id="${id}" class="comment-button">Comments</button></div>
                    <div class="reservations-container"><button class="reservations-button">Reservations</button></div>`;

    container.appendChild(div);
  }
};

const onLoad = async () => {
  const meals = await getMeals();
  populateHTML(meals);
  (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onLoad);

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComments.js */ "./src/modules/displayComments.js");
/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addComment.js */ "./src/modules/addComment.js");



const toggle = () => {
  const elements = document.querySelectorAll('body > *');
  elements.forEach((element) => {
    element.classList.toggle('invisible');
  });
};

const commentsPopup = async (id) => {
  const popupDiv = document.querySelector('.popup-window');
  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) => res.json()).then((d) => {
    popupDiv.innerHTML = `
    <div class="test-div">
  
  <button id="btnClose">X</button>  
  <img src="${d.meals[0].strMealThumb}"/>
  </div>
  <h3 class="food-name">${d.meals[0].strMeal}</h3>

  <div class="names-content" id="names-content">
      <div class="area">Area: ${d.meals[0].strArea} </div>
      <div  class="likesNum">Likes:</div>
      <div  class="category">Category: ${d.meals[0].strCategory}</div>
      <div  class="strComment">strTags:${d.meals[0].strTags} </div>
  </div>
  <h3 class="show-comment-title"> Conments:(<span  class ="comment-counter"></span>)</h3>
  <div class="comment-list">  </div>

  <h3 class="add-comment-title"> Add Comments</h3>
  <form id ="form-comment">
  <input type="text", name ="name" class="userName" placeholder="Add your name" required>
  <textarea type="text", name="comment" class="userComent" cols="3" rows="5" placeholder="Add your comment" required></textarea>
  <button class="submit">Add new comment</button>  
  </form>
  `;
  });

  (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id);
  const btnClose = document.querySelector('#btnClose');
  btnClose.addEventListener('click', () => {
    toggle();
  });
  const submit = document.querySelector('.submit');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    (0,_addComment_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id);
  });
};

const commentsButtonListener = () => {
  const btn = document.querySelectorAll('.comment-button');
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', () => {
      toggle();
      commentsPopup(btn[i].id);
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsButtonListener);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/home_page.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0E3Qjs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0EsK0hBQStILEdBQUc7QUFDbEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxFQUFFLCtEQUFjO0FBQ2hCOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDckJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsSUFBSTtBQUMvQjtBQUNBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ1JpQjs7QUFFL0M7QUFDQSwrSEFBK0gsR0FBRztBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQWU7QUFDdkIsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFlBQVksdUJBQXVCLEVBQUUsaUJBQWlCLElBQUksaUJBQWlCO0FBQzNFLFNBQVM7QUFDVCxRQUFRLDJEQUFlO0FBQ3ZCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CbUI7QUFDVjs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBLFVBQVUsUUFBUTtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBFQUEwRSxLQUFLO0FBQy9FO0FBQ0EsZ0RBQWdELFNBQVM7QUFDekQ7QUFDQSxnRUFBZ0UscURBQU8sRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsR0FBRztBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBc0I7QUFDeEI7O0FBRUEsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7OztBQzNDNkI7QUFDVDs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLHNFQUFzRSxHQUFHO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx3QkFBd0I7QUFDdEM7QUFDQSwwQkFBMEIsbUJBQW1COztBQUU3QztBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQSx5Q0FBeUMsdUJBQXVCO0FBQ2hFLHlDQUF5QyxvQkFBb0I7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxFQUFFLCtEQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFVO0FBQ2QsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9saWtlX2ltZy5wbmciLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvYWRkQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb3VudGVyQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9kaXNwbGF5Q29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvaG9tZV9wYWdlLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3BvcHVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkNGEyOTliNGQxNzk5YWUzNjQ0OTM4ZGUyMzhiYTVhNC5wbmdcIjsiLCJpbXBvcnQgZGlzcGxheUNvbW1lbnQgZnJvbSAnLi9kaXNwbGF5Q29tbWVudHMuanMnO1xuXG5jb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlck5hbWUnKS52YWx1ZTtcbiAgY29uc3QgdXNlckNvbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyQ29tZW50JykudmFsdWU7XG4gIGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9hWndlZHFZM0lYRFdDSktab1JrTS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgdXNlcm5hbWU6IG5hbWUsXG4gICAgICBjb21tZW50OiB1c2VyQ29tZW50LFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSkudGhlbigoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tY29tbWVudCcpLnJlc2V0KCk7XG4gIH0pO1xuICBkaXNwbGF5Q29tbWVudChpZCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRDb21tZW50OyIsImNvbnN0IGNvdW50ZXJDb21tZW50cyA9IChhcnJheSkgPT4ge1xyXG4gICAgbGV0IG51bSA9IDA7XHJcbiAgICBpZiAoYXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIG51bSA9IGFycmF5Lmxlbmd0aFxyXG4gICAgfVxyXG4gICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWNvdW50ZXInKTtcclxuICAgIGNvdW50ZXIuaW5uZXJIVE1MID0gYCR7bnVtfWBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb3VudGVyQ29tbWVudHM7IiwiaW1wb3J0IGNvdW50ZXJDb21tZW50cyBmcm9tIFwiLi9jb3VudGVyQ29tbWVudFwiO1xuXG5jb25zdCBkaXNwbGF5Q29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvYVp3ZWRxWTNJWERXQ0pLWm9Sa00vY29tbWVudHM/aXRlbV9pZD0ke2lkfWApXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSkudGhlbigoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1saXN0Jyk7XG4gICAgICBpZiAoaXRlbS5sZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb21tZW50cy5pbm5lckhUTUwgPSAnbm8gY29tbWVudHMnO1xuICAgICAgICBjb3VudGVyQ29tbWVudHMoW10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tbWVudHMuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGl0ZW0uZm9yRWFjaCgoc3ViSXRlbSkgPT4ge1xuICAgICAgICAgIGNvbW1lbnRzLmlubmVySFRNTCArPSBgPHAgY2xhc3M9XCJzcGFuXCI+XG4gICAgICAgICAgJHtzdWJJdGVtLmNyZWF0aW9uX2RhdGV9ICR7c3ViSXRlbS51c2VybmFtZX06ICR7c3ViSXRlbS5jb21tZW50fSA8L3A+YDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvdW50ZXJDb21tZW50cyhpdGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29tbWVudDsiLCJpbXBvcnQgY29tbWVudHNCdXR0b25MaXN0ZW5lciBmcm9tICcuL3BvcHVwLmpzJztcbmltcG9ydCBsaWtlSW1nIGZyb20gJy4uL2xpa2VfaW1nLnBuZyc7XG5cbmNvbnN0IEFQSXVybCA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvc2VhcmNoLnBocD9mPWYnO1xuXG5jb25zdCBnZXRNZWFscyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKEFQSXVybCk7XG4gIGNvbnN0IHsgbWVhbHMgfSA9IGF3YWl0IGRhdGEuanNvbigpO1xuICByZXR1cm4gbWVhbHM7XG59O1xuXG5jb25zdCBwb3B1bGF0ZUhUTUwgPSAobWVhbHMpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb2QtbGlzdCcpO1xuICAvKiBjb25zb2xlLmxvZyhtZWFscyk7ICovXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSArPSAxKSB7XG4gICAgY29uc3QgaWQgPSBtZWFsc1tpXS5pZE1lYWw7XG4gICAgY29uc3QgbWVhbE5hbWUgPSBtZWFsc1tpXS5zdHJNZWFsO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltZyA9IG1lYWxzW2ldLnN0ck1lYWxUaHVtYjtcblxuICAgIGRpdi5pZCA9IGlkO1xuICAgIGRpdi5jbGFzc05hbWUgPSAnY2FyZC1lbGVtZW50JztcbiAgICBkaXYuaW5uZXJIVE1MID0gYDxhIGNsYXNzPVwiaW1nLWNvbnRhaW5lclwiPjxpbWcgY2xhc3M9XCJtZWFsLWltZ1wiIHNyYz0ke2ltZ30gYWx0PVwiXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWVhbC1uYW1lXCI+JHttZWFsTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpa2UtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+PGltZyBjbGFzcz1cImxpa2UtaWNvblwiIHNyYz0ke2xpa2VJbWd9IGFsdD1cIlwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjUgbGlrZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWNvbnRhaW5lclwiPjxidXR0b24gaWQ9XCIke2lkfVwiIGNsYXNzPVwiY29tbWVudC1idXR0b25cIj5Db21tZW50czwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2YXRpb25zLWNvbnRhaW5lclwiPjxidXR0b24gY2xhc3M9XCJyZXNlcnZhdGlvbnMtYnV0dG9uXCI+UmVzZXJ2YXRpb25zPC9idXR0b24+PC9kaXY+YDtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICB9XG59O1xuXG5jb25zdCBvbkxvYWQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG1lYWxzID0gYXdhaXQgZ2V0TWVhbHMoKTtcbiAgcG9wdWxhdGVIVE1MKG1lYWxzKTtcbiAgY29tbWVudHNCdXR0b25MaXN0ZW5lcigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgb25Mb2FkOyIsImltcG9ydCBkaXNwbGF5Q29tbWVudCBmcm9tICcuL2Rpc3BsYXlDb21tZW50cy5qcyc7XG5pbXBvcnQgYWRkQ29tbWVudCBmcm9tICcuL2FkZENvbW1lbnQuanMnO1xuXG5jb25zdCB0b2dnbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYm9keSA+IConKTtcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaW52aXNpYmxlJyk7XG4gIH0pO1xufTtcblxuY29uc3QgY29tbWVudHNQb3B1cCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBwb3B1cERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13aW5kb3cnKTtcbiAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JHtpZH1gKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpLnRoZW4oKGQpID0+IHtcbiAgICBwb3B1cERpdi5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInRlc3QtZGl2XCI+XG4gIFxuICA8YnV0dG9uIGlkPVwiYnRuQ2xvc2VcIj5YPC9idXR0b24+ICBcbiAgPGltZyBzcmM9XCIke2QubWVhbHNbMF0uc3RyTWVhbFRodW1ifVwiLz5cbiAgPC9kaXY+XG4gIDxoMyBjbGFzcz1cImZvb2QtbmFtZVwiPiR7ZC5tZWFsc1swXS5zdHJNZWFsfTwvaDM+XG5cbiAgPGRpdiBjbGFzcz1cIm5hbWVzLWNvbnRlbnRcIiBpZD1cIm5hbWVzLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhcmVhXCI+QXJlYTogJHtkLm1lYWxzWzBdLnN0ckFyZWF9IDwvZGl2PlxuICAgICAgPGRpdiAgY2xhc3M9XCJsaWtlc051bVwiPkxpa2VzOjwvZGl2PlxuICAgICAgPGRpdiAgY2xhc3M9XCJjYXRlZ29yeVwiPkNhdGVnb3J5OiAke2QubWVhbHNbMF0uc3RyQ2F0ZWdvcnl9PC9kaXY+XG4gICAgICA8ZGl2ICBjbGFzcz1cInN0ckNvbW1lbnRcIj5zdHJUYWdzOiR7ZC5tZWFsc1swXS5zdHJUYWdzfSA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxoMyBjbGFzcz1cInNob3ctY29tbWVudC10aXRsZVwiPiBDb25tZW50czooPHNwYW4gIGNsYXNzID1cImNvbW1lbnQtY291bnRlclwiPjwvc3Bhbj4pPC9oMz5cbiAgPGRpdiBjbGFzcz1cImNvbW1lbnQtbGlzdFwiPiAgPC9kaXY+XG5cbiAgPGgzIGNsYXNzPVwiYWRkLWNvbW1lbnQtdGl0bGVcIj4gQWRkIENvbW1lbnRzPC9oMz5cbiAgPGZvcm0gaWQgPVwiZm9ybS1jb21tZW50XCI+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiLCBuYW1lID1cIm5hbWVcIiBjbGFzcz1cInVzZXJOYW1lXCIgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBuYW1lXCIgcmVxdWlyZWQ+XG4gIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiLCBuYW1lPVwiY29tbWVudFwiIGNsYXNzPVwidXNlckNvbWVudFwiIGNvbHM9XCIzXCIgcm93cz1cIjVcIiBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnRcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICA8YnV0dG9uIGNsYXNzPVwic3VibWl0XCI+QWRkIG5ldyBjb21tZW50PC9idXR0b24+ICBcbiAgPC9mb3JtPlxuICBgO1xuICB9KTtcblxuICBkaXNwbGF5Q29tbWVudChpZCk7XG4gIGNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bkNsb3NlJyk7XG4gIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZ2dsZSgpO1xuICB9KTtcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRDb21tZW50KGlkKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjb21tZW50c0J1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idXR0b24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidG4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBidG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0b2dnbGUoKTtcbiAgICAgIGNvbW1lbnRzUG9wdXAoYnRuW2ldLmlkKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudHNCdXR0b25MaXN0ZW5lcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=