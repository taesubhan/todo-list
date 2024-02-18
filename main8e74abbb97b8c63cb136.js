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
    
    if (flag) {
        dueDateInput.value = _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromSelectedProject(taskIndex).dueDate;
    } else {
        dueDate.textContent = _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromSelectedProject(taskIndex).dueDate;
        console.log(_logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromSelectedProject(taskIndex).dueDate);
    }
}

function makePriorityEditable(flag=true, priority, priorityInput, taskIndex) {
    priority.style.display = flag ? 'none' : '';
    priorityInput.style.display = flag ? '' : 'none';

    if (flag) {
        priorityInput.value = _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromSelectedProject(taskIndex).priority;
    } else {
        priority.textContent = _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromSelectedProject(taskIndex).priority;
    }
}

function hideElements(...elements) {
    elements.forEach((elem) => elem.style.display = 'none');
}

function showElements(...elements) {
    elements.forEach((elem) => elem.style.display = '');
}

function revertEditChanges(title, description, dueDateInput, priorityInput, taskIndex) {
    const currentTask = _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromSelectedProject(taskIndex);

    title.textContent = currentTask.title;
    description.textContent = currentTask.description;
    dueDateInput.value = currentTask.dueDate;
    priorityInput.value = currentTask.priority;
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

    //hidden input that gets displayed when user decides to edit values
    const dueDateInput = document.querySelector('.task-detail-due-date-input');
    const priorityInput = document.querySelector('.task-detail-priority-input');
    

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
        
        hideElements(editButton, cancelButton, deleteButton);
        showElements(confirmEditButton, cancelEditButton); 
    })

    cancelEditButton.addEventListener('click', () => {
        const taskIndex = getTaskIndex(taskForm);

        revertEditChanges(title, description, dueDateInput, priorityInput, taskIndex);
        makeTextElementsEditable(false, title, description);
        makeDateEditable(false, dueDate, dueDateInput, taskIndex);
        makePriorityEditable(false, priority, priorityInput, taskIndex);

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

        makeTextElementsEditable(false, title, description);
        makeDateEditable(false, dueDate, dueDateInput, taskIndex);
        makePriorityEditable(false, priority, priorityInput, taskIndex);

        hideElements(confirmEditButton, cancelEditButton);
        showElements(editButton, cancelButton, deleteButton);

        (0,_display_on_screen_js__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)();

        // console.log(title.textContent);
        // console.log(description.textContent);
        // console.log(dueDateInput.value);
        // console.log(priorityInput.value);


    })
}

