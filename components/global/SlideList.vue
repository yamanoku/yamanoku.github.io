<template>
  <ul>
    <li v-for="list in listItem" :key="list.index">
      <template v-if="list.datetime">
        <span class="time">{{ dateStirngReplace(list.datetime) }}</span>
        -
      </template>
      <template v-else-if="list.created_at">
        <span class="time">{{ dateStirngReplace(list.created_at) }}</span>
        -
      </template>
      <a :href="list.url" target="_blank" rel="noopener">
        {{ list.title }}
        <external-link-icon />
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
    dateStirngReplace(date) {
      return date.replace(/T.*$/, "").replace(/(-)/g, "/");
    }
  }
};
</script>
