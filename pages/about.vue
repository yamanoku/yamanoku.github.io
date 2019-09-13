<template>
  <main role="main" id="main">
    <h1 id="about_heading">{{$t("aboutPage.title")}}</h1>
    <p>{{$t("aboutPage.description")}}</p>
    <section class="toc" id="about:toc" aria-labelledby="about:toc_heading">
      <h2 id="about:toc_heading">{{$t("aboutPage.heading.toc")}}</h2>
      <ul role="list">
        <li role="listitem">
          <a href="#about:implementation">{{$t("aboutPage.heading.implementation")}}</a>
          <ul role="list">
            <li role="listitem">
              <a href="#about:tech-stack">{{$t("heading.techStack")}}</a>
            </li>
            <li role="listitem">
              <a href="#about:markup">{{$t("aboutPage.subHeading.markup")}}</a>
            </li>
            <li role="listitem">
              <a href="#about:component-oriented">{{$t("aboutPage.subHeading.components")}}</a>
            </li>
            <li role="listitem">
              <a href="#about:pwa">{{$t("aboutPage.subHeading.pwa")}}</a>
            </li>
            <li role="listitem">
              <a href="#about:i18n">{{$t("aboutPage.subHeading.i18n")}}</a>
            </li>
          </ul>
        </li>
        <li role="listitem">
          <a href="#about:design">{{$t("aboutPage.heading.design")}}</a>
          <ul role="list">
            <li role="listitem">
              <a href="#about:do-not-over-design">{{$t("aboutPage.subHeading.overdesign")}}</a>
            </li>
            <li role="listitem">
              <a href="#about:font-size">{{$t("aboutPage.subHeading.fontSize")}}</a>
            </li>
            <li role="listitem">
              <a href="#about:color-contrast">{{$t("aboutPage.subHeading.contrast")}}</a>
            </li>
            <li role="listitem">
              <a href="#about:max-width">{{$t("aboutPage.subHeading.maxWidth")}}</a>
            </li>
            <li role="listitem">
              <a href="#about:vertical-rhythm">{{$t("aboutPage.subHeading.verticalRhythm")}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <section id="about:implementation" aria-labelledby="about:implementation_heading">
      <h2 id="about:implementation_heading">
        {{$t("aboutPage.heading.implementation")}}
      </h2>
      <tech-stack />
      <markup-article />
      <component-oriented />
      <pwa-article />
      <i18n-article />
    </section>
    <section id="about:design" aria-labelledby="about:design_heading">
      <h2 id="about:design_heading">
        {{$t("aboutPage.heading.design")}}
      </h2>
      <p>{{$t("aboutPage.designDescription")}}</p>
      <do-not-over-design />
      <font-size-article />
      <color-contrast />
      <max-width-article />
      <vertical-rhythm />
    </section>
    <nuxt-link :to="localePath({ name: 'index'})">{{$t("backTop")}}</nuxt-link>
    <local-switch-component />
  </main>
</template>

<script>
// section-implementation
import TechStack from "~/components/about-articles/TechStack.vue";
import MarkupArticle from "~/components/about-articles/Markup.vue";
import ComponentOriented from "~/components/about-articles/ComponentOriented.vue";
import PwaArticle from "~/components/about-articles/PWA.vue";
import I18nArticle from "~/components/about-articles/I18n.vue";

// section-design
import DoNotOverDesign from "~/components/about-articles/DoNotOverDesign.vue";
import FontSizeArticle from "~/components/about-articles/FontSize.vue";
import ColorContrast from "~/components/about-articles/ColorContrast.vue";
import MaxWidthArticle from "~/components/about-articles/MaxWidth.vue";
import VerticalRhythm from "~/components/about-articles/VerticalRhythm.vue";

import LocalSwitchComponent from "~/components/common/LocalSwitch.vue";

import Meta from "~/mixins/meta";

export default {
  mixins: [Meta],
  data () {
    return {
      meta: {
        title: this.$t("aboutPage.title"),
        description: this.$t("aboutPage.description")
      },
    }
  },
  components: {
    LocalSwitchComponent,
    TechStack,
    MarkupArticle,
    ComponentOriented,
    PwaArticle,
    I18nArticle,
    DoNotOverDesign,
    FontSizeArticle,
    ColorContrast,
    MaxWidthArticle,
    VerticalRhythm
  }
};
</script>

<style scoped>
.toc {
  border-left: 8px solid var(--gray);
  padding-left: var(--rhythm);
}
@media (prefers-color-scheme: dark) {
  .toc {
    border-left: 8px solid var(--white);
  }
}
</style>
