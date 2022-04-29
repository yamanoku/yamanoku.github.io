<template>
  <footer>
    <p>Copyright {{ currentYear }}, Okuto Oyama</p>
    <p>Source : <global-link-component :linkObject="sourceLink" /></p>
  </footer>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "GlobalFooter",
  data() {
    return {
      currentYear: dayjs().year(),
      sourceLink: {
        title: "yamanoku/yamanoku.github.io",
        url: "https://github.com/yamanoku/yamanoku.github.io/",
        isExternal: true,
        isGitHubLink: true
      }
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
