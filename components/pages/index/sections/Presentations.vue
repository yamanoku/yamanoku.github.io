<template>
  <section id="presentations" aria-labelledby="presentations_heading">
    <global-heading-component
      id="presentations_heading"
      :heading-level="2"
      :heading-text="$t('heading.presentations.title')"
    />
    <template v-if="this.$i18n.locale !== 'ja'">
      <em>{{ $t("onlyJPText") }}</em>
    </template>
    <h3 id="presentations-stage">
      {{ $t("heading.presentations.stage") }}
    </h3>
    <global-list-component :listArray="listStage" />
    <global-heading-component
      id="presentations-write"
      :heading-level="3"
      :heading-text="$t('heading.presentations.write')"
    />
    <global-list-component :listArray="listWrite" />
    <i18n tag="p" path="archivePage.externalLink">
      <template v-slot:title>
        <a href="https://archives.yamanoku.net" target="_blank" rel="noopener"
          >{{ $t("archivePage.title") }}<external-link-icon />
        </a>
      </template>
    </i18n>
  </section>
</template>

<script>
import { listStage } from "~/assets/presentations/liststage";
import { listWrite } from "~/assets/presentations/listwrite";

export default {
  name: "IndexSectionsPresentations",
  data() {
    return {
      listStage,
      listWrite
    };
  }
};
</script>
