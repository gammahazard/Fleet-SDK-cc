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
___CSS_LOADER_EXPORT___.push([module.id, "/* Main Styling */\n\n@font-face {\n    font-family: pixelFont;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"opentype\");\n    font-display:swap;\n}\n\n:root {\n    --yellow: #F7FC19;\n    --pink: #EE2DFF;\n    --blue: #0B0029;\n    --bg: var(--blue);\n\n    --red: #FF0000;\n    --purple: #811CB0;\n    --teal: #2fa388;\n    --blue-purple: #2f4aa3;\n    --light-red: #a32f4a;\n    --dark-yellow: #a3882f;\n    --black: #000000;\n    --white: #FFFFFF;\n    --grey: #92a5ce;\n    --bg-header: rgba(0, 0, 0, 0.9);\n    --nav-hover: var(--pink);\n\n    --step-0: clamp(1.31rem, 1.24rem + 0.37vw, 1.50rem);\n    --step-1: clamp(1.58rem, 1.02rem + 2.78vw, 3.00rem);\n    --step-2: clamp(1.89rem, 0.29rem + 8.02vw, 6.00rem);\n    --step-3: clamp(2.27rem, -1.53rem + 18.99vw, 12.00rem);\n    --step-4: clamp(2.72rem, -5.58rem + 41.52vw, 24.00rem);\n    --step-5: clamp(3.27rem, -14.19rem + 87.29vw, 48.00rem);\n}\n\n*,\n*:before,\n*:after {\n    box-sizing: border-box;\n}\niframe#iframetrailer {\n    display:flex;\nmargin-bottom:2.5rem;\nmargin-top:-2rem;\n\n\n}\n#faqcont {\n    text-align:center;\n}\n#mintbtn {\n    display:block;\n    background-color:black;\n    color:yellow;\n }\n #mintbtn:hover {\n    color:var(--pink)\n }\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n   \n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n  \n\n  .close:hover,\n  .close:focus {\n    color: yellow;\n    text-decoration: none;\n    cursor: pointer;\n  }\n#yellow {\n    color:yellow;\n}\n  .modal-content {\n      background-color:black;\n      margin: auto;\n      padding: 20px;\n      border: 1px solid #888;\n      width: 50%;\n      margin-top:7%;\n      font-family:Arial, Helvetica, sans-serif;\n      height:auto;\n      animation-name: animatetop;\n      animation-duration: 0.4s\n    }\n\n    @keyframes animatetop {\n        from {top: -300px; opacity: 0}\n        to {top: 0; opacity: 1}\n      }\n\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\na {\n    text-decoration: none;\n    color: var(--yellow);\n    text-transform: uppercase;\n    border: 2px solid var(--pink);\n    border-radius: 12px;\n    padding: 6px;\n    max-width: 10rem;\n    margin: 0 auto;\n}\n\na:hover {\n    color: var(--pink);\n}\n\nhtml {\n    margin: 0;\n    padding: 0;\n    color: var(--white);\n    font-family: pixelFont;\n    scroll-behavior: smooth;\n}\n#monthdisplay {\nfont-size:larger;\n    color: black;\n    text-shadow: -0.05px -0.25px 0 yellow, 0.25px -0.25px 0 yellow, -0.25px 0.25px 0 yellow, 0.25px 0.25px 0 yellow;\n  }\nbody {\n    margin: 0;\n    padding: 0;\n\n    border: 0;\n\n    overflow-x:hidden;\n    \n\n    background-color: var(--bg);\n}\n#statsdisplay {\n   color:var(--pink);\n\n}\nimg#balanceicon, #cypxicon {\n    width:2.5rem;\n    height:2.5rem;\n    display:flex;\n  \n\n\n}\n#usertokens {\n    font-family:Arial, Helvetica, sans-serif;\n}\nspan#userbalance{\nvertical-align:center;\ndisplay:flex;\nfont-size:75%;\n\n}\nspan#cypxbalance{\n\n    display:flex;\n    font-size:75%;\n    \n    }\n    \nheader {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: var(--bg-header);\n    width: 100vw;\nz-index:999;\n    display: grid;\n    grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;\n}\n\nspan {\n    color: var(--pink);\n}\na#dashboardbtn {\n    font-size:smaller;\n}\n.nav-links {\n    text-transform: uppercase;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    font-size: 1.25rem;\n\n    display: flex;\n    align-items: center;\n}\n\n.nav-toggle {\n    display: none;\n}\nimg#ScrollTop {\nwidth:120%;\nheight:auto;\n}\n\n.nav-toggle-label {\n    display: none;\n    cursor: pointer;\n}\n\n.logo {\n  \n    cursor: initial;\n    padding: 1em;\n}\n\n.logo img {\n  width:120%;\n    cursor: pointer;\n}\n\nnav {\n    grid-column: 2 / 5;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    padding-right: 2em;\n    gap: 2em;\n    z-index:99;\n}\n\nnav ul {\n    display: flex;\n    justify-content: flex-end;\n    min-width: 100%;\n}\n\nnav a {\n    margin-left: 1em;\n    margin-bottom: 0;\n    position: relative;\n}\n\nnav a:hover {\n    color: var(--nav-hover);\n}\n\nnav a::before {\n    content: '';\n    display: block;\n    height: 5px;\n    background: var(--nav-hover);\n    position: absolute;\n    top: -1em;\n    left: 0;\n    right: 0;\n\n    transform: scale(0, 1);\n    transition: transform ease-in-out 250ms;\n}\n\nnav a:hover::before {\n    transform: scale(1, 1);\n}\n\n#discord-desktop,\n#twitter-desktop {\n    margin-right: 10px;\n    border: none;\n}\n\n#discord-desktop {\n    filter: invert(65%) sepia(79%) saturate(2780%) hue-rotate(199deg) brightness(90%) contrast(88%);\n}\n\n#twitter-desktop {\n    filter: invert(68%) sepia(75%) saturate(2575%) hue-rotate(179deg) brightness(99%) contrast(88%);\n}\n\n#discord-desktop::before,\n#twitter-desktop::before {\n    display: none;\n}\n\n.fade-in {\n    opacity: 0;\n    transition: 250ms ease-in;\n}\n\n.fade-in.appear {\n    opacity: 1;\n}\n\nh1 {\n    line-height: 1;\n    font-size: 2rem;\n    padding: 2rem;\n    color: var(--yellow);\n}\n\n.mint-title {\n    font-size: 1.5rem;\n}\n#mint-button {\n    background-color:transparent;\n    border:1px solid var(--pink);\n    color:yellow;\nfont-family:pixelFont;\ndisplay:flex;\nmargin-inline:auto;\nfont-size:2rem;\n}\n#mint-button:hover {\n    background-color:transparent;\n    border:1px solid var(--purple);\n    color:yellow;\nfont-family:pixelFont;\ndisplay:flex;\nmargin-inline:auto;\nfont-size:2rem;\ncursor:pointer;\n}\n.address-title {\n    font-size: 1.5rem;\n}\n\n.address-p2k {\n    font-size: 1rem;\n    max-width: 90%;\n    word-wrap: break-word;\n    cursor: pointer;\n    color:yellow;\n}\n\n.address-p2k:hover {\n    color: var(--purple);\n}\n\n.auctions-text {\n    font-size: 1rem;\n    max-width: 90%;\n    word-wrap: break-word;\n}\n\nh2 {\n    text-align: center;\n    text-transform: uppercase;\n    color: var(--pink);\n    font-size: 3rem;\n}\n.spinner {\n background-color:transparent;\n    background-repeat: no-repeat;\n    background-size: 40px 40px; /* adjust as necessary */\n    width: 40px; /* adjust as necessary */\n    height: 40px; /* adjust as necessary */\n    margin: 0 auto; /* centers the spinner horizontally */\n  }\nh3 {\n    font-size: 2rem;\n}\n\nh4 {\n    font-size: 1.5rem;\n}\n#modaltitle {\n    color:var(--yellow);\n    text-align:center;\n}\n#modaladdy {\n    display:block;\n text-align:center;\n    width:100%;\n  \n}\n.image-modal {\n    text-align:center;\n    display:flex;\n    margin-inline:auto;\n    width:25%;\n    height:auto;\n}\n#modal-text{\n    display:block;\n text-align:center;\n    width:100%;\n  \n}\n#copyremind {\n    font-size:0.6rem;\n    text-align:center;\n   margin-top:-20px;\n}\np {}\n\n#mint,\n#explore,\n.unsold {\n    font-size: 1.5rem;\n}\n\nsection {\n    min-height: 50vh;\n    display: flex;\n    flex-direction: column;\n    gap: 3rem;\n    align-items: center;\n\n    /* border-glow-here */\n    background: hsla(295, 100%, 59%, 1);\n\n    background: linear-gradient(90deg, hsla(295, 100%, 59%, 1) 0%, hsla(256, 100%, 8%, 1) 1%, hsla(256, 100%, 8%, 1) 99%, hsla(295, 100%, 59%, 1) 100%);\n\n    background: -moz-linear-gradient(90deg, hsla(295, 100%, 59%, 1) 0%, hsla(256, 100%, 8%, 1) 1%, hsla(256, 100%, 8%, 1) 99%, hsla(295, 100%, 59%, 1) 100%);\n\n    background: -webkit-linear-gradient(90deg, hsla(295, 100%, 59%, 1) 0%, hsla(256, 100%, 8%, 1) 1%, hsla(256, 100%, 8%, 1) 99%, hsla(295, 100%, 59%, 1) 100%);\n\n    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=\"#EE2DFF\", endColorstr=\"#0B0029\", GradientType=1);\n}\n\nsection h2 {\n    padding-top: 3rem;\n}\n\n.flex-container,\n.flex-container-faq,\n.flex-container-mint,\n.flex-container-roadmap,\n.flex-container-team {\n    padding-bottom: 3rem;\n}\n\n.s1 {\n    min-height: 100vh;\n    flex-direction: column;\n    justify-content: center;\n    background-color: var(--black);\n\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.logo {\n    height:auto;\n    width:35%;\n}\n.flex-container {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    text-transform: capitalize;\n    padding-bottom: 4em;\n}\n\n.flex-container-mint {\n    display: flex;\n    max-width: 90%;\n    margin: 6em auto;\n}\n\n.container-mint {\n    display: flex;\n    flex-direction: column;\n    max-width: 40%;\n    margin: 0 auto;\n}\n.close {\n    color: #aaaaaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n\n  }\n  .maintext {\n    color:var(--yellow)\n    \n  }\n  \n  #calendar {\n    display:flex;\n    position:relative;\n    color:yellow;\n    background-color:transparent;\n\n   bottom:-10.25rem;\n    left: 42.9%; /* adjust as needed */\n\n    z-index: 50;\n    width: 12.5%;\n    height: 5rem;\n  }\n\n  #calendar button {\n    background-color:black;\n    color:var(--pink);\n    cursor:pointer;\nwidth:auto;\nheight:auto;\n  }\n  #calendar button:hover {\n    background-color:black;\n    color:var(--yellow);\n\n  }\n#closedashboard {\n    position:absolute;\n    margin-left:72%;\n    margin-top:8%;\n}\n#dashboardbtn:hover {\ncursor:pointer;\n}\n#datemodal {\n    text-align:center;\n    background-color:black;\n    z-index:51;\n\n}\n#closedatepoints {\n    margin-right:85%;\n    margin-bottom:2rem;\n}\n.container-mint h3 {\n    color: var(--yellow);\n    margin-bottom: 0;\n}\n\n.container-mint p {\n    margin-top: 0.5em;\n}\n\n.container-mint h2 {\n    text-align: left;\n}\n\n.container-mint-img {\n    gap: 1em;\n    justify-content: center;\n}\n\n.container-mint-img a {\n    text-align: center;\n}\n\n.container-mint img {\n    width: auto;\n    height: auto;\n    max-width: 50%;\n    margin: 0 auto;\n    border-radius: 12px;\n}\n\n.unsold {\n    text-align: center;\n    color: var(--yellow);\n}\n\n.flex-container-roadmap {\n    max-width: 90%;\n    margin: 0 auto;\n    display: flex;\n    gap: 3em;\n}\n\n.container-r1,\n.container-r2 {\n    flex-basis: 50%;\n}\n\n.container-r1 h3,\n.container-r2 h3 {}\n\n.roadmap-title {\n    color: var(--pink);\n    font-size: 3rem;\n}\n\nul {\n    padding: 0;\n}\n\n.container-r1 li,\n.container-r2 li {\n    list-style-type: none;\n}\n\nli h4 {\n    text-transform: uppercase;\n    color: var(--yellow);\n    font-size: 1.5rem;\n}\n\nli p {\n    font-size: 1.25rem;\n    font-family: 'Montserrat', sans-serif;\n}\n\n#cybercity-map {\n    max-width: 80vw;\n    margin: 0 auto;\n    border: 2px solid var(--pink);\n    border-radius: 12px;\n}\n\n.flex-container-team>* {\n    flex-basis: 20%;\n}\n\n.flex-container-team {\n    display: flex;\n    max-width: 90%;\n    margin: 0 auto;\n    flex-direction: row;\n    /* flex-wrap: nowrap; */\n}\n\n.team-column {\n    max-width: 20%;\n    text-align: center;\n}\n\n.team-member-name {\n    text-transform: uppercase;\n    color: var(--yellow);\n    margin-bottom: 2%;\n}\n\n.team-member-description {\n    text-transform: uppercase;\n    font-size: 1.5rem;\n    word-wrap: break-word;\n\n}\n\n.team-member-image {\n    max-width: 60%;\n    border-radius: 12px;\n}\n\n.flex-container-faq {\n    display: flex;\n    flex-direction: column;\n    max-width: 90%;\n    gap: 0;\n}\n\n.faq-header,\n.faq-answer {\n    text-align: center;\n    margin: 0 auto;\n    max-width: 60%;\n}\n\n.faq-header {\n    text-transform: uppercase;\n    color: var(--yellow);\n    margin-bottom: 0.25rem;\n    font-size: 1.5rem;\n}\n\n.faq-answer {\n    margin-bottom: 1em;\n    font-size: 1.25rem;\n    font-family: 'Montserrat', sans-serif;\n}\n\n.faq-links {\n    border: none;\n}\n\n#ergopixel-img {\n    border: 3px solid var(--pink);\n}\n\n.footer-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.footer-container a {\n    border: none;\n}\n\n.footer-logo {\n    width: 10%;\n    margin-top: 1em;\n    padding-bottom: 1em;\n}\n.ccimage {\n    width:100px;\n    height:100px;\n}\n.assetdescription {\n    font-size:larger;\n    color:var(--pink)\n}\n.assetcont {\n    border:1px solid var(--purple)\n}\n.dashboardcont {\n    display:block;\n    position:absolute;\n    background-color:black;\n    border:1px solid pink;\nmargin-left:25%;\nmargin-top:10%;\n}\n.play-button {\n    background-color:Yellow;\n}\n#dashboard, #audio-nfts {\n    display:block;\n    justify-content:center;\n    align-items:center;\n    text-align:Center;\n}\n.assettitle {\n    font-size:larger;\n    color:yellow;\n}\n.footer-logo-container {\n    display: flex;\n    justify-content: center;\n    border-bottom: 2px solid var(--pink);\n    max-width: 90%;\n    margin: 0 auto;\n}\nbutton.disabled {\n    background-color: red;\n    cursor: not-allowed;\n  }\n  #mintbtn[disabled] {\n    background-color: red;\n  }\n.svg-container {\n    display: flex;\n    justify-content: space-around;\n}\n\n.svg-container a {\n    width: 50%;\n    text-align: center;\n}\n\n.discord,\n.twitter {\n    max-width: 50%;\n}\n\n.footer-text {\n    margin-bottom: 1em;\n    text-align: center;\n}\n\n.svg-container {\n    justify-content: center;\n    margin: auto auto;\n    min-width: 50%;\n}\n\n.svg-container a {\n    margin: 0;\n    gap: 0;\n}\n\n.svg-container a img {\n    padding-top: 1em;\n    width: 40%;\n}\n\n.footer-logo {\n    width: 10%;\n}\n\n.footer-text {\n    padding: 1em;\n}\n\n.twitter,\n.discord {\n    filter: invert(98%) sepia(95%) saturate(6%) hue-rotate(306deg) brightness(103%) contrast(100%);\n}\n\n#wallet {\n    cursor: pointer;\n}\n\n#wallet-connector {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    min-width: 50%;\n    min-height: 30%;\n    padding: 1em;\n    background-color: black;\n    border-radius: 20px;\n    color: var(--yellow);\n    text-shadow: 1px 1px #258ae8;\n    display: none;\n    z-index: 200;\n}\n\n#wallet-connector p {\n    padding-bottom: 2%;\n    font-size: 1.5rem;\n}\n\n#wallet-connector input {\n    width: 100%;\n    margin: 0 auto;\n    font-size: 1.25rem;\n}\n\n#wallet-connector.open {\n    z-index: 100;\n    background-color: var(--blue);\n    border: 2px var(--pink) solid;\n    display: block;\n}\n\n#wallet-address-text {\n    font-weight: 100;\n}\n\n#wallet-output {\n    padding-top: 2%;\n    color: red;\n}\n\n#wallet-buttons {\n    display: flex;\n    justify-content: end;\n    gap: 1em;\n    width: 100%;\n    margin: 0 auto;\n}\n\n.wallet-button {\n    all: unset;\n    min-width: 10%;\n    background-color: var(--pink);\n    border: 1px var(--pink) solid;\n    text-align: center;\n    font-size: 1.5rem;\n    border-radius: 10px;\n    cursor: pointer;\n    transition: ease-in 0.2s;\n    padding: 1%;\n    color: var(--yellow);\n    text-shadow: 1px 1px #258ae8;\n}\n\n.wallet-button:hover {\n    border: 2px #258ae8 solid;\n}\n#connectbtn {\n    background-color:transparent;\n    color:yellow;\n}\n#finish {\n    background-color: #258ae8;\n    border: 2px #258ae8 solid;\n}\n\n#finish:hover {\n    border: 2px var(--pink) solid;\n}\n\ninput[type=text],\ntextarea {\n    border: 2px #f711f7 solid;\n    background-color: var(--bblue);\n    border-radius: 20px;\n    color: var(--yellow);\n    font-family: pixelFont;\n}\n\ninput[type=text]:focus,\ntextarea:focus,\ninput[type=text]:hover,\ntextarea:hover {\n    border: 2px var(--pink) solid;\n}\n\n#dino-mobile,\n#twitter-mobile,\n#discord-mobile {\n    display: none;\n}\n\nli #dino-image {\n    flex-grow: 0;\n    flex-basis: 10%;\n}\n\n#dino-image {\n    width: auto;\n    height: auto;\n    max-width: 25px;\n    max-height: 20px;\n}\n\nli #header-image {\n    flex-grow: 1;\n    flex-basis: 10%;\n}\n\n#header-image {\n    width: auto;\n    height: auto;\n    max-width: 30px;\n    max-height: 25px;\n    border-color: red;;\n}\n\n.benefits-list {\n    padding-left: 4%;\n}\n\n.benefit-title {\n    font-size: 1.9rem;\n    color: var(--pink);\n}\n\n.benefit {\n    font-size: 1.25rem;\n    color:var(--yellow)\n}\n\n.container-r1,\n.container-r2 {\n    margin: 0 auto;\n}\n\n#roadmap-switch {\n    margin-bottom: 4em;\n    cursor: pointer;\n    font-size: 1.5rem;\n    max-width: none;\n}\n\n@media all and (max-width : 60em) {\n    header {\n        display: block;\n        text-align: center;\n        z-index: 999;\n        min-width: 10vh;\n    }\n    body{\n        width:100%;\n        overflow-x:hidden;\n        \n    }\n    #wallet-btn {\n        display:none;\n    }\niframe#iframetrailer {\n    width:75%;\n    height:auto;\n}\n    .logo {\n        padding-top: 0.5em;\n        padding-bottom: 0.5em;\n        font-size: 2rem;\n       margin-inline:auto;\n    }\n\n    #cybercity-map {\n        max-width: 90%;\n        margin: 0 auto;\n    }\n\n    /* Look for any nav as a preceding sibling */\n    .nav-toggle:checked~nav {\n        transform: scale(1, 1);\n    }\n\n    .nav-toggle:checked~nav .nav-links li a {\n        opacity: 1;\n        transition: opacity 250ms ease-in-out 350ms;\n    }\n\n    .nav-toggle-label {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        margin-left: 1em;\n    }\n\n    /* Create hamburger */\n    .nav-toggle-label>span,\n    .nav-toggle-label>span::before,\n    .nav-toggle-label>span::after {\n        display: block;\n        background: var(--pink);\n        height: 2px;\n        width: 2em;\n        border-radius: 2px;\n        position: relative;\n    }\n\n    /* Make sure the pseudo-elements have content so they display */\n    .nav-toggle-label>span::before,\n    .nav-toggle-label>span::after {\n        content: '';\n        position: absolute;\n    }\n\n    /* Move the before pseudo-element down */\n    .nav-toggle-label>span::before {\n        bottom: 7px;\n    }\n\n    /* Move the after pseudo-element up */\n    .nav-toggle-label>span::after {\n        top: 7px;\n    }\n\n    nav {\n        position: absolute;\n        text-align: left;\n        top: 100%;\n        left: 0;\n        background-color: var(--bg-header);\n\n        transform: scale(1, 0);\n        transform-origin: top;\n        transition: transform 400ms ease-in-out;\n    }\n\n    nav ul {\n        display: block;\n    }\n\n    nav a {\n        margin-left: 0;\n        border: none;\n    }\n\n    nav a::before {\n        display: none;\n    }\n\n    .nav-links {\n        padding-top: 1em;\n        width: 100vw;\n        border-bottom: 2px solid var(--pink);\n        flex-direction: column;\n        align-items: flex-start;\n    }\n\n    .nav-links>li {\n        margin-bottom: 1em;\n        margin-left: 1em;\n    }\n\n    .nav-links>li>a {\n        opacity: 0;\n        transition: opacity 100ms ease-in-out;\n    }\n\n    .nav-links>li>a:hover {\n        color: var(--nav-hover);\n    }\n\n\n    .flex-container,\n    .flex-container-faq,\n    .flex-container-mint,\n    .flex-container-roadmap,\n    .flex-container-team {\n        flex-direction: column;\n    }\n\n    .flex-container-mint>* {\n        margin: 0 auto;\n        min-width: 90%;\n    }\n\n    .container-mint h2 {\n        text-align: center;\n    }\n\n    .flex-container-mint {\n        margin: 3rem 0;\n        padding: 0;\n        width: 90%;\n    }\n\n    .flex-container-mint h2 {\n        min-width: 90%;\n    }\n\n    .container-mint img {\n        max-width: 75%;\n    }\n\n\n    .container-mint img {\n        width: auto;\n        height: auto;\n        max-width: 80%;\n        margin: 0 auto;\n    }\n\n    .faq-header,\n    .faq-answer {\n        text-align: center;\n        margin: 1em auto;\n        max-width: 90%;\n    }\n\n    .flex-container-team {\n        flex-direction: column;\n    }\n\n    .flex-container-team>* {\n        flex-basis: 100%;\n    }\n\n    .flex-container-team {\n        justify-content: center;\n        align-items: center;\n    }\n\n    .team-member-image {\n        margin-top: 3rem;\n        max-width: 60%;\n    }\n\n    .team-column {\n        min-width: 90%;\n    }\n\n    .footer-logo {\n        width: 40%;\n    }\n\n    #wallet-connector {\n        width: 90% !important;\n    }\n\n    #wallet-connector p {\n        padding-bottom: 2%;\n        font-size: 1.25rem;\n    }\n\n    #wallet-connector input {\n        width: 100%;\n        margin: 0 auto;\n        font-size: 1.125rem;\n    }\n\n    .wallet-button {\n        font-size: 1.125rem;\n    }\n\n    #dino-desktop,\n    #discord-desktop,\n    #twitter-desktop {\n        display: none;\n    }\n\n    #dino-mobile,\n    #twitter-mobile,\n    #discord-mobile {\n        display: inline-block;\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .desktop-li {\n        display: none;\n    }\n}\n\n@media all and (max-width : 40em) {\n    #nft-container {\n        flex-direction: column;\n    }\n\n    .auction-card-modal h2 {\n        font-size: 1rem;\n    }\n\n    .nav-links {\n        font-size: 1rem;\n    }\n\n    .roadmap-title {\n        font-size: 2rem;\n    }\n\n    h1 {\n        font-size: 1rem;\n    }\n\n    h2 {\n        font-size: 1.5rem;\n    }\n\n    h3 {\n        font-size: 1rem;\n    }\n\n    .flex-container-faq {\n        max-width: 90%;\n    }\n\n    li h4 {\n        font-size: 1.5rem;\n    }\n\n    .benefits-list {\n        padding-left: 4%;\n    }\n\n    .benefit-title {\n        font-size: 1.3rem;\n    }\n\n    .benefit {\n        font-size: 1.125rem;\n    }\n\n    li p {\n        font-size: 1.25rem;\n    }\n\n    .team-member-name {\n        font-size: 1.5rem;\n    }\n\n    .team-member-description {\n        font-size: 1.25rem;\n    }\n\n    .faq-header {\n        font-size: 1.5rem;\n    }\n\n    .faq-answer {\n        word-wrap: break-word;\n        font-size: 1.25rem;\n    }\n\n    .footer-logo {\n        width: 40%;\n    }\n\n    .footer-text {\n        font-size: 1rem;\n    }\n\n    #wallet-connector {\n        width: 90% !important;\n        top: 60%;\n    }\n\n    #wallet-connector p {\n        padding-bottom: 2%;\n        font-size: 1rem;\n    }\n\n    #wallet-connector input {\n        width: 100%;\n        margin: 0 auto;\n        font-size: 1rem;\n    }\n\n    .wallet-button {\n        font-size: 1rem;\n    }\n}", ""]);
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
  url = String(url.__esModule ? url["default"] : url);

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
    var cypxTokenId, creationHeight, amountToSend, inputs, userAddress, cybercitizensWallet, requiredNanoErgs, requiredErgs;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          cypxTokenId = "01dce8a5632d19799950ff90bca3b5d0ca3ebfa8aaafd06f0cc6dd1e97150e7f";
          _context2.next = 4;
          return ergo.get_current_height();
        case 4:
          creationHeight = _context2.sent;
          amountToSend = 20000000000;
          _context2.next = 8;
          return ergo.get_utxos();
        case 8:
          inputs = _context2.sent;
          _context2.next = 11;
          return ergo.get_change_address();
        case 11:
          userAddress = _context2.sent;
          cybercitizensWallet = "9eXCfrmgJSuYKS6hf32snZHZYCFvVeAsBU6LigaKkd5hzjUB3Rf";
          unsignedTransaction = new _fleet_sdk_core__WEBPACK_IMPORTED_MODULE_0__.TransactionBuilder(creationHeight).from(inputs).to(new _fleet_sdk_core__WEBPACK_IMPORTED_MODULE_1__.OutputBuilder(amountToSend, cybercitizensWallet)).sendChangeTo(userAddress).payMinFee().build("EIP-12");
          console.log("Inputs:", inputs);
          console.log("Outputs:", unsignedTransaction.outputs);
          return _context2.abrupt("return", unsignedTransaction);
        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](0);
          console.error("Error minting coins: ".concat(_context2.t0));
          if (_context2.t0.message.includes('>')) {
            requiredNanoErgs = _context2.t0.message.match(/\d+/)[0];
            requiredErgs = requiredNanoErgs / Math.pow(10, 9) + 0.001;
            alert("You do not have enough funds to complete this transaction, please add ".concat(requiredErgs.toFixed(4), " ERG"));
          } else if (_context2.t0.message.includes('not defined')) {
            alert('Please connect your wallet');
          } else {
            alert("Error minting coins: ".concat(_context2.t0));
          }
        case 23:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 19]]);
  }));
  return _mint.apply(this, arguments);
}
var mintbtn = document.getElementById("mintbtn");
var mintbtnText = mintbtn.innerText;
mintbtn.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var _unsignedTransaction, signedTransaction, txId;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        mintbtn.disabled = true;
        mintbtn.classList.add("disabled");
        mintbtn.innerHTML = "<span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span> Please wait while the transaction is being built...";
        _context.next = 6;
        return mint();
      case 6:
        _unsignedTransaction = _context.sent;
        if (!_unsignedTransaction) {
          _context.next = 18;
          break;
        }
        console.log("Unsigned Transaction:", _unsignedTransaction);
        _context.next = 11;
        return ergo.sign_tx(_unsignedTransaction);
      case 11:
        signedTransaction = _context.sent;
        console.log("Signed Transaction:", signedTransaction);
        _context.next = 15;
        return ergo.submit_tx(signedTransaction);
      case 15:
        txId = _context.sent;
        console.log(txId);
        alert("Transaction submitted. TX ID: ".concat(txId));
      case 18:
        _context.next = 24;
        break;
      case 20:
        _context.prev = 20;
        _context.t0 = _context["catch"](0);
        console.error("Error minting coins: ".concat(_context.t0));
        alert("Error minting coins: ".concat(_context.t0));
      case 24:
        _context.prev = 24;
        mintbtn.disabled = false;
        mintbtn.classList.remove("disabled");
        mintbtn.innerText = mintbtnText;
        return _context.finish(24);
      case 29:
      case "end":
        return _context.stop();
    }
  }, _callee, null, [[0, 20, 24, 29]]);
})));

