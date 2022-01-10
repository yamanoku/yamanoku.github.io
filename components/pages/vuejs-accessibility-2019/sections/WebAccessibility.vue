<template>
  <section id="web-accessibility:about-accessibility-with-vuejs-2019">
    <global-heading-component
      :heading-level="2"
      :heading-text="$t('vueA11yPage2019.heading.webA11y')"
    />
    <global-heading-component
      :heading-level="3"
      :heading-text="$t('vueA11yPage2019.subHeading.webA11y.title01')"
    />
    <i18n tag="p" path="vueA11yPage2019.webA11y.desc01">
      <template v-slot:A11Y>
        <span>Accessibility</span>
      </template>
    </i18n>
    <p>{{ $t("vueA11yPage2019.webA11y.desc02") }}</p>
    <blockquote>
      <p>{{ $t("vueA11yPage2019.webA11y.quote01") }}</p>
      <global-link-component :link-object="link01" />
    </blockquote>
    <global-heading-component
      :heading-level="3"
      :heading-text="$t('vueA11yPage2019.subHeading.webA11y.title02')"
    />
    <p>{{ $t("vueA11yPage2019.webA11y.desc03") }}</p>
    <p>{{ $t("vueA11yPage2019.webA11y.desc04") }}</p>
    <p>{{ $t("vueA11yPage2019.webA11y.desc05") }}</p>
    <figure>
      <img
        src="https://o.aolcdn.com/dims-global/dims3/GLOB/resize/1200x577/quality/80/https://techcrunch.com/wp-content/uploads/2019/05/live-caption.jpg"
        height="480"
        :alt="$t('vueA11yPage2019.webA11y.imgAlt01')"
        loading="lazy"
      />
      <figcaption>
        <global-link-component :link-object="link02" />
      </figcaption>
    </figure>
    <p>{{ $t("vueA11yPage2019.webA11y.desc06") }}</p>
    <global-heading-component
      :heading-level="3"
      :heading-text="$t('vueA11yPage2019.subHeading.webA11y.title03')"
    />
    <p>{{ $t("vueA11yPage2019.webA11y.desc07") }}</p>
    <p>{{ $t("vueA11yPage2019.webA11y.desc08") }}</p>
  </section>
</template>

<script>
export default {
  name: "VueA11y2019WebAccessibility",
  data() {
    return {
      link01: {
        title: this.$t("vueA11yPage2019.webA11y.link01.text"),
        url: this.$t("vueA11yPage2019.webA11y.link01.link"),
        isExternal: true
      },
      link02: {
        title: this.$t("vueA11yPage2019.webA11y.link02.text"),
        url: this.$t("vueA11yPage2019.webA11y.link02.link"),
        isExternal: true
      }
    };
  }
};
</script>
