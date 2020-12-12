<template>
  <article
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
      `
    };
  }
};
</script>
