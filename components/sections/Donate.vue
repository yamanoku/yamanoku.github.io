<template>
  <section id="donate" aria-labelledby="donate_heading">
    <h2 id="donate_heading">
      {{ $t("heading.donate") }}
    </h2>
    <p>
      {{ $t("donate.desc01") }}
    </p>
    <ul role="list">
      <li role="listitem">
        <a
          target="_blank"
          rel="noopener"
          href="http://buymeacoffee.com/yamanoku"
          lang="en"
        >
          <span role="img" aria-label="beer">🍺</span>
          Buy me a Beer
          <open-new-icon />
        </a>
      </li>
    </ul>
  </section>
</template>
