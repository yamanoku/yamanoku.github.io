<template>
  <section id="web-accessibility">
    <h2>{{ $t("vueA11yPage.heading.webA11y") }}</h2>
    <h3>{{ $t("vueA11yPage.subHeading.webA11y.1") }}</h3>
    <i18n tag="p" path="vueA11yPage.webA11y.desc01">
      <template v-slot:A11Y>
        <span lang="en">Accessibility</span>
      </template>
    </i18n>
    <p>{{ $t("vueA11yPage.webA11y.desc02") }}</p>
    <blockquote>
      <p>{{ $t("vueA11yPage.webA11y.quote01") }}</p>
      <a
        :href="$t('vueA11yPage.webA11y.link01.link')"
        target="_blank"
        rel="noopener"
        >{{ $t("vueA11yPage.webA11y.link01.text") }}<open-new-icon
      /></a>
    </blockquote>
    <h3>{{ $t("vueA11yPage.subHeading.webA11y.2") }}</h3>
    <p>{{ $t("vueA11yPage.webA11y.desc03") }}</p>
    <p>{{ $t("vueA11yPage.webA11y.desc04") }}</p>
    <p>{{ $t("vueA11yPage.webA11y.desc05") }}</p>
    <figure>
      <img
        src="https://o.aolcdn.com/dims-global/dims3/GLOB/resize/1200x577/quality/80/https://techcrunch.com/wp-content/uploads/2019/05/live-caption.jpg"
        height="480"
        :alt="$t('vueA11yPage.webA11y.imgAlt01')"
        loading="lazy"
      />
      <figcaption>
        <a
          :href="$t('vueA11yPage.webA11y.link02.link')"
          target="_blank"
          rel="noopener"
          >{{ $t("vueA11yPage.webA11y.link02.text") }}<open-new-icon
        /></a>
      </figcaption>
    </figure>
    <p>{{ $t("vueA11yPage.webA11y.desc06") }}</p>
    <h3>{{ $t("vueA11yPage.subHeading.webA11y.3") }}</h3>
    <p>{{ $t("vueA11yPage.webA11y.desc07") }}</p>
    <p>{{ $t("vueA11yPage.webA11y.desc08") }}</p>
  </section>
</template>
