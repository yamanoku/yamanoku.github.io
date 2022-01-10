<template>
  <div>
    <figure>
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
    <i18n tag="p" path="vueA11yPage2019.titleSection.desc01">
      <template v-slot:link01>
        <global-link-component :link-object="titleLink" />
      </template>
    </i18n>
    <p>
      {{ $t("vueA11yPage2019.titleSection.desc02") }}
    </p>
    <div class="alert-text-wrap">
      <strong>{{ $t("alertOneYearText") }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueA11y2019Title",
  data() {
    return {
      titleLink: {
        title: this.$t("vueA11yPage2019.titleSection.link01"),
        url: "https://adventar.org/calendars/3994",
        isExternal: true
      }
    };
  }
};
</script>

<style scoped>
.alert-text-wrap {
  margin: var(--y-rhythm-3) 0;
}
</style>
