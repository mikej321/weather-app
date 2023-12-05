/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Constantia.ttf */ "./src/fonts/Constantia.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Mukta-Bold.ttf */ "./src/fonts/Mukta-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Mukta-ExtraBold.ttf */ "./src/fonts/Mukta-ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Mukta-Medium.ttf */ "./src/fonts/Mukta-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Mukta-Regular.ttf */ "./src/fonts/Mukta-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Constantia Normal";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Mukta Bold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  font-weight: 700;
}
@font-face {
  font-family: "Mukta Extra Bold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  font-weight: 800;
}
@font-face {
  font-family: "Mukta Medium";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  font-weight: 500;
}
@font-face {
  font-family: "Mukta Regular";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  font-weight: 400;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

html {
  font-size: 62.5%;
}

img {
  width: 100%;
  object-fit: cover;
}

body {
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  font-family: "Mukta Regular";
  min-height: 100vh;
}

.content {
  display: grid;
  width: 100%;
  max-width: 37.5rem;
  grid-template-rows: 5rem 1fr 5rem;
  grid-template-areas: "navbar" "content" "footer";
}

@media screen and (min-width: 600px) {
  .content {
    max-width: unset;
  }
}
nav {
  grid-area: navbar;
  background-color: #1d3329;
  height: 5rem;
  display: flex;
  padding-inline: 1.6rem 1.4rem;
  position: relative;
}
nav .navbar {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
nav .navbar h1 {
  font-size: 1.2rem;
  color: #6ffabb;
  font-family: "Constantia Normal";
}
nav .navbar .hamburger {
  width: 100%;
  max-width: 2.5rem;
  display: flex;
  height: 100%;
  max-height: 2.3rem;
  flex-direction: column;
  gap: 0.4rem;
  cursor: pointer;
}
nav .navbar .hamburger .line {
  width: 100%;
  max-width: 2.3rem;
  height: 0.4rem;
  border: none;
  border-radius: 6px;
  background: #6ffabb;
  pointer-events: none;
  transition: background 0.3s ease-in-out;
}
nav .navbar .links {
  position: absolute;
  right: 0;
  top: 5rem;
  text-align: center;
  list-style: none;
  max-height: 0;
  overflow: hidden;
}
nav .navbar .links li {
  background: #1d3329;
  padding: 2rem;
  opacity: 0.7;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
nav .navbar .links li:hover {
  background: #7fc7a7;
}
nav .navbar .links li:hover a {
  color: #1d3329;
}
nav .navbar .links li a {
  text-decoration: none;
  color: #6ffabb;
}

.hamburger:hover .line {
  background: #FFFFFF;
}

@media screen and (min-width: 600px) {
  nav {
    justify-content: center;
  }
  nav .navbar {
    width: 100%;
    max-width: 99.4rem;
  }
  nav .navbar h1 {
    font-size: 2rem;
  }
  nav .navbar .hamburger {
    display: none;
  }
  nav .navbar .links {
    position: static;
    display: flex;
    height: 100%;
    max-height: 100%;
    align-items: center;
  }
  nav .navbar .links li {
    opacity: 1;
    padding: 2rem 4rem;
  }
}
main {
  grid-area: content;
  background: linear-gradient(161deg, #fcfcfc -0.23%, rgba(191, 241, 218, 0.2) 56.61%);
  background-blend-mode: darken;
  display: grid;
  grid-template-areas: "zip" "temperatureInfo" "forecast";
  justify-items: center;
}
main .zipContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 2rem;
}
main .zipContainer button {
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  background: #7fc7a7;
  color: white;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}
main .zipContainer button:hover {
  background: #4a6156;
}
main #zipCode {
  display: flex;
  margin-top: 3.8rem;
  width: 100%;
  max-width: 21.7rem;
  height: 3rem;
  border-radius: 8px;
  background: #FFF;
  text-align: center;
  border: none;
}
main .mainContent {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
main .mainContent .areaChoice {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5rem;
  align-items: center;
  position: relative;
  left: 50%;
  opacity: 0;
  transform: translateX(-50%);
  transition: opacity 0.2s ease-in-out;
}
main .mainContent .areaChoice[data-choice=""] {
  z-index: 2;
  opacity: 1;
}
main .mainContent .areaChoice .area {
  border: none;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  width: 100%;
  max-width: 75%;
  text-align: center;
  box-shadow: 2px 2px 5px #d0e5db;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem 2rem;
}
main .mainContent .areaChoice .area p {
  pointer-events: none;
}
main .mainContent .areaChoice .area:first-child {
  margin-top: 5rem;
}
main .mainContent .areaChoice .area:hover {
  background: #4a6156;
  color: white;
}
main .mainContent .temperatureInfo {
  position: relative;
  font-size: 1.2rem;
  display: flex;
  width: 100%;
  max-width: 27.9rem;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-height: 0;
  overflow: hidden;
  border-radius: 8px;
  background: #FFF;
  transition: opacity 0.2s ease-in-out;
}
main .mainContent .temperatureInfo[data-weather=""] {
  margin-top: 5.3rem;
  max-height: 14rem;
  z-index: 2;
  opacity: 1;
}
main .mainContent .temperatureInfo[data-weather=""] .areaElement {
  display: flex;
  flex-direction: column;
  align-items: center;
}
main .mainContent .temperatureInfo[data-weather=""] .areaElement p:last-child {
  font-size: 2rem;
}
main .mainContent .forecast {
  position: relative;
  font-size: 1.2rem;
  display: flex;
  width: 100%;
  max-width: 27.9rem;
  height: 100%;
  max-height: 0;
  overflow: hidden;
  border-radius: 8px;
  background: #fff;
  justify-content: center;
  align-items: center;
  margin-bottom: 6rem;
  transition: opacity 0.2s ease-in-out;
}
main .mainContent .forecast[data-weather=""] {
  margin-top: 5.3rem;
  max-height: 14rem;
  z-index: 2;
  opacity: 1;
}

#zipCode::placeholder {
  text-align: center;
  font-family: "Mukta Regular";
}

.temperatureInfo,
.forecast {
  z-index: 1;
  opacity: 0;
}

#zipCode,
.temperatureInfo,
.forecast {
  box-shadow: 2px 2px 5px #d0e5db;
}

.stateSpan {
  pointer-events: none;
}

@media screen and (min-width: 600px) {
  .mainContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 71rem;
  }
  .mainContent .zipContainer {
    width: 98%;
  }
  .mainContent .zipContainer #zipCode {
    margin-top: 8.2rem;
    max-width: 60rem;
    height: 4rem;
  }
  .mainContent .areaChoice {
    margin-top: 5rem;
  }
  .mainContent .temperatureInfo,
  .mainContent .forecast {
    width: 95% !important;
    max-width: 71rem !important;
  }
}
footer {
  grid-area: footer;
  display: flex;
  background: #1d3329;
  align-items: center;
  justify-content: center;
  color: #6ffabb;
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
}
footer a {
  text-decoration: none;
  color: white;
  transition: color 0.2s ease-in-out;
}
footer a:hover {
  color: #9999ff;
}

