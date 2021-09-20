<template>
  <section id="title:about-accessibility-with-vuejs-2019">
    <h1 id="heading:about-accessibility-with-vuejs-2019">
      {{ $t("vueA11yPage2019.title") }}
    </h1>
    <figure aria-labelledby="heading:about-accessibility-with-vuejs-2019">
      <picture>
        <source
          srcset="~/assets/img/product-about-accessibility-with-vuejs-2019.webp"
          type="image/webp"
        />
        <img
          src="~/assets/img/product-about-accessibility-with-vuejs-2019.png"
          :alt="$t('prefixAlt.photo') + $t('product.vueA11yPage2019.title')"
        />
      </picture>
    </figure>
    <global-deprecation-alert-one-year />
    <i18n tag="p" path="vueA11yPage2019.titleSection.desc01">
      <template v-slot:link01>
        <a
          href="https://adventar.org/calendars/3994"
          target="_blank"
          rel="noopener"
        >
          {{ $t("vueA11yPage2019.titleSection.link01") }}
          <open-new-icon />
        </a>
      </template>
    </i18n>
    <p>
      {{ $t("vueA11yPage2019.titleSection.desc02") }}
    </p>
  </section>
</template>