// Add an event listener for beforeunload event
window.addEventListener("beforeunload", function () {
  // Check if mintbtn is disabled, and re-enable it
  if (mintbtn.disabled) {
    mintbtn.disabled = false;
    mintbtn.classList.remove("disabled");
    mintbtn.innerText = mintbtnText;
  }
});

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
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(32);
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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }









var RECOMMENDED_MIN_FEE_VALUE = BigInt(1100000);
var FEE_CONTRACT = "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304";
var TransactionBuilder = /*#__PURE__*/function () {
  function TransactionBuilder(creationHeight) {
    _classCallCheck(this, TransactionBuilder);
    _defineProperty(this, "_inputs", void 0);
    _defineProperty(this, "_dataInputs", void 0);
    _defineProperty(this, "_outputs", void 0);
    _defineProperty(this, "_settings", void 0);
    _defineProperty(this, "_creationHeight", void 0);
    _defineProperty(this, "_selectorCallbacks", void 0);
    _defineProperty(this, "_changeAddress", void 0);
    _defineProperty(this, "_feeAmount", void 0);
    _defineProperty(this, "_burning", void 0);
    _defineProperty(this, "_plugins", void 0);
    this._inputs = new _models__WEBPACK_IMPORTED_MODULE_0__.InputsCollection();
    this._dataInputs = new _models__WEBPACK_IMPORTED_MODULE_0__.InputsCollection();
    this._outputs = new _models__WEBPACK_IMPORTED_MODULE_1__.OutputsCollection();
    this._settings = new _transactionBuilderSettings__WEBPACK_IMPORTED_MODULE_2__.TransactionBuilderSettings();
    this._creationHeight = creationHeight;
  }
  _createClass(TransactionBuilder, [{
    key: "inputs",
    get: function get() {
      return this._inputs;
    }
  }, {
    key: "dataInputs",
    get: function get() {
      return this._dataInputs;
    }
  }, {
    key: "outputs",
    get: function get() {
      return this._outputs;
    }
  }, {
    key: "changeAddress",
    get: function get() {
      return this._changeAddress;
    }
  }, {
    key: "fee",
    get: function get() {
      return this._feeAmount;
    }
  }, {
    key: "burning",
    get: function get() {
      return this._burning;
    }
  }, {
    key: "settings",
    get: function get() {
      return this._settings;
    }
  }, {
    key: "creationHeight",
    get: function get() {
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
  }, {
    key: "and",
    get: function get() {
      return this;
    }
  }, {
    key: "from",
    value: function from(inputs) {
      this._inputs.add(inputs);
      return this;
    }
  }, {
    key: "to",
    value: function to(outputs, options) {
      this._outputs.add(outputs, options);
      return this;
    }
  }, {
    key: "withDataFrom",
    value: function withDataFrom(dataInputs, options) {
      this._dataInputs.add(dataInputs, options);
      return this;
    }
  }, {
    key: "sendChangeTo",
    value: function sendChangeTo(address) {
      if (typeof address === "string") {
        this._changeAddress = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.isHex)(address) ? _models__WEBPACK_IMPORTED_MODULE_4__.ErgoAddress.fromErgoTree(address, _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_5__.Network.Mainnet) : _models__WEBPACK_IMPORTED_MODULE_4__.ErgoAddress.fromBase58(address);
      } else {
        this._changeAddress = address;
      }
      return this;
    }
  }, {
    key: "payFee",
    value: function payFee(amount) {
      this._feeAmount = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_6__.ensureBigInt)(amount);
      return this;
    }
  }, {
    key: "payMinFee",
    value: function payMinFee() {
      this.payFee(RECOMMENDED_MIN_FEE_VALUE);
      return this;
    }
  }, {
    key: "burnTokens",
    value: function burnTokens(tokens) {
      if (!this._burning) {
        this._burning = new _models__WEBPACK_IMPORTED_MODULE_7__.TokensCollection();
      }
      this._burning.add(tokens);
      return this;
    }
  }, {
    key: "configure",
    value: function configure(callback) {
      callback(this._settings);
      return this;
    }
  }, {
    key: "configureSelector",
    value: function configureSelector(selectorCallback) {
      if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__.isUndefined)(this._selectorCallbacks)) {
        this._selectorCallbacks = [];
      }
      this._selectorCallbacks.push(selectorCallback);
      return this;
    }
  }, {
    key: "extend",
    value: function extend(plugins) {
      if (!this._plugins) {
        this._plugins = [];
      }
      this._plugins.push({
        execute: plugins,
        pending: true
      });
      return this;
    }
  }, {
    key: "eject",
    value: function eject(ejector) {
      var _this = this;
      ejector({
        inputs: this.inputs,
        dataInputs: this.dataInputs,
        outputs: this.outputs,
        burning: this.burning,
        settings: this.settings,
        selection: function selection(selectorCallback) {
          _this.configureSelector(selectorCallback);
        }
      });
      return this;
    }
  }, {
    key: "build",
    value: function build(buildOutputType) {
      var _this2 = this;
      if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.some)(this._plugins)) {
        var context = (0,_pluginContext__WEBPACK_IMPORTED_MODULE_10__.createPluginContext)(this);
        var _iterator = _createForOfIteratorHelper(this._plugins),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var plugin = _step.value;
            if (plugin.pending) {
              plugin.execute(context);
              plugin.pending = false;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
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
      var outputs = this.outputs.clone();
      if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__.isDefined)(this._feeAmount)) {
        outputs.add(new _outputBuilder__WEBPACK_IMPORTED_MODULE_13__.OutputBuilder(this._feeAmount, FEE_CONTRACT));
      }
      var selector = new _selector__WEBPACK_IMPORTED_MODULE_14__.BoxSelector(this.inputs.toArray());
      if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.some)(this._selectorCallbacks)) {
        var _iterator2 = _createForOfIteratorHelper(this._selectorCallbacks),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var selectorCallBack = _step2.value;
            selectorCallBack(selector);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      var target = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.some)(this._burning) ? outputs.sum({
        tokens: this._burning.toArray()
      }) : outputs.sum();
      var inputs = selector.select(target);
      if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__.isDefined)(this._changeAddress)) {
        var change = this._calcDiff((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_15__.utxoSum)(inputs), target);
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.some)(change.tokens)) {
          var requiredNanoErgs = this._calcRequiredNanoErgsForChange(change.tokens.length);
          while (requiredNanoErgs > change.nanoErgs) {
            inputs = selector.select({
              nanoErgs: target.nanoErgs + requiredNanoErgs,
              tokens: target.tokens
            });
            change = this._calcDiff((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_15__.utxoSum)(inputs), target);
            requiredNanoErgs = this._calcRequiredNanoErgsForChange(change.tokens.length);
          }
          var chunkedTokens = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.chunk)(change.tokens, this._settings.maxTokensPerChangeBox);
          var _iterator3 = _createForOfIteratorHelper(chunkedTokens),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var tokens = _step3.value;
              var nanoErgs = change.nanoErgs > requiredNanoErgs ? change.nanoErgs - requiredNanoErgs + _outputBuilder__WEBPACK_IMPORTED_MODULE_13__.SAFE_MIN_BOX_VALUE : _outputBuilder__WEBPACK_IMPORTED_MODULE_13__.SAFE_MIN_BOX_VALUE;
              change.nanoErgs -= nanoErgs;
              outputs.add(new _outputBuilder__WEBPACK_IMPORTED_MODULE_13__.OutputBuilder(nanoErgs, this._changeAddress).addTokens(tokens));
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
        if (change.nanoErgs > _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_16__._0n) {
          outputs.add(new _outputBuilder__WEBPACK_IMPORTED_MODULE_13__.OutputBuilder(change.nanoErgs, this._changeAddress));
        }
      }
      var _iterator4 = _createForOfIteratorHelper(inputs),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var input = _step4.value;
          if (!input.isValid()) {
            throw new _errors__WEBPACK_IMPORTED_MODULE_17__.InvalidInput(input.boxId);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      var unsignedTransaction = {
        inputs: inputs.map(function (input) {
          return input.toUnsignedInputObject(buildOutputType || "default");
        }),
        dataInputs: this.dataInputs.toArray().map(function (input) {
          return input.toObject(buildOutputType || "default");
        }),
        outputs: outputs.toArray().map(function (output) {
          return output.setCreationHeight(_this2._creationHeight, {
            replace: false
          }).build(inputs);
        })
      };
      var burning = this._calcBurningBalance(unsignedTransaction, inputs);
      if (burning.nanoErgs > _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_16__._0n) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_11__.MalformedTransaction("it's not possible to burn ERG.");
      }
      if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.some)(burning.tokens) && (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.some)(this._burning)) {
        burning = this._calcDiff(burning, {
          nanoErgs: _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_16__._0n,
          tokens: this._burning.toArray()
        });
      }
      if (!this._settings.canBurnTokens && (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.some)(burning.tokens)) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_18__.NotAllowedTokenBurning();
      }
      return unsignedTransaction;
    }
  }, {
    key: "_isMinting",
    value: function _isMinting() {
      var _iterator5 = _createForOfIteratorHelper(this._outputs),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var output = _step5.value;
          if (output.minting) {
            return true;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      return false;
    }
  }, {
    key: "_isMoreThanOneTokenBeingMinted",
    value: function _isMoreThanOneTokenBeingMinted() {
      var mintingCount = 0;
      var _iterator6 = _createForOfIteratorHelper(this._outputs),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var output = _step6.value;
          if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__.isDefined)(output.minting)) {
            mintingCount++;
            if (mintingCount > 1) {
              return true;
            }
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return false;
    }
  }, {
    key: "_isTheSameTokenBeingMintedOutsideTheMintingBox",
    value: function _isTheSameTokenBeingMintedOutsideTheMintingBox() {
      var mintingTokenId = this._getMintingTokenId();
      if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__.isUndefined)(mintingTokenId)) {
        return false;
      }
      var _iterator7 = _createForOfIteratorHelper(this._outputs),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var output = _step7.value;
          if (output.tokens.contains(mintingTokenId)) {
            return true;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      return false;
    }
  }, {
    key: "_getMintingTokenId",
    value: function _getMintingTokenId() {
      var tokenId = undefined;
      var _iterator8 = _createForOfIteratorHelper(this._outputs),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var output = _step8.value;
          if (output.minting) {
            tokenId = output.minting.tokenId;
            break;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      return tokenId;
    }
  }, {
    key: "_calcBurningBalance",
    value: function _calcBurningBalance(unsignedTransaction, inputs) {
      var usedInputs = inputs.filter(function (input) {
        return (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__.isDefined)(unsignedTransaction.inputs.find(function (txInput) {
          return txInput.boxId === input.boxId;
        }));
      });
      return this._calcDiff((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_15__.utxoSum)(usedInputs), (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_15__.utxoSum)(unsignedTransaction.outputs));
    }
  }, {
    key: "_calcChangeLength",
    value: function _calcChangeLength(tokensLength) {
      return Math.ceil(tokensLength / this._settings.maxTokensPerChangeBox);
    }
  }, {
    key: "_calcRequiredNanoErgsForChange",
    value: function _calcRequiredNanoErgsForChange(tokensLength) {
      var minNanoErgsPerBox = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _outputBuilder__WEBPACK_IMPORTED_MODULE_13__.SAFE_MIN_BOX_VALUE;
      return minNanoErgsPerBox * BigInt(this._calcChangeLength(tokensLength));
    }
  }, {
    key: "_calcDiff",
    value: function _calcDiff(inputs, outputs) {
      var tokens = [];
      var nanoErgs = inputs.nanoErgs - outputs.nanoErgs;
      var _iterator9 = _createForOfIteratorHelper(inputs.tokens),
        _step9;
      try {
        var _loop = function _loop() {
          var _outputs$tokens$find;
          var token = _step9.value;
          var balance = token.amount - (((_outputs$tokens$find = outputs.tokens.find(function (t) {
            return t.tokenId === token.tokenId;
          })) === null || _outputs$tokens$find === void 0 ? void 0 : _outputs$tokens$find.amount) || _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_16__._0n);
          if (balance > _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_16__._0n) {
            tokens.push({
              tokenId: token.tokenId,
              amount: balance
            });
          }
        };
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return {
        nanoErgs: nanoErgs,
        tokens: tokens
      };
    }
  }]);
  return TransactionBuilder;
}();

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputsCollection": () => (/* binding */ InputsCollection)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _ergoUnsignedInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var InputsCollection = /*#__PURE__*/function (_Collection) {
  _inherits(InputsCollection, _Collection);
  var _super = _createSuper(InputsCollection);
  function InputsCollection(boxes) {
    var _this;
    _classCallCheck(this, InputsCollection);
    _this = _super.call(this);
    if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isDefined)(boxes)) {
      _this.add(boxes);
    }
    return _this;
  }
  _createClass(InputsCollection, [{
    key: "_map",
    value: function _map(input) {
      return input instanceof _ergoUnsignedInput__WEBPACK_IMPORTED_MODULE_1__.ErgoUnsignedInput ? input : new _ergoUnsignedInput__WEBPACK_IMPORTED_MODULE_1__.ErgoUnsignedInput(input);
    }
  }, {
    key: "_addOne",
    value: function _addOne(box) {
      if (this._items.some(function (item) {
        return item.boxId === box.boxId;
      })) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_2__.DuplicateInputError(box.boxId);
      }
      return _get(_getPrototypeOf(InputsCollection.prototype), "_addOne", this).call(this, box);
    }
  }, {
    key: "remove",
    value: function remove(boxIdOrIndex) {
      var index = -1;
      if (typeof boxIdOrIndex === "number") {
        if (this._isIndexOutOfBounds(boxIdOrIndex)) {
          throw new RangeError("Index '".concat(boxIdOrIndex, "' is out of range."));
        }
        index = boxIdOrIndex;
      } else {
        index = this._items.findIndex(function (box) {
          return box.boxId === boxIdOrIndex;
        });
        if (this._isIndexOutOfBounds(index)) {
          throw new _errors__WEBPACK_IMPORTED_MODULE_3__.NotFoundError("The input you are trying to remove is not present in the inputs collection.");
        }
      }
      if (index > -1) {
        this._items.splice(index, 1);
      }
      return this.length;
    }
  }]);
  return InputsCollection;
}(_collection__WEBPACK_IMPORTED_MODULE_4__.Collection);

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDefined": () => (/* binding */ isDefined),
/* harmony export */   "isUndefined": () => (/* binding */ isUndefined),
/* harmony export */   "removeUndefined": () => (/* binding */ removeUndefined)
/* harmony export */ });
function removeUndefined(value) {
  var result = {};
  for (var key in value) {
    var val = value[key];
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

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErgoUnsignedInput": () => (/* binding */ ErgoUnsignedInput)
/* harmony export */ });
/* harmony import */ var _ergoBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var ErgoUnsignedInput = /*#__PURE__*/function (_ErgoBox) {
  _inherits(ErgoUnsignedInput, _ErgoBox);
  var _super = _createSuper(ErgoUnsignedInput);
  function ErgoUnsignedInput(box) {
    var _this;
    _classCallCheck(this, ErgoUnsignedInput);
    _this = _super.call(this, box);
    _defineProperty(_assertThisInitialized(_this), "_extension", void 0);
    return _this;
  }
  _createClass(ErgoUnsignedInput, [{
    key: "extension",
    get: function get() {
      return this._extension;
    }
  }, {
    key: "setContextVars",
    value: function setContextVars(extension) {
      this._extension = extension;
      return this;
    }
  }, {
    key: "toUnsignedInputObject",
    value: function toUnsignedInputObject(type) {
      return _objectSpread(_objectSpread({}, this.toObject(type)), {}, {
        extension: this._extension || {}
      });
    }
  }, {
    key: "toObject",
    value: function toObject(type) {
      if (type === "EIP-12") {
        return {
          boxId: this.boxId,
          value: this.value.toString(),
          ergoTree: this.ergoTree,
          creationHeight: this.creationHeight,
          assets: this.assets.map(function (asset) {
            return {
              tokenId: asset.tokenId,
              amount: asset.amount.toString()
            };
          }),
          additionalRegisters: this.additionalRegisters,
          transactionId: this.transactionId,
          index: this.index
        };
      } else {
        return {
          boxId: this.boxId
        };
      }
    }
  }]);
  return ErgoUnsignedInput;
}(_ergoBox__WEBPACK_IMPORTED_MODULE_0__.ErgoBox);

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErgoBox": () => (/* binding */ ErgoBox)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _noble_hashes_blake2b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _serializer_sigma_boxSerializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var ErgoBox = /*#__PURE__*/function () {
  function ErgoBox(box) {
    _classCallCheck(this, ErgoBox);
    _defineProperty(this, "boxId", void 0);
    _defineProperty(this, "value", void 0);
    _defineProperty(this, "ergoTree", void 0);
    _defineProperty(this, "creationHeight", void 0);
    _defineProperty(this, "assets", void 0);
    _defineProperty(this, "additionalRegisters", void 0);
    _defineProperty(this, "transactionId", void 0);
    _defineProperty(this, "index", void 0);
    this.boxId = box.boxId;
    this.ergoTree = box.ergoTree;
    this.creationHeight = box.creationHeight;
    this.value = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.ensureBigInt)(box.value);
    this.assets = box.assets.map(function (asset) {
      return {
        tokenId: asset.tokenId,
        amount: (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.ensureBigInt)(asset.amount)
      };
    });
    this.additionalRegisters = box.additionalRegisters;
    this.transactionId = box.transactionId;
    this.index = box.index;
  }
  _createClass(ErgoBox, [{
    key: "isValid",
    value: function isValid() {
      return ErgoBox.validate(this);
    }
  }], [{
    key: "validate",
    value: function validate(box) {
      var bytes = (0,_serializer_sigma_boxSerializer__WEBPACK_IMPORTED_MODULE_3__.serializeBox)(box);
      var hash = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.bytesToHex)((0,_noble_hashes_blake2b__WEBPACK_IMPORTED_MODULE_0__.blake2b)(bytes, {
        dkLen: 32
      }));
      return box.boxId === hash;
    }
  }]);
  return ErgoBox;
}();

