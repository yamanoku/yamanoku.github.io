<template>
  <article id="about:pwa" aria-labelledby="about:pwa_heading">
    <h3 id="about:pwa_heading">
      {{$t("aboutPage.subHeading.pwa")}}
    </h3>
    <p>{{$t("aboutPage.pwa.desc01")}}</p>
    <p>{{$t("aboutPage.pwa.desc02")}}</p>
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
