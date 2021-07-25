<template>
  <footer>
    <nuxt-link :to="localePath({ name: 'privacy' })">{{
      $t("privacyPage.title")
    }}</nuxt-link>
    <p>&copy; Copyright {{ currentYear }}, Okuto Oyama</p>
    <p>
      Source :
      <a
        href="https://github.com/yamanoku/yamanoku.github.io/"
        target="_blank"
        rel="noopener"
        >yamanoku/yamanoku.github.io<github-icon
      /></a>
    </p>
  </footer>
</template>

<script>
import dayjs from "dayjs";

export default {
  data() {
    return {
      currentYear: dayjs().year()
    };
  }
};
</script>

<style scoped>
footer {
  padding: var(--y-rhythm-3);
  text-align: center;
}
footer p {
  font-size: 1rem;
  line-height: var(--y-rhythm-3);
}
</style>
