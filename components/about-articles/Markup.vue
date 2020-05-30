<template>
  <article id="about:markup" aria-labelledby="about:markup_heading">
    <h3 id="about:markup_heading">{{ $t("aboutPage.subHeading.markup") }}</h3>
    <p>{{ $t("aboutPage.markup.desc01") }}</p>
    <p>{{ $t("aboutPage.markup.desc02") }}</p>
    <details>
      <summary>{{ $t("details.summary") }}</summary>
      <figure>
        <highlight-code lang="html">{{ waiAria }}</highlight-code>
        <figcaption>
          {{ $t("aboutPage.markup.caption") }}<br />
          <a
            href="https://www.w3.org/TR/wai-aria-practices-1.1/#naming_role_guidance"
            lang="en-US"
            >5.3.4 Accessible Name Guidance by Role - WAI-ARIA Authoring
            Practices 1.1</a
          >
        </figcaption>
      </figure>
    </details>
  </article>
</template>

<script>
export default {
  data() {
    return {
      waiAria: `
  <article id="about:markup" aria-labelledby="about:markup_heading">
    <h3 id="about:markup_heading">
      {{$t("aboutPage.subHeading.markup")}}
    </h3>
  </article>
      `
    }
  }
}
</script>
