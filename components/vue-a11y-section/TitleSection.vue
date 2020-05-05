<template>
  <section id="title:about-accessibility-with-vuejs">
    <h1 id="heading:about-accessibility-with-vuejs">
      {{ $t("vueA11yPage.title") }}
    </h1>
    <figure aria-labelledby="heading:about-accessibility-with-vuejs">
      <picture>
        <source
          srcset="~/assets/img/product-about-accessibility-with-vuejs.webp"
          type="image/webp"
        />
        <img
          src="~/assets/img/product-about-accessibility-with-vuejs.png"
          :alt="$t('prefixAlt.photo') + $t('product.vueA11yPage.title')"
        />
      </picture>
    </figure>
    <i18n tag="p" path="vueA11yPage.titleSection.desc01">
      <template v-slot:link01>
        <a
          href="https://adventar.org/calendars/3994"
          target="_blank"
          rel="noopener"
        >
          {{ $t("vueA11yPage.titleSection.link01") }}
          <open-new-icon />
        </a>
      </template>
    </i18n>
    <p>
      {{ $t("vueA11yPage.titleSection.desc02") }}
    </p>
  </section>
</template>
