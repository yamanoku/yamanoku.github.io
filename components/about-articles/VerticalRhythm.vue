<template>
  <article id="about:vertical-rhythm" aria-labelledby="about:vertical-rhythm_heading">
    <h3 id="about:vertical-rhythm_heading">
      {{$t("aboutPage.subHeading.verticalRhythm")}}
    </h3>
    <p>{{$t("aboutPage.verticalRhythm.desc01")}}</p>
    <p>{{$t("aboutPage.verticalRhythm.desc02")}}</p>
    <switch-rhythm-btn />
  </article>
</template>

<script>
import SwitchRhythmBtn from "~/components/buttons/SwitchRhythmBtn.vue";

export default {
  components: {
    SwitchRhythmBtn
  }
};
</script>
