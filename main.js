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
    height: 100vh;
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
}
main .mainContent .areaChoice {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5rem;
  align-items: center;
  position: absolute;
  top: 15rem;
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
main .mainContent .areaChoice .area:first-child {
  margin-top: 5rem;
}
main .mainContent .areaChoice .area:hover {
  background: #4a6156;
  color: white;
}
main .mainContent .temperatureInfo {
  font-size: 1.2rem;
  margin-top: 5.1rem;
  display: flex;
  width: 100%;
  max-width: 27.9rem;
  align-items: center;
  justify-content: center;
  height: 14rem;
  border-radius: 8px;
  background: #FFF;
  transition: opacity 0.2s ease-in-out;
}
main .mainContent .temperatureInfo[data-weather=""] {
  z-index: 2;
  opacity: 1;
}
main .mainContent .forecast {
  font-size: 1.2rem;
  margin-top: 5.3rem;
  display: flex;
  width: 100%;
  max-width: 27.9rem;
  height: 25rem;
  border-radius: 8px;
  background: #fff;
  justify-content: center;
  align-items: center;
  margin-bottom: 6rem;
  transition: opacity 0.2s ease-in-out;
}
main .mainContent .forecast[data-weather=""] {
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
    height: 28.9rem !important;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/style.sass"],"names":[],"mappings":"AA+BA;EACI,gCAAA;EACA,4CAAA;EACA,gBAAA;EACA,kBAAA;AA9BJ;AAgCA;EACI,yBAAA;EACA,4CAAA;EACA,gBAAA;AA9BJ;AAgCA;EACI,+BAAA;EACA,4CAAA;EACA,gBAAA;AA9BJ;AAgCA;EACI,2BAAA;EACA,4CAAA;EACA,gBAAA;AA9BJ;AAgCA;EACI,4BAAA;EACA,4CAAA;EACA,gBAAA;AA9BJ;AAgCA;;;EAGI,sBAAA;AA9BJ;;AAgCA;EACI,SAAA;EACA,UAAA;EACA,uBAAA;AA7BJ;;AA+BA;EACI,gBAAA;AA5BJ;;AA8BA;EACI,WAAA;EACA,iBAAA;AA3BJ;;AA6BA;EACI,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,4BAAA;AA1BJ;;AA4BA;EACI,aAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,gDAAA;AAzBJ;;AA2BA;EACI;IACI,gBAAA;IACA,aAAA;EAxBN;AACF;AA0BA;EACI,iBAAA;EACA,yBAlEK;EAmEL,YAAA;EACA,aAAA;EACA,6BAAA;EACA,kBAAA;AAxBJ;AAyBI;EACI,YAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,WAAA;AAvBR;AAwBQ;EACI,iBAAA;EACA,cAnFH;EAoFG,gCAAA;AAtBZ;AAuBQ;EACI,WAAA;EACA,iBAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,sBAAA;EACA,WAAA;EACA,eAAA;AArBZ;AAsBY;EACI,WAAA;EACA,iBAAA;EACA,cAAA;EACA,YAAA;EACA,kBAAA;EACA,mBApGP;EAqGO,oBAAA;EACA,uCAAA;AApBhB;AAqBQ;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,gBAAA;AAnBZ;AAoBY;EACI,mBA5GP;EA6GO,aAAA;EACA,YAAA;EACA,gCAAA;EACA,eAAA;AAlBhB;AAmBgB;EACI,mBArHX;AAoGT;AAkBgB;EACI,cApHX;AAoGT;AAiBY;EACI,qBAAA;EACA,cA3HP;AA4GT;;AAiBA;EACI,mBAAA;AAdJ;;AAgBA;EACI;IACI,uBAAA;EAbN;EAcM;IACI,WAAA;IACA,kBAAA;EAZV;EAaU;IACI,eAAA;EAXd;EAYU;IACI,aAAA;EAVd;EAWU;IACI,gBAAA;IACA,aAAA;IACA,YAAA;IACA,gBAAA;IACA,mBAAA;EATd;EAUc;IACI,UAAA;IACA,kBAAA;EARlB;AACF;AAWA;EACI,kBAAA;EACA,oFAAA;EACA,6BAAA;EACA,aAAA;EACA,uDAAA;EACA,qBAAA;AATJ;AAUI;EACI,aAAA;EACA,sBAAA;EACA,WAAA;EACA,mBAAA;EACA,SAAA;AARR;AASQ;EACI,oBAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;EACA,mBAvKH;EAwKG,YAAA;EACA,eAAA;EACA,uCAAA;AAPZ;AAQY;EACI,mBA1KP;AAoKT;AAOI;EACI,aAAA;EACA,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,YAAA;AALR;AAMI;EACI,kBAAA;EACA,WAAA;AAJR;AAKQ;EACI,aAAA;EACA,sBAAA;EACA,WAAA;EACA,SAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,UAAA;EACA,2BAAA;EACA,oCAAA;AAHZ;AAIY;EACI,UAAA;EACA,UAAA;AAFhB;AAGY;EACI,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,WAAA;EACA,cAAA;EACA,kBAAA;EACA,+BAAA;EACA,gCAAA;EACA,oBAAA;AADhB;AAEgB;EACI,gBAAA;AAApB;AACgB;EACI,mBArNX;EAsNW,YAAA;AACpB;AAAQ;EACI,iBAAA;EACA,kBAAA;EACA,aAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;EACA,oCAAA;AAEZ;AADY;EACI,UAAA;EACA,UAAA;AAGhB;AAFQ;EACI,iBAAA;EACA,kBAAA;EACA,aAAA;EACA,WAAA;EACA,kBAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,oCAAA;AAIZ;AAHY;EACI,UAAA;EACA,UAAA;AAKhB;;AAHA;EACI,kBAAA;EACA,4BAAA;AAMJ;;AAJA;;EAEI,UAAA;EACA,UAAA;AAOJ;;AALA;;;EAGI,+BAAA;AAQJ;;AAJA;EACI;IACG,aAAA;IACA,sBAAA;IACA,mBAAA;IACA,WAAA;IACA,gBAAA;EAOL;EANK;IACC,UAAA;EAQN;EAPM;IACC,kBAAA;IACA,gBAAA;IACA,YAAA;EASP;EARK;IACC,gBAAA;EAUN;EARK;;IAEC,qBAAA;IACA,2BAAA;IACA,0BAAA;EAUN;AACF;AARA;EACI,iBAAA;EACA,aAAA;EACA,mBAhSK;EAiSL,mBAAA;EACA,uBAAA;EACA,cAvSK;EAwSL,iBAAA;EACA,uBAAA;AAUJ;AATI;EACI,qBAAA;EACA,YAAA;EACA,kCAAA;AAWR;AAVQ;EACI,cAAA;AAYZ;;AAVA;EACI;IACI,iBAAA;IACA,sBAAA;EAaN;AACF","sourcesContent":["$sunny-1: #ffe95c\n$sunny-2: #403d39\n$sunny-3: #252422\n$sunny-4: #eb5e28\n$sunny-5: #38a700\n$cold-1: #e253f1\n$cold-2: #c5cbfc\n$cold-3: #02111b\n$cold-4: #006e90\n$cold-5: #177e89\n$overcast-1: #d6d6d6\n$overcast-2: #b3b3b3\n$overcast-3: #8a8a8a\n$overcast-4: #616161\n$overcast-5: #383838\n$rainy-1: #2d9ad2\n$rainy-2: #248dad\n$rainy-3: #1c6285\n$rainy-4: #13445c\n$rainy-5: #36bcff\n$snowy-1: #FFFFFF\n$snowy-2: #686868\n$snowy-3: #b3b3b3\n$snowy-4: #8a8a8a\n$snowy-5: #616161\n$base-1: #6ffabb\n$base-2: #7fc7a7\n$base-3: #7c9489\n$base-4: #4a6156\n$base-5: #1d3329\n\n@font-face \n    font-family: 'Constantia Normal'\n    src: url(../fonts/Constantia.ttf)\n    font-weight: 400\n    font-style: normal\n\n@font-face\n    font-family: 'Mukta Bold'\n    src: url(../fonts/Mukta-Bold.ttf)\n    font-weight: 700\n\n@font-face\n    font-family: 'Mukta Extra Bold'\n    src: url(../fonts/Mukta-ExtraBold.ttf)\n    font-weight: 800\n\n@font-face\n    font-family: 'Mukta Medium'\n    src: url(../fonts/Mukta-Medium.ttf)\n    font-weight: 500\n\n@font-face\n    font-family: 'Mukta Regular'\n    src: url(../fonts/Mukta-Regular.ttf)\n    font-weight: 400\n    \n*,\n*::before,\n*::after\n    box-sizing: border-box\n\n*\n    margin: 0\n    padding: 0\n    scroll-behavior: smooth\n\nhtml\n    font-size: 62.5%\n\nimg\n    width: 100%\n    object-fit: cover\n\nbody\n    font-size: 1.6rem\n    display: flex\n    justify-content: center\n    font-family: 'Mukta Regular'\n\n.content\n    display: grid\n    width: 100%\n    max-width: 37.5rem\n    grid-template-rows: 5rem 1fr 5rem\n    grid-template-areas: \"navbar\" \"content\" \"footer\"\n\n@media screen and (min-width: 600px)\n    .content\n        max-width: unset\n        height: 100vh\n        \n\nnav\n    grid-area: navbar\n    background-color: $base-5\n    height: 5rem\n    display: flex\n    padding-inline: 1.6rem 1.4rem\n    position: relative\n    .navbar\n        height: 100%\n        display: flex\n        align-items: center\n        justify-content: space-between\n        width: 100%\n        h1\n            font-size: 1.2rem\n            color: $base-1\n            font-family: 'Constantia Normal'\n        .hamburger\n            width: 100%\n            max-width: 2.5rem\n            display: flex\n            height: 100%\n            max-height: 2.3rem\n            flex-direction: column\n            gap: .4rem\n            cursor: pointer\n            .line\n                width: 100%\n                max-width: 2.3rem\n                height: .4rem\n                border: none\n                border-radius: 6px\n                background: $base-1\n                pointer-events: none\n                transition: background 0.3s ease-in-out\n        .links\n            position: absolute\n            right: 0\n            top: 5rem\n            text-align: center\n            list-style: none       \n            max-height: 0\n            overflow: hidden\n            li\n                background: $base-5\n                padding: 2rem\n                opacity: .7\n                transition: all 0.2s ease-in-out\n                cursor: pointer\n                &:hover\n                    background: $base-2\n                &:hover a\n                    color: $base-5\n            li a\n                text-decoration: none\n                color: $base-1\n            \n.hamburger:hover .line\n    background: #FFFFFF\n\n@media screen and (min-width: 600px)\n    nav\n        justify-content: center\n        .navbar\n            width: 100%\n            max-width: 99.4rem\n            h1\n                font-size: 2rem\n            .hamburger\n                display: none\n            .links\n                position: static\n                display: flex\n                height: 100%\n                max-height: 100%\n                align-items: center\n                li\n                    opacity: 1 \n                    padding: 2rem 4rem\n    \n\n\nmain\n    grid-area: content\n    background: linear-gradient(161deg, darken(#FFF, 1%) -0.23%, rgba(191, 241, 218, 0.20) 56.61%)\n    background-blend-mode: darken\n    display: grid\n    grid-template-areas: \"zip\" \"temperatureInfo\" \"forecast\"\n    justify-items: center\n    .zipContainer\n        display: flex\n        flex-direction: column\n        width: 100%\n        align-items: center\n        gap: 2rem\n        button\n            padding: .5rem 2rem\n            border: none\n            border-radius: 4px\n            font-family: inherit\n            background: $base-2\n            color: white\n            cursor: pointer\n            transition: background 0.2s ease-in-out\n            &:hover\n                background: $base-4\n    #zipCode\n        display: flex\n        margin-top: 3.8rem\n        width: 100%\n        max-width: 21.7rem\n        height: 3rem\n        border-radius: 8px\n        background: #FFF\n        text-align: center\n        border: none\n    .mainContent\n        position: relative\n        width: 100%\n        .areaChoice\n            display: flex\n            flex-direction: column\n            width: 100%\n            gap: 5rem\n            align-items: center\n            position: absolute\n            top: 15rem\n            left: 50%\n            opacity: 0\n            transform: translateX(-50%)\n            transition: opacity 0.2s ease-in-out\n            &[data-choice='']\n                z-index: 2\n                opacity: 1\n            .area\n                border: none\n                border-radius: 8px\n                background: white\n                cursor: pointer\n                width: 100%\n                max-width: 75%\n                text-align: center\n                box-shadow: 2px 2px 5px lighten($base-5, 70%)\n                transition: all 0.2s ease-in-out\n                padding: .5rem 2rem\n                &:first-child\n                    margin-top: 5rem\n                &:hover\n                    background: $base-4\n                    color: white\n        .temperatureInfo\n            font-size: 1.2rem\n            margin-top: 5.1rem\n            display: flex\n            width: 100%\n            max-width: 27.9rem\n            align-items: center\n            justify-content: center\n            height: 14rem\n            border-radius: 8px\n            background: #FFF\n            transition: opacity 0.2s ease-in-out\n            &[data-weather = '']\n                z-index: 2\n                opacity: 1\n        .forecast\n            font-size: 1.2rem\n            margin-top: 5.3rem\n            display: flex\n            width: 100%\n            max-width: 27.9rem\n            height: 25rem\n            border-radius: 8px\n            background: #fff\n            justify-content: center\n            align-items: center\n            margin-bottom: 6rem\n            transition: opacity 0.2s ease-in-out\n            &[data-weather = '']\n                z-index: 2\n                opacity: 1\n\n#zipCode::placeholder\n    text-align: center\n    font-family: 'Mukta Regular'\n\n.temperatureInfo,\n.forecast \n    z-index: 1\n    opacity: 0\n    \n#zipCode,\n.temperatureInfo,\n.forecast\n    box-shadow: 2px 2px 5px lighten($base-5, 70%)\n\n\n\n@media screen and (min-width: 600px)\n    .mainContent\n       display: flex\n       flex-direction: column\n       align-items: center\n       width: 100%\n       max-width: 71rem \n       .zipContainer\n        width: 98%\n        #zipCode\n         margin-top: 8.2rem\n         max-width: 60rem\n         height: 4rem\n       .areaChoice\n        margin-top: 5rem\n        \n       .temperatureInfo,\n       .forecast\n        width: 95% !important\n        max-width: 71rem !important\n        height: 28.9rem !important\n        \n\nfooter\n    grid-area: footer\n    display: flex\n    background: $base-5\n    align-items: center\n    justify-content: center\n    color: $base-1\n    font-size: 1.2rem\n    letter-spacing: .05rem\n    a\n        text-decoration: none\n        color: white\n        transition: color 0.2s ease-in-out\n        &:hover\n            color: lighten(blue, 30%)\n\n@media screen and (min-width: 600px)\n    footer\n        font-size: 1.4rem\n        letter-spacing: .2rem\n"],"sourceRoot":""}]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.sass */ "./src/styles/style.sass");


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
    title.textContent = 'Temperate WeatherApp';
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
    zipCode.placeholder = 'Insert Zip Here';
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
    footerContent.append(attribution);
    footerContent.textContent = `Made by ${attribution}. I hope that you enjoy!`;

    footer.append(footerContent);
}

function loadInitialContent() {
    createNav();
    createMainContent();
    createFooter();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDBIQUEwQztBQUN0Riw0Q0FBNEMsMEhBQTBDO0FBQ3RGLDRDQUE0QyxvSUFBK0M7QUFDM0YsNENBQTRDLDhIQUE0QztBQUN4Riw0Q0FBNEMsZ0lBQTZDO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8seUZBQXlGLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sUUFBUSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLFlBQVksV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxZQUFZLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FB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OztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsWUFBWTs7QUFFdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZS5zYXNzP2JmYWQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Db25zdGFudGlhLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL011a3RhLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvTXVrdGEtRXh0cmFCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL011a3RhLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9NdWt0YS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDb25zdGFudGlhIE5vcm1hbFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11a3RhIEJvbGRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVrdGEgRXh0cmEgQm9sZFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJNdWt0YSBNZWRpdW1cIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTXVrdGEgUmVndWxhclwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5ib2R5IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJNdWt0YSBSZWd1bGFyXCI7XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzcuNXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIDFmciA1cmVtO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm5hdmJhclwiIFwiY29udGVudFwiIFwiZm9vdGVyXCI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbn1cbm5hdiB7XG4gIGdyaWQtYXJlYTogbmF2YmFyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQzMzI5O1xuICBoZWlnaHQ6IDVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctaW5saW5lOiAxLjZyZW0gMS40cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5uYXYgLm5hdmJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbn1cbm5hdiAubmF2YmFyIGgxIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjNmZmYWJiO1xuICBmb250LWZhbWlseTogXCJDb25zdGFudGlhIE5vcm1hbFwiO1xufVxubmF2IC5uYXZiYXIgLmhhbWJ1cmdlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDIuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAyLjNyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC40cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5uYXYgLm5hdmJhciAuaGFtYnVyZ2VyIC5saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMi4zcmVtO1xuICBoZWlnaHQ6IDAuNHJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6ICM2ZmZhYmI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5uYXYgLm5hdmJhciAubGlua3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbm5hdiAubmF2YmFyIC5saW5rcyBsaSB7XG4gIGJhY2tncm91bmQ6ICMxZDMzMjk7XG4gIHBhZGRpbmc6IDJyZW07XG4gIG9wYWNpdHk6IDAuNztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm5hdiAubmF2YmFyIC5saW5rcyBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM3ZmM3YTc7XG59XG5uYXYgLm5hdmJhciAubGlua3MgbGk6aG92ZXIgYSB7XG4gIGNvbG9yOiAjMWQzMzI5O1xufVxubmF2IC5uYXZiYXIgLmxpbmtzIGxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNmZmYWJiO1xufVxuXG4uaGFtYnVyZ2VyOmhvdmVyIC5saW5lIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgbmF2IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBuYXYgLm5hdmJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5OS40cmVtO1xuICB9XG4gIG5hdiAubmF2YmFyIGgxIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgbmF2IC5uYXZiYXIgLmhhbWJ1cmdlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBuYXYgLm5hdmJhciAubGlua3Mge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIG5hdiAubmF2YmFyIC5saW5rcyBsaSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XG4gIH1cbn1cbm1haW4ge1xuICBncmlkLWFyZWE6IGNvbnRlbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjFkZWcsICNmY2ZjZmMgLTAuMjMlLCByZ2JhKDE5MSwgMjQxLCAyMTgsIDAuMikgNTYuNjElKTtcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiemlwXCIgXCJ0ZW1wZXJhdHVyZUluZm9cIiBcImZvcmVjYXN0XCI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbm1haW4gLnppcENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJyZW07XG59XG5tYWluIC56aXBDb250YWluZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogIzdmYzdhNztcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluLW91dDtcbn1cbm1haW4gLnppcENvbnRhaW5lciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNGE2MTU2O1xufVxubWFpbiAjemlwQ29kZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDMuOHJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMjEuN3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xufVxubWFpbiAubWFpbkNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxubWFpbiAubWFpbkNvbnRlbnQgLmFyZWFDaG9pY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgZ2FwOiA1cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVyZW07XG4gIGxlZnQ6IDUwJTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5tYWluIC5tYWluQ29udGVudCAuYXJlYUNob2ljZVtkYXRhLWNob2ljZT1cIlwiXSB7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDE7XG59XG5tYWluIC5tYWluQ29udGVudCAuYXJlYUNob2ljZSAuYXJlYSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3NSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggI2QwZTVkYjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xufVxubWFpbiAubWFpbkNvbnRlbnQgLmFyZWFDaG9pY2UgLmFyZWE6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiA1cmVtO1xufVxubWFpbiAubWFpbkNvbnRlbnQgLmFyZWFDaG9pY2UgLmFyZWE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNGE2MTU2O1xuICBjb2xvcjogd2hpdGU7XG59XG5tYWluIC5tYWluQ29udGVudCAudGVtcGVyYXR1cmVJbmZvIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbi10b3A6IDUuMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMjcuOXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xufVxubWFpbiAubWFpbkNvbnRlbnQgLnRlbXBlcmF0dXJlSW5mb1tkYXRhLXdlYXRoZXI9XCJcIl0ge1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAxO1xufVxubWFpbiAubWFpbkNvbnRlbnQgLmZvcmVjYXN0IHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIG1hcmdpbi10b3A6IDUuM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMjcuOXJlbTtcbiAgaGVpZ2h0OiAyNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNnJlbTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xufVxubWFpbiAubWFpbkNvbnRlbnQgLmZvcmVjYXN0W2RhdGEtd2VhdGhlcj1cIlwiXSB7XG4gIHotaW5kZXg6IDI7XG4gIG9wYWNpdHk6IDE7XG59XG5cbiN6aXBDb2RlOjpwbGFjZWhvbGRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTXVrdGEgUmVndWxhclwiO1xufVxuXG4udGVtcGVyYXR1cmVJbmZvLFxuLmZvcmVjYXN0IHtcbiAgei1pbmRleDogMTtcbiAgb3BhY2l0eTogMDtcbn1cblxuI3ppcENvZGUsXG4udGVtcGVyYXR1cmVJbmZvLFxuLmZvcmVjYXN0IHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggI2QwZTVkYjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLm1haW5Db250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDcxcmVtO1xuICB9XG4gIC5tYWluQ29udGVudCAuemlwQ29udGFpbmVyIHtcbiAgICB3aWR0aDogOTglO1xuICB9XG4gIC5tYWluQ29udGVudCAuemlwQ29udGFpbmVyICN6aXBDb2RlIHtcbiAgICBtYXJnaW4tdG9wOiA4LjJyZW07XG4gICAgbWF4LXdpZHRoOiA2MHJlbTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gIH1cbiAgLm1haW5Db250ZW50IC5hcmVhQ2hvaWNlIHtcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICB9XG4gIC5tYWluQ29udGVudCAudGVtcGVyYXR1cmVJbmZvLFxuICAubWFpbkNvbnRlbnQgLmZvcmVjYXN0IHtcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA3MXJlbSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjguOXJlbSAhaW1wb3J0YW50O1xuICB9XG59XG5mb290ZXIge1xuICBncmlkLWFyZWE6IGZvb3RlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogIzFkMzMyOTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjNmZmYWJiO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG59XG5mb290ZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xufVxuZm9vdGVyIGE6aG92ZXIge1xuICBjb2xvcjogIzk5OTlmZjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgZm9vdGVyIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3NcIl0sXCJu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cUJBQUE7SUFDQSwyQkFBQTtJQUNBLDBCQUFBO0VBVU47QUFDRjtBQVJBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBaFNLO0VBaVNMLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQXZTSztFQXdTTCxpQkFBQTtFQUNBLHVCQUFBO0FBVUo7QUFUSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FBV1I7QUFWUTtFQUNJLGNBQUE7QUFZWjs7QUFWQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxzQkFBQTtFQWFOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHN1bm55LTE6ICNmZmU5NWNcXG4kc3VubnktMjogIzQwM2QzOVxcbiRzdW5ueS0zOiAjMjUyNDIyXFxuJHN1bm55LTQ6ICNlYjVlMjhcXG4kc3VubnktNTogIzM4YTcwMFxcbiRjb2xkLTE6ICNlMjUzZjFcXG4kY29sZC0yOiAjYzVjYmZjXFxuJGNvbGQtMzogIzAyMTExYlxcbiRjb2xkLTQ6ICMwMDZlOTBcXG4kY29sZC01OiAjMTc3ZTg5XFxuJG92ZXJjYXN0LTE6ICNkNmQ2ZDZcXG4kb3ZlcmNhc3QtMjogI2IzYjNiM1xcbiRvdmVyY2FzdC0zOiAjOGE4YThhXFxuJG92ZXJjYXN0LTQ6ICM2MTYxNjFcXG4kb3ZlcmNhc3QtNTogIzM4MzgzOFxcbiRyYWlueS0xOiAjMmQ5YWQyXFxuJHJhaW55LTI6ICMyNDhkYWRcXG4kcmFpbnktMzogIzFjNjI4NVxcbiRyYWlueS00OiAjMTM0NDVjXFxuJHJhaW55LTU6ICMzNmJjZmZcXG4kc25vd3ktMTogI0ZGRkZGRlxcbiRzbm93eS0yOiAjNjg2ODY4XFxuJHNub3d5LTM6ICNiM2IzYjNcXG4kc25vd3ktNDogIzhhOGE4YVxcbiRzbm93eS01OiAjNjE2MTYxXFxuJGJhc2UtMTogIzZmZmFiYlxcbiRiYXNlLTI6ICM3ZmM3YTdcXG4kYmFzZS0zOiAjN2M5NDg5XFxuJGJhc2UtNDogIzRhNjE1NlxcbiRiYXNlLTU6ICMxZDMzMjlcXG5cXG5AZm9udC1mYWNlIFxcbiAgICBmb250LWZhbWlseTogJ0NvbnN0YW50aWEgTm9ybWFsJ1xcbiAgICBzcmM6IHVybCguLi9mb250cy9Db25zdGFudGlhLnR0ZilcXG4gICAgZm9udC13ZWlnaHQ6IDQwMFxcbiAgICBmb250LXN0eWxlOiBub3JtYWxcXG5cXG5AZm9udC1mYWNlXFxuICAgIGZvbnQtZmFtaWx5OiAnTXVrdGEgQm9sZCdcXG4gICAgc3JjOiB1cmwoLi4vZm9udHMvTXVrdGEtQm9sZC50dGYpXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDBcXG5cXG5AZm9udC1mYWNlXFxuICAgIGZvbnQtZmFtaWx5OiAnTXVrdGEgRXh0cmEgQm9sZCdcXG4gICAgc3JjOiB1cmwoLi4vZm9udHMvTXVrdGEtRXh0cmFCb2xkLnR0ZilcXG4gICAgZm9udC13ZWlnaHQ6IDgwMFxcblxcbkBmb250LWZhY2VcXG4gICAgZm9udC1mYW1pbHk6ICdNdWt0YSBNZWRpdW0nXFxuICAgIHNyYzogdXJsKC4uL2ZvbnRzL011a3RhLU1lZGl1bS50dGYpXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDBcXG5cXG5AZm9udC1mYWNlXFxuICAgIGZvbnQtZmFtaWx5OiAnTXVrdGEgUmVndWxhcidcXG4gICAgc3JjOiB1cmwoLi4vZm9udHMvTXVrdGEtUmVndWxhci50dGYpXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDBcXG4gICAgXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveFxcblxcbipcXG4gICAgbWFyZ2luOiAwXFxuICAgIHBhZGRpbmc6IDBcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGhcXG5cXG5odG1sXFxuICAgIGZvbnQtc2l6ZTogNjIuNSVcXG5cXG5pbWdcXG4gICAgd2lkdGg6IDEwMCVcXG4gICAgb2JqZWN0LWZpdDogY292ZXJcXG5cXG5ib2R5XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcXG4gICAgZm9udC1mYW1pbHk6ICdNdWt0YSBSZWd1bGFyJ1xcblxcbi5jb250ZW50XFxuICAgIGRpc3BsYXk6IGdyaWRcXG4gICAgd2lkdGg6IDEwMCVcXG4gICAgbWF4LXdpZHRoOiAzNy41cmVtXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNXJlbSAxZnIgNXJlbVxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibmF2YmFyXFxcIiBcXFwiY29udGVudFxcXCIgXFxcImZvb3RlclxcXCJcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLmNvbnRlbnRcXG4gICAgICAgIG1heC13aWR0aDogdW5zZXRcXG4gICAgICAgIGhlaWdodDogMTAwdmhcXG4gICAgICAgIFxcblxcbm5hdlxcbiAgICBncmlkLWFyZWE6IG5hdmJhclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS01XFxuICAgIGhlaWdodDogNXJlbVxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIHBhZGRpbmctaW5saW5lOiAxLjZyZW0gMS40cmVtXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcbiAgICAubmF2YmFyXFxuICAgICAgICBoZWlnaHQ6IDEwMCVcXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxcbiAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgIGgxXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW1cXG4gICAgICAgICAgICBjb2xvcjogJGJhc2UtMVxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ29uc3RhbnRpYSBOb3JtYWwnXFxuICAgICAgICAuaGFtYnVyZ2VyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIuNXJlbVxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCVcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyLjNyZW1cXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgICAgICAgICAgZ2FwOiAuNHJlbVxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxcbiAgICAgICAgICAgIC5saW5lXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMi4zcmVtXFxuICAgICAgICAgICAgICAgIGhlaWdodDogLjRyZW1cXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFzZS0xXFxuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dFxcbiAgICAgICAgLmxpbmtzXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXFxuICAgICAgICAgICAgcmlnaHQ6IDBcXG4gICAgICAgICAgICB0b3A6IDVyZW1cXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lICAgICAgIFxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDBcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuXFxuICAgICAgICAgICAgbGlcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhc2UtNVxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxcbiAgICAgICAgICAgICAgICAmOmhvdmVyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmFzZS0yXFxuICAgICAgICAgICAgICAgICY6aG92ZXIgYVxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRiYXNlLTVcXG4gICAgICAgICAgICBsaSBhXFxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJhc2UtMVxcbiAgICAgICAgICAgIFxcbi5oYW1idXJnZXI6aG92ZXIgLmxpbmVcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRlxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICBuYXZcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuICAgICAgICAubmF2YmFyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDk5LjRyZW1cXG4gICAgICAgICAgICBoMVxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW1cXG4gICAgICAgICAgICAuaGFtYnVyZ2VyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcXG4gICAgICAgICAgICAubGlua3NcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpY1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJVxcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gICAgICAgICAgICAgICAgbGlcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEgXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDRyZW1cXG4gICAgXFxuXFxuXFxubWFpblxcbiAgICBncmlkLWFyZWE6IGNvbnRlbnRcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2MWRlZywgZGFya2VuKCNGRkYsIDElKSAtMC4yMyUsIHJnYmEoMTkxLCAyNDEsIDIxOCwgMC4yMCkgNTYuNjElKVxcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlblxcbiAgICBkaXNwbGF5OiBncmlkXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJ6aXBcXFwiIFxcXCJ0ZW1wZXJhdHVyZUluZm9cXFwiIFxcXCJmb3JlY2FzdFxcXCJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyXFxuICAgIC56aXBDb250YWluZXJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgICAgICBnYXA6IDJyZW1cXG4gICAgICAgIGJ1dHRvblxcbiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDJyZW1cXG4gICAgICAgICAgICBib3JkZXI6IG5vbmVcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcXG4gICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdFxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYXNlLTJcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgICAgICAmOmhvdmVyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiYXNlLTRcXG4gICAgI3ppcENvZGVcXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgICAgIG1hcmdpbi10b3A6IDMuOHJlbVxcbiAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgIG1heC13aWR0aDogMjEuN3JlbVxcbiAgICAgICAgaGVpZ2h0OiAzcmVtXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHhcXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxcbiAgICAgICAgYm9yZGVyOiBub25lXFxuICAgIC5tYWluQ29udGVudFxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXFxuICAgICAgICB3aWR0aDogMTAwJVxcbiAgICAgICAgLmFyZWFDaG9pY2VcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgICAgICAgZ2FwOiA1cmVtXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxcbiAgICAgICAgICAgIHRvcDogMTVyZW1cXG4gICAgICAgICAgICBsZWZ0OiA1MCVcXG4gICAgICAgICAgICBvcGFjaXR5OiAwXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0XFxuICAgICAgICAgICAgJltkYXRhLWNob2ljZT0nJ11cXG4gICAgICAgICAgICAgICAgei1pbmRleDogMlxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXFxuICAgICAgICAgICAgLmFyZWFcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweFxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZVxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3NSVcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGxpZ2h0ZW4oJGJhc2UtNSwgNzAlKVxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dFxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNXJlbSAycmVtXFxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGRcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVyZW1cXG4gICAgICAgICAgICAgICAgJjpob3ZlclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJhc2UtNFxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlXFxuICAgICAgICAudGVtcGVyYXR1cmVJbmZvXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW1cXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1LjFyZW1cXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3LjlyZW1cXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcXG4gICAgICAgICAgICBoZWlnaHQ6IDE0cmVtXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRlxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluLW91dFxcbiAgICAgICAgICAgICZbZGF0YS13ZWF0aGVyID0gJyddXFxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDJcXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxcbiAgICAgICAgLmZvcmVjYXN0XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW1cXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1LjNyZW1cXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI3LjlyZW1cXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cmVtXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZlxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZyZW1cXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgICAgICAmW2RhdGEtd2VhdGhlciA9ICcnXVxcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcXG5cXG4jemlwQ29kZTo6cGxhY2Vob2xkZXJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXFxuICAgIGZvbnQtZmFtaWx5OiAnTXVrdGEgUmVndWxhcidcXG5cXG4udGVtcGVyYXR1cmVJbmZvLFxcbi5mb3JlY2FzdCBcXG4gICAgei1pbmRleDogMVxcbiAgICBvcGFjaXR5OiAwXFxuICAgIFxcbiN6aXBDb2RlLFxcbi50ZW1wZXJhdHVyZUluZm8sXFxuLmZvcmVjYXN0XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGxpZ2h0ZW4oJGJhc2UtNSwgNzAlKVxcblxcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAubWFpbkNvbnRlbnRcXG4gICAgICAgZGlzcGxheTogZmxleFxcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG4gICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgbWF4LXdpZHRoOiA3MXJlbSBcXG4gICAgICAgLnppcENvbnRhaW5lclxcbiAgICAgICAgd2lkdGg6IDk4JVxcbiAgICAgICAgI3ppcENvZGVcXG4gICAgICAgICBtYXJnaW4tdG9wOiA4LjJyZW1cXG4gICAgICAgICBtYXgtd2lkdGg6IDYwcmVtXFxuICAgICAgICAgaGVpZ2h0OiA0cmVtXFxuICAgICAgIC5hcmVhQ2hvaWNlXFxuICAgICAgICBtYXJnaW4tdG9wOiA1cmVtXFxuICAgICAgICBcXG4gICAgICAgLnRlbXBlcmF0dXJlSW5mbyxcXG4gICAgICAgLmZvcmVjYXN0XFxuICAgICAgICB3aWR0aDogOTUlICFpbXBvcnRhbnRcXG4gICAgICAgIG1heC13aWR0aDogNzFyZW0gIWltcG9ydGFudFxcbiAgICAgICAgaGVpZ2h0OiAyOC45cmVtICFpbXBvcnRhbnRcXG4gICAgICAgIFxcblxcbmZvb3RlclxcbiAgICBncmlkLWFyZWE6IGZvb3RlclxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGJhY2tncm91bmQ6ICRiYXNlLTVcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcbiAgICBjb2xvcjogJGJhc2UtMVxcbiAgICBmb250LXNpemU6IDEuMnJlbVxcbiAgICBsZXR0ZXItc3BhY2luZzogLjA1cmVtXFxuICAgIGFcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxcbiAgICAgICAgY29sb3I6IHdoaXRlXFxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0XFxuICAgICAgICAmOmhvdmVyXFxuICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oYmx1ZSwgMzAlKVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICBmb290ZXJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtXFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjJyZW1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNhc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zYXNzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuc2Fzcyc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG53aW5kb3cub25sb2FkID0gbG9hZEluaXRpYWxDb250ZW50KClcblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICAgIC8vIENyZWF0ZXMgdGhlIGhlYWRlciBhbmQgYWxsIG9mIHRoZSBoZWFkZXJzIGNvbnRlbnRcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb250ZW50LmFwcGVuZChoZWFkZXIpXG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKVxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RlbXBlcmF0ZSBXZWF0aGVyQXBwJztcbiAgICBuYXZCYXIuYXBwZW5kKHRpdGxlKTtcblxuICAgIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhhbWJ1cmdlci5jbGFzc0xpc3QuYWRkKCdoYW1idXJnZXInKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpbmUuY2xhc3NMaXN0LmFkZCgnbGluZScpO1xuICAgICAgICBoYW1idXJnZXIuYXBwZW5kKGxpbmUpO1xuICAgIH1cbiAgICBuYXZCYXIuYXBwZW5kKGhhbWJ1cmdlcik7XG5cbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbGlua3MuY2xhc3NMaXN0LmFkZCgnbGlua3MnKTtcbiAgICBcbiAgICBjb25zdCBsaW5rQ29udGFpbmVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGluazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluazEudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgbGlua0NvbnRhaW5lcjEuYXBwZW5kKGxpbmsxKTtcbiAgICBsaW5rcy5hcHBlbmQobGlua0NvbnRhaW5lcjEpO1xuXG4gICAgY29uc3QgbGlua0NvbnRhaW5lcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsyLnRleHRDb250ZW50ID0gJ0ZvcmVjYXN0JztcbiAgICBsaW5rQ29udGFpbmVyMi5hcHBlbmQobGluazIpO1xuICAgIGxpbmtzLmFwcGVuZChsaW5rQ29udGFpbmVyMik7XG4gICAgXG5cbiAgICBjb25zdCBsaW5rQ29udGFpbmVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbGluazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluazMudGV4dENvbnRlbnQgPSAnV2FybmluZ3MnO1xuICAgIGxpbmtDb250YWluZXIzLmFwcGVuZChsaW5rMyk7XG4gICAgbGlua3MuYXBwZW5kKGxpbmtDb250YWluZXIzKTtcblxuICAgIG5hdkJhci5hcHBlbmQobGlua3MpXG4gICAgbmF2LmFwcGVuZChuYXZCYXIpO1xuICAgIGhlYWRlci5hcHBlbmQobmF2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQoKSB7XG4gICAgLy8gY3JlYXRlcyBhbGwgb2YgdGhlIG1haW4gY29udGVudCBvbiBsb2FkXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBjb250ZW50LmFwcGVuZChtYWluKTtcblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbkNvbnRlbnQnKTtcbiAgICBtYWluLmFwcGVuZChtYWluQ29udGVudCk7XG5cbiAgICBjb25zdCB6aXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB6aXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnemlwQ29udGFpbmVyJyk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kKHppcENvbnRhaW5lcik7XG5cbiAgICBjb25zdCB6aXBDb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB6aXBDb2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgemlwQ29kZS5uYW1lID0gJ3ppcENvZGUnO1xuICAgIHppcENvZGUuaWQgPSAnemlwQ29kZSc7XG4gICAgemlwQ29kZS5wbGFjZWhvbGRlciA9ICdJbnNlcnQgWmlwIEhlcmUnO1xuICAgIHppcENvbnRhaW5lci5hcHBlbmQoemlwQ29kZSk7XG5cbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzZWFyY2hCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIHNlYXJjaEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTZWFyY2gnO1xuICAgIHppcENvbnRhaW5lci5hcHBlbmQoc2VhcmNoQnV0dG9uKTtcblxuICAgIGNvbnN0IGFyZWFDaG9pY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcmVhQ2hvaWNlLmNsYXNzTGlzdC5hZGQoJ2FyZWFDaG9pY2UnKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmQoYXJlYUNob2ljZSk7XG5cbiAgICBjb25zdCB0ZW1wZXJhdHVyZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wZXJhdHVyZUluZm8uY2xhc3NMaXN0LmFkZCgndGVtcGVyYXR1cmVJbmZvJyk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kKHRlbXBlcmF0dXJlSW5mbyk7XG5cbiAgICBjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0Jyk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kKGZvcmVjYXN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kKGZvb3Rlcik7XG5cbiAgICBjb25zdCBhdHRyaWJ1dGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhdHRyaWJ1dGlvbi5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9taWtlajMyMSc7XG4gICAgYXR0cmlidXRpb24udGV4dENvbnRlbnQgPSAnTWljaGFlbCBKb2huc29uJztcblxuICAgIGNvbnN0IGZvb3RlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vdGVyQ29udGVudC5hcHBlbmQoYXR0cmlidXRpb24pO1xuICAgIGZvb3RlckNvbnRlbnQudGV4dENvbnRlbnQgPSBgTWFkZSBieSAke2F0dHJpYnV0aW9ufS4gSSBob3BlIHRoYXQgeW91IGVuam95IWA7XG5cbiAgICBmb290ZXIuYXBwZW5kKGZvb3RlckNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiBsb2FkSW5pdGlhbENvbnRlbnQoKSB7XG4gICAgY3JlYXRlTmF2KCk7XG4gICAgY3JlYXRlTWFpbkNvbnRlbnQoKTtcbiAgICBjcmVhdGVGb290ZXIoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==