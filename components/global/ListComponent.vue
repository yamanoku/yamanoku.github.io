<template>
  <ul>
    <li v-for="list in listItem" :key="list.index">
      <template v-if="list.datetime">
        <span class="time">{{ dateStirngReplace(list.datetime) }}</span>
        -
      </template>
      <i18n v-if="list.isI18n" :path="list.title">
        <global-link-component :linkObject="list" />
      </i18n>
      <template v-else-if="list.url">
        <global-link-component :linkObject="list" />
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
