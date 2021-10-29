<template>
  <main id="main">
    <h1 id="privacy-policy_heading">{{ $t("privacyPage.title") }}</h1>
    <section id="privacy:analytics" aria-labelledby="privacy:analytics_heading">
      <h2 id="privacy:analytics_heading">
        {{ $t("privacyPage.analytics.heading") }}
      </h2>
      <p>{{ $t("privacyPage.analytics.desc01") }}</p>
      <p>{{ $t("privacyPage.analytics.desc02") }}</p>
      <p>{{ $t("privacyPage.analytics.desc03") }}</p>
      <h3 id="related:analytics_heading">{{ $t("heading.relatedList") }}</h3>
      <ul aria-labelledby="related:analytics_heading">
        <li>
          <a
            :href="$t('privacyPage.analytics.link01.url')"
            target="_blank"
            rel="noopener"
            >{{ $t("privacyPage.analytics.link01.title") }}<open-new-icon
          /></a>
        </li>
        <li>
          <a
            :href="$t('privacyPage.analytics.link02.url')"
            target="_blank"
            rel="noopener"
            >{{ $t("privacyPage.analytics.link02.title") }}<open-new-icon
          /></a>
        </li>
      </ul>
    </section>
    <GlobalLocalSwitch />
  </main>
</template>

<script>
import Meta from "~/mixins/meta";
import OpenNewIcon from "../assets/svg-icons/OpenNewIcon.vue";

export default {
  name: "PrivacyPage",
  components: { OpenNewIcon },
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
