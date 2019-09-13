<template>
  <main role="main" id="main">
    <h1>{{errorHeading}}</h1>
    <template v-if="error.statusCode === 404">
      <p>{{ $t("error.404.text01") }}</p>
      <p>{{ $t("error.404.text02") }}</p>
      <sitemap-list />
    </template>
    <template v-else>
      <p>{{ $t("error.500.text01") }}</p>
      <p>{{ $t("error.500.text02") }}</p>
      <address>
        <a href="mailto:0910yama@gmail.com">0910yama@gmail.com</a>
      </address>
    </template>
  </main>
</template>

<script>
import SitemapList from "~/components/lists/SitemapList.vue";
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  components: {
    SitemapList
  },
  head() {
    return {
      title: this.error.statusCode + ' Error',
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.error.statusCode
        },
        { name: "twitter:title", content: this.error.statusCode + ' Error' },
        {
          name: "twitter:description",
          content: this.error.statusCode
        }
      ],
    };
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    errorHeading() {
      if (this.$i18n.locale === "ja") {
        return "申し訳ありません。" + this.error.statusCode + "エラーです。";
      } else if (this.$i18n.locale === "fr") {
        return "Je suis désolé Une erreur " + this.error.statusCode + " s'est produite.";
      } else {
        return "I'm sorry for the " + this.error.statusCode + " error.";
      }
    },
  }
};
</script>
