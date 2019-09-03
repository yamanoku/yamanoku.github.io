<template>
  <footer>
    <small>&copy; Copyright {{currentYear}}, Okuto Oyama</small>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: this.$store.state.day.currentYear,
    };
  }
}
</script>

<style scoped>
footer {
  max-width: 80ch;
  margin: auto;
  padding: var(--rhythm);
  text-align: center;
}
small {
  line-height: var(--rhythm);
}
</style>
