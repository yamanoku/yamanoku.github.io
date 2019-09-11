<template>
  <section id="slides" aria-describedby="slides_heading">
    <h2 class="anchor-heading" id="slides_heading">
      <div class="anchor">
        <a href="#slides">
          <anchor-icon />
        </a>
      </div>
      {{ $t("heading.slides.title") }}
    </h2>
    <template v-if="this.$i18n.locale !== 'ja'">
      <em>{{ $t("onlyJPText") }}</em>
    </template>
    <h3 class="anchor-heading" id="slides-stage">
      <div class="anchor">
        <a href="#slides-stage">
          <anchor-icon />
        </a>
      </div>
      {{ $t("heading.slides.stage") }}
    </h3>
    <slide-list :listArray="listStage" />
    <h3 class="anchor-heading" id="slides-study">
      <div class="anchor">
        <a href="#slides-study">
          <anchor-icon />
        </a>
      </div>
      {{ $t("heading.slides.study") }}
    </h3>
    <slide-list :listArray="listStudy" />
    <h3 class="anchor-heading" id="slides-write">
      <div class="anchor">
        <a href="#slides-write">
          <anchor-icon />
        </a>
      </div>
      {{ $t("heading.slides.write") }}
    </h3>
    <slide-list :listArray="listWrite" />
    <h3 class="anchor-heading" id="slides-lt">
      <div class="anchor">
        <a href="#slides-lt">
          <anchor-icon />
        </a>
      </div>
      {{ $t("heading.slides.lt") }}
    </h3>
    <slide-list :listArray="listLT" />
    <h3 class="anchor-heading" id="slides-qiita">
      <div class="anchor">
        <a href="#slides-qiita">
          <anchor-icon />
        </a>
      </div>
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
