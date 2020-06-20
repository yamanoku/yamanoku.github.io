<template>
  <button
    class="switch-rhythm"
    role="switch"
    :aria-checked="checkToggle"
    @click="switchToggle"
    @keypress="switchToggle"
    ref="switch-rhythm"
  >
    Vertical Rhythm Line
    <span aria-hidden="true" class="show-labels"></span>
  </button>
</template>

<script>
export default {
  methods: {
    switchToggle(e) {
      e.preventDefault()
      e.target.setAttribute(
        "aria-checked",
        e.target.getAttribute("aria-checked") === "true" ? "false" : "true"
      )
      this.$store.dispatch("rhythm/toggleRhythm")
    }
  },
  computed: {
    checkToggle() {
      if (!this.$store.state.rhythm.toggleRhythm) return "false"
      return this.$store.state.rhythm.toggleRhythm
    }
  }
}
</script>

<style scoped>
.switch-rhythm {
  background: none;
  border: none;
  display: block;
  font-size: inherit;
  margin: calc(var(--rhythm) * 3) 0;
  line-height: calc(var(--rhythm) * 3);
  padding: 0;
  position: relative;
  text-align: left;
  transition: box-shadow 0.2s ease-in-out;
  width: 100%;
  cursor: pointer;
}
@media (prefers-color-scheme: dark) {
  .switch-rhythm {
    color: var(--white);
  }
}
.switch-rhythm:active {
  color: inherit;
}

.switch-rhythm span:before,
.switch-rhythm span:after {
  border: 1px solid var(--black);
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.switch-rhythm span:after {
  background: #fff;
  border-radius: 100%;
  height: calc(var(--rhythm) * 1.75);
  right: calc(var(--rhythm) * 1.25);
  transition: right 0.1825s ease-in-out;
  width: calc(var(--rhythm) * 1.75);
}

.switch-rhythm span:before {
  background: var(--white);
  border-radius: calc(var(--rhythm) * 3);
  height: calc(var(--rhythm) * 3);
  right: 0.25em;
  transition: background 0.2s ease-in-out;
  width: 2.75em;
}

.switch-rhythm span {
  pointer-events: none;
}

.switch-rhythm[aria-checked="true"] span:after {
  right: calc(var(--rhythm) * 1.05);
}

.switch-rhythm[aria-checked="true"] span:before {
  background: var(--linkBlue);
}

.switch-rhythm .show-labels:before {
  color: var(--black);
  line-height: 1.6;
  text-indent: 1.625em;
  width: 3.5em;
}

.switch-rhythm[aria-checked="false"] .show-labels:after {
  right: calc(var(--rhythm) * 5.25);
}

@media screen and (-ms-high-contrast: active) {
  .switch-rhythm span:after {
    background-color: windowText;
  }
}
</style>
