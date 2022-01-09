<template>
  <details>
    <summary>{{ $t("details.summary_feedback") }}</summary>
    <ul>
      <li>
        <a :href="gitHubLink" target="_blank" rel="noopener">
          {{ this.$t("feedback.github.title") }}
          <external-link-icon />
        </a>
      </li>
      <li>
        <a :href="twitterLink" target="_blank" rel="noopener">
          {{ this.$t("feedback.twitter.title") }}
          <external-link-icon />
        </a>
      </li>
    </ul>
  </details>
</template>

<script>
export default {
  props: {
    feedback: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      gitHubLink: `https://github.com/yamanoku/yamanoku.github.io/issues/new?title=${
        this.feedback.gitHubTitle
      }&labels=document,feedback&body=URL：https://yamanoku.net${
        this.feedback.routePath
      }%0A${this.$t("feedback.github.link")}`,
      twitterLink: `https://twitter.com/share?url=https://yamanoku.net${this.feedback.routePath}&text=@yamanoku`
    };
  }
};
</script>
