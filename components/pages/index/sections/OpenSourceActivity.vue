<template>
  <section
    id="open-source-activity"
    aria-labelledby="open-source-activity_heading"
  >
    <global-heading-component
      id="open-source-activity_heading"
      :heading-level="2"
      :heading-text="$t('heading.openSourceActivity')"
    />
    <p>{{ $t("openSourceActivity.desc01") }}</p>
    <global-list-component :list-array="openSourceActivityListItem" />
    <global-donate-component />
  </section>
</template>

<script>
export default {
  name: "IndexSectionsOpenSourceActivity",
  data() {
    return {
      openSourceActivityListItem: [
        {
          title: this.$t("openSourceActivity.link01"),
          url: "https://www.notion.so/yamanoku/2021-2c4fa51b832645f494698ebd11e069f9",
          isExternal: true
        }
      ]
    };
  }
};
</script>