@media screen and (min-width: 600px) {
  footer {
    font-size: 1.4rem;
    letter-spacing: 0.2rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/style.sass"],"names":[],"mappings":"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","sourcesContent":["$sunny-1: #ffe95c\n$sunny-2: #403d39\n$sunny-3: #252422\n$sunny-4: #eb5e28\n$sunny-5: #38a700\n$cold-1: #e253f1\n$cold-2: #c5cbfc\n$cold-3: #02111b\n$cold-4: #006e90\n$cold-5: #177e89\n$overcast-1: #d6d6d6\n$overcast-2: #b3b3b3\n$overcast-3: #8a8a8a\n$overcast-4: #616161\n$overcast-5: #383838\n$rainy-1: #2d9ad2\n$rainy-2: #248dad\n$rainy-3: #1c6285\n$rainy-4: #13445c\n$rainy-5: #36bcff\n$snowy-1: #FFFFFF\n$snowy-2: #686868\n$snowy-3: #b3b3b3\n$snowy-4: #8a8a8a\n$snowy-5: #616161\n$base-1: #6ffabb\n$base-2: #7fc7a7\n$base-3: #7c9489\n$base-4: #4a6156\n$base-5: #1d3329\n\n@font-face \n    font-family: 'Constantia Normal'\n    src: url(../fonts/Constantia.ttf)\n    font-weight: 400\n    font-style: normal\n\n@font-face\n    font-family: 'Mukta Bold'\n    src: url(../fonts/Mukta-Bold.ttf)\n    font-weight: 700\n\n@font-face\n    font-family: 'Mukta Extra Bold'\n    src: url(../fonts/Mukta-ExtraBold.ttf)\n    font-weight: 800\n\n@font-face\n    font-family: 'Mukta Medium'\n    src: url(../fonts/Mukta-Medium.ttf)\n    font-weight: 500\n\n@font-face\n    font-family: 'Mukta Regular'\n    src: url(../fonts/Mukta-Regular.ttf)\n    font-weight: 400\n    \n*,\n*::before,\n*::after\n    box-sizing: border-box\n\n*\n    margin: 0\n    padding: 0\n    scroll-behavior: smooth\n\nhtml\n    font-size: 62.5%\n\nimg\n    width: 100%\n    object-fit: cover\n\nbody\n    font-size: 1.6rem\n    display: flex\n    justify-content: center\n    font-family: 'Mukta Regular'\n    min-height: 100vh\n\n.content\n    display: grid\n    width: 100%\n    max-width: 37.5rem\n    grid-template-rows: 5rem 1fr 5rem\n    grid-template-areas: \"navbar\" \"content\" \"footer\"\n\n@media screen and (min-width: 600px)\n    .content\n        max-width: unset\n        \n        \n\nnav\n    grid-area: navbar\n    background-color: $base-5\n    height: 5rem\n    display: flex\n    padding-inline: 1.6rem 1.4rem\n    position: relative\n    .navbar\n        height: 100%\n        display: flex\n        align-items: center\n        justify-content: space-between\n        width: 100%\n        h1\n            font-size: 1.2rem\n            color: $base-1\n            font-family: 'Constantia Normal'\n        .hamburger\n            width: 100%\n            max-width: 2.5rem\n            display: flex\n            height: 100%\n            max-height: 2.3rem\n            flex-direction: column\n            gap: .4rem\n            cursor: pointer\n            .line\n                width: 100%\n                max-width: 2.3rem\n                height: .4rem\n                border: none\n                border-radius: 6px\n                background: $base-1\n                pointer-events: none\n                transition: background 0.3s ease-in-out\n        .links\n            position: absolute\n            right: 0\n            top: 5rem\n            text-align: center\n            list-style: none       \n            max-height: 0\n            overflow: hidden\n            li\n                background: $base-5\n                padding: 2rem\n                opacity: .7\n                transition: all 0.2s ease-in-out\n                cursor: pointer\n                &:hover\n                    background: $base-2\n                &:hover a\n                    color: $base-5\n            li a\n                text-decoration: none\n                color: $base-1\n            \n.hamburger:hover .line\n    background: #FFFFFF\n\n@media screen and (min-width: 600px)\n    nav\n        justify-content: center\n        .navbar\n            width: 100%\n            max-width: 99.4rem\n            h1\n                font-size: 2rem\n            .hamburger\n                display: none\n            .links\n                position: static\n                display: flex\n                height: 100%\n                max-height: 100%\n                align-items: center\n                li\n                    opacity: 1 \n                    padding: 2rem 4rem\n    \n\n\nmain\n    grid-area: content\n    background: linear-gradient(161deg, darken(#FFF, 1%) -0.23%, rgba(191, 241, 218, 0.20) 56.61%)\n    background-blend-mode: darken\n    display: grid\n    grid-template-areas: \"zip\" \"temperatureInfo\" \"forecast\"\n    justify-items: center\n    .zipContainer\n        display: flex\n        flex-direction: column\n        width: 100%\n        align-items: center\n        gap: 2rem\n        button\n            padding: .5rem 2rem\n            border: none\n            border-radius: 4px\n            font-family: inherit\n            background: $base-2\n            color: white\n            cursor: pointer\n            transition: background 0.2s ease-in-out\n            &:hover\n                background: $base-4\n    #zipCode\n        display: flex\n        margin-top: 3.8rem\n        width: 100%\n        max-width: 21.7rem\n        height: 3rem\n        border-radius: 8px\n        background: #FFF\n        text-align: center\n        border: none\n    .mainContent\n        position: relative\n        width: 100%\n        display: flex\n        flex-direction: column\n        align-items: center\n        .areaChoice\n            display: flex\n            flex-direction: column\n            width: 100%\n            gap: 5rem\n            align-items: center\n            position: relative\n            left: 50%\n            opacity: 0\n            transform: translateX(-50%)\n            transition: opacity 0.2s ease-in-out\n            &[data-choice='']\n                z-index: 2\n                opacity: 1\n            .area\n                border: none\n                border-radius: 8px\n                background: white\n                cursor: pointer\n                width: 100%\n                max-width: 75%\n                text-align: center\n                box-shadow: 2px 2px 5px lighten($base-5, 70%)\n                transition: all 0.2s ease-in-out\n                padding: .5rem 2rem\n                p\n                    pointer-events: none\n                &:first-child\n                    margin-top: 5rem\n                &:hover\n                    background: $base-4\n                    color: white\n        .temperatureInfo\n            position: relative\n            font-size: 1.2rem\n            display: flex\n            width: 100%\n            max-width: 27.9rem\n            align-items: center\n            justify-content: center\n            height: 100%\n            max-height: 0\n            overflow: hidden\n            border-radius: 8px\n            background: #FFF\n            transition: opacity 0.2s ease-in-out\n            &[data-weather = '']\n                margin-top: 5.3rem\n                max-height: 14rem\n                z-index: 2\n                opacity: 1\n                .areaElement\n                    display: flex\n                    flex-direction: column\n                    align-items: center\n                    p:last-child\n                        font-size: 2rem\n        .forecast\n            position: relative\n            font-size: 1.2rem\n            display: flex\n            width: 100%\n            max-width: 27.9rem\n            height: 100%\n            max-height: 0\n            overflow: hidden\n            border-radius: 8px\n            background: #fff\n            justify-content: center\n            align-items: center\n            margin-bottom: 6rem\n            transition: opacity 0.2s ease-in-out\n            &[data-weather = '']\n                margin-top: 5.3rem\n                max-height: 14rem\n                z-index: 2\n                opacity: 1\n\n#zipCode::placeholder\n    text-align: center\n    font-family: 'Mukta Regular'\n\n.temperatureInfo,\n.forecast \n    z-index: 1\n    opacity: 0\n    \n#zipCode,\n.temperatureInfo,\n.forecast\n    box-shadow: 2px 2px 5px lighten($base-5, 70%)\n\n.stateSpan\n    pointer-events: none\n\n\n\n@media screen and (min-width: 600px)\n    .mainContent\n       display: flex\n       flex-direction: column\n       align-items: center\n       width: 100%\n       max-width: 71rem \n       .zipContainer\n        width: 98%\n        #zipCode\n         margin-top: 8.2rem\n         max-width: 60rem\n         height: 4rem\n       .areaChoice\n        margin-top: 5rem\n        \n       .temperatureInfo,\n       .forecast\n        width: 95% !important\n        max-width: 71rem !important\n        \n        \n\nfooter\n    grid-area: footer\n    display: flex\n    background: $base-5\n    align-items: center\n    justify-content: center\n    color: $base-1\n    font-size: 1.2rem\n    letter-spacing: .05rem\n    a\n        text-decoration: none\n        color: white\n        transition: color 0.2s ease-in-out\n        &:hover\n            color: lighten(blue, 30%)\n\n@media screen and (min-width: 600px)\n    footer\n        font-size: 1.4rem\n        letter-spacing: .2rem\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.sass":
/*!*******************************!*\
  !*** ./src/styles/style.sass ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.sass */ "./src/styles/style.sass");
/* harmony import */ var _myModules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myModules/display */ "./src/myModules/display.js");




const content = document.querySelector('.content');


window.onload = loadInitialContent()

function createNav() {
    // Creates the header and all of the headers content
    const header = document.createElement('header');
    content.append(header)

    const nav = document.createElement('nav');

    const navBar = document.createElement('div');
    navBar.classList.add('navbar')

    const title = document.createElement('h1');
    title.textContent = 'emperate WeatherApp';
    navBar.append(title);

    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    for (let i = 0; i < 3; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        hamburger.append(line);
    }
    navBar.append(hamburger);

    const links = document.createElement('ul');
    links.classList.add('links');
    
    const linkContainer1 = document.createElement('li');
    const link1 = document.createElement('a');
    link1.textContent = 'Home';
    linkContainer1.append(link1);
    links.append(linkContainer1);

    const linkContainer2 = document.createElement('li');
    const link2 = document.createElement('a');
    link2.textContent = 'Forecast';
    linkContainer2.append(link2);
    links.append(linkContainer2);
    

    const linkContainer3 = document.createElement('li');
    const link3 = document.createElement('a');
    link3.textContent = 'Warnings';
    linkContainer3.append(link3);
    links.append(linkContainer3);

    navBar.append(links)
    nav.append(navBar);
    header.append(nav);
}

function createMainContent() {
    // creates all of the main content on load
    const main = document.createElement('main');
    content.append(main);

    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');
    main.append(mainContent);

    const zipContainer = document.createElement('div');
    zipContainer.classList.add('zipContainer');
    mainContent.append(zipContainer);

    const zipCode = document.createElement('input');
    zipCode.setAttribute('type', 'text');
    zipCode.name = 'zipCode';
    zipCode.id = 'zipCode';
    zipCode.placeholder = 'Insert Zip or County Name Here';
    zipContainer.append(zipCode);

    const searchButton = document.createElement('button');
    searchButton.setAttribute('type', 'button');
    searchButton.textContent = 'Search';
    zipContainer.append(searchButton);

    const areaChoice = document.createElement('div');
    areaChoice.classList.add('areaChoice');
    mainContent.append(areaChoice);

    const temperatureInfo = document.createElement('div');
    temperatureInfo.classList.add('temperatureInfo');
    mainContent.append(temperatureInfo);

    const forecast = document.createElement('div');
    forecast.classList.add('forecast');
    mainContent.append(forecast);
}

