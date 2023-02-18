/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";


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
/* 3 */
/***/ ((module) => {

"use strict";


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
/* 4 */
/***/ ((module) => {

"use strict";


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
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";


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
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(13), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Main Styling */\r\n\r\n@font-face {\r\n    font-family: pixelFont;\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"opentype\");\r\n    font-display:swap;\r\n}\r\n\r\n:root {\r\n    --yellow: #F7FC19;\r\n    --pink: #EE2DFF;\r\n    --blue: #0B0029;\r\n    --bg: var(--blue);\r\n\r\n    --red: #FF0000;\r\n    --purple: #811CB0;\r\n    --teal: #2fa388;\r\n    --blue-purple: #2f4aa3;\r\n    --light-red: #a32f4a;\r\n    --dark-yellow: #a3882f;\r\n    --black: #000000;\r\n    --white: #FFFFFF;\r\n    --grey: #92a5ce;\r\n    --bg-header: rgba(0, 0, 0, 0.9);\r\n    --nav-hover: var(--pink);\r\n\r\n    --step-0: clamp(1.31rem, 1.24rem + 0.37vw, 1.50rem);\r\n    --step-1: clamp(1.58rem, 1.02rem + 2.78vw, 3.00rem);\r\n    --step-2: clamp(1.89rem, 0.29rem + 8.02vw, 6.00rem);\r\n    --step-3: clamp(2.27rem, -1.53rem + 18.99vw, 12.00rem);\r\n    --step-4: clamp(2.72rem, -5.58rem + 41.52vw, 24.00rem);\r\n    --step-5: clamp(3.27rem, -14.19rem + 87.29vw, 48.00rem);\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n    box-sizing: border-box;\r\n}\r\niframe#iframetrailer {\r\n    display:flex;\r\nmargin-bottom:2.5rem;\r\nmargin-top:-2rem;\r\n\r\n\r\n}\r\n#faqcont {\r\n    text-align:center;\r\n}\r\n#mintbtn {\r\n    display:block;\r\n }\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    padding-top: 100px; /* Location of the box */\r\n   \r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n  \r\n\r\n  .close:hover,\r\n  .close:focus {\r\n    color: yellow;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n#yellow {\r\n    color:yellow;\r\n}\r\n  .modal-content {\r\n      background-color:black;\r\n      margin: auto;\r\n      padding: 20px;\r\n      border: 1px solid #888;\r\n      width: 50%;\r\n      margin-top:7%;\r\n      font-family:Arial, Helvetica, sans-serif;\r\n      height:auto;\r\n      animation-name: animatetop;\r\n      animation-duration: 0.4s\r\n    }\r\n\r\n    @keyframes animatetop {\r\n        from {top: -300px; opacity: 0}\r\n        to {top: 0; opacity: 1}\r\n      }\r\n\r\n\r\ninput:focus,\r\nselect:focus,\r\ntextarea:focus,\r\nbutton:focus {\r\n    outline: none;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: var(--yellow);\r\n    text-transform: uppercase;\r\n    border: 2px solid var(--pink);\r\n    border-radius: 12px;\r\n    padding: 6px;\r\n    max-width: 10rem;\r\n    margin: 0 auto;\r\n}\r\n\r\na:hover {\r\n    color: var(--pink);\r\n}\r\n\r\nhtml {\r\n    margin: 0;\r\n    padding: 0;\r\n    color: var(--white);\r\n    font-family: pixelFont;\r\n    scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    border: 0;\r\n\r\n    overflow-x:hidden;\r\n    \r\n\r\n    background-color: var(--bg);\r\n}\r\n\r\nimg#balanceicon, #cypxicon {\r\n    width:2.5rem;\r\n    height:2.5rem;\r\n    display:flex;\r\n  \r\n\r\n\r\n}\r\n#usertokens {\r\n    font-family:Arial, Helvetica, sans-serif;\r\n}\r\nspan#userbalance{\r\nvertical-align:center;\r\ndisplay:flex;\r\nfont-size:75%;\r\n\r\n}\r\nspan#cypxbalance{\r\n\r\n    display:flex;\r\n    font-size:75%;\r\n    \r\n    }\r\n    \r\nheader {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: var(--bg-header);\r\n    width: 100vw;\r\n\r\n    display: grid;\r\n    grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;\r\n}\r\n\r\nspan {\r\n    color: var(--pink);\r\n}\r\n\r\n.nav-links {\r\n    text-transform: uppercase;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n    font-size: 1.25rem;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.nav-toggle {\r\n    display: none;\r\n}\r\nimg#ScrollTop {\r\nwidth:120%;\r\nheight:auto;\r\n}\r\n\r\n.nav-toggle-label {\r\n    display: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.logo {\r\n  \r\n    cursor: initial;\r\n    padding: 1em;\r\n}\r\n\r\n.logo img {\r\n  width:120%;\r\n    cursor: pointer;\r\n}\r\n\r\nnav {\r\n    grid-column: 2 / 5;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    padding-right: 2em;\r\n    gap: 2em;\r\n    z-index:99;\r\n}\r\n\r\nnav ul {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    min-width: 100%;\r\n}\r\n\r\nnav a {\r\n    margin-left: 1em;\r\n    margin-bottom: 0;\r\n    position: relative;\r\n}\r\n\r\nnav a:hover {\r\n    color: var(--nav-hover);\r\n}\r\n\r\nnav a::before {\r\n    content: '';\r\n    display: block;\r\n    height: 5px;\r\n    background: var(--nav-hover);\r\n    position: absolute;\r\n    top: -1em;\r\n    left: 0;\r\n    right: 0;\r\n\r\n    transform: scale(0, 1);\r\n    transition: transform ease-in-out 250ms;\r\n}\r\n\r\nnav a:hover::before {\r\n    transform: scale(1, 1);\r\n}\r\n\r\n#discord-desktop,\r\n#twitter-desktop {\r\n    margin-right: 10px;\r\n    border: none;\r\n}\r\n\r\n#discord-desktop {\r\n    filter: invert(65%) sepia(79%) saturate(2780%) hue-rotate(199deg) brightness(90%) contrast(88%);\r\n}\r\n\r\n#twitter-desktop {\r\n    filter: invert(68%) sepia(75%) saturate(2575%) hue-rotate(179deg) brightness(99%) contrast(88%);\r\n}\r\n\r\n#discord-desktop::before,\r\n#twitter-desktop::before {\r\n    display: none;\r\n}\r\n\r\n.fade-in {\r\n    opacity: 0;\r\n    transition: 250ms ease-in;\r\n}\r\n\r\n.fade-in.appear {\r\n    opacity: 1;\r\n}\r\n\r\nh1 {\r\n    line-height: 1;\r\n    font-size: 2rem;\r\n    padding: 2rem;\r\n    color: var(--yellow);\r\n}\r\n\r\n.mint-title {\r\n    font-size: 1.5rem;\r\n}\r\n#mint-button {\r\n    background-color:transparent;\r\n    border:1px solid var(--pink);\r\n    color:yellow;\r\nfont-family:pixelFont;\r\ndisplay:flex;\r\nmargin-inline:auto;\r\nfont-size:2rem;\r\n}\r\n#mint-button:hover {\r\n    background-color:transparent;\r\n    border:1px solid var(--purple);\r\n    color:yellow;\r\nfont-family:pixelFont;\r\ndisplay:flex;\r\nmargin-inline:auto;\r\nfont-size:2rem;\r\ncursor:pointer;\r\n}\r\n.address-title {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.address-p2k {\r\n    font-size: 1rem;\r\n    max-width: 90%;\r\n    word-wrap: break-word;\r\n    cursor: pointer;\r\n    color:yellow;\r\n}\r\n\r\n.address-p2k:hover {\r\n    color: var(--purple);\r\n}\r\n\r\n.auctions-text {\r\n    font-size: 1rem;\r\n    max-width: 90%;\r\n    word-wrap: break-word;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    color: var(--pink);\r\n    font-size: 3rem;\r\n}\r\n\r\nh3 {\r\n    font-size: 2rem;\r\n}\r\n\r\nh4 {\r\n    font-size: 1.5rem;\r\n}\r\n#modaltitle {\r\n    color:var(--yellow);\r\n    text-align:center;\r\n}\r\n#modaladdy {\r\n    display:block;\r\n text-align:center;\r\n    width:100%;\r\n  \r\n}\r\n.image-modal {\r\n    text-align:center;\r\n    display:flex;\r\n    margin-inline:auto;\r\n    width:25%;\r\n    height:auto;\r\n}\r\n#modal-text{\r\n    display:block;\r\n text-align:center;\r\n    width:100%;\r\n  \r\n}\r\n#copyremind {\r\n    font-size:0.6rem;\r\n    text-align:center;\r\n   margin-top:-20px;\r\n}\r\np {}\r\n\r\n#mint,\r\n#explore,\r\n.unsold {\r\n    font-size: 1.5rem;\r\n}\r\n\r\nsection {\r\n    min-height: 50vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 3rem;\r\n    align-items: center;\r\n\r\n    /* border-glow-here */\r\n    background: hsla(295, 100%, 59%, 1);\r\n\r\n    background: linear-gradient(90deg, hsla(295, 100%, 59%, 1) 0%, hsla(256, 100%, 8%, 1) 1%, hsla(256, 100%, 8%, 1) 99%, hsla(295, 100%, 59%, 1) 100%);\r\n\r\n    background: -moz-linear-gradient(90deg, hsla(295, 100%, 59%, 1) 0%, hsla(256, 100%, 8%, 1) 1%, hsla(256, 100%, 8%, 1) 99%, hsla(295, 100%, 59%, 1) 100%);\r\n\r\n    background: -webkit-linear-gradient(90deg, hsla(295, 100%, 59%, 1) 0%, hsla(256, 100%, 8%, 1) 1%, hsla(256, 100%, 8%, 1) 99%, hsla(295, 100%, 59%, 1) 100%);\r\n\r\n    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=\"#EE2DFF\", endColorstr=\"#0B0029\", GradientType=1);\r\n}\r\n\r\nsection h2 {\r\n    padding-top: 3rem;\r\n}\r\n\r\n.flex-container,\r\n.flex-container-faq,\r\n.flex-container-mint,\r\n.flex-container-roadmap,\r\n.flex-container-team {\r\n    padding-bottom: 3rem;\r\n}\r\n\r\n.s1 {\r\n    min-height: 100vh;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    background-color: var(--black);\r\n\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.logo {\r\n    height:auto;\r\n    width:35%;\r\n}\r\n.flex-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    text-transform: capitalize;\r\n    padding-bottom: 4em;\r\n}\r\n\r\n.flex-container-mint {\r\n    display: flex;\r\n    max-width: 90%;\r\n    margin: 6em auto;\r\n}\r\n\r\n.container-mint {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 40%;\r\n    margin: 0 auto;\r\n}\r\n.close {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n\r\n.container-mint h3 {\r\n    color: var(--yellow);\r\n    margin-bottom: 0;\r\n}\r\n\r\n.container-mint p {\r\n    margin-top: 0.5em;\r\n}\r\n\r\n.container-mint h2 {\r\n    text-align: left;\r\n}\r\n\r\n.container-mint-img {\r\n    gap: 1em;\r\n    justify-content: center;\r\n}\r\n\r\n.container-mint-img a {\r\n    text-align: center;\r\n}\r\n\r\n.container-mint img {\r\n    width: auto;\r\n    height: auto;\r\n    max-width: 50%;\r\n    margin: 0 auto;\r\n    border-radius: 12px;\r\n}\r\n\r\n.unsold {\r\n    text-align: center;\r\n    color: var(--yellow);\r\n}\r\n\r\n.flex-container-roadmap {\r\n    max-width: 90%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    gap: 3em;\r\n}\r\n\r\n.container-r1,\r\n.container-r2 {\r\n    flex-basis: 50%;\r\n}\r\n\r\n.container-r1 h3,\r\n.container-r2 h3 {}\r\n\r\n.roadmap-title {\r\n    color: var(--pink);\r\n    font-size: 3rem;\r\n}\r\n\r\nul {\r\n    padding: 0;\r\n}\r\n\r\n.container-r1 li,\r\n.container-r2 li {\r\n    list-style-type: none;\r\n}\r\n\r\nli h4 {\r\n    text-transform: uppercase;\r\n    color: var(--yellow);\r\n    font-size: 1.5rem;\r\n}\r\n\r\nli p {\r\n    font-size: 1.25rem;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n#cybercity-map {\r\n    max-width: 80vw;\r\n    margin: 0 auto;\r\n    border: 2px solid var(--pink);\r\n    border-radius: 12px;\r\n}\r\n\r\n.flex-container-team>* {\r\n    flex-basis: 20%;\r\n}\r\n\r\n.flex-container-team {\r\n    display: flex;\r\n    max-width: 90%;\r\n    margin: 0 auto;\r\n    flex-direction: row;\r\n    /* flex-wrap: nowrap; */\r\n}\r\n\r\n.team-column {\r\n    max-width: 20%;\r\n    text-align: center;\r\n}\r\n\r\n.team-member-name {\r\n    text-transform: uppercase;\r\n    color: var(--yellow);\r\n    margin-bottom: 2%;\r\n}\r\n\r\n.team-member-description {\r\n    text-transform: uppercase;\r\n    font-size: 1.5rem;\r\n    word-wrap: break-word;\r\n\r\n}\r\n\r\n.team-member-image {\r\n    max-width: 60%;\r\n    border-radius: 12px;\r\n}\r\n\r\n.flex-container-faq {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 90%;\r\n    gap: 0;\r\n}\r\n\r\n.faq-header,\r\n.faq-answer {\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    max-width: 60%;\r\n}\r\n\r\n.faq-header {\r\n    text-transform: uppercase;\r\n    color: var(--yellow);\r\n    margin-bottom: 0.25rem;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.faq-answer {\r\n    margin-bottom: 1em;\r\n    font-size: 1.25rem;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.faq-links {\r\n    border: none;\r\n}\r\n\r\n#ergopixel-img {\r\n    border: 3px solid var(--pink);\r\n}\r\n\r\n.footer-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.footer-container a {\r\n    border: none;\r\n}\r\n\r\n.footer-logo {\r\n    width: 10%;\r\n    margin-top: 1em;\r\n    padding-bottom: 1em;\r\n}\r\n\r\n.footer-logo-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    border-bottom: 2px solid var(--pink);\r\n    max-width: 90%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.svg-container {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.svg-container a {\r\n    width: 50%;\r\n    text-align: center;\r\n}\r\n\r\n.discord,\r\n.twitter {\r\n    max-width: 50%;\r\n}\r\n\r\n.footer-text {\r\n    margin-bottom: 1em;\r\n    text-align: center;\r\n}\r\n\r\n.svg-container {\r\n    justify-content: center;\r\n    margin: auto auto;\r\n    min-width: 50%;\r\n}\r\n\r\n.svg-container a {\r\n    margin: 0;\r\n    gap: 0;\r\n}\r\n\r\n.svg-container a img {\r\n    padding-top: 1em;\r\n    width: 40%;\r\n}\r\n\r\n.footer-logo {\r\n    width: 10%;\r\n}\r\n\r\n.footer-text {\r\n    padding: 1em;\r\n}\r\n\r\n.twitter,\r\n.discord {\r\n    filter: invert(98%) sepia(95%) saturate(6%) hue-rotate(306deg) brightness(103%) contrast(100%);\r\n}\r\n\r\n#wallet {\r\n    cursor: pointer;\r\n}\r\n\r\n#wallet-connector {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    min-width: 50%;\r\n    min-height: 30%;\r\n    padding: 1em;\r\n    background-color: black;\r\n    border-radius: 20px;\r\n    color: var(--yellow);\r\n    text-shadow: 1px 1px #258ae8;\r\n    display: none;\r\n    z-index: 200;\r\n}\r\n\r\n#wallet-connector p {\r\n    padding-bottom: 2%;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#wallet-connector input {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    font-size: 1.25rem;\r\n}\r\n\r\n#wallet-connector.open {\r\n    z-index: 100;\r\n    background-color: var(--blue);\r\n    border: 2px var(--pink) solid;\r\n    display: block;\r\n}\r\n\r\n#wallet-address-text {\r\n    font-weight: 100;\r\n}\r\n\r\n#wallet-output {\r\n    padding-top: 2%;\r\n    color: red;\r\n}\r\n\r\n#wallet-buttons {\r\n    display: flex;\r\n    justify-content: end;\r\n    gap: 1em;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.wallet-button {\r\n    all: unset;\r\n    min-width: 10%;\r\n    background-color: var(--pink);\r\n    border: 1px var(--pink) solid;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    transition: ease-in 0.2s;\r\n    padding: 1%;\r\n    color: var(--yellow);\r\n    text-shadow: 1px 1px #258ae8;\r\n}\r\n\r\n.wallet-button:hover {\r\n    border: 2px #258ae8 solid;\r\n}\r\n\r\n#finish {\r\n    background-color: #258ae8;\r\n    border: 2px #258ae8 solid;\r\n}\r\n\r\n#finish:hover {\r\n    border: 2px var(--pink) solid;\r\n}\r\n\r\ninput[type=text],\r\ntextarea {\r\n    border: 2px #f711f7 solid;\r\n    background-color: var(--bblue);\r\n    border-radius: 20px;\r\n    color: var(--yellow);\r\n    font-family: pixelFont;\r\n}\r\n\r\ninput[type=text]:focus,\r\ntextarea:focus,\r\ninput[type=text]:hover,\r\ntextarea:hover {\r\n    border: 2px var(--pink) solid;\r\n}\r\n\r\n#dino-mobile,\r\n#twitter-mobile,\r\n#discord-mobile {\r\n    display: none;\r\n}\r\n\r\nli #dino-image {\r\n    flex-grow: 0;\r\n    flex-basis: 10%;\r\n}\r\n\r\n#dino-image {\r\n    width: auto;\r\n    height: auto;\r\n    max-width: 25px;\r\n    max-height: 20px;\r\n}\r\n\r\nli #header-image {\r\n    flex-grow: 1;\r\n    flex-basis: 10%;\r\n}\r\n\r\n#header-image {\r\n    width: auto;\r\n    height: auto;\r\n    max-width: 30px;\r\n    max-height: 25px;\r\n    border-color: red;;\r\n}\r\n\r\n.benefits-list {\r\n    padding-left: 4%;\r\n}\r\n\r\n.benefit-title {\r\n    font-size: 1.9rem;\r\n    color: var(--pink);\r\n}\r\n\r\n.benefit {\r\n    font-size: 1.25rem;\r\n    color:var(--yellow)\r\n}\r\n\r\n.container-r1,\r\n.container-r2 {\r\n    margin: 0 auto;\r\n}\r\n\r\n#roadmap-switch {\r\n    margin-bottom: 4em;\r\n    cursor: pointer;\r\n    font-size: 1.5rem;\r\n    max-width: none;\r\n}\r\n\r\n@media all and (max-width : 60em) {\r\n    header {\r\n        display: block;\r\n        text-align: center;\r\n        z-index: 999;\r\n        min-width: 10vh;\r\n    }\r\n    body{\r\n        width:100%;\r\n        overflow-x:hidden;\r\n        \r\n    }\r\niframe#iframetrailer {\r\n    width:75%;\r\n    height:auto;\r\n}\r\n    .logo {\r\n        padding-top: 0.5em;\r\n        padding-bottom: 0.5em;\r\n        font-size: 2rem;\r\n       margin-inline:auto;\r\n    }\r\n\r\n    #cybercity-map {\r\n        max-width: 90%;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    /* Look for any nav as a preceding sibling */\r\n    .nav-toggle:checked~nav {\r\n        transform: scale(1, 1);\r\n    }\r\n\r\n    .nav-toggle:checked~nav .nav-links li a {\r\n        opacity: 1;\r\n        transition: opacity 250ms ease-in-out 350ms;\r\n    }\r\n\r\n    .nav-toggle-label {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        height: 100%;\r\n        display: flex;\r\n        align-items: center;\r\n        margin-left: 1em;\r\n    }\r\n\r\n    /* Create hamburger */\r\n    .nav-toggle-label>span,\r\n    .nav-toggle-label>span::before,\r\n    .nav-toggle-label>span::after {\r\n        display: block;\r\n        background: var(--pink);\r\n        height: 2px;\r\n        width: 2em;\r\n        border-radius: 2px;\r\n        position: relative;\r\n    }\r\n\r\n    /* Make sure the pseudo-elements have content so they display */\r\n    .nav-toggle-label>span::before,\r\n    .nav-toggle-label>span::after {\r\n        content: '';\r\n        position: absolute;\r\n    }\r\n\r\n    /* Move the before pseudo-element down */\r\n    .nav-toggle-label>span::before {\r\n        bottom: 7px;\r\n    }\r\n\r\n    /* Move the after pseudo-element up */\r\n    .nav-toggle-label>span::after {\r\n        top: 7px;\r\n    }\r\n\r\n    nav {\r\n        position: absolute;\r\n        text-align: left;\r\n        top: 100%;\r\n        left: 0;\r\n        background-color: var(--bg-header);\r\n\r\n        transform: scale(1, 0);\r\n        transform-origin: top;\r\n        transition: transform 400ms ease-in-out;\r\n    }\r\n\r\n    nav ul {\r\n        display: block;\r\n    }\r\n\r\n    nav a {\r\n        margin-left: 0;\r\n        border: none;\r\n    }\r\n\r\n    nav a::before {\r\n        display: none;\r\n    }\r\n\r\n    .nav-links {\r\n        padding-top: 1em;\r\n        width: 100vw;\r\n        border-bottom: 2px solid var(--pink);\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n\r\n    .nav-links>li {\r\n        margin-bottom: 1em;\r\n        margin-left: 1em;\r\n    }\r\n\r\n    .nav-links>li>a {\r\n        opacity: 0;\r\n        transition: opacity 100ms ease-in-out;\r\n    }\r\n\r\n    .nav-links>li>a:hover {\r\n        color: var(--nav-hover);\r\n    }\r\n\r\n\r\n    .flex-container,\r\n    .flex-container-faq,\r\n    .flex-container-mint,\r\n    .flex-container-roadmap,\r\n    .flex-container-team {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .flex-container-mint>* {\r\n        margin: 0 auto;\r\n        min-width: 90%;\r\n    }\r\n\r\n    .container-mint h2 {\r\n        text-align: center;\r\n    }\r\n\r\n    .flex-container-mint {\r\n        margin: 3rem 0;\r\n        padding: 0;\r\n        width: 90%;\r\n    }\r\n\r\n    .flex-container-mint h2 {\r\n        min-width: 90%;\r\n    }\r\n\r\n    .container-mint img {\r\n        max-width: 75%;\r\n    }\r\n\r\n\r\n    .container-mint img {\r\n        width: auto;\r\n        height: auto;\r\n        max-width: 80%;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .faq-header,\r\n    .faq-answer {\r\n        text-align: center;\r\n        margin: 1em auto;\r\n        max-width: 90%;\r\n    }\r\n\r\n    .flex-container-team {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .flex-container-team>* {\r\n        flex-basis: 100%;\r\n    }\r\n\r\n    .flex-container-team {\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n\r\n    .team-member-image {\r\n        margin-top: 3rem;\r\n        max-width: 60%;\r\n    }\r\n\r\n    .team-column {\r\n        min-width: 90%;\r\n    }\r\n\r\n    .footer-logo {\r\n        width: 40%;\r\n    }\r\n\r\n    #wallet-connector {\r\n        width: 90% !important;\r\n    }\r\n\r\n    #wallet-connector p {\r\n        padding-bottom: 2%;\r\n        font-size: 1.25rem;\r\n    }\r\n\r\n    #wallet-connector input {\r\n        width: 100%;\r\n        margin: 0 auto;\r\n        font-size: 1.125rem;\r\n    }\r\n\r\n    .wallet-button {\r\n        font-size: 1.125rem;\r\n    }\r\n\r\n    #dino-desktop,\r\n    #discord-desktop,\r\n    #twitter-desktop {\r\n        display: none;\r\n    }\r\n\r\n    #dino-mobile,\r\n    #twitter-mobile,\r\n    #discord-mobile {\r\n        display: inline-block;\r\n        padding-bottom: 0;\r\n        padding-top: 0;\r\n    }\r\n\r\n    .desktop-li {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media all and (max-width : 40em) {\r\n    #nft-container {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .auction-card-modal h2 {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .nav-links {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .roadmap-title {\r\n        font-size: 2rem;\r\n    }\r\n\r\n    h1 {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    h3 {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .flex-container-faq {\r\n        max-width: 90%;\r\n    }\r\n\r\n    li h4 {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .benefits-list {\r\n        padding-left: 4%;\r\n    }\r\n\r\n    .benefit-title {\r\n        font-size: 1.3rem;\r\n    }\r\n\r\n    .benefit {\r\n        font-size: 1.125rem;\r\n    }\r\n\r\n    li p {\r\n        font-size: 1.25rem;\r\n    }\r\n\r\n    .team-member-name {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .team-member-description {\r\n        font-size: 1.25rem;\r\n    }\r\n\r\n    .faq-header {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .faq-answer {\r\n        word-wrap: break-word;\r\n        font-size: 1.25rem;\r\n    }\r\n\r\n    .footer-logo {\r\n        width: 40%;\r\n    }\r\n\r\n    .footer-text {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    #wallet-connector {\r\n        width: 90% !important;\r\n        top: 60%;\r\n    }\r\n\r\n    #wallet-connector p {\r\n        padding-bottom: 2%;\r\n        font-size: 1rem;\r\n    }\r\n\r\n    #wallet-connector input {\r\n        width: 100%;\r\n        margin: 0 auto;\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .wallet-button {\r\n        font-size: 1rem;\r\n    }\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";


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
/* 11 */
/***/ ((module) => {

"use strict";


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
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "239326f416b24386b9c8.otf";

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "044791ff4bded7837390.webp";

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_enter_button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_enter_button_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_enter_button_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_enter_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_enter_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 15 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(16), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(17), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\ndiv.enter-estate-container { \nmargin-top:22%;\n  display:flex;\n margin-left:65%;\n position:absolute;\nwidth:12.5rem;\nheight:10rem;\n\n }\n \n/* animations for background image */\n@-webkit-keyframes pulseBox {\n  0% {\n    -webkit-box-shadow: 0px 0px 10px 0px rgba(225, 0, 255, 0.3);\n  }\n  100% {\n    -webkit-box-shadow: 0px 0px 18px 0px rgba(225, 0, 255, 1);\n  }\n}\n@-moz-keyframes pulseBox {\n  0% {\n    -moz-box-shadow: 0px 0px 10px 0px rgba(225, 0, 255, 0.3);\n  }\n  100% {\n    -moz-box-shadow: 0px 0px 18px 0px rgba(225, 0, 255, 1);\n  }\n}\n@-o-keyframes pulseBox {\n  0% {\n    -o-box-shadow: 0px 0px 10px 0px rgba(225, 0, 255, 0.3);\n  }\n  100% {\n    -o-box-shadow: 0px 0px 18px 0px rgba(225, 0, 255, 1);\n  }\n}\n@keyframes pulseBox {\n  0% {\n    box-shadow: 0px 0px 10px 0px rgba(225, 0, 255, 0.3);\n  }\n  100% {\n    box-shadow: 0px 0px 18px 0px rgba(225, 0, 255, 1);\n  }\n}\n/* class pulsebox for glowing border */\n.pulseBox {\n  -webkit-animation-name: pulseBox;\n  -moz-animation-name: pulseBox;\n  -o-animation-name: pulseBox;\n  animation-name: pulseBox;\n  -webkit-animation-duration: 1s;\n  -moz-animation-duration: 1s;\n  -o-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-iteration-count: infinite;\n  -o-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n  -moz-animation-direction: alternate;\n  -o-animation-direction: alternate;\n  animation-direction: alternate;\n  -webkit-animation-timing-function: ease-in-out;\n  -moz-animation-timing-function: ease-in-out;\n  -o-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  border: 0px;\n}\n.cyber-button {\n  font-size: 28px;\n  font-weight: bold;\n  text-transform: uppercase;\nwidth:100%;\n  border: 1px solid var(--pink);\n\n  background-color: rgba(158, 7, 223, 0.919); /* sets the opacity to 0.7 */\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size:cover;\n  background-repeat:no-repeat;\n  background-position:center;\n  background-size:225%;\n  color: transparent; /* makes the text transparent */\n\n\n\n  box-shadow: 0px 0px 20px 5px #ff0dcb;\n  cursor:pointer;\n}\n.cyber-button-estates {\n  font-size: 28px;\n  font-weight: bold;\n  text-transform: uppercase;\nwidth:100%;\n  border: 1px solid var(--pink);\n\n  background-color: rgba(158, 7, 223, 0.919); /* sets the opacity to 0.7 */\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size:cover;\nbackground-position:center;\n  background-repeat:no-repeat;\n\n\n  color: transparent; /* makes the text transparent */\n\n\n\n  box-shadow: 0px 0px 20px 5px #ff0dcb;\n  cursor:pointer;\n}\n.cyber-button:hover, .cyber-button-estates:hover {\n  box-shadow: 0px 0px 30px 10px var(--pink);\n  animation: cyber-glow 2s infinite;\n  color: rgba(0, 0, 0, 0.2);\n  -webkit-text-stroke: 1px var(--pink);\n  border: 1px solid var(--pink);\n  border-radius: 10%;\n  background-repeat: no-repeat;\n}\n\n@keyframes cyber-glow {\n  0% {\n    box-shadow: 0px 0px 10px 5px #ee0cb5;\n  }\n  50% {\n    box-shadow: 0px 0px 30px 10px #ee0cb5;\n  }\n  100% {\n    box-shadow: 0px 0px 10px 5px #ee0cb5;\n  }\n}\n\n.enter-cyberverse {\n\n\n    margin-top:22%;\n      display:flex;\n     margin-right:65%;\n     position:absolute;\n    width:12.5REM;\n    HEIGHT:10REM;\n    \n}\n\na#playgameoutline:hover {\n  animation: cyber-glow 2s infinite;\n}\n\n@media all and (max-width:40em){\n.enter-cyberverse, div.enter-estate-container{\n   width:25%;\n   height:auto;\n\n  }\n  .cyber-button, .cyber-button-estates {\n    font-size:x-small;\n    box-shadow: 0px 0px 30px 10px var(--pink);\n    animation: cyber-glow 2s infinite;\n    color: rgba(0, 0, 0, 0.2);\n    -webkit-text-stroke: 1px var(--pink);\n    border: 1px solid var(--pink);\n    border-radius: 10%;\n    background-repeat: no-repeat;\n  }\n\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "60a44bb875242ec76259.png";

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "46e710187f2cc824ebe8.png";

/***/ }),
/* 18 */
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var navLinks = document.querySelector('.nav-links');
var links = document.querySelectorAll('.nav-links li');
var menu = document.getElementsByClassName("navLinks");
var scrollUp = document.getElementById("scrollTop");
var mintButton = document.getElementById("mint-button");
var auctionLink = document.getElementById("auction-link");
var auctionUrl = "https://www.skyharbor.io/collection/cybercitizens";
var openMint = false;
var images = ["./dist/assets/cybercitizens/0.png", "./dist/assets/cybercitizens/3.png", "./dist/assets/cybercitizens/590.png", ".//dist/assets/cybercitizens/1873.png", "./dist/assets/cybercitizens/1852.png", "./dist/assets/cybercitizens/3.png", "./dist/assets/cybercitizens/7.png", "./dist/assets/cybercitizens/590.png"];
var x = 0;
if (scrollUp) {
  scrollUp.addEventListener('click', function () {
    window.scrollTo(0, 0);
  });
}
var faders = document.querySelectorAll(".fade-in");
var appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -200px 0px"
};
var appearOnScroll = new IntersectionObserver(function (entries, displayOnScroll) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach(function (fader) {
  appearOnScroll.observe(fader);
});
document.querySelector(".address").onclick = function () {
  copyToClipboard("9hfNCyqJsCSku8HXrV17Y6AaQciCAwkwx4M49imdWjRaTX22Mvz");
  alert("Address copied to clipboard!");
};
var getUnsold = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("https://ergnomes-server.net/api/checkUnsold").then(function (res) {
            return res.json();
          }).then(function (res) {
            setupMint(res["count"]);
          })["catch"](function (error) {
            console.log(error);
          });
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getUnsold() {
    return _ref.apply(this, arguments);
  };
}();
var setupMint = function setupMint(number) {
  var numLeftWave;
  if (openMint) {
    numLeftWave = number - 500;
    document.getElementById("unsold").innerHTML = "<span>" + numLeftWave + "</span> left in the current wave!";
  } else {
    numLeftWave = number % 500;
    if (numLeftWave != 0 || openMint) {
      document.getElementById("unsold").innerHTML = "<span>" + numLeftWave + "</span> left in the current wave!";
    } else {
      document.getElementById("unsold").innerHTML = "Wave sold out!";
      mintButton.innerText = "Mint Closed";
      mintButton.href = "javascript:void(0);";
    }
  }
};
var exitMenuOnLinkClick = function exitMenuOnLinkClick() {
  navLinks.classList.toggle("open");
  links.forEach(function (link) {
    link.classList.toggle("fade");
  });
};
var displayNextImage = function displayNextImage() {
  x = x === images.length - 1 ? 0 : x + 1;
  document.getElementById("ergopixel-img").src = images[x];
};
var copyToClipboard = function copyToClipboard(text) {
  navigator.clipboard.writeText("9eXCfrmgJSuYKS6hf32snZHZYCFvVeAsBU6LigaKkd5hzjUB3Rf");
};
var setAuctionLink = function setAuctionLink(link) {
  auctionLink.href = link;
};
getUnsold();
setAuctionLink(auctionUrl);
setInterval(displayNextImage, 500);
var modal = document.getElementById("mintModal");

// Get the button that opens the modal
var btn = document.getElementById("mint-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fleet_sdk_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _fleet_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var unsignedTransaction;
function mint() {
  return _mint.apply(this, arguments);
}
function _mint() {
  _mint = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var cypxTokenId, creationHeight, amountToSend, inputs, userAddress, cybercitizensWallet;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          cypxTokenId = "01dce8a5632d19799950ff90bca3b5d0ca3ebfa8aaafd06f0cc6dd1e97150e7f";
          _context2.next = 4;
          return ergo.get_current_height();
        case 4:
          creationHeight = _context2.sent;
          amountToSend = 2000000000;
          console.log("The current height of the blockchain is ".concat(creationHeight, "."));
          _context2.next = 9;
          return ergo.get_utxos();
        case 9:
          inputs = _context2.sent;
          _context2.next = 12;
          return ergo.get_change_address();
        case 12:
          userAddress = _context2.sent;
          cybercitizensWallet = "9g2UMfBWeSSo6cDU6cynCGZSuNf9AFxFWVByWujrzjQC3piEakE";
          unsignedTransaction = new _fleet_sdk_core__WEBPACK_IMPORTED_MODULE_0__.TransactionBuilder(creationHeight).from(inputs).to(new _fleet_sdk_core__WEBPACK_IMPORTED_MODULE_1__.OutputBuilder(amountToSend, cybercitizensWallet).addTokens({
            tokenId: cypxTokenId,
            amount: "100000"
          })).sendChangeTo(userAddress).payMinFee().build("EIP-12");
          console.log("Inputs:", inputs);
          console.log("Outputs:", unsignedTransaction.outputs);
          return _context2.abrupt("return", unsignedTransaction);
        case 20:
          _context2.prev = 20;
          _context2.t0 = _context2["catch"](0);
          console.error("Error minting coins: ".concat(_context2.t0));
        case 23:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 20]]);
  }));
  return _mint.apply(this, arguments);
}
var mintbtn = document.getElementById("mintbtn");
mintbtn.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var unsignedTransaction, signedTransaction, txId;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return mint();
      case 2:
        unsignedTransaction = _context.sent;
        if (!unsignedTransaction) {
          _context.next = 13;
          break;
        }
        console.log("Unsigned Transaction:", unsignedTransaction);
        _context.next = 7;
        return ergo.sign_tx(unsignedTransaction);
      case 7:
        signedTransaction = _context.sent;
        console.log("Signed Transaction:", signedTransaction);
        _context.next = 11;
        return ergo.submit_tx(signedTransaction);
      case 11:
        txId = _context.sent;
        console.log(txId);
      case 13:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FEE_CONTRACT": () => (/* binding */ FEE_CONTRACT),
