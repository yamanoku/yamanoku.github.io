<template>
  <section id="donate" aria-labelledby="donate_heading">
    <h2 id="donate_heading">
      {{ $t("heading.donate") }}
    </h2>
    <p>
      {{ $t("donate.desc01") }}
    </p>
    <a href="https://buymeacoffee.com/yamanoku" target="_blank" rel="noopener">
      <img
        alt="Buy Me A Coffee"
        src="https://cdn.buymeacoffee.com/buttons/v2/arial-white.png"
      />
    </a>
  </section>
</template>

<style scoped>
a {
  display: inline-flex;
  border-radius: 8px;
  border: 2px solid transparent;
}
a:focus {
  border: 2px solid var(--blue);
  outline: 0;
}
a > img {
  height: 60px;
  width: 217px;
}
</style>
