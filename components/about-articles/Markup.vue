<template>
  <article id="markup">
    <h4 class="anchor-heading">
      <a class="anchor" href="#markup">
        <anchor-icon />
      </a>
      {{$t("aboutPage.subHeading.markup")}}
    </h4>
    <p>{{$t("aboutPage.markup.desc01")}}</p>
    <p>{{$t("aboutPage.markup.desc02")}}</p>
    <highlight-code id="wai-aria-in-html" lang="html">{{waiAria}}</highlight-code>
    <ul role="list">
      <li role="listitem">
        <a
          href="https://github.com/yamanoku/yamanoku.github.io/blob/nuxt/pages/about.vue#L80-L85"
          target="_blank"
          rel="noopener"
        >
          about.vue
          <github-icon />
        </a>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  data() {
    return {
      waiAria: `
<h4 id="markup">
  <a class="anchor" aria-hidden="true" href="#markup"> <!-- Not ignored in the accessibility tree -->
    <anchor-icon />
  </a>
  {{$t("aboutPage.subHeading.markup")}}
</h4>
      `
    };
  }
};
</script>