/***/ }),
/* 25 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blake2b": () => (/* binding */ blake2b)
/* harmony export */ });
/* harmony import */ var _blake2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _u64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



// Same as SHA-512 but LE
// prettier-ignore
var IV = new Uint32Array([0xf3bcc908, 0x6a09e667, 0x84caa73b, 0xbb67ae85, 0xfe94f82b, 0x3c6ef372, 0x5f1d36f1, 0xa54ff53a, 0xade682d1, 0x510e527f, 0x2b3e6c1f, 0x9b05688c, 0xfb41bd6b, 0x1f83d9ab, 0x137e2179, 0x5be0cd19]);
// Temporary buffer
var BUF = new Uint32Array(32);
// Mixing function G splitted in two halfs
function G1(a, b, c, d, msg, x) {
  // NOTE: V is LE here
  var Xl = msg[x],
    Xh = msg[x + 1]; // prettier-ignore
  var Al = BUF[2 * a],
    Ah = BUF[2 * a + 1]; // prettier-ignore
  var Bl = BUF[2 * b],
    Bh = BUF[2 * b + 1]; // prettier-ignore
  var Cl = BUF[2 * c],
    Ch = BUF[2 * c + 1]; // prettier-ignore
  var Dl = BUF[2 * d],
    Dh = BUF[2 * d + 1]; // prettier-ignore
  // v[a] = (v[a] + v[b] + x) | 0;
  var ll = _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].add3L(Al, Bl, Xl);
  Ah = _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].add3H(ll, Ah, Bh, Xh);
  Al = ll | 0;
  // v[d] = rotr(v[d] ^ v[a], 32)
  var _Dh$Dl = {
    Dh: Dh ^ Ah,
    Dl: Dl ^ Al
  };
  Dh = _Dh$Dl.Dh;
  Dl = _Dh$Dl.Dl;
  var _Dh$Dl2 = {
    Dh: _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotr32H(Dh, Dl),
    Dl: _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotr32L(Dh, Dl)
  };
  Dh = _Dh$Dl2.Dh;
  Dl = _Dh$Dl2.Dl;
  var _u64$add = _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].add(Ch, Cl, Dh, Dl);
  Ch = _u64$add.h;
  Cl = _u64$add.l;
  var _Bh$Bl = {
    Bh: Bh ^ Ch,
    Bl: Bl ^ Cl
  };
  Bh = _Bh$Bl.Bh;
  Bl = _Bh$Bl.Bl;
  var _Bh$Bl2 = {
    Bh: _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotrSH(Bh, Bl, 24),
    Bl: _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotrSL(Bh, Bl, 24)
  };
  Bh = _Bh$Bl2.Bh;
  Bl = _Bh$Bl2.Bl;
  BUF[2 * a] = Al, BUF[2 * a + 1] = Ah;
  BUF[2 * b] = Bl, BUF[2 * b + 1] = Bh;
  BUF[2 * c] = Cl, BUF[2 * c + 1] = Ch;
  BUF[2 * d] = Dl, BUF[2 * d + 1] = Dh;
}
function G2(a, b, c, d, msg, x) {
  // NOTE: V is LE here
  var Xl = msg[x],
    Xh = msg[x + 1]; // prettier-ignore
  var Al = BUF[2 * a],
    Ah = BUF[2 * a + 1]; // prettier-ignore
  var Bl = BUF[2 * b],
    Bh = BUF[2 * b + 1]; // prettier-ignore
  var Cl = BUF[2 * c],
    Ch = BUF[2 * c + 1]; // prettier-ignore
  var Dl = BUF[2 * d],
    Dh = BUF[2 * d + 1]; // prettier-ignore
  // v[a] = (v[a] + v[b] + x) | 0;
  var ll = _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].add3L(Al, Bl, Xl);
  Ah = _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].add3H(ll, Ah, Bh, Xh);
  Al = ll | 0;
  // v[d] = rotr(v[d] ^ v[a], 16)
  var _Dh$Dl3 = {
    Dh: Dh ^ Ah,
    Dl: Dl ^ Al
  };
  Dh = _Dh$Dl3.Dh;
  Dl = _Dh$Dl3.Dl;
  var _Dh$Dl4 = {
    Dh: _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotrSH(Dh, Dl, 16),
    Dl: _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotrSL(Dh, Dl, 16)
  };
  Dh = _Dh$Dl4.Dh;
  Dl = _Dh$Dl4.Dl;
  var _u64$add2 = _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].add(Ch, Cl, Dh, Dl);
  Ch = _u64$add2.h;
  Cl = _u64$add2.l;
  var _Bh$Bl3 = {
    Bh: Bh ^ Ch,
    Bl: Bl ^ Cl
  };
  Bh = _Bh$Bl3.Bh;
  Bl = _Bh$Bl3.Bl;
  var _Bh$Bl4 = {
    Bh: _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotrBH(Bh, Bl, 63),
    Bl: _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].rotrBL(Bh, Bl, 63)
  };
  Bh = _Bh$Bl4.Bh;
  Bl = _Bh$Bl4.Bl;
  BUF[2 * a] = Al, BUF[2 * a + 1] = Ah;
  BUF[2 * b] = Bl, BUF[2 * b + 1] = Bh;
  BUF[2 * c] = Cl, BUF[2 * c + 1] = Ch;
  BUF[2 * d] = Dl, BUF[2 * d + 1] = Dh;
}
var BLAKE2b = /*#__PURE__*/function (_BLAKE) {
  _inherits(BLAKE2b, _BLAKE);
  var _super = _createSuper(BLAKE2b);
  function BLAKE2b() {
    var _this;
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, BLAKE2b);
    _this = _super.call(this, 128, opts.dkLen === undefined ? 64 : opts.dkLen, opts, 64, 16, 16);
    // Same as SHA-512, but LE
    _this.v0l = IV[0] | 0;
    _this.v0h = IV[1] | 0;
    _this.v1l = IV[2] | 0;
    _this.v1h = IV[3] | 0;
    _this.v2l = IV[4] | 0;
    _this.v2h = IV[5] | 0;
    _this.v3l = IV[6] | 0;
    _this.v3h = IV[7] | 0;
    _this.v4l = IV[8] | 0;
    _this.v4h = IV[9] | 0;
    _this.v5l = IV[10] | 0;
    _this.v5h = IV[11] | 0;
    _this.v6l = IV[12] | 0;
    _this.v6h = IV[13] | 0;
    _this.v7l = IV[14] | 0;
    _this.v7h = IV[15] | 0;
    var keyLength = opts.key ? opts.key.length : 0;
    _this.v0l ^= _this.outputLen | keyLength << 8 | 0x01 << 16 | 0x01 << 24;
    if (opts.salt) {
      var salt = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.u32)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toBytes)(opts.salt));
      _this.v4l ^= salt[0];
      _this.v4h ^= salt[1];
      _this.v5l ^= salt[2];
      _this.v5h ^= salt[3];
    }
    if (opts.personalization) {
      var pers = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.u32)((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toBytes)(opts.personalization));
      _this.v6l ^= pers[0];
      _this.v6h ^= pers[1];
      _this.v7l ^= pers[2];
      _this.v7h ^= pers[3];
    }
    if (opts.key) {
      // Pad to blockLen and update
      var tmp = new Uint8Array(_this.blockLen);
      tmp.set((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toBytes)(opts.key));
      _this.update(tmp);
    }
    return _this;
  }
  // prettier-ignore
  _createClass(BLAKE2b, [{
    key: "get",
    value: function get() {
      var v0l = this.v0l,
        v0h = this.v0h,
        v1l = this.v1l,
        v1h = this.v1h,
        v2l = this.v2l,
        v2h = this.v2h,
        v3l = this.v3l,
        v3h = this.v3h,
        v4l = this.v4l,
        v4h = this.v4h,
        v5l = this.v5l,
        v5h = this.v5h,
        v6l = this.v6l,
        v6h = this.v6h,
        v7l = this.v7l,
        v7h = this.v7h;
      return [v0l, v0h, v1l, v1h, v2l, v2h, v3l, v3h, v4l, v4h, v5l, v5h, v6l, v6h, v7l, v7h];
    }
    // prettier-ignore
  }, {
    key: "set",
    value: function set(v0l, v0h, v1l, v1h, v2l, v2h, v3l, v3h, v4l, v4h, v5l, v5h, v6l, v6h, v7l, v7h) {
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
  }, {
    key: "compress",
    value: function compress(msg, offset, isLast) {
      this.get().forEach(function (v, i) {
        return BUF[i] = v;
      }); // First half from state.
      BUF.set(IV, 16); // Second half from IV.
      var _u64$fromBig = _u64_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromBig(BigInt(this.length)),
        h = _u64$fromBig.h,
        l = _u64$fromBig.l;
      BUF[24] = IV[8] ^ l; // Low word of the offset.
      BUF[25] = IV[9] ^ h; // High word.
      // Invert all bits for last block
      if (isLast) {
        BUF[28] = ~BUF[28];
        BUF[29] = ~BUF[29];
      }
      var j = 0;
      var s = _blake2_js__WEBPACK_IMPORTED_MODULE_0__.SIGMA;
      for (var i = 0; i < 12; i++) {
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
  }, {
    key: "destroy",
    value: function destroy() {
      this.destroyed = true;
      this.buffer32.fill(0);
      this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  }]);
  return BLAKE2b;
}(_blake2_js__WEBPACK_IMPORTED_MODULE_0__.BLAKE2);
/**
 * BLAKE2b - optimized for 64-bit platforms. JS doesn't have uint64, so it's slower than BLAKE2s.
 * @param msg - message that would be hashed
 * @param opts - dkLen, key, salt, personalization
 */
var blake2b = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.wrapConstructorWithOpts)(function (opts) {
  return new BLAKE2b(opts);
});

/***/ }),
/* 26 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BLAKE2": () => (/* binding */ BLAKE2),
/* harmony export */   "SIGMA": () => (/* binding */ SIGMA)
/* harmony export */ });
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


// prettier-ignore
var SIGMA = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0,
// For BLAKE2b, the two extra permutations for rounds 10 and 11 are SIGMA[10..11] = SIGMA[0..1].
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3]);
var BLAKE2 = /*#__PURE__*/function (_Hash) {
  _inherits(BLAKE2, _Hash);
  var _super = _createSuper(BLAKE2);
  function BLAKE2(blockLen, outputLen) {
    var _this;
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var keyLen = arguments.length > 3 ? arguments[3] : undefined;
    var saltLen = arguments.length > 4 ? arguments[4] : undefined;
    var persLen = arguments.length > 5 ? arguments[5] : undefined;
    _classCallCheck(this, BLAKE2);
    _this = _super.call(this);
    _this.blockLen = blockLen;
    _this.outputLen = outputLen;
    _this.length = 0;
    _this.pos = 0;
    _this.finished = false;
    _this.destroyed = false;
    _assert_js__WEBPACK_IMPORTED_MODULE_0__["default"].number(blockLen);
    _assert_js__WEBPACK_IMPORTED_MODULE_0__["default"].number(outputLen);
    _assert_js__WEBPACK_IMPORTED_MODULE_0__["default"].number(keyLen);
    if (outputLen < 0 || outputLen > keyLen) throw new Error('Blake2: outputLen bigger than keyLen');
    if (opts.key !== undefined && (opts.key.length < 1 || opts.key.length > keyLen)) throw new Error("Key should be up 1..".concat(keyLen, " byte long or undefined"));
    if (opts.salt !== undefined && opts.salt.length !== saltLen) throw new Error("Salt should be ".concat(saltLen, " byte long or undefined"));
    if (opts.personalization !== undefined && opts.personalization.length !== persLen) throw new Error("Personalization should be ".concat(persLen, " byte long or undefined"));
    _this.buffer32 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.u32)(_this.buffer = new Uint8Array(blockLen));
    return _this;
  }
  _createClass(BLAKE2, [{
    key: "update",
    value: function update(data) {
      _assert_js__WEBPACK_IMPORTED_MODULE_0__["default"].exists(this);
      // Main difference with other hashes: there is flag for last block,
      // so we cannot process current block before we know that there
      // is the next one. This significantly complicates logic and reduces ability
      // to do zero-copy processing
      var blockLen = this.blockLen,
        buffer = this.buffer,
        buffer32 = this.buffer32;
      data = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.toBytes)(data);
      var len = data.length;
      for (var pos = 0; pos < len;) {
        // If buffer is full and we still have input (don't process last block, same as blake2s)
        if (this.pos === blockLen) {
          this.compress(buffer32, 0, false);
          this.pos = 0;
        }
        var take = Math.min(blockLen - this.pos, len - pos);
        var dataOffset = data.byteOffset + pos;
        // full block && aligned to 4 bytes && not last in input
        if (take === blockLen && !(dataOffset % 4) && pos + take < len) {
          var data32 = new Uint32Array(data.buffer, dataOffset, Math.floor((len - pos) / 4));
          for (var pos32 = 0; pos + blockLen < len; pos32 += buffer32.length, pos += blockLen) {
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
  }, {
    key: "digestInto",
    value: function digestInto(out) {
      _assert_js__WEBPACK_IMPORTED_MODULE_0__["default"].exists(this);
      _assert_js__WEBPACK_IMPORTED_MODULE_0__["default"].output(out, this);
      var pos = this.pos,
        buffer32 = this.buffer32;
      this.finished = true;
      // Padding
      this.buffer.subarray(pos).fill(0);
      this.compress(buffer32, 0, true);
      var out32 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.u32)(out);
      this.get().forEach(function (v, i) {
        return out32[i] = v;
      });
    }
  }, {
    key: "digest",
    value: function digest() {
      var buffer = this.buffer,
        outputLen = this.outputLen;
      this.digestInto(buffer);
      var res = buffer.slice(0, outputLen);
      this.destroy();
      return res;
    }
  }, {
    key: "_cloneInto",
    value: function _cloneInto(to) {
      var _to;
      var buffer = this.buffer,
        length = this.length,
        finished = this.finished,
        destroyed = this.destroyed,
        outputLen = this.outputLen,
        pos = this.pos;
      to || (to = new this.constructor({
        dkLen: outputLen
      }));
      (_to = to).set.apply(_to, _toConsumableArray(this.get()));
      to.length = length;
      to.finished = finished;
      to.destroyed = destroyed;
      to.outputLen = outputLen;
      to.buffer.set(buffer);
      to.pos = pos;
      return to;
    }
  }]);
  return BLAKE2;
}(_utils_js__WEBPACK_IMPORTED_MODULE_1__.Hash);

/***/ }),
/* 27 */
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
  if (!Number.isSafeInteger(n) || n < 0) throw new Error("Wrong positive integer: ".concat(n));
}
function bool(b) {
  if (typeof b !== 'boolean') throw new Error("Expected boolean, not ".concat(b));
}
function bytes(b) {
  if (!(b instanceof Uint8Array)) throw new TypeError('Expected Uint8Array');
  for (var _len = arguments.length, lengths = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    lengths[_key - 1] = arguments[_key];
  }
  if (lengths.length > 0 && !lengths.includes(b.length)) throw new TypeError("Expected Uint8Array of length ".concat(lengths, ", not of length=").concat(b.length));
}
function hash(hash) {
  if (typeof hash !== 'function' || typeof hash.create !== 'function') throw new Error('Hash should be wrapped by utils.wrapConstructor');
  number(hash.outputLen);
  number(hash.blockLen);
}
function exists(instance) {
  var checkFinished = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (instance.destroyed) throw new Error('Hash instance has been destroyed');
  if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
function output(out, instance) {
  bytes(out);
  var min = instance.outputLen;
  if (out.length < min) {
    throw new Error("digestInto() expects output buffer of length at least ".concat(min));
  }
}
var assert = {
  number: number,
  bool: bool,
  bytes: bytes,
  hash: hash,
  exists: exists,
  output: output
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assert);

/***/ }),
/* 28 */
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
/* harmony import */ var _noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
// The import here is via the package name. This is to ensure
// that exports mapping/resolution does fall into place.

