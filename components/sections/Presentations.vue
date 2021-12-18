<template>
  <section id="presentations" aria-labelledby="presentations_heading">
    <h2 id="presentations_heading">
      {{ $t("heading.presentations.title") }}
    </h2>
    <template v-if="this.$i18n.locale !== 'ja'">
      <em>{{ $t("onlyJPText") }}</em>
    </template>
    <h3 id="presentations-stage">
      {{ $t("heading.presentations.stage") }}
    </h3>
    <global-slide-list :listArray="listStage" />
    <h3 id="presentations-write">
      {{ $t("heading.presentations.write") }}
    </h3>
    <global-slide-list :listArray="listWrite" />
    <i18n tag="p" path="archivePage.externalLink">
      <template v-slot:title>
        <a href="https://archives.yamanoku.net" target="_blank" rel="noopener"
          >{{ $t("archivePage.title") }}<open-new-icon />
        </a>
      </template>
    </i18n>
  </section>
</template>

<script>
import { listStage } from "~/assets/presentations/liststage";
import { listWrite } from "~/assets/presentations/listwrite";

export default {
  name: "SectionsPresentations",
  data() {
    return {
      listStage,
      listWrite,
    };
  }
};
</script>

<style scoped>
svg {
  width: 12px;
  height: 12px;
  margin: 0 0 -1px 4px;
}
</style>
