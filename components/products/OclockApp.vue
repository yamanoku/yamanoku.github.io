<template>
  <article id="product:oclock-app" aria-labelledby="product:oclock-app_heading">
    <h3 id="product:oclock-app_heading">
      {{ $t("product.oclock-app.title") }}
    </h3>
    <figure
      aria-labelledby="product:oclock-app_heading"
      aria-describedby="product:oclock-app_caption"
    >
      <picture>
        <source
          srcset="~/assets/img/product-oclock-app.webp"
          type="image/webp"
        />
        <img
          src="~/assets/img/product-oclock-app.png"
          width="688"
          height="498"
          :alt="$t('prefixAlt.screenshot') + $t('product.oclock-app.title')"
        />
      </picture>
      <figcaption id="product:oclock-app_caption">
        {{ $t("product.description.oclock-app") }}
      </figcaption>
    </figure>
    <h4 id="related:oclock-app_heading">{{ $t("heading.relatedList") }}</h4>
    <ul aria-labelledby="related:oclock-app_heading">
      <li>
        <a href="https://yamanoku.net/oclock/" target="_blank" rel="noopener">
          {{ $t("product.oclock-app.title") }}
          <open-new-icon />
        </a>
      </li>
      <li>
        <a
          href="https://zenn.dev/yamanoku/scraps/bb713d47a45a55/"
          target="_blank"
          rel="noopener"
        >
          {{ $t("product.oclock-app.zenn") }}
          <open-new-icon />
        </a>
      </li>
    </ul>
    <h4 id="teck-stack:oclock-app_heading">{{ $t("heading.techStack") }}</h4>
    <ul aria-labelledby="teck-stack:oclock-app_heading">
      <li>Svelte</li>
      <li>Custom Elements</li>
      <li>WAI-ARIA</li>
    </ul>
  </article>
</template>
