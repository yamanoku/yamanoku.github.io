<template>
  <main role="main" id="main">
    <h1 id="about_heading">{{ $t("aboutPage.title") }}</h1>
    <p>{{ $t("aboutPage.description") }}</p>
    <section class="toc" id="about:toc" aria-labelledby="about:toc_heading">
      <h2 id="about:toc_heading">{{ $t("aboutPage.heading.toc") }}</h2>
      <ul role="list">
        <li role="listitem">
          <a href="#about:implementation">{{
            $t("aboutPage.heading.implementation")
          }}</a>
          <ul role="list">
            <li role="listitem">
              <a href="#about:tech-stack">{{ $t("heading.techStack") }}</a>
            </li>
            <li role="listitem">
              <a href="#about:markup">{{
                $t("aboutPage.subHeading.markup")
              }}</a>
            </li>
            <li role="listitem">
              <a href="#about:component-oriented">{{
                $t("aboutPage.subHeading.components")
              }}</a>
            </li>
            <li role="listitem">
              <a href="#about:progressive-web-application">{{
                $t("aboutPage.subHeading.pwa")
              }}</a>
            </li>
            <li role="listitem">
              <a href="#about:internationalization">{{
                $t("aboutPage.subHeading.i18n")
              }}</a>
            </li>
          </ul>
        </li>
        <li role="listitem">
          <a href="#about:design">{{ $t("aboutPage.heading.design") }}</a>
          <ul role="list">
            <li role="listitem">
              <a href="#about:do-not-over-design">{{
                $t("aboutPage.subHeading.overdesign")
              }}</a>
            </li>
            <li role="listitem">
              <a href="#about:font-size">{{
                $t("aboutPage.subHeading.fontSize")
              }}</a>
            </li>
            <li role="listitem">
              <a href="#about:color-contrast">{{
                $t("aboutPage.subHeading.contrast")
              }}</a>
            </li>
            <li role="listitem">
              <a href="#about:max-width">{{
                $t("aboutPage.subHeading.maxWidth")
              }}</a>
            </li>
            <li role="listitem">
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
      <about-articles-tech-stack />
      <about-articles-markup />
      <about-articles-component-oriented />
      <about-articles-progressive-web-application />
      <about-articles-internationalization />
    </section>
    <section id="about:design" aria-labelledby="about:design_heading">
      <h2 id="about:design_heading">
        {{ $t("aboutPage.heading.design") }}
      </h2>
      <p>{{ $t("aboutPage.designDescription") }}</p>
      <about-articles-do-not-over-design />
      <about-articles-font-size />
      <about-articles-color-contrast />
      <about-articles-max-width />
      <about-articles-vertical-rhythm />
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
  border-left: 8px solid var(--gray);
  padding-left: calc(var(--rhythm) * 3);
}
@media (prefers-color-scheme: dark) {
  .toc {
    border-left: 8px solid var(--white);
  }
}
</style>
