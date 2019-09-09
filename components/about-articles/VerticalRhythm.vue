<template>
  <article id="vertical-rhythm">
    <h3 class="anchor-heading">
      <a class="anchor" href="#vertical-rhythm">
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
