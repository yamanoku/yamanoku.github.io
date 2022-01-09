<template>
  <article id="product:reading" aria-labelledby="product:reading_heading">
    <h3 id="product:reading_heading">{{ $t("product.reading") }}</h3>
    <figure
      aria-labelledby="product:reading_heading"
      aria-describedby="product:reading_caption"
    >
      <picture>
        <source srcset="~/assets/img/product-reading.webp" type="image/webp" />
        <img
          src="~/assets/img/product-reading.png"
          width="688"
          height="498"
          :alt="$t('prefixAlt.screenshot') + $t('product.reading')"
        />
      </picture>
      <figcaption id="product:reading_caption">
        {{ $t("product.description.reading") }}
      </figcaption>
    </figure>
    <h4 id="related:reading_heading">{{ $t("heading.relatedList") }}</h4>
    <ul aria-labelledby="related:reading_heading">
      <li>
        <a href="https://reading.yamanoku.net" target="_blank" rel="noopener">
          {{ $t("product.reading") }}
          <external-link-icon />
        </a>
      </li>
      <li>
        <a
          href="https://scrapbox.io/yamanoku/Reading%E2%80%A6#5b1f8344c2cd3f000095e9c0"
          target="_blank"
          rel="noopener"
        >
          {{ $t("product.updateInfo") }}
          <external-link-icon />
        </a>
      </li>
    </ul>
    <h4 id="teck-stack:reading_heading">{{ $t("heading.techStack") }}</h4>
    <ul aria-labelledby="teck-stack:reading_heading">
      <li>Nuxt.js</li>
      <li>Nuxt PWA</li>
      <li>vue-paginate</li>
      <li>axios</li>
      <li>modern-normalize</li>
      <li>AWS API Gateway</li>
      <li>AWS Lambda Function</li>
      <li>Netlify</li>
      <li>CircleCI</li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "ProductsReading"
};
</script>
