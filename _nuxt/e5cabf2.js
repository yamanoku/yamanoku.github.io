(window.webpackJsonp=window.webpackJsonp||[]).push([[42,16],{432:function(t,e,n){"use strict";n.r(e);var o=n(5),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{"aria-label":t.$t("multilingual")}},[n("h2",{attrs:{id:"local-switching"}},[t._v(t._s(t.$t("multilingual")))]),t._v(" "),n("ul",t._l(t.$i18n.locales,(function(e){return n("li",{key:e.code},[n("nuxt-link",{attrs:{lang:e.code,to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},433:function(t,e,n){"use strict";e.a={asyncData:function(t){return{baseName:t.env.baseName,baseDesc:t.env.baseDesc,baseUrl:t.env.baseUrl,baseOgp:t.env.baseOgp,baseOgpAlt:t.env.baseName}},head:function(){var head={meta:[],bodyAttrs:{}};if(this.meta.title){var title="".concat(this.meta.title);head.title=title,head.meta.push({hid:"og:title",property:"og:title",content:title})}return this.meta.description?(head.meta.push({hid:"description",name:"description",content:this.meta.description}),head.meta.push({hid:"og:description",property:"og:description",content:this.meta.description})):!this.meta.description&&this.meta.title&&(head.meta.push({hid:"description",name:"description",content:this.baseDesc}),head.meta.push({hid:"og:description",property:"og:description",content:this.baseDesc})),this.meta.type?head.meta.push({hid:"og:type",property:"og:type",content:this.meta.type}):"/"===this.$route.path&&head.meta.push({hid:"og:type",property:"og:type",content:"website"}),this.meta.image&&(head.meta.push({hid:"og:image",property:"og:image",content:this.meta.image}),head.meta.push({hid:"og:image:alt",property:"og:image:alt",content:this.meta.imageAlt}),head.meta.push({hid:"twitter:image:alt",property:"twitter:image:alt",content:this.meta.imageAlt})),head.bodyAttrs.class=this.$store.state.rhythm.toggleRhythm?"is-rhythm":"",head}}},506:function(t,e,n){"use strict";n.r(e);var o={mixins:[n(433).a],head:function(){return{meta:[{"http-equiv":"refresh",content:"0;url=https://yamanoku.net/vue-a11y-2019/"},{rel:"canonical",href:"https://yamanoku.net/vue-a11y-2019/"}]}},data:function(){return{meta:{title:this.$t("vueA11yPage2019.title"),description:this.$t("vueA11yPage2019.description"),image:"https://yamanoku.net/ogp/ogp-vue-a11y-2019@2x.png",imageAlt:this.$t("vueA11yPage2019.title")}}}},r=n(5),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{role:"main",id:"main"}},[n("i18n",{attrs:{tag:"p",path:"vueA11yPage2019.moveUrlText"},scopedSlots:t._u([{key:"moveUrl",fn:function(){return[n("nuxt-link",{attrs:{to:"vue-a11y-2019"}},[t._v("https://yamanoku.net/vue-a11y-2019/")])]},proxy:!0}])}),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath({name:"index"})}},[t._v(t._s(t.$t("backTop")))]),t._v(" "),n("global-local-switch")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalLocalSwitch:n(432).default})}}]);