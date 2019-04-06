<template>
  <div>
    <header-component/>
    <main>
      <h2>{{ $t("name") }}</h2>
      <h3>{{ $t("heading.job") }}</h3>
      <job-info-component/>
      <h3>{{ $t("heading.basic") }}</h3>
      <basic-info-component/>
      <h3>{{ $t("heading.career") }}</h3>
      <career-info-component/>
      <h3>{{ $t("heading.productList") }}</h3>
      <product-list-component/>
      <h3>{{ $t("heading.sns") }}</h3>
      <sns-component/>
      <h3>{{ $t("heading.contact") }}</h3>
      <address-component/>
    </main>
    <nav>
      <h3>{{ $t("multilingual")}}</h3>
      <ul>
        <li v-for="locale in $i18n.locales" :key="locale.code">
          <nuxt-link :to="switchLocalePath(locale.code)">{{ locale.name }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import HeaderComponent from "~/components/Header.vue";
import JobInfoComponent from "~/components/JobInfo.vue";
import BasicInfoComponent from "~/components/BasicInfo.vue";
import CareerInfoComponent from "~/components/CareerInfo.vue";
import ProductListComponent from "~/components/ProductList.vue";
import SnsComponent from "~/components/Sns.vue";
import AddressComponent from "~/components/Address.vue";

export default {
  components: {
    HeaderComponent,
    JobInfoComponent,
    BasicInfoComponent,
    CareerInfoComponent,
    ProductListComponent,
    SnsComponent,
    AddressComponent
  }
};
</script>

<style>
main {
  max-width: 980px;
  margin: auto;
  padding: 0 10px 10px;
}
nav {
  max-width: 980px;
  margin: auto;
  padding: 0 10px 20px;
}
</style>
