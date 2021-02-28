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

  useEffect(function () {
    setIsMobile(window.innerWidth < 767);
  }, []);

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
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "main-title",
        children: "Ssong10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: "mobile-title",
      children: mobiletitle(path.slice(-2))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
          lineNumber: 65,
          columnNumber: 11
        }, _this2);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Subject, {
        paths: path.slice(-2),
        subject: "component",
        items: _lib_FILE__WEBPACK_IMPORTED_MODULE_3__["components"],
        basePath: "/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiSXRlbSIsIml0ZW0iLCJwYXRoIiwibWF0Y2giLCJTdWJqZWN0IiwicGF0aHMiLCJzdWJqZWN0IiwiaXRlbXMiLCJiYXNlUGF0aCIsIm1hdGNoU3ViIiwibWF0Y2hJdGVtIiwibWFwIiwiaWR4IiwibW9iaWxldGl0bGUiLCJzdWIiLCJOYXYiLCJ1c2VTdGF0ZSIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic2lkZU5hdiIsInNldFNpZGVOYXYiLCJ1c2VSb3V0ZXIiLCJhc1BhdGgiLCJkZWNvZGVVUkkiLCJ0cmltIiwic3BsaXQiLCJvcGVuU2lkZU5hdiIsInNsaWNlIiwicG9zdHMiLCJwb3N0IiwiY29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUF1QjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFoQkMsSUFBZ0IsUUFBaEJBLElBQWdCO0FBQUEsTUFBWEMsS0FBVyxRQUFYQSxLQUFXO0FBQ2xDLHNCQUNFLHFFQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFRCxJQUFaO0FBQUEsMkJBRUU7QUFBSyxlQUFTLEVBQUUsZUFBZUMsS0FBSyxHQUFDLFFBQUQsR0FBVSxFQUE5QixDQUFoQjtBQUFBLDZCQUNFO0FBQUEsa0JBQU9GO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQVREOztLQUFNRCxJOztBQVdOLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLFFBQW9DO0FBQUEsTUFBbENDLEtBQWtDLFNBQWxDQSxLQUFrQztBQUFB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O0FBQU0sZUFBUyxFQUFDLGNBQWhCO0FBQUEsZ0JBQWdDVCxXQUFXLENBQUNYLElBQUksQ0FBQzRCLEtBQUwsQ0FBVyxDQUFDLENBQVosQ0FBRDtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFNRTtBQUFLLGVBQVMsRUFBRWIsUUFBUSxHQUFHLFVBQUgsR0FBZ0IsV0FBeEM7QUFBQSxpQkFDR2MsK0NBQUssQ0FBQ3BCLEdBQU4sQ0FBVSxVQUFDcUIsSUFBRCxFQUFNcEIsR0FBTjtBQUFBLDRCQUNULHFFQUFDLE9BQUQ7QUFDRSxlQUFLLEVBQUVWLElBQUksQ0FBQzRCLEtBQUwsQ0FBVyxDQUFDLENBQVosQ0FEVDtBQUdFLGlCQUFPLEVBQUVFLElBQUksQ0FBQzFCLE9BSGhCO0FBSUUsZUFBSyxFQUFFMEIsSUFBSSxDQUFDekIsS0FKZDtBQUtFLGtCQUFRLEVBQUc7QUFMYixXQUVPSyxHQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRFM7QUFBQSxPQUFWLENBREgsZUFVRSxxRUFBQyxPQUFEO0FBQ0UsYUFBSyxFQUFFVixJQUFJLENBQUM0QixLQUFMLENBQVcsQ0FBQyxDQUFaLENBRFQ7QUFFRSxlQUFPLEVBQUMsV0FGVjtBQUdFLGFBQUssRUFBRUcsb0RBSFQ7QUFJRSxnQkFBUSxFQUFHO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEJEOztHQXJDdUJsQixHO1VBTUhTLHFEOzs7TUFOR1QsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZDdjMDNlYmY0YWZkYWVkMjJhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgICBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHBvc3RzLCBjb21wb25lbnRzIH0gZnJvbSAnLi4vbGliL0ZJTEUnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU2lkZU5hdiBmcm9tICcuL3NpZGVOYXYnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmNvbnN0IEl0ZW0gPSAoe2l0ZW0scGF0aCxtYXRjaH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17cGF0aH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wibmF2LWl0ZW0gXCIgKyAobWF0Y2g/J2FjdGl2ZSc6JycpfT5cclxuICAgICAgICA8c3Bhbj57aXRlbX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgU3ViamVjdCA9ICh7cGF0aHMsc3ViamVjdCxpdGVtcyxiYXNlUGF0aH0pID0+IHtcclxuICBjb25zdCBtYXRjaFN1YiA9IHBhdGhzWzBdID09PSBzdWJqZWN0XHJcbiAgY29uc3QgbWF0Y2hJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiBwYXRoc1sxXSA9PT0gaXRlbVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtc3ViXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17bWF0Y2hTdWIgPyAnYWN0aXZlJyA6ICcnfT57c3ViamVjdH08L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1zLXdyYXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtLWxpc3RcIj5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0saWR4KSA9PiAoXHJcbiAgICAgICAgICAgIDxJdGVtXHJcbiAgICAgICAgICAgICAga2V5PXtpZHh9IHBhdGg9e2Jhc2VQYXRoK3N1YmplY3QrJy8nK2l0ZW19IGl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgICAgbWF0Y2g9e21hdGNoU3ViICYgbWF0Y2hJdGVtKGl0ZW0pfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuY29uc3QgbW9iaWxldGl0bGUgPSAocGF0aCkgPT4ge1xyXG4gIGNvbnN0IFtzdWIsaXRlbV0gPSBwYXRoXHJcbiAgaWYgKHN1YiAmJiBpdGVtKXtcclxuICAgIHJldHVybiBgWyAke3N1Yn0gXSAke2l0ZW19YFxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYFsgU3NvbmcxMCBdYFxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgc2V0SXNNb2JpbGUod2luZG93LmlubmVyV2lkdGggPCA3NjcpXHJcbiAgfSxbXSlcclxuICBjb25zdCBbc2lkZU5hdiwgc2V0U2lkZU5hdl0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwYXRoID0gZGVjb2RlVVJJKGFzUGF0aCkudHJpbSgnLycpLnNwbGl0KCcvJylcclxuICBjb25zdCBvcGVuU2lkZU5hdiA9ICgpID0+e1xyXG4gICAgc2V0U2lkZU5hdih0cnVlKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBpZD1cIm5hdlwiPlxyXG4gICAgICA8aSBvbkNsaWNrPXsoKT0+c2V0U2lkZU5hdighc2lkZU5hdil9IGNsYXNzTmFtZT1cInNpZGUtYnV0dG9uIGZhcyBmYS1iYXJzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5Tc29uZzEwPC9zcGFuPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vYmlsZS10aXRsZVwiPnttb2JpbGV0aXRsZShwYXRoLnNsaWNlKC0yLCkpfTwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2lzTW9iaWxlID8gXCJzaWRlLW5hdlwiIDogXCJuYXYtbGlua3NcIn0+XHJcbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCxpZHgpID0+IChcclxuICAgICAgICAgIDxTdWJqZWN0XHJcbiAgICAgICAgICAgIHBhdGhzPXtwYXRoLnNsaWNlKC0yLCl9XHJcbiAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICBzdWJqZWN0PXtwb3N0LnN1YmplY3R9XHJcbiAgICAgICAgICAgIGl0ZW1zPXtwb3N0Lml0ZW1zfVxyXG4gICAgICAgICAgICBiYXNlUGF0aCA9ICcvcG9zdHMvJ1xyXG4gICAgICAgICAgPjwvU3ViamVjdD5cclxuICAgICAgICApKX1cclxuICAgICAgICA8U3ViamVjdFxyXG4gICAgICAgICAgcGF0aHM9e3BhdGguc2xpY2UoLTIsKX1cclxuICAgICAgICAgIHN1YmplY3Q9J2NvbXBvbmVudCdcclxuICAgICAgICAgIGl0ZW1zPXtjb21wb25lbnRzfVxyXG4gICAgICAgICAgYmFzZVBhdGggPSAnLydcclxuICAgICAgICA+PC9TdWJqZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=