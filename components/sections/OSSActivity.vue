<template>
  <section id="oss-activity" aria-labelledby="oss-activity_heading">
    <h2 id="oss-activity_heading">
      {{ $t("heading.ossActivity") }}
    </h2>
    <p>{{ $t("ossActivity.desc01") }}</p>
    <ul>
      <li>
        <a
          href="https://www.notion.so/yamanoku/OSS-2021-2c4fa51b832645f494698ebd11e069f9"
          target="_blank"
          rel="noopener"
        >
          {{ $t("ossActivity.link01") }}
          <open-new-icon />
        </a>
      </li>
    </ul>
    <global-donate-component />
  </section>
</template>
