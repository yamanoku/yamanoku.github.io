<template>
  <details>
    <summary>{{ $t("details.summary_feedback") }}</summary>
    <ul role="list">
      <li role="listitem" v-for="list in listItem" :key="list.title">
        <a :href="list.link" target="_blank" rel="noopener">
          {{ list.title }}
          <open-new-icon />
        </a>
      </li>
    </ul>
  </details>
</template>

<script>
export default {
  props: {
    listArray: Array
  },
  data() {
    return {
      listItem: this.listArray
    }
  }
}
</script>

<style scoped>
details > summary {
  margin: calc(var(--rhythm) * 3) 0;
}
</style>
