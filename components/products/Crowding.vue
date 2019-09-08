<template>
  <article id="crowding">
    <h4 class="anchor-heading">
      <a class="anchor" href="#crowding">
        <anchor-icon />
      </a>
      {{ $t("product.crowding") }}
    </h4>
    <h5 id="birthday_countdown_js">
      <a class="anchor" href="#birthday_countdown_js">
        <anchor-icon />
      </a>
      {{ $t("product.birthdayCount") }}
    </h5>
    <p>{{ $t("product.description.birthdayCount") }}</p>
    <ul role="list">
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
    <h5 id="glitch_range">
      <a class="anchor" href="#glitch_range">
        <anchor-icon />
      </a>
      {{ $t("product.glitch") }}
    </h5>
    <p>{{ $t("product.description.glitch") }}</p>
    <ul role="list">
      <li role="listitem">
        <a href="/glitchrange" target="_blank" rel="noopener">
          {{ $t("product.glitch") }}
          <open-new-icon />
        </a>
      </li>
    </ul>
    <h5 id="canvas_browser_crash_js">
      <a class="anchor" href="#canvas_browser_crash_js">
        <anchor-icon />
      </a>
      {{ $t("product.browserCrash") }}
    </h5>
    <p>{{ $t("product.description.browserCrash") }}</p>
    <ul role="list">
      <li role="listitem">
        <a href="/canvas_browser-crash.js" target="_blank" rel="noopener">
          {{ $t("product.browserCrash") }}
          <open-new-icon />
        </a>
      </li>
    </ul>
    <h5 id="rolling_sushi">
      <a class="anchor" href="#rolling_sushi">
        <anchor-icon />
      </a>
      {{ $t("product.sushi") }}
    </h5>
    <p>{{ $t("product.description.sushi") }}</p>
    <ul role="list">
      <li role="listitem">
        <a href="/rolling-sushi" target="_blank" rel="noopener">
          {{ $t("product.sushi") }}
          <open-new-icon />
        </a>
      </li>
    </ul>
  </article>
</template>
