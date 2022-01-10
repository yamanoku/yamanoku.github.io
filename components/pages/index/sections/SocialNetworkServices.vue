<template>
  <section
    id="social-network-services"
    aria-labelledby="social-network-services_heading"
  >
    <global-heading-component
      id="social-network-services_heading"
      :heading-level="2"
      :heading-text="$t('heading.sns')"
    />
    <global-list-component :list-array="socialNetworkServicesListItem" />
  </section>
</template>

<script>
export default {
  name: "IndexSectionsSocialNetworkServices",
  data() {
    return {
      socialNetworkServicesListItem: [
        {
          title: this.$t("sns.twitter"),
          url: "https://twitter.com/okuto_oyama",
          isExternal: true
        },
        {
          title: this.$t("sns.github"),
          url: "https://github.com/yamanoku",
          isExternal: true,
          isGitHubLink: true
        },
        {
          title: this.$t("sns.scrapbox"),
          url: "https://scrapbox.io/yamanoku/",
          isExternal: true
        },
        {
          title: this.$t("sns.facebook"),
          url: "https://facebook.com/okutooyama",
          isExternal: true
        },
        {
          title: this.$t("sns.tumblr.text"),
          url: "https://yamanoku.tumblr.com",
          isExternal: true
        }
      ]
    };
  }
};
</script>
