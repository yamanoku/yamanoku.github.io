(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{209:function(e,t,r){"use strict";r.r(t);r(211);var n={name:"GlobalHeadingComponent",props:{headingLevel:{type:Number,required:!0},headingText:{type:String,required:!0}},computed:{headline:function(){return"h"+this.headingLevel}}},o=r(5),component=Object(o.a)(n,(function(){var e=this;return(0,e._self._c)(e.headline,{tag:"component"},[e._v(e._s(e.headingText))])}),[],!1,null,null,null);t.default=component.exports},211:function(e,t,r){"use strict";var n=r(7),o=r(39),c=r(40),f=r(107),l=r(78),N=r(11),h=r(62).f,I=r(63).f,d=r(16).f,v=r(212).trim,E="Number",_=n.Number,m=_,A=_.prototype,S=c(r(79)(A))==E,w="trim"in String.prototype,x=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,c=(t=w?t.trim():v(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var code,f=t.slice(2),i=0,N=f.length;i<N;i++)if((code=f.charCodeAt(i))<48||code>o)return NaN;return parseInt(f,n)}}return+t};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof _&&(S?N((function(){A.valueOf.call(r)})):c(r)!=E)?f(new m(x(t)),r,_):x(t)};for(var T,F=r(12)?h(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;F.length>y;y++)o(m,T=F[y])&&!o(_,T)&&d(_,T,I(m,T));_.prototype=A,A.constructor=_,r(19)(n,E,_)}},212:function(e,t,r){var n=r(4),o=r(41),c=r(11),f=r(213),l="["+f+"]",N=RegExp("^"+l+l+"*"),h=RegExp(l+l+"*$"),I=function(e,t,r){var o={},l=c((function(){return!!f[e]()||"​"!="​"[e]()})),N=o[e]=l?t(d):f[e];r&&(o[r]=N),n(n.P+n.F*l,"String",o)},d=I.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(N,"")),2&t&&(e=e.replace(h,"")),e};e.exports=I},213:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);