"use strict";
(self["webpackChunkjavascriptcapstone"] = self["webpackChunkjavascriptcapstone"] || []).push([["popup"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/popup.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtEOztBQUVsRDtBQUNBO0FBQ0E7QUFDQSwrSEFBK0gsR0FBRztBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILEVBQUUsK0RBQWM7QUFDaEI7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUNyQnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixJQUFJO0FBQy9CO0FBQ0EsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDUmlCOztBQUUvQztBQUNBLCtIQUErSCxHQUFHO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBZTtBQUN2QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1QkFBdUIsRUFBRSxpQkFBaUIsSUFBSSxpQkFBaUI7QUFDM0UsU0FBUztBQUNULFFBQVEsMkRBQWU7QUFDdkI7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJxQjtBQUNUOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0Esc0VBQXNFLEdBQUc7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHdCQUF3QjtBQUN0QztBQUNBLDBCQUEwQixtQkFBbUI7O0FBRTdDO0FBQ0EsZ0NBQWdDLG9CQUFvQjtBQUNwRDtBQUNBLHlDQUF5Qyx1QkFBdUI7QUFDaEUseUNBQXlDLG9CQUFvQjtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILEVBQUUsK0RBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVU7QUFDZCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsc0JBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvYWRkQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb3VudGVyQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9kaXNwbGF5Q29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvcG9wdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRpc3BsYXlDb21tZW50IGZyb20gJy4vZGlzcGxheUNvbW1lbnRzLmpzJztcblxuY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJOYW1lJykudmFsdWU7XG4gIGNvbnN0IHVzZXJDb21lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlckNvbWVudCcpLnZhbHVlO1xuICBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvYVp3ZWRxWTNJWERXQ0pLWm9Sa00vY29tbWVudHM/aXRlbV9pZD0ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICAgIHVzZXJuYW1lOiBuYW1lLFxuICAgICAgY29tbWVudDogdXNlckNvbWVudCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pLnRoZW4oKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLWNvbW1lbnQnKS5yZXNldCgpO1xuICB9KTtcbiAgZGlzcGxheUNvbW1lbnQoaWQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkQ29tbWVudDsiLCJjb25zdCBjb3VudGVyQ29tbWVudHMgPSAoYXJyYXkpID0+IHtcclxuICAgIGxldCBudW0gPSAwO1xyXG4gICAgaWYgKGFycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBudW0gPSBhcnJheS5sZW5ndGhcclxuICAgIH1cclxuICAgIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1jb3VudGVyJyk7XHJcbiAgICBjb3VudGVyLmlubmVySFRNTCA9IGAke251bX1gXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY291bnRlckNvbW1lbnRzOyIsImltcG9ydCBjb3VudGVyQ29tbWVudHMgZnJvbSBcIi4vY291bnRlckNvbW1lbnRcIjtcblxuY29uc3QgZGlzcGxheUNvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2Fad2VkcVkzSVhEV0NKS1pvUmtNL2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpLnRoZW4oKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbGlzdCcpO1xuICAgICAgaWYgKGl0ZW0ubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29tbWVudHMuaW5uZXJIVE1MID0gJ25vIGNvbW1lbnRzJztcbiAgICAgICAgY291bnRlckNvbW1lbnRzKFtdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbW1lbnRzLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpdGVtLmZvckVhY2goKHN1Ykl0ZW0pID0+IHtcbiAgICAgICAgICBjb21tZW50cy5pbm5lckhUTUwgKz0gYDxwIGNsYXNzPVwic3BhblwiPlxuICAgICAgICAgICR7c3ViSXRlbS5jcmVhdGlvbl9kYXRlfSAke3N1Ykl0ZW0udXNlcm5hbWV9OiAke3N1Ykl0ZW0uY29tbWVudH0gPC9wPmA7XG4gICAgICAgIH0pO1xuICAgICAgICBjb3VudGVyQ29tbWVudHMoaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNvbW1lbnQ7IiwiaW1wb3J0IGRpc3BsYXlDb21tZW50IGZyb20gJy4vZGlzcGxheUNvbW1lbnRzLmpzJztcbmltcG9ydCBhZGRDb21tZW50IGZyb20gJy4vYWRkQ29tbWVudC5qcyc7XG5cbmNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdib2R5ID4gKicpO1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdpbnZpc2libGUnKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjb21tZW50c1BvcHVwID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHBvcHVwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXdpbmRvdycpO1xuICBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT0ke2lkfWApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSkudGhlbigoZCkgPT4ge1xuICAgIHBvcHVwRGl2LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGVzdC1kaXZcIj5cbiAgXG4gIDxidXR0b24gaWQ9XCJidG5DbG9zZVwiPlg8L2J1dHRvbj4gIFxuICA8aW1nIHNyYz1cIiR7ZC5tZWFsc1swXS5zdHJNZWFsVGh1bWJ9XCIvPlxuICA8L2Rpdj5cbiAgPGgzIGNsYXNzPVwiZm9vZC1uYW1lXCI+JHtkLm1lYWxzWzBdLnN0ck1lYWx9PC9oMz5cblxuICA8ZGl2IGNsYXNzPVwibmFtZXMtY29udGVudFwiIGlkPVwibmFtZXMtY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFyZWFcIj5BcmVhOiAke2QubWVhbHNbMF0uc3RyQXJlYX0gPC9kaXY+XG4gICAgICA8ZGl2ICBjbGFzcz1cImxpa2VzTnVtXCI+TGlrZXM6PC9kaXY+XG4gICAgICA8ZGl2ICBjbGFzcz1cImNhdGVnb3J5XCI+Q2F0ZWdvcnk6ICR7ZC5tZWFsc1swXS5zdHJDYXRlZ29yeX08L2Rpdj5cbiAgICAgIDxkaXYgIGNsYXNzPVwic3RyQ29tbWVudFwiPnN0clRhZ3M6JHtkLm1lYWxzWzBdLnN0clRhZ3N9IDwvZGl2PlxuICA8L2Rpdj5cbiAgPGgzIGNsYXNzPVwic2hvdy1jb21tZW50LXRpdGxlXCI+IENvbm1lbnRzOig8c3BhbiAgY2xhc3MgPVwiY29tbWVudC1jb3VudGVyXCI+PC9zcGFuPik8L2gzPlxuICA8ZGl2IGNsYXNzPVwiY29tbWVudC1saXN0XCI+ICA8L2Rpdj5cblxuICA8aDMgY2xhc3M9XCJhZGQtY29tbWVudC10aXRsZVwiPiBBZGQgQ29tbWVudHM8L2gzPlxuICA8Zm9ybSBpZCA9XCJmb3JtLWNvbW1lbnRcIj5cbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIsIG5hbWUgPVwibmFtZVwiIGNsYXNzPVwidXNlck5hbWVcIiBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIG5hbWVcIiByZXF1aXJlZD5cbiAgPHRleHRhcmVhIHR5cGU9XCJ0ZXh0XCIsIG5hbWU9XCJjb21tZW50XCIgY2xhc3M9XCJ1c2VyQ29tZW50XCIgY29scz1cIjNcIiByb3dzPVwiNVwiIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgY29tbWVudFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gIDxidXR0b24gY2xhc3M9XCJzdWJtaXRcIj5BZGQgbmV3IGNvbW1lbnQ8L2J1dHRvbj4gIFxuICA8L2Zvcm0+XG4gIGA7XG4gIH0pO1xuXG4gIGRpc3BsYXlDb21tZW50KGlkKTtcbiAgY29uc3QgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuQ2xvc2UnKTtcbiAgYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9nZ2xlKCk7XG4gIH0pO1xuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0Jyk7XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZENvbW1lbnQoaWQpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNvbW1lbnRzQnV0dG9uTGlzdGVuZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWJ1dHRvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ0bi5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGJ0bltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRvZ2dsZSgpO1xuICAgICAgY29tbWVudHNQb3B1cChidG5baV0uaWQpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21tZW50c0J1dHRvbkxpc3RlbmVyOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==