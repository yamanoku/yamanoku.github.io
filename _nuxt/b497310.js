(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{515:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{slide:'\n<ul>\n  <li v-for="list in listItem" :key="list.index">\n    <template v-if="list.datetime">\n      <span class="time">{{\n        dateStirngReplace(list.datetime)\n      }}</span>\n      -\n    </template>\n    <template v-else-if="list.created_at">\n      <span class="time">{{\n        dateStirngReplace(list.created_at)\n      }}</span>\n      -\n    </template>\n    <a :href="list.url" target="_blank" rel="noopener" lang="ja">\n      {{ list.title }}\n      <open-new-icon />\n    </a>\n  </li>\n</ul>\n      '}}},o=n(14),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"about:component-oriented","aria-labelledby":"about:component-oriented_heading"}},[n("h3",{attrs:{id:"about:component-oriented_heading"}},[t._v("\n    "+t._s(t.$t("aboutPage.subHeading.components"))+"\n  ")]),t._v(" "),n("p",[t._v(t._s(t.$t("aboutPage.components.desc01")))]),t._v(" "),n("details",[n("summary",[t._v(t._s(t.$t("details.summary")))]),t._v(" "),n("p",[t._v(t._s(t.$t("aboutPage.components.desc02")))]),t._v(" "),n("figure",[n("highlightjs",{attrs:{language:"javascript",id:"slide-components",code:t.slide}}),t._v(" "),n("figcaption",[n("a",{attrs:{href:"https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/components/global/SlideList.vue#L2-L21",target:"_blank",rel:"noopener"}},[t._v("\n          SlideList.vue\n          "),n("github-icon")],1)])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);