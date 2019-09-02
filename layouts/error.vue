<template>
  <main>
    <h2>{{ error.statusCode }}</h2>
    <p v-if="error.statusCode === 404">ページが見つかりません</p>
    <p v-else>エラーが発生しました</p>
    <nuxt-link :to="localePath({ name: 'index'})">{{$t("backTop")}}</nuxt-link>
  </main>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    }
  }
};
</script>