function createFooter() {
    const footer = document.createElement('footer');
    content.append(footer);

    const attribution = document.createElement('a');
    attribution.href = 'https://github.com/mikej321';
    attribution.textContent = 'Michael Johnson';

    const footerContent = document.createElement('p');
    footerContent.textContent = `Made by `;
    footerContent.insertAdjacentElement('beforeend', attribution);

    footer.append(footerContent);
}

function loadInitialContent() {
    createNav();
    createMainContent();
    createFooter();
}

function querySelectors() {
    const searchButton = document.querySelector('.zipContainer > button');
    searchButton.addEventListener('click', _myModules_display__WEBPACK_IMPORTED_MODULE_1__.printWeather);
}

querySelectors();



/***/ }),

/***/ "./src/myModules/display.js":
/*!**********************************!*\
  !*** ./src/myModules/display.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printWeather: () => (/* binding */ printWeather)
/* harmony export */ });
/* harmony import */ var _assets_Cloud_Group_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/Cloud_Group.svg */ "./src/assets/Cloud_Group.svg");
/* harmony import */ var _assets_Drizzle_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/Drizzle.svg */ "./src/assets/Drizzle.svg");
/* harmony import */ var _assets_Heavy_Rain_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/Heavy_Rain.svg */ "./src/assets/Heavy_Rain.svg");
/* harmony import */ var _assets_Heavy_Snow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Heavy_Snow.svg */ "./src/assets/Heavy_Snow.svg");
/* harmony import */ var _assets_Light_Drizzle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/Light_Drizzle.svg */ "./src/assets/Light_Drizzle.svg");
/* harmony import */ var _assets_Light_Rain_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/Light_Rain.svg */ "./src/assets/Light_Rain.svg");
/* harmony import */ var _assets_Light_Snow_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/Light_Snow.svg */ "./src/assets/Light_Snow.svg");
/* harmony import */ var _assets_Moderate_Drizzle_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/Moderate_Drizzle.svg */ "./src/assets/Moderate_Drizzle.svg");
/* harmony import */ var _assets_Moderate_Rain_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/Moderate_Rain.svg */ "./src/assets/Moderate_Rain.svg");
/* harmony import */ var _assets_Moderate_Snow_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/Moderate_Snow.svg */ "./src/assets/Moderate_Snow.svg");
/* harmony import */ var _assets_Storm_Cloud_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/Storm_Cloud.svg */ "./src/assets/Storm_Cloud.svg");
/* harmony import */ var _assets_Sun_With_Ray_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/Sun_With_Ray.svg */ "./src/assets/Sun_With_Ray.svg");
/* harmony import */ var _assets_Sun_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/Sun.svg */ "./src/assets/Sun.svg");
/* harmony import */ var _assets_Title_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/Title.svg */ "./src/assets/Title.svg");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search */ "./src/myModules/search.js");
// image imports
















// function imports



async function printWeather() {
    const areaChoice = document.querySelector('.areaChoice');
    const temperatureInfo = document.querySelector('.temperatureInfo');
    const forecast = document.querySelector('.forecast');
    let myWeather = await (0,_search__WEBPACK_IMPORTED_MODULE_14__.fetchWeather)();
    (0,_search__WEBPACK_IMPORTED_MODULE_14__.eraseTempInfo)();
    (0,_search__WEBPACK_IMPORTED_MODULE_14__.eraseAreaContents)();


    temperatureInfo.dataset.weather = '';
    const areaEle = document.createElement('div');
    areaEle.classList.add('areaElement');
    temperatureInfo.append(areaEle);

    const townName = document.createElement('p');
    townName.textContent = `${myWeather[0].townName}, ${myWeather[0].stateName}`;
    areaEle.append(townName);

    let fahrenheitSymbol = '&#8457';
    const temperature = document.createElement('p');
    temperature.innerHTML = `${myWeather[1].current['temperature_2m']} ${fahrenheitSymbol}`;
    areaEle.append(temperature);
    

}




/***/ }),

/***/ "./src/myModules/search.js":
/*!*********************************!*\
  !*** ./src/myModules/search.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eraseAreaContents: () => (/* binding */ eraseAreaContents),
/* harmony export */   eraseTempInfo: () => (/* binding */ eraseTempInfo),
/* harmony export */   fadeIn: () => (/* binding */ fadeIn),
/* harmony export */   fadeOut: () => (/* binding */ fadeOut),
/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");



async function fetchArea() {
    // selectors for search functions
    const searchBar = document.querySelector('#zipCode');
    const searchButton = document.querySelector('.zipContainer > button');

    // fetch properties for the area selection
    let areaArr = [];
    let input = searchBar.value;
    let url = `https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=10&language=en&format=json`;
    let myResponse = await fetch(url, {
        mode: 'cors',
    });
    let myArea = await myResponse.json();
    /* everything that I want pulled from the JSON
    will be included in this loop. Feel free to update the values
    here if you need extra areas pulled from the JSON. */
    for (let area of myArea.results) {
        let stateName = area.admin1;
        let countyName = area.admin2;
        let countryName = area.country;
        let townName = area.name;
        let townLat = area.latitude;
        let townLon = area.longitude;
        /* some of the areas that show up in the search 
        have no zip, so if they don't, I have
        made a default value for those */
        let postCode = '';
        if (area.postcodes === undefined) {
            postCode = postCode;
        } else {
            postCode = area.postcodes.pop();
        }
        
        let areaObj = {
            stateName,
            countyName,
            countryName,
            townName,
            postCode,
            townLat,
            townLon,
        };
        // every area that is pulled will be pushed into an arr
        areaArr.push(areaObj);
    }
    return areaArr;
}

/* function that erases the choices on screen every time a new
search is performed */

function eraseAreaContents() {
    const areaChoice = document.querySelector('.areaChoice');
    while (areaChoice.firstChild) {
        areaChoice.removeChild(areaChoice.firstChild);
    }
}

function eraseTempInfo() {
    const tempInfo = document.querySelector('.temperatureInfo');
    while (tempInfo.firstChild) {
        tempInfo.removeChild(tempInfo.firstChild);
    }
}

async function fadeOut(ele) {
    let opacity = 1;
    let intervalID = setInterval(() => {
        if (opacity > 0) {
            opacity = opacity - 0.1;
            ele.style.opacity = opacity;
        }  else {
            clearInterval(intervalID);
        }
    })
}

async function fadeIn(ele) {
    let opacity = -0.1;
    let intervalID = setInterval(() => {
        if (opacity < 1) {
            opacity = opacity + 0.1;
            ele.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    })
}

async function pickArea() {
    const areaChoice = document.querySelector('.areaChoice');
    let areaArr = await fetchArea();
    eraseAreaContents();

    for (let [index, area] of areaArr.entries()) {
        areaChoice.setAttribute('data-choice', '');
        const areaEl = document.createElement('div');
        areaEl.classList.add('area');
        areaEl.dataset.choice = index;
        areaChoice.append(areaEl);

        const areaP = document.createElement('p');
        areaP.textContent = area.townName + ',' + ' ';
        areaEl.append(areaP);

        const stateSpan = document.createElement('span');
        stateSpan.classList.add('stateSpan');
        stateSpan.textContent = area.stateName + ' ';
        areaP.append(stateSpan);

        const zipSpan = document.createElement('span');
        zipSpan.classList.add('zipSpan');
        zipSpan.textContent = area.postCode;
        areaP.append(zipSpan);
    }

    const areas = document.querySelectorAll('.area');
    let newArr = [areaArr, areas];
    return newArr;
}

async function pickedChoice() {
    const listOfTowns = await pickArea();
    function waitForChoice() {
        return new Promise((resolve, reject) => {
            listOfTowns[1].forEach((town) => {
                town.addEventListener('click', (event) => {
                    let tarEl = event.target;
                    let choiceTown = listOfTowns[0][tarEl.dataset.choice];
                    resolve(choiceTown);
                })
            })
        })
    }
    let resolvedChoice = await waitForChoice();
    return resolvedChoice;
}

async function fetchWeather() {
    let userChoice = await pickedChoice();
    let myResponse = await fetch(`https://api.open-meteo.com/v1/dwd-icon?latitude=${userChoice.townLat}&longitude=${userChoice.townLon}&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`, {
        mode: 'cors',
    });
    let myWeather = await myResponse.json();
    console.log(myWeather)
    return [userChoice, myWeather];
}



/***/ }),

/***/ "./src/assets/Cloud_Group.svg":
/*!************************************!*\
  !*** ./src/assets/Cloud_Group.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8cce6d7214777fd1eb16.svg";

/***/ }),

/***/ "./src/assets/Drizzle.svg":
/*!********************************!*\
  !*** ./src/assets/Drizzle.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "afb9aecefea029ab8ec9.svg";

/***/ }),

/***/ "./src/assets/Heavy_Rain.svg":
/*!***********************************!*\
  !*** ./src/assets/Heavy_Rain.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4aeb2e12854099c9291e.svg";

/***/ }),

