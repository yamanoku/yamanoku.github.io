<template>
  <section id="title">
    <h1>{{ $t("vueA11yPage.title") }}</h1>
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
