<template>
  <main role="main" id="main">
    <title-section />
    <bio-section />
    <book-section />
    <agenda-section />
    <web-accessibility-section />
    <accessibility-relationship-section />
    <vue-accessibility-section />
    <conclusion-section />
    <nuxt-link :to="localePath({ name: 'index'})">{{$t("backTop")}}</nuxt-link>
    <!-- <local-switch-component /> -->
  </main>
</template>

<script>
import AccessibilityRelationshipSection from "~/components/vue-a11y-section/AccessibilityRelationshipSection.vue";
import AgendaSection from "~/components/vue-a11y-section/AgendaSection.vue";
import BioSection from "~/components/vue-a11y-section/BioSection.vue";
import BookSection from "~/components/vue-a11y-section/BookSection.vue";
import ConclusionSection from "~/components/vue-a11y-section/ConclusionSection.vue";
import TitleSection from "~/components/vue-a11y-section/TitleSection.vue";
import VueAccessibilitySection from "~/components/vue-a11y-section/VueAccessibilitySection.vue";
import WebAccessibilitySection from "~/components/vue-a11y-section/WebAccessibilitySection.vue";
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
        title: "Vue.jsから考えるアクセシビリティ",
        description: this.$t("aboutPage.description"),
        image: "https://yamanoku.net/ogp/ogp-about@2x.png"
      }
    };
  }
};
</script>

<style>
figure {
  text-align: center;
}
figcaption {
  text-align: left;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
