"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=s(function(G,l){
var P=require('@stdlib/assert-is-plain-object/dist'),a=require('@stdlib/assert-has-own-property/dist'),x=require('@stdlib/assert-is-integer/dist').isPrimitive,E=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,N=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,T=require('@stdlib/assert-is-nonnegative-number/dist').isPrimitive,n=require('@stdlib/error-tools-fmtprodmsg/dist');function h(r,e){return P(e)?a(e,"period")&&(r.period=e.period,!E(e.period))?new TypeError(n('0tX8N',"period",e.period)):a(e,"amplitude")&&(r.amplitude=e.amplitude,!T(e.amplitude))?new TypeError(n('0tX4k',"amplitude",e.amplitude)):a(e,"offset")&&(r.offset=e.offset,!x(e.offset))?new TypeError(n('0tX8M',"offset",e.offset)):a(e,"iter")&&(r.iter=e.iter,!N(e.iter))?new TypeError(n('0tX2t',"iter",e.iter)):null:new TypeError(n('0tX2V',e));}l.exports=h
});var c=s(function(L,q){
var v=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=require('@stdlib/symbol-iterator/dist'),I=require('@stdlib/math-base-special-sinpi/dist'),j=m();function g(r){var e,t,o,u,i,d,f;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(u=j(e,r),u))throw u;return i=(e.period-e.offset)%e.period,i<0&&(i+=e.period),i-=1,d=2/e.period,f=0,t={},v(t,"next",b),v(t,"return",y),p&&v(t,p,O),t;function b(){return f+=1,o||f>e.iter?{done:!0}:(i+=1,i%=e.period,{value:e.amplitude*I(d*i),done:!1})}function y(w){return o=!0,arguments.length?{value:w,done:!0}:{done:!0}}function O(){return g(e)}}q.exports=g
});var S=c();module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
