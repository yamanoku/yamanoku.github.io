<template>
  <section id="bio">
    <h2>{{ $t("vueA11yPage.heading.bio") }}</h2>
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