/* harmony export */   "RECOMMENDED_MIN_FEE_VALUE": () => (/* binding */ RECOMMENDED_MIN_FEE_VALUE),
/* harmony export */   "TransactionBuilder": () => (/* binding */ TransactionBuilder)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(33);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(72);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(50);
/* harmony import */ var _errors_nonStandardizedMinting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41);
/* harmony import */ var _outputBuilder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(53);
/* harmony import */ var _pluginContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49);
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(67);
/* harmony import */ var _transactionBuilderSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);









const RECOMMENDED_MIN_FEE_VALUE = BigInt(1100000);
const FEE_CONTRACT = "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304";
class TransactionBuilder {
    _inputs;
    _dataInputs;
    _outputs;
    _settings;
    _creationHeight;
    _selectorCallbacks;
    _changeAddress;
    _feeAmount;
    _burning;
    _plugins;
    constructor(creationHeight) {
        this._inputs = new _models__WEBPACK_IMPORTED_MODULE_0__.InputsCollection();
        this._dataInputs = new _models__WEBPACK_IMPORTED_MODULE_0__.InputsCollection();
        this._outputs = new _models__WEBPACK_IMPORTED_MODULE_1__.OutputsCollection();
        this._settings = new _transactionBuilderSettings__WEBPACK_IMPORTED_MODULE_2__.TransactionBuilderSettings();
        this._creationHeight = creationHeight;
    }
    get inputs() {
        return this._inputs;
    }
    get dataInputs() {
        return this._dataInputs;
    }
    get outputs() {
        return this._outputs;
    }
    get changeAddress() {
        return this._changeAddress;
    }
    get fee() {
        return this._feeAmount;
    }
    get burning() {
        return this._burning;
    }
    get settings() {
        return this._settings;
    }
    get creationHeight() {
        return this._creationHeight;
    }
    /**
     * Syntax sugar to be used in composition with another methods
     *
     * @example
     * ```
     * new TransactionBuilder(height)
     *   .from(inputs)
     *   .and.from(otherInputs);
     * ```
     */
    get and() {
        return this;
    }
    from(inputs) {
        this._inputs.add(inputs);
        return this;
    }
    to(outputs, options) {
        this._outputs.add(outputs, options);
        return this;
    }
    withDataFrom(dataInputs, options) {
        this._dataInputs.add(dataInputs, options);
        return this;
    }
    sendChangeTo(address) {
        if (typeof address === "string") {
            this._changeAddress = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.isHex)(address)
                ? _models__WEBPACK_IMPORTED_MODULE_4__.ErgoAddress.fromErgoTree(address, _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_5__.Network.Mainnet)
                : _models__WEBPACK_IMPORTED_MODULE_4__.ErgoAddress.fromBase58(address);
        }
        else {
            this._changeAddress = address;
        }
        return this;
    }
    payFee(amount) {
        this._feeAmount = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_6__.ensureBigInt)(amount);
        return this;
    }
    payMinFee() {
        this.payFee(RECOMMENDED_MIN_FEE_VALUE);
        return this;
    }
    burnTokens(tokens) {
        if (!this._burning) {
            this._burning = new _models__WEBPACK_IMPORTED_MODULE_7__.TokensCollection();
        }
        this._burning.add(tokens);
        return this;
    }
    configure(callback) {
        callback(this._settings);
        return this;
    }
    configureSelector(selectorCallback) {
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__.isUndefined)(this._selectorCallbacks)) {
            this._selectorCallbacks = [];
        }
        this._selectorCallbacks.push(selectorCallback);
        return this;
    }
    extend(plugins) {
        if (!this._plugins) {
            this._plugins = [];
        }
        this._plugins.push({ execute: plugins, pending: true });
        return this;
    }
    eject(ejector) {
        ejector({
            inputs: this.inputs,
            dataInputs: this.dataInputs,
            outputs: this.outputs,
            burning: this.burning,
            settings: this.settings,
            selection: (selectorCallback) => {
                this.configureSelector(selectorCallback);
            }
        });
        return this;
    }
    build(buildOutputType) {
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.some)(this._plugins)) {
            const context = (0,_pluginContext__WEBPACK_IMPORTED_MODULE_10__.createPluginContext)(this);
            for (const plugin of this._plugins) {
                if (plugin.pending) {
                    plugin.execute(context);
                    plugin.pending = false;
                }
            }
        }
        if (this._isMinting()) {
            if (this._isMoreThanOneTokenBeingMinted()) {
                throw new _errors__WEBPACK_IMPORTED_MODULE_11__.MalformedTransaction("only one token can be minted per transaction.");
            }
            if (this._isTheSameTokenBeingMintedOutsideTheMintingBox()) {
                throw new _errors_nonStandardizedMinting__WEBPACK_IMPORTED_MODULE_12__.NonStandardizedMinting("EIP-4 tokens cannot be minted from outside the minting box.");
            }
        }
        const outputs = this.outputs.clone();
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__.isDefined)(this._feeAmount)) {
            outputs.add(new _outputBuilder__WEBPACK_IMPORTED_MODULE_13__.OutputBuilder(this._feeAmount, FEE_CONTRACT));
        }
        const selector = new _selector__WEBPACK_IMPORTED_MODULE_14__.BoxSelector(this.inputs.toArray());
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.some)(this._selectorCallbacks)) {
            for (const selectorCallBack of this._selectorCallbacks) {
                selectorCallBack(selector);
            }
        }
        const target = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.some)(this._burning)
            ? outputs.sum({ tokens: this._burning.toArray() })
            : outputs.sum();
        let inputs = selector.select(target);
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__.isDefined)(this._changeAddress)) {
            let change = this._calcDiff((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_15__.utxoSum)(inputs), target);
            if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.some)(change.tokens)) {
                let requiredNanoErgs = this._calcRequiredNanoErgsForChange(change.tokens.length);
                while (requiredNanoErgs > change.nanoErgs) {
                    inputs = selector.select({
                        nanoErgs: target.nanoErgs + requiredNanoErgs,
                        tokens: target.tokens
                    });
                    change = this._calcDiff((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_15__.utxoSum)(inputs), target);
                    requiredNanoErgs = this._calcRequiredNanoErgsForChange(change.tokens.length);
                }
                const chunkedTokens = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.chunk)(change.tokens, this._settings.maxTokensPerChangeBox);
                for (const tokens of chunkedTokens) {
                    const nanoErgs = change.nanoErgs > requiredNanoErgs
                        ? change.nanoErgs - requiredNanoErgs + _outputBuilder__WEBPACK_IMPORTED_MODULE_13__.SAFE_MIN_BOX_VALUE
                        : _outputBuilder__WEBPACK_IMPORTED_MODULE_13__.SAFE_MIN_BOX_VALUE;
                    change.nanoErgs -= nanoErgs;
                    outputs.add(new _outputBuilder__WEBPACK_IMPORTED_MODULE_13__.OutputBuilder(nanoErgs, this._changeAddress).addTokens(tokens));
                }
            }
            if (change.nanoErgs > _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_16__._0n) {
                outputs.add(new _outputBuilder__WEBPACK_IMPORTED_MODULE_13__.OutputBuilder(change.nanoErgs, this._changeAddress));
            }
        }
        for (const input of inputs) {
            if (!input.isValid()) {
                throw new _errors__WEBPACK_IMPORTED_MODULE_17__.InvalidInput(input.boxId);
            }
        }
        const unsignedTransaction = {
            inputs: inputs.map((input) => input.toUnsignedInputObject(buildOutputType || "default")),
            dataInputs: this.dataInputs
                .toArray()
                .map((input) => input.toObject(buildOutputType || "default")),
            outputs: outputs
                .toArray()
                .map((output) => output.setCreationHeight(this._creationHeight, { replace: false }).build(inputs))
        };
        let burning = this._calcBurningBalance(unsignedTransaction, inputs);
        if (burning.nanoErgs > _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_16__._0n) {
            throw new _errors__WEBPACK_IMPORTED_MODULE_11__.MalformedTransaction("it's not possible to burn ERG.");
        }
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.some)(burning.tokens) && (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.some)(this._burning)) {
            burning = this._calcDiff(burning, { nanoErgs: _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_16__._0n, tokens: this._burning.toArray() });
        }
        if (!this._settings.canBurnTokens && (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.some)(burning.tokens)) {
            throw new _errors__WEBPACK_IMPORTED_MODULE_18__.NotAllowedTokenBurning();
        }
        return unsignedTransaction;
    }
    _isMinting() {
        for (const output of this._outputs) {
            if (output.minting) {
                return true;
            }
        }
        return false;
    }
    _isMoreThanOneTokenBeingMinted() {
        let mintingCount = 0;
        for (const output of this._outputs) {
            if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__.isDefined)(output.minting)) {
                mintingCount++;
                if (mintingCount > 1) {
                    return true;
                }
            }
        }
        return false;
    }
    _isTheSameTokenBeingMintedOutsideTheMintingBox() {
        const mintingTokenId = this._getMintingTokenId();
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__.isUndefined)(mintingTokenId)) {
            return false;
        }
        for (const output of this._outputs) {
            if (output.tokens.contains(mintingTokenId)) {
                return true;
            }
        }
        return false;
    }
    _getMintingTokenId() {
        let tokenId = undefined;
        for (const output of this._outputs) {
            if (output.minting) {
                tokenId = output.minting.tokenId;
                break;
            }
        }
        return tokenId;
    }
    _calcBurningBalance(unsignedTransaction, inputs) {
        const usedInputs = inputs.filter((input) => (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__.isDefined)(unsignedTransaction.inputs.find((txInput) => txInput.boxId === input.boxId)));
        return this._calcDiff((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_15__.utxoSum)(usedInputs), (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_15__.utxoSum)(unsignedTransaction.outputs));
    }
    _calcChangeLength(tokensLength) {
        return Math.ceil(tokensLength / this._settings.maxTokensPerChangeBox);
    }
    _calcRequiredNanoErgsForChange(tokensLength, minNanoErgsPerBox = _outputBuilder__WEBPACK_IMPORTED_MODULE_13__.SAFE_MIN_BOX_VALUE) {
        return minNanoErgsPerBox * BigInt(this._calcChangeLength(tokensLength));
    }
    _calcDiff(inputs, outputs) {
        const tokens = [];
        const nanoErgs = inputs.nanoErgs - outputs.nanoErgs;
        for (const token of inputs.tokens) {
            const balance = token.amount - (outputs.tokens.find((t) => t.tokenId === token.tokenId)?.amount || _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_16__._0n);
            if (balance > _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_16__._0n) {
                tokens.push({ tokenId: token.tokenId, amount: balance });
            }
        }
        return { nanoErgs, tokens };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb25CdWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2J1aWxkZXIvdHJhbnNhY3Rpb25CdWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFPTCxXQUFXLEVBQ1gsT0FBTyxFQUlSLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUNMLEdBQUcsRUFFSCxLQUFLLEVBQ0wsWUFBWSxFQUNaLFNBQVMsRUFDVCxLQUFLLEVBQ0wsSUFBSSxFQUNKLE9BQU8sRUFDUixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUvRixPQUFPLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFzQixNQUFNLGlCQUFpQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDekMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFRMUUsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FDdkIsb05BQW9OLENBQUM7QUFXdk4sTUFBTSxPQUFPLGtCQUFrQjtJQUNaLE9BQU8sQ0FBb0I7SUFDM0IsV0FBVyxDQUFvQjtJQUMvQixRQUFRLENBQXFCO0lBQzdCLFNBQVMsQ0FBOEI7SUFDdkMsZUFBZSxDQUFVO0lBRWxDLGtCQUFrQixDQUFzQjtJQUN4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

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputsCollection": () => (/* binding */ InputsCollection)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var _ergoUnsignedInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);




class InputsCollection extends _collection__WEBPACK_IMPORTED_MODULE_0__.Collection {
    constructor(boxes) {
        super();
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__.isDefined)(boxes)) {
            this.add(boxes);
        }
    }
    _map(input) {
        return input instanceof _ergoUnsignedInput__WEBPACK_IMPORTED_MODULE_2__.ErgoUnsignedInput ? input : new _ergoUnsignedInput__WEBPACK_IMPORTED_MODULE_2__.ErgoUnsignedInput(input);
    }
    _addOne(box) {
        if (this._items.some((item) => item.boxId === box.boxId)) {
            throw new _errors__WEBPACK_IMPORTED_MODULE_3__.DuplicateInputError(box.boxId);
        }
        return super._addOne(box);
    }
    remove(boxIdOrIndex) {
        let index = -1;
        if (typeof boxIdOrIndex === "number") {
            if (this._isIndexOutOfBounds(boxIdOrIndex)) {
                throw new RangeError(`Index '${boxIdOrIndex}' is out of range.`);
            }
            index = boxIdOrIndex;
        }
        else {
            index = this._items.findIndex((box) => box.boxId === boxIdOrIndex);
            if (this._isIndexOutOfBounds(index)) {
                throw new _errors__WEBPACK_IMPORTED_MODULE_4__.NotFoundError("The input you are trying to remove is not present in the inputs collection.");
            }
        }
        if (index > -1) {
            this._items.splice(index, 1);
        }
        return this.length;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzQ29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvY29sbGVjdGlvbnMvaW5wdXRzQ29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTFDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxVQUEwQztJQUk5RSxZQUFZLEtBQThCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQjtJQUNILENBQUM7SUFFa0IsSUFBSSxDQUFDLEtBQXNDO1FBQzVELE9BQU8sS0FBSyxZQUFZLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVrQixPQUFPLENBQUMsR0FBZ0I7UUFDekMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEQsTUFBTSxJQUFJLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQztRQUVELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBSU0sTUFBTSxDQUFDLFlBQTRCO1FBQ3hDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxPQUFPLFlBQVksS0FBSyxRQUFRLEVBQUU7WUFDcEMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzFDLE1BQU0sSUFBSSxVQUFVLENBQUMsVUFBVSxZQUFZLG9CQUFvQixDQUFDLENBQUM7YUFDbEU7WUFFRCxLQUFLLEdBQUcsWUFBWSxDQUFDO1NBQ3RCO2FBQU07WUFDTCxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssWUFBWSxDQUFDLENBQUM7WUFFbkUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25DLE1BQU0sSUFBSSxhQUFhLENBQ3JCLDZFQUE2RSxDQUM5RSxDQUFDO2FBQ0g7U0FDRjtRQUVELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlCO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Q0FDRiJ9

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collection": () => (/* binding */ Collection)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);

class Collection {
    _items;
    constructor() {
        this._items = [];
    }
    _isIndexOutOfBounds(index) {
        return index < 0 || index >= this._items.length;
    }
    [Symbol.iterator]() {
        let counter = 0;
        return {
            next: () => {
                return {
                    done: counter >= this.length,
                    value: this._items[counter++]
                };
            }
        };
    }
    get length() {
        return this._items.length;
    }
    get isEmpty() {
        return this.length === 0;
    }
    at(index) {
        if (this._isIndexOutOfBounds(index)) {
            throw new RangeError(`Index '${index}' is out of range.`);
        }
        return this._items[index];
    }
    add(items, options) {
        return this._addOneOrMore(items, options);
    }
    _addOne(item, options) {
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isDefined)(options) && (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isDefined)(options.index)) {
            if (options.index === this.length) {
                this._items.push(this._map(item));
                return this.length;
            }
            if (this._isIndexOutOfBounds(options.index)) {
                throw new RangeError(`Index '${options.index}' is out of range.`);
            }
            this._items.splice(options.index, 0, this._map(item));
            return this.length;
        }
        this._items.push(this._map(item));
        return this._items.length;
    }
    _addOneOrMore(items, options) {
        if (Array.isArray(items)) {
            if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isDefined)(options) && (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isDefined)(options.index)) {
                items = items.reverse();
            }
            for (const item of items) {
                this._addOne(item, options);
            }
        }
        else {
            this._addOne(items, options);
        }
        return this.length;
    }
    toArray() {
        return [...this._items];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvY29sbGVjdGlvbnMvY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sbUJBQW1CLENBQUM7QUFJekQsTUFBTSxPQUFnQixVQUFVO0lBQ1gsTUFBTSxDQUFpQjtJQUUxQztRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFUyxtQkFBbUIsQ0FBQyxLQUFhO1FBQ3pDLE9BQU8sS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEQsQ0FBQztJQUVELENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNmLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztRQUVoQixPQUFPO1lBQ0wsSUFBSSxFQUFFLEdBQUcsRUFBRTtnQkFDVCxPQUFPO29CQUNMLElBQUksRUFBRSxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU07b0JBQzVCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUM5QixDQUFDO1lBQ0osQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLEVBQUUsQ0FBQyxLQUFhO1FBQ3JCLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25DLE1BQU0sSUFBSSxVQUFVLENBQUMsVUFBVSxLQUFLLG9CQUFvQixDQUFDLENBQUM7U0FDM0Q7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLEdBQUcsQ0FBQyxLQUE4QixFQUFFLE9BQThCO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQU1TLE9BQU8sQ0FBQyxJQUFpQyxFQUFFLE9BQThCO1FBQ2pGLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEQsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFFbEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3BCO1lBRUQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQyxNQUFNLElBQUksVUFBVSxDQUFDLFVBQVUsT0FBTyxDQUFDLEtBQUssb0JBQW9CLENBQUMsQ0FBQzthQUNuRTtZQUVELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUV0RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFbEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBRVMsYUFBYSxDQUFDLEtBQThCLEVBQUUsT0FBOEI7UUFDcEYsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xELEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDekI7WUFFRCxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtnQkFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDN0I7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDOUI7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVNLE9BQU87UUFDWixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNGIn0=

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDefined": () => (/* binding */ isDefined),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "removeUndefined": () => (/* binding */ removeUndefined)
/* harmony export */ });
function removeUndefined(value) {
    const result = {};
    for (const key in value) {
        const val = value[key];
        if (!isUndefined(val)) {
            result[key] = val;
        }
    }
    return result;
}
function isUndefined(value) {
    return value === undefined || value === null || Number.isNaN(value);
}
function isDefined(value) {
    return !isUndefined(value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0VXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvb2JqZWN0VXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLGVBQWUsQ0FBQyxLQUE4QjtJQUM1RCxNQUFNLE1BQU0sR0FBNEIsRUFBRSxDQUFDO0lBQzNDLEtBQUssTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQ3ZCLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDbkI7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLEtBQWM7SUFDeEMsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBSSxLQUFvQjtJQUMvQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdCLENBQUMifQ==

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErgoUnsignedInput": () => (/* binding */ ErgoUnsignedInput)
/* harmony export */ });
/* harmony import */ var _ergoBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);

