(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4],{209:function(e,t,n){"use strict";n.r(t);n(211);var r={name:"GlobalHeadingComponent",props:{headingLevel:{type:Number,required:!0},headingText:{type:String,required:!0}},computed:{headline:function(){return"h"+this.headingLevel}}},o=n(5),component=Object(o.a)(r,(function(){var e=this;return(0,e._self._c)(e.headline,{tag:"component"},[e._v(e._s(e.headingText))])}),[],!1,null,null,null);t.default=component.exports},211:function(e,t,n){"use strict";var r=n(7),o=n(39),c=n(40),l=n(107),f=n(78),d=n(11),h=n(62).f,m=n(63).f,N=n(16).f,v=n(212).trim,I="Number",_=r.Number,E=_,A=_.prototype,x=c(n(79)(A))==I,S="trim"in String.prototype,y=function(e){var t=f(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,c=(t=S?t.trim():v(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var code,l=t.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+t};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof _&&(x?d((function(){A.valueOf.call(n)})):c(n)!=I)?l(new E(y(t)),n,_):y(t)};for(var w,T=n(12)?h(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;T.length>C;C++)o(E,w=T[C])&&!o(_,w)&&N(_,w,m(E,w));_.prototype=A,A.constructor=_,n(19)(r,I,_)}},212:function(e,t,n){var r=n(4),o=n(41),c=n(11),l=n(213),f="["+l+"]",d=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),m=function(e,t,n){var o={},f=c((function(){return!!l[e]()||"​"!="​"[e]()})),d=o[e]=f?t(N):l[e];n&&(o[n]=d),r(r.P+r.F*f,"String",o)},N=m.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(d,"")),2&t&&(e=e.replace(h,"")),e};e.exports=m},213:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},237:function(e,t,n){"use strict";n.r(t);var r={name:"IndexSectionsAddress"},o=n(5),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("section",{attrs:{id:"contact","aria-labelledby":"contact-heading"}},[t("global-heading-component",{attrs:{id:"contact-heading","heading-level":2,"heading-text":e.$t("heading.contact")}}),e._v(" "),t("address",[t("a",{attrs:{href:"mailto:0910yama@gmail.com"}},[e._v("\n        0910yama@gmail.com\n        "),t("mail-icon")],1)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(209).default})}}]);