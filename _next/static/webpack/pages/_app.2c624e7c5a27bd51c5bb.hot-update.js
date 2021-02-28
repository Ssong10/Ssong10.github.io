webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/nav.css":
/*!****************************!*\
  !*** ./components/nav.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./nav.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/nav.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./nav.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/nav.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-6-2!./nav.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/nav.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/nav.css":
/*!****************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./components/nav.css ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\r\n#nav {\r\nz-index:1000;\r\nposition :fixed;\r\ntop : 0;\r\nleft : 0;\r\nright : 0;\r\nbackground-color:#fefcfe;\r\nborder-bottom: 1px solid #eaeaea;\r\nheight : var(--navHeight);\r\npadding : 0.6rem 1rem;\r\n}\r\n#nav .show {display:block}\r\n.main-title {display:inline-block;font-weight:700;font-size:1.4rem;cursor : pointer;  line-height : 2.4rem;}\r\n.nav-links{display:inline-block;position:absolute;right:5vw;}\r\n.nav-sub{display:inline-block;line-height:2.4rem;position:relative;margin-left:3vw;cursor:pointer;text-align:left}\r\n.nav-sub:hover .nav-item-list {display:block}\r\n.nav-sub>span {padding:1vw}\r\n.nav-item-list {display:none;position: absolute;line-height:2.2rem;width:200px;right:0;min-height:auto;border:1px solid #eaeaea;background-color:#fefcfe;padding:0.3rem}\r\n.nav-item{display:inline-block;width:100%;padding:0rem 0.5rem;}\r\n.mobile-title {\r\ndisplay:none;\r\nfont-weight:600;\r\nfont-size:1.1rem;\r\nline-height : 2.4rem;\r\nfloat:right;\r\n}\r\n", "",{"version":3,"sources":["webpack://components/nav.css"],"names":[],"mappings":";AACA;AACA,YAAY;AACZ,eAAe;AACf,OAAO;AACP,QAAQ;AACR,SAAS;AACT,wBAAwB;AACxB,gCAAgC;AAChC,yBAAyB;AACzB,qBAAqB;AACrB;AACA,YAAY,aAAa;AACzB,aAAa,oBAAoB,CAAC,eAAe,CAAC,gBAAgB,CAAC,gBAAgB,GAAG,oBAAoB,CAAC;AAC3G,WAAW,oBAAoB,CAAC,iBAAiB,CAAC,SAAS,CAAC;AAC5D,SAAS,oBAAoB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,eAAe,CAAC,cAAc,CAAC,eAAe;AACjH,+BAA+B,aAAa;AAC5C,eAAe,WAAW;AAC1B,gBAAgB,YAAY,CAAC,kBAAkB,CAAC,kBAAkB,CAAC,WAAW,CAAC,OAAO,CAAC,eAAe,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,cAAc;AACvK,UAAU,oBAAoB,CAAC,UAAU,CAAC,mBAAmB,CAAC;AAC9D;AACA,YAAY;AACZ,eAAe;AACf,gBAAgB;AAChB,oBAAoB;AACpB,WAAW;AACX","sourcesContent":["\r\n#nav {\r\nz-index:1000;\r\nposition :fixed;\r\ntop : 0;\r\nleft : 0;\r\nright : 0;\r\nbackground-color:#fefcfe;\r\nborder-bottom: 1px solid #eaeaea;\r\nheight : var(--navHeight);\r\npadding : 0.6rem 1rem;\r\n}\r\n#nav .show {display:block}\r\n.main-title {display:inline-block;font-weight:700;font-size:1.4rem;cursor : pointer;  line-height : 2.4rem;}\r\n.nav-links{display:inline-block;position:absolute;right:5vw;}\r\n.nav-sub{display:inline-block;line-height:2.4rem;position:relative;margin-left:3vw;cursor:pointer;text-align:left}\r\n.nav-sub:hover .nav-item-list {display:block}\r\n.nav-sub>span {padding:1vw}\r\n.nav-item-list {display:none;position: absolute;line-height:2.2rem;width:200px;right:0;min-height:auto;border:1px solid #eaeaea;background-color:#fefcfe;padding:0.3rem}\r\n.nav-item{display:inline-block;width:100%;padding:0rem 0.5rem;}\r\n.mobile-title {\r\ndisplay:none;\r\nfont-weight:600;\r\nfont-size:1.1rem;\r\nline-height : 2.4rem;\r\nfloat:right;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var C_Users_ssong10_Desktop_nextjs_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_markdown_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/markdown.css */ "./components/markdown.css");
/* harmony import */ var _components_markdown_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_markdown_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_nav_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav.css */ "./components/nav.css");
/* harmony import */ var _components_nav_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_nav_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\ssong10\\Desktop\\nextjs-blog\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_ssong10_Desktop_nextjs_blog_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
_c = MyApp;

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuY3NzPzFhZTYiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2LmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsVUFBVSxtQkFBTyxDQUFDLG1OQUF3RztBQUMxSCwwQkFBMEIsbUJBQU8sQ0FBQyx3U0FBK0o7O0FBRWpNOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUE7QUFDQSxNQUFNLHdTQUErSjtBQUNySztBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHdTQUErSjs7QUFFekw7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQUE7QUFBQTtBQUFBO0FBQytGO0FBQy9GLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxhQUFhLGlCQUFpQixvQkFBb0IsWUFBWSxhQUFhLGNBQWMsNkJBQTZCLHFDQUFxQyw4QkFBOEIsMEJBQTBCLEtBQUssZ0JBQWdCLGNBQWMsaUJBQWlCLHFCQUFxQixnQkFBZ0IsaUJBQWlCLGlCQUFpQix3QkFBd0IsZUFBZSxxQkFBcUIsa0JBQWtCLFdBQVcsYUFBYSxxQkFBcUIsbUJBQW1CLGtCQUFrQixnQkFBZ0IsZUFBZSxnQkFBZ0IsbUNBQW1DLGNBQWMsbUJBQW1CLFlBQVksb0JBQW9CLGFBQWEsbUJBQW1CLG1CQUFtQixZQUFZLFFBQVEsZ0JBQWdCLHlCQUF5Qix5QkFBeUIsZUFBZSxjQUFjLHFCQUFxQixXQUFXLHFCQUFxQixtQkFBbUIsaUJBQWlCLG9CQUFvQixxQkFBcUIseUJBQXlCLGdCQUFnQixLQUFLLFdBQVcsK0VBQStFLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxlQUFlLHFFQUFxRSw2Q0FBNkMsd0VBQXdFLGtCQUFrQixnQkFBZ0IsMEdBQTBHLDZDQUE2QyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxtQ0FBbUMsaUJBQWlCLG9CQUFvQixZQUFZLGFBQWEsY0FBYyw2QkFBNkIscUNBQXFDLDhCQUE4QiwwQkFBMEIsS0FBSyxnQkFBZ0IsY0FBYyxpQkFBaUIscUJBQXFCLGdCQUFnQixpQkFBaUIsaUJBQWlCLHdCQUF3QixlQUFlLHFCQUFxQixrQkFBa0IsV0FBVyxhQUFhLHFCQUFxQixtQkFBbUIsa0JBQWtCLGdCQUFnQixlQUFlLGdCQUFnQixtQ0FBbUMsY0FBYyxtQkFBbUIsWUFBWSxvQkFBb0IsYUFBYSxtQkFBbUIsbUJBQW1CLFlBQVksUUFBUSxnQkFBZ0IseUJBQXlCLHlCQUF5QixlQUFlLGNBQWMscUJBQXFCLFdBQVcscUJBQXFCLG1CQUFtQixpQkFBaUIsb0JBQW9CLHFCQUFxQix5QkFBeUIsZ0JBQWdCLEtBQUssdUJBQXVCO0FBQzVvRjtBQUNlLHNGQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdkM7QUFDQTtBQUNlLFNBQVNBLEtBQVQsT0FBeUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3RELHNCQUNFLHFFQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBSUQ7S0FMdUJGLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yYzYyNGU3YzVhMjdiZDUxYzViYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTIhLi9uYXYuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi02LTIhLi9uYXYuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtNi0yIS4vbmF2LmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4jbmF2IHtcXHJcXG56LWluZGV4OjEwMDA7XFxyXFxucG9zaXRpb24gOmZpeGVkO1xcclxcbnRvcCA6IDA7XFxyXFxubGVmdCA6IDA7XFxyXFxucmlnaHQgOiAwO1xcclxcbmJhY2tncm91bmQtY29sb3I6I2ZlZmNmZTtcXHJcXG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcXHJcXG5oZWlnaHQgOiB2YXIoLS1uYXZIZWlnaHQpO1xcclxcbnBhZGRpbmcgOiAwLjZyZW0gMXJlbTtcXHJcXG59XFxyXFxuI25hdiAuc2hvdyB7ZGlzcGxheTpibG9ja31cXHJcXG4ubWFpbi10aXRsZSB7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxLjRyZW07Y3Vyc29yIDogcG9pbnRlcjsgIGxpbmUtaGVpZ2h0IDogMi40cmVtO31cXHJcXG4ubmF2LWxpbmtze2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjV2dzt9XFxyXFxuLm5hdi1zdWJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bGluZS1oZWlnaHQ6Mi40cmVtO3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbi1sZWZ0OjN2dztjdXJzb3I6cG9pbnRlcjt0ZXh0LWFsaWduOmxlZnR9XFxyXFxuLm5hdi1zdWI6aG92ZXIgLm5hdi1pdGVtLWxpc3Qge2Rpc3BsYXk6YmxvY2t9XFxyXFxuLm5hdi1zdWI+c3BhbiB7cGFkZGluZzoxdnd9XFxyXFxuLm5hdi1pdGVtLWxpc3Qge2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjogYWJzb2x1dGU7bGluZS1oZWlnaHQ6Mi4ycmVtO3dpZHRoOjIwMHB4O3JpZ2h0OjA7bWluLWhlaWdodDphdXRvO2JvcmRlcjoxcHggc29saWQgI2VhZWFlYTtiYWNrZ3JvdW5kLWNvbG9yOiNmZWZjZmU7cGFkZGluZzowLjNyZW19XFxyXFxuLm5hdi1pdGVte2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEwMCU7cGFkZGluZzowcmVtIDAuNXJlbTt9XFxyXFxuLm1vYmlsZS10aXRsZSB7XFxyXFxuZGlzcGxheTpub25lO1xcclxcbmZvbnQtd2VpZ2h0OjYwMDtcXHJcXG5mb250LXNpemU6MS4xcmVtO1xcclxcbmxpbmUtaGVpZ2h0IDogMi40cmVtO1xcclxcbmZsb2F0OnJpZ2h0O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9uYXYuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtBQUNBLFlBQVk7QUFDWixlQUFlO0FBQ2YsT0FBTztBQUNQLFFBQVE7QUFDUixTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCLGdDQUFnQztBQUNoQyx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCLGFBQWEsb0JBQW9CLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDO0FBQzNHLFdBQVcsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDO0FBQzVELFNBQVMsb0JBQW9CLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxlQUFlO0FBQ2pILCtCQUErQixhQUFhO0FBQzVDLGVBQWUsV0FBVztBQUMxQixnQkFBZ0IsWUFBWSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLGNBQWM7QUFDdkssVUFBVSxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7QUFDOUQ7QUFDQSxZQUFZO0FBQ1osZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixvQkFBb0I7QUFDcEIsV0FBVztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbiNuYXYge1xcclxcbnotaW5kZXg6MTAwMDtcXHJcXG5wb3NpdGlvbiA6Zml4ZWQ7XFxyXFxudG9wIDogMDtcXHJcXG5sZWZ0IDogMDtcXHJcXG5yaWdodCA6IDA7XFxyXFxuYmFja2dyb3VuZC1jb2xvcjojZmVmY2ZlO1xcclxcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xcclxcbmhlaWdodCA6IHZhcigtLW5hdkhlaWdodCk7XFxyXFxucGFkZGluZyA6IDAuNnJlbSAxcmVtO1xcclxcbn1cXHJcXG4jbmF2IC5zaG93IHtkaXNwbGF5OmJsb2NrfVxcclxcbi5tYWluLXRpdGxlIHtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjEuNHJlbTtjdXJzb3IgOiBwb2ludGVyOyAgbGluZS1oZWlnaHQgOiAyLjRyZW07fVxcclxcbi5uYXYtbGlua3N7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6NXZ3O31cXHJcXG4ubmF2LXN1YntkaXNwbGF5OmlubGluZS1ibG9jaztsaW5lLWhlaWdodDoyLjRyZW07cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLWxlZnQ6M3Z3O2N1cnNvcjpwb2ludGVyO3RleHQtYWxpZ246bGVmdH1cXHJcXG4ubmF2LXN1Yjpob3ZlciAubmF2LWl0ZW0tbGlzdCB7ZGlzcGxheTpibG9ja31cXHJcXG4ubmF2LXN1Yj5zcGFuIHtwYWRkaW5nOjF2d31cXHJcXG4ubmF2LWl0ZW0tbGlzdCB7ZGlzcGxheTpub25lO3Bvc2l0aW9uOiBhYnNvbHV0ZTtsaW5lLWhlaWdodDoyLjJyZW07d2lkdGg6MjAwcHg7cmlnaHQ6MDttaW4taGVpZ2h0OmF1dG87Ym9yZGVyOjFweCBzb2xpZCAjZWFlYWVhO2JhY2tncm91bmQtY29sb3I6I2ZlZmNmZTtwYWRkaW5nOjAuM3JlbX1cXHJcXG4ubmF2LWl0ZW17ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTAwJTtwYWRkaW5nOjByZW0gMC41cmVtO31cXHJcXG4ubW9iaWxlLXRpdGxlIHtcXHJcXG5kaXNwbGF5Om5vbmU7XFxyXFxuZm9udC13ZWlnaHQ6NjAwO1xcclxcbmZvbnQtc2l6ZToxLjFyZW07XFxyXFxubGluZS1oZWlnaHQgOiAyLjRyZW07XFxyXFxuZmxvYXQ6cmlnaHQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgJy4uL2NvbXBvbmVudHMvbWFya2Rvd24uY3NzJ1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvbmF2LmNzcydcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30+XHJcbiAgICA8L0NvbXBvbmVudD5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9