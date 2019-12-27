<template>
  <section id="product" aria-labelledby="product_heading">
    <h2 id="product_heading">
      {{ $t("heading.productList") }}
    </h2>
    <a11y-beginner />
    <reading />
    <vue-portfolio />
    <yamanoku-cli />
    <qiita-code />
    <crowding />
  </section>
</template>

<script>
import A11yBeginner from "~/components/products/A11yBeginner.vue";
import Reading from "~/components/products/Reading.vue";
import VuePortfolio from "~/components/products/VuePortfolio.vue";
import YamanokuCli from "~/components/products/YamanokuCLI.vue";
import Crowding from "~/components/products/Crowding.vue";

export default {
  components: {
    A11yBeginner,
    Reading,
    VuePortfolio,
    YamanokuCli,
    Crowding
  }
};
</script>