class ErgoUnsignedInput extends _ergoBox__WEBPACK_IMPORTED_MODULE_0__.ErgoBox {
    _extension;
    get extension() {
        return this._extension;
    }
    constructor(box) {
        super(box);
    }
    setContextVars(extension) {
        this._extension = extension;
        return this;
    }
    toUnsignedInputObject(type) {
        return {
            ...this.toObject(type),
            extension: this._extension || {}
        };
    }
    toObject(type) {
        if (type === "EIP-12") {
            return {
                boxId: this.boxId,
                value: this.value.toString(),
                ergoTree: this.ergoTree,
                creationHeight: this.creationHeight,
                assets: this.assets.map((asset) => ({
                    tokenId: asset.tokenId,
                    amount: asset.amount.toString()
                })),
                additionalRegisters: this.additionalRegisters,
                transactionId: this.transactionId,
                index: this.index
            };
        }
        else {
            return {
                boxId: this.boxId
            };
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJnb1Vuc2lnbmVkSW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWxzL2VyZ29VbnNpZ25lZElucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFLcEMsTUFBTSxPQUFPLGlCQUFrQixTQUFRLE9BQU87SUFDcEMsVUFBVSxDQUFvQjtJQUV0QyxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxZQUFZLEdBQWdCO1FBQzFCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFTSxjQUFjLENBQUMsU0FBMkI7UUFDL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFFNUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0scUJBQXFCLENBQTRCLElBQU87UUFDN0QsT0FBTztZQUNMLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRTtTQUNqQixDQUFDO0lBQ3BCLENBQUM7SUFFTSxRQUFRLENBQTRCLElBQU87UUFDaEQsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ3JCLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQzVCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUNuQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ2xDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztvQkFDdEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO2lCQUNoQyxDQUFDLENBQUM7Z0JBQ0gsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtnQkFDN0MsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO2dCQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDRSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxPQUFPO2dCQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzthQUNFLENBQUM7U0FDdkI7SUFDSCxDQUFDO0NBQ0YifQ==

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErgoBox": () => (/* binding */ ErgoBox)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _noble_hashes_blake2b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _serializer_sigma_boxSerializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);




class ErgoBox {
    boxId;
    value;
    ergoTree;
    creationHeight;
    assets;
    additionalRegisters;
    transactionId;
    index;
    constructor(box) {
        this.boxId = box.boxId;
        this.ergoTree = box.ergoTree;
        this.creationHeight = box.creationHeight;
        this.value = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.ensureBigInt)(box.value);
        this.assets = box.assets.map((asset) => ({
            tokenId: asset.tokenId,
            amount: (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.ensureBigInt)(asset.amount)
        }));
        this.additionalRegisters = box.additionalRegisters;
        this.transactionId = box.transactionId;
        this.index = box.index;
    }
    isValid() {
        return ErgoBox.validate(this);
    }
    static validate(box) {
        const bytes = (0,_serializer_sigma_boxSerializer__WEBPACK_IMPORTED_MODULE_3__.serializeBox)(box);
        const hash = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.bytesToHex)((0,_noble_hashes_blake2b__WEBPACK_IMPORTED_MODULE_0__.blake2b)(bytes, { dkLen: 32 }));
        return box.boxId === hash;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJnb0JveC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvZXJnb0JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFakUsTUFBTSxPQUFPLE9BQU87SUFDbEIsS0FBSyxDQUFVO0lBQ2YsS0FBSyxDQUFVO0lBQ2YsUUFBUSxDQUFVO0lBQ2xCLGNBQWMsQ0FBVTtJQUN4QixNQUFNLENBQXlCO0lBQy9CLG1CQUFtQixDQUF5QjtJQUM1QyxhQUFhLENBQVU7SUFDdkIsS0FBSyxDQUFVO0lBRWYsWUFBWSxHQUFnQjtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN2QyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsTUFBTSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ0osSUFBSSxDQUFDLG1CQUFtQixHQUFHLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFTSxPQUFPO1FBQ1osT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQTBCO1FBQ3hDLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdkQsT0FBTyxHQUFHLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQztJQUM1QixDQUFDO0NBQ0YifQ==

/***/ }),
/* 26 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blake2b": () => (/* binding */ blake2b)
/* harmony export */ });
/* harmony import */ var _blake2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _u64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);



// Same as SHA-512 but LE
// prettier-ignore
const IV = new Uint32Array([
    0xf3bcc908, 0x6a09e667, 0x84caa73b, 0xbb67ae85, 0xfe94f82b, 0x3c6ef372, 0x5f1d36f1, 0xa54ff53a,
    0xade682d1, 0x510e527f, 0x2b3e6c1f, 0x9b05688c, 0xfb41bd6b, 0x1f83d9ab, 0x137e2179, 0x5be0cd19
]);
// Temporary buffer
const BUF = new Uint32Array(32);
// Mixing function G splitted in two halfs
function G1(a, b, c, d, msg, x) {
    // NOTE: V is LE here
    const Xl = msg[x], Xh = msg[x + 1]; // prettier-ignore
    let Al = BUF[2 * a], Ah = BUF[2 * a + 1]; // prettier-ignore
    let Bl = BUF[2 * b], Bh = BUF[2 * b + 1]; // prettier-ignore
    let Cl = BUF[2 * c], Ch = BUF[2 * c + 1]; // prettier-ignore
    let Dl = BUF[2 * d], Dh = BUF[2 * d + 1]; // prettier-ignore
    // v[a] = (v[a] + v[b] + x) | 0;
    let ll = _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].add3L(Al, Bl, Xl);
    Ah = _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].add3H(ll, Ah, Bh, Xh);
    Al = ll | 0;
    // v[d] = rotr(v[d] ^ v[a], 32)
    ({ Dh, Dl } = { Dh: Dh ^ Ah, Dl: Dl ^ Al });
    ({ Dh, Dl } = { Dh: _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotr32H(Dh, Dl), Dl: _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotr32L(Dh, Dl) });
    // v[c] = (v[c] + v[d]) | 0;
    ({ h: Ch, l: Cl } = _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].add(Ch, Cl, Dh, Dl));
    // v[b] = rotr(v[b] ^ v[c], 24)
    ({ Bh, Bl } = { Bh: Bh ^ Ch, Bl: Bl ^ Cl });
    ({ Bh, Bl } = { Bh: _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotrSH(Bh, Bl, 24), Bl: _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotrSL(Bh, Bl, 24) });
    (BUF[2 * a] = Al), (BUF[2 * a + 1] = Ah);
    (BUF[2 * b] = Bl), (BUF[2 * b + 1] = Bh);
    (BUF[2 * c] = Cl), (BUF[2 * c + 1] = Ch);
    (BUF[2 * d] = Dl), (BUF[2 * d + 1] = Dh);
}
function G2(a, b, c, d, msg, x) {
    // NOTE: V is LE here
    const Xl = msg[x], Xh = msg[x + 1]; // prettier-ignore
    let Al = BUF[2 * a], Ah = BUF[2 * a + 1]; // prettier-ignore
    let Bl = BUF[2 * b], Bh = BUF[2 * b + 1]; // prettier-ignore
    let Cl = BUF[2 * c], Ch = BUF[2 * c + 1]; // prettier-ignore
    let Dl = BUF[2 * d], Dh = BUF[2 * d + 1]; // prettier-ignore
    // v[a] = (v[a] + v[b] + x) | 0;
    let ll = _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].add3L(Al, Bl, Xl);
    Ah = _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].add3H(ll, Ah, Bh, Xh);
    Al = ll | 0;
    // v[d] = rotr(v[d] ^ v[a], 16)
    ({ Dh, Dl } = { Dh: Dh ^ Ah, Dl: Dl ^ Al });
    ({ Dh, Dl } = { Dh: _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotrSH(Dh, Dl, 16), Dl: _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotrSL(Dh, Dl, 16) });
    // v[c] = (v[c] + v[d]) | 0;
    ({ h: Ch, l: Cl } = _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].add(Ch, Cl, Dh, Dl));
    // v[b] = rotr(v[b] ^ v[c], 63)
    ({ Bh, Bl } = { Bh: Bh ^ Ch, Bl: Bl ^ Cl });
    ({ Bh, Bl } = { Bh: _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotrBH(Bh, Bl, 63), Bl: _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotrBL(Bh, Bl, 63) });
    (BUF[2 * a] = Al), (BUF[2 * a + 1] = Ah);
    (BUF[2 * b] = Bl), (BUF[2 * b + 1] = Bh);
    (BUF[2 * c] = Cl), (BUF[2 * c + 1] = Ch);
    (BUF[2 * d] = Dl), (BUF[2 * d + 1] = Dh);
}
class BLAKE2b extends _blake2_js__WEBPACK_IMPORTED_MODULE_0__.BLAKE2 {
    constructor(opts = {}) {
        super(128, opts.dkLen === undefined ? 64 : opts.dkLen, opts, 64, 16, 16);
        // Same as SHA-512, but LE
        this.v0l = IV[0] | 0;
        this.v0h = IV[1] | 0;
        this.v1l = IV[2] | 0;
        this.v1h = IV[3] | 0;
        this.v2l = IV[4] | 0;
        this.v2h = IV[5] | 0;
        this.v3l = IV[6] | 0;
        this.v3h = IV[7] | 0;
        this.v4l = IV[8] | 0;
        this.v4h = IV[9] | 0;
        this.v5l = IV[10] | 0;
        this.v5h = IV[11] | 0;
        this.v6l = IV[12] | 0;
        this.v6h = IV[13] | 0;
        this.v7l = IV[14] | 0;
        this.v7h = IV[15] | 0;
        const keyLength = opts.key ? opts.key.length : 0;
        this.v0l ^= this.outputLen | (keyLength << 8) | (0x01 << 16) | (0x01 << 24);
        if (opts.salt) {
            const salt = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.u32)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toBytes)(opts.salt));
            this.v4l ^= salt[0];
            this.v4h ^= salt[1];
            this.v5l ^= salt[2];
            this.v5h ^= salt[3];
        }
        if (opts.personalization) {
            const pers = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.u32)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toBytes)(opts.personalization));
            this.v6l ^= pers[0];
            this.v6h ^= pers[1];
            this.v7l ^= pers[2];
            this.v7h ^= pers[3];
        }
        if (opts.key) {
            // Pad to blockLen and update
            const tmp = new Uint8Array(this.blockLen);
            tmp.set((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toBytes)(opts.key));
            this.update(tmp);
        }
    }
    // prettier-ignore
    get() {
        let { v0l, v0h, v1l, v1h, v2l, v2h, v3l, v3h, v4l, v4h, v5l, v5h, v6l, v6h, v7l, v7h } = this;
        return [v0l, v0h, v1l, v1h, v2l, v2h, v3l, v3h, v4l, v4h, v5l, v5h, v6l, v6h, v7l, v7h];
    }
    // prettier-ignore
    set(v0l, v0h, v1l, v1h, v2l, v2h, v3l, v3h, v4l, v4h, v5l, v5h, v6l, v6h, v7l, v7h) {
        this.v0l = v0l | 0;
        this.v0h = v0h | 0;
        this.v1l = v1l | 0;
        this.v1h = v1h | 0;
        this.v2l = v2l | 0;
        this.v2h = v2h | 0;
        this.v3l = v3l | 0;
        this.v3h = v3h | 0;
        this.v4l = v4l | 0;
        this.v4h = v4h | 0;
        this.v5l = v5l | 0;
        this.v5h = v5h | 0;
        this.v6l = v6l | 0;
        this.v6h = v6h | 0;
        this.v7l = v7l | 0;
        this.v7h = v7h | 0;
    }
    compress(msg, offset, isLast) {
        this.get().forEach((v, i) => (BUF[i] = v)); // First half from state.
        BUF.set(IV, 16); // Second half from IV.
        let { h, l } = _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromBig(BigInt(this.length));
        BUF[24] = IV[8] ^ l; // Low word of the offset.
        BUF[25] = IV[9] ^ h; // High word.
        // Invert all bits for last block
        if (isLast) {
            BUF[28] = ~BUF[28];
            BUF[29] = ~BUF[29];
        }
        let j = 0;
        const s = _blake2_js__WEBPACK_IMPORTED_MODULE_0__.SIGMA;
        for (let i = 0; i < 12; i++) {
            G1(0, 4, 8, 12, msg, offset + 2 * s[j++]);
            G2(0, 4, 8, 12, msg, offset + 2 * s[j++]);
            G1(1, 5, 9, 13, msg, offset + 2 * s[j++]);
            G2(1, 5, 9, 13, msg, offset + 2 * s[j++]);
            G1(2, 6, 10, 14, msg, offset + 2 * s[j++]);
            G2(2, 6, 10, 14, msg, offset + 2 * s[j++]);
            G1(3, 7, 11, 15, msg, offset + 2 * s[j++]);
            G2(3, 7, 11, 15, msg, offset + 2 * s[j++]);
            G1(0, 5, 10, 15, msg, offset + 2 * s[j++]);
            G2(0, 5, 10, 15, msg, offset + 2 * s[j++]);
            G1(1, 6, 11, 12, msg, offset + 2 * s[j++]);
            G2(1, 6, 11, 12, msg, offset + 2 * s[j++]);
            G1(2, 7, 8, 13, msg, offset + 2 * s[j++]);
            G2(2, 7, 8, 13, msg, offset + 2 * s[j++]);
            G1(3, 4, 9, 14, msg, offset + 2 * s[j++]);
            G2(3, 4, 9, 14, msg, offset + 2 * s[j++]);
        }
        this.v0l ^= BUF[0] ^ BUF[16];
        this.v0h ^= BUF[1] ^ BUF[17];
        this.v1l ^= BUF[2] ^ BUF[18];
        this.v1h ^= BUF[3] ^ BUF[19];
        this.v2l ^= BUF[4] ^ BUF[20];
        this.v2h ^= BUF[5] ^ BUF[21];
        this.v3l ^= BUF[6] ^ BUF[22];
        this.v3h ^= BUF[7] ^ BUF[23];
        this.v4l ^= BUF[8] ^ BUF[24];
        this.v4h ^= BUF[9] ^ BUF[25];
        this.v5l ^= BUF[10] ^ BUF[26];
        this.v5h ^= BUF[11] ^ BUF[27];
        this.v6l ^= BUF[12] ^ BUF[28];
        this.v6h ^= BUF[13] ^ BUF[29];
        this.v7l ^= BUF[14] ^ BUF[30];
        this.v7h ^= BUF[15] ^ BUF[31];
        BUF.fill(0);
    }
    destroy() {
        this.destroyed = true;
        this.buffer32.fill(0);
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
}
/**
 * BLAKE2b - optimized for 64-bit platforms. JS doesn't have uint64, so it's slower than BLAKE2s.
 * @param msg - message that would be hashed
 * @param opts - dkLen, key, salt, personalization
 */
const blake2b = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.wrapConstructorWithOpts)((opts) => new BLAKE2b(opts));
//# sourceMappingURL=blake2b.js.map

/***/ }),
/* 27 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BLAKE2": () => (/* binding */ BLAKE2),
/* harmony export */   "SIGMA": () => (/* binding */ SIGMA)
/* harmony export */ });
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);


// prettier-ignore
const SIGMA = new Uint8Array([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
    11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4,
    7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8,
    9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13,
    2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9,
    12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11,
    13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10,
    6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5,
    10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0,
    // For BLAKE2b, the two extra permutations for rounds 10 and 11 are SIGMA[10..11] = SIGMA[0..1].
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
]);
class BLAKE2 extends _utils_js__WEBPACK_IMPORTED_MODULE_1__.Hash {
    constructor(blockLen, outputLen, opts = {}, keyLen, saltLen, persLen) {
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.length = 0;
        this.pos = 0;
        this.finished = false;
        this.destroyed = false;
        _assert_js__WEBPACK_IMPORTED_MODULE_0__["default"].number(blockLen);
        _assert_js__WEBPACK_IMPORTED_MODULE_0__["default"].number(outputLen);
        _assert_js__WEBPACK_IMPORTED_MODULE_0__["default"].number(keyLen);
        if (outputLen < 0 || outputLen > keyLen)
            throw new Error('Blake2: outputLen bigger than keyLen');
        if (opts.key !== undefined && (opts.key.length < 1 || opts.key.length > keyLen))
            throw new Error(`Key should be up 1..${keyLen} byte long or undefined`);
        if (opts.salt !== undefined && opts.salt.length !== saltLen)
            throw new Error(`Salt should be ${saltLen} byte long or undefined`);
        if (opts.personalization !== undefined && opts.personalization.length !== persLen)
            throw new Error(`Personalization should be ${persLen} byte long or undefined`);
        this.buffer32 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.u32)((this.buffer = new Uint8Array(blockLen)));
    }
    update(data) {
        _assert_js__WEBPACK_IMPORTED_MODULE_0__["default"].exists(this);
        // Main difference with other hashes: there is flag for last block,
        // so we cannot process current block before we know that there
        // is the next one. This significantly complicates logic and reduces ability
        // to do zero-copy processing
        const { blockLen, buffer, buffer32 } = this;
        data = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toBytes)(data);
        const len = data.length;
        for (let pos = 0; pos < len;) {
            // If buffer is full and we still have input (don't process last block, same as blake2s)
            if (this.pos === blockLen) {
                this.compress(buffer32, 0, false);
                this.pos = 0;
            }
            const take = Math.min(blockLen - this.pos, len - pos);
            const dataOffset = data.byteOffset + pos;
            // full block && aligned to 4 bytes && not last in input
            if (take === blockLen && !(dataOffset % 4) && pos + take < len) {
                const data32 = new Uint32Array(data.buffer, dataOffset, Math.floor((len - pos) / 4));
                for (let pos32 = 0; pos + blockLen < len; pos32 += buffer32.length, pos += blockLen) {
                    this.length += blockLen;
                    this.compress(data32, pos32, false);
                }
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            this.length += take;
            pos += take;
        }
        return this;
    }
    digestInto(out) {
        _assert_js__WEBPACK_IMPORTED_MODULE_0__["default"].exists(this);
        _assert_js__WEBPACK_IMPORTED_MODULE_0__["default"].output(out, this);
        const { pos, buffer32 } = this;
        this.finished = true;
        // Padding
        this.buffer.subarray(pos).fill(0);
        this.compress(buffer32, 0, true);
        const out32 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.u32)(out);
        this.get().forEach((v, i) => (out32[i] = v));
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        const { buffer, length, finished, destroyed, outputLen, pos } = this;
        to || (to = new this.constructor({ dkLen: outputLen }));
        to.set(...this.get());
        to.length = length;
        to.finished = finished;
        to.destroyed = destroyed;
        to.outputLen = outputLen;
        to.buffer.set(buffer);
        to.pos = pos;
        return to;
    }
}
//# sourceMappingURL=_blake2.js.map