// Cast array to different type
var u8 = function u8(arr) {
  return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
};
var u32 = function u32(arr) {
  return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
};
// Cast array to view
var createView = function createView(arr) {
  return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
};
// The rotate right (circular right shift) operation for uint32
var rotr = function rotr(word, shift) {
  return word << 32 - shift | word >>> shift;
};
var isLE = new Uint8Array(new Uint32Array([0x11223344]).buffer)[0] === 0x44;
// There is almost no big endian hardware, but js typed arrays uses platform specific endianness.
// So, just to be sure not to corrupt anything.
if (!isLE) throw new Error('Non little-endian hardware is not supported');
var hexes = Array.from({
  length: 256
}, function (v, i) {
  return i.toString(16).padStart(2, '0');
});
/**
 * @example bytesToHex(Uint8Array.from([0xde, 0xad, 0xbe, 0xef]))
 */
function bytesToHex(uint8a) {
  // pre-caching improves the speed 6x
  if (!(uint8a instanceof Uint8Array)) throw new Error('Uint8Array expected');
  var hex = '';
  for (var i = 0; i < uint8a.length; i++) {
    hex += hexes[uint8a[i]];
  }
  return hex;
}
/**
 * @example hexToBytes('deadbeef')
 */
function hexToBytes(hex) {
  if (typeof hex !== 'string') {
    throw new TypeError('hexToBytes: expected string, got ' + _typeof(hex));
  }
  if (hex.length % 2) throw new Error('hexToBytes: received invalid unpadded hex');
  var array = new Uint8Array(hex.length / 2);
  for (var i = 0; i < array.length; i++) {
    var j = i * 2;
    var hexByte = hex.slice(j, j + 2);
    var _byte = Number.parseInt(hexByte, 16);
    if (Number.isNaN(_byte) || _byte < 0) throw new Error('Invalid byte sequence');
    array[i] = _byte;
  }
  return array;
}
// There is no setImmediate in browser and setTimeout is slow. However, call to async function will return Promise
// which will be fullfiled only on next scheduler queue processing step and this is exactly what we need.
var nextTick = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function nextTick() {
    return _ref.apply(this, arguments);
  };
}();
// Returns control to thread each 'tick' ms to avoid blocking
function asyncLoop(_x, _x2, _x3) {
  return _asyncLoop.apply(this, arguments);
}
function _asyncLoop() {
  _asyncLoop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(iters, tick, cb) {
    var ts, i, diff;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          ts = Date.now();
          i = 0;
        case 2:
          if (!(i < iters)) {
            _context2.next = 13;
            break;
          }
          cb(i);
          // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
          diff = Date.now() - ts;
          if (!(diff >= 0 && diff < tick)) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("continue", 10);
        case 7:
          _context2.next = 9;
          return nextTick();
        case 9:
          ts += diff;
        case 10:
          i++;
          _context2.next = 2;
          break;
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _asyncLoop.apply(this, arguments);
}
function utf8ToBytes(str) {
  if (typeof str !== 'string') {
    throw new TypeError("utf8ToBytes expected string, got ".concat(_typeof(str)));
  }
  return new TextEncoder().encode(str);
}
function toBytes(data) {
  if (typeof data === 'string') data = utf8ToBytes(data);
  if (!(data instanceof Uint8Array)) throw new TypeError("Expected input type is Uint8Array (got ".concat(_typeof(data), ")"));
  return data;
}
/**
 * Concats Uint8Array-s into one; like `Buffer.concat([buf1, buf2])`
 * @example concatBytes(buf1, buf2)
 */
function concatBytes() {
  for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }
  if (!arrays.every(function (a) {
    return a instanceof Uint8Array;
  })) throw new Error('Uint8Array list expected');
  if (arrays.length === 1) return arrays[0];
  var length = arrays.reduce(function (a, arr) {
    return a + arr.length;
  }, 0);
  var result = new Uint8Array(length);
  for (var i = 0, pad = 0; i < arrays.length; i++) {
    var arr = arrays[i];
    result.set(arr, pad);
    pad += arr.length;
  }
  return result;
}
// For runtime check if class implements interface
var Hash = /*#__PURE__*/function () {
  function Hash() {
    _classCallCheck(this, Hash);
  }
  _createClass(Hash, [{
    key: "clone",
    value:
    // Safe version that clones internal state
    function clone() {
      return this._cloneInto();
    }
  }]);
  return Hash;
}();
// Check if object doens't have custom constructor (like Uint8Array/Array)
var isPlainObject = function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]' && obj.constructor === Object;
};
function checkOpts(defaults, opts) {
  if (opts !== undefined && (_typeof(opts) !== 'object' || !isPlainObject(opts))) throw new TypeError('Options should be object or undefined');
  var merged = Object.assign(defaults, opts);
  return merged;
}
function wrapConstructor(hashConstructor) {
  var hashC = function hashC(message) {
    return hashConstructor().update(toBytes(message)).digest();
  };
  var tmp = hashConstructor();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = function () {
    return hashConstructor();
  };
  return hashC;
}
function wrapConstructorWithOpts(hashCons) {
  var hashC = function hashC(msg, opts) {
    return hashCons(opts).update(toBytes(msg)).digest();
  };
  var tmp = hashCons({});
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = function (opts) {
    return hashCons(opts);
  };
  return hashC;
}
/**
 * Secure PRNG
 */
function randomBytes() {
  var bytesLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  if (_noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_0__.crypto.web) {
    return _noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_0__.crypto.web.getRandomValues(new Uint8Array(bytesLength));
  } else if (_noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_0__.crypto.node) {
    return new Uint8Array(_noble_hashes_crypto__WEBPACK_IMPORTED_MODULE_0__.crypto.node.randomBytes(bytesLength).buffer);
  } else {
    throw new Error("The environment doesn't have randomBytes function");
  }
}

/***/ }),
/* 29 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crypto": () => (/* binding */ crypto)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var crypto = {
  node: undefined,
  web: (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object' && 'crypto' in self ? self.crypto : undefined
};

/***/ }),
/* 30 */
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
var U32_MASK64 = BigInt(Math.pow(2, 32) - 1);
var _32n = BigInt(32);
// We are not using BigUint64Array, because they are extremely slow as per 2022
function fromBig(n) {
  var le = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (le) return {
    h: Number(n & U32_MASK64),
    l: Number(n >> _32n & U32_MASK64)
  };
  return {
    h: Number(n >> _32n & U32_MASK64) | 0,
    l: Number(n & U32_MASK64) | 0
  };
}
function split(lst) {
  var le = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var Ah = new Uint32Array(lst.length);
  var Al = new Uint32Array(lst.length);
  for (var i = 0; i < lst.length; i++) {
    var _fromBig = fromBig(lst[i], le),
      h = _fromBig.h,
      l = _fromBig.l;
    var _ref = [h, l];
    Ah[i] = _ref[0];
    Al[i] = _ref[1];
  }
  return [Ah, Al];
}
var toBig = function toBig(h, l) {
  return BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
};
// for Shift in [0, 32)
var shrSH = function shrSH(h, l, s) {
  return h >>> s;
};
var shrSL = function shrSL(h, l, s) {
  return h << 32 - s | l >>> s;
};
// Right rotate for Shift in [1, 32)
var rotrSH = function rotrSH(h, l, s) {
  return h >>> s | l << 32 - s;
};
var rotrSL = function rotrSL(h, l, s) {
  return h << 32 - s | l >>> s;
};
// Right rotate for Shift in (32, 64), NOTE: 32 is special case.
var rotrBH = function rotrBH(h, l, s) {
  return h << 64 - s | l >>> s - 32;
};
var rotrBL = function rotrBL(h, l, s) {
  return h >>> s - 32 | l << 64 - s;
};
// Right rotate for shift===32 (just swaps l&h)
var rotr32H = function rotr32H(h, l) {
  return l;
};
var rotr32L = function rotr32L(h, l) {
  return h;
};
// Left rotate for Shift in [1, 32)
var rotlSH = function rotlSH(h, l, s) {
  return h << s | l >>> 32 - s;
};
var rotlSL = function rotlSL(h, l, s) {
  return l << s | h >>> 32 - s;
};
// Left rotate for Shift in (32, 64), NOTE: 32 is special case.
var rotlBH = function rotlBH(h, l, s) {
  return l << s - 32 | h >>> 64 - s;
};
var rotlBL = function rotlBL(h, l, s) {
  return h << s - 32 | l >>> 64 - s;
};
// JS uses 32-bit signed integers for bitwise operations which means we cannot
// simple take carry out of low bit sum by shift, we need to use division.
// Removing "export" has 5% perf penalty -_-
function add(Ah, Al, Bh, Bl) {
  var l = (Al >>> 0) + (Bl >>> 0);
  return {
    h: Ah + Bh + (l / Math.pow(2, 32) | 0) | 0,
    l: l | 0
  };
}
// Addition with more than 2 elements
var add3L = function add3L(Al, Bl, Cl) {
  return (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
};
var add3H = function add3H(low, Ah, Bh, Ch) {
  return Ah + Bh + Ch + (low / Math.pow(2, 32) | 0) | 0;
};
var add4L = function add4L(Al, Bl, Cl, Dl) {
  return (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
};
var add4H = function add4H(low, Ah, Bh, Ch, Dh) {
  return Ah + Bh + Ch + Dh + (low / Math.pow(2, 32) | 0) | 0;
};
var add5L = function add5L(Al, Bl, Cl, Dl, El) {
  return (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
};
var add5H = function add5H(low, Ah, Bh, Ch, Dh, Eh) {
  return Ah + Bh + Ch + Dh + Eh + (low / Math.pow(2, 32) | 0) | 0;
};
// prettier-ignore
var u64 = {
  fromBig: fromBig,
  split: split,
  toBig: toBig,
  shrSH: shrSH,
  shrSL: shrSL,
  rotrSH: rotrSH,
  rotrSL: rotrSL,
  rotrBH: rotrBH,
  rotrBL: rotrBL,
  rotr32H: rotr32H,
  rotr32L: rotr32L,
  rotlSH: rotlSH,
  rotlSL: rotlSL,
  rotlBH: rotlBH,
  rotlBL: rotlBL,
  add: add,
  add3L: add3L,
  add3H: add3H,
  add4L: add4L,
  add4H: add4H,
  add5H: add5H,
  add5L: add5L
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (u64);

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decimalize": () => (/* binding */ decimalize),
/* harmony export */   "ensureBigInt": () => (/* binding */ ensureBigInt),
/* harmony export */   "sumBy": () => (/* binding */ sumBy),
/* harmony export */   "undecimalize": () => (/* binding */ undecimalize)
/* harmony export */ });
/* harmony import */ var _arrayUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _bigIntLiterals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _objectUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function ensureBigInt(number) {
  return typeof number === "bigint" ? number : BigInt(number);
}
function undecimalize(decimalStr, options) {
  if (!decimalStr) {
    return _bigIntLiterals__WEBPACK_IMPORTED_MODULE_0__._0n;
  }
  options = typeof options == "number" ? {
    decimals: options
  } : options;
  if ((0,_objectUtils__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(options)) {
    options = {};
  }
  options.decimals = options.decimals || 0;
  options.decimalMark = options.decimalMark || ".";
  var fragments = decimalStr.split(options.decimalMark);
  if (fragments.length > 2) {
    throw new Error("Invalid numeric string.");
  }
  var _fragments = _slicedToArray(fragments, 2),
    integer = _fragments[0],
    decimal = _fragments[1];
  integer = _removeLeadingZeros(integer);
  var negative = integer.startsWith("-") ? "-" : "";
  if (!decimal) {
    decimal = "0".repeat(options.decimals);
  } else if (decimal.length < options.decimals) {
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
  options = typeof options == "number" ? {
    decimals: options
  } : options;
  options.decimals = options.decimals || 0;
  options.decimalMark = options.decimalMark || ".";
  var pow = Math.pow(_bigIntLiterals__WEBPACK_IMPORTED_MODULE_0__._10n, BigInt(options.decimals));
  var integer = value / pow;
  var decimal = value - integer * pow;
  return _buildFormattedDecimal(integer.toString(10), decimal.toString(10), options);
}
function _buildFormattedDecimal(integer, decimal, options) {
  var integerPart = _addThousandMarks(integer, options.thousandMark);
  var decimalPart = _stripTrailingZeros(decimal.padStart(options.decimals, "0"));
  if (decimalPart) {
    return "".concat(integerPart).concat(options.decimalMark).concat(decimalPart);
  } else {
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
  var acc = _bigIntLiterals__WEBPACK_IMPORTED_MODULE_0__._0n;
  if ((0,_arrayUtils__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(collection)) {
    return acc;
  }
  var _iterator = _createForOfIteratorHelper(collection),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      if ((0,_objectUtils__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(condition) || condition(item)) {
        acc += iteratee(item);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return acc;
}

/***/ }),
/* 32 */
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
var _0n = BigInt(0);
var _1n = BigInt(1);
var _7n = BigInt(7);
var _10n = BigInt(10);
var _63n = BigInt(63);
var _127n = BigInt(127);
var _128n = BigInt(128);

/***/ }),
/* 33 */
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
  return array.some(function (item, index) {
    return array.indexOf(item) !== index;
  });
}
/**
 * Check for duplicate keys in complex elements
 */
function hasDuplicatesBy(array, selector) {
  return array.some(function (item, index) {
    return array.findIndex(function (x) {
      return selector(x) === selector(item);
    }) !== index;
  });
}
function chunk(array, size) {
  if (array.length <= size) {
    return [array];
  }
  var chunks = [];
  for (var i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}
function orderBy(array, iteratee) {
  var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "asc";
  return array.sort(function (a, b) {
    if (iteratee(a) > iteratee(b)) {
      return order === "asc" ? 1 : -1;
    } else if (iteratee(a) < iteratee(b)) {
      return order === "asc" ? -1 : 1;
    } else {
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
  for (var i = 0; i < array1.length; i++) {
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
  for (var i = 0; i < target.length; i++) {
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
  var offset = array.length - target.length;
  for (var i = target.length - 1; i >= 0; i--) {
    if (target[i] !== array[i + offset]) {
      return false;
    }
  }
  return true;
}

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializeBox": () => (/* binding */ serializeBox)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _vlq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



function serializeBox(box) {
  return (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.concatBytes)((0,_vlq__WEBPACK_IMPORTED_MODULE_1__.vqlEncodeBigInt)((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.ensureBigInt)(box.value)), (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.hexToBytes)(box.ergoTree), (0,_vlq__WEBPACK_IMPORTED_MODULE_1__.vlqEncode)(box.creationHeight), serializeTokens(box.assets), serializeRegisters(box.additionalRegisters), (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.hexToBytes)(box.transactionId), (0,_vlq__WEBPACK_IMPORTED_MODULE_1__.vlqEncode)(box.index));
}
function serializeTokens(tokens) {
  if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(tokens)) {
    return Uint8Array.from([0]);
  }
  return _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.concatBytes.apply(void 0, [(0,_vlq__WEBPACK_IMPORTED_MODULE_1__.vlqEncode)(tokens.length)].concat(_toConsumableArray(tokens.map(function (asset) {
    return (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.concatBytes)((0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.hexToBytes)(asset.tokenId), (0,_vlq__WEBPACK_IMPORTED_MODULE_1__.vqlEncodeBigInt)((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.ensureBigInt)(asset.amount)));
  }))));
}
function serializeRegisters(registers) {
  var keys = Object.keys(registers);
  if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(keys)) {
    return Uint8Array.from([0]);
  }
  var serializedRegisters = [];
  keys = keys.sort();
  var _iterator = _createForOfIteratorHelper(keys),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      var val = registers[key];
      if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.isDefined)(val)) {
        serializedRegisters.push((0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.hexToBytes)(val));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.concatBytes)((0,_vlq__WEBPACK_IMPORTED_MODULE_1__.vlqEncode)(serializedRegisters.length), _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.concatBytes.apply(void 0, serializedRegisters));
}

/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vlqDecode": () => (/* binding */ vlqDecode),
/* harmony export */   "vlqDecodeBigInt": () => (/* binding */ vlqDecodeBigInt),
/* harmony export */   "vlqEncode": () => (/* binding */ vlqEncode),
/* harmony export */   "vqlEncodeBigInt": () => (/* binding */ vqlEncodeBigInt)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);

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
  } else if (value < 0) {
    throw new RangeError("Variable Length Quantity not supported for negative numbers");
  }
  var bytes = [];
  do {
    var lower7bits = value & 0x7f;
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
  var value = 0;
  var shift = 0;
  var lower7bits = 0;
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
  } else if (value < _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._0n) {
    throw new RangeError("Variable Length Quantity not supported for negative numbers");
  }
  var bytes = [];
  do {
    var lower7bits = Number(value & _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._127n);
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
  var value = _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._0n;
  var shift = _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._0n;
  var lower7bits = _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._0n;
  do {
    lower7bits = BigInt(reader.readByte());
    value |= (lower7bits & _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._127n) << shift;
    shift += _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._7n;
  } while ((lower7bits & _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._128n) != _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._0n);
  return value;
}

/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DuplicateInputError": () => (/* binding */ DuplicateInputError)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var DuplicateInputError = /*#__PURE__*/function (_Error) {
  _inherits(DuplicateInputError, _Error);
  var _super = _createSuper(DuplicateInputError);
  function DuplicateInputError(boxId) {
    _classCallCheck(this, DuplicateInputError);
    return _super.call(this, "Box '".concat(boxId, "' is already included."));
  }
  return _createClass(DuplicateInputError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundError": () => (/* binding */ NotFoundError)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var NotFoundError = /*#__PURE__*/function (_Error) {
  _inherits(NotFoundError, _Error);
  var _super = _createSuper(NotFoundError);
  function NotFoundError(message) {
    _classCallCheck(this, NotFoundError);
    return _super.call(this, message);
  }
  return _createClass(NotFoundError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collection": () => (/* binding */ Collection)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _Symbol$iterator;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

_Symbol$iterator = Symbol.iterator;
var Collection = /*#__PURE__*/function () {
  function Collection() {
    _classCallCheck(this, Collection);
    _defineProperty(this, "_items", void 0);
    this._items = [];
  }
  _createClass(Collection, [{
    key: "_isIndexOutOfBounds",
    value: function _isIndexOutOfBounds(index) {
      return index < 0 || index >= this._items.length;
    }
  }, {
    key: _Symbol$iterator,
    value: function value() {
      var _this = this;
      var counter = 0;
      return {
        next: function next() {
          return {
            done: counter >= _this.length,
            value: _this._items[counter++]
          };
        }
      };
    }
  }, {
    key: "length",
    get: function get() {
      return this._items.length;
    }
  }, {
    key: "isEmpty",
    get: function get() {
      return this.length === 0;
    }
  }, {
    key: "at",
    value: function at(index) {
      if (this._isIndexOutOfBounds(index)) {
        throw new RangeError("Index '".concat(index, "' is out of range."));
      }
      return this._items[index];
    }
  }, {
    key: "add",
    value: function add(items, options) {
      return this._addOneOrMore(items, options);
    }
  }, {
    key: "_addOne",
    value: function _addOne(item, options) {
      if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isDefined)(options) && (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isDefined)(options.index)) {
        if (options.index === this.length) {
          this._items.push(this._map(item));
          return this.length;
        }
        if (this._isIndexOutOfBounds(options.index)) {
          throw new RangeError("Index '".concat(options.index, "' is out of range."));
        }
        this._items.splice(options.index, 0, this._map(item));
        return this.length;
      }
      this._items.push(this._map(item));
      return this._items.length;
    }
  }, {
    key: "_addOneOrMore",
    value: function _addOneOrMore(items, options) {
      if (Array.isArray(items)) {
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isDefined)(options) && (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isDefined)(options.index)) {
          items = items.reverse();
        }
        var _iterator = _createForOfIteratorHelper(items),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            this._addOne(item, options);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        this._addOne(items, options);
      }
      return this.length;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return _toConsumableArray(this._items);
    }
  }]);
  return Collection;
}();

/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutputsCollection": () => (/* binding */ OutputsCollection)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var OutputsCollection = /*#__PURE__*/function (_Collection) {
  _inherits(OutputsCollection, _Collection);
  var _super = _createSuper(OutputsCollection);
  function OutputsCollection(outputs) {
    var _this;
    _classCallCheck(this, OutputsCollection);
    _this = _super.call(this);
    if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isDefined)(outputs)) {
      _this.add(outputs);
    }
    return _this;
  }
  _createClass(OutputsCollection, [{
    key: "_map",
    value: function _map(output) {
      return output;
    }
  }, {
    key: "remove",
    value: function remove(outputs) {
      var index = -1;
      if (typeof outputs === "number") {
        if (this._isIndexOutOfBounds(outputs)) {
          throw new RangeError("Index '".concat(outputs, "' is out of range."));
        }
        index = outputs;
      } else {
        index = this._items.lastIndexOf(outputs);
        if (this._isIndexOutOfBounds(index)) {
          throw new _errors__WEBPACK_IMPORTED_MODULE_1__.NotFoundError("The output you are trying to remove is not present in the outputs collection.");
        }
      }
      if (index > -1) {
        this._items.splice(index, 1);
      }
      return this.length;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new OutputsCollection(this._items);
    }
  }, {
    key: "sum",
    value: function sum(basis) {
      var tokens = {};
      var nanoErgs = _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__._0n;
      if (basis) {
        if (basis.nanoErgs) {
          nanoErgs = basis.nanoErgs;
        }
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.some)(basis.tokens)) {
          var _iterator = _createForOfIteratorHelper(basis.tokens),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var token = _step.value;
              if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(token.amount)) {
                continue;
              }
              tokens[token.tokenId] = (tokens[token.tokenId] || _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__._0n) + token.amount;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
      var _iterator2 = _createForOfIteratorHelper(this._items),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var box = _step2.value;
          nanoErgs += box.value;
          var _iterator3 = _createForOfIteratorHelper(box.tokens),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _token = _step3.value;
              tokens[_token.tokenId] = (tokens[_token.tokenId] || _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__._0n) + _token.amount;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return {
        nanoErgs: nanoErgs,
        tokens: Object.keys(tokens).map(function (tokenId) {
          return {
            tokenId: tokenId,
            amount: tokens[tokenId]
          };
        })
      };
    }
  }]);
  return OutputsCollection;
}(_collection__WEBPACK_IMPORTED_MODULE_4__.Collection);

