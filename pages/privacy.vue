<template>
  <main id="main">
    <h1>{{ $t("privacyPage.title") }}</h1>
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
        imageAlt: this.$t("privacyPage.title"),
      },
    };
  },
};
</script>
