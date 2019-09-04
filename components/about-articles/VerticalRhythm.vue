<template>
  <article id="vertical-rhythm">
    <h4>
      <a class="anchor" aria-hidden="true" href="#vertical-rhythm">
        <anchor-icon />
      </a>
      {{$t("aboutPage.subHeading.verticalRhythm")}}
    </h4>
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
