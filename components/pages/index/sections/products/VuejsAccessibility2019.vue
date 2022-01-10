<template>
  <article
    id="product:about-accessibility-with-vuejs-2019"
    aria-labelledby="product:about-accessibility-with-vuejs-2019_heading"
  >
    <global-heading-component
      id="product:about-accessibility-with-vuejs-2019_heading"
      :heading-level="3"
      :heading-text="$t('product.vueA11yPage2019.title')"
    />
    <figure
      aria-labelledby="product:about-accessibility-with-vuejs-2019_heading"
      aria-describedby="product:about-accessibility-with-vuejs-2019_caption"
    >
      <picture>
        <source
          srcset="~/assets/img/product-about-accessibility-with-vuejs-2019.webp"
          type="image/webp"
        />
        <img
          src="~/assets/img/product-about-accessibility-with-vuejs-2019.png"
          width="688"
          height="498"
          :alt="$t('prefixAlt.photo') + $t('product.vueA11yPage2019.title')"
        />
      </picture>
      <figcaption id="product:about-accessibility-with-vuejs-2019_caption">
        {{ $t("product.description.vueA11yPage2019") }}
      </figcaption>
    </figure>
    <p>
      <nuxt-link :to="localePath('/vue-a11y-2019')">
        {{ $t("product.vueA11yPage2019.link") }}
      </nuxt-link>
    </p>
    <section
      id="product:about-accessibility-with-vuejs-2019_information"
      aria-labelledby="product:about-accessibility-with-vuejs-2019_subheading"
    >
      <global-heading-component
        id="product:about-accessibility-with-vuejs-2019_subheading"
        :heading-level="4"
        :heading-text="$t('vueA11yPage2019.subHeading.info')"
      />
      <ul>
        <li>
          <span class="time">2019/12/21</span>
          {{ $t("product.vueA11yPage2019.info.listitem01") }}
        </li>
        <li>
          <span class="time">2020/02/28</span>
          <i18n path="product.vueA11yPage2019.info.listitem02">
            <template v-slot:awesomeA11yVue>
              <a
                href="https://github.com/vue-a11y/awesome-a11y-vue/pull/3"
                target="_blank"
                rel="noopener"
                lang="en"
                >awesome-a11y-vue<github-icon
              /></a>
            </template>
          </i18n>
        </li>
        <li>
          <span class="time">2020/05/03</span>
          {{ $t("product.vueA11yPage2019.info.listitem03") }}
        </li>
        <li>
          <span class="time">2021/09/20</span>
          {{ $t("product.vueA11yPage2019.info.listitem04") }}
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  name: "IndexSectionsProductsVuejsAccessibility2019"
};
</script>