/***/ "./src/assets/Heavy_Snow.svg":
/*!***********************************!*\
  !*** ./src/assets/Heavy_Snow.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b31d32cc377d4851d552.svg";

/***/ }),

/***/ "./src/assets/Light_Drizzle.svg":
/*!**************************************!*\
  !*** ./src/assets/Light_Drizzle.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8c758d119a77ea35118.svg";

/***/ }),

/***/ "./src/assets/Light_Rain.svg":
/*!***********************************!*\
  !*** ./src/assets/Light_Rain.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c528356b07c16d3ede5.svg";

/***/ }),

/***/ "./src/assets/Light_Snow.svg":
/*!***********************************!*\
  !*** ./src/assets/Light_Snow.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1db205b89bc580896fc8.svg";

/***/ }),

/***/ "./src/assets/Moderate_Drizzle.svg":
/*!*****************************************!*\
  !*** ./src/assets/Moderate_Drizzle.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3329a682f59df825e5c.svg";

/***/ }),

/***/ "./src/assets/Moderate_Rain.svg":
/*!**************************************!*\
  !*** ./src/assets/Moderate_Rain.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "169eca25999f4c604648.svg";

/***/ }),

/***/ "./src/assets/Moderate_Snow.svg":
/*!**************************************!*\
  !*** ./src/assets/Moderate_Snow.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64d80e6e663e5c7cdc9a.svg";

/***/ }),

/***/ "./src/assets/Storm_Cloud.svg":
/*!************************************!*\
  !*** ./src/assets/Storm_Cloud.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9919e49f0a3f997e45d3.svg";

/***/ }),

/***/ "./src/assets/Sun.svg":
/*!****************************!*\
  !*** ./src/assets/Sun.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe5fb1ce706fd4e1a3a6.svg";

/***/ }),

/***/ "./src/assets/Sun_With_Ray.svg":
/*!*************************************!*\
  !*** ./src/assets/Sun_With_Ray.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0157d83a3e4e1ad2f5c3.svg";

/***/ }),

/***/ "./src/assets/Title.svg":
/*!******************************!*\
  !*** ./src/assets/Title.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e53faa1511177c63e4a9.svg";

/***/ }),

/***/ "./src/fonts/Constantia.ttf":
/*!**********************************!*\
  !*** ./src/fonts/Constantia.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b7c813a1c0c7ba25114.ttf";

/***/ }),

/***/ "./src/fonts/Mukta-Bold.ttf":
/*!**********************************!*\
  !*** ./src/fonts/Mukta-Bold.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a7897f127e01e4b0d8f.ttf";

/***/ }),

/***/ "./src/fonts/Mukta-ExtraBold.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Mukta-ExtraBold.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "14808d3b27a5bf4f992c.ttf";

/***/ }),

/***/ "./src/fonts/Mukta-Medium.ttf":
/*!************************************!*\
  !*** ./src/fonts/Mukta-Medium.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1dbcaa3b34d2fe6808d3.ttf";

/***/ }),

