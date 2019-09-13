<template>
  <section id="career" aria-labelledby="career_heading">
    <h2 id="career_heading">
      {{ $t("heading.career") }}
    </h2>
    <p>{{ $t("career.desc01") }}</p>
    <p>{{ $t("career.desc02") }}</p>
    <p>{{ $t("career.desc03") }}</p>
    <p>{{ $t("career.desc04") }}</p>
    <ul role="list">
      <li role="listitem">
        <a
          href="https://github.com/yamanoku/Curriculum-Vitae/blob/master/README.md"
          target="_blank"
          rel="noopener"
        >
          {{ $t("career.curriculumVitae") }}
          <github-icon />
        </a>
      </li>
      <li role="listitem">
        <a href="https://scrapbox.io/yamanoku/Skill_Sets" target="_blank" rel="noopener">
          {{ $t("career.skillSet") }}
          <article-icon />
        </a>
      </li>
      <li role="listitem">
        <a href="https://www.wantedly.com/users/347527" target="_blank" rel="noopener">
          {{ $t("career.wantedly") }}
          <open-new-icon />
        </a>
      </li>
      <li role="listitem">
        <a href="https://lapras.com/public/ZQJMZYO" target="_blank" rel="noopener">
          {{ $t("career.lapras") }}
          <open-new-icon />
        </a>
      </li>
    </ul>
  </section>
</template>
