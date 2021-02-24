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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_FILE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/FILE */ "./lib/FILE.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\ssong10\\Desktop\\nextjs-blog\\components\\nav.js",
    _this = undefined,
    _s = $RefreshSig$();






var Item = function Item(_ref) {
  var item = _ref.item,
      path = _ref.path,
      match = _ref.match;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: path,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "nav-item " + (match ? 'active' : ''),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "nav-sub ".concat(matchSub ? 'active' : ''),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: subject
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "nav-items-wrap",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "nav-item-list",
        children: items.map(function (item, idx) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Item, {
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
function Nav() {
  _s();

  var _this2 = this;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      asPath = _useRouter.asPath;

  var path = decodeURI(asPath).trim('/').split('/');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    id: "nav",
    className: "jsx-1166079834",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      "aria-hidden": "true",
      className: "jsx-1166079834" + " " + "side-button fas fa-bars"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "jsx-1166079834" + " " + "main-title",
        children: "Ssong10"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "jsx-1166079834" + " " + "mobile-title",
      children: "[ Ssong 10 ]"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-1166079834" + " " + "nav-links",
      children: [_lib_FILE__WEBPACK_IMPORTED_MODULE_3__["posts"].map(function (post, idx) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Subject, {
          paths: path.slice(-2),
          subject: post.subject,
          items: post.items,
          basePath: "/posts/"
        }, idx, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this2);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Subject, {
        paths: path.slice(-2),
        subject: "component",
        items: _lib_FILE__WEBPACK_IMPORTED_MODULE_3__["components"],
        basePath: "/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1166079834",
      children: "#nav{z-index:1000;position :-webkit-sticky;position :sticky;top :0;left :0;right :0;background-color:#fefcfe;border-bottom:1px solid #eaeaea;height :var(--navHeight);padding :0.6rem 1rem;}#nav .show{display:block;}.main-title{display:inline-block;font-weight:700;font-size:1.4rem;cursor :pointer;line-height :2.4rem;}.nav-links{display:inline-block;position:absolute;right:5vw;}.mobile-title{display:none;font-weight:600;font-size:1.1rem;line-height :2.4rem;float:right;}.nav-sub{display:inline-block;line-height:2.4rem;position:relative;margin-left:3vw;cursor:pointer;text-align:left;}.nav-sub:hover .nav-item-list{display:block;}.nav-sub>span{padding:1vw;}.nav-items-wrap{padding-top:20px;}.nav-item-list{display:none;position:absolute;line-height:2.2rem;width:200px;right:-5px;top:85%;min-height:auto;border:1px solid #eaeaea;background-color:#fefcfe;padding:0.3rem;}.nav-item{padding:0rem 0.5rem;-webkit-transition:0.3s;transition:0.3s;}.nav-item:hover{background-color :rgba(135,64,33,0.1);}.active{color:#2f9aea;}.nav-item-list:after,.nav-item-list:before{content:'';position:absolute;width:0;height:0;top:-20px;border-style:solid;}.nav-item-list:after{left:170px;border-color:transparent transparent white transparent;border-width:10px;}.nav-item-list:before{left:169px;top:-21px;border-color:transparent transparent gray transparent;border-width:11px;z-index:-1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3NvbmcxMFxcRGVza3RvcFxcbmV4dGpzLWJsb2dcXGNvbXBvbmVudHNcXG5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRVMsQUFHeUIsQUFVUyxBQUNTLEFBQ0YsQUFFaEIsQUFNYyxBQUNjLEFBQ2xCLEFBQ1EsQUFDTCxBQUVOLEFBSW1CLEFBRWxCLEFBR1QsQUFRQSxBQUtBLFdBWk8sQUFRcUMsQUFLOUMsQ0EzQmMsQ0FyQlAsQUFjRCxBQVM0QixDQWRyQixBQVdtQixBQVdwQixHQVRVLEdBS2xDLENBakJnRCxBQUNBLEFBUUQsQUE4QlUsUUFsQ3RDLEFBcUJULEVBYnNELE1BYkEsQUEyQnJELENBUFYsQ0FuQndELENBUU8sTUFIekMsQUFzQlYsR0EzQjZDLENBWWlCLElBYkssQ0FUdEUsQ0FzQ1ksRUFwQnlELEVBUTlFLEVBekJVLEFBcUIwRSxJQU52RSxBQTJCTyxJQXpDVCxBQU8wRixHQWFWLENBSkMsQ0FxQjVGLEFBVW9CLEdBaENwQixDQWQwQixFQW1CZ0YsR0FzQjFHLEtBMUIwRyxDQVRKLEdBMEN2RyxJQTdCbUksT0FsQmhHLEFBK0NsQyxDQWpDMkcsaUJBSStDLGNBakIvSCxXQWlCNEksY0FoQmhKLENBZ0JpSixvQkFmeEsiLCJmaWxlIjoiQzpcXFVzZXJzXFxzc29uZzEwXFxEZXNrdG9wXFxuZXh0anMtYmxvZ1xcY29tcG9uZW50c1xcbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgICBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHBvc3RzLCBjb21wb25lbnRzIH0gZnJvbSAnLi4vbGliL0ZJTEUnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgSXRlbSA9ICh7aXRlbSxwYXRoLG1hdGNofSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtwYXRofVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJuYXYtaXRlbSBcIiArIChtYXRjaD8nYWN0aXZlJzonJyl9PlxyXG4gICAgICAgIDxzcGFuPntpdGVtfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xpbms+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBTdWJqZWN0ID0gKHtwYXRocyxzdWJqZWN0LGl0ZW1zLGJhc2VQYXRofSkgPT4ge1xyXG4gIGNvbnN0IG1hdGNoU3ViID0gcGF0aHNbMF0gPT09IHN1YmplY3RcclxuICBjb25zdCBtYXRjaEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIHBhdGhzWzFdID09PSBpdGVtXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG5hdi1zdWIgJHttYXRjaFN1YiA/ICdhY3RpdmUnIDogJyd9YH0+XHJcbiAgICAgIDxzcGFuPntzdWJqZWN0fTwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbXMtd3JhcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW0tbGlzdFwiPlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSxpZHgpID0+IChcclxuICAgICAgICAgICAgPEl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2lkeH0gcGF0aD17YmFzZVBhdGgrc3ViamVjdCsnLycraXRlbX0gaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICBtYXRjaD17bWF0Y2hTdWIgJiBtYXRjaEl0ZW0oaXRlbSl9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xyXG4gIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwYXRoID0gZGVjb2RlVVJJKGFzUGF0aCkudHJpbSgnLycpLnNwbGl0KCcvJylcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBpZD1cIm5hdlwiPlxyXG4gICAgICA8aSBjbGFzc05hbWU9XCJzaWRlLWJ1dHRvbiBmYXMgZmEtYmFyc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYWluLXRpdGxlXCI+U3NvbmcxMDwvc3Bhbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb2JpbGUtdGl0bGVcIj5bIFNzb25nIDEwIF08L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCI+XHJcbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCxpZHgpID0+IChcclxuICAgICAgICAgIDxTdWJqZWN0XHJcbiAgICAgICAgICAgIHBhdGhzPXtwYXRoLnNsaWNlKC0yLCl9XHJcbiAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICBzdWJqZWN0PXtwb3N0LnN1YmplY3R9XHJcbiAgICAgICAgICAgIGl0ZW1zPXtwb3N0Lml0ZW1zfVxyXG4gICAgICAgICAgICBiYXNlUGF0aCA9ICcvcG9zdHMvJ1xyXG4gICAgICAgICAgPjwvU3ViamVjdD5cclxuICAgICAgICApKX1cclxuICAgICAgICA8U3ViamVjdFxyXG4gICAgICAgICAgcGF0aHM9e3BhdGguc2xpY2UoLTIsKX1cclxuICAgICAgICAgIHN1YmplY3Q9J2NvbXBvbmVudCdcclxuICAgICAgICAgIGl0ZW1zPXtjb21wb25lbnRzfVxyXG4gICAgICAgICAgYmFzZVBhdGggPSAnLydcclxuICAgICAgICA+PC9TdWJqZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgICNuYXYge1xyXG4gICAgICAgICAgICB6LWluZGV4OjEwMDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uIDpzdGlja3k7XHJcbiAgICAgICAgICAgIHRvcCA6IDA7XHJcbiAgICAgICAgICAgIGxlZnQgOiAwO1xyXG4gICAgICAgICAgICByaWdodCA6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZlZmNmZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICAgIGhlaWdodCA6IHZhcigtLW5hdkhlaWdodCk7XHJcbiAgICAgICAgICAgIHBhZGRpbmcgOiAwLjZyZW0gMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNuYXYgLnNob3cge2Rpc3BsYXk6YmxvY2t9XHJcbiAgICAgICAgICAubWFpbi10aXRsZSB7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxLjRyZW07Y3Vyc29yIDogcG9pbnRlcjsgIGxpbmUtaGVpZ2h0IDogMi40cmVtO31cclxuICAgICAgICAgIC5uYXYtbGlua3N7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6NXZ3O31cclxuICAgICAgICAgIC5tb2JpbGUtdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEuMXJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQgOiAyLjRyZW07XHJcbiAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hdi1zdWJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bGluZS1oZWlnaHQ6Mi40cmVtO3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbi1sZWZ0OjN2dztjdXJzb3I6cG9pbnRlcjt0ZXh0LWFsaWduOmxlZnR9XHJcbiAgICAgICAgICAubmF2LXN1Yjpob3ZlciAubmF2LWl0ZW0tbGlzdCB7ZGlzcGxheTpibG9ja31cclxuICAgICAgICAgIC5uYXYtc3ViPnNwYW4ge3BhZGRpbmc6MXZ3fVxyXG4gICAgICAgICAgLm5hdi1pdGVtcy13cmFwIHsgcGFkZGluZy10b3A6MjBweH1cclxuICAgICAgICAgIC5uYXYtaXRlbS1saXN0IHtkaXNwbGF5Om5vbmU7cG9zaXRpb246IGFic29sdXRlO2xpbmUtaGVpZ2h0OjIuMnJlbTt3aWR0aDoyMDBweDtyaWdodDotNXB4O3RvcDo4NSU7bWluLWhlaWdodDphdXRvO2JvcmRlcjoxcHggc29saWQgI2VhZWFlYTtiYWNrZ3JvdW5kLWNvbG9yOiNmZWZjZmU7cGFkZGluZzowLjNyZW19XHJcbiAgICAgICAgICAubmF2LWl0ZW17XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MHJlbSAwLjVyZW07XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3NcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXYtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgOiByZ2JhKDEzNSw2NCwzMywwLjEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFjdGl2ZSB7Y29sb3I6ICMyZjlhZWE7fVxyXG4gICAgICAgICAgLm5hdi1pdGVtLWxpc3Q6YWZ0ZXIsXHJcbiAgICAgICAgICAubmF2LWl0ZW0tbGlzdDpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDowO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MDtcclxuICAgICAgICAgICAgdG9wOiAtMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXYtaXRlbS1saXN0OmFmdGVyIHtcclxuICAgICAgICAgICAgbGVmdDogMTcwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGUgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXYtaXRlbS1saXN0OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE2OXB4O1xyXG4gICAgICAgICAgICB0b3A6LTIxcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgZ3JheSB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxMXB4O1xyXG4gICAgICAgICAgICB6LWluZGV4Oi0xXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ssong10\\\\Desktop\\\\nextjs-blog\\\\components\\\\nav.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

_s(Nav, "9pMG9Ra3x5O/yaZiUz6XxVJ+Rds=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiSXRlbSIsIml0ZW0iLCJwYXRoIiwibWF0Y2giLCJTdWJqZWN0IiwicGF0aHMiLCJzdWJqZWN0IiwiaXRlbXMiLCJiYXNlUGF0aCIsIm1hdGNoU3ViIiwibWF0Y2hJdGVtIiwibWFwIiwiaWR4IiwiTmF2IiwidXNlUm91dGVyIiwiYXNQYXRoIiwiZGVjb2RlVVJJIiwidHJpbSIsInNwbGl0IiwicG9zdHMiLCJwb3N0Iiwic2xpY2UiLCJjb21wb25lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXVCO0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQWhCQyxJQUFnQixRQUFoQkEsSUFBZ0I7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFDbEMsc0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVELElBQVo7QUFBQSwyQkFFRTtBQUFLLGVBQVMsRUFBRSxlQUFlQyxLQUFLLEdBQUMsUUFBRCxHQUFVLEVBQTlCLENBQWhCO0FBQUEsNkJBQ0U7QUFBQSxrQkFBT0Y7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBVEQ7O0tBQU1ELEk7O0FBV04sSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsUUFBb0M7QUFBQSxNQUFsQ0MsS0FBa0MsU0FBbENBLEtBQWtDO0FBQUEsTUFBNUJDLE9BQTRCLFNBQTVCQSxPQUE0QjtBQUFBLE1BQXBCQyxLQUFvQixTQUFwQkEsS0FBb0I7QUFBQSxNQUFkQyxRQUFjLFNBQWRBLFFBQWM7QUFDbEQsTUFBTUMsUUFBUSxHQUFHSixLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWFDLE9BQTlCOztBQUNBLE1BQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNULElBQUQsRUFBVTtBQUMxQixXQUFPSSxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWFKLElBQXBCO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRTtBQUFLLGFBQVMsb0JBQWFRLFFBQVEsR0FBRyxRQUFILEdBQWMsRUFBbkMsQ0FBZDtBQUFBLDRCQUNFO0FBQUEsZ0JBQU9IO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGtCQUNHQyxLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFDVixJQUFELEVBQU1XLEdBQU47QUFBQSw4QkFDVCxxRUFBQyxJQUFEO0FBQ1ksZ0JBQUksRUFBRUosUUFBUSxHQUFDRixPQUFULEdBQWlCLEdBQWpCLEdBQXFCTCxJQUR2QztBQUM2QyxnQkFBSSxFQUFFQSxJQURuRDtBQUVFLGlCQUFLLEVBQUVRLFFBQVEsR0FBR0MsU0FBUyxDQUFDVCxJQUFEO0FBRjdCLGFBQ09XLEdBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUztBQUFBLFNBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0FuQkQ7O01BQU1SLE87QUFxQlMsU0FBU1MsR0FBVCxHQUFlO0FBQUE7O0FBQUE7O0FBQUEsbUJBQ1RDLDZEQUFTLEVBREE7QUFBQSxNQUNwQkMsTUFEb0IsY0FDcEJBLE1BRG9COztBQUU1QixNQUFNYixJQUFJLEdBQUdjLFNBQVMsQ0FBQ0QsTUFBRCxDQUFULENBQWtCRSxJQUFsQixDQUF1QixHQUF2QixFQUE0QkMsS0FBNUIsQ0FBa0MsR0FBbEMsQ0FBYjtBQUNBLHNCQUNFO0FBQVEsTUFBRSxFQUFDLEtBQVg7QUFBQTtBQUFBLDRCQUNFO0FBQXVDLHFCQUFZLE1BQW5EO0FBQUEsMENBQWE7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFBQSw0Q0FBZ0IsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFLRTtBQUFBLDBDQUFnQixjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUU7QUFBQSwwQ0FBZSxXQUFmO0FBQUEsaUJBQ0dDLCtDQUFLLENBQUNSLEdBQU4sQ0FBVSxVQUFDUyxJQUFELEVBQU1SLEdBQU47QUFBQSw0QkFDVCxxRUFBQyxPQUFEO0FBQ0UsZUFBSyxFQUFFVixJQUFJLENBQUNtQixLQUFMLENBQVcsQ0FBQyxDQUFaLENBRFQ7QUFHRSxpQkFBTyxFQUFFRCxJQUFJLENBQUNkLE9BSGhCO0FBSUUsZUFBSyxFQUFFYyxJQUFJLENBQUNiLEtBSmQ7QUFLRSxrQkFBUSxFQUFHO0FBTGIsV0FFT0ssR0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURTO0FBQUEsT0FBVixDQURILGVBVUUscUVBQUMsT0FBRDtBQUNFLGFBQUssRUFBRVYsSUFBSSxDQUFDbUIsS0FBTCxDQUFXLENBQUMsQ0FBWixDQURUO0FBRUUsZUFBTyxFQUFDLFdBRlY7QUFHRSxhQUFLLEVBQUVDLG9EQUhUO0FBSUUsZ0JBQVEsRUFBRztBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFGRDs7R0F4RnVCVCxHO1VBQ0hDLHFEOzs7TUFER0QsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9bLi4uaWRdLmJmNmI3ZjNjOWUyMzg0N2VhMDQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayAgIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgcG9zdHMsIGNvbXBvbmVudHMgfSBmcm9tICcuLi9saWIvRklMRSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBJdGVtID0gKHtpdGVtLHBhdGgsbWF0Y2h9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e3BhdGh9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcIm5hdi1pdGVtIFwiICsgKG1hdGNoPydhY3RpdmUnOicnKX0+XHJcbiAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGluaz5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFN1YmplY3QgPSAoe3BhdGhzLHN1YmplY3QsaXRlbXMsYmFzZVBhdGh9KSA9PiB7XHJcbiAgY29uc3QgbWF0Y2hTdWIgPSBwYXRoc1swXSA9PT0gc3ViamVjdFxyXG4gIGNvbnN0IG1hdGNoSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gcGF0aHNbMV0gPT09IGl0ZW1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbmF2LXN1YiAke21hdGNoU3ViID8gJ2FjdGl2ZScgOiAnJ31gfT5cclxuICAgICAgPHNwYW4+e3N1YmplY3R9PC9zcGFuPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtcy13cmFwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbS1saXN0XCI+XHJcbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLGlkeCkgPT4gKFxyXG4gICAgICAgICAgICA8SXRlbVxyXG4gICAgICAgICAgICAgIGtleT17aWR4fSBwYXRoPXtiYXNlUGF0aCtzdWJqZWN0KycvJytpdGVtfSBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICAgIG1hdGNoPXttYXRjaFN1YiAmIG1hdGNoSXRlbShpdGVtKX0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XHJcbiAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHBhdGggPSBkZWNvZGVVUkkoYXNQYXRoKS50cmltKCcvJykuc3BsaXQoJy8nKVxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGlkPVwibmF2XCI+XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cInNpZGUtYnV0dG9uIGZhcyBmYS1iYXJzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5Tc29uZzEwPC9zcGFuPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vYmlsZS10aXRsZVwiPlsgU3NvbmcgMTAgXTwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5cclxuICAgICAgICB7cG9zdHMubWFwKChwb3N0LGlkeCkgPT4gKFxyXG4gICAgICAgICAgPFN1YmplY3RcclxuICAgICAgICAgICAgcGF0aHM9e3BhdGguc2xpY2UoLTIsKX1cclxuICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgIHN1YmplY3Q9e3Bvc3Quc3ViamVjdH1cclxuICAgICAgICAgICAgaXRlbXM9e3Bvc3QuaXRlbXN9XHJcbiAgICAgICAgICAgIGJhc2VQYXRoID0gJy9wb3N0cy8nXHJcbiAgICAgICAgICA+PC9TdWJqZWN0PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxTdWJqZWN0XHJcbiAgICAgICAgICBwYXRocz17cGF0aC5zbGljZSgtMiwpfVxyXG4gICAgICAgICAgc3ViamVjdD0nY29tcG9uZW50J1xyXG4gICAgICAgICAgaXRlbXM9e2NvbXBvbmVudHN9XHJcbiAgICAgICAgICBiYXNlUGF0aCA9ICcvJ1xyXG4gICAgICAgID48L1N1YmplY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgI25hdiB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6MTAwMDtcclxuICAgICAgICAgICAgcG9zaXRpb24gOnN0aWNreTtcclxuICAgICAgICAgICAgdG9wIDogMDtcclxuICAgICAgICAgICAgbGVmdCA6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0IDogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmVmY2ZlO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgICAgaGVpZ2h0IDogdmFyKC0tbmF2SGVpZ2h0KTtcclxuICAgICAgICAgICAgcGFkZGluZyA6IDAuNnJlbSAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI25hdiAuc2hvdyB7ZGlzcGxheTpibG9ja31cclxuICAgICAgICAgIC5tYWluLXRpdGxlIHtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjEuNHJlbTtjdXJzb3IgOiBwb2ludGVyOyAgbGluZS1oZWlnaHQgOiAyLjRyZW07fVxyXG4gICAgICAgICAgLm5hdi1saW5rc3tkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDo1dnc7fVxyXG4gICAgICAgICAgLm1vYmlsZS10aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MS4xcmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodCA6IDIuNHJlbTtcclxuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmF2LXN1YntkaXNwbGF5OmlubGluZS1ibG9jaztsaW5lLWhlaWdodDoyLjRyZW07cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luLWxlZnQ6M3Z3O2N1cnNvcjpwb2ludGVyO3RleHQtYWxpZ246bGVmdH1cclxuICAgICAgICAgIC5uYXYtc3ViOmhvdmVyIC5uYXYtaXRlbS1saXN0IHtkaXNwbGF5OmJsb2NrfVxyXG4gICAgICAgICAgLm5hdi1zdWI+c3BhbiB7cGFkZGluZzoxdnd9XHJcbiAgICAgICAgICAubmF2LWl0ZW1zLXdyYXAgeyBwYWRkaW5nLXRvcDoyMHB4fVxyXG4gICAgICAgICAgLm5hdi1pdGVtLWxpc3Qge2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjogYWJzb2x1dGU7bGluZS1oZWlnaHQ6Mi4ycmVtO3dpZHRoOjIwMHB4O3JpZ2h0Oi01cHg7dG9wOjg1JTttaW4taGVpZ2h0OmF1dG87Ym9yZGVyOjFweCBzb2xpZCAjZWFlYWVhO2JhY2tncm91bmQtY29sb3I6I2ZlZmNmZTtwYWRkaW5nOjAuM3JlbX1cclxuICAgICAgICAgIC5uYXYtaXRlbXtcclxuICAgICAgICAgICAgcGFkZGluZzowcmVtIDAuNXJlbTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hdi1pdGVtOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6IHJnYmEoMTM1LDY0LDMzLDAuMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0aXZlIHtjb2xvcjogIzJmOWFlYTt9XHJcbiAgICAgICAgICAubmF2LWl0ZW0tbGlzdDphZnRlcixcclxuICAgICAgICAgIC5uYXYtaXRlbS1saXN0OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOjA7XHJcbiAgICAgICAgICAgIGhlaWdodDowO1xyXG4gICAgICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hdi1pdGVtLWxpc3Q6YWZ0ZXIge1xyXG4gICAgICAgICAgICBsZWZ0OiAxNzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hdi1pdGVtLWxpc3Q6YmVmb3JlIHtcclxuICAgICAgICAgICAgbGVmdDogMTY5cHg7XHJcbiAgICAgICAgICAgIHRvcDotMjFweDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCBncmF5IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDExcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6LTFcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==