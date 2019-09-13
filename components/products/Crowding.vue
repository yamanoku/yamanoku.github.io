<template>
  <article id="product:crowding" aria-labelledby="product:crowding_heading">
    <h3 id="product:crowding_heading">
      {{ $t("product.crowding") }}
    </h3>
    <h4 id="product:crowding-birthday-countdown_heading">
      {{ $t("product.birthdayCount") }}
    </h4>
    <p>{{ $t("product.description.birthdayCount") }}</p>
    <ul role="list" aria-labelledby="product:crowding-birthday-countdown_heading">
      <li role="listitem">
        <a href="/birthday-countdown-js" target="_blank" rel="noopener">
          {{ $t("product.birthdayCount") }}
          <open-new-icon />
        </a>
      </li>
      <li>
        <a href="https://github.com/yamanoku/birthday-countdown-js/releases">
          {{ $t("product.releaseInfo") }}
          <github-icon />
        </a>
      </li>
    </ul>
    <h4 id="product:crowding-glitch-range_heading">
      {{ $t("product.glitch") }}
    </h4>
    <p>{{ $t("product.description.glitch") }}</p>
    <ul role="list" aria-labelledby="product:crowding-glitch-range_heading">
      <li role="listitem">
        <a href="/glitchrange" target="_blank" rel="noopener">
          {{ $t("product.glitch") }}
          <open-new-icon />
        </a>
      </li>
    </ul>
    <h4 id="product:crowding-canvas-browser-crash_heading">
      {{ $t("product.browserCrash") }}
    </h4>
    <p>{{ $t("product.description.browserCrash") }}</p>
    <ul role="list" aria-labelledby="product:crowding-canvas-browser-crash_heading">
      <li role="listitem">
        <a href="/canvas_browser-crash.js" target="_blank" rel="noopener">
          {{ $t("product.browserCrash") }}
          <open-new-icon />
        </a>
      </li>
    </ul>
    <h4 id="product:crowding-rolling-sushi_heading">
      {{ $t("product.sushi") }}
    </h4>
    <p>{{ $t("product.description.sushi") }}</p>
    <ul role="list" aria-labelledby="product:crowding-rolling-sushi_heading">
      <li role="listitem">
        <a href="/rolling-sushi" target="_blank" rel="noopener">
          {{ $t("product.sushi") }}
          <open-new-icon />
        </a>
      </li>
    </ul>
  </article>
</template>
