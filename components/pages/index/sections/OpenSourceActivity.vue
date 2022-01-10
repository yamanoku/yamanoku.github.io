<template>
  <section
    id="open-source-activity"
    aria-labelledby="open-source-activity_heading"
  >
    <global-heading-component
      id="open-source-activity_heading"
      :heading-level="2"
      :heading-text="$t('heading.openSourceActivity')"
    />
    <p>{{ $t("openSourceActivity.desc01") }}</p>
    <ul>
      <li>
        <a
          href="https://www.notion.so/yamanoku/2021-2c4fa51b832645f494698ebd11e069f9"
          target="_blank"
          rel="noopener"
        >
          {{ $t("openSourceActivity.link01") }}
          <external-link-icon />
        </a>
      </li>
    </ul>
    <global-donate-component />
  </section>
</template>

<script>
export default {
  name: "IndexSectionsOpenSourceActivity"
};
</script>
