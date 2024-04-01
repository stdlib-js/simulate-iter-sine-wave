// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sinpi@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.1-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.1-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function l(f){var a,j,v,u,h,g,c;if(a={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(u=function(e,t){return i(t)?s(t,"period")&&(e.period=t.period,!o(t.period))?new TypeError(p("0tX8N","period",t.period)):s(t,"amplitude")&&(e.amplitude=t.amplitude,!m(t.amplitude))?new TypeError(p("0tX4k","amplitude",t.amplitude)):s(t,"offset")&&(e.offset=t.offset,!n(t.offset))?new TypeError(p("0tX8M","offset",t.offset)):s(t,"iter")&&(e.iter=t.iter,!d(t.iter))?new TypeError(p("0tX2t","iter",t.iter)):null:new TypeError(p("0tX2V",t))}(a,f),u))throw u;return(h=(a.period-a.offset)%a.period)<0&&(h+=a.period),h-=1,g=2/a.period,c=0,e(j={},"next",(function(){if(c+=1,v||c>a.iter)return{done:!0};return h+=1,{value:a.amplitude*r(g*(h%=a.period)),done:!1}})),e(j,"return",(function(e){if(v=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),t&&e(j,t,(function(){return l(a)})),j}export{l as default};
//# sourceMappingURL=index.mjs.map
