/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./modules/authentication/state/authSlice.ts":
/*!***************************************************!*\
  !*** ./modules/authentication/state/authSlice.ts ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setUser: () => (/* binding */ setUser)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// modules/authentication/state/authSlice.ts\n\nconst initialState = {\n    user: null\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        setUser (state, action) {\n            state.user = action.payload;\n        }\n    }\n});\nconst { setUser } = authSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL2F1dGhlbnRpY2F0aW9uL3N0YXRlL2F1dGhTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw0Q0FBNEM7QUFDa0I7QUFZOUQsTUFBTUMsZUFBMEI7SUFDOUJDLE1BQU07QUFDUjtBQUVBLE1BQU1DLFlBQVlILDZEQUFXQSxDQUFDO0lBQzVCSSxNQUFNO0lBQ05IO0lBQ0FJLFVBQVU7UUFDUkMsU0FBUUMsS0FBSyxFQUFFQyxNQUFrQztZQUMvQ0QsTUFBTUwsSUFBSSxHQUFHTSxPQUFPQyxPQUFPO1FBQzdCO0lBQ0Y7QUFDRjtBQUVPLE1BQU0sRUFBRUgsT0FBTyxFQUFFLEdBQUdILFVBQVVPLE9BQU8sQ0FBQztBQUU3QyxpRUFBZVAsVUFBVVEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9hdXRoZW50aWNhdGlvbi9zdGF0ZS9hdXRoU2xpY2UudHM/MDZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb2R1bGVzL2F1dGhlbnRpY2F0aW9uL3N0YXRlL2F1dGhTbGljZS50c1xuaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuaW50ZXJmYWNlIFVzZXIge1xuICAgIHVpZDogc3RyaW5nOyBcbiAgICBkaXNwbGF5TmFtZT86IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nOyBcbiAgfVxuXG5pbnRlcmZhY2UgQXV0aFN0YXRlIHtcbiAgdXNlcjogVXNlciB8IG51bGw7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogQXV0aFN0YXRlID0ge1xuICB1c2VyOiBudWxsLFxufTtcblxuY29uc3QgYXV0aFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnYXV0aCcsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRVc2VyKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248VXNlciB8IG51bGw+KSB7XG4gICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBzZXRVc2VyIH0gPSBhdXRoU2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgYXV0aFNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiYXV0aFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0VXNlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/authentication/state/authSlice.ts\n");

/***/ }),

/***/ "./modules/authentication/state/store.ts":
/*!***********************************************!*\
  !*** ./modules/authentication/state/store.ts ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _authSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authSlice */ \"./modules/authentication/state/authSlice.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _authSlice__WEBPACK_IMPORTED_MODULE_1__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _authSlice__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// modules/authentication/state/store.ts\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        auth: _authSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL2F1dGhlbnRpY2F0aW9uL3N0YXRlL3N0b3JlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHdDQUF3QztBQUNVO0FBQ1o7QUFFdEMsTUFBTUUsUUFBUUYsZ0VBQWNBLENBQUM7SUFDM0JHLFNBQVM7UUFDUEMsTUFBTUgsa0RBQVdBO0lBQ25CO0FBQ0Y7QUFLQSxpRUFBZUMsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZHVsZXMvYXV0aGVudGljYXRpb24vc3RhdGUvc3RvcmUudHM/ZDc0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb2R1bGVzL2F1dGhlbnRpY2F0aW9uL3N0YXRlL3N0b3JlLnRzXG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IGF1dGhSZWR1Y2VyIGZyb20gJy4vYXV0aFNsaWNlJztcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHtcbiAgICBhdXRoOiBhdXRoUmVkdWNlcixcbiAgfSxcbn0pO1xuXG4vLyBEZWZpbmUgUm9vdFN0YXRlXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT47XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiYXV0aFJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/authentication/state/store.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fontsource_inter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fontsource/inter */ \"./node_modules/@fontsource/inter/index.css\");\n/* harmony import */ var _fontsource_inter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontsource_inter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _modules_authentication_state_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/authentication/state/store */ \"./modules/authentication/state/store.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_3__, _modules_authentication_state_store__WEBPACK_IMPORTED_MODULE_4__]);\n([react_redux__WEBPACK_IMPORTED_MODULE_3__, _modules_authentication_state_store__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n // Import Provider\n // Import tvoj Redux store\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _modules_authentication_state_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        children: [\n            \"  \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/lorena/repos/Car-configurator/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/lorena/repos/Car-configurator/pages/_app.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0o7QUFFWSxDQUFFLGtCQUFrQjtBQUNELENBQUUsMEJBQTBCO0FBRXRGLFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MscUJBQ0UsOERBQUNKLGlEQUFRQTtRQUFDQyxPQUFPQSwyRUFBS0E7O1lBQUU7MEJBQ3RCLDhEQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnOyBcbmltcG9ydCAnQGZvbnRzb3VyY2UvaW50ZXInO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJzsgXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JzsgIC8vIEltcG9ydCBQcm92aWRlclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL21vZHVsZXMvYXV0aGVudGljYXRpb24vc3RhdGUvc3RvcmUnOyAgLy8gSW1wb3J0IHR2b2ogUmVkdXggc3RvcmVcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PiAgey8qIE9tb3RhaiBzIFByb3ZpZGVyICovfVxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7IFxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsgXG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJzdG9yZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@fontsource"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();