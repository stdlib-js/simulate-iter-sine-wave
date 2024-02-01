// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterSineWave=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,v,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,g,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var O=String.fromCharCode,E=isNaN,_=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,o,a,f,s,l,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=U.exec(r);n;)(e=r.slice(i,U.lastIndex-n[0].length)).length&&t.push(e),t.push(N(n)),i=U.lastIndex,n=U.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function I(r){return"string"==typeof r}function F(r){var e,t,n;if(!I(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=x(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var k,P=Object.prototype,V=P.toString,G=P.__defineGetter__,L=P.__defineSetter__,$=P.__lookupGetter__,C=P.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,e,t.get),a&&L&&L.call(r,e,t.set),r};var W=k;function H(r,e,t){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=Object.prototype.hasOwnProperty;function R(r,e){return null!=r&&B.call(r,e)}var M="function"==typeof Symbol?Symbol:void 0;var Z="function"==typeof M&&"symbol"==typeof M("foo")&&R(M,"iterator")&&"symbol"==typeof M.iterator?Symbol.iterator:null;function X(r){return r!=r}var Y=Number.POSITIVE_INFINITY,z=Number,q=z.NEGATIVE_INFINITY;function D(r){return r===Y||r===q}var J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function K(){return J&&"symbol"==typeof Symbol.toStringTag}var Q=Object.prototype.toString;var rr="function"==typeof M?M.toStringTag:"";var er=K()?function(r){var e,t,n;if(null==r)return Q.call(r);t=r[rr],e=R(r,rr);try{r[rr]=void 0}catch(e){return Q.call(r)}return n=Q.call(r),e?r[rr]=t:delete r[rr],n}:function(r){return Q.call(r)},tr="function"==typeof Uint32Array;var nr="function"==typeof Uint32Array?Uint32Array:null;var ir,or="function"==typeof Uint32Array?Uint32Array:void 0;ir=function(){var r,e,t;if("function"!=typeof nr)return!1;try{e=new nr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(tr&&t instanceof Uint32Array||"[object Uint32Array]"===er(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ar=ir,ur="function"==typeof Float64Array;var cr="function"==typeof Float64Array?Float64Array:null;var fr,sr="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,e,t;if("function"!=typeof cr)return!1;try{e=new cr([1,3.14,-3.14,NaN]),t=e,r=(ur&&t instanceof Float64Array||"[object Float64Array]"===er(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr=fr,pr="function"==typeof Uint8Array;var yr="function"==typeof Uint8Array?Uint8Array:null;var vr,dr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr(e=[1,3.14,-3.14,256,257]),t=e,r=(pr&&t instanceof Uint8Array||"[object Uint8Array]"===er(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var gr=vr,br="function"==typeof Uint16Array;var hr="function"==typeof Uint16Array?Uint16Array:null;var wr,mr="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,e,t;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(br&&t instanceof Uint16Array||"[object Uint16Array]"===er(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var jr,Ar={uint16:wr,uint8:gr};(jr=new Ar.uint16(1))[0]=4660;var Or=52===new Ar.uint8(jr.buffer)[0],Er=!0===Or?1:0,_r=new lr(1),Sr=new ar(_r.buffer);function Tr(r){return _r[0]=r,Sr[Er]}function Ur(r,e){var t,n,i,o;return i=(o=r*r)*o,n=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),n+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*n-r*e))}var Nr=-.16666666666666632;function xr(r,e){var t,n,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),n=i*r,0===e?r+n*(Nr+i*t):r-(i*(.5*e-n*t)-e-n*Nr)}var Ir,Fr,kr=2147483647,Pr=2146435072,Vr=!0===Or?0:1,Gr=new lr(1),Lr=new ar(Gr.buffer);!0===Or?(Ir=1,Fr=0):(Ir=0,Fr=1);var $r={HIGH:Ir,LOW:Fr},Cr=new lr(1),Wr=new ar(Cr.buffer),Hr=$r.HIGH,Br=$r.LOW;function Rr(r,e){return Wr[Hr]=r,Wr[Br]=e,Cr[0]}var Mr,Zr,Xr=Math.floor;!0===Or?(Mr=1,Zr=0):(Mr=0,Zr=1);var Yr={HIGH:Mr,LOW:Zr},zr=new lr(1),qr=new ar(zr.buffer),Dr=Yr.HIGH,Jr=Yr.LOW;function Kr(r,e,t,n){return zr[0]=r,e[n]=qr[Dr],e[n+t]=qr[Jr],e}function Qr(r){return Kr(r,[0,0],1,0)}H(Qr,"assign",Kr);var re=[0,0];function ee(r,e){var t,n;return Qr.assign(r,re,1,0),t=re[0],t&=kr,n=Tr(e),Rr(t|=n&=2147483648,re[1])}function te(r){return Math.abs(r)}function ne(r,e,t,n){return X(r)||D(r)?(e[n]=r,e[n+t]=0,e):0!==r&&te(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}H((function(r){return ne(r,[0,0],1,0)}),"assign",ne);var ie=[0,0],oe=[0,0];function ae(r,e){var t,n;return 0===e||0===r||X(r)||D(r)?r:(ne(r,ie,1,0),e+=ie[1],e+=function(r){var e=Tr(r);return(e=(e&Pr)>>>20)-1023|0}(r=ie[0]),e<-1074?ee(0,r):e>1023?r<0?q:Y:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Qr.assign(r,oe,1,0),t=oe[0],t&=2148532223,n*Rr(t|=e+1023<<20,oe[1])))}function ue(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ce=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],fe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],se=16777216,le=5.960464477539063e-8,pe=ue(20),ye=ue(20),ve=ue(20),de=ue(20);function ge(r,e,t,n,i,o,a,u,c){var f,s,l,p,y,v,d,g,b;for(p=o,b=n[t],g=t,y=0;g>0;y++)s=le*b|0,de[y]=b-se*s|0,b=n[g-1]+s,g-=1;if(b=ae(b,i),b-=8*Xr(.125*b),b-=d=0|b,l=0,i>0?(d+=y=de[t-1]>>24-i,de[t-1]-=y<<24-i,l=de[t-1]>>23-i):0===i?l=de[t-1]>>23:b>=.5&&(l=2),l>0){for(d+=1,f=0,y=0;y<t;y++)g=de[y],0===f?0!==g&&(f=1,de[y]=16777216-g):de[y]=16777215-g;if(i>0)switch(i){case 1:de[t-1]&=8388607;break;case 2:de[t-1]&=4194303}2===l&&(b=1-b,0!==f&&(b-=ae(1,i)))}if(0===b){for(g=0,y=t-1;y>=o;y--)g|=de[y];if(0===g){for(v=1;0===de[o-v];v++);for(y=t+1;y<=t+v;y++){for(c[u+y]=ce[a+y],s=0,g=0;g<=u;g++)s+=r[g]*c[u+(y-g)];n[y]=s}return ge(r,e,t+=v,n,i,o,a,u,c)}}if(0===b)for(t-=1,i-=24;0===de[t];)t-=1,i-=24;else(b=ae(b,-i))>=se?(s=le*b|0,de[t]=b-se*s|0,i+=24,de[t+=1]=s):de[t]=0|b;for(s=ae(1,i),y=t;y>=0;y--)n[y]=s*de[y],s*=le;for(y=t;y>=0;y--){for(s=0,v=0;v<=p&&v<=t-y;v++)s+=fe[v]*n[y+v];ve[t-y]=s}for(s=0,y=t;y>=0;y--)s+=ve[y];for(e[0]=0===l?s:-s,s=ve[0]-s,y=1;y<=t;y++)s+=ve[y];return e[1]=0===l?s:-s,7&d}function be(r,e,t,n){var i,o,a,u,c,f,s;for(4,(o=(t-3)/24|0)<0&&(o=0),u=t-24*(o+1),f=o-(a=n-1),s=a+4,c=0;c<=s;c++)pe[c]=f<0?0:ce[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=a;f++)i+=r[f]*pe[a+(c-f)];ye[c]=i}return 4,ge(r,e,4,ye,u,4,o,a,pe)}var he=Math.round;function we(r,e,t){var n,i,o,a,u;return o=r-1.5707963267341256*(n=he(.6366197723675814*r)),a=6077100506506192e-26*n,u=e>>20|0,t[0]=o-a,u-(Tr(t[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((i=o)-(o=i-(a=6077100506303966e-26*n))-a),t[0]=o-a,u-(Tr(t[0])>>20&2047)>49&&(a=84784276603689e-45*n-((i=o)-(o=i-(a=20222662487111665e-37*n))-a),t[0]=o-a)),t[1]=o-t[0]-a,n}var me=1.5707963267341256,je=6077100506506192e-26,Ae=2*je,Oe=3*je,Ee=4*je,_e=[0,0,0],Se=[0,0];function Te(r,e){var t,n,i,o,a,u,c;if((i=Tr(r)&kr|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?we(r,i,e):i<=1073928572?r>0?(c=r-me,e[0]=c-je,e[1]=c-e[0]-je,1):(c=r+me,e[0]=c+je,e[1]=c-e[0]+je,-1):r>0?(c=r-2*me,e[0]=c-Ae,e[1]=c-e[0]-Ae,2):(c=r+2*me,e[0]=c+Ae,e[1]=c-e[0]+Ae,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?we(r,i,e):r>0?(c=r-3*me,e[0]=c-Oe,e[1]=c-e[0]-Oe,3):(c=r+3*me,e[0]=c+Oe,e[1]=c-e[0]+Oe,-3):1075388923===i?we(r,i,e):r>0?(c=r-4*me,e[0]=c-Ee,e[1]=c-e[0]-Ee,4):(c=r+4*me,e[0]=c+Ee,e[1]=c-e[0]+Ee,-4);if(i<1094263291)return we(r,i,e);if(i>=Pr)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return Gr[0]=r,Lr[Vr]}(r),c=Rr(i-((n=(i>>20)-1046)<<20|0),t),a=0;a<2;a++)_e[a]=0|c,c=16777216*(c-_e[a]);for(_e[2]=c,o=3;0===_e[o-1];)o-=1;return u=be(_e,Se,n,o),r<0?(e[0]=-Se[0],e[1]=-Se[1],-u):(e[0]=Se[0],e[1]=Se[1],u)}var Ue=[0,0];function Ne(r){var e;if(e=Tr(r),(e&=2147483647)<=1072243195)return e<1044381696?1:Ur(r,0);if(e>=2146435072)return NaN;switch(3&Te(r,Ue)){case 0:return Ur(Ue[0],Ue[1]);case 1:return-xr(Ue[0],Ue[1]);case 2:return-Ur(Ue[0],Ue[1]);default:return xr(Ue[0],Ue[1])}}var xe=[0,0];function Ie(r){var e;if(e=Tr(r),(e&=kr)<=1072243195)return e<1045430272?r:xr(r,0);if(e>=Pr)return NaN;switch(3&Te(r,xe)){case 0:return xr(xe[0],xe[1]);case 1:return Ur(xe[0],xe[1]);case 2:return-xr(xe[0],xe[1]);default:return-Ur(xe[0],xe[1])}}var Fe=3.141592653589793;function ke(r){var e,t;return X(r)||D(r)?NaN:0===(e=te(t=r%2))||1===e?ee(0,t):e<.25?Ie(Fe*t):e<.75?ee(Ne(Fe*(e=.5-e)),t):e<1.25?(t=ee(1,t)-t,Ie(Fe*t)):e<1.75?-ee(Ne(Fe*(e-=1.5)),t):(t-=ee(2,t),Ie(Fe*t))}var Pe=Array.isArray?Array.isArray:function(r){return"[object Array]"===er(r)};var Ve=/./;function Ge(r){return"boolean"==typeof r}var Le=Boolean,$e=Boolean.prototype.toString;var Ce=K();function We(r){return"object"==typeof r&&(r instanceof Le||(Ce?function(r){try{return $e.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===er(r)))}function He(r){return Ge(r)||We(r)}function Be(){return new Function("return this;")()}H(He,"isPrimitive",Ge),H(He,"isObject",We);var Re="object"==typeof self?self:null,Me="object"==typeof window?window:null,Ze="object"==typeof global?global:null,Xe="object"==typeof globalThis?globalThis:null;var Ye=function(r){if(arguments.length){if(!Ge(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Be()}if(Xe)return Xe;if(Re)return Re;if(Me)return Me;if(Ze)return Ze;throw new Error("unexpected error. Unable to resolve global object.")}(),ze=Ye.document&&Ye.document.childNodes,qe=Int8Array;function De(){return/^\s*function\s*([^(]*)/i}var Je=/^\s*function\s*([^(]*)/i;function Ke(r){return null!==r&&"object"==typeof r}function Qe(r){var e,t,n,i;if(("Object"===(t=er(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Je.exec(n.toString()))return e[1]}return Ke(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}H(De,"REGEXP",Je),H(Ke,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Pe(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ke));var rt="function"==typeof Ve||"object"==typeof qe||"function"==typeof ze?function(r){return Qe(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Qe(r).toLowerCase():e};function et(r){return"function"===rt(r)}var tt,nt=Object,it=Object.getPrototypeOf;tt=et(Object.getPrototypeOf)?it:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===er(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ot=tt;var at=Object.prototype;function ut(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Pe(r)}(r)&&(e=function(r){return null==r?null:(r=nt(r),ot(r))}(r),!e||!R(r,"constructor")&&R(e,"constructor")&&et(e.constructor)&&"[object Function]"===er(e.constructor)&&R(e,"isPrototypeOf")&&et(e.isPrototypeOf)&&(e===at||function(r){var e;for(e in r)if(!R(r,e))return!1;return!0}(r)))}function ct(r){return"number"==typeof r}var ft=z.prototype.toString;var st=K();function lt(r){return"object"==typeof r&&(r instanceof z||(st?function(r){try{return ft.call(r),!0}catch(r){return!1}}(r):"[object Number]"===er(r)))}function pt(r){return ct(r)||lt(r)}function yt(r){return r<Y&&r>q&&Xr(e=r)===e;var e}function vt(r){return ct(r)&&yt(r)}function dt(r){return lt(r)&&yt(r.valueOf())}function gt(r){return vt(r)||dt(r)}function bt(r){return vt(r)&&r>0}function ht(r){return dt(r)&&r.valueOf()>0}function wt(r){return bt(r)||ht(r)}function mt(r){return vt(r)&&r>=0}function jt(r){return dt(r)&&r.valueOf()>=0}function At(r){return mt(r)||jt(r)}function Ot(r){return ct(r)&&r>=0}function Et(r){return lt(r)&&r.valueOf()>=0}function _t(r){return Ot(r)||Et(r)}function St(r,e){return ut(e)?R(e,"period")&&(r.period=e.period,!bt(e.period))?new TypeError(F("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):R(e,"amplitude")&&(r.amplitude=e.amplitude,!Ot(e.amplitude))?new TypeError(F("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):R(e,"offset")&&(r.offset=e.offset,!vt(e.offset))?new TypeError(F("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):R(e,"iter")&&(r.iter=e.iter,!mt(e.iter))?new TypeError(F("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",e))}return H(pt,"isPrimitive",ct),H(pt,"isObject",lt),H(gt,"isPrimitive",vt),H(gt,"isObject",dt),H(wt,"isPrimitive",bt),H(wt,"isObject",ht),H(At,"isPrimitive",mt),H(At,"isObject",jt),H(_t,"isPrimitive",Ot),H(_t,"isObject",Et),function r(e){var t,n,i,o,a,u,c;if(t={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(o=St(t,e)))throw o;return(a=(t.period-t.offset)%t.period)<0&&(a+=t.period),a-=1,u=2/t.period,c=0,H(n={},"next",f),H(n,"return",s),Z&&H(n,Z,l),n;function f(){return c+=1,i||c>t.iter?{done:!0}:(a+=1,a%=t.period,{value:t.amplitude*ke(u*a),done:!1})}function s(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t)}}}));
//# sourceMappingURL=index.js.map