/***/ }),
/* 28 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bool": () => (/* binding */ bool),
/* harmony export */   "bytes": () => (/* binding */ bytes),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "exists": () => (/* binding */ exists),
/* harmony export */   "hash": () => (/* binding */ hash),
/* harmony export */   "number": () => (/* binding */ number),
/* harmony export */   "output": () => (/* binding */ output)
/* harmony export */ });
function number(n) {
    if (!Number.isSafeInteger(n) || n < 0)
        throw new Error(`Wrong positive integer: ${n}`);
}
function bool(b) {
    if (typeof b !== 'boolean')
        throw new Error(`Expected boolean, not ${b}`);
}
function bytes(b, ...lengths) {
    if (!(b instanceof Uint8Array))
        throw new TypeError('Expected Uint8Array');
    if (lengths.length > 0 && !lengths.includes(b.length))
        throw new TypeError(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
function hash(hash) {
    if (typeof hash !== 'function' || typeof hash.create !== 'function')
        throw new Error('Hash should be wrapped by utils.wrapConstructor');
    number(hash.outputLen);
    number(hash.blockLen);
}
function exists(instance, checkFinished = true) {
    if (instance.destroyed)
        throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished)
        throw new Error('Hash#digest() has already been called');
}
function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
        throw new Error(`digestInto() expects output buffer of length at least ${min}`);
    }
}
const assert = {
    number,
    bool,
    bytes,
    hash,
    exists,
    output,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assert);
//# sourceMappingURL=_assert.js.map

/***/ }),
/* 29 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hash": () => (/* binding */ Hash),
/* harmony export */   "asyncLoop": () => (/* binding */ asyncLoop),
/* harmony export */   "bytesToHex": () => (/* binding */ bytesToHex),
/* harmony export */   "checkOpts": () => (/* binding */ checkOpts),
/* harmony export */   "concatBytes": () => (/* binding */ concatBytes),
/* harmony export */   "createView": () => (/* binding */ createView),
/* harmony export */   "hexToBytes": () => (/* binding */ hexToBytes),
/* harmony export */   "isLE": () => (/* binding */ isLE),
/* harmony export */   "nextTick": () => (/* binding */ nextTick),
/* harmony export */   "randomBytes": () => (/* binding */ randomBytes),
/* harmony export */   "rotr": () => (/* binding */ rotr),
/* harmony export */   "toBytes": () => (/* binding */ toBytes),
/* harmony export */   "u32": () => (/* binding */ u32),
/* harmony export */   "u8": () => (/* binding */ u8),
/* harmony export */   "utf8ToBytes": () => (/* binding */ utf8ToBytes),
/* harmony export */   "wrapConstructor": () => (/* binding */ wrapConstructor),
/* harmony export */   "wrapConstructorWithOpts": () => (/* binding */ wrapConstructorWithOpts)
/* harmony export */ });
/* harmony import */ var _noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// The import here is via the package name. This is to ensure
// that exports mapping/resolution does fall into place.

// Cast array to different type
const u8 = (arr) => new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
const u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
// Cast array to view
const createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
// The rotate right (circular right shift) operation for uint32
const rotr = (word, shift) => (word << (32 - shift)) | (word >>> shift);
const isLE = new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44;
// There is almost no big endian hardware, but js typed arrays uses platform specific endianness.
// So, just to be sure not to corrupt anything.
if (!isLE)
    throw new Error('Non little-endian hardware is not supported');
const hexes = Array.from({ length: 256 }, (v, i) => i.toString(16).padStart(2, '0'));
/**
 * @example bytesToHex(Uint8Array.from([0xde, 0xad, 0xbe, 0xef]))
 */
function bytesToHex(uint8a) {
    // pre-caching improves the speed 6x
    if (!(uint8a instanceof Uint8Array))
        throw new Error('Uint8Array expected');
    let hex = '';
    for (let i = 0; i < uint8a.length; i++) {
        hex += hexes[uint8a[i]];
    }
    return hex;
}
/**
 * @example hexToBytes('deadbeef')
 */
function hexToBytes(hex) {
    if (typeof hex !== 'string') {
        throw new TypeError('hexToBytes: expected string, got ' + typeof hex);
    }
    if (hex.length % 2)
        throw new Error('hexToBytes: received invalid unpadded hex');
    const array = new Uint8Array(hex.length / 2);
    for (let i = 0; i < array.length; i++) {
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0)
            throw new Error('Invalid byte sequence');
        array[i] = byte;
    }
    return array;
}
// There is no setImmediate in browser and setTimeout is slow. However, call to async function will return Promise
// which will be fullfiled only on next scheduler queue processing step and this is exactly what we need.
const nextTick = async () => { };
// Returns control to thread each 'tick' ms to avoid blocking
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for (let i = 0; i < iters; i++) {
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick)
            continue;
        await nextTick();
        ts += diff;
    }
}
function utf8ToBytes(str) {
    if (typeof str !== 'string') {
        throw new TypeError(`utf8ToBytes expected string, got ${typeof str}`);
    }
    return new TextEncoder().encode(str);
}
function toBytes(data) {
    if (typeof data === 'string')
        data = utf8ToBytes(data);
    if (!(data instanceof Uint8Array))
        throw new TypeError(`Expected input type is Uint8Array (got ${typeof data})`);
    return data;
}
/**
 * Concats Uint8Array-s into one; like `Buffer.concat([buf1, buf2])`
 * @example concatBytes(buf1, buf2)
 */
function concatBytes(...arrays) {
    if (!arrays.every((a) => a instanceof Uint8Array))
        throw new Error('Uint8Array list expected');
    if (arrays.length === 1)
        return arrays[0];
    const length = arrays.reduce((a, arr) => a + arr.length, 0);
    const result = new Uint8Array(length);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
        const arr = arrays[i];
        result.set(arr, pad);
        pad += arr.length;
    }
    return result;
}
// For runtime check if class implements interface
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
// Check if object doens't have custom constructor (like Uint8Array/Array)
const isPlainObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]' && obj.constructor === Object;
function checkOpts(defaults, opts) {
    if (opts !== undefined && (typeof opts !== 'object' || !isPlainObject(opts)))
        throw new TypeError('Options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
function wrapConstructor(hashConstructor) {
    const hashC = (message) => hashConstructor().update(toBytes(message)).digest();
    const tmp = hashConstructor();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashConstructor();
    return hashC;
}
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
}
/**
 * Secure PRNG
 */
function randomBytes(bytesLength = 32) {
    if (_noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_0__.crypto.web) {
        return _noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_0__.crypto.web.getRandomValues(new Uint8Array(bytesLength));
    }
    else if (_noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_0__.crypto.node) {
        return new Uint8Array(_noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_0__.crypto.node.randomBytes(bytesLength).buffer);
    }
    else {
        throw new Error("The environment doesn't have randomBytes function");
    }
}
//# sourceMappingURL=utils.js.map

/***/ }),
/* 30 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crypto": () => (/* binding */ crypto)
/* harmony export */ });
const crypto = {
    node: undefined,
    web: typeof self === 'object' && 'crypto' in self ? self.crypto : undefined,
};
//# sourceMappingURL=cryptoBrowser.js.map

/***/ }),
/* 31 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fromBig": () => (/* binding */ fromBig),
/* harmony export */   "split": () => (/* binding */ split),
/* harmony export */   "toBig": () => (/* binding */ toBig)
/* harmony export */ });
const U32_MASK64 = BigInt(2 ** 32 - 1);
const _32n = BigInt(32);
// We are not using BigUint64Array, because they are extremely slow as per 2022
function fromBig(n, le = false) {
    if (le)
        return { h: Number(n & U32_MASK64), l: Number((n >> _32n) & U32_MASK64) };
    return { h: Number((n >> _32n) & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
    let Ah = new Uint32Array(lst.length);
    let Al = new Uint32Array(lst.length);
    for (let i = 0; i < lst.length; i++) {
        const { h, l } = fromBig(lst[i], le);
        [Ah[i], Al[i]] = [h, l];
    }
    return [Ah, Al];
}
const toBig = (h, l) => (BigInt(h >>> 0) << _32n) | BigInt(l >>> 0);
// for Shift in [0, 32)
const shrSH = (h, l, s) => h >>> s;
const shrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
// Right rotate for Shift in [1, 32)
const rotrSH = (h, l, s) => (h >>> s) | (l << (32 - s));
const rotrSL = (h, l, s) => (h << (32 - s)) | (l >>> s);
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotrBH = (h, l, s) => (h << (64 - s)) | (l >>> (s - 32));
const rotrBL = (h, l, s) => (h >>> (s - 32)) | (l << (64 - s));
// Right rotate for shift===32 (just swaps l&h)
const rotr32H = (h, l) => l;
const rotr32L = (h, l) => h;
// Left rotate for Shift in [1, 32)
const rotlSH = (h, l, s) => (h << s) | (l >>> (32 - s));
const rotlSL = (h, l, s) => (l << s) | (h >>> (32 - s));
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
const rotlBH = (h, l, s) => (l << (s - 32)) | (h >>> (64 - s));
const rotlBL = (h, l, s) => (h << (s - 32)) | (l >>> (64 - s));
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
// Removing "export" has 5% perf penalty -_-
function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return { h: (Ah + Bh + ((l / 2 ** 32) | 0)) | 0, l: l | 0 };
}
// Addition with more than 2 elements
const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch) => (Ah + Bh + Ch + ((low / 2 ** 32) | 0)) | 0;
const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh) => (Ah + Bh + Ch + Dh + ((low / 2 ** 32) | 0)) | 0;
const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh) => (Ah + Bh + Ch + Dh + Eh + ((low / 2 ** 32) | 0)) | 0;
// prettier-ignore
const u64 = {
    fromBig, split, toBig,
    shrSH, shrSL,
    rotrSH, rotrSL, rotrBH, rotrBL,
    rotr32H, rotr32L,
    rotlSH, rotlSL, rotlBH, rotlBL,
    add, add3L, add3H, add4L, add4H, add5H, add5L,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (u64);
//# sourceMappingURL=_u64.js.map

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decimalize": () => (/* binding */ decimalize),
/* harmony export */   "ensureBigInt": () => (/* binding */ ensureBigInt),
/* harmony export */   "sumBy": () => (/* binding */ sumBy),
/* harmony export */   "undecimalize": () => (/* binding */ undecimalize)
/* harmony export */ });
/* harmony import */ var _arrayUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _bigIntLiterals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _objectUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);



function ensureBigInt(number) {
    return typeof number === "bigint" ? number : BigInt(number);
}
function undecimalize(decimalStr, options) {
    if (!decimalStr) {
        return _bigIntLiterals__WEBPACK_IMPORTED_MODULE_0__._0n;
    }
    options = typeof options == "number" ? { decimals: options } : options;
    if ((0,_objectUtils__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(options)) {
        options = {};
    }
    options.decimals = options.decimals || 0;
    options.decimalMark = options.decimalMark || ".";
    const fragments = decimalStr.split(options.decimalMark);
    if (fragments.length > 2) {
        throw new Error("Invalid numeric string.");
    }
    let [integer, decimal] = fragments;
    integer = _removeLeadingZeros(integer);
    const negative = integer.startsWith("-") ? "-" : "";
    if (!decimal) {
        decimal = "0".repeat(options.decimals);
    }
    else if (decimal.length < options.decimals) {
        decimal = decimal.padEnd(options.decimals, "0");
    }
    return BigInt(negative + _stripNonDigits(integer + decimal));
}
function _stripNonDigits(value) {
    return value.replace(/\D/g, "");
}
function decimalize(value, options) {
    value = ensureBigInt(value);
    if (!options) {
        return value.toString();
    }
    options = typeof options == "number" ? { decimals: options } : options;
    options.decimals = options.decimals || 0;
    options.decimalMark = options.decimalMark || ".";
    const pow = _bigIntLiterals__WEBPACK_IMPORTED_MODULE_0__._10n ** BigInt(options.decimals);
    const integer = value / pow;
    const decimal = value - integer * pow;
    return _buildFormattedDecimal(integer.toString(10), decimal.toString(10), options);
}
function _buildFormattedDecimal(integer, decimal, options) {
    const integerPart = _addThousandMarks(integer, options.thousandMark);
    const decimalPart = _stripTrailingZeros(decimal.padStart(options.decimals, "0"));
    if (decimalPart) {
        return `${integerPart}${options.decimalMark}${decimalPart}`;
    }
    else {
        return integerPart;
    }
}
function _addThousandMarks(value, mark) {
    if (!mark) {
        return value;
    }
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, mark);
}
function _stripTrailingZeros(value) {
    if (!value.endsWith("0")) {
        return value;
    }
    return value.replace(/\.?0+$/, "");
}
function _removeLeadingZeros(value) {
    if (!value.startsWith("0")) {
        return value;
    }
    return value.replace(/^0+\.?/, "");
}
function sumBy(collection, iteratee, condition) {
    let acc = _bigIntLiterals__WEBPACK_IMPORTED_MODULE_0__._0n;
    if ((0,_arrayUtils__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(collection)) {
        return acc;
    }
    for (const item of collection) {
        if ((0,_objectUtils__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(condition) || condition(item)) {
            acc += iteratee(item);
        }
    }
    return acc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlnSW50VXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvYmlnSW50VXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN2QyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJNUMsTUFBTSxVQUFVLFlBQVksQ0FBQyxNQUFrQjtJQUM3QyxPQUFPLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQWVELE1BQU0sVUFBVSxZQUFZLENBQUMsVUFBa0IsRUFBRSxPQUFpQztJQUNoRixJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2YsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUVELE9BQU8sR0FBRyxPQUFPLE9BQU8sSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDdkUsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDeEIsT0FBTyxHQUFHLEVBQUUsQ0FBQztLQUNkO0lBRUQsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztJQUN6QyxPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDO0lBRWpELE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hELElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFB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

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_0n": () => (/* binding */ _0n),
/* harmony export */   "_10n": () => (/* binding */ _10n),
/* harmony export */   "_127n": () => (/* binding */ _127n),
/* harmony export */   "_128n": () => (/* binding */ _128n),
/* harmony export */   "_1n": () => (/* binding */ _1n),
/* harmony export */   "_63n": () => (/* binding */ _63n),
/* harmony export */   "_7n": () => (/* binding */ _7n)
/* harmony export */ });
// Make some ECMAScript parsers happy by not using bigint literals like 123n
const _0n = BigInt(0);
const _1n = BigInt(1);
const _7n = BigInt(7);
const _10n = BigInt(10);
const _63n = BigInt(63);
const _127n = BigInt(127);
const _128n = BigInt(128);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmlnSW50TGl0ZXJhbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvYmlnSW50TGl0ZXJhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFO0FBRTVFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDL0IsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMvQixNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMifQ==

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areEqual": () => (/* binding */ areEqual),
/* harmony export */   "chunk": () => (/* binding */ chunk),
/* harmony export */   "endsWith": () => (/* binding */ endsWith),
/* harmony export */   "first": () => (/* binding */ first),
/* harmony export */   "hasDuplicates": () => (/* binding */ hasDuplicates),
/* harmony export */   "hasDuplicatesBy": () => (/* binding */ hasDuplicatesBy),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "orderBy": () => (/* binding */ orderBy),
/* harmony export */   "some": () => (/* binding */ some),
/* harmony export */   "startsWith": () => (/* binding */ startsWith)
/* harmony export */ });
function isEmpty(obj) {
    if (!obj) {
        return true;
    }
    return Array.isArray(obj) ? obj.length === 0 : Object.keys(obj).length === 0;
}
function some(obj) {
    return !isEmpty(obj);
}
function first(array) {
    if (!array) {
        return;
    }
    if (!array[0]) {
        throw Error("Empty array.");
    }
    return array[0];
}
/**
 * Check for duplicate elements using the equality operator
 */
function hasDuplicates(array) {
    return array.some((item, index) => {
        return array.indexOf(item) !== index;
    });
}
/**
 * Check for duplicate keys in complex elements
 */
