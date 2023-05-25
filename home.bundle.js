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
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes.js */ "./src/modules/likes.js");
/* harmony import */ var _items_counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items_counter.js */ "./src/modules/items_counter.js");





const MealsAPIurl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=f';

const getMeals = async () => {
  const data = await fetch(MealsAPIurl);
  const { meals } = await data.json();
  return meals;
};

const populateHTML = (meals, allLikes) => {
  const container = document.querySelector('.food-list');
  /* console.log(meals); */
  for (let i = 0; i < 6; i += 1) {
    const id = meals[i].idMeal;
    const mealName = meals[i].strMeal;
    const div = document.createElement('div');
    const img = meals[i].strMealThumb;
    const mealLikes = allLikes.find((like) => like.item_id === id);
    div.id = id;
    div.className = 'card-element';
    div.innerHTML = `<a class="img-container"><img class="meal-img" src=${img} alt=""></a>
                    <div class="info">
                      <span class="meal-name">${mealName}</span>
                      <div class="like-div">
                        <a id=${id} class="like-btn" href=""><img class="like-icon" src=${_like_img_png__WEBPACK_IMPORTED_MODULE_1__["default"]} alt=""></a>
                        <span>${mealLikes ? mealLikes.likes : 0} likes</span>
                      </div>
                    </div>
                    <div class="btn-container"><button id="${id}" class="comment-button">Comments</button></div>
                    <div class="reservations-container"><button class="reservations-button">Reservations</button></div>`;

    container.appendChild(div);
  }
  (0,_items_counter_js__WEBPACK_IMPORTED_MODULE_3__["default"])(container);
  // items-link id
  (0,_likes_js__WEBPACK_IMPORTED_MODULE_2__.addLikesListenerButtons)();
};

const onLoad = async () => {
  const meals = await getMeals();
  const allLikes = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();
  populateHTML(meals, allLikes);
  (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onLoad);

/***/ }),

/***/ "./src/modules/items_counter.js":
/*!**************************************!*\
  !*** ./src/modules/items_counter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemsCounter = (items) => {
  const count = items.childElementCount;
  const itemsBtnNav = document.getElementById('items-link');
  itemsBtnNav.innerHTML = `Items(${count})`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounter);

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLike: () => (/* binding */ addLike),
/* harmony export */   addLikesListenerButtons: () => (/* binding */ addLikesListenerButtons),
/* harmony export */   getLikes: () => (/* binding */ getLikes),
/* harmony export */   updateLikesOnDOM: () => (/* binding */ updateLikesOnDOM)
/* harmony export */ });
const InvAPIurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/aZwedqY3IXDWCJKZoRkM/likes';

const getLikes = async () => {
  try {
    const response = await fetch(InvAPIurl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    }
    return []; // Return an empty array if the response body is empty or not in JSON format
  } catch (error) {
    return []; // Return an empty array in case of an error
  }
};

