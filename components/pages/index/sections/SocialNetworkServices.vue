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
          title: "Twitter",
          url: "https://twitter.com/okuto_oyama",
          isExternal: true
        },
        {
          title: "GitHub",
          url: "https://github.com/yamanoku",
          isExternal: true,
          isGitHubLink: true
        },
        {
          title: "Scrapbox",
          url: "https://scrapbox.io/yamanoku/",
          isExternal: true
        },
        {
          title: "Facebook",
          url: "https://facebook.com/okutooyama",
          isExternal: true
        }
      ]
    };
  }
};
</script>
