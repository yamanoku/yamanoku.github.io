(window.webpackJsonp=window.webpackJsonp||[]).push([[23,4,5],{401:function(t,e,n){"use strict";n.r(e);n(404);var r={name:"GlobalHeadingComponent",props:{headingLevel:{type:Number,required:!0},headingText:{type:String,required:!0}},computed:{headline:function(){return"h"+this.headingLevel}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.headline,{tag:"component"},[t._v(t._s(t.headingText))])}),[],!1,null,null,null);e.default=component.exports},402:function(t,e,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("aea05fda",content,!0,{sourceMap:!1})},403:function(t,e,n){"use strict";n.r(e);n(49);var r={props:{listArray:{type:Array,required:!0}},data:function(){return{listItem:this.listArray}},methods:{dateStirngReplace:function(t){return t.replace(/T.*$/,"").replace(/(-)/g,"/")}}},o=(n(407),n(7)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.listItem,(function(e){return n("li",{key:e.index},[e.datetime?[n("span",{staticClass:"time"},[t._v(t._s(t.dateStirngReplace(e.datetime)))]),t._v("\n      -\n    ")]:t._e(),t._v(" "),e.isI18n?n("i18n",{attrs:{path:e.title}},[n("global-link-component",{attrs:{"link-object":e}})],1):e.url?[n("global-link-component",{attrs:{"link-object":e}})]:[t._v("\n      "+t._s(e.title)+"\n    ")]],2)})),0)}),[],!1,null,"b68c16c0",null);e.default=component.exports;installComponents(component,{GlobalLinkComponent:n(147).default})},404:function(t,e,n){"use strict";var r=n(8),o=n(39),l=n(40),c=n(107),f=n(77),d=n(13),m=n(61).f,v=n(62).f,_=n(16).f,h=n(405).trim,k="Number",y=r.Number,I=y,x=y.prototype,A=l(n(78)(x))==k,N="trim"in String.prototype,E=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=N?e.trim():h(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(A?d((function(){x.valueOf.call(n)})):l(n)!=k)?c(new I(E(e)),n,y):E(e)};for(var w,L=n(11)?m(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;L.length>C;C++)o(I,w=L[C])&&!o(y,w)&&_(y,w,v(I,w));y.prototype=x,x.constructor=y,n(21)(r,k,y)}},405:function(t,e,n){var r=n(5),o=n(45),l=n(13),c=n(406),f="["+c+"]",d=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),v=function(t,e,n){var o={},f=l((function(){return!!c[t]()||"​"!="​"[t]()})),d=o[t]=f?e(_):c[t];n&&(o[n]=d),r(r.P+r.F*f,"String",o)},_=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(m,"")),t};t.exports=v},406:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},407:function(t,e,n){"use strict";n(402)},408:function(t,e,n){var r=n(19)(!1);r.push([t.i,'.time[data-v-b68c16c0]{font-feature-settings:"tnum";font-variant-numeric:tabular-nums}',""]),t.exports=r},412:function(t,e,n){t.exports=n.p+"img/product-web-accessibility-for-beginner.32ad4ce.webp"},413:function(t,e,n){t.exports=n.p+"img/product-web-accessibility-for-beginner.d9c6de9.jpg"},463:function(t,e,n){"use strict";n.r(e);var r={name:"VueA11y2019Book",data:function(){return{BookListItem:[{title:"これからはじめるwebアクセシビリティ - こんのいぬ - BOOTH",url:"https://booth.pm/ja/items/1044446",isExternal:!0},{title:"「これからはじめるwebアクセシビリティ」をnoteにて販売します｜Okuto Oyama｜note",url:"https://note.mu/yamanoku/n/n3487a344ff84",isExternal:!0}],issuesLink:{title:"yamanoku/accessibility_book-issues:「これからはじめるwebアクセシビリティ」へのFB専用リポジトリ",url:"https://github.com/yamanoku/accessibility_book-issues",isExternal:!0,isGitHubLink:!0}}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"book:about-accessibility-with-vuejs-2019"}},[r("global-heading-component",{attrs:{"heading-level":2,"heading-text":t.$t("vueA11yPage2019.heading.book")}}),t._v(" "),r("global-heading-component",{attrs:{"heading-level":3,"heading-text":t.$t("vueA11yPage2019.subHeading.book")}}),t._v(" "),r("figure",[r("picture",[r("source",{attrs:{srcset:n(412),type:"image/webp"}}),t._v(" "),r("img",{attrs:{src:n(413),alt:t.$t("prefixAlt.photo")+t.$t("product.wafb.title")}})]),t._v(" "),r("figcaption",[r("p",[t._v("\n        "+t._s(t.$t("vueA11yPage2019.book.desc01"))+"\n      ")]),t._v(" "),r("p",[t._v("\n        "+t._s(t.$t("vueA11yPage2019.book.desc02"))+"\n      ")]),t._v(" "),r("global-list-component",{attrs:{"list-array":t.BookListItem}}),t._v(" "),r("p",[t._v("\n        "+t._s(t.$t("vueA11yPage2019.book.desc03"))+"\n      ")]),t._v(" "),r("global-link-component",{attrs:{"link-object":t.issuesLink}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(401).default,GlobalListComponent:n(403).default,GlobalLinkComponent:n(147).default})}}]);