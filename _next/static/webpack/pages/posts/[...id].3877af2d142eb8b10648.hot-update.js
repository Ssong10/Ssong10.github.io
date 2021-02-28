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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_FILE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/FILE */ "./lib/FILE.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);



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
        lineNumber: 12,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
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
      lineNumber: 25,
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
            lineNumber: 29,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
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

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])(),
      asPath = _useRouter.asPath;

  var path = decodeURI(asPath).trim('/').split('/');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("header", {
    id: "nav",
    className: "jsx-2577858544",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("script", {
        async: true,
        src: "https://kit.fontawesome.com/17820a52a0.js",
        crossOrigin: "anonymous",
        className: "jsx-2577858544"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
      "aria-hidden": "true",
      className: "jsx-2577858544" + " " + "side-button fas fa-bars"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "jsx-2577858544" + " " + "main-title",
        children: "Ssong10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: "jsx-2577858544" + " " + "mobile-title",
      children: mobiletitle(path.slice(-2))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "jsx-2577858544" + " " + "nav-links",
      children: [_lib_FILE__WEBPACK_IMPORTED_MODULE_5__["posts"].map(function (post, idx) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Subject, {
          paths: path.slice(-2),
          subject: post.subject,
          items: post.items,
          basePath: "/posts/"
        }, idx, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this2);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Subject, {
        paths: path.slice(-2),
        subject: "component",
        items: _lib_FILE__WEBPACK_IMPORTED_MODULE_5__["components"],
        basePath: "/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "2577858544",
      children: "#nav{z-index:1000;position :-webkit-sticky;position :sticky;top :0;left :0;right :0;background-color:#fefcfe;border-bottom:1px solid #eaeaea;height :var(--navHeight);padding :0.6rem 1rem;}#nav .show{display:block;}.main-title{display:inline-block;font-weight:700;font-size:1.4rem;cursor :pointer;line-height :2.4rem;}.nav-links{display:inline-block;position:absolute;right:5vw;}.nav-sub{display:inline-block;line-height:2.4rem;position:relative;margin-left:3vw;cursor:pointer;text-align:left;}.nav-sub:hover .nav-item-list{display:block;}.nav-sub>span{padding:1vw;}.nav-items-wrap{padding-top:20px;}.nav-item-list{display:none;position:absolute;line-height:2.2rem;width:200px;right:-5px;top:85%;min-height:auto;border:1px solid #eaeaea;background-color:#fefcfe;padding:0.3rem;}.nav-item{padding:0rem 0.5rem;-webkit-transition:0.3s;transition:0.3s;}.nav-item:hover{background-color :rgba(135,64,33,0.1);}.active{color:#2f9aea;}.nav-item-list:after,.nav-item-list:before{content:'';position:absolute;width:0;height:0;top:-20px;border-style:solid;}#nav .side-button{display:none;line-height:2.4rem;font-size:1.6rem;cursor:pointer;}.mobile-title{display:none;font-weight:600;font-size:1.1rem;line-height :2.4rem;float:right;}.nav-item-list:after{left:170px;border-color:transparent transparent white transparent;border-width:10px;}.nav-item-list:before{left:169px;top:-21px;border-color:transparent transparent gray transparent;border-width:11px;z-index:-1;}@media screen and (max-width:767px){.mobile-title{display :inline-block;}.nav-links,.main-title{display:none;}#nav .side-button{display:inline-block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3NvbmcxMFxcRGVza3RvcFxcbmV4dGpzLWJsb2dcXGNvbXBvbmVudHNcXG5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RVMsQUFHeUIsQUFVUyxBQUNTLEFBQ0YsQUFDRixBQUNjLEFBQ2xCLEFBQ1EsQUFDTCxBQUVOLEFBSW1CLEFBRWxCLEFBR1QsQUFRQyxBQU1BLEFBT0QsQUFLQSxBQVFhLEFBR1YsQUFHUSxXQXZDSixBQXFCcUMsQUFLOUMsQ0F4Q2MsQ0FkUCxBQWdCMkIsQUFvQnpCLEFBTUgsQUF1QmYsQ0F4RHNCLEFBSW1CLEFBV3BCLEdBVFUsR0FLbEMsQ0FWZ0QsQUFDQSxBQUNELEFBMkNVLEFBYXRELENBTkEsT0FqQ08sQUFjUyxFQTNCNkMsQ0FxQjdDLEtBM0I2QyxBQW9CckQsQ0FQVixDQVp3RCxDQUNPLE1BbUJuRCxBQWFVLEdBakNtQyxBQTJCeEMsQ0F0QnlELElBTkssQ0FUdEUsQ0ErQlksRUFwQnlELEVBUTlFLEVBbEJVLEFBYzBFLEVBdUJwRixFQU1hLEFBS08sSUEvQ1QsQUFPMEYsR0FNVixDQUpDLENBcUI1RixBQXVCb0IsR0FWcEIsQ0ExQzBCLEVBWWdGLEdBbUMxRyxLQXZDMEcsQ0FGSixHQWdEdkcsSUExQ21JLE9BWGhHLEFBcURsQyxDQTlDMkcsaUJBSStDLGNBVi9ILFdBVTRJLGNBVGhKLENBU2lKLG9CQVJ4SyIsImZpbGUiOiJDOlxcVXNlcnNcXHNzb25nMTBcXERlc2t0b3BcXG5leHRqcy1ibG9nXFxjb21wb25lbnRzXFxuYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayAgIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgICBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5pbXBvcnQgeyBwb3N0cywgY29tcG9uZW50cyB9IGZyb20gJy4uL2xpYi9GSUxFJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEl0ZW0gPSAoe2l0ZW0scGF0aCxtYXRjaH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17cGF0aH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wibmF2LWl0ZW0gXCIgKyAobWF0Y2g/J2FjdGl2ZSc6JycpfT5cclxuICAgICAgICA8c3Bhbj57aXRlbX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgU3ViamVjdCA9ICh7cGF0aHMsc3ViamVjdCxpdGVtcyxiYXNlUGF0aH0pID0+IHtcclxuICBjb25zdCBtYXRjaFN1YiA9IHBhdGhzWzBdID09PSBzdWJqZWN0XHJcbiAgY29uc3QgbWF0Y2hJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiBwYXRoc1sxXSA9PT0gaXRlbVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtc3ViXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17bWF0Y2hTdWIgPyAnYWN0aXZlJyA6ICcnfT57c3ViamVjdH08L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1zLXdyYXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtLWxpc3RcIj5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0saWR4KSA9PiAoXHJcbiAgICAgICAgICAgIDxJdGVtXHJcbiAgICAgICAgICAgICAga2V5PXtpZHh9IHBhdGg9e2Jhc2VQYXRoK3N1YmplY3QrJy8nK2l0ZW19IGl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgICAgbWF0Y2g9e21hdGNoU3ViICYgbWF0Y2hJdGVtKGl0ZW0pfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuY29uc3QgbW9iaWxldGl0bGUgPSAocGF0aCkgPT4ge1xyXG4gIGNvbnN0IFtzdWIsaXRlbV0gPSBwYXRoXHJcbiAgaWYgKHN1YiAmJiBpdGVtKXtcclxuICAgIHJldHVybiBgWyAke3N1Yn0gXSAke2l0ZW19YFxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYFsgU3NvbmcxMCBdYFxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XHJcbiAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHBhdGggPSBkZWNvZGVVUkkoYXNQYXRoKS50cmltKCcvJykuc3BsaXQoJy8nKVxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGlkPVwibmF2XCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tLzE3ODIwYTUyYTAuanNcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cInNpZGUtYnV0dG9uIGZhcyBmYS1iYXJzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5Tc29uZzEwPC9zcGFuPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vYmlsZS10aXRsZVwiPnttb2JpbGV0aXRsZShwYXRoLnNsaWNlKC0yLCkpfTwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5cclxuICAgICAgICB7cG9zdHMubWFwKChwb3N0LGlkeCkgPT4gKFxyXG4gICAgICAgICAgPFN1YmplY3RcclxuICAgICAgICAgICAgcGF0aHM9e3BhdGguc2xpY2UoLTIsKX1cclxuICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgIHN1YmplY3Q9e3Bvc3Quc3ViamVjdH1cclxuICAgICAgICAgICAgaXRlbXM9e3Bvc3QuaXRlbXN9XHJcbiAgICAgICAgICAgIGJhc2VQYXRoID0gJy9wb3N0cy8nXHJcbiAgICAgICAgICA+PC9TdWJqZWN0PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxTdWJqZWN0XHJcbiAgICAgICAgICBwYXRocz17cGF0aC5zbGljZSgtMiwpfVxyXG4gICAgICAgICAgc3ViamVjdD0nY29tcG9uZW50J1xyXG4gICAgICAgICAgaXRlbXM9e2NvbXBvbmVudHN9XHJcbiAgICAgICAgICBiYXNlUGF0aCA9ICcvJ1xyXG4gICAgICAgID48L1N1YmplY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgI25hdiB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6MTAwMDtcclxuICAgICAgICAgICAgcG9zaXRpb24gOnN0aWNreTtcclxuICAgICAgICAgICAgdG9wIDogMDtcclxuICAgICAgICAgICAgbGVmdCA6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0IDogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmVmY2ZlO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgICAgaGVpZ2h0IDogdmFyKC0tbmF2SGVpZ2h0KTtcclxuICAgICAgICAgICAgcGFkZGluZyA6IDAuNnJlbSAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI25hdiAuc2hvdyB7ZGlzcGxheTpibG9ja31cclxuICAgICAgICAgIC5tYWluLXRpdGxlIHtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjEuNHJlbTtjdXJzb3IgOiBwb2ludGVyOyAgbGluZS1oZWlnaHQgOiAyLjRyZW07fVxyXG4gICAgICAgICAgLm5hdi1saW5rc3tkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDo1dnc7fVxyXG4gICAgICAgICAgLm5hdi1zdWJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bGluZS1oZWlnaHQ6Mi40cmVtO3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbi1sZWZ0OjN2dztjdXJzb3I6cG9pbnRlcjt0ZXh0LWFsaWduOmxlZnR9XHJcbiAgICAgICAgICAubmF2LXN1Yjpob3ZlciAubmF2LWl0ZW0tbGlzdCB7ZGlzcGxheTpibG9ja31cclxuICAgICAgICAgIC5uYXYtc3ViPnNwYW4ge3BhZGRpbmc6MXZ3fVxyXG4gICAgICAgICAgLm5hdi1pdGVtcy13cmFwIHsgcGFkZGluZy10b3A6MjBweH1cclxuICAgICAgICAgIC5uYXYtaXRlbS1saXN0IHtkaXNwbGF5Om5vbmU7cG9zaXRpb246IGFic29sdXRlO2xpbmUtaGVpZ2h0OjIuMnJlbTt3aWR0aDoyMDBweDtyaWdodDotNXB4O3RvcDo4NSU7bWluLWhlaWdodDphdXRvO2JvcmRlcjoxcHggc29saWQgI2VhZWFlYTtiYWNrZ3JvdW5kLWNvbG9yOiNmZWZjZmU7cGFkZGluZzowLjNyZW19XHJcbiAgICAgICAgICAubmF2LWl0ZW17XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MHJlbSAwLjVyZW07XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3NcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXYtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgOiByZ2JhKDEzNSw2NCwzMywwLjEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFjdGl2ZSB7Y29sb3I6ICMyZjlhZWE7fVxyXG4gICAgICAgICAgLm5hdi1pdGVtLWxpc3Q6YWZ0ZXIsXHJcbiAgICAgICAgICAubmF2LWl0ZW0tbGlzdDpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDowO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MDtcclxuICAgICAgICAgICAgdG9wOiAtMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNuYXYgLnNpZGUtYnV0dG9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDoyLjRyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxLjZyZW07XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tb2JpbGUtdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEuMXJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQgOiAyLjRyZW07XHJcbiAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hdi1pdGVtLWxpc3Q6YWZ0ZXIge1xyXG4gICAgICAgICAgICBsZWZ0OiAxNzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hdi1pdGVtLWxpc3Q6YmVmb3JlIHtcclxuICAgICAgICAgICAgbGVmdDogMTY5cHg7XHJcbiAgICAgICAgICAgIHRvcDotMjFweDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCBncmF5IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDExcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6LTFcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgIC5tb2JpbGUtdGl0bGUge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXkgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdi1saW5rcywgLm1haW4tdGl0bGUgeyBcclxuICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI25hdiAuc2lkZS1idXR0b24ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ssong10\\\\Desktop\\\\nextjs-blog\\\\components\\\\nav.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

_s(Nav, "9pMG9Ra3x5O/yaZiUz6XxVJ+Rds=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiSXRlbSIsIml0ZW0iLCJwYXRoIiwibWF0Y2giLCJTdWJqZWN0IiwicGF0aHMiLCJzdWJqZWN0IiwiaXRlbXMiLCJiYXNlUGF0aCIsIm1hdGNoU3ViIiwibWF0Y2hJdGVtIiwibWFwIiwiaWR4IiwibW9iaWxldGl0bGUiLCJzdWIiLCJOYXYiLCJ1c2VSb3V0ZXIiLCJhc1BhdGgiLCJkZWNvZGVVUkkiLCJ0cmltIiwic3BsaXQiLCJzbGljZSIsInBvc3RzIiwicG9zdCIsImNvbXBvbmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBdUI7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBaEJDLElBQWdCLFFBQWhCQSxJQUFnQjtBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVztBQUNsQyxzQkFDRSxxRUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUQsSUFBWjtBQUFBLDJCQUVFO0FBQUssZUFBUyxFQUFFLGVBQWVDLEtBQUssR0FBQyxRQUFELEdBQVUsRUFBOUIsQ0FBaEI7QUFBQSw2QkFDRTtBQUFBLGtCQUFPRjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FURDs7S0FBTUQsSTs7QUFXTixJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxRQUFvQztBQUFBLE1BQWxDQyxLQUFrQyxTQUFsQ0EsS0FBa0M7QUFBQSxNQUE1QkMsT0FBNEIsU0FBNUJBLE9BQTRCO0FBQUEsTUFBcEJDLEtBQW9CLFNBQXBCQSxLQUFvQjtBQUFBLE1BQWRDLFFBQWMsU0FBZEEsUUFBYztBQUNsRCxNQUFNQyxRQUFRLEdBQUdKLEtB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LEVBQUc7QUFMYixXQUVPSyxHQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRFM7QUFBQSxPQUFWLENBREgsZUFVRSxxRUFBQyxPQUFEO0FBQ0UsYUFBSyxFQUFFVixJQUFJLENBQUNtQixLQUFMLENBQVcsQ0FBQyxDQUFaLENBRFQ7QUFFRSxlQUFPLEVBQUMsV0FGVjtBQUdFLGFBQUssRUFBRUcsb0RBSFQ7QUFJRSxnQkFBUSxFQUFHO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUdEOztHQTVHdUJULEc7VUFDSEMscUQ7OztNQURHRCxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1suLi5pZF0uMzg3N2FmMmQxNDJlYjhiMTA2NDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rICAgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCAgIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmltcG9ydCB7IHBvc3RzLCBjb21wb25lbnRzIH0gZnJvbSAnLi4vbGliL0ZJTEUnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgSXRlbSA9ICh7aXRlbSxwYXRoLG1hdGNofSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtwYXRofVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJuYXYtaXRlbSBcIiArIChtYXRjaD8nYWN0aXZlJzonJyl9PlxyXG4gICAgICAgIDxzcGFuPntpdGVtfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xpbms+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBTdWJqZWN0ID0gKHtwYXRocyxzdWJqZWN0LGl0ZW1zLGJhc2VQYXRofSkgPT4ge1xyXG4gIGNvbnN0IG1hdGNoU3ViID0gcGF0aHNbMF0gPT09IHN1YmplY3RcclxuICBjb25zdCBtYXRjaEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIHBhdGhzWzFdID09PSBpdGVtXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1zdWJcIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXttYXRjaFN1YiA/ICdhY3RpdmUnIDogJyd9PntzdWJqZWN0fTwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbXMtd3JhcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW0tbGlzdFwiPlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSxpZHgpID0+IChcclxuICAgICAgICAgICAgPEl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2lkeH0gcGF0aD17YmFzZVBhdGgrc3ViamVjdCsnLycraXRlbX0gaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICBtYXRjaD17bWF0Y2hTdWIgJiBtYXRjaEl0ZW0oaXRlbSl9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5jb25zdCBtb2JpbGV0aXRsZSA9IChwYXRoKSA9PiB7XHJcbiAgY29uc3QgW3N1YixpdGVtXSA9IHBhdGhcclxuICBpZiAoc3ViICYmIGl0ZW0pe1xyXG4gICAgcmV0dXJuIGBbICR7c3VifSBdICR7aXRlbX1gXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBgWyBTc29uZzEwIF1gXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpIHtcclxuICBjb25zdCB7IGFzUGF0aCB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcGF0aCA9IGRlY29kZVVSSShhc1BhdGgpLnRyaW0oJy8nKS5zcGxpdCgnLycpXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgaWQ9XCJuYXZcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vMTc4MjBhNTJhMC5qc1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGkgY2xhc3NOYW1lPVwic2lkZS1idXR0b24gZmFzIGZhLWJhcnNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPlNzb25nMTA8L3NwYW4+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9iaWxlLXRpdGxlXCI+e21vYmlsZXRpdGxlKHBhdGguc2xpY2UoLTIsKSl9PC9zcGFuPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1saW5rc1wiPlxyXG4gICAgICAgIHtwb3N0cy5tYXAoKHBvc3QsaWR4KSA9PiAoXHJcbiAgICAgICAgICA8U3ViamVjdFxyXG4gICAgICAgICAgICBwYXRocz17cGF0aC5zbGljZSgtMiwpfVxyXG4gICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgc3ViamVjdD17cG9zdC5zdWJqZWN0fVxyXG4gICAgICAgICAgICBpdGVtcz17cG9zdC5pdGVtc31cclxuICAgICAgICAgICAgYmFzZVBhdGggPSAnL3Bvc3RzLydcclxuICAgICAgICAgID48L1N1YmplY3Q+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPFN1YmplY3RcclxuICAgICAgICAgIHBhdGhzPXtwYXRoLnNsaWNlKC0yLCl9XHJcbiAgICAgICAgICBzdWJqZWN0PSdjb21wb25lbnQnXHJcbiAgICAgICAgICBpdGVtcz17Y29tcG9uZW50c31cclxuICAgICAgICAgIGJhc2VQYXRoID0gJy8nXHJcbiAgICAgICAgPjwvU3ViamVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAjbmF2IHtcclxuICAgICAgICAgICAgei1pbmRleDoxMDAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA6c3RpY2t5O1xyXG4gICAgICAgICAgICB0b3AgOiAwO1xyXG4gICAgICAgICAgICBsZWZ0IDogMDtcclxuICAgICAgICAgICAgcmlnaHQgOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZWZjZmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgICBoZWlnaHQgOiB2YXIoLS1uYXZIZWlnaHQpO1xyXG4gICAgICAgICAgICBwYWRkaW5nIDogMC42cmVtIDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjbmF2IC5zaG93IHtkaXNwbGF5OmJsb2NrfVxyXG4gICAgICAgICAgLm1haW4tdGl0bGUge2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6MS40cmVtO2N1cnNvciA6IHBvaW50ZXI7ICBsaW5lLWhlaWdodCA6IDIuNHJlbTt9XHJcbiAgICAgICAgICAubmF2LWxpbmtze2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjV2dzt9XHJcbiAgICAgICAgICAubmF2LXN1YntkaXNwbGF5OmlubGluZS1ibG9jaztsaW5lLWhlaWdodDoyLjRyZW07cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLWxlZnQ6M3Z3O2N1cnNvcjpwb2ludGVyO3RleHQtYWxpZ246bGVmdH1cclxuICAgICAgICAgIC5uYXYtc3ViOmhvdmVyIC5uYXYtaXRlbS1saXN0IHtkaXNwbGF5OmJsb2NrfVxyXG4gICAgICAgICAgLm5hdi1zdWI+c3BhbiB7cGFkZGluZzoxdnd9XHJcbiAgICAgICAgICAubmF2LWl0ZW1zLXdyYXAgeyBwYWRkaW5nLXRvcDoyMHB4fVxyXG4gICAgICAgICAgLm5hdi1pdGVtLWxpc3Qge2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjogYWJzb2x1dGU7bGluZS1oZWlnaHQ6Mi4ycmVtO3dpZHRoOjIwMHB4O3JpZ2h0Oi01cHg7dG9wOjg1JTttaW4taGVpZ2h0OmF1dG87Ym9yZGVyOjFweCBzb2xpZCAjZWFlYWVhO2JhY2tncm91bmQtY29sb3I6I2ZlZmNmZTtwYWRkaW5nOjAuM3JlbX1cclxuICAgICAgICAgIC5uYXYtaXRlbXtcclxuICAgICAgICAgICAgcGFkZGluZzowcmVtIDAuNXJlbTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hdi1pdGVtOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6IHJnYmEoMTM1LDY0LDMzLDAuMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0aXZlIHtjb2xvcjogIzJmOWFlYTt9XHJcbiAgICAgICAgICAubmF2LWl0ZW0tbGlzdDphZnRlcixcclxuICAgICAgICAgIC5uYXYtaXRlbS1saXN0OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOjA7XHJcbiAgICAgICAgICAgIGhlaWdodDowO1xyXG4gICAgICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI25hdiAuc2lkZS1idXR0b24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjIuNHJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEuNnJlbTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1vYmlsZS10aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MS4xcmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodCA6IDIuNHJlbTtcclxuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmF2LWl0ZW0tbGlzdDphZnRlciB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE3MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHdoaXRlIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmF2LWl0ZW0tbGlzdDpiZWZvcmUge1xyXG4gICAgICAgICAgICBsZWZ0OiAxNjlweDtcclxuICAgICAgICAgICAgdG9wOi0yMXB4O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IGdyYXkgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMTFweDtcclxuICAgICAgICAgICAgei1pbmRleDotMVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgLm1vYmlsZS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheSA6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2LWxpbmtzLCAubWFpbi10aXRsZSB7IFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjbmF2IC5zaWRlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==