<template>
  <section id="career" aria-labelledby="career_heading">
    <h2 id="career_heading">
      {{ $t("heading.career") }}
    </h2>
    <p>{{ $t("career.desc01") }}</p>
    <p>{{ $t("career.desc02") }}</p>
    <p>{{ $t("career.desc03") }}</p>
    <h3 id="related:career_heading">{{ $t("heading.relatedList") }}</h3>
    <ul aria-labelledby="related:career_heading">
      <li>
        <a
          href="https://github.com/yamanoku/Curriculum-Vitae/blob/master/README.md"
          target="_blank"
          rel="noopener"
        >
          {{ $t("career.curriculumVitae") }}
          <github-icon />
        </a>
      </li>
      <li>
        <a
          href="https://scrapbox.io/yamanoku/%E7%B5%8C%E9%A8%93%E3%81%AE%E3%81%82%E3%82%8B%E6%8A%80%E8%A1%93"
          target="_blank"
          rel="noopener"
        >
          {{ $t("career.experiencedSkills") }}
          <open-new-icon />
        </a>
      </li>
      <li>
        <a
          href="https://www.wantedly.com/id/yamanoku"
          target="_blank"
          rel="noopener"
        >
          {{ $t("career.wantedly") }}
          <open-new-icon />
        </a>
      </li>
      <li>
        <a
          href="https://lapras.com/public/ZQJMZYO"
          target="_blank"
          rel="noopener"
        >
          {{ $t("career.lapras") }}
          <open-new-icon />
        </a>
      </li>
      <li>
        <a
          href="https://youtrust.jp/users/57ea573ffca186c3b339f1739915f40b"
          target="_blank"
          rel="noopener"
        >
          {{ $t("career.youtrust") }}
          <open-new-icon />
        </a>
      </li>
    </ul>
  </section>
</template>
