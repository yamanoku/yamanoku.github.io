(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{218:function(t,e,n){"use strict";var r=n(3),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{"aria-label":t.$t("multilingual")}},[n("h2",{attrs:{id:"local-switching"}},[t._v(t._s(t.$t("multilingual")))]),t._v(" "),n("ul",{attrs:{role:"list"}},t._l(t.$i18n.locales,(function(e){return n("li",{key:e.code,attrs:{role:"listitem"}},[n("nuxt-link",{attrs:{lang:e.code,to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])],1)})),0)])}),[],!1,null,null,null);e.a=component.exports},221:function(t,e,n){"use strict";e.a={asyncData:function(t){return{baseName:t.env.baseName,baseDesc:t.env.baseDesc,baseUrl:t.env.baseUrl,baseOgp:t.env.baseOgp}},head:function(){var head={meta:[],bodyAttrs:{}};if(this.meta.title){var title="".concat(this.meta.title," - ").concat(this.baseName);head.title=title,head.meta.push({hid:"og:title",property:"og:title",content:title})}return this.meta.description?(head.meta.push({hid:"description",name:"description",content:this.meta.description}),head.meta.push({hid:"og:description",property:"og:description",content:this.meta.description})):!this.meta.description&&this.meta.title&&(head.meta.push({hid:"description",name:"description",content:this.baseDesc}),head.meta.push({hid:"og:description",property:"og:description",content:this.baseDesc})),this.meta.type?head.meta.push({hid:"og:type",property:"og:type",content:this.meta.type}):"/"===this.$route.path&&head.meta.push({hid:"og:type",property:"og:type",content:"website"}),this.meta.image&&head.meta.push({hid:"og:image",property:"og:image",content:this.meta.image}),head.bodyAttrs.class=this.$store.state.rhythm.toggleRhythm?"is-rhythm":"",head}}},239:function(t,e,n){"use strict";n.r(e);var r=n(218),c={mixins:[n(221).a],data:function(){return{meta:{title:this.$t("privacyPage.title"),description:this.$t("privacyPage.description"),image:"https://yamanoku.net/ogp/ogp-privacy@2x.png"}}},components:{LocalSwitchComponent:r.a}},l=n(3),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{role:"main",id:"main"}},[n("h1",{attrs:{id:"privacy-policy_heading"}},[t._v(t._s(t.$t("privacyPage.title")))]),t._v(" "),n("section",{attrs:{id:"privacy:analytics","aria-labelledby":"privacy:analytics_heading"}},[n("h2",{attrs:{id:"privacy:analytics_heading"}},[t._v(t._s(t.$t("privacyPage.analytics.heading")))]),t._v(" "),n("p",[t._v(t._s(t.$t("privacyPage.analytics.desc01")))]),t._v(" "),n("p",[t._v(t._s(t.$t("privacyPage.analytics.desc02")))]),t._v(" "),n("p",[t._v(t._s(t.$t("privacyPage.analytics.desc03")))]),t._v(" "),n("h3",{attrs:{id:"related:analytics_heading"}},[t._v(t._s(t.$t("heading.relatedList")))]),t._v(" "),n("ul",{attrs:{role:"list","aria-labelledby":"related:analytics_heading"}},[n("li",{attrs:{role:"listitem"}},[n("a",{attrs:{href:t.$t("privacyPage.analytics.link01.url"),target:"_blank",rel:"noopener"}},[t._v(t._s(t.$t("privacyPage.analytics.link01.title")))])]),t._v(" "),n("li",{attrs:{role:"listitem"}},[n("a",{attrs:{href:t.$t("privacyPage.analytics.link02.url"),target:"_blank",rel:"noopener"}},[t._v(t._s(t.$t("privacyPage.analytics.link02.title")))])])])]),t._v(" "),n("local-switch-component")],1)}),[],!1,null,null,null);e.default=component.exports}}]);