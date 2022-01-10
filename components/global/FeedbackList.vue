<template>
  <details>
    <summary>{{ $t("details.summary_feedback") }}</summary>
    <global-list-component :list-array="feedbackListItem" />
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
      feedbackListItem: [
        {
          title: this.$t("feedback.github.title"),
          url: `https://github.com/yamanoku/yamanoku.github.io/issues/new?title=${
            this.feedback.gitHubTitle
          }&labels=document,feedback&body=URL：https://yamanoku.net${
            this.feedback.routePath
          }%0A${this.$t("feedback.github.link")}`,
          isExternal: true,
          isGitHubLink: true
        },
        {
          title: this.$t("feedback.twitter.title"),
          url: `https://twitter.com/share?url=https://yamanoku.net${this.feedback.routePath}&text=@okuto_oyama`,
          isExternal: true
        }
      ]
    };
  }
};
</script>
