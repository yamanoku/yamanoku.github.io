<template>
  <main role="main" id="main">
    <title-section />
    <bio-section />
    <book-section />
    <web-accessibility-section />
    <vue-accessibility-section />
    <accessibility-notes-section />
    <conclusion-section />
    <section>
      <h3>{{ $t("vueA11yPage.subHeading.info") }}</h3>
      <ul>
        <li>
          <time datetime="2019-12-21">2019/12/21</time>
          {{ $t("vueA11yPage.info.listitem01") }}
        </li>
        <li>
          <time datetime="2020-02-28">2020/02/28</time>
          <i18n path="vueA11yPage.info.listitem02">
            <template v-slot:awesomeA11yVue>
              <a
                href="https://github.com/vue-a11y/awesome-a11y-vue/pull/3"
                target="_blank"
                rel="noopener"
                lang="en"
                >awesome-a11y-vue<open-new-icon
              /></a>
            </template>
          </i18n>
        </li>
      </ul>
    </section>
    <nuxt-link :to="localePath({ name: 'index' })">{{
      $t("backTop")
    }}</nuxt-link>
    <!-- <local-switch-component /> -->
  </main>
</template>

<script>
import AccessibilityNotesSection from "~/components/vue-a11y-section/AccessibilityNotesSection.vue"
import BioSection from "~/components/vue-a11y-section/BioSection.vue"
import BookSection from "~/components/vue-a11y-section/BookSection.vue"
import ConclusionSection from "~/components/vue-a11y-section/ConclusionSection.vue"
import TitleSection from "~/components/vue-a11y-section/TitleSection.vue"
import VueAccessibilitySection from "~/components/vue-a11y-section/VueAccessibilitySection.vue"
import WebAccessibilitySection from "~/components/vue-a11y-section/WebAccessibilitySection.vue"
import LocalSwitchComponent from "~/components/common/LocalSwitch.vue"

import Meta from "~/mixins/meta"

export default {
  mixins: [Meta],
  components: {
    AccessibilityNotesSection,
    BioSection,
    BookSection,
    ConclusionSection,
    TitleSection,
    VueAccessibilitySection,
    WebAccessibilitySection
  },
  data() {
    return {
      meta: {
        title: "Vue.jsから考えるアクセシビリティ",
        description:
          "こちらは、Webアクセシビリティ Advent Calendar 2019の21日目の記事です。この記事ではVue.js開発におけるWebアクセシビリティ対応にまつわる内容となっております。",
        image: "https://yamanoku.net/ogp/ogp-vue-a11y@2x.png"
      }
    }
  }
}
</script>

<style>
img {
  max-width: 100%;
  height: auto;
}
a[target="_blank"] svg {
  width: 12px;
  height: 12px;
  margin: 0 0 -1px 4px;
}
a[target="_blank"] svg .open_new-1 {
  fill: none;
}
a[target="_blank"] svg .open_new-2 {
  fill: var(--black);
}
@media (prefers-color-scheme: dark) {
  a[target="_blank"] svg .open_new-2 {
    fill: var(--white);
  }
}
</style>