const updateLikesOnDOM = (likeBtn) => {
  const likeElement = likeBtn.nextElementSibling;
  const likes = Number(likeElement.innerHTML.split(' ')[0]);
  likeElement.innerHTML = `${likes + 1} likes`;
};
const addLike = (likeBtn) => {
  fetch(InvAPIurl, {
    method: 'POST',
    body: JSON.stringify({
      item_id: likeBtn.id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    });
};

const addLikesListenerButtons = () => {
  const likeButtons = document.querySelectorAll('.like-btn');
  likeButtons.forEach((likeBtn) => {
    likeBtn.addEventListener('click', (event) => {
      event.preventDefault();
      addLike(likeBtn);
      updateLikesOnDOM(likeBtn);
    });
  });
};


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
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes.js */ "./src/modules/likes.js");




const toggle = () => {
  const elements = document.querySelectorAll('body > *');
  elements.forEach((element) => {
    element.classList.toggle('invisible');
  });
};

const likeFuncion = async (id) => {
  const divLike = document.querySelector('.likesNum');
  const allLikes = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();
  const mealLikes = allLikes.find((like) => like.item_id === id);
  divLike.innerHTML = ` Likes: ${mealLikes.likes}`;
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
      <div  class="likesNum"></div>
      <div  class="category">Category: ${d.meals[0].strCategory}</div>
      <div  class="strComment">strTags: ${d.meals[0].strTags} </div>
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
  likeFuncion(id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxJQUFJLDBEQUFVO0FBQ2QsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9saWtlX2ltZy5wbmciLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvYWRkQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb3VudGVyQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9kaXNwbGF5Q29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvaG9tZV9wYWdlLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2l0ZW1zX2NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvcG9wdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ0YTI5OWI0ZDE3OTlhZTM2NDQ5MzhkZTIzOGJhNWE0LnBuZ1wiOyIsImltcG9ydCBkaXNwbGF5Q29tbWVudCBmcm9tICcuL2Rpc3BsYXlDb21tZW50cy5qcyc7XG5cbmNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyTmFtZScpLnZhbHVlO1xuICBjb25zdCB1c2VyQ29tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJDb21lbnQnKS52YWx1ZTtcbiAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2Fad2VkcVkzSVhEV0NKS1pvUmtNL2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaWQsXG4gICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgIGNvbW1lbnQ6IHVzZXJDb21lbnQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KS50aGVuKCgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1jb21tZW50JykucmVzZXQoKTtcbiAgfSk7XG4gIGRpc3BsYXlDb21tZW50KGlkKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZENvbW1lbnQ7IiwiY29uc3QgY291bnRlckNvbW1lbnRzID0gKGl0ZW0pID0+IHtcbiAgY29uc3QgbnVtID0gaXRlbS5sZW5ndGg7XG4gIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1jb3VudGVyJyk7XG4gIGNvdW50ZXIuaW5uZXJIVE1MID0gYCR7bnVtfWA7XG59O1xuZXhwb3J0IGRlZmF1bHQgY291bnRlckNvbW1lbnRzOyIsImltcG9ydCBjb3VudGVyQ29tbWVudHMgZnJvbSAnLi9jb3VudGVyQ29tbWVudC5qcyc7XG5cbmNvbnN0IGRpc3BsYXlDb21tZW50ID0gYXN5bmMgKGlkKSA9PiB7XG4gIGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9hWndlZHFZM0lYRFdDSktab1JrTS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YClcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKS50aGVuKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxpc3QnKTtcbiAgICAgIGlmIChpdGVtLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbW1lbnRzLmlubmVySFRNTCA9ICdubyBjb21tZW50cyc7XG4gICAgICAgIGNvdW50ZXJDb21tZW50cyhbXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21tZW50cy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaXRlbS5mb3JFYWNoKChzdWJJdGVtKSA9PiB7XG4gICAgICAgICAgY29tbWVudHMuaW5uZXJIVE1MICs9IGA8cCBjbGFzcz1cInNwYW5cIj5cbiAgICAgICAgICAke3N1Ykl0ZW0uY3JlYXRpb25fZGF0ZX0gJHtzdWJJdGVtLnVzZXJuYW1lfTogJHtzdWJJdGVtLmNvbW1lbnR9IDwvcD5gO1xuICAgICAgICB9KTtcbiAgICAgICAgY291bnRlckNvbW1lbnRzKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb21tZW50OyIsImltcG9ydCBjb21tZW50c0J1dHRvbkxpc3RlbmVyIGZyb20gJy4vcG9wdXAuanMnO1xuaW1wb3J0IGxpa2VJbWcgZnJvbSAnLi4vbGlrZV9pbWcucG5nJztcbmltcG9ydCB7IGdldExpa2VzLCBhZGRMaWtlc0xpc3RlbmVyQnV0dG9ucyB9IGZyb20gJy4vbGlrZXMuanMnO1xuaW1wb3J0IGl0ZW1zQ291bnRlciBmcm9tICcuL2l0ZW1zX2NvdW50ZXIuanMnO1xuXG5jb25zdCBNZWFsc0FQSXVybCA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvc2VhcmNoLnBocD9mPWYnO1xuXG5jb25zdCBnZXRNZWFscyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKE1lYWxzQVBJdXJsKTtcbiAgY29uc3QgeyBtZWFscyB9ID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gIHJldHVybiBtZWFscztcbn07XG5cbmNvbnN0IHBvcHVsYXRlSFRNTCA9IChtZWFscywgYWxsTGlrZXMpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb2QtbGlzdCcpO1xuICAvKiBjb25zb2xlLmxvZyhtZWFscyk7ICovXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSArPSAxKSB7XG4gICAgY29uc3QgaWQgPSBtZWFsc1tpXS5pZE1lYWw7XG4gICAgY29uc3QgbWVhbE5hbWUgPSBtZWFsc1tpXS5zdHJNZWFsO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltZyA9IG1lYWxzW2ldLnN0ck1lYWxUaHVtYjtcbiAgICBjb25zdCBtZWFsTGlrZXMgPSBhbGxMaWtlcy5maW5kKChsaWtlKSA9PiBsaWtlLml0ZW1faWQgPT09IGlkKTtcbiAgICBkaXYuaWQgPSBpZDtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ2NhcmQtZWxlbWVudCc7XG4gICAgZGl2LmlubmVySFRNTCA9IGA8YSBjbGFzcz1cImltZy1jb250YWluZXJcIj48aW1nIGNsYXNzPVwibWVhbC1pbWdcIiBzcmM9JHtpbWd9IGFsdD1cIlwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1lYWwtbmFtZVwiPiR7bWVhbE5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaWQ9JHtpZH0gY2xhc3M9XCJsaWtlLWJ0blwiIGhyZWY9XCJcIj48aW1nIGNsYXNzPVwibGlrZS1pY29uXCIgc3JjPSR7bGlrZUltZ30gYWx0PVwiXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHttZWFsTGlrZXMgPyBtZWFsTGlrZXMubGlrZXMgOiAwfSBsaWtlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tY29udGFpbmVyXCI+PGJ1dHRvbiBpZD1cIiR7aWR9XCIgY2xhc3M9XCJjb21tZW50LWJ1dHRvblwiPkNvbW1lbnRzPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXNlcnZhdGlvbnMtY29udGFpbmVyXCI+PGJ1dHRvbiBjbGFzcz1cInJlc2VydmF0aW9ucy1idXR0b25cIj5SZXNlcnZhdGlvbnM8L2J1dHRvbj48L2Rpdj5gO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbiAgaXRlbXNDb3VudGVyKGNvbnRhaW5lcik7XG4gIC8vIGl0ZW1zLWxpbmsgaWRcbiAgYWRkTGlrZXNMaXN0ZW5lckJ1dHRvbnMoKTtcbn07XG5cbmNvbnN0IG9uTG9hZCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbWVhbHMgPSBhd2FpdCBnZXRNZWFscygpO1xuICBjb25zdCBhbGxMaWtlcyA9IGF3YWl0IGdldExpa2VzKCk7XG4gIHBvcHVsYXRlSFRNTChtZWFscywgYWxsTGlrZXMpO1xuICBjb21tZW50c0J1dHRvbkxpc3RlbmVyKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvbkxvYWQ7IiwiY29uc3QgaXRlbXNDb3VudGVyID0gKGl0ZW1zKSA9PiB7XG4gIGNvbnN0IGNvdW50ID0gaXRlbXMuY2hpbGRFbGVtZW50Q291bnQ7XG4gIGNvbnN0IGl0ZW1zQnRuTmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1zLWxpbmsnKTtcbiAgaXRlbXNCdG5OYXYuaW5uZXJIVE1MID0gYEl0ZW1zKCR7Y291bnR9KWA7XG59O1xuZXhwb3J0IGRlZmF1bHQgaXRlbXNDb3VudGVyOyIsImNvbnN0IEludkFQSXVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9hWndlZHFZM0lYRFdDSktab1JrTS9saWtlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEludkFQSXVybCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICB9XG4gICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJyk7XG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLmluY2x1ZGVzKCdhcHBsaWNhdGlvbi9qc29uJykpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuICAgIHJldHVybiBbXTsgLy8gUmV0dXJuIGFuIGVtcHR5IGFycmF5IGlmIHRoZSByZXNwb25zZSBib2R5IGlzIGVtcHR5IG9yIG5vdCBpbiBKU09OIGZvcm1hdFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBbXTsgLy8gUmV0dXJuIGFuIGVtcHR5IGFycmF5IGluIGNhc2Ugb2YgYW4gZXJyb3JcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxpa2VzT25ET00gPSAobGlrZUJ0bikgPT4ge1xuICBjb25zdCBsaWtlRWxlbWVudCA9IGxpa2VCdG4ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBjb25zdCBsaWtlcyA9IE51bWJlcihsaWtlRWxlbWVudC5pbm5lckhUTUwuc3BsaXQoJyAnKVswXSk7XG4gIGxpa2VFbGVtZW50LmlubmVySFRNTCA9IGAke2xpa2VzICsgMX0gbGlrZXNgO1xufTtcbmV4cG9ydCBjb25zdCBhZGRMaWtlID0gKGxpa2VCdG4pID0+IHtcbiAgZmV0Y2goSW52QVBJdXJsLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogbGlrZUJ0bi5pZCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkTGlrZXNMaXN0ZW5lckJ1dHRvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IGxpa2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2UtYnRuJyk7XG4gIGxpa2VCdXR0b25zLmZvckVhY2goKGxpa2VCdG4pID0+IHtcbiAgICBsaWtlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYWRkTGlrZShsaWtlQnRuKTtcbiAgICAgIHVwZGF0ZUxpa2VzT25ET00obGlrZUJ0bik7XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCBkaXNwbGF5Q29tbWVudCBmcm9tICcuL2Rpc3BsYXlDb21tZW50cy5qcyc7XG5pbXBvcnQgYWRkQ29tbWVudCBmcm9tICcuL2FkZENvbW1lbnQuanMnO1xuaW1wb3J0IHsgZ2V0TGlrZXMgfSBmcm9tICcuL2xpa2VzLmpzJztcblxuY29uc3QgdG9nZ2xlID0gKCkgPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2JvZHkgPiAqJyk7XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2ludmlzaWJsZScpO1xuICB9KTtcbn07XG5cbmNvbnN0IGxpa2VGdW5jaW9uID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IGRpdkxpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlrZXNOdW0nKTtcbiAgY29uc3QgYWxsTGlrZXMgPSBhd2FpdCBnZXRMaWtlcygpO1xuICBjb25zdCBtZWFsTGlrZXMgPSBhbGxMaWtlcy5maW5kKChsaWtlKSA9PiBsaWtlLml0ZW1faWQgPT09IGlkKTtcbiAgZGl2TGlrZS5pbm5lckhUTUwgPSBgIExpa2VzOiAke21lYWxMaWtlcy5saWtlc31gO1xufTtcblxuY29uc3QgY29tbWVudHNQb3B1cCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBwb3B1cERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13aW5kb3cnKTtcbiAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JHtpZH1gKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpLnRoZW4oKGQpID0+IHtcbiAgICBwb3B1cERpdi5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInRlc3QtZGl2XCI+XG4gIFxuICA8YnV0dG9uIGlkPVwiYnRuQ2xvc2VcIj5YPC9idXR0b24+ICBcbiAgPGltZyBzcmM9XCIke2QubWVhbHNbMF0uc3RyTWVhbFRodW1ifVwiLz5cbiAgPC9kaXY+XG4gIDxoMyBjbGFzcz1cImZvb2QtbmFtZVwiPiR7ZC5tZWFsc1swXS5zdHJNZWFsfTwvaDM+XG5cbiAgPGRpdiBjbGFzcz1cIm5hbWVzLWNvbnRlbnRcIiBpZD1cIm5hbWVzLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhcmVhXCI+QXJlYTogJHtkLm1lYWxzWzBdLnN0ckFyZWF9IDwvZGl2PlxuICAgICAgPGRpdiAgY2xhc3M9XCJsaWtlc051bVwiPjwvZGl2PlxuICAgICAgPGRpdiAgY2xhc3M9XCJjYXRlZ29yeVwiPkNhdGVnb3J5OiAke2QubWVhbHNbMF0uc3RyQ2F0ZWdvcnl9PC9kaXY+XG4gICAgICA8ZGl2ICBjbGFzcz1cInN0ckNvbW1lbnRcIj5zdHJUYWdzOiAke2QubWVhbHNbMF0uc3RyVGFnc30gPC9kaXY+XG4gIDwvZGl2PlxuICA8aDMgY2xhc3M9XCJzaG93LWNvbW1lbnQtdGl0bGVcIj4gQ29ubWVudHM6KDxzcGFuICBjbGFzcyA9XCJjb21tZW50LWNvdW50ZXJcIj48L3NwYW4+KTwvaDM+XG4gIDxkaXYgY2xhc3M9XCJjb21tZW50LWxpc3RcIj4gIDwvZGl2PlxuXG4gIDxoMyBjbGFzcz1cImFkZC1jb21tZW50LXRpdGxlXCI+IEFkZCBDb21tZW50czwvaDM+XG4gIDxmb3JtIGlkID1cImZvcm0tY29tbWVudFwiPlxuICA8aW5wdXQgdHlwZT1cInRleHRcIiwgbmFtZSA9XCJuYW1lXCIgY2xhc3M9XCJ1c2VyTmFtZVwiIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgbmFtZVwiIHJlcXVpcmVkPlxuICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiwgbmFtZT1cImNvbW1lbnRcIiBjbGFzcz1cInVzZXJDb21lbnRcIiBjb2xzPVwiM1wiIHJvd3M9XCI1XCIgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50XCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgPGJ1dHRvbiBjbGFzcz1cInN1Ym1pdFwiPkFkZCBuZXcgY29tbWVudDwvYnV0dG9uPiAgXG4gIDwvZm9ybT5cbiAgYDtcbiAgfSk7XG4gIGxpa2VGdW5jaW9uKGlkKTtcbiAgZGlzcGxheUNvbW1lbnQoaWQpO1xuICBjb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5DbG9zZScpO1xuICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2dnbGUoKTtcbiAgfSk7XG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQnKTtcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkQ29tbWVudChpZCk7XG4gIH0pO1xufTtcblxuY29uc3QgY29tbWVudHNCdXR0b25MaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQtYnV0dG9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnRuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYnRuW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdG9nZ2xlKCk7XG4gICAgICBjb21tZW50c1BvcHVwKGJ0bltpXS5pZCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRzQnV0dG9uTGlzdGVuZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9