(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{467:function(e,t,n){var content=n(484);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(29).default)("eb71568e",content,!0,{sourceMap:!1})},481:function(e,t,n){e.exports=n.p+"img/vue-a11y-vueaxe.d6e8a9b.webp"},482:function(e,t,n){e.exports=n.p+"img/vue-a11y-vueaxe.b8a89ad.png"},483:function(e,t,n){"use strict";n(467)},484:function(e,t,n){var o=n(28)(!1);o.push([e.i,"code:not(.hljs){line-height:1;padding:0}iframe.vue-accessible-modal{width:100%;height:500px;border:0;border-radius:4px;overflow:hidden}",""]),e.exports=o},495:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{buttonMarkupBefore:'\n<template>\n  <div role="button" tabindex="0" @click="handleClick" @keyup="handleKeyUp">button</div>\n</template>\n      ',buttonMarkupAfter:'\n<template>\n  <button type="button">button</button>\n</template>\n      ',nuxtJS:"\nmodule.exports = {\n    head: {\n      htmlAttrs: {\n        lang: 'ja'\n      }\n    }\n}\n      ",vueAxeInstall:"\n# NPM\n$ npm install -D axe-core vue-axe\n\n# Yarn\n$ yarn add -D axe-core vue-axe\n      ",vueAxeSetting:"\nimport Vue from 'vue'\n\nif (process.env.NODE_ENV !== 'production') { // development environment\n  const VueAxe = require('vue-axe').default\n  const AXE_LOCALE_JA = require('axe-core/locales/ja.json') // locale setting\n\n  Vue.use(VueAxe, {\n    config: {\n      locale: AXE_LOCALE_JA\n    },\n    clearConsoleOnUpdate: false // Clears the console each time vue-axe runs\n  })\n}\n      ",eslintEmoji:'\n\x3c!-- Fail --\x3e\n<span>🐼</span>\n\x3c!-- Good --\x3e\n<span role="img" aria-label="Panda">🐼</span>\n      '}}},r=(n(483),n(4)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{attrs:{id:"web-accessibility-notes:about-accessibility-with-vuejs"}},[o("h2",[e._v(e._s(e.$t("vueA11yPage.heading.a11yNote")))]),e._v(" "),o("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.a11yNote.desc01"))+"\n  ")]),e._v(" "),o("i18n",{attrs:{tag:"h3",path:"vueA11yPage.subHeading.a11yNote.note01"},scopedSlots:e._u([{key:"div",fn:function(){return[o("code",[e._v("div")])]},proxy:!0}])}),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc02"},scopedSlots:e._u([{key:"strong01",fn:function(){return[o("strong",[e._v(e._s(e.$t("vueA11yPage.a11yNote.strong01")))])]},proxy:!0},{key:"div",fn:function(){return[o("code",[e._v("div")])]},proxy:!0},{key:"span",fn:function(){return[o("code",[e._v("span")])]},proxy:!0}])}),e._v(" "),o("blockquote",[o("p",[e._v("\n      "+e._s(e.$t("vueA11yPage.a11yNote.quote01"))+"\n    ")]),e._v(" "),o("a",{attrs:{href:e.$t("vueA11yPage.a11yNote.quote02.link"),target:"_blank",rel:"noopener"}},[e._v(e._s(e.$t("vueA11yPage.a11yNote.quote02.text"))),o("open-new-icon")],1)]),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc03"},scopedSlots:e._u([{key:"div",fn:function(){return[o("code",[e._v("div")])]},proxy:!0}])}),e._v(" "),o("highlightjs",{attrs:{lang:"html",code:e.buttonMarkupBefore}}),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc04"},scopedSlots:e._u([{key:"button",fn:function(){return[o("code",[e._v("button")])]},proxy:!0}])}),e._v(" "),o("highlightjs",{attrs:{lang:"html",code:e.buttonMarkupAfter}}),e._v(" "),o("h3",[e._v(e._s(e.$t("vueA11yPage.subHeading.a11yNote.note02")))]),e._v(" "),o("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.a11yNote.desc05"))+"\n  ")]),e._v(" "),o("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.a11yNote.desc06"))+"\n  ")]),e._v(" "),o("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.a11yNote.desc07"))+"\n  ")]),e._v(" "),o("a",{attrs:{href:"https://codesandbox.io/s/vue-accessible-modal-9m474]",target:"_blank",rel:"noopener",lang:"en"}},[e._v("vue-accessible-modal - CodeSandbox"),o("open-new-icon")],1),e._v(" "),o("h3",[e._v(e._s(e.$t("vueA11yPage.subHeading.a11yNote.note03")))]),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc08"},scopedSlots:e._u([{key:"abbr01",fn:function(){return[o("abbr",[e._v(e._s(e.$t("vueA11yPage.a11yNote.abbr01")))])]},proxy:!0}])}),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc09"},scopedSlots:e._u([{key:"ariaLive",fn:function(){return[o("code",[e._v("aria-live")])]},proxy:!0},{key:"vueAnnouncer",fn:function(){return[o("a",{attrs:{href:"https://github.com/vue-a11y/vue-announcer",target:"_blank",rel:"noopener",lang:"en"}},[e._v("vue-announcer"),o("open-new-icon")],1)]},proxy:!0}])}),e._v(" "),o("h3",[e._v(e._s(e.$t("vueA11yPage.subHeading.a11yNote.note04")))]),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc10"},scopedSlots:e._u([{key:"nuxtConfigJs",fn:function(){return[o("code",[e._v("nuxt.config.js")])]},proxy:!0},{key:"htmlAttrs",fn:function(){return[o("code",[e._v("htmlAttrs")])]},proxy:!0}])}),e._v(" "),o("highlightjs",{attrs:{lang:"javascript",code:e.nuxtJS}}),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc11"},scopedSlots:e._u([{key:"en",fn:function(){return[o("code",[e._v("en")])]},proxy:!0}])}),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc12"},scopedSlots:e._u([{key:"small01",fn:function(){return[o("small",[e._v(e._s(e.$t("vueA11yPage.a11yNote.small01")))])]},proxy:!0}])}),e._v(" "),o("h3",[e._v(e._s(e.$t("vueA11yPage.subHeading.a11yNote.note05")))]),e._v(" "),o("h4",{attrs:{lang:"en"}},[e._v("vue-axe")]),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc13"},scopedSlots:e._u([{key:"axeCore",fn:function(){return[o("a",{attrs:{href:"https://github.com/dequelabs/axe-core",target:"_blank",rel:"noopener",lang:"en"}},[e._v("axe-core"),o("open-new-icon")],1)]},proxy:!0},{key:"LightHouse",fn:function(){return[o("a",{attrs:{href:"https://developers.google.com/web/tools/lighthouse/",target:"_blank",rel:"noopener",lang:"en"}},[e._v("Lighthouse"),o("open-new-icon")],1)]},proxy:!0}])}),e._v(" "),o("figure",[o("picture",[o("source",{attrs:{srcset:n(481),type:"image/webp"}}),e._v(" "),o("img",{attrs:{src:n(482),height:"96",alt:e.$t("vueA11yPage.a11yNote.imgAlt01")}})])]),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.a11yNote.desc14")))]),e._v(" "),o("highlightjs",{attrs:{lang:"shell",code:e.vueAxeInstall}}),e._v(" "),o("highlightjs",{attrs:{lang:"javascript",code:e.vueAxeSetting}}),e._v(" "),o("h4",{attrs:{lang:"en"}},[e._v("Storybook")]),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc15"},scopedSlots:e._u([{key:"storybookAddonA11y",fn:function(){return[o("a",{attrs:{href:"https://www.npmjs.com/package/@storybook/addon-a11y",target:"_blank",rel:"noopener"}},[e._v("storybook-addon-a11y"),o("open-new-icon")],1)]},proxy:!0}])}),e._v(" "),o("figure",[o("img",{attrs:{src:"https://raw.githubusercontent.com/storybookjs/storybook/HEAD/addons/a11y/docs/screenshot.png",height:"360",alt:e.$t("vueA11yPage.a11yNote.imgAlt02")}})]),e._v(" "),o("h4",{attrs:{lang:"en"}},[e._v("eslint-plugin-vuejs-accessibility")]),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.a11yNote.desc16")))]),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc17"},scopedSlots:e._u([{key:"img",fn:function(){return[o("code",[e._v("img")])]},proxy:!0},{key:"alt",fn:function(){return[o("code",[e._v("alt")])]},proxy:!0},{key:"label",fn:function(){return[o("code",[e._v("label")])]},proxy:!0}])}),e._v(" "),o("highlightjs",{attrs:{lang:"html",code:e.eslintEmoji}}),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.a11yNote.desc18")))]),e._v(" "),o("h4",[e._v(e._s(e.$t("vueA11yPage.subHeading.a11yNote.test.test04")))]),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.a11yNote.desc19")))]),e._v(" "),o("a",{attrs:{href:"https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/",target:"_blank",rel:"noopener",lang:"en"}},[e._v("What we found when we tested tools on the world’s least-accessible\n    webpage - Accessibility in government"),o("open-new-icon")],1),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.a11yNote.desc20")))]),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc21"},scopedSlots:e._u([{key:"abbr02",fn:function(){return[o("abbr",{attrs:{lang:"en"}},[e._v("Web Content Accessibility Guidelines")])]},proxy:!0}])}),e._v(" "),o("a",{attrs:{href:"https://waic.jp/docs/WCAG21/",target:"_blank",rel:"noopener",lang:"en"}},[e._v("Web Content Accessibility Guidelines (WCAG) 2.1"),o("open-new-icon")],1),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.a11yNote.desc22")))]),e._v(" "),o("a",{attrs:{href:"https://openameba.github.io/a11y-guidelines/",target:"_blank",rel:"noopener",lang:"en"}},[e._v("Ameba Accessibility Guidelines"),o("open-new-icon")],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);