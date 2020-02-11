<template>
  <article
    id="about:component-oriented"
    aria-labelledby="about:component-oriented_heading"
  >
    <h3 id="about:component-oriented_heading">
      {{ $t("aboutPage.subHeading.components") }}
    </h3>
    <p>{{ $t("aboutPage.components.desc01") }}</p>
    <figure>
      <highlight-code id="slide-components" lang="vue">{{
        slide
      }}</highlight-code>
      <figcaption>
        <a
          href="https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/components/lists/SlideList.vue#L1-L18"
          target="_blank"
          rel="noopener"
        >
          SlideList.vue
          <github-icon />
        </a>
      </figcaption>
    </figure>
    <p>{{ $t("aboutPage.components.desc02") }}</p>
    <p>{{ $t("aboutPage.components.desc03") }}</p>
    <figure>
      <highlight-code id="api-for-store" lang="javascript">{{
        api
      }}</highlight-code>
      <figcaption>
        <a
          href="https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/components/products/A11yBeginner.vue#L52-L58"
          target="_blank"
          rel="noopener"
        >
          A11yBeginner.vue
          <github-icon />
        </a>
      </figcaption>
    </figure>
  </article>
</template>

<script>
export default {
  data() {
    return {
      slide: `
<ul role="list">
  <li role="listitem" v-for="list in listItem" :key="list.title">
    <template v-if="list.datetime">
      <time :datetime="list.datetime">
        {{dateReplace(list.datetime)}}
      </time>
      -
    </template>
    <template v-if="list.created_at">
      <time :datetime="list.created_at">
        {{dateCreated(list.created_at)}}
      </time>
      -
    </template>
    <a :href="list.url" target="_blank" rel="noopener" lang="ja">
      {{list.title}}
    </a>
  </li>
</ul>
      `,
      api: `
export default {
  data() {
    return {
      a11ybookIssue: this.$store.state.github.a11y_issues,
    };
  }
};
      `
    }
  }
}
</script>
