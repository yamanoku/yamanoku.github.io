<template>
  <section id="product" aria-labelledby="product_heading">
    <h2 id="product_heading">
      {{ $t("heading.productList") }}
    </h2>
    <vue-a11y-page />
    <a11y-beginner />
    <reading />
    <vue-portfolio />
  </section>
</template>

<script>
import A11yBeginner from "~/components/products/A11yBeginner.vue"
import Reading from "~/components/products/Reading.vue"
import VuePortfolio from "~/components/products/VuePortfolio.vue"
import VueA11yPage from "~/components/products/VueA11yPage.vue"

export default {
  components: {
    A11yBeginner,
    Reading,
    VuePortfolio,
    VueA11yPage
  }
}
</script>
