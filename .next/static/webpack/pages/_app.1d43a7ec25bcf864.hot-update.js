"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./src/styles/globals.css":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./src/styles/globals.css ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* TODO:\\n* - Add support for media queries ???\\n* perhaps highlight words in word cloud to suggest they are clickable\\n*/\\n\\nbody {\\n  background: rgb(168,90,94);\\nbackground: linear-gradient(90deg, rgba(168,90,94,1) 0%, rgba(218,173,85,1) 48%, rgba(70,200,169,1) 88%, rgba(139,169,175,1) 100%);\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\\n    sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nh1 {\\n  margin-top: 10%;\\n  text-align: center;\\n  font-size: 2rem;\\n  font-weight: 600;\\n  margin-bottom: 0.5rem;\\n}\\n\\nh3 {\\n  margin-top: 4%;\\n  text-align: center;\\n  font-size: 1.5rem;\\n  font-weight: 500;\\n  margin-bottom: 2rem;\\n}\\n\\np {\\n  display: block;\\n  margin: auto;\\n  padding-top: 4rem;\\n  padding-bottom: 4rem;\\n  text-align: center;\\n  font-size: 1.2rem;\\n  font-weight: 400;\\n  max-width: 60%;\\n}\\n\\n.btn {\\n  background-color: rgba(39, 39, 39, 0.1);\\n  border-radius: 8px;\\n  border-width: 0;\\n  color: #333333;\\n  cursor: crosshair;\\n  display: inline-block;\\n  font-family: \\\"Haas Grot Text R Web\\\", \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n  font-size: 14px;\\n  font-weight: 600;\\n  line-height: 20px;\\n  list-style: none;\\n  display: block;\\n  margin: auto;\\n  padding: 10px 12px;\\n  text-align: center;\\n  transition: all 200ms;\\n  white-space: nowrap;\\n  user-select: none;\\n  -webkit-user-select: none;\\n  touch-action: manipulation;\\n}\\n\\n.btn:hover {\\n  background-color: rgba(39, 39, 39, 0.2);\\n}\\n\\n/* .btn-medium {\\n  font-size: 1.2rem;\\n  padding: 10px 14px;\\n} */\\n\\n.input {\\n  display: block;\\n  margin: auto;\\n  margin-bottom: 2%;\\n  margin-top: 2%;\\n  text-align: center;\\n  box-shadow: inset #abacaf 0 0 0 2px;\\n  border: 0;\\n  background: rgba(180, 180, 180, 0.3);\\n  appearance: none;\\n  width: 20%;\\n  position: relative;\\n  border-radius: 3px;\\n  padding: 9px 12px;\\n  line-height: 1.4;\\n  color: rgb(203, 203, 203);\\n  font-size: 16px;\\n  font-weight: 400;\\n  height: 40px;\\n  transition: all .2s ease;\\n}\\n\\n.input:hover {\\n  box-shadow: 0 0 0 0 #fff inset, #a24e78 0 0 0 2px;\\n}\\n\\n.input:focus {\\n  background: rgb(144, 144, 144, 0.3);\\n      outline: 0;\\n      box-shadow: 0 0 0 0 #fff inset, #a24e78 0 0 0 3px;\\n}\\n\\n.cloud {\\n  display: block;\\n  margin: auto;\\n  text-align: center;\\n}\\n\\n.hint {\\n  float: left;\\n  padding-left: 2%;\\n  font-weight: 200;\\n  animation: fadeIn 1s;\\n  cursor: crosshair;\\n}\\n\\n.hint:hover {\\n  color: #a24e78;\\n}\\n\\ncode {\\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\\n    monospace;\\n}\\n\\n#share {\\n  display: none;\\n}\\n\\n#buy {\\n  display: none;\\n}\\n\\n#btn-previous-stage {\\n  display: none;\\n}\\n\\n#btn-result {\\n  display: none;\\n}\\n\\n#fact {\\n  animation: fadeIn 1s;\\n  display: block;\\n  margin: auto;\\n  text-align: center;\\n  margin-top: 3rem;\\n  bottom: 1rem;\\n  max-width: 70%;\\n  font-weight: 300;\\n}\\n\\n@keyframes fadeIn {\\n  0% { opacity: 0; }\\n  100% { opacity: 1; }\\n}\\n\\n.grid {\\n  display: flex;\\n  padding-left: 5.5rem;\\n  align-items: center;\\n  justify-content: right;\\n  flex-wrap: wrap;\\n  max-width: 1200px;\\n}\\n\\n.card {\\n  margin: 1rem; \\n  color: inherit;\\n  text-decoration: none;\\n  border-radius: 10px;\\n  transition: color 0.15s ease, border-color 0.15s ease;\\n  max-width: 260px;\\n}\\n\\n.imgPreview {\\n  width: 100%;\\n  border-radius: 10px;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;;;CAGC;;AAED;EACE,0BAA0B;AAC5B,kIAAkI;EAChI,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,uCAAuC;EACvC,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,qBAAqB;EACrB,mFAAmF;EACnF,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,uCAAuC;AACzC;;AAEA;;;GAGG;;AAEH;EACE,cAAc;EACd,YAAY;EACZ,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,mCAAmC;EACnC,SAAS;EACT,oCAAoC;EACpC,gBAAgB;EAChB,UAAU;EACV,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;EACzB,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,wBAAwB;AAC1B;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE,mCAAmC;MAC/B,UAAU;MACV,iDAAiD;AACvD;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,gBAAgB;EAChB,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;aACW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,KAAK,UAAU,EAAE;EACjB,OAAO,UAAU,EAAE;AACrB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,qBAAqB;EACrB,mBAAmB;EACnB,qDAAqD;EACrD,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB\",\"sourcesContent\":[\"/* TODO:\\n* - Add support for media queries ???\\n* perhaps highlight words in word cloud to suggest they are clickable\\n*/\\n\\nbody {\\n  background: rgb(168,90,94);\\nbackground: linear-gradient(90deg, rgba(168,90,94,1) 0%, rgba(218,173,85,1) 48%, rgba(70,200,169,1) 88%, rgba(139,169,175,1) 100%);\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\\n    sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nh1 {\\n  margin-top: 10%;\\n  text-align: center;\\n  font-size: 2rem;\\n  font-weight: 600;\\n  margin-bottom: 0.5rem;\\n}\\n\\nh3 {\\n  margin-top: 4%;\\n  text-align: center;\\n  font-size: 1.5rem;\\n  font-weight: 500;\\n  margin-bottom: 2rem;\\n}\\n\\np {\\n  display: block;\\n  margin: auto;\\n  padding-top: 4rem;\\n  padding-bottom: 4rem;\\n  text-align: center;\\n  font-size: 1.2rem;\\n  font-weight: 400;\\n  max-width: 60%;\\n}\\n\\n.btn {\\n  background-color: rgba(39, 39, 39, 0.1);\\n  border-radius: 8px;\\n  border-width: 0;\\n  color: #333333;\\n  cursor: crosshair;\\n  display: inline-block;\\n  font-family: \\\"Haas Grot Text R Web\\\", \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n  font-size: 14px;\\n  font-weight: 600;\\n  line-height: 20px;\\n  list-style: none;\\n  display: block;\\n  margin: auto;\\n  padding: 10px 12px;\\n  text-align: center;\\n  transition: all 200ms;\\n  white-space: nowrap;\\n  user-select: none;\\n  -webkit-user-select: none;\\n  touch-action: manipulation;\\n}\\n\\n.btn:hover {\\n  background-color: rgba(39, 39, 39, 0.2);\\n}\\n\\n/* .btn-medium {\\n  font-size: 1.2rem;\\n  padding: 10px 14px;\\n} */\\n\\n.input {\\n  display: block;\\n  margin: auto;\\n  margin-bottom: 2%;\\n  margin-top: 2%;\\n  text-align: center;\\n  box-shadow: inset #abacaf 0 0 0 2px;\\n  border: 0;\\n  background: rgba(180, 180, 180, 0.3);\\n  appearance: none;\\n  width: 20%;\\n  position: relative;\\n  border-radius: 3px;\\n  padding: 9px 12px;\\n  line-height: 1.4;\\n  color: rgb(203, 203, 203);\\n  font-size: 16px;\\n  font-weight: 400;\\n  height: 40px;\\n  transition: all .2s ease;\\n}\\n\\n.input:hover {\\n  box-shadow: 0 0 0 0 #fff inset, #a24e78 0 0 0 2px;\\n}\\n\\n.input:focus {\\n  background: rgb(144, 144, 144, 0.3);\\n      outline: 0;\\n      box-shadow: 0 0 0 0 #fff inset, #a24e78 0 0 0 3px;\\n}\\n\\n.cloud {\\n  display: block;\\n  margin: auto;\\n  text-align: center;\\n}\\n\\n.hint {\\n  float: left;\\n  padding-left: 2%;\\n  font-weight: 200;\\n  animation: fadeIn 1s;\\n  cursor: crosshair;\\n}\\n\\n.hint:hover {\\n  color: #a24e78;\\n}\\n\\ncode {\\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\\n    monospace;\\n}\\n\\n#share {\\n  display: none;\\n}\\n\\n#buy {\\n  display: none;\\n}\\n\\n#btn-previous-stage {\\n  display: none;\\n}\\n\\n#btn-result {\\n  display: none;\\n}\\n\\n#fact {\\n  animation: fadeIn 1s;\\n  display: block;\\n  margin: auto;\\n  text-align: center;\\n  margin-top: 3rem;\\n  bottom: 1rem;\\n  max-width: 70%;\\n  font-weight: 300;\\n}\\n\\n@keyframes fadeIn {\\n  0% { opacity: 0; }\\n  100% { opacity: 1; }\\n}\\n\\n.grid {\\n  display: flex;\\n  padding-left: 5.5rem;\\n  align-items: center;\\n  justify-content: right;\\n  flex-wrap: wrap;\\n  max-width: 1200px;\\n}\\n\\n.card {\\n  margin: 1rem; \\n  color: inherit;\\n  text-decoration: none;\\n  border-radius: 10px;\\n  transition: color 0.15s ease, border-color 0.15s ease;\\n  max-width: 260px;\\n}\\n\\n.imgPreview {\\n  width: 100%;\\n  border-radius: 10px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMySDtBQUMzSCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsOEtBQThLLCtCQUErQixxSUFBcUksY0FBYyw2S0FBNkssd0NBQXdDLHVDQUF1QyxHQUFHLFFBQVEsb0JBQW9CLHVCQUF1QixvQkFBb0IscUJBQXFCLDBCQUEwQixHQUFHLFFBQVEsbUJBQW1CLHVCQUF1QixzQkFBc0IscUJBQXFCLHdCQUF3QixHQUFHLE9BQU8sbUJBQW1CLGlCQUFpQixzQkFBc0IseUJBQXlCLHVCQUF1QixzQkFBc0IscUJBQXFCLG1CQUFtQixHQUFHLFVBQVUsNENBQTRDLHVCQUF1QixvQkFBb0IsbUJBQW1CLHNCQUFzQiwwQkFBMEIsNEZBQTRGLG9CQUFvQixxQkFBcUIsc0JBQXNCLHFCQUFxQixtQkFBbUIsaUJBQWlCLHVCQUF1Qix1QkFBdUIsMEJBQTBCLHdCQUF3QixzQkFBc0IsOEJBQThCLCtCQUErQixHQUFHLGdCQUFnQiw0Q0FBNEMsR0FBRyxvQkFBb0Isc0JBQXNCLHVCQUF1QixJQUFJLGNBQWMsbUJBQW1CLGlCQUFpQixzQkFBc0IsbUJBQW1CLHVCQUF1Qix3Q0FBd0MsY0FBYyx5Q0FBeUMscUJBQXFCLGVBQWUsdUJBQXVCLHVCQUF1QixzQkFBc0IscUJBQXFCLDhCQUE4QixvQkFBb0IscUJBQXFCLGlCQUFpQiw2QkFBNkIsR0FBRyxrQkFBa0Isc0RBQXNELEdBQUcsa0JBQWtCLHdDQUF3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LDBEQUEwRCxHQUFHLFlBQVksbUJBQW1CLGlCQUFpQix1QkFBdUIsR0FBRyxXQUFXLGdCQUFnQixxQkFBcUIscUJBQXFCLHlCQUF5QixzQkFBc0IsR0FBRyxpQkFBaUIsbUJBQW1CLEdBQUcsVUFBVSx5RkFBeUYsR0FBRyxZQUFZLGtCQUFrQixHQUFHLFVBQVUsa0JBQWtCLEdBQUcseUJBQXlCLGtCQUFrQixHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyxXQUFXLHlCQUF5QixtQkFBbUIsaUJBQWlCLHVCQUF1QixxQkFBcUIsaUJBQWlCLG1CQUFtQixxQkFBcUIsR0FBRyx1QkFBdUIsU0FBUyxhQUFhLFdBQVcsYUFBYSxHQUFHLFdBQVcsa0JBQWtCLHlCQUF5Qix3QkFBd0IsMkJBQTJCLG9CQUFvQixzQkFBc0IsR0FBRyxXQUFXLGtCQUFrQixtQkFBbUIsMEJBQTBCLHdCQUF3QiwwREFBMEQscUJBQXFCLEdBQUcsaUJBQWlCLGdCQUFnQix3QkFBd0IsR0FBRyxxQkFBcUI7QUFDbjhRO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcz8wZjM3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBUT0RPOlxcbiogLSBBZGQgc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllcyA/Pz9cXG4qIHBlcmhhcHMgaGlnaGxpZ2h0IHdvcmRzIGluIHdvcmQgY2xvdWQgdG8gc3VnZ2VzdCB0aGV5IGFyZSBjbGlja2FibGVcXG4qL1xcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogcmdiKDE2OCw5MCw5NCk7XFxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE2OCw5MCw5NCwxKSAwJSwgcmdiYSgyMTgsMTczLDg1LDEpIDQ4JSwgcmdiYSg3MCwyMDAsMTY5LDEpIDg4JSwgcmdiYSgxMzksMTY5LDE3NSwxKSAxMDAlKTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJyxcXG4gICAgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxcbiAgICBzYW5zLXNlcmlmO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW4tdG9wOiAxMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW4tdG9wOiA0JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbnAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nLXRvcDogNHJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWF4LXdpZHRoOiA2MCU7XFxufVxcblxcbi5idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzksIDM5LCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGFhcyBHcm90IFRleHQgUiBXZWJcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMTBweCAxMnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCAzOSwgMC4yKTtcXG59XFxuXFxuLyogLmJ0bi1tZWRpdW0ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XFxufSAqL1xcblxcbi5pbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDIlO1xcbiAgbWFyZ2luLXRvcDogMiU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCAjYWJhY2FmIDAgMCAwIDJweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTgwLCAxODAsIDE4MCwgMC4zKTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogMjAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogOXB4IDEycHg7XFxuICBsaW5lLWhlaWdodDogMS40O1xcbiAgY29sb3I6IHJnYigyMDMsIDIwMywgMjAzKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XFxufVxcblxcbi5pbnB1dDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMCAwICNmZmYgaW5zZXQsICNhMjRlNzggMCAwIDAgMnB4O1xcbn1cXG5cXG4uaW5wdXQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogcmdiKDE0NCwgMTQ0LCAxNDQsIDAuMyk7XFxuICAgICAgb3V0bGluZTogMDtcXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwICNmZmYgaW5zZXQsICNhMjRlNzggMCAwIDAgM3B4O1xcbn1cXG5cXG4uY2xvdWQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oaW50IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAyJTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uaGludDpob3ZlciB7XFxuICBjb2xvcjogI2EyNGU3ODtcXG59XFxuXFxuY29kZSB7XFxuICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgJ0NvdXJpZXIgTmV3JyxcXG4gICAgbW9ub3NwYWNlO1xcbn1cXG5cXG4jc2hhcmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2J1eSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYnRuLXByZXZpb3VzLXN0YWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNidG4tcmVzdWx0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNmYWN0IHtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgYm90dG9tOiAxcmVtO1xcbiAgbWF4LXdpZHRoOiA3MCU7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxufVxcblxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLWxlZnQ6IDUuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxufVxcblxcbi5jYXJkIHtcXG4gIG1hcmdpbjogMXJlbTsgXFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcXG4gIG1heC13aWR0aDogMjYwcHg7XFxufVxcblxcbi5pbWdQcmV2aWV3IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEO0VBQ0UsMEJBQTBCO0FBQzVCLGtJQUFrSTtFQUNoSSxTQUFTO0VBQ1Q7O2NBRVk7RUFDWixtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG1GQUFtRjtFQUNuRixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7OztHQUdHOztBQUVIO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsU0FBUztFQUNULG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsbUNBQW1DO01BQy9CLFVBQVU7TUFDVixpREFBaUQ7QUFDdkQ7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7YUFDVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLEtBQUssVUFBVSxFQUFFO0VBQ2pCLE9BQU8sVUFBVSxFQUFFO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIscURBQXFEO0VBQ3JELGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVE9ETzpcXG4qIC0gQWRkIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgPz8/XFxuKiBwZXJoYXBzIGhpZ2hsaWdodCB3b3JkcyBpbiB3b3JkIGNsb3VkIHRvIHN1Z2dlc3QgdGhleSBhcmUgY2xpY2thYmxlXFxuKi9cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHJnYigxNjgsOTAsOTQpO1xcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxNjgsOTAsOTQsMSkgMCUsIHJnYmEoMjE4LDE3Myw4NSwxKSA0OCUsIHJnYmEoNzAsMjAwLDE2OSwxKSA4OCUsIHJnYmEoMTM5LDE2OSwxNzUsMSkgMTAwJSk7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJywgJ094eWdlbicsXFxuICAgICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJyxcXG4gICAgc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuXFxuaDEge1xcbiAgbWFyZ2luLXRvcDogMTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luLXRvcDogNCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG5wIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDRyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG1heC13aWR0aDogNjAlO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDM5LCAzOSwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogXFxcIkhhYXMgR3JvdCBUZXh0IFIgV2ViXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzOSwgMzksIDAuMik7XFxufVxcblxcbi8qIC5idG4tbWVkaXVtIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMTBweCAxNHB4O1xcbn0gKi9cXG5cXG4uaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAyJTtcXG4gIG1hcmdpbi10b3A6IDIlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgI2FiYWNhZiAwIDAgMCAycHg7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE4MCwgMTgwLCAxODAsIDAuMyk7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgd2lkdGg6IDIwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDlweCAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG4gIGNvbG9yOiByZ2IoMjAzLCAyMDMsIDIwMyk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xcbn1cXG5cXG4uaW5wdXQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMCAjZmZmIGluc2V0LCAjYTI0ZTc4IDAgMCAwIDJweDtcXG59XFxuXFxuLmlucHV0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxNDQsIDE0NCwgMTQ0LCAwLjMpO1xcbiAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCAjZmZmIGluc2V0LCAjYTI0ZTc4IDAgMCAwIDNweDtcXG59XFxuXFxuLmNsb3VkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGludCB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMiU7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmhpbnQ6aG92ZXIge1xcbiAgY29sb3I6ICNhMjRlNzg7XFxufVxcblxcbmNvZGUge1xcbiAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdDb3VyaWVyIE5ldycsXFxuICAgIG1vbm9zcGFjZTtcXG59XFxuXFxuI3NoYXJlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNidXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2J0bi1wcmV2aW91cy1zdGFnZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYnRuLXJlc3VsdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jZmFjdCB7XFxuICBhbmltYXRpb246IGZhZGVJbiAxcztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIGJvdHRvbTogMXJlbTtcXG4gIG1heC13aWR0aDogNzAlO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbn1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy1sZWZ0OiA1LjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBtYXJnaW46IDFyZW07IFxcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XFxuICBtYXgtd2lkdGg6IDI2MHB4O1xcbn1cXG5cXG4uaW1nUHJldmlldyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./src/styles/globals.css\n"));

/***/ })

});