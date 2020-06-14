<template>
  <main role="main" id="main">
    <h2>{{ $t("archivePage.title") }}</h2>
    <p>
      {{ $t("archivePage.desc01") }}
    </p>
    <p>
      {{ $t("archivePage.desc02") }}
    </p>
    <p>
      {{ $t("archivePage.desc03") }}
    </p>
    <common-feedback-list :feedback="feedback" />
    <template v-if="this.$i18n.locale !== 'ja'">
      <em>{{ $t("onlyJPText") }}</em>
    </template>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <nuxt-link :to="article.path">
          {{ article.title }}
        </nuxt-link>
      </li>
    </ul>
    <nuxt-link :to="localePath({ name: 'index' })">{{
      $t("backTop")
    }}</nuxt-link>
    <common-local-switch />
  </main>
</template>

<script>
import dayjs from "dayjs"
import Meta from "~/mixins/meta"

export default {
  mixins: [Meta],
  async asyncData({ $content, route }) {
    const query = $content("archive", { deep: true }).sortBy("date", "desc")
    const articles = await query.fetch()
    return {
      articles
    }
  },
  data() {
    return {
      meta: {
        title: this.$t("archivePage.title"),
        description: this.$t("archivePage.desc01"),
        image: "https://yamanoku.net/ogp/ogp-archive@2x.png"
      },
      feedback: {
        gitHubTitle: this.$t("archivePage.feedback.github.linkTitle"),
        routePath: this.$route.path
      }
    }
  }
}
</script>
