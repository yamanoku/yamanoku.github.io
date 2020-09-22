<template>
  <ul role="list">
    <li role="listitem" v-for="list in listItem" :key="list.index">
      <template v-if="list.datetime">
        <time :datetime="dateTimeReplace(list.datetime)">{{
          dateStirngReplace(list.datetime)
        }}</time>
        -
      </template>
      <template v-else-if="list.created_at">
        <time :datetime="dateTimeReplace(list.created_at)">{{
          dateStirngReplace(list.created_at)
        }}</time>
        -
      </template>
      <a :href="list.url" target="_blank" rel="noopener" lang="ja">
        {{ list.title }}
        <open-new-icon />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    listArray: Array
  },
  data() {
    return {
      listItem: this.listArray
    };
  },
  methods: {
    dateTimeReplace(date) {
      return date.replace(/T.*$/, "");
    },
    dateStirngReplace(date) {
      return date.replace(/T.*$/, "").replace(/(-)/g, "/");
    }
  }
};
</script>
