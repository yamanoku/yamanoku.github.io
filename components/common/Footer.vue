<template>
  <footer>
    <p>
      Created at:
      <time :datetime="createTime">{{ createTime }}</time
      >, Updated at:
      <time :datetime="pushTime">{{ pushTime }}</time>
    </p>
    <nuxt-link :to="localePath({ name: 'privacy' })">{{
      $t("privacyPage.title")
    }}</nuxt-link>
    <p>&copy; Copyright {{ currentYear }}, Okuto Oyama</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: this.$store.state.day.currentYear,
      pushTime: this.$store.state.day.pushTime,
      createTime: this.$store.state.day.createTime
    }
  }
}
</script>

<style scoped>
footer {
  padding: calc(var(--rhythm) * 3);
  text-align: center;
}
footer p {
  font-size: 1rem;
  line-height: calc(var(--rhythm) * 3);
}
</style>
