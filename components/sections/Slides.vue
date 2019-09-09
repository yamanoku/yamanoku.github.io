<template>
  <section id="slides">
    <h2 class="anchor-heading">
      <a class="anchor" href="#slides">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.title") }}
    </h2>
    <template v-if="this.$i18n.locale !== 'ja'">
      <em>{{ $t("onlyJPText") }}</em>
    </template>
    <h3 class="anchor-heading" id="slides-stage">
      <a class="anchor" href="#slides-stage">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.stage") }}
    </h3>
    <slide-list :listArray="listStage" />
    <h3 class="anchor-heading" id="slides-study">
      <a class="anchor" href="#slides-study">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.study") }}
    </h3>
    <slide-list :listArray="listStudy" />
    <h3 id="slides-write">
      <a class="anchor" href="#slides-write">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.write") }}
    </h3>
    <slide-list :listArray="listWrite" />
    <h3 class="anchor-heading" id="slides-lt">
      <a class="anchor" href="#slides-lt">
        <anchor-icon />
      </a>
      {{ $t("heading.slides.lt") }}
    </h3>
    <slide-list :listArray="listLT" />
    <h3 class="anchor-heading" id="slides-qiita">
      <a class="anchor" href="#slides-qiita">
        <anchor-icon />
      </a>
      Qiita
    </h3>
    <slide-list :listArray="listQiita" />
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
