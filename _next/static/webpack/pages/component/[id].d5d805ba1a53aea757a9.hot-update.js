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

  var _useEffect = useEffect(true),
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
    }, this), sideNav ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_sideNav__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
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
      children: "#nav{z-index:1000;position :-webkit-sticky;position :sticky;top :0;left :0;right :0;background-color:#fefcfe;border-bottom:1px solid #eaeaea;height :var(--navHeight);padding :0.6rem 1rem;}#nav .show{display:block;}.main-title{display:inline-block;font-weight:700;font-size:1.4rem;cursor :pointer;line-height :2.4rem;}.nav-links{display:inline-block;position:absolute;right:5vw;}.nav-sub{display:inline-block;line-height:2.4rem;position:relative;margin-left:3vw;cursor:pointer;text-align:left;}.nav-sub:hover .nav-item-list{display:block;}.nav-sub>span{padding:1vw;}.nav-items-wrap{padding-top:20px;}.nav-item-list{display:none;position:absolute;line-height:2.2rem;width:200px;right:-5px;top:85%;min-height:auto;border:1px solid #eaeaea;background-color:#fefcfe;padding:0.3rem;}.nav-item{padding:0rem 0.5rem;-webkit-transition:0.3s;transition:0.3s;}.nav-item:hover{background-color :rgba(135,64,33,0.1);}.active{color:#2f9aea;}.nav-item-list:after,.nav-item-list:before{content:'';position:absolute;width:0;height:0;top:-20px;border-style:solid;}#nav .side-button{display:none;line-height:2.4rem;font-size:1.6rem;cursor:pointer;}.mobile-title{display:none;font-weight:600;font-size:1.1rem;line-height :2.4rem;float:right;}.nav-item-list:after{left:170px;border-color:transparent transparent white transparent;border-width:10px;}.nav-item-list:before{left:169px;top:-21px;border-color:transparent transparent gray transparent;border-width:11px;z-index:-1;}@media screen and (max-width:767px){.mobile-title{display :inline-block;}.nav-links,.main-title{display:none;}#nav .side-button{display:inline-block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3NvbmcxMFxcRGVza3RvcFxcbmV4dGpzLWJsb2dcXGNvbXBvbmVudHNcXG5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RVMsQUFHeUIsQUFVUyxBQUNTLEFBQ0YsQUFDRixBQUNjLEFBQ2xCLEFBQ1EsQUFDTCxBQUVOLEFBSW1CLEFBRWxCLEFBR1QsQUFRQyxBQU1BLEFBT0QsQUFLQSxBQVFhLEFBR1YsQUFHUSxXQXZDSixBQXFCcUMsQUFLOUMsQ0F4Q2MsQ0FkUCxBQWdCMkIsQUFvQnpCLEFBTUgsQUF1QmYsQ0F4RHNCLEFBSW1CLEFBV3BCLEdBVFUsR0FLbEMsQ0FWZ0QsQUFDQSxBQUNELEFBMkNVLEFBYXRELENBTkEsT0FqQ08sQUFjUyxFQTNCNkMsQ0FxQjdDLEtBM0I2QyxBQW9CckQsQ0FQVixDQVp3RCxDQUNPLE1BbUJuRCxBQWFVLEdBakNtQyxBQTJCeEMsQ0F0QnlELElBTkssQ0FUdEUsQ0ErQlksRUFwQnlELEVBUTlFLEVBbEJVLEFBYzBFLEVBdUJwRixFQU1hLEFBS08sSUEvQ1QsQUFPMEYsR0FNVixDQUpDLENBcUI1RixBQXVCb0IsR0FWcEIsQ0ExQzBCLEVBWWdGLEdBbUMxRyxLQXZDMEcsQ0FGSixHQWdEdkcsSUExQ21JLE9BWGhHLEFBcURsQyxDQTlDMkcsaUJBSStDLGNBVi9ILFdBVTRJLGNBVGhKLENBU2lKLG9CQVJ4SyIsImZpbGUiOiJDOlxcVXNlcnNcXHNzb25nMTBcXERlc2t0b3BcXG5leHRqcy1ibG9nXFxjb21wb25lbnRzXFxuYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayAgIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgcG9zdHMsIGNvbXBvbmVudHMgfSBmcm9tICcuLi9saWIvRklMRSdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBTaWRlTmF2IGZyb20gJy4vc2lkZU5hdidcclxuY29uc3QgSXRlbSA9ICh7aXRlbSxwYXRoLG1hdGNofSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtwYXRofVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJuYXYtaXRlbSBcIiArIChtYXRjaD8nYWN0aXZlJzonJyl9PlxyXG4gICAgICAgIDxzcGFuPntpdGVtfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xpbms+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBTdWJqZWN0ID0gKHtwYXRocyxzdWJqZWN0LGl0ZW1zLGJhc2VQYXRofSkgPT4ge1xyXG4gIGNvbnN0IG1hdGNoU3ViID0gcGF0aHNbMF0gPT09IHN1YmplY3RcclxuICBjb25zdCBtYXRjaEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIHBhdGhzWzFdID09PSBpdGVtXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1zdWJcIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXttYXRjaFN1YiA/ICdhY3RpdmUnIDogJyd9PntzdWJqZWN0fTwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbXMtd3JhcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW0tbGlzdFwiPlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSxpZHgpID0+IChcclxuICAgICAgICAgICAgPEl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2lkeH0gcGF0aD17YmFzZVBhdGgrc3ViamVjdCsnLycraXRlbX0gaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICBtYXRjaD17bWF0Y2hTdWIgJiBtYXRjaEl0ZW0oaXRlbSl9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5jb25zdCBtb2JpbGV0aXRsZSA9IChwYXRoKSA9PiB7XHJcbiAgY29uc3QgW3N1YixpdGVtXSA9IHBhdGhcclxuICBpZiAoc3ViICYmIGl0ZW0pe1xyXG4gICAgcmV0dXJuIGBbICR7c3VifSBdICR7aXRlbX1gXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBgWyBTc29uZzEwIF1gXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpIHtcclxuICBjb25zdCBbc2lkZU5hdiwgc2V0U2lkZU5hdl0gPSB1c2VFZmZlY3QodHJ1ZSlcclxuICBjb25zdCB7IGFzUGF0aCB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcGF0aCA9IGRlY29kZVVSSShhc1BhdGgpLnRyaW0oJy8nKS5zcGxpdCgnLycpXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgaWQ9XCJuYXZcIj5cclxuICAgICAgPGkgY2xhc3NOYW1lPVwic2lkZS1idXR0b24gZmFzIGZhLWJhcnNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPlNzb25nMTA8L3NwYW4+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9iaWxlLXRpdGxlXCI+e21vYmlsZXRpdGxlKHBhdGguc2xpY2UoLTIsKSl9PC9zcGFuPlxyXG4gICAgICB7c2lkZU5hdiA/IDxTaWRlTmF2PjwvU2lkZU5hdj4gOiAnJ31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5cclxuICAgICAgICB7cG9zdHMubWFwKChwb3N0LGlkeCkgPT4gKFxyXG4gICAgICAgICAgPFN1YmplY3RcclxuICAgICAgICAgICAgcGF0aHM9e3BhdGguc2xpY2UoLTIsKX1cclxuICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgIHN1YmplY3Q9e3Bvc3Quc3ViamVjdH1cclxuICAgICAgICAgICAgaXRlbXM9e3Bvc3QuaXRlbXN9XHJcbiAgICAgICAgICAgIGJhc2VQYXRoID0gJy9wb3N0cy8nXHJcbiAgICAgICAgICA+PC9TdWJqZWN0PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxTdWJqZWN0XHJcbiAgICAgICAgICBwYXRocz17cGF0aC5zbGljZSgtMiwpfVxyXG4gICAgICAgICAgc3ViamVjdD0nY29tcG9uZW50J1xyXG4gICAgICAgICAgaXRlbXM9e2NvbXBvbmVudHN9XHJcbiAgICAgICAgICBiYXNlUGF0aCA9ICcvJ1xyXG4gICAgICAgID48L1N1YmplY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgI25hdiB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6MTAwMDtcclxuICAgICAgICAgICAgcG9zaXRpb24gOnN0aWNreTtcclxuICAgICAgICAgICAgdG9wIDogMDtcclxuICAgICAgICAgICAgbGVmdCA6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0IDogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmVmY2ZlO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgICAgaGVpZ2h0IDogdmFyKC0tbmF2SGVpZ2h0KTtcclxuICAgICAgICAgICAgcGFkZGluZyA6IDAuNnJlbSAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgI25hdiAuc2hvdyB7ZGlzcGxheTpibG9ja31cclxuICAgICAgICAgIC5tYWluLXRpdGxlIHtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjEuNHJlbTtjdXJzb3IgOiBwb2ludGVyOyAgbGluZS1oZWlnaHQgOiAyLjRyZW07fVxyXG4gICAgICAgICAgLm5hdi1saW5rc3tkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDo1dnc7fVxyXG4gICAgICAgICAgLm5hdi1zdWJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bGluZS1oZWlnaHQ6Mi40cmVtO3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbi1sZWZ0OjN2dztjdXJzb3I6cG9pbnRlcjt0ZXh0LWFsaWduOmxlZnR9XHJcbiAgICAgICAgICAubmF2LXN1Yjpob3ZlciAubmF2LWl0ZW0tbGlzdCB7ZGlzcGxheTpibG9ja31cclxuICAgICAgICAgIC5uYXYtc3ViPnNwYW4ge3BhZGRpbmc6MXZ3fVxyXG4gICAgICAgICAgLm5hdi1pdGVtcy13cmFwIHsgcGFkZGluZy10b3A6MjBweH1cclxuICAgICAgICAgIC5uYXYtaXRlbS1saXN0IHtkaXNwbGF5Om5vbmU7cG9zaXRpb246IGFic29sdXRlO2xpbmUtaGVpZ2h0OjIuMnJlbTt3aWR0aDoyMDBweDtyaWdodDotNXB4O3RvcDo4NSU7bWluLWhlaWdodDphdXRvO2JvcmRlcjoxcHggc29saWQgI2VhZWFlYTtiYWNrZ3JvdW5kLWNvbG9yOiNmZWZjZmU7cGFkZGluZzowLjNyZW19XHJcbiAgICAgICAgICAubmF2LWl0ZW17XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MHJlbSAwLjVyZW07XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3NcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXYtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgOiByZ2JhKDEzNSw2NCwzMywwLjEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFjdGl2ZSB7Y29sb3I6ICMyZjlhZWE7fVxyXG4gICAgICAgICAgLm5hdi1pdGVtLWxpc3Q6YWZ0ZXIsXHJcbiAgICAgICAgICAubmF2LWl0ZW0tbGlzdDpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDowO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MDtcclxuICAgICAgICAgICAgdG9wOiAtMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNuYXYgLnNpZGUtYnV0dG9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDoyLjRyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxLjZyZW07XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tb2JpbGUtdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEuMXJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQgOiAyLjRyZW07XHJcbiAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hdi1pdGVtLWxpc3Q6YWZ0ZXIge1xyXG4gICAgICAgICAgICBsZWZ0OiAxNzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hdi1pdGVtLWxpc3Q6YmVmb3JlIHtcclxuICAgICAgICAgICAgbGVmdDogMTY5cHg7XHJcbiAgICAgICAgICAgIHRvcDotMjFweDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCBncmF5IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDExcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6LTFcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgIC5tb2JpbGUtdGl0bGUge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXkgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdi1saW5rcywgLm1haW4tdGl0bGUgeyBcclxuICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI25hdiAuc2lkZS1idXR0b24ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ssong10\\\\Desktop\\\\nextjs-blog\\\\components\\\\nav.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOlsiSXRlbSIsIml0ZW0iLCJwYXRoIiwibWF0Y2giLCJTdWJqZWN0IiwicGF0aHMiLCJzdWJqZWN0IiwiaXRlbXMiLCJiYXNlUGF0aCIsIm1hdGNoU3ViIiwibWF0Y2hJdGVtIiwibWFwIiwiaWR4IiwibW9iaWxldGl0bGUiLCJzdWIiLCJOYXYiLCJ1c2VFZmZlY3QiLCJzaWRlTmF2Iiwic2V0U2lkZU5hdiIsInVzZVJvdXRlciIsImFzUGF0aCIsImRlY29kZVVSSSIsInRyaW0iLCJzcGxpdCIsInNsaWNlIiwicG9zdHMiLCJwb3N0IiwiY29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXVCO0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQWhCQyxJQUFnQixRQUFoQkEsSUFBZ0I7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFDbEMsc0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVELElBQVo7QUFBQSwyQkFFRTtBQUFLLGVBQVMsRUFBRSxlQUFlQyxLQUFLLEdBQUMsUUFBRCxHQUFVLEVBQTlCLENBQWhCO0FBQUEsNkJBQ0U7QUFBQSxrQkFBT0Y7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBVEQ7O0tBQU1ELEk7O0FBV04sSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsUUFBb0M7QUFBQSxNQUFsQ0MsS0FBa0MsU0FBbENBLEtBQWtDO0FBQUEsTUFBNUJDLE9BQTRCLFNBQTVCQSxPQUE0QjtBQUFBLE1BQXBCQyxLQUFvQixTQUFwQkEsS0FBb0I7QUFBQSxNQUFkQyxRQUFjLFNB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QUksQ0FBQ25CLEtBSmQ7QUFLRSxrQkFBUSxFQUFHO0FBTGIsV0FFT0ssR0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURTO0FBQUEsT0FBVixDQURILGVBVUUscUVBQUMsT0FBRDtBQUNFLGFBQUssRUFBRVYsSUFBSSxDQUFDc0IsS0FBTCxDQUFXLENBQUMsQ0FBWixDQURUO0FBRUUsZUFBTyxFQUFDLFdBRlY7QUFHRSxhQUFLLEVBQUVHLG9EQUhUO0FBSUUsZ0JBQVEsRUFBRztBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVHRDs7R0EzR3VCWixHO1VBRUhJLHFEOzs7TUFGR0osRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb21wb25lbnQvW2lkXS5kNWQ4MDViYTFhNTNhZWE3NTdhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgICBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHBvc3RzLCBjb21wb25lbnRzIH0gZnJvbSAnLi4vbGliL0ZJTEUnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU2lkZU5hdiBmcm9tICcuL3NpZGVOYXYnXHJcbmNvbnN0IEl0ZW0gPSAoe2l0ZW0scGF0aCxtYXRjaH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17cGF0aH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wibmF2LWl0ZW0gXCIgKyAobWF0Y2g/J2FjdGl2ZSc6JycpfT5cclxuICAgICAgICA8c3Bhbj57aXRlbX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgU3ViamVjdCA9ICh7cGF0aHMsc3ViamVjdCxpdGVtcyxiYXNlUGF0aH0pID0+IHtcclxuICBjb25zdCBtYXRjaFN1YiA9IHBhdGhzWzBdID09PSBzdWJqZWN0XHJcbiAgY29uc3QgbWF0Y2hJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiBwYXRoc1sxXSA9PT0gaXRlbVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtc3ViXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17bWF0Y2hTdWIgPyAnYWN0aXZlJyA6ICcnfT57c3ViamVjdH08L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1zLXdyYXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtLWxpc3RcIj5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0saWR4KSA9PiAoXHJcbiAgICAgICAgICAgIDxJdGVtXHJcbiAgICAgICAgICAgICAga2V5PXtpZHh9IHBhdGg9e2Jhc2VQYXRoK3N1YmplY3QrJy8nK2l0ZW19IGl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgICAgbWF0Y2g9e21hdGNoU3ViICYgbWF0Y2hJdGVtKGl0ZW0pfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuY29uc3QgbW9iaWxldGl0bGUgPSAocGF0aCkgPT4ge1xyXG4gIGNvbnN0IFtzdWIsaXRlbV0gPSBwYXRoXHJcbiAgaWYgKHN1YiAmJiBpdGVtKXtcclxuICAgIHJldHVybiBgWyAke3N1Yn0gXSAke2l0ZW19YFxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYFsgU3NvbmcxMCBdYFxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XHJcbiAgY29uc3QgW3NpZGVOYXYsIHNldFNpZGVOYXZdID0gdXNlRWZmZWN0KHRydWUpXHJcbiAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHBhdGggPSBkZWNvZGVVUkkoYXNQYXRoKS50cmltKCcvJykuc3BsaXQoJy8nKVxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGlkPVwibmF2XCI+XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cInNpZGUtYnV0dG9uIGZhcyBmYS1iYXJzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5Tc29uZzEwPC9zcGFuPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vYmlsZS10aXRsZVwiPnttb2JpbGV0aXRsZShwYXRoLnNsaWNlKC0yLCkpfTwvc3Bhbj5cclxuICAgICAge3NpZGVOYXYgPyA8U2lkZU5hdj48L1NpZGVOYXY+IDogJyd9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWxpbmtzXCI+XHJcbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCxpZHgpID0+IChcclxuICAgICAgICAgIDxTdWJqZWN0XHJcbiAgICAgICAgICAgIHBhdGhzPXtwYXRoLnNsaWNlKC0yLCl9XHJcbiAgICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgICBzdWJqZWN0PXtwb3N0LnN1YmplY3R9XHJcbiAgICAgICAgICAgIGl0ZW1zPXtwb3N0Lml0ZW1zfVxyXG4gICAgICAgICAgICBiYXNlUGF0aCA9ICcvcG9zdHMvJ1xyXG4gICAgICAgICAgPjwvU3ViamVjdD5cclxuICAgICAgICApKX1cclxuICAgICAgICA8U3ViamVjdFxyXG4gICAgICAgICAgcGF0aHM9e3BhdGguc2xpY2UoLTIsKX1cclxuICAgICAgICAgIHN1YmplY3Q9J2NvbXBvbmVudCdcclxuICAgICAgICAgIGl0ZW1zPXtjb21wb25lbnRzfVxyXG4gICAgICAgICAgYmFzZVBhdGggPSAnLydcclxuICAgICAgICA+PC9TdWJqZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgICNuYXYge1xyXG4gICAgICAgICAgICB6LWluZGV4OjEwMDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uIDpzdGlja3k7XHJcbiAgICAgICAgICAgIHRvcCA6IDA7XHJcbiAgICAgICAgICAgIGxlZnQgOiAwO1xyXG4gICAgICAgICAgICByaWdodCA6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2ZlZmNmZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICAgIGhlaWdodCA6IHZhcigtLW5hdkhlaWdodCk7XHJcbiAgICAgICAgICAgIHBhZGRpbmcgOiAwLjZyZW0gMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICNuYXYgLnNob3cge2Rpc3BsYXk6YmxvY2t9XHJcbiAgICAgICAgICAubWFpbi10aXRsZSB7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc2l6ZToxLjRyZW07Y3Vyc29yIDogcG9pbnRlcjsgIGxpbmUtaGVpZ2h0IDogMi40cmVtO31cclxuICAgICAgICAgIC5uYXYtbGlua3N7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6NXZ3O31cclxuICAgICAgICAgIC5uYXYtc3Vie2Rpc3BsYXk6aW5saW5lLWJsb2NrO2xpbmUtaGVpZ2h0OjIuNHJlbTtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW4tbGVmdDozdnc7Y3Vyc29yOnBvaW50ZXI7dGV4dC1hbGlnbjpsZWZ0fVxyXG4gICAgICAgICAgLm5hdi1zdWI6aG92ZXIgLm5hdi1pdGVtLWxpc3Qge2Rpc3BsYXk6YmxvY2t9XHJcbiAgICAgICAgICAubmF2LXN1Yj5zcGFuIHtwYWRkaW5nOjF2d31cclxuICAgICAgICAgIC5uYXYtaXRlbXMtd3JhcCB7IHBhZGRpbmctdG9wOjIwcHh9XHJcbiAgICAgICAgICAubmF2LWl0ZW0tbGlzdCB7ZGlzcGxheTpub25lO3Bvc2l0aW9uOiBhYnNvbHV0ZTtsaW5lLWhlaWdodDoyLjJyZW07d2lkdGg6MjAwcHg7cmlnaHQ6LTVweDt0b3A6ODUlO21pbi1oZWlnaHQ6YXV0bztib3JkZXI6MXB4IHNvbGlkICNlYWVhZWE7YmFja2dyb3VuZC1jb2xvcjojZmVmY2ZlO3BhZGRpbmc6MC4zcmVtfVxyXG4gICAgICAgICAgLm5hdi1pdGVte1xyXG4gICAgICAgICAgICBwYWRkaW5nOjByZW0gMC41cmVtO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubmF2LWl0ZW06aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogcmdiYSgxMzUsNjQsMzMsMC4xKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hY3RpdmUge2NvbG9yOiAjMmY5YWVhO31cclxuICAgICAgICAgIC5uYXYtaXRlbS1saXN0OmFmdGVyLFxyXG4gICAgICAgICAgLm5hdi1pdGVtLWxpc3Q6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6MDtcclxuICAgICAgICAgICAgaGVpZ2h0OjA7XHJcbiAgICAgICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAjbmF2IC5zaWRlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6Mi40cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MS42cmVtO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubW9iaWxlLXRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxLjFyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0IDogMi40cmVtO1xyXG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXYtaXRlbS1saXN0OmFmdGVyIHtcclxuICAgICAgICAgICAgbGVmdDogMTcwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGUgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uYXYtaXRlbS1saXN0OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE2OXB4O1xyXG4gICAgICAgICAgICB0b3A6LTIxcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgZ3JheSB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxMXB4O1xyXG4gICAgICAgICAgICB6LWluZGV4Oi0xXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICAubW9iaWxlLXRpdGxlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5IDogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uYXYtbGlua3MsIC5tYWluLXRpdGxlIHsgXHJcbiAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNuYXYgLnNpZGUtYnV0dG9uIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9