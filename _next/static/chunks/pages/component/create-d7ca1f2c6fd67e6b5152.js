_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"75A6":function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/create",function(){return c("8g0i")}])},"8g0i":function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return u}));var s=c("nKUr"),n=c("rePB"),r=c("MX0m"),a=c.n(r),o=c("CafY"),i=c("SCmb"),l=c("q1tI"),j=c("uehi");function d(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,s)}return c}function b(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?d(Object(c),!0).forEach((function(t){Object(n.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):d(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}function u(){var e=Object(l.useState)({html:'<div class="red">\uc548\ub155</div>',js:"",css:".red {background-color:red;width:100px;height:100px;"}),t=e[0],c=e[1],r=Object(l.useState)(""),d=r[0],u=r[1],x=Object(l.useState)(""),h=x[0],p=x[1],O=Object(l.useState)("html"),f=O[0],m=O[1];Object(l.useEffect)((function(){w()}),[]),Object(l.useEffect)((function(){document.querySelector(".codearea.show").classList.remove("show"),document.querySelector(".codearea#".concat(f)).classList.add("show")}),[f]);var w=function(){var e=Object(i.a)(t);p(e)};return Object(s.jsxs)(o.a,{children:["title : ",Object(s.jsx)("input",{value:d,onChange:function(e){return u(e.target.value)}}),Object(s.jsxs)("div",{className:"jsx-982670407 code__container",children:[Object(s.jsxs)("div",{onClick:function(e){document.querySelector(".btn.select").classList.remove("select"),e.target.classList.add("select"),m(e.target.innerText)},className:"jsx-982670407 tab__wrap",children:[Object(s.jsx)("button",{className:"jsx-982670407 btn select",children:"html"}),Object(s.jsx)("button",{className:"jsx-982670407 btn",children:"js"}),Object(s.jsx)("button",{className:"jsx-982670407 btn",children:"css"})]}),Object(s.jsxs)("div",{onChange:function(e){c(b(b({},t),{},Object(n.a)({},e.target.id,e.target.value)))},className:"jsx-982670407 form__wrap",children:[Object(s.jsx)("textarea",{defaultValue:t.html,name:"",id:"html",className:"jsx-982670407 codearea show"}),Object(s.jsx)("textarea",{defaultValue:t.js,name:"",id:"js",className:"jsx-982670407 codearea"}),Object(s.jsx)("textarea",{defaultValue:t.css,name:"",id:"css",className:"jsx-982670407 codearea"})]}),Object(s.jsx)("button",{onClick:w,className:"jsx-982670407 preview_btn",children:"\ubbf8\ub9ac\ubcf4\uae30"}),Object(s.jsx)("button",{onClick:function(){console.log(d,t),w(),Object(j.a)(d,t)},className:"jsx-982670407 create_btn",children:"\uc791\uc131"}),Object(s.jsxs)("div",{className:"jsx-982670407 code_preview",children:[Object(s.jsx)("a",{target:"_blank",href:h,className:"jsx-982670407 new_link",children:Object(s.jsx)("div",{title:"\uc0c8 \ucc3d\uc73c\ub85c \uc5f4\uae30",className:"jsx-982670407 open_preview"})}),Object(s.jsx)("iframe",{src:h,className:"jsx-982670407"})]}),Object(s.jsx)(a.a,{id:"982670407",children:[".code__container.jsx-982670407{width:80%;height:500px;}","iframe.jsx-982670407{width:100%;height:100%;}",".codearea.jsx-982670407{width :100%;height :400px;display:none;box-sizing:border-box;}",".show.jsx-982670407{display:block;}",".btn.jsx-982670407{border:1px solid black;border-radius :2px;}",".btn.select.jsx-982670407{background-color :gray;}",".code_preview.jsx-982670407{position:relative;width :100%;height :500px;border:1px solid black;}",".code_preview.jsx-982670407 iframe.jsx-982670407{width :100%;height:100%;}",".code_preview.jsx-982670407 .new_link.jsx-982670407{position:absolute;top:10px;right:10px;width :10px;height:10px;background-color:gray;}"]})]})]})}},SCmb:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var s=function(e){var t=e.html,c=e.css,s=e.js,n=function(e,t){var c=new Blob([e],{type:t});return URL.createObjectURL(c)},r=n(c,"text/css"),a=n(s,"text/javascript");return n('\n    <html>\n      <head>\n        <meta charset="utf-8">\n        '.concat(c&&'<link rel="stylesheet" type="text/css" href="'.concat(r,'" />'),"\n      </head>\n      <body>\n        ").concat(t||"","\n      </body>\n      ").concat(s&&'<script src="'.concat(a,'"><\/script>'),"\n    </html>\n  "),"text/html")}}},[["75A6",0,2,6,1,3,5]]]);