/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionBuilderSettings": () => (/* binding */ TransactionBuilderSettings)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var TransactionBuilderSettings = /*#__PURE__*/function () {
  function TransactionBuilderSettings() {
    _classCallCheck(this, TransactionBuilderSettings);
    _defineProperty(this, "_maxDistinctTokensPerChangeBox", void 0);
    _defineProperty(this, "_allowTokenBurn", void 0);
    _defineProperty(this, "_allowTokenPluginFromPlugins", void 0);
    this._maxDistinctTokensPerChangeBox = _models__WEBPACK_IMPORTED_MODULE_0__.MAX_TOKENS_PER_BOX;
    this._allowTokenBurn = false;
    this._allowTokenPluginFromPlugins = false;
  }
  _createClass(TransactionBuilderSettings, [{
    key: "maxTokensPerChangeBox",
    get: function get() {
      return this._maxDistinctTokensPerChangeBox;
    }
  }, {
    key: "canBurnTokens",
    get: function get() {
      return this._allowTokenBurn;
    }
  }, {
    key: "canBurnTokensFromPlugins",
    get: function get() {
      return this.canBurnTokens || this._allowTokenPluginFromPlugins;
    }
    /**
     * Define max number of distinct tokens per change box
     */
  }, {
    key: "setMaxTokensPerChangeBox",
    value: function setMaxTokensPerChangeBox(max) {
      this._maxDistinctTokensPerChangeBox = max;
      return this;
    }
    /**
     * Allows or denies token burning from all contexts
     */
  }, {
    key: "allowTokenBurning",
    value: function allowTokenBurning(allow) {
      this._allowTokenBurn = allow;
      return this;
    }
    /**
     * Allows or denies token burning **only** from plugins context.
     */
  }, {
    key: "allowTokenBurningFromPlugins",
    value: function allowTokenBurningFromPlugins(allow) {
      this._allowTokenPluginFromPlugins = allow;
      return this;
    }
  }]);
  return TransactionBuilderSettings;
}();

/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAX_TOKENS_PER_BOX": () => (/* binding */ MAX_TOKENS_PER_BOX),
/* harmony export */   "TokensCollection": () => (/* binding */ TokensCollection)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _errors_insufficientTokenAmount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
/* harmony import */ var _errors_maxTokensOverflow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var MAX_TOKENS_PER_BOX = 120;
var TokensCollection = /*#__PURE__*/function (_Collection) {
  _inherits(TokensCollection, _Collection);
  var _super = _createSuper(TokensCollection);
  function TokensCollection(tokens, options) {
    var _this;
    _classCallCheck(this, TokensCollection);
    _this = _super.call(this);
    if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isDefined)(tokens)) {
      _this.add(tokens, options);
    }
    return _this;
  }
  _createClass(TokensCollection, [{
    key: "_map",
    value: function _map(token) {
      return {
        tokenId: token.tokenId,
        amount: (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__.ensureBigInt)(token.amount)
      };
    }
  }, {
    key: "_addOne",
    value: function _addOne(token, options) {
      if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(options) || options.sum && !(0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isDefined)(options.index)) {
        if (this._sum(this._map(token))) {
          return this.length;
        }
      }
      if (this._items.length >= MAX_TOKENS_PER_BOX) {
        throw new _errors_maxTokensOverflow__WEBPACK_IMPORTED_MODULE_2__.MaxTokensOverflow();
      }
      _get(_getPrototypeOf(TokensCollection.prototype), "_addOne", this).call(this, token, options);
      return this.length;
    }
  }, {
    key: "add",
    value: function add(items, options) {
      return _get(_getPrototypeOf(TokensCollection.prototype), "add", this).call(this, items, options);
    }
  }, {
    key: "_sum",
    value: function _sum(token) {
      var _iterator = _createForOfIteratorHelper(this._items),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var t = _step.value;
          if (t.tokenId === token.tokenId) {
            t.amount += token.amount;
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return false;
    }
  }, {
    key: "remove",
    value: function remove(tokenIdOrIndex, amount) {
      var index = -1;
      if (typeof tokenIdOrIndex === "number") {
        if (this._isIndexOutOfBounds(tokenIdOrIndex)) {
          throw new RangeError("Index '".concat(tokenIdOrIndex, "' is out of range."));
        }
        index = tokenIdOrIndex;
      } else {
        index = this._items.findIndex(function (token) {
          return token.tokenId === tokenIdOrIndex;
        });
        if (this._isIndexOutOfBounds(index)) {
          throw new _errors__WEBPACK_IMPORTED_MODULE_3__.NotFoundError("TokenId '".concat(tokenIdOrIndex, "' not found in assets collection."));
        }
      }
      if (amount && index > -1) {
        var bigAmount = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__.ensureBigInt)(amount);
        var token = this._items[index];
        if (bigAmount > token.amount) {
          throw new _errors_insufficientTokenAmount__WEBPACK_IMPORTED_MODULE_4__.InsufficientTokenAmount("Insufficient token amount to perform a subtraction operation.");
        } else if (bigAmount < token.amount) {
          token.amount -= bigAmount;
          return this.length;
        }
      }
      if (index > -1) {
        this._items.splice(index, 1);
      }
      return this.length;
    }
  }, {
    key: "contains",
    value: function contains(tokenId) {
      return this._items.some(function (x) {
        return x.tokenId === tokenId;
      });
    }
  }]);
  return TokensCollection;
}(_collection__WEBPACK_IMPORTED_MODULE_5__.Collection);

/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaxTokensOverflow": () => (/* binding */ MaxTokensOverflow)
/* harmony export */ });
/* harmony import */ var _models_collections_tokensCollection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MaxTokensOverflow = /*#__PURE__*/function (_Error) {
  _inherits(MaxTokensOverflow, _Error);
  var _super = _createSuper(MaxTokensOverflow);
  function MaxTokensOverflow() {
    _classCallCheck(this, MaxTokensOverflow);
    return _super.call(this, "A box must contain no more than ".concat(_models_collections_tokensCollection__WEBPACK_IMPORTED_MODULE_0__.MAX_TOKENS_PER_BOX, " distinct tokens."));
  }
  return _createClass(MaxTokensOverflow);
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsufficientTokenAmount": () => (/* binding */ InsufficientTokenAmount)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var InsufficientTokenAmount = /*#__PURE__*/function (_Error) {
  _inherits(InsufficientTokenAmount, _Error);
  var _super = _createSuper(InsufficientTokenAmount);
  function InsufficientTokenAmount(message) {
    _classCallCheck(this, InsufficientTokenAmount);
    return _super.call(this, message);
  }
  return _createClass(InsufficientTokenAmount);
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isHex": () => (/* binding */ isHex)
/* harmony export */ });
var HEX_PATTERN = /^[0-9A-Fa-f]+$/;
function isHex(value) {
  if (!value) {
    return false;
  }
  return HEX_PATTERN.test(value);
}

/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErgoAddress": () => (/* binding */ ErgoAddress)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var _noble_hashes_blake2b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _scure_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _errors_invalidAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






