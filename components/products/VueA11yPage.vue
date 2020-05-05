<template>
  <article
    id="product:about-accessibility-with-vuejs"
    aria-labelledby="product:about-accessibility-with-vuejs_heading"
  >
    <h3 id="product:about-accessibility-with-vuejs_heading">
      {{ $t("product.vueA11yPage.title") }}
    </h3>
    <figure
      aria-labelledby="product:about-accessibility-with-vuejs_heading"
      aria-describedby="product:about-accessibility-with-vuejs_caption"
    >
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
      <figcaption id="product:about-accessibility-with-vuejs_caption">
        {{ $t("product.description.vueA11yPage") }}
      </figcaption>
    </figure>
    <p>
      <nuxt-link :to="localePath('/vue-a11y')">
        {{ $t("product.vueA11yPage.link") }}
      </nuxt-link>
    </p>
    <section
      id="product:about-accessibility-with-vuejs_information"
      aria-labelledby="product:about-accessibility-with-vuejs_subheading"
    >
      <h4 id="product:about-accessibility-with-vuejs_subheading">
        {{ $t("vueA11yPage.subHeading.info") }}
      </h4>
      <ul>
        <li>
          <time datetime="2019-12-21">2019/12/21</time>
          {{ $t("product.vueA11yPage.info.listitem01") }}
        </li>
        <li>
          <time datetime="2020-02-28">2020/02/28</time>
          <i18n path="product.vueA11yPage.info.listitem02">
            <template v-slot:awesomeA11yVue>
              <a
                href="https://github.com/vue-a11y/awesome-a11y-vue/pull/3"
                target="_blank"
                rel="noopener"
                lang="en"
                >awesome-a11y-vue<open-new-icon
              /></a>
            </template>
          </i18n>
        </li>
        <li>
          <time datetime="2020-05-03">2020/05/03</time>
          {{ $t("product.vueA11yPage.info.listitem03") }}
        </li>
      </ul>
    </section>
  </article>
</template>
