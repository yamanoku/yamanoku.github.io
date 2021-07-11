<template>
  <section
    id="about:do-not-over-design"
    aria-labelledby="about:do-not-over-design_heading"
  >
    <h3 id="about:do-not-over-design_heading">
      {{ $t("aboutPage.subHeading.overdesign") }}
    </h3>
    <p>{{ $t("aboutPage.overdesign.desc01") }}</p>
    <p>{{ $t("aboutPage.overdesign.desc02") }}</p>
    <ul>
      <li>
        <a
          href="//motherfuckingwebsite.com/"
          target="_blank"
          rel="noopener"
          lang="en-US"
        >
          This is a motherfucking website.
          <open-new-icon />
        </a>
      </li>
    </ul>
  </section>
</template>
