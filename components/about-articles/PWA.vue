<template>
  <article
    id="about:progressive-web-application"
    aria-labelledby="about:progressive-web-application_heading"
  >
    <h3 id="about:progressive-web-application_heading">
      {{ $t("aboutPage.subHeading.pwa") }}
    </h3>
    <p>{{ $t("aboutPage.pwa.desc01") }}</p>
    <p>{{ $t("aboutPage.pwa.desc02") }}</p>
    <ul>
      <li>
        <a
          href="https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/"
          target="_blank"
          rel="noopener"
          lang="en-US"
        >
          Your First Progressive Web App | Web Fundamentals | Google Developers
          <open-new-icon />
        </a>
      </li>
    </ul>
  </article>
</template>
