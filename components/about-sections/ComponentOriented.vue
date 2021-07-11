<template>
  <section
    id="about:component-oriented"
    aria-labelledby="about:component-oriented_heading"
  >
    <h3 id="about:component-oriented_heading">
      {{ $t("aboutPage.subHeading.components") }}
    </h3>
    <p>{{ $t("aboutPage.components.desc01") }}</p>
    <details>
      <summary>{{ $t("details.summary") }}</summary>
      <p>{{ $t("aboutPage.components.desc02") }}</p>
      <figure>
        <highlightjs
          language="javascript"
          id="slide-components"
          :code="slide"
        />
        <figcaption>
          <a
            href="https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/components/global/SlideList.vue#L2-L21"
            target="_blank"
            rel="noopener"
          >
            SlideList.vue
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
      slide: `
<ul>
  <li v-for="list in listItem" :key="list.index">
    <template v-if="list.datetime">
      <span class="time">{{
        dateStirngReplace(list.datetime)
      }}</span>
      -
    </template>
    <template v-else-if="list.created_at">
      <span class="time">{{
        dateStirngReplace(list.created_at)
      }}</span>
      -
    </template>
    <a :href="list.url" target="_blank" rel="noopener" lang="ja">
      {{ list.title }}
      <open-new-icon />
    </a>
  </li>
</ul>
      `
    };
  }
};
</script>
