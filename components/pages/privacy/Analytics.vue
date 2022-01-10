<template>
  <section id="privacy:analytics" aria-labelledby="privacy:analytics_heading">
    <global-heading-component
      id="privacy:analytics_heading"
      :heading-level="2"
      :heading-text="$t('privacyPage.analytics.heading')"
    />
    <p>{{ $t("privacyPage.analytics.desc01") }}</p>
    <p>{{ $t("privacyPage.analytics.desc02") }}</p>
    <p>{{ $t("privacyPage.analytics.desc03") }}</p>
    <global-heading-component
      id="related:analytics_heading"
      :heading-level="3"
      :heading-text="$t('heading.relatedList')"
    />
    <global-list-component
      aria-labelledby="related:analytics_heading"
      :list-array="analyticsListItem"
    />
  </section>
</template>

<script>
export default {
  name: "PrivacyAnalytics",
  data() {
    return {
      analyticsListItem: [
        {
          title: this.$t("privacyPage.analytics.link01.title"),
          url: this.$t("privacyPage.analytics.link01.url"),
          isExternal: true
        },
        {
          title: this.$t("privacyPage.analytics.link02.title"),
          url: this.$t("privacyPage.analytics.link02.url"),
          isExternal: true
        }
      ]
    };
  }
};
</script>
