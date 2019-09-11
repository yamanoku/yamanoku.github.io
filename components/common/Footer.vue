<template>
  <footer>
    <p>&copy; Copyright {{currentYear}}, Okuto Oyama</p>
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
footer p {
  font-size: 1rem;
  line-height: var(--rhythm);
}
</style>
