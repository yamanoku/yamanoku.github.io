(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,4,5],{401:function(t,e,n){"use strict";n.r(e);n(404);var r={name:"GlobalHeadingComponent",props:{headingLevel:{type:Number,required:!0},headingText:{type:String,required:!0}},computed:{headline:function(){return"h"+this.headingLevel}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.headline,{tag:"component"},[t._v(t._s(t.headingText))])}),[],!1,null,null,null);e.default=component.exports},402:function(t,e,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("aea05fda",content,!0,{sourceMap:!1})},403:function(t,e,n){"use strict";n.r(e);n(49);var r={props:{listArray:{type:Array,required:!0}},data:function(){return{listItem:this.listArray}},methods:{dateStirngReplace:function(t){return t.replace(/T.*$/,"").replace(/(-)/g,"/")}}},o=(n(407),n(7)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.listItem,(function(e){return n("li",{key:e.index},[e.datetime?[n("span",{staticClass:"time"},[t._v(t._s(t.dateStirngReplace(e.datetime)))]),t._v("\n      -\n    ")]:t._e(),t._v(" "),e.isI18n?n("i18n",{attrs:{path:e.title}},[n("global-link-component",{attrs:{"link-object":e}})],1):e.url?[n("global-link-component",{attrs:{"link-object":e}})]:[t._v("\n      "+t._s(e.title)+"\n    ")]],2)})),0)}),[],!1,null,"b68c16c0",null);e.default=component.exports;installComponents(component,{GlobalLinkComponent:n(147).default})},404:function(t,e,n){"use strict";var r=n(8),o=n(39),l=n(40),c=n(107),d=n(77),f=n(13),m=n(61).f,v=n(62).f,h=n(16).f,_=n(405).trim,y="Number",E=r.Number,I=E,x=E.prototype,N=l(n(78)(x))==y,A="trim"in String.prototype,S=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=A?e.trim():_(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!E(" 0o1")||!E("0b1")||E("+0x1")){E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(N?f((function(){x.valueOf.call(n)})):l(n)!=y)?c(new I(S(e)),n,E):S(e)};for(var k,L=n(11)?m(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;L.length>C;C++)o(I,k=L[C])&&!o(E,k)&&h(E,k,v(I,k));E.prototype=x,x.constructor=E,n(21)(r,y,E)}},405:function(t,e,n){var r=n(5),o=n(45),l=n(13),c=n(406),d="["+c+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(t,e,n){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),f=o[t]=d?e(h):c[t];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},h=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=v},406:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},407:function(t,e,n){"use strict";n(402)},408:function(t,e,n){var r=n(19)(!1);r.push([t.i,'.time[data-v-b68c16c0]{font-feature-settings:"tnum";font-variant-numeric:tabular-nums}',""]),t.exports=r},409:function(t,e,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("6e973862",content,!0,{sourceMap:!1})},410:function(t,e,n){"use strict";n(409)},411:function(t,e,n){var r=n(19)(!1);r.push([t.i,"article[data-v-74a22d44]{border:1px solid var(--y-arcticle-border-color);padding-top:var(--y-rhythm-3);padding-left:var(--y-rhythm-3);padding-right:var(--y-rhythm-3)}article[data-v-74a22d44]:before{display:none}ul[data-v-74a22d44]{margin-bottom:0}",""]),t.exports=r},414:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{donateLinkList:[{title:"GitHub Sponsors",url:"https://github.com/sponsors/yamanoku",isExternal:!0,isGitHubLink:!0},{title:"Stripe Payment Links",url:"https://buy.stripe.com/00gaEY1Eh5bE7VC8ww",isExternal:!0},{title:"Buy me a coffee",url:"https://buymeacoffee.com/yamanoku",isExternal:!0}]}}},o=(n(410),n(7)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{attrs:{id:"donate","aria-labelledby":"donate_heading"}},[n("div",[n("em",{attrs:{id:"donate_heading"}},[t._v("\n      "+t._s(t.$t("heading.donate"))+"\n    ")])]),t._v(" "),n("p",[t._v("\n    "+t._s(t.$t("donate.desc01"))+"\n  ")]),t._v(" "),n("global-list-component",{attrs:{"list-array":t.donateLinkList}})],1)}),[],!1,null,"74a22d44",null);e.default=component.exports;installComponents(component,{GlobalListComponent:n(403).default})},435:function(t,e,n){"use strict";n.r(e);var r={name:"IndexSectionsOpenSourceActivity",data:function(){return{openSourceActivityListItem:[{title:this.$t("openSourceActivity.link01"),url:"https://www.notion.so/yamanoku/2021-2c4fa51b832645f494698ebd11e069f9",isExternal:!0}]}}},o=n(7),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"open-source-activity","aria-labelledby":"open-source-activity_heading"}},[n("global-heading-component",{attrs:{id:"open-source-activity_heading","heading-level":2,"heading-text":t.$t("heading.openSourceActivity")}}),t._v(" "),n("p",[t._v(t._s(t.$t("openSourceActivity.desc01")))]),t._v(" "),n("global-list-component",{attrs:{"list-array":t.openSourceActivityListItem}}),t._v(" "),n("global-donate-component")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(401).default,GlobalListComponent:n(403).default,GlobalDonateComponent:n(414).default})}}]);