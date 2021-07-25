<template>
  <main id="main">
    <h1 id="about_heading">{{ $t("aboutPage.title") }}</h1>
    <p>{{ $t("aboutPage.description") }}</p>
    <section class="toc" id="about:toc" aria-labelledby="about:toc_heading">
      <h2 id="about:toc_heading">{{ $t("aboutPage.heading.toc") }}</h2>
      <ul>
        <li>
          <a href="#about:implementation">{{
            $t("aboutPage.heading.implementation")
          }}</a>
          <ul>
            <li>
              <a href="#about:tech-stack">{{ $t("heading.techStack") }}</a>
            </li>
            <li>
              <a href="#about:markup">{{
                $t("aboutPage.subHeading.markup")
              }}</a>
            </li>
            <li>
              <a href="#about:component-oriented">{{
                $t("aboutPage.subHeading.components")
              }}</a>
            </li>
            <li>
              <a href="#about:progressive-web-application">{{
                $t("aboutPage.subHeading.pwa")
              }}</a>
            </li>
            <li>
              <a href="#about:internationalization">{{
                $t("aboutPage.subHeading.i18n")
              }}</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#about:design">{{ $t("aboutPage.heading.design") }}</a>
          <ul>
            <li>
              <a href="#about:do-not-over-design">{{
                $t("aboutPage.subHeading.overdesign")
              }}</a>
            </li>
            <li>
              <a href="#about:font-size">{{
                $t("aboutPage.subHeading.fontSize")
              }}</a>
            </li>
            <li>
              <a href="#about:color-contrast">{{
                $t("aboutPage.subHeading.contrast")
              }}</a>
            </li>
            <li>
              <a href="#about:max-width">{{
                $t("aboutPage.subHeading.maxWidth")
              }}</a>
            </li>
            <li>
              <a href="#about:vertical-rhythm">{{
                $t("aboutPage.subHeading.verticalRhythm")
              }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <section
      id="about:implementation"
      aria-labelledby="about:implementation_heading"
    >
      <h2 id="about:implementation_heading">
        {{ $t("aboutPage.heading.implementation") }}
      </h2>
      <about-sections-tech-stack />
      <about-sections-markup />
      <about-sections-component-oriented />
      <about-sections-progressive-web-application />
      <about-sections-internationalization />
    </section>
    <section id="about:design" aria-labelledby="about:design_heading">
      <h2 id="about:design_heading">
        {{ $t("aboutPage.heading.design") }}
      </h2>
      <p>{{ $t("aboutPage.designDescription") }}</p>
      <about-sections-do-not-over-design />
      <about-sections-font-size />
      <about-sections-color-contrast />
      <about-sections-max-width />
      <about-sections-vertical-rhythm />
    </section>
    <nuxt-link :to="localePath({ name: 'index' })">{{
      $t("backTop")
    }}</nuxt-link>
    <global-local-switch />
  </main>
</template>

<script>
import Meta from "~/mixins/meta";

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: this.$t("aboutPage.title"),
        description: this.$t("aboutPage.description"),
        image: "https://yamanoku.net/ogp/ogp-about@2x.png",
        imageAlt: this.$t("aboutPage.title")
      }
    };
  }
};
</script>

<style scoped>
.toc {
  border-left: 8px solid var(--y-white-medium);
  padding-left: calc(var(--y-rhythm-base) * 3);
}
@media (prefers-color-scheme: dark) {
  .toc {
    border-left: 8px solid var(--y-white-low);
  }
}
</style>
