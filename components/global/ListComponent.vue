<template>
  <ul>
    <li v-for="list in listItem" :key="list.index">
      <template v-if="list.datetime">
        <span class="time">{{ dateStirngReplace(list.datetime) }}</span>
        -
      </template>
      <i18n v-if="list.isI18n" :path="list.title">
        <a
          :href="list.url"
          v-bind="list.isExternal ? { target: '_blank', rel: 'noopener' } : ''"
        >
          {{ list.i18nLinkTitle }}
          <template v-if="list.isGitHubLink">
            <github-icon />
          </template>
          <template v-else-if="list.isExternal">
            <external-link-icon />
          </template>
        </a>
      </i18n>
      <template v-else-if="list.url">
        <a
          :href="list.url"
          v-bind="list.isExternal ? { target: '_blank', rel: 'noopener' } : ''"
        >
          {{ list.title }}
          <template v-if="list.isGitHubLink">
            <github-icon />
          </template>
          <template v-else-if="list.isExternal">
            <external-link-icon />
          </template>
        </a>
      </template>
      <template v-else>
        {{ list.title }}
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    listArray: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      listItem: this.listArray
    };
  },
  methods: {
    dateStirngReplace(date) {
      return date.replace(/T.*$/, "").replace(/(-)/g, "/");
    }
  }
};
</script>

<style scoped>
.time {
  font-variant-numeric: tabular-nums;
}
</style>