var CHECKSUM_LENGTH = 4;
var BLAKE_256_HASH_LENGTH = 32;
var P2PK_ERGOTREE_PREFIX = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.hexToBytes)("0008cd");
var P2PK_ERGOTREE_LENGTH = 36;
var P2SH_ERGOTREE_SUFFIX = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.hexToBytes)("d40801");
var P2SH_ERGOTREE_PREFIX = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.hexToBytes)("00ea02d193b4cbe4e3010e040004300e18");
var P2SH_ERGOTREE_LENGTH = 44;
var P2SH_HASH_LENGTH = 24;
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
  return (0,_noble_hashes_blake2b__WEBPACK_IMPORTED_MODULE_0__.blake2b)(input, {
    dkLen: BLAKE_256_HASH_LENGTH
  });
}
function _getErgoTreeType(ergoTree) {
  if (ergoTree.length === P2PK_ERGOTREE_LENGTH && (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.startsWith)(ergoTree, P2PK_ERGOTREE_PREFIX)) {
    return _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2PK;
  } else if (ergoTree.length === P2SH_ERGOTREE_LENGTH && (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.startsWith)(ergoTree, P2SH_ERGOTREE_PREFIX) && (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.endsWith)(ergoTree, P2SH_ERGOTREE_SUFFIX)) {
    return _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2SH;
  } else {
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
var ErgoAddress = /*#__PURE__*/function () {
  /**
   * New instance from ErgoTree bytes
   * @param ergoTree ErgoTree bytes
   */
  function ErgoAddress(ergoTree, network) {
    _classCallCheck(this, ErgoAddress);
    _defineProperty(this, "_ergoTree", void 0);
    _defineProperty(this, "_network", void 0);
    _defineProperty(this, "_type", void 0);
    this._ergoTree = ergoTree;
    this._network = network;
    this._type = _getErgoTreeType(ergoTree);
  }
  /**
   * Create a new instance from an ErgoTree
   * @param ergoTree ErgoTree hex string
   */
  _createClass(ErgoAddress, [{
    key: "network",
    get: function get() {
      return this._network;
    }
    /**
     * ErgoTree hex string
     */
  }, {
    key: "ergoTree",
    get: function get() {
      return (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.bytesToHex)(this._ergoTree);
    }
  }, {
    key: "type",
    get: function get() {
      return this._type;
    }
  }, {
    key: "getPublicKeys",
    value: function getPublicKeys() {
      if (this.type === _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2PK) {
        return [this._ergoTree.subarray(P2PK_ERGOTREE_PREFIX.length)];
      }
      return [];
    }
  }, {
    key: "toP2SH",
    value: function toP2SH(network) {
      if (this.type === _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2SH) {
        return this.encode();
      }
      var hash = blake2b256(this._ergoTree).subarray(0, P2SH_HASH_LENGTH);
      return this._encode(hash, _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2SH, network);
    }
    /**
     * Encode address as base58 string
     */
  }, {
    key: "encode",
    value: function encode(network) {
      var body;
      if (this.type === _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2PK) {
        body = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.first)(this.getPublicKeys());
      } else if (this.type === _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2SH) {
        body = this._ergoTree.subarray(P2SH_ERGOTREE_PREFIX.length, P2SH_ERGOTREE_PREFIX.length + P2SH_HASH_LENGTH);
      } else {
        body = this._ergoTree;
      }
      return this._encode(body, this.type, network);
    }
  }, {
    key: "_encode",
    value: function _encode(body, type, network) {
      if (!(0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_5__.isDefined)(network)) {
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_5__.isDefined)(this.network)) {
          network = this.network;
        } else {
          network = _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.Network.Mainnet;
        }
      }
      var head = Uint8Array.from([network + type]);
      body = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.concatBytes)(head, body);
      var checksum = blake2b256(body).subarray(0, CHECKSUM_LENGTH);
      return _scure_base__WEBPACK_IMPORTED_MODULE_2__.base58.encode((0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.concatBytes)(body, checksum));
    }
    /**
     * Encode address as base58 string
     */
  }, {
    key: "toString",
    value: function toString(network) {
      return this.encode(network);
    }
  }], [{
    key: "fromErgoTree",
    value: function fromErgoTree(ergoTree, network) {
      return new ErgoAddress((0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.hexToBytes)(ergoTree), network);
    }
    /**
     * Create a new instance from a public key
     * @param publicKey Public key hex string
     */
  }, {
    key: "fromPublicKey",
    value: function fromPublicKey(publicKey, network) {
      var ergoTree = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.concatBytes)(P2PK_ERGOTREE_PREFIX, _ensureBytes(publicKey));
      return new ErgoAddress(ergoTree, network);
    }
  }, {
    key: "fromHash",
    value: function fromHash(hash, network) {
      hash = _ensureBytes(hash);
      if (hash.length === BLAKE_256_HASH_LENGTH) {
        hash = hash.subarray(0, P2SH_HASH_LENGTH);
      } else if (hash.length != P2SH_HASH_LENGTH) {
        throw Error("Invalid hash length: ".concat(hash.length));
      }
      var ergoTree = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_1__.concatBytes)(P2SH_ERGOTREE_PREFIX, hash, P2SH_ERGOTREE_SUFFIX);
      return new ErgoAddress(ergoTree, network);
    }
    /**
     * Create a new checked instance from an address string
     * @param encodedAddress Address encoded as base58
     */
  }, {
    key: "fromBase58",
    value: function fromBase58(encodedAddress) {
      var skipCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var bytes = _scure_base__WEBPACK_IMPORTED_MODULE_2__.base58.decode(encodedAddress);
      if (!skipCheck && !ErgoAddress.validate(bytes)) {
        throw new _errors_invalidAddress__WEBPACK_IMPORTED_MODULE_6__.InvalidAddress(encodedAddress);
      }
      var network = _getEncodedNetworkType(bytes);
      var type = _getEncodedAddressType(bytes);
      var body = bytes.subarray(1, bytes.length - CHECKSUM_LENGTH);
      if (type === _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2PK) {
        return this.fromPublicKey(body, network);
      } else if (type === _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.AddressType.P2SH) {
        return this.fromHash(body, network);
      } else {
        return new ErgoAddress(body, network);
      }
    }
    /**
     * Validate an address
     * @param address Address bytes or string
     */
  }, {
    key: "validate",
    value: function validate(address) {
      var bytes = typeof address === "string" ? _scure_base__WEBPACK_IMPORTED_MODULE_2__.base58.decode(address) : address;
      if (bytes.length < CHECKSUM_LENGTH) {
        return false;
      }
      var script = bytes.subarray(0, bytes.length - CHECKSUM_LENGTH);
      var checksum = bytes.subarray(bytes.length - CHECKSUM_LENGTH, bytes.length);
      var blakeHash = blake2b256(script);
      var calculatedChecksum = blakeHash.subarray(0, CHECKSUM_LENGTH);
      return (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.areEqual)(calculatedChecksum, checksum);
    }
  }, {
    key: "getNetworkType",
    value: function getNetworkType(address) {
      return _getEncodedNetworkType(_scure_base__WEBPACK_IMPORTED_MODULE_2__.base58.decode(address));
    }
  }, {
    key: "getAddressType",
    value: function getAddressType(address) {
      return _getEncodedAddressType(_scure_base__WEBPACK_IMPORTED_MODULE_2__.base58.decode(address));
    }
  }]);
  return ErgoAddress;
}();

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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function assertNumber(n) {
  if (!Number.isSafeInteger(n)) throw new Error("Wrong integer: ".concat(n));
}
function chain() {
  var wrap = function wrap(a, b) {
    return function (c) {
      return a(b(c));
    };
  };
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var encode = Array.from(args).reverse().reduce(function (acc, i) {
    return acc ? wrap(acc, i.encode) : i.encode;
  }, undefined);
  var decode = args.reduce(function (acc, i) {
    return acc ? wrap(acc, i.decode) : i.decode;
  }, undefined);
  return {
    encode: encode,
    decode: decode
  };
}
function alphabet(alphabet) {
  return {
    encode: function encode(digits) {
      if (!Array.isArray(digits) || digits.length && typeof digits[0] !== 'number') throw new Error('alphabet.encode input should be an array of numbers');
      return digits.map(function (i) {
        assertNumber(i);
        if (i < 0 || i >= alphabet.length) throw new Error("Digit index outside alphabet: ".concat(i, " (alphabet: ").concat(alphabet.length, ")"));
        return alphabet[i];
      });
    },
    decode: function decode(input) {
      if (!Array.isArray(input) || input.length && typeof input[0] !== 'string') throw new Error('alphabet.decode input should be array of strings');
      return input.map(function (letter) {
        if (typeof letter !== 'string') throw new Error("alphabet.decode: not string element=".concat(letter));
        var index = alphabet.indexOf(letter);
        if (index === -1) throw new Error("Unknown letter: \"".concat(letter, "\". Allowed: ").concat(alphabet));
        return index;
      });
    }
  };
}
function join() {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (typeof separator !== 'string') throw new Error('join separator should be string');
  return {
    encode: function encode(from) {
      if (!Array.isArray(from) || from.length && typeof from[0] !== 'string') throw new Error('join.encode input should be array of strings');
      var _iterator = _createForOfIteratorHelper(from),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;
          if (typeof i !== 'string') throw new Error("join.encode: non-string input=".concat(i));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return from.join(separator);
    },
    decode: function decode(to) {
      if (typeof to !== 'string') throw new Error('join.decode input should be string');
      return to.split(separator);
    }
  };
}
function padding(bits) {
  var chr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '=';
  assertNumber(bits);
  if (typeof chr !== 'string') throw new Error('padding chr should be string');
  return {
    encode: function encode(data) {
      if (!Array.isArray(data) || data.length && typeof data[0] !== 'string') throw new Error('padding.encode input should be array of strings');
      var _iterator2 = _createForOfIteratorHelper(data),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var i = _step2.value;
          if (typeof i !== 'string') throw new Error("padding.encode: non-string input=".concat(i));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      while (data.length * bits % 8) data.push(chr);
      return data;
    },
    decode: function decode(input) {
      if (!Array.isArray(input) || input.length && typeof input[0] !== 'string') throw new Error('padding.encode input should be array of strings');
      var _iterator3 = _createForOfIteratorHelper(input),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var i = _step3.value;
          if (typeof i !== 'string') throw new Error("padding.decode: non-string input=".concat(i));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var end = input.length;
      if (end * bits % 8) throw new Error('Invalid padding: string should have whole number of bytes');
      for (; end > 0 && input[end - 1] === chr; end--) {
        if (!((end - 1) * bits % 8)) throw new Error('Invalid padding: string has too much padding');
      }
      return input.slice(0, end);
    }
  };
}
function normalize(fn) {
  if (typeof fn !== 'function') throw new Error('normalize fn should be function');
  return {
    encode: function encode(from) {
      return from;
    },
    decode: function decode(to) {
      return fn(to);
    }
  };
}
function convertRadix(data, from, to) {
  if (from < 2) throw new Error("convertRadix: wrong from=".concat(from, ", base cannot be less than 2"));
  if (to < 2) throw new Error("convertRadix: wrong to=".concat(to, ", base cannot be less than 2"));
  if (!Array.isArray(data)) throw new Error('convertRadix: data should be array');
  if (!data.length) return [];
  var pos = 0;
  var res = [];
  var digits = Array.from(data);
  digits.forEach(function (d) {
    assertNumber(d);
    if (d < 0 || d >= from) throw new Error("Wrong integer: ".concat(d));
  });
  while (true) {
    var carry = 0;
    var done = true;
    for (var i = pos; i < digits.length; i++) {
      var digit = digits[i];
      var digitBase = from * carry + digit;
      if (!Number.isSafeInteger(digitBase) || from * carry / from !== carry || digitBase - digit !== from * carry) {
        throw new Error('convertRadix: carry overflow');
      }
      carry = digitBase % to;
      digits[i] = Math.floor(digitBase / to);
      if (!Number.isSafeInteger(digits[i]) || digits[i] * to + carry !== digitBase) throw new Error('convertRadix: carry overflow');
      if (!done) continue;else if (!digits[i]) pos = i;else done = false;
    }
    res.push(carry);
    if (done) break;
  }
  for (var _i = 0; _i < data.length - 1 && data[_i] === 0; _i++) res.push(0);
  return res.reverse();
}
var gcd = function gcd(a, b) {
  return !b ? a : gcd(b, a % b);
};
var radix2carry = function radix2carry(from, to) {
  return from + (to - gcd(from, to));
};
function convertRadix2(data, from, to, padding) {
  if (!Array.isArray(data)) throw new Error('convertRadix2: data should be array');
  if (from <= 0 || from > 32) throw new Error("convertRadix2: wrong from=".concat(from));
  if (to <= 0 || to > 32) throw new Error("convertRadix2: wrong to=".concat(to));
  if (radix2carry(from, to) > 32) {
    throw new Error("convertRadix2: carry overflow from=".concat(from, " to=").concat(to, " carryBits=").concat(radix2carry(from, to)));
  }
  var carry = 0;
  var pos = 0;
  var mask = Math.pow(2, to) - 1;
  var res = [];
  var _iterator4 = _createForOfIteratorHelper(data),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var n = _step4.value;
      assertNumber(n);
      if (n >= Math.pow(2, from)) throw new Error("convertRadix2: invalid data word=".concat(n, " from=").concat(from));
      carry = carry << from | n;
      if (pos + from > 32) throw new Error("convertRadix2: carry overflow pos=".concat(pos, " from=").concat(from));
      pos += from;
      for (; pos >= to; pos -= to) res.push((carry >> pos - to & mask) >>> 0);
      carry &= Math.pow(2, pos) - 1;
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  carry = carry << to - pos & mask;
  if (!padding && pos >= from) throw new Error('Excess padding');
  if (!padding && carry) throw new Error("Non-zero padding: ".concat(carry));
  if (padding && pos > 0) res.push(carry >>> 0);
  return res;
}
function radix(num) {
  assertNumber(num);
  return {
    encode: function encode(bytes) {
      if (!(bytes instanceof Uint8Array)) throw new Error('radix.encode input should be Uint8Array');
      return convertRadix(Array.from(bytes), Math.pow(2, 8), num);
    },
    decode: function decode(digits) {
      if (!Array.isArray(digits) || digits.length && typeof digits[0] !== 'number') throw new Error('radix.decode input should be array of strings');
      return Uint8Array.from(convertRadix(digits, num, Math.pow(2, 8)));
    }
  };
}
function radix2(bits) {
  var revPadding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  assertNumber(bits);
  if (bits <= 0 || bits > 32) throw new Error('radix2: bits should be in (0..32]');
  if (radix2carry(8, bits) > 32 || radix2carry(bits, 8) > 32) throw new Error('radix2: carry overflow');
  return {
    encode: function encode(bytes) {
      if (!(bytes instanceof Uint8Array)) throw new Error('radix2.encode input should be Uint8Array');
      return convertRadix2(Array.from(bytes), 8, bits, !revPadding);
    },
    decode: function decode(digits) {
      if (!Array.isArray(digits) || digits.length && typeof digits[0] !== 'number') throw new Error('radix2.decode input should be array of strings');
      return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
    }
  };
}
function unsafeWrapper(fn) {
  if (typeof fn !== 'function') throw new Error('unsafeWrapper fn should be function');
  return function () {
    try {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return fn.apply(null, args);
    } catch (e) {}
  };
}
function checksum(len, fn) {
  assertNumber(len);
  if (typeof fn !== 'function') throw new Error('checksum fn should be function');
  return {
    encode: function encode(data) {
      if (!(data instanceof Uint8Array)) throw new Error('checksum.encode: input should be Uint8Array');
      var checksum = fn(data).slice(0, len);
      var res = new Uint8Array(data.length + len);
      res.set(data);
      res.set(checksum, data.length);
      return res;
    },
    decode: function decode(data) {
      if (!(data instanceof Uint8Array)) throw new Error('checksum.decode: input should be Uint8Array');
      var payload = data.slice(0, -len);
      var newChecksum = fn(payload).slice(0, len);
      var oldChecksum = data.slice(-len);
      for (var i = 0; i < len; i++) if (newChecksum[i] !== oldChecksum[i]) throw new Error('Invalid checksum');
      return payload;
    }
  };
}
var utils = {
  alphabet: alphabet,
  chain: chain,
  checksum: checksum,
  radix: radix,
  radix2: radix2,
  join: join,
  padding: padding
};
var base16 = chain(radix2(4), alphabet('0123456789ABCDEF'), join(''));
var base32 = chain(radix2(5), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'), padding(5), join(''));
var base32hex = chain(radix2(5), alphabet('0123456789ABCDEFGHIJKLMNOPQRSTUV'), padding(5), join(''));
var base32crockford = chain(radix2(5), alphabet('0123456789ABCDEFGHJKMNPQRSTVWXYZ'), join(''), normalize(function (s) {
  return s.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1');
}));
var base64 = chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'), padding(6), join(''));
var base64url = chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'), padding(6), join(''));
var genBase58 = function genBase58(abc) {
  return chain(radix(58), alphabet(abc), join(''));
};
var base58 = genBase58('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
var base58flickr = genBase58('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ');
var base58xrp = genBase58('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz');
var XMR_BLOCK_LEN = [0, 2, 3, 5, 6, 7, 9, 10, 11];
var base58xmr = {
  encode: function encode(data) {
    var res = '';
    for (var i = 0; i < data.length; i += 8) {
      var block = data.subarray(i, i + 8);
      res += base58.encode(block).padStart(XMR_BLOCK_LEN[block.length], '1');
    }
    return res;
  },
  decode: function decode(str) {
    var res = [];
    for (var i = 0; i < str.length; i += 11) {
      var slice = str.slice(i, i + 11);
      var blockLen = XMR_BLOCK_LEN.indexOf(slice.length);
      var block = base58.decode(slice);
      for (var j = 0; j < block.length - blockLen; j++) {
        if (block[j] !== 0) throw new Error('base58xmr: wrong padding');
      }
      res = res.concat(Array.from(block.slice(block.length - blockLen)));
    }
    return Uint8Array.from(res);
  }
};
var base58check = function base58check(sha256) {
  return chain(checksum(4, function (data) {
    return sha256(sha256(data));
  }), base58);
};
var BECH_ALPHABET = chain(alphabet('qpzry9x8gf2tvdw0s3jn54khce6mua7l'), join(''));
var POLYMOD_GENERATORS = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
function bech32Polymod(pre) {
  var b = pre >> 25;
  var chk = (pre & 0x1ffffff) << 5;
  for (var i = 0; i < POLYMOD_GENERATORS.length; i++) {
    if ((b >> i & 1) === 1) chk ^= POLYMOD_GENERATORS[i];
  }
  return chk;
}
function bechChecksum(prefix, words) {
  var encodingConst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var len = prefix.length;
  var chk = 1;
  for (var i = 0; i < len; i++) {
    var c = prefix.charCodeAt(i);
    if (c < 33 || c > 126) throw new Error("Invalid prefix (".concat(prefix, ")"));
    chk = bech32Polymod(chk) ^ c >> 5;
  }
  chk = bech32Polymod(chk);
  for (var _i2 = 0; _i2 < len; _i2++) chk = bech32Polymod(chk) ^ prefix.charCodeAt(_i2) & 0x1f;
  var _iterator5 = _createForOfIteratorHelper(words),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var v = _step5.value;
      chk = bech32Polymod(chk) ^ v;
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  for (var _i3 = 0; _i3 < 6; _i3++) chk = bech32Polymod(chk);
  chk ^= encodingConst;
  return BECH_ALPHABET.encode(convertRadix2([chk % Math.pow(2, 30)], 30, 5, false));
}
function genBech32(encoding) {
  var ENCODING_CONST = encoding === 'bech32' ? 1 : 0x2bc830a3;
  var _words = radix2(5);
  var fromWords = _words.decode;
  var toWords = _words.encode;
  var fromWordsUnsafe = unsafeWrapper(fromWords);
  function encode(prefix, words) {
    var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 90;
    if (typeof prefix !== 'string') throw new Error("bech32.encode prefix should be string, not ".concat(_typeof(prefix)));
    if (!Array.isArray(words) || words.length && typeof words[0] !== 'number') throw new Error("bech32.encode words should be array of numbers, not ".concat(_typeof(words)));
    var actualLength = prefix.length + 7 + words.length;
    if (limit !== false && actualLength > limit) throw new TypeError("Length ".concat(actualLength, " exceeds limit ").concat(limit));
    prefix = prefix.toLowerCase();
    return "".concat(prefix, "1").concat(BECH_ALPHABET.encode(words)).concat(bechChecksum(prefix, words, ENCODING_CONST));
  }
  function decode(str) {
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 90;
    if (typeof str !== 'string') throw new Error("bech32.decode input should be string, not ".concat(_typeof(str)));
    if (str.length < 8 || limit !== false && str.length > limit) throw new TypeError("Wrong string length: ".concat(str.length, " (").concat(str, "). Expected (8..").concat(limit, ")"));
    var lowered = str.toLowerCase();
    if (str !== lowered && str !== str.toUpperCase()) throw new Error("String must be lowercase or uppercase");
    str = lowered;
    var sepIndex = str.lastIndexOf('1');
    if (sepIndex === 0 || sepIndex === -1) throw new Error("Letter \"1\" must be present between prefix and data only");
    var prefix = str.slice(0, sepIndex);
    var _words = str.slice(sepIndex + 1);
    if (_words.length < 6) throw new Error('Data must be at least 6 characters long');
    var words = BECH_ALPHABET.decode(_words).slice(0, -6);
    var sum = bechChecksum(prefix, words, ENCODING_CONST);
    if (!_words.endsWith(sum)) throw new Error("Invalid checksum in ".concat(str, ": expected \"").concat(sum, "\""));
    return {
      prefix: prefix,
      words: words
    };
  }
  var decodeUnsafe = unsafeWrapper(decode);
  function decodeToBytes(str) {
    var _decode = decode(str, false),
      prefix = _decode.prefix,
      words = _decode.words;
    return {
      prefix: prefix,
      words: words,
      bytes: fromWords(words)
    };
  }
  return {
    encode: encode,
    decode: decode,
    decodeToBytes: decodeToBytes,
    decodeUnsafe: decodeUnsafe,
    fromWords: fromWords,
    fromWordsUnsafe: fromWordsUnsafe,
    toWords: toWords
  };
}
var bech32 = genBech32('bech32');
var bech32m = genBech32('bech32m');
var utf8 = {
  encode: function encode(data) {
    return new TextDecoder().decode(data);
  },
  decode: function decode(str) {
    return new TextEncoder().encode(str);
  }
};
var hex = chain(radix2(4), alphabet('0123456789abcdef'), join(''), normalize(function (s) {
  if (typeof s !== 'string' || s.length % 2) throw new TypeError("hex.decode: expected string, got ".concat(_typeof(s), " with length ").concat(s.length));
  return s.toLowerCase();
}));
var CODERS = {
  utf8: utf8,
  hex: hex,
  base16: base16,
  base32: base32,
  base64: base64,
  base64url: base64url,
  base58: base58,
  base58xmr: base58xmr
};
var coderTypeError = "Invalid encoding type. Available types: ".concat(Object.keys(CODERS).join(', '));
var bytesToString = function bytesToString(type, bytes) {
  if (typeof type !== 'string' || !CODERS.hasOwnProperty(type)) throw new TypeError(coderTypeError);
  if (!(bytes instanceof Uint8Array)) throw new TypeError('bytesToString() expects Uint8Array');
  return CODERS[type].encode(bytes);
};
var str = bytesToString;
var stringToBytes = function stringToBytes(type, str) {
  if (!CODERS.hasOwnProperty(type)) throw new TypeError(coderTypeError);
  if (typeof str !== 'string') throw new TypeError('stringToBytes() expects string');
  return CODERS[type].decode(str);
};
var bytes = stringToBytes;

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

/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvalidAddress": () => (/* binding */ InvalidAddress)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var InvalidAddress = /*#__PURE__*/function (_Error) {
  _inherits(InvalidAddress, _Error);
  var _super = _createSuper(InvalidAddress);
  function InvalidAddress(address) {
    _classCallCheck(this, InvalidAddress);
    return _super.call(this, "Invalid Ergo address: ".concat(address));
  }
  return _createClass(InvalidAddress);
}( /*#__PURE__*/_wrapNativeSuper(Error));

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
    addInputs: function addInputs(inputs) {
      return transactionBuilder.from(inputs).configureSelector(function (selector) {
        return selector.ensureInclusion(Array.isArray(inputs) ? inputs.map(function (input) {
          return input.boxId;
        }) : inputs.boxId);
      }).inputs.length;
    },
    addOutputs: function addOutputs(outputs, options) {
      return transactionBuilder.to(outputs, options).outputs.length;
    },
    addDataInputs: function addDataInputs(dataInputs, options) {
      return transactionBuilder.withDataFrom(dataInputs, options).dataInputs.length;
    },
    burnTokens: function burnTokens(tokens) {
      if (!transactionBuilder.settings.canBurnTokensFromPlugins) {
        throw new ___WEBPACK_IMPORTED_MODULE_0__.NotAllowedTokenBurning();
      }
      transactionBuilder.burnTokens(tokens);
    }
  };
}

/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotAllowedTokenBurning": () => (/* binding */ NotAllowedTokenBurning)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var NotAllowedTokenBurning = /*#__PURE__*/function (_Error) {
  _inherits(NotAllowedTokenBurning, _Error);
  var _super = _createSuper(NotAllowedTokenBurning);
  function NotAllowedTokenBurning() {
    _classCallCheck(this, NotAllowedTokenBurning);
    return _super.call(this, "This transaction is trying to burn tokens. If that's your intention you must explicitly allow token burning on TransactionBuilder.configure() method. If no, a change address should be provided.");
  }
  return _createClass(NotAllowedTokenBurning);
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MalformedTransaction": () => (/* binding */ MalformedTransaction)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var MalformedTransaction = /*#__PURE__*/function (_Error) {
  _inherits(MalformedTransaction, _Error);
  var _super = _createSuper(MalformedTransaction);
  function MalformedTransaction(message) {
    _classCallCheck(this, MalformedTransaction);
    return _super.call(this, "Malformed transaction: ".concat(message));
  }
  return _createClass(MalformedTransaction);
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonStandardizedMinting": () => (/* binding */ NonStandardizedMinting)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var NonStandardizedMinting = /*#__PURE__*/function (_Error) {
  _inherits(NonStandardizedMinting, _Error);
  var _super = _createSuper(NonStandardizedMinting);
  function NonStandardizedMinting(message) {
    _classCallCheck(this, NonStandardizedMinting);
    return _super.call(this, message);
  }
  return _createClass(NonStandardizedMinting);
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutputBuilder": () => (/* binding */ OutputBuilder),
/* harmony export */   "SAFE_MIN_BOX_VALUE": () => (/* binding */ SAFE_MIN_BOX_VALUE)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33);
/* harmony import */ var _scure_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _errors_invalidRegistersPacking__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55);
/* harmony import */ var _errors_undefinedCreationHeight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(66);
/* harmony import */ var _errors_undefinedMintingContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(56);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45);
/* harmony import */ var _models_collections_tokensCollection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _serializer_sigma_constantSerializer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57);
/* harmony import */ var _serializer_sigma_sigmaTypes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(65);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }










var SAFE_MIN_BOX_VALUE = BigInt(1000000);
var OutputBuilder = /*#__PURE__*/function () {
  function OutputBuilder(value, recipient, creationHeight) {
    _classCallCheck(this, OutputBuilder);
    _defineProperty(this, "_value", void 0);
    _defineProperty(this, "_address", void 0);
    _defineProperty(this, "_tokens", void 0);
    _defineProperty(this, "_creationHeight", void 0);
    _defineProperty(this, "_registers", void 0);
    _defineProperty(this, "_minting", void 0);
    this._value = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__.ensureBigInt)(value);
    this._creationHeight = creationHeight;
    this._tokens = new _models_collections_tokensCollection__WEBPACK_IMPORTED_MODULE_2__.TokensCollection();
    this._registers = {};
    if (this._value <= _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__._0n) {
      throw new Error("An UTxO cannot be created without a minimum required amount.");
    }
    if (typeof recipient === "string") {
      this._address = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.isHex)(recipient) ? _models__WEBPACK_IMPORTED_MODULE_5__.ErgoAddress.fromErgoTree(recipient) : _models__WEBPACK_IMPORTED_MODULE_5__.ErgoAddress.fromBase58(recipient);
    } else {
      this._address = recipient;
    }
  }
  _createClass(OutputBuilder, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "address",
    get: function get() {
      return this._address;
    }
  }, {
    key: "ergoTree",
    get: function get() {
      return this._address.ergoTree;
    }
  }, {
    key: "creationHeight",
    get: function get() {
      return this._creationHeight;
    }
  }, {
    key: "tokens",
    get: function get() {
      return this._tokens;
    }
  }, {
    key: "additionalRegisters",
    get: function get() {
      return this._registers;
    }
  }, {
    key: "minting",
    get: function get() {
      return this._minting;
    }
  }, {
    key: "addTokens",
    value: function addTokens(tokens, options) {
      if (tokens instanceof _models_collections_tokensCollection__WEBPACK_IMPORTED_MODULE_2__.TokensCollection) {
        this._tokens.add(tokens.toArray(), options);
      } else {
        this._tokens.add(tokens, options);
      }
      return this;
    }
  }, {
    key: "mintToken",
    value: function mintToken(token) {
      this._minting = _objectSpread(_objectSpread({}, token), {}, {
        amount: (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__.ensureBigInt)(token.amount)
      });
      return this;
    }
  }, {
    key: "setCreationHeight",
    value: function setCreationHeight(height, options) {
      if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_6__.isUndefined)(options) || options.replace === true || options.replace === false && (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_6__.isUndefined)(this._creationHeight)) {
        this._creationHeight = height;
      }
      return this;
    }
  }, {
    key: "setAdditionalRegisters",
    value: function setAdditionalRegisters(registers) {
      this._registers = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_6__.removeUndefined)(registers);
      if (!(0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_7__.areRegistersDenselyPacked)(registers)) {
        throw new _errors_invalidRegistersPacking__WEBPACK_IMPORTED_MODULE_8__.InvalidRegistersPacking();
      }
      return this;
    }
  }, {
    key: "eject",
    value: function eject(ejector) {
      ejector({
        tokens: this._tokens
      });
      return this;
    }
  }, {
    key: "build",
    value: function build(transactionInputs) {
      var tokens = this.tokens.toArray();
      if (this.minting) {
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.isEmpty)(transactionInputs)) {
          throw new _errors_undefinedMintingContext__WEBPACK_IMPORTED_MODULE_10__.UndefinedMintingContext();
        }
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.isEmpty)(this.additionalRegisters)) {
          var _this$minting$decimal;
          this.setAdditionalRegisters({
            R4: (0,_serializer_sigma_constantSerializer__WEBPACK_IMPORTED_MODULE_11__.SConstant)((0,_serializer_sigma_sigmaTypes__WEBPACK_IMPORTED_MODULE_12__.SColl)(_serializer_sigma_sigmaTypes__WEBPACK_IMPORTED_MODULE_12__.SByte, (0,_scure_base__WEBPACK_IMPORTED_MODULE_0__.stringToBytes)("utf8", this.minting.name || ""))),
            R5: (0,_serializer_sigma_constantSerializer__WEBPACK_IMPORTED_MODULE_11__.SConstant)((0,_serializer_sigma_sigmaTypes__WEBPACK_IMPORTED_MODULE_12__.SColl)(_serializer_sigma_sigmaTypes__WEBPACK_IMPORTED_MODULE_12__.SByte, (0,_scure_base__WEBPACK_IMPORTED_MODULE_0__.stringToBytes)("utf8", this.minting.description || ""))),
            R6: (0,_serializer_sigma_constantSerializer__WEBPACK_IMPORTED_MODULE_11__.SConstant)((0,_serializer_sigma_sigmaTypes__WEBPACK_IMPORTED_MODULE_12__.SColl)(_serializer_sigma_sigmaTypes__WEBPACK_IMPORTED_MODULE_12__.SByte, (0,_scure_base__WEBPACK_IMPORTED_MODULE_0__.stringToBytes)("utf8", ((_this$minting$decimal = this.minting.decimals) === null || _this$minting$decimal === void 0 ? void 0 : _this$minting$decimal.toString()) || "0")))
          });
        }
        tokens = [{
          tokenId: (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_9__.first)(transactionInputs).boxId,
          amount: this.minting.amount
        }].concat(_toConsumableArray(tokens));
      }
      if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_6__.isUndefined)(this.creationHeight)) {
        throw new _errors_undefinedCreationHeight__WEBPACK_IMPORTED_MODULE_13__.UndefinedCreationHeight();
      }
      return {
        value: this.value.toString(),
        ergoTree: this.ergoTree,
        creationHeight: this.creationHeight,
        assets: tokens.map(function (token) {
          return {
            tokenId: token.tokenId,
            amount: token.amount.toString()
          };
        }),
        additionalRegisters: this.additionalRegisters
      };
    }
  }]);
  return OutputBuilder;
}();

