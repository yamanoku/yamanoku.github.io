<template>
  <section id="bio:about-accessibility-with-vuejs">
    <h2>{{ $t("vueA11yPage.heading.bio") }}</h2>
    <p>
      <picture>
        <source
          srcset="~/assets/img/vue-a11y-bio-photo-okuto.webp"
          type="image/webp"
        />
        <img
          src="~/assets/img/vue-a11y-bio-photo-okuto.jpg"
          :alt="$t('prefixAlt.photo') + $t('vueA11yPage.bio.photoAlt')"
        />
      </picture>
    </p>
    <i18n tag="p" path="vueA11yPage.bio.desc01">
      <template v-slot:small01>
        <small>
          {{ $t("vueA11yPage.bio.small01") }}
        </small>
      </template>
    </i18n>
    <p>
      {{ $t("vueA11yPage.bio.desc02") }}
    </p>
    <p>
      {{ $t("vueA11yPage.bio.desc03") }}
    </p>
  </section>
</template>
