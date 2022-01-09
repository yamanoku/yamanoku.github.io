<template>
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <title>Open Mail App</title>
    <path
      class="mail-1"
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
    />
    <path class="mail-2" d="M0 0h24v24H0z" fill="none" />
  </svg>
</template>

<style scoped>
svg {
  width: 12px;
  height: 12px;
  margin: 0 0 -1px 4px;
}
svg path {
  fill: var(--y-black-base);
}
@media (prefers-color-scheme: dark) {
  svg path {
    fill: var(--y-white-base);
  }
}
svg .mail-2 {
  fill: none;
}
</style>
