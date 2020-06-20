<template>
  <main role="main" id="main">
    <article>
      <h1>{{ page.title }}</h1>
      <p lang="en">
        created at:
        <time :datetime="dateTime(page.date)">{{ dateTime(page.date) }}</time>
      </p>
      <template v-if="this.$i18n.locale !== 'ja'">
        <em>{{ $t("onlyJPText") }}</em>
      </template>
      <nuxt-content :document="page" />
      <nuxt-link to="/archive">
        {{ $t("archivePage.backText") }}
      </nuxt-link>
    </article>
    <nuxt-link :to="localePath({ name: 'index' })">{{
      $t("backTop")
    }}</nuxt-link>
  </main>
</template>

<script>
import dayjs from "dayjs"

export default {
  name: "ArchiveDocumentSlug",
  async asyncData({ $content, params, error }) {
    let page
    try {
      page = await $content(`archive/${params.slug}`).fetch()
    } catch (e) {
      return error({ statusCode: 404, message: "Page not found" })
    }
    return {
      page
    }
  },
  head() {
    return {
      title: `${this.page.title} - yamanoku.net`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("archivePage.desc01")
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `${this.page.title} - yamanoku.net`
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("archivePage.desc01")
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://yamanoku.net/ogp/ogp-archive@2x.png"
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.page.title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("archivePage.desc01")
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content:
            "https://yamanoku.net/ogp/ogp-twitter_summary-archives@2x.png"
        }
      ],
      bodyAttrs: {
        class: this.$store.state.rhythm.toggleRhythm ? "is-rhythm" : ""
      }
    }
  },
  methods: {
    dateTime(time) {
      return dayjs(time).format("YYYY-MM-DD")
    }
  }
}
</script>
