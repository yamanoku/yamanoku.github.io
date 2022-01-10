<template>
  <a
    :href="link.url"
    v-bind="link.isExternal ? { target: '_blank', rel: 'noopener' } : ''"
  >
    <template v-if="link.i18nLinkTitle">
      {{ link.i18nLinkTitle }}
    </template>
    <template v-else-if="link.title">
      {{ link.title }}
    </template>
    <template v-if="link.isGitHubLink">
      <github-icon />
    </template>
    <template v-else-if="link.isExternal">
      <external-link-icon />
    </template>
  </a>
</template>

<script>
export default {
  name: "GlobalLinkComponent",
  props: {
    linkObject: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      link: this.linkObject
    };
  }
};
</script>
