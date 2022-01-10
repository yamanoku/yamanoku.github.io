<template>
  <article id="product:oclock-app" aria-labelledby="product:oclock-app_heading">
    <global-heading-component
      id="product:oclock-app_heading"
      :heading-level="3"
      :heading-text="$t('product.oclock-app.title')"
    />
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
    <global-heading-component
      id="related:oclock-app_heading"
      :heading-level="4"
      :heading-text="$t('heading.relatedList')"
    />
    <ul aria-labelledby="related:oclock-app_heading">
      <li>
        <a href="https://yamanoku.net/oclock/" target="_blank" rel="noopener">
          {{ $t("product.oclock-app.title") }}
          <external-link-icon />
        </a>
      </li>
      <li>
        <a
          href="https://zenn.dev/yamanoku/scraps/bb713d47a45a55/"
          target="_blank"
          rel="noopener"
        >
          {{ $t("product.oclock-app.zenn") }}
          <external-link-icon />
        </a>
      </li>
    </ul>
    <global-heading-component
      id="teck-stack:oclock-app_heading"
      :heading-level="4"
      :heading-text="$t('heading.techStack')"
    />
    <ul aria-labelledby="teck-stack:oclock-app_heading">
      <li>Svelte</li>
      <li>Custom Elements</li>
      <li>WAI-ARIA</li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "IndexSectionsProductsOclockApp"
};
</script>
