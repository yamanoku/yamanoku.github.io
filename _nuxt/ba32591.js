(window.webpackJsonp=window.webpackJsonp||[]).push([[23,4],{405:function(e,t,n){"use strict";n.r(t);n(408);var o={name:"GlobalHeadingComponent",props:{headingLevel:{type:Number,required:!0},headingText:{type:String,required:!0}},computed:{headline:function(){return"h"+this.headingLevel}}},r=n(4),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.headline,{tag:"component"},[e._v(e._s(e.headingText))])}),[],!1,null,null,null);t.default=component.exports},408:function(e,t,n){"use strict";var o=n(7),r=n(39),l=n(40),c=n(108),v=n(78),_=n(13),h=n(62).f,d=n(63).f,f=n(18).f,k=n(409).trim,m="Number",w=o.Number,y=w,A=w.prototype,P=l(n(79)(A))==m,I="trim"in String.prototype,E=function(e){var t=v(e,!1);if("string"==typeof t&&t.length>2){var n,o,r,l=(t=I?t.trim():k(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+t}for(var code,c=t.slice(2),i=0,_=c.length;i<_;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,o)}}return+t};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof w&&(P?_((function(){A.valueOf.call(n)})):l(n)!=m)?c(new y(E(t)),n,w):E(t)};for(var N,x=n(11)?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),$=0;x.length>$;$++)r(y,N=x[$])&&!r(w,N)&&f(w,N,d(y,N));w.prototype=A,A.constructor=w,n(21)(o,m,w)}},409:function(e,t,n){var o=n(5),r=n(46),l=n(13),c=n(410),v="["+c+"]",_=RegExp("^"+v+v+"*"),h=RegExp(v+v+"*$"),d=function(e,t,n){var r={},v=l((function(){return!!c[e]()||"​"!="​"[e]()})),_=r[e]=v?t(f):c[e];n&&(r[n]=_),o(o.P+o.F*v,"String",r)},f=d.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(_,"")),2&t&&(e=e.replace(h,"")),e};e.exports=d},410:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},467:function(e,t,n){"use strict";n.r(t);var o={name:"VueA11y2019Conclusion",data:function(){return{proposalLink:{title:"The original proposal of the WWW, HTMLized",url:"https://www.w3.org/History/1989/proposal.html",isExternal:!0},pressReleaseLink:{title:"Press Release: W3C Launches International Program Office for WAI",url:"https://www.w3.org/Press/IPO-announce",isExternal:!0},wiredLink:{title:"Interview with the Web’s Creator | WIRED",url:"https://www.wired.com/1999/10/interview-with-the-webs-creator/",isExternal:!0},digimaJapanLink:{title:this.$t("vueA11yPage2019.conclusion.link01"),url:"https://www.digima-japan.com/knowhow/world/15167.php",isExternal:!0},forTheWebLink:{title:this.$t("vueA11yPage2019.conclusion.quote04.text"),url:this.$t("vueA11yPage2019.conclusion.quote04.link"),isExternal:!0},kzakzaLink:{title:"アクセシビリティは “Start Small, Start Now” でいこう | kzakza",url:"https://code.kzakza.com/2019/03/start-small-start-now/",isExternal:!0}}}},r=n(4),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"in-conclusion:about-accessibility-with-vuejs-2019"}},[n("global-heading-component",{attrs:{"heading-level":2,"heading-text":e.$t("vueA11yPage2019.heading.conclusion")}}),e._v(" "),n("p",[e._v("\n    "+e._s(e.$t("vueA11yPage2019.conclusion.desc01"))+"\n  ")]),e._v(" "),n("figure",[n("img",{staticStyle:{"max-width":"220px"},attrs:{src:"https://live.staticflickr.com/8221/8314288381_ebc4c1b074_c.jpg",width:"220",height:"240",alt:e.$t("vueA11yPage2019.conclusion.imgAlt01"),decoding:"async"}}),e._v(" "),n("figcaption",[n("global-link-component",{attrs:{"link-object":e.proposalLink}})],1)]),e._v(" "),n("blockquote",{attrs:{lang:"en"}},[n("p",[e._v("\n      The power of the Web is in its universality. Access by everyone\n      regardless of disability is an essential aspect.\n    ")]),e._v(" "),n("global-link-component",{attrs:{"link-object":e.pressReleaseLink}})],1),e._v(" "),n("p",[e._v("\n    "+e._s(e.$t("vueA11yPage2019.conclusion.desc02"))+"\n  ")]),e._v(" "),n("blockquote",{attrs:{lang:"en"}},[n("p",[e._v("\n      Whatever the device you use for getting your information out, it should\n      be the same information.\n    ")]),e._v(" "),n("global-link-component",{attrs:{"link-object":e.wiredLink}})],1),e._v(" "),n("p",[e._v("\n    "+e._s(e.$t("vueA11yPage2019.conclusion.desc03"))+"\n  ")]),e._v(" "),n("p",[e._v("\n    "+e._s(e.$t("vueA11yPage2019.conclusion.desc04"))+"\n  ")]),e._v(" "),n("i18n",{attrs:{tag:"p",path:"vueA11yPage2019.conclusion.desc05"},scopedSlots:e._u([{key:"link01",fn:function(){return[n("global-link-component",{attrs:{"link-object":e.digimaJapanLink}})]},proxy:!0}])}),e._v(" "),n("p",[e._v("\n    "+e._s(e.$t("vueA11yPage2019.conclusion.desc06"))+"\n  ")]),e._v(" "),n("blockquote",[n("p",[e._v("\n      "+e._s(e.$t("vueA11yPage2019.conclusion.quote01"))+"\n    ")]),e._v(" "),n("p",[e._v("\n      "+e._s(e.$t("vueA11yPage2019.conclusion.quote02"))+"\n    ")]),e._v(" "),n("p",[e._v("\n      "+e._s(e.$t("vueA11yPage2019.conclusion.quote03"))+"\n    ")]),e._v(" "),n("global-link-component",{attrs:{"link-object":e.forTheWebLink}})],1),e._v(" "),n("global-heading-component",{attrs:{"heading-level":3,"heading-text":e.$t("vueA11yPage2019.subHeading.conclusion")}}),e._v(" "),n("p",[e._v("\n    "+e._s(e.$t("vueA11yPage2019.conclusion.desc07"))+"\n  ")]),e._v(" "),n("p",[e._v("\n    "+e._s(e.$t("vueA11yPage2019.conclusion.desc08"))+"\n  ")]),e._v(" "),n("blockquote",{attrs:{lang:"ja"}},[n("p",[e._v("\n      “Start Small, Start\n      Now（小さく初めていこう、でも、できることから今やりましょう）”と呼びかけていきたいし、自分自身も肝に銘じておきたい。\n    ")]),e._v(" "),n("global-link-component",{attrs:{"link-object":e.kzakzaLink}})],1),e._v(" "),n("p",[e._v("\n    "+e._s(e.$t("vueA11yPage2019.conclusion.desc09"))+"\n  ")]),e._v(" "),n("p",[e._v("\n    "+e._s(e.$t("vueA11yPage2019.conclusion.desc10"))+"\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(405).default,GlobalLinkComponent:n(149).default})}}]);