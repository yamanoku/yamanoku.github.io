<template>
  <section id="slides">
    <h3>
      <a class="anchor" aria-hidden="true" href="#slides">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.title") }}
    </h3>
    <template v-if="this.$i18n.locale !== 'ja'">
      <em>{{ $t("onlyJPText") }}</em>
    </template>
    <h4 id="slides-stage">
      <a class="anchor" aria-hidden="true" href="#slides-stage">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.stage") }}
    </h4>
    <slide-list :listArray="listStage" />
    <h4 id="slides-study">
      <a class="anchor" aria-hidden="true" href="#slides-study">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.study") }}
    </h4>
    <slide-list :listArray="listStudy" />
    <h4 id="slides-write">
      <a class="anchor" aria-hidden="true" href="#slides-write">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.write") }}
    </h4>
    <slide-list :listArray="listWrite" />
    <h4 id="slides-lt">
      <a class="anchor" aria-hidden="true" href="#slides-lt">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.lt") }}
    </h4>
    <slide-list :listArray="listLT" />
    <h4 id="slides-qiita">
      <a class="anchor" aria-hidden="true" href="#slides-qiita">
        <anchor-icon />
      </a>
      Qiita
    </h4>
    <slide-list :listArray="listQiita" />
  </section>
</template>

<script>
import SlideList from "~/components/slides/SlideList.vue";

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
      listLT: this.$store.state.slide.lt,
    };
  }
};
</script>
