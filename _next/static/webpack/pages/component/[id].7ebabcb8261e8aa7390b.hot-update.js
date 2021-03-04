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
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);


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
    setType('html');
    prismjs__WEBPACK_IMPORTED_MODULE_5___default.a.highlightAll();
  }, [code]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    document.querySelector('pre.show').classList.remove('show');
    document.querySelector("pre#".concat(type)).classList.add('show');
  }, [type]);

  var onChange = function onChange(e) {
    if (e.target.classList.contains('btn')) {
      document.querySelector('.btn.select').classList.remove('select');
      e.target.classList.add('select');
      setType(e.target.innerText);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: ["Ssong10 | ", params.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-3019879142" + " " + "code__container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "jsx-3019879142",
        children: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: onChange,
        className: "jsx-3019879142" + " " + "tab__wrap",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "jsx-3019879142" + " " + "btn select",
          children: "html"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "jsx-3019879142" + " " + "btn",
          children: "js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "jsx-3019879142" + " " + "btn",
          children: "css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-3019879142" + " " + "form__wrap",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
          id: "html",
          className: "jsx-3019879142" + " " + "show",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
            className: "jsx-3019879142" + " " + "language-html",
            children: code.html
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
          id: "js",
          className: "jsx-3019879142",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
            className: "jsx-3019879142" + " " + "language-js",
            children: code.js
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
          id: "css",
          className: "jsx-3019879142",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
            className: "jsx-3019879142" + " " + "language-css",
            children: code.css
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-3019879142" + " " + "code_preview",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          target: "_blank",
          href: url,
          className: "jsx-3019879142" + " " + "new_link",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            title: "\uC0C8 \uCC3D\uC73C\uB85C \uC5F4\uAE30",
            className: "jsx-3019879142" + " " + "open_preview"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
          src: url,
          className: "jsx-3019879142"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "3019879142",
        children: ".code__container.jsx-3019879142{margin:auto;width:80%;height:500px;}iframe.jsx-3019879142{width:100%;height:100%;}pre.jsx-3019879142{width :100%;height :400px;display:none;box-sizing:border-box;}.show.jsx-3019879142{display:block;}.btn.jsx-3019879142{border:1px solid #9ea3a3;width:50px;padding:8px 6px;margin:5px;background-color:#e4e4e9;border-radius:5px;cursor:pointer;}.btn.select.jsx-3019879142{background-color:#babae3;}.code_preview.jsx-3019879142{position:relative;width :100%;height :500px;border:1px solid black;}.code_preview.jsx-3019879142 iframe.jsx-3019879142{width :100%;height:100%;}.code_preview.jsx-3019879142 .new_link.jsx-3019879142{position:absolute;top:10px;right:10px;width :10px;height:10px;background-color:gray;}@media screen and (max-width:767px){.code__container.jsx-3019879142{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3NvbmcxMFxcRGVza3RvcFxcbmV4dGpzLWJsb2dcXHBhZ2VzXFxjb21wb25lbnRcXFtpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERXLEFBRzBCLEFBS0EsQUFJQyxBQU9DLEFBSVksQUFVQSxBQUlSLEFBTUwsQUFJTSxBQVNMLFdBL0NELEFBZ0RaLENBckRVLEFBU0ksQUErQkYsRUF4QmQsSUFrQmMsQUFVSixJQTNDSyxDQUtmLENBbUNBLENBckJhLEFBVWIsQ0FwQmMsQ0FtQ0QsR0FWRyxLQWpDaEIsQ0FtQmtCLEVBeUJKLENBbkNVLEtBeUJDLE1BV1gsRUF6QkQsU0FWYixDQW9Dd0IsQ0F6QkUsSUFjMUIsaUJBWUEsSUF6Qm9CLGtCQUNILGVBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc3NvbmcxMFxcRGVza3RvcFxcbmV4dGpzLWJsb2dcXHBhZ2VzXFxjb21wb25lbnRcXFtpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wb25lbnRzIH0gZnJvbSAnLi4vLi4vbGliL0ZJTEUnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCB7Z2V0QmxvYlVybH0gZnJvbSAnLi4vLi4vbGliL2NvbXBvbmVudHMnXHJcbmltcG9ydCB7Z2V0Q29tcG9uZW50fSBmcm9tICcuLi8uLi9saWIvZmlyZWJhc2UnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByaXNtIGZyb20gJ3ByaXNtanMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wb25lbnQoe3BhcmFtcyxjb2RlfSkge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHBhcmFtc1xyXG4gIGNvbnN0IFt1cmwsIHNldFNyY10gPSB1c2VTdGF0ZSgnJyk7IC8vIGluaXRpYWwgc3JjIHdpbGwgYmUgZW1wdHlcclxuICBjb25zdCBbIHR5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoJ2h0bWwnKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBibG9idXJsID0gZ2V0QmxvYlVybChjb2RlKVxyXG4gICAgc2V0U3JjKGJsb2J1cmwpO1xyXG4gICAgc2V0VHlwZSgnaHRtbCcpXHJcbiAgICBQcmlzbS5oaWdobGlnaHRBbGwoKTtcclxuICB9LCBbY29kZV0pO1xyXG4gIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3ByZS5zaG93JykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBwcmUjJHt0eXBlfWApLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxyXG4gIH0sW3R5cGVdKVxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bicpKXtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi5zZWxlY3QnKS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3QnKVxyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QnKVxyXG4gICAgICBzZXRUeXBlKGUudGFyZ2V0LmlubmVyVGV4dClcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Tc29uZzEwIHwge3BhcmFtcy5pZH08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZV9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPntpZH08L2gxPlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17b25DaGFuZ2V9IGNsYXNzTmFtZT1cInRhYl9fd3JhcFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gc2VsZWN0XCI+aHRtbDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5qczwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj5jc3M8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX3dyYXBcIj5cclxuICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwic2hvd1wiIGlkPVwiaHRtbFwiPlxyXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJsYW5ndWFnZS1odG1sXCI+e2NvZGUuaHRtbH08L2NvZGU+XHJcbiAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgIDxwcmUgaWQ9XCJqc1wiPlxyXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJsYW5ndWFnZS1qc1wiPntjb2RlLmpzfTwvY29kZT5cclxuICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgPHByZSBpZD1cImNzc1wiPlxyXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJsYW5ndWFnZS1jc3NcIj57Y29kZS5jc3N9PC9jb2RlPlxyXG4gICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICB7LyogPHRleHRhcmVhIGRpc2FibGVkIHZhbHVlPXtjb2RlLmh0bWx9IGNsYXNzTmFtZT1cImNvZGVhcmVhIHNob3dcIiBuYW1lPVwiXCIgaWQ9XCJodG1sXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBkaXNhYmxlZCB2YWx1ZT17Y29kZS5qc30gY2xhc3NOYW1lPVwiY29kZWFyZWFcIiBuYW1lPVwiXCIgaWQ9XCJqc1wiID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPHRleHRhcmVhIGRpc2FibGVkIHZhbHVlPXtjb2RlLmNzc30gY2xhc3NOYW1lPVwiY29kZWFyZWFcIiBuYW1lPVwiXCIgaWQ9XCJjc3NcIiA+PC90ZXh0YXJlYT4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlX3ByZXZpZXdcIj5cclxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e3VybH0gY2xhc3NOYW1lPVwibmV3X2xpbmtcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGVuX3ByZXZpZXdcIiB0aXRsZT1cIuyDiCDssL3snLzroZwg7Je06riwXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8aWZyYW1lIHNyYz17dXJsfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAuY29kZV9fY29udGFpbmVyIHsgXHJcbiAgICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodCA6IDQwMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc2hvdyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzllYTNhMztcclxuICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggNnB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I2U0ZTRlOTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYnRuLnNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFlMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmNvZGVfcHJldmlldyB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodCA6IDUwMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb2RlX3ByZXZpZXcgaWZyYW1lIHtcclxuICAgICAgICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb2RlX3ByZXZpZXcgLm5ld19saW5rIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgdG9wOjEwcHg7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGggOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgICAgLmNvZGVfX2NvbnRhaW5lciB7IFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHBhdGhzID0gY29tcG9uZW50cy5tYXAoaXRlbT0+e1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgaWQgOiBpdGVtXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9XHJcbiAgLy8gUmV0dXJuIGEgbGlzdCBvZiBwb3NzaWJsZSB2YWx1ZSBmb3IgaWRcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIC8vIGNvbnN0IGNvZGUgPSB7XHJcbiAgLy8gICBodG1sIDogJzxkaXYgY2xhc3M9XCJyZWRcIj48L2Rpdj4nLFxyXG4gIC8vICAganMgOiAnJyxcclxuICAvLyAgIGNzcyA6ICcucmVkIHtiYWNrZ3JvdW5kLWNvbG9yOnJlZDt3aWR0aDoxMDBweDtoZWlnaHQ6MTAwcHg7J1xyXG4gIC8vIH1cclxuICBjb25zdCBjb2RlID0gYXdhaXQgZ2V0Q29tcG9uZW50KHBhcmFtcy5pZClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICBjb2RlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ssong10\\\\Desktop\\\\nextjs-blog\\\\pages\\\\component\\\\[id].js */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50Ly5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJwYXJhbXMiLCJjb2RlIiwiaWQiLCJ1c2VTdGF0ZSIsInVybCIsInNldFNyYyIsInR5cGUiLCJzZXRUeXBlIiwidXNlRWZmZWN0IiwiYmxvYnVybCIsImdldEJsb2JVcmwiLCJQcmlzbSIsImhpZ2hsaWdodEFsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImNvbnRhaW5zIiwiaW5uZXJUZXh0IiwiaHRtbCIsImpzIiwiY3NzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxTQUFULE9BQWtDO0FBQUE7O0FBQUEsTUFBZEMsTUFBYyxRQUFkQSxNQUFjO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBQUEsTUFDdkNDLEVBRHVDLEdBQ2hDRixNQURnQyxDQUN2Q0UsRUFEdUM7O0FBQUEsa0JBRXpCQyxzREFBUSxDQUFDLEVBQUQsQ0FGaUI7QUFBQSxNQUV4Q0MsR0FGd0M7QUFBQSxNQUVuQ0MsTUFGbUMsaUJBRVg7OztBQUZXLG1CQUd0QkYsc0RBQVEsQ0FBQyxNQUFELENBSGM7QUFBQSxNQUd2Q0csSUFIdUM7QUFBQSxNQUdqQ0MsT0FIaUM7O0FBSS9DQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxPQUFPLEdBQUdDLGtFQUFVLENBQUNULElBQUQsQ0FBMUI7QUFDQUksVUFBTSxDQUFDSSxPQUFELENBQU47QUFDQUYsV0FBTyxDQUFDLE1BQUQsQ0FBUDtBQUNBSSxrREFBSyxDQUFDQyxZQUFOO0FBQ0QsR0FMUSxFQUtOLENBQUNYLElBQUQsQ0FMTSxDQUFUO0FBTUFPLHlEQUFTLENBQUMsWUFBSztBQUNiSyxZQUFRLENBQUNDLGFBQVQsQ0FB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QUFBO0FBQUE7QUFBQSxVQURGO0FBaUdEOztHQXRIdUJMLFM7O0tBQUFBLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29tcG9uZW50L1tpZF0uN2ViYWJjYjgyNjFlOGFhNzM5MGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvbmVudHMgfSBmcm9tICcuLi8uLi9saWIvRklMRSdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCdcclxuaW1wb3J0IHtnZXRCbG9iVXJsfSBmcm9tICcuLi8uLi9saWIvY29tcG9uZW50cydcclxuaW1wb3J0IHtnZXRDb21wb25lbnR9IGZyb20gJy4uLy4uL2xpYi9maXJlYmFzZSdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJpc20gZnJvbSAncHJpc21qcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBvbmVudCh7cGFyYW1zLGNvZGV9KSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zXHJcbiAgY29uc3QgW3VybCwgc2V0U3JjXSA9IHVzZVN0YXRlKCcnKTsgLy8gaW5pdGlhbCBzcmMgd2lsbCBiZSBlbXB0eVxyXG4gIGNvbnN0IFsgdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZSgnaHRtbCcpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGJsb2J1cmwgPSBnZXRCbG9iVXJsKGNvZGUpXHJcbiAgICBzZXRTcmMoYmxvYnVybCk7XHJcbiAgICBzZXRUeXBlKCdodG1sJylcclxuICAgIFByaXNtLmhpZ2hsaWdodEFsbCgpO1xyXG4gIH0sIFtjb2RlXSk7XHJcbiAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncHJlLnNob3cnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHByZSMke3R5cGV9YCkuY2xhc3NMaXN0LmFkZCgnc2hvdycpXHJcbiAgfSxbdHlwZV0pXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuJykpe1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLnNlbGVjdCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdCcpXHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdCcpXHJcbiAgICAgIHNldFR5cGUoZS50YXJnZXQuaW5uZXJUZXh0KVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNzb25nMTAgfCB7cGFyYW1zLmlkfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlX19jb250YWluZXJcIj5cclxuICAgICAgICA8aDE+e2lkfTwvaDE+XHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXtvbkNoYW5nZX0gY2xhc3NOYW1lPVwidGFiX193cmFwXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBzZWxlY3RcIj5odG1sPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPmpzPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPmNzczwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fd3JhcFwiPlxyXG4gICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJzaG93XCIgaWQ9XCJodG1sXCI+XHJcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImxhbmd1YWdlLWh0bWxcIj57Y29kZS5odG1sfTwvY29kZT5cclxuICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgPHByZSBpZD1cImpzXCI+XHJcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImxhbmd1YWdlLWpzXCI+e2NvZGUuanN9PC9jb2RlPlxyXG4gICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICA8cHJlIGlkPVwiY3NzXCI+XHJcbiAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImxhbmd1YWdlLWNzc1wiPntjb2RlLmNzc308L2NvZGU+XHJcbiAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgIHsvKiA8dGV4dGFyZWEgZGlzYWJsZWQgdmFsdWU9e2NvZGUuaHRtbH0gY2xhc3NOYW1lPVwiY29kZWFyZWEgc2hvd1wiIG5hbWU9XCJcIiBpZD1cImh0bWxcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPHRleHRhcmVhIGRpc2FibGVkIHZhbHVlPXtjb2RlLmpzfSBjbGFzc05hbWU9XCJjb2RlYXJlYVwiIG5hbWU9XCJcIiBpZD1cImpzXCIgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgZGlzYWJsZWQgdmFsdWU9e2NvZGUuY3NzfSBjbGFzc05hbWU9XCJjb2RlYXJlYVwiIG5hbWU9XCJcIiBpZD1cImNzc1wiID48L3RleHRhcmVhPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGVfcHJldmlld1wiPlxyXG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17dXJsfSBjbGFzc05hbWU9XCJuZXdfbGlua1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wZW5fcHJldmlld1wiIHRpdGxlPVwi7IOIIOywveycvOuhnCDsl7TquLBcIj48L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxpZnJhbWUgc3JjPXt1cmx9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5jb2RlX19jb250YWluZXIgeyBcclxuICAgICAgICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWZyYW1lIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJlIHtcclxuICAgICAgICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0IDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5zaG93IHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWVhM2EzO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweCA2cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZTRlNGU5O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5idG4uc2VsZWN0IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWUzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuY29kZV9wcmV2aWV3IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0IDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvZGVfcHJldmlldyBpZnJhbWUge1xyXG4gICAgICAgICAgICAgIHdpZHRoIDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvZGVfcHJldmlldyAubmV3X2xpbmsge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6MTBweDtcclxuICAgICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgICB3aWR0aCA6IDEwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgICAuY29kZV9fY29udGFpbmVyIHsgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGBcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcGF0aHMgPSBjb21wb25lbnRzLm1hcChpdGVtPT57XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBpZCA6IGl0ZW1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH1cclxuICAvLyBSZXR1cm4gYSBsaXN0IG9mIHBvc3NpYmxlIHZhbHVlIGZvciBpZFxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgLy8gY29uc3QgY29kZSA9IHtcclxuICAvLyAgIGh0bWwgOiAnPGRpdiBjbGFzcz1cInJlZFwiPjwvZGl2PicsXHJcbiAgLy8gICBqcyA6ICcnLFxyXG4gIC8vICAgY3NzIDogJy5yZWQge2JhY2tncm91bmQtY29sb3I6cmVkO3dpZHRoOjEwMHB4O2hlaWdodDoxMDBweDsnXHJcbiAgLy8gfVxyXG4gIGNvbnN0IGNvZGUgPSBhd2FpdCBnZXRDb21wb25lbnQocGFyYW1zLmlkKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgIGNvZGVcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==