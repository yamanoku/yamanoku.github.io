<template>
  <section id="bio:about-accessibility-with-vuejs-2019">
    <h2>{{ $t("vueA11yPage2019.heading.bio") }}</h2>
    <p>
      <picture>
        <source
          srcset="~/assets/img/vue-a11y-2019-bio-photo-okuto.webp"
          type="image/webp"
        />
        <img
          src="~/assets/img/vue-a11y-2019-bio-photo-okuto.jpg"
          :alt="$t('prefixAlt.photo') + $t('vueA11yPage2019.bio.photoAlt')"
        />
      </picture>
    </p>
    <i18n tag="p" path="vueA11yPage2019.bio.desc01">
      <template v-slot:small01>
        <small>
          {{ $t("vueA11yPage2019.bio.small01") }}
        </small>
      </template>
    </i18n>
    <p>
      {{ $t("vueA11yPage2019.bio.desc02") }}
    </p>
    <p>
      {{ $t("vueA11yPage2019.bio.desc03") }}
    </p>
  </section>
</template>

<script>
export default {
  name: "VueA11y2019Bio"
};
</script>
