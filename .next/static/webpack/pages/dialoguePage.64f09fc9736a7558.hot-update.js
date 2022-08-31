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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_hintCloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/hintCloud */ \"./src/Components/hintCloud.js\");\n/* harmony import */ var _Components_prompt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/prompt */ \"./src/Components/prompt.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\n\n\n\n\n\nvar ref = __webpack_require__(/*! ../Components/assembler_Obj */ \"./src/Components/assembler_Obj.js\"), responses = ref.responses, assembleResponse = ref.assembleResponse, storeResponse = ref.storeResponse, assembleFinalDalle = ref.assembleFinalDalle;\n/**\n * The dialogue window\n * \n * Different prompts arise based on where the user is in the creation\n * journey.\n * \n * User gives any input.\n * \n * Tips are provided on the page as word-clouds related to given prompt.\n * \n * User can decide to quit/restart the process.\n * If inactive for X seconds, the user is asked if they want more ideas /\n * wish to start over / quit.\n * \n * Final page before the query is sent to be generated should show the resulting\n * sentence for user revision.\n * \n */ //TODO: show response, as it is being assembled, on page\n//TODO: check format of input - e.g. 400 character limit\n//TODO: update stage names of h1 from dataFile instead of here \nvar DialoguePage = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(DialoguePage, _Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(DialoguePage);\n    function DialoguePage() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, DialoguePage);\n        var _this;\n        _this = _super.apply(this, arguments);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"state\", {\n            stage: 0,\n            medium: \"\",\n            numStages: 7,\n            query: \"\",\n            dalleInput: \"\",\n            //TODO: update stage names of h1 from dataFile instead of here \n            stage_names: {\n                painting: [\n                    \"Painting Types\",\n                    \"Painting Content\",\n                    \"Painting Setting\",\n                    \"Emotions\",\n                    \"Looks and Techniques\",\n                    \"Art Styles\"\n                ],\n                sculpture: [\n                    \"Sculpture Type\",\n                    \"Sculpture Content\",\n                    \"Forms\",\n                    \"Emotions\",\n                    \"Looks\",\n                    \"Art Styles\"\n                ],\n                photography: [\n                    \"Photo Content\",\n                    \"Photo Setting\",\n                    \"Camera Angle\",\n                    \"Camera Settings\",\n                    \"Lighting\",\n                    \"Emotions\"\n                ]\n            }\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"incrementStage\", function() {\n            //increase value of current stage by 1, and update the buttons accordingly\n            var currentStage = _this.state.stage;\n            /***\n         * Button to next stage:\n         * is enabled only if the current stage is less than last,\n         * at last stage is replaced by submit button which redirects to loading page.\n         * \n         * Text field is emptied and value stored.\n         */ //hide forward button, create a submit button\n            if (currentStage === _this.state.numStages - 2) {\n                //hide forward button\n                document.querySelector(\"#btn-next-stage\").style.display = \"none\";\n                //show submit button\n                document.querySelector(\"#btn-result\").style.display = \"block\";\n            }\n            //get text from input field and store it in the query array\n            var input = document.querySelector(\"#dialogue-input\").value;\n            //TODO: change to fit the correct structure\n            _this.setState({\n                query: input\n            });\n            // /***\n            //  * Assign medium\n            //  */\n            // if(this.state.stage === 0) {\n            //     this.setState({medium: input});\n            // }\n            /****\n         * Feed input to assembler\n         */ if (_this.state.stage !== 0) {\n                var userInput = document.querySelector(\"#dialogue-input\").value;\n                storeResponse(userInput, _this.state.stage, responses, _this.state.medium);\n            }\n            //empty the input field\n            document.querySelector(\"#dialogue-input\").value = \"\";\n            //increase stage by 1\n            _this.setState({\n                stage: currentStage + 1\n            });\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"selectPainting\", function(e) {\n            _this.setState({\n                medium: e.target.value\n            });\n            _this.setState({\n                stage: 1\n            });\n            console.log(_this.state.medium);\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"finishAssembling\", function() {\n            //get text from final input stage and assemble it into final query for dalle\n            if (_this.state.stage == _this.state.numStages - 1) {\n                var input = document.querySelector(\"#dialogue-input\").value;\n                storeResponse(input, _this.state.stage, responses, _this.state.medium);\n                var dalleInput = assembleResponse(responses, _this.state.medium);\n                _this.state.dalleInput = dalleInput;\n                assembleFinalDalle(dalleInput);\n            }\n        });\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(DialoguePage, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \" \",\n                                this.state.stage === 0 ? \"Select a Medium\" : null,\n                                this.state.stage > 0 ? this.state.stage_names[this.state.medium][this.state.stage - 1] : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 124,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_hintCloud__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            medium: this.state.medium,\n                            stage: this.state.stage\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 128,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_prompt__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            medium: this.state.medium,\n                            stage: this.state.stage\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 130,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"input\",\n                            id: \"dialogue-input\",\n                            type: \"text\"\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 132,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"btn\",\n                            id: \"btn-next-stage\",\n                            type: \"submit\",\n                            onClick: this.incrementStage,\n                            value: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 134,\n                            columnNumber: 17\n                        }, this),\n                        this.state.stage === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-medium\",\n                                    value: \"painting\",\n                                    onClick: function(e) {\n                                        return _this.selectPainting(e, \"value\");\n                                    },\n                                    children: \"Painting\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                                    lineNumber: 142,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-medium\",\n                                    value: \"sculpture\",\n                                    onClick: function(e) {\n                                        return _this.selectPainting(e, \"value\");\n                                    },\n                                    children: \"Sculpture\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                                    lineNumber: 143,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-medium\",\n                                    value: \"photography\",\n                                    onClick: function(e) {\n                                        return _this.selectPainting(e, \"value\");\n                                    },\n                                    children: \"Photography\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                                    lineNumber: 144,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 141,\n                            columnNumber: 21\n                        }, this) : null,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"/loadingPage\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn\",\n                                onClick: this.finishAssembling,\n                                id: \"btn-result\",\n                                children: \"Results\"\n                            }, void 0, false, {\n                                fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                                lineNumber: 151,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 150,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/src/pages/dialoguePage.js\",\n                    lineNumber: 123,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return DialoguePage;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (DialoguePage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssRUFBRSxVQUFVO29DQUFFZSxPQUFPLEVBQUVYLFNBQUFBLENBQUM7K0NBQUksTUFBS0QsY0FBYyxDQUFDQyxDQUFDLEVBQUUsT0FBTyxDQUFDO3FDQUFBOzhDQUFFLFVBQVE7Ozs7O3dDQUFTOzhDQUN0SCw4REFBQ1ksUUFBTTtvQ0FBQ0osU0FBUyxFQUFDLGdCQUFnQjtvQ0FBQ1osS0FBSyxFQUFFLFdBQVc7b0NBQUVlLE9BQU8sRUFBRVgsU0FBQUEsQ0FBQzsrQ0FBSSxNQUFLRCxjQUFjLENBQUNDLENBQUMsRUFBRSxPQUFPLENBQUM7cUNBQUE7OENBQUUsV0FBUzs7Ozs7d0NBQVM7OENBQ3hILDhEQUFDWSxRQUFNO29DQUFDSixTQUFTLEVBQUMsZ0JBQWdCO29DQUFDWixLQUFLLEVBQUUsYUFBYTtvQ0FBRWUsT0FBTyxFQUFFWCxTQUFBQSxDQUFDOytDQUFJLE1BQUtELGNBQWMsQ0FBQ0MsQ0FBQyxFQUFFLE9BQU8sQ0FBQztxQ0FBQTs4Q0FBRSxhQUFXOzs7Ozt3Q0FBUzs7Ozs7O2dDQUMxSCxHQUVKLElBQUk7c0NBR1YsOERBQUM3QixrREFBSTs0QkFBQzBDLElBQUksRUFBRSxjQUFjO3NDQUN0Qiw0RUFBQ0QsUUFBTTtnQ0FBQ0osU0FBUyxFQUFDLEtBQUs7Z0NBQUNHLE9BQU8sRUFBRSxJQUFJLENBQUNQLGdCQUFnQjtnQ0FBRUssRUFBRSxFQUFDLFlBQVk7MENBQUMsU0FFeEU7Ozs7O29DQUFTOzs7OztnQ0FDTjs7Ozs7O3dCQUVMLENBRVQ7YUFDSjs7OztDQUVKLENBakkyQnpDLHdEQUFlLENBaUkxQztBQUVELCtEQUFlVSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RpYWxvZ3VlUGFnZS5qcz83MzM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIaW50Q2xvdWQgZnJvbSBcIi4uL0NvbXBvbmVudHMvaGludENsb3VkXCI7XG5pbXBvcnQgUHJvbXB0IGZyb20gXCIuLi9Db21wb25lbnRzL3Byb21wdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHsgcmVzcG9uc2VzLCBhc3NlbWJsZVJlc3BvbnNlLCBzdG9yZVJlc3BvbnNlLCBhc3NlbWJsZUZpbmFsRGFsbGUgfSA9IHJlcXVpcmUoJy4uL0NvbXBvbmVudHMvYXNzZW1ibGVyX09iaicpO1xuXG4vKipcbiAqIFRoZSBkaWFsb2d1ZSB3aW5kb3dcbiAqIFxuICogRGlmZmVyZW50IHByb21wdHMgYXJpc2UgYmFzZWQgb24gd2hlcmUgdGhlIHVzZXIgaXMgaW4gdGhlIGNyZWF0aW9uXG4gKiBqb3VybmV5LlxuICogXG4gKiBVc2VyIGdpdmVzIGFueSBpbnB1dC5cbiAqIFxuICogVGlwcyBhcmUgcHJvdmlkZWQgb24gdGhlIHBhZ2UgYXMgd29yZC1jbG91ZHMgcmVsYXRlZCB0byBnaXZlbiBwcm9tcHQuXG4gKiBcbiAqIFVzZXIgY2FuIGRlY2lkZSB0byBxdWl0L3Jlc3RhcnQgdGhlIHByb2Nlc3MuXG4gKiBJZiBpbmFjdGl2ZSBmb3IgWCBzZWNvbmRzLCB0aGUgdXNlciBpcyBhc2tlZCBpZiB0aGV5IHdhbnQgbW9yZSBpZGVhcyAvXG4gKiB3aXNoIHRvIHN0YXJ0IG92ZXIgLyBxdWl0LlxuICogXG4gKiBGaW5hbCBwYWdlIGJlZm9yZSB0aGUgcXVlcnkgaXMgc2VudCB0byBiZSBnZW5lcmF0ZWQgc2hvdWxkIHNob3cgdGhlIHJlc3VsdGluZ1xuICogc2VudGVuY2UgZm9yIHVzZXIgcmV2aXNpb24uXG4gKiBcbiAqL1xuXG4vL1RPRE86IHNob3cgcmVzcG9uc2UsIGFzIGl0IGlzIGJlaW5nIGFzc2VtYmxlZCwgb24gcGFnZVxuLy9UT0RPOiBjaGVjayBmb3JtYXQgb2YgaW5wdXQgLSBlLmcuIDQwMCBjaGFyYWN0ZXIgbGltaXRcbi8vVE9ETzogdXBkYXRlIHN0YWdlIG5hbWVzIG9mIGgxIGZyb20gZGF0YUZpbGUgaW5zdGVhZCBvZiBoZXJlIFxuXG4gY2xhc3MgRGlhbG9ndWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBzdGFnZTogMCxcbiAgICAgICAgbWVkaXVtOiBcIlwiLFxuICAgICAgICBudW1TdGFnZXM6IDcsXG4gICAgICAgIHF1ZXJ5OiBcIlwiLFxuICAgICAgICBkYWxsZUlucHV0OiBcIlwiLFxuXG4gICAgICAgIC8vVE9ETzogdXBkYXRlIHN0YWdlIG5hbWVzIG9mIGgxIGZyb20gZGF0YUZpbGUgaW5zdGVhZCBvZiBoZXJlIFxuICAgICAgICBzdGFnZV9uYW1lczogeyBcbiAgICAgICAgICAgIHBhaW50aW5nOiBbJ1BhaW50aW5nIFR5cGVzJywgJ1BhaW50aW5nIENvbnRlbnQnLCAnUGFpbnRpbmcgU2V0dGluZycsJ0Vtb3Rpb25zJywgJ0xvb2tzIGFuZCBUZWNobmlxdWVzJywnQXJ0IFN0eWxlcyddLFxuICAgICAgICAgICAgc2N1bHB0dXJlOiBbJ1NjdWxwdHVyZSBUeXBlJywnU2N1bHB0dXJlIENvbnRlbnQnLCAnRm9ybXMnLCAnRW1vdGlvbnMnLCAnTG9va3MnLCAnQXJ0IFN0eWxlcyddLFxuICAgICAgICAgICAgcGhvdG9ncmFwaHk6IFsnUGhvdG8gQ29udGVudCcsICdQaG90byBTZXR0aW5nJywgJ0NhbWVyYSBBbmdsZScsICdDYW1lcmEgU2V0dGluZ3MnLCAnTGlnaHRpbmcnLCAnRW1vdGlvbnMnXVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbmNyZW1lbnRTdGFnZSA9ICgpID0+IHtcbiAgICAgICAgLy9pbmNyZWFzZSB2YWx1ZSBvZiBjdXJyZW50IHN0YWdlIGJ5IDEsIGFuZCB1cGRhdGUgdGhlIGJ1dHRvbnMgYWNjb3JkaW5nbHlcbiAgICAgICAgXG4gICAgICAgIGxldCBjdXJyZW50U3RhZ2UgPSB0aGlzLnN0YXRlLnN0YWdlO1xuXG4gICAgICAgIC8qKipcbiAgICAgICAgICogQnV0dG9uIHRvIG5leHQgc3RhZ2U6XG4gICAgICAgICAqIGlzIGVuYWJsZWQgb25seSBpZiB0aGUgY3VycmVudCBzdGFnZSBpcyBsZXNzIHRoYW4gbGFzdCxcbiAgICAgICAgICogYXQgbGFzdCBzdGFnZSBpcyByZXBsYWNlZCBieSBzdWJtaXQgYnV0dG9uIHdoaWNoIHJlZGlyZWN0cyB0byBsb2FkaW5nIHBhZ2UuXG4gICAgICAgICAqIFxuICAgICAgICAgKiBUZXh0IGZpZWxkIGlzIGVtcHRpZWQgYW5kIHZhbHVlIHN0b3JlZC5cbiAgICAgICAgICovXG5cbiAgICAgICAgLy9oaWRlIGZvcndhcmQgYnV0dG9uLCBjcmVhdGUgYSBzdWJtaXQgYnV0dG9uXG4gICAgICAgIGlmKGN1cnJlbnRTdGFnZSA9PT0gdGhpcy5zdGF0ZS5udW1TdGFnZXMgLSAyKSB7XG4gICAgICAgICAgICAvL2hpZGUgZm9yd2FyZCBidXR0b25cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tbmV4dC1zdGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIC8vc2hvdyBzdWJtaXQgYnV0dG9uXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLXJlc3VsdCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9nZXQgdGV4dCBmcm9tIGlucHV0IGZpZWxkIGFuZCBzdG9yZSBpdCBpbiB0aGUgcXVlcnkgYXJyYXlcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZ3VlLWlucHV0JykudmFsdWU7XG4gICAgICAgIC8vVE9ETzogY2hhbmdlIHRvIGZpdCB0aGUgY29ycmVjdCBzdHJ1Y3R1cmVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cXVlcnk6IGlucHV0fSk7XG5cbiAgICAgICAgXG5cbiAgICAgICAgLy8gLyoqKlxuICAgICAgICAvLyAgKiBBc3NpZ24gbWVkaXVtXG4gICAgICAgIC8vICAqL1xuICAgICAgICAvLyBpZih0aGlzLnN0YXRlLnN0YWdlID09PSAwKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHttZWRpdW06IGlucHV0fSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvKioqKlxuICAgICAgICAgKiBGZWVkIGlucHV0IHRvIGFzc2VtYmxlclxuICAgICAgICAgKi9cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zdGFnZSAhPT0gMCkge1xuICAgICAgICAgICAgbGV0IHVzZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2d1ZS1pbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgc3RvcmVSZXNwb25zZSh1c2VySW5wdXQsIHRoaXMuc3RhdGUuc3RhZ2UsIHJlc3BvbnNlcywgdGhpcy5zdGF0ZS5tZWRpdW0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL2VtcHR5IHRoZSBpbnB1dCBmaWVsZFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9ndWUtaW5wdXQnKS52YWx1ZSA9ICcnO1xuXG4gICAgICAgIC8vaW5jcmVhc2Ugc3RhZ2UgYnkgMVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGFnZTogY3VycmVudFN0YWdlICsgMX0pO1xuICAgIH1cblxuICAgIHNlbGVjdFBhaW50aW5nID0gKGUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVkaXVtOiBlLnRhcmdldC52YWx1ZX0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGFnZTogMX0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm1lZGl1bSk7XG4gICAgfVxuXG4gICAgZmluaXNoQXNzZW1ibGluZyA9ICgpID0+IHtcbiAgICAgICAgLy9nZXQgdGV4dCBmcm9tIGZpbmFsIGlucHV0IHN0YWdlIGFuZCBhc3NlbWJsZSBpdCBpbnRvIGZpbmFsIHF1ZXJ5IGZvciBkYWxsZVxuICAgICAgICBpZih0aGlzLnN0YXRlLnN0YWdlID09IHRoaXMuc3RhdGUubnVtU3RhZ2VzIC0gMSkge1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RpYWxvZ3VlLWlucHV0JykudmFsdWU7XG4gICAgICAgICAgICBzdG9yZVJlc3BvbnNlKGlucHV0LCB0aGlzLnN0YXRlLnN0YWdlLCByZXNwb25zZXMsIHRoaXMuc3RhdGUubWVkaXVtKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGRhbGxlSW5wdXQgPSBhc3NlbWJsZVJlc3BvbnNlKHJlc3BvbnNlcywgdGhpcy5zdGF0ZS5tZWRpdW0pO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYWxsZUlucHV0ID0gZGFsbGVJbnB1dDtcbiAgICAgICAgICAgIGFzc2VtYmxlRmluYWxEYWxsZShkYWxsZUlucHV0KTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICA8aDE+IHt0aGlzLnN0YXRlLnN0YWdlID09PSAwID8gJ1NlbGVjdCBhIE1lZGl1bScgOiBudWxsfVxuICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5zdGFnZSA+IDAgPyB0aGlzLnN0YXRlLnN0YWdlX25hbWVzW3RoaXMuc3RhdGUubWVkaXVtXVt0aGlzLnN0YXRlLnN0YWdlIC0gMV0gOiBudWxsfTwvaDE+XG5cblxuICAgICAgICAgICAgICAgIDxIaW50Q2xvdWQgbWVkaXVtPXt0aGlzLnN0YXRlLm1lZGl1bX0gc3RhZ2U9e3RoaXMuc3RhdGUuc3RhZ2V9Lz5cblxuICAgICAgICAgICAgICAgIDxQcm9tcHQgbWVkaXVtPXt0aGlzLnN0YXRlLm1lZGl1bX0gc3RhZ2U9e3RoaXMuc3RhdGUuc3RhZ2V9Lz5cblxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiIGlkPVwiZGlhbG9ndWUtaW5wdXRcIiB0eXBlPSd0ZXh0Jz48L2lucHV0PlxuXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0blwiIGlkPVwiYnRuLW5leHQtc3RhZ2VcIiB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9IHsgdGhpcy5pbmNyZW1lbnRTdGFnZSB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJ05leHQnXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3RhZ2UgPT09IDAgP1xuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW1lZGl1bVwiIHZhbHVlPXsncGFpbnRpbmcnfSBvbkNsaWNrPXtlID0+IHRoaXMuc2VsZWN0UGFpbnRpbmcoZSwgJ3ZhbHVlJyl9PlBhaW50aW5nPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbWVkaXVtXCIgdmFsdWU9eydzY3VscHR1cmUnfSBvbkNsaWNrPXtlID0+IHRoaXMuc2VsZWN0UGFpbnRpbmcoZSwgJ3ZhbHVlJyl9PlNjdWxwdHVyZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW1lZGl1bVwiIHZhbHVlPXsncGhvdG9ncmFwaHknfSBvbkNsaWNrPXtlID0+IHRoaXMuc2VsZWN0UGFpbnRpbmcoZSwgJ3ZhbHVlJyl9PlBob3RvZ3JhcGh5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvbG9hZGluZ1BhZ2UnfT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXt0aGlzLmZpbmlzaEFzc2VtYmxpbmd9IGlkPVwiYnRuLXJlc3VsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVzdWx0cyBcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgKVxuICAgIH0gXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlhbG9ndWVQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhpbnRDbG91ZCIsIlByb21wdCIsIkxpbmsiLCJ1c2VTdGF0ZSIsInJlcXVpcmUiLCJyZXNwb25zZXMiLCJhc3NlbWJsZVJlc3BvbnNlIiwic3RvcmVSZXNwb25zZSIsImFzc2VtYmxlRmluYWxEYWxsZSIsIkRpYWxvZ3VlUGFnZSIsInN0YXRlIiwic3RhZ2UiLCJtZWRpdW0iLCJudW1TdGFnZXMiLCJxdWVyeSIsImRhbGxlSW5wdXQiLCJzdGFnZV9uYW1lcyIsInBhaW50aW5nIiwic2N1bHB0dXJlIiwicGhvdG9ncmFwaHkiLCJpbmNyZW1lbnRTdGFnZSIsImN1cnJlbnRTdGFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsImlucHV0IiwidmFsdWUiLCJzZXRTdGF0ZSIsInVzZXJJbnB1dCIsInNlbGVjdFBhaW50aW5nIiwiZSIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJmaW5pc2hBc3NlbWJsaW5nIiwicmVuZGVyIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJpZCIsInR5cGUiLCJvbkNsaWNrIiwiYnV0dG9uIiwiaHJlZiIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/dialoguePage.js\n"));

/***/ })

});