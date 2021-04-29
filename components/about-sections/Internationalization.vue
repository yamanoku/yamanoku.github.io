<template>
  <section
    id="about:internationalization"
    aria-labelledby="about:internationalization_heading"
  >
    <h3 id="about:internationalization_heading">
      {{ $t("aboutPage.subHeading.i18n") }}
    </h3>
    <p>{{ $t("aboutPage.i18n.desc01") }}</p>
    <details>
      <summary>{{ $t("details.summary") }}</summary>
      <p>{{ $t("aboutPage.i18n.desc02") }}</p>
      <figure>
        <highlightjs
          id="only-jp-rendering"
          lang="javascript"
          :code="onlyJPText"
        />
        <figcaption>
          <a
            href="https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/components/sections/Presentations.vue#L6-L8"
            target="_blank"
            rel="noopener"
          >
            Slides.vue
            <github-icon />
          </a>
        </figcaption>
      </figure>
    </details>
  </section>
</template>

<script>
export default {
  data() {
    return {
      onlyJPText: `
        <template v-if="this.$i18n.locale !== 'ja'">
          <em>{{ $t("onlyJPText") }}</em>
        </template>
      `
    };
  }
};
</script>
