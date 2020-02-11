<template>
  <main role="main" id="main">
    <h1 id="privacy-policy_heading">{{ $t("privacyPage.title") }}</h1>
    <section id="privacy:analytics" aria-labelledby="privacy:analytics_heading">
      <h2 id="privacy:analytics_heading">
        {{ $t("privacyPage.analytics.heading") }}
      </h2>
      <p>{{ $t("privacyPage.analytics.desc01") }}</p>
      <p>{{ $t("privacyPage.analytics.desc02") }}</p>
      <p>{{ $t("privacyPage.analytics.desc03") }}</p>
      <h3 id="related:analytics_heading">{{ $t("heading.relatedList") }}</h3>
      <ul role="list" aria-labelledby="related:analytics_heading">
        <li role="listitem">
          <a
            :href="$t('privacyPage.analytics.link01.url')"
            target="_blank"
            rel="noopener"
            >{{ $t("privacyPage.analytics.link01.title") }}</a
          >
        </li>
        <li role="listitem">
          <a
            :href="$t('privacyPage.analytics.link02.url')"
            target="_blank"
            rel="noopener"
            >{{ $t("privacyPage.analytics.link02.title") }}</a
          >
        </li>
      </ul>
    </section>
    <local-switch-component />
  </main>
</template>

<script>
import LocalSwitchComponent from "~/components/common/LocalSwitch.vue"

import Meta from "~/mixins/meta"

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: this.$t("privacyPage.title"),
        description: this.$t("privacyPage.description"),
        image: "https://yamanoku.net/ogp/ogp-privacy@2x.png"
      }
    }
  },
  components: {
    LocalSwitchComponent
  }
}
</script>
