<template>
  <section id="slides" aria-labelledby="slides_heading">
    <h2 id="slides_heading">
      {{ $t("heading.slides.title") }}
    </h2>
    <template v-if="this.$i18n.locale !== 'ja'">
      <em>{{ $t("onlyJPText") }}</em>
    </template>
    <h3 id="slides-stage">
      {{ $t("heading.slides.stage") }}
    </h3>
    <common-slide-list :listArray="listStage" />
    <h3 id="slides-study">
      {{ $t("heading.slides.study") }}
    </h3>
    <common-slide-list :listArray="listStudy" />
    <h3 id="slides-write">
      {{ $t("heading.slides.write") }}
    </h3>
    <common-slide-list :listArray="listWrite" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      listStage: this.$store.state.slide.stage,
      listStudy: this.$store.state.slide.study,
      listWrite: this.$store.state.slide.write
    }
  }
}
</script>