function hasDuplicatesBy(array, selector) {
    return array.some((item, index) => {
        return array.findIndex((x) => selector(x) === selector(item)) !== index;
    });
}
function chunk(array, size) {
    if (array.length <= size) {
        return [array];
    }
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}
function orderBy(array, iteratee, order = "asc") {
    return array.sort((a, b) => {
        if (iteratee(a) > iteratee(b)) {
            return order === "asc" ? 1 : -1;
        }
        else if (iteratee(a) < iteratee(b)) {
            return order === "asc" ? -1 : 1;
        }
        else {
            return 0;
        }
    });
}
function areEqual(array1, array2) {
    if (array1 === array2) {
        return true;
    }
    if (array1.length != array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
function startsWith(array, target) {
    if (array === target) {
        return true;
    }
    if (target.length > array.length) {
        return false;
    }
    for (let i = 0; i < target.length; i++) {
        if (target[i] !== array[i]) {
            return false;
        }
    }
    return true;
}
function endsWith(array, target) {
    if (array === target) {
        return true;
    }
    if (target.length > array.length) {
        return false;
    }
    const offset = array.length - target.length;
    for (let i = target.length - 1; i >= 0; i--) {
        if (target[i] !== array[i + offset]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXlVdGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9hcnJheVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sVUFBVSxPQUFPLENBQUksR0FBa0I7SUFDM0MsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7QUFDL0UsQ0FBQztBQUlELE1BQU0sVUFBVSxJQUFJLENBQUksR0FBa0I7SUFDeEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2QixDQUFDO0FBS0QsTUFBTSxVQUFVLEtBQUssQ0FBSSxLQUFpQztJQUN4RCxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsT0FBTztLQUNSO0lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNiLE1BQU0sS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQzdCO0lBRUQsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FBSSxLQUFVO0lBQ3pDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNoQyxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGVBQWUsQ0FBSSxLQUFVLEVBQUUsUUFBK0I7SUFDNUUsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ2hDLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQztJQUMxRSxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxNQUFNLFVBQVUsS0FBSyxDQUFJLEtBQVUsRUFBRSxJQUFZO0lBQy9DLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7UUFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hCO0lBRUQsTUFBTSxNQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUU7UUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUN2QztJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFVLEVBQ1YsUUFBNEIsRUFDNUIsUUFBMEIsS0FBSztJQUUvQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFJLEVBQUUsQ0FBSSxFQUFFLEVBQUU7UUFDL0IsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzdCLE9BQU8sS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQzthQUFNLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwQyxPQUFPLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxNQUFNLFVBQVUsUUFBUSxDQUFJLE1BQW9CLEVBQUUsTUFBb0I7SUFDcEUsSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUNsQyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzNCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUksS0FBbUIsRUFBRSxNQUFvQjtJQUNyRSxJQUFJLEtBQUssS0FBSyxNQUFNLEVBQUU7UUFDcEIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2hDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FBSSxLQUFtQixFQUFFLE1BQW9CO0lBQ25FLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtRQUNwQixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDaEMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUU1QyxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDM0MsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRTtZQUNuQyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMifQ==

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializeBox": () => (/* binding */ serializeBox)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _vlq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);



function serializeBox(box) {
    return (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.concatBytes)((0,_vlq__WEBPACK_IMPORTED_MODULE_1__.vqlEncodeBigInt)((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.ensureBigInt)(box.value)), (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.hexToBytes)(box.ergoTree), (0,_vlq__WEBPACK_IMPORTED_MODULE_1__.vlqEncode)(box.creationHeight), serializeTokens(box.assets), serializeRegisters(box.additionalRegisters), (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.hexToBytes)(box.transactionId), (0,_vlq__WEBPACK_IMPORTED_MODULE_1__.vlqEncode)(box.index));
}
function serializeTokens(tokens) {
    if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(tokens)) {
        return Uint8Array.from([0]);
    }
    return (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.concatBytes)((0,_vlq__WEBPACK_IMPORTED_MODULE_1__.vlqEncode)(tokens.length), ...tokens.map((asset) => (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.concatBytes)((0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.hexToBytes)(asset.tokenId), (0,_vlq__WEBPACK_IMPORTED_MODULE_1__.vqlEncodeBigInt)((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.ensureBigInt)(asset.amount)))));
}
function serializeRegisters(registers) {
    let keys = Object.keys(registers);
    if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(keys)) {
        return Uint8Array.from([0]);
    }
    const serializedRegisters = [];
    keys = keys.sort();
    for (const key of keys) {
        const val = registers[key];
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.isDefined)(val)) {
            serializedRegisters.push((0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.hexToBytes)(val));
        }
    }
    return (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.concatBytes)((0,_vlq__WEBPACK_IMPORTED_MODULE_1__.vlqEncode)(serializedRegisters.length), (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.concatBytes)(...serializedRegisters));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94U2VyaWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJpYWxpemVyL3NpZ21hL2JveFNlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUVwRCxNQUFNLFVBQVUsWUFBWSxDQUFDLEdBQTBCO0lBQ3JELE9BQU8sV0FBVyxDQUNoQixlQUFlLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUN4QyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUN4QixTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUM3QixlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUMzQixrQkFBa0IsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsRUFDM0MsVUFBVSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFDN0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDckIsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLGVBQWUsQ0FBQyxNQUE2QjtJQUNwRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNuQixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdCO0lBRUQsT0FBTyxXQUFXLENBQ2hCLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQ3hCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ3RCLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLGVBQWUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDcEYsQ0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUMsU0FBZ0M7SUFDMUQsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNqQixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdCO0lBRUQsTUFBTSxtQkFBbUIsR0FBaUIsRUFBRSxDQUFDO0lBQzdDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkIsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7UUFDdEIsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQWtDLENBQUMsQ0FBQztRQUMxRCxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0M7S0FDRjtJQUVELE9BQU8sV0FBVyxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxXQUFXLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7QUFDakcsQ0FBQyJ9

/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vlqDecode": () => (/* binding */ vlqDecode),
/* harmony export */   "vlqDecodeBigInt": () => (/* binding */ vlqDecodeBigInt),
/* harmony export */   "vlqEncode": () => (/* binding */ vlqEncode),
/* harmony export */   "vqlEncodeBigInt": () => (/* binding */ vqlEncodeBigInt)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);

/**
 * A **variable-length quantity (VLQ)** is a universal code that uses an arbitrary number
 * of binary octets (eight-bit bytes) to represent an arbitrarily large integer. A VLQ
 * is essentially a base-128 representation of an unsigned integer with the addition of
 * the eighth bit to mark continuation of bytes. VLQ is identical to LEB128 except in
 * endianness. See the example below.
 */
/**
 * Decode VLQ bytes to an unsigned integer value
 * @param reader VLQ bytes
 * @returns Unsigned integer value
 */
function vlqEncode(value) {
    // source: https://stackoverflow.com/a/3564685
    if (value === 0) {
        return Uint8Array.from([0]);
    }
    else if (value < 0) {
        throw new RangeError("Variable Length Quantity not supported for negative numbers");
    }
    const bytes = [];
    do {
        let lower7bits = value & 0x7f;
        value >>= 7;
        if (value > 0) {
            lower7bits |= 0x80;
        }
        bytes.push(lower7bits);
    } while (value > 0);
    return Uint8Array.from(bytes);
}
/**
 * Decode VLQ bytes to an unsigned integer value
 * @param reader VLQ bytes
 * @returns Unsigned integer value
 */
function vlqDecode(reader) {
    if (reader.isEmpty) {
        return 0;
    }
    let value = 0;
    let shift = 0;
    let lower7bits = 0;
    do {
        lower7bits = reader.readByte();
        value |= (lower7bits & 0x7f) << shift;
        shift += 7;
    } while ((lower7bits & 0x80) != 0);
    return value;
}
/**
 * Encode a unsigned big integer to VLQ bytes
 * @param value unsigned bit integer
 * @returns VLQ bytes
 */
function vqlEncodeBigInt(value) {
    // source: https://stackoverflow.com/a/3564685
    if (value === _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._0n) {
        return Uint8Array.from([0]);
    }
    else if (value < _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._0n) {
        throw new RangeError("Variable Length Quantity not supported for negative numbers");
    }
    const bytes = [];
    do {
        let lower7bits = Number(value & _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._127n);
        value >>= _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._7n;
        if (value > 0) {
            lower7bits |= 0x80;
        }
        bytes.push(lower7bits);
    } while (value > 0);
    return Uint8Array.from(bytes);
}
/**
 * Decode VLQ bytes to an unsigned big integer value
 * @param reader VLQ bytes
 * @returns Unsigned integer value
 */
function vlqDecodeBigInt(reader) {
    if (reader.isEmpty) {
        return _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._0n;
    }
    let value = _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._0n;
    let shift = _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._0n;
    let lower7bits = _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._0n;
    do {
        lower7bits = BigInt(reader.readByte());
        value |= (lower7bits & _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._127n) << shift;
        shift += _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._7n;
    } while ((lower7bits & _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._128n) != _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._0n);
    return value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmxxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlcmlhbGl6ZXIvdmxxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUczRDs7Ozs7O0dBTUc7QUFFSDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLFNBQVMsQ0FBQyxLQUFhO0lBQ3JDLDhDQUE4QztJQUU5QyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7UUFDZixPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdCO1NBQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLE1BQU0sSUFBSSxVQUFVLENBQUMsNkRBQTZELENBQUMsQ0FBQztLQUNyRjtJQUVELE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNqQixHQUFHO1FBQ0QsSUFBSSxVQUFVLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztRQUM5QixLQUFLLEtBQUssQ0FBQyxDQUFDO1FBRVosSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsVUFBVSxJQUFJLElBQUksQ0FBQztTQUNwQjtRQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDeEIsUUFBUSxLQUFLLEdBQUcsQ0FBQyxFQUFFO0lBRXBCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxTQUFTLENBQUMsTUFBdUI7SUFDL0MsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7SUFFRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFFbkIsR0FBRztRQUNELFVBQVUsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDL0IsS0FBSyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQztRQUN0QyxLQUFLLElBQUksQ0FBQyxDQUFDO0tBQ1osUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFFbkMsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxlQUFlLENBQUMsS0FBYTtJQUMzQyw4Q0FBOEM7SUFFOUMsSUFBSSxLQUFLLEtBQUssR0FBRyxFQUFFO1FBQ2pCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDN0I7U0FBTSxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7UUFDdEIsTUFBTSxJQUFJLFVBQVUsQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO0tBQ3JGO0lBRUQsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLEdBQUc7UUFDRCxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssS0FBSyxHQUFHLENBQUM7UUFFZCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDYixVQUFVLElBQUksSUFBSSxDQUFDO1NBQ3BCO1FBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUN4QixRQUFRLEtBQUssR0FBRyxDQUFDLEVBQUU7SUFFcEIsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLGVBQWUsQ0FBQyxNQUF1QjtJQUNyRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDbEIsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUVELElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNoQixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDaEIsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDO0lBRXJCLEdBQUc7UUFDRCxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUM7UUFDdkMsS0FBSyxJQUFJLEdBQUcsQ0FBQztLQUNkLFFBQVEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFO0lBRXRDLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyJ9

/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DuplicateInputError": () => (/* binding */ DuplicateInputError)
/* harmony export */ });
class DuplicateInputError extends Error {
    constructor(boxId) {
        super(`Box '${boxId}' is already included.`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVwbGljYXRlSW5wdXRFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvZHVwbGljYXRlSW5wdXRFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsS0FBSztJQUM1QyxZQUFZLEtBQWE7UUFDdkIsS0FBSyxDQUFDLFFBQVEsS0FBSyx3QkFBd0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRiJ9

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundError": () => (/* binding */ NotFoundError)
/* harmony export */ });
class NotFoundError extends Error {
    constructor(message) {
        super(message);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90Rm91bmRFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvbm90Rm91bmRFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sYUFBYyxTQUFRLEtBQUs7SUFDdEMsWUFBWSxPQUFlO1FBQ3pCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQixDQUFDO0NBQ0YifQ==

/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutputsCollection": () => (/* binding */ OutputsCollection)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);



class OutputsCollection extends _collection__WEBPACK_IMPORTED_MODULE_0__.Collection {
    constructor(outputs) {
        super();
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__.isDefined)(outputs)) {
            this.add(outputs);
        }
    }
    _map(output) {
        return output;
    }
    remove(outputs) {
        let index = -1;
        if (typeof outputs === "number") {
            if (this._isIndexOutOfBounds(outputs)) {
                throw new RangeError(`Index '${outputs}' is out of range.`);
            }
            index = outputs;
        }
        else {
            index = this._items.lastIndexOf(outputs);
            if (this._isIndexOutOfBounds(index)) {
                throw new _errors__WEBPACK_IMPORTED_MODULE_2__.NotFoundError("The output you are trying to remove is not present in the outputs collection.");
            }
        }
        if (index > -1) {
            this._items.splice(index, 1);
        }
        return this.length;
    }
    clone() {
        return new OutputsCollection(this._items);
    }
    sum(basis) {
        const tokens = {};
        let nanoErgs = _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__._0n;
        if (basis) {
            if (basis.nanoErgs) {
                nanoErgs = basis.nanoErgs;
            }
            if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.some)(basis.tokens)) {
                for (const token of basis.tokens) {
                    if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(token.amount)) {
                        continue;
                    }
                    tokens[token.tokenId] = (tokens[token.tokenId] || _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__._0n) + token.amount;
                }
            }
        }
        for (const box of this._items) {
            nanoErgs += box.value;
            for (const token of box.tokens) {
                tokens[token.tokenId] = (tokens[token.tokenId] || _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__._0n) + token.amount;
            }
        }
        return {
            nanoErgs,
            tokens: Object.keys(tokens).map((tokenId) => ({ tokenId, amount: tokens[tokenId] }))
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0cHV0c0NvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kZWxzL2NvbGxlY3Rpb25zL291dHB1dHNDb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQWMsU0FBUyxFQUFFLFdBQVcsRUFBYSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUc3RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFMUMsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFVBQXdDO0lBQzdFLFlBQVksT0FBa0M7UUFDNUMsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUVTLElBQUksQ0FBQyxNQUFxQjtRQUNsQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBSU0sTUFBTSxDQUFDLE9BQStCO1FBQzNDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3JDLE1BQU0sSUFBSSxVQUFVLENBQUMsVUFBVSxPQUFPLG9CQUFvQixDQUFDLENBQUM7YUFDN0Q7WUFFRCxLQUFLLEdBQUcsT0FBTyxDQUFDO1NBQ2pCO2FBQU07WUFDTCxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFekMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ25DLE1BQU0sSUFBSSxhQUFhLENBQ3JCLCtFQUErRSxDQUNoRixDQUFDO2FBQ0g7U0FDRjtRQUVELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlCO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxLQUFLO1FBQ1YsT0FBTyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sR0FBRyxDQUFDLEtBQW9DO1FBQzdDLE1BQU0sTUFBTSxHQUFrQyxFQUFFLENBQUM7UUFDakQsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBRW5CLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUNsQixRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUMzQjtZQUVELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDdEIsS0FBSyxNQUFNLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUNoQyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7d0JBQzdCLFNBQVM7cUJBQ1Y7b0JBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztpQkFDdkU7YUFDRjtTQUNGO1FBRUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzdCLFFBQVEsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3RCLEtBQUssTUFBTSxLQUFLLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUN2RTtTQUNGO1FBRUQsT0FBTztZQUNMLFFBQVE7WUFDUixNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDckYsQ0FBQztJQUNKLENBQUM7Q0FDRiJ9

/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionBuilderSettings": () => (/* binding */ TransactionBuilderSettings)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);

class TransactionBuilderSettings {
    _maxDistinctTokensPerChangeBox;
    _allowTokenBurn;
    _allowTokenPluginFromPlugins;
    constructor() {
        this._maxDistinctTokensPerChangeBox = _models__WEBPACK_IMPORTED_MODULE_0__.MAX_TOKENS_PER_BOX;
        this._allowTokenBurn = false;
        this._allowTokenPluginFromPlugins = false;
    }
    get maxTokensPerChangeBox() {
        return this._maxDistinctTokensPerChangeBox;
    }
    get canBurnTokens() {
        return this._allowTokenBurn;
    }
    get canBurnTokensFromPlugins() {
        return this.canBurnTokens || this._allowTokenPluginFromPlugins;
    }
    /**
     * Define max number of distinct tokens per change box
     */
    setMaxTokensPerChangeBox(max) {
        this._maxDistinctTokensPerChangeBox = max;
        return this;
    }
    /**
     * Allows or denies token burning from all contexts
     */
    allowTokenBurning(allow) {
        this._allowTokenBurn = allow;
        return this;
    }
    /**
     * Allows or denies token burning **only** from plugins context.
     */
    allowTokenBurningFromPlugins(allow) {
        this._allowTokenPluginFromPlugins = allow;
        return this;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb25CdWlsZGVyU2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYnVpbGRlci90cmFuc2FjdGlvbkJ1aWxkZXJTZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFL0MsTUFBTSxPQUFPLDBCQUEwQjtJQUM3Qiw4QkFBOEIsQ0FBUztJQUN2QyxlQUFlLENBQVU7SUFDekIsNEJBQTRCLENBQVU7SUFFOUM7UUFDRSxJQUFJLENBQUMsOEJBQThCLEdBQUcsa0JBQWtCLENBQUM7UUFDekQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQztJQUM1QyxDQUFDO0lBRUQsSUFBVyxxQkFBcUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsOEJBQThCLENBQUM7SUFDN0MsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQVcsd0JBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsNEJBQTRCLENBQUM7SUFDakUsQ0FBQztJQUVEOztPQUVHO0lBQ0ksd0JBQXdCLENBQUMsR0FBVztRQUN6QyxJQUFJLENBQUMsOEJBQThCLEdBQUcsR0FBRyxDQUFDO1FBRTFDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOztPQUVHO0lBQ0ksaUJBQWlCLENBQUMsS0FBYztRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUU3QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7T0FFRztJQUNJLDRCQUE0QixDQUFDLEtBQWM7UUFDaEQsSUFBSSxDQUFDLDRCQUE0QixHQUFHLEtBQUssQ0FBQztRQUUxQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRiJ9

/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAX_TOKENS_PER_BOX": () => (/* binding */ MAX_TOKENS_PER_BOX),
/* harmony export */   "TokensCollection": () => (/* binding */ TokensCollection)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var _errors_insufficientTokenAmount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43);
/* harmony import */ var _errors_maxTokensOverflow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);






const MAX_TOKENS_PER_BOX = 120;
class TokensCollection extends _collection__WEBPACK_IMPORTED_MODULE_0__.Collection {
    constructor(tokens, options) {
        super();
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__.isDefined)(tokens)) {
            this.add(tokens, options);
        }
    }
    _map(token) {
        return { tokenId: token.tokenId, amount: (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.ensureBigInt)(token.amount) };
    }
    _addOne(token, options) {
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(options) || (options.sum && !(0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__.isDefined)(options.index))) {
            if (this._sum(this._map(token))) {
                return this.length;
            }
        }
        if (this._items.length >= MAX_TOKENS_PER_BOX) {
            throw new _errors_maxTokensOverflow__WEBPACK_IMPORTED_MODULE_3__.MaxTokensOverflow();
        }
        super._addOne(token, options);
        return this.length;
    }
    add(items, options) {
        return super.add(items, options);
    }
    _sum(token) {
        for (const t of this._items) {
            if (t.tokenId === token.tokenId) {
                t.amount += token.amount;
                return true;
            }
        }
        return false;
    }
    remove(tokenIdOrIndex, amount) {
        let index = -1;
        if (typeof tokenIdOrIndex === "number") {
            if (this._isIndexOutOfBounds(tokenIdOrIndex)) {
                throw new RangeError(`Index '${tokenIdOrIndex}' is out of range.`);
            }
            index = tokenIdOrIndex;
        }
        else {
            index = this._items.findIndex((token) => token.tokenId === tokenIdOrIndex);
            if (this._isIndexOutOfBounds(index)) {
                throw new _errors__WEBPACK_IMPORTED_MODULE_4__.NotFoundError(`TokenId '${tokenIdOrIndex}' not found in assets collection.`);
            }
        }
        if (amount && index > -1) {
            const bigAmount = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.ensureBigInt)(amount);
            const token = this._items[index];
            if (bigAmount > token.amount) {
                throw new _errors_insufficientTokenAmount__WEBPACK_IMPORTED_MODULE_5__.InsufficientTokenAmount(`Insufficient token amount to perform a subtraction operation.`);
            }
            else if (bigAmount < token.amount) {
                token.amount -= bigAmount;
                return this.length;
            }
        }
        if (index > -1) {
            this._items.splice(index, 1);
        }
        return this.length;
    }
    contains(tokenId) {
        return this._items.some((x) => x.tokenId === tokenId);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5zQ29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RlbHMvY29sbGVjdGlvbnMvdG9rZW5zQ29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQVUsU0FBUyxFQUFFLFdBQVcsRUFBbUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsVUFBVSxFQUF3QixNQUFNLGNBQWMsQ0FBQztBQUVoRSxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLENBQUM7QUFJdEMsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFVBQW9EO0lBS3hGLFlBQVksTUFBdUMsRUFBRSxPQUF5QjtRQUM1RSxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVrQixJQUFJLENBQUMsS0FBZ0Q7UUFDdEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDeEUsQ0FBQztJQUVrQixPQUFPLENBQ3hCLEtBQWdELEVBQ2hELE9BQXlCO1FBRXpCLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FB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

/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaxTokensOverflow": () => (/* binding */ MaxTokensOverflow)
/* harmony export */ });
/* harmony import */ var _models_collections_tokensCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);

class MaxTokensOverflow extends Error {
    constructor() {
        super(`A box must contain no more than ${_models_collections_tokensCollection__WEBPACK_IMPORTED_MODULE_0__.MAX_TOKENS_PER_BOX} distinct tokens.`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4VG9rZW5zT3ZlcmZsb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyb3JzL21heFRva2Vuc092ZXJmbG93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTVFLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxLQUFLO0lBQzFDO1FBQ0UsS0FBSyxDQUFDLG1DQUFtQyxrQkFBa0IsbUJBQW1CLENBQUMsQ0FBQztJQUNsRixDQUFDO0NBQ0YifQ==

/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsufficientTokenAmount": () => (/* binding */ InsufficientTokenAmount)
/* harmony export */ });
class InsufficientTokenAmount extends Error {
    constructor(message) {
        super(message);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdWZmaWNpZW50VG9rZW5BbW91bnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyb3JzL2luc3VmZmljaWVudFRva2VuQW1vdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxLQUFLO0lBQ2hELFlBQVksT0FBZTtRQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakIsQ0FBQztDQUNGIn0=

/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isHex": () => (/* binding */ isHex)
/* harmony export */ });
const HEX_PATTERN = /^[0-9A-Fa-f]+$/s;
function isHex(value) {
    if (!value) {
        return false;
    }
    return HEX_PATTERN.test(value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvc3RyaW5nVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxXQUFXLEdBQUcsaUJBQWlCLENBQUM7QUFFdEMsTUFBTSxVQUFVLEtBQUssQ0FBQyxLQUFjO0lBQ2xDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLENBQUMifQ==

/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErgoAddress": () => (/* binding */ ErgoAddress)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);
/* harmony import */ var _noble_hashes_blake2b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _scure_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _errors_invalidAddress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48);






const CHECKSUM_LENGTH = 4;
const BLAKE_256_HASH_LENGTH = 32;
const P2PK_ERGOTREE_PREFIX = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.hexToBytes)("0008cd");
const P2PK_ERGOTREE_LENGTH = 36;
const P2SH_ERGOTREE_SUFFIX = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.hexToBytes)("d40801");
const P2SH_ERGOTREE_PREFIX = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.hexToBytes)("00ea02d193b4cbe4e3010e040004300e18");
const P2SH_ERGOTREE_LENGTH = 44;
const P2SH_HASH_LENGTH = 24;
function _getEncodedNetworkType(addressBytes) {
    return (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.first)(addressBytes) & 0xf0;
}
function _getEncodedAddressType(addressBytes) {
    return (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.first)(addressBytes) & 0xf;
}
function _ensureBytes(content) {
    if (typeof content === "string") {
        return (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.hexToBytes)(content);
    }
    return content;
}
function blake2b256(input) {
    return (0,_noble_hashes_blake2b__WEBPACK_IMPORTED_MODULE_0__.blake2b)(input, { dkLen: BLAKE_256_HASH_LENGTH });
}
function _getErgoTreeType(ergoTree) {
    if (ergoTree.length === P2PK_ERGOTREE_LENGTH && (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.startsWith)(ergoTree, P2PK_ERGOTREE_PREFIX)) {
        return _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2PK;
    }
    else if (ergoTree.length === P2SH_ERGOTREE_LENGTH &&
        (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.startsWith)(ergoTree, P2SH_ERGOTREE_PREFIX) &&
        (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.endsWith)(ergoTree, P2SH_ERGOTREE_SUFFIX)) {
        return _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2SH;
    }
    else {
        return _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2S;
    }
}
/**
 * Ergo address model
 *
 * @example
 * Convert address to ErgoTree hex string
 * ```
 * const address = new Address("9eZ24iqjKywjzAti9RnWWTR3CiNnLJDAcd2MenKodcAfzc8AFTu");
 * console.log(address.ergoTree);
 * ```
 *
 * @example
 * Convert ErgoTree hex string to address string
 * ```
 * const ergoTree = "0008cd026dc059d64a50d0dbf07755c2c4a4e557e3df8afa7141868b3ab200643d437ee7"
 * const address = Address.fromErgoTree(ergoTree).toString();
 * ```
 */
