"use strict";
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
exports.id = "pages/auth/signup";
exports.ids = ["pages/auth/signup"];
exports.modules = {

/***/ "./pages/auth/signup.js":
/*!******************************!*\
  !*** ./pages/auth/signup.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst SignUp = ()=>{\n    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/users/signup\", {\n            name,\n            email,\n            password\n        });\n        console.log(res.data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sign-up\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ANSELEM-ODIMEGWU\\\\Documents\\\\tickster\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"name\",\n                        placeholder: \"Name\",\n                        onChange: (e)=>setName(e.target.value),\n                        value: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANSELEM-ODIMEGWU\\\\Documents\\\\tickster\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        name: \"email\",\n                        placeholder: \"Email\",\n                        onChange: (e)=>setEmail(e.target.value),\n                        value: email\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANSELEM-ODIMEGWU\\\\Documents\\\\tickster\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        name: \"password\",\n                        placeholder: \"Password\",\n                        onChange: (e)=>setPassword(e.target.value),\n                        value: password\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANSELEM-ODIMEGWU\\\\Documents\\\\tickster\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ANSELEM-ODIMEGWU\\\\Documents\\\\tickster\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ANSELEM-ODIMEGWU\\\\Documents\\\\tickster\\\\client\\\\pages\\\\auth\\\\signup.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ANSELEM-ODIMEGWU\\\\Documents\\\\tickster\\\\client\\\\pages\\\\auth\\\\signup.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ251cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNSO0FBQ3pCLE1BQU1FLE1BQU0sR0FBRyxJQUFNO0lBQ25CLE1BQU0sS0FBQ0MsSUFBSSxNQUFFQyxPQUFPLE1BQUlKLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3BDLE1BQU0sS0FBQ0ssS0FBSyxNQUFFQyxRQUFRLE1BQUlOLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3RDLE1BQU0sS0FBQ08sUUFBUSxNQUFFQyxXQUFXLE1BQUlSLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRTVDLE1BQU1TLFlBQVksR0FBRyxPQUFPQyxDQUFDLEdBQUs7UUFDaENBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkIsTUFBTUMsR0FBRyxHQUFHLE1BQU1YLGtEQUFVLENBQUMsbUJBQW1CLEVBQUU7WUFDOUNFLElBQUk7WUFDSkUsS0FBSztZQUNMRSxRQUFRO1NBQ1gsQ0FBQztRQUNGTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFNBQVM7OzBCQUN0Qiw4REFBQ0MsSUFBRTswQkFBQyxTQUFPOzs7Ozt5QkFBSzswQkFDaEIsOERBQUNDLE1BQUk7Z0JBQUNDLFFBQVEsRUFBRVosWUFBWTs7a0NBQzFCLDhEQUFDYSxPQUFLO3dCQUNKQyxJQUFJLEVBQUMsTUFBTTt3QkFDWHBCLElBQUksRUFBQyxNQUFNO3dCQUNYcUIsV0FBVyxFQUFDLE1BQU07d0JBQ2xCQyxRQUFRLEVBQUUsQ0FBQ2YsQ0FBQyxHQUFLTixPQUFPLENBQUNNLENBQUMsQ0FBQ2dCLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO3dCQUN4Q0EsS0FBSyxFQUFFeEIsSUFBSTs7Ozs7aUNBQ1g7a0NBQ0YsOERBQUNtQixPQUFLO3dCQUNKQyxJQUFJLEVBQUMsT0FBTzt3QkFDWnBCLElBQUksRUFBQyxPQUFPO3dCQUNacUIsV0FBVyxFQUFDLE9BQU87d0JBQ25CQyxRQUFRLEVBQUUsQ0FBQ2YsQ0FBQyxHQUFLSixRQUFRLENBQUNJLENBQUMsQ0FBQ2dCLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO3dCQUN6Q0EsS0FBSyxFQUFFdEIsS0FBSzs7Ozs7aUNBQ1o7a0NBQ0YsOERBQUNpQixPQUFLO3dCQUNKQyxJQUFJLEVBQUMsVUFBVTt3QkFDZnBCLElBQUksRUFBQyxVQUFVO3dCQUNmcUIsV0FBVyxFQUFDLFVBQVU7d0JBQ3RCQyxRQUFRLEVBQUUsQ0FBQ2YsQ0FBQyxHQUFLRixXQUFXLENBQUNFLENBQUMsQ0FBQ2dCLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO3dCQUM1Q0EsS0FBSyxFQUFFcEIsUUFBUTs7Ozs7aUNBQ2Y7a0NBQ0YsOERBQUNxQixRQUFNO2tDQUFDLFNBQU87Ozs7O2lDQUFTOzs7Ozs7eUJBQ25COzs7Ozs7aUJBQ0gsQ0FDTjtBQUNKLENBQUM7QUFFRCxpRUFBZTFCLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2F1dGgvc2lnbnVwLmpzPzU2ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuY29uc3QgU2lnblVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvdXNlcnMvc2lnbnVwJywge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24tdXBcIj5cclxuICAgICAgPGgyPlNpZ24gVXA8L2gyPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbj5TaWduIFVwPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduVXA7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiU2lnblVwIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signup.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signup.js"));
module.exports = __webpack_exports__;

})();