/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areRegistersDenselyPacked": () => (/* binding */ areRegistersDenselyPacked),
/* harmony export */   "utxoSum": () => (/* binding */ utxoSum)
/* harmony export */ });
/* harmony import */ var _bigIntLiterals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var _bigIntUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _objectUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



var NANOERGS_TOKEN_ID = "nanoErgs";
function utxoSum(boxes, tokenId) {
  var balances = {};
  var _iterator = _createForOfIteratorHelper(boxes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var box = _step.value;
      if ((0,_objectUtils__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(tokenId) || tokenId === NANOERGS_TOKEN_ID) {
        balances[NANOERGS_TOKEN_ID] = (balances[NANOERGS_TOKEN_ID] || _bigIntLiterals__WEBPACK_IMPORTED_MODULE_1__._0n) + (0,_bigIntUtils__WEBPACK_IMPORTED_MODULE_2__.ensureBigInt)(box.value);
      }
      if (tokenId !== NANOERGS_TOKEN_ID) {
        var _iterator2 = _createForOfIteratorHelper(box.assets),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var token = _step2.value;
            if ((0,_objectUtils__WEBPACK_IMPORTED_MODULE_0__.isDefined)(tokenId) && tokenId !== token.tokenId) {
              continue;
            }
            balances[token.tokenId] = (balances[token.tokenId] || _bigIntLiterals__WEBPACK_IMPORTED_MODULE_1__._0n) + (0,_bigIntUtils__WEBPACK_IMPORTED_MODULE_2__.ensureBigInt)(token.amount);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if ((0,_objectUtils__WEBPACK_IMPORTED_MODULE_0__.isDefined)(tokenId)) {
    return balances[tokenId] || _bigIntLiterals__WEBPACK_IMPORTED_MODULE_1__._0n;
  }
  return {
    nanoErgs: balances[NANOERGS_TOKEN_ID],
    tokens: Object.keys(balances).filter(function (x) {
      return x !== NANOERGS_TOKEN_ID;
    }).map(function (tokenId) {
      return {
        tokenId: tokenId,
        amount: balances[tokenId]
      };
    })
  };
}
var MIN_REGISTER_NUMBER = 4;
var MAX_REGISTER_NUMBER = 9;
function areRegistersDenselyPacked(registers) {
  var lastValueIndex = 0;
  for (var i = MIN_REGISTER_NUMBER; i <= MAX_REGISTER_NUMBER; i++) {
    if (registers["R".concat(i)]) {
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

/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvalidRegistersPacking": () => (/* binding */ InvalidRegistersPacking)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var InvalidRegistersPacking = /*#__PURE__*/function (_Error) {
  _inherits(InvalidRegistersPacking, _Error);
  var _super = _createSuper(InvalidRegistersPacking);
  function InvalidRegistersPacking() {
    _classCallCheck(this, InvalidRegistersPacking);
    return _super.call(this, "Registers should be densely packed. This means that it's not possible to use a register like 'R7' without filling 'R6', 'R5' and 'R4', for example.");
  }
  return _createClass(InvalidRegistersPacking);
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UndefinedMintingContext": () => (/* binding */ UndefinedMintingContext)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var UndefinedMintingContext = /*#__PURE__*/function (_Error) {
  _inherits(UndefinedMintingContext, _Error);
  var _super = _createSuper(UndefinedMintingContext);
  function UndefinedMintingContext() {
    _classCallCheck(this, UndefinedMintingContext);
    return _super.call(this, "Creation Height is undefined.");
  }
  return _createClass(UndefinedMintingContext);
}( /*#__PURE__*/_wrapNativeSuper(Error));

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




var MAX_CONSTANT_TYPES_LENGTH = 100;
var MAX_CONSTANT_CONTENT_LENGTH = 4096;
var MAX_CONSTANT_LENGTH = MAX_CONSTANT_TYPES_LENGTH + MAX_CONSTANT_CONTENT_LENGTH;
function SConstant(content) {
  var writer = new _sigmaByteWriter__WEBPACK_IMPORTED_MODULE_0__.SigmaByteWriter(MAX_CONSTANT_LENGTH);
  _typeSerializer__WEBPACK_IMPORTED_MODULE_1__.TypeSerializer.serialize(content, writer);
  _dataSerializer__WEBPACK_IMPORTED_MODULE_2__.DataSerializer.serialize(content, writer);
  return writer.toHex();
}
function SParse(content) {
  var reader = new _sigmaByteReader__WEBPACK_IMPORTED_MODULE_3__.SigmaByteReader(content);
  var type = reader.readType();
  return _dataSerializer__WEBPACK_IMPORTED_MODULE_2__.DataSerializer.deserialize(type, reader);
}

/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigmaByteWriter": () => (/* binding */ SigmaByteWriter)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _vlq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _zigZag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var SigmaByteWriter = /*#__PURE__*/function () {
  function SigmaByteWriter(maxLength) {
    _classCallCheck(this, SigmaByteWriter);
    _defineProperty(this, "_bytes", void 0);
    _defineProperty(this, "_cursor", void 0);
    this._bytes = new Uint8Array(maxLength);
    this._cursor = 0;
  }
  _createClass(SigmaByteWriter, [{
    key: "length",
    get: function get() {
      return this._cursor;
    }
  }, {
    key: "writeBoolean",
    value: function writeBoolean(value) {
      this.write(value === true ? 0x01 : 0x00);
      return this;
    }
  }, {
    key: "writeBooleans",
    value: function writeBooleans(elements) {
      for (var i = 0; i < elements.length; i++) {
        this.writeBoolean(elements[i]);
      }
      return this;
    }
  }, {
    key: "writeNumber",
    value: function writeNumber(value) {
      this.writeBytes((0,_vlq__WEBPACK_IMPORTED_MODULE_1__.vlqEncode)((0,_zigZag__WEBPACK_IMPORTED_MODULE_2__.zigZagEncode)(value)));
      return this;
    }
  }, {
    key: "writeLong",
    value: function writeLong(value) {
      this.writeBytes((0,_vlq__WEBPACK_IMPORTED_MODULE_1__.vqlEncodeBigInt)((0,_zigZag__WEBPACK_IMPORTED_MODULE_2__.zigZagEncodeBigInt)(value)));
      return this;
    }
  }, {
    key: "write",
    value: function write(_byte) {
      this._bytes[this._cursor++] = _byte;
      return this;
    }
  }, {
    key: "writeBytes",
    value: function writeBytes(bytes) {
      this._bytes.set(bytes, this._cursor);
      this._cursor += bytes.length;
      return this;
    }
  }, {
    key: "writeHex",
    value: function writeHex(hex) {
      if (hex.length % 2) {
        throw new Error("Invalid hex padding");
      }
      for (var i = 0; i < hex.length / 2; i++) {
        var j = i * 2;
        var _byte2 = Number.parseInt(hex.slice(j, j + 2), 16);
        if (Number.isNaN(_byte2) || _byte2 < 0) {
          throw new Error("Invalid byte sequence");
        }
        this.write(_byte2);
      }
      return this;
    }
  }, {
    key: "writeBits",
    value: function writeBits(bits) {
      var bitOffset = 0;
      for (var i = 0; i < bits.length; i++) {
        if (bits[i]) {
          this._bytes[this._cursor] |= 1 << bitOffset++;
        } else {
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
  }, {
    key: "writeBigInt",
    value: function writeBigInt(number) {
      // todo: take a look at https://coolaj86.com/articles/convert-decimal-to-hex-with-js-bigints/
      // and https://coolaj86.com/articles/convert-hex-to-decimal-with-js-bigints/
      if (number < _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__._0n) {
        throw new Error("Negative BigInt values are not supported Fleet serializer.");
      }
      var hex = number.toString(16);
      if (hex.length % 2) {
        hex = "0" + hex;
      } else if (Number.parseInt(hex.substring(0, 1), 16) >= 8) {
        // maximum positive need to prepend 0 otherwise results in negative number
        hex = "00" + hex;
      }
      this.writeBytes((0,_vlq__WEBPACK_IMPORTED_MODULE_1__.vlqEncode)(hex.length / 2));
      this.writeHex(hex);
      return this;
    }
  }, {
    key: "toHex",
    value: function toHex() {
      return (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.bytesToHex)(this._bytes.subarray(0, this._cursor));
    }
  }, {
    key: "toBytes",
    value: function toBytes() {
      return this._bytes.subarray(0, this._cursor);
    }
  }]);
  return SigmaByteWriter;
}();

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
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);

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
  return input << 1 ^ input >> 63;
}
/**
 * Decode a ZigZag-encoded value.
 * @param input ZigZag-encoded value
 * @returns Signed integer
 */
function zigZagDecode(input) {
  return input >> 1 ^ -(input & 1);
}
/**
 * Encode a signed big integer.
 * @param input Signed big integer
 * @returns ZigZag-encoded value
 */
function zigZagEncodeBigInt(input) {
  return input << _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._1n ^ input >> _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._63n;
}
/**
 * Decode a ZigZag-encoded value.
 * @param input ZigZag-encoded value
 * @returns Signed big integer
 */
function zigZagDecodeBigInt(input) {
  return input >> _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._1n ^ -(input & _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__._1n);
}

/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeSerializer": () => (/* binding */ TypeSerializer)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var TypeSerializer = /*#__PURE__*/function () {
  function TypeSerializer() {
    _classCallCheck(this, TypeSerializer);
  }
  _createClass(TypeSerializer, null, [{
    key: "serialize",
    value: function serialize(value, buffer) {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isPrimitiveType)(value)) {
        buffer.write(value.type);
      } else if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isColl)(value)) {
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isEmbeddableTypeCode)(value.elementsType)) {
          buffer.write(value.type + value.elementsType);
        }
      }
    }
  }]);
  return TypeSerializer;
}();

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

/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSerializer": () => (/* binding */ DataSerializer)
/* harmony export */ });
/* harmony import */ var _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _vlq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var DataSerializer = /*#__PURE__*/function () {
  function DataSerializer() {
    _classCallCheck(this, DataSerializer);
  }
  _createClass(DataSerializer, null, [{
    key: "serialize",
    value: function serialize(data, buffer) {
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
          case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.BigInt:
            {
              buffer.writeBigInt(data.value);
              break;
            }
          case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.GroupElement:
            buffer.writeBytes(data.value);
            break;
          case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.SigmaProp:
            {
              var node = data.value;
              if (node.type === _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.GroupElement) {
                buffer.write(0xcd); // CreateProveDlog operation
                DataSerializer.serialize(node, buffer);
              } else {
                throw Error("Not implemented");
              }
              break;
            }
          case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.Unit:
            // same as void, don't need to save anything
            break;
          // case SigmaTypeCode.Box:
          default:
            throw Error("Not implemented");
        }
      } else if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isColl)(data)) {
        if (typeof data.value === "string") {
          buffer.writeBytes((0,_vlq__WEBPACK_IMPORTED_MODULE_3__.vlqEncode)(data.value.length / 2));
        } else {
          buffer.writeBytes((0,_vlq__WEBPACK_IMPORTED_MODULE_3__.vlqEncode)(data.value.length));
        }
        switch (data.elementsType) {
          case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.Boolean:
            buffer.writeBits(data.value);
            break;
          case _sigmaTypeCode__WEBPACK_IMPORTED_MODULE_2__.SigmaTypeCode.Byte:
            {
              var bytes;
              if (typeof data.value === "string") {
                bytes = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.hexToBytes)(data.value);
              } else {
                bytes = Uint8Array.from(data.value);
              }
              buffer.writeBytes(bytes);
              break;
            }
          default:
            for (var i = 0; i < data.value.length; i++) {
              DataSerializer.serialize({
                value: data.value[i],
                type: data.elementsType
              }, buffer);
            }
        }
      } else {
        throw Error("Not implemented");
      }
    }
  }, {
    key: "deserialize",
    value: function deserialize(typeCode, reader) {
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
  }]);
  return DataSerializer;
}();

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

/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigmaByteReader": () => (/* binding */ SigmaByteReader)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _vlq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _zigZag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var SigmaByteReader = /*#__PURE__*/function () {
  function SigmaByteReader(bytes) {
    _classCallCheck(this, SigmaByteReader);
    _defineProperty(this, "_bytes", void 0);
    _defineProperty(this, "_cursor", void 0);
    if (typeof bytes === "string") {
      this._bytes = (0,_noble_hashes_utils__WEBPACK_IMPORTED_MODULE_0__.hexToBytes)(bytes);
    } else {
      this._bytes = bytes;
    }
    this._cursor = 0;
  }
  _createClass(SigmaByteReader, [{
    key: "isEmpty",
    get: function get() {
      return (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(this._bytes);
    }
  }, {
    key: "readBoolean",
    value: function readBoolean() {
      return this.readByte() === 0x01;
    }
  }, {
    key: "readByte",
    value: function readByte() {
      return this._bytes[this._cursor++];
    }
  }, {
    key: "readType",
    value: function readType() {
      return this.readByte();
    }
  }, {
    key: "readNumber",
    value: function readNumber() {
      return Number((0,_zigZag__WEBPACK_IMPORTED_MODULE_2__.zigZagDecode)((0,_vlq__WEBPACK_IMPORTED_MODULE_3__.vlqDecode)(this)));
    }
  }, {
    key: "readLong",
    value: function readLong() {
      return (0,_zigZag__WEBPACK_IMPORTED_MODULE_2__.zigZagDecodeBigInt)((0,_vlq__WEBPACK_IMPORTED_MODULE_3__.vlqDecodeBigInt)(this));
    }
  }]);
  return SigmaByteReader;
}();

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
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
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
    return {
      type: type,
      value: value
    };
  } else {
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

/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UndefinedCreationHeight": () => (/* binding */ UndefinedCreationHeight)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var UndefinedCreationHeight = /*#__PURE__*/function (_Error) {
  _inherits(UndefinedCreationHeight, _Error);
  var _super = _createSuper(UndefinedCreationHeight);
  function UndefinedCreationHeight() {
    _classCallCheck(this, UndefinedCreationHeight);
    return _super.call(this, "Minting context is undefined. Transaction's inputs must be included in order to determine minting token id.");
  }
  return _createClass(UndefinedCreationHeight);
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxSelector": () => (/* binding */ BoxSelector)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32);
/* harmony import */ var _errors_duplicateInputSelectionError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70);
/* harmony import */ var _errors_insufficientInputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71);
/* harmony import */ var _strategies_accumulativeSelectionStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var _strategies_customSelectionStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






var BoxSelector = /*#__PURE__*/function () {
  function BoxSelector(inputs) {
    _classCallCheck(this, BoxSelector);
    _defineProperty(this, "_inputs", void 0);
    _defineProperty(this, "_strategy", void 0);
    _defineProperty(this, "_ensureFilterPredicate", void 0);
    _defineProperty(this, "_inputsSortSelector", void 0);
    _defineProperty(this, "_inputsSortDir", void 0);
    _defineProperty(this, "_ensureInclusionBoxIds", void 0);
    this._inputs = inputs;
  }
  _createClass(BoxSelector, [{
    key: "defineStrategy",
    value: function defineStrategy(strategy) {
      if (this._isISelectionStrategyImplementation(strategy)) {
        this._strategy = strategy;
      } else {
        this._strategy = new _strategies_customSelectionStrategy__WEBPACK_IMPORTED_MODULE_0__.CustomSelectionStrategy(strategy);
      }
      return this;
    }
  }, {
    key: "select",
    value: function select(target) {
      if (!this._strategy) {
        this._strategy = new _strategies_accumulativeSelectionStrategy__WEBPACK_IMPORTED_MODULE_1__.AccumulativeSelectionStrategy();
      }
      var remaining = this._deepCloneTarget(target);
      var unselected = _toConsumableArray(this._inputs);
      var selected = [];
      var predicate = this._ensureFilterPredicate;
      var inclusion = this._ensureInclusionBoxIds;
      if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isDefined)(predicate)) {
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isDefined)(inclusion)) {
          selected = unselected.filter(function (box) {
            return predicate(box) || inclusion.has(box.boxId);
          });
        } else {
          selected = unselected.filter(predicate);
        }
      } else if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isDefined)(inclusion)) {
        selected = unselected.filter(function (box) {
          return inclusion.has(box.boxId);
        });
      }
      if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isDefined)(selected)) {
        unselected = unselected.filter(function (box) {
          return !selected.some(function (sel) {
            return sel.boxId === box.boxId;
          });
        });
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isDefined)(remaining.nanoErgs)) {
          remaining.nanoErgs -= (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.sumBy)(selected, function (input) {
            return input.value;
          });
        }
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isDefined)(remaining.tokens) && selected.some(function (input) {
          return !(0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(input.assets);
        })) {
          var _iterator = _createForOfIteratorHelper(remaining.tokens),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var tokenTarget = _step.value;
              if (tokenTarget.amount) {
                tokenTarget.amount -= (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_5__.utxoSum)(selected, tokenTarget.tokenId);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
      unselected = this._sort(unselected);
      selected = selected.concat(this._strategy.select(unselected, remaining));
      if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.hasDuplicatesBy)(selected, function (item) {
        return item.boxId;
      })) {
        throw new _errors_duplicateInputSelectionError__WEBPACK_IMPORTED_MODULE_6__.DuplicateInputSelectionError();
      }
      var unreached = this._getUnreachedTargets(selected, target);
      if (unreached.nanoErgs || (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.some)(unreached.tokens)) {
        throw new _errors_insufficientInputs__WEBPACK_IMPORTED_MODULE_7__.InsufficientInputs(unreached);
      }
      return selected;
    }
  }, {
    key: "_deepCloneTarget",
    value: function _deepCloneTarget(target) {
      return {
        nanoErgs: target.nanoErgs,
        tokens: (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isDefined)(target.tokens) ? target.tokens.map(function (t) {
          return {
            tokenId: t.tokenId,
            amount: t.amount
          };
        }) : undefined
      };
    }
  }, {
    key: "_getUnreachedTargets",
    value: function _getUnreachedTargets(inputs, target) {
      var unreached = {
        nanoErgs: undefined,
        tokens: undefined
      };
      var selectedNanoergs = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.sumBy)(inputs, function (input) {
        return input.value;
      });
      if (target.nanoErgs && target.nanoErgs > selectedNanoergs) {
        unreached.nanoErgs = target.nanoErgs - selectedNanoergs;
      }
      if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(target.tokens)) {
        return unreached;
      }
      var _iterator2 = _createForOfIteratorHelper(target.tokens),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var tokenTarget = _step2.value;
          var totalSelected = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_5__.utxoSum)(inputs, tokenTarget.tokenId);
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
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return unreached;
    }
  }, {
    key: "_sort",
    value: function _sort(inputs) {
      if (!this._inputsSortSelector) {
        return (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.orderBy)(inputs, function (input) {
          return input.creationHeight;
        }, "asc");
      }
      return (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__.orderBy)(inputs, this._inputsSortSelector, this._inputsSortDir || "asc");
    }
  }, {
    key: "ensureInclusion",
    value: function ensureInclusion(predicateOrBoxIds) {
      if (typeof predicateOrBoxIds === "function") {
        this._ensureFilterPredicate = predicateOrBoxIds;
      } else {
        if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(this._ensureInclusionBoxIds)) {
          this._ensureInclusionBoxIds = new Set();
        }
        if (Array.isArray(predicateOrBoxIds)) {
          var _iterator3 = _createForOfIteratorHelper(predicateOrBoxIds),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var boxId = _step3.value;
              this._ensureInclusionBoxIds.add(boxId);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } else {
          this._ensureInclusionBoxIds.add(predicateOrBoxIds);
        }
      }
      return this;
    }
  }, {
    key: "orderBy",
    value: function orderBy(selector, direction) {
      this._inputsSortSelector = selector;
      this._inputsSortDir = direction;
      return this;
    }
  }, {
    key: "_isISelectionStrategyImplementation",
    value: function _isISelectionStrategyImplementation(obj) {
      if (obj.select) {
        return true;
      }
      return false;
    }
  }], [{
    key: "buildTargetFrom",
    value: function buildTargetFrom(boxes) {
      var tokens = {};
      var nanoErgs = _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__._0n;
      var _iterator4 = _createForOfIteratorHelper(boxes),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var box = _step4.value;
          nanoErgs += (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.ensureBigInt)(box.value);
          var _iterator5 = _createForOfIteratorHelper(box.assets),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var token = _step5.value;
              tokens[token.tokenId] = (tokens[token.tokenId] || _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_8__._0n) + (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.ensureBigInt)(token.amount);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return {
        nanoErgs: nanoErgs,
        tokens: Object.keys(tokens).map(function (tokenId) {
          return {
            tokenId: tokenId,
            amount: tokens[tokenId]
          };
        })
      };
    }
  }]);
  return BoxSelector;
}();

