(window.webpackJsonp=window.webpackJsonp||[]).push([[26,4],{401:function(e,t,n){"use strict";n.r(t);n(404);var r={name:"GlobalHeadingComponent",props:{headingLevel:{type:Number,required:!0},headingText:{type:String,required:!0}},computed:{headline:function(){return"h"+this.headingLevel}}},l=n(7),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.headline,{tag:"component"},[e._v(e._s(e.headingText))])}),[],!1,null,null,null);t.default=component.exports},404:function(e,t,n){"use strict";var r=n(8),l=n(39),o=n(40),c=n(107),v=n(77),d=n(13),A=n(61).f,y=n(62).f,_=n(16).f,h=n(405).trim,f="Number",m=r.Number,w=m,k=m.prototype,N=o(n(78)(k))==f,P="trim"in String.prototype,$=function(e){var t=v(e,!1);if("string"==typeof t&&t.length>2){var n,r,l,o=(t=P?t.trim():h(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+t}for(var code,c=t.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,r)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof m&&(N?d((function(){k.valueOf.call(n)})):o(n)!=f)?c(new w($(t)),n,m):$(t)};for(var x,I=n(11)?A(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;I.length>E;E++)l(w,x=I[E])&&!l(m,x)&&_(m,x,y(w,x));m.prototype=k,k.constructor=m,n(21)(r,f,m)}},405:function(e,t,n){var r=n(5),l=n(45),o=n(13),c=n(406),v="["+c+"]",d=RegExp("^"+v+v+"*"),A=RegExp(v+v+"*$"),y=function(e,t,n){var l={},v=o((function(){return!!c[e]()||"​"!="​"[e]()})),d=l[e]=v?t(_):c[e];n&&(l[n]=d),r(r.P+r.F*v,"String",l)},_=y.trim=function(e,t){return e=String(l(e)),1&t&&(e=e.replace(d,"")),2&t&&(e=e.replace(A,"")),e};e.exports=y},406:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},466:function(e,t,n){"use strict";n.r(t);var r={name:"VueA11y2019WebAccessibility",data:function(){return{link01:{title:this.$t("vueA11yPage2019.webA11y.link01.text"),url:this.$t("vueA11yPage2019.webA11y.link01.link"),isExternal:!0},link02:{title:this.$t("vueA11yPage2019.webA11y.link02.text"),url:this.$t("vueA11yPage2019.webA11y.link02.link"),isExternal:!0}}}},l=n(7),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"web-accessibility:about-accessibility-with-vuejs-2019"}},[n("global-heading-component",{attrs:{"heading-level":2,"heading-text":e.$t("vueA11yPage2019.heading.webA11y")}}),e._v(" "),n("global-heading-component",{attrs:{"heading-level":3,"heading-text":e.$t("vueA11yPage2019.subHeading.webA11y.title01")}}),e._v(" "),n("i18n",{attrs:{tag:"p",path:"vueA11yPage2019.webA11y.desc01"},scopedSlots:e._u([{key:"A11Y",fn:function(){return[n("span",[e._v("Accessibility")])]},proxy:!0}])}),e._v(" "),n("p",[e._v(e._s(e.$t("vueA11yPage2019.webA11y.desc02")))]),e._v(" "),n("blockquote",[n("p",[e._v(e._s(e.$t("vueA11yPage2019.webA11y.quote01")))]),e._v(" "),n("global-link-component",{attrs:{"link-object":e.link01}})],1),e._v(" "),n("global-heading-component",{attrs:{"heading-level":3,"heading-text":e.$t("vueA11yPage2019.subHeading.webA11y.title02")}}),e._v(" "),n("p",[e._v(e._s(e.$t("vueA11yPage2019.webA11y.desc03")))]),e._v(" "),n("p",[e._v(e._s(e.$t("vueA11yPage2019.webA11y.desc04")))]),e._v(" "),n("p",[e._v(e._s(e.$t("vueA11yPage2019.webA11y.desc05")))]),e._v(" "),n("figure",[n("img",{attrs:{src:"https://o.aolcdn.com/dims-global/dims3/GLOB/resize/1200x577/quality/80/https://techcrunch.com/wp-content/uploads/2019/05/live-caption.jpg",height:"480",alt:e.$t("vueA11yPage2019.webA11y.imgAlt01"),loading:"lazy"}}),e._v(" "),n("figcaption",[n("global-link-component",{attrs:{"link-object":e.link02}})],1)]),e._v(" "),n("p",[e._v(e._s(e.$t("vueA11yPage2019.webA11y.desc06")))]),e._v(" "),n("global-heading-component",{attrs:{"heading-level":3,"heading-text":e.$t("vueA11yPage2019.subHeading.webA11y.title03")}}),e._v(" "),n("p",[e._v(e._s(e.$t("vueA11yPage2019.webA11y.desc07")))]),e._v(" "),n("p",[e._v(e._s(e.$t("vueA11yPage2019.webA11y.desc08")))])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(401).default,GlobalLinkComponent:n(147).default})}}]);