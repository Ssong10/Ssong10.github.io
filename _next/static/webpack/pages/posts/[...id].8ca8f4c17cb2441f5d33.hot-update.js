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

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      asPath = _useRouter.asPath;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      sideNav = _useState[0],
      setSideNav = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setSideNav(false);
  }, [asPath]);
  var path = decodeURI(asPath).trim('/').split('/');

  var toggleSideNav = function toggleSideNav() {
    setSideNav(!sideNav);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("header", {
    id: "nav",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      onClick: toggleSideNav,
      className: "side-button",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("svg", {
        viewBox: "0 0 100 80",
        width: "20",
        height: "20",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("rect", {
          width: "100",
          height: "18"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("rect", {
          y: "35",
          width: "100",
          height: "18"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("rect", {
          y: "70",
          width: "100",
          height: "18"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
      onClick: toggleSideNav,
      className: "side-button fas fa-bars",
      "aria-hidden": "true"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "main-title",
        children: "Ssong10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: "mobile-title",
      children: mobiletitle(path.slice(-2))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: sideNav ? 'nav-links show' : "nav-links",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "nav-sub mobile-home",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "Ssong10"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), _lib_FILE__WEBPACK_IMPORTED_MODULE_3__["posts"].map(function (post, idx) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Subject, {
          paths: path.slice(-2),
          subject: post.subject,
          items: post.items,
          basePath: "/posts/"
        }, idx, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this2);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Subject, {
        paths: path.slice(-2),
        subject: "component",
        items: _lib_FILE__WEBPACK_IMPORTED_MODULE_3__["components"],
        basePath: "/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

_s(Nav, "HhCQLiNbkbSd0J6xFbfCzv7XuxY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiSXRlbSIsIml0ZW0iLCJwYXRoIiwibWF0Y2giLCJTdWJqZWN0IiwicGF0aHMiLCJzdWJqZWN0IiwiaXRlbXMiLCJiYXNlUGF0aCIsIm1hdGNoU3ViIiwibWF0Y2hJdGVtIiwibWFwIiwiaWR4IiwibW9iaWxldGl0bGUiLCJzdWIiLCJOYXYiLCJ1c2VSb3V0ZXIiLCJhc1BhdGgiLCJ1c2VTdGF0ZSIsInNpZGVOYXYiLCJzZXRTaWRlTmF2IiwidXNlRWZmZWN0IiwiZGVjb2RlVVJJIiwidHJpbSIsInNwbGl0IiwidG9nZ2xlU2lkZU5hdiIsInNsaWNlIiwicG9zdHMiLCJwb3N0IiwiY29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUF1QjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFoQkMsSUFBZ0IsUUFBaEJBLElBQWdCO0FBQUEsTUFBWEMsS0FBVyxRQUFYQSxLQUFXO0FBQ2xDLHNCQUNFLHFFQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFRCxJQUFaO0FBQUEsMkJBRUU7QUFBSyxlQUFTLEVBQUUsZUFBZUMsS0FBSyxHQUFDLFFBQUQsR0FBVSxFQUE5QixDQUFoQjtBQUFBLDZCQUNFO0FBQUEsa0JBQU9GO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVREOztLQUFNRCxJOztBQVdOLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLFFBQW9DO0FBQUEsTUFBbENDLEtBQWtDLFNBQWxDQSxLQUFrQztBQUFBLE1BQTVCQyxPQUE0QixTQUE1QkEsT0FBNEI7QUFBQSxNQUFwQkMsS0FBb0IsU0FBcEJB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O0FBQ0UsYUFBSyxFQUFFVixJQUFJLENBQUN3QixLQUFMLENBQVcsQ0FBQyxDQUFaLENBRFQ7QUFFRSxlQUFPLEVBQUMsV0FGVjtBQUdFLGFBQUssRUFBRUcsb0RBSFQ7QUFJRSxnQkFBUSxFQUFHO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0NEOztHQWhEdUJkLEc7VUFDSEMscUQ7OztNQURHRCxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1suLi5pZF0uOGNhOGY0YzE3Y2IyNDQxZjVkMzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rICAgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBwb3N0cywgY29tcG9uZW50cyB9IGZyb20gJy4uL2xpYi9GSUxFJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBJdGVtID0gKHtpdGVtLHBhdGgsbWF0Y2h9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e3BhdGh9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdi1pdGVtIFwiICsgKG1hdGNoPydhY3RpdmUnOicnKX0+XHJcbiAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGluaz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFN1YmplY3QgPSAoe3BhdGhzLHN1YmplY3QsaXRlbXMsYmFzZVBhdGh9KSA9PiB7XHJcbiAgY29uc3QgbWF0Y2hTdWIgPSBwYXRoc1swXSA9PT0gc3ViamVjdFxyXG4gIGNvbnN0IG1hdGNoSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gcGF0aHNbMV0gPT09IGl0ZW1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXN1YlwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e21hdGNoU3ViID8gJ2FjdGl2ZScgOiAnJ30+e3N1YmplY3R9PC9zcGFuPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtcy13cmFwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbS1saXN0XCI+XHJcbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLGlkeCkgPT4gKFxyXG4gICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgIGtleT17aWR4fSBwYXRoPXtiYXNlUGF0aCtzdWJqZWN0KycvJytpdGVtfSBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICAgIG1hdGNoPXttYXRjaFN1YiAmIG1hdGNoSXRlbShpdGVtKX0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmNvbnN0IG1vYmlsZXRpdGxlID0gKHBhdGgpID0+IHtcclxuICBjb25zdCBbc3ViLGl0ZW1dID0gcGF0aFxyXG4gIGlmIChzdWIgJiYgaXRlbSl7XHJcbiAgICByZXR1cm4gYFsgJHtzdWJ9IF0gJHtpdGVtfWBcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGBbIFNzb25nMTAgXWBcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xyXG4gIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc2lkZU5hdiwgc2V0U2lkZU5hdl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIHNldFNpZGVOYXYoZmFsc2UpXHJcbiAgfSxbYXNQYXRoXSlcclxuICBjb25zdCBwYXRoID0gZGVjb2RlVVJJKGFzUGF0aCkudHJpbSgnLycpLnNwbGl0KCcvJylcclxuICBjb25zdCB0b2dnbGVTaWRlTmF2ID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZU5hdighc2lkZU5hdilcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgaWQ9XCJuYXZcIj5cclxuICAgICAgPGRpdiBvbkNsaWNrPXt0b2dnbGVTaWRlTmF2fSBjbGFzc05hbWU9XCJzaWRlLWJ1dHRvblwiID5cclxuICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTAwIDgwXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCI+XHJcbiAgICAgICAgICA8cmVjdCB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjE4XCI+PC9yZWN0PlxyXG4gICAgICAgICAgPHJlY3QgeT1cIjM1XCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxOFwiPjwvcmVjdD5cclxuICAgICAgICAgIDxyZWN0IHk9XCI3MFwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMThcIj48L3JlY3Q+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aSBvbkNsaWNrPXt0b2dnbGVTaWRlTmF2fSBjbGFzc05hbWU9XCJzaWRlLWJ1dHRvbiBmYXMgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+U3NvbmcxMDwvc3Bhbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb2JpbGUtdGl0bGVcIj57bW9iaWxldGl0bGUocGF0aC5zbGljZSgtMiwpKX08L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaWRlTmF2ID8gJ25hdi1saW5rcyBzaG93JyA6IFwibmF2LWxpbmtzXCJ9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtc3ViIG1vYmlsZS1ob21lXCI+XHJcbiAgICAgICAgICA8c3Bhbj5Tc29uZzEwPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7cG9zdHMubWFwKChwb3N0LGlkeCkgPT4gKFxyXG4gICAgICAgICAgPFN1YmplY3RcclxuICAgICAgICAgICAgcGF0aHM9e3BhdGguc2xpY2UoLTIsKX1cclxuICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgIHN1YmplY3Q9e3Bvc3Quc3ViamVjdH1cclxuICAgICAgICAgICAgaXRlbXM9e3Bvc3QuaXRlbXN9XHJcbiAgICAgICAgICAgIGJhc2VQYXRoID0gJy9wb3N0cy8nXHJcbiAgICAgICAgICA+PC9TdWJqZWN0PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxTdWJqZWN0XHJcbiAgICAgICAgICBwYXRocz17cGF0aC5zbGljZSgtMiwpfVxyXG4gICAgICAgICAgc3ViamVjdD0nY29tcG9uZW50J1xyXG4gICAgICAgICAgaXRlbXM9e2NvbXBvbmVudHN9XHJcbiAgICAgICAgICBiYXNlUGF0aCA9ICcvJ1xyXG4gICAgICAgID48L1N1YmplY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==