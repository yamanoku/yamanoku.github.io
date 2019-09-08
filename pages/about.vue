<template>
  <main>
    <h2>{{$t("aboutPage.title")}}</h2>
    <p>{{$t("aboutPage.description")}}</p>
    <section id="toc">
      <h3>{{$t("aboutPage.heading.toc")}}</h3>
      <ul role="list">
        <li role="listitem">
          <a href="#implementation">{{$t("aboutPage.heading.implementation")}}</a>
          <ul role="list">
            <li role="listitem">
              <a href="#tech-stack">{{$t("heading.techStack")}}</a>
            </li>
            <li role="listitem">
              <a href="#markup">{{$t("aboutPage.subHeading.markup")}}</a>
            </li>
            <li role="listitem">
              <a href="#component-oriented">{{$t("aboutPage.subHeading.components")}}</a>
            </li>
            <li role="listitem">
              <a href="#pwa">{{$t("aboutPage.subHeading.pwa")}}</a>
            </li>
            <li role="listitem">
              <a href="#i18n">{{$t("aboutPage.subHeading.i18n")}}</a>
            </li>
          </ul>
        </li>
        <li role="listitem">
          <a href="#design">{{$t("aboutPage.heading.design")}}</a>
          <ul role="list">
            <li role="listitem">
              <a href="#do-not-over-design">{{$t("aboutPage.subHeading.overdesign")}}</a>
            </li>
            <li role="listitem">
              <a href="#font-size">{{$t("aboutPage.subHeading.fontSize")}}</a>
            </li>
            <li role="listitem">
              <a href="#color-contrast">{{$t("aboutPage.subHeading.contrast")}}</a>
            </li>
            <li role="listitem">
              <a href="#max-width">{{$t("aboutPage.subHeading.maxWidth")}}</a>
            </li>
            <li role="listitem">
              <a href="#vertical-rhythm">{{$t("aboutPage.subHeading.verticalRhythm")}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <section id="implementation">
      <h3 class="anchor-heading">
        <a class="anchor" href="#implementation">
          <anchor-icon />
        </a>
        {{$t("aboutPage.heading.implementation")}}
      </h3>
      <tech-stack />
      <markup-article />
      <component-oriented />
      <pwa-article />
      <i18n-article />
    </section>
    <section id="design">
      <h3 class="anchor-heading">
        <a class="anchor" href="#design">
          <anchor-icon />
        </a>
        {{$t("aboutPage.heading.design")}}
      </h3>
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
h2 + p {
  margin: var(--rhythm) 0;
  font-size: 1rem;
  line-height: var(--rhythm);
}
</style>
