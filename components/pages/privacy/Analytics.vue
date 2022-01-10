<template>
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
          >{{ $t("privacyPage.analytics.link01.title") }}<external-link-icon
        /></a>
      </li>
      <li>
        <a
          :href="$t('privacyPage.analytics.link02.url')"
          target="_blank"
          rel="noopener"
          >{{ $t("privacyPage.analytics.link02.title") }}<external-link-icon
        /></a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "PrivacyAnalytics"
};
</script>
