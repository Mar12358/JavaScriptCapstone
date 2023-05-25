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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/popup.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtEOztBQUVsRDtBQUNBO0FBQ0E7QUFDQSwrSEFBK0gsR0FBRztBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILEVBQUUsK0RBQWM7QUFDaEI7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUNyQnpCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixJQUFJO0FBQzdCO0FBQ0EsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDTG9COztBQUVsRDtBQUNBLCtIQUErSCxHQUFHO0FBQ2xJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4REFBZTtBQUN2QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1QkFBdUIsRUFBRSxpQkFBaUIsSUFBSSxpQkFBaUI7QUFDM0UsU0FBUztBQUNULFFBQVEsOERBQWU7QUFDdkI7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CN0I7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixJQUFJO0FBQ0osZUFBZTtBQUNmO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsNkJBQTZCLFdBQVc7QUFDeEM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERrRDtBQUNUO0FBQ0g7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsbURBQVE7QUFDakM7QUFDQSxpQ0FBaUMsZ0JBQWdCO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQSxzRUFBc0UsR0FBRztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsd0JBQXdCO0FBQ3RDO0FBQ0EsMEJBQTBCLG1CQUFtQjs7QUFFN0M7QUFDQSxnQ0FBZ0Msb0JBQW9CO0FBQ3BEO0FBQ0EseUNBQXlDLHVCQUF1QjtBQUNoRSwwQ0FBMEMsb0JBQW9CO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsK0RBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVU7QUFDZCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsc0JBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvYWRkQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb3VudGVyQ29tbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9kaXNwbGF5Q29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvcG9wdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRpc3BsYXlDb21tZW50IGZyb20gJy4vZGlzcGxheUNvbW1lbnRzLmpzJztcblxuY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJOYW1lJykudmFsdWU7XG4gIGNvbnN0IHVzZXJDb21lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlckNvbWVudCcpLnZhbHVlO1xuICBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvYVp3ZWRxWTNJWERXQ0pLWm9Sa00vY29tbWVudHM/aXRlbV9pZD0ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICAgIHVzZXJuYW1lOiBuYW1lLFxuICAgICAgY29tbWVudDogdXNlckNvbWVudCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pLnRoZW4oKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLWNvbW1lbnQnKS5yZXNldCgpO1xuICB9KTtcbiAgZGlzcGxheUNvbW1lbnQoaWQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkQ29tbWVudDsiLCJjb25zdCBjb3VudGVyQ29tbWVudHMgPSAoaXRlbSkgPT4ge1xuICBjb25zdCBudW0gPSBpdGVtLmxlbmd0aDtcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWNvdW50ZXInKTtcbiAgY291bnRlci5pbm5lckhUTUwgPSBgJHtudW19YDtcbn07XG5leHBvcnQgZGVmYXVsdCBjb3VudGVyQ29tbWVudHM7IiwiaW1wb3J0IGNvdW50ZXJDb21tZW50cyBmcm9tICcuL2NvdW50ZXJDb21tZW50LmpzJztcblxuY29uc3QgZGlzcGxheUNvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2Fad2VkcVkzSVhEV0NKS1pvUmtNL2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpLnRoZW4oKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbGlzdCcpO1xuICAgICAgaWYgKGl0ZW0ubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29tbWVudHMuaW5uZXJIVE1MID0gJ25vIGNvbW1lbnRzJztcbiAgICAgICAgY291bnRlckNvbW1lbnRzKFtdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbW1lbnRzLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpdGVtLmZvckVhY2goKHN1Ykl0ZW0pID0+IHtcbiAgICAgICAgICBjb21tZW50cy5pbm5lckhUTUwgKz0gYDxwIGNsYXNzPVwic3BhblwiPlxuICAgICAgICAgICR7c3ViSXRlbS5jcmVhdGlvbl9kYXRlfSAke3N1Ykl0ZW0udXNlcm5hbWV9OiAke3N1Ykl0ZW0uY29tbWVudH0gPC9wPmA7XG4gICAgICAgIH0pO1xuICAgICAgICBjb3VudGVyQ29tbWVudHMoaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNvbW1lbnQ7IiwiY29uc3QgSW52QVBJdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2Fad2VkcVkzSVhEV0NKS1pvUmtNL2xpa2VzJztcblxuZXhwb3J0IGNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goSW52QVBJdXJsLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgIH1cbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcbiAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL2pzb24nKSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgaWYgdGhlIHJlc3BvbnNlIGJvZHkgaXMgZW1wdHkgb3Igbm90IGluIEpTT04gZm9ybWF0XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFtdOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgaW4gY2FzZSBvZiBhbiBlcnJvclxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTGlrZXNPbkRPTSA9IChsaWtlQnRuKSA9PiB7XG4gIGNvbnN0IGxpa2VFbGVtZW50ID0gbGlrZUJ0bi5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGNvbnN0IGxpa2VzID0gTnVtYmVyKGxpa2VFbGVtZW50LmlubmVySFRNTC5zcGxpdCgnICcpWzBdKTtcbiAgbGlrZUVsZW1lbnQuaW5uZXJIVE1MID0gYCR7bGlrZXMgKyAxfSBsaWtlc2A7XG59O1xuZXhwb3J0IGNvbnN0IGFkZExpa2UgPSAobGlrZUJ0bikgPT4ge1xuICBmZXRjaChJbnZBUEl1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBsaWtlQnRuLmlkLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRMaWtlc0xpc3RlbmVyQnV0dG9ucyA9ICgpID0+IHtcbiAgY29uc3QgbGlrZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZS1idG4nKTtcbiAgbGlrZUJ1dHRvbnMuZm9yRWFjaCgobGlrZUJ0bikgPT4ge1xuICAgIGxpa2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhZGRMaWtlKGxpa2VCdG4pO1xuICAgICAgdXBkYXRlTGlrZXNPbkRPTShsaWtlQnRuKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IGRpc3BsYXlDb21tZW50IGZyb20gJy4vZGlzcGxheUNvbW1lbnRzLmpzJztcbmltcG9ydCBhZGRDb21tZW50IGZyb20gJy4vYWRkQ29tbWVudC5qcyc7XG5pbXBvcnQgeyBnZXRMaWtlcyB9IGZyb20gJy4vbGlrZXMuanMnO1xuXG5jb25zdCB0b2dnbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYm9keSA+IConKTtcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaW52aXNpYmxlJyk7XG4gIH0pO1xufTtcblxuY29uc3QgbGlrZUZ1bmNpb24gPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgZGl2TGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWtlc051bScpO1xuICBjb25zdCBhbGxMaWtlcyA9IGF3YWl0IGdldExpa2VzKCk7XG4gIGNvbnN0IG1lYWxMaWtlcyA9IGFsbExpa2VzLmZpbmQoKGxpa2UpID0+IGxpa2UuaXRlbV9pZCA9PT0gaWQpO1xuICBkaXZMaWtlLmlubmVySFRNTCA9IGAgTGlrZXM6ICR7bWVhbExpa2VzLmxpa2VzfWA7XG59O1xuXG5jb25zdCBjb21tZW50c1BvcHVwID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHBvcHVwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXdpbmRvdycpO1xuICBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT0ke2lkfWApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSkudGhlbigoZCkgPT4ge1xuICAgIHBvcHVwRGl2LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGVzdC1kaXZcIj5cbiAgXG4gIDxidXR0b24gaWQ9XCJidG5DbG9zZVwiPlg8L2J1dHRvbj4gIFxuICA8aW1nIHNyYz1cIiR7ZC5tZWFsc1swXS5zdHJNZWFsVGh1bWJ9XCIvPlxuICA8L2Rpdj5cbiAgPGgzIGNsYXNzPVwiZm9vZC1uYW1lXCI+JHtkLm1lYWxzWzBdLnN0ck1lYWx9PC9oMz5cblxuICA8ZGl2IGNsYXNzPVwibmFtZXMtY29udGVudFwiIGlkPVwibmFtZXMtY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFyZWFcIj5BcmVhOiAke2QubWVhbHNbMF0uc3RyQXJlYX0gPC9kaXY+XG4gICAgICA8ZGl2ICBjbGFzcz1cImxpa2VzTnVtXCI+PC9kaXY+XG4gICAgICA8ZGl2ICBjbGFzcz1cImNhdGVnb3J5XCI+Q2F0ZWdvcnk6ICR7ZC5tZWFsc1swXS5zdHJDYXRlZ29yeX08L2Rpdj5cbiAgICAgIDxkaXYgIGNsYXNzPVwic3RyQ29tbWVudFwiPnN0clRhZ3M6ICR7ZC5tZWFsc1swXS5zdHJUYWdzfSA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxoMyBjbGFzcz1cInNob3ctY29tbWVudC10aXRsZVwiPiBDb25tZW50czooPHNwYW4gIGNsYXNzID1cImNvbW1lbnQtY291bnRlclwiPjwvc3Bhbj4pPC9oMz5cbiAgPGRpdiBjbGFzcz1cImNvbW1lbnQtbGlzdFwiPiAgPC9kaXY+XG5cbiAgPGgzIGNsYXNzPVwiYWRkLWNvbW1lbnQtdGl0bGVcIj4gQWRkIENvbW1lbnRzPC9oMz5cbiAgPGZvcm0gaWQgPVwiZm9ybS1jb21tZW50XCI+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiLCBuYW1lID1cIm5hbWVcIiBjbGFzcz1cInVzZXJOYW1lXCIgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBuYW1lXCIgcmVxdWlyZWQ+XG4gIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiLCBuYW1lPVwiY29tbWVudFwiIGNsYXNzPVwidXNlckNvbWVudFwiIGNvbHM9XCIzXCIgcm93cz1cIjVcIiBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnRcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICA8YnV0dG9uIGNsYXNzPVwic3VibWl0XCI+QWRkIG5ldyBjb21tZW50PC9idXR0b24+ICBcbiAgPC9mb3JtPlxuICBgO1xuICB9KTtcbiAgbGlrZUZ1bmNpb24oaWQpO1xuICBkaXNwbGF5Q29tbWVudChpZCk7XG4gIGNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bkNsb3NlJyk7XG4gIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZ2dsZSgpO1xuICB9KTtcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRDb21tZW50KGlkKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjb21tZW50c0J1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idXR0b24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidG4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBidG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0b2dnbGUoKTtcbiAgICAgIGNvbW1lbnRzUG9wdXAoYnRuW2ldLmlkKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudHNCdXR0b25MaXN0ZW5lcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=