/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomSelectionStrategy": () => (/* binding */ CustomSelectionStrategy)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Custom selection strategy supports custom selections implementations.
 */
var CustomSelectionStrategy = /*#__PURE__*/function () {
  function CustomSelectionStrategy(selector) {
    _classCallCheck(this, CustomSelectionStrategy);
    _defineProperty(this, "_selector", void 0);
    this._selector = selector;
  }
  _createClass(CustomSelectionStrategy, [{
    key: "select",
    value: function select(inputs, target) {
      return this._selector(inputs, target);
    }
  }]);
  return CustomSelectionStrategy;
}();

/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccumulativeSelectionStrategy": () => (/* binding */ AccumulativeSelectionStrategy)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/**
 * Accumulative selection strategy accumulates inputs until the target
 * value is reached, skipping detrimental inputs.
 */
var AccumulativeSelectionStrategy = /*#__PURE__*/function () {
  function AccumulativeSelectionStrategy() {
    _classCallCheck(this, AccumulativeSelectionStrategy);
    _defineProperty(this, "_inputs", void 0);
  }
  _createClass(AccumulativeSelectionStrategy, [{
    key: "select",
    value: function select(inputs, target) {
      this._inputs = inputs;
      var selection = [];
      if (!(0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(target.tokens)) {
        selection = this._selectTokens(target.tokens);
      }
      var selectedNanoErgs = (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_1__.sumBy)(selection, function (input) {
        return input.value;
      });
      if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(target.nanoErgs) && (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(target.tokens) || !(0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(target.nanoErgs) && selectedNanoErgs < target.nanoErgs) {
        var targetAmount = !(0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(target.nanoErgs) ? target.nanoErgs - selectedNanoErgs : undefined;
        selection = selection.concat(this._select(targetAmount));
      }
      return selection;
    }
  }, {
    key: "_selectTokens",
    value: function _selectTokens(targets) {
      var selection = [];
      var _iterator = _createForOfIteratorHelper(targets),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var target = _step.value;
          var targetAmount = !(0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(target.amount) ? target.amount - (0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_3__.utxoSum)(selection, target.tokenId) : undefined;
          if (targetAmount && targetAmount <= _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__._0n) {
            continue;
          }
          selection = selection.concat(this._select(targetAmount, target.tokenId));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return selection;
    }
  }, {
    key: "_select",
    value: function _select(target, tokenId) {
      var acc = _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_4__._0n;
      var selection = [];
      if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_2__.isUndefined)(target)) {
        if (tokenId) {
          selection = this._inputs.filter(function (x) {
            return x.assets.some(function (asset) {
              return asset.tokenId === tokenId;
            });
          });
        } else {
          selection = this._inputs;
        }
      } else {
        for (var i = 0; i < this._inputs.length && acc < target; i++) {
          if (tokenId) {
            var _iterator2 = _createForOfIteratorHelper(this._inputs[i].assets),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var token = _step2.value;
                if (token.tokenId !== tokenId) {
                  continue;
                }
                acc += token.amount;
                selection.push(this._inputs[i]);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } else {
            acc += this._inputs[i].value;
            selection.push(this._inputs[i]);
          }
        }
      }
      if (!(0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(selection)) {
        this._inputs = this._inputs.filter(function (input) {
          return !selection.includes(input);
        });
      }
      return selection;
    }
  }]);
  return AccumulativeSelectionStrategy;
}();

/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DuplicateInputSelectionError": () => (/* binding */ DuplicateInputSelectionError)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var DuplicateInputSelectionError = /*#__PURE__*/function (_Error) {
  _inherits(DuplicateInputSelectionError, _Error);
  var _super = _createSuper(DuplicateInputSelectionError);
  function DuplicateInputSelectionError() {
    _classCallCheck(this, DuplicateInputSelectionError);
    return _super.call(this, "One or more inputs was selected more than one time by the current selection strategy.");
  }
  return _createClass(DuplicateInputSelectionError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsufficientInputs": () => (/* binding */ InsufficientInputs)
/* harmony export */ });
/* harmony import */ var _fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var InsufficientInputs = /*#__PURE__*/function (_Error) {
  _inherits(InsufficientInputs, _Error);
  var _super = _createSuper(InsufficientInputs);
  function InsufficientInputs(unreached) {
    var _this;
    _classCallCheck(this, InsufficientInputs);
    var strings = [];
    if (unreached.nanoErgs) {
      strings.push(buildString("nanoErgs", unreached.nanoErgs));
    }
    if ((0,_fleet_sdk_common__WEBPACK_IMPORTED_MODULE_0__.some)(unreached.tokens)) {
      var _iterator = _createForOfIteratorHelper(unreached.tokens),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var token = _step.value;
          strings.push(buildString(token.tokenId, token.amount));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    _this = _super.call(this, "Insufficient inputs:".concat(strings.join()));
    _defineProperty(_assertThisInitialized(_this), "unreached", void 0);
    _this.unreached = unreached;
    return _this;
  }
  return _createClass(InsufficientInputs);
}( /*#__PURE__*/_wrapNativeSuper(Error));
function buildString(tokenId, amount) {
  return "\n  > ".concat(tokenId, ": ").concat(amount === null || amount === void 0 ? void 0 : amount.toString());
}

/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvalidInput": () => (/* binding */ InvalidInput)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var InvalidInput = /*#__PURE__*/function (_Error) {
  _inherits(InvalidInput, _Error);
  var _super = _createSuper(InvalidInput);
  function InvalidInput(boxId) {
    _classCallCheck(this, InvalidInput);
    return _super.call(this, "Invalid input: ".concat(boxId));
  }
  return _createClass(InvalidInput);
}( /*#__PURE__*/_wrapNativeSuper(Error));

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
  _connect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var ConnectUserWallet, UserAddress, cypxAmount, _mintbtn, UserBalance, UserBalanceErg, dashboardbtn, assets, assetsHTML;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return ergoConnector.nautilus.connect();
        case 3:
          ConnectUserWallet = _context3.sent;
          ConnectUserWallet;
          document.getElementById("calendar").style.display = "flex";
          _context3.next = 8;
          return ergo.get_change_address();
        case 8:
          UserAddress = _context3.sent;
          _context3.next = 11;
          return displayCypxAmount(UserAddress);
        case 11:
          cypxAmount = _context3.sent;
          _mintbtn = document.getElementById("mintbtn");
          _context3.next = 15;
          return ergo.get_balance();
        case 15:
          UserBalance = _context3.sent;
          UserBalanceErg = UserBalance / Math.pow(10, 9);
          dashboardbtn = document.getElementById("dashboardbtn");
          dashboardbtn.style.display = "flex";
          connectbtn.style.display = "none";
          console.log(UserAddress);
          console.log(UserBalanceErg);
          document.getElementById("userbalance").style.display = "flex";
          document.getElementById("userbalance").innerHTML = "<img src=\"./dist/assets/ergicon.png\" id=\"balanceicon\">   " + UserBalanceErg;
          document.getElementById("cypxbalance").innerHTML = "<img src=\"./dist/assets/cypxicon.png\" id=\"cypxicon\">" + cypxAmount / Math.pow(10, 4);
          _context3.next = 27;
          return displayCybercitizenAssets(UserAddress);
        case 27:
          assets = _context3.sent;
          assetsHTML = ''; // const audioNFTs = await displayAudioNFTs(UserAddress);
          // const audioNFTsContainer = document.getElementById("audio-nfts");
          // audioNFTsContainer.style.display = "block";
          // let audioNFTsHTML = '';
          // audioNFTs.forEach((audioNFT) => {
          //   audioNFTsHTML += `
          //     <div>
          //       <p class = "assettitle">CyberVerse  Audio NFT:</p><p class="assetdescription"> ${audioNFT.name}</p>
          //     </div>
          //   `;
          // });
          // audioNFTsContainer.innerHTML = audioNFTsHTML;
          _context3.next = 34;
          break;
        case 31:
          _context3.prev = 31;
          _context3.t0 = _context3["catch"](0);
          if (_context3.t0.message.includes("ergoConnector")) {
            alert("Please download Nautilus wallet here: https://chrome.google.com/webstore/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai");
          } else {
            console.log(_context3.t0);
          }
        case 34:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 31]]);
  }));
  return _connect.apply(this, arguments);
}
function displayCypxAmount(_x) {
  return _displayCypxAmount.apply(this, arguments);
}
function _displayCypxAmount() {
  _displayCypxAmount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(userAddress) {
    var response, data, cypxAmount;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return fetch("https://api.ergoplatform.com/api/v1/boxes/unspent/byAddress/".concat(userAddress));
        case 2:
          response = _context4.sent;
          _context4.next = 5;
          return response.json();
        case 5:
          data = _context4.sent;
          cypxAmount = 0;
          data.items.forEach(function (item) {
            item.assets.forEach(function (asset) {
              if (asset.name === "CYPX") {
                cypxAmount += asset.amount;
              }
            });
          });
          console.log("CYPX Amount: ".concat(cypxAmount));
          return _context4.abrupt("return", cypxAmount);
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _displayCypxAmount.apply(this, arguments);
}
function formatTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = Math.floor(seconds % 60);
  return "".concat(minutes, ":").concat(remainingSeconds.toString().padStart(2, '0'));
}
function displayCybercitizenAssets(_x2) {
  return _displayCybercitizenAssets.apply(this, arguments);
} // async function displayAudioNFTs(userAddress) {
//   const response = await fetch(`https://api.ergoplatform.com/api/v1/boxes/unspent/byAddress/${userAddress}`);
//   const data = await response.json();
//   const audioNFTs = [];
//   data.items.forEach((item) => {
//     item.assets.forEach((asset) => {
//       if (['Laser Guns', 'Outrun', 'Danger Zone', 'Cyberlykos', 'Blue Lights', 'Into Cyberia'].includes(asset.name)) {
//         audioNFTs.push({
//           name: asset.name,
//         });
//       }
//     });
//   });
//   let audioNFTsHTML = '';
//   audioNFTs.forEach((audioNFT) => {
//     audioNFTsHTML += `
//       <div class="assetcont">
//         <p class="assettitle">CyberVerse Track Name:</p>
//         <p class="assetdescription">${audioNFT.name}</p>
//         <button class="play-button" data-asset="${audioNFT.name}">Play</button>
//         <button class="pause-button" data-asset="${audioNFT.name}" style="display:none;">Pause</button>
//         <div class="seek-container">
//           <input class="seek-bar" type="range" min="0" step="1" value="0">
//           <span class="current-time">0:00 </span><span>/</span>
//           <span class="duration">0:00</span>
//         </div>
//       </div>
//     `;
//   });
//   //const audioNFTsElement = document.getElementById("audio-nfts");
//   //audioNFTsElement.innerHTML = audioNFTsHTML;
//   // add event listeners to play buttons
//   const playButtons = document.querySelectorAll('.play-button');
//   playButtons.forEach(button => {
//     const assetName = button.dataset.asset;
//     const audio = new Audio(`./dist/assets/audio-dashboard/${assetName.replace(/ /g, '_')}.wav`);
//     let audioPlayer;
//     const seekBar = button.parentElement.querySelector('.seek-bar');
//     const currentTime = button.parentElement.querySelector('.current-time');
//     const duration = button.parentElement.querySelector('.duration');
//     audio.addEventListener('loadedmetadata', () => {
//       duration.textContent = formatTime(audio.duration);
//       seekBar.max = audio.duration;
//     });
//     seekBar.addEventListener('input', () => {
//       currentTime.textContent = formatTime(seekBar.value);
//       audio.currentTime = seekBar.value;
//     });
//     button.addEventListener('click', () => {
//       audio.play();
//       audioPlayer = audio;
//       button.style.display = 'none';
//       button.nextElementSibling.style.display = 'inline-block'; // show the pause button
//     });
//     // add event listeners to pause buttons
//     const pauseButtons = document.querySelectorAll('.pause-button');
//     pauseButtons.forEach(pauseButton => {
//       pauseButton.addEventListener('click', () => {
//         audioPlayer.pause();
//         pauseButton.style.display = 'none';
//         pauseButton.previousElementSibling.style.display = 'inline-block'; // show the play button
//       });
//     });
//     // update seek bar as audio plays
//     audio.addEventListener('timeupdate', () => {
//       seekBar.value = audio.currentTime;
//       currentTime.textContent = formatTime(audio.currentTime);
//     });
//     // add event listener to window to check if
// window.addEventListener('blur', () => {
// audioNFTs.forEach(audioNFT => {
// const audio = new Audio(`./dist/assets/audio-dashboard/${audioNFT.name.replace(/ /g, '_')}.wav`);
// let isPlaying = false;
// let duration = 0;
// let seekBar = null;
//   audio.addEventListener('play', () => {
//     isPlaying = true;
//     duration = audio.duration;
//     seekBar.max = duration;
//   });
//   audio.addEventListener('pause', () => {
//     isPlaying = false;
//   });
//   audio.addEventListener('timeupdate', () => {
//     if (isPlaying) {
//       seekBar.value = audio.currentTime;
//     }
//   });
//   const playButton = document.querySelector(`.play-button[data-asset="${audioNFT.name}"]`);
//   const pauseButton = document.querySelector(`.pause-button[data-asset="${audioNFT.name}"]`);
//   seekBar = document.querySelector(`.seek-bar[data-asset="${audioNFT.name}"]`);
//   playButton.addEventListener('click', () => {
//     audio.play();
//     isPlaying = true;
//     playButton.style.display = 'none';
//     pauseButton.style.display = 'inline-block';
//   });
//   pauseButton.addEventListener('click', () => {
//     audio.pause();
//     isPlaying = false;
//     pauseButton.style.display = 'none';
//     playButton.style.display = 'inline-block';
//   });
//   seekBar.addEventListener('input', () => {
//     audio.currentTime = seekBar.value;
//   });
// });
// });
// }
//)}
function _displayCybercitizenAssets() {
  _displayCybercitizenAssets = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(userAddress) {
    var response, data, cybercitizenAssets, assetsHTML, dashboard;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return fetch("https://api.ergoplatform.com/api/v1/boxes/unspent/byAddress/".concat(userAddress));
        case 2:
          response = _context5.sent;
          _context5.next = 5;
          return response.json();
        case 5:
          data = _context5.sent;
          cybercitizenAssets = [];
          data.items.forEach(function (item) {
            item.assets.forEach(function (asset) {
              if (asset.name.includes("Cybercitizen")) {
                var assetNum = asset.name.match(/#(\d+)/)[1];
                cybercitizenAssets.push({
                  name: asset.name,
                  tokenId: asset.tokenId,
                  amount: asset.amount,
                  imgSrc: "./dist/pages/gen2/assets/cc-images/".concat(assetNum, ".png"),
                  imgSrcingame: "./dist/pages/gen2/assets/in-game/".concat(assetNum, ".png")
                });
              }
            });
          });
          assetsHTML = '';
          cybercitizenAssets.forEach(function (asset) {
            assetsHTML += "\n          <div class=\"assetcont\">\n            <p class = \"assettitle\"></p> <p class=\"assetdescription\">".concat(asset.name, "</p>\n            <p class=\"assettitle\">Token ID:</p> <p class=\"assetdescription\"> ").concat(asset.tokenId, "</p>\n            <img class=\"ccimage\" src=\"").concat(asset.imgSrc, "\" />\n            <img class=\"ccimage\" src=\"").concat(asset.imgSrcingame, "\" />\n          </div>\n        ");
            console.log(JSON.stringify(cybercitizenAssets));
          });
          dashboard = document.getElementById("dashboard");
          dashboard.innerHTML += assetsHTML;
          return _context5.abrupt("return", cybercitizenAssets);
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _displayCybercitizenAssets.apply(this, arguments);
}
var displaybtn = document.getElementById("dashboardbtn");
displaybtn.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        dashboardmodal.style.display = "block";
      case 1:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
var closebtn = document.getElementById("closedashboard");
closebtn.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        dashboardmodal.style.display = "none";
      case 1:
      case "end":
        return _context2.stop();
    }
  }, _callee2);
})));
var buttonContainer = document.createElement('div');
document.getElementById('calendar').appendChild(buttonContainer);
function createButtonsForCurrentMonth() {
  var today = new Date();
  var currentMonth = today.getMonth();
  var currentYear = today.getFullYear();
  var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var currentMonthName = monthNames[currentMonth];
  buttonContainer.innerHTML = "<span id=\"statsdisplay\">Barman Stats:</span><p id=\"monthdisplay\">".concat(currentMonthName, "</p>");
  var _loop = function _loop() {
    if (day > today.getDate()) {
      return "break";
    }
    var dateParam = "".concat(currentMonth + 1, "/").concat(day, "/").concat(currentYear);
    var button = document.createElement('button');
    button.textContent = day;
    button.addEventListener('click', function () {
      var requestUrl = 'https://playcyberverse.com/api/leaderboard';
      var requestBody = {
        "pass": "breehze",
        "name": "barman",
        "date": dateParam
      };
      // remove all buttons before showing spinner
      buttonContainer.innerHTML = '<p style="color:var(--yellow) ;font-size:x-small">Loading Data ... </p>';
      setTimeout(function () {
        fetch(requestUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        }).then(function (response) {
          if (!response.ok) {
            throw new Error('Response not ok');
          }
          return response.json();
        }).then(function (response) {
          var data = response.data;
          if (data.length === 0) {
            alert('No one has played on this day yet!');
            createButtonsForCurrentMonth();
            return;
          }
          var datepoints = document.getElementById('datepoints');
          var html = '<h1>Leaderboard Stats for ' + "".concat(dateParam) + '</h1>';
          data.forEach(function (item) {
            html += "<p><span class=\"maintext\">Address: </span><span class=\"subtext\"> ".concat(item.address, "    </span><span class=\"maintext\">Points: </span><span class=\"subtext\"> ").concat(item.points, "</span></p>");
          });
          datepoints.innerHTML = html;
          var datemodal = document.getElementById("datemodal").style.display = "block";
          // clear the button container and re-populate it with buttons
          setTimeout(function () {
            buttonContainer.innerHTML = '';
            createButtonsForCurrentMonth();
          }, 500);
        })["catch"](function (error) {
          console.error(error);
          alert('No data found, no one has played on this day or no one has played yet!');
          createButtonsForCurrentMonth();
        });
      }, 500);
    });
    buttonContainer.appendChild(button);
  };
  for (var day = 1; day <= daysInMonth; day++) {
    var _ret = _loop();
    if (_ret === "break") break;
  }

  // hide the calendar only after the buttons have been created
}

// create the buttons for the current month on page load
createButtonsForCurrentMonth();
connectbtn.addEventListener("click", connect);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map