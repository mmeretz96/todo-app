/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/projectForm/projectForm.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/projectForm/projectForm.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "form{\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-top: 1em;\n}\ninput{\n  width: 100%;\n  border: none;\n  padding: 0.5em;\n  border-radius: 3px;\n  background-color: #EEE;\n  outline: none;\n}\n\nbutton{\n  cursor: pointer;\n  flex: 1;\n  border: none;\n  color: white;\n  padding: 0.5em;\n  border-radius: 3px;\n}\n\n.success{\n  background-color: #28a745;\n}\n\n.success:hover{\n  background-color: #208838;\n}\n\n.danger{\n  background-color: #dc3545;\n}\n\n.danger:hover{\n  background-color: #C82333;\n}", "",{"version":3,"sources":["webpack://./src/components/projectForm/projectForm.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,eAAe;EACf,QAAQ;EACR,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,OAAO;EACP,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":["form{\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-top: 1em;\n}\ninput{\n  width: 100%;\n  border: none;\n  padding: 0.5em;\n  border-radius: 3px;\n  background-color: #EEE;\n  outline: none;\n}\n\nbutton{\n  cursor: pointer;\n  flex: 1;\n  border: none;\n  color: white;\n  padding: 0.5em;\n  border-radius: 3px;\n}\n\n.success{\n  background-color: #28a745;\n}\n\n.success:hover{\n  background-color: #208838;\n}\n\n.danger{\n  background-color: #dc3545;\n}\n\n.danger:hover{\n  background-color: #C82333;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/task/task.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/task/task.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container{\n  display: flex;\n  align-items: center;\n  gap: 1em;\n  border-bottom: 1px solid #94949475;\n  padding: 2em 1em;\n  color: #949494;\n  box-sizing: border-box;\n}\n.container:last-child{\n  border-bottom: none;\n}\n.container *{\n  padding: 0.5em;\n}\n\n.container .title{\n  border-left: 1px solid #94949475;\n  padding-left: 1em;\n  flex: 1;\n  cursor: pointer;\n}\n\n.container input{\n  width: 20%;\n}\n\n .container .title.done{\n  text-decoration: line-through;\n }\n\n .container.done *{\n  filter: opacity(0.5);\n }\n \n /*.container.done .calendar{\n  display: none;\n }*/\n\n .container input[type=\"checkbox\"]{\n  height: 18px;\n  width: 18px;\n  cursor: pointer;\n  margin: 0.5em;\n}\n\n.container img{\n  cursor: pointer;\n  padding: 0;\n  height: 20px;\n  width: 20px;\n  flex: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/components/task/task.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,kCAAkC;EAClC,gBAAgB;EAChB,cAAc;EACd,sBAAsB;AACxB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,gCAAgC;EAChC,iBAAiB;EACjB,OAAO;EACP,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;CAEC;EACC,6BAA6B;CAC9B;;CAEA;EACC,oBAAoB;CACrB;;CAEA;;GAEE;;CAEF;EACC,YAAY;EACZ,WAAW;EACX,eAAe;EACf,aAAa;AACf;;AAEA;EACE,eAAe;EACf,UAAU;EACV,YAAY;EACZ,WAAW;EACX,OAAO;AACT","sourcesContent":[".container{\n  display: flex;\n  align-items: center;\n  gap: 1em;\n  border-bottom: 1px solid #94949475;\n  padding: 2em 1em;\n  color: #949494;\n  box-sizing: border-box;\n}\n.container:last-child{\n  border-bottom: none;\n}\n.container *{\n  padding: 0.5em;\n}\n\n.container .title{\n  border-left: 1px solid #94949475;\n  padding-left: 1em;\n  flex: 1;\n  cursor: pointer;\n}\n\n.container input{\n  width: 20%;\n}\n\n .container .title.done{\n  text-decoration: line-through;\n }\n\n .container.done *{\n  filter: opacity(0.5);\n }\n \n /*.container.done .calendar{\n  display: none;\n }*/\n\n .container input[type=\"checkbox\"]{\n  height: 18px;\n  width: 18px;\n  cursor: pointer;\n  margin: 0.5em;\n}\n\n.container img{\n  cursor: pointer;\n  padding: 0;\n  height: 20px;\n  width: 20px;\n  flex: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/taskForm/taskForm.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/taskForm/taskForm.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".taskForm{\n  width: 50%;\n  align-self: center;\n}", "",{"version":3,"sources":["webpack://./src/components/taskForm/taskForm.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,kBAAkB;AACpB","sourcesContent":[".taskForm{\n  width: 50%;\n  align-self: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  background-color: #EEE;\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n/*HEADER*/\n.header{\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 0 2em;\n  height: 80px;\n  width: 100vw;\n  background-color: #FFF;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n}\n\n.header h1{\n  color: #0267C1;\n}\n\n.content{\n  display: flex;\n  height: 100%;\n}\n\n/*SIDEBAR*/\n.sidebar{\n  width: 225px;\n  height: 100%;\n  background-color: #FFF;\n  border-radius: 2px;\n  box-sizing: border-box;\n  display: flex;\n  padding: 1em;\n  flex-direction: column;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n}\n\n.sidebar h3 {\n  color: #909090;\n}\n\n.sidebar ul{\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.sidebar li{\n  padding: 0.5em;\n  border-radius: 3px;\n  font-size: 18px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.sidebar li span{\n  background-color: #C38D9D;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n}\n\n.sidebar li:hover{\n  cursor: pointer;\n  background-color: #EEE;\n}\n\n\n.sidebar .new-project-btn{\n  display: none;\n  cursor: pointer;\n  padding: 0.5em;\n  border-radius: 3px;\n  border: none;\n  margin-top: 1em;\n  outline: none;\n  color: #272727;\n}\n\n.sidebar .new-project-btn:hover{\n  background-color: #aaaaaa;\n}\n\n\n.sidebar:hover .new-project-btn{\n  display: block;\n}\n\n.hidden{\n  display: none;\n}\n\n.project-container{\n  flex: 1;\n  padding: 2em 4em;\n}\n\n.project-container h2{\n  color: #909090;\n}\n\n.project-container .task-list{\n  background-color: #FFF;\n  padding: 1em;\n  border-radius: 2px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n}\n\n.task-list{\n  display: flex;\n  flex-direction: column;\n}\n\n.task-list .add-task-btn{\n  margin-top: 1em;\n  align-self: center;\n  width: 30%;\n  color: #272727;\n  outline: none;\n  font-size: 14px;\n}\n\n\n.task-list .add-task-btn:hover{\n  background-color: #aaaaaa;\n  color: #FFF;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,yCAAyC;EACzC,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;AACA,SAAS;AACT;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,qFAAqF;AACvF;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA,UAAU;AACV;EACE,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,qFAAqF;AACvF;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,sBAAsB;AACxB;;;AAGA;EACE,aAAa;EACb,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,yBAAyB;AAC3B;;;AAGA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,OAAO;EACP,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,qFAAqF;AACvF;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,UAAU;EACV,cAAc;EACd,aAAa;EACb,eAAe;AACjB;;;AAGA;EACE,yBAAyB;EACzB,WAAW;AACb","sourcesContent":["body{\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  background-color: #EEE;\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n/*HEADER*/\n.header{\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 0 2em;\n  height: 80px;\n  width: 100vw;\n  background-color: #FFF;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n}\n\n.header h1{\n  color: #0267C1;\n}\n\n.content{\n  display: flex;\n  height: 100%;\n}\n\n/*SIDEBAR*/\n.sidebar{\n  width: 225px;\n  height: 100%;\n  background-color: #FFF;\n  border-radius: 2px;\n  box-sizing: border-box;\n  display: flex;\n  padding: 1em;\n  flex-direction: column;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n}\n\n.sidebar h3 {\n  color: #909090;\n}\n\n.sidebar ul{\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.sidebar li{\n  padding: 0.5em;\n  border-radius: 3px;\n  font-size: 18px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.sidebar li span{\n  background-color: #C38D9D;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n}\n\n.sidebar li:hover{\n  cursor: pointer;\n  background-color: #EEE;\n}\n\n\n.sidebar .new-project-btn{\n  display: none;\n  cursor: pointer;\n  padding: 0.5em;\n  border-radius: 3px;\n  border: none;\n  margin-top: 1em;\n  outline: none;\n  color: #272727;\n}\n\n.sidebar .new-project-btn:hover{\n  background-color: #aaaaaa;\n}\n\n\n.sidebar:hover .new-project-btn{\n  display: block;\n}\n\n.hidden{\n  display: none;\n}\n\n.project-container{\n  flex: 1;\n  padding: 2em 4em;\n}\n\n.project-container h2{\n  color: #909090;\n}\n\n.project-container .task-list{\n  background-color: #FFF;\n  padding: 1em;\n  border-radius: 2px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n}\n\n.task-list{\n  display: flex;\n  flex-direction: column;\n}\n\n.task-list .add-task-btn{\n  margin-top: 1em;\n  align-self: center;\n  width: 30%;\n  color: #272727;\n  outline: none;\n  font-size: 14px;\n}\n\n\n.task-list .add-task-btn:hover{\n  background-color: #aaaaaa;\n  color: #FFF;\n}"],"sourceRoot":""}]);
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

/***/ "./src/components/projectForm/projectForm.css":
/*!****************************************************!*\
  !*** ./src/components/projectForm/projectForm.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_projectForm_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./projectForm.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/projectForm/projectForm.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_projectForm_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_projectForm_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_projectForm_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_projectForm_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/task/task.css":
/*!**************************************!*\
  !*** ./src/components/task/task.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./task.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/task/task.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/taskForm/taskForm.css":
/*!**********************************************!*\
  !*** ./src/components/taskForm/taskForm.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskForm_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./taskForm.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/taskForm/taskForm.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskForm_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskForm_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_taskForm_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_taskForm_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/components/projectForm/projectForm.js":
/*!***************************************************!*\
  !*** ./src/components/projectForm/projectForm.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectForm": () => (/* binding */ ProjectForm)
/* harmony export */ });
/* harmony import */ var _projectForm_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectForm.css */ "./src/components/projectForm/projectForm.css");


const ProjectForm = (() => {
  const form = document.createElement("form");

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Project Title");
  form.appendChild(titleInput);

  const submitBtn = document.createElement("button");
  submitBtn.classList.add("success");
  submitBtn.innerText = "Ok";
  form.appendChild(submitBtn);

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("danger");
  cancelBtn.innerText = "Cancel";
  form.appendChild(cancelBtn);

  function reset() {
    titleInput.value = "";
    form.classList.add("hidden");
  }
  return {
    form,
    titleInput,
    submitBtn,
    cancelBtn,
    reset,
  };
})();




/***/ }),

/***/ "./src/components/task/task.js":
/*!*************************************!*\
  !*** ./src/components/task/task.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskElement": () => (/* binding */ TaskElement)
/* harmony export */ });
/* harmony import */ var _task_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.css */ "./src/components/task/task.css");
/* harmony import */ var _images_trash_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/trash.png */ "./src/images/trash.png");
/* harmony import */ var _images_calendar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/calendar.png */ "./src/images/calendar.png");




const TaskElement = (task) => {
  const container = document.createElement("div");
  container.classList.add("container");
  container.setAttribute("data-id", task.getId());

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  const delBtn = new Image();
  delBtn.src = _images_trash_png__WEBPACK_IMPORTED_MODULE_1__;

  const title = document.createElement("span");
  title.classList.add("title");
  title.innerText = task.getTitle();
  //if task has date make calendar the date
  const date = task.getDate();
  let calendar;
  if (date) {
    calendar = document.createElement("span");
    calendar.innerText = date;
  } else {
    calendar = new Image();
    calendar.src = _images_calendar_png__WEBPACK_IMPORTED_MODULE_2__;
  }
  calendar.classList.add("calendar");
  if (task.getDone() === true) {
    checkbox.checked = true;
    title.classList.add("done");
    container.classList.add("done");
  }

  container.appendChild(checkbox);
  container.appendChild(title);
  container.appendChild(calendar);
  container.appendChild(delBtn);
  return {
    container,
    checkbox,
    title,
    delBtn,
    calendar,
  };
};




/***/ }),

/***/ "./src/components/taskForm/taskForm.js":
/*!*********************************************!*\
  !*** ./src/components/taskForm/taskForm.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskForm": () => (/* binding */ TaskForm)
/* harmony export */ });
/* harmony import */ var _taskForm_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskForm.css */ "./src/components/taskForm/taskForm.css");

const TaskForm = (() => {
  const form = document.createElement("form");
  form.classList.add("taskForm");

  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Task");
  form.appendChild(titleInput);

  const submitBtn = document.createElement("button");
  submitBtn.classList.add("success");
  submitBtn.innerText = "Ok";
  form.appendChild(submitBtn);

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("danger");
  cancelBtn.innerText = "Cancel";
  form.appendChild(cancelBtn);

  function reset() {
    titleInput.value = "";
    form.classList.add("hidden");
  }
  return {
    form,
    titleInput,
    submitBtn,
    cancelBtn,
    reset,
  };
})();




/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "Storage": () => (/* binding */ Storage),
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _components_task_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/task/task */ "./src/components/task/task.js");


const Storage = (() => {
  let nextId = 0;
  const projects = [];
  const addProject = (title, tasks) => {
    const newProject = Project(nextId, title, tasks);
    projects.push(newProject);
    nextId++;
    return newProject;
  };
  const removeProject = (id) => {
    const index = projects.findIndex((project) => project.id === id);
    if (index !== -1) {
      projects.splice(index, 1);
      return true;
    } else {
      return false;
    }
  };

  const getProject = (id) => {
    let found = -1;
    projects.forEach((project) => {
      if (project.getId() === id) {
        found = project;
      }
    });
    return found;
  };

  const getProjects = () => projects;

  return {
    projects,
    getProjects,
    addProject,
    removeProject,
    getProject,
  };
})();

const Project = (id, title, tasks) => {
  let nextId = 0;
  const getId = () => "" + id;
  const getTitle = () => title;
  const setTitle = (newTitle) => (title = newTitle);
  const getTasks = () => tasks;
  const addTask = (title, dueDate, priority, done) => {
    const newTask = Task(`${id}-${nextId}`, title, dueDate, priority, done);
    tasks.push(newTask);
    nextId++;
  };
  const getOpenTasks = () => {
    const list = [];
    tasks.forEach((task) => {
      if (!task.getDone()) list.push(task);
    });

    return list;
  };
  const getTask = (id) => {
    let found = -1;
    tasks.forEach((task) => {
      if (task.getId() === id) {
        found = task;
      }
    });
    return found;
  };
  const removeTask = (id) => {
    const index = tasks.findIndex((task) => task.getId() === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      return true;
    } else {
      return false;
    }
  };
  return {
    tasks,
    getTasks,
    getId,
    getTitle,
    setTitle,
    addTask,
    removeTask,
    getTask,
    getOpenTasks,
  };
};

const Task = (id, title, dueDate = undefined, done) => {
  const getId = () => id;
  const getTitle = () => title;
  const setDate = (date) => (dueDate = date);
  const getDate = () => dueDate;
  const toggleDone = () => {
    if (done) {
      done = false;
    } else {
      done = true;
    }
  };
  const getDone = () => done;
  return {
    getId,
    getTitle,
    toggleDone,
    getDone,
    setDate,
    getDate,
  };
};




/***/ }),

/***/ "./src/eventHandler.js":
/*!*****************************!*\
  !*** ./src/eventHandler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventHandler": () => (/* binding */ EventHandler)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _images_check_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/check.png */ "./src/images/check.png");



const EventHandler = (() => {
  const handleNewProjectBtn = (button, projectForm) => {
    projectForm.form.classList.remove("hidden");
    button.parentNode.removeChild(button);
  };

  const handleNewTaskBtn = (button, taskForm) => {
    taskForm.form.classList.remove("hidden");
    button.parentNode.removeChild(button);
  };

  const handleFormCancel = (e, list, form, button) => {
    e.preventDefault();
    list.appendChild(button);
    form.reset();
  };

  const handleProjectSubmit = (e, projectForm, refresh) => {
    e.preventDefault();
    const title = projectForm.titleInput.value;
    if (!title) return alert("Project name can't be empty");
    const newProject = _data__WEBPACK_IMPORTED_MODULE_0__.Storage.addProject(title, []);
    refresh(newProject.getId());
  };

  const handleTaskSubmit = (e, taskForm, refresh) => {
    e.preventDefault();
    const title = taskForm.titleInput.value;
    if (!title) return alert("Task can't be empty");
    const projectId = e.target.parentNode.parentNode.getAttribute("data-id");
    _data__WEBPACK_IMPORTED_MODULE_0__.Storage.getProject(projectId).addTask(title, undefined, false);
    refresh(projectId);
  };

  const handleProjectClick = (projectLi, loadProject) => {
    const projectId = projectLi.getAttribute("data-id");
    loadProject(projectId);
  };

  const handleTaskStateChange = (checkbox, refresh) => {
    const taskId = checkbox.parentNode.getAttribute("data-id");
    const projectId = taskId.substring(0, taskId.indexOf("-"));
    _data__WEBPACK_IMPORTED_MODULE_0__.Storage.getProject(projectId).getTask(taskId).toggleDone();
    refresh(projectId);
  };

  const handleDeleteTask = (button, refresh) => {
    const taskId = button.parentNode.getAttribute("data-id");
    const projectId = taskId.substring(0, taskId.indexOf("-"));
    _data__WEBPACK_IMPORTED_MODULE_0__.Storage.getProject(projectId).removeTask(taskId);
    refresh(projectId);
  };

  const handleCalendarClick = (calendar, refresh) => {
    const taskId = calendar.parentNode.getAttribute("data-id");
    const projectId = taskId.substring(0, taskId.indexOf("-"));
    const task = _data__WEBPACK_IMPORTED_MODULE_0__.Storage.getProject(projectId).getTask(taskId);
    const datePicker = document.createElement("input");
    datePicker.setAttribute("type", "date");
    datePicker.addEventListener("change", () => {
      handleAddDateToTask(task, datePicker.value, refresh, projectId);
    });
    calendar.parentNode.replaceChild(datePicker, calendar);
  };

  const handleAddDateToTask = (task, date, refresh, projectId) => {
    task.setDate(date);
    refresh(projectId);
  };

  return {
    handleNewProjectBtn,
    handleNewTaskBtn,
    handleFormCancel,
    handleProjectClick,
    handleProjectSubmit,
    handleTaskSubmit,
    handleTaskStateChange,
    handleDeleteTask,
    handleCalendarClick,
  };
})();




/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "loadProject": () => (/* binding */ loadProject)
/* harmony export */ });
/* harmony import */ var _components_projectForm_projectForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/projectForm/projectForm */ "./src/components/projectForm/projectForm.js");
/* harmony import */ var _components_task_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/task/task */ "./src/components/task/task.js");
/* harmony import */ var _components_taskForm_taskForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/taskForm/taskForm */ "./src/components/taskForm/taskForm.js");
/* harmony import */ var _eventHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventHandler */ "./src/eventHandler.js");





const { Storage } = __webpack_require__(/*! ./data */ "./src/data.js");

const body = document.body;

function init() {
  loadProjectList();
}

//HEADER
const header = document.createElement("div");
header.classList.add("header");
header.innerHTML = "<h1>TODO</h1>";
body.appendChild(header);

//MAIN CONTENT
const content = document.createElement("div");
content.classList.add("content");
body.appendChild(content);

//SIDEBAR
const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");
content.appendChild(sidebar);

const projectHeading = document.createElement("h3");
projectHeading.innerText = "///PROJECTS";
sidebar.appendChild(projectHeading);

const projectList = document.createElement("ul");
projectList.classList.add(".project-list");
sidebar.appendChild(projectList);

const projectForm = _components_projectForm_projectForm__WEBPACK_IMPORTED_MODULE_0__.ProjectForm;
projectForm.form.classList.add("hidden");
sidebar.appendChild(projectForm.form);

const newProjectBtn = document.createElement("button");
newProjectBtn.innerText = "Add Project";
newProjectBtn.classList.add("new-project-btn");

//reloads the project list
function loadProjectList() {
  projectList.innerHTML = "";
  Storage.projects.forEach((project) => {
    const li = document.createElement("li");
    li.setAttribute("data-id", project.getId());
    li.innerText = project.getTitle();
    const taskAmount = project.getOpenTasks().length;
    const span = document.createElement("span");
    span.innerText = taskAmount;
    projectList.appendChild(li);
    li.appendChild(span);
    li.addEventListener("click", (e) =>
      _eventHandler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.handleProjectClick(e.target, loadProject)
    );
  });
  projectList.appendChild(newProjectBtn);
}

//LOADED PROJECT

const projectContainer = document.createElement("div");
projectContainer.classList.add("project-container");
content.appendChild(projectContainer);

const projectH2 = document.createElement("h2");

const taskList = document.createElement("div");
taskList.classList.add("task-list");

const addTaskBtn = document.createElement("button");
addTaskBtn.classList.add("add-task-btn");
addTaskBtn.innerText = "Add Task";

const taskForm = _components_taskForm_taskForm__WEBPACK_IMPORTED_MODULE_2__.TaskForm;
taskForm.form.classList.add("hidden");

function loadProject(id) {
  const project = Storage.getProject(id);
  projectContainer.innerHTML = "";

  projectH2.innerText = project.getTitle();
  projectContainer.appendChild(projectH2);

  loadTasks(project.tasks, project.getId());
  projectContainer.appendChild(taskList);
}

function loadTasks(tasks, projectId) {
  taskList.innerHTML = "";
  taskList.setAttribute("data-id", projectId);
  tasks.forEach((task) => {
    const taskElement = (0,_components_task_task__WEBPACK_IMPORTED_MODULE_1__.TaskElement)(task);
    taskList.appendChild(taskElement.container);
    taskElement.checkbox.addEventListener("click", (e) => {
      _eventHandler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.handleTaskStateChange(e.target, refresh);
    });
    taskElement.delBtn.addEventListener("click", (e) => {
      _eventHandler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.handleDeleteTask(e.target, refresh);
    });
    taskElement.calendar.addEventListener("click", (e) => {
      _eventHandler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.handleCalendarClick(e.target, refresh);
    });
  });
  taskList.appendChild(addTaskBtn);
  taskList.appendChild(taskForm.form);
}

function refresh(projectId) {
  loadProject(projectId);
  const tasks = Storage.getProject(projectId).getTasks();
  loadTasks(tasks, projectId);
  loadProjectList();
  projectForm.reset();
  taskForm.reset();
}

//EVENTS

newProjectBtn.addEventListener("click", (e) => {
  _eventHandler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.handleNewProjectBtn(e.target, projectForm);
});

projectForm.cancelBtn.addEventListener("click", (e) => {
  _eventHandler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.handleFormCancel(e, projectList, projectForm, newProjectBtn);
});

projectForm.submitBtn.addEventListener("click", (e) =>
  _eventHandler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.handleProjectSubmit(e, projectForm, refresh)
);

addTaskBtn.addEventListener("click", (e) =>
  _eventHandler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.handleNewTaskBtn(e.target, taskForm)
);

taskForm.cancelBtn.addEventListener("click", (e) => {
  _eventHandler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.handleFormCancel(e, taskList, taskForm, addTaskBtn);
});

taskForm.submitBtn.addEventListener("click", (e) =>
  _eventHandler__WEBPACK_IMPORTED_MODULE_3__.EventHandler.handleTaskSubmit(e, taskForm, refresh)
);




/***/ }),

/***/ "./src/images/calendar.png":
/*!*********************************!*\
  !*** ./src/images/calendar.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24c974015dcc7b624f54.png";

/***/ }),

/***/ "./src/images/check.png":
/*!******************************!*\
  !*** ./src/images/check.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a75ed7d73928f875ab1f.png";

/***/ }),

/***/ "./src/images/trash.png":
/*!******************************!*\
  !*** ./src/images/trash.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4e35861d2606e76ed78.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





_data__WEBPACK_IMPORTED_MODULE_0__.Storage.addProject("Inbox", []);
_data__WEBPACK_IMPORTED_MODULE_0__.Storage.projects[0].addTask("Do thing", undefined, true);
_data__WEBPACK_IMPORTED_MODULE_0__.Storage.projects[0].addTask("Do things", undefined, false);
_data__WEBPACK_IMPORTED_MODULE_0__.Storage.projects[0].addTask("Do thingss", undefined, true);
_data__WEBPACK_IMPORTED_MODULE_0__.Storage.addProject("Project 1", []);
_data__WEBPACK_IMPORTED_MODULE_0__.Storage.projects[1].addTask("Do other thing", undefined, false);

(0,_ui__WEBPACK_IMPORTED_MODULE_1__.init)();
(0,_ui__WEBPACK_IMPORTED_MODULE_1__.loadProject)("0");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0I7O0FBRUE7QUFDQSxFQUFFLHdFQUE2QjtBQUMvQixDQUFDOztBQUVEO0FBQ0EsRUFBRSx3RUFBNkI7QUFDL0I7O0FBRTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEo3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBMEM7QUFDNUI7QUFDTztBQUNvQjs7QUFFekMscURBQWtCO0FBQ2xCLDhEQUEyQjtBQUMzQiw4REFBMkI7QUFDM0IsOERBQTJCO0FBQzNCLHFEQUFrQjtBQUNsQiw4REFBMkI7O0FBRTNCLHlDQUFJO0FBQ0osZ0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RGb3JtL3Byb2plY3RGb3JtLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL3Rhc2svdGFzay5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy90YXNrRm9ybS90YXNrRm9ybS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdEZvcm0vcHJvamVjdEZvcm0uY3NzPzRjNDAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy90YXNrL3Rhc2suY3NzP2Y1OGMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy90YXNrRm9ybS90YXNrRm9ybS5jc3M/ODFhMSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdEZvcm0vcHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy90YXNrL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy90YXNrRm9ybS90YXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2V2ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZm9ybXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDVweDtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuaW5wdXR7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnN1Y2Nlc3N7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xcbn1cXG5cXG4uc3VjY2Vzczpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDg4Mzg7XFxufVxcblxcbi5kYW5nZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xcbn1cXG5cXG4uZGFuZ2VyOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M4MjMzMztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdEZvcm0vcHJvamVjdEZvcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixRQUFRO0VBQ1IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJmb3Jte1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG5pbnB1dHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuYnV0dG9ue1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uc3VjY2Vzc3tcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XFxufVxcblxcbi5zdWNjZXNzOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwODgzODtcXG59XFxuXFxuLmRhbmdlcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XFxufVxcblxcbi5kYW5nZXI6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzgyMzMzO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTQ5NDk0NzU7XFxuICBwYWRkaW5nOiAyZW0gMWVtO1xcbiAgY29sb3I6ICM5NDk0OTQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uY29udGFpbmVyOmxhc3QtY2hpbGR7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4uY29udGFpbmVyICp7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAudGl0bGV7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM5NDk0OTQ3NTtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgZmxleDogMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciBpbnB1dHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcblxcbiAuY29udGFpbmVyIC50aXRsZS5kb25le1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuIH1cXG5cXG4gLmNvbnRhaW5lci5kb25lICp7XFxuICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcXG4gfVxcbiBcXG4gLyouY29udGFpbmVyLmRvbmUgLmNhbGVuZGFye1xcbiAgZGlzcGxheTogbm9uZTtcXG4gfSovXFxuXFxuIC5jb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXXtcXG4gIGhlaWdodDogMThweDtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwLjVlbTtcXG59XFxuXFxuLmNvbnRhaW5lciBpbWd7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBmbGV4OiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy90YXNrL3Rhc2suY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1Isa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztDQUVDO0VBQ0MsNkJBQTZCO0NBQzlCOztDQUVBO0VBQ0Msb0JBQW9CO0NBQ3JCOztDQUVBOztHQUVFOztDQUVGO0VBQ0MsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLE9BQU87QUFDVFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTQ5NDk0NzU7XFxuICBwYWRkaW5nOiAyZW0gMWVtO1xcbiAgY29sb3I6ICM5NDk0OTQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uY29udGFpbmVyOmxhc3QtY2hpbGR7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG4uY29udGFpbmVyICp7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuXFxuLmNvbnRhaW5lciAudGl0bGV7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM5NDk0OTQ3NTtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgZmxleDogMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciBpbnB1dHtcXG4gIHdpZHRoOiAyMCU7XFxufVxcblxcbiAuY29udGFpbmVyIC50aXRsZS5kb25le1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuIH1cXG5cXG4gLmNvbnRhaW5lci5kb25lICp7XFxuICBmaWx0ZXI6IG9wYWNpdHkoMC41KTtcXG4gfVxcbiBcXG4gLyouY29udGFpbmVyLmRvbmUgLmNhbGVuZGFye1xcbiAgZGlzcGxheTogbm9uZTtcXG4gfSovXFxuXFxuIC5jb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXXtcXG4gIGhlaWdodDogMThweDtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAwLjVlbTtcXG59XFxuXFxuLmNvbnRhaW5lciBpbWd7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBmbGV4OiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudGFza0Zvcm17XFxuICB3aWR0aDogNTAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy90YXNrRm9ybS90YXNrRm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50YXNrRm9ybXtcXG4gIHdpZHRoOiA1MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzcHg7XFxufVxcbi8qSEVBREVSKi9cXG4uaGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMCAyZW07XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcXG59XFxuXFxuLmhlYWRlciBoMXtcXG4gIGNvbG9yOiAjMDI2N0MxO1xcbn1cXG5cXG4uY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qU0lERUJBUiovXFxuLnNpZGViYXJ7XFxuICB3aWR0aDogMjI1cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcXG59XFxuXFxuLnNpZGViYXIgaDMge1xcbiAgY29sb3I6ICM5MDkwOTA7XFxufVxcblxcbi5zaWRlYmFyIHVse1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2lkZWJhciBsaXtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNpZGViYXIgbGkgc3BhbntcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDMzhEOUQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNpZGViYXIgbGk6aG92ZXJ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcbn1cXG5cXG5cXG4uc2lkZWJhciAubmV3LXByb2plY3QtYnRue1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiAjMjcyNzI3O1xcbn1cXG5cXG4uc2lkZWJhciAubmV3LXByb2plY3QtYnRuOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTtcXG59XFxuXFxuXFxuLnNpZGViYXI6aG92ZXIgLm5ldy1wcm9qZWN0LWJ0bntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaGlkZGVue1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVye1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmc6IDJlbSA0ZW07XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciBoMntcXG4gIGNvbG9yOiAjOTA5MDkwO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIgLnRhc2stbGlzdHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xcbn1cXG5cXG4udGFzay1saXN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrLWxpc3QgLmFkZC10YXNrLWJ0bntcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMCU7XFxuICBjb2xvcjogIzI3MjcyNztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcblxcbi50YXNrLWxpc3QgLmFkZC10YXNrLWJ0bjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWFhYWE7XFxuICBjb2xvcjogI0ZGRjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7QUFDQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIscUZBQXFGO0FBQ3ZGOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUEsVUFBVTtBQUNWO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixxRkFBcUY7QUFDdkY7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUdBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUZBQXFGO0FBQ3ZGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7O0FBR0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzcHg7XFxufVxcbi8qSEVBREVSKi9cXG4uaGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMCAyZW07XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcXG59XFxuXFxuLmhlYWRlciBoMXtcXG4gIGNvbG9yOiAjMDI2N0MxO1xcbn1cXG5cXG4uY29udGVudHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qU0lERUJBUiovXFxuLnNpZGViYXJ7XFxuICB3aWR0aDogMjI1cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCA0cHggLTFweDtcXG59XFxuXFxuLnNpZGViYXIgaDMge1xcbiAgY29sb3I6ICM5MDkwOTA7XFxufVxcblxcbi5zaWRlYmFyIHVse1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2lkZWJhciBsaXtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNpZGViYXIgbGkgc3BhbntcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDMzhEOUQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnNpZGViYXIgbGk6aG92ZXJ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcbn1cXG5cXG5cXG4uc2lkZWJhciAubmV3LXByb2plY3QtYnRue1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiAjMjcyNzI3O1xcbn1cXG5cXG4uc2lkZWJhciAubmV3LXByb2plY3QtYnRuOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTtcXG59XFxuXFxuXFxuLnNpZGViYXI6aG92ZXIgLm5ldy1wcm9qZWN0LWJ0bntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaGlkZGVue1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVye1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmc6IDJlbSA0ZW07XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciBoMntcXG4gIGNvbG9yOiAjOTA5MDkwO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIgLnRhc2stbGlzdHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDRweCAtMXB4O1xcbn1cXG5cXG4udGFzay1saXN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrLWxpc3QgLmFkZC10YXNrLWJ0bntcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMCU7XFxuICBjb2xvcjogIzI3MjcyNztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcblxcbi50YXNrLWxpc3QgLmFkZC10YXNrLWJ0bjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWFhYWE7XFxuICBjb2xvcjogI0ZGRjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdEZvcm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0Rm9ybS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFzay5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2suY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2tGb3JtLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza0Zvcm0uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vcHJvamVjdEZvcm0uY3NzXCI7XG5cbmNvbnN0IFByb2plY3RGb3JtID0gKCgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJQcm9qZWN0IFRpdGxlXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwic3VjY2Vzc1wiKTtcbiAgc3VibWl0QnRuLmlubmVyVGV4dCA9IFwiT2tcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGFuZ2VyXCIpO1xuICBjYW5jZWxCdG4uaW5uZXJUZXh0ID0gXCJDYW5jZWxcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGZvcm0sXG4gICAgdGl0bGVJbnB1dCxcbiAgICBzdWJtaXRCdG4sXG4gICAgY2FuY2VsQnRuLFxuICAgIHJlc2V0LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgUHJvamVjdEZvcm0gfTtcbiIsImltcG9ydCBcIi4vdGFzay5jc3NcIjtcbmltcG9ydCBUcmFzaCBmcm9tIFwiLi4vLi4vaW1hZ2VzL3RyYXNoLnBuZ1wiO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuLi8uLi9pbWFnZXMvY2FsZW5kYXIucG5nXCI7XG5cbmNvbnN0IFRhc2tFbGVtZW50ID0gKHRhc2spID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIHRhc2suZ2V0SWQoKSk7XG5cbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcblxuICBjb25zdCBkZWxCdG4gPSBuZXcgSW1hZ2UoKTtcbiAgZGVsQnRuLnNyYyA9IFRyYXNoO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gdGFzay5nZXRUaXRsZSgpO1xuICAvL2lmIHRhc2sgaGFzIGRhdGUgbWFrZSBjYWxlbmRhciB0aGUgZGF0ZVxuICBjb25zdCBkYXRlID0gdGFzay5nZXREYXRlKCk7XG4gIGxldCBjYWxlbmRhcjtcbiAgaWYgKGRhdGUpIHtcbiAgICBjYWxlbmRhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNhbGVuZGFyLmlubmVyVGV4dCA9IGRhdGU7XG4gIH0gZWxzZSB7XG4gICAgY2FsZW5kYXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBjYWxlbmRhci5zcmMgPSBDYWxlbmRhcjtcbiAgfVxuICBjYWxlbmRhci5jbGFzc0xpc3QuYWRkKFwiY2FsZW5kYXJcIik7XG4gIGlmICh0YXNrLmdldERvbmUoKSA9PT0gdHJ1ZSkge1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJkb25lXCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcbiAgfVxuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYWxlbmRhcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxCdG4pO1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcixcbiAgICBjaGVja2JveCxcbiAgICB0aXRsZSxcbiAgICBkZWxCdG4sXG4gICAgY2FsZW5kYXIsXG4gIH07XG59O1xuXG5leHBvcnQgeyBUYXNrRWxlbWVudCB9O1xuIiwiaW1wb3J0IFwiLi90YXNrRm9ybS5jc3NcIjtcbmNvbnN0IFRhc2tGb3JtID0gKCgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRm9ybVwiKTtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGFza1wiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3NcIik7XG4gIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSBcIk9rXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImRhbmdlclwiKTtcbiAgY2FuY2VsQnRuLmlubmVyVGV4dCA9IFwiQ2FuY2VsXCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBmb3JtLFxuICAgIHRpdGxlSW5wdXQsXG4gICAgc3VibWl0QnRuLFxuICAgIGNhbmNlbEJ0bixcbiAgICByZXNldCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFRhc2tGb3JtIH07XG4iLCJpbXBvcnQgeyBUYXNrRWxlbWVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFzay90YXNrXCI7XG5cbmNvbnN0IFN0b3JhZ2UgPSAoKCkgPT4ge1xuICBsZXQgbmV4dElkID0gMDtcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcbiAgY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSwgdGFza3MpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChuZXh0SWQsIHRpdGxlLCB0YXNrcyk7XG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICBuZXh0SWQrKztcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgfTtcbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBpZCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3QgPSAoaWQpID0+IHtcbiAgICBsZXQgZm91bmQgPSAtMTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdC5nZXRJZCgpID09PSBpZCkge1xuICAgICAgICBmb3VuZCA9IHByb2plY3Q7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0cyxcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBhZGRQcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgZ2V0UHJvamVjdCxcbiAgfTtcbn0pKCk7XG5cbmNvbnN0IFByb2plY3QgPSAoaWQsIHRpdGxlLCB0YXNrcykgPT4ge1xuICBsZXQgbmV4dElkID0gMDtcbiAgY29uc3QgZ2V0SWQgPSAoKSA9PiBcIlwiICsgaWQ7XG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiAodGl0bGUgPSBuZXdUaXRsZSk7XG4gIGNvbnN0IGdldFRhc2tzID0gKCkgPT4gdGFza3M7XG4gIGNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkb25lKSA9PiB7XG4gICAgY29uc3QgbmV3VGFzayA9IFRhc2soYCR7aWR9LSR7bmV4dElkfWAsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZSk7XG4gICAgdGFza3MucHVzaChuZXdUYXNrKTtcbiAgICBuZXh0SWQrKztcbiAgfTtcbiAgY29uc3QgZ2V0T3BlblRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3QgPSBbXTtcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAoIXRhc2suZ2V0RG9uZSgpKSBsaXN0LnB1c2godGFzayk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGlzdDtcbiAgfTtcbiAgY29uc3QgZ2V0VGFzayA9IChpZCkgPT4ge1xuICAgIGxldCBmb3VuZCA9IC0xO1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLmdldElkKCkgPT09IGlkKSB7XG4gICAgICAgIGZvdW5kID0gdGFzaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmQ7XG4gIH07XG4gIGNvbnN0IHJlbW92ZVRhc2sgPSAoaWQpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5nZXRJZCgpID09PSBpZCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICByZXR1cm4ge1xuICAgIHRhc2tzLFxuICAgIGdldFRhc2tzLFxuICAgIGdldElkLFxuICAgIGdldFRpdGxlLFxuICAgIHNldFRpdGxlLFxuICAgIGFkZFRhc2ssXG4gICAgcmVtb3ZlVGFzayxcbiAgICBnZXRUYXNrLFxuICAgIGdldE9wZW5UYXNrcyxcbiAgfTtcbn07XG5cbmNvbnN0IFRhc2sgPSAoaWQsIHRpdGxlLCBkdWVEYXRlID0gdW5kZWZpbmVkLCBkb25lKSA9PiB7XG4gIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IHNldERhdGUgPSAoZGF0ZSkgPT4gKGR1ZURhdGUgPSBkYXRlKTtcbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gIGNvbnN0IHRvZ2dsZURvbmUgPSAoKSA9PiB7XG4gICAgaWYgKGRvbmUpIHtcbiAgICAgIGRvbmUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9uZSA9IHRydWU7XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXREb25lID0gKCkgPT4gZG9uZTtcbiAgcmV0dXJuIHtcbiAgICBnZXRJZCxcbiAgICBnZXRUaXRsZSxcbiAgICB0b2dnbGVEb25lLFxuICAgIGdldERvbmUsXG4gICAgc2V0RGF0ZSxcbiAgICBnZXREYXRlLFxuICB9O1xufTtcblxuZXhwb3J0IHsgU3RvcmFnZSwgUHJvamVjdCwgVGFzayB9O1xuIiwiaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCBDaGVjayBmcm9tIFwiLi9pbWFnZXMvY2hlY2sucG5nXCI7XG5cbmNvbnN0IEV2ZW50SGFuZGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGhhbmRsZU5ld1Byb2plY3RCdG4gPSAoYnV0dG9uLCBwcm9qZWN0Rm9ybSkgPT4ge1xuICAgIHByb2plY3RGb3JtLmZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBidXR0b24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChidXR0b24pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU5ld1Rhc2tCdG4gPSAoYnV0dG9uLCB0YXNrRm9ybSkgPT4ge1xuICAgIHRhc2tGb3JtLmZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBidXR0b24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChidXR0b24pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUZvcm1DYW5jZWwgPSAoZSwgbGlzdCwgZm9ybSwgYnV0dG9uKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJvamVjdFN1Ym1pdCA9IChlLCBwcm9qZWN0Rm9ybSwgcmVmcmVzaCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZSA9IHByb2plY3RGb3JtLnRpdGxlSW5wdXQudmFsdWU7XG4gICAgaWYgKCF0aXRsZSkgcmV0dXJuIGFsZXJ0KFwiUHJvamVjdCBuYW1lIGNhbid0IGJlIGVtcHR5XCIpO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBTdG9yYWdlLmFkZFByb2plY3QodGl0bGUsIFtdKTtcbiAgICByZWZyZXNoKG5ld1Byb2plY3QuZ2V0SWQoKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVGFza1N1Ym1pdCA9IChlLCB0YXNrRm9ybSwgcmVmcmVzaCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0aXRsZSA9IHRhc2tGb3JtLnRpdGxlSW5wdXQudmFsdWU7XG4gICAgaWYgKCF0aXRsZSkgcmV0dXJuIGFsZXJ0KFwiVGFzayBjYW4ndCBiZSBlbXB0eVwiKTtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbiAgICBTdG9yYWdlLmdldFByb2plY3QocHJvamVjdElkKS5hZGRUYXNrKHRpdGxlLCB1bmRlZmluZWQsIGZhbHNlKTtcbiAgICByZWZyZXNoKHByb2plY3RJZCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJvamVjdENsaWNrID0gKHByb2plY3RMaSwgbG9hZFByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBwcm9qZWN0TGkuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbiAgICBsb2FkUHJvamVjdChwcm9qZWN0SWQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRhc2tTdGF0ZUNoYW5nZSA9IChjaGVja2JveCwgcmVmcmVzaCkgPT4ge1xuICAgIGNvbnN0IHRhc2tJZCA9IGNoZWNrYm94LnBhcmVudE5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSB0YXNrSWQuc3Vic3RyaW5nKDAsIHRhc2tJZC5pbmRleE9mKFwiLVwiKSk7XG4gICAgU3RvcmFnZS5nZXRQcm9qZWN0KHByb2plY3RJZCkuZ2V0VGFzayh0YXNrSWQpLnRvZ2dsZURvbmUoKTtcbiAgICByZWZyZXNoKHByb2plY3RJZCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlVGFzayA9IChidXR0b24sIHJlZnJlc2gpID0+IHtcbiAgICBjb25zdCB0YXNrSWQgPSBidXR0b24ucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHRhc2tJZC5zdWJzdHJpbmcoMCwgdGFza0lkLmluZGV4T2YoXCItXCIpKTtcbiAgICBTdG9yYWdlLmdldFByb2plY3QocHJvamVjdElkKS5yZW1vdmVUYXNrKHRhc2tJZCk7XG4gICAgcmVmcmVzaChwcm9qZWN0SWQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNhbGVuZGFyQ2xpY2sgPSAoY2FsZW5kYXIsIHJlZnJlc2gpID0+IHtcbiAgICBjb25zdCB0YXNrSWQgPSBjYWxlbmRhci5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgY29uc3QgcHJvamVjdElkID0gdGFza0lkLnN1YnN0cmluZygwLCB0YXNrSWQuaW5kZXhPZihcIi1cIikpO1xuICAgIGNvbnN0IHRhc2sgPSBTdG9yYWdlLmdldFByb2plY3QocHJvamVjdElkKS5nZXRUYXNrKHRhc2tJZCk7XG4gICAgY29uc3QgZGF0ZVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlUGlja2VyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIGRhdGVQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBoYW5kbGVBZGREYXRlVG9UYXNrKHRhc2ssIGRhdGVQaWNrZXIudmFsdWUsIHJlZnJlc2gsIHByb2plY3RJZCk7XG4gICAgfSk7XG4gICAgY2FsZW5kYXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZGF0ZVBpY2tlciwgY2FsZW5kYXIpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFkZERhdGVUb1Rhc2sgPSAodGFzaywgZGF0ZSwgcmVmcmVzaCwgcHJvamVjdElkKSA9PiB7XG4gICAgdGFzay5zZXREYXRlKGRhdGUpO1xuICAgIHJlZnJlc2gocHJvamVjdElkKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGhhbmRsZU5ld1Byb2plY3RCdG4sXG4gICAgaGFuZGxlTmV3VGFza0J0bixcbiAgICBoYW5kbGVGb3JtQ2FuY2VsLFxuICAgIGhhbmRsZVByb2plY3RDbGljayxcbiAgICBoYW5kbGVQcm9qZWN0U3VibWl0LFxuICAgIGhhbmRsZVRhc2tTdWJtaXQsXG4gICAgaGFuZGxlVGFza1N0YXRlQ2hhbmdlLFxuICAgIGhhbmRsZURlbGV0ZVRhc2ssXG4gICAgaGFuZGxlQ2FsZW5kYXJDbGljayxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IEV2ZW50SGFuZGxlciB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdEZvcm0gfSBmcm9tIFwiLi9jb21wb25lbnRzL3Byb2plY3RGb3JtL3Byb2plY3RGb3JtXCI7XG5pbXBvcnQgeyBUYXNrRWxlbWVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFzay90YXNrXCI7XG5pbXBvcnQgeyBUYXNrRm9ybSB9IGZyb20gXCIuL2NvbXBvbmVudHMvdGFza0Zvcm0vdGFza0Zvcm1cIjtcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gXCIuL2V2ZW50SGFuZGxlclwiO1xuXG5jb25zdCB7IFN0b3JhZ2UgfSA9IHJlcXVpcmUoXCIuL2RhdGFcIik7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBsb2FkUHJvamVjdExpc3QoKTtcbn1cblxuLy9IRUFERVJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5oZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbmhlYWRlci5pbm5lckhUTUwgPSBcIjxoMT5UT0RPPC9oMT5cIjtcbmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuLy9NQUlOIENPTlRFTlRcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbi8vU0lERUJBUlxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5zaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyXCIpO1xuY29udGVudC5hcHBlbmRDaGlsZChzaWRlYmFyKTtcblxuY29uc3QgcHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5wcm9qZWN0SGVhZGluZy5pbm5lclRleHQgPSBcIi8vL1BST0pFQ1RTXCI7XG5zaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkaW5nKTtcblxuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5wcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKFwiLnByb2plY3QtbGlzdFwiKTtcbnNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xuXG5jb25zdCBwcm9qZWN0Rm9ybSA9IFByb2plY3RGb3JtO1xucHJvamVjdEZvcm0uZm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybS5mb3JtKTtcblxuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5uZXdQcm9qZWN0QnRuLmlubmVyVGV4dCA9IFwiQWRkIFByb2plY3RcIjtcbm5ld1Byb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcIm5ldy1wcm9qZWN0LWJ0blwiKTtcblxuLy9yZWxvYWRzIHRoZSBwcm9qZWN0IGxpc3RcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0TGlzdCgpIHtcbiAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgU3RvcmFnZS5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBwcm9qZWN0LmdldElkKCkpO1xuICAgIGxpLmlubmVyVGV4dCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgICBjb25zdCB0YXNrQW1vdW50ID0gcHJvamVjdC5nZXRPcGVuVGFza3MoKS5sZW5ndGg7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uaW5uZXJUZXh0ID0gdGFza0Ftb3VudDtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PlxuICAgICAgRXZlbnRIYW5kbGVyLmhhbmRsZVByb2plY3RDbGljayhlLnRhcmdldCwgbG9hZFByb2plY3QpXG4gICAgKTtcbiAgfSk7XG4gIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pO1xufVxuXG4vL0xPQURFRCBQUk9KRUNUXG5cbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG5jb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuXG5jb25zdCBwcm9qZWN0SDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxpc3RcIik7XG5cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnRuXCIpO1xuYWRkVGFza0J0bi5pbm5lclRleHQgPSBcIkFkZCBUYXNrXCI7XG5cbmNvbnN0IHRhc2tGb3JtID0gVGFza0Zvcm07XG50YXNrRm9ybS5mb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0KGlkKSB7XG4gIGNvbnN0IHByb2plY3QgPSBTdG9yYWdlLmdldFByb2plY3QoaWQpO1xuICBwcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgcHJvamVjdEgyLmlubmVyVGV4dCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SDIpO1xuXG4gIGxvYWRUYXNrcyhwcm9qZWN0LnRhc2tzLCBwcm9qZWN0LmdldElkKCkpO1xuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcbn1cblxuZnVuY3Rpb24gbG9hZFRhc2tzKHRhc2tzLCBwcm9qZWN0SWQpIHtcbiAgdGFza0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgdGFza0xpc3Quc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBwcm9qZWN0SWQpO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBUYXNrRWxlbWVudCh0YXNrKTtcbiAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudC5jb250YWluZXIpO1xuICAgIHRhc2tFbGVtZW50LmNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLmhhbmRsZVRhc2tTdGF0ZUNoYW5nZShlLnRhcmdldCwgcmVmcmVzaCk7XG4gICAgfSk7XG4gICAgdGFza0VsZW1lbnQuZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLmhhbmRsZURlbGV0ZVRhc2soZS50YXJnZXQsIHJlZnJlc2gpO1xuICAgIH0pO1xuICAgIHRhc2tFbGVtZW50LmNhbGVuZGFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLmhhbmRsZUNhbGVuZGFyQ2xpY2soZS50YXJnZXQsIHJlZnJlc2gpO1xuICAgIH0pO1xuICB9KTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tGb3JtLmZvcm0pO1xufVxuXG5mdW5jdGlvbiByZWZyZXNoKHByb2plY3RJZCkge1xuICBsb2FkUHJvamVjdChwcm9qZWN0SWQpO1xuICBjb25zdCB0YXNrcyA9IFN0b3JhZ2UuZ2V0UHJvamVjdChwcm9qZWN0SWQpLmdldFRhc2tzKCk7XG4gIGxvYWRUYXNrcyh0YXNrcywgcHJvamVjdElkKTtcbiAgbG9hZFByb2plY3RMaXN0KCk7XG4gIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gIHRhc2tGb3JtLnJlc2V0KCk7XG59XG5cbi8vRVZFTlRTXG5cbm5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIEV2ZW50SGFuZGxlci5oYW5kbGVOZXdQcm9qZWN0QnRuKGUudGFyZ2V0LCBwcm9qZWN0Rm9ybSk7XG59KTtcblxucHJvamVjdEZvcm0uY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBFdmVudEhhbmRsZXIuaGFuZGxlRm9ybUNhbmNlbChlLCBwcm9qZWN0TGlzdCwgcHJvamVjdEZvcm0sIG5ld1Byb2plY3RCdG4pO1xufSk7XG5cbnByb2plY3RGb3JtLnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+XG4gIEV2ZW50SGFuZGxlci5oYW5kbGVQcm9qZWN0U3VibWl0KGUsIHByb2plY3RGb3JtLCByZWZyZXNoKVxuKTtcblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+XG4gIEV2ZW50SGFuZGxlci5oYW5kbGVOZXdUYXNrQnRuKGUudGFyZ2V0LCB0YXNrRm9ybSlcbik7XG5cbnRhc2tGb3JtLmNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgRXZlbnRIYW5kbGVyLmhhbmRsZUZvcm1DYW5jZWwoZSwgdGFza0xpc3QsIHRhc2tGb3JtLCBhZGRUYXNrQnRuKTtcbn0pO1xuXG50YXNrRm9ybS5zdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PlxuICBFdmVudEhhbmRsZXIuaGFuZGxlVGFza1N1Ym1pdChlLCB0YXNrRm9ybSwgcmVmcmVzaClcbik7XG5cbmV4cG9ydCB7IGluaXQsIGxvYWRQcm9qZWN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgUHJvamVjdCwgU3RvcmFnZSB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCBcIi4vdWlcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBpbml0LCBsb2FkUHJvamVjdCB9IGZyb20gXCIuL3VpXCI7XG5cblN0b3JhZ2UuYWRkUHJvamVjdChcIkluYm94XCIsIFtdKTtcblN0b3JhZ2UucHJvamVjdHNbMF0uYWRkVGFzayhcIkRvIHRoaW5nXCIsIHVuZGVmaW5lZCwgdHJ1ZSk7XG5TdG9yYWdlLnByb2plY3RzWzBdLmFkZFRhc2soXCJEbyB0aGluZ3NcIiwgdW5kZWZpbmVkLCBmYWxzZSk7XG5TdG9yYWdlLnByb2plY3RzWzBdLmFkZFRhc2soXCJEbyB0aGluZ3NzXCIsIHVuZGVmaW5lZCwgdHJ1ZSk7XG5TdG9yYWdlLmFkZFByb2plY3QoXCJQcm9qZWN0IDFcIiwgW10pO1xuU3RvcmFnZS5wcm9qZWN0c1sxXS5hZGRUYXNrKFwiRG8gb3RoZXIgdGhpbmdcIiwgdW5kZWZpbmVkLCBmYWxzZSk7XG5cbmluaXQoKTtcbmxvYWRQcm9qZWN0KFwiMFwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==