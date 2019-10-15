<template>
  <main role="main" id="main">
    <title-section />
    <bio-section />
    <book-section />
    <agenda-section />
    <web-accessibility-section />
    <vue-accessibility-section />
    <accessibility-relationship-section />
    <conclusion-section />
    <nuxt-link :to="localePath({ name: 'index'})">{{$t("backTop")}}</nuxt-link>
    <!-- <local-switch-component /> -->
  </main>
</template>

<script>
import AccessibilityRelationshipSection from "~/components/vuefesjapan2019-section/AccessibilityRelationshipSection.vue";
import AgendaSection from "~/components/vuefesjapan2019-section/AgendaSection.vue";
import BioSection from "~/components/vuefesjapan2019-section/BioSection.vue";
import BookSection from "~/components/vuefesjapan2019-section/BookSection.vue";
import ConclusionSection from "~/components/vuefesjapan2019-section/ConclusionSection.vue";
import TitleSection from "~/components/vuefesjapan2019-section/TitleSection.vue";
import VueAccessibilitySection from "~/components/vuefesjapan2019-section/VueAccessibilitySection.vue";
import WebAccessibilitySection from "~/components/vuefesjapan2019-section/WebAccessibilitySection.vue";
import LocalSwitchComponent from "~/components/common/LocalSwitch.vue";

import Meta from "~/mixins/meta";

export default {
  mixins: [Meta],
  components: {
    AccessibilityRelationshipSection,
    AgendaSection,
    BioSection,
    BookSection,
    ConclusionSection,
    TitleSection,
    VueAccessibilitySection,
    WebAccessibilitySection,
  },
  data() {
    return {
      meta: {
        title: "Vue.js meets Web Accessibility",
        description: this.$t("aboutPage.description"),
        image: "https://yamanoku.net/ogp/ogp-about@2x.png"
      }
    };
  }
};
</script>

<style>
img {
  object-fit: cover;
}
</style>
