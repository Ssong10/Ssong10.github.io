_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"75A6":function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/create",function(){return c("8g0i")}])},"8g0i":function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return u}));var s=c("nKUr"),n=c("rePB"),r=c("MX0m"),a=c.n(r),o=c("CafY"),i=c("SCmb"),l=c("q1tI"),j=c("uehi");function d(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,s)}return c}function b(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?d(Object(c),!0).forEach((function(t){Object(n.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):d(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}function u(){var e=Object(l.useState)({description:"",html:'<div class="red">\uc548\ub155</div>',js:"",css:".red {background-color:red;width:100px;height:100px;"}),t=e[0],c=e[1],r=Object(l.useState)(""),d=r[0],u=r[1],x=Object(l.useState)(""),h=x[0],p=x[1],m=Object(l.useState)("html"),O=m[0],f=m[1];Object(l.useEffect)((function(){w()}),[]),Object(l.useEffect)((function(){document.querySelector(".codearea.show").classList.remove("show"),document.querySelector(".codearea#".concat(O)).classList.add("show")}),[O]);var w=function(){var e=Object(i.a)(t);p(e)},g=function(e){c(b(b({},t),{},Object(n.a)({},e.target.id,e.target.value)))};return Object(s.jsxs)(o.a,{children:["title : ",Object(s.jsx)("input",{value:d,onChange:function(e){return u(e.target.value)}}),Object(s.jsxs)("div",{className:"jsx-3089044648 code__container",children:[Object(s.jsx)("textarea",{onChange:g,defaultValue:t.description,name:"",id:"description",className:"jsx-3089044648"}),Object(s.jsxs)("div",{onClick:function(e){document.querySelector(".btn.select").classList.remove("select"),e.target.classList.add("select"),f(e.target.innerText)},className:"jsx-3089044648 tab__wrap",children:[Object(s.jsx)("button",{className:"jsx-3089044648 btn select",children:"html"}),Object(s.jsx)("button",{className:"jsx-3089044648 btn",children:"js"}),Object(s.jsx)("button",{className:"jsx-3089044648 btn",children:"css"})]}),Object(s.jsxs)("div",{onChange:g,className:"jsx-3089044648 form__wrap",children:[Object(s.jsx)("textarea",{defaultValue:t.html,name:"",id:"html",className:"jsx-3089044648 codearea show"}),Object(s.jsx)("textarea",{defaultValue:t.js,name:"",id:"js",className:"jsx-3089044648 codearea"}),Object(s.jsx)("textarea",{defaultValue:t.css,name:"",id:"css",className:"jsx-3089044648 codearea"})]}),Object(s.jsx)("button",{onClick:w,className:"jsx-3089044648 preview_btn",children:"\ubbf8\ub9ac\ubcf4\uae30"}),Object(s.jsx)("button",{onClick:function(){console.log(d,t),w(),Object(j.a)(d,t)},className:"jsx-3089044648 create_btn",children:"\uc791\uc131"}),Object(s.jsxs)("div",{className:"jsx-3089044648 code_preview",children:[Object(s.jsx)("a",{target:"_blank",href:h,className:"jsx-3089044648 new_link",children:Object(s.jsx)("div",{title:"\uc0c8 \ucc3d\uc73c\ub85c \uc5f4\uae30",className:"jsx-3089044648 open_preview"})}),Object(s.jsx)("iframe",{src:h,className:"jsx-3089044648"})]}),Object(s.jsx)(a.a,{id:"3089044648",children:[".code__container.jsx-3089044648{min-height:500px;}","iframe.jsx-3089044648{width:100%;height:100%;}",".codearea.jsx-3089044648{width :100%;height :400px;display:none;box-sizing:border-box;}",".show.jsx-3089044648{display:block;}",".btn.jsx-3089044648{border:1px solid black;border-radius :2px;}",".btn.select.jsx-3089044648{background-color :gray;}",".code_preview.jsx-3089044648{position:relative;width :100%;height :500px;border:1px solid black;}",".code_preview.jsx-3089044648 iframe.jsx-3089044648{width :100%;height:100%;}",".code_preview.jsx-3089044648 .new_link.jsx-3089044648{position:absolute;top:10px;right:10px;width :10px;height:10px;background-color:gray;}"]})]})]})}},SCmb:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var s=function(e){var t=e.html,c=e.css,s=e.js,n=function(e,t){var c=new Blob([e],{type:t});return URL.createObjectURL(c)},r=n(c,"text/css"),a=n(s,"text/javascript");return n('\n    <html>\n      <head>\n        <meta charset="utf-8">\n        '.concat(c&&'<link rel="stylesheet" type="text/css" href="'.concat(r,'" />'),"\n      </head>\n      <body>\n        ").concat(t||"","\n      </body>\n      ").concat(s&&'<script src="'.concat(a,'"><\/script>'),"\n    </html>\n  "),"text/html")}}},[["75A6",0,2,7,1,3,5,6]]]);