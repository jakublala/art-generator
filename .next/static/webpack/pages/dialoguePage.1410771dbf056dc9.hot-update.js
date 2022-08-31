"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dialoguePage",{

/***/ "./src/pages/dialoguePage.js":
/*!***********************************!*\
  !*** ./src/pages/dialoguePage.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_hintCloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/hintCloud */ \"./src/Components/hintCloud.js\");\n/* harmony import */ var _Components_prompt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/prompt */ \"./src/Components/prompt.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\n\n\n\n\n\nvar ref = __webpack_require__(/*! ../Components/assembler_Obj */ \"./src/Components/assembler_Obj.js\"), responses = ref.responses, assembleResponse = ref.assembleResponse, storeResponse = ref.storeResponse, assembleFinalDalle = ref.assembleFinalDalle;\n/**\n * The dialogue window\n * \n * Different prompts arise based on where the user is in the creation\n * journey.\n * \n * User gives any input.\n * \n * Tips are provided on the page as word-clouds related to given prompt.\n * \n * User can decide to quit/restart the process.\n * If inactive for X seconds, the user is asked if they want more ideas /\n * wish to start over / quit.\n * \n * Final page before the query is sent to be generated should show the resulting\n * sentence for user revision.\n * \n */ //TODO: show response, as it is being assembled, on page\n//TODO: check format of input - e.g. 400 character limit\n//TODO: update stage names of h1 from dataFile instead of here \nvar DialoguePage = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(DialoguePage, _Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(DialoguePage);\n    function DialoguePage() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, DialoguePage);\n        var _this;\n        _this = _super.apply(this, arguments);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"state\", {\n            stage: 0,\n            medium: \"\",\n            numStages: 7,\n            query: \"\",\n            dalleInput: \"\",\n            //TODO: update stage names of h1 from dataFile instead of here \n            stage_names: {\n                painting: [\n                    \"Painting Types\",\n                    \"Painting Content\",\n                    \"Painting Setting\",\n                    \"Emotions\",\n                    \"Looks and Techniques\",\n                    \"Art Styles\"\n                ],\n                sculpture: [\n                    \"Sculpture Type\",\n                    \"Sculpture Content\",\n                    \"Forms\",\n                    \"Emotions\",\n                    \"Looks\",\n                    \"Art Styles\"\n                ],\n                photography: [\n                    \"Photo Content\",\n                    \"Photo Setting\",\n                    \"Camera Angle\",\n                    \"Camera Settings\",\n                    \"Lighting\",\n                    \"Emotions\"\n                ]\n            }\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"incrementStage\", function() {\n            //increase value of current stage by 1, and update the buttons accordingly\n            var currentStage = _this.state.stage;\n            /***\n         * Button to next stage:\n         * is enabled only if the current stage is less than last,\n         * at last stage is replaced by submit button which redirects to loading page.\n         * \n         * Text field is emptied and value stored.\n         */ //hide forward button, create a submit button\n            if (currentStage === _this.state.numStages - 2) {\n                //hide forward button\n                document.querySelector(\"#btn-next-stage\").style.display = \"none\";\n                //show submit button\n                document.querySelector(\"#btn-result\").style.display = \"block\";\n            }\n            //get text from input field and store it in the query array\n            var input = document.querySelector(\"#dialogue-input\").value;\n            //TODO: change to fit the correct structure\n            _this.setState({\n                query: input\n            });\n            /****\n         * Feed input to assembler\n         */ if (_this.state.stage !== 0) {\n                var userInput = document.querySelector(\"#dialogue-input\").value;\n                storeResponse(userInput, _this.state.stage, responses, _this.state.medium);\n            }\n            //empty the input field\n            document.querySelector(\"#dialogue-input\").value = \"\";\n            //increase stage by 1\n            _this.setState({\n                stage: currentStage + 1\n            });\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"selectState\", function(medium) {\n            //when the medium buttons are clicked, set medium and move to next stage\n            _this.setState({\n                medium: medium\n            });\n            _this.setState({\n                stage: 1\n            });\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"finishAssembling\", function() {\n            //get text from final input stage and assemble it into final query for dalle\n            if (_this.state.stage == _this.state.numStages - 1) {\n                var input = document.querySelector(\"#dialogue-input\").value;\n                storeResponse(input, _this.state.stage, responses, _this.state.medium);\n                var dalleInput = assembleResponse(responses, _this.state.medium);\n                _this.state.dalleInput = dalleInput;\n                assembleFinalDalle(dalleInput);\n            }\n        });\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(DialoguePage, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \" \",\n                                this.state.stage === 0 ? \"Select a Medium\" : null,\n                                this.state.stage > 0 ? this.state.stage_names[this.state.medium][this.state.stage - 1] : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 116,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_hintCloud__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            medium: this.state.medium,\n                            stage: this.state.stage\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 120,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_prompt__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            medium: this.state.medium,\n                            stage: this.state.stage\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 122,\n                            columnNumber: 17\n                        }, this),\n                        this.state.stage === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn\",\n                                    onClick: function() {\n                                        _this.setState({\n                                            medium: \"painting\"\n                                        });\n                                        _this.incrementStage();\n                                    },\n                                    children: \"Painting\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn\",\n                                    onClick: function() {\n                                        _this.setState({\n                                            medium: \"sculpture\"\n                                        });\n                                        _this.incrementStage();\n                                    },\n                                    children: \"Sculpture\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                                    lineNumber: 138,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn\",\n                                    onClick: function() {\n                                        _this.setState({\n                                            medium: \"photography\"\n                                        });\n                                        _this.incrementStage();\n                                    },\n                                    children: \"Photography\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                                    lineNumber: 145,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 129,\n                            columnNumber: 22\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"input\",\n                                    id: \"dialogue-input\",\n                                    type: \"text\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                                    lineNumber: 155,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"btn\",\n                                    id: \"btn-next-stage\",\n                                    type: \"submit\",\n                                    onClick: this.incrementStage,\n                                    value: \"Next\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                                    lineNumber: 157,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 154,\n                            columnNumber: 22\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"/loadingPage\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn\",\n                                onClick: this.finishAssembling,\n                                id: \"btn-result\",\n                                children: \"Results\"\n                            }, void 0, false, {\n                                fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                                lineNumber: 166,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 165,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                    lineNumber: 115,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return DialoguePage;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (DialoguePage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7NENBQUNoQixNQUFNLEVBQUUsYUFBYTt5Q0FBQyxDQUFDLENBQUM7d0NBQ3ZDLE1BQUtRLGNBQWMsRUFBRSxDQUFDO3FDQUN6Qjs4Q0FBRSxhQUVIOzs7Ozt3Q0FBUzs7Ozs7O2dDQUNOLGlCQUdOLDhEQUFDYSxLQUFHOzs4Q0FDRCw4REFBQ1AsT0FBSztvQ0FBQ1UsU0FBUyxFQUFDLE9BQU87b0NBQUNFLEVBQUUsRUFBQyxnQkFBZ0I7b0NBQUNDLElBQUksRUFBQyxNQUFNOzs7Ozt3Q0FBUzs4Q0FFakUsOERBQUNiLE9BQUs7b0NBQUNVLFNBQVMsRUFBQyxLQUFLO29DQUFDRSxFQUFFLEVBQUMsZ0JBQWdCO29DQUFDQyxJQUFJLEVBQUMsUUFBUTtvQ0FDcERGLE9BQU8sRUFBSSxJQUFJLENBQUNqQixjQUFjO29DQUM5Qk8sS0FBSyxFQUFHLE1BQU07Ozs7O3dDQUNaOzs7Ozs7Z0NBQ0g7c0NBSVgsOERBQUN6QixrREFBSTs0QkFBQ3NDLElBQUksRUFBRSxjQUFjO3NDQUN0Qiw0RUFBQ0wsUUFBTTtnQ0FBQ0MsU0FBUyxFQUFDLEtBQUs7Z0NBQUNDLE9BQU8sRUFBRSxJQUFJLENBQUNOLGdCQUFnQjtnQ0FBRU8sRUFBRSxFQUFDLFlBQVk7MENBQUMsU0FFeEU7Ozs7O29DQUFTOzs7OztnQ0FDTjs7Ozs7O3dCQUVMLENBRVQ7YUFDSjs7OztDQUVKLENBaEoyQnZDLHdEQUFlLENBZ0oxQztBQUVELCtEQUFlVSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RpYWxvZ3VlUGFnZS5qcz83MzM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIaW50Q2xvdWQgZnJvbSBcIi4uL0NvbXBvbmVudHMvaGludENsb3VkXCI7XG5pbXBvcnQgUHJvbXB0IGZyb20gXCIuLi9Db21wb25lbnRzL3Byb21wdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHsgcmVzcG9uc2VzLCBhc3NlbWJsZVJlc3BvbnNlLCBzdG9yZVJlc3BvbnNlLCBhc3NlbWJsZUZpbmFsRGFsbGUgfSA9IHJlcXVpcmUoJy4uL0NvbXBvbmVudHMvYXNzZW1ibGVyX09iaicpO1xuXG4vKipcbiAqIFRoZSBkaWFsb2d1ZSB3aW5kb3dcbiAqIFxuICogRGlmZmVyZW50IHByb21wdHMgYXJpc2UgYmFzZWQgb24gd2hlcmUgdGhlIHVzZXIgaXMgaW4gdGhlIGNyZWF0aW9uXG4gKiBqb3VybmV5LlxuICogXG4gKiBVc2VyIGdpdmVzIGFueSBpbnB1dC5cbiAqIFxuICogVGlwcyBhcmUgcHJvdmlkZWQgb24gdGhlIHBhZ2UgYXMgd29yZC1jbG91ZHMgcmVsYXRlZCB0byBnaXZlbiBwcm9tcHQuXG4gKiBcbiAqIFVzZXIgY2FuIGRlY2lkZSB0byBxdWl0L3Jlc3RhcnQgdGhlIHByb2Nlc3MuXG4gKiBJZiBpbmFjdGl2ZSBmb3IgWCBzZWNvbmRzLCB0aGUgdXNlciBpcyBhc2tlZCBpZiB0aGV5IHdhbnQgbW9yZSBpZGVhcyAvXG4gKiB3aXNoIHRvIHN0YXJ0IG92ZXIgLyBxdWl0LlxuICogXG4gKiBGaW5hbCBwYWdlIGJlZm9yZSB0aGUgcXVlcnkgaXMgc2VudCB0byBiZSBnZW5lcmF0ZWQgc2hvdWxkIHNob3cgdGhlIHJlc3VsdGluZ1xuICogc2VudGVuY2UgZm9yIHVzZXIgcmV2aXNpb24uXG4gKiBcbiAqL1xuXG4vL1RPRE86IHNob3cgcmVzcG9uc2UsIGFzIGl0IGlzIGJlaW5nIGFzc2VtYmxlZCwgb24gcGFnZVxuLy9UT0RPOiBjaGVjayBmb3JtYXQgb2YgaW5wdXQgLSBlLmcuIDQwMCBjaGFyYWN0ZXIgbGltaXRcbi8vVE9ETzogdXBkYXRlIHN0YWdlIG5hbWVzIG9mIGgxIGZyb20gZGF0YUZpbGUgaW5zdGVhZCBvZiBoZXJlIFxuXG4gY2xhc3MgRGlhbG9ndWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFnZTogMCxcbiAgICAgICAgbWVkaXVtOiBcIlwiLFxuICAgICAgICBudW1TdGFnZXM6IDcsXG4gICAgICAgIHF1ZXJ5OiBcIlwiLFxuICAgICAgICBkYWxsZUlucHV0OiBcIlwiLFxuXG4gICAgICAgIC8vVE9ETzogdXBkYXRlIHN0YWdlIG5hbWVzIG9mIGgxIGZyb20gZGF0YUZpbGUgaW5zdGVhZCBvZiBoZXJlIFxuICAgICAgICBzdGFnZV9uYW1lczogeyBcbiAgICAgICAgICAgIHBhaW50aW5nOiBbJ1BhaW50aW5nIFR5cGVzJywgJ1BhaW50aW5nIENvbnRlbnQnLCAnUGFpbnRpbmcgU2V0dGluZycsJ0Vtb3Rpb25zJywgJ0xvb2tzIGFuZCBUZWNobmlxdWVzJywnQXJ0IFN0eWxlcyddLFxuICAgICAgICAgICAgc2N1bHB0dXJlOiBbJ1NjdWxwdHVyZSBUeXBlJywnU2N1bHB0dXJlIENvbnRlbnQnLCAnRm9ybXMnLCAnRW1vdGlvbnMnLCAnTG9va3MnLCAnQXJ0IFN0eWxlcyddLFxuICAgICAgICAgICAgcGhvdG9ncmFwaHk6IFsnUGhvdG8gQ29udGVudCcsICdQaG90byBTZXR0aW5nJywgJ0NhbWVyYSBBbmdsZScsICdDYW1lcmEgU2V0dGluZ3MnLCAnTGlnaHRpbmcnLCAnRW1vdGlvbnMnXVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbmNyZW1lbnRTdGFnZSA9ICgpID0+IHtcbiAgICAgICAgLy9pbmNyZWFzZSB2YWx1ZSBvZiBjdXJyZW50IHN0YWdlIGJ5IDEsIGFuZCB1cGRhdGUgdGhlIGJ1dHRvbnMgYWNjb3JkaW5nbHlcbiAgICAgICAgXG4gICAgICAgIGxldCBjdXJyZW50U3RhZ2UgPSB0aGlzLnN0YXRlLnN0YWdlO1xuXG4gICAgICAgIC8qKipcbiAgICAgICAgICogQnV0dG9uIHRvIG5leHQgc3RhZ2U6XG4gICAgICAgICAqIGlzIGVuYWJsZWQgb25seSBpZiB0aGUgY3VycmVudCBzdGFnZSBpcyBsZXNzIHRoYW4gbGFzdCxcbiAgICAgICAgICogYXQgbGFzdCBzdGFnZSBpcyByZXBsYWNlZCBieSBzdWJtaXQgYnV0dG9uIHdoaWNoIHJlZGlyZWN0cyB0byBsb2FkaW5nIHBhZ2UuXG4gICAgICAgICAqIFxuICAgICAgICAgKiBUZXh0IGZpZWxkIGlzIGVtcHRpZWQgYW5kIHZhbHVlIHN0b3JlZC5cbiAgICAgICAgICovXG5cbiAgICAgICAgLy9oaWRlIGZvcndhcmQgYnV0dG9uLCBjcmVhdGUgYSBzdWJtaXQgYnV0dG9uXG4gICAgICAgIGlmKGN1cnJlbnRTdGFnZSA9PT0gdGhpcy5zdGF0ZS5udW1TdGFnZXMgLSAyKSB7XG4gICAgICAgICAgICAvL2hpZGUgZm9yd2FyZCBidXR0b25cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tbmV4dC1zdGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIC8vc2hvdyBzdWJtaXQgYnV0dG9uXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLXJlc3VsdCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9nZXQgdGV4dCBmcm9tIGlucHV0IGZpZWxkIGFuZCBzdG9yZSBpdCBpbiB0aGUgcXVlcnkgYXJyYXlcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZ3VlLWlucHV0JykudmFsdWU7XG4gICAgICAgIC8vVE9ETzogY2hhbmdlIHRvIGZpdCB0aGUgY29ycmVjdCBzdHJ1Y3R1cmVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVlcnk6IGlucHV0fSk7XG5cbiAgICAgICAgLyoqKipcbiAgICAgICAgICogRmVlZCBpbnB1dCB0byBhc3NlbWJsZXJcbiAgICAgICAgICovXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc3RhZ2UgIT09IDApIHtcbiAgICAgICAgICAgIGxldCB1c2VySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9ndWUtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgIHN0b3JlUmVzcG9uc2UodXNlcklucHV0LCB0aGlzLnN0YXRlLnN0YWdlLCByZXNwb25zZXMsIHRoaXMuc3RhdGUubWVkaXVtKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy9lbXB0eSB0aGUgaW5wdXQgZmllbGRcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZ3VlLWlucHV0JykudmFsdWUgPSAnJztcblxuICAgICAgICAvL2luY3JlYXNlIHN0YWdlIGJ5IDFcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RhZ2U6IGN1cnJlbnRTdGFnZSArIDF9KTtcbiAgICB9XG5cbiAgICBzZWxlY3RTdGF0ZSA9IChtZWRpdW0pID0+IHtcbiAgICAgICAgLy93aGVuIHRoZSBtZWRpdW0gYnV0dG9ucyBhcmUgY2xpY2tlZCwgc2V0IG1lZGl1bSBhbmQgbW92ZSB0byBuZXh0IHN0YWdlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe21lZGl1bTogbWVkaXVtfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YWdlOiAxfSk7XG5cbiAgICB9XG5cbiAgICBmaW5pc2hBc3NlbWJsaW5nID0gKCkgPT4ge1xuICAgICAgICAvL2dldCB0ZXh0IGZyb20gZmluYWwgaW5wdXQgc3RhZ2UgYW5kIGFzc2VtYmxlIGl0IGludG8gZmluYWwgcXVlcnkgZm9yIGRhbGxlXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuc3RhZ2UgPT0gdGhpcy5zdGF0ZS5udW1TdGFnZXMgLSAxKSB7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9ndWUtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgIHN0b3JlUmVzcG9uc2UoaW5wdXQsIHRoaXMuc3RhdGUuc3RhZ2UsIHJlc3BvbnNlcywgdGhpcy5zdGF0ZS5tZWRpdW0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZGFsbGVJbnB1dCA9IGFzc2VtYmxlUmVzcG9uc2UocmVzcG9uc2VzLCB0aGlzLnN0YXRlLm1lZGl1bSk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmRhbGxlSW5wdXQgPSBkYWxsZUlucHV0O1xuICAgICAgICAgICAgYXNzZW1ibGVGaW5hbERhbGxlKGRhbGxlSW5wdXQpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgIDxoMT4ge3RoaXMuc3RhdGUuc3RhZ2UgPT09IDAgPyAnU2VsZWN0IGEgTWVkaXVtJyA6IG51bGx9XG4gICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLnN0YWdlID4gMCA/IHRoaXMuc3RhdGUuc3RhZ2VfbmFtZXNbdGhpcy5zdGF0ZS5tZWRpdW1dW3RoaXMuc3RhdGUuc3RhZ2UgLSAxXSA6IG51bGx9PC9oMT5cblxuXG4gICAgICAgICAgICAgICAgPEhpbnRDbG91ZCBtZWRpdW09e3RoaXMuc3RhdGUubWVkaXVtfSBzdGFnZT17dGhpcy5zdGF0ZS5zdGFnZX0vPlxuXG4gICAgICAgICAgICAgICAgPFByb21wdCBtZWRpdW09e3RoaXMuc3RhdGUubWVkaXVtfSBzdGFnZT17dGhpcy5zdGF0ZS5zdGFnZX0vPlxuXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICB7LyogQnV0dG9ucyB0byBzZWxlY3QgbWVkaXVtICovfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN0YWdlID09PSAwID9cbiAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZWRpdW06ICdwYWludGluZyd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluY3JlbWVudFN0YWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFpbnRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVkaXVtOiAnc2N1bHB0dXJlJ30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50U3RhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNjdWxwdHVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCIgb25DbGljaz17ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZWRpdW06ICdwaG90b2dyYXBoeSd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluY3JlbWVudFN0YWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaG90b2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgOiBcbiAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIiBpZD1cImRpYWxvZ3VlLWlucHV0XCIgdHlwZT0ndGV4dCc+PC9pbnB1dD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0blwiIGlkPVwiYnRuLW5leHQtc3RhZ2VcIiB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz0geyB0aGlzLmluY3JlbWVudFN0YWdlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICdOZXh0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvbG9hZGluZ1BhZ2UnfT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXt0aGlzLmZpbmlzaEFzc2VtYmxpbmd9IGlkPVwiYnRuLXJlc3VsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVzdWx0cyBcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgKVxuICAgIH0gXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9ndWVQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhpbnRDbG91ZCIsIlByb21wdCIsIkxpbmsiLCJ1c2VTdGF0ZSIsInJlcXVpcmUiLCJyZXNwb25zZXMiLCJhc3NlbWJsZVJlc3BvbnNlIiwic3RvcmVSZXNwb25zZSIsImFzc2VtYmxlRmluYWxEYWxsZSIsIkRpYWxvZ3VlUGFnZSIsInN0YXRlIiwic3RhZ2UiLCJtZWRpdW0iLCJudW1TdGFnZXMiLCJxdWVyeSIsImRhbGxlSW5wdXQiLCJzdGFnZV9uYW1lcyIsInBhaW50aW5nIiwic2N1bHB0dXJlIiwicGhvdG9ncmFwaHkiLCJpbmNyZW1lbnRTdGFnZSIsImN1cnJlbnRTdGFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsImlucHV0IiwidmFsdWUiLCJzZXRTdGF0ZSIsInVzZXJJbnB1dCIsInNlbGVjdFN0YXRlIiwiZmluaXNoQXNzZW1ibGluZyIsInJlbmRlciIsImRpdiIsImgxIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImlkIiwidHlwZSIsImhyZWYiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dialoguePage.js\n"));

/***/ })

});