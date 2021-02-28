webpackHotUpdate_N_E("pages/posts/[...id]",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);



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
        lineNumber: 10,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
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
      lineNumber: 23,
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
            lineNumber: 27,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      isMobile = _useState[0],
      setIsMobile = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setIsMobile(window.innerWidth < 767);
  }, []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      sideNav = _useState2[0],
      setSideNav = _useState2[1];

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      asPath = _useRouter.asPath;

  var path = decodeURI(asPath).trim('/').split('/');

  var toggleSideNav = function toggleSideNav() {
    setSideNav(!sideNav);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("header", {
    id: "nav",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
      onClick: toggleSideNav,
      className: "side-button fas fa-bars",
      "aria-hidden": "true"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "main-title",
        children: "Ssong10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: "mobile-title",
      children: mobiletitle(path.slice(-2))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
          lineNumber: 64,
          columnNumber: 11
        }, _this2);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Subject, {
        paths: path.slice(-2),
        subject: "component",
        items: _lib_FILE__WEBPACK_IMPORTED_MODULE_3__["components"],
        basePath: "/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

_s(Nav, "mqRe159W5OmDnseRmYY5Mi/mJIA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiSXRlbSIsIml0ZW0iLCJwYXRoIiwibWF0Y2giLCJTdWJqZWN0IiwicGF0aHMiLCJzdWJqZWN0IiwiaXRlbXMiLCJiYXNlUGF0aCIsIm1hdGNoU3ViIiwibWF0Y2hJdGVtIiwibWFwIiwiaWR4IiwibW9iaWxldGl0bGUiLCJzdWIiLCJOYXYiLCJ1c2VTdGF0ZSIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic2lkZU5hdiIsInNldFNpZGVOYXYiLCJ1c2VSb3V0ZXIiLCJhc1BhdGgiLCJkZWNvZGVVUkkiLCJ0cmltIiwic3BsaXQiLCJ0b2dnbGVTaWRlTmF2Iiwic2xpY2UiLCJwb3N0cyIsInBvc3QiLCJjb21wb25lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXVCO0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQWhCQyxJQUFnQixRQUFoQkEsSUFBZ0I7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFDbEMsc0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVELElBQVo7QUFBQSwyQkFFRTtBQUFLLGVBQVMsRUFBRSxlQUFlQyxLQUFLLEdBQUMsUUFBRCxHQUFVLEVBQTlCLENBQWhCO0FBQUEsNkJBQ0U7QUFBQSxrQkFBT0Y7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBVEQ7O0tBQU1ELEk7O0FBV04sSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsUUFBb0M7QUFBQSxNQUFsQ0MsS0FBa0MsU0FBbENBLEtBQWtDO0FBQUEsTUFB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V0FBVyxDQUFDWCxJQUFJLENBQUM0QixLQUFMLENBQVcsQ0FBQyxDQUFaLENBQUQ7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUU7QUFBSyxlQUFTLEVBQUViLFFBQVEsR0FBRyxVQUFILEdBQWdCLFdBQXhDO0FBQUEsaUJBQ0djLCtDQUFLLENBQUNwQixHQUFOLENBQVUsVUFBQ3FCLElBQUQsRUFBTXBCLEdBQU47QUFBQSw0QkFDVCxxRUFBQyxPQUFEO0FBQ0UsZUFBSyxFQUFFVixJQUFJLENBQUM0QixLQUFMLENBQVcsQ0FBQyxDQUFaLENBRFQ7QUFHRSxpQkFBTyxFQUFFRSxJQUFJLENBQUMxQixPQUhoQjtBQUlFLGVBQUssRUFBRTBCLElBQUksQ0FBQ3pCLEtBSmQ7QUFLRSxrQkFBUSxFQUFHO0FBTGIsV0FFT0ssR0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURTO0FBQUEsT0FBVixDQURILGVBVUUscUVBQUMsT0FBRDtBQUNFLGFBQUssRUFBRVYsSUFBSSxDQUFDNEIsS0FBTCxDQUFXLENBQUMsQ0FBWixDQURUO0FBRUUsZUFBTyxFQUFDLFdBRlY7QUFHRSxhQUFLLEVBQUVHLG9EQUhUO0FBSUUsZ0JBQVEsRUFBRztBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBCRDs7R0FyQ3VCbEIsRztVQU1IUyxxRDs7O01BTkdULEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvWy4uLmlkXS5kOWMxOWIwMWIwYWRkN2I5Zjk2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgICBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHBvc3RzLCBjb21wb25lbnRzIH0gZnJvbSAnLi4vbGliL0ZJTEUnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcclxuY29uc3QgSXRlbSA9ICh7aXRlbSxwYXRoLG1hdGNofSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtwYXRofVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJuYXYtaXRlbSBcIiArIChtYXRjaD8nYWN0aXZlJzonJyl9PlxyXG4gICAgICAgIDxzcGFuPntpdGVtfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xpbms+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBTdWJqZWN0ID0gKHtwYXRocyxzdWJqZWN0LGl0ZW1zLGJhc2VQYXRofSkgPT4ge1xyXG4gIGNvbnN0IG1hdGNoU3ViID0gcGF0aHNbMF0gPT09IHN1YmplY3RcclxuICBjb25zdCBtYXRjaEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIHBhdGhzWzFdID09PSBpdGVtXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1zdWJcIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXttYXRjaFN1YiA/ICdhY3RpdmUnIDogJyd9PntzdWJqZWN0fTwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbXMtd3JhcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW0tbGlzdFwiPlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSxpZHgpID0+IChcclxuICAgICAgICAgICAgPEl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2lkeH0gcGF0aD17YmFzZVBhdGgrc3ViamVjdCsnLycraXRlbX0gaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICBtYXRjaD17bWF0Y2hTdWIgJiBtYXRjaEl0ZW0oaXRlbSl9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5jb25zdCBtb2JpbGV0aXRsZSA9IChwYXRoKSA9PiB7XHJcbiAgY29uc3QgW3N1YixpdGVtXSA9IHBhdGhcclxuICBpZiAoc3ViICYmIGl0ZW0pe1xyXG4gICAgcmV0dXJuIGBbICR7c3VifSBdICR7aXRlbX1gXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBgWyBTc29uZzEwIF1gXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpIHtcclxuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBzZXRJc01vYmlsZSh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2NylcclxuICB9LFtdKVxyXG4gIGNvbnN0IFtzaWRlTmF2LCBzZXRTaWRlTmF2XSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHBhdGggPSBkZWNvZGVVUkkoYXNQYXRoKS50cmltKCcvJykuc3BsaXQoJy8nKVxyXG4gIGNvbnN0IHRvZ2dsZVNpZGVOYXYgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlTmF2KCFzaWRlTmF2KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBpZD1cIm5hdlwiPlxyXG4gICAgICA8aSBvbkNsaWNrPXt0b2dnbGVTaWRlTmF2fSBjbGFzc05hbWU9XCJzaWRlLWJ1dHRvbiBmYXMgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+U3NvbmcxMDwvc3Bhbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb2JpbGUtdGl0bGVcIj57bW9iaWxldGl0bGUocGF0aC5zbGljZSgtMiwpKX08L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc01vYmlsZSA/IFwic2lkZS1uYXZcIiA6IFwibmF2LWxpbmtzXCJ9PlxyXG4gICAgICAgIHtwb3N0cy5tYXAoKHBvc3QsaWR4KSA9PiAoXHJcbiAgICAgICAgICA8U3ViamVjdFxyXG4gICAgICAgICAgICBwYXRocz17cGF0aC5zbGljZSgtMiwpfVxyXG4gICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgc3ViamVjdD17cG9zdC5zdWJqZWN0fVxyXG4gICAgICAgICAgICBpdGVtcz17cG9zdC5pdGVtc31cclxuICAgICAgICAgICAgYmFzZVBhdGggPSAnL3Bvc3RzLydcclxuICAgICAgICAgID48L1N1YmplY3Q+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPFN1YmplY3RcclxuICAgICAgICAgIHBhdGhzPXtwYXRoLnNsaWNlKC0yLCl9XHJcbiAgICAgICAgICBzdWJqZWN0PSdjb21wb25lbnQnXHJcbiAgICAgICAgICBpdGVtcz17Y29tcG9uZW50c31cclxuICAgICAgICAgIGJhc2VQYXRoID0gJy8nXHJcbiAgICAgICAgPjwvU3ViamVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9