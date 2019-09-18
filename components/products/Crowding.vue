<template>
  <article id="product:crowding" aria-labelledby="product:crowding_heading">
    <h3 id="product:crowding_heading">{{ $t("product.crowding") }}</h3>
    <h4 id="product:crowding-birthday-countdown_heading">{{ $t("product.birthdayCount") }}</h4>
    <figure
      aria-labelledby="product:crowding-birthday-countdown_heading"
      aria-describedby="product:crowding-birthday-countdown_caption"
    >
      <img src="~/assets/img/product-crowding-birthday-countdown.png" alt />
      <figcaption
        id="product:crowding-birthday-countdown_caption"
      >{{ $t("product.description.birthdayCount") }}</figcaption>
    </figure>
    <h5 id="related:crowding-birthday-countdown_heading">{{$t("heading.relatedList")}}</h5>
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
    <h4 id="product:crowding-glitch-range_heading">{{ $t("product.glitch") }}</h4>
    <figure
      aria-labelledby="product:crowding-glitch-range_heading"
      aria-describedby="product:crowding-glitch-range_caption"
    >
      <img src="~/assets/img/product-crowding-glitch-range.png" alt />
      <figcaption id="product:crowding-glitch-range_caption">{{ $t("product.description.glitch") }}</figcaption>
    </figure>
    <h5 id="related:crowding-glitch-range_heading">{{$t("heading.relatedList")}}</h5>
    <ul role="list" aria-labelledby="product:crowding-glitch-range_heading">
      <li role="listitem">
        <a href="/glitchrange" target="_blank" rel="noopener">
          {{ $t("product.glitch") }}
          <open-new-icon />
        </a>
      </li>
    </ul>
    <h4 id="product:crowding-canvas-browser-crash_heading">{{ $t("product.browserCrash") }}</h4>
    <figure
      aria-labelledby="product:crowding-canvas-browser-crash_heading"
      aria-describedby="product:canvas-browser-crash_caption"
    >
      <img src="~/assets/img/product-crowding-canvas-browser-crash.png" alt />
      <figcaption
        id="product:canvas-browser-crash_caption"
      >{{ $t("product.description.browserCrash") }}</figcaption>
    </figure>
    <h5 id="related:crowding-canvas-browser-crash_heading">{{$t("heading.relatedList")}}</h5>
    <ul role="list" aria-labelledby="product:crowding-canvas-browser-crash_heading">
      <li role="listitem">
        <a href="/canvas_browser-crash.js" target="_blank" rel="noopener">
          {{ $t("product.browserCrash") }}
          <open-new-icon />
        </a>
      </li>
    </ul>
    <h4 id="product:crowding-rolling-sushi_heading">{{ $t("product.sushi") }}</h4>
    <figure
      aria-labelledby="product:crowding-rolling-sushi_heading"
      aria-describedby="product:crowding-rolling-sushi_caption"
    >
      <img src="~/assets/img/product-crowding-rolling-sushi.png" alt />
      <figcaption
        id="product:crowding-rolling-sushi_caption"
      >{{ $t("product.description.sushi") }}</figcaption>
    </figure>
    <h5 id="related:crowding-rolling-sushi_heading">{{$t("heading.relatedList")}}</h5>
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
