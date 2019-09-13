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
    <slide-list :listArray="listStage" />
    <h3 id="slides-study">
      {{ $t("heading.slides.study") }}
    </h3>
    <slide-list :listArray="listStudy" />
    <h3 id="slides-write">
      {{ $t("heading.slides.write") }}
    </h3>
    <slide-list :listArray="listWrite" />
    <h3 id="slides-lt">
      {{ $t("heading.slides.lt") }}
    </h3>
    <slide-list :listArray="listLT" />
    <template v-if="listQiita.length">
      <h3 id="slides-qiita">
        Qiita
      </h3>
      <slide-list :listArray="listQiita" />
    </template>
  </section>
</template>

<script>
import SlideList from "~/components/lists/SlideList.vue";

export default {
  components: {
    SlideList
  },
  data() {
    return {
      listQiita: this.$store.state.slide.qiita,
      listStage: this.$store.state.slide.stage,
      listStudy: this.$store.state.slide.study,
      listWrite: this.$store.state.slide.write,
      listLT: this.$store.state.slide.lt
    };
  }
};
</script>
