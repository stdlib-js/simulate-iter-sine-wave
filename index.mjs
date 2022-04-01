// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sinpi@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var a=s,l=r,f=n.isPrimitive,u=o.isPrimitive,j=d.isPrimitive,v=p.isPrimitive,g=m;var h=e,b=t,c=i,x=function(e,t){return a(t)?l(t,"period")&&(e.period=t.period,!u(t.period))?new TypeError(g("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",t.period)):l(t,"amplitude")&&(e.amplitude=t.amplitude,!v(t.amplitude))?new TypeError(g("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",t.amplitude)):l(t,"offset")&&(e.offset=t.offset,!f(t.offset))?new TypeError(g("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):l(t,"iter")&&(e.iter=t.iter,!j(t.iter))?new TypeError(g("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(g("invalid argument. Options argument must be an object. Value: `%s`.",t))};var y=function e(t){var i,s,r,n,o,d,p;if(i={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=x(i,t)))throw n;return(o=(i.period-i.offset)%i.period)<0&&(o+=i.period),o-=1,d=2/i.period,p=0,h(s={},"next",m),h(s,"return",a),b&&h(s,b,l),s;function m(){return p+=1,r||p>i.iter?{done:!0}:(o+=1,o%=i.period,{value:i.amplitude*c(d*o),done:!1})}function a(e){return r=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return e(i)}},w=y;export{w as default};
//# sourceMappingURL=index.mjs.map
