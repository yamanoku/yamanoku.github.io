<template>
  <component :is="headline">{{ headingText }}</component>
</template>

<script>
export default {
  name: "GlobalHeadingComponent",
  props: {
    headingLevel: {
      type: Number,
      required: true
    },
    headingText: {
      type: String,
      required: true
    }
  },
  computed: {
    headline() {
      return "h" + this.headingLevel;
    }
  }
};
</script>
