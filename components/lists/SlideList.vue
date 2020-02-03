<template>
  <ul role="list">
    <li role="listitem" v-for="list in listItem" :key="list.title">
      <template v-if="list.datetime">
        <time :datetime="dateReplace(list.datetime)">{{dateReplace(list.datetime)}}</time>
        -
      </template>
      <template v-else-if="list.created_at">
        <time :datetime="dateCreated(list.created_at)">{{dateCreated(list.created_at)}}</time>
        -
      </template>
      <a :href="list.url" target="_blank" rel="noopener" lang="ja">
        {{list.title}}
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
    dateReplace(date) {
      return date.replace(/T.*$/, "").replace(/(-)/g, "/");
    },
    dateCreated(date) {
      return date.replace(/T.*$/, "").replace(/(-)/g, "/");
    }
  }
};
</script>
