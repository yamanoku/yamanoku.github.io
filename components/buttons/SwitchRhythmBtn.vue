<template>
  <switch-rhythm @click="switchToggle" />
</template>

<script>
import Vue from "vue";
Vue.config.ignoredElements = ["switch-rhythm"];

export default {
  methods: {
    switchToggle(e) {
      e.preventDefault();
      e.target.setAttribute(
        "aria-checked",
        e.target.getAttribute("aria-checked") === "true" ? "false" : "true"
      );
      this.$store.dispatch("rhythm/toggleRhythm");
    }
  },
  computed: {
    checkToggle() {
      if (!this.$store.state.rhythm.toggleRhythm) return "false";
      return this.$store.state.rhythm.toggleRhythm;
    }
  }
};
</script>
