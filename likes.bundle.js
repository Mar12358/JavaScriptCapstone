"use strict";
(self["webpackChunkjavascriptcapstone"] = self["webpackChunkjavascriptcapstone"] || []).push([["likes"],{

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/likes.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLElBQUk7QUFDSixlQUFlO0FBQ2Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSw2QkFBNkIsV0FBVztBQUN4QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvbGlrZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSW52QVBJdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2Fad2VkcVkzSVhEV0NKS1pvUmtNL2xpa2VzJztcblxuZXhwb3J0IGNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goSW52QVBJdXJsLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgIH1cbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcbiAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL2pzb24nKSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgaWYgdGhlIHJlc3BvbnNlIGJvZHkgaXMgZW1wdHkgb3Igbm90IGluIEpTT04gZm9ybWF0XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFtdOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgaW4gY2FzZSBvZiBhbiBlcnJvclxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTGlrZXNPbkRPTSA9IChsaWtlQnRuKSA9PiB7XG4gIGNvbnN0IGxpa2VFbGVtZW50ID0gbGlrZUJ0bi5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGNvbnN0IGxpa2VzID0gTnVtYmVyKGxpa2VFbGVtZW50LmlubmVySFRNTC5zcGxpdCgnICcpWzBdKTtcbiAgbGlrZUVsZW1lbnQuaW5uZXJIVE1MID0gYCR7bGlrZXMgKyAxfSBsaWtlc2A7XG59O1xuZXhwb3J0IGNvbnN0IGFkZExpa2UgPSAobGlrZUJ0bikgPT4ge1xuICBmZXRjaChJbnZBUEl1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBsaWtlQnRuLmlkLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRMaWtlc0xpc3RlbmVyQnV0dG9ucyA9ICgpID0+IHtcbiAgY29uc3QgbGlrZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZS1idG4nKTtcbiAgbGlrZUJ1dHRvbnMuZm9yRWFjaCgobGlrZUJ0bikgPT4ge1xuICAgIGxpa2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhZGRMaWtlKGxpa2VCdG4pO1xuICAgICAgdXBkYXRlTGlrZXNPbkRPTShsaWtlQnRuKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9