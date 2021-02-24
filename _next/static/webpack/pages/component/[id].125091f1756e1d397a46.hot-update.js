webpackHotUpdate_N_E("pages/component/[id]",{

/***/ "./pages/component/[id].js":
/*!*********************************!*\
  !*** ./pages/component/[id].js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/components */ "./lib/components.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\ssong10\\Desktop\\nextjs-blog\\pages\\component\\[id].js",
    _s = $RefreshSig$();





var __N_SSG = true;
function Component(_ref) {
  _s();

  var params = _ref.params,
      code = _ref.code;
  var id = params.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      url = _useState[0],
      setSrc = _useState[1]; // initial src will be empty


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('html'),
      type = _useState2[0],
      setType = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var bloburl = Object(_lib_components__WEBPACK_IMPORTED_MODULE_3__["getBlobUrl"])(code);
    setSrc(bloburl);
  }, [code]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    document.querySelector('code.show').classList.remove('show');
    document.querySelector("code#".concat(type)).classList.add('show');
  }, [type]);

  var onChange = function onChange(e) {
    if (e.target.classList.contains('btn')) {
      document.querySelector('.btn.select').classList.remove('select');
      e.target.classList.add('select');
      setType(e.target.innerText);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-2336713098" + " " + "code__container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "jsx-2336713098",
        children: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: onChange,
        className: "jsx-2336713098" + " " + "tab__wrap",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "jsx-2336713098" + " " + "btn select",
          children: "html"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "jsx-2336713098" + " " + "btn",
          children: "js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "jsx-2336713098" + " " + "btn",
          children: "css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-2336713098" + " " + "form__wrap",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
          className: "jsx-2336713098",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
            id: "html",
            className: "jsx-2336713098" + " " + "language-html show",
            children: code.html
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
          className: "jsx-2336713098",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
            id: "js",
            className: "jsx-2336713098" + " " + "language-js show",
            children: code.js
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
          className: "jsx-2336713098",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
            id: "css",
            className: "jsx-2336713098" + " " + "language-css show",
            children: code.css
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-2336713098" + " " + "code_preview",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          target: "_blank",
          href: url,
          className: "jsx-2336713098" + " " + "new_link",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            title: "\uC0C8 \uCC3D\uC73C\uB85C \uC5F4\uAE30",
            className: "jsx-2336713098" + " " + "open_preview"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
          src: url,
          className: "jsx-2336713098"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "2336713098",
        children: ".code__container.jsx-2336713098{margin:auto;width:80%;height:500px;}iframe.jsx-2336713098{width:100%;height:100%;}code.jsx-2336713098{width :100%;height :400px;display:none;box-sizing:border-box;}.show.jsx-2336713098{display:block;}.btn.jsx-2336713098{border:1px solid #9ea3a3;width:50px;padding:8px 6px;margin:5px;background-color:#e4e4e9;border-radius:5px;cursor:pointer;}.btn.select.jsx-2336713098{background-color:#babae3;}.code_preview.jsx-2336713098{position:relative;width :100%;height :500px;border:1px solid black;}.code_preview.jsx-2336713098 iframe.jsx-2336713098{width :100%;height:100%;}.code_preview.jsx-2336713098 .new_link.jsx-2336713098{position:absolute;top:10px;right:10px;width :10px;height:10px;background-color:gray;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3NvbmcxMFxcRGVza3RvcFxcbmV4dGpzLWJsb2dcXHBhZ2VzXFxjb21wb25lbnRcXFtpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURXLEFBRzBCLEFBS0EsQUFJQyxBQU9DLEFBSVksQUFVQSxBQUlSLEFBTUwsQUFJTSxXQXRDTixDQUxGLEFBU0ksQUErQkYsRUF4QmQsSUFrQmMsQUFVSixJQTNDSyxDQUtmLENBbUNBLENBckJhLEFBVWIsQ0FwQmMsQ0FtQ0QsR0FWRyxLQWpDaEIsQ0FtQmtCLEVBeUJKLENBbkNVLEtBeUJDLE1BV1gsRUF6QkQsU0FWYixDQW9Dd0IsQ0F6QkUsSUFjMUIsaUJBWUEsSUF6Qm9CLGtCQUNILGVBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc3NvbmcxMFxcRGVza3RvcFxcbmV4dGpzLWJsb2dcXHBhZ2VzXFxjb21wb25lbnRcXFtpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wb25lbnRzIH0gZnJvbSAnLi4vLi4vbGliL0ZJTEUnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCB7Z2V0QmxvYlVybH0gZnJvbSAnLi4vLi4vbGliL2NvbXBvbmVudHMnXHJcbmltcG9ydCB7Z2V0Q29tcG9uZW50fSBmcm9tICcuLi8uLi9saWIvZmlyZWJhc2UnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBvbmVudCh7cGFyYW1zLGNvZGV9KSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zXHJcbiAgY29uc3QgW3VybCwgc2V0U3JjXSA9IHVzZVN0YXRlKCcnKTsgLy8gaW5pdGlhbCBzcmMgd2lsbCBiZSBlbXB0eVxyXG4gIGNvbnN0IFsgdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZSgnaHRtbCcpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGJsb2J1cmwgPSBnZXRCbG9iVXJsKGNvZGUpXHJcbiAgICBzZXRTcmMoYmxvYnVybCk7XHJcbiAgfSwgW2NvZGVdKTtcclxuICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjb2RlLnNob3cnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGNvZGUjJHt0eXBlfWApLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxyXG4gIH0sW3R5cGVdKVxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bicpKXtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi5zZWxlY3QnKS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QnKVxyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QnKVxyXG4gICAgICBzZXRUeXBlKGUudGFyZ2V0LmlubmVyVGV4dClcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZV9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPntpZH08L2gxPlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17b25DaGFuZ2V9IGNsYXNzTmFtZT1cInRhYl9fd3JhcFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gc2VsZWN0XCI+aHRtbDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5qczwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5jc3M8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX3dyYXBcIj5cclxuICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImxhbmd1YWdlLWh0bWwgc2hvd1wiIGlkPVwiaHRtbFwiPntjb2RlLmh0bWx9PC9jb2RlPlxyXG4gICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJsYW5ndWFnZS1qcyBzaG93XCIgaWQ9XCJqc1wiPntjb2RlLmpzfTwvY29kZT5cclxuICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtY3NzIHNob3dcIiBpZD1cImNzc1wiPntjb2RlLmNzc308L2NvZGU+XHJcbiAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgIHsvKiA8dGV4dGFyZWEgZGlzYWJsZWQgdmFsdWU9e2NvZGUuaHRtbH0gY2xhc3NOYW1lPVwiY29kZWFyZWEgc2hvd1wiIG5hbWU9XCJcIiBpZD1cImh0bWxcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPHRleHRhcmVhIGRpc2FibGVkIHZhbHVlPXtjb2RlLmpzfSBjbGFzc05hbWU9XCJjb2RlYXJlYVwiIG5hbWU9XCJcIiBpZD1cImpzXCIgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgZGlzYWJsZWQgdmFsdWU9e2NvZGUuY3NzfSBjbGFzc05hbWU9XCJjb2RlYXJlYVwiIG5hbWU9XCJcIiBpZD1cImNzc1wiID48L3RleHRhcmVhPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGVfcHJldmlld1wiPlxyXG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17dXJsfSBjbGFzc05hbWU9XCJuZXdfbGlua1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wZW5fcHJldmlld1wiIHRpdGxlPVwi7IOIIOywveycvOuhnCDsl7TquLBcIj48L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxpZnJhbWUgc3JjPXt1cmx9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5jb2RlX19jb250YWluZXIgeyBcclxuICAgICAgICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWZyYW1lIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29kZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodCA6IDQwMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc2hvdyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzllYTNhMztcclxuICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggNnB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2U0ZTRlOTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYnRuLnNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFlMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmNvZGVfcHJldmlldyB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodCA6IDUwMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb2RlX3ByZXZpZXcgaWZyYW1lIHtcclxuICAgICAgICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb2RlX3ByZXZpZXcgLm5ld19saW5rIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOjEwcHg7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGggOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHBhdGhzID0gY29tcG9uZW50cy5tYXAoaXRlbT0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgaWQgOiBpdGVtXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbiAgLy8gUmV0dXJuIGEgbGlzdCBvZiBwb3NzaWJsZSB2YWx1ZSBmb3IgaWRcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIC8vIGNvbnN0IGNvZGUgPSB7XHJcbiAgLy8gICBodG1sIDogJzxkaXYgY2xhc3M9XCJyZWRcIj48L2Rpdj4nLFxyXG4gIC8vICAganMgOiAnJyxcclxuICAvLyAgIGNzcyA6ICcucmVkIHtiYWNrZ3JvdW5kLWNvbG9yOnJlZDt3aWR0aDoxMDBweDtoZWlnaHQ6MTAwcHg7J1xyXG4gIC8vIH1cclxuICBjb25zdCBjb2RlID0gYXdhaXQgZ2V0Q29tcG9uZW50KHBhcmFtcy5pZClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICBjb2RlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ssong10\\\\Desktop\\\\nextjs-blog\\\\pages\\\\component\\\\[id].js */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(Component, "0Z1iXWnrCSdU8rk+DA1N2gVU/34=");

_c = Component;

var _c;

$RefreshReg$(_c, "Component");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50Ly5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJwYXJhbXMiLCJjb2RlIiwiaWQiLCJ1c2VTdGF0ZSIsInVybCIsInNldFNyYyIsInR5cGUiLCJzZXRUeXBlIiwidXNlRWZmZWN0IiwiYmxvYnVybCIsImdldEJsb2JVcmwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJjb250YWlucyIsImlubmVyVGV4dCIsImh0bWwiLCJqcyIsImNzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUVlLFNBQVNBLFNBQVQsT0FBa0M7QUFBQTs7QUFBQSxNQUFkQyxNQUFjLFFBQWRBLE1BQWM7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFBQSxNQUN2Q0MsRUFEdUMsR0FDaENGLE1BRGdDLENBQ3ZDRSxFQUR1Qzs7QUFBQSxrQkFFekJDLHNEQUFRLENBQUMsRUFBRCxDQUZpQjtBQUFBLE1BRXhDQyxHQUZ3QztBQUFBLE1BRW5DQyxNQUZtQyxpQkFFWDs7O0FBRlcsbUJBR3RCRixzREFBUSxDQUFDLE1BQUQsQ0FIYztBQUFBLE1BR3ZDRyxJQUh1QztBQUFBLE1BR2pDQyxPQUhpQzs7QUFJL0NDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLE9BQU8sR0FBR0Msa0VBQVUsQ0FBQ1QsSUFBRCxDQUExQjtBQUNBSSxVQUFNLENBQUNJLE9BQUQsQ0FBTjtBQUNELEdBSFEsRUFHTixDQUFDUixJQUFELENBSE0sQ0FBVDtBQUlBTyx5REFBUyxDQUFDLFlBQUs7QUFDYkcsWUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLEVBQW9DQyxTQUFwQyxDQUE4Q0MsTUFBOUMsQ0FBcUQsTUFBckQ7QUFDQUgsWUFBUSxDQUFDQyxhQUFULGdCQUErQk4sSUFBL0IsR0FBdUNPLFNBQXZDLENBQWlERSxHQUFqRCxDQUFxRCxNQUFyRDtBQUNELEdBSFEsRUFHUCxDQUFDVCxJQUFELENBSE8sQ0FBVDs7QUFJQSxNQUFNVSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDdEIsUUFBSUEsQ0FBQyxDQUFDQyxNQUFGLENBQVNMLFNBQVQsQ0FBbUJNLFFBQW5CLENBQTRCLEtBQTVCLENBQUosRUFBdUM7QUFDckNSLGNBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixFQUFzQ0MsU0FBdEMsQ0FBZ0RDLE1BQWhELENBQXVELFFBQXZEO0FBQ0FHLE9BQUMsQ0FBQ0MsTUFBRixDQUFTTCxTQUFULENBQW1CRSxHQUFuQixDQUF1QixRQUF2QjtBQUNBUixhQUFPLENBQUNVLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxTQUFWLENBQVA7QUFDRDtBQUNGLEdBTkQ7O0FBT0Esc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSwyQkFDRTtBQUFBLDBDQUFlLGlCQUFmO0FBQUEsOEJBQ0U7QUFBQTtBQUFBLGtCQUFLbEI7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGVBQU8sRUFBRWMsUUFBZDtBQUFBLDRDQUFrQyxXQUFsQztBQUFBLGdDQUNFO0FBQUEsOENBQWtCLFlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSw4Q0FBa0IsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLDhDQUFrQixLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQU9FO0FBQUEsNENBQWUsWUFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQSxpQ0FDRTtBQUFxQyxjQUFFLEVBQUMsTUFBeEM7QUFBQSxnREFBZ0Isb0JBQWhCO0FBQUEsc0JBQWdEZixJQUFJLENBQUNvQjtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQUE7QUFBQSxpQ0FDRTtBQUFtQyxjQUFFLEVBQUMsSUFBdEM7QUFBQSxnREFBZ0Isa0JBQWhCO0FBQUEsc0JBQTRDcEIsSUFBSSxDQUFDcUI7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFPRTtBQUFBO0FBQUEsaUNBQ0U7QUFBb0MsY0FBRSxFQUFDLEtBQXZDO0FBQUEsZ0RBQWdCLG1CQUFoQjtBQUFBLHNCQUE4Q3JCLElBQUksQ0FBQ3NCO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBcUJFO0FBQUEsNENBQWUsY0FBZjtBQUFBLGdDQUNFO0FBQUcsZ0JBQU0sRUFBQyxRQUFWO0FBQW1CLGNBQUksRUFBRW5CLEdBQXpCO0FBQUEsOENBQXdDLFVBQXhDO0FBQUEsaUNBQ0U7QUFBOEIsaUJBQUssRUFBQyx3Q0FBcEM7QUFBQSxnREFBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBUSxhQUFHLEVBQUVBLEdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlGRDs7R0E1R3VCTCxTOztLQUFBQSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbXBvbmVudC9baWRdLjEyNTA5MWYxNzU2ZTFkMzk3YTQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wb25lbnRzIH0gZnJvbSAnLi4vLi4vbGliL0ZJTEUnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCB7Z2V0QmxvYlVybH0gZnJvbSAnLi4vLi4vbGliL2NvbXBvbmVudHMnXHJcbmltcG9ydCB7Z2V0Q29tcG9uZW50fSBmcm9tICcuLi8uLi9saWIvZmlyZWJhc2UnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBvbmVudCh7cGFyYW1zLGNvZGV9KSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zXHJcbiAgY29uc3QgW3VybCwgc2V0U3JjXSA9IHVzZVN0YXRlKCcnKTsgLy8gaW5pdGlhbCBzcmMgd2lsbCBiZSBlbXB0eVxyXG4gIGNvbnN0IFsgdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZSgnaHRtbCcpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGJsb2J1cmwgPSBnZXRCbG9iVXJsKGNvZGUpXHJcbiAgICBzZXRTcmMoYmxvYnVybCk7XHJcbiAgfSwgW2NvZGVdKTtcclxuICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjb2RlLnNob3cnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGNvZGUjJHt0eXBlfWApLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxyXG4gIH0sW3R5cGVdKVxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bicpKXtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi5zZWxlY3QnKS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QnKVxyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QnKVxyXG4gICAgICBzZXRUeXBlKGUudGFyZ2V0LmlubmVyVGV4dClcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZV9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPntpZH08L2gxPlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17b25DaGFuZ2V9IGNsYXNzTmFtZT1cInRhYl9fd3JhcFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gc2VsZWN0XCI+aHRtbDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5qczwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5jc3M8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX3dyYXBcIj5cclxuICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImxhbmd1YWdlLWh0bWwgc2hvd1wiIGlkPVwiaHRtbFwiPntjb2RlLmh0bWx9PC9jb2RlPlxyXG4gICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJsYW5ndWFnZS1qcyBzaG93XCIgaWQ9XCJqc1wiPntjb2RlLmpzfTwvY29kZT5cclxuICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtY3NzIHNob3dcIiBpZD1cImNzc1wiPntjb2RlLmNzc308L2NvZGU+XHJcbiAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgIHsvKiA8dGV4dGFyZWEgZGlzYWJsZWQgdmFsdWU9e2NvZGUuaHRtbH0gY2xhc3NOYW1lPVwiY29kZWFyZWEgc2hvd1wiIG5hbWU9XCJcIiBpZD1cImh0bWxcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPHRleHRhcmVhIGRpc2FibGVkIHZhbHVlPXtjb2RlLmpzfSBjbGFzc05hbWU9XCJjb2RlYXJlYVwiIG5hbWU9XCJcIiBpZD1cImpzXCIgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgZGlzYWJsZWQgdmFsdWU9e2NvZGUuY3NzfSBjbGFzc05hbWU9XCJjb2RlYXJlYVwiIG5hbWU9XCJcIiBpZD1cImNzc1wiID48L3RleHRhcmVhPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGVfcHJldmlld1wiPlxyXG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17dXJsfSBjbGFzc05hbWU9XCJuZXdfbGlua1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wZW5fcHJldmlld1wiIHRpdGxlPVwi7IOIIOywveycvOuhnCDsl7TquLBcIj48L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxpZnJhbWUgc3JjPXt1cmx9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5jb2RlX19jb250YWluZXIgeyBcclxuICAgICAgICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWZyYW1lIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29kZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodCA6IDQwMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc2hvdyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzllYTNhMztcclxuICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggNnB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2U0ZTRlOTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYnRuLnNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFlMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmNvZGVfcHJldmlldyB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodCA6IDUwMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb2RlX3ByZXZpZXcgaWZyYW1lIHtcclxuICAgICAgICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb2RlX3ByZXZpZXcgLm5ld19saW5rIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOjEwcHg7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGggOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHBhdGhzID0gY29tcG9uZW50cy5tYXAoaXRlbT0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgaWQgOiBpdGVtXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbiAgLy8gUmV0dXJuIGEgbGlzdCBvZiBwb3NzaWJsZSB2YWx1ZSBmb3IgaWRcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIC8vIGNvbnN0IGNvZGUgPSB7XHJcbiAgLy8gICBodG1sIDogJzxkaXYgY2xhc3M9XCJyZWRcIj48L2Rpdj4nLFxyXG4gIC8vICAganMgOiAnJyxcclxuICAvLyAgIGNzcyA6ICcucmVkIHtiYWNrZ3JvdW5kLWNvbG9yOnJlZDt3aWR0aDoxMDBweDtoZWlnaHQ6MTAwcHg7J1xyXG4gIC8vIH1cclxuICBjb25zdCBjb2RlID0gYXdhaXQgZ2V0Q29tcG9uZW50KHBhcmFtcy5pZClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICBjb2RlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=