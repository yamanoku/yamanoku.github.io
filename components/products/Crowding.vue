<template>
  <article id="crowding">
    <h4>
      <a class="anchor" aria-hidden="true" href="#crowding">
        <anchor-icon />
      </a>
      {{ $t("product.crowding") }}
    </h4>
    <h5 id="birthday_countdown_js">
      <a class="anchor" aria-hidden="true" href="#birthday_countdown_js">
        <anchor-icon />
      </a>
      {{ $t("product.birthdayCount") }}
    </h5>
    <p>{{ $t("product.description.birthdayCount") }}</p>
    <ul role="list">
      <li role="listitem">
        <a href="/birthday-countdown-js">
          {{ $t("product.birthdayCount") }}
          <product-icon />
        </a>
      </li>
      <li>
        <a href="https://github.com/yamanoku/birthday-countdown-js/releases">
          {{ $t("product.releaseInfo") }}
          <github-icon />
        </a>
      </li>
    </ul>
    <h5 id="glitch_range">
      <a class="anchor" aria-hidden="true" href="#glitch_range">
        <anchor-icon />
      </a>
      {{ $t("product.glitch") }}
    </h5>
    <p>{{ $t("product.description.glitch") }}</p>
    <ul role="list">
      <li role="listitem">
        <a href="/glitchrange">
          {{ $t("product.glitch") }}
          <product-icon />
        </a>
      </li>
    </ul>
    <h5 id="canvas_browser_crash_js">
      <a class="anchor" aria-hidden="true" href="#canvas_browser_crash_js">
        <anchor-icon />
      </a>
      {{ $t("product.browserCrash") }}
    </h5>
    <p>{{ $t("product.description.browserCrash") }}</p>
    <ul role="list">
      <li role="listitem">
        <a href="/canvas_browser-crash.js">
          {{ $t("product.browserCrash") }}
          <product-icon />
        </a>
      </li>
    </ul>
    <h5 id="rolling_sushi">
      <a class="anchor" aria-hidden="true" href="#rolling_sushi">
        <anchor-icon />
      </a>
      {{ $t("product.sushi") }}
    </h5>
    <p>{{ $t("product.description.sushi") }}</p>
    <ul role="list">
      <li role="listitem">
        <a href="/rolling-sushi">
          {{ $t("product.sushi") }}
          <product-icon />
        </a>
      </li>
    </ul>
  </article>
</template>
