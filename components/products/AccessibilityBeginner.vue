<template>
  <article
    id="product:web-accessibility-for-beginner"
    aria-labelledby="product:web-accessibility-for-beginner_heading"
  >
    <h3 id="product:web-accessibility-for-beginner_heading">
      {{ $t("product.wafb.title") }}
    </h3>
    <figure
      aria-labelledby="product:web-accessibility-for-beginner_heading"
      aria-describedby="product:web-accessibility-for-beginner_caption"
    >
      <picture>
        <source
          srcset="~/assets/img/product-web-accessibility-for-beginner.webp"
          type="image/webp"
        />
        <img
          src="~/assets/img/product-web-accessibility-for-beginner.jpg"
          :alt="$t('prefixAlt.photo') + $t('product.wafb.title')"
        />
      </picture>
      <figcaption id="product:web-accessibility-for-beginner_caption">
        {{ $t("product.description.wafb") }}
      </figcaption>
    </figure>
    <template v-if="this.$i18n.locale !== 'ja'">
      <p>
        <em>{{ $t("onlyJPText") }}</em>
      </p>
    </template>
    <h4 id="related:web-accessibility-for-beginner_heading">
      {{ $t("heading.relatedList") }}
    </h4>
    <ul
      role="list"
      aria-labelledby="related:web-accessibility-for-beginner_heading"
    >
      <li role="listitem">
        <a
          href="https://techbookfest.org/event/tbf05/circle/41130001"
          target="_blank"
          rel="noopener"
        >
          {{ $t("product.wafb.circleDetail") }}
          <open-new-icon />
        </a>
      </li>
      <li role="listitem">
        <a
          href="https://booth.pm/ja/items/1044446"
          target="_blank"
          rel="noopener"
        >
          {{ $t("product.wafb.boothLink") }}
          <shopping-icon />
        </a>
      </li>
      <li role="listitem">
        <a
          href="https://note.mu/yamanoku/n/n3487a344ff84"
          target="_blank"
          rel="noopener"
        >
          {{ $t("product.wafb.noteLink") }}
          <shopping-icon />
        </a>
      </li>
    </ul>
  </article>
</template>
