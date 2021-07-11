<template>
  <main id="main">
    <h1>{{ $t("archivePage.title") }}</h1>
    <p>
      {{ $t("archivePage.desc01") }}
    </p>
    <p>
      {{ $t("archivePage.desc02") }}
    </p>
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
    <global-local-switch />
  </main>
</template>

<script>
import dayjs from "dayjs";
import Meta from "~/mixins/meta";

export default {
  mixins: [Meta],
  async asyncData({ $content, route }) {
    const query = $content("archive", { deep: true }).sortBy("date", "desc");
    const articles = await query.fetch();
    return {
      articles
    };
  },
  head() {
    return {
      meta: [
        {
          "http-equiv": "refresh",
          content: "0;url=https://archives.yamanoku.net"
        },
        { rel: "canonical", href: "https://archives.yamanoku.net" }
      ]
    };
  },
  data() {
    return {
      meta: {
        title: this.$t("archivePage.title"),
        description: this.$t("archivePage.desc01"),
        image: "https://yamanoku.net/ogp/ogp-archive@2x.png",
        imageAlt: this.$t("archivePage.title")
      }
    };
  }
};
</script>
