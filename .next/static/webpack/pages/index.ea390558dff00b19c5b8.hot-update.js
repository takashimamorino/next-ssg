webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var use_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-http */ \"./node_modules/use-http/dist/esm/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/user/Dev/hobby/next-ssg/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar HomePage = function HomePage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    title: \"\",\n    body: \"\"\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var _useFetch = Object(use_http__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"https://jsonplaceholder.typicode.com/posts/1\"),\n      get = _useFetch.get,\n      loading = _useFetch.loading,\n      error = _useFetch.error;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    fetch();\n  }, []);\n\n  var fetch = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return get();\n\n            case 2:\n              res = _context.sent;\n              setState(res);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetch() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, error && __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, \"Error\"), loading && __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 19\n    }\n  }, \"Loading\"), __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, state.title), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, state.body));\n};\n\n_s(HomePage, \"fU4mUX5hyqU1fYpcDWbjJcfdtzw=\", false, function () {\n  return [use_http__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsInRpdGxlIiwiYm9keSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VGZXRjaCIsImdldCIsImxvYWRpbmciLCJlcnJvciIsInVzZUVmZmVjdCIsImZldGNoIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDO0FBQUVDLFNBQUssRUFBRSxFQUFUO0FBQWFDLFFBQUksRUFBRTtBQUFuQixHQUFELENBRGI7QUFBQSxNQUNkQyxLQURjO0FBQUEsTUFDUEMsUUFETzs7QUFBQSxrQkFFV0Msd0RBQVEsQ0FDdEMsOENBRHNDLENBRm5CO0FBQUEsTUFFYkMsR0FGYSxhQUViQSxHQUZhO0FBQUEsTUFFUkMsT0FGUSxhQUVSQSxPQUZRO0FBQUEsTUFFQ0MsS0FGRCxhQUVDQSxLQUZEOztBQU1yQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFNBQUs7QUFDTixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1BLEtBQUs7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNNSixHQUFHLEVBRFQ7O0FBQUE7QUFDTkssaUJBRE07QUFFWlAsc0JBQVEsQ0FBQ08sR0FBRCxDQUFSOztBQUZZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUxELEtBQUs7QUFBQTtBQUFBO0FBQUEsS0FBWDs7QUFLQSxTQUNFLG1FQUNHRixLQUFLLElBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURaLEVBRUdELE9BQU8sSUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRmQsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtKLEtBQUssQ0FBQ0YsS0FBWCxDQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRSxLQUFLLENBQUNELElBQVYsQ0FMRixDQURGO0FBU0QsQ0F4QkQ7O0dBQU1ILFE7VUFFNEJNLGdEOzs7S0FGNUJOLFE7O0FBZ0NTQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB1c2VGZXRjaCBmcm9tIFwidXNlLWh0dHBcIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoeyB0aXRsZTogXCJcIiwgYm9keTogXCJcIiB9KTtcbiAgY29uc3QgeyBnZXQsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VGZXRjaChcbiAgICBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8xXCJcbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBmZXRjaCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBnZXQoKTtcbiAgICBzZXRTdGF0ZShyZXMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtlcnJvciAmJiA8aDI+RXJyb3I8L2gyPn1cbiAgICAgIHtsb2FkaW5nICYmIDxoMj5Mb2FkaW5nPC9oMj59XG5cbiAgICAgIDxoMj57c3RhdGUudGl0bGV9PC9oMj5cbiAgICAgIDxwPntzdGF0ZS5ib2R5fTwvcD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHt9XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})