class ErgoAddress {
    _ergoTree;
    _network;
    _type;
    get network() {
        return this._network;
    }
    /**
     * ErgoTree hex string
     */
    get ergoTree() {
        return (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.bytesToHex)(this._ergoTree);
    }
    get type() {
        return this._type;
    }
    /**
     * New instance from ErgoTree bytes
     * @param ergoTree ErgoTree bytes
     */
    constructor(ergoTree, network) {
        this._ergoTree = ergoTree;
        this._network = network;
        this._type = _getErgoTreeType(ergoTree);
    }
    /**
     * Create a new instance from an ErgoTree
     * @param ergoTree ErgoTree hex string
     */
    static fromErgoTree(ergoTree, network) {
        return new ErgoAddress((0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.hexToBytes)(ergoTree), network);
    }
    /**
     * Create a new instance from a public key
     * @param publicKey Public key hex string
     */
    static fromPublicKey(publicKey, network) {
        const ergoTree = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.concatBytes)(P2PK_ERGOTREE_PREFIX, _ensureBytes(publicKey));
        return new ErgoAddress(ergoTree, network);
    }
    static fromHash(hash, network) {
        hash = _ensureBytes(hash);
        if (hash.length === BLAKE_256_HASH_LENGTH) {
            hash = hash.subarray(0, P2SH_HASH_LENGTH);
        }
        else if (hash.length != P2SH_HASH_LENGTH) {
            throw Error(`Invalid hash length: ${hash.length}`);
        }
        const ergoTree = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.concatBytes)(P2SH_ERGOTREE_PREFIX, hash, P2SH_ERGOTREE_SUFFIX);
        return new ErgoAddress(ergoTree, network);
    }
    /**
     * Create a new checked instance from an address string
     * @param encodedAddress Address encoded as base58
     */
    static fromBase58(encodedAddress, skipCheck = false) {
        const bytes = _scure_base__WEBPACK_IMPORTED_MODULE_2__.base58.decode(encodedAddress);
        if (!skipCheck && !ErgoAddress.validate(bytes)) {
            throw new _errors_invalidAddress__WEBPACK_IMPORTED_MODULE_5__.InvalidAddress(encodedAddress);
        }
        const network = _getEncodedNetworkType(bytes);
        const type = _getEncodedAddressType(bytes);
        const body = bytes.subarray(1, bytes.length - CHECKSUM_LENGTH);
        if (type === _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2PK) {
            return this.fromPublicKey(body, network);
        }
        else if (type === _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2SH) {
            return this.fromHash(body, network);
        }
        else {
            return new ErgoAddress(body, network);
        }
    }
    /**
     * Validate an address
     * @param address Address bytes or string
     */
    static validate(address) {
        const bytes = typeof address === "string" ? _scure_base__WEBPACK_IMPORTED_MODULE_2__.base58.decode(address) : address;
        if (bytes.length < CHECKSUM_LENGTH) {
            return false;
        }
        const script = bytes.subarray(0, bytes.length - CHECKSUM_LENGTH);
        const checksum = bytes.subarray(bytes.length - CHECKSUM_LENGTH, bytes.length);
        const blakeHash = blake2b256(script);
        const calculatedChecksum = blakeHash.subarray(0, CHECKSUM_LENGTH);
        return (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.areEqual)(calculatedChecksum, checksum);
    }
    static getNetworkType(address) {
        return _getEncodedNetworkType(_scure_base__WEBPACK_IMPORTED_MODULE_2__.base58.decode(address));
    }
    static getAddressType(address) {
        return _getEncodedAddressType(_scure_base__WEBPACK_IMPORTED_MODULE_2__.base58.decode(address));
    }
    getPublicKeys() {
        if (this.type === _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2PK) {
            return [this._ergoTree.subarray(P2PK_ERGOTREE_PREFIX.length)];
        }
        return [];
    }
    toP2SH(network) {
        if (this.type === _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2SH) {
            return this.encode();
        }
        const hash = blake2b256(this._ergoTree).subarray(0, P2SH_HASH_LENGTH);
        return this._encode(hash, _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2SH, network);
    }
    /**
     * Encode address as base58 string
     */
    encode(network) {
        let body;
        if (this.type === _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2PK) {
            body = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.first)(this.getPublicKeys());
        }
        else if (this.type === _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2SH) {
            body = this._ergoTree.subarray(P2SH_ERGOTREE_PREFIX.length, P2SH_ERGOTREE_PREFIX.length + P2SH_HASH_LENGTH);
        }
        else {
            body = this._ergoTree;
        }
        return this._encode(body, this.type, network);
    }
    _encode(body, type, network) {
        if (!(0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_6__.isDefined)(network)) {
            if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_6__.isDefined)(this.network)) {
                network = this.network;
            }
            else {
                network = _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.Network.Mainnet;
            }
        }
        const head = Uint8Array.from([network + type]);
        body = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.concatBytes)(head, body);
        const checksum = blake2b256(body).subarray(0, CHECKSUM_LENGTH);
        return _scure_base__WEBPACK_IMPORTED_MODULE_2__.base58.encode((0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.concatBytes)(body, checksum));
    }
    /**
     * Encode address as base58 string
     */
    toString(network) {
        return this.encode(network);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJnb0FkZHJlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWxzL2VyZ29BZGRyZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQTJCLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTFELE1BQU0sZUFBZSxHQUFHLENBQUMsQ0FBQztBQUMxQixNQUFNLHFCQUFxQixHQUFHLEVBQUUsQ0FBQztBQUVqQyxNQUFNLG9CQUFvQixHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsRCxNQUFNLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztBQUVoQyxNQUFNLG9CQUFvQixHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsRCxNQUFNLG9CQUFvQixHQUFHLFVBQVUsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0FBQzlFLE1BQU0sb0JBQW9CLEdBQUcsRUFBRSxDQUFDO0FBQ2hDLE1BQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0FBRTVCLFNBQVMsc0JBQXNCLENBQUMsWUFBd0I7SUFDdEQsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3BDLENBQUM7QUFFRCxTQUFTLHNCQUFzQixDQUFDLFlBQXdCO0lBQ3RELE9BQU8sS0FBSyxDQUFDLFlBQVks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

/***/ }),
/* 46 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assertNumber": () => (/* binding */ assertNumber),
/* harmony export */   "base16": () => (/* binding */ base16),
/* harmony export */   "base32": () => (/* binding */ base32),
/* harmony export */   "base32crockford": () => (/* binding */ base32crockford),
/* harmony export */   "base32hex": () => (/* binding */ base32hex),
/* harmony export */   "base58": () => (/* binding */ base58),
/* harmony export */   "base58check": () => (/* binding */ base58check),
/* harmony export */   "base58flickr": () => (/* binding */ base58flickr),
/* harmony export */   "base58xmr": () => (/* binding */ base58xmr),
/* harmony export */   "base58xrp": () => (/* binding */ base58xrp),
/* harmony export */   "base64": () => (/* binding */ base64),
/* harmony export */   "base64url": () => (/* binding */ base64url),
/* harmony export */   "bech32": () => (/* binding */ bech32),
/* harmony export */   "bech32m": () => (/* binding */ bech32m),
/* harmony export */   "bytes": () => (/* binding */ bytes),
/* harmony export */   "bytesToString": () => (/* binding */ bytesToString),
/* harmony export */   "hex": () => (/* binding */ hex),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "stringToBytes": () => (/* binding */ stringToBytes),
/* harmony export */   "utf8": () => (/* binding */ utf8),
/* harmony export */   "utils": () => (/* binding */ utils)
/* harmony export */ });
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function assertNumber(n) {
    if (!Number.isSafeInteger(n))
        throw new Error(`Wrong integer: ${n}`);
}
function chain(...args) {
    const wrap = (a, b) => (c) => a(b(c));
    const encode = Array.from(args)
        .reverse()
        .reduce((acc, i) => (acc ? wrap(acc, i.encode) : i.encode), undefined);
    const decode = args.reduce((acc, i) => (acc ? wrap(acc, i.decode) : i.decode), undefined);
    return { encode, decode };
}
function alphabet(alphabet) {
    return {
        encode: (digits) => {
            if (!Array.isArray(digits) || (digits.length && typeof digits[0] !== 'number'))
                throw new Error('alphabet.encode input should be an array of numbers');
            return digits.map((i) => {
                assertNumber(i);
                if (i < 0 || i >= alphabet.length)
                    throw new Error(`Digit index outside alphabet: ${i} (alphabet: ${alphabet.length})`);
                return alphabet[i];
            });
        },
        decode: (input) => {
            if (!Array.isArray(input) || (input.length && typeof input[0] !== 'string'))
                throw new Error('alphabet.decode input should be array of strings');
            return input.map((letter) => {
                if (typeof letter !== 'string')
                    throw new Error(`alphabet.decode: not string element=${letter}`);
                const index = alphabet.indexOf(letter);
                if (index === -1)
                    throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet}`);
                return index;
            });
        },
    };
}
function join(separator = '') {
    if (typeof separator !== 'string')
        throw new Error('join separator should be string');
    return {
        encode: (from) => {
            if (!Array.isArray(from) || (from.length && typeof from[0] !== 'string'))
                throw new Error('join.encode input should be array of strings');
            for (let i of from)
                if (typeof i !== 'string')
                    throw new Error(`join.encode: non-string input=${i}`);
            return from.join(separator);
        },
        decode: (to) => {
            if (typeof to !== 'string')
                throw new Error('join.decode input should be string');
            return to.split(separator);
        },
    };
}
function padding(bits, chr = '=') {
    assertNumber(bits);
    if (typeof chr !== 'string')
        throw new Error('padding chr should be string');
    return {
        encode(data) {
            if (!Array.isArray(data) || (data.length && typeof data[0] !== 'string'))
                throw new Error('padding.encode input should be array of strings');
            for (let i of data)
                if (typeof i !== 'string')
                    throw new Error(`padding.encode: non-string input=${i}`);
            while ((data.length * bits) % 8)
                data.push(chr);
            return data;
        },
        decode(input) {
            if (!Array.isArray(input) || (input.length && typeof input[0] !== 'string'))
                throw new Error('padding.encode input should be array of strings');
            for (let i of input)
                if (typeof i !== 'string')
                    throw new Error(`padding.decode: non-string input=${i}`);
            let end = input.length;
            if ((end * bits) % 8)
                throw new Error('Invalid padding: string should have whole number of bytes');
            for (; end > 0 && input[end - 1] === chr; end--) {
                if (!(((end - 1) * bits) % 8))
                    throw new Error('Invalid padding: string has too much padding');
            }
            return input.slice(0, end);
        },
    };
}
function normalize(fn) {
    if (typeof fn !== 'function')
        throw new Error('normalize fn should be function');
    return { encode: (from) => from, decode: (to) => fn(to) };
}
function convertRadix(data, from, to) {
    if (from < 2)
        throw new Error(`convertRadix: wrong from=${from}, base cannot be less than 2`);
    if (to < 2)
        throw new Error(`convertRadix: wrong to=${to}, base cannot be less than 2`);
    if (!Array.isArray(data))
        throw new Error('convertRadix: data should be array');
    if (!data.length)
        return [];
    let pos = 0;
    const res = [];
    const digits = Array.from(data);
    digits.forEach((d) => {
        assertNumber(d);
        if (d < 0 || d >= from)
            throw new Error(`Wrong integer: ${d}`);
    });
    while (true) {
        let carry = 0;
        let done = true;
        for (let i = pos; i < digits.length; i++) {
            const digit = digits[i];
            const digitBase = from * carry + digit;
            if (!Number.isSafeInteger(digitBase) ||
                (from * carry) / from !== carry ||
                digitBase - digit !== from * carry) {
                throw new Error('convertRadix: carry overflow');
            }
            carry = digitBase % to;
            digits[i] = Math.floor(digitBase / to);
            if (!Number.isSafeInteger(digits[i]) || digits[i] * to + carry !== digitBase)
                throw new Error('convertRadix: carry overflow');
            if (!done)
                continue;
            else if (!digits[i])
                pos = i;
            else
                done = false;
        }
        res.push(carry);
        if (done)
            break;
    }
    for (let i = 0; i < data.length - 1 && data[i] === 0; i++)
        res.push(0);
    return res.reverse();
}
const gcd = (a, b) => (!b ? a : gcd(b, a % b));
const radix2carry = (from, to) => from + (to - gcd(from, to));
function convertRadix2(data, from, to, padding) {
    if (!Array.isArray(data))
        throw new Error('convertRadix2: data should be array');
    if (from <= 0 || from > 32)
        throw new Error(`convertRadix2: wrong from=${from}`);
    if (to <= 0 || to > 32)
        throw new Error(`convertRadix2: wrong to=${to}`);
    if (radix2carry(from, to) > 32) {
        throw new Error(`convertRadix2: carry overflow from=${from} to=${to} carryBits=${radix2carry(from, to)}`);
    }
    let carry = 0;
    let pos = 0;
    const mask = 2 ** to - 1;
    const res = [];
    for (const n of data) {
        assertNumber(n);
        if (n >= 2 ** from)
            throw new Error(`convertRadix2: invalid data word=${n} from=${from}`);
        carry = (carry << from) | n;
        if (pos + from > 32)
            throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from}`);
        pos += from;
        for (; pos >= to; pos -= to)
            res.push(((carry >> (pos - to)) & mask) >>> 0);
        carry &= 2 ** pos - 1;
    }
    carry = (carry << (to - pos)) & mask;
    if (!padding && pos >= from)
        throw new Error('Excess padding');
    if (!padding && carry)
        throw new Error(`Non-zero padding: ${carry}`);
    if (padding && pos > 0)
        res.push(carry >>> 0);
    return res;
}
function radix(num) {
    assertNumber(num);
    return {
        encode: (bytes) => {
            if (!(bytes instanceof Uint8Array))
                throw new Error('radix.encode input should be Uint8Array');
            return convertRadix(Array.from(bytes), 2 ** 8, num);
        },
        decode: (digits) => {
            if (!Array.isArray(digits) || (digits.length && typeof digits[0] !== 'number'))
                throw new Error('radix.decode input should be array of strings');
            return Uint8Array.from(convertRadix(digits, num, 2 ** 8));
        },
    };
}
function radix2(bits, revPadding = false) {
    assertNumber(bits);
    if (bits <= 0 || bits > 32)
        throw new Error('radix2: bits should be in (0..32]');
    if (radix2carry(8, bits) > 32 || radix2carry(bits, 8) > 32)
        throw new Error('radix2: carry overflow');
    return {
        encode: (bytes) => {
            if (!(bytes instanceof Uint8Array))
                throw new Error('radix2.encode input should be Uint8Array');
            return convertRadix2(Array.from(bytes), 8, bits, !revPadding);
        },
        decode: (digits) => {
            if (!Array.isArray(digits) || (digits.length && typeof digits[0] !== 'number'))
                throw new Error('radix2.decode input should be array of strings');
            return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
        },
    };
}
function unsafeWrapper(fn) {
    if (typeof fn !== 'function')
        throw new Error('unsafeWrapper fn should be function');
    return function (...args) {
        try {
            return fn.apply(null, args);
        }
        catch (e) { }
    };
}
function checksum(len, fn) {
    assertNumber(len);
    if (typeof fn !== 'function')
        throw new Error('checksum fn should be function');
    return {
        encode(data) {
            if (!(data instanceof Uint8Array))
                throw new Error('checksum.encode: input should be Uint8Array');
            const checksum = fn(data).slice(0, len);
            const res = new Uint8Array(data.length + len);
            res.set(data);
            res.set(checksum, data.length);
            return res;
        },
        decode(data) {
            if (!(data instanceof Uint8Array))
                throw new Error('checksum.decode: input should be Uint8Array');
            const payload = data.slice(0, -len);
            const newChecksum = fn(payload).slice(0, len);
            const oldChecksum = data.slice(-len);
            for (let i = 0; i < len; i++)
                if (newChecksum[i] !== oldChecksum[i])
                    throw new Error('Invalid checksum');
            return payload;
        },
    };
}
const utils = { alphabet, chain, checksum, radix, radix2, join, padding };
const base16 = chain(radix2(4), alphabet('0123456789ABCDEF'), join(''));
const base32 = chain(radix2(5), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'), padding(5), join(''));
const base32hex = chain(radix2(5), alphabet('0123456789ABCDEFGHIJKLMNOPQRSTUV'), padding(5), join(''));
const base32crockford = chain(radix2(5), alphabet('0123456789ABCDEFGHJKMNPQRSTVWXYZ'), join(''), normalize((s) => s.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1')));
const base64 = chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'), padding(6), join(''));
const base64url = chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'), padding(6), join(''));
const genBase58 = (abc) => chain(radix(58), alphabet(abc), join(''));
const base58 = genBase58('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
const base58flickr = genBase58('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ');
const base58xrp = genBase58('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz');
const XMR_BLOCK_LEN = [0, 2, 3, 5, 6, 7, 9, 10, 11];
const base58xmr = {
    encode(data) {
        let res = '';
        for (let i = 0; i < data.length; i += 8) {
            const block = data.subarray(i, i + 8);
            res += base58.encode(block).padStart(XMR_BLOCK_LEN[block.length], '1');
        }
        return res;
    },
    decode(str) {
        let res = [];
        for (let i = 0; i < str.length; i += 11) {
            const slice = str.slice(i, i + 11);
            const blockLen = XMR_BLOCK_LEN.indexOf(slice.length);
            const block = base58.decode(slice);
            for (let j = 0; j < block.length - blockLen; j++) {
                if (block[j] !== 0)
                    throw new Error('base58xmr: wrong padding');
            }
            res = res.concat(Array.from(block.slice(block.length - blockLen)));
        }
        return Uint8Array.from(res);
    },
};
const base58check = (sha256) => chain(checksum(4, (data) => sha256(sha256(data))), base58);
const BECH_ALPHABET = chain(alphabet('qpzry9x8gf2tvdw0s3jn54khce6mua7l'), join(''));
const POLYMOD_GENERATORS = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
function bech32Polymod(pre) {
    const b = pre >> 25;
    let chk = (pre & 0x1ffffff) << 5;
    for (let i = 0; i < POLYMOD_GENERATORS.length; i++) {
        if (((b >> i) & 1) === 1)
            chk ^= POLYMOD_GENERATORS[i];
    }
    return chk;
}
function bechChecksum(prefix, words, encodingConst = 1) {
    const len = prefix.length;
    let chk = 1;
    for (let i = 0; i < len; i++) {
        const c = prefix.charCodeAt(i);
        if (c < 33 || c > 126)
            throw new Error(`Invalid prefix (${prefix})`);
        chk = bech32Polymod(chk) ^ (c >> 5);
    }
    chk = bech32Polymod(chk);
    for (let i = 0; i < len; i++)
        chk = bech32Polymod(chk) ^ (prefix.charCodeAt(i) & 0x1f);
    for (let v of words)
        chk = bech32Polymod(chk) ^ v;
    for (let i = 0; i < 6; i++)
        chk = bech32Polymod(chk);
    chk ^= encodingConst;
    return BECH_ALPHABET.encode(convertRadix2([chk % 2 ** 30], 30, 5, false));
}
function genBech32(encoding) {
    const ENCODING_CONST = encoding === 'bech32' ? 1 : 0x2bc830a3;
    const _words = radix2(5);
    const fromWords = _words.decode;
    const toWords = _words.encode;
    const fromWordsUnsafe = unsafeWrapper(fromWords);
    function encode(prefix, words, limit = 90) {
        if (typeof prefix !== 'string')
            throw new Error(`bech32.encode prefix should be string, not ${typeof prefix}`);
        if (!Array.isArray(words) || (words.length && typeof words[0] !== 'number'))
            throw new Error(`bech32.encode words should be array of numbers, not ${typeof words}`);
        const actualLength = prefix.length + 7 + words.length;
        if (limit !== false && actualLength > limit)
            throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
        prefix = prefix.toLowerCase();
        return `${prefix}1${BECH_ALPHABET.encode(words)}${bechChecksum(prefix, words, ENCODING_CONST)}`;
    }
    function decode(str, limit = 90) {
        if (typeof str !== 'string')
            throw new Error(`bech32.decode input should be string, not ${typeof str}`);
        if (str.length < 8 || (limit !== false && str.length > limit))
            throw new TypeError(`Wrong string length: ${str.length} (${str}). Expected (8..${limit})`);
        const lowered = str.toLowerCase();
        if (str !== lowered && str !== str.toUpperCase())
            throw new Error(`String must be lowercase or uppercase`);
        str = lowered;
        const sepIndex = str.lastIndexOf('1');
        if (sepIndex === 0 || sepIndex === -1)
            throw new Error(`Letter "1" must be present between prefix and data only`);
        const prefix = str.slice(0, sepIndex);
        const _words = str.slice(sepIndex + 1);
        if (_words.length < 6)
            throw new Error('Data must be at least 6 characters long');
        const words = BECH_ALPHABET.decode(_words).slice(0, -6);
        const sum = bechChecksum(prefix, words, ENCODING_CONST);
        if (!_words.endsWith(sum))
            throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
        return { prefix, words };
    }
    const decodeUnsafe = unsafeWrapper(decode);
    function decodeToBytes(str) {
        const { prefix, words } = decode(str, false);
        return { prefix, words, bytes: fromWords(words) };
    }
    return { encode, decode, decodeToBytes, decodeUnsafe, fromWords, fromWordsUnsafe, toWords };
}
const bech32 = genBech32('bech32');
const bech32m = genBech32('bech32m');
const utf8 = {
    encode: (data) => new TextDecoder().decode(data),
    decode: (str) => new TextEncoder().encode(str),
};
const hex = chain(radix2(4), alphabet('0123456789abcdef'), join(''), normalize((s) => {
    if (typeof s !== 'string' || s.length % 2)
        throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
    return s.toLowerCase();
}));
const CODERS = {
    utf8, hex, base16, base32, base64, base64url, base58, base58xmr
};
const coderTypeError = `Invalid encoding type. Available types: ${Object.keys(CODERS).join(', ')}`;
const bytesToString = (type, bytes) => {
    if (typeof type !== 'string' || !CODERS.hasOwnProperty(type))
        throw new TypeError(coderTypeError);
    if (!(bytes instanceof Uint8Array))
        throw new TypeError('bytesToString() expects Uint8Array');
    return CODERS[type].encode(bytes);
};
const str = bytesToString;
const stringToBytes = (type, str) => {
    if (!CODERS.hasOwnProperty(type))
        throw new TypeError(coderTypeError);
    if (typeof str !== 'string')
        throw new TypeError('stringToBytes() expects string');
    return CODERS[type].decode(str);
};
const bytes = stringToBytes;


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressType": () => (/* binding */ AddressType),
/* harmony export */   "Network": () => (/* binding */ Network)
/* harmony export */ });
var Network;
(function (Network) {
    Network[Network["Mainnet"] = 0] = "Mainnet";
    Network[Network["Testnet"] = 16] = "Testnet";
})(Network || (Network = {}));
var AddressType;
(function (AddressType) {
    AddressType[AddressType["P2PK"] = 1] = "P2PK";
    AddressType[AddressType["P2SH"] = 2] = "P2SH";
    AddressType[AddressType["P2S"] = 3] = "P2S";
})(AddressType || (AddressType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3R5cGVzL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQSxNQUFNLENBQU4sSUFBWSxPQUdYO0FBSEQsV0FBWSxPQUFPO0lBQ2pCLDJDQUFnQixDQUFBO0lBQ2hCLDRDQUFnQixDQUFBO0FBQ2xCLENBQUMsRUFIVyxPQUFPLEtBQVAsT0FBTyxRQUdsQjtBQUVELE1BQU0sQ0FBTixJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDckIsNkNBQVEsQ0FBQTtJQUNSLDZDQUFRLENBQUE7SUFDUiwyQ0FBTyxDQUFBO0FBQ1QsQ0FBQyxFQUpXLFdBQVcsS0FBWCxXQUFXLFFBSXRCIn0=

/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvalidAddress": () => (/* binding */ InvalidAddress)
/* harmony export */ });
class InvalidAddress extends Error {
    constructor(address) {
        super(`Invalid Ergo address: ${address}`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZEFkZHJlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyb3JzL2ludmFsaWRBZGRyZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxjQUFlLFNBQVEsS0FBSztJQUN2QyxZQUFZLE9BQWU7UUFDekIsS0FBSyxDQUFDLHlCQUF5QixPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDRiJ9

/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPluginContext": () => (/* binding */ createPluginContext)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);

function createPluginContext(transactionBuilder) {
    return {
        addInputs: (inputs) => transactionBuilder
            .from(inputs)
            .configureSelector((selector) => selector.ensureInclusion(Array.isArray(inputs) ? inputs.map((input) => input.boxId) : inputs.boxId)).inputs.length,
        addOutputs: (outputs, options) => transactionBuilder.to(outputs, options).outputs.length,
        addDataInputs: (dataInputs, options) => transactionBuilder.withDataFrom(dataInputs, options).dataInputs.length,
        burnTokens: (tokens) => {
            if (!transactionBuilder.settings.canBurnTokensFromPlugins) {
                throw new ___WEBPACK_IMPORTED_MODULE_0__.NotAllowedTokenBurning();
            }
            transactionBuilder.burnTokens(tokens);
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luQ29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idWlsZGVyL3BsdWdpbkNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLHNCQUFzQixFQUFxQyxNQUFNLElBQUksQ0FBQztBQW9DL0UsTUFBTSxVQUFVLG1CQUFtQixDQUFDLGtCQUFzQztJQUN4RSxPQUFPO1FBQ0wsU0FBUyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FDcEIsa0JBQWtCO2FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNaLGlCQUFpQixDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FDOUIsUUFBUSxDQUFDLGVBQWUsQ0FDdEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUMxRSxDQUNGLENBQUMsTUFBTSxDQUFDLE1BQU07UUFDbkIsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTTtRQUN4RixhQUFhLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FDckMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTTtRQUN4RSxVQUFVLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLHdCQUF3QixFQUFFO2dCQUN6RCxNQUFNLElBQUksc0JBQXNCLEVBQUUsQ0FBQzthQUNwQztZQUNELGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUMifQ==

/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotAllowedTokenBurning": () => (/* binding */ NotAllowedTokenBurning)
/* harmony export */ });
class NotAllowedTokenBurning extends Error {
    constructor() {
        super("This transaction is trying to burn tokens. If that's your intention you must explicitly allow token burning on TransactionBuilder.configure() method. If no, a change address should be provided.");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90QWxsb3dlZFRva2VuQnVybmluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvbm90QWxsb3dlZFRva2VuQnVybmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsS0FBSztJQUMvQztRQUNFLEtBQUssQ0FDSCxtTUFBbU0sQ0FDcE0sQ0FBQztJQUNKLENBQUM7Q0FDRiJ9

/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MalformedTransaction": () => (/* binding */ MalformedTransaction)
/* harmony export */ });
class MalformedTransaction extends Error {
    constructor(message) {
        super(`Malformed transaction: ${message}`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFsZm9ybWVkVHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyb3JzL21hbGZvcm1lZFRyYW5zYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxLQUFLO0lBQzdDLFlBQVksT0FBZTtRQUN6QixLQUFLLENBQUMsMEJBQTBCLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGIn0=

/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonStandardizedMinting": () => (/* binding */ NonStandardizedMinting)
/* harmony export */ });
class NonStandardizedMinting extends Error {
    constructor(message) {
        super(message);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uU3RhbmRhcmRpemVkTWludGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvbm9uU3RhbmRhcmRpemVkTWludGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsS0FBSztJQUMvQyxZQUFZLE9BQWU7UUFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLENBQUM7Q0FDRiJ9

/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutputBuilder": () => (/* binding */ OutputBuilder),
/* harmony export */   "SAFE_MIN_BOX_VALUE": () => (/* binding */ SAFE_MIN_BOX_VALUE)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34);
/* harmony import */ var _scure_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _errors_invalidRegistersPacking__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55);
/* harmony import */ var _errors_undefinedCreationHeight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(66);
/* harmony import */ var _errors_undefinedMintingContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45);
/* harmony import */ var _models_collections_tokensCollection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _serializer_sigma_constantSerializer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57);
/* harmony import */ var _serializer_sigma_sigmaTypes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(65);










const SAFE_MIN_BOX_VALUE = BigInt(1000000);
class OutputBuilder {
    _value;
    _address;
    _tokens;
    _creationHeight;
    _registers;
    _minting;
    constructor(value, recipient, creationHeight) {
        this._value = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__.ensureBigInt)(value);
        this._creationHeight = creationHeight;
        this._tokens = new _models_collections_tokensCollection__WEBPACK_IMPORTED_MODULE_2__.TokensCollection();
        this._registers = {};
        if (this._value <= _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__._0n) {
            throw new Error("An UTxO cannot be created without a minimum required amount.");
        }
        if (typeof recipient === "string") {
            this._address = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.isHex)(recipient)
                ? _models__WEBPACK_IMPORTED_MODULE_5__.ErgoAddress.fromErgoTree(recipient)
                : _models__WEBPACK_IMPORTED_MODULE_5__.ErgoAddress.fromBase58(recipient);
        }
        else {
            this._address = recipient;
        }
    }
    get value() {
        return this._value;
    }
    get address() {
        return this._address;
    }
    get ergoTree() {
        return this._address.ergoTree;
    }
    get creationHeight() {
        return this._creationHeight;
    }
    get tokens() {
        return this._tokens;
    }
    get additionalRegisters() {
        return this._registers;
    }
    get minting() {
        return this._minting;
    }
    addTokens(tokens, options) {
        if (tokens instanceof _models_collections_tokensCollection__WEBPACK_IMPORTED_MODULE_2__.TokensCollection) {
            this._tokens.add(tokens.toArray(), options);
        }
        else {
            this._tokens.add(tokens, options);
        }
        return this;
    }
    mintToken(token) {
        this._minting = { ...token, amount: (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__.ensureBigInt)(token.amount) };
        return this;
    }
    setCreationHeight(height, options) {
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_6__.isUndefined)(options) ||
            options.replace === true ||
            (options.replace === false && (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_6__.isUndefined)(this._creationHeight))) {
            this._creationHeight = height;
        }
        return this;
    }
    setAdditionalRegisters(registers) {
        this._registers = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_6__.removeUndefined)(registers);
        if (!(0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_7__.areRegistersDenselyPacked)(registers)) {
            throw new _errors_invalidRegistersPacking__WEBPACK_IMPORTED_MODULE_8__.InvalidRegistersPacking();
        }
        return this;
    }
    eject(ejector) {
        ejector({ tokens: this._tokens });
        return this;
    }
    build(transactionInputs) {
        let tokens = this.tokens.toArray();
        if (this.minting) {
            if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.isEmpty)(transactionInputs)) {
                throw new _errors_undefinedMintingContext__WEBPACK_IMPORTED_MODULE_10__.UndefinedMintingContext();
            }
            if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.isEmpty)(this.additionalRegisters)) {
                this.setAdditionalRegisters({
                    R4: (0,_serializer_sigma_constantSerializer__WEBPACK_IMPORTED_MODULE_11__.SConstant)((0,_serializer_sigma_sigmaTypes__WEBPACK_IMPORTED_MODULE_12__.SColl)(_serializer_sigma_sigmaTypes__WEBPACK_IMPORTED_MODULE_12__.SByte, (0,_scure_base__WEBPACK_IMPORTED_MODULE_0__.stringToBytes)("utf8", this.minting.name || ""))),
                    R5: (0,_serializer_sigma_constantSerializer__WEBPACK_IMPORTED_MODULE_11__.SConstant)((0,_serializer_sigma_sigmaTypes__WEBPACK_IMPORTED_MODULE_12__.SColl)(_serializer_sigma_sigmaTypes__WEBPACK_IMPORTED_MODULE_12__.SByte, (0,_scure_base__WEBPACK_IMPORTED_MODULE_0__.stringToBytes)("utf8", this.minting.description || ""))),
                    R6: (0,_serializer_sigma_constantSerializer__WEBPACK_IMPORTED_MODULE_11__.SConstant)((0,_serializer_sigma_sigmaTypes__WEBPACK_IMPORTED_MODULE_12__.SColl)(_serializer_sigma_sigmaTypes__WEBPACK_IMPORTED_MODULE_12__.SByte, (0,_scure_base__WEBPACK_IMPORTED_MODULE_0__.stringToBytes)("utf8", this.minting.decimals?.toString() || "0")))
                });
            }
            tokens = [
                {
                    tokenId: (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.first)(transactionInputs).boxId,
                    amount: this.minting.amount
                },
                ...tokens
            ];
        }
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_6__.isUndefined)(this.creationHeight)) {
            throw new _errors_undefinedCreationHeight__WEBPACK_IMPORTED_MODULE_13__.UndefinedCreationHeight();
        }
        return {
            value: this.value.toString(),
            ergoTree: this.ergoTree,
            creationHeight: this.creationHeight,
            assets: tokens.map((token) => {
                return {
                    tokenId: token.tokenId,
                    amount: token.amount.toString()
                };
            }),
            additionalRegisters: this.additionalRegisters
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0cHV0QnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idWlsZGVyL291dHB1dEJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLEdBQUcsRUFXSixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIsWUFBWSxFQUNaLEtBQUssRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2hCLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3hDLE9BQU8sRUFBbUIsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMzRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFbEQsTUFBTSxPQUFPLGFBQWE7SUFDUCxNQUFNLENBQVM7SUFDZixRQUFRLENBQWM7SUFDdEIsT0FBTyxDQUFtQjtJQUNuQyxlQUFlLENBQVU7SUFDekIsVUFBVSxDQUF3QjtJQUNsQyxRQUFRLENBQW9CO0lBRXBDLFlBQ0UsS0FBYSxFQUNiLFNBQWdELEVBQ2hELGNBQXVCO1FBRXZCLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxD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

/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areRegistersDenselyPacked": () => (/* binding */ areRegistersDenselyPacked),
/* harmony export */   "utxoSum": () => (/* binding */ utxoSum)
/* harmony export */ });
/* harmony import */ var _bigIntLiterals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _bigIntUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _objectUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);



