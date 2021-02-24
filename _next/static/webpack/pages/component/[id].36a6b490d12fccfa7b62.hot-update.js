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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-3249660004" + " " + "code__container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "jsx-3249660004",
        children: id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: onChange,
        className: "jsx-3249660004" + " " + "tab__wrap",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "jsx-3249660004" + " " + "btn select",
          children: "html"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "jsx-3249660004" + " " + "btn",
          children: "js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "jsx-3249660004" + " " + "btn",
          children: "css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-3249660004" + " " + "form__wrap",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
          id: "html",
          className: "jsx-3249660004" + " " + "show",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
            className: "jsx-3249660004" + " " + "language-html",
            children: code.html
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
          id: "js",
          className: "jsx-3249660004",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
            className: "jsx-3249660004" + " " + "language-js",
            children: code.js
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
          id: "css",
          className: "jsx-3249660004",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
            className: "jsx-3249660004" + " " + "language-css",
            children: code.css
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-3249660004" + " " + "code_preview",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          target: "_blank",
          href: url,
          className: "jsx-3249660004" + " " + "new_link",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            title: "\uC0C8 \uCC3D\uC73C\uB85C \uC5F4\uAE30",
            className: "jsx-3249660004" + " " + "open_preview"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
          src: url,
          className: "jsx-3249660004"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "3249660004",
        children: ".code__container.jsx-3249660004{margin:auto;width:80%;height:500px;}iframe.jsx-3249660004{width:100%;height:100%;}pre.jsx-3249660004{width :100%;height :400px;display:none;box-sizing:border-box;}.show.jsx-3249660004{display:block;}.btn.jsx-3249660004{border:1px solid #9ea3a3;width:50px;padding:8px 6px;margin:5px;background-color:#e4e4e9;border-radius:5px;cursor:pointer;}.btn.select.jsx-3249660004{background-color:#babae3;}.code_preview.jsx-3249660004{position:relative;width :100%;height :500px;border:1px solid black;}.code_preview.jsx-3249660004 iframe.jsx-3249660004{width :100%;height:100%;}.code_preview.jsx-3249660004 .new_link.jsx-3249660004{position:absolute;top:10px;right:10px;width :10px;height:10px;background-color:gray;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc3NvbmcxMFxcRGVza3RvcFxcbmV4dGpzLWJsb2dcXHBhZ2VzXFxjb21wb25lbnRcXFtpZF0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERXLEFBRzBCLEFBS0EsQUFJQyxBQU9DLEFBSVksQUFVQSxBQUlSLEFBTUwsQUFJTSxXQXRDTixDQUxGLEFBU0ksQUErQkYsRUF4QmQsSUFrQmMsQUFVSixJQTNDSyxDQUtmLENBbUNBLENBckJhLEFBVWIsQ0FwQmMsQ0FtQ0QsR0FWRyxLQWpDaEIsQ0FtQmtCLEVBeUJKLENBbkNVLEtBeUJDLE1BV1gsRUF6QkQsU0FWYixDQW9Dd0IsQ0F6QkUsSUFjMUIsaUJBWUEsSUF6Qm9CLGtCQUNILGVBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcc3NvbmcxMFxcRGVza3RvcFxcbmV4dGpzLWJsb2dcXHBhZ2VzXFxjb21wb25lbnRcXFtpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wb25lbnRzIH0gZnJvbSAnLi4vLi4vbGliL0ZJTEUnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCB7Z2V0QmxvYlVybH0gZnJvbSAnLi4vLi4vbGliL2NvbXBvbmVudHMnXHJcbmltcG9ydCB7Z2V0Q29tcG9uZW50fSBmcm9tICcuLi8uLi9saWIvZmlyZWJhc2UnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByaXNtIGZyb20gJ3ByaXNtanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcG9uZW50KHtwYXJhbXMsY29kZX0pIHtcclxuICBjb25zdCB7IGlkIH0gPSBwYXJhbXNcclxuICBjb25zdCBbdXJsLCBzZXRTcmNdID0gdXNlU3RhdGUoJycpOyAvLyBpbml0aWFsIHNyYyB3aWxsIGJlIGVtcHR5XHJcbiAgY29uc3QgWyB0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKCdodG1sJylcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYmxvYnVybCA9IGdldEJsb2JVcmwoY29kZSlcclxuICAgIHNldFNyYyhibG9idXJsKTtcclxuICAgIHNldFR5cGUoJ2h0bWwnKVxyXG4gICAgUHJpc20uaGlnaGxpZ2h0QWxsKCk7XHJcbiAgfSwgW2NvZGVdKTtcclxuICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcmUuc2hvdycpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgcHJlIyR7dHlwZX1gKS5jbGFzc0xpc3QuYWRkKCdzaG93JylcclxuICB9LFt0eXBlXSlcclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4nKSl7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4uc2VsZWN0JykuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0JylcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0JylcclxuICAgICAgc2V0VHlwZShlLnRhcmdldC5pbm5lclRleHQpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGVfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMT57aWR9PC9oMT5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2hhbmdlfSBjbGFzc05hbWU9XCJ0YWJfX3dyYXBcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHNlbGVjdFwiPmh0bWw8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+anM8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+Y3NzPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX193cmFwXCI+XHJcbiAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cInNob3dcIiBpZD1cImh0bWxcIj5cclxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtaHRtbFwiPntjb2RlLmh0bWx9PC9jb2RlPlxyXG4gICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICA8cHJlIGlkPVwianNcIj5cclxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtanNcIj57Y29kZS5qc308L2NvZGU+XHJcbiAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgIDxwcmUgaWQ9XCJjc3NcIj5cclxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtY3NzXCI+e2NvZGUuY3NzfTwvY29kZT5cclxuICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgey8qIDx0ZXh0YXJlYSBkaXNhYmxlZCB2YWx1ZT17Y29kZS5odG1sfSBjbGFzc05hbWU9XCJjb2RlYXJlYSBzaG93XCIgbmFtZT1cIlwiIGlkPVwiaHRtbFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgZGlzYWJsZWQgdmFsdWU9e2NvZGUuanN9IGNsYXNzTmFtZT1cImNvZGVhcmVhXCIgbmFtZT1cIlwiIGlkPVwianNcIiA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBkaXNhYmxlZCB2YWx1ZT17Y29kZS5jc3N9IGNsYXNzTmFtZT1cImNvZGVhcmVhXCIgbmFtZT1cIlwiIGlkPVwiY3NzXCIgPjwvdGV4dGFyZWE+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZV9wcmV2aWV3XCI+XHJcbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXt1cmx9IGNsYXNzTmFtZT1cIm5ld19saW5rXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3Blbl9wcmV2aWV3XCIgdGl0bGU9XCLsg4gg7LC97Jy866GcIOyXtOq4sFwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGlmcmFtZSBzcmM9e3VybH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmNvZGVfX2NvbnRhaW5lciB7IFxyXG4gICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZnJhbWUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmUge1xyXG4gICAgICAgICAgICAgIHdpZHRoIDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQgOiA0MDBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnNob3cge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ZWEzYTM7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDZweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlNGU0ZTk7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmJ0bi5zZWxlY3Qge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYWJhZTM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jb2RlX3ByZXZpZXcge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHdpZHRoIDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQgOiA1MDBweDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29kZV9wcmV2aWV3IGlmcmFtZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29kZV9wcmV2aWV3IC5uZXdfbGluayB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDoxMHB4O1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoIDogMTBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBwYXRocyA9IGNvbXBvbmVudHMubWFwKGl0ZW09PntcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGlkIDogaXRlbVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfVxyXG4gIC8vIFJldHVybiBhIGxpc3Qgb2YgcG9zc2libGUgdmFsdWUgZm9yIGlkXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAvLyBjb25zdCBjb2RlID0ge1xyXG4gIC8vICAgaHRtbCA6ICc8ZGl2IGNsYXNzPVwicmVkXCI+PC9kaXY+JyxcclxuICAvLyAgIGpzIDogJycsXHJcbiAgLy8gICBjc3MgOiAnLnJlZCB7YmFja2dyb3VuZC1jb2xvcjpyZWQ7d2lkdGg6MTAwcHg7aGVpZ2h0OjEwMHB4OydcclxuICAvLyB9XHJcbiAgY29uc3QgY29kZSA9IGF3YWl0IGdldENvbXBvbmVudChwYXJhbXMuaWQpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgY29kZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\ssong10\\\\Desktop\\\\nextjs-blog\\\\pages\\\\component\\\\[id].js */"
      }, void 0, false, void 0, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50Ly5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJwYXJhbXMiLCJjb2RlIiwiaWQiLCJ1c2VTdGF0ZSIsInVybCIsInNldFNyYyIsInR5cGUiLCJzZXRUeXBlIiwidXNlRWZmZWN0IiwiYmxvYnVybCIsImdldEJsb2JVcmwiLCJQcmlzbSIsImhpZ2hsaWdodEFsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImNvbnRhaW5zIiwiaW5uZXJUZXh0IiwiaHRtbCIsImpzIiwiY3NzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVlLFNBQVNBLFNBQVQsT0FBa0M7QUFBQTs7QUFBQSxNQUFkQyxNQUFjLFFBQWRBLE1BQWM7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFBQSxNQUN2Q0MsRUFEdUMsR0FDaENGLE1BRGdDLENBQ3ZDRSxFQUR1Qzs7QUFBQSxrQkFFekJDLHNEQUFRLENBQUMsRUFBRCxDQUZpQjtBQUFBLE1BRXhDQyxHQUZ3QztBQUFBLE1BRW5DQyxNQUZtQyxpQkFFWDs7O0FBRlcsbUJBR3RCRixzREFBUSxDQUFDLE1BQUQsQ0FIYztBQUFBLE1BR3ZDRyxJQUh1QztBQUFBLE1BR2pDQyxPQUhpQzs7QUFJL0NDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLE9BQU8sR0FBR0Msa0VBQVUsQ0FBQ1QsSUFBRCxDQUExQjtBQUNBSSxVQUFNLENBQUNJLE9BQUQsQ0FBTjtBQUNBRixXQUFPLENBQUMsTUFBRCxDQUFQO0FBQ0FJLGtEQUFLLENBQUNDLFlBQU47QUFDRCxHQUxRLEVBS04sQ0FBQ1gsSUFBRCxDQUxNLENBQVQ7QUFNQU8seURBQVMsQ0FBQyxZQUFLO0FBQ2JLLFlBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixFQUFtQ0MsU0FBbkMsQ0FBNkNDLE1BQTdDLENBQW9ELE1BQXBEO0FBQ0FILFlBQVEsQ0FBQ0MsYUFBVCxlQUE4QlIsSUFBOUIsR0FBc0NTLFNBQXRDLENBQWdERSxHQUFoRCxDQUFvRCxNQUFwRDtBQUNELEdBSFEsRUFHUCxDQUFDWCxJQUFELENBSE8sQ0FBVDs7QUFJQSxNQUFNWSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDdEIsUUFBSUEsQ0FBQyxDQUFDQyxNQUFGLENBQVNMLFNBQVQsQ0FBbUJNLFFBQW5CLENBQTRCLEtBQTVCLENBQUosRUFBdUM7QUFDckNSLGNBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixFQUFzQ0MsU0FBdEMsQ0FBZ0RDLE1BQWhELENBQXVELFFBQXZEO0FBQ0FHLE9BQUMsQ0FBQ0MsTUFBRixDQUFTTCxTQUFULENBQW1CRSxHQUFuQixDQUF1QixRQUF2QjtBQUNBVixhQUFPLENBQUNZLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxTQUFWLENBQVA7QUFDRDtBQUNGLEdBTkQ7O0FBT0Esc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSwyQkFDRTtBQUFBLDBDQUFlLGlCQUFmO0FBQUEsOEJBQ0U7QUFBQTtBQUFBLGtCQUFLcEI7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGVBQU8sRUFBRWdCLFFBQWQ7QUFBQSw0Q0FBa0MsV0FBbEM7QUFBQSxnQ0FDRTtBQUFBLDhDQUFrQixZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEsOENBQWtCLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBQSw4Q0FBa0IsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFPRTtBQUFBLDRDQUFlLFlBQWY7QUFBQSxnQ0FDRTtBQUFzQixZQUFFLEVBQUMsTUFBekI7QUFBQSw4Q0FBZSxNQUFmO0FBQUEsaUNBQ0U7QUFBQSxnREFBZ0IsZUFBaEI7QUFBQSxzQkFBaUNqQixJQUFJLENBQUNzQjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQUssWUFBRSxFQUFDLElBQVI7QUFBQTtBQUFBLGlDQUNFO0FBQUEsZ0RBQWdCLGFBQWhCO0FBQUEsc0JBQStCdEIsSUFBSSxDQUFDdUI7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFPRTtBQUFLLFlBQUUsRUFBQyxLQUFSO0FBQUE7QUFBQSxpQ0FDRTtBQUFBLGdEQUFnQixjQUFoQjtBQUFBLHNCQUFnQ3ZCLElBQUksQ0FBQ3dCO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLGVBcUJFO0FBQUEsNENBQWUsY0FBZjtBQUFBLGdDQUNFO0FBQUcsZ0JBQU0sRUFBQyxRQUFWO0FBQW1CLGNBQUksRUFBRXJCLEdBQXpCO0FBQUEsOENBQXdDLFVBQXhDO0FBQUEsaUNBQ0U7QUFBOEIsaUJBQUssRUFBQyx3Q0FBcEM7QUFBQSxnREFBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBUSxhQUFHLEVBQUVBLEdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlGRDs7R0E5R3VCTCxTOztLQUFBQSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbXBvbmVudC9baWRdLjM2YTZiNDkwZDEyZmNjZmE3YjYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wb25lbnRzIH0gZnJvbSAnLi4vLi4vbGliL0ZJTEUnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCB7Z2V0QmxvYlVybH0gZnJvbSAnLi4vLi4vbGliL2NvbXBvbmVudHMnXHJcbmltcG9ydCB7Z2V0Q29tcG9uZW50fSBmcm9tICcuLi8uLi9saWIvZmlyZWJhc2UnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByaXNtIGZyb20gJ3ByaXNtanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcG9uZW50KHtwYXJhbXMsY29kZX0pIHtcclxuICBjb25zdCB7IGlkIH0gPSBwYXJhbXNcclxuICBjb25zdCBbdXJsLCBzZXRTcmNdID0gdXNlU3RhdGUoJycpOyAvLyBpbml0aWFsIHNyYyB3aWxsIGJlIGVtcHR5XHJcbiAgY29uc3QgWyB0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKCdodG1sJylcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYmxvYnVybCA9IGdldEJsb2JVcmwoY29kZSlcclxuICAgIHNldFNyYyhibG9idXJsKTtcclxuICAgIHNldFR5cGUoJ2h0bWwnKVxyXG4gICAgUHJpc20uaGlnaGxpZ2h0QWxsKCk7XHJcbiAgfSwgW2NvZGVdKTtcclxuICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwcmUuc2hvdycpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgcHJlIyR7dHlwZX1gKS5jbGFzc0xpc3QuYWRkKCdzaG93JylcclxuICB9LFt0eXBlXSlcclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4nKSl7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4uc2VsZWN0JykuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0JylcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0JylcclxuICAgICAgc2V0VHlwZShlLnRhcmdldC5pbm5lclRleHQpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGVfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMT57aWR9PC9oMT5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2hhbmdlfSBjbGFzc05hbWU9XCJ0YWJfX3dyYXBcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIHNlbGVjdFwiPmh0bWw8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+anM8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+Y3NzPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX193cmFwXCI+XHJcbiAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cInNob3dcIiBpZD1cImh0bWxcIj5cclxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtaHRtbFwiPntjb2RlLmh0bWx9PC9jb2RlPlxyXG4gICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICA8cHJlIGlkPVwianNcIj5cclxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtanNcIj57Y29kZS5qc308L2NvZGU+XHJcbiAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgIDxwcmUgaWQ9XCJjc3NcIj5cclxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtY3NzXCI+e2NvZGUuY3NzfTwvY29kZT5cclxuICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgey8qIDx0ZXh0YXJlYSBkaXNhYmxlZCB2YWx1ZT17Y29kZS5odG1sfSBjbGFzc05hbWU9XCJjb2RlYXJlYSBzaG93XCIgbmFtZT1cIlwiIGlkPVwiaHRtbFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgZGlzYWJsZWQgdmFsdWU9e2NvZGUuanN9IGNsYXNzTmFtZT1cImNvZGVhcmVhXCIgbmFtZT1cIlwiIGlkPVwianNcIiA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBkaXNhYmxlZCB2YWx1ZT17Y29kZS5jc3N9IGNsYXNzTmFtZT1cImNvZGVhcmVhXCIgbmFtZT1cIlwiIGlkPVwiY3NzXCIgPjwvdGV4dGFyZWE+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZV9wcmV2aWV3XCI+XHJcbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXt1cmx9IGNsYXNzTmFtZT1cIm5ld19saW5rXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3Blbl9wcmV2aWV3XCIgdGl0bGU9XCLsg4gg7LC97Jy866GcIOyXtOq4sFwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGlmcmFtZSBzcmM9e3VybH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmNvZGVfX2NvbnRhaW5lciB7IFxyXG4gICAgICAgICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZnJhbWUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmUge1xyXG4gICAgICAgICAgICAgIHdpZHRoIDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQgOiA0MDBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLnNob3cge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ZWEzYTM7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDZweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlNGU0ZTk7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmJ0bi5zZWxlY3Qge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYWJhZTM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jb2RlX3ByZXZpZXcge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHdpZHRoIDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQgOiA1MDBweDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29kZV9wcmV2aWV3IGlmcmFtZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGggOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29kZV9wcmV2aWV3IC5uZXdfbGluayB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDoxMHB4O1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoIDogMTBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICBjb25zdCBwYXRocyA9IGNvbXBvbmVudHMubWFwKGl0ZW09PntcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGlkIDogaXRlbVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfVxyXG4gIC8vIFJldHVybiBhIGxpc3Qgb2YgcG9zc2libGUgdmFsdWUgZm9yIGlkXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAvLyBjb25zdCBjb2RlID0ge1xyXG4gIC8vICAgaHRtbCA6ICc8ZGl2IGNsYXNzPVwicmVkXCI+PC9kaXY+JyxcclxuICAvLyAgIGpzIDogJycsXHJcbiAgLy8gICBjc3MgOiAnLnJlZCB7YmFja2dyb3VuZC1jb2xvcjpyZWQ7d2lkdGg6MTAwcHg7aGVpZ2h0OjEwMHB4OydcclxuICAvLyB9XHJcbiAgY29uc3QgY29kZSA9IGF3YWl0IGdldENvbXBvbmVudChwYXJhbXMuaWQpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgY29kZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9