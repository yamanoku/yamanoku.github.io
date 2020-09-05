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
          <p>{{ $t("aboutPage.markup.caption") }}</p>
          <ul role="list">
            <li role="listitem">
              <a
                href="https://www.w3.org/TR/wai-aria-practices-1.1/#naming_role_guidance"
                target="_blank"
                rel="noopener"
                lang="en-US"
              >
                5.3.4 Accessible Name Guidance by Role - WAI-ARIA Authoring
                Practices 1.1
                <open-new-icon />
              </a>
            </li>
          </ul>
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
    };
  }
};
</script>
