<template>
  <section id="open-source-activity" aria-labelledby="open-source-activity_heading">
    <h2 id="open-source-activity_heading">
      {{ $t("heading.openSourceActivity") }}
    </h2>
    <p>{{ $t("openSourceActivity.desc01") }}</p>
    <ul>
      <li>
        <a
          href="https://www.notion.so/yamanoku/2021-2c4fa51b832645f494698ebd11e069f9"
          target="_blank"
          rel="noopener"
        >
          {{ $t("openSourceActivity.link01") }}
          <open-new-icon />
        </a>
      </li>
    </ul>
    <global-donate-component />
  </section>
</template>