/***/ "./src/fonts/Mukta-Regular.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Mukta-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "044d4dd07d7636695eda.ttf";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 			"main": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDBIQUEwQztBQUN0Riw0Q0FBNEMsMEhBQTBDO0FBQ3RGLDRDQUE0QyxvSUFBK0M7QUFDM0YsNENBQTRDLDhIQUE0QztBQUN4Riw0Q0FBNEMsZ0lBQTZDO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx5RkFBeUYsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxRQUFRLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFlBQVksTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNySkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5zYXNzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuc2Fzcz9iZmFkIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbXlNb2R1bGVzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbXlNb2R1bGVzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQ29uc3RhbnRpYS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9NdWt0YS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL011a3RhLUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9NdWt0YS1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvTXVrdGEtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29uc3RhbnRpYSBOb3JtYWxcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJNdWt0YSBCb2xkXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11a3RhIEV4dHJhIEJvbGRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVrdGEgTWVkaXVtXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11a3RhIFJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTXVrdGEgUmVndWxhclwiO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzNy41cmVtO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gMWZyIDVyZW07XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibmF2YmFyXCIgXCJjb250ZW50XCIgXCJmb290ZXJcIjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cbm5hdiB7XG4gIGdyaWQtYXJlYTogbmF2YmFyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQzMzI5O1xuICBoZWlnaHQ6IDVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctaW5saW5lOiAxLjZyZW0gMS40cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5uYXYgLm5hdmJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbn1cbm5hdiAubmF2YmFyIGgxIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjNmZmYWJiO1xuICBmb250LWZhbWlseTogXCJDb25zdGFudGlhIE5vcm1hbFwiO1xufVxubmF2IC5uYXZiYXIgLmhhbWJ1cmdlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDIuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAyLjNyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC40cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5uYXYgLm5hdmJhciAuaGFtYnVyZ2VyIC5saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMi4zcmVtO1xuICBoZWlnaHQ6IDAuNHJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6ICM2ZmZhYmI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5uYXYgLm5hdmJhciAubGlua3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbm5hdiAubmF2YmFyIC5saW5rcyBsaSB7XG4gIGJhY2tncm91bmQ6ICMxZDMzMjk7XG4gIHBhZGRpbmc6IDJyZW07XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm5hdiAubmF2YmFyIC5saW5rcyBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM3ZmM3YTc7XG59XG5uYXYgLm5hdmJhciAubGlua3MgbGk6aG92ZXIgYSB7XG4gIGNvbG9yOiAjMWQzMzI5O1xufVxubmF2IC5uYXZiYXIgLmxpbmtzIGxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNmZmYWJiO1xufVxuXG4uaGFtYnVyZ2VyOmhvdmVyIC5saW5lIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgbmF2IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBuYXYgLm5hdmJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5OS40cmVtO1xuICB9XG4gIG5hdiAubmF2YmFyIGgxIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgbmF2IC5uYXZiYXIgLmhhbWJ1cmdlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBuYXYgLm5hdmJhciAubGlua3Mge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIG5hdiAubmF2YmFyIC5saW5rcyBsaSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XG4gIH1cbn1cbm1haW4ge1xuICBncmlkLWFyZWE6IGNvbnRlbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjFkZWcsICNmY2ZjZmMgLTAuMjMlLCByZ2JhKDE5MSwgMjQxLCAyMTgsIDAuMikgNTYuNjElKTtcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiemlwXCIgXCJ0ZW1wZXJhdHVyZUluZm9cIiBcImZvcmVjYXN0XCI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbm1haW4gLnppcENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJyZW07XG59XG5tYWluIC56aXBDb250YWluZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogIzdmYzdhNztcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluLW91dDtcbn1cbm1haW4gLnppcENvbnRhaW5lciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNGE2MTU2O1xufVxubWFpbiAjemlwQ29kZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDMuOHJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMjEuN3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xufVxubWFpbiAubWFpbkNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubWFpbiAubWFpbkNvbnRlbnQgLmFyZWFDaG9pY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgZ2FwOiA1cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5tYWluIC5tYWluQ29udGVudCAuYXJlYUNob2ljZVtkYXRhLWNob2ljZT1cIlwiXSB7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDE7XG59XG5tYWluIC5tYWluQ29udGVudCAuYXJlYUNob2ljZSAuYXJlYSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3NSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggI2QwZTVkYjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xufVxubWFpbiAubWFpbkNvbnRlbnQgLmFyZWFDaG9pY2UgLmFyZWEgcCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxubWFpbiAubWFpbkNvbnRlbnQgLmFyZWFDaG9pY2UgLmFyZWE6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA1cmVtO1xufVxubWFpbiAubWFpbkNvbnRlbnQgLmFyZWFDaG9pY2UgLmFyZWE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNGE2MTU2O1xuICBjb2xvcjogd2hpdGU7XG59XG5tYWluIC5tYWluQ29udGVudCAudGVtcGVyYXR1cmVJbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMjcuOXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5tYWluIC5tYWluQ29udGVudCAudGVtcGVyYXR1cmVJbmZvW2RhdGEtd2VhdGhlcj1cIlwiXSB7XG4gIG1hcmdpbi10b3A6IDUuM3JlbTtcbiAgbWF4LWhlaWdodDogMTRyZW07XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDE7XG59XG5tYWluIC5tYWluQ29udGVudCAudGVtcGVyYXR1cmVJbmZvW2RhdGEtd2VhdGhlcj1cIlwiXSAuYXJlYUVsZW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubWFpbiAubWFpbkNvbnRlbnQgLnRlbXBlcmF0dXJlSW5mb1tkYXRhLXdlYXRoZXI9XCJcIl0gLmFyZWFFbGVtZW50IHA6bGFzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbm1haW4gLm1haW5Db250ZW50IC5mb3JlY2FzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDI3LjlyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xufVxubWFpbiAubWFpbkNvbnRlbnQgLmZvcmVjYXN0W2RhdGEtd2VhdGhlcj1cIlwiXSB7XG4gIG1hcmdpbi10b3A6IDUuM3JlbTtcbiAgbWF4LWhlaWdodDogMTRyZW07XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDE7XG59XG5cbiN6aXBDb2RlOjpwbGFjZWhvbGRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTXVrdGEgUmVndWxhclwiO1xufVxuXG4udGVtcGVyYXR1cmVJbmZvLFxuLmZvcmVjYXN0IHtcbiAgei1pbmRleDogMTtcbiAgb3BhY2l0eTogMDtcbn1cblxuI3ppcENvZGUsXG4udGVtcGVyYXR1cmVJbmZvLFxuLmZvcmVjYXN0IHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggI2QwZTVkYjtcbn1cblxuLnN0YXRlU3BhbiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAubWFpbkNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNzFyZW07XG4gIH1cbiAgLm1haW5Db250ZW50IC56aXBDb250YWluZXIge1xuICAgIHdpZHRoOiA5OCU7XG4gIH1cbiAgLm1haW5Db250ZW50IC56aXBDb250YWluZXIgI3ppcENvZGUge1xuICAgIG1hcmdpbi10b3A6IDguMnJlbTtcbiAgICBtYXgtd2lkdGg6IDYwcmVtO1xuICAgIGhlaWdodDogNHJlbTtcbiAgfVxuICAubWFpbkNvbnRlbnQgLmFyZWFDaG9pY2Uge1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG4gIH1cbiAgLm1haW5Db250ZW50IC50ZW1wZXJhdHVyZUluZm8sXG4gIC5tYWluQ29udGVudCAuZm9yZWNhc3Qge1xuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDcxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbmZvb3RlciB7XG4gIGdyaWQtYXJlYTogZm9vdGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjMWQzMzI5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICM2ZmZhYmI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbn1cbmZvb3RlciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5mb290ZXIgYTpob3ZlciB7XG4gIGNvbG9yOiAjOTk5OWZmO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICBmb290ZXIge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUErQkE7RUFDSSxnQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTlCSjtBQWdDQTtFQUNJLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQTlCSjtBQWdDQTtFQUNJLCtCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQTlCSjtBQWdDQTtFQUNJLDJCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQTlCSjtBQWdDQTtFQUNJLDRCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBQTlCSjtBQWdDQTs7O0VBR0ksc0JBQUE7QUE5Qko7O0FBZ0NBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQTdCSjs7QUErQkE7RUFDSSxn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QVlKO0FBWEk7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQWFSO0FBWlE7RUFDSSxjQUFBO0FBY1o7O0FBWkE7RUFDSTtJQUNJLGlCQUFBO0lBQ0Esc0JBQUE7RUFlTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRzdW5ueS0xOiAjZmZlOTVjXFxuJHN1bm55LTI6ICM0MDNkMzlcXG4kc3VubnktMzogIzI1MjQyMlxcbiRzdW5ueS00OiAjZWI1ZTI4XFxuJHN1bm55LTU6ICMzOGE3MDBcXG4kY29sZC0xOiAjZTI1M2YxXFxuJGNvbGQtMjogI2M1Y2JmY1xcbiRjb2xkLTM6ICMwMjExMWJcXG4kY29sZC00OiAjMDA2ZTkwXFxuJGNvbGQtNTogIzE3N2U4OVxcbiRvdmVyY2FzdC0xOiAjZDZkNmQ2XFxuJG92ZXJjYXN0LTI6ICNiM2IzYjNcXG4kb3ZlcmNhc3QtMzogIzhhOGE4YVxcbiRvdmVyY2FzdC00OiAjNjE2MTYxXFxuJG92ZXJjYXN0LTU6ICMzODM4MzhcXG4kcmFpbnktMTogIzJkOWFkMlxcbiRyYWlueS0yOiAjMjQ4ZGFkXFxuJHJhaW55LTM6ICMxYzYyODVcXG4kcmFpbnktNDogIzEzNDQ1Y1xcbiRyYWlueS01OiAjMzZiY2ZmXFxuJHNub3d5LTE6ICNGRkZGRkZcXG4kc25vd3ktMjogIzY4Njg2OFxcbiRzbm93eS0zOiAjYjNiM2IzXFxuJHNub3d5LTQ6ICM4YThhOGFcXG4kc25vd3ktNTogIzYxNjE2MVxcbiRiYXNlLTE6ICM2ZmZhYmJcXG4kYmFzZS0yOiAjN2ZjN2E3XFxuJGJhc2UtMzogIzdjOTQ4OVxcbiRiYXNlLTQ6ICM0YTYxNTZcXG4kYmFzZS01OiAjMWQzMzI5XFxuXFxuQGZvbnQtZmFjZSBcXG4gICAgZm9udC1mYW1pbHk6ICdDb25zdGFudGlhIE5vcm1hbCdcXG4gICAgc3JjOiB1cmwoLi4vZm9udHMvQ29uc3RhbnRpYS50dGYpXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDBcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsXFxuXFxuQGZvbnQtZmFjZVxcbiAgICBmb250LWZhbWlseTogJ011a3RhIEJvbGQnXFxuICAgIHNyYzogdXJsKC4uL2ZvbnRzL011a3RhLUJvbGQudHRmKVxcbiAgICBmb250LXdlaWdodDogNzAwXFxuXFxuQGZvbnQtZmFjZVxcbiAgICBmb250LWZhbWlseTogJ011a3RhIEV4dHJhIEJvbGQnXFxuICAgIHNyYzogdXJsKC4uL2ZvbnRzL011a3RhLUV4dHJhQm9sZC50dGYpXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDBcXG5cXG5AZm9udC1mYWNlXFxuICAgIGZvbnQtZmFtaWx5OiAnTXVrdGEgTWVkaXVtJ1xcbiAgICBzcmM6IHVybCguLi9mb250cy9NdWt0YS1NZWRpdW0udHRmKVxcbiAgICBmb250LXdlaWdodDogNTAwXFxuXFxuQGZvbnQtZmFjZVxcbiAgICBmb250LWZhbWlseTogJ011a3RhIFJlZ3VsYXInXFxuICAgIHNyYzogdXJsKC4uL2ZvbnRzL011a3RhLVJlZ3VsYXIudHRmKVxcbiAgICBmb250LXdlaWdodDogNDAwXFxuICAgIFxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcXG5cXG4qXFxuICAgIG1hcmdpbjogMFxcbiAgICBwYWRkaW5nOiAwXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoXFxuXFxuaHRtbFxcbiAgICBmb250LXNpemU6IDYyLjUlXFxuXFxuaW1nXFxuICAgIHdpZHRoOiAxMDAlXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyXFxuXFxuYm9keVxcbiAgICBmb250LXNpemU6IDEuNnJlbVxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuICAgIGZvbnQtZmFtaWx5OiAnTXVrdGEgUmVndWxhcidcXG4gICAgbWluLWhlaWdodDogMTAwdmhcXG5cXG4uY29udGVudFxcbiAgICBkaXNwbGF5OiBncmlkXFxuICAgIHdpZHRoOiAxMDAlXFxuICAgIG1heC13aWR0aDogMzcuNXJlbVxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gMWZyIDVyZW1cXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm5hdmJhclxcXCIgXFxcImNvbnRlbnRcXFwiIFxcXCJmb290ZXJcXFwiXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIC5jb250ZW50XFxuICAgICAgICBtYXgtd2lkdGg6IHVuc2V0XFxuICAgICAgICBcXG4gICAgICAgIFxcblxcbm5hdlxcbiAgICBncmlkLWFyZWE6IG5hdmJhclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS01XFxuICAgIGhlaWdodDogNXJlbVxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIHBhZGRpbmctaW5saW5lOiAxLjZyZW0gMS40cmVtXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcbiAgICAubmF2YmFyXFxuICAgICAgICBoZWlnaHQ6IDEwMCVcXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxcbiAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgIGgxXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW1cXG4gICAgICAgICAgICBjb2xvcjogJGJhc2UtMVxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ29uc3RhbnRpYSBOb3JtYWwnXFxuICAgICAgICAuaGFtYnVyZ2VyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIuNXJlbVxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCVcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyLjNyZW1cXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgICAgICAgICAgZ2FwOiAuNHJlbVxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxcbiAgICAgICAgICAgIC5saW5lXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMi4zcmVtXFxuICAgICAgICAgICAgICAgIGhlaWdodDogLjRyZW1cXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFzZS0xXFxuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dFxcbiAgICAgICAgLmxpbmtzXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXFxuICAgICAgICAgICAgcmlnaHQ6IDBcXG4gICAgICAgICAgICB0b3A6IDVyZW1cXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lICAgICAgIFxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDBcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuXFxuICAgICAgICAgICAgbGlcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhc2UtNVxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxcbiAgICAgICAgICAgICAgICAmOmhvdmVyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFzZS0yXFxuICAgICAgICAgICAgICAgICY6aG92ZXIgYVxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRiYXNlLTVcXG4gICAgICAgICAgICBsaSBhXFxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJhc2UtMVxcbiAgICAgICAgICAgIFxcbi5oYW1idXJnZXI6aG92ZXIgLmxpbmVcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRlxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICBuYXZcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuICAgICAgICAubmF2YmFyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDk5LjRyZW1cXG4gICAgICAgICAgICBoMVxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW1cXG4gICAgICAgICAgICAuaGFtYnVyZ2VyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcXG4gICAgICAgICAgICAubGlua3NcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpY1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJVxcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gICAgICAgICAgICAgICAgbGlcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEgXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDRyZW1cXG4gICAgXFxuXFxuXFxubWFpblxcbiAgICBncmlkLWFyZWE6IGNvbnRlbnRcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MWRlZywgZGFya2VuKCNGRkYsIDElKSAtMC4yMyUsIHJnYmEoMTkxLCAyNDEsIDIxOCwgMC4yMCkgNTYuNjElKVxcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlblxcbiAgICBkaXNwbGF5OiBncmlkXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJ6aXBcXFwiIFxcXCJ0ZW1wZXJhdHVyZUluZm9cXFwiIFxcXCJmb3JlY2FzdFxcXCJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyXFxuICAgIC56aXBDb250YWluZXJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgICAgICBnYXA6IDJyZW1cXG4gICAgICAgIGJ1dHRvblxcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDJyZW1cXG4gICAgICAgICAgICBib3JkZXI6IG5vbmVcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcXG4gICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdFxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYXNlLTJcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgICAgICAmOmhvdmVyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYXNlLTRcXG4gICAgI3ppcENvZGVcXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgIG1hcmdpbi10b3A6IDMuOHJlbVxcbiAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgIG1heC13aWR0aDogMjEuN3JlbVxcbiAgICAgICAgaGVpZ2h0OiAzcmVtXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHhcXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxcbiAgICAgICAgYm9yZGVyOiBub25lXFxuICAgIC5tYWluQ29udGVudFxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXFxuICAgICAgICB3aWR0aDogMTAwJVxcbiAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICAgICAgLmFyZWFDaG9pY2VcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgICAgICAgZ2FwOiA1cmVtXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcbiAgICAgICAgICAgIGxlZnQ6IDUwJVxcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSlcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgICAgICAmW2RhdGEtY2hvaWNlPScnXVxcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcXG4gICAgICAgICAgICAuYXJlYVxcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmVcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlXFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDc1JVxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggbGlnaHRlbigkYmFzZS01LCA3MCUpXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDJyZW1cXG4gICAgICAgICAgICAgICAgcFxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmVcXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZFxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXJlbVxcbiAgICAgICAgICAgICAgICAmOmhvdmVyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFzZS00XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVcXG4gICAgICAgIC50ZW1wZXJhdHVyZUluZm9cXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbVxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxcbiAgICAgICAgICAgIG1heC13aWR0aDogMjcuOXJlbVxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJVxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDBcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRlxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluLW91dFxcbiAgICAgICAgICAgICZbZGF0YS13ZWF0aGVyID0gJyddXFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUuM3JlbVxcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNHJlbVxcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcXG4gICAgICAgICAgICAgICAgLmFyZWFFbGVtZW50XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgICAgICAgICAgICAgICAgICBwOmxhc3QtY2hpbGRcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW1cXG4gICAgICAgIC5mb3JlY2FzdFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNy45cmVtXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMFxcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW5cXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHhcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnJlbVxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluLW91dFxcbiAgICAgICAgICAgICZbZGF0YS13ZWF0aGVyID0gJyddXFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUuM3JlbVxcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNHJlbVxcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcXG5cXG4jemlwQ29kZTo6cGxhY2Vob2xkZXJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXFxuICAgIGZvbnQtZmFtaWx5OiAnTXVrdGEgUmVndWxhcidcXG5cXG4udGVtcGVyYXR1cmVJbmZvLFxcbi5mb3JlY2FzdCBcXG4gICAgei1pbmRleDogMVxcbiAgICBvcGFjaXR5OiAwXFxuICAgIFxcbiN6aXBDb2RlLFxcbi50ZW1wZXJhdHVyZUluZm8sXFxuLmZvcmVjYXN0XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGxpZ2h0ZW4oJGJhc2UtNSwgNzAlKVxcblxcbi5zdGF0ZVNwYW5cXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmVcXG5cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLm1haW5Db250ZW50XFxuICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgIG1heC13aWR0aDogNzFyZW0gXFxuICAgICAgIC56aXBDb250YWluZXJcXG4gICAgICAgIHdpZHRoOiA5OCVcXG4gICAgICAgICN6aXBDb2RlXFxuICAgICAgICAgbWFyZ2luLXRvcDogOC4ycmVtXFxuICAgICAgICAgbWF4LXdpZHRoOiA2MHJlbVxcbiAgICAgICAgIGhlaWdodDogNHJlbVxcbiAgICAgICAuYXJlYUNob2ljZVxcbiAgICAgICAgbWFyZ2luLXRvcDogNXJlbVxcbiAgICAgICAgXFxuICAgICAgIC50ZW1wZXJhdHVyZUluZm8sXFxuICAgICAgIC5mb3JlY2FzdFxcbiAgICAgICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50XFxuICAgICAgICBtYXgtd2lkdGg6IDcxcmVtICFpbXBvcnRhbnRcXG4gICAgICAgIFxcbiAgICAgICAgXFxuXFxuZm9vdGVyXFxuICAgIGdyaWQtYXJlYTogZm9vdGVyXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgYmFja2dyb3VuZDogJGJhc2UtNVxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuICAgIGNvbG9yOiAkYmFzZS0xXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtXFxuICAgIGxldHRlci1zcGFjaW5nOiAuMDVyZW1cXG4gICAgYVxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXFxuICAgICAgICBjb2xvcjogd2hpdGVcXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgICY6aG92ZXJcXG4gICAgICAgICAgICBjb2xvcjogbGlnaHRlbihibHVlLCAzMCUpXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIGZvb3RlclxcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW1cXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNhc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Fzcyc7XG5pbXBvcnQgeyBwcmludFdlYXRoZXIgfSBmcm9tICcuL215TW9kdWxlcy9kaXNwbGF5JztcblxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuXG53aW5kb3cub25sb2FkID0gbG9hZEluaXRpYWxDb250ZW50KClcblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICAgIC8vIENyZWF0ZXMgdGhlIGhlYWRlciBhbmQgYWxsIG9mIHRoZSBoZWFkZXJzIGNvbnRlbnRcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb250ZW50LmFwcGVuZChoZWFkZXIpXG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKVxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ2VtcGVyYXRlIFdlYXRoZXJBcHAnO1xuICAgIG5hdkJhci5hcHBlbmQodGl0bGUpO1xuXG4gICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoJ2hhbWJ1cmdlcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGluZS5jbGFzc0xpc3QuYWRkKCdsaW5lJyk7XG4gICAgICAgIGhhbWJ1cmdlci5hcHBlbmQobGluZSk7XG4gICAgfVxuICAgIG5hdkJhci5hcHBlbmQoaGFtYnVyZ2VyKTtcblxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBsaW5rcy5jbGFzc0xpc3QuYWRkKCdsaW5rcycpO1xuICAgIFxuICAgIGNvbnN0IGxpbmtDb250YWluZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaW5rMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rMS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBsaW5rQ29udGFpbmVyMS5hcHBlbmQobGluazEpO1xuICAgIGxpbmtzLmFwcGVuZChsaW5rQ29udGFpbmVyMSk7XG5cbiAgICBjb25zdCBsaW5rQ29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGluazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluazIudGV4dENvbnRlbnQgPSAnRm9yZWNhc3QnO1xuICAgIGxpbmtDb250YWluZXIyLmFwcGVuZChsaW5rMik7XG4gICAgbGlua3MuYXBwZW5kKGxpbmtDb250YWluZXIyKTtcbiAgICBcblxuICAgIGNvbnN0IGxpbmtDb250YWluZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBsaW5rMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rMy50ZXh0Q29udGVudCA9ICdXYXJuaW5ncyc7XG4gICAgbGlua0NvbnRhaW5lcjMuYXBwZW5kKGxpbmszKTtcbiAgICBsaW5rcy5hcHBlbmQobGlua0NvbnRhaW5lcjMpO1xuXG4gICAgbmF2QmFyLmFwcGVuZChsaW5rcylcbiAgICBuYXYuYXBwZW5kKG5hdkJhcik7XG4gICAgaGVhZGVyLmFwcGVuZChuYXYpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluQ29udGVudCgpIHtcbiAgICAvLyBjcmVhdGVzIGFsbCBvZiB0aGUgbWFpbiBjb250ZW50IG9uIGxvYWRcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGNvbnRlbnQuYXBwZW5kKG1haW4pO1xuXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluQ29udGVudCcpO1xuICAgIG1haW4uYXBwZW5kKG1haW5Db250ZW50KTtcblxuICAgIGNvbnN0IHppcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHppcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd6aXBDb250YWluZXInKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmQoemlwQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHppcENvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHppcENvZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICB6aXBDb2RlLm5hbWUgPSAnemlwQ29kZSc7XG4gICAgemlwQ29kZS5pZCA9ICd6aXBDb2RlJztcbiAgICB6aXBDb2RlLnBsYWNlaG9sZGVyID0gJ0luc2VydCBaaXAgb3IgQ291bnR5IE5hbWUgSGVyZSc7XG4gICAgemlwQ29udGFpbmVyLmFwcGVuZCh6aXBDb2RlKTtcblxuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNlYXJjaEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgc2VhcmNoQnV0dG9uLnRleHRDb250ZW50ID0gJ1NlYXJjaCc7XG4gICAgemlwQ29udGFpbmVyLmFwcGVuZChzZWFyY2hCdXR0b24pO1xuXG4gICAgY29uc3QgYXJlYUNob2ljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFyZWFDaG9pY2UuY2xhc3NMaXN0LmFkZCgnYXJlYUNob2ljZScpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZChhcmVhQ2hvaWNlKTtcblxuICAgIGNvbnN0IHRlbXBlcmF0dXJlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBlcmF0dXJlSW5mby5jbGFzc0xpc3QuYWRkKCd0ZW1wZXJhdHVyZUluZm8nKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmQodGVtcGVyYXR1cmVJbmZvKTtcblxuICAgIGNvbnN0IGZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yZWNhc3QuY2xhc3NMaXN0LmFkZCgnZm9yZWNhc3QnKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmQoZm9yZWNhc3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29udGVudC5hcHBlbmQoZm9vdGVyKTtcblxuICAgIGNvbnN0IGF0dHJpYnV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGF0dHJpYnV0aW9uLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL21pa2VqMzIxJztcbiAgICBhdHRyaWJ1dGlvbi50ZXh0Q29udGVudCA9ICdNaWNoYWVsIEpvaG5zb24nO1xuXG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb290ZXJDb250ZW50LnRleHRDb250ZW50ID0gYE1hZGUgYnkgYDtcbiAgICBmb290ZXJDb250ZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgYXR0cmlidXRpb24pO1xuXG4gICAgZm9vdGVyLmFwcGVuZChmb290ZXJDb250ZW50KTtcbn1cblxuZnVuY3Rpb24gbG9hZEluaXRpYWxDb250ZW50KCkge1xuICAgIGNyZWF0ZU5hdigpO1xuICAgIGNyZWF0ZU1haW5Db250ZW50KCk7XG4gICAgY3JlYXRlRm9vdGVyKCk7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5U2VsZWN0b3JzKCkge1xuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy56aXBDb250YWluZXIgPiBidXR0b24nKTtcbiAgICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmludFdlYXRoZXIpO1xufVxuXG5xdWVyeVNlbGVjdG9ycygpO1xuZXhwb3J0IHsgY29udGVudCB9O1xuIiwiLy8gaW1hZ2UgaW1wb3J0c1xuXG5pbXBvcnQgQ2xvdWR5IGZyb20gJy4uL2Fzc2V0cy9DbG91ZF9Hcm91cC5zdmcnO1xuaW1wb3J0IERyaXp6bGUgZnJvbSAnLi4vYXNzZXRzL0RyaXp6bGUuc3ZnJztcbmltcG9ydCBIZWF2eVJhaW4gZnJvbSAnLi4vYXNzZXRzL0hlYXZ5X1JhaW4uc3ZnJztcbmltcG9ydCBIZWF2eVNub3cgZnJvbSAnLi4vYXNzZXRzL0hlYXZ5X1Nub3cuc3ZnJztcbmltcG9ydCBMaWdodERyaXp6bGUgZnJvbSAnLi4vYXNzZXRzL0xpZ2h0X0RyaXp6bGUuc3ZnJztcbmltcG9ydCBMaWdodFJhaW4gZnJvbSAnLi4vYXNzZXRzL0xpZ2h0X1JhaW4uc3ZnJztcbmltcG9ydCBMaWdodFNub3cgZnJvbSAnLi4vYXNzZXRzL0xpZ2h0X1Nub3cuc3ZnJztcbmltcG9ydCBNb2RlcmF0ZURyaXp6bGUgZnJvbSAnLi4vYXNzZXRzL01vZGVyYXRlX0RyaXp6bGUuc3ZnJztcbmltcG9ydCBNb2RlcmF0ZVJhaW4gZnJvbSAnLi4vYXNzZXRzL01vZGVyYXRlX1JhaW4uc3ZnJztcbmltcG9ydCBNb2RlcmF0ZVNub3cgZnJvbSAnLi4vYXNzZXRzL01vZGVyYXRlX1Nub3cuc3ZnJztcbmltcG9ydCBTdG9ybUNsb3VkIGZyb20gJy4uL2Fzc2V0cy9TdG9ybV9DbG91ZC5zdmcnO1xuaW1wb3J0IFN1blJheSBmcm9tICcuLi9hc3NldHMvU3VuX1dpdGhfUmF5LnN2Zyc7XG5pbXBvcnQgU3VuIGZyb20gJy4uL2Fzc2V0cy9TdW4uc3ZnJztcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9hc3NldHMvVGl0bGUuc3ZnJztcblxuLy8gZnVuY3Rpb24gaW1wb3J0c1xuXG5pbXBvcnQgeyBmZXRjaFdlYXRoZXIsIGVyYXNlQXJlYUNvbnRlbnRzLCBlcmFzZVRlbXBJbmZvLCBmYWRlT3V0LCBmYWRlSW4gfSBmcm9tICcuL3NlYXJjaCc7XG5cbmFzeW5jIGZ1bmN0aW9uIHByaW50V2VhdGhlcigpIHtcbiAgICBjb25zdCBhcmVhQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFyZWFDaG9pY2UnKTtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVJbmZvJyk7XG4gICAgY29uc3QgZm9yZWNhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QnKTtcbiAgICBsZXQgbXlXZWF0aGVyID0gYXdhaXQgZmV0Y2hXZWF0aGVyKCk7XG4gICAgZXJhc2VUZW1wSW5mbygpO1xuICAgIGVyYXNlQXJlYUNvbnRlbnRzKCk7XG5cblxuICAgIHRlbXBlcmF0dXJlSW5mby5kYXRhc2V0LndlYXRoZXIgPSAnJztcbiAgICBjb25zdCBhcmVhRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXJlYUVsZS5jbGFzc0xpc3QuYWRkKCdhcmVhRWxlbWVudCcpO1xuICAgIHRlbXBlcmF0dXJlSW5mby5hcHBlbmQoYXJlYUVsZSk7XG5cbiAgICBjb25zdCB0b3duTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b3duTmFtZS50ZXh0Q29udGVudCA9IGAke215V2VhdGhlclswXS50b3duTmFtZX0sICR7bXlXZWF0aGVyWzBdLnN0YXRlTmFtZX1gO1xuICAgIGFyZWFFbGUuYXBwZW5kKHRvd25OYW1lKTtcblxuICAgIGxldCBmYWhyZW5oZWl0U3ltYm9sID0gJyYjODQ1Nyc7XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gYCR7bXlXZWF0aGVyWzFdLmN1cnJlbnRbJ3RlbXBlcmF0dXJlXzJtJ119ICR7ZmFocmVuaGVpdFN5bWJvbH1gO1xuICAgIGFyZWFFbGUuYXBwZW5kKHRlbXBlcmF0dXJlKTtcbiAgICBcblxufVxuXG5leHBvcnQgeyBwcmludFdlYXRoZXIgfTtcbiIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuLi9pbmRleCc7XG5cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBcmVhKCkge1xuICAgIC8vIHNlbGVjdG9ycyBmb3Igc2VhcmNoIGZ1bmN0aW9uc1xuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN6aXBDb2RlJyk7XG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnppcENvbnRhaW5lciA+IGJ1dHRvbicpO1xuXG4gICAgLy8gZmV0Y2ggcHJvcGVydGllcyBmb3IgdGhlIGFyZWEgc2VsZWN0aW9uXG4gICAgbGV0IGFyZWFBcnIgPSBbXTtcbiAgICBsZXQgaW5wdXQgPSBzZWFyY2hCYXIudmFsdWU7XG4gICAgbGV0IHVybCA9IGBodHRwczovL2dlb2NvZGluZy1hcGkub3Blbi1tZXRlby5jb20vdjEvc2VhcmNoP25hbWU9JHtpbnB1dH0mY291bnQ9MTAmbGFuZ3VhZ2U9ZW4mZm9ybWF0PWpzb25gO1xuICAgIGxldCBteVJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICB9KTtcbiAgICBsZXQgbXlBcmVhID0gYXdhaXQgbXlSZXNwb25zZS5qc29uKCk7XG4gICAgLyogZXZlcnl0aGluZyB0aGF0IEkgd2FudCBwdWxsZWQgZnJvbSB0aGUgSlNPTlxuICAgIHdpbGwgYmUgaW5jbHVkZWQgaW4gdGhpcyBsb29wLiBGZWVsIGZyZWUgdG8gdXBkYXRlIHRoZSB2YWx1ZXNcbiAgICBoZXJlIGlmIHlvdSBuZWVkIGV4dHJhIGFyZWFzIHB1bGxlZCBmcm9tIHRoZSBKU09OLiAqL1xuICAgIGZvciAobGV0IGFyZWEgb2YgbXlBcmVhLnJlc3VsdHMpIHtcbiAgICAgICAgbGV0IHN0YXRlTmFtZSA9IGFyZWEuYWRtaW4xO1xuICAgICAgICBsZXQgY291bnR5TmFtZSA9IGFyZWEuYWRtaW4yO1xuICAgICAgICBsZXQgY291bnRyeU5hbWUgPSBhcmVhLmNvdW50cnk7XG4gICAgICAgIGxldCB0b3duTmFtZSA9IGFyZWEubmFtZTtcbiAgICAgICAgbGV0IHRvd25MYXQgPSBhcmVhLmxhdGl0dWRlO1xuICAgICAgICBsZXQgdG93bkxvbiA9IGFyZWEubG9uZ2l0dWRlO1xuICAgICAgICAvKiBzb21lIG9mIHRoZSBhcmVhcyB0aGF0IHNob3cgdXAgaW4gdGhlIHNlYXJjaCBcbiAgICAgICAgaGF2ZSBubyB6aXAsIHNvIGlmIHRoZXkgZG9uJ3QsIEkgaGF2ZVxuICAgICAgICBtYWRlIGEgZGVmYXVsdCB2YWx1ZSBmb3IgdGhvc2UgKi9cbiAgICAgICAgbGV0IHBvc3RDb2RlID0gJyc7XG4gICAgICAgIGlmIChhcmVhLnBvc3Rjb2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwb3N0Q29kZSA9IHBvc3RDb2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zdENvZGUgPSBhcmVhLnBvc3Rjb2Rlcy5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGFyZWFPYmogPSB7XG4gICAgICAgICAgICBzdGF0ZU5hbWUsXG4gICAgICAgICAgICBjb3VudHlOYW1lLFxuICAgICAgICAgICAgY291bnRyeU5hbWUsXG4gICAgICAgICAgICB0b3duTmFtZSxcbiAgICAgICAgICAgIHBvc3RDb2RlLFxuICAgICAgICAgICAgdG93bkxhdCxcbiAgICAgICAgICAgIHRvd25Mb24sXG4gICAgICAgIH07XG4gICAgICAgIC8vIGV2ZXJ5IGFyZWEgdGhhdCBpcyBwdWxsZWQgd2lsbCBiZSBwdXNoZWQgaW50byBhbiBhcnJcbiAgICAgICAgYXJlYUFyci5wdXNoKGFyZWFPYmopO1xuICAgIH1cbiAgICByZXR1cm4gYXJlYUFycjtcbn1cblxuLyogZnVuY3Rpb24gdGhhdCBlcmFzZXMgdGhlIGNob2ljZXMgb24gc2NyZWVuIGV2ZXJ5IHRpbWUgYSBuZXdcbnNlYXJjaCBpcyBwZXJmb3JtZWQgKi9cblxuZnVuY3Rpb24gZXJhc2VBcmVhQ29udGVudHMoKSB7XG4gICAgY29uc3QgYXJlYUNob2ljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcmVhQ2hvaWNlJyk7XG4gICAgd2hpbGUgKGFyZWFDaG9pY2UuZmlyc3RDaGlsZCkge1xuICAgICAgICBhcmVhQ2hvaWNlLnJlbW92ZUNoaWxkKGFyZWFDaG9pY2UuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBlcmFzZVRlbXBJbmZvKCkge1xuICAgIGNvbnN0IHRlbXBJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlSW5mbycpO1xuICAgIHdoaWxlICh0ZW1wSW5mby5maXJzdENoaWxkKSB7XG4gICAgICAgIHRlbXBJbmZvLnJlbW92ZUNoaWxkKHRlbXBJbmZvLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmFkZU91dChlbGUpIHtcbiAgICBsZXQgb3BhY2l0eSA9IDE7XG4gICAgbGV0IGludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChvcGFjaXR5ID4gMCkge1xuICAgICAgICAgICAgb3BhY2l0eSA9IG9wYWNpdHkgLSAwLjE7XG4gICAgICAgICAgICBlbGUuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgICAgIH0gIGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElEKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZhZGVJbihlbGUpIHtcbiAgICBsZXQgb3BhY2l0eSA9IC0wLjE7XG4gICAgbGV0IGludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChvcGFjaXR5IDwgMSkge1xuICAgICAgICAgICAgb3BhY2l0eSA9IG9wYWNpdHkgKyAwLjE7XG4gICAgICAgICAgICBlbGUuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSUQpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gcGlja0FyZWEoKSB7XG4gICAgY29uc3QgYXJlYUNob2ljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcmVhQ2hvaWNlJyk7XG4gICAgbGV0IGFyZWFBcnIgPSBhd2FpdCBmZXRjaEFyZWEoKTtcbiAgICBlcmFzZUFyZWFDb250ZW50cygpO1xuXG4gICAgZm9yIChsZXQgW2luZGV4LCBhcmVhXSBvZiBhcmVhQXJyLmVudHJpZXMoKSkge1xuICAgICAgICBhcmVhQ2hvaWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1jaG9pY2UnLCAnJyk7XG4gICAgICAgIGNvbnN0IGFyZWFFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhcmVhRWwuY2xhc3NMaXN0LmFkZCgnYXJlYScpO1xuICAgICAgICBhcmVhRWwuZGF0YXNldC5jaG9pY2UgPSBpbmRleDtcbiAgICAgICAgYXJlYUNob2ljZS5hcHBlbmQoYXJlYUVsKTtcblxuICAgICAgICBjb25zdCBhcmVhUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgYXJlYVAudGV4dENvbnRlbnQgPSBhcmVhLnRvd25OYW1lICsgJywnICsgJyAnO1xuICAgICAgICBhcmVhRWwuYXBwZW5kKGFyZWFQKTtcblxuICAgICAgICBjb25zdCBzdGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHN0YXRlU3Bhbi5jbGFzc0xpc3QuYWRkKCdzdGF0ZVNwYW4nKTtcbiAgICAgICAgc3RhdGVTcGFuLnRleHRDb250ZW50ID0gYXJlYS5zdGF0ZU5hbWUgKyAnICc7XG4gICAgICAgIGFyZWFQLmFwcGVuZChzdGF0ZVNwYW4pO1xuXG4gICAgICAgIGNvbnN0IHppcFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHppcFNwYW4uY2xhc3NMaXN0LmFkZCgnemlwU3BhbicpO1xuICAgICAgICB6aXBTcGFuLnRleHRDb250ZW50ID0gYXJlYS5wb3N0Q29kZTtcbiAgICAgICAgYXJlYVAuYXBwZW5kKHppcFNwYW4pO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFyZWEnKTtcbiAgICBsZXQgbmV3QXJyID0gW2FyZWFBcnIsIGFyZWFzXTtcbiAgICByZXR1cm4gbmV3QXJyO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwaWNrZWRDaG9pY2UoKSB7XG4gICAgY29uc3QgbGlzdE9mVG93bnMgPSBhd2FpdCBwaWNrQXJlYSgpO1xuICAgIGZ1bmN0aW9uIHdhaXRGb3JDaG9pY2UoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsaXN0T2ZUb3duc1sxXS5mb3JFYWNoKCh0b3duKSA9PiB7XG4gICAgICAgICAgICAgICAgdG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFyRWwgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaG9pY2VUb3duID0gbGlzdE9mVG93bnNbMF1bdGFyRWwuZGF0YXNldC5jaG9pY2VdO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGNob2ljZVRvd24pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICBsZXQgcmVzb2x2ZWRDaG9pY2UgPSBhd2FpdCB3YWl0Rm9yQ2hvaWNlKCk7XG4gICAgcmV0dXJuIHJlc29sdmVkQ2hvaWNlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIoKSB7XG4gICAgbGV0IHVzZXJDaG9pY2UgPSBhd2FpdCBwaWNrZWRDaG9pY2UoKTtcbiAgICBsZXQgbXlSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVuLW1ldGVvLmNvbS92MS9kd2QtaWNvbj9sYXRpdHVkZT0ke3VzZXJDaG9pY2UudG93bkxhdH0mbG9uZ2l0dWRlPSR7dXNlckNob2ljZS50b3duTG9ufSZjdXJyZW50PXRlbXBlcmF0dXJlXzJtLGlzX2RheSxwcmVjaXBpdGF0aW9uLHJhaW4sc2hvd2Vycyxzbm93ZmFsbCx3ZWF0aGVyX2NvZGUsY2xvdWRfY292ZXIsd2luZF9zcGVlZF8xMG0sd2luZF9kaXJlY3Rpb25fMTBtLHdpbmRfZ3VzdHNfMTBtJmhvdXJseT10ZW1wZXJhdHVyZV8ybSZ0ZW1wZXJhdHVyZV91bml0PWZhaHJlbmhlaXQmd2luZF9zcGVlZF91bml0PW1waCZwcmVjaXBpdGF0aW9uX3VuaXQ9aW5jaGAsIHtcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgIH0pO1xuICAgIGxldCBteVdlYXRoZXIgPSBhd2FpdCBteVJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhteVdlYXRoZXIpXG4gICAgcmV0dXJuIFt1c2VyQ2hvaWNlLCBteVdlYXRoZXJdO1xufVxuXG5leHBvcnQgeyBmZXRjaFdlYXRoZXIsIGVyYXNlQXJlYUNvbnRlbnRzLCBlcmFzZVRlbXBJbmZvLCBmYWRlT3V0LCBmYWRlSW4gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9