const NANOERGS_TOKEN_ID = "nanoErgs";
function utxoSum(boxes, tokenId) {
    const balances = {};
    for (const box of boxes) {
        if ((0,_objectUtils__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(tokenId) || tokenId === NANOERGS_TOKEN_ID) {
            balances[NANOERGS_TOKEN_ID] = (balances[NANOERGS_TOKEN_ID] || _bigIntLiterals__WEBPACK_IMPORTED_MODULE_1__._0n) + (0,_bigIntUtils__WEBPACK_IMPORTED_MODULE_2__.ensureBigInt)(box.value);
        }
        if (tokenId !== NANOERGS_TOKEN_ID) {
            for (const token of box.assets) {
                if ((0,_objectUtils__WEBPACK_IMPORTED_MODULE_0__.isDefined)(tokenId) && tokenId !== token.tokenId) {
                    continue;
                }
                balances[token.tokenId] = (balances[token.tokenId] || _bigIntLiterals__WEBPACK_IMPORTED_MODULE_1__._0n) + (0,_bigIntUtils__WEBPACK_IMPORTED_MODULE_2__.ensureBigInt)(token.amount);
            }
        }
    }
    if ((0,_objectUtils__WEBPACK_IMPORTED_MODULE_0__.isDefined)(tokenId)) {
        return balances[tokenId] || _bigIntLiterals__WEBPACK_IMPORTED_MODULE_1__._0n;
    }
    return {
        nanoErgs: balances[NANOERGS_TOKEN_ID],
        tokens: Object.keys(balances)
            .filter((x) => x !== NANOERGS_TOKEN_ID)
            .map((tokenId) => ({ tokenId, amount: balances[tokenId] }))
    };
}
const MIN_REGISTER_NUMBER = 4;
const MAX_REGISTER_NUMBER = 9;
function areRegistersDenselyPacked(registers) {
    let lastValueIndex = 0;
    for (let i = MIN_REGISTER_NUMBER; i <= MAX_REGISTER_NUMBER; i++) {
        if (registers[`R${i}`]) {
            if (i === MIN_REGISTER_NUMBER) {
                lastValueIndex = i;
                continue;
            }
            if (i - lastValueIndex > 1) {
                return false;
            }
            lastValueIndex = i;
        }
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94VXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvYm94VXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkQsTUFBTSxpQkFBaUIsR0FBRyxVQUFVLENBQUM7QUFJckMsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUErQixFQUFFLE9BQWlCO0lBQ3hFLE1BQU0sUUFBUSxHQUFrQyxFQUFFLENBQUM7SUFFbkQsS0FBSyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDdkIsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxLQUFLLGlCQUFpQixFQUFFO1lBQ3pELFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5RjtRQUVELElBQUksT0FBTyxLQUFLLGlCQUFpQixFQUFFO1lBQ2pDLEtBQUssTUFBTSxLQUFLLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDOUIsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUU7b0JBQ25ELFNBQVM7aUJBQ1Y7Z0JBRUQsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN6RjtTQUNGO0tBQ0Y7SUFFRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUN0QixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUM7S0FDakM7SUFFRCxPQUFPO1FBQ0wsUUFBUSxFQUFFLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztRQUNyQyxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDMUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssaUJBQWlCLENBQUM7YUFDdEMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzlELENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFDOUIsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUFFOUIsTUFBTSxVQUFVLHlCQUF5QixDQUFDLFNBQWdDO0lBQ3hFLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztJQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLG1CQUFtQixFQUFFLENBQUMsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMvRCxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBaUMsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxLQUFLLG1CQUFtQixFQUFFO2dCQUM3QixjQUFjLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixTQUFTO2FBQ1Y7WUFFRCxJQUFJLENBQUMsR0FBRyxjQUFjLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQsY0FBYyxHQUFHLENBQUMsQ0FBQztTQUNwQjtLQUNGO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIn0=

/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvalidRegistersPacking": () => (/* binding */ InvalidRegistersPacking)
/* harmony export */ });
class InvalidRegistersPacking extends Error {
    constructor() {
        super(`Registers should be densely packed. This means that it's not possible to use a register like 'R7' without filling 'R6', 'R5' and 'R4', for example.`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZFJlZ2lzdGVyc1BhY2tpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyb3JzL2ludmFsaWRSZWdpc3RlcnNQYWNraW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxLQUFLO0lBQ2hEO1FBQ0UsS0FBSyxDQUNILHFKQUFxSixDQUN0SixDQUFDO0lBQ0osQ0FBQztDQUNGIn0=

/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UndefinedMintingContext": () => (/* binding */ UndefinedMintingContext)
/* harmony export */ });
class UndefinedMintingContext extends Error {
    constructor() {
        super("Creation Height is undefined.");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5kZWZpbmVkTWludGluZ0NvbnRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyb3JzL3VuZGVmaW5lZE1pbnRpbmdDb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxLQUFLO0lBQ2hEO1FBQ0UsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNGIn0=

/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAX_CONSTANT_CONTENT_LENGTH": () => (/* binding */ MAX_CONSTANT_CONTENT_LENGTH),
/* harmony export */   "MAX_CONSTANT_LENGTH": () => (/* binding */ MAX_CONSTANT_LENGTH),
/* harmony export */   "MAX_CONSTANT_TYPES_LENGTH": () => (/* binding */ MAX_CONSTANT_TYPES_LENGTH),
/* harmony export */   "SConstant": () => (/* binding */ SConstant),
/* harmony export */   "SParse": () => (/* binding */ SParse)
/* harmony export */ });
/* harmony import */ var _dataSerializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _sigmaByteReader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64);
/* harmony import */ var _sigmaByteWriter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _typeSerializer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);




const MAX_CONSTANT_TYPES_LENGTH = 100;
const MAX_CONSTANT_CONTENT_LENGTH = 4096;
const MAX_CONSTANT_LENGTH = MAX_CONSTANT_TYPES_LENGTH + MAX_CONSTANT_CONTENT_LENGTH;
function SConstant(content) {
    const writer = new _sigmaByteWriter__WEBPACK_IMPORTED_MODULE_0__.SigmaByteWriter(MAX_CONSTANT_LENGTH);
    _typeSerializer__WEBPACK_IMPORTED_MODULE_1__.TypeSerializer.serialize(content, writer);
    _dataSerializer__WEBPACK_IMPORTED_MODULE_2__.DataSerializer.serialize(content, writer);
    return writer.toHex();
}
function SParse(content) {
    const reader = new _sigmaByteReader__WEBPACK_IMPORTED_MODULE_3__.SigmaByteReader(content);
    const type = reader.readType();
    return _dataSerializer__WEBPACK_IMPORTED_MODULE_2__.DataSerializer.deserialize(type, reader);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRTZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcmlhbGl6ZXIvc2lnbWEvY29uc3RhbnRTZXJpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRCxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRyxHQUFHLENBQUM7QUFDN0MsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSxDQUFDO0FBQ2hELE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLHlCQUF5QixHQUFHLDJCQUEyQixDQUFDO0FBRTNGLE1BQU0sVUFBVSxTQUFTLENBQUMsT0FBbUI7SUFDM0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFlLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUV4RCxjQUFjLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxQyxjQUFjLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUUxQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN4QixDQUFDO0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FBSSxPQUErQjtJQUN2RCxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFL0IsT0FBTyxjQUFjLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLENBQU0sQ0FBQztBQUN2RCxDQUFDIn0=

/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigmaByteWriter": () => (/* binding */ SigmaByteWriter)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _vlq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _zigZag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);




class SigmaByteWriter {
    _bytes;
    _cursor;
    get length() {
        return this._cursor;
    }
    constructor(maxLength) {
        this._bytes = new Uint8Array(maxLength);
        this._cursor = 0;
    }
    writeBoolean(value) {
        this.write(value === true ? 0x01 : 0x00);
        return this;
    }
    writeBooleans(elements) {
        for (let i = 0; i < elements.length; i++) {
            this.writeBoolean(elements[i]);
        }
        return this;
    }
    writeNumber(value) {
        this.writeBytes((0,_vlq__WEBPACK_IMPORTED_MODULE_1__.vlqEncode)((0,_zigZag__WEBPACK_IMPORTED_MODULE_2__.zigZagEncode)(value)));
        return this;
    }
    writeLong(value) {
        this.writeBytes((0,_vlq__WEBPACK_IMPORTED_MODULE_1__.vqlEncodeBigInt)((0,_zigZag__WEBPACK_IMPORTED_MODULE_2__.zigZagEncodeBigInt)(value)));
        return this;
    }
    write(byte) {
        this._bytes[this._cursor++] = byte;
        return this;
    }
    writeBytes(bytes) {
        this._bytes.set(bytes, this._cursor);
        this._cursor += bytes.length;
        return this;
    }
    writeHex(hex) {
        if (hex.length % 2) {
            throw new Error("Invalid hex padding");
        }
        for (let i = 0; i < hex.length / 2; i++) {
            const j = i * 2;
            const byte = Number.parseInt(hex.slice(j, j + 2), 16);
            if (Number.isNaN(byte) || byte < 0) {
                throw new Error("Invalid byte sequence");
            }
            this.write(byte);
        }
        return this;
    }
    writeBits(bits) {
        let bitOffset = 0;
        for (let i = 0; i < bits.length; i++) {
            if (bits[i]) {
                this._bytes[this._cursor] |= 1 << bitOffset++;
            }
            else {
                this._bytes[this._cursor] &= ~(1 << bitOffset++);
            }
            if (bitOffset == 8) {
                bitOffset = 0;
                this._cursor++;
            }
        }
        if (bitOffset > 0) {
            this._cursor++;
        }
        return this;
    }
    writeBigInt(number) {
        // todo: take a look at https://coolaj86.com/articles/convert-decimal-to-hex-with-js-bigints/
        // and https://coolaj86.com/articles/convert-hex-to-decimal-with-js-bigints/
        if (number < _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__._0n) {
            throw new Error("Negative BigInt values are not supported Fleet serializer.");
        }
        let hex = number.toString(16);
        if (hex.length % 2) {
            hex = "0" + hex;
        }
        else if (Number.parseInt(hex.substring(0, 1), 16) >= 8) {
            // maximum positive need to prepend 0 otherwise results in negative number
            hex = "00" + hex;
        }
        this.writeBytes((0,_vlq__WEBPACK_IMPORTED_MODULE_1__.vlqEncode)(hex.length / 2));
        this.writeHex(hex);
        return this;
    }
    toHex() {
        return (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.bytesToHex)(this._bytes.subarray(0, this._cursor));
    }
    toBytes() {
        return this._bytes.subarray(0, this._cursor);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbWFCeXRlV3JpdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcmlhbGl6ZXIvc2lnbWEvc2lnbWFCeXRlV3JpdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU3RCxNQUFNLE9BQU8sZUFBZTtJQUNsQixNQUFNLENBQWM7SUFDcEIsT0FBTyxDQUFVO0lBRXpCLElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsWUFBWSxTQUFpQjtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFTSxZQUFZLENBQUMsS0FBYztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sYUFBYSxDQUFDLFFBQW1CO1FBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7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

/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zigZagDecode": () => (/* binding */ zigZagDecode),
/* harmony export */   "zigZagDecodeBigInt": () => (/* binding */ zigZagDecodeBigInt),
/* harmony export */   "zigZagEncode": () => (/* binding */ zigZagEncode),
/* harmony export */   "zigZagEncodeBigInt": () => (/* binding */ zigZagEncodeBigInt)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);

/**
 * ZigZag encoding maps signed integers to unsigned integers so that numbers
 * with a small absolute value (for instance, -1) have a small variant encoded
 * value too. It does this in a way that "zig-zags" back and forth through the
 * positive and negative integers, so that -1 is encoded as 1, 1 is encoded as 2,
 * -2 is encoded as 3, and so on.
 * @see https://developers.google.com/protocol-buffers/docs/encoding#types
 */
/**
 * Encode a signed integer.
 * @param input Signed integer
 * @returns ZigZag-encoded value
 */
function zigZagEncode(input) {
    return (input << 1) ^ (input >> 63);
}
/**
 * Decode a ZigZag-encoded value.
 * @param input ZigZag-encoded value
 * @returns Signed integer
 */
function zigZagDecode(input) {
    return (input >> 1) ^ -(input & 1);
}
/**
 * Encode a signed big integer.
 * @param input Signed big integer
 * @returns ZigZag-encoded value
 */
function zigZagEncodeBigInt(input) {
    return (input << _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._1n) ^ (input >> _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._63n);
}
/**
 * Decode a ZigZag-encoded value.
 * @param input ZigZag-encoded value
 * @returns Signed big integer
 */
function zigZagDecodeBigInt(input) {
    return (input >> _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._1n) ^ -(input & _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._1n);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlnWmFnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlcmlhbGl6ZXIvemlnWmFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFOUM7Ozs7Ozs7R0FPRztBQUVIOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUFDLEtBQWE7SUFDeEMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxZQUFZLENBQUMsS0FBYTtJQUN4QyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsS0FBYTtJQUM5QyxPQUFPLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEtBQWE7SUFDOUMsT0FBTyxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLENBQUMifQ==

/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeSerializer": () => (/* binding */ TypeSerializer)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

class TypeSerializer {
    static serialize(value, buffer) {
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isPrimitiveType)(value)) {
            buffer.write(value.type);
        }
        else if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isColl)(value)) {
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isEmbeddableTypeCode)(value.elementsType)) {
                buffer.write(value.type + value.elementsType);
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZVNlcmlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2VyaWFsaXplci9zaWdtYS90eXBlU2VyaWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUV4RSxNQUFNLE9BQU8sY0FBYztJQUNsQixNQUFNLENBQUMsU0FBUyxDQUFDLEtBQWlCLEVBQUUsTUFBdUI7UUFDaEUsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7YUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QixJQUFJLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDNUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMvQztTQUNGO0lBQ0gsQ0FBQztDQUNGIn0=

/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isColl": () => (/* binding */ isColl),
/* harmony export */   "isConstructorTypeCode": () => (/* binding */ isConstructorTypeCode),
/* harmony export */   "isEmbeddableTypeCode": () => (/* binding */ isEmbeddableTypeCode),
/* harmony export */   "isPrimitiveType": () => (/* binding */ isPrimitiveType),
/* harmony export */   "isPrimitiveTypeCode": () => (/* binding */ isPrimitiveTypeCode)
/* harmony export */ });
function isPrimitiveType(data) {
    return !isConstructorTypeCode(data.type);
}
function isColl(data) {
    return data.type >= 0x0c && data.type <= 0x23;
}
function isEmbeddableTypeCode(typeCode) {
    return typeCode >= 0x01 && typeCode <= 0x0b;
}
function isPrimitiveTypeCode(typeCode) {
    return !isConstructorTypeCode(typeCode);
}
function isConstructorTypeCode(type) {
    return type >= 0x0c && type <= 0x60;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2VyaWFsaXplci9zaWdtYS91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLFVBQVUsZUFBZSxDQUFJLElBQWdCO0lBQ2pELE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUVELE1BQU0sVUFBVSxNQUFNLENBQUksSUFBZ0I7SUFDeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUNoRCxDQUFDO0FBRUQsTUFBTSxVQUFVLG9CQUFvQixDQUFDLFFBQWdCO0lBQ25ELE9BQU8sUUFBUSxJQUFJLElBQUksSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDO0FBQzlDLENBQUM7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsUUFBdUI7SUFDekQsT0FBTyxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQUMsSUFBbUI7SUFDdkQsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUM7QUFDdEMsQ0FBQyJ9

/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSerializer": () => (/* binding */ DataSerializer)
/* harmony export */ });
/* harmony import */ var _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _vlq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);




class DataSerializer {
    static serialize(data, buffer) {
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isPrimitiveType)(data)) {
            switch (data.type) {
                case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.Boolean:
                    buffer.writeBoolean(data.value);
                    break;
                case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.Byte:
                    buffer.write(data.value);
                    break;
                case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.Short:
                case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.Int:
                    buffer.writeNumber(data.value);
                    break;
                case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.Long:
                    buffer.writeLong(data.value);
                    break;
                case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.BigInt: {
                    buffer.writeBigInt(data.value);
                    break;
                }
                case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.GroupElement:
                    buffer.writeBytes(data.value);
                    break;
                case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.SigmaProp: {
                    const node = data.value;
                    if (node.type === _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.GroupElement) {
                        buffer.write(0xcd); // CreateProveDlog operation
                        DataSerializer.serialize(node, buffer);
                    }
                    else {
                        throw Error("Not implemented");
                    }
                    break;
                }
                case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.Unit: // same as void, don't need to save anything
                    break;
                // case SigmaTypeCode.Box:
                default:
                    throw Error("Not implemented");
            }
        }
        else if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isColl)(data)) {
            if (typeof data.value === "string") {
                buffer.writeBytes((0,_vlq__WEBPACK_IMPORTED_MODULE_3__.vlqEncode)(data.value.length / 2));
            }
            else {
                buffer.writeBytes((0,_vlq__WEBPACK_IMPORTED_MODULE_3__.vlqEncode)(data.value.length));
            }
            switch (data.elementsType) {
                case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.Boolean:
                    buffer.writeBits(data.value);
                    break;
                case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.Byte: {
                    let bytes;
                    if (typeof data.value === "string") {
                        bytes = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.hexToBytes)(data.value);
                    }
                    else {
                        bytes = Uint8Array.from(data.value);
                    }
                    buffer.writeBytes(bytes);
                    break;
                }
                default:
                    for (let i = 0; i < data.value.length; i++) {
                        DataSerializer.serialize({ value: data.value[i], type: data.elementsType }, buffer);
                    }
            }
        }
        else {
            throw Error("Not implemented");
        }
    }
    static deserialize(typeCode, reader) {
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isPrimitiveTypeCode)(typeCode)) {
            switch (typeCode) {
                case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.Boolean:
                    return reader.readBoolean();
                case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.Byte:
                    return reader.readByte();
                case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.Short:
                case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.Int:
                    return reader.readNumber();
                case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.Long:
                    return reader.readLong();
                // case SigmaTypeCode.BigInt:
                // case SigmaTypeCode.GroupElement:
                // case SigmaTypeCode.SigmaProp:
                // case SigmaTypeCode.Unit:
                // case SigmaTypeCode.Box:
                // default:
                //   break;
            }
        }
        throw new Error("Type parsing not yet implemented.");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YVNlcmlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2VyaWFsaXplci9zaWdtYS9kYXRhU2VyaWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUduQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFaEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFdkUsTUFBTSxPQUFPLGNBQWM7SUFDbEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFnQixFQUFFLE1BQXVCO1FBQy9ELElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pCLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDakIsS0FBSyxhQUFhLENBQUMsT0FBTztvQkFDeEIsTUFBTSxDQUFDLFlBQVksQ0FBRSxJQUFxQyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsRSxNQUFNO2dCQUNSLEtBQUssYUFBYSxDQUFDLElBQUk7b0JBQ3JCLE1BQU0sQ0FBQyxLQUFLLENBQUUsSUFBb0MsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDMUQsTUFBTTtnQkFDUixLQUFLLGFBQWEsQ0FBQyxLQUFLLENBQUM7Z0JBQ3pCLEtBQUssYUFBYSxDQUFDLEdBQUc7b0JBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUUsSUFBb0MsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEUsTUFBTTtnQkFDUixLQUFLLGFBQWEsQ0FBQyxJQUFJO29CQUNyQixNQUFNLENBQUMsU0FBUyxDQUFFLElBQW9DLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzlELE1BQU07Z0JBQ1IsS0FBSyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7b0JB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

