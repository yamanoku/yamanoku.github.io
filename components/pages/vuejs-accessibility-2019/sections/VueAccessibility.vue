<template>
  <section id="vuejs-and-web-accessibility:about-accessibility-with-vuejs-2019">
    <global-heading-component
      :heading-level="2"
      :heading-text="$t('vueA11yPage2019.heading.vueA11y')"
    />
    <p>
      {{ $t("vueA11yPage2019.vueA11y.desc01") }}
    </p>
    <global-heading-component
      :heading-level="3"
      :heading-text="$t('vueA11yPage2019.subHeading.vueA11y')"
    />
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
      <global-link-component :link-object="vueGuideLink01" />
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
      <global-link-component :link-object="vueGuideLink02" />
    </blockquote>
    <p>{{ $t("vueA11yPage2019.vueA11y.desc05") }}</p>
    <global-list-component :list-array="VueAccessibilityListItem" />
    <p>{{ $t("vueA11yPage2019.vueA11y.desc06") }}</p>
    <global-link-component :link-object="githubIssueLink" />
    <p>{{ $t("vueA11yPage2019.vueA11y.desc07") }}</p>
    <global-link-component :link-object="accessibilityMarkdownLink" />
    <global-heading-component :heading-level="3" heading-text="Vue a11y" />
    <p>{{ $t("vueA11yPage2019.vueA11y.desc08") }}</p>
    <figure>
      <picture>
        <source
          srcset="~/assets/img/vue-a11y-2019-vuea11ycom.webp"
          type="image/webp"
        />
        <img
          src="~/assets/img/vue-a11y-2019-vuea11ycom.png"
          width="1920"
          height="1101"
          :alt="$t('vueA11yPage2019.vueA11y.imgAlt01')"
          decoding="async"
        />
      </picture>
      <figcaption>Vue <abbr title="accessibility">a11y</abbr></figcaption>
    </figure>
    <p>{{ $t("vueA11yPage2019.vueA11y.desc09") }}</p>
  </section>
</template>

<script>
export default {
  name: "VueA11y2019VueAccessibility",
  data() {
    return {
      vueGuideLink01: {
        title:
          "Components Basics — Listening-to-Child-Components-Events — Vue.js",
        url: "https://vuejs.org/v2/guide/components.html#Listening-to-Child-Components-Events",
        isExternal: true
      },
      vueGuideLink02: {
        title: "Editable SVG Icon Systems — Base Example — Vue.js",
        url: "https://vuejs.org/v2/cookbook/editable-svg-icons.html#Base-Example",
        isExternal: true
      },
      githubIssueLink: {
        title: "Accessibility docs · Issue #974 · vuejs/vuejs.org",
        url: "https://github.com/vuejs/vuejs.org/issues/974",
        isExternal: true,
        isGitHubLink: true
      },
      accessibilityMarkdownLink: {
        title:
          "vuejs.org/accessibility.md at a11y-docs · callumacrae/vuejs.org",
        url: "https://github.com/callumacrae/vuejs.org/blob/a11y-docs/src/v2/guide/accessibility.md",
        isExternal: true,
        isGitHubLink: true
      },
      VueAccessibilityListItem: [
        {
          title: this.$t("vueA11yPage2019.vueA11y.listitem01.text"),
          url: this.$t("vueA11yPage2019.vueA11y.listitem01.link"),
          isExternal: true
        },
        {
          title: "Angular - Accessibility in Angular",
          url: "https://angular.io/guide/accessibility",
          isExternal: true
        }
      ]
    };
  }
};
</script>
