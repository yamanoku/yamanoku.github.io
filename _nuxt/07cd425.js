(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4,5],{208:function(t,e,n){var content=n(215);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("24ac2230",content,!0,{sourceMap:!1})},209:function(t,e,n){"use strict";n.r(e);n(211);var r={name:"GlobalHeadingComponent",props:{headingLevel:{type:Number,required:!0},headingText:{type:String,required:!0}},computed:{headline:function(){return"h"+this.headingLevel}}},o=n(5),component=Object(o.a)(r,(function(){var t=this;return(0,t._self._c)(t.headline,{tag:"component"},[t._v(t._s(t.headingText))])}),[],!1,null,null,null);e.default=component.exports},210:function(t,e,n){"use strict";n.r(e);n(50);var r={props:{listArray:{type:Array,required:!0}},data:function(){return{listItem:this.listArray}},methods:{dateStirngReplace:function(t){return t.replace(/T.*$/,"").replace(/(-)/g,"/")}}},o=(n(214),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("ul",t._l(t.listItem,(function(n){return e("li",{key:n.index},[n.datetime?[e("span",{staticClass:"time"},[t._v(t._s(t.dateStirngReplace(n.datetime)))]),t._v("\n      -\n    ")]:t._e(),t._v(" "),n.isI18n?e("i18n",{attrs:{path:n.title}},[e("global-link-component",{attrs:{"link-object":n}})],1):n.url?[e("global-link-component",{attrs:{"link-object":n}})]:[t._v("\n      "+t._s(n.title)+"\n    ")]],2)})),0)}),[],!1,null,"b68c16c0",null);e.default=component.exports;installComponents(component,{GlobalLinkComponent:n(146).default})},211:function(t,e,n){"use strict";var r=n(7),o=n(42),l=n(43),c=n(107),d=n(78),f=n(12),h=n(62).f,m=n(63).f,_=n(16).f,v=n(212).trim,k="Number",I=r.Number,y=I,x=I.prototype,N=l(n(79)(x))==k,A="trim"in String.prototype,E=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=A?e.trim():v(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!I(" 0o1")||!I("0b1")||I("+0x1")){I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(N?f((function(){x.valueOf.call(n)})):l(n)!=k)?c(new y(E(e)),n,I):E(e)};for(var S,C=n(13)?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;C.length>L;L++)o(y,S=C[L])&&!o(I,S)&&_(I,S,m(y,S));I.prototype=x,x.constructor=I,n(19)(r,k,I)}},212:function(t,e,n){var r=n(4),o=n(44),l=n(12),c=n(213),d="["+c+"]",f=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),m=function(t,e,n){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),f=o[t]=d?e(_):c[t];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},_=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(h,"")),t};t.exports=m},213:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},214:function(t,e,n){"use strict";n(208)},215:function(t,e,n){var r=n(21)(!1);r.push([t.i,'.time[data-v-b68c16c0]{font-feature-settings:"tnum";font-variant-numeric:tabular-nums}',""]),t.exports=r},222:function(t,e,n){t.exports=n.p+"img/product-oclock-app.81f507c.webp"},223:function(t,e,n){t.exports=n.p+"img/product-oclock-app.99065c0.png"},233:function(t,e,n){"use strict";n.r(e);var r={name:"IndexSectionsProductsOclockApp",data:function(){return{relatedListItem:[{title:this.$t("product.oclock-app.title"),url:"https://yamanoku.net/oclock/",isExternal:!0},{title:this.$t("product.oclock-app.zenn"),url:"https://zenn.dev/yamanoku/scraps/bb713d47a45a55/",isExternal:!0}],techStackListItem:[{title:"Svelte"},{title:"Custom Elements"},{title:"WAI-ARIA"}]}}},o=n(5),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("article",{attrs:{id:"product:oclock-app","aria-labelledby":"product:oclock-app_heading"}},[e("global-heading-component",{attrs:{id:"product:oclock-app_heading","heading-level":3,"heading-text":t.$t("product.oclock-app.title")}}),t._v(" "),e("figure",{attrs:{"aria-labelledby":"product:oclock-app_heading","aria-describedby":"product:oclock-app_caption"}},[e("picture",[e("source",{attrs:{srcset:n(222),type:"image/webp"}}),t._v(" "),e("img",{attrs:{src:n(223),width:"688",height:"498",alt:t.$t("prefixAlt.screenshot")+t.$t("product.oclock-app.title"),decoding:"async"}})]),t._v(" "),e("figcaption",{attrs:{id:"product:oclock-app_caption"}},[t._v("\n      "+t._s(t.$t("product.description.oclock-app"))+"\n    ")])]),t._v(" "),e("global-heading-component",{attrs:{id:"related:oclock-app_heading","heading-level":4,"heading-text":t.$t("heading.relatedList")}}),t._v(" "),e("global-list-component",{attrs:{"aria-labelledby":"related:oclock-app_heading","list-array":t.relatedListItem}}),t._v(" "),e("global-heading-component",{attrs:{id:"tech-stack:oclock-app_heading","heading-level":4,"heading-text":t.$t("heading.techStack")}}),t._v(" "),e("global-list-component",{attrs:{"aria-labelledby":"tech-stack:oclock-app_heading","list-array":t.techStackListItem}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(209).default,GlobalListComponent:n(210).default})}}]);