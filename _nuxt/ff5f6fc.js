(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{208:function(e,t,n){"use strict";n.r(t);n(210);var r={name:"GlobalHeadingComponent",props:{headingLevel:{type:Number,required:!0},headingText:{type:String,required:!0}},computed:{headline:function(){return"h"+this.headingLevel}}},o=n(5),component=Object(o.a)(r,(function(){var e=this;return(0,e._self._c)(e.headline,{tag:"component"},[e._v(e._s(e.headingText))])}),[],!1,null,null,null);t.default=component.exports},210:function(e,t,n){"use strict";var r=n(7),o=n(42),c=n(43),f=n(108),l=n(79),h=n(13),N=n(62).f,I=n(63).f,d=n(17).f,v=n(211).trim,E="Number",_=r[E],A=_,m=_.prototype,S=c(n(80)(m))==E,w="trim"in String.prototype,x=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,c=(t=w?t.trim():v(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var code,f=t.slice(2),i=0,h=f.length;i<h;i++)if((code=f.charCodeAt(i))<48||code>o)return NaN;return parseInt(f,r)}}return+t};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof _&&(S?h((function(){m.valueOf.call(n)})):c(n)!=E)?f(new A(x(t)),n,_):x(t)};for(var T,F=n(14)?N(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;F.length>y;y++)o(A,T=F[y])&&!o(_,T)&&d(_,T,I(A,T));_.prototype=m,m.constructor=_,n(19)(r,E,_)}},211:function(e,t,n){var r=n(4),o=n(44),c=n(13),f=n(212),l="["+f+"]",h=RegExp("^"+l+l+"*"),N=RegExp(l+l+"*$"),I=function(e,t,n){var o={},l=c((function(){return!!f[e]()||"​"!="​"[e]()})),h=o[e]=l?t(d):f[e];n&&(o[n]=h),r(r.P+r.F*l,"String",o)},d=I.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(h,"")),2&t&&(e=e.replace(N,"")),e};e.exports=I},212:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);