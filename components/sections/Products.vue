<template>
  <section id="product" aria-describedby="product_heading">
    <h2 class="anchor-heading" id="product_heading">
      <div class="anchor">
        <a href="#product">
          <anchor-icon />
        </a>
      </div>
      {{ $t("heading.productList") }}
    </h2>
    <a11y-beginner />
    <reading />
    <vue-portfolio />
    <yamanoku-cli />
    <slack-primoji />
    <qiita-code />
    <crowding />
  </section>
</template>

<script>
import A11yBeginner from "~/components/products/A11yBeginner.vue";
import Reading from "~/components/products/Reading.vue";
import VuePortfolio from "~/components/products/VuePortfolio.vue";
import YamanokuCli from "~/components/products/YamanokuCLI.vue";
import SlackPrimoji from "~/components/products/SlackPrimoji.vue";
import QiitaCode from "~/components/products/QiitaCode.vue";
import Crowding from "~/components/products/Crowding.vue";

export default {
  components: {
    A11yBeginner,
    Reading,
    VuePortfolio,
    YamanokuCli,
    SlackPrimoji,
    QiitaCode,
    Crowding
  }
};
</script>
