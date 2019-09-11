<template>
  <article id="about:markup" about:markupia-labelledby="about:markup_heading">
    <h3 class="anchor-heading" id="about:markup_heading">
      <div class="anchor">
        <a href="#about:markup">
          <anchor-icon />
        </a>
      </div>
      {{$t("aboutPage.subHeading.markup")}}
    </h3>
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
<h4 id="about:markup">
  <div class="anchor" aria-hidden="true"> <!-- Not ignored in the accessibility tree -->
    <a href="#about:markup">
      <anchor-icon />
    </a>
  </div>
  {{$t("aboutPage.subHeading.markup")}}
</h4>
      `
    };
  }
};
</script>
