<template>
  <section id="vuejs-and-web-accessibility:about-accessibility-with-vuejs">
    <h2>{{ $t("vueA11yPage2019.heading.vueA11y") }}</h2>
    <p>
      {{ $t("vueA11yPage2019.vueA11y.desc01") }}
    </p>
    <h3>{{ $t("vueA11yPage2019.subHeading.vueA11y") }}</h3>
    <p>{{ $t("vueA11yPage2019.vueA11y.desc02") }}</p>
    <p>{{ $t("vueA11yPage2019.vueA11y.desc03") }}</p>
    <p>{{ $t("vueA11yPage2019.vueA11y.desc04") }}</p>
    <blockquote lang="en">
      <p>
        As we develop our &lt;blog-post&gt; component, some features may require
        communicating back up to the parent. For example, we may decide to
        include an
        <b>accessibility</b> feature to enlarge the text of blog posts, while
        leaving the rest of the page its default size:
      </p>
      <a
        href="https://vuejs.org/v2/guide/components.html#Listening-to-Child-Components-Events"
        target="_blank"
        rel="noopener"
        >Components Basics — Listening-to-Child-Components-Events —
        Vue.js<open-new-icon
      /></a>
    </blockquote>
    <blockquote lang="en">
      <p>
        You can use this base icon as is- the only thing you might need to
        update is the viewBox depending on the viewBox of your icons. In the
        base, we’re making the width, height, iconColor, and name of the icon
        props so that it can be dynamically updated with props. The name will be
        used for both the &lt;title&gt; content and its id for
        <b>accessibility</b>.
      </p>
      <a
        href="https://vuejs.org/v2/cookbook/editable-svg-icons.html#Base-Example"
        target="_blank"
        rel="noopener"
        >Editable SVG Icon Systems — Base Example — Vue.js<open-new-icon
      /></a>
    </blockquote>
    <p>{{ $t("vueA11yPage2019.vueA11y.desc05") }}</p>
    <ul>
      <li>
        <a
          :href="$t('vueA11yPage2019.vueA11y.listitem01.link')"
          target="_blank"
          rel="noopener"
          >{{ $t("vueA11yPage2019.vueA11y.listitem01.text") }}<open-new-icon
        /></a>
      </li>
      <li>
        <a
          href="https://angular.io/guide/accessibility"
          target="_blank"
          rel="noopener"
          lang="en"
          >Angular - Accessibility in Angular<open-new-icon
        /></a>
      </li>
    </ul>
    <p>{{ $t("vueA11yPage2019.vueA11y.desc06") }}</p>
    <a
      href="https://github.com/vuejs/vuejs.org/issues/974"
      target="_blank"
      rel="noopener"
      lang="en"
      >Accessibility docs · Issue #974 · vuejs/vuejs.org<open-new-icon
    /></a>
    <p>{{ $t("vueA11yPage2019.vueA11y.desc07") }}</p>
    <a
      href="https://github.com/callumacrae/vuejs.org/blob/a11y-docs/src/v2/guide/accessibility.md"
      target="_blank"
      rel="noopener"
      lang="en"
      >vuejs.org/accessibility.md at a11y-docs ·
      callumacrae/vuejs.org<open-new-icon
    /></a>
    <h3 lang="en">Vue a11y</h3>
    <p>{{ $t("vueA11yPage2019.vueA11y.desc08") }}</p>
    <figure>
      <picture>
        <source
          srcset="~/assets/img/vue-a11y-2019-vuea11ycom.webp"
          type="image/webp"
        />
        <img
          src="~/assets/img/vue-a11y-2019-vuea11ycom.png"
          height="360"
          :alt="$t('vueA11yPage2019.vueA11y.imgAlt01')"
          loading="lazy"
        />
      </picture>
      <figcaption>
        <a href="https://vue-a11y-2019.com/" target="_blank" rel="noopener" lang="en"
          >Vue a11y<open-new-icon
        /></a>
      </figcaption>
    </figure>
    <p>{{ $t("vueA11yPage2019.vueA11y.desc09") }}</p>
  </section>
</template>
