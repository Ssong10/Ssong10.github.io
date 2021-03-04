webpackHotUpdate_N_E("pages/component/[id]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiSXRlbSIsIml0ZW0iLCJwYXRoIiwibWF0Y2giLCJTdWJqZWN0IiwicGF0aHMiLCJzdWJqZWN0IiwiaXRlbXMiLCJiYXNlUGF0aCIsIm1hdGNoU3ViIiwibWF0Y2hJdGVtIiwibWFwIiwiaWR4IiwibW9iaWxldGl0bGUiLCJzdWIiLCJOYXYiLCJ1c2VSb3V0ZXIiLCJhc1BhdGgiLCJ1c2VTdGF0ZSIsInNpZGVOYXYiLCJzZXRTaWRlTmF2IiwidXNlRWZmZWN0IiwiZGVjb2RlVVJJIiwidHJpbSIsInNwbGl0IiwidG9nZ2xlU2lkZU5hdiIsInNsaWNlIiwicG9zdHMiLCJwb3N0IiwiY29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUF1QjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFoQkMsSUFBZ0IsUUFBaEJBLElBQWdCO0FBQUEsTUFBWEMsS0FBVyxRQUFYQSxLQUFXO0FBQ2xDLHNCQUNFLHFFQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFRCxJQUFaO0FBQUEsMkJBRUU7QUFBSyxlQUFTLEVBQUUsZUFBZUMsS0FBSyxHQUFDLFFBQUQsR0FBVSxFQUE5QixDQUFoQjtBQUFBLDZCQUNFO0FBQUEsa0JBQU9GO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVREOztLQUFNRCxJOztBQVdOLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLFFBQW9DO0FBQUEsTUFBbENDLEtBQWtDLFNBQWxDQSxLQUFrQztBQUFBLE1BQTVCQyxPQUE0QixTQUE1QkEsT0FBNEI7QUFBQSxNQUFwQkMsS0FBb0IsU0FBcEJB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O0FBQ0UsYUFBSyxFQUFFVixJQUFJLENBQUN3QixLQUFMLENBQVcsQ0FBQyxDQUFaLENBRFQ7QUFFRSxlQUFPLEVBQUMsV0FGVjtBQUdFLGFBQUssRUFBRUcsb0RBSFQ7QUFJRSxnQkFBUSxFQUFHO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0NEOztHQWhEdUJkLEc7VUFDSEMscUQ7OztNQURHRCxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbXBvbmVudC9baWRdLjhjYThmNGMxN2NiMjQ0MWY1ZDMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayAgIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgcG9zdHMsIGNvbXBvbmVudHMgfSBmcm9tICcuLi9saWIvRklMRSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgSXRlbSA9ICh7aXRlbSxwYXRoLG1hdGNofSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtwYXRofVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJuYXYtaXRlbSBcIiArIChtYXRjaD8nYWN0aXZlJzonJyl9PlxyXG4gICAgICAgIDxzcGFuPntpdGVtfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xpbms+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBTdWJqZWN0ID0gKHtwYXRocyxzdWJqZWN0LGl0ZW1zLGJhc2VQYXRofSkgPT4ge1xyXG4gIGNvbnN0IG1hdGNoU3ViID0gcGF0aHNbMF0gPT09IHN1YmplY3RcclxuICBjb25zdCBtYXRjaEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIHBhdGhzWzFdID09PSBpdGVtXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1zdWJcIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXttYXRjaFN1YiA/ICdhY3RpdmUnIDogJyd9PntzdWJqZWN0fTwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbXMtd3JhcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW0tbGlzdFwiPlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSxpZHgpID0+IChcclxuICAgICAgICAgICAgPEl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2lkeH0gcGF0aD17YmFzZVBhdGgrc3ViamVjdCsnLycraXRlbX0gaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICBtYXRjaD17bWF0Y2hTdWIgJiBtYXRjaEl0ZW0oaXRlbSl9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5jb25zdCBtb2JpbGV0aXRsZSA9IChwYXRoKSA9PiB7XHJcbiAgY29uc3QgW3N1YixpdGVtXSA9IHBhdGhcclxuICBpZiAoc3ViICYmIGl0ZW0pe1xyXG4gICAgcmV0dXJuIGBbICR7c3VifSBdICR7aXRlbX1gXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBgWyBTc29uZzEwIF1gXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpIHtcclxuICBjb25zdCB7IGFzUGF0aCB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3NpZGVOYXYsIHNldFNpZGVOYXZdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBzZXRTaWRlTmF2KGZhbHNlKVxyXG4gIH0sW2FzUGF0aF0pXHJcbiAgY29uc3QgcGF0aCA9IGRlY29kZVVSSShhc1BhdGgpLnRyaW0oJy8nKS5zcGxpdCgnLycpXHJcbiAgY29uc3QgdG9nZ2xlU2lkZU5hdiA9ICgpID0+IHtcclxuICAgIHNldFNpZGVOYXYoIXNpZGVOYXYpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGlkPVwibmF2XCI+XHJcbiAgICAgIDxkaXYgb25DbGljaz17dG9nZ2xlU2lkZU5hdn0gY2xhc3NOYW1lPVwic2lkZS1idXR0b25cIiA+XHJcbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMCA4MFwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiPlxyXG4gICAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxOFwiPjwvcmVjdD5cclxuICAgICAgICAgIDxyZWN0IHk9XCIzNVwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMThcIj48L3JlY3Q+XHJcbiAgICAgICAgICA8cmVjdCB5PVwiNzBcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjE4XCI+PC9yZWN0PlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGkgb25DbGljaz17dG9nZ2xlU2lkZU5hdn0gY2xhc3NOYW1lPVwic2lkZS1idXR0b24gZmFzIGZhLWJhcnNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPlNzb25nMTA8L3NwYW4+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9iaWxlLXRpdGxlXCI+e21vYmlsZXRpdGxlKHBhdGguc2xpY2UoLTIsKSl9PC9zcGFuPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c2lkZU5hdiA/ICduYXYtbGlua3Mgc2hvdycgOiBcIm5hdi1saW5rc1wifT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXN1YiBtb2JpbGUtaG9tZVwiPlxyXG4gICAgICAgICAgPHNwYW4+U3NvbmcxMDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCxpZHgpID0+IChcclxuICAgICAgICAgIDxTdWJqZWN0XHJcbiAgICAgICAgICAgIHBhdGhzPXtwYXRoLnNsaWNlKC0yLCl9XHJcbiAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICBzdWJqZWN0PXtwb3N0LnN1YmplY3R9XHJcbiAgICAgICAgICAgIGl0ZW1zPXtwb3N0Lml0ZW1zfVxyXG4gICAgICAgICAgICBiYXNlUGF0aCA9ICcvcG9zdHMvJ1xyXG4gICAgICAgICAgPjwvU3ViamVjdD5cclxuICAgICAgICApKX1cclxuICAgICAgICA8U3ViamVjdFxyXG4gICAgICAgICAgcGF0aHM9e3BhdGguc2xpY2UoLTIsKX1cclxuICAgICAgICAgIHN1YmplY3Q9J2NvbXBvbmVudCdcclxuICAgICAgICAgIGl0ZW1zPXtjb21wb25lbnRzfVxyXG4gICAgICAgICAgYmFzZVBhdGggPSAnLydcclxuICAgICAgICA+PC9TdWJqZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=