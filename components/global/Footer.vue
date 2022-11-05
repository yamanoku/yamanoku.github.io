<template>
  <footer>
    <p>Copyright {{ currentYear }}, Okuto Oyama</p>
    <p>Source : <global-link-component :linkObject="sourceLink" /></p>
  </footer>
</template>

<script>
const today = new Date();

export default {
  name: "GlobalFooter",
  data() {
    return {
      currentYear: today.getFullYear(),
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
  text-align: center;
}
</style>
