<template>
  <main role="main" id="main">
    <h1>yamanoku.net</h1>
    <basic-info-component />
    <career-info-component />
    <products-component />
    <slides-component />
    <sns-component />
    <address-component />
    <local-switch-component />
  </main>
</template>

<script>
import BasicInfoComponent from "~/components/sections/BasicInfo.vue";
import CareerInfoComponent from "~/components/sections/CareerInfo.vue";
import ProductsComponent from "~/components/sections/Products.vue";
import SlidesComponent from "~/components/sections/Slides.vue";
import SnsComponent from "~/components/sections/Sns.vue";
import AddressComponent from "~/components/sections/Address.vue";
import LocalSwitchComponent from "~/components/common/LocalSwitch.vue";

export default {
  components: {
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