/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigmaTypeCode": () => (/* binding */ SigmaTypeCode)
/* harmony export */ });
var SigmaTypeCode;
(function (SigmaTypeCode) {
    SigmaTypeCode[SigmaTypeCode["Boolean"] = 1] = "Boolean";
    SigmaTypeCode[SigmaTypeCode["Byte"] = 2] = "Byte";
    SigmaTypeCode[SigmaTypeCode["Short"] = 3] = "Short";
    SigmaTypeCode[SigmaTypeCode["Int"] = 4] = "Int";
    SigmaTypeCode[SigmaTypeCode["Long"] = 5] = "Long";
    SigmaTypeCode[SigmaTypeCode["BigInt"] = 6] = "BigInt";
    SigmaTypeCode[SigmaTypeCode["GroupElement"] = 7] = "GroupElement";
    SigmaTypeCode[SigmaTypeCode["SigmaProp"] = 8] = "SigmaProp";
    SigmaTypeCode[SigmaTypeCode["Coll"] = 12] = "Coll";
    SigmaTypeCode[SigmaTypeCode["NestedColl"] = 24] = "NestedColl";
    SigmaTypeCode[SigmaTypeCode["Option"] = 36] = "Option";
    SigmaTypeCode[SigmaTypeCode["OptionColl"] = 48] = "OptionColl";
    SigmaTypeCode[SigmaTypeCode["Tuple2"] = 60] = "Tuple2";
    SigmaTypeCode[SigmaTypeCode["Tuple3"] = 72] = "Tuple3";
    SigmaTypeCode[SigmaTypeCode["Tuple4"] = 84] = "Tuple4";
    SigmaTypeCode[SigmaTypeCode["TupleN"] = 96] = "TupleN";
    SigmaTypeCode[SigmaTypeCode["Any"] = 97] = "Any";
    SigmaTypeCode[SigmaTypeCode["Unit"] = 98] = "Unit";
    SigmaTypeCode[SigmaTypeCode["Box"] = 99] = "Box";
    SigmaTypeCode[SigmaTypeCode["AvlTree"] = 100] = "AvlTree";
    SigmaTypeCode[SigmaTypeCode["Context"] = 101] = "Context";
    SigmaTypeCode[SigmaTypeCode["Header"] = 104] = "Header";
    SigmaTypeCode[SigmaTypeCode["PreHeader"] = 105] = "PreHeader";
    SigmaTypeCode[SigmaTypeCode["Global"] = 106] = "Global";
})(SigmaTypeCode || (SigmaTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbWFUeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJpYWxpemVyL3NpZ21hL3NpZ21hVHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFOLElBQVksYUF5Qlg7QUF6QkQsV0FBWSxhQUFhO0lBQ3ZCLHVEQUFjLENBQUE7SUFDZCxpREFBVyxDQUFBO0lBQ1gsbURBQVksQ0FBQTtJQUNaLCtDQUFVLENBQUE7SUFDVixpREFBVyxDQUFBO0lBQ1gscURBQWEsQ0FBQTtJQUNiLGlFQUFtQixDQUFBO0lBQ25CLDJEQUFnQixDQUFBO0lBQ2hCLGtEQUFXLENBQUE7SUFDWCw4REFBaUIsQ0FBQTtJQUNqQixzREFBYSxDQUFBO0lBQ2IsOERBQWlCLENBQUE7SUFDakIsc0RBQWEsQ0FBQTtJQUNiLHNEQUFhLENBQUE7SUFDYixzREFBYSxDQUFBO0lBQ2Isc0RBQWEsQ0FBQTtJQUNiLGdEQUFVLENBQUE7SUFDVixrREFBVyxDQUFBO0lBQ1gsZ0RBQVUsQ0FBQTtJQUNWLHlEQUFjLENBQUE7SUFDZCx5REFBYyxDQUFBO0lBQ2QsdURBQWEsQ0FBQTtJQUNiLDZEQUFnQixDQUFBO0lBQ2hCLHVEQUFhLENBQUE7QUFDZixDQUFDLEVBekJXLGFBQWEsS0FBYixhQUFhLFFBeUJ4QiJ9

/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigmaByteReader": () => (/* binding */ SigmaByteReader)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _vlq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _zigZag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);




class SigmaByteReader {
    _bytes;
    _cursor;
    get isEmpty() {
        return (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(this._bytes);
    }
    constructor(bytes) {
        if (typeof bytes === "string") {
            this._bytes = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.hexToBytes)(bytes);
        }
        else {
            this._bytes = bytes;
        }
        this._cursor = 0;
    }
    readBoolean() {
        return this.readByte() === 0x01;
    }
    readByte() {
        return this._bytes[this._cursor++];
    }
    readType() {
        return this.readByte();
    }
    readNumber() {
        return Number((0,_zigZag__WEBPACK_IMPORTED_MODULE_2__.zigZagDecode)((0,_vlq__WEBPACK_IMPORTED_MODULE_3__.vlqDecode)(this)));
    }
    readLong() {
        return (0,_zigZag__WEBPACK_IMPORTED_MODULE_2__.zigZagDecodeBigInt)((0,_vlq__WEBPACK_IMPORTED_MODULE_3__.vlqDecodeBigInt)(this));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbWFCeXRlUmVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcmlhbGl6ZXIvc2lnbWEvc2lnbWFCeXRlUmVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUc3RCxNQUFNLE9BQU8sZUFBZTtJQUNsQixNQUFNLENBQWM7SUFDcEIsT0FBTyxDQUFVO0lBRXpCLElBQVcsT0FBTztRQUNoQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFlBQVksS0FBNkI7UUFDdkMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVNLFdBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFTSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLFVBQVU7UUFDZixPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sUUFBUTtRQUNiLE9BQU8sa0JBQWtCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNGIn0=

/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SBigInt": () => (/* binding */ SBigInt),
/* harmony export */   "SBool": () => (/* binding */ SBool),
/* harmony export */   "SByte": () => (/* binding */ SByte),
/* harmony export */   "SColl": () => (/* binding */ SColl),
/* harmony export */   "SGroupElement": () => (/* binding */ SGroupElement),
/* harmony export */   "SInt": () => (/* binding */ SInt),
/* harmony export */   "SLong": () => (/* binding */ SLong),
/* harmony export */   "SShort": () => (/* binding */ SShort),
/* harmony export */   "SSigmaProp": () => (/* binding */ SSigmaProp),
/* harmony export */   "SUnit": () => (/* binding */ SUnit)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);


function SByte(value) {
    return _createPrimitiveType(_sigmaTypeCode__WEBPACK_IMPORTED_MODULE_0__.SigmaTypeCode.Byte, value);
}
function SBool(value) {
    return _createPrimitiveType(_sigmaTypeCode__WEBPACK_IMPORTED_MODULE_0__.SigmaTypeCode.Boolean, value);
}
function SShort(value) {
    return _createPrimitiveType(_sigmaTypeCode__WEBPACK_IMPORTED_MODULE_0__.SigmaTypeCode.Short, value);
}
function SInt(value) {
    return _createPrimitiveType(_sigmaTypeCode__WEBPACK_IMPORTED_MODULE_0__.SigmaTypeCode.Int, value);
}
function SLong(value) {
    return _createPrimitiveType(_sigmaTypeCode__WEBPACK_IMPORTED_MODULE_0__.SigmaTypeCode.Long, (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__.isDefined)(value) ? (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.ensureBigInt)(value) : undefined);
}
function SBigInt(value) {
    return _createPrimitiveType(_sigmaTypeCode__WEBPACK_IMPORTED_MODULE_0__.SigmaTypeCode.BigInt, (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__.isDefined)(value) ? (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.ensureBigInt)(value) : undefined);
}
function SUnit() {
    return _createPrimitiveType(_sigmaTypeCode__WEBPACK_IMPORTED_MODULE_0__.SigmaTypeCode.Unit, null);
}
function SGroupElement(value) {
    return _createPrimitiveType(_sigmaTypeCode__WEBPACK_IMPORTED_MODULE_0__.SigmaTypeCode.GroupElement, value);
}
function SSigmaProp(value) {
    return _createPrimitiveType(_sigmaTypeCode__WEBPACK_IMPORTED_MODULE_0__.SigmaTypeCode.SigmaProp, value);
}
function _createPrimitiveType(type, value) {
    if (value !== undefined) {
        return { type, value };
    }
    else {
        return type;
    }
}
function SColl(type, elements) {
    return {
        type: _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_0__.SigmaTypeCode.Coll,
        elementsType: type(),
        value: elements
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbWFUeXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJpYWxpemVyL3NpZ21hL3NpZ21hVHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFpQmhELE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBYztJQUNsQyxPQUFPLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDekQsQ0FBQztBQUlELE1BQU0sVUFBVSxLQUFLLENBQUMsS0FBZTtJQUNuQyxPQUFPLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUQsQ0FBQztBQUlELE1BQU0sVUFBVSxNQUFNLENBQUMsS0FBYztJQUNuQyxPQUFPLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUlELE1BQU0sVUFBVSxJQUFJLENBQUMsS0FBYztJQUNqQyxPQUFPLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDeEQsQ0FBQztBQUlELE1BQU0sVUFBVSxLQUFLLENBQ25CLEtBQWdDO0lBRWhDLE9BQU8sb0JBQW9CLENBQ3pCLGFBQWEsQ0FBQyxJQUFJLEVBQ2xCLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQ25ELENBQUM7QUFDSixDQUFDO0FBSUQsTUFBTSxVQUFVLE9BQU8sQ0FBQyxLQUF1QjtJQUM3QyxPQUFPLG9CQUFvQixDQUN6QixhQUFhLENBQUMsTUFBTSxFQUNwQixTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUNuRCxDQUFDO0FBQ0osQ0FBQztBQUlELE1BQU0sVUFBVSxLQUFLO0lBQ25CLE9BQU8sb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBSUQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFrQjtJQUM5QyxPQUFPLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDakUsQ0FBQztBQUlELE1BQU0sVUFBVSxVQUFVLENBQ3hCLEtBQXVDO0lBRXZDLE9BQU8sb0JBQW9CLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBRUQsU0FBUyxvQkFBb0IsQ0FDM0IsSUFBbUIsRUFDbkIsS0FBUztJQUVULElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtRQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0tBQ3hCO1NBQU07UUFDTCxPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxLQUFLLENBQUksSUFBeUIsRUFBRSxRQUFzQjtJQUN4RSxPQUFPO1FBQ0wsSUFBSSxFQUFFLGFBQWEsQ0FBQyxJQUFJO1FBQ3hCLFlBQVksRUFBRSxJQUFJLEVBQUU7UUFDcEIsS0FBSyxFQUFFLFFBQVE7S0FDaEIsQ0FBQztBQUNKLENBQUMifQ==

/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UndefinedCreationHeight": () => (/* binding */ UndefinedCreationHeight)
/* harmony export */ });
class UndefinedCreationHeight extends Error {
    constructor() {
        super("Minting context is undefined. Transaction's inputs must be included in order to determine minting token id.");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5kZWZpbmVkQ3JlYXRpb25IZWlnaHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyb3JzL3VuZGVmaW5lZENyZWF0aW9uSGVpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxLQUFLO0lBQ2hEO1FBQ0UsS0FBSyxDQUNILDZHQUE2RyxDQUM5RyxDQUFDO0lBQ0osQ0FBQztDQUNGIn0=

/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxSelector": () => (/* binding */ BoxSelector)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);
/* harmony import */ var _errors_duplicateInputSelectionError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70);
/* harmony import */ var _errors_insufficientInputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71);
/* harmony import */ var _strategies_accumulativeSelectionStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var _strategies_customSelectionStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);






class BoxSelector {
    _inputs;
    _strategy;
    _ensureFilterPredicate;
    _inputsSortSelector;
    _inputsSortDir;
    _ensureInclusionBoxIds;
    constructor(inputs) {
        this._inputs = inputs;
    }
    defineStrategy(strategy) {
        if (this._isISelectionStrategyImplementation(strategy)) {
            this._strategy = strategy;
        }
        else {
            this._strategy = new _strategies_customSelectionStrategy__WEBPACK_IMPORTED_MODULE_0__.CustomSelectionStrategy(strategy);
        }
        return this;
    }
    select(target) {
        if (!this._strategy) {
            this._strategy = new _strategies_accumulativeSelectionStrategy__WEBPACK_IMPORTED_MODULE_1__.AccumulativeSelectionStrategy();
        }
        const remaining = this._deepCloneTarget(target);
        let unselected = [...this._inputs];
        let selected = [];
        const predicate = this._ensureFilterPredicate;
        const inclusion = this._ensureInclusionBoxIds;
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isDefined)(predicate)) {
            if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isDefined)(inclusion)) {
                selected = unselected.filter((box) => predicate(box) || inclusion.has(box.boxId));
            }
            else {
                selected = unselected.filter(predicate);
            }
        }
        else if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isDefined)(inclusion)) {
            selected = unselected.filter((box) => inclusion.has(box.boxId));
        }
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isDefined)(selected)) {
            unselected = unselected.filter((box) => !selected.some((sel) => sel.boxId === box.boxId));
            if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isDefined)(remaining.nanoErgs)) {
                remaining.nanoErgs -= (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.sumBy)(selected, (input) => input.value);
            }
            if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isDefined)(remaining.tokens) && selected.some((input) => !(0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(input.assets))) {
                for (const tokenTarget of remaining.tokens) {
                    if (tokenTarget.amount) {
                        tokenTarget.amount -= (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_5__.utxoSum)(selected, tokenTarget.tokenId);
                    }
                }
            }
        }
        unselected = this._sort(unselected);
        selected = selected.concat(this._strategy.select(unselected, remaining));
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.hasDuplicatesBy)(selected, (item) => item.boxId)) {
            throw new _errors_duplicateInputSelectionError__WEBPACK_IMPORTED_MODULE_6__.DuplicateInputSelectionError();
        }
        const unreached = this._getUnreachedTargets(selected, target);
        if (unreached.nanoErgs || (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.some)(unreached.tokens)) {
            throw new _errors_insufficientInputs__WEBPACK_IMPORTED_MODULE_7__.InsufficientInputs(unreached);
        }
        return selected;
    }
    _deepCloneTarget(target) {
        return {
            nanoErgs: target.nanoErgs,
            tokens: (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isDefined)(target.tokens)
                ? target.tokens.map((t) => ({ tokenId: t.tokenId, amount: t.amount }))
                : undefined
        };
    }
    _getUnreachedTargets(inputs, target) {
        const unreached = { nanoErgs: undefined, tokens: undefined };
        const selectedNanoergs = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.sumBy)(inputs, (input) => input.value);
        if (target.nanoErgs && target.nanoErgs > selectedNanoergs) {
            unreached.nanoErgs = target.nanoErgs - selectedNanoergs;
        }
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(target.tokens)) {
            return unreached;
        }
        for (const tokenTarget of target.tokens) {
            const totalSelected = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_5__.utxoSum)(inputs, tokenTarget.tokenId);
            if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isDefined)(tokenTarget.amount) && tokenTarget.amount > totalSelected) {
                if (tokenTarget.tokenId === (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.first)(inputs).boxId) {
                    continue;
                }
                if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(unreached.tokens)) {
                    unreached.tokens = [];
                }
                unreached.tokens.push({
                    tokenId: tokenTarget.tokenId,
                    amount: tokenTarget.amount - totalSelected
                });
            }
        }
        return unreached;
    }
    _sort(inputs) {
        if (!this._inputsSortSelector) {
            return (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.orderBy)(inputs, (input) => input.creationHeight, "asc");
        }
        return (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.orderBy)(inputs, this._inputsSortSelector, this._inputsSortDir || "asc");
    }
    ensureInclusion(predicateOrBoxIds) {
        if (typeof predicateOrBoxIds === "function") {
            this._ensureFilterPredicate = predicateOrBoxIds;
        }
        else {
            if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(this._ensureInclusionBoxIds)) {
                this._ensureInclusionBoxIds = new Set();
            }
            if (Array.isArray(predicateOrBoxIds)) {
                for (const boxId of predicateOrBoxIds) {
                    this._ensureInclusionBoxIds.add(boxId);
                }
            }
            else {
                this._ensureInclusionBoxIds.add(predicateOrBoxIds);
            }
        }
        return this;
    }
    orderBy(selector, direction) {
        this._inputsSortSelector = selector;
        this._inputsSortDir = direction;
        return this;
    }
    _isISelectionStrategyImplementation(obj) {
        if (obj.select) {
            return true;
        }
        return false;
    }
    static buildTargetFrom(boxes) {
        const tokens = {};
        let nanoErgs = _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__._0n;
        for (const box of boxes) {
            nanoErgs += (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.ensureBigInt)(box.value);
            for (const token of box.assets) {
                tokens[token.tokenId] = (tokens[token.tokenId] || _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__._0n) + (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.ensureBigInt)(token.amount);
            }
        }
        return {
            nanoErgs,
            tokens: Object.keys(tokens).map((tokenId) => ({ tokenId, amount: tokens[tokenId] }))
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94U2VsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYnVpbGRlci9zZWxlY3Rvci9ib3hTZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBTUwsS0FBSyxFQUNMLFdBQVcsRUFLWixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFDTCxHQUFHLEVBQ0gsWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBQ1QsT0FBTyxFQUNQLE9BQU8sRUFDUCxJQUFJLEVBQ0osS0FBSyxFQUNMLE9BQU8sRUFDUixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx1QkFBdUIsRUFBb0IsTUFBTSxzQ0FBc0MsQ0FBQztBQUlqRyxNQUFNLE9BQU8sV0FBVztJQUNMLE9BQU8sQ0FBZ0I7SUFDaEMsU0FBUyxDQUFzQjtJQUMvQixzQkFBc0IsQ0FBZ0M7SUFDdEQsbUJBQW1CLENBQWdDO0lBQ25ELGNBQWMsQ0FBb0I7SUFDbEMsc0JBQXNCLENBQWM7SUFFNUMsWUFBWSxNQUFXO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxjQUFjLENBQUMsUUFBK0M7UUFDbkUsSUFBSSxJQUFJLENBQUMsbUNBQW1DLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7U0FDM0I7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN4RDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLE1B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ekM7WUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRTtnQkFDcEMsS0FBSyxNQUFNLEtBQUssSUFBSSxpQkFBaUIsRUFBRTtvQkFDckMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDeEM7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDcEQ7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLE9BQU8sQ0FDWixRQUFzQyxFQUN0QyxTQUE0QjtRQUU1QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1FBRWhDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVPLG1DQUFtQyxDQUFDLEdBQVk7UUFDdEQsSUFBSyxHQUEwQixDQUFDLE1BQU0sRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUE2QztRQUN6RSxNQUFNLE1BQU0sR0FBa0MsRUFBRSxDQUFDO1FBQ2pELElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUVuQixLQUFLLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtZQUN2QixRQUFRLElBQUksWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQyxLQUFLLE1BQU0sS0FBSyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQzlCLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckY7U0FDRjtRQUVELE9BQU87WUFDTCxRQUFRO1lBQ1IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3JGLENBQUM7SUFDSixDQUFDO0NBQ0YifQ==

/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomSelectionStrategy": () => (/* binding */ CustomSelectionStrategy)
/* harmony export */ });
/**
 * Custom selection strategy supports custom selections implementations.
 */
class CustomSelectionStrategy {
    _selector;
    constructor(selector) {
        this._selector = selector;
    }
    select(inputs, target) {
        return this._selector(inputs, target);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tU2VsZWN0aW9uU3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYnVpbGRlci9zZWxlY3Rvci9zdHJhdGVnaWVzL2N1c3RvbVNlbGVjdGlvblN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BOztHQUVHO0FBQ0gsTUFBTSxPQUFPLHVCQUF1QjtJQUNqQixTQUFTLENBQW1CO0lBRTdDLFlBQVksUUFBMEI7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFxQixFQUFFLE1BQXdCO1FBQ3BELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNGIn0=

/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccumulativeSelectionStrategy": () => (/* binding */ AccumulativeSelectionStrategy)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);

/**
 * Accumulative selection strategy accumulates inputs until the target
 * value is reached, skipping detrimental inputs.
 */
class AccumulativeSelectionStrategy {
    _inputs;
    select(inputs, target) {
        this._inputs = inputs;
        let selection = [];
        if (!(0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(target.tokens)) {
            selection = this._selectTokens(target.tokens);
        }
        const selectedNanoErgs = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__.sumBy)(selection, (input) => input.value);
        if (((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(target.nanoErgs) && (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(target.tokens)) ||
            (!(0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(target.nanoErgs) && selectedNanoErgs < target.nanoErgs)) {
            const targetAmount = !(0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(target.nanoErgs)
                ? target.nanoErgs - selectedNanoErgs
                : undefined;
            selection = selection.concat(this._select(targetAmount));
        }
        return selection;
    }
    _selectTokens(targets) {
        let selection = [];
        for (const target of targets) {
            const targetAmount = !(0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(target.amount)
                ? target.amount - (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.utxoSum)(selection, target.tokenId)
                : undefined;
            if (targetAmount && targetAmount <= _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__._0n) {
                continue;
            }
            selection = selection.concat(this._select(targetAmount, target.tokenId));
        }
        return selection;
    }
    _select(target, tokenId) {
        let acc = _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__._0n;
        let selection = [];
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(target)) {
            if (tokenId) {
                selection = this._inputs.filter((x) => x.assets.some((asset) => asset.tokenId === tokenId));
            }
            else {
                selection = this._inputs;
            }
        }
        else {
            for (let i = 0; i < this._inputs.length && acc < target; i++) {
                if (tokenId) {
                    for (const token of this._inputs[i].assets) {
                        if (token.tokenId !== tokenId) {
                            continue;
                        }
                        acc += token.amount;
                        selection.push(this._inputs[i]);
                    }
                }
                else {
                    acc += this._inputs[i].value;
                    selection.push(this._inputs[i]);
                }
            }
        }
        if (!(0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(selection)) {
            this._inputs = this._inputs.filter((input) => !selection.includes(input));
        }
        return selection;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjdW11bGF0aXZlU2VsZWN0aW9uU3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYnVpbGRlci9zZWxlY3Rvci9zdHJhdGVnaWVzL2FjY3VtdWxhdGl2ZVNlbGVjdGlvblN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJOUU7OztHQUdHO0FBQ0gsTUFBTSxPQUFPLDZCQUE2QjtJQUNoQyxPQUFPLENBQWlCO0lBRWhDLE1BQU0sQ0FBQyxNQUFxQixFQUFFLE1BQXVCO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBRXRCLElBQUksU0FBUyxHQUFrQixFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0IsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9DO1FBRUQsTUFBTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEUsSUFDRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQ3JFO1lBQ0EsTUFBTSxZQUFZLEdBQUcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDaEQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcs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

/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DuplicateInputSelectionError": () => (/* binding */ DuplicateInputSelectionError)
/* harmony export */ });
class DuplicateInputSelectionError extends Error {
    constructor() {
        super(`One or more inputs was selected more than one time by the current selection strategy.`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVwbGljYXRlSW5wdXRTZWxlY3Rpb25FcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvZHVwbGljYXRlSW5wdXRTZWxlY3Rpb25FcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsS0FBSztJQUNyRDtRQUNFLEtBQUssQ0FBQyx1RkFBdUYsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7Q0FDRiJ9

/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsufficientInputs": () => (/* binding */ InsufficientInputs)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);

class InsufficientInputs extends Error {
    unreached;
    constructor(unreached) {
        const strings = [];
        if (unreached.nanoErgs) {
            strings.push(buildString("nanoErgs", unreached.nanoErgs));
        }
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.some)(unreached.tokens)) {
            for (const token of unreached.tokens) {
                strings.push(buildString(token.tokenId, token.amount));
            }
        }
        super(`Insufficient inputs:${strings.join()}`);
        this.unreached = unreached;
    }
}
function buildString(tokenId, amount) {
    return `\n  > ${tokenId}: ${amount?.toString()}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdWZmaWNpZW50SW5wdXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Vycm9ycy9pbnN1ZmZpY2llbnRJbnB1dHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3pDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxLQUFLO0lBQ2xDLFNBQVMsQ0FBa0I7SUFFcEMsWUFBWSxTQUEwQjtRQUNwQyxNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUMzRDtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQixLQUFLLE1BQU0sS0FBSyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDeEQ7U0FDRjtRQUVELEtBQUssQ0FBQyx1QkFBdUIsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUFFRCxTQUFTLFdBQVcsQ0FBQyxPQUFlLEVBQUUsTUFBZTtJQUNuRCxPQUFPLFNBQVMsT0FBTyxLQUFLLE1BQU0sRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDO0FBQ25ELENBQUMifQ==

/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvalidInput": () => (/* binding */ InvalidInput)
/* harmony export */ });
class InvalidInput extends Error {
    constructor(boxId) {
        super(`Invalid input: ${boxId}`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52YWxpZElucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Vycm9ycy9pbnZhbGlkSW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLFlBQWEsU0FBUSxLQUFLO0lBQ3JDLFlBQVksS0FBYTtRQUN2QixLQUFLLENBQUMsa0JBQWtCLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUNGIn0=

/***/ })
/******/ 	]);
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _styles_enter_button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fleet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var mintbtn = document.getElementById("mintbtn");
var connectbtn = document.getElementById("connectbtn");
function connect() {
  return _connect.apply(this, arguments);
}
function _connect() {
  _connect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var ConnectUserWallet, UserAddress, cypxAmount, mintbtn, UserBalance, UserBalanceErg;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return ergoConnector.nautilus.connect();
        case 2:
          ConnectUserWallet = _context.sent;
          ConnectUserWallet;
          _context.next = 6;
          return ergo.get_change_address();
        case 6:
          UserAddress = _context.sent;
          _context.next = 9;
          return displayCypxAmount(UserAddress);
        case 9:
          cypxAmount = _context.sent;
          mintbtn = document.getElementById("mintbtn");
          _context.next = 13;
          return ergo.get_balance();
        case 13:
          UserBalance = _context.sent;
          UserBalanceErg = UserBalance / Math.pow(10, 9);
          connectbtn.style.display = "none";
          console.log(UserAddress);
          console.log(UserBalanceErg);
          document.getElementById("userbalance").style.display = "flex";
          document.getElementById("userbalance").innerHTML = "<img src = \"./dist/assets/ergicon.png\" id = \"balanceicon\">   " + UserBalanceErg;
          document.getElementById("cypxbalance").innerHTML = "<img src=\"./dist/assets/cypxicon.png\" id=\"cypxicon\">" + cypxAmount / Math.pow(10, 4);
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _connect.apply(this, arguments);
}
function displayCypxAmount(_x) {
  return _displayCypxAmount.apply(this, arguments);
}
function _displayCypxAmount() {
  _displayCypxAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(userAddress) {
    var response, data, cypxAmount;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch("https://api.ergoplatform.com/api/v1/boxes/unspent/byAddress/".concat(userAddress));
        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return response.json();
        case 5:
          data = _context2.sent;
          cypxAmount = 0;
          data.items.forEach(function (item) {
            item.assets.forEach(function (asset) {
              if (asset.name === "CYPX") {
                cypxAmount += asset.amount;
              }
            });
          });
          console.log("CYPX Amount: ".concat(cypxAmount));
          return _context2.abrupt("return", cypxAmount);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _displayCypxAmount.apply(this, arguments);
}
connectbtn.addEventListener("click", connect);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map