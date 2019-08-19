<template>
  <section id="career">
    <h3>
      <a class="anchor" aria-hidden="true" href="#career">
        <anchor-icon />
      </a>
      {{ $t("heading.career") }}
    </h3>
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
        <a
          href="https://www.wantedly.com/users/347527"
          target="_blank"
          rel="noopener"
        >{{ $t("career.wantedly") }}</a>
      </li>
      <li role="listitem">
        <a
          href="https://scrapbox.io/yamanoku/Skill_Sets"
          target="_blank"
          rel="noopener"
        >{{ $t("career.skillSet") }}</a>
      </li>
    </ul>
  </section>
</template>
