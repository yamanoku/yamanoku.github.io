<template>
  <main id="main">
    <h1>yamanoku.net</h1>
    <basic-info-component />
    <job-info-component />
    <career-info-component />
    <products-component />
    <slides-component />
    <sns-component />
    <address-component />
    <local-switch-component />
  </main>
</template>

<script>
import JobInfoComponent from "~/components/sections/JobInfo.vue";
import BasicInfoComponent from "~/components/sections/BasicInfo.vue";
import CareerInfoComponent from "~/components/sections/CareerInfo.vue";
import ProductsComponent from "~/components/sections/Products.vue";
import SlidesComponent from "~/components/sections/Slides.vue";
import SnsComponent from "~/components/sections/Sns.vue";
import AddressComponent from "~/components/sections/Address.vue";
import LocalSwitchComponent from "~/components/common/LocalSwitch.vue";

export default {
  head() {
    return {
      bodyAttrs: {
        class: this.$store.state.rhythm.toggleRhythm ? "is-rhythm" : ""
      }
    };
  },
  components: {
    JobInfoComponent,
    BasicInfoComponent,
    CareerInfoComponent,
    ProductsComponent,
    SlidesComponent,
    SnsComponent,
    AddressComponent,
    LocalSwitchComponent,
  }
};
</script>

