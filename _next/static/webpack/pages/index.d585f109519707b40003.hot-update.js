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
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
      "aria-hidden": "true",
      className: "jsx-2577858544" + " " + "side-button fas fa-bars"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "jsx-2577858544" + " " + "main-title",
        children: "Ssong10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: "jsx-2577858544" + " " + "mobile-title",
      children: mobiletitle(path.slice(-2))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
          lineNumber: 60,
          columnNumber: 11
        }, _this2);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Subject, {
        paths: path.slice(-2),
        subject: "component",
        items: _lib_FILE__WEBPACK_IMPORTED_MODULE_5__["components"],
        basePath: "/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "2577858544",
      children: "#nav{z-index:1000;position :-webkit-sticky;position :sticky;top :0;left :0;right :0;background-color:#fefcfe;border-bottom:1px solid #eaeaea;height :var(--navHeight);padding :0.6rem 1rem;}#nav .show{display:block;}.main-title{display:inline-block;font-weight:700;font-size:1.4rem;cursor :pointer;line-height :2.4rem;}.nav-links{display:inline-block;position:absolute;right:5vw;}.nav-sub{display:inline-block;line-height:2.4rem;position:relative;margin-left:3vw;cursor:pointer;text-align:left;}.nav-sub:hover .nav-item-list{display:block;}.nav-sub>span{padding:1vw;}.nav-items-wrap{padding-top:20px;}.nav-item-list{display:none;position:absolute;line-height:2.2rem;width:200px;right:-5px;top:85%;min-height:auto;border:1px solid #eaeaea;background-color:#fefcfe;padding:0.3rem;}.nav-item{padding:0rem 0.5rem;-webkit-transition:0.3s;transition:0.3s;}.nav-item:hover{background-color :rgba(135,64,33,0.1);}.active{color:#2f9aea;}.nav-item-list:after,.nav-item-list:before{content:'';position:absolute;width:0;height:0;top:-20px;border-style:solid;}#nav .side-button{display:none;line-height:2.4rem;font-size:1.6rem;cursor:pointer;}.mobile-title{display:none;font-weight:600;font-size:1.1rem;line-height :2.4rem;float:right;}.nav-item-list:after{left:170px;border-color:transparent transparent white transparent;border-width:10px;}.nav-item-list:before{left:169px;top:-21px;border-color:transparent transparent gray transparent;border-width:11px;z-index:-1;}@media screen and (max-width:767px){.mobile-title{display :inline-block;}.nav-links,.main-title{display:none;}#nav .side-button{display:inline-block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3NvbmcxMFxcRGVza3RvcFxcbmV4dGpzLWJsb2dcXGNvbXBvbmVudHNcXG5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRVMsQUFHeUIsQUFVUyxBQUNTLEFBQ0YsQUFDRixBQUNjLEFBQ2xCLEFBQ1EsQUFDTCxBQUVOLEFBSW1CLEFBRWxCLEFBR1QsQUFRQyxBQU1BLEFBT0QsQUFLQSxBQVFhLEFBR1YsQUFHUSxXQXZDSixBQXFCcUMsQUFLOUMsQ0F4Q2MsQ0FkUCxBQWdCMkIsQUFvQnpCLEFBTUgsQUF1QmYsQ0F4RHNCLEFBSW1CLEFBV3BCLEdBVFUsR0FLbEMsQ0FWZ0QsQUFDQSxBQUNELEFBMkNVLEFBYXRELENBTkEsT0FqQ08sQUFjUyxFQTNCNkMsQ0FxQjdDLEtBM0I2QyxBQW9CckQsQ0FQVixDQVp3RCxDQUNPLE1BbUJuRCxBQWFVLEdBakNtQyxBQTJCeEMsQ0F0QnlELElBTkssQ0FUdEUsQ0ErQlksRUFwQnlELEVBUTlFLEVBbEJVLEFBYzBFLEVBdUJwRixFQU1hLEFBS08sSUEvQ1QsQUFPMEYsR0FNVixDQUpDLENBcUI1RixBQXVCb0IsR0FWcEIsQ0ExQzBCLEVBWWdGLEdBbUMxRyxLQXZDMEcsQ0FGSixHQWdEdkcsSUExQ21JLE9BWGhHLEFBcURsQyxDQTlDMkcsaUJBSStDLGNBVi9ILFdBVTRJLGNBVGhKLENBU2lKLG9CQVJ4SyIsImZpbGUiOiJDOlxcVXNlcnNcXHNzb25nMTBcXERlc2t0b3BcXG5leHRqcy1ibG9nXFxjb21wb25lbnRzXFxuYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgcG9zdHMsIGNvbXBvbmVudHMgfSBmcm9tICcuLi9saWIvRklMRSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBJdGVtID0gKHtpdGVtLHBhdGgsbWF0Y2h9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e3BhdGh9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdi1pdGVtIFwiICsgKG1hdGNoPydhY3RpdmUnOicnKX0+XHJcbiAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGluaz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFN1YmplY3QgPSAoe3BhdGhzLHN1YmplY3QsaXRlbXMsYmFzZVBhdGh9KSA9PiB7XHJcbiAgY29uc3QgbWF0Y2hTdWIgPSBwYXRoc1swXSA9PT0gc3ViamVjdFxyXG4gIGNvbnN0IG1hdGNoSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gcGF0aHNbMV0gPT09IGl0ZW1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXN1YlwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e21hdGNoU3ViID8gJ2FjdGl2ZScgOiAnJ30+e3N1YmplY3R9PC9zcGFuPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtcy13cmFwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbS1saXN0XCI+XHJcbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLGlkeCkgPT4gKFxyXG4gICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgIGtleT17aWR4fSBwYXRoPXtiYXNlUGF0aCtzdWJqZWN0KycvJytpdGVtfSBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICAgIG1hdGNoPXttYXRjaFN1YiAmIG1hdGNoSXRlbShpdGVtKX0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmNvbnN0IG1vYmlsZXRpdGxlID0gKHBhdGgpID0+IHtcclxuICBjb25zdCBbc3ViLGl0ZW1dID0gcGF0aFxyXG4gIGlmIChzdWIgJiYgaXRlbSl7XHJcbiAgICByZXR1cm4gYFsgJHtzdWJ9IF0gJHtpdGVtfWBcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGBbIFNzb25nMTAgXWBcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xyXG4gIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwYXRoID0gZGVjb2RlVVJJKGFzUGF0aCkudHJpbSgnLycpLnNwbGl0KCcvJylcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBpZD1cIm5hdlwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS8xNzgyMGE1MmEwLmpzXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJzaWRlLWJ1dHRvbiBmYXMgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+U3NvbmcxMDwvc3Bhbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb2JpbGUtdGl0bGVcIj57bW9iaWxldGl0bGUocGF0aC5zbGljZSgtMiwpKX08L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCI+XHJcbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCxpZHgpID0+IChcclxuICAgICAgICAgIDxTdWJqZWN0XHJcbiAgICAgICAgICAgIHBhdGhzPXtwYXRoLnNsaWNlKC0yLCl9XHJcbiAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICBzdWJqZWN0PXtwb3N0LnN1YmplY3R9XHJcbiAgICAgICAgICAgIGl0ZW1zPXtwb3N0Lml0ZW1zfVxyXG4gICAgICAgICAgICBiYXNlUGF0aCA9ICcvcG9zdHMvJ1xyXG4gICAgICAgICAgPjwvU3ViamVjdD5cclxuICAgICAgICApKX1cclxuICAgICAgICA8U3ViamVjdFxyXG4gICAgICAgICAgcGF0aHM9e3BhdGguc2xpY2UoLTIsKX1cclxuICAgICAgICAgIHN1YmplY3Q9J2NvbXBvbmVudCdcclxuICAgICAgICAgIGl0ZW1zPXtjb21wb25lbnRzfVxyXG4gICAgICAgICAgYmFzZVBhdGggPSAnLydcclxuICAgICAgICA+PC9TdWJqZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgICNuYXYge1xyXG4gICAgICAgICAgICB6LWluZGV4OjEwMDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uIDpzdGlja3k7XHJcbiAgICAgICAgICAgIHRvcCA6IDA7XHJcbiAgICAgICAgICAgIGxlZnQgOiAwO1xyXG4gICAgICAgICAgICByaWdodCA6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZlZmNmZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICAgIGhlaWdodCA6IHZhcigtLW5hdkhlaWdodCk7XHJcbiAgICAgICAgICAgIHBhZGRpbmcgOiAwLjZyZW0gMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNuYXYgLnNob3cge2Rpc3BsYXk6YmxvY2t9XHJcbiAgICAgICAgICAubWFpbi10aXRsZSB7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxLjRyZW07Y3Vyc29yIDogcG9pbnRlcjsgIGxpbmUtaGVpZ2h0IDogMi40cmVtO31cclxuICAgICAgICAgIC5uYXYtbGlua3N7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6NXZ3O31cclxuICAgICAgICAgIC5uYXYtc3Vie2Rpc3BsYXk6aW5saW5lLWJsb2NrO2xpbmUtaGVpZ2h0OjIuNHJlbTtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tbGVmdDozdnc7Y3Vyc29yOnBvaW50ZXI7dGV4dC1hbGlnbjpsZWZ0fVxyXG4gICAgICAgICAgLm5hdi1zdWI6aG92ZXIgLm5hdi1pdGVtLWxpc3Qge2Rpc3BsYXk6YmxvY2t9XHJcbiAgICAgICAgICAubmF2LXN1Yj5zcGFuIHtwYWRkaW5nOjF2d31cclxuICAgICAgICAgIC5uYXYtaXRlbXMtd3JhcCB7IHBhZGRpbmctdG9wOjIwcHh9XHJcbiAgICAgICAgICAubmF2LWl0ZW0tbGlzdCB7ZGlzcGxheTpub25lO3Bvc2l0aW9uOiBhYnNvbHV0ZTtsaW5lLWhlaWdodDoyLjJyZW07d2lkdGg6MjAwcHg7cmlnaHQ6LTVweDt0b3A6ODUlO21pbi1oZWlnaHQ6YXV0bztib3JkZXI6MXB4IHNvbGlkICNlYWVhZWE7YmFja2dyb3VuZC1jb2xvcjojZmVmY2ZlO3BhZGRpbmc6MC4zcmVtfVxyXG4gICAgICAgICAgLm5hdi1pdGVte1xyXG4gICAgICAgICAgICBwYWRkaW5nOjByZW0gMC41cmVtO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmF2LWl0ZW06aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogcmdiYSgxMzUsNjQsMzMsMC4xKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hY3RpdmUge2NvbG9yOiAjMmY5YWVhO31cclxuICAgICAgICAgIC5uYXYtaXRlbS1saXN0OmFmdGVyLFxyXG4gICAgICAgICAgLm5hdi1pdGVtLWxpc3Q6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6MDtcclxuICAgICAgICAgICAgaGVpZ2h0OjA7XHJcbiAgICAgICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjbmF2IC5zaWRlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6Mi40cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MS42cmVtO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubW9iaWxlLXRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxLjFyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0IDogMi40cmVtO1xyXG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXYtaXRlbS1saXN0OmFmdGVyIHtcclxuICAgICAgICAgICAgbGVmdDogMTcwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGUgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXYtaXRlbS1saXN0OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE2OXB4O1xyXG4gICAgICAgICAgICB0b3A6LTIxcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgZ3JheSB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxMXB4O1xyXG4gICAgICAgICAgICB6LWluZGV4Oi0xXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICAubW9iaWxlLXRpdGxlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5IDogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXYtbGlua3MsIC5tYWluLXRpdGxlIHsgXHJcbiAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNuYXYgLnNpZGUtYnV0dG9uIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\ssong10\\\\Desktop\\\\nextjs-blog\\\\components\\\\nav.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiSXRlbSIsIml0ZW0iLCJwYXRoIiwibWF0Y2giLCJTdWJqZWN0IiwicGF0aHMiLCJzdWJqZWN0IiwiaXRlbXMiLCJiYXNlUGF0aCIsIm1hdGNoU3ViIiwibWF0Y2hJdGVtIiwibWFwIiwiaWR4IiwibW9iaWxldGl0bGUiLCJzdWIiLCJOYXYiLCJ1c2VSb3V0ZXIiLCJhc1BhdGgiLCJkZWNvZGVVUkkiLCJ0cmltIiwic3BsaXQiLCJzbGljZSIsInBvc3RzIiwicG9zdCIsImNvbXBvbmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBdUI7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBaEJDLElBQWdCLFFBQWhCQSxJQUFnQjtBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVztBQUNsQyxzQkFDRSxxRUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUQsSUFBWjtBQUFBLDJCQUVFO0FBQUssZUFBUyxFQUFFLGVBQWVDLEtBQUssR0FBQyxRQUFELEdBQVUsRUFBOUIsQ0FBaEI7QUFBQSw2QkFDRTtBQUFBLGtCQUFPRjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FURDs7S0FBTUQsSTs7QUFXTixJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxRQUFvQztBQUFBLE1BQWxDQyxLQUFrQyxTQUFsQ0EsS0FBa0M7QUFBQSxNQUE1QkMsT0FBNEIsU0FBNUJBLE9BQTRCO0FBQUEsTUFBcEJDLEtBQW9CLFNBQXBCQSxLQUFvQjtBQUFBLE1BQWRDLFFBQWMsU0FBZEEsUUFBYztBQUNsRCxNQUFNQyxRQUFRLEdBQUdKLEtB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LEVBQUc7QUFMYixXQUVPSyxHQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRFM7QUFBQSxPQUFWLENBREgsZUFVRSxxRUFBQyxPQUFEO0FBQ0UsYUFBSyxFQUFFVixJQUFJLENBQUNtQixLQUFMLENBQVcsQ0FBQyxDQUFaLENBRFQ7QUFFRSxlQUFPLEVBQUMsV0FGVjtBQUdFLGFBQUssRUFBRUcsb0RBSFQ7QUFJRSxnQkFBUSxFQUFHO0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUdEOztHQTVHdUJULEc7VUFDSEMscUQ7OztNQURHRCxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ1ODVmMTA5NTE5NzA3YjQwMDAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgcG9zdHMsIGNvbXBvbmVudHMgfSBmcm9tICcuLi9saWIvRklMRSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBJdGVtID0gKHtpdGVtLHBhdGgsbWF0Y2h9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e3BhdGh9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdi1pdGVtIFwiICsgKG1hdGNoPydhY3RpdmUnOicnKX0+XHJcbiAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGluaz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFN1YmplY3QgPSAoe3BhdGhzLHN1YmplY3QsaXRlbXMsYmFzZVBhdGh9KSA9PiB7XHJcbiAgY29uc3QgbWF0Y2hTdWIgPSBwYXRoc1swXSA9PT0gc3ViamVjdFxyXG4gIGNvbnN0IG1hdGNoSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gcGF0aHNbMV0gPT09IGl0ZW1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXN1YlwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e21hdGNoU3ViID8gJ2FjdGl2ZScgOiAnJ30+e3N1YmplY3R9PC9zcGFuPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtcy13cmFwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbS1saXN0XCI+XHJcbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLGlkeCkgPT4gKFxyXG4gICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgIGtleT17aWR4fSBwYXRoPXtiYXNlUGF0aCtzdWJqZWN0KycvJytpdGVtfSBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICAgIG1hdGNoPXttYXRjaFN1YiAmIG1hdGNoSXRlbShpdGVtKX0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmNvbnN0IG1vYmlsZXRpdGxlID0gKHBhdGgpID0+IHtcclxuICBjb25zdCBbc3ViLGl0ZW1dID0gcGF0aFxyXG4gIGlmIChzdWIgJiYgaXRlbSl7XHJcbiAgICByZXR1cm4gYFsgJHtzdWJ9IF0gJHtpdGVtfWBcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGBbIFNzb25nMTAgXWBcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xyXG4gIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwYXRoID0gZGVjb2RlVVJJKGFzUGF0aCkudHJpbSgnLycpLnNwbGl0KCcvJylcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBpZD1cIm5hdlwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS8xNzgyMGE1MmEwLmpzXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJzaWRlLWJ1dHRvbiBmYXMgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+U3NvbmcxMDwvc3Bhbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb2JpbGUtdGl0bGVcIj57bW9iaWxldGl0bGUocGF0aC5zbGljZSgtMiwpKX08L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCI+XHJcbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCxpZHgpID0+IChcclxuICAgICAgICAgIDxTdWJqZWN0XHJcbiAgICAgICAgICAgIHBhdGhzPXtwYXRoLnNsaWNlKC0yLCl9XHJcbiAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICBzdWJqZWN0PXtwb3N0LnN1YmplY3R9XHJcbiAgICAgICAgICAgIGl0ZW1zPXtwb3N0Lml0ZW1zfVxyXG4gICAgICAgICAgICBiYXNlUGF0aCA9ICcvcG9zdHMvJ1xyXG4gICAgICAgICAgPjwvU3ViamVjdD5cclxuICAgICAgICApKX1cclxuICAgICAgICA8U3ViamVjdFxyXG4gICAgICAgICAgcGF0aHM9e3BhdGguc2xpY2UoLTIsKX1cclxuICAgICAgICAgIHN1YmplY3Q9J2NvbXBvbmVudCdcclxuICAgICAgICAgIGl0ZW1zPXtjb21wb25lbnRzfVxyXG4gICAgICAgICAgYmFzZVBhdGggPSAnLydcclxuICAgICAgICA+PC9TdWJqZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgICNuYXYge1xyXG4gICAgICAgICAgICB6LWluZGV4OjEwMDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uIDpzdGlja3k7XHJcbiAgICAgICAgICAgIHRvcCA6IDA7XHJcbiAgICAgICAgICAgIGxlZnQgOiAwO1xyXG4gICAgICAgICAgICByaWdodCA6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZlZmNmZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICAgIGhlaWdodCA6IHZhcigtLW5hdkhlaWdodCk7XHJcbiAgICAgICAgICAgIHBhZGRpbmcgOiAwLjZyZW0gMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNuYXYgLnNob3cge2Rpc3BsYXk6YmxvY2t9XHJcbiAgICAgICAgICAubWFpbi10aXRsZSB7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxLjRyZW07Y3Vyc29yIDogcG9pbnRlcjsgIGxpbmUtaGVpZ2h0IDogMi40cmVtO31cclxuICAgICAgICAgIC5uYXYtbGlua3N7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6NXZ3O31cclxuICAgICAgICAgIC5uYXYtc3Vie2Rpc3BsYXk6aW5saW5lLWJsb2NrO2xpbmUtaGVpZ2h0OjIuNHJlbTtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tbGVmdDozdnc7Y3Vyc29yOnBvaW50ZXI7dGV4dC1hbGlnbjpsZWZ0fVxyXG4gICAgICAgICAgLm5hdi1zdWI6aG92ZXIgLm5hdi1pdGVtLWxpc3Qge2Rpc3BsYXk6YmxvY2t9XHJcbiAgICAgICAgICAubmF2LXN1Yj5zcGFuIHtwYWRkaW5nOjF2d31cclxuICAgICAgICAgIC5uYXYtaXRlbXMtd3JhcCB7IHBhZGRpbmctdG9wOjIwcHh9XHJcbiAgICAgICAgICAubmF2LWl0ZW0tbGlzdCB7ZGlzcGxheTpub25lO3Bvc2l0aW9uOiBhYnNvbHV0ZTtsaW5lLWhlaWdodDoyLjJyZW07d2lkdGg6MjAwcHg7cmlnaHQ6LTVweDt0b3A6ODUlO21pbi1oZWlnaHQ6YXV0bztib3JkZXI6MXB4IHNvbGlkICNlYWVhZWE7YmFja2dyb3VuZC1jb2xvcjojZmVmY2ZlO3BhZGRpbmc6MC4zcmVtfVxyXG4gICAgICAgICAgLm5hdi1pdGVte1xyXG4gICAgICAgICAgICBwYWRkaW5nOjByZW0gMC41cmVtO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmF2LWl0ZW06aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogcmdiYSgxMzUsNjQsMzMsMC4xKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hY3RpdmUge2NvbG9yOiAjMmY5YWVhO31cclxuICAgICAgICAgIC5uYXYtaXRlbS1saXN0OmFmdGVyLFxyXG4gICAgICAgICAgLm5hdi1pdGVtLWxpc3Q6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6MDtcclxuICAgICAgICAgICAgaGVpZ2h0OjA7XHJcbiAgICAgICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjbmF2IC5zaWRlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6Mi40cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MS42cmVtO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubW9iaWxlLXRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxLjFyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0IDogMi40cmVtO1xyXG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXYtaXRlbS1saXN0OmFmdGVyIHtcclxuICAgICAgICAgICAgbGVmdDogMTcwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGUgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXYtaXRlbS1saXN0OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE2OXB4O1xyXG4gICAgICAgICAgICB0b3A6LTIxcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgZ3JheSB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxMXB4O1xyXG4gICAgICAgICAgICB6LWluZGV4Oi0xXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICAubW9iaWxlLXRpdGxlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5IDogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXYtbGlua3MsIC5tYWluLXRpdGxlIHsgXHJcbiAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNuYXYgLnNpZGUtYnV0dG9uIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9