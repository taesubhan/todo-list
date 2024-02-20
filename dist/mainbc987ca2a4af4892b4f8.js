/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/styles.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/styles.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    font-family: sans-serif, Arial, 'Times New Roman';
}

html {
    box-sizing: border-box;
}
*,
*::before,
*::after {
    box-sizing: inherit;
}

.title {
    text-align: center;
}

.body {
    display: grid;
    grid-template-columns: 1fr 3fr;
}

.task-label,
.task-value {
    display: inline;
}`, "",{"version":3,"sources":["webpack://./src/style/styles.css"],"names":[],"mappings":"AAAA;IACI,iDAAiD;AACrD;;AAEA;IACI,sBAAsB;AAC1B;AACA;;;IAGI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;;IAEI,eAAe;AACnB","sourcesContent":[":root {\n    font-family: sans-serif, Arial, 'Times New Roman';\n}\n\nhtml {\n    box-sizing: border-box;\n}\n*,\n*::before,\n*::after {\n    box-sizing: inherit;\n}\n\n.title {\n    text-align: center;\n}\n\n.body {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n.task-label,\n.task-value {\n    display: inline;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style/styles.css":
/*!******************************!*\
  !*** ./src/style/styles.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/dom/dialog-box.js":
/*!*******************************!*\
  !*** ./src/dom/dialog-box.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDialogButtonActions: () => (/* binding */ addDialogButtonActions),
/* harmony export */   editAndOpenTaskDetailDialog: () => (/* binding */ editAndOpenTaskDetailDialog)
/* harmony export */ });
/* harmony import */ var _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/todo-state.js */ "./src/logic/todo-state.js");
/* harmony import */ var _display_on_screen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-on-screen.js */ "./src/dom/display-on-screen.js");



function makeTextElementsEditable(flag=true, ...elements) {
    elements.forEach((elem) => elem.setAttribute('contentEditable', flag ? 'true' : 'false'));
}

function makeDateEditable(flag=true, dueDate, dueDateInput, taskIndex) {
    dueDate.style.display = flag ? 'none' : '';
    dueDateInput.style.display = flag ? '' : 'none';

    const taskObj = _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromSelectedProject(taskIndex);
    
    if (flag) {
        dueDateInput.value = taskObj.dueDate;
    } else {
        dueDate.textContent = taskObj.dueDate;
    }
}

function makePriorityEditable(flag=true, priority, priorityInput, taskIndex) {
    priority.style.display = flag ? 'none' : '';
    priorityInput.style.display = flag ? '' : 'none';

    const taskObj = _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromSelectedProject(taskIndex);

    if (flag) {
        priorityInput.value = taskObj.priority;
    } else {
        priority.textContent = taskObj.priority;
    }
}

function makeStatusEditable(flag=true, status, statusInput, taskIndex) {
    status.style.display = flag ? 'none' : '';
    statusInput.style.display = flag ? '' : 'none';

    const taskObj = _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromSelectedProject(taskIndex);

    if (flag) {
        statusInput.textContent = taskObj.getTaskStatus();
    } else {
        status.textContent = taskObj.getTaskStatus();
    }
}

function hideElements(...elements) {
    elements.forEach((elem) => elem.style.display = 'none');
}

function showElements(...elements) {
    elements.forEach((elem) => elem.style.display = '');
}

function revertEditChanges(title, description, dueDateInput, priorityInput, statusInput, taskIndex) {
    const currentTask = _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromSelectedProject(taskIndex);

    title.textContent = currentTask.title;
    description.textContent = currentTask.description;
    dueDateInput.value = currentTask.dueDate;
    priorityInput.value = currentTask.priority;
    statusInput.textContent = currentTask.getTaskStatus();
}

function getTaskIndex(formElement) {
    return parseInt(formElement.getAttribute('task-index'));
}

function addTaskDetailDialogButtons() {
    const dialogBox = document.querySelector('#display-task-detail');
    const taskForm = document.querySelector('.display-task-form');

    const cancelButton = document.querySelector('.cancel-task-detail');
    const deleteButton = document.querySelector('.delete-task');
    const editButton = document.querySelector('.edit-task-detail');
    const confirmEditButton = document.querySelector('.confirm-edit');
    const cancelEditButton = document.querySelector('.cancel-edit'); 

    const title = document.querySelector('.task-detail-title-value');
    const description = document.querySelector('.task-detail-description-value');
    const dueDate = document.querySelector('.task-detail-due-date-value');
    const priority = document.querySelector('.task-detail-priority-value');
    const status = document.querySelector('.task-detail-status-value');

    //hidden input that gets displayed when user decides to edit values
    const dueDateInput = document.querySelector('.task-detail-due-date-input');
    const priorityInput = document.querySelector('.task-detail-priority-input');
    const statusInput = document.querySelector('.task-detail-status-input');
    

    deleteButton.addEventListener('click', (e) => {
        const taskIndex = getTaskIndex(taskForm);
        _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.deleteTaskFromSelectedProject(taskIndex);
        dialogBox.close();
        (0,_display_on_screen_js__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)();
    }) 

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        dialogBox.close();
    })

    editButton.addEventListener('click', (e) => {
        const taskIndex = getTaskIndex(taskForm);
        
        makeTextElementsEditable(true, title, description);
        makeDateEditable(true, dueDate, dueDateInput, taskIndex);
        makePriorityEditable(true, priority, priorityInput, taskIndex);
        makeStatusEditable(true, status, statusInput, taskIndex);
        
        hideElements(editButton, cancelButton, deleteButton);
        showElements(confirmEditButton, cancelEditButton); 
    })

    cancelEditButton.addEventListener('click', () => {
        const taskIndex = getTaskIndex(taskForm);

        revertEditChanges(title, description, dueDateInput, priorityInput, statusInput, taskIndex);
        makeTextElementsEditable(false, title, description);
        makeDateEditable(false, dueDate, dueDateInput, taskIndex);
        makePriorityEditable(false, priority, priorityInput, taskIndex);
        makeStatusEditable(false, status, statusInput, taskIndex);

        hideElements(confirmEditButton, cancelEditButton);
        showElements(editButton, cancelButton, deleteButton)
    })

    confirmEditButton.addEventListener('click', () => {
        const taskIndex = getTaskIndex(taskForm);
        const task = _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromSelectedProject(taskIndex);

        task.title = title.textContent;
        task.description = description.textContent;
        task.dueDate = dueDateInput.value;
        task.priority = priorityInput.value;
        task.setTaskStatus(statusInput.value === 'true' ? true : false);

        makeTextElementsEditable(false, title, description);
        makeDateEditable(false, dueDate, dueDateInput, taskIndex);
        makePriorityEditable(false, priority, priorityInput, taskIndex);
        makeStatusEditable(false, status, statusInput, taskIndex);

        hideElements(confirmEditButton, cancelEditButton);
        showElements(editButton, cancelButton, deleteButton);

        (0,_display_on_screen_js__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)();
    })

    statusInput.addEventListener('click', () => {
        const taskIndex = getTaskIndex(taskForm);
        const task = _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromSelectedProject(taskIndex);
//FIX THIS!

        // const val = !statusInput.value;
        // statusInput.value = false; 
        statusInput.value = statusInput.value === 'true' ? 'false' : 'true';
        statusInput.textContent = statusInput.value === 'true' ? 'Completed' : 'Incomplete';

    })
}

function editAndOpenTaskDetailDialog(taskIndex) {
    const dialogBox = document.querySelector('#display-task-detail');
    const taskForm = document.querySelector('.display-task-form');
    const title = document.querySelector('.task-detail-title-value');
    const description = document.querySelector('.task-detail-description-value');
    const dueDate = document.querySelector('.task-detail-due-date-value');
    const priority = document.querySelector('.task-detail-priority-value');
    const status = document.querySelector('.task-detail-status-value');
    const statusInput = document.querySelector('.task-detail-status-input');

    taskForm.setAttribute('task-index', `${taskIndex}`);

    const taskObj = _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromSelectedProject(taskIndex);
    
    title.textContent = taskObj.title;
    description.textContent = taskObj.description;
    dueDate.textContent = taskObj.dueDate;
    priority.textContent = taskObj.priority;
    status.textContent = taskObj.getTaskStatus();
    statusInput.value = `${taskObj.isTaskCompleted()}`;

    dialogBox.showModal();
}

function addCreatingTaskDialog() {
    const dialogBox = document.querySelector('#add-task-dialog');
    const taskForm = document.querySelector('.add-task-form');
    const showDialogButton = document.querySelector('.task-show-dialog');
    const confirmButton = document.querySelector('.task-confirm');
    const cancelButton = document.querySelector('.task-cancel');

    const titleInput = document.querySelector('#task-title-input');
    const descriptionInput = document.querySelector('#task-description-input');
    const dueDateInput = document.querySelector('#task-due-date-input');
    const priorityInput = document.querySelector('#task-priority-input');

    showDialogButton.addEventListener('click', () => dialogBox.showModal());

    dialogBox.addEventListener('close', () => taskForm.reset());

    confirmButton.addEventListener('click', (e) => {
        if (taskForm.reportValidity()) {   
            e.preventDefault();
            dialogBox.close();

            const newTask = _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.createTask(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value);
            _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject(_logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.getSelectedProject(), newTask);
            (0,_display_on_screen_js__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)();
        }
    })

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        dialogBox.close();
    });
}

function addCreatingProjectDialog() {
    const dialogBox = document.querySelector('#add-project-dialog');
    const projectForm = document.querySelector('.add-project-form');
    const showDialogButton = document.querySelector('.project-show-dialog');
    const confirmButton = document.querySelector('.project-confirm');
    const cancelButton = document.querySelector('.project-cancel');
    const projectInput = document.querySelector('#project-title-input');

    showDialogButton.addEventListener('click', () => dialogBox.showModal());

    dialogBox.addEventListener('close', () => projectForm.reset());

    confirmButton.addEventListener('click', (e) => {
        if (projectForm.reportValidity()) {
            e.preventDefault();
            dialogBox.close();

            const newProject = _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.createProject(projectInput.value);
            _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.addProject(newProject);
            console.log(newProject);
            (0,_display_on_screen_js__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)();
        }
    });

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        dialogBox.close();
    })
}

function addDialogButtonActions() {
    addCreatingTaskDialog();
    addCreatingProjectDialog();
    addTaskDetailDialogButtons();
}




/***/ }),

/***/ "./src/dom/display-on-screen.js":
/*!**************************************!*\
  !*** ./src/dom/display-on-screen.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayProjectsOnMenu: () => (/* binding */ displayProjectsOnMenu),
/* harmony export */   displayTaskList: () => (/* binding */ displayTaskList),
/* harmony export */   updateDisplay: () => (/* binding */ updateDisplay)
/* harmony export */ });
/* harmony import */ var _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/todo-state.js */ "./src/logic/todo-state.js");
/* harmony import */ var _dialog_box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-box.js */ "./src/dom/dialog-box.js");



const taskListDOM = document.querySelector('.project-tasks');

function getTaskDetailsButton(taskIndex) {
    const detailButton = document.createElement('button');
    detailButton.classList.add('task-details');
    detailButton.textContent = 'Details';
    
    detailButton.addEventListener('click', (e) => {
        (0,_dialog_box_js__WEBPACK_IMPORTED_MODULE_1__.editAndOpenTaskDetailDialog)(taskIndex);
        // console.log(todo.getProjectList());
    })
    return detailButton;
}

/* Display list of task */
function createCheckbox(taskObj) {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'completed');
    checkbox.classList.add('task-status-checkbox');

    checkbox.checked = taskObj.isTaskCompleted();

    checkbox.addEventListener('change', () => {
        taskObj.setTaskStatus(checkbox.checked);
    })

    return checkbox;
}

function getTasksDOM(taskList) {
    const allTasksContainer = document.createElement('div');

    for (let i = 0; i < taskList.length; i++) {
        const taskObj = taskList[i];
        const taskContainer = document.createElement('div');
        const taskUnorderedList = document.createElement('ul');
        const checkbox = createCheckbox(taskObj);
        const taskDetailsButton = getTaskDetailsButton(i);
        
        taskContainer.classList.add('task-container');
        taskContainer.setAttribute('task-index', `${i}`);

        taskContainer.appendChild(checkbox);
        taskContainer.appendChild(taskUnorderedList); 
        taskContainer.appendChild(taskDetailsButton);

        const properties = {title: 'title', dueDate: 'due-date'};

        for (let prop in properties) {
            const taskProperty = document.createElement('li');
            taskProperty.textContent = taskObj[`${prop}`];
            taskProperty.classList.add('task-' + properties[`${prop}`]);
            taskUnorderedList.appendChild(taskProperty);
        }
        allTasksContainer.appendChild(taskContainer);
    }
    return allTasksContainer;
}

function getProjectDOM(projectDOM) {
    if (projectDOM === null) {
        const emptyProjectContainer = document.createElement('div');
        emptyProjectContainer.classList.add('project-container');
        return emptyProjectContainer;
    }

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    
    const projectTitle = document.createElement('p');
    projectTitle.textContent = projectDOM.title;
    projectContainer.appendChild(projectTitle);
    
    const projectTasks = getTasksDOM(projectDOM.getTaskList());
    projectContainer.appendChild(projectTasks); 

    return projectContainer;
}

function displayTaskList() {
    const projectDOM = getProjectDOM(_logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.getSelectedProject());
    taskListDOM.appendChild(projectDOM);
}

/* Delete and update task display */
function deleteTaskDisplay() {
    const projectContainer = document.querySelector('.project-container');
    taskListDOM.removeChild(projectContainer);
}

function updateTaskDisplay() {
    deleteTaskDisplay();
    displayTaskList();
}

/* Display list of projects in menu */

function replaceSpaces(text) {
    return text.trim().replace(' ', '-');
}

function displayProjectsOnMenu() {
    const menu = document.querySelector('.project-list-container');
    const projectListItem = document.createElement('ul');
    projectListItem.classList.add('project-list-menu')
    const projectListArray = _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.getProjectList();
    for (let i = 0; i < projectListArray.length; i++) {
        const proj = projectListArray[i];
        const projectItem = document.createElement('li');
        projectItem.classList.add('project-title', `${replaceSpaces(proj.title)}`);
        projectItem.setAttribute('projectIndex', `${i}`);
        projectItem.textContent = proj.title;
        projectItem.addEventListener('click', () => {
            _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.setSelectedProject(proj);
            updateDisplay();
            // console.log(todo.selectedProject);
        });
        projectListItem.appendChild(projectItem);
    }

    menu.appendChild(projectListItem);
}

function deleteProjectsOnMenuDisplay() {
    const menu = document.querySelector('.project-list-container');
    const projectListItem = document.querySelector('.project-list-menu');
    menu.removeChild(projectListItem);
}

function updateProjectMenuDisplay() {
    deleteProjectsOnMenuDisplay();
    displayProjectsOnMenu();
}

/* Update for all data on the webpage */

function updateDisplay() {
    updateTaskDisplay();
    updateProjectMenuDisplay();
}



/***/ }),

/***/ "./src/dom/dom-controller.js":
/*!***********************************!*\
  !*** ./src/dom/dom-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   start: () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _dialog_box_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog-box.js */ "./src/dom/dialog-box.js");
/* harmony import */ var _display_on_screen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-on-screen.js */ "./src/dom/display-on-screen.js");



function start() {
    (0,_display_on_screen_js__WEBPACK_IMPORTED_MODULE_1__.displayTaskList)();
    (0,_display_on_screen_js__WEBPACK_IMPORTED_MODULE_1__.displayProjectsOnMenu)();
    (0,_dialog_box_js__WEBPACK_IMPORTED_MODULE_0__.addDialogButtonActions)();
}



/***/ }),

/***/ "./src/logic/projects.js":
/*!*******************************!*\
  !*** ./src/logic/projects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   project: () => (/* binding */ project)
/* harmony export */ });
function project(title) {
    const taskList = [];

    const addTask = (task) => taskList.push(task);
    const deleteTask = (index) => taskList.splice(index, 1);
    const getTask = (index) => taskList[index];
    const getTaskList = () => taskList;

    return {title, addTask, deleteTask, getTask, getTaskList};
}




/***/ }),

/***/ "./src/logic/task.js":
/*!***************************!*\
  !*** ./src/logic/task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   task: () => (/* binding */ task)
/* harmony export */ });
function task(title, description, dueDate, priority) {
    let taskCompleted = false;
    // const editTitle = (newTitle) => title = newTitle;
    // const editDescription = (newDescription) => description = newDescription;
    // const editDueDate = (newDueDate) => dueDate = newDueDate;
    // const editPriority = (newPriority) => priority = newPriority;
    const toggleCompleted = () => {
        taskCompleted
            ? taskCompleted = false 
            : taskCompleted = true
    }
    const isTaskCompleted = () => taskCompleted;
    const setTaskStatus = (status) => taskCompleted = status;
    const getTaskStatus = () => taskCompleted ? 'Completed' : 'Incomplete';
    
    return {title, description, dueDate, priority, toggleCompleted, isTaskCompleted, setTaskStatus, getTaskStatus};
}





/***/ }),

/***/ "./src/logic/todo-state.js":
/*!*********************************!*\
  !*** ./src/logic/todo-state.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   addTaskToProject: () => (/* binding */ addTaskToProject),
/* harmony export */   createDummyProjectsAndTasks: () => (/* binding */ createDummyProjectsAndTasks),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   deleteTaskFromSelectedProject: () => (/* binding */ deleteTaskFromSelectedProject),
/* harmony export */   getProject: () => (/* binding */ getProject),
/* harmony export */   getProjectList: () => (/* binding */ getProjectList),
/* harmony export */   getSelectedProject: () => (/* binding */ getSelectedProject),
/* harmony export */   getTaskFromSelectedProject: () => (/* binding */ getTaskFromSelectedProject),
/* harmony export */   setSelectedProject: () => (/* binding */ setSelectedProject)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/logic/task.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/logic/projects.js");




const projectList = [];
let selectedProject = null;

function createTask(title, description, dueDate, priority) {
    return (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.task)(title, description, dueDate, priority);
}

function addTaskToProject(existingProject, newTask) {
    existingProject.addTask(newTask);
}

function createProject(title) {
    return (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.project)(title);
}

function addProject(newProject) {
    projectList.push(newProject);
}

function getProject(index) {
    return projectList[index];
}

function getProjectList() {
    return projectList;
}

function getSelectedProject() {
    return selectedProject;
}

function setSelectedProject(project) {
    selectedProject = project;
    // selectedProject = getProject(index);
}

function getTaskFromSelectedProject(index) {
    return selectedProject.getTask(index);
}

function deleteTaskFromSelectedProject(index) {
    selectedProject.deleteTask(index);
}

function createDummyProjectsAndTasks() {
    const project1 = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.project)('Work');
    const project2 = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.project)('Chores');

    const task1 = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.task)('Polish Excel', 'Excel is messy, need to clean it up', '2023-02-03', 'High');
    const task2 = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.task)('Train New Employee', 'New employee needs to be trained on programming', 
                        '2023-05-19', 'Medium');
    const task3 = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.task)('Do Laundry', 'Laundry basket is almost full', '2023-12-14', 'Medium');
    const task4 = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.task)('Wash Dishes', 'Dishes are dirty', '2023-10-07', 'High');
    const task5 = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.task)('Change Lightbulb', 'Lightbulb has been flickering for a few days', '2023-11-13', 'Low');

    project1.addTask(task1);
    project1.addTask(task2);
    project2.addTask(task3);
    project2.addTask(task4);
    project2.addTask(task5);

    addProject(project1);
    addProject(project2);
}

createDummyProjectsAndTasks();

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
/* harmony import */ var _style_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/styles.css */ "./src/style/styles.css");
/* harmony import */ var _dom_dom_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/dom-controller.js */ "./src/dom/dom-controller.js");


// import {start} from './logic/todo-state.js';


(0,_dom_dom_controller_js__WEBPACK_IMPORTED_MODULE_1__.start)();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1AscUJBQXFCLHFEQUFPO0FBQzVCLHFCQUFxQixxREFBTzs7QUFFNUIsa0JBQWtCLDhDQUFJO0FBQ3RCLGtCQUFrQiw4Q0FBSTtBQUN0QjtBQUNBLGtCQUFrQiw4Q0FBSTtBQUN0QixrQkFBa0IsOENBQUk7QUFDdEIsa0JBQWtCLDhDQUFJOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDckVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ2tCO0FBQzlDLFdBQVcsT0FBTzs7O0FBR2xCLDZEQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGVzLmNzcz9hZjdjIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS9kaWFsb2ctYm94LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20vZGlzcGxheS1vbi1zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS9kb20tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljL3RvZG8tc3RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsIEFyaWFsLCAnVGltZXMgTmV3IFJvbWFuJztcbn1cblxuaHRtbCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbn1cblxuLnRhc2stbGFiZWwsXG4udGFzay12YWx1ZSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTs7O0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTs7SUFFSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsIEFyaWFsLCAnVGltZXMgTmV3IFJvbWFuJztcXG59XFxuXFxuaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuXFxuLnRhc2stbGFiZWwsXFxuLnRhc2stdmFsdWUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAqIGFzIHRvZG8gZnJvbSAnLi4vbG9naWMvdG9kby1zdGF0ZS5qcyc7XG5pbXBvcnQge3VwZGF0ZURpc3BsYXl9IGZyb20gJy4vZGlzcGxheS1vbi1zY3JlZW4uanMnO1xuXG5mdW5jdGlvbiBtYWtlVGV4dEVsZW1lbnRzRWRpdGFibGUoZmxhZz10cnVlLCAuLi5lbGVtZW50cykge1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW0pID0+IGVsZW0uc2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnLCBmbGFnID8gJ3RydWUnIDogJ2ZhbHNlJykpO1xufVxuXG5mdW5jdGlvbiBtYWtlRGF0ZUVkaXRhYmxlKGZsYWc9dHJ1ZSwgZHVlRGF0ZSwgZHVlRGF0ZUlucHV0LCB0YXNrSW5kZXgpIHtcbiAgICBkdWVEYXRlLnN0eWxlLmRpc3BsYXkgPSBmbGFnID8gJ25vbmUnIDogJyc7XG4gICAgZHVlRGF0ZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBmbGFnID8gJycgOiAnbm9uZSc7XG5cbiAgICBjb25zdCB0YXNrT2JqID0gdG9kby5nZXRUYXNrRnJvbVNlbGVjdGVkUHJvamVjdCh0YXNrSW5kZXgpO1xuICAgIFxuICAgIGlmIChmbGFnKSB7XG4gICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IHRhc2tPYmouZHVlRGF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFza09iai5kdWVEYXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFrZVByaW9yaXR5RWRpdGFibGUoZmxhZz10cnVlLCBwcmlvcml0eSwgcHJpb3JpdHlJbnB1dCwgdGFza0luZGV4KSB7XG4gICAgcHJpb3JpdHkuc3R5bGUuZGlzcGxheSA9IGZsYWcgPyAnbm9uZScgOiAnJztcbiAgICBwcmlvcml0eUlucHV0LnN0eWxlLmRpc3BsYXkgPSBmbGFnID8gJycgOiAnbm9uZSc7XG5cbiAgICBjb25zdCB0YXNrT2JqID0gdG9kby5nZXRUYXNrRnJvbVNlbGVjdGVkUHJvamVjdCh0YXNrSW5kZXgpO1xuXG4gICAgaWYgKGZsYWcpIHtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IHRhc2tPYmoucHJpb3JpdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrT2JqLnByaW9yaXR5O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFrZVN0YXR1c0VkaXRhYmxlKGZsYWc9dHJ1ZSwgc3RhdHVzLCBzdGF0dXNJbnB1dCwgdGFza0luZGV4KSB7XG4gICAgc3RhdHVzLnN0eWxlLmRpc3BsYXkgPSBmbGFnID8gJ25vbmUnIDogJyc7XG4gICAgc3RhdHVzSW5wdXQuc3R5bGUuZGlzcGxheSA9IGZsYWcgPyAnJyA6ICdub25lJztcblxuICAgIGNvbnN0IHRhc2tPYmogPSB0b2RvLmdldFRhc2tGcm9tU2VsZWN0ZWRQcm9qZWN0KHRhc2tJbmRleCk7XG5cbiAgICBpZiAoZmxhZykge1xuICAgICAgICBzdGF0dXNJbnB1dC50ZXh0Q29udGVudCA9IHRhc2tPYmouZ2V0VGFza1N0YXR1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IHRhc2tPYmouZ2V0VGFza1N0YXR1cygpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGlkZUVsZW1lbnRzKC4uLmVsZW1lbnRzKSB7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbSkgPT4gZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbn1cblxuZnVuY3Rpb24gc2hvd0VsZW1lbnRzKC4uLmVsZW1lbnRzKSB7XG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbSkgPT4gZWxlbS5zdHlsZS5kaXNwbGF5ID0gJycpO1xufVxuXG5mdW5jdGlvbiByZXZlcnRFZGl0Q2hhbmdlcyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGVJbnB1dCwgcHJpb3JpdHlJbnB1dCwgc3RhdHVzSW5wdXQsIHRhc2tJbmRleCkge1xuICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gdG9kby5nZXRUYXNrRnJvbVNlbGVjdGVkUHJvamVjdCh0YXNrSW5kZXgpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBjdXJyZW50VGFzay50aXRsZTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGN1cnJlbnRUYXNrLmRlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IGN1cnJlbnRUYXNrLmR1ZURhdGU7XG4gICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IGN1cnJlbnRUYXNrLnByaW9yaXR5O1xuICAgIHN0YXR1c0lucHV0LnRleHRDb250ZW50ID0gY3VycmVudFRhc2suZ2V0VGFza1N0YXR1cygpO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrSW5kZXgoZm9ybUVsZW1lbnQpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoZm9ybUVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YXNrLWluZGV4JykpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrRGV0YWlsRGlhbG9nQnV0dG9ucygpIHtcbiAgICBjb25zdCBkaWFsb2dCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheS10YXNrLWRldGFpbCcpO1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktdGFzay1mb3JtJyk7XG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLXRhc2stZGV0YWlsJyk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZS10YXNrJyk7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZGV0YWlsJyk7XG4gICAgY29uc3QgY29uZmlybUVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybS1lZGl0Jyk7XG4gICAgY29uc3QgY2FuY2VsRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtZWRpdCcpOyBcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlsLXRpdGxlLXZhbHVlJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWwtZGVzY3JpcHRpb24tdmFsdWUnKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlsLWR1ZS1kYXRlLXZhbHVlJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWwtcHJpb3JpdHktdmFsdWUnKTtcbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWwtc3RhdHVzLXZhbHVlJyk7XG5cbiAgICAvL2hpZGRlbiBpbnB1dCB0aGF0IGdldHMgZGlzcGxheWVkIHdoZW4gdXNlciBkZWNpZGVzIHRvIGVkaXQgdmFsdWVzXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlsLWR1ZS1kYXRlLWlucHV0Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbC1wcmlvcml0eS1pbnB1dCcpO1xuICAgIGNvbnN0IHN0YXR1c0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlsLXN0YXR1cy1pbnB1dCcpO1xuICAgIFxuXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gZ2V0VGFza0luZGV4KHRhc2tGb3JtKTtcbiAgICAgICAgdG9kby5kZWxldGVUYXNrRnJvbVNlbGVjdGVkUHJvamVjdCh0YXNrSW5kZXgpO1xuICAgICAgICBkaWFsb2dCb3guY2xvc2UoKTtcbiAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xuICAgIH0pIFxuXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaWFsb2dCb3guY2xvc2UoKTtcbiAgICB9KVxuXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGdldFRhc2tJbmRleCh0YXNrRm9ybSk7XG4gICAgICAgIFxuICAgICAgICBtYWtlVGV4dEVsZW1lbnRzRWRpdGFibGUodHJ1ZSwgdGl0bGUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgbWFrZURhdGVFZGl0YWJsZSh0cnVlLCBkdWVEYXRlLCBkdWVEYXRlSW5wdXQsIHRhc2tJbmRleCk7XG4gICAgICAgIG1ha2VQcmlvcml0eUVkaXRhYmxlKHRydWUsIHByaW9yaXR5LCBwcmlvcml0eUlucHV0LCB0YXNrSW5kZXgpO1xuICAgICAgICBtYWtlU3RhdHVzRWRpdGFibGUodHJ1ZSwgc3RhdHVzLCBzdGF0dXNJbnB1dCwgdGFza0luZGV4KTtcbiAgICAgICAgXG4gICAgICAgIGhpZGVFbGVtZW50cyhlZGl0QnV0dG9uLCBjYW5jZWxCdXR0b24sIGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIHNob3dFbGVtZW50cyhjb25maXJtRWRpdEJ1dHRvbiwgY2FuY2VsRWRpdEJ1dHRvbik7IFxuICAgIH0pXG5cbiAgICBjYW5jZWxFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSBnZXRUYXNrSW5kZXgodGFza0Zvcm0pO1xuXG4gICAgICAgIHJldmVydEVkaXRDaGFuZ2VzKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZUlucHV0LCBwcmlvcml0eUlucHV0LCBzdGF0dXNJbnB1dCwgdGFza0luZGV4KTtcbiAgICAgICAgbWFrZVRleHRFbGVtZW50c0VkaXRhYmxlKGZhbHNlLCB0aXRsZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICBtYWtlRGF0ZUVkaXRhYmxlKGZhbHNlLCBkdWVEYXRlLCBkdWVEYXRlSW5wdXQsIHRhc2tJbmRleCk7XG4gICAgICAgIG1ha2VQcmlvcml0eUVkaXRhYmxlKGZhbHNlLCBwcmlvcml0eSwgcHJpb3JpdHlJbnB1dCwgdGFza0luZGV4KTtcbiAgICAgICAgbWFrZVN0YXR1c0VkaXRhYmxlKGZhbHNlLCBzdGF0dXMsIHN0YXR1c0lucHV0LCB0YXNrSW5kZXgpO1xuXG4gICAgICAgIGhpZGVFbGVtZW50cyhjb25maXJtRWRpdEJ1dHRvbiwgY2FuY2VsRWRpdEJ1dHRvbik7XG4gICAgICAgIHNob3dFbGVtZW50cyhlZGl0QnV0dG9uLCBjYW5jZWxCdXR0b24sIGRlbGV0ZUJ1dHRvbilcbiAgICB9KVxuXG4gICAgY29uZmlybUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGdldFRhc2tJbmRleCh0YXNrRm9ybSk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSB0b2RvLmdldFRhc2tGcm9tU2VsZWN0ZWRQcm9qZWN0KHRhc2tJbmRleCk7XG5cbiAgICAgICAgdGFzay50aXRsZSA9IHRpdGxlLnRleHRDb250ZW50O1xuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24udGV4dENvbnRlbnQ7XG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5SW5wdXQudmFsdWU7XG4gICAgICAgIHRhc2suc2V0VGFza1N0YXR1cyhzdGF0dXNJbnB1dC52YWx1ZSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlKTtcblxuICAgICAgICBtYWtlVGV4dEVsZW1lbnRzRWRpdGFibGUoZmFsc2UsIHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIG1ha2VEYXRlRWRpdGFibGUoZmFsc2UsIGR1ZURhdGUsIGR1ZURhdGVJbnB1dCwgdGFza0luZGV4KTtcbiAgICAgICAgbWFrZVByaW9yaXR5RWRpdGFibGUoZmFsc2UsIHByaW9yaXR5LCBwcmlvcml0eUlucHV0LCB0YXNrSW5kZXgpO1xuICAgICAgICBtYWtlU3RhdHVzRWRpdGFibGUoZmFsc2UsIHN0YXR1cywgc3RhdHVzSW5wdXQsIHRhc2tJbmRleCk7XG5cbiAgICAgICAgaGlkZUVsZW1lbnRzKGNvbmZpcm1FZGl0QnV0dG9uLCBjYW5jZWxFZGl0QnV0dG9uKTtcbiAgICAgICAgc2hvd0VsZW1lbnRzKGVkaXRCdXR0b24sIGNhbmNlbEJ1dHRvbiwgZGVsZXRlQnV0dG9uKTtcblxuICAgICAgICB1cGRhdGVEaXNwbGF5KCk7XG4gICAgfSlcblxuICAgIHN0YXR1c0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSBnZXRUYXNrSW5kZXgodGFza0Zvcm0pO1xuICAgICAgICBjb25zdCB0YXNrID0gdG9kby5nZXRUYXNrRnJvbVNlbGVjdGVkUHJvamVjdCh0YXNrSW5kZXgpO1xuLy9GSVggVEhJUyFcblxuICAgICAgICAvLyBjb25zdCB2YWwgPSAhc3RhdHVzSW5wdXQudmFsdWU7XG4gICAgICAgIC8vIHN0YXR1c0lucHV0LnZhbHVlID0gZmFsc2U7IFxuICAgICAgICBzdGF0dXNJbnB1dC52YWx1ZSA9IHN0YXR1c0lucHV0LnZhbHVlID09PSAndHJ1ZScgPyAnZmFsc2UnIDogJ3RydWUnO1xuICAgICAgICBzdGF0dXNJbnB1dC50ZXh0Q29udGVudCA9IHN0YXR1c0lucHV0LnZhbHVlID09PSAndHJ1ZScgPyAnQ29tcGxldGVkJyA6ICdJbmNvbXBsZXRlJztcblxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0QW5kT3BlblRhc2tEZXRhaWxEaWFsb2codGFza0luZGV4KSB7XG4gICAgY29uc3QgZGlhbG9nQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc3BsYXktdGFzay1kZXRhaWwnKTtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LXRhc2stZm9ybScpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlsLXRpdGxlLXZhbHVlJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWwtZGVzY3JpcHRpb24tdmFsdWUnKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlsLWR1ZS1kYXRlLXZhbHVlJyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWwtcHJpb3JpdHktdmFsdWUnKTtcbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWwtc3RhdHVzLXZhbHVlJyk7XG4gICAgY29uc3Qgc3RhdHVzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWwtc3RhdHVzLWlucHV0Jyk7XG5cbiAgICB0YXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ3Rhc2staW5kZXgnLCBgJHt0YXNrSW5kZXh9YCk7XG5cbiAgICBjb25zdCB0YXNrT2JqID0gdG9kby5nZXRUYXNrRnJvbVNlbGVjdGVkUHJvamVjdCh0YXNrSW5kZXgpO1xuICAgIFxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFza09iai50aXRsZTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2tPYmouZGVzY3JpcHRpb247XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tPYmouZHVlRGF0ZTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2tPYmoucHJpb3JpdHk7XG4gICAgc3RhdHVzLnRleHRDb250ZW50ID0gdGFza09iai5nZXRUYXNrU3RhdHVzKCk7XG4gICAgc3RhdHVzSW5wdXQudmFsdWUgPSBgJHt0YXNrT2JqLmlzVGFza0NvbXBsZXRlZCgpfWA7XG5cbiAgICBkaWFsb2dCb3guc2hvd01vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIGFkZENyZWF0aW5nVGFza0RpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2dCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stZGlhbG9nJyk7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stZm9ybScpO1xuICAgIGNvbnN0IHNob3dEaWFsb2dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1zaG93LWRpYWxvZycpO1xuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb25maXJtJyk7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY2FuY2VsJyk7XG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUtaW5wdXQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kdWUtZGF0ZS1pbnB1dCcpO1xuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1wcmlvcml0eS1pbnB1dCcpO1xuXG4gICAgc2hvd0RpYWxvZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpYWxvZ0JveC5zaG93TW9kYWwoKSk7XG5cbiAgICBkaWFsb2dCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKSA9PiB0YXNrRm9ybS5yZXNldCgpKTtcblxuICAgIGNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAodGFza0Zvcm0ucmVwb3J0VmFsaWRpdHkoKSkgeyAgIFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZGlhbG9nQm94LmNsb3NlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0b2RvLmNyZWF0ZVRhc2sodGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgZHVlRGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIHRvZG8uYWRkVGFza1RvUHJvamVjdCh0b2RvLmdldFNlbGVjdGVkUHJvamVjdCgpLCBuZXdUYXNrKTtcbiAgICAgICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpYWxvZ0JveC5jbG9zZSgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRDcmVhdGluZ1Byb2plY3REaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LWRpYWxvZycpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWZvcm0nKTtcbiAgICBjb25zdCBzaG93RGlhbG9nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3Qtc2hvdy1kaWFsb2cnKTtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29uZmlybScpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhbmNlbCcpO1xuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlLWlucHV0Jyk7XG5cbiAgICBzaG93RGlhbG9nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlhbG9nQm94LnNob3dNb2RhbCgpKTtcblxuICAgIGRpYWxvZ0JveC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHByb2plY3RGb3JtLnJlc2V0KCkpO1xuXG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0Rm9ybS5yZXBvcnRWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkaWFsb2dCb3guY2xvc2UoKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHRvZG8uY3JlYXRlUHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgdG9kby5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3UHJvamVjdCk7XG4gICAgICAgICAgICB1cGRhdGVEaXNwbGF5KCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlhbG9nQm94LmNsb3NlKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkRGlhbG9nQnV0dG9uQWN0aW9ucygpIHtcbiAgICBhZGRDcmVhdGluZ1Rhc2tEaWFsb2coKTtcbiAgICBhZGRDcmVhdGluZ1Byb2plY3REaWFsb2coKTtcbiAgICBhZGRUYXNrRGV0YWlsRGlhbG9nQnV0dG9ucygpO1xufVxuXG5cbmV4cG9ydCB7YWRkRGlhbG9nQnV0dG9uQWN0aW9uc307IiwiaW1wb3J0ICogYXMgdG9kbyBmcm9tICcuLi9sb2dpYy90b2RvLXN0YXRlLmpzJztcbmltcG9ydCB7ZWRpdEFuZE9wZW5UYXNrRGV0YWlsRGlhbG9nfSBmcm9tICcuL2RpYWxvZy1ib3guanMnO1xuXG5jb25zdCB0YXNrTGlzdERPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhc2tzJyk7XG5cbmZ1bmN0aW9uIGdldFRhc2tEZXRhaWxzQnV0dG9uKHRhc2tJbmRleCkge1xuICAgIGNvbnN0IGRldGFpbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRldGFpbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRldGFpbHMnKTtcbiAgICBkZXRhaWxCdXR0b24udGV4dENvbnRlbnQgPSAnRGV0YWlscyc7XG4gICAgXG4gICAgZGV0YWlsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZWRpdEFuZE9wZW5UYXNrRGV0YWlsRGlhbG9nKHRhc2tJbmRleCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRvZG8uZ2V0UHJvamVjdExpc3QoKSk7XG4gICAgfSlcbiAgICByZXR1cm4gZGV0YWlsQnV0dG9uO1xufVxuXG4vKiBEaXNwbGF5IGxpc3Qgb2YgdGFzayAqL1xuZnVuY3Rpb24gY3JlYXRlQ2hlY2tib3godGFza09iaikge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnY29tcGxldGVkJyk7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgndGFzay1zdGF0dXMtY2hlY2tib3gnKTtcblxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrT2JqLmlzVGFza0NvbXBsZXRlZCgpO1xuXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0YXNrT2JqLnNldFRhc2tTdGF0dXMoY2hlY2tib3guY2hlY2tlZCk7XG4gICAgfSlcblxuICAgIHJldHVybiBjaGVja2JveDtcbn1cblxuZnVuY3Rpb24gZ2V0VGFza3NET00odGFza0xpc3QpIHtcbiAgICBjb25zdCBhbGxUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrT2JqID0gdGFza0xpc3RbaV07XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza1Vub3JkZXJlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUNoZWNrYm94KHRhc2tPYmopO1xuICAgICAgICBjb25zdCB0YXNrRGV0YWlsc0J1dHRvbiA9IGdldFRhc2tEZXRhaWxzQnV0dG9uKGkpO1xuICAgICAgICBcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndGFzay1pbmRleCcsIGAke2l9YCk7XG5cbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1Vub3JkZXJlZExpc3QpOyBcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGV0YWlsc0J1dHRvbik7XG5cbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IHt0aXRsZTogJ3RpdGxlJywgZHVlRGF0ZTogJ2R1ZS1kYXRlJ307XG5cbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrUHJvcGVydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgdGFza1Byb3BlcnR5LnRleHRDb250ZW50ID0gdGFza09ialtgJHtwcm9wfWBdO1xuICAgICAgICAgICAgdGFza1Byb3BlcnR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stJyArIHByb3BlcnRpZXNbYCR7cHJvcH1gXSk7XG4gICAgICAgICAgICB0YXNrVW5vcmRlcmVkTGlzdC5hcHBlbmRDaGlsZCh0YXNrUHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgICAgIGFsbFRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIH1cbiAgICByZXR1cm4gYWxsVGFza3NDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RET00ocHJvamVjdERPTSkge1xuICAgIGlmIChwcm9qZWN0RE9NID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbXB0eVByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5UHJvamVjdENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0RE9NLnRpdGxlO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBnZXRUYXNrc0RPTShwcm9qZWN0RE9NLmdldFRhc2tMaXN0KCkpO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRhc2tzKTsgXG5cbiAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tMaXN0KCkge1xuICAgIGNvbnN0IHByb2plY3RET00gPSBnZXRQcm9qZWN0RE9NKHRvZG8uZ2V0U2VsZWN0ZWRQcm9qZWN0KCkpO1xuICAgIHRhc2tMaXN0RE9NLmFwcGVuZENoaWxkKHByb2plY3RET00pO1xufVxuXG4vKiBEZWxldGUgYW5kIHVwZGF0ZSB0YXNrIGRpc3BsYXkgKi9cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tEaXNwbGF5KCkge1xuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcbiAgICB0YXNrTGlzdERPTS5yZW1vdmVDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza0Rpc3BsYXkoKSB7XG4gICAgZGVsZXRlVGFza0Rpc3BsYXkoKTtcbiAgICBkaXNwbGF5VGFza0xpc3QoKTtcbn1cblxuLyogRGlzcGxheSBsaXN0IG9mIHByb2plY3RzIGluIG1lbnUgKi9cblxuZnVuY3Rpb24gcmVwbGFjZVNwYWNlcyh0ZXh0KSB7XG4gICAgcmV0dXJuIHRleHQudHJpbSgpLnJlcGxhY2UoJyAnLCAnLScpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHNPbk1lbnUoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdExpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBwcm9qZWN0TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0LW1lbnUnKVxuICAgIGNvbnN0IHByb2plY3RMaXN0QXJyYXkgPSB0b2RvLmdldFByb2plY3RMaXN0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2ogPSBwcm9qZWN0TGlzdEFycmF5W2ldO1xuICAgICAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnLCBgJHtyZXBsYWNlU3BhY2VzKHByb2oudGl0bGUpfWApO1xuICAgICAgICBwcm9qZWN0SXRlbS5zZXRBdHRyaWJ1dGUoJ3Byb2plY3RJbmRleCcsIGAke2l9YCk7XG4gICAgICAgIHByb2plY3RJdGVtLnRleHRDb250ZW50ID0gcHJvai50aXRsZTtcbiAgICAgICAgcHJvamVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0b2RvLnNldFNlbGVjdGVkUHJvamVjdChwcm9qKTtcbiAgICAgICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRvZG8uc2VsZWN0ZWRQcm9qZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RMaXN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XG4gICAgfVxuXG4gICAgbWVudS5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdEl0ZW0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0c09uTWVudURpc3BsYXkoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdExpc3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdC1tZW51Jyk7XG4gICAgbWVudS5yZW1vdmVDaGlsZChwcm9qZWN0TGlzdEl0ZW0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0TWVudURpc3BsYXkoKSB7XG4gICAgZGVsZXRlUHJvamVjdHNPbk1lbnVEaXNwbGF5KCk7XG4gICAgZGlzcGxheVByb2plY3RzT25NZW51KCk7XG59XG5cbi8qIFVwZGF0ZSBmb3IgYWxsIGRhdGEgb24gdGhlIHdlYnBhZ2UgKi9cblxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgICB1cGRhdGVUYXNrRGlzcGxheSgpO1xuICAgIHVwZGF0ZVByb2plY3RNZW51RGlzcGxheSgpO1xufVxuXG5leHBvcnQge2Rpc3BsYXlUYXNrTGlzdCwgZGlzcGxheVByb2plY3RzT25NZW51LCB1cGRhdGVEaXNwbGF5fTsiLCJpbXBvcnQge2FkZERpYWxvZ0J1dHRvbkFjdGlvbnN9IGZyb20gJy4vZGlhbG9nLWJveC5qcyc7XG5pbXBvcnQge2Rpc3BsYXlUYXNrTGlzdCwgZGlzcGxheVByb2plY3RzT25NZW51LCB1cGRhdGVEaXNwbGF5fSBmcm9tICcuL2Rpc3BsYXktb24tc2NyZWVuLmpzJztcblxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgZGlzcGxheVRhc2tMaXN0KCk7XG4gICAgZGlzcGxheVByb2plY3RzT25NZW51KCk7XG4gICAgYWRkRGlhbG9nQnV0dG9uQWN0aW9ucygpO1xufVxuXG5leHBvcnQge3N0YXJ0fTsiLCJmdW5jdGlvbiBwcm9qZWN0KHRpdGxlKSB7XG4gICAgY29uc3QgdGFza0xpc3QgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4gdGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICBjb25zdCBkZWxldGVUYXNrID0gKGluZGV4KSA9PiB0YXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGNvbnN0IGdldFRhc2sgPSAoaW5kZXgpID0+IHRhc2tMaXN0W2luZGV4XTtcbiAgICBjb25zdCBnZXRUYXNrTGlzdCA9ICgpID0+IHRhc2tMaXN0O1xuXG4gICAgcmV0dXJuIHt0aXRsZSwgYWRkVGFzaywgZGVsZXRlVGFzaywgZ2V0VGFzaywgZ2V0VGFza0xpc3R9O1xufVxuXG5leHBvcnQge3Byb2plY3R9O1xuIiwiZnVuY3Rpb24gdGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgbGV0IHRhc2tDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAvLyBjb25zdCBlZGl0VGl0bGUgPSAobmV3VGl0bGUpID0+IHRpdGxlID0gbmV3VGl0bGU7XG4gICAgLy8gY29uc3QgZWRpdERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIC8vIGNvbnN0IGVkaXREdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgIC8vIGNvbnN0IGVkaXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4gcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICBjb25zdCB0b2dnbGVDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgICAgIHRhc2tDb21wbGV0ZWRcbiAgICAgICAgICAgID8gdGFza0NvbXBsZXRlZCA9IGZhbHNlIFxuICAgICAgICAgICAgOiB0YXNrQ29tcGxldGVkID0gdHJ1ZVxuICAgIH1cbiAgICBjb25zdCBpc1Rhc2tDb21wbGV0ZWQgPSAoKSA9PiB0YXNrQ29tcGxldGVkO1xuICAgIGNvbnN0IHNldFRhc2tTdGF0dXMgPSAoc3RhdHVzKSA9PiB0YXNrQ29tcGxldGVkID0gc3RhdHVzO1xuICAgIGNvbnN0IGdldFRhc2tTdGF0dXMgPSAoKSA9PiB0YXNrQ29tcGxldGVkID8gJ0NvbXBsZXRlZCcgOiAnSW5jb21wbGV0ZSc7XG4gICAgXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCB0b2dnbGVDb21wbGV0ZWQsIGlzVGFza0NvbXBsZXRlZCwgc2V0VGFza1N0YXR1cywgZ2V0VGFza1N0YXR1c307XG59XG5cbmV4cG9ydCB7dGFza307XG5cbiIsImltcG9ydCB7dGFza30gZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCB7cHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XG5cblxuY29uc3QgcHJvamVjdExpc3QgPSBbXTtcbmxldCBzZWxlY3RlZFByb2plY3QgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgcmV0dXJuIHRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrVG9Qcm9qZWN0KGV4aXN0aW5nUHJvamVjdCwgbmV3VGFzaykge1xuICAgIGV4aXN0aW5nUHJvamVjdC5hZGRUYXNrKG5ld1Rhc2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xuICAgIHJldHVybiBwcm9qZWN0KHRpdGxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0KGluZGV4KSB7XG4gICAgcmV0dXJuIHByb2plY3RMaXN0W2luZGV4XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RMaXN0KCkge1xuICAgIHJldHVybiBwcm9qZWN0TGlzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGVkUHJvamVjdCgpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRQcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0ZWRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0O1xuICAgIC8vIHNlbGVjdGVkUHJvamVjdCA9IGdldFByb2plY3QoaW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza0Zyb21TZWxlY3RlZFByb2plY3QoaW5kZXgpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRQcm9qZWN0LmdldFRhc2soaW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFza0Zyb21TZWxlY3RlZFByb2plY3QoaW5kZXgpIHtcbiAgICBzZWxlY3RlZFByb2plY3QuZGVsZXRlVGFzayhpbmRleCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEdW1teVByb2plY3RzQW5kVGFza3MoKSB7XG4gICAgY29uc3QgcHJvamVjdDEgPSBwcm9qZWN0KCdXb3JrJyk7XG4gICAgY29uc3QgcHJvamVjdDIgPSBwcm9qZWN0KCdDaG9yZXMnKTtcblxuICAgIGNvbnN0IHRhc2sxID0gdGFzaygnUG9saXNoIEV4Y2VsJywgJ0V4Y2VsIGlzIG1lc3N5LCBuZWVkIHRvIGNsZWFuIGl0IHVwJywgJzIwMjMtMDItMDMnLCAnSGlnaCcpO1xuICAgIGNvbnN0IHRhc2syID0gdGFzaygnVHJhaW4gTmV3IEVtcGxveWVlJywgJ05ldyBlbXBsb3llZSBuZWVkcyB0byBiZSB0cmFpbmVkIG9uIHByb2dyYW1taW5nJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAnMjAyMy0wNS0xOScsICdNZWRpdW0nKTtcbiAgICBjb25zdCB0YXNrMyA9IHRhc2soJ0RvIExhdW5kcnknLCAnTGF1bmRyeSBiYXNrZXQgaXMgYWxtb3N0IGZ1bGwnLCAnMjAyMy0xMi0xNCcsICdNZWRpdW0nKTtcbiAgICBjb25zdCB0YXNrNCA9IHRhc2soJ1dhc2ggRGlzaGVzJywgJ0Rpc2hlcyBhcmUgZGlydHknLCAnMjAyMy0xMC0wNycsICdIaWdoJyk7XG4gICAgY29uc3QgdGFzazUgPSB0YXNrKCdDaGFuZ2UgTGlnaHRidWxiJywgJ0xpZ2h0YnVsYiBoYXMgYmVlbiBmbGlja2VyaW5nIGZvciBhIGZldyBkYXlzJywgJzIwMjMtMTEtMTMnLCAnTG93Jyk7XG5cbiAgICBwcm9qZWN0MS5hZGRUYXNrKHRhc2sxKTtcbiAgICBwcm9qZWN0MS5hZGRUYXNrKHRhc2syKTtcbiAgICBwcm9qZWN0Mi5hZGRUYXNrKHRhc2szKTtcbiAgICBwcm9qZWN0Mi5hZGRUYXNrKHRhc2s0KTtcbiAgICBwcm9qZWN0Mi5hZGRUYXNrKHRhc2s1KTtcblxuICAgIGFkZFByb2plY3QocHJvamVjdDEpO1xuICAgIGFkZFByb2plY3QocHJvamVjdDIpO1xufVxuXG5jcmVhdGVEdW1teVByb2plY3RzQW5kVGFza3MoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGVzLmNzcyc7XG5pbXBvcnQge3N0YXJ0fSBmcm9tICcuL2RvbS9kb20tY29udHJvbGxlci5qcyc7XG4vLyBpbXBvcnQge3N0YXJ0fSBmcm9tICcuL2xvZ2ljL3RvZG8tc3RhdGUuanMnO1xuXG5cbnN0YXJ0KCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9