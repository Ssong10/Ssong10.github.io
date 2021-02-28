webpackHotUpdate_N_E("pages/index",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var C_Users_ssong10_Desktop_nextjs_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_FILE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/FILE */ "./lib/FILE.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sideNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sideNav */ "./components/sideNav.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\ssong10\\Desktop\\nextjs-blog\\components\\nav.js",
    _this = undefined,
    _s = $RefreshSig$();







var Item = function Item(_ref) {
  var item = _ref.item,
      path = _ref.path,
      match = _ref.match;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: path,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "nav-item " + (match ? 'active' : ''),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: item
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = Item;

var Subject = function Subject(_ref2) {
  var paths = _ref2.paths,
      subject = _ref2.subject,
      items = _ref2.items,
      basePath = _ref2.basePath;
  var matchSub = paths[0] === subject;

  var matchItem = function matchItem(item) {
    return paths[1] === item;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "nav-sub",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: matchSub ? 'active' : '',
      children: subject
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "nav-items-wrap",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "nav-item-list",
        children: items.map(function (item, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Item, {
            path: basePath + subject + '/' + item,
            item: item,
            match: matchSub & matchItem(item)
          }, idx, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_c2 = Subject;

var mobiletitle = function mobiletitle(path) {
  var _path = Object(C_Users_ssong10_Desktop_nextjs_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(path, 2),
      sub = _path[0],
      item = _path[1];

  if (sub && item) {
    return "[ ".concat(sub, " ] ").concat(item);
  } else {
    return "[ Ssong10 ]";
  }
};

function Nav() {
  _s();

  var _this2 = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true),
      isMobile = _useState[0],
      setIsMobile = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true),
      sideNav = _useState2[0],
      setSideNav = _useState2[1];

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      asPath = _useRouter.asPath;

  var path = decodeURI(asPath).trim('/').split('/');

  var openSideNav = function openSideNav() {
    setSideNav(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("header", {
    id: "nav",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
      onClick: function onClick() {
        return setSideNav(!sideNav);
      },
      className: "side-button fas fa-bars",
      "aria-hidden": "true"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "main-title",
        children: "Ssong10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: "mobile-title",
      children: mobiletitle(path.slice(-2))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: isMobile ? "side-nav" : "nav-links",
      children: [_lib_FILE__WEBPACK_IMPORTED_MODULE_3__["posts"].map(function (post, idx) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Subject, {
          paths: path.slice(-2),
          subject: post.subject,
          items: post.items,
          basePath: "/posts/"
        }, idx, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this2);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Subject, {
        paths: path.slice(-2),
        subject: "component",
        items: _lib_FILE__WEBPACK_IMPORTED_MODULE_3__["components"],
        basePath: "/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

_s(Nav, "k3PgRLNi00C03vG8NuAtZtqj+s4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c3 = Nav;

var _c, _c2, _c3;

$RefreshReg$(_c, "Item");
$RefreshReg$(_c2, "Subject");
$RefreshReg$(_c3, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiSXRlbSIsIml0ZW0iLCJwYXRoIiwibWF0Y2giLCJTdWJqZWN0IiwicGF0aHMiLCJzdWJqZWN0IiwiaXRlbXMiLCJiYXNlUGF0aCIsIm1hdGNoU3ViIiwibWF0Y2hJdGVtIiwibWFwIiwiaWR4IiwibW9iaWxldGl0bGUiLCJzdWIiLCJOYXYiLCJ1c2VTdGF0ZSIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJzaWRlTmF2Iiwic2V0U2lkZU5hdiIsInVzZVJvdXRlciIsImFzUGF0aCIsImRlY29kZVVSSSIsInRyaW0iLCJzcGxpdCIsIm9wZW5TaWRlTmF2Iiwic2xpY2UiLCJwb3N0cyIsInBvc3QiLCJjb21wb25lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXVCO0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQWhCQyxJQUFnQixRQUFoQkEsSUFBZ0I7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFDbEMsc0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVELElBQVo7QUFBQSwyQkFFRTtBQUFLLGVBQVMsRUFBRSxlQUFlQyxLQUFLLEdBQUMsUUFBRCxHQUFVLEVBQTlCLENBQWhCO0FBQUEsNkJBQ0U7QUFBQSxrQkFBT0Y7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBVEQ7O0tBQU1ELEk7O0FBV04sSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsUUFBb0M7QUFBQSxNQUFsQ0MsS0FBa0MsU0FBbENBLEtBQWtDO0FBQUEsTUFBNUJDLE9BQTRCLFNBQTVCQSxPQUE0QjtBQUFBLE1B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VixRQUFRLEdBQUcsVUFBSCxHQUFnQixXQUF4QztBQUFBLGlCQUNHVywrQ0FBSyxDQUFDakIsR0FBTixDQUFVLFVBQUNrQixJQUFELEVBQU1qQixHQUFOO0FBQUEsNEJBQ1QscUVBQUMsT0FBRDtBQUNFLGVBQUssRUFBRVYsSUFBSSxDQUFDeUIsS0FBTCxDQUFXLENBQUMsQ0FBWixDQURUO0FBR0UsaUJBQU8sRUFBRUUsSUFBSSxDQUFDdkIsT0FIaEI7QUFJRSxlQUFLLEVBQUV1QixJQUFJLENBQUN0QixLQUpkO0FBS0Usa0JBQVEsRUFBRztBQUxiLFdBRU9LLEdBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEUztBQUFBLE9BQVYsQ0FESCxlQVVFLHFFQUFDLE9BQUQ7QUFDRSxhQUFLLEVBQUVWLElBQUksQ0FBQ3lCLEtBQUwsQ0FBVyxDQUFDLENBQVosQ0FEVDtBQUVFLGVBQU8sRUFBQyxXQUZWO0FBR0UsYUFBSyxFQUFFRyxvREFIVDtBQUlFLGdCQUFRLEVBQUc7QUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwQkQ7O0dBbEN1QmYsRztVQUdITSxxRDs7O01BSEdOLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzQ3YTZhNjg3N2E4MDFiZjAwZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rICAgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBwb3N0cywgY29tcG9uZW50cyB9IGZyb20gJy4uL2xpYi9GSUxFJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFNpZGVOYXYgZnJvbSAnLi9zaWRlTmF2J1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5jb25zdCBJdGVtID0gKHtpdGVtLHBhdGgsbWF0Y2h9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e3BhdGh9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdi1pdGVtIFwiICsgKG1hdGNoPydhY3RpdmUnOicnKX0+XHJcbiAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGluaz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFN1YmplY3QgPSAoe3BhdGhzLHN1YmplY3QsaXRlbXMsYmFzZVBhdGh9KSA9PiB7XHJcbiAgY29uc3QgbWF0Y2hTdWIgPSBwYXRoc1swXSA9PT0gc3ViamVjdFxyXG4gIGNvbnN0IG1hdGNoSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gcGF0aHNbMV0gPT09IGl0ZW1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXN1YlwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e21hdGNoU3ViID8gJ2FjdGl2ZScgOiAnJ30+e3N1YmplY3R9PC9zcGFuPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtcy13cmFwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbS1saXN0XCI+XHJcbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLGlkeCkgPT4gKFxyXG4gICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgIGtleT17aWR4fSBwYXRoPXtiYXNlUGF0aCtzdWJqZWN0KycvJytpdGVtfSBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICAgIG1hdGNoPXttYXRjaFN1YiAmIG1hdGNoSXRlbShpdGVtKX0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmNvbnN0IG1vYmlsZXRpdGxlID0gKHBhdGgpID0+IHtcclxuICBjb25zdCBbc3ViLGl0ZW1dID0gcGF0aFxyXG4gIGlmIChzdWIgJiYgaXRlbSl7XHJcbiAgICByZXR1cm4gYFsgJHtzdWJ9IF0gJHtpdGVtfWBcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGBbIFNzb25nMTAgXWBcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xyXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbc2lkZU5hdiwgc2V0U2lkZU5hdl0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwYXRoID0gZGVjb2RlVVJJKGFzUGF0aCkudHJpbSgnLycpLnNwbGl0KCcvJylcclxuICBjb25zdCBvcGVuU2lkZU5hdiA9ICgpID0+e1xyXG4gICAgc2V0U2lkZU5hdih0cnVlKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBpZD1cIm5hdlwiPlxyXG4gICAgICA8aSBvbkNsaWNrPXsoKT0+c2V0U2lkZU5hdighc2lkZU5hdil9IGNsYXNzTmFtZT1cInNpZGUtYnV0dG9uIGZhcyBmYS1iYXJzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5Tc29uZzEwPC9zcGFuPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vYmlsZS10aXRsZVwiPnttb2JpbGV0aXRsZShwYXRoLnNsaWNlKC0yLCkpfTwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2lzTW9iaWxlID8gXCJzaWRlLW5hdlwiIDogXCJuYXYtbGlua3NcIn0+XHJcbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCxpZHgpID0+IChcclxuICAgICAgICAgIDxTdWJqZWN0XHJcbiAgICAgICAgICAgIHBhdGhzPXtwYXRoLnNsaWNlKC0yLCl9XHJcbiAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICBzdWJqZWN0PXtwb3N0LnN1YmplY3R9XHJcbiAgICAgICAgICAgIGl0ZW1zPXtwb3N0Lml0ZW1zfVxyXG4gICAgICAgICAgICBiYXNlUGF0aCA9ICcvcG9zdHMvJ1xyXG4gICAgICAgICAgPjwvU3ViamVjdD5cclxuICAgICAgICApKX1cclxuICAgICAgICA8U3ViamVjdFxyXG4gICAgICAgICAgcGF0aHM9e3BhdGguc2xpY2UoLTIsKX1cclxuICAgICAgICAgIHN1YmplY3Q9J2NvbXBvbmVudCdcclxuICAgICAgICAgIGl0ZW1zPXtjb21wb25lbnRzfVxyXG4gICAgICAgICAgYmFzZVBhdGggPSAnLydcclxuICAgICAgICA+PC9TdWJqZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=