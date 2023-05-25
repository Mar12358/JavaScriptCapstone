"use strict";
(self["webpackChunkjavascriptcapstone"] = self["webpackChunkjavascriptcapstone"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Font.ttf */ "./src/Font.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: 'MyFont';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  text-decoration: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 14px;\r\n  font-family: 'MyFont', sans-serif;\r\n  list-style-type: none;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  gap: 5vw;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 1vh;\r\n  padding-bottom: 1vh;\r\n}\r\n\r\na {\r\n  color: black;\r\n}\r\n\r\nh1 {\r\n  display: none;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  gap: 6vw;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 10%;\r\n  bottom: 0;\r\n  border-top: 1px solid black;\r\n  text-align: center;\r\n}\r\n\r\n#header-logo {\r\n  height: 3rem;\r\n}\r\n\r\n/* poupup style starteded */\r\n\r\n.popup-window {\r\n  width: 65%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 10px;\r\n  margin: 2px auto;\r\n  border: 2px solid rgb(12, 12, 14);\r\n}\r\n\r\n.test-div {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  justify-content: center;\r\n  gap: 2%;\r\n}\r\n\r\n#btnClose {\r\n  font-size: 27px;\r\n  font-weight: bold;\r\n  width: 6%;\r\n  height: 15%;\r\n  background-color: inherit;\r\n  border: none;\r\n}\r\n\r\n.test-div img {\r\n  width: 40%;\r\n}\r\n\r\n.food-name {\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n.names-content {\r\n  justify-items: center;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  row-gap: 30px;\r\n  column-gap: 20px;\r\n  padding: 8px 30px;\r\n}\r\n\r\n.food-list {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: repeat(2, 1fr);\r\n  gap: 2vw;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  height: 80vh;\r\n  align-items: center;\r\n  align-self: center;\r\n}\r\n\r\n.card-element {\r\n  /* height: 15vh; */\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  /* align-items: center; */\r\n  gap: 0.5vh;\r\n  margin-bottom: 3vh;\r\n  padding-left: 2vw;\r\n  padding-right: 2vw;\r\n}\r\n\r\n.meal-img {\r\n  height: 20vh;\r\n}\r\n\r\n.img-container,\r\n.btn-container,\r\n.reservations-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.info {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.like-icon {\r\n  height: 20px;\r\n}\r\n\r\n.like-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.comment-button,\r\n.reservations-button {\r\n  width: 55%;\r\n  padding-top: 0.5vh;\r\n  padding-bottom: 0.5vh;\r\n  text-align: center;\r\n}\r\n\r\n.invisible {\r\n  display: none;\r\n}\r\n\r\n.show-comment-title,\r\n.add-comment-title {\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n.comment-list {\r\n  text-align: center;\r\n  font-style: italic;\r\n  font-size: 14px;\r\n  color: #555;\r\n}\r\n\r\n.comment-list .span {\r\n  margin: 6px;\r\n}\r\n\r\n#form-comment {\r\n  width: 50%;\r\n  align-self: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 5%;\r\n}\r\n\r\n.userName {\r\n  margin-top: 2%;\r\n  width: 40%;\r\n}\r\n\r\n.userComent {\r\n  width: 50%;\r\n}\r\n\r\n.submit {\r\n  margin-bottom: 5%;\r\n  width: 40%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,0DAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,SAAS;EACT,eAAe;EACf,iCAAiC;EACjC,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,SAAS;EACT,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA,2BAA2B;;AAE3B;EACE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,uBAAuB;EACvB,OAAO;AACT;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,SAAS;EACT,WAAW;EACX,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;;EAEtB,yBAAyB;EACzB,UAAU;EACV,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;;;EAGE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;;EAEE,UAAU;EACV,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,OAAO;AACT;;AAEA;EACE,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,UAAU;AACZ","sourcesContent":["@font-face {\r\n  font-family: 'MyFont';\r\n  src: url('./Font.ttf') format('ttf');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  text-decoration: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 14px;\r\n  font-family: 'MyFont', sans-serif;\r\n  list-style-type: none;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  gap: 5vw;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-top: 1vh;\r\n  padding-bottom: 1vh;\r\n}\r\n\r\na {\r\n  color: black;\r\n}\r\n\r\nh1 {\r\n  display: none;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  gap: 6vw;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 10%;\r\n  bottom: 0;\r\n  border-top: 1px solid black;\r\n  text-align: center;\r\n}\r\n\r\n#header-logo {\r\n  height: 3rem;\r\n}\r\n\r\n/* poupup style starteded */\r\n\r\n.popup-window {\r\n  width: 65%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 10px;\r\n  margin: 2px auto;\r\n  border: 2px solid rgb(12, 12, 14);\r\n}\r\n\r\n.test-div {\r\n  display: flex;\r\n  flex-direction: row-reverse;\r\n  justify-content: center;\r\n  gap: 2%;\r\n}\r\n\r\n#btnClose {\r\n  font-size: 27px;\r\n  font-weight: bold;\r\n  width: 6%;\r\n  height: 15%;\r\n  background-color: inherit;\r\n  border: none;\r\n}\r\n\r\n.test-div img {\r\n  width: 40%;\r\n}\r\n\r\n.food-name {\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n.names-content {\r\n  justify-items: center;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  row-gap: 30px;\r\n  column-gap: 20px;\r\n  padding: 8px 30px;\r\n}\r\n\r\n.food-list {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: repeat(2, 1fr);\r\n  gap: 2vw;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  height: 80vh;\r\n  align-items: center;\r\n  align-self: center;\r\n}\r\n\r\n.card-element {\r\n  /* height: 15vh; */\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  /* align-items: center; */\r\n  gap: 0.5vh;\r\n  margin-bottom: 3vh;\r\n  padding-left: 2vw;\r\n  padding-right: 2vw;\r\n}\r\n\r\n.meal-img {\r\n  height: 20vh;\r\n}\r\n\r\n.img-container,\r\n.btn-container,\r\n.reservations-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.info {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.like-icon {\r\n  height: 20px;\r\n}\r\n\r\n.like-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.comment-button,\r\n.reservations-button {\r\n  width: 55%;\r\n  padding-top: 0.5vh;\r\n  padding-bottom: 0.5vh;\r\n  text-align: center;\r\n}\r\n\r\n.invisible {\r\n  display: none;\r\n}\r\n\r\n.show-comment-title,\r\n.add-comment-title {\r\n  text-align: center;\r\n  margin: 10px;\r\n}\r\n\r\n.comment-list {\r\n  text-align: center;\r\n  font-style: italic;\r\n  font-size: 14px;\r\n  color: #555;\r\n}\r\n\r\n.comment-list .span {\r\n  margin: 6px;\r\n}\r\n\r\n#form-comment {\r\n  width: 50%;\r\n  align-self: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 5%;\r\n}\r\n\r\n.userName {\r\n  margin-top: 2%;\r\n  width: 40%;\r\n}\r\n\r\n.userComent {\r\n  width: 50%;\r\n}\r\n\r\n.submit {\r\n  margin-bottom: 5%;\r\n  width: 40%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_render_header_footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render_header_footer.js */ "./src/modules/render_header_footer.js");
/* harmony import */ var _modules_home_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home_page.js */ "./src/modules/home_page.js");




(0,_modules_render_header_footer_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_home_page_js__WEBPACK_IMPORTED_MODULE_2__["default"])();


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
  const popUp = document.createElement('div');
  popUp.className = 'popup-window invisible';
  const body = document.querySelector('body');
  const nav = document.createElement('nav');
  const section = document.createElement('section');
  section.className = 'container';
  const footer = document.createElement('footer');
  const h1 = document.querySelector('h1');
  nav.innerHTML = `<a><img id="header-logo" src=${_header_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"]} alt="header_logo"></a>
                  <ul>
                    <li><a id="items-link" href="">Items</a></li>
                    <li><a href="">Categories</a></li>
                    <li><a href="">Ingredients</a></li>
                  </ul>`;

  section.innerHTML = `<div class="food-list">
                       </div>`;

  footer.innerHTML = '<p>Created by Microverse students by MIT license</p>';
  body.appendChild(popUp);
  body.insertBefore(nav, h1);
  body.appendChild(section);
  body.appendChild(footer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHeaderFooter);

/***/ }),

/***/ "./src/Font.ttf":
/*!**********************!*\
  !*** ./src/Font.ttf ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "259732dfcad04ed46d6e.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQ7O0FBRUE7QUFDQTtBQUNBLHNFQUFzRSxHQUFHO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx3QkFBd0I7QUFDdEM7QUFDQSwwQkFBMEIsbUJBQW1COztBQUU3QztBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQSx5Q0FBeUMsdUJBQXVCO0FBQ2hFLDBDQUEwQyxvQkFBb0I7QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRSwrREFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBVTtBQUNkLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxzQkFBc0I7Ozs7Ozs7Ozs7Ozs7OztBQ3JFTzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHdEQUFVLEVBQUU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9zcmMvaGVhZGVyX2xvZ28ucG5nIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9saWtlX2ltZy5wbmciLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2FkZENvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvY291bnRlckNvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdGNhcHN0b25lLy4vc3JjL21vZHVsZXMvZGlzcGxheUNvbW1lbnRzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2hvbWVfcGFnZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0Y2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9pdGVtc19jb3VudGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2xpa2VzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3BvcHVwLmpzIiwid2VicGFjazovL2phdmFzY3JpcHRjYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3JlbmRlcl9oZWFkZXJfZm9vdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0ZvbnQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0dGYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTXlGb250Jywgc2Fucy1zZXJpZjtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDV2dztcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLXRvcDogMXZoO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDF2aDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA2dnc7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwJTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlci1sb2dvIHtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogcG91cHVwIHN0eWxlIHN0YXJ0ZWRlZCAqL1xcclxcblxcclxcbi5wb3B1cC13aW5kb3cge1xcclxcbiAgd2lkdGg6IDY1JTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAycHggYXV0bztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxMiwgMTIsIDE0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3QtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMiU7XFxyXFxufVxcclxcblxcclxcbiNidG5DbG9zZSB7XFxyXFxuICBmb250LXNpemU6IDI3cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHdpZHRoOiA2JTtcXHJcXG4gIGhlaWdodDogMTUlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3QtZGl2IGltZyB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1uYW1lIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWVzLWNvbnRlbnQge1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIHJvdy1nYXA6IDMwcHg7XFxyXFxuICBjb2x1bW4tZ2FwOiAyMHB4O1xcclxcbiAgcGFkZGluZzogOHB4IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb29kLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ2FwOiAydnc7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogODB2aDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWVsZW1lbnQge1xcclxcbiAgLyogaGVpZ2h0OiAxNXZoOyAqL1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcclxcbiAgZ2FwOiAwLjV2aDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDN2aDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnZ3O1xcclxcbiAgcGFkZGluZy1yaWdodDogMnZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWcge1xcclxcbiAgaGVpZ2h0OiAyMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lcixcXHJcXG4uYnRuLWNvbnRhaW5lcixcXHJcXG4ucmVzZXJ2YXRpb25zLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZS1pY29uIHtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnV0dG9uLFxcclxcbi5yZXNlcnZhdGlvbnMtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA1NSU7XFxyXFxuICBwYWRkaW5nLXRvcDogMC41dmg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMC41dmg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbnZpc2libGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctY29tbWVudC10aXRsZSxcXHJcXG4uYWRkLWNvbW1lbnQtdGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1saXN0IC5zcGFuIHtcXHJcXG4gIG1hcmdpbjogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZm9ybS1jb21tZW50IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJOYW1lIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIlO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnVzZXJDb21lbnQge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1JTtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsMERBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSwyQkFBMkI7O0FBRTNCO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsT0FBTztBQUNUOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtDQUFrQztFQUNsQyxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCOztFQUV0Qix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsT0FBTztBQUNUOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxyXFxuICBzcmM6IHVybCgnLi9Gb250LnR0ZicpIGZvcm1hdCgndHRmJyk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LWZhbWlseTogJ015Rm9udCcsIHNhbnMtc2VyaWY7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1dnc7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDF2aDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxdmg7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNnZ3O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMCU7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItbG9nbyB7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi8qIHBvdXB1cCBzdHlsZSBzdGFydGVkZWQgKi9cXHJcXG5cXHJcXG4ucG9wdXAtd2luZG93IHtcXHJcXG4gIHdpZHRoOiA2NSU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbjogMnB4IGF1dG87XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTIsIDEyLCAxNCk7XFxyXFxufVxcclxcblxcclxcbi50ZXN0LWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDIlO1xcclxcbn1cXHJcXG5cXHJcXG4jYnRuQ2xvc2Uge1xcclxcbiAgZm9udC1zaXplOiAyN3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB3aWR0aDogNiU7XFxyXFxuICBoZWlnaHQ6IDE1JTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50ZXN0LWRpdiBpbWcge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtbmFtZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYW1lcy1jb250ZW50IHtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICByb3ctZ2FwOiAzMHB4O1xcclxcbiAgY29sdW1uLWdhcDogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDhweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdhcDogMnZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDgwdmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1lbGVtZW50IHtcXHJcXG4gIC8qIGhlaWdodDogMTV2aDsgKi9cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXHJcXG4gIGdhcDogMC41dmg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzdmg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDJ2dztcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDJ2dztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaW1nIHtcXHJcXG4gIGhlaWdodDogMjB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1jb250YWluZXIsXFxyXFxuLmJ0bi1jb250YWluZXIsXFxyXFxuLnJlc2VydmF0aW9ucy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtaWNvbiB7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWJ1dHRvbixcXHJcXG4ucmVzZXJ2YXRpb25zLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNTUlO1xcclxcbiAgcGFkZGluZy10b3A6IDAuNXZoO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNXZoO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW52aXNpYmxlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWNvbW1lbnQtdGl0bGUsXFxyXFxuLmFkZC1jb21tZW50LXRpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtbGlzdCAuc3BhbiB7XFxyXFxuICBtYXJnaW46IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvcm0tY29tbWVudCB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogNSU7XFxyXFxufVxcclxcblxcclxcbi51c2VyTmFtZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxufVxcclxcblxcclxcbi51c2VyQ29tZW50IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNSU7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTE0YTU4YWMxNWZjNjFiZGEwMGNmMDk3YzU2YzAwMTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImQ0YTI5OWI0ZDE3OTlhZTM2NDQ5MzhkZTIzOGJhNWE0LnBuZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgcmVuZGVySGVhZGVyRm9vdGVyIGZyb20gJy4vbW9kdWxlcy9yZW5kZXJfaGVhZGVyX2Zvb3Rlci5qcyc7XG5pbXBvcnQgb25Mb2FkIGZyb20gJy4vbW9kdWxlcy9ob21lX3BhZ2UuanMnO1xuXG5yZW5kZXJIZWFkZXJGb290ZXIoKTtcbm9uTG9hZCgpO1xuIiwiaW1wb3J0IGRpc3BsYXlDb21tZW50IGZyb20gJy4vZGlzcGxheUNvbW1lbnRzLmpzJztcblxuY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJOYW1lJykudmFsdWU7XG4gIGNvbnN0IHVzZXJDb21lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlckNvbWVudCcpLnZhbHVlO1xuICBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvYVp3ZWRxWTNJWERXQ0pLWm9Sa00vY29tbWVudHM/aXRlbV9pZD0ke2lkfWAsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICAgIHVzZXJuYW1lOiBuYW1lLFxuICAgICAgY29tbWVudDogdXNlckNvbWVudCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pLnRoZW4oKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLWNvbW1lbnQnKS5yZXNldCgpO1xuICB9KTtcbiAgZGlzcGxheUNvbW1lbnQoaWQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkQ29tbWVudDsiLCJjb25zdCBjb3VudGVyQ29tbWVudHMgPSAoaXRlbSkgPT4ge1xuICBjb25zdCBudW0gPSBpdGVtLmxlbmd0aDtcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWNvdW50ZXInKTtcbiAgY291bnRlci5pbm5lckhUTUwgPSBgJHtudW19YDtcbn07XG5leHBvcnQgZGVmYXVsdCBjb3VudGVyQ29tbWVudHM7IiwiaW1wb3J0IGNvdW50ZXJDb21tZW50cyBmcm9tICcuL2NvdW50ZXJDb21tZW50LmpzJztcblxuY29uc3QgZGlzcGxheUNvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2Fad2VkcVkzSVhEV0NKS1pvUmtNL2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpLnRoZW4oKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtbGlzdCcpO1xuICAgICAgaWYgKGl0ZW0ubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29tbWVudHMuaW5uZXJIVE1MID0gJ25vIGNvbW1lbnRzJztcbiAgICAgICAgY291bnRlckNvbW1lbnRzKFtdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbW1lbnRzLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpdGVtLmZvckVhY2goKHN1Ykl0ZW0pID0+IHtcbiAgICAgICAgICBjb21tZW50cy5pbm5lckhUTUwgKz0gYDxwIGNsYXNzPVwic3BhblwiPlxuICAgICAgICAgICR7c3ViSXRlbS5jcmVhdGlvbl9kYXRlfSAke3N1Ykl0ZW0udXNlcm5hbWV9OiAke3N1Ykl0ZW0uY29tbWVudH0gPC9wPmA7XG4gICAgICAgIH0pO1xuICAgICAgICBjb3VudGVyQ29tbWVudHMoaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNvbW1lbnQ7IiwiaW1wb3J0IGNvbW1lbnRzQnV0dG9uTGlzdGVuZXIgZnJvbSAnLi9wb3B1cC5qcyc7XG5pbXBvcnQgbGlrZUltZyBmcm9tICcuLi9saWtlX2ltZy5wbmcnO1xuaW1wb3J0IHsgZ2V0TGlrZXMsIGFkZExpa2VzTGlzdGVuZXJCdXR0b25zIH0gZnJvbSAnLi9saWtlcy5qcyc7XG5pbXBvcnQgaXRlbXNDb3VudGVyIGZyb20gJy4vaXRlbXNfY291bnRlci5qcyc7XG5cbmNvbnN0IE1lYWxzQVBJdXJsID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9zZWFyY2gucGhwP2Y9Zic7XG5cbmNvbnN0IGdldE1lYWxzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goTWVhbHNBUEl1cmwpO1xuICBjb25zdCB7IG1lYWxzIH0gPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgcmV0dXJuIG1lYWxzO1xufTtcblxuY29uc3QgcG9wdWxhdGVIVE1MID0gKG1lYWxzLCBhbGxMaWtlcykgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vZC1saXN0Jyk7XG4gIC8qIGNvbnNvbGUubG9nKG1lYWxzKTsgKi9cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpICs9IDEpIHtcbiAgICBjb25zdCBpZCA9IG1lYWxzW2ldLmlkTWVhbDtcbiAgICBjb25zdCBtZWFsTmFtZSA9IG1lYWxzW2ldLnN0ck1lYWw7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1nID0gbWVhbHNbaV0uc3RyTWVhbFRodW1iO1xuICAgIGNvbnN0IG1lYWxMaWtlcyA9IGFsbExpa2VzLmZpbmQoKGxpa2UpID0+IGxpa2UuaXRlbV9pZCA9PT0gaWQpO1xuICAgIGRpdi5pZCA9IGlkO1xuICAgIGRpdi5jbGFzc05hbWUgPSAnY2FyZC1lbGVtZW50JztcbiAgICBkaXYuaW5uZXJIVE1MID0gYDxhIGNsYXNzPVwiaW1nLWNvbnRhaW5lclwiPjxpbWcgY2xhc3M9XCJtZWFsLWltZ1wiIHNyYz0ke2ltZ30gYWx0PVwiXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWVhbC1uYW1lXCI+JHttZWFsTmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpa2UtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBpZD0ke2lkfSBjbGFzcz1cImxpa2UtYnRuXCIgaHJlZj1cIlwiPjxpbWcgY2xhc3M9XCJsaWtlLWljb25cIiBzcmM9JHtsaWtlSW1nfSBhbHQ9XCJcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ke21lYWxMaWtlcyA/IG1lYWxMaWtlcy5saWtlcyA6IDB9IGxpa2VzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1jb250YWluZXJcIj48YnV0dG9uIGlkPVwiJHtpZH1cIiBjbGFzcz1cImNvbW1lbnQtYnV0dG9uXCI+Q29tbWVudHM8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc2VydmF0aW9ucy1jb250YWluZXJcIj48YnV0dG9uIGNsYXNzPVwicmVzZXJ2YXRpb25zLWJ1dHRvblwiPlJlc2VydmF0aW9uczwvYnV0dG9uPjwvZGl2PmA7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxuICBpdGVtc0NvdW50ZXIoY29udGFpbmVyKTtcbiAgLy8gaXRlbXMtbGluayBpZFxuICBhZGRMaWtlc0xpc3RlbmVyQnV0dG9ucygpO1xufTtcblxuY29uc3Qgb25Mb2FkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtZWFscyA9IGF3YWl0IGdldE1lYWxzKCk7XG4gIGNvbnN0IGFsbExpa2VzID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgcG9wdWxhdGVIVE1MKG1lYWxzLCBhbGxMaWtlcyk7XG4gIGNvbW1lbnRzQnV0dG9uTGlzdGVuZXIoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9uTG9hZDsiLCJjb25zdCBpdGVtc0NvdW50ZXIgPSAoaXRlbXMpID0+IHtcbiAgY29uc3QgY291bnQgPSBpdGVtcy5jaGlsZEVsZW1lbnRDb3VudDtcbiAgY29uc3QgaXRlbXNCdG5OYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbXMtbGluaycpO1xuICBpdGVtc0J0bk5hdi5pbm5lckhUTUwgPSBgSXRlbXMoJHtjb3VudH0pYDtcbn07XG5leHBvcnQgZGVmYXVsdCBpdGVtc0NvdW50ZXI7IiwiY29uc3QgSW52QVBJdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2Fad2VkcVkzSVhEV0NKS1pvUmtNL2xpa2VzJztcblxuZXhwb3J0IGNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goSW52QVBJdXJsLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgIH1cbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcbiAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL2pzb24nKSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgaWYgdGhlIHJlc3BvbnNlIGJvZHkgaXMgZW1wdHkgb3Igbm90IGluIEpTT04gZm9ybWF0XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFtdOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgaW4gY2FzZSBvZiBhbiBlcnJvclxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlTGlrZXNPbkRPTSA9IChsaWtlQnRuKSA9PiB7XG4gIGNvbnN0IGxpa2VFbGVtZW50ID0gbGlrZUJ0bi5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGNvbnN0IGxpa2VzID0gTnVtYmVyKGxpa2VFbGVtZW50LmlubmVySFRNTC5zcGxpdCgnICcpWzBdKTtcbiAgbGlrZUVsZW1lbnQuaW5uZXJIVE1MID0gYCR7bGlrZXMgKyAxfSBsaWtlc2A7XG59O1xuZXhwb3J0IGNvbnN0IGFkZExpa2UgPSAobGlrZUJ0bikgPT4ge1xuICBmZXRjaChJbnZBUEl1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBsaWtlQnRuLmlkLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRMaWtlc0xpc3RlbmVyQnV0dG9ucyA9ICgpID0+IHtcbiAgY29uc3QgbGlrZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZS1idG4nKTtcbiAgbGlrZUJ1dHRvbnMuZm9yRWFjaCgobGlrZUJ0bikgPT4ge1xuICAgIGxpa2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBhZGRMaWtlKGxpa2VCdG4pO1xuICAgICAgdXBkYXRlTGlrZXNPbkRPTShsaWtlQnRuKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IGRpc3BsYXlDb21tZW50IGZyb20gJy4vZGlzcGxheUNvbW1lbnRzLmpzJztcbmltcG9ydCBhZGRDb21tZW50IGZyb20gJy4vYWRkQ29tbWVudC5qcyc7XG5pbXBvcnQgeyBnZXRMaWtlcyB9IGZyb20gJy4vbGlrZXMuanMnO1xuXG5jb25zdCB0b2dnbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYm9keSA+IConKTtcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaW52aXNpYmxlJyk7XG4gIH0pO1xufTtcblxuY29uc3QgbGlrZUZ1bmNpb24gPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgZGl2TGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWtlc051bScpO1xuICBjb25zdCBhbGxMaWtlcyA9IGF3YWl0IGdldExpa2VzKCk7XG4gIGNvbnN0IG1lYWxMaWtlcyA9IGFsbExpa2VzLmZpbmQoKGxpa2UpID0+IGxpa2UuaXRlbV9pZCA9PT0gaWQpO1xuICBkaXZMaWtlLmlubmVySFRNTCA9IGAgTGlrZXM6ICR7bWVhbExpa2VzLmxpa2VzfWA7XG59O1xuXG5jb25zdCBjb21tZW50c1BvcHVwID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHBvcHVwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXdpbmRvdycpO1xuICBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT0ke2lkfWApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSkudGhlbigoZCkgPT4ge1xuICAgIHBvcHVwRGl2LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGVzdC1kaXZcIj5cbiAgXG4gIDxidXR0b24gaWQ9XCJidG5DbG9zZVwiPlg8L2J1dHRvbj4gIFxuICA8aW1nIHNyYz1cIiR7ZC5tZWFsc1swXS5zdHJNZWFsVGh1bWJ9XCIvPlxuICA8L2Rpdj5cbiAgPGgzIGNsYXNzPVwiZm9vZC1uYW1lXCI+JHtkLm1lYWxzWzBdLnN0ck1lYWx9PC9oMz5cblxuICA8ZGl2IGNsYXNzPVwibmFtZXMtY29udGVudFwiIGlkPVwibmFtZXMtY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFyZWFcIj5BcmVhOiAke2QubWVhbHNbMF0uc3RyQXJlYX0gPC9kaXY+XG4gICAgICA8ZGl2ICBjbGFzcz1cImxpa2VzTnVtXCI+PC9kaXY+XG4gICAgICA8ZGl2ICBjbGFzcz1cImNhdGVnb3J5XCI+Q2F0ZWdvcnk6ICR7ZC5tZWFsc1swXS5zdHJDYXRlZ29yeX08L2Rpdj5cbiAgICAgIDxkaXYgIGNsYXNzPVwic3RyQ29tbWVudFwiPnN0clRhZ3M6ICR7ZC5tZWFsc1swXS5zdHJUYWdzfSA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxoMyBjbGFzcz1cInNob3ctY29tbWVudC10aXRsZVwiPiBDb25tZW50czooPHNwYW4gIGNsYXNzID1cImNvbW1lbnQtY291bnRlclwiPjwvc3Bhbj4pPC9oMz5cbiAgPGRpdiBjbGFzcz1cImNvbW1lbnQtbGlzdFwiPiAgPC9kaXY+XG5cbiAgPGgzIGNsYXNzPVwiYWRkLWNvbW1lbnQtdGl0bGVcIj4gQWRkIENvbW1lbnRzPC9oMz5cbiAgPGZvcm0gaWQgPVwiZm9ybS1jb21tZW50XCI+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiLCBuYW1lID1cIm5hbWVcIiBjbGFzcz1cInVzZXJOYW1lXCIgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBuYW1lXCIgcmVxdWlyZWQ+XG4gIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiLCBuYW1lPVwiY29tbWVudFwiIGNsYXNzPVwidXNlckNvbWVudFwiIGNvbHM9XCIzXCIgcm93cz1cIjVcIiBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIGNvbW1lbnRcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICA8YnV0dG9uIGNsYXNzPVwic3VibWl0XCI+QWRkIG5ldyBjb21tZW50PC9idXR0b24+ICBcbiAgPC9mb3JtPlxuICBgO1xuICB9KTtcbiAgbGlrZUZ1bmNpb24oaWQpO1xuICBkaXNwbGF5Q29tbWVudChpZCk7XG4gIGNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bkNsb3NlJyk7XG4gIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZ2dsZSgpO1xuICB9KTtcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRDb21tZW50KGlkKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjb21tZW50c0J1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idXR0b24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidG4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBidG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0b2dnbGUoKTtcbiAgICAgIGNvbW1lbnRzUG9wdXAoYnRuW2ldLmlkKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudHNCdXR0b25MaXN0ZW5lcjsiLCJpbXBvcnQgaGVhZGVyTG9nbyBmcm9tICcuLi9oZWFkZXJfbG9nby5wbmcnO1xuXG5jb25zdCByZW5kZXJIZWFkZXJGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcFVwLmNsYXNzTmFtZSA9ICdwb3B1cC13aW5kb3cgaW52aXNpYmxlJztcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIHNlY3Rpb24uY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gIG5hdi5pbm5lckhUTUwgPSBgPGE+PGltZyBpZD1cImhlYWRlci1sb2dvXCIgc3JjPSR7aGVhZGVyTG9nb30gYWx0PVwiaGVhZGVyX2xvZ29cIj48L2E+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBpZD1cIml0ZW1zLWxpbmtcIiBocmVmPVwiXCI+SXRlbXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj5DYXRlZ29yaWVzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+SW5ncmVkaWVudHM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+YDtcblxuICBzZWN0aW9uLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZm9vZC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgZm9vdGVyLmlubmVySFRNTCA9ICc8cD5DcmVhdGVkIGJ5IE1pY3JvdmVyc2Ugc3R1ZGVudHMgYnkgTUlUIGxpY2Vuc2U8L3A+JztcbiAgYm9keS5hcHBlbmRDaGlsZChwb3BVcCk7XG4gIGJvZHkuaW5zZXJ0QmVmb3JlKG5hdiwgaDEpO1xuICBib2R5LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIZWFkZXJGb290ZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9