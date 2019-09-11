<template>
  <article id="crowding" aria-describedby="product:crowding_heading">
    <h3 class="anchor-heading" id="product:crowding_heading">
      <a class="anchor" href="#crowding">
        <anchor-icon />
      </a>
      {{ $t("product.crowding") }}
    </h3>
    <h4 id="crowding-birthday_countdown_js">
      <a class="anchor" href="#crowding-birthday_countdown_js">
        <anchor-icon />
      </a>
      {{ $t("product.birthdayCount") }}
    </h4>
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
    <h4 id="crowding-glitch_range">
      <a class="anchor" href="#crowding-glitch_range">
        <anchor-icon />
      </a>
      {{ $t("product.glitch") }}
    </h4>
    <p>{{ $t("product.description.glitch") }}</p>
    <ul role="list">
      <li role="listitem">
        <a href="/glitchrange" target="_blank" rel="noopener">
          {{ $t("product.glitch") }}
          <open-new-icon />
        </a>
      </li>
    </ul>
    <h4 id="crowding-canvas_browser_crash_js">
      <a class="anchor" href="#crowding-canvas_browser_crash_js">
        <anchor-icon />
      </a>
      {{ $t("product.browserCrash") }}
    </h4>
    <p>{{ $t("product.description.browserCrash") }}</p>
    <ul role="list">
      <li role="listitem">
        <a href="/canvas_browser-crash.js" target="_blank" rel="noopener">
          {{ $t("product.browserCrash") }}
          <open-new-icon />
        </a>
      </li>
    </ul>
    <h4 id="crowding-rolling_sushi">
      <a class="anchor" href="#crowding-rolling_sushi">
        <anchor-icon />
      </a>
      {{ $t("product.sushi") }}
    </h4>
    <p>{{ $t("product.description.sushi") }}</p>
    <ul role="list" aria-describedby="crowding-rolling_sushi">
      <li role="listitem">
        <a href="/rolling-sushi" target="_blank" rel="noopener">
          {{ $t("product.sushi") }}
          <open-new-icon />
        </a>
      </li>
    </ul>
  </article>
</template>
