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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_FILE__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/FILE */ "./lib/FILE.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sideNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sideNav */ "./components/sideNav.js");



var _jsxFileName = "C:\\Users\\ssong10\\Desktop\\nextjs-blog\\components\\nav.js",
    _this = undefined,
    _s = $RefreshSig$();







var Item = function Item(_ref) {
  var item = _ref.item,
      path = _ref.path,
      match = _ref.match;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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

  var _useEffect = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(true),
      _useEffect2 = Object(C_Users_ssong10_Desktop_nextjs_blog_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useEffect, 2),
      sideNav = _useEffect2[0],
      setSideNav = _useEffect2[1];

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(),
      asPath = _useRouter.asPath;

  var path = decodeURI(asPath).trim('/').split('/');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("header", {
    id: "nav",
    className: "jsx-2577858544",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
      onClick: setSideNav(!sideNav),
      "aria-hidden": "true",
      className: "jsx-2577858544" + " " + "side-button fas fa-bars"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "jsx-2577858544" + " " + "main-title",
        children: "Ssong10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: "jsx-2577858544" + " " + "mobile-title",
      children: mobiletitle(path.slice(-2))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), sideNav ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_sideNav__WEBPACK_IMPORTED_MODULE_6__["default"], {
      path: path
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 18
    }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "jsx-2577858544" + " " + "nav-links",
      children: [_lib_FILE__WEBPACK_IMPORTED_MODULE_4__["posts"].map(function (post, idx) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Subject, {
          paths: path.slice(-2),
          subject: post.subject,
          items: post.items,
          basePath: "/posts/"
        }, idx, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this2);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Subject, {
        paths: path.slice(-2),
        subject: "component",
        items: _lib_FILE__WEBPACK_IMPORTED_MODULE_4__["components"],
        basePath: "/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "2577858544",
      children: "#nav{z-index:1000;position :-webkit-sticky;position :sticky;top :0;left :0;right :0;background-color:#fefcfe;border-bottom:1px solid #eaeaea;height :var(--navHeight);padding :0.6rem 1rem;}#nav .show{display:block;}.main-title{display:inline-block;font-weight:700;font-size:1.4rem;cursor :pointer;line-height :2.4rem;}.nav-links{display:inline-block;position:absolute;right:5vw;}.nav-sub{display:inline-block;line-height:2.4rem;position:relative;margin-left:3vw;cursor:pointer;text-align:left;}.nav-sub:hover .nav-item-list{display:block;}.nav-sub>span{padding:1vw;}.nav-items-wrap{padding-top:20px;}.nav-item-list{display:none;position:absolute;line-height:2.2rem;width:200px;right:-5px;top:85%;min-height:auto;border:1px solid #eaeaea;background-color:#fefcfe;padding:0.3rem;}.nav-item{padding:0rem 0.5rem;-webkit-transition:0.3s;transition:0.3s;}.nav-item:hover{background-color :rgba(135,64,33,0.1);}.active{color:#2f9aea;}.nav-item-list:after,.nav-item-list:before{content:'';position:absolute;width:0;height:0;top:-20px;border-style:solid;}#nav .side-button{display:none;line-height:2.4rem;font-size:1.6rem;cursor:pointer;}.mobile-title{display:none;font-weight:600;font-size:1.1rem;line-height :2.4rem;float:right;}.nav-item-list:after{left:170px;border-color:transparent transparent white transparent;border-width:10px;}.nav-item-list:before{left:169px;top:-21px;border-color:transparent transparent gray transparent;border-width:11px;z-index:-1;}@media screen and (max-width:767px){.mobile-title{display :inline-block;}.nav-links,.main-title{display:none;}#nav .side-button{display:inline-block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3NvbmcxMFxcRGVza3RvcFxcbmV4dGpzLWJsb2dcXGNvbXBvbmVudHNcXG5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RVMsQUFHeUIsQUFVUyxBQUNTLEFBQ0YsQUFDRixBQUNjLEFBQ2xCLEFBQ1EsQUFDTCxBQUVOLEFBSW1CLEFBRWxCLEFBR1QsQUFRQyxBQU1BLEFBT0QsQUFLQSxBQVFhLEFBR1YsQUFHUSxXQXZDSixBQXFCcUMsQUFLOUMsQ0F4Q2MsQ0FkUCxBQWdCMkIsQUFvQnpCLEFBTUgsQUF1QmYsQ0F4RHNCLEFBSW1CLEFBV3BCLEdBVFUsR0FLbEMsQ0FWZ0QsQUFDQSxBQUNELEFBMkNVLEFBYXRELENBTkEsT0FqQ08sQUFjUyxFQTNCNkMsQ0FxQjdDLEtBM0I2QyxBQW9CckQsQ0FQVixDQVp3RCxDQUNPLE1BbUJuRCxBQWFVLEdBakNtQyxBQTJCeEMsQ0F0QnlELElBTkssQ0FUdEUsQ0ErQlksRUFwQnlELEVBUTlFLEVBbEJVLEFBYzBFLEVBdUJwRixFQU1hLEFBS08sSUEvQ1QsQUFPMEYsR0FNVixDQUpDLENBcUI1RixBQXVCb0IsR0FWcEIsQ0ExQzBCLEVBWWdGLEdBbUMxRyxLQXZDMEcsQ0FGSixHQWdEdkcsSUExQ21JLE9BWGhHLEFBcURsQyxDQTlDMkcsaUJBSStDLGNBVi9ILFdBVTRJLGNBVGhKLENBU2lKLG9CQVJ4SyIsImZpbGUiOiJDOlxcVXNlcnNcXHNzb25nMTBcXERlc2t0b3BcXG5leHRqcy1ibG9nXFxjb21wb25lbnRzXFxuYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayAgIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgcG9zdHMsIGNvbXBvbmVudHMgfSBmcm9tICcuLi9saWIvRklMRSdcclxuaW1wb3J0IHsgdXNlUm91dGVyLHVzZUVmZmVjdCB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU2lkZU5hdiBmcm9tICcuL3NpZGVOYXYnXHJcbmNvbnN0IEl0ZW0gPSAoe2l0ZW0scGF0aCxtYXRjaH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17cGF0aH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wibmF2LWl0ZW0gXCIgKyAobWF0Y2g/J2FjdGl2ZSc6JycpfT5cclxuICAgICAgICA8c3Bhbj57aXRlbX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgU3ViamVjdCA9ICh7cGF0aHMsc3ViamVjdCxpdGVtcyxiYXNlUGF0aH0pID0+IHtcclxuICBjb25zdCBtYXRjaFN1YiA9IHBhdGhzWzBdID09PSBzdWJqZWN0XHJcbiAgY29uc3QgbWF0Y2hJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiBwYXRoc1sxXSA9PT0gaXRlbVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtc3ViXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17bWF0Y2hTdWIgPyAnYWN0aXZlJyA6ICcnfT57c3ViamVjdH08L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1zLXdyYXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtLWxpc3RcIj5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0saWR4KSA9PiAoXHJcbiAgICAgICAgICAgIDxJdGVtXHJcbiAgICAgICAgICAgICAga2V5PXtpZHh9IHBhdGg9e2Jhc2VQYXRoK3N1YmplY3QrJy8nK2l0ZW19IGl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgICAgbWF0Y2g9e21hdGNoU3ViICYgbWF0Y2hJdGVtKGl0ZW0pfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuY29uc3QgbW9iaWxldGl0bGUgPSAocGF0aCkgPT4ge1xyXG4gIGNvbnN0IFtzdWIsaXRlbV0gPSBwYXRoXHJcbiAgaWYgKHN1YiAmJiBpdGVtKXtcclxuICAgIHJldHVybiBgWyAke3N1Yn0gXSAke2l0ZW19YFxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYFsgU3NvbmcxMCBdYFxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XHJcbiAgY29uc3QgW3NpZGVOYXYsIHNldFNpZGVOYXZdID0gdXNlRWZmZWN0KHRydWUpXHJcbiAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHBhdGggPSBkZWNvZGVVUkkoYXNQYXRoKS50cmltKCcvJykuc3BsaXQoJy8nKVxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGlkPVwibmF2XCI+XHJcbiAgICAgIDxpIG9uQ2xpY2s9e3NldFNpZGVOYXYoIXNpZGVOYXYpfSBjbGFzc05hbWU9XCJzaWRlLWJ1dHRvbiBmYXMgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+U3NvbmcxMDwvc3Bhbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb2JpbGUtdGl0bGVcIj57bW9iaWxldGl0bGUocGF0aC5zbGljZSgtMiwpKX08L3NwYW4+XHJcbiAgICAgIHtzaWRlTmF2ID8gPFNpZGVOYXYgcGF0aD17cGF0aH0+PC9TaWRlTmF2PiA6ICcnfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiPlxyXG4gICAgICAgIHtwb3N0cy5tYXAoKHBvc3QsaWR4KSA9PiAoXHJcbiAgICAgICAgICA8U3ViamVjdFxyXG4gICAgICAgICAgICBwYXRocz17cGF0aC5zbGljZSgtMiwpfVxyXG4gICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgc3ViamVjdD17cG9zdC5zdWJqZWN0fVxyXG4gICAgICAgICAgICBpdGVtcz17cG9zdC5pdGVtc31cclxuICAgICAgICAgICAgYmFzZVBhdGggPSAnL3Bvc3RzLydcclxuICAgICAgICAgID48L1N1YmplY3Q+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPFN1YmplY3RcclxuICAgICAgICAgIHBhdGhzPXtwYXRoLnNsaWNlKC0yLCl9XHJcbiAgICAgICAgICBzdWJqZWN0PSdjb21wb25lbnQnXHJcbiAgICAgICAgICBpdGVtcz17Y29tcG9uZW50c31cclxuICAgICAgICAgIGJhc2VQYXRoID0gJy8nXHJcbiAgICAgICAgPjwvU3ViamVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAjbmF2IHtcclxuICAgICAgICAgICAgei1pbmRleDoxMDAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA6c3RpY2t5O1xyXG4gICAgICAgICAgICB0b3AgOiAwO1xyXG4gICAgICAgICAgICBsZWZ0IDogMDtcclxuICAgICAgICAgICAgcmlnaHQgOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZWZjZmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgICBoZWlnaHQgOiB2YXIoLS1uYXZIZWlnaHQpO1xyXG4gICAgICAgICAgICBwYWRkaW5nIDogMC42cmVtIDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjbmF2IC5zaG93IHtkaXNwbGF5OmJsb2NrfVxyXG4gICAgICAgICAgLm1haW4tdGl0bGUge2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6MS40cmVtO2N1cnNvciA6IHBvaW50ZXI7ICBsaW5lLWhlaWdodCA6IDIuNHJlbTt9XHJcbiAgICAgICAgICAubmF2LWxpbmtze2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjV2dzt9XHJcbiAgICAgICAgICAubmF2LXN1YntkaXNwbGF5OmlubGluZS1ibG9jaztsaW5lLWhlaWdodDoyLjRyZW07cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLWxlZnQ6M3Z3O2N1cnNvcjpwb2ludGVyO3RleHQtYWxpZ246bGVmdH1cclxuICAgICAgICAgIC5uYXYtc3ViOmhvdmVyIC5uYXYtaXRlbS1saXN0IHtkaXNwbGF5OmJsb2NrfVxyXG4gICAgICAgICAgLm5hdi1zdWI+c3BhbiB7cGFkZGluZzoxdnd9XHJcbiAgICAgICAgICAubmF2LWl0ZW1zLXdyYXAgeyBwYWRkaW5nLXRvcDoyMHB4fVxyXG4gICAgICAgICAgLm5hdi1pdGVtLWxpc3Qge2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjogYWJzb2x1dGU7bGluZS1oZWlnaHQ6Mi4ycmVtO3dpZHRoOjIwMHB4O3JpZ2h0Oi01cHg7dG9wOjg1JTttaW4taGVpZ2h0OmF1dG87Ym9yZGVyOjFweCBzb2xpZCAjZWFlYWVhO2JhY2tncm91bmQtY29sb3I6I2ZlZmNmZTtwYWRkaW5nOjAuM3JlbX1cclxuICAgICAgICAgIC5uYXYtaXRlbXtcclxuICAgICAgICAgICAgcGFkZGluZzowcmVtIDAuNXJlbTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hdi1pdGVtOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6IHJnYmEoMTM1LDY0LDMzLDAuMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0aXZlIHtjb2xvcjogIzJmOWFlYTt9XHJcbiAgICAgICAgICAubmF2LWl0ZW0tbGlzdDphZnRlcixcclxuICAgICAgICAgIC5uYXYtaXRlbS1saXN0OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOjA7XHJcbiAgICAgICAgICAgIGhlaWdodDowO1xyXG4gICAgICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI25hdiAuc2lkZS1idXR0b24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjIuNHJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEuNnJlbTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1vYmlsZS10aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MS4xcmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodCA6IDIuNHJlbTtcclxuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmF2LWl0ZW0tbGlzdDphZnRlciB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE3MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHdoaXRlIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmF2LWl0ZW0tbGlzdDpiZWZvcmUge1xyXG4gICAgICAgICAgICBsZWZ0OiAxNjlweDtcclxuICAgICAgICAgICAgdG9wOi0yMXB4O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IGdyYXkgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMTFweDtcclxuICAgICAgICAgICAgei1pbmRleDotMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgLm1vYmlsZS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheSA6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2LWxpbmtzLCAubWFpbi10aXRsZSB7IFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbmF2IC5zaWRlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKVxyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\ssong10\\\\Desktop\\\\nextjs-blog\\\\components\\\\nav.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

_s(Nav, "Jyyg46+3iZpRTMLJeCbRpZo1CYc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiSXRlbSIsIml0ZW0iLCJwYXRoIiwibWF0Y2giLCJTdWJqZWN0IiwicGF0aHMiLCJzdWJqZWN0IiwiaXRlbXMiLCJiYXNlUGF0aCIsIm1hdGNoU3ViIiwibWF0Y2hJdGVtIiwibWFwIiwiaWR4IiwibW9iaWxldGl0bGUiLCJzdWIiLCJOYXYiLCJ1c2VFZmZlY3QiLCJzaWRlTmF2Iiwic2V0U2lkZU5hdiIsInVzZVJvdXRlciIsImFzUGF0aCIsImRlY29kZVVSSSIsInRyaW0iLCJzcGxpdCIsInNsaWNlIiwicG9zdHMiLCJwb3N0IiwiY29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXVCO0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQWhCQyxJQUFnQixRQUFoQkEsSUFBZ0I7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFDbEMsc0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVELElBQVo7QUFBQSwyQkFFRTtBQUFLLGVBQVMsRUFBRSxlQUFlQyxLQUFLLEdBQUMsUUFBRCxHQUFVLEVBQTlCLENBQWhCO0FBQUEsNkJBQ0U7QUFBQSxrQkFBT0Y7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBVEQ7O0tBQU1ELEk7O0FBV04sSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsUUFBb0M7QUFBQSxNQUFsQ0MsS0FBa0MsU0FBbENBLEtBQWtDO0FBQUEsTUFBNUJDLE9BQTRCLFNBQTVCQSxPQUE0QjtBQUFBLE1BQXBCQyxLQUFvQixTQUFwQkEsS0FBb0I7QUFBQSxNQUFkQyxRQUFjLFNB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QUFDLENBQVosQ0FEVDtBQUdFLGlCQUFPLEVBQUVFLElBQUksQ0FBQ3BCLE9BSGhCO0FBSUUsZUFBSyxFQUFFb0IsSUFBSSxDQUFDbkIsS0FKZDtBQUtFLGtCQUFRLEVBQUc7QUFMYixXQUVPSyxHQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRFM7QUFBQSxPQUFWLENBREgsZUFVRSxxRUFBQyxPQUFEO0FBQ0UsYUFBSyxFQUFFVixJQUFJLENBQUNzQixLQUFMLENBQVcsQ0FBQyxDQUFaLENBRFQ7QUFFRSxlQUFPLEVBQUMsV0FGVjtBQUdFLGFBQUssRUFBRUcsb0RBSFQ7QUFJRSxnQkFBUSxFQUFHO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUdEOztHQTNHdUJaLEc7VUFFSEkscUQ7OztNQUZHSixHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc0MThkYjk1MzlmN2U2ODc1ZWMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayAgIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgcG9zdHMsIGNvbXBvbmVudHMgfSBmcm9tICcuLi9saWIvRklMRSdcclxuaW1wb3J0IHsgdXNlUm91dGVyLHVzZUVmZmVjdCB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU2lkZU5hdiBmcm9tICcuL3NpZGVOYXYnXHJcbmNvbnN0IEl0ZW0gPSAoe2l0ZW0scGF0aCxtYXRjaH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17cGF0aH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wibmF2LWl0ZW0gXCIgKyAobWF0Y2g/J2FjdGl2ZSc6JycpfT5cclxuICAgICAgICA8c3Bhbj57aXRlbX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgU3ViamVjdCA9ICh7cGF0aHMsc3ViamVjdCxpdGVtcyxiYXNlUGF0aH0pID0+IHtcclxuICBjb25zdCBtYXRjaFN1YiA9IHBhdGhzWzBdID09PSBzdWJqZWN0XHJcbiAgY29uc3QgbWF0Y2hJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiBwYXRoc1sxXSA9PT0gaXRlbVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtc3ViXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17bWF0Y2hTdWIgPyAnYWN0aXZlJyA6ICcnfT57c3ViamVjdH08L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1zLXdyYXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtLWxpc3RcIj5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0saWR4KSA9PiAoXHJcbiAgICAgICAgICAgIDxJdGVtXHJcbiAgICAgICAgICAgICAga2V5PXtpZHh9IHBhdGg9e2Jhc2VQYXRoK3N1YmplY3QrJy8nK2l0ZW19IGl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgICAgbWF0Y2g9e21hdGNoU3ViICYgbWF0Y2hJdGVtKGl0ZW0pfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuY29uc3QgbW9iaWxldGl0bGUgPSAocGF0aCkgPT4ge1xyXG4gIGNvbnN0IFtzdWIsaXRlbV0gPSBwYXRoXHJcbiAgaWYgKHN1YiAmJiBpdGVtKXtcclxuICAgIHJldHVybiBgWyAke3N1Yn0gXSAke2l0ZW19YFxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYFsgU3NvbmcxMCBdYFxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XHJcbiAgY29uc3QgW3NpZGVOYXYsIHNldFNpZGVOYXZdID0gdXNlRWZmZWN0KHRydWUpXHJcbiAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHBhdGggPSBkZWNvZGVVUkkoYXNQYXRoKS50cmltKCcvJykuc3BsaXQoJy8nKVxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGlkPVwibmF2XCI+XHJcbiAgICAgIDxpIG9uQ2xpY2s9e3NldFNpZGVOYXYoIXNpZGVOYXYpfSBjbGFzc05hbWU9XCJzaWRlLWJ1dHRvbiBmYXMgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+U3NvbmcxMDwvc3Bhbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb2JpbGUtdGl0bGVcIj57bW9iaWxldGl0bGUocGF0aC5zbGljZSgtMiwpKX08L3NwYW4+XHJcbiAgICAgIHtzaWRlTmF2ID8gPFNpZGVOYXYgcGF0aD17cGF0aH0+PC9TaWRlTmF2PiA6ICcnfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiPlxyXG4gICAgICAgIHtwb3N0cy5tYXAoKHBvc3QsaWR4KSA9PiAoXHJcbiAgICAgICAgICA8U3ViamVjdFxyXG4gICAgICAgICAgICBwYXRocz17cGF0aC5zbGljZSgtMiwpfVxyXG4gICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgc3ViamVjdD17cG9zdC5zdWJqZWN0fVxyXG4gICAgICAgICAgICBpdGVtcz17cG9zdC5pdGVtc31cclxuICAgICAgICAgICAgYmFzZVBhdGggPSAnL3Bvc3RzLydcclxuICAgICAgICAgID48L1N1YmplY3Q+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPFN1YmplY3RcclxuICAgICAgICAgIHBhdGhzPXtwYXRoLnNsaWNlKC0yLCl9XHJcbiAgICAgICAgICBzdWJqZWN0PSdjb21wb25lbnQnXHJcbiAgICAgICAgICBpdGVtcz17Y29tcG9uZW50c31cclxuICAgICAgICAgIGJhc2VQYXRoID0gJy8nXHJcbiAgICAgICAgPjwvU3ViamVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAjbmF2IHtcclxuICAgICAgICAgICAgei1pbmRleDoxMDAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA6c3RpY2t5O1xyXG4gICAgICAgICAgICB0b3AgOiAwO1xyXG4gICAgICAgICAgICBsZWZ0IDogMDtcclxuICAgICAgICAgICAgcmlnaHQgOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZWZjZmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgICBoZWlnaHQgOiB2YXIoLS1uYXZIZWlnaHQpO1xyXG4gICAgICAgICAgICBwYWRkaW5nIDogMC42cmVtIDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjbmF2IC5zaG93IHtkaXNwbGF5OmJsb2NrfVxyXG4gICAgICAgICAgLm1haW4tdGl0bGUge2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6MS40cmVtO2N1cnNvciA6IHBvaW50ZXI7ICBsaW5lLWhlaWdodCA6IDIuNHJlbTt9XHJcbiAgICAgICAgICAubmF2LWxpbmtze2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjV2dzt9XHJcbiAgICAgICAgICAubmF2LXN1YntkaXNwbGF5OmlubGluZS1ibG9jaztsaW5lLWhlaWdodDoyLjRyZW07cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLWxlZnQ6M3Z3O2N1cnNvcjpwb2ludGVyO3RleHQtYWxpZ246bGVmdH1cclxuICAgICAgICAgIC5uYXYtc3ViOmhvdmVyIC5uYXYtaXRlbS1saXN0IHtkaXNwbGF5OmJsb2NrfVxyXG4gICAgICAgICAgLm5hdi1zdWI+c3BhbiB7cGFkZGluZzoxdnd9XHJcbiAgICAgICAgICAubmF2LWl0ZW1zLXdyYXAgeyBwYWRkaW5nLXRvcDoyMHB4fVxyXG4gICAgICAgICAgLm5hdi1pdGVtLWxpc3Qge2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjogYWJzb2x1dGU7bGluZS1oZWlnaHQ6Mi4ycmVtO3dpZHRoOjIwMHB4O3JpZ2h0Oi01cHg7dG9wOjg1JTttaW4taGVpZ2h0OmF1dG87Ym9yZGVyOjFweCBzb2xpZCAjZWFlYWVhO2JhY2tncm91bmQtY29sb3I6I2ZlZmNmZTtwYWRkaW5nOjAuM3JlbX1cclxuICAgICAgICAgIC5uYXYtaXRlbXtcclxuICAgICAgICAgICAgcGFkZGluZzowcmVtIDAuNXJlbTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hdi1pdGVtOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6IHJnYmEoMTM1LDY0LDMzLDAuMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0aXZlIHtjb2xvcjogIzJmOWFlYTt9XHJcbiAgICAgICAgICAubmF2LWl0ZW0tbGlzdDphZnRlcixcclxuICAgICAgICAgIC5uYXYtaXRlbS1saXN0OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOjA7XHJcbiAgICAgICAgICAgIGhlaWdodDowO1xyXG4gICAgICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI25hdiAuc2lkZS1idXR0b24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjIuNHJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEuNnJlbTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1vYmlsZS10aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MS4xcmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodCA6IDIuNHJlbTtcclxuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmF2LWl0ZW0tbGlzdDphZnRlciB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE3MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHdoaXRlIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmF2LWl0ZW0tbGlzdDpiZWZvcmUge1xyXG4gICAgICAgICAgICBsZWZ0OiAxNjlweDtcclxuICAgICAgICAgICAgdG9wOi0yMXB4O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IGdyYXkgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMTFweDtcclxuICAgICAgICAgICAgei1pbmRleDotMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgLm1vYmlsZS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheSA6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2LWxpbmtzLCAubWFpbi10aXRsZSB7IFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbmF2IC5zaWRlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==