<template>
  <article id="about:vertical-rhythm" aria-describedby="about:vertical-rhythm_heading">
    <h3 class="anchor-heading" id="about:vertical-rhythm_heading">
      <a class="anchor" href="#about:vertical-rhythm">
        <anchor-icon />
      </a>
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
