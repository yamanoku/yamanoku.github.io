(window.webpackJsonp=window.webpackJsonp||[]).push([[30,2,4,5,6,7,8,9,10,11,12,13,14,15,16,18],{401:function(t,e,n){"use strict";n.r(e);n(404);var o={name:"GlobalHeadingComponent",props:{headingLevel:{type:Number,required:!0},headingText:{type:String,required:!0}},computed:{headline:function(){return"h"+this.headingLevel}}},l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.headline,{tag:"component"},[t._v(t._s(t.headingText))])}),[],!1,null,null,null);e.default=component.exports},402:function(t,e,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("aea05fda",content,!0,{sourceMap:!1})},403:function(t,e,n){"use strict";n.r(e);n(49);var o={props:{listArray:{type:Array,required:!0}},data:function(){return{listItem:this.listArray}},methods:{dateStirngReplace:function(t){return t.replace(/T.*$/,"").replace(/(-)/g,"/")}}},l=(n(407),n(7)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.listItem,(function(e){return n("li",{key:e.index},[e.datetime?[n("span",{staticClass:"time"},[t._v(t._s(t.dateStirngReplace(e.datetime)))]),t._v("\n      -\n    ")]:t._e(),t._v(" "),e.isI18n?n("i18n",{attrs:{path:e.title}},[n("global-link-component",{attrs:{"link-object":e}})],1):e.url?[n("global-link-component",{attrs:{"link-object":e}})]:[t._v("\n      "+t._s(e.title)+"\n    ")]],2)})),0)}),[],!1,null,"b68c16c0",null);e.default=component.exports;installComponents(component,{GlobalLinkComponent:n(147).default})},404:function(t,e,n){"use strict";var o=n(8),l=n(39),r=n(40),c=n(107),d=n(77),h=n(13),m=n(61).f,f=n(62).f,v=n(16).f,_=n(405).trim,y="Number",x=o.Number,k=x,E=x.prototype,$=r(n(78)(E))==y,I="trim"in String.prototype,w=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,o,l,r=(e=I?e.trim():_(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:o=2,l=49;break;case 79:case 111:o=8,l=55;break;default:return+e}for(var code,c=e.slice(2),i=0,h=c.length;i<h;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,o)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&($?h((function(){E.valueOf.call(n)})):r(n)!=y)?c(new k(w(e)),n,x):w(e)};for(var C,S=n(11)?m(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;S.length>L;L++)l(k,C=S[L])&&!l(x,C)&&v(x,C,f(k,C));x.prototype=E,E.constructor=x,n(21)(o,y,x)}},405:function(t,e,n){var o=n(5),l=n(45),r=n(13),c=n(406),d="["+c+"]",h=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),f=function(t,e,n){var l={},d=r((function(){return!!c[t]()||"​"!="​"[t]()})),h=l[t]=d?e(v):c[t];n&&(l[n]=h),o(o.P+o.F*d,"String",l)},v=f.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(m,"")),t};t.exports=f},406:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},407:function(t,e,n){"use strict";n(402)},408:function(t,e,n){var o=n(19)(!1);o.push([t.i,'.time[data-v-b68c16c0]{font-feature-settings:"tnum";font-variant-numeric:tabular-nums}',""]),t.exports=o},409:function(t,e,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("6e973862",content,!0,{sourceMap:!1})},410:function(t,e,n){"use strict";n(409)},411:function(t,e,n){var o=n(19)(!1);o.push([t.i,"article[data-v-74a22d44]{border:1px solid var(--y-arcticle-border-color);padding-top:var(--y-rhythm-3);padding-left:var(--y-rhythm-3);padding-right:var(--y-rhythm-3)}article[data-v-74a22d44]:before{display:none}ul[data-v-74a22d44]{margin-bottom:0}",""]),t.exports=o},412:function(t,e,n){t.exports=n.p+"img/product-web-accessibility-for-beginner.32ad4ce.webp"},413:function(t,e,n){t.exports=n.p+"img/product-web-accessibility-for-beginner.d9c6de9.jpg"},414:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{donateLinkList:[{title:"GitHub Sponsors",url:"https://github.com/sponsors/yamanoku",isExternal:!0,isGitHubLink:!0},{title:"Stripe Payment Links",url:"https://buy.stripe.com/00gaEY1Eh5bE7VC8ww",isExternal:!0},{title:"Buy me a coffee",url:"https://buymeacoffee.com/yamanoku",isExternal:!0}]}}},l=(n(410),n(7)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{attrs:{id:"donate","aria-labelledby":"donate_heading"}},[n("div",[n("em",{attrs:{id:"donate_heading"}},[t._v("\n      "+t._s(t.$t("heading.donate"))+"\n    ")])]),t._v(" "),n("p",[t._v("\n    "+t._s(t.$t("donate.desc01"))+"\n  ")]),t._v(" "),n("global-list-component",{attrs:{"list-array":t.donateLinkList}})],1)}),[],!1,null,"74a22d44",null);e.default=component.exports;installComponents(component,{GlobalListComponent:n(403).default})},415:function(t,e,n){"use strict";n.r(e);var o=n(7),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{"aria-label":t.$t("multilingual")}},[n("global-heading-component",{attrs:{id:"local-switching","heading-level":2,"heading-text":t.$t("multilingual")}}),t._v(" "),n("ul",t._l(t.$i18n.locales,(function(e){return n("li",{key:e.code},[n("nuxt-link",{attrs:{lang:e.code,to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(401).default})},416:function(t,e,n){"use strict";e.a={asyncData:function(t){return{baseName:t.env.baseName,baseDesc:t.env.baseDesc,baseUrl:t.env.baseUrl,baseOgp:t.env.baseOgp,baseOgpAlt:t.env.baseName}},head:function(){var head={meta:[],bodyAttrs:{}};if(this.meta.title){var title="".concat(this.meta.title," | yamanoku.net");head.title=title,head.meta.push({hid:"og:title",property:"og:title",content:title})}return this.meta.description?(head.meta.push({hid:"description",name:"description",content:this.meta.description}),head.meta.push({hid:"og:description",property:"og:description",content:this.meta.description})):!this.meta.description&&this.meta.title&&(head.meta.push({hid:"description",name:"description",content:this.baseDesc}),head.meta.push({hid:"og:description",property:"og:description",content:this.baseDesc})),this.meta.type?head.meta.push({hid:"og:type",property:"og:type",content:this.meta.type}):"/"===this.$route.path&&head.meta.push({hid:"og:type",property:"og:type",content:"website"}),this.meta.image&&(head.meta.push({hid:"og:image",property:"og:image",content:this.meta.image}),head.meta.push({hid:"og:image:alt",property:"og:image:alt",content:this.meta.imageAlt}),head.meta.push({hid:"twitter:image:alt",property:"twitter:image:alt",content:this.meta.imageAlt})),head}}},417:function(t,e,n){t.exports=n.p+"img/product-oclock-app.81f507c.webp"},418:function(t,e,n){t.exports=n.p+"img/product-oclock-app.99065c0.png"},419:function(t,e,n){t.exports=n.p+"img/product-reading.816ab12.webp"},420:function(t,e,n){t.exports=n.p+"img/product-reading.923dd7c.png"},421:function(t,e,n){t.exports=n.p+"img/product-vue-portfolio-template.a28f001.webp"},422:function(t,e,n){t.exports=n.p+"img/product-vue-portfolio-template.65fa69c.png"},423:function(t,e,n){"use strict";n.r(e);var o={name:"IndexSectionsProductsAccessibilityBeginner",data:function(){return{relatedListItem:[{title:this.$t("product.wafb.circleDetail"),url:"https://techbookfest.org/event/tbf05/circle/41130001",isExternal:!0},{title:this.$t("product.wafb.boothLink"),url:"https://booth.pm/ja/items/1044446",isExternal:!0},{title:this.$t("product.wafb.noteLink"),url:"https://note.mu/yamanoku/n/n3487a344ff84",isExternal:!0}]}}},l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{attrs:{id:"product:web-accessibility-for-beginner","aria-labelledby":"product:web-accessibility-for-beginner_heading"}},[o("global-heading-component",{attrs:{id:"product:web-accessibility-for-beginner_heading","heading-level":3,"heading-text":t.$t("product.wafb.title")}}),t._v(" "),o("figure",{attrs:{"aria-labelledby":"product:web-accessibility-for-beginner_heading","aria-describedby":"product:web-accessibility-for-beginner_caption"}},[o("picture",[o("source",{attrs:{srcset:n(412),type:"image/webp"}}),t._v(" "),o("img",{attrs:{src:n(413),width:"663",height:"480",alt:t.$t("prefixAlt.photo")+t.$t("product.wafb.title")}})]),t._v(" "),o("figcaption",{attrs:{id:"product:web-accessibility-for-beginner_caption"}},[t._v("\n      "+t._s(t.$t("product.description.wafb"))+"\n    ")])]),t._v(" "),"ja"!==this.$i18n.locale?[o("p",[o("em",[t._v(t._s(t.$t("onlyJPText")))])])]:t._e(),t._v(" "),o("global-heading-component",{attrs:{id:"related:web-accessibility-for-beginner_heading","heading-level":4,"heading-text":t.$t("heading.relatedList")}}),t._v(" "),o("global-list-component",{attrs:{"aria-labelledby":"related:web-accessibility-for-beginner_heading","list-array":t.relatedListItem}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(401).default,GlobalListComponent:n(403).default})},424:function(t,e,n){"use strict";n.r(e);var o={name:"IndexSectionsProductsOclockApp",data:function(){return{relatedListItem:[{title:this.$t("product.oclock-app.title"),url:"https://yamanoku.net/oclock/",isExternal:!0},{title:this.$t("product.oclock-app.zenn"),url:"https://zenn.dev/yamanoku/scraps/bb713d47a45a55/",isExternal:!0}],techStackListItem:[{title:"Svelte"},{title:"Custom Elements"},{title:"WAI-ARIA"}]}}},l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{attrs:{id:"product:oclock-app","aria-labelledby":"product:oclock-app_heading"}},[o("global-heading-component",{attrs:{id:"product:oclock-app_heading","heading-level":3,"heading-text":t.$t("product.oclock-app.title")}}),t._v(" "),o("figure",{attrs:{"aria-labelledby":"product:oclock-app_heading","aria-describedby":"product:oclock-app_caption"}},[o("picture",[o("source",{attrs:{srcset:n(417),type:"image/webp"}}),t._v(" "),o("img",{attrs:{src:n(418),width:"688",height:"498",alt:t.$t("prefixAlt.screenshot")+t.$t("product.oclock-app.title")}})]),t._v(" "),o("figcaption",{attrs:{id:"product:oclock-app_caption"}},[t._v("\n      "+t._s(t.$t("product.description.oclock-app"))+"\n    ")])]),t._v(" "),o("global-heading-component",{attrs:{id:"related:oclock-app_heading","heading-level":4,"heading-text":t.$t("heading.relatedList")}}),t._v(" "),o("global-list-component",{attrs:{"aria-labelledby":"related:oclock-app_heading","list-array":t.relatedListItem}}),t._v(" "),o("global-heading-component",{attrs:{id:"teck-stack:oclock-app_heading","heading-level":4,"heading-text":t.$t("heading.techStack")}}),t._v(" "),o("global-list-component",{attrs:{"aria-labelledby":"tech-stack:oclock-app_heading","list-array":t.techStackListItem}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(401).default,GlobalListComponent:n(403).default})},425:function(t,e,n){"use strict";n.r(e);var o={name:"IndexSectionsProductsReading",data:function(){return{relatedListItem:[{title:this.$t("product.reading"),url:"https://reading.yamanoku.net",isExternal:!0},{title:this.$t("product.updateInfo"),url:"https://scrapbox.io/yamanoku/Reading%E2%80%A6#5b1f8344c2cd3f000095e9c0",isExternal:!0}],techStackListItem:[{title:"Nuxt.js"},{title:"Nuxt PWA"},{title:"axios"},{title:"modern-normalize"},{title:"MSW"},{title:"@slack/web-api"},{title:"Netlify"},{title:"CircleCI"}]}}},l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{attrs:{id:"product:reading","aria-labelledby":"product:reading_heading"}},[o("global-heading-component",{attrs:{id:"product:reading_heading","heading-level":3,"heading-text":t.$t("product.reading")}}),t._v(" "),o("figure",{attrs:{"aria-labelledby":"product:reading_heading","aria-describedby":"product:reading_caption"}},[o("picture",[o("source",{attrs:{srcset:n(419),type:"image/webp"}}),t._v(" "),o("img",{attrs:{src:n(420),width:"688",height:"498",alt:t.$t("prefixAlt.screenshot")+t.$t("product.reading")}})]),t._v(" "),o("figcaption",{attrs:{id:"product:reading_caption"}},[t._v("\n      "+t._s(t.$t("product.description.reading"))+"\n    ")])]),t._v(" "),o("global-heading-component",{attrs:{id:"related:reading_heading","heading-level":4,"heading-text":t.$t("heading.relatedList")}}),t._v(" "),o("global-list-component",{attrs:{"aria-labelledby":"related:reading_heading","list-array":t.relatedListItem}}),t._v(" "),o("global-heading-component",{attrs:{id:"teck-stack:reading_heading","heading-level":4,"heading-text":t.$t("heading.techStack")}}),t._v(" "),o("global-list-component",{attrs:{"aria-labelledby":"tech-stack:reading_heading","list-array":t.techStackListItem}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(401).default,GlobalListComponent:n(403).default})},426:function(t,e,n){"use strict";n.r(e);var o={name:"IndexSectionsProductsVuePortfolio",data:function(){return{relatedListItem:[{title:this.$t("product.vuePortfolio"),url:"https://vue-portfolio.yamanoku.net/",isExternal:!0}],techStackListItem:[{title:"Vue.js"},{title:"vue-cli"},{title:"vue-router"},{title:"webpack"},{title:"PostCSS"},{title:"Netlify"}]}}},l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{attrs:{id:"product:vue-portfolio-template","aria-labelledby":"product:vue-portfolio-template_heading"}},[o("global-heading-component",{attrs:{id:"product:vue-portfolio-template_heading","heading-level":3,"heading-text":t.$t("product.vuePortfolio")}}),t._v(" "),o("figure",{attrs:{"aria-labelledby":"product:vue-portfolio-template_heading","aria-describedby":"product:vue-portfolio-template_caption"}},[o("picture",[o("source",{attrs:{srcset:n(421),type:"image/webp"}}),t._v(" "),o("img",{attrs:{src:n(422),width:"688",height:"498",alt:t.$t("prefixAlt.screenshot")+t.$t("product.vuePortfolio")}})]),t._v(" "),o("figcaption",{attrs:{id:"product:vue-portfolio-template_caption"}},[t._v("\n      "+t._s(t.$t("product.description.vuePortfolio"))+"\n    ")])]),t._v(" "),o("global-heading-component",{attrs:{id:"related:vue-portfolio_heading","heading-level":4,"heading-text":t.$t("heading.relatedList")}}),t._v(" "),o("global-list-component",{attrs:{"aria-labelledby":"related:vue-portfolio_heading","list-array":t.relatedListItem}}),t._v(" "),o("h4",{attrs:{id:"tech-stack:vue-portfolio_heading"}},[t._v(t._s(t.$t("heading.techStack")))]),t._v(" "),o("global-list-component",{attrs:{"aria-labelledby":"tech-stack:vue-portfolio_heading","list-array":t.techStackListItem}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(401).default,GlobalListComponent:n(403).default})},432:function(t,e,n){"use strict";n.r(e);var o=[{title:"アクセシブルなフロントエンド開発のこれまでとこれから",url:"https://speakerdeck.com/yamanoku/the-past-and-future-of-accessible-front-end-development",datetime:"2021-11-27T16:20:00.000Z",isExternal:!0},{title:"HTML だけで UI を作る限界、あるいは無理なくユースケースと向き合っていくためには",url:"https://docs.google.com/presentation/d/e/2PACX-1vRfZCfZpjvKndrrHZYH4QQsMM8JwcRYCbYlgeIaJxEQdvz5BbWFx2pKv2ctZ1KT8CTztpC-hR1n6vIO/pub?start=false&loop=false&delayms=3000",datetime:"2021-09-15T21:38:00.000Z",isExternal:!0},{title:"PWA版Twitterをスクリーンリーダー検証してみる",url:"https://scrapbox.io/yamanoku/PWA%E7%89%88Twitter%E3%82%92%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%83%AA%E3%83%BC%E3%83%80%E3%83%BC%E6%A4%9C%E8%A8%BC%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B",datetime:"2021-06-26T18:50:00.000Z",isExternal:!0},{title:"これからもつづけるWebアクセシビリティ",url:"https://docs.google.com/presentation/d/e/2PACX-1vRIhRTjYc1yxxNRSE0-PbTHTyvSHh07pkuVapbek_-0wkYyF0scZ5XU0danIEky5YJToE0W3AwUCDXc/pub?start=false&loop=false&delayms=3000",datetime:"2021-01-12T19:30:00.000Z",isExternal:!0}],l=[{title:"2021年オープンソースコントリビュート活動振り返り",url:"https://zenn.dev/yamanoku/articles/bd8d86ee79459b",datetime:"2021-12-30T10:00:00.000Z",isExternal:!0},{title:"クラウドワークス #accessibility チャンネル で気になった話題 Pickup 2021年7〜12月編",url:"https://zenn.dev/yamanoku/scraps/d964d3efc75e09",datetime:"2021-12-14T00:00:00.000Z",isExternal:!0},{title:"クラウドワークス #accessibility チャンネル で気になった話題 Pickup 2021年1〜6月編",url:"https://zenn.dev/yamanoku/scraps/6e4f4d5ed7563a",datetime:"2021-12-14T00:00:00.000Z",isExternal:!0},{title:"crowdworks.jp のフロントエンド活動を振り返る 2021",url:"https://qiita.com/yamanoku/items/29a74ebf3d74b3017581",datetime:"2021-12-01T07:00:00.000Z",isExternal:!0},{title:"markuplintをプロダクトに導入してみた",url:"https://engineer.crowdworks.jp/entry/using-markuplint",datetime:"2021-10-07T13:00:00.000Z",isExternal:!0},{title:"生まれ変わったログインページにまつわるフロントエンド開発の話",url:"https://engineer.crowdworks.jp/entry/renewal-login",datetime:"2021-08-18T18:00:00.000Z",isExternal:!0}],r={name:"IndexSectionsPresentations",data:function(){return{listStage:o,listWrite:l,archiveLink:{title:this.$t("archivePage.title"),url:"https://archives.yamanoku.net",isExternal:!0}}}},c=n(7),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"presentations","aria-labelledby":"presentations_heading"}},[n("global-heading-component",{attrs:{id:"presentations_heading","heading-level":2,"heading-text":t.$t("heading.presentations.title")}}),t._v(" "),"ja"!==this.$i18n.locale?[n("em",[t._v(t._s(t.$t("onlyJPText")))])]:t._e(),t._v(" "),n("h3",{attrs:{id:"presentations-stage"}},[t._v("\n    "+t._s(t.$t("heading.presentations.stage"))+"\n  ")]),t._v(" "),n("global-list-component",{attrs:{listArray:t.listStage}}),t._v(" "),n("global-heading-component",{attrs:{id:"presentations-write","heading-level":3,"heading-text":t.$t("heading.presentations.write")}}),t._v(" "),n("global-list-component",{attrs:{listArray:t.listWrite}}),t._v(" "),n("i18n",{attrs:{tag:"p",path:"archivePage.externalLink"},scopedSlots:t._u([{key:"title",fn:function(){return[n("global-link-component",{attrs:{"link-object":t.archiveLink}})]},proxy:!0}])})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(401).default,GlobalListComponent:n(403).default,GlobalLinkComponent:n(147).default})},433:function(t,e,n){"use strict";n.r(e);var o={name:"IndexSectionsBasicInfo",data:function(){return{jobListItem:[{title:this.$t("jobs.job01")},{title:this.$t("jobs.job02")},{title:this.$t("jobs.job03")}]}}},l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"basic","aria-labelledby":"basic-heading"}},[n("global-heading-component",{attrs:{id:"basic-heading","heading-level":2,"heading-text":t.$t("heading.basic")}}),t._v(" "),"ja"===this.$i18n.locale?[t._v("\n    大山奥人\n    "),n("small",[t._v("（おおやまおくと）")]),t._v("\n    。"+t._s(t.$t("info.caption"))+"\n  ")]:[t._v("Okuto Oyama. "+t._s(t.$t("info.caption")))],t._v(" "),n("h3",{attrs:{id:"job_heading"}},[t._v(t._s(t.$t("heading.job")))]),t._v(" "),n("global-list-component",{attrs:{"aria-labelledby":"job_heading","list-array":t.jobListItem}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(401).default,GlobalListComponent:n(403).default})},434:function(t,e,n){"use strict";n.r(e);var o={name:"IndexSectionsCareerInfo",data:function(){return{careerListItem:[{title:this.$t("career.curriculumVitae"),url:"https://github.com/yamanoku/Curriculum-Vitae/blob/main/README.md",isExternal:!0,isGitHubLink:!0},{title:this.$t("career.experiencedSkills"),url:"https://scrapbox.io/yamanoku/%E7%B5%8C%E9%A8%93%E3%81%AE%E3%81%82%E3%82%8B%E6%8A%80%E8%A1%93",isExternal:!0},{title:this.$t("career.wantedly"),url:"https://www.wantedly.com/id/okutooyama",isExternal:!0},{title:this.$t("career.lapras"),url:"https://lapras.com/public/ZQJMZYO",isExternal:!0},{title:this.$t("career.youtrust"),url:"https://youtrust.jp/users/57ea573ffca186c3b339f1739915f40b",isExternal:!0}]}}},l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"career","aria-labelledby":"career-heading"}},[n("global-heading-component",{attrs:{id:"career-heading","heading-level":2,"heading-text":t.$t("heading.career")}}),t._v(" "),n("p",[t._v(t._s(t.$t("career.desc01")))]),t._v(" "),n("p",[t._v(t._s(t.$t("career.desc02")))]),t._v(" "),n("p",[t._v(t._s(t.$t("career.desc03")))]),t._v(" "),n("global-heading-component",{attrs:{id:"related:career-heading","heading-level":3,"heading-text":t.$t("heading.relatedList")}}),t._v(" "),n("global-list-component",{attrs:{"aria-labelledby":"related:career-heading","list-array":t.careerListItem}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(401).default,GlobalListComponent:n(403).default})},435:function(t,e,n){"use strict";n.r(e);var o={name:"IndexSectionsOpenSourceActivity",data:function(){return{openSourceActivityListItem:[{title:this.$t("openSourceActivity.link01"),url:"https://www.notion.so/yamanoku/2021-2c4fa51b832645f494698ebd11e069f9",isExternal:!0}]}}},l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"open-source-activity","aria-labelledby":"open-source-activity_heading"}},[n("global-heading-component",{attrs:{id:"open-source-activity_heading","heading-level":2,"heading-text":t.$t("heading.openSourceActivity")}}),t._v(" "),n("p",[t._v(t._s(t.$t("openSourceActivity.desc01")))]),t._v(" "),n("global-list-component",{attrs:{"list-array":t.openSourceActivityListItem}}),t._v(" "),n("global-donate-component")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(401).default,GlobalListComponent:n(403).default,GlobalDonateComponent:n(414).default})},436:function(t,e,n){"use strict";n.r(e);var o={name:"IndexSectionsProducts"},l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"product","aria-labelledby":"product_heading"}},[n("global-heading-component",{attrs:{id:"product_heading","heading-level":2,"heading-text":t.$t("heading.productList")}}),t._v(" "),n("index-sections-products-vuejs-accessibility-2019"),t._v(" "),n("index-sections-products-accessibility-beginner"),t._v(" "),n("index-sections-products-oclock-app"),t._v(" "),n("index-sections-products-reading"),t._v(" "),n("index-sections-products-vue-portfolio")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(401).default,IndexSectionsProductsAccessibilityBeginner:n(423).default,IndexSectionsProductsOclockApp:n(424).default,IndexSectionsProductsReading:n(425).default,IndexSectionsProductsVuePortfolio:n(426).default})},437:function(t,e,n){"use strict";n.r(e);var o={name:"IndexSectionsSocialNetworkServices",data:function(){return{socialNetworkServicesListItem:[{title:this.$t("sns.twitter"),url:"https://twitter.com/okuto_oyama",isExternal:!0},{title:this.$t("sns.github"),url:"https://github.com/yamanoku",isExternal:!0,isGitHubLink:!0},{title:this.$t("sns.scrapbox"),url:"https://scrapbox.io/yamanoku/",isExternal:!0},{title:this.$t("sns.facebook"),url:"https://facebook.com/okutooyama",isExternal:!0},{title:this.$t("sns.tumblr.text"),url:"https://yamanoku.tumblr.com",isExternal:!0}]}}},l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"social-network-services","aria-labelledby":"social-network-services_heading"}},[n("global-heading-component",{attrs:{id:"social-network-services_heading","heading-level":2,"heading-text":t.$t("heading.sns")}}),t._v(" "),n("global-list-component",{attrs:{"list-array":t.socialNetworkServicesListItem}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(401).default,GlobalListComponent:n(403).default})},438:function(t,e,n){"use strict";n.r(e);var o={name:"IndexSectionsAddress"},l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"contact","aria-labelledby":"contact-heading"}},[n("global-heading-component",{attrs:{id:"contact-heading","heading-level":2,"heading-text":t.$t("heading.contact")}}),t._v(" "),n("address",[n("a",{attrs:{href:"mailto:0910yama@gmail.com"}},[t._v("\n      0910yama@gmail.com\n      "),n("mail-icon")],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(401).default})},456:function(t,e,n){"use strict";n.r(e);var o={name:"IndexPage",mixins:[n(416).a],data:function(){return{meta:{title:this.$t("home.title")}}}},l=n(7),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"main"}},[n("global-heading-component",{attrs:{"heading-level":1,"heading-text":"yamanoku.net"}}),t._v(" "),n("index-sections-basic-info"),t._v(" "),n("index-sections-career-info"),t._v(" "),n("index-sections-open-source-activity"),t._v(" "),n("index-sections-products"),t._v(" "),n("index-sections-presentations"),t._v(" "),n("index-sections-social-network-services"),t._v(" "),n("index-sections-address"),t._v(" "),n("global-local-switch")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(401).default,IndexSectionsBasicInfo:n(433).default,IndexSectionsCareerInfo:n(434).default,IndexSectionsOpenSourceActivity:n(435).default,IndexSectionsProducts:n(436).default,IndexSectionsPresentations:n(432).default,IndexSectionsSocialNetworkServices:n(437).default,IndexSectionsAddress:n(438).default,GlobalLocalSwitch:n(415).default})}}]);