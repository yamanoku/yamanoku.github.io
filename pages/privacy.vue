<template>
  <main id="main">
    <global-heading-component
      :heading-level="1"
      :heading-text="$t('privacyPage.title')"
    />
    <privacy-analytics />
    <global-local-switch />
  </main>
</template>

<script>
import Meta from "~/mixins/meta";

export default {
  name: "PrivacyPage",
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: this.$t("privacyPage.title"),
        description: this.$t("privacyPage.description"),
        image: "https://yamanoku.net/ogp/ogp-privacy@2x.png",
        imageAlt: this.$t("privacyPage.title")
      }
    };
  }
};
</script>
