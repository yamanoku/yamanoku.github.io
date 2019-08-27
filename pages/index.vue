<template>
  <main>
    <h2>yamanoku.net</h2>
    <nuxt-link :to="localePath({ name: 'about'})">{{$t("aboutPage.title")}}</nuxt-link>
    <basic-info-component />
    <job-info-component />
    <career-info-component />
    <product-list-component />
    <slides-component />
    <sns-component />
    <address-component />
  </main>
</template>

<script>
import JobInfoComponent from "~/components/JobInfo.vue";
import BasicInfoComponent from "~/components/BasicInfo.vue";
import CareerInfoComponent from "~/components/CareerInfo.vue";
import ProductListComponent from "~/components/ProductList.vue";
import SlidesComponent from "~/components/Slides.vue";
import SnsComponent from "~/components/Sns.vue";
import AddressComponent from "~/components/Address.vue";

export default {
  components: {
    JobInfoComponent,
    BasicInfoComponent,
    CareerInfoComponent,
    ProductListComponent,
    SlidesComponent,
    SnsComponent,
    AddressComponent,
  }
};
</script>

