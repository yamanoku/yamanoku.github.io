<template>
  <article id="i18n" aria-labelledby="about:i18n_heading">
    <h3 class="anchor-heading" id="about:i18n_heading">
      <a class="anchor" href="#i18n">
        <anchor-icon />
      </a>
      {{$t("aboutPage.subHeading.i18n")}}
    </h3>
    <p>{{$t("aboutPage.i18n.desc01")}}</p>
    <p>{{$t("aboutPage.i18n.desc02")}}</p>
    <ul role="list">
      <li role="listitem">
        <a
          href="https://github.com/yamanoku/yamanoku.github.io/projects/2"
          target="_blank"
          rel="noopener"
          lang="en-US"
        >
          i18n Project
          <github-icon />
        </a>
      </li>
    </ul>
  </article>
</template>