function editAndOpenTaskDetailDialog(taskIndex) {
    const dialogBox = document.querySelector('#display-task-detail');
    const taskForm = document.querySelector('.display-task-form');
    const title = document.querySelector('.task-detail-title-value');
    const description = document.querySelector('.task-detail-description-value');
    const dueDate = document.querySelector('.task-detail-due-date-value');
    const priority = document.querySelector('.task-detail-priority-value');
    const editButton = document.querySelector('.edit-task-detail');
    const cancelButton = document.querySelector('.cancel-task-detail');
    const deleteButton = document.querySelector('.delete-task');

    taskForm.setAttribute('task-index', `${taskIndex}`);

    const taskObj = _logic_todo_state_js__WEBPACK_IMPORTED_MODULE_0__.getTaskFromSelectedProject(taskIndex);
    
    title.textContent = taskObj.title;
    description.textContent = taskObj.description;
    dueDate.textContent = taskObj.dueDate;
    priority.textContent = taskObj.priority;

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
function getTasksDOM(taskList) {
    const allTasksContainer = document.createElement('div');

    for (let i = 0; i < taskList.length; i++) {
        const taskContainer = document.createElement('div');
        const taskUnorderedList = document.createElement('ul');
        const taskDetailsButton = getTaskDetailsButton(i);
        const taskObj = taskList[i];

        taskContainer.classList.add('task-container');
        taskContainer.setAttribute('task-index', `${i}`);

        taskContainer.appendChild(taskUnorderedList); 
        taskContainer.appendChild(taskDetailsButton);
        // const properties = ['title', 'description', 'dueDate', 'priority'];
        const properties = {title: 'title', description: 'description', dueDate: 'due-date', priority: 'priority'};

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

// function getProjectsDOM(projectList) {
//     const allProjectsContainer = document.createElement('div');
//     allProjectsContainer.classList.add('project-list');

//     for (let proj of projectList) {
//         const projectContainer = document.createElement('div');
        
//         const projectTitle = document.createElement('p');
//         projectTitle.textContent = proj.title;
//         projectContainer.appendChild(projectTitle);
        
//         const projectTasks = getTasksDOM(proj.getTaskList());
//         projectContainer.appendChild(projectTasks); 
        
//         allProjectsContainer.appendChild(projectContainer);
//     }

//     return allProjectsContainer;
// }

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
        todoCompleted 
            ? todoCompleted = false 
            : todoCompleted = true
    }
    const isTaskCompleted = () => taskCompleted;
    
    return {title, description, dueDate, priority, 
            toggleCompleted, isTaskCompleted};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzVCLHFCQUFxQixxREFBTzs7QUFFNUIsa0JBQWtCLDhDQUFJO0FBQ3RCLGtCQUFrQiw4Q0FBSTtBQUN0QjtBQUNBLGtCQUFrQiw4Q0FBSTtBQUN0QixrQkFBa0IsOENBQUk7QUFDdEIsa0JBQWtCLDhDQUFJOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDckVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ2tCO0FBQzlDLFdBQVcsT0FBTzs7O0FBR2xCLDZEQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGVzLmNzcz9hZjdjIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS9kaWFsb2ctYm94LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20vZGlzcGxheS1vbi1zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS9kb20tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9naWMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvZ2ljL3RvZG8tc3RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsIEFyaWFsLCAnVGltZXMgTmV3IFJvbWFuJztcbn1cblxuaHRtbCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbn1cblxuLnRhc2stbGFiZWwsXG4udGFzay12YWx1ZSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTs7O0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTs7SUFFSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsIEFyaWFsLCAnVGltZXMgTmV3IFJvbWFuJztcXG59XFxuXFxuaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG59XFxuXFxuLnRhc2stbGFiZWwsXFxuLnRhc2stdmFsdWUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAqIGFzIHRvZG8gZnJvbSAnLi4vbG9naWMvdG9kby1zdGF0ZS5qcyc7XG5pbXBvcnQge3VwZGF0ZURpc3BsYXl9IGZyb20gJy4vZGlzcGxheS1vbi1zY3JlZW4uanMnO1xuXG5mdW5jdGlvbiBtYWtlVGV4dEVsZW1lbnRzRWRpdGFibGUoZmxhZz10cnVlLCAuLi5lbGVtZW50cykge1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW0pID0+IGVsZW0uc2V0QXR0cmlidXRlKCdjb250ZW50RWRpdGFibGUnLCBmbGFnID8gJ3RydWUnIDogJ2ZhbHNlJykpO1xufVxuXG5mdW5jdGlvbiBtYWtlRGF0ZUVkaXRhYmxlKGZsYWc9dHJ1ZSwgZHVlRGF0ZSwgZHVlRGF0ZUlucHV0LCB0YXNrSW5kZXgpIHtcbiAgICBkdWVEYXRlLnN0eWxlLmRpc3BsYXkgPSBmbGFnID8gJ25vbmUnIDogJyc7XG4gICAgZHVlRGF0ZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBmbGFnID8gJycgOiAnbm9uZSc7XG4gICAgXG4gICAgaWYgKGZsYWcpIHtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdG9kby5nZXRUYXNrRnJvbVNlbGVjdGVkUHJvamVjdCh0YXNrSW5kZXgpLmR1ZURhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZ2V0VGFza0Zyb21TZWxlY3RlZFByb2plY3QodGFza0luZGV4KS5kdWVEYXRlO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvLmdldFRhc2tGcm9tU2VsZWN0ZWRQcm9qZWN0KHRhc2tJbmRleCkuZHVlRGF0ZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlUHJpb3JpdHlFZGl0YWJsZShmbGFnPXRydWUsIHByaW9yaXR5LCBwcmlvcml0eUlucHV0LCB0YXNrSW5kZXgpIHtcbiAgICBwcmlvcml0eS5zdHlsZS5kaXNwbGF5ID0gZmxhZyA/ICdub25lJyA6ICcnO1xuICAgIHByaW9yaXR5SW5wdXQuc3R5bGUuZGlzcGxheSA9IGZsYWcgPyAnJyA6ICdub25lJztcblxuICAgIGlmIChmbGFnKSB7XG4gICAgICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSB0b2RvLmdldFRhc2tGcm9tU2VsZWN0ZWRQcm9qZWN0KHRhc2tJbmRleCkucHJpb3JpdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvLmdldFRhc2tGcm9tU2VsZWN0ZWRQcm9qZWN0KHRhc2tJbmRleCkucHJpb3JpdHk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoaWRlRWxlbWVudHMoLi4uZWxlbWVudHMpIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xufVxuXG5mdW5jdGlvbiBzaG93RWxlbWVudHMoLi4uZWxlbWVudHMpIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnJyk7XG59XG5cbmZ1bmN0aW9uIHJldmVydEVkaXRDaGFuZ2VzKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZUlucHV0LCBwcmlvcml0eUlucHV0LCB0YXNrSW5kZXgpIHtcbiAgICBjb25zdCBjdXJyZW50VGFzayA9IHRvZG8uZ2V0VGFza0Zyb21TZWxlY3RlZFByb2plY3QodGFza0luZGV4KTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudFRhc2sudGl0bGU7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBjdXJyZW50VGFzay5kZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBjdXJyZW50VGFzay5kdWVEYXRlO1xuICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSBjdXJyZW50VGFzay5wcmlvcml0eTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFza0luZGV4KGZvcm1FbGVtZW50KSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGZvcm1FbGVtZW50LmdldEF0dHJpYnV0ZSgndGFzay1pbmRleCcpKTtcbn1cblxuXG5cbmZ1bmN0aW9uIGFkZFRhc2tEZXRhaWxEaWFsb2dCdXR0b25zKCkge1xuICAgIGNvbnN0IGRpYWxvZ0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNwbGF5LXRhc2stZGV0YWlsJyk7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS10YXNrLWZvcm0nKTtcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtdGFzay1kZXRhaWwnKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLXRhc2snKTtcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1kZXRhaWwnKTtcbiAgICBjb25zdCBjb25maXJtRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtLWVkaXQnKTtcbiAgICBjb25zdCBjYW5jZWxFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1lZGl0Jyk7IFxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWwtdGl0bGUtdmFsdWUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbC1kZXNjcmlwdGlvbi12YWx1ZScpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWwtZHVlLWRhdGUtdmFsdWUnKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbC1wcmlvcml0eS12YWx1ZScpO1xuXG4gICAgLy9oaWRkZW4gaW5wdXQgdGhhdCBnZXRzIGRpc3BsYXllZCB3aGVuIHVzZXIgZGVjaWRlcyB0byBlZGl0IHZhbHVlc1xuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbC1kdWUtZGF0ZS1pbnB1dCcpO1xuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWwtcHJpb3JpdHktaW5wdXQnKTtcbiAgICBcblxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGdldFRhc2tJbmRleCh0YXNrRm9ybSk7XG4gICAgICAgIHRvZG8uZGVsZXRlVGFza0Zyb21TZWxlY3RlZFByb2plY3QodGFza0luZGV4KTtcbiAgICAgICAgZGlhbG9nQm94LmNsb3NlKCk7XG4gICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICB9KSBcblxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlhbG9nQm94LmNsb3NlKCk7XG4gICAgfSlcblxuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSBnZXRUYXNrSW5kZXgodGFza0Zvcm0pO1xuICAgICAgICBcbiAgICAgICAgbWFrZVRleHRFbGVtZW50c0VkaXRhYmxlKHRydWUsIHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIG1ha2VEYXRlRWRpdGFibGUodHJ1ZSwgZHVlRGF0ZSwgZHVlRGF0ZUlucHV0LCB0YXNrSW5kZXgpO1xuICAgICAgICBtYWtlUHJpb3JpdHlFZGl0YWJsZSh0cnVlLCBwcmlvcml0eSwgcHJpb3JpdHlJbnB1dCwgdGFza0luZGV4KTtcbiAgICAgICAgXG4gICAgICAgIGhpZGVFbGVtZW50cyhlZGl0QnV0dG9uLCBjYW5jZWxCdXR0b24sIGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIHNob3dFbGVtZW50cyhjb25maXJtRWRpdEJ1dHRvbiwgY2FuY2VsRWRpdEJ1dHRvbik7IFxuICAgIH0pXG5cbiAgICBjYW5jZWxFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSBnZXRUYXNrSW5kZXgodGFza0Zvcm0pO1xuXG4gICAgICAgIHJldmVydEVkaXRDaGFuZ2VzKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZUlucHV0LCBwcmlvcml0eUlucHV0LCB0YXNrSW5kZXgpO1xuICAgICAgICBtYWtlVGV4dEVsZW1lbnRzRWRpdGFibGUoZmFsc2UsIHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIG1ha2VEYXRlRWRpdGFibGUoZmFsc2UsIGR1ZURhdGUsIGR1ZURhdGVJbnB1dCwgdGFza0luZGV4KTtcbiAgICAgICAgbWFrZVByaW9yaXR5RWRpdGFibGUoZmFsc2UsIHByaW9yaXR5LCBwcmlvcml0eUlucHV0LCB0YXNrSW5kZXgpO1xuXG4gICAgICAgIGhpZGVFbGVtZW50cyhjb25maXJtRWRpdEJ1dHRvbiwgY2FuY2VsRWRpdEJ1dHRvbik7XG4gICAgICAgIHNob3dFbGVtZW50cyhlZGl0QnV0dG9uLCBjYW5jZWxCdXR0b24sIGRlbGV0ZUJ1dHRvbilcbiAgICB9KVxuXG4gICAgY29uZmlybUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGdldFRhc2tJbmRleCh0YXNrRm9ybSk7XG5cbiAgICAgICAgY29uc3QgdGFzayA9IHRvZG8uZ2V0VGFza0Zyb21TZWxlY3RlZFByb2plY3QodGFza0luZGV4KTtcblxuICAgICAgICB0YXNrLnRpdGxlID0gdGl0bGUudGV4dENvbnRlbnQ7XG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi50ZXh0Q29udGVudDtcbiAgICAgICAgdGFzay5kdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xuICAgICAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcblxuICAgICAgICBtYWtlVGV4dEVsZW1lbnRzRWRpdGFibGUoZmFsc2UsIHRpdGxlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIG1ha2VEYXRlRWRpdGFibGUoZmFsc2UsIGR1ZURhdGUsIGR1ZURhdGVJbnB1dCwgdGFza0luZGV4KTtcbiAgICAgICAgbWFrZVByaW9yaXR5RWRpdGFibGUoZmFsc2UsIHByaW9yaXR5LCBwcmlvcml0eUlucHV0LCB0YXNrSW5kZXgpO1xuXG4gICAgICAgIGhpZGVFbGVtZW50cyhjb25maXJtRWRpdEJ1dHRvbiwgY2FuY2VsRWRpdEJ1dHRvbik7XG4gICAgICAgIHNob3dFbGVtZW50cyhlZGl0QnV0dG9uLCBjYW5jZWxCdXR0b24sIGRlbGV0ZUJ1dHRvbik7XG5cbiAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRpdGxlLnRleHRDb250ZW50KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGVzY3JpcHRpb24udGV4dENvbnRlbnQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkdWVEYXRlSW5wdXQudmFsdWUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcmlvcml0eUlucHV0LnZhbHVlKTtcblxuXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRBbmRPcGVuVGFza0RldGFpbERpYWxvZyh0YXNrSW5kZXgpIHtcbiAgICBjb25zdCBkaWFsb2dCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheS10YXNrLWRldGFpbCcpO1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktdGFzay1mb3JtJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWwtdGl0bGUtdmFsdWUnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbC1kZXNjcmlwdGlvbi12YWx1ZScpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWwtZHVlLWRhdGUtdmFsdWUnKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbC1wcmlvcml0eS12YWx1ZScpO1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLWRldGFpbCcpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtdGFzay1kZXRhaWwnKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLXRhc2snKTtcblxuICAgIHRhc2tGb3JtLnNldEF0dHJpYnV0ZSgndGFzay1pbmRleCcsIGAke3Rhc2tJbmRleH1gKTtcblxuICAgIGNvbnN0IHRhc2tPYmogPSB0b2RvLmdldFRhc2tGcm9tU2VsZWN0ZWRQcm9qZWN0KHRhc2tJbmRleCk7XG4gICAgXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrT2JqLnRpdGxlO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFza09iai5kZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFza09iai5kdWVEYXRlO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdGFza09iai5wcmlvcml0eTtcblxuICAgIGRpYWxvZ0JveC5zaG93TW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gYWRkQ3JlYXRpbmdUYXNrRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZ0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1kaWFsb2cnKTtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1mb3JtJyk7XG4gICAgY29uc3Qgc2hvd0RpYWxvZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXNob3ctZGlhbG9nJyk7XG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbmZpcm0nKTtcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jYW5jZWwnKTtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZS1pbnB1dCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWR1ZS1kYXRlLWlucHV0Jyk7XG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXByaW9yaXR5LWlucHV0Jyk7XG5cbiAgICBzaG93RGlhbG9nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlhbG9nQm94LnNob3dNb2RhbCgpKTtcblxuICAgIGRpYWxvZ0JveC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICgpID0+IHRhc2tGb3JtLnJlc2V0KCkpO1xuXG4gICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmICh0YXNrRm9ybS5yZXBvcnRWYWxpZGl0eSgpKSB7ICAgXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkaWFsb2dCb3guY2xvc2UoKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IHRvZG8uY3JlYXRlVGFzayh0aXRsZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBkdWVEYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5SW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgdG9kby5hZGRUYXNrVG9Qcm9qZWN0KHRvZG8uZ2V0U2VsZWN0ZWRQcm9qZWN0KCksIG5ld1Rhc2spO1xuICAgICAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlhbG9nQm94LmNsb3NlKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZENyZWF0aW5nUHJvamVjdERpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2dCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QtZGlhbG9nJyk7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtZm9ybScpO1xuICAgIGNvbnN0IHNob3dEaWFsb2dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1zaG93LWRpYWxvZycpO1xuICAgIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb25maXJtJyk7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2FuY2VsJyk7XG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUtaW5wdXQnKTtcblxuICAgIHNob3dEaWFsb2dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaWFsb2dCb3guc2hvd01vZGFsKCkpO1xuXG4gICAgZGlhbG9nQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4gcHJvamVjdEZvcm0ucmVzZXQoKSk7XG5cbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3RGb3JtLnJlcG9ydFZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRpYWxvZ0JveC5jbG9zZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gdG9kby5jcmVhdGVQcm9qZWN0KHByb2plY3RJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICB0b2RvLmFkZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaWFsb2dCb3guY2xvc2UoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBhZGREaWFsb2dCdXR0b25BY3Rpb25zKCkge1xuICAgIGFkZENyZWF0aW5nVGFza0RpYWxvZygpO1xuICAgIGFkZENyZWF0aW5nUHJvamVjdERpYWxvZygpO1xuICAgIGFkZFRhc2tEZXRhaWxEaWFsb2dCdXR0b25zKCk7XG59XG5cblxuZXhwb3J0IHthZGREaWFsb2dCdXR0b25BY3Rpb25zfTsiLCJpbXBvcnQgKiBhcyB0b2RvIGZyb20gJy4uL2xvZ2ljL3RvZG8tc3RhdGUuanMnO1xuaW1wb3J0IHtlZGl0QW5kT3BlblRhc2tEZXRhaWxEaWFsb2d9IGZyb20gJy4vZGlhbG9nLWJveC5qcyc7XG5cbmNvbnN0IHRhc2tMaXN0RE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGFza3MnKTtcblxuZnVuY3Rpb24gZ2V0VGFza0RldGFpbHNCdXR0b24odGFza0luZGV4KSB7XG4gICAgY29uc3QgZGV0YWlsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGV0YWlsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGV0YWlscycpO1xuICAgIGRldGFpbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZXRhaWxzJztcbiAgICBcbiAgICBkZXRhaWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlZGl0QW5kT3BlblRhc2tEZXRhaWxEaWFsb2codGFza0luZGV4KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codG9kby5nZXRQcm9qZWN0TGlzdCgpKTtcbiAgICB9KVxuICAgIHJldHVybiBkZXRhaWxCdXR0b247XG59XG5cbi8qIERpc3BsYXkgbGlzdCBvZiB0YXNrICovXG5mdW5jdGlvbiBnZXRUYXNrc0RPTSh0YXNrTGlzdCkge1xuICAgIGNvbnN0IGFsbFRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFza1Vub3JkZXJlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBjb25zdCB0YXNrRGV0YWlsc0J1dHRvbiA9IGdldFRhc2tEZXRhaWxzQnV0dG9uKGkpO1xuICAgICAgICBjb25zdCB0YXNrT2JqID0gdGFza0xpc3RbaV07XG5cbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndGFzay1pbmRleCcsIGAke2l9YCk7XG5cbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVW5vcmRlcmVkTGlzdCk7IFxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzQnV0dG9uKTtcbiAgICAgICAgLy8gY29uc3QgcHJvcGVydGllcyA9IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnZHVlRGF0ZScsICdwcmlvcml0eSddO1xuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0ge3RpdGxlOiAndGl0bGUnLCBkZXNjcmlwdGlvbjogJ2Rlc2NyaXB0aW9uJywgZHVlRGF0ZTogJ2R1ZS1kYXRlJywgcHJpb3JpdHk6ICdwcmlvcml0eSd9O1xuXG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gcHJvcGVydGllcykge1xuICAgICAgICAgICAgY29uc3QgdGFza1Byb3BlcnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHRhc2tQcm9wZXJ0eS50ZXh0Q29udGVudCA9IHRhc2tPYmpbYCR7cHJvcH1gXTtcbiAgICAgICAgICAgIHRhc2tQcm9wZXJ0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLScgKyBwcm9wZXJ0aWVzW2Ake3Byb3B9YF0pO1xuICAgICAgICAgICAgdGFza1Vub3JkZXJlZExpc3QuYXBwZW5kQ2hpbGQodGFza1Byb3BlcnR5KTtcbiAgICAgICAgfVxuICAgICAgICBhbGxUYXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGFsbFRhc2tzQ29udGFpbmVyO1xufVxuXG4vLyBmdW5jdGlvbiBnZXRQcm9qZWN0c0RPTShwcm9qZWN0TGlzdCkge1xuLy8gICAgIGNvbnN0IGFsbFByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgYWxsUHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0Jyk7XG5cbi8vICAgICBmb3IgKGxldCBwcm9qIG9mIHByb2plY3RMaXN0KSB7XG4vLyAgICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgXG4vLyAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbi8vICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvai50aXRsZTtcbi8vICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBcbi8vICAgICAgICAgY29uc3QgcHJvamVjdFRhc2tzID0gZ2V0VGFza3NET00ocHJvai5nZXRUYXNrTGlzdCgpKTtcbi8vICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VGFza3MpOyBcbiAgICAgICAgXG4vLyAgICAgICAgIGFsbFByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiBhbGxQcm9qZWN0c0NvbnRhaW5lcjtcbi8vIH1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdERPTShwcm9qZWN0RE9NKSB7XG4gICAgaWYgKHByb2plY3RET00gPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZW1wdHlQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVtcHR5UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgICByZXR1cm4gZW1wdHlQcm9qZWN0Q29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJyk7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RET00udGl0bGU7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IGdldFRhc2tzRE9NKHByb2plY3RET00uZ2V0VGFza0xpc3QoKSk7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VGFza3MpOyBcblxuICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza0xpc3QoKSB7XG4gICAgY29uc3QgcHJvamVjdERPTSA9IGdldFByb2plY3RET00odG9kby5nZXRTZWxlY3RlZFByb2plY3QoKSk7XG4gICAgdGFza0xpc3RET00uYXBwZW5kQ2hpbGQocHJvamVjdERPTSk7XG59XG5cbi8qIERlbGV0ZSBhbmQgdXBkYXRlIHRhc2sgZGlzcGxheSAqL1xuZnVuY3Rpb24gZGVsZXRlVGFza0Rpc3BsYXkoKSB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgIHRhc2tMaXN0RE9NLnJlbW92ZUNoaWxkKHByb2plY3RDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrRGlzcGxheSgpIHtcbiAgICBkZWxldGVUYXNrRGlzcGxheSgpO1xuICAgIGRpc3BsYXlUYXNrTGlzdCgpO1xufVxuXG4vKiBEaXNwbGF5IGxpc3Qgb2YgcHJvamVjdHMgaW4gbWVudSAqL1xuXG5mdW5jdGlvbiByZXBsYWNlU3BhY2VzKHRleHQpIHtcbiAgICByZXR1cm4gdGV4dC50cmltKCkucmVwbGFjZSgnICcsICctJyk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0c09uTWVudSgpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdC1jb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHByb2plY3RMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QtbWVudScpXG4gICAgY29uc3QgcHJvamVjdExpc3RBcnJheSA9IHRvZG8uZ2V0UHJvamVjdExpc3QoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvaiA9IHByb2plY3RMaXN0QXJyYXlbaV07XG4gICAgICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScsIGAke3JlcGxhY2VTcGFjZXMocHJvai50aXRsZSl9YCk7XG4gICAgICAgIHByb2plY3RJdGVtLnNldEF0dHJpYnV0ZSgncHJvamVjdEluZGV4JywgYCR7aX1gKTtcbiAgICAgICAgcHJvamVjdEl0ZW0udGV4dENvbnRlbnQgPSBwcm9qLnRpdGxlO1xuICAgICAgICBwcm9qZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRvZG8uc2V0U2VsZWN0ZWRQcm9qZWN0KHByb2opO1xuICAgICAgICAgICAgdXBkYXRlRGlzcGxheSgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codG9kby5zZWxlY3RlZFByb2plY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvamVjdExpc3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcbiAgICB9XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKHByb2plY3RMaXN0SXRlbSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RzT25NZW51RGlzcGxheSgpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdC1jb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0LW1lbnUnKTtcbiAgICBtZW51LnJlbW92ZUNoaWxkKHByb2plY3RMaXN0SXRlbSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RNZW51RGlzcGxheSgpIHtcbiAgICBkZWxldGVQcm9qZWN0c09uTWVudURpc3BsYXkoKTtcbiAgICBkaXNwbGF5UHJvamVjdHNPbk1lbnUoKTtcbn1cblxuLyogVXBkYXRlIGZvciBhbGwgZGF0YSBvbiB0aGUgd2VicGFnZSAqL1xuXG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgIHVwZGF0ZVRhc2tEaXNwbGF5KCk7XG4gICAgdXBkYXRlUHJvamVjdE1lbnVEaXNwbGF5KCk7XG59XG5cbmV4cG9ydCB7ZGlzcGxheVRhc2tMaXN0LCBkaXNwbGF5UHJvamVjdHNPbk1lbnUsIHVwZGF0ZURpc3BsYXl9OyIsImltcG9ydCB7YWRkRGlhbG9nQnV0dG9uQWN0aW9uc30gZnJvbSAnLi9kaWFsb2ctYm94LmpzJztcbmltcG9ydCB7ZGlzcGxheVRhc2tMaXN0LCBkaXNwbGF5UHJvamVjdHNPbk1lbnUsIHVwZGF0ZURpc3BsYXl9IGZyb20gJy4vZGlzcGxheS1vbi1zY3JlZW4uanMnO1xuXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgICBkaXNwbGF5VGFza0xpc3QoKTtcbiAgICBkaXNwbGF5UHJvamVjdHNPbk1lbnUoKTtcbiAgICBhZGREaWFsb2dCdXR0b25BY3Rpb25zKCk7XG59XG5cbmV4cG9ydCB7c3RhcnR9OyIsImZ1bmN0aW9uIHByb2plY3QodGl0bGUpIHtcbiAgICBjb25zdCB0YXNrTGlzdCA9IFtdO1xuXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB0YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgY29uc3QgZ2V0VGFzayA9IChpbmRleCkgPT4gdGFza0xpc3RbaW5kZXhdO1xuICAgIGNvbnN0IGdldFRhc2tMaXN0ID0gKCkgPT4gdGFza0xpc3Q7XG5cbiAgICByZXR1cm4ge3RpdGxlLCBhZGRUYXNrLCBkZWxldGVUYXNrLCBnZXRUYXNrLCBnZXRUYXNrTGlzdH07XG59XG5cbmV4cG9ydCB7cHJvamVjdH07XG4iLCJmdW5jdGlvbiB0YXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBsZXQgdGFza0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgIC8vIGNvbnN0IGVkaXRUaXRsZSA9IChuZXdUaXRsZSkgPT4gdGl0bGUgPSBuZXdUaXRsZTtcbiAgICAvLyBjb25zdCBlZGl0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgLy8gY29uc3QgZWRpdER1ZURhdGUgPSAobmV3RHVlRGF0ZSkgPT4gZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgLy8gY29uc3QgZWRpdFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIGNvbnN0IHRvZ2dsZUNvbXBsZXRlZCA9ICgpID0+IHtcbiAgICAgICAgdG9kb0NvbXBsZXRlZCBcbiAgICAgICAgICAgID8gdG9kb0NvbXBsZXRlZCA9IGZhbHNlIFxuICAgICAgICAgICAgOiB0b2RvQ29tcGxldGVkID0gdHJ1ZVxuICAgIH1cbiAgICBjb25zdCBpc1Rhc2tDb21wbGV0ZWQgPSAoKSA9PiB0YXNrQ29tcGxldGVkO1xuICAgIFxuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgXG4gICAgICAgICAgICB0b2dnbGVDb21wbGV0ZWQsIGlzVGFza0NvbXBsZXRlZH07XG59XG5cbmV4cG9ydCB7dGFza307XG5cbiIsImltcG9ydCB7dGFza30gZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCB7cHJvamVjdH0gZnJvbSAnLi9wcm9qZWN0cy5qcyc7XG5cblxuY29uc3QgcHJvamVjdExpc3QgPSBbXTtcbmxldCBzZWxlY3RlZFByb2plY3QgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgcmV0dXJuIHRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrVG9Qcm9qZWN0KGV4aXN0aW5nUHJvamVjdCwgbmV3VGFzaykge1xuICAgIGV4aXN0aW5nUHJvamVjdC5hZGRUYXNrKG5ld1Rhc2spO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xuICAgIHJldHVybiBwcm9qZWN0KHRpdGxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xuICAgIHByb2plY3RMaXN0LnB1c2gobmV3UHJvamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0KGluZGV4KSB7XG4gICAgcmV0dXJuIHByb2plY3RMaXN0W2luZGV4XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RMaXN0KCkge1xuICAgIHJldHVybiBwcm9qZWN0TGlzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGVkUHJvamVjdCgpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRQcm9qZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0U2VsZWN0ZWRQcm9qZWN0KHByb2plY3QpIHtcbiAgICBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0O1xuICAgIC8vIHNlbGVjdGVkUHJvamVjdCA9IGdldFByb2plY3QoaW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza0Zyb21TZWxlY3RlZFByb2plY3QoaW5kZXgpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRQcm9qZWN0LmdldFRhc2soaW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFza0Zyb21TZWxlY3RlZFByb2plY3QoaW5kZXgpIHtcbiAgICBzZWxlY3RlZFByb2plY3QuZGVsZXRlVGFzayhpbmRleCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEdW1teVByb2plY3RzQW5kVGFza3MoKSB7XG4gICAgY29uc3QgcHJvamVjdDEgPSBwcm9qZWN0KCdXb3JrJyk7XG4gICAgY29uc3QgcHJvamVjdDIgPSBwcm9qZWN0KCdDaG9yZXMnKTtcblxuICAgIGNvbnN0IHRhc2sxID0gdGFzaygnUG9saXNoIEV4Y2VsJywgJ0V4Y2VsIGlzIG1lc3N5LCBuZWVkIHRvIGNsZWFuIGl0IHVwJywgJzIwMjMtMDItMDMnLCAnSGlnaCcpO1xuICAgIGNvbnN0IHRhc2syID0gdGFzaygnVHJhaW4gTmV3IEVtcGxveWVlJywgJ05ldyBlbXBsb3llZSBuZWVkcyB0byBiZSB0cmFpbmVkIG9uIHByb2dyYW1taW5nJywgXG4gICAgICAgICAgICAgICAgICAgICAgICAnMjAyMy0wNS0xOScsICdNZWRpdW0nKTtcbiAgICBjb25zdCB0YXNrMyA9IHRhc2soJ0RvIExhdW5kcnknLCAnTGF1bmRyeSBiYXNrZXQgaXMgYWxtb3N0IGZ1bGwnLCAnMjAyMy0xMi0xNCcsICdNZWRpdW0nKTtcbiAgICBjb25zdCB0YXNrNCA9IHRhc2soJ1dhc2ggRGlzaGVzJywgJ0Rpc2hlcyBhcmUgZGlydHknLCAnMjAyMy0xMC0wNycsICdIaWdoJyk7XG4gICAgY29uc3QgdGFzazUgPSB0YXNrKCdDaGFuZ2UgTGlnaHRidWxiJywgJ0xpZ2h0YnVsYiBoYXMgYmVlbiBmbGlja2VyaW5nIGZvciBhIGZldyBkYXlzJywgJzIwMjMtMTEtMTMnLCAnTG93Jyk7XG5cbiAgICBwcm9qZWN0MS5hZGRUYXNrKHRhc2sxKTtcbiAgICBwcm9qZWN0MS5hZGRUYXNrKHRhc2syKTtcbiAgICBwcm9qZWN0Mi5hZGRUYXNrKHRhc2szKTtcbiAgICBwcm9qZWN0Mi5hZGRUYXNrKHRhc2s0KTtcbiAgICBwcm9qZWN0Mi5hZGRUYXNrKHRhc2s1KTtcblxuICAgIGFkZFByb2plY3QocHJvamVjdDEpO1xuICAgIGFkZFByb2plY3QocHJvamVjdDIpO1xufVxuXG5jcmVhdGVEdW1teVByb2plY3RzQW5kVGFza3MoKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGVzLmNzcyc7XG5pbXBvcnQge3N0YXJ0fSBmcm9tICcuL2RvbS9kb20tY29udHJvbGxlci5qcyc7XG4vLyBpbXBvcnQge3N0YXJ0fSBmcm9tICcuL2xvZ2ljL3RvZG8tc3RhdGUuanMnO1xuXG5cbnN0YXJ